import { useState } from 'react'
import { Play, Copy, X, Maximize2, Minimize2 } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './CodePreviewPanel.css'

function CodePreviewPanel({
  script,
  onClose,
  onRun,
  isRunning,
  output,
  images,
  isInteractive,
  darkMode,
  width,
  onResize
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  if (!script) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(script.code)
    // TODO: 顯示複製成功提示
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    e.preventDefault()
  }

  const handleMouseMove = (e) => {
    if (isDragging && onResize) {
      const newWidth = window.innerWidth - e.clientX
      if (newWidth > 300 && newWidth < window.innerWidth * 0.7) {
        onResize(newWidth)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // 添加全局事件監聽
  if (isDragging) {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  } else {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  return (
    <>
      <div
        className={`resizer ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
      />
      <div className="code-preview-panel">
        <div className="preview-content">
          <div className="code-section">
            <div className="code-header">
              <div className="header-left">
                <span>程式碼</span>
              </div>

              <div className="header-right">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleCopy}
                  title="複製程式碼"
                >
                  <Copy size={16} />
                  <span>複製</span>
                </button>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onRun(script.code)}
                  disabled={isRunning}
                >
                  <Play size={16} />
                  {isRunning ? '執行中...' : '執行'}
                </button>

                <div className="divider-vertical"></div>

                <button className="icon-btn close-btn" onClick={onClose} title="關閉">
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="code-display">
              <SyntaxHighlighter
                language="python"
                style={darkMode ? vscDarkPlus : vs}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  background: 'transparent'
                }}
                showLineNumbers
              >
                {script.code}
              </SyntaxHighlighter>
            </div>
          </div>
          {/* Output Section Removed (Moved to FloatingOutput) */}
        </div>
      </div>
    </>
  )
}

export default CodePreviewPanel
