# 完整功能規格說明書 (Comprehensive Functional Specification)

## 1. 專案概要 (Project Summary)

本專案為 **FRM Python 互動式學習平台 PWA**，是個專為學習金融風險管理（FRM）設計的互動式 Progressive Web App。本平台讓使用者能夠直接在瀏覽器中執行 Python 程式碼，為《手術刀般精準的 FRM 用 Python 科學管控財金風險：基礎篇》一書提供沉浸式的學習體驗。

## 2. 核心價值主張 (Core Value Propositions)

- **瀏覽器即環境**：無需安裝 Python 或任何 IDE，完全在瀏覽器中運行。
- **隨處學習**：支持 PWA，可安裝至手機/桌面，並具備強大的離線使用能力。
- **專業級編輯體驗**：整合 VS Code 同款 Monaco 編輯器，提供語法高亮與自動完成。
- **科學運算視覺化**：原生支持 NumPy, Pandas 與 Matplotlib，可即時捕捉並顯示金融模型圖表。
- **無縫進度追蹤**：利用 IndexedDB 實現自動儲存，確保學習進度不遺失。

## 3. 目標使用者 (Target Users)

- 姜偉生博士與塗升博士所著《FRM Python 系列》書籍的讀者。
- 希望透過 Python 實踐金融風險管理模型的學生與專業金融從業人員。

## 4. 詳細功能需求 (Detailed Functional Requirements)

### 4.1 Python 執行環境 (Pyodide Engine)

- **核心引擎**：基於 Pyodide 0.26.4。
- **效能優化**：採用 **Hybrid Loading Architecture**，結合 `Sequential Fetching` 與 `IndexedDB Persistence`，實現首次加載穩定回報與二次加載即時啟動 (Instant Warm Start)。
- **科學套件支援**：必須預裝並支援 NumPy, Pandas, Matplotlib, SciPy, Statsmodels, SymPy, Seaborn, Pymoo 等金融工程與數據分析必備套件。
- **圖表捕捉**：需具備自定義 Handler，截獲 `matplotlib.pyplot.show()` 調用，並將產出的 Canvas 渲染為網頁中的可視化組件（支援下載為圖檔）。
- **執行保護**：
  - **超時機制**：預設 30 秒執行限制，防止死循環導致瀏覽器掛起。
  - **記憶體管理**：每次執行前自動清理上一輪的全局變數與繪圖緩存。

### 4.2 互動式編輯器 (Monaco Editor)

- **基礎功能**：語法高亮 (Python)、代碼縮進、括號匹配、代碼摺疊。
- **智能力**：基本的 IntelliSense 自動完成建議。
- **自定義配置**：支援切換深色 (Dark) 與淺色 (Light) 主題，風格與應用整體 UI 保持一致。

### 4.3 PWA 與離線功能

- **可安裝性**：需符合 Web App Manifest 規範，提供完整的圖示 (72x72 至 512x512)。
- **混合式 Service Worker 架構**：
  - **Workbox Pre-caching**: 預先快取核心 JS 包、CSS 與靜態資源，確保離線可用。
  - **COI 標頭注入**: Service Worker 攔截請求並注入 `Cross-Origin-Opener-Policy` 與 `Cross-Origin-Embedder-Policy` 標頭，為 Pyodide 提供 SharedArrayBuffer 支援。
- **離線狀態指示**：在離線時能正常顯示已緩存的章節與範例程式碼。

### 4.4 學習追蹤與導航 (Navigation & Tracking)

- **頂部導航 (Top-bar Navigation)**：
  - **章節選單 (Chapter Selection)**：透過頂部下拉式選單切換章節。
  - **重點導覽 (Topic Navigation)**：新增「重點導覽」下拉選單，自動解析內容中的 H3 標題，支援快速跳轉至特定知識點。
  - **程式碼快選 (Code Selection)**：選定章節後，可透過第三個下拉選單直接選擇特定的範例程式碼。
- **自動儲存**：在編輯器內容變更後 1000ms 執行防抖儲存，將代碼持久化至 IndexedDB 的 `code` 倉庫。
- **進度標記**：記錄使用者已完成或已閱讀範例。

### 4.5 主頁內容格式 (Home Content Format)

- **標識識別**：頂部導航欄左側顯示 `FRM_Book1 (基礎篇)` 及書籍圖示。
- **內容構成**：
  - **歡迎標題與視覺**：採用「左圖右文」的精緻佈局。左側展示書籍立體封面與購買連結，右側展示歡迎標語與內容導讀。
  - **輔助說明**：`👈 請從上方選擇章節開始學習`。
  - **狀態反饋**：顯示 Pyodide 核心套件載入進度與 IndexedDB 狀態（於背景以 Glassmorphism 疊層顯示）。

### 4.6 章節內容排版規範 (Chapter Content Layout)

內容結構嚴格遵循 `chapters.json` 的多級標題與圖示化編排：

