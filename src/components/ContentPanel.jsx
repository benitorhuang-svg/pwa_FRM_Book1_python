import { useEffect, useMemo, memo } from 'react'
import { Marked } from 'marked'
import markedKatex from 'marked-katex-extension'
import DOMPurify from 'dompurify'
import './ContentPanel.css'
import './WelcomeScreen.css'

// Configure KaTeX extension with proper delimiters
// Create a dedicated Marked instance to avoid global state pollution and HMR issues
const marked = new Marked(
  markedKatex({
    throwOnError: false,
    output: 'html',
    nonStandard: true // Ensure $ delimiters are enabled
  })
)

const ContentPanel = memo(({ chapter, onCodeClick, selectedTopicId, output, isRunning, plotImages }) => {
  // Use useMemo to prevent expensive markdown parsing on every re-render (like when resizing)
  const renderedContent = useMemo(() => {
    if (!chapter) return null

    const intro = chapter.content?.intro
    if (intro) {
      let rawMarkdown = ""

      if (typeof intro === 'string') {
        rawMarkdown = intro
      } else if (typeof intro === 'object') {
        // Reconstruct markdown from structured object
        rawMarkdown = `# ${intro.title || ''}\n\n`

        // Roadmap
        if (intro.roadmap) {
          if (intro.roadmap.guide) rawMarkdown += `## 📌 章節導覽\n${intro.roadmap.guide}\n\n`
          if (intro.roadmap.objectives) rawMarkdown += `## 🎯 學習目標\n${intro.roadmap.objectives}\n\n`
          if (intro.roadmap.topics) rawMarkdown += `## 📋 章節重點分明\n${intro.roadmap.topics}\n\n`
        }

        // Value
        if (intro.value) {
          if (intro.value.practical) rawMarkdown += `## 💼 FRM 考試與實務連結\n${intro.value.practical}\n\n`
          if (intro.value.theory) rawMarkdown += `## 🏛️ 財金理論深度解析\n${intro.value.theory}\n\n`
          if (intro.value.further_reading) rawMarkdown += `## 🚀 延伸閱讀與進階議題\n${intro.value.further_reading}\n\n`
        }

        // Implementation
        if (intro.implementation) {
          if (intro.implementation.python) rawMarkdown += `## 🐍 Python 實踐價值\n${intro.implementation.python}\n\n`
          if (intro.implementation.logic) rawMarkdown += `## ⚙️ 代碼核心邏輯\n${intro.implementation.logic}\n\n`
          if (intro.implementation.scenarios) rawMarkdown += `## 💻 應用場景清單\n${intro.implementation.scenarios}\n\n`
        }

        // Detailed Content
        if (intro.body) {
          rawMarkdown += `\n## 📝 章節重點詳細解說的內容\n${intro.body}`
        }
      }

      // Hide Scenarios from main flow as they might be handled differently or just kept here
      rawMarkdown = rawMarkdown.replace(
        /##\s*💻\s*應用場景清單[\s\S]*?(?=##|$)/g,
        ''
      )

      // Pre-process for KaTeX: Ensure proper spacing around math delimiters
      rawMarkdown = rawMarkdown
        .replace(/\s*\$\$\s*/g, '\n$$\n')
        .replace(/(?<!\$)\$(?!\$)\s*(.*?)\s*(?<!\$)\$(?!\$)/g, '$$$1$')

      let rawHtml = marked.parse(rawMarkdown)

      // Inject IDs into <h3> tags for anchoring
      rawHtml = rawHtml.replace(/<h3>(.*?)<\/h3>/g, (match, title) => {
        const textOnly = title.replace(/<[^>]*>/g, '').trim()
        const id = 'topic-' + textOnly.replace(/\s+/g, '-').toLowerCase()
        return `<h3 id="${id}">${title}</h3>`
      })

      const cleanHtml = DOMPurify.sanitize(rawHtml, {
        ADD_TAGS: [
          'math', 'annotation', 'semantics', 'mrow', 'msub', 'msup', 'msubsup', 'mover', 'munder', 'munderover',
          'mmultiscripts', 'mprec', 'mnext', 'mtable', 'mtr', 'mtd', 'mfrac', 'msqrt', 'mroot', 'mstyle', 'merror',
          'mpadded', 'mphantom', 'mfenced', 'menclose', 'ms', 'mglyph', 'maligngroup', 'malignmark', 'maction',
          'svg', 'path', 'use', 'span', 'div'
        ],
        ADD_ATTR: ['id', 'target', 'xlink:href', 'class', 'style', 'aria-hidden', 'viewBox', 'd', 'fill', 'stroke', 'stroke-width', 'data-filename']
      })

      let processedHtml = cleanHtml
      const scripts = chapter.examples || []
      const sortedScripts = [...scripts].sort((a, b) => b.filename.length - a.filename.length)

      sortedScripts.forEach((script) => {
        const escapedName = script.filename.replace('.', '\\.')
        const regex = new RegExp(`(?<!['".\\w])(${escapedName})(?!['".\\w])`, 'g')

        processedHtml = processedHtml.replace(
          regex,
          `<span class="code-link" data-filename="${script.filename}">${script.filename}</span>`
        )
      })

      return processedHtml
    } else {
      const examples = chapter.examples || []
      let html = `
        <div class="chapter-intro">
          <h2>${chapter.title}</h2>
          <p>本章包含 ${examples.length} 個程式範例</p>
          <div class="example-grid">
      `

      examples.forEach((example, index) => {
        html += `
          <div class="example-card">
            <div class="example-number">${index + 1}</div>
            <div class="example-info">
              <h3>${example.title}</h3>
              <span class="code-link" data-filename="${example.filename}">${example.filename}</span>
            </div>
          </div>
        `
      })

      html += `
          </div>
        </div>
      `
      return html
    }
  }, [chapter])

  useEffect(() => {
    const handleCodeLinkClick = (e) => {
      if (e.target.classList.contains('code-link')) {
        const filename = e.target.dataset.filename
        let script = null

        if (chapter?.examples) {
          script = chapter.examples.find(s => s.filename === filename)
          if (script && !script.metadata) {
            script.metadata = { description: script.title }
          }
        }

        if (script) {
          onCodeClick(script)
        }
      }
    }

    document.addEventListener('click', handleCodeLinkClick)
    return () => document.removeEventListener('click', handleCodeLinkClick)
  }, [chapter, onCodeClick])

  // Auto-scroll to top when chapter changes
  useEffect(() => {
    const scrollContainer = document.querySelector('.content-scroll')
    if (scrollContainer) {
      scrollContainer.scrollTop = 0
    }
  }, [chapter])

  // Auto-scroll to topic when selectedTopicId changes
  useEffect(() => {
    if (selectedTopicId) {
      const element = document.getElementById(selectedTopicId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [selectedTopicId])

  // Auto-scroll to top when output result appears
  useEffect(() => {
    if (output || (plotImages && plotImages.length > 0) || isRunning) {
      const scrollContainer = document.querySelector('.content-scroll')
      if (scrollContainer) {
        // Use scrollTo for smooth or instant reset
        scrollContainer.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
  }, [output, plotImages, isRunning])

  return (
    <div className="content-panel">
      <div className="content-scroll">
        {/* We keep Markdown content ALWAYS rendered if it exists, 
            but hide it when output is shown to maintain scroll position if needed,
            OR just exclusive view as before but now memoized. */}
        {(output || (plotImages && plotImages.length > 0) || isRunning) ? (
          <div id="execution-output" className="execution-output-section">
            {isRunning && (
              <div className="running-indicator">
                <div className="spinner"></div>
                <span>程式執行中...</span>
              </div>
            )}

            {output && (
              <pre className="output-text">{output}</pre>
            )}

            {plotImages && plotImages.length > 0 && (
              <div className="output-images">
                {plotImages.map((img, index) => (
                  <div key={index} className="output-image">
                    <img src={img} alt={`Plot ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          renderedContent ? (
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />
          ) : (
            <div className="welcome-screen">
              <div className="welcome-card premium-welcome">
                <div className="welcome-brand">
                  <img src="book-cover.jpg" alt="FRM Python 理論與實戰" className="welcome-book-img" />
                  <a
                    href="https://deepwisdom.com.tw/product/%e6%89%8b%e8%a1%93%e5%88%80%e8%88%ac%e7%b2%be%e6%ba%96%e7%9a%84frm-%e7%94%a8python%e7%a7%91%e5%ad%b8%e7%ae%a1%e6%8e%a7%e8%b2%a1%e9%87%91%e9%a2%a8%e9%9a%aa%e5%9f%ba%e7%a4%8e%e7%af%87dm2301/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="welcome-purchase-btn"
                  >
                    [ 本書官網購買連結 ]
                  </a>
                </div>
                <div className="welcome-content">
                  <h2 className="welcome-title">手術刀般精準的 FRM 用 Python<br />科學管控財金風險：基礎篇</h2>
                  <div className="welcome-slogan">☆★☆★【有如手術刀般精準！利用Python幫你管控財金風險！】★☆★☆</div>

                  <div className="welcome-text-scroll">
                    <p>本書使用了當紅的程式語言 Python，從程式設計的基本觀念談起。沒有 Python 基礎也沒關係，完整的 Python 介紹，讓您能順利銜接資料科學家最常用的套件整理，包括 Numpy，以及特別針對格式化表格類處理的 Pandas，也充分介紹了 Dataframe 的各種應用。</p>
                    <p>在有了充足的資料之後，接著需要有可以展示數據的工具。除了大家最愛用的 Matplotlib 之外，也介紹了高手才會用的 Seaborn。當熟悉了工具之後，就正式進入了金融理論，包括基礎的機率及統計、各種模型及機率分佈，以及抽樣、信賴區間等內容說明。</p>
                    <p>最後則進入到金融領域，除了介紹各種計算的演算法、模型、術語，也結合了前面所學的 Python 及工具，並講解金融商品最重要的「固定收益分析」。</p>
                    <p>本書從科學下手，讓您精準了解金融原理，確保金錢不再陷入水深火熱之中，將是您從科學到金融領域最重要的橋樑。</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
})

export default ContentPanel
