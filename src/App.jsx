import { useState, useEffect, lazy, Suspense } from 'react'
import TopNav from './components/TopNav'
import ContentPanel from './components/ContentPanel'
const CodePreviewPanel = lazy(() => import('./components/CodePreviewPanel'))
import PythonRunner from './components/PythonRunner'
// import ReloadPrompt from './components/ReloadPrompt' // Removed
import { Book, Moon, Sun } from 'lucide-react'
import { loadPyodide, cleanupPyodide, runPythonWithTimeout } from './utils/pyodide-loader'
import { captureAllPlots, initMatplotlib, ensurePlotsShown } from './utils/matplotlib-handler.js'
import { formatPythonError } from './utils/error-handler'
import { perfMonitor, reportWebVitals } from './utils/performance'
import './App.css'

function App() {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState('初始化中...')

  // Chapter Data State
  const [chapters, setChapters] = useState([])
  const [chaptersLoading, setChaptersLoading] = useState(true)
  const [currentChapter, setCurrentChapter] = useState(null)
  const [currentScript, setCurrentScript] = useState(null)

  const [output, setOutput] = useState('')
  const [plotImages, setPlotImages] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  const [previewPanelWidth, setPreviewPanelWidth] = useState(500)

  // Fetch Chapters
  useEffect(() => {
    setChaptersLoading(true)
    const url = `${import.meta.env.BASE_URL}data/chapters.json?t=${Date.now()}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setChapters(data)
          // Optionally auto-select first chapter? No, let user choose.
        }
        setChaptersLoading(false)
      })
      .catch(err => {
        console.error('Failed to load chapters:', err)
        setChaptersLoading(false)
      })
  }, [])

  useEffect(() => {
    loadPyodide((progress, message) => {
      setLoadingProgress(progress)
      setLoadingMessage(message)
    }).then(py => {
      setPyodide(py)
      setLoading(false)
      initMatplotlib(py)
      perfMonitor.end('pyodide-init')
    })

    reportWebVitals()

    // Service Worker & Storage Quota Checks
    const cleanups = []

    if ('serviceWorker' in navigator) {
      // Check for updates periodically
      const updateInterval = setInterval(() => {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => registration.update())
        })
      }, 60 * 60 * 1000) // Check every hour

      // Listen for controller change (new worker activated)
      const handleControllerChange = () => {
        if (!document.hidden) {
          // Only prompt if user is likely active
          console.log('New Service Worker activated.')
        }
      }
      navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange)

      cleanups.push(() => {
        clearInterval(updateInterval)
        navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange)
      })
    }

    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const checkQuota = async () => {
        try {
          const estimate = await navigator.storage.estimate()
          if (estimate.usage && estimate.quota) {
            const percentUsed = (estimate.usage / estimate.quota) * 100
            console.log(`Storage usage: ${percentUsed.toFixed(2)}%`)
            if (percentUsed > 80) {
              console.warn('Storage usage is high (>80%). Consider cleaning up.')
            }
          }
        } catch (e) {
          console.warn('Failed to check storage quota:', e)
        }
      }

      // Check initially and every 5 minutes
      checkQuota()
      const quotaInterval = setInterval(checkQuota, 5 * 60 * 1000)

      cleanups.push(() => clearInterval(quotaInterval))
    }

    return () => {
      cleanups.forEach(fn => fn())
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleRunCode = async (code) => {
    if (!pyodide || isRunning || !code) return

    perfMonitor.start('run-code')
    setIsRunning(true)
    setOutput('執行中...\n')
    setPlotImages([])

    try {
      // Robustness: Cleanup before run
      await cleanupPyodide(pyodide)

      const interactive = code.includes('matplotlib.widgets') || code.includes('Slider') || code.includes('Button')
      setIsInteractive(interactive)

      await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `)

      await initMatplotlib(pyodide, interactive)

      if (interactive) {
        const target = document.getElementById('pyodide-plot-container')
        if (target) {
          target.innerHTML = ''
          window.document.pyodideMplTarget = target
        }
      }

      const imports = code.match(/^\s*(?:from|import)\s+([a-zA-Z0-9_]+)/gm)
      if (imports) {
        const stdLibs = [
          'sys', 'io', 'base64', 'time', 'math', 're', 'json', 'datetime', 'random', 'os',
          'fractions', 'decimal', 'abc', 'collections', 'itertools', 'functools', 'importlib',
          'timeit'
        ]
        const scientific = [
          'pymoo', 'numpy_financial', 'pandas_datareader', 'seaborn', 'openpyxl', 'setuptools', 'pyodide_http',
          'QuantLib', 'quantlib', 'numpy', 'pandas', 'matplotlib', 'scipy', 'statsmodels', 'sympy', 'autograd', 'lxml', 'micropip'
        ]
        const packages = imports.map(line => line.split(/\s+/).pop())
          .filter(pkg => ![...stdLibs, ...scientific].includes(pkg))

        if (packages.length > 0) {
          try {
            setOutput(prev => prev + `正在安裝所需套件: ${packages.join(', ')}...\n`)
            await pyodide.runPythonAsync(`
              import micropip
              await micropip.install(${JSON.stringify(packages)})
            `)
          } catch (e) {
            console.warn('Package installation failed:', e)
            setOutput(prev => prev + `⚠️ 部分套件安裝失敗，嘗試直接執行...\n`)
          }
        }
      }

      try {
        // Robustness: Use timeout wrapper
        await runPythonWithTimeout(pyodide, code)
      } catch (error) {
        const partialStdout = await pyodide.runPythonAsync('sys.stdout.getvalue()')
        const formattedError = formatPythonError(error)
        setOutput((partialStdout ? partialStdout + '\n' : '') + formattedError)
        setIsRunning(false)
        perfMonitor.end('run-code')
        return
      }

      const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()')
      setOutput(stdout || '執行完成（無輸出）')

      if (isInteractive) {
        await ensurePlotsShown(pyodide)
      } else {
        const images = await captureAllPlots(pyodide)
        setPlotImages(images)
      }

    } catch (error) {
      const friendlyError = formatPythonError(error)
      setOutput(friendlyError)
      console.error(error)
    } finally {
      setIsRunning(false)
      perfMonitor.end('run-code')
    }
  }

  const handleChapterSelect = (chapter) => {
    setCurrentChapter(chapter)
    setCurrentScript(null)
    setOutput('')
    setPlotImages([])
  }

  const handleCodeClick = (script) => {
    setCurrentScript(script)
    setOutput('')
    setPlotImages([])
  }

  const handleScriptSelect = (script) => {
    setCurrentScript(script)
    setOutput('')
    setPlotImages([])
  }

  const handleClosePreview = () => {
    setCurrentScript(null)
    setOutput('')
    setPlotImages([])
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>正在載入 Python 執行環境...</h2>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="loading-text">{loadingMessage} ({loadingProgress}%)</p>
          <p className="loading-hint">首次載入需要下載約 10MB 的資源，請稍候</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar removed */}

      <div className="main-content">
        <div className="top-bar">
          <div className="top-bar-left">
            <Book size={20} className="logo-icon" />
            <span className="app-title">FRM Python</span>
          </div>

          <TopNav
            chapters={chapters}
            currentChapter={currentChapter}
            onChapterSelect={handleChapterSelect}
            currentScript={currentScript}
            onScriptSelect={handleScriptSelect}
            loading={chaptersLoading}
          />

          <div className="top-bar-right">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? '切換到亮色模式' : '切換到暗色模式'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="panes-container">
          <div className="content-pane">
            <ContentPanel
              chapter={currentChapter}
              onCodeClick={handleCodeClick}
              darkMode={darkMode}
              output={output}
              isRunning={isRunning}
              plotImages={plotImages}
            />
          </div>

          {currentScript && (
            <div className="preview-pane" style={{ width: `${previewPanelWidth}px` }}>
              <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#888' }}>Loading Editor...</div>}>
                <CodePreviewPanel
                  script={currentScript}
                  onClose={handleClosePreview}
                  onRun={handleRunCode}
                  isRunning={isRunning}
                  output={output}
                  images={plotImages}
                  isInteractive={isInteractive}
                  darkMode={darkMode}
                  width={previewPanelWidth}
                  onResize={setPreviewPanelWidth}
                />
              </Suspense>
            </div>
          )}
        </div>
      </div>

      <PythonRunner pyodide={pyodide} />
    </div>
  )
}

export default App