- **一級標題 (#)**：章節全名（如：`# 第 1 章：程式設計初階 - 重點詳解`）。
- **二級標題 (##) - 標準化功能區塊 (三層架構編排)**：
  - **第一層：章節導讀區 (The Roadmap)**
    - `## 📌 章節導覽`：定義學習路徑建議。
    - `## 🎯 學習目標`：定義本章結束後應掌握的能力。
    - `## 📋 章節重點分明`：快速掃描核心知識點。
  - **第二層：實務價值區 (The Value)**
    - `## 💼 實務應用說明` / `## 💼 FRM 考試與實務連結`：對接職場與考試。
    - `## 🏛️ 財金理論深度解析`：連結金融模型背景。
    - `## 🚀 延伸閱讀與進階議題`：引導行有餘力的學習者深入探討。
    - `## 🐍 Python 實踐價值`：強調技術在金融實務的優勢。
  - **第三層：技術解析區 (The Implementation)**
    - `## ⚙️ 代碼核心邏輯`：解析程式碼實作與演算法思路。
    - `## 🛠️ 腳本實作深度解析 (PRESERVED)`：
      - **內部三級標題格式**：採用 `### 📄 [腳本名稱]`（如 `### 📄 B1_Ch1_1.py`）。
      - **內容範本**：
        - `功能說明：[描述實作功能]`
        - `使用套件：[列出套件名稱]`
        - `複雜度等級：[等級] [🟢/🟡/🔴]`
        - `相關金融概念：[對應知識點]`
    - `## 💻 應用場景清單`：列出所有腳本使命（系統渲染時會過濾 Markdown 表格以保持介面簡潔）。
    - `## 📝 章節重點詳細解說的內容`：作為詳細知識點的容器（銜接後續 H3 知識點）。
- **三級標題 (###)**：具體知識點名稱（如：`### 1.1 Python 介紹與環境安裝`）。
- **四級標題 (####) - 知識點元數據**：
  - `#### 概念定義` / `#### 財金理論背景` / `#### Python 實現邏輯` / `#### 常見陷阱與注意事項` / `#### 實務應用場景` / `#### 與其他章節的關聯`。
- **代碼自動連結機制 (Automated Linking)**：
  - **全域識別**：系統自動掃描所有 `.py` 檔名（包含 `## 🛠️` 標題、表格單元格、段落文字及加粗文本），將其轉化為可點擊元件。
  - **應用場景清單 (Table List)**：採用 `| 腳本名稱 | 核心使命 |` 表格格式，腳本名稱需加粗（如 `**B1_Ch1_1.py**`）以利識別。
  - **互動連結**：點擊後立即觸發右側代碼編輯器（Monaco Editor）加載該腳本內容。

### 4.7 互動佈局規範 (Interactive Layout)

- **頂部導航區域 (Top Bar)**：
  - 左側：書名與圖示。
  - 中間：章節選擇與腳本快選下拉選單。
  - 右側：深色/亮色主題切換。
- **左側：內容顯示區 (Content Pane)**：
  - **內容模式**：顯示 Markdown 渲染後的教學內容。
  - **輸出模式 (Exclusive Output View)**：執行代碼時，自動切換至此模式顯示文字與圖表。
- **右側：代碼預覽區 (Preview Pane)**：
  - **彈出邏輯**：僅在點擊程式碼連結或從下拉選單選擇代碼時顯示，可自定義寬度。
  - **核心操作**：包含代碼編輯（唯讀或編輯）、複製、執行及關閉按鈕。

## 5. 穩定性與強健性要求 (Stability & Robustness)

- **自動重試**：當 Pyodide CDN 載入失敗時，應具備 3 次自動重試邏輯。
- **環境隔離**：支持跨來源隔離 (COOP/COEP)，以啟用 SharedArrayBuffer 並提升 Python 執行效能。
- **配額監控**：定期檢查 IndexedDB 剩餘空間，防止儲存失敗，並及時提醒使用者。

## 6. 非功能性要求 (Non-functional Requirements)

- **性能指標**：首次加載 (LCP) 應控制在 6 秒內，後續緩存加載應小於 1 秒。
- **響應式佈局**：在行動裝置上，代碼編輯區與輸出區應能通過滑動或分頁標籤輕鬆切換。
- **安全性**：使用 DOMPurify 對輸出的 HTML/Markdown 進行 XSS 過濾，並針對 KaTeX 渲染生成的 MathML 與 SVG 標籤進行精確加白名單處理。
- **數學公式渲染**：整合 `marked-katex-extension`，自動識別 Markdown 中的 TeX 公式（支援 `$ ... $` 行內公式與 `$$ ... $$` 獨立區塊公式），確保金融模型的數學推導能以印刷品質顯示。

## 附錄 A：最近實作變更摘要（重要）

為了解決在瀏覽器中以 Pyodide 運行 SciPy 時遇到的本機 C 擴充匯入錯誤（例如："dynamic module does not define module export function (PyInit__fblas)"），專案在啟動階段與執行環境層面加入多項相容性修補與部署最佳化。以下為已完成的具體變更：

- `SCIPY_STUB`（位於 `src/utils/python-shims.js`）：
  - 注入一個純 Python 的 `scipy` 與子模組 `scipy.stats`、`scipy.linalg` 的最小 stub，提供常用分佈（`norm`, `bernoulli`, `binom`, `uniform`, `beta`, `gamma`, `poisson`, `geom`, `randint` 等）與常見線性代數函式（`pascal`, `ldl`, `eig`, `inv`, `solve`）的純 Python 替代實作或封裝。
  - 目的：在無法載入 SciPy 原生擴充的瀏覽器環境下仍能讓書中範例以降級方式執行（以 NumPy 為後端），避免 ImportError 使整個頁面中斷。

- `SCIPY_RVS_SHIM`：
  - 為 SciPy 的 `rv_generic.rvs` 提供運行時 fallback，當原生 `.rvs()` 嘗試觸發編譯模組而失敗時，自動呼叫 `numpy.random` 等價生成器。

- `BASE_ENV_SETUP`：
  - 在 Pyodide 啟動時強制 Matplotlib 使用非 GUI 後端 `Agg`，並將預設字型設定為 `DejaVu Sans`，以消除 `findfont` / GUI backend 的重複警告，並確保圖像可被渲染並儲存為檔案或轉為 canvas。

- Inline SciPy stub（在 `index.html`）與早期註冊：
  - 為防止在應用的 shim 還沒注入前，頁面其他腳本嘗試 `import scipy` 導致加載原生擴充，新增一個極小的 inline stub（載入於 `index.html`，ID=`inline-scipy-stub`）並由 `pyodide-loader.js` 在 Pyodide 初始化後立即執行，確保 `sys.modules['scipy']` 在任何範例程式執行前已存在。

- 自動清理 Service Worker / Cache 的客戶端腳本（`src/utils/auto_clear_sw.js` + `src/main.jsx` 呼叫）：
  - 在客戶端檢測到頁面仍被舊 Service Worker 控制時，自動嘗試解除註冊 SW、刪除 Cache Storage、刪除常見 IndexedDB 名稱與清空 local/sessionStorage，並重新載入頁面以確保使用者載入最新資源。此動作設為一次性（以 localStorage flag 標記）。

- `pyodide-loader.js` 的啟動順序調整：
  - 在載入 Pyodide 並建立執行環境後，立刻執行 inline stub、接著注入並執行 `SCIPY_STUB`、`BASE_ENV_SETUP`、`PYMOO_SHIM`、`QUANTLIB_SHIM`、`PANDAS_DATAREADER_SHIM` 與 `SCIPY_RVS_SHIM` 等補丁；並在 `FS.syncfs` 後持久化 site-packages 至 IDBFS。

- 部署流程補強：
  - 重建 (`npm run build`) 並使用 `npx gh-pages -d dist` 發佈至 GitHub Pages，確保 `dist/wheels/` 與嵌入的 shim 在生產環境可用。

重要測試與驗證指引：
- 清理快取（必要）：在測試最新版時，請務必在瀏覽器執行以下步驟以避免舊 Service Worker 或快取導致的舊資源被載入：
  1. DevTools → Application → Service Workers → Unregister。
  2. DevTools → Application → Clear storage → 勾選所有項目並按 Clear site data。
  3. DevTools → Network → 勾選 Disable cache，然後做硬重新整理（Ctrl/Cmd + Shift + R）。

- 錯誤蒐集：若再次遇到 `PyInit__fblas` 相關錯誤，請擷取並附上：
  - Console 中第一次出現的完整錯誤堆疊（含引發位置）。
  - Network 面板中同時間段所有失敗資源的請求（尤其 `pyodide.js`、任何 `.wasm`、或載入 `.so` 的請求）。

設計備註與風險：
- 此類 fallback/stub 採「漸進式降級」策略——在不能提供 SciPy 原生性能時以 NumPy 與純 Python 實作保證範例邏輯可執行；但在數值精度或效能上可能與原生 SciPy 有差異，對於需要高效能 BLAS/LAPACK 運算的範例仍建議在本地完整 Python 環境執行。
- 自動清理機制較為激進，會清除使用者的 localStorage/IndexedDB；此策略的好處是能快速修復被舊 SW/快取影響的使用者，但可能影響本地未備份的使用者資料。如需降低侵入性，建議改為顯示「清除快取並重新載入」的提示，交由使用者手動確認。

若需要，我可以把上述變更整理成一份小型「變更日誌（CHANGELOG）」並新增到專案根目錄，或把 `SDD/tech_context.md` 補入更詳細的技術執行步驟與代碼位置註記。請告訴我你要哪一個。 
