# 專案結構

## 目錄組織

```
pwa_Book1_python/
├── public/                     # 靜態資源（直接提供）
│   ├── data/
│   │   └── chapters.json       # 自動生成的章節資料
│   ├── icons/                  # PWA 圖示（72x72 到 512x512）
│   ├── lib/                    # 自託管 Pyodide 核心檔案 (Local Hosting)
│   ├── wheels/                 # 離線套件的 Python wheel 檔案
│   ├── coi-serviceworker.js    # 跨來源隔離 worker
│   ├── book-cover.jpg          # 書籍封面圖片
│   └── _headers                # Netlify 標頭配置
├── src/                        # React 應用程式原始碼
│   ├── components/             # React 元件
│   ├── hooks/                  # 自訂 React hooks
│   ├── utils/                  # 工具函數
│   ├── App.jsx                 # 主應用程式元件 (Layout & Routing)
│   ├── App.css                 # 應用程式佈局樣式
│   ├── main.jsx                # React 入口點
│   ├── index.css               # 全域樣式 (Tailwind/Variables)
│   └── config.js               # 應用程式配置
├── scripts/                    # 建置和工具腳本
│   ├── build-chapters.py       # 生成 chapters.json
│   ├── generate-icons.py       # 生成 PWA 圖示
│   └── migrate_intro.py        # 章節結構遷移腳本
├── SDD/                        # 軟體設計文件
│   ├── spec._context.md        # 功能規格 (Functional Spec)
│   ├── tech_context.md         # 技術實施 (Technical Context)
│   └── ui_design_context.md    # UI/UX 設計規範
├── dist/                       # 生產建置輸出（自動生成）
├── node_modules/               # NPM 相依套件（自動生成）
├── package.json                # NPM 配置
├── vite.config.js              # Vite 建置配置
├── eslint.config.js            # ESLint 配置
├── ruff.toml                   # Python 檢查工具配置
└── README.md                   # 專案文件
```

## 元件架構

### 核心元件 (`src/components/`)

- **TopNav.jsx** - 頂部導航列，包含章節/重點/腳本選擇 (Glassmorphism)
- **ContentPanel.jsx** - 左側閱讀面板，負責 Markdown/KaTeX 渲染與自動捲動
- **CodePreviewPanel.jsx** - 右側代碼面板，包含 Resizer、Monaco 編輯器與輸出區
- **CodeEditor.jsx** - Monaco Editor 的 React 封裝
- **OutputPanel.jsx** - 標準輸出 (stdout) 與 Matplotlib 圖表顯示區
- **FloatingOutput.jsx** - [已棄用/備用] 獨立浮動視窗
- **PythonRunner.jsx** - 無渲染組件，負責管理 Pyodide 實例與執行緒
- **LoadingProgress.jsx** - 顯示載入進度條 (Overlay / Inline)
- **Skeleton.jsx** - 內容載入中的骨架屏
- **WelcomeScreen.css** - 歡迎頁面專用樣式

### 工具模組 (`src/utils/`)

- **pyodide-loader.js** - **[核心]** 混合式載入器 (Hybrid Loader)，管理 Sequential Fetching 與 IDBFS
- **python-shims.js** - **[核心]** Python 相容性層 (QuantLib Mock, Pymoo Shim)
- **matplotlib-handler.js** - 攔截 Pyodide 繪圖指令並轉換為 Base64 圖片
- **storage.js** - IndexedDB 操作封裝 (LocalForage)，處理進度與代碼存檔
- **error-handler.js** - Python 錯誤堆疊解析與友善訊息格式化
- **performance.js** - 效能監控 (Web Vitals)

### 自訂 Hooks (`src/hooks/`)

- **useAutoSave.js** - 編輯器內容變更的防抖 (Debounce) 自動儲存機制

## 關鍵架構模式

### 1. 混合式載入 (Hybrid Loading)

- **Sequential Fetching**: 依序下載核心套件，提供精確進度回報。
- **IDBFS Persistence**: 將 `/site-packages` 掛載至 IndexedDB，實現秒級熱啟動 (Warm Start)。
- **Triple-Layer Guard**: 硬排除/核心鎖定/動態緩存三層機制確保依賴穩定。

### 2. 狀態管理

- **React Hooks**: 使用 `useState`, `useReducer` 管理 UI 狀態。
- **Props Drilling**: 透過 `App.jsx` 作為中心樞紐傳遞狀態。
- **Event Bus**: 部分跨組件通訊 (如 Run Code 觸發) 使用 Props 回調。

### 3. 資料流

1.  **初始化**: `App.jsx` 載入 `chapters.json` → 初始化 `TopNav`。
2.  **導航**: 使用者選擇重點 (Topic) → `ContentPanel` 觸發 `scrollTo`。
3.  **執行**: 使用者點擊 Run → `App.jsx` 調用 `PythonRunner` → `pyodide-loader` 執行 → `OutputPanel` 更新。

### 4. 樣式系統

- **CSS Variables**: 定義於 `index.css` (如 `--glass-bg`, `--accent-color`)。
- **Glassmorphism**: 廣泛應用於面板容器與導航列。
- **Responsive**: 768px 斷點切換 Grid (Desktop) / Column (Mobile) 佈局。

## 建置產物

### 生產環境 (`dist/`)

- **Vendor Chunking**: 依賴包分離 (React, Monaco, Pyodide)。
- **Service Worker**: `sw.js` (由 `vite-plugin-pwa` 生成)，負責 COI 標頭注入與資源預快取。
- **Asset Handling**: 靜態資源 (含 .whl) 採用 Cache-First 策略。
