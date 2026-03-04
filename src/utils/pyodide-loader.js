/* eslint-disable no-console */
let pyodideInstance = null
let initializationPromise = null
import { QUANTLIB_SHIM, PYMOO_SHIM, BASE_ENV_SETUP, PANDAS_DATAREADER_SHIM, SCIPY_RVS_SHIM, SCIPY_STUB } from './python-shims'

const PYODIDE_CDNS = [
    'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js',
    'https://unpkg.com/pyodide@0.26.4/pyodide.js',
];

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.crossOrigin = 'anonymous';
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
}

async function ensurePyodideScript() {
    if (typeof window.loadPyodide === 'function') return;
    console.warn('window.loadPyodide not found, loading dynamically...');
    for (const cdn of PYODIDE_CDNS) {
        try {
            await loadScript(cdn);
            if (typeof window.loadPyodide === 'function') {
                console.log(`Pyodide loaded from ${cdn}`);
                return;
            }
        } catch (e) {
            console.warn(`Failed to load Pyodide from ${cdn}:`, e.message);
        }
    }
    throw new Error('Failed to load Pyodide from all CDN sources');
}

class SmoothProgress {
    constructor(onProgress) {
        this.onProgress = onProgress;
        this.current = 0;
        this.target = 0;
        this.message = '';
        this.interval = null;
        this.step = 0.1; // Amount to increment per tick
    }

    start() {
        if (this.interval) return;
        this.interval = setInterval(() => {
            if (this.current < this.target) {
                const diff = this.target - this.current;
                // SPRINT LOGIC: If we are far behind (cached load), move very fast
                // If diff > 20, move at 2% per tick (20% per second)
                // If diff > 5, move at 0.8% per tick (8% per second)
                const dynamicStep = diff > 20 ? 3.5 : (diff > 5 ? 1.5 : 0.5);

                this.current = Math.min(this.current + dynamicStep, this.target);
                this.onProgress(Math.floor(this.current), this.message);
            } else if (this.target < 99) {
                // PERSISTENT CRAWL: Ensure it never stands still
                // 0.08 every 100ms = ~0.8% per second (noticeable change)
                this.current = Math.min(this.current + 0.08, 99.9);
                this.onProgress(Math.floor(this.current), this.message);
            }
        }, 100);
    }

    update(target, message) {
        this.target = target;
        if (message) this.message = message;
    }

    async yieldToUI() {
        return new Promise(resolve => setTimeout(resolve, 30));
    }

    finish(message = 'Ready!') {
        if (this.interval) clearInterval(this.interval);
        this.current = 100;
        this.onProgress(100, message);
    }
}

export async function loadPyodide(onProgress) {
    if (pyodideInstance) {
        if (onProgress) onProgress(100, 'Ready')
        return pyodideInstance
    }

    if (initializationPromise) {
        return initializationPromise.then(py => {
            if (onProgress) onProgress(100, 'Ready')
            return py
        })
    }

    initializationPromise = (async () => {
        const smoother = new SmoothProgress(onProgress);
        smoother.start();

        try {
            smoother.update(10, '正在啟動 Python 直譯器 (v0.26.4)...');

            // Ensure window.loadPyodide is available (dynamically load if needed)
            await ensurePyodideScript();

            // Retry logic for loading Pyodide
            let pyodide = null;
            let retries = 3;
            while (retries > 0) {
                try {
                    const indexURL = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';
                    console.log('Using Pyodide CDN for packages:', indexURL);
                    pyodide = await window.loadPyodide({
                        indexURL: indexURL
                    });
                    break;
                } catch (e) {
                    console.warn(`Failed to load Pyodide (attempts left: ${retries - 1}):`, e);
                    retries--;
                    if (retries === 0) throw e;
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            }

            // Execute any inline stub embedded in index.html before other setup
            try {
                const stubEl = document.getElementById('inline-scipy-stub');
                if (stubEl && stubEl.textContent && stubEl.textContent.trim().length > 0) {
                    try {
                        await window.pyodide.runPythonAsync(stubEl.textContent);
                        console.log('Inline SciPy stub executed early.');
                    } catch (innerErr) {
                        console.warn('Failed to execute inline SciPy stub:', innerErr);
                    }
                }
            } catch (err) {
                console.warn('Error checking inline SciPy stub:', err);
            }

            smoother.update(25, '引擎啟動完成，正在檢查本地暫存環境...')
            await smoother.yieldToUI();

            // Setup IDBFS for persistence
            // Using a generic path and then syncing
            const SITE_PACKAGES = '/lib/python3.12/site-packages';
            try {
                pyodide.FS.mkdirTree(SITE_PACKAGES);
            } catch {
                // Directory might already exist
            }
            pyodide.FS.mount(pyodide.FS.filesystems.IDBFS, {}, SITE_PACKAGES);

            // Sync from IDB to memory
            smoother.update(26, '正在從本地儲存區載入 Python 環境...');
            await new Promise((resolve) => {
                pyodide.FS.syncfs(true, (err) => {
                    if (err) console.error('IDBFS sync error:', err);
                    resolve();
                });
            });
            await smoother.yieldToUI();

            // Check what's already installed to avoid redundant downloads
            // Core Pyodide distribution packages
            const corePackages = ['numpy', 'pandas', 'matplotlib', 'scipy', 'statsmodels', 'sympy', 'lxml', 'micropip'];
            // Third-party packages (not in distribution)
            const pipPackages = ['numpy-financial', 'pandas-datareader', 'pyodide-http', 'pymoo==0.4.1', 'seaborn'];
            const installedFiles = pyodide.FS.readdir(SITE_PACKAGES);

            const coreToLoad = corePackages.filter(pkg => {
                return !installedFiles.includes(pkg) && !installedFiles.some(f => f.startsWith(pkg + '-'));
            });

            const pipToLoad = pipPackages.filter(pkg => {
                const normalizedPkg = pkg.replace('-', '_'); // packages like numpy-financial might show up as numpy_financial
                return !installedFiles.includes(pkg) &&
                    !installedFiles.includes(normalizedPkg) &&
                    !installedFiles.some(f => f.startsWith(pkg + '-')) &&
                    !installedFiles.some(f => f.startsWith(normalizedPkg + '-'));
            });

            const hasUpdates = coreToLoad.length > 0 || pipToLoad.length > 0;

            if (hasUpdates) {
                const totalList = [...coreToLoad, ...pipToLoad];
                smoother.update(30, `正在同步並安裝套件: ${totalList.join(', ')}...`);

                // 1. Load Core Packages
                if (coreToLoad.length > 0) {
                    smoother.update(40, `正在從 CDN 獲取核心科學套件 (${coreToLoad.length} 個)...`);
                    await pyodide.loadPackage(coreToLoad);
                }

                // 2. Load Pip Packages if needed
                if (pipToLoad.length > 0) {
                    smoother.update(70, `正在掛載第三方擴充資源 (${pipToLoad.length} 個)...`);
                    await pyodide.loadPackage('micropip');
                    const micropip = pyodide.pyimport('micropip');

                    // Prefer local wheels for pip packages if available
                    const localPipToLoad = pipToLoad.map(pkg => {
                        if (pkg === 'numpy-financial') {
                            return `${import.meta.env.BASE_URL}wheels/numpy_financial-1.0.0-py3-none-any.whl`;
                        }
                        return pkg;
                    });

                    await micropip.install(localPipToLoad);
                }

                smoother.update(85, '正在固化環境映射至本地磁碟...');
                // Sync back to IDB to persist
                await new Promise((resolve) => {
                    pyodide.FS.syncfs(false, (err) => {
                        if (err) console.error('IDBFS save error:', err);
                        resolve();
                    });
                });
                smoother.update(90, '✅ 環境已完成本地持久化儲存');
            } else {
                smoother.update(90, '🚀 偵測到本地環境快照，已跳過網路請求');
            }
            await smoother.yieldToUI();

            smoother.update(92, '⚙️ 配置：正在載入環境優化補丁...')
            await smoother.yieldToUI();

            // Run patches in parallel
            await Promise.all([
                pyodide.runPythonAsync(`
import warnings
warnings.simplefilter("ignore", DeprecationWarning)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", SyntaxWarning)
warnings.filterwarnings("ignore", message=".*pyarrow.*")
                `),
                pyodide.runPythonAsync(`
import numpy as np
if not hasattr(np, 'int'): np.int = int
if not hasattr(np, 'float'): np.float = float
if not hasattr(np, 'bool'): np.bool = bool
try:
    import numpy_financial as npf
    for func in ['irr', 'npv', 'pmt', 'pv', 'rate', 'nper', 'fv', 'ppmt', 'ipmt']:
        if not hasattr(np, func) and hasattr(npf, func): setattr(np, func, getattr(npf, func))
except ImportError: pass
                `),
                pyodide.runPythonAsync(`
try:
    import scipy.stats
    if not hasattr(scipy.stats, 'binom_test') and hasattr(scipy.stats, 'binomtest'):
        def binom_test_shim(k, n=None, p=0.5, alternative='two-sided'):
            return scipy.stats.binomtest(k, n, p, alternative).pvalue
        scipy.stats.binom_test = binom_test_shim
except: pass
                `)
            ]);
            await smoother.yieldToUI();

            smoother.update(98, '🚀 系統：正在啟動 Pymoo & QuantLib 虛擬層...')
            await smoother.yieldToUI();
            // Run environment shims (including a SciPy import-safe stub)
            await Promise.all([
                pyodide.runPythonAsync(SCIPY_STUB),
                pyodide.runPythonAsync(BASE_ENV_SETUP),
                pyodide.runPythonAsync(PYMOO_SHIM),
                pyodide.runPythonAsync(QUANTLIB_SHIM),
                pyodide.runPythonAsync(PANDAS_DATAREADER_SHIM),
                pyodide.runPythonAsync(SCIPY_RVS_SHIM)
            ]);

            smoother.update(99, '🛡️ 系統：權限校正與輸入掛鉤注入...')
            await pyodide.runPythonAsync(`
import builtins
import js
def custom_input(prompt = ""):
    try:
        val = js.window.prompt(prompt if prompt else "")
        return val if val is not None else ""
    except Exception: return ""
builtins.input = custom_input
            `);
            await smoother.yieldToUI();

            pyodideInstance = pyodide
            initializationPromise = null
            smoother.finish('載入完成！正在進入主介面...')
            return pyodide
        } catch (error) {
            initializationPromise = null
            if (smoother.interval) clearInterval(smoother.interval);
            console.error('Failed to load Pyodide:', error)
            throw error
        }
    })();

    return initializationPromise;
}

export function getPyodide() {
    return pyodideInstance
}

/**
 * Execute Python code with a timeout
 * @param {Object} pyodide - Pyodide instance
 * @param {string} code - Python code to execute
 * @param {number} timeout - Timeout in milliseconds (default 30000)
 * @returns {Promise<any>}
 */
export async function runPythonWithTimeout(pyodide, code, timeout = 30000) {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error(`Execution timed out after ${timeout / 1000} seconds`));
        }, timeout);
    });

    try {
        const result = await Promise.race([
            pyodide.runPythonAsync(code),
            timeoutPromise
        ]);
        return result;
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Cleanup Pyodide memory and state
 * @param {Object} pyodide - Pyodide instance
 */
export async function cleanupPyodide(pyodide) {
    if (!pyodide) return;
    try {
        // Quick cleanup: only clear plots and collect GC
        await pyodide.runPythonAsync(`
            import gc
import matplotlib.pyplot as plt
            plt.close('all')
            gc.collect()
                `);
    } catch {
        // Silent fail for cleanup
    }
}

// ------------------------------------------------------------------
// Additional utilities exported for App.jsx (background helpers)
// ------------------------------------------------------------------

// Keep track of which chapters we've already attempted to load
const _loadedChapterDatasets = new Set();

/**
 * Ensure any auxiliary data files for a chapter are available in the
 * Pyodide filesystem.  Currently this is a no-op stub; if a
 * `public/data/datasets/{chapterId}.zip` file is ever added the logic
 * below can be expanded to fetch & unpack it.
 *
 * @param {Object} pyodide - Pyodide instance
 * @param {string} chapterId - e.g. "b1_ch3"
 */
export async function loadChapterDatasets(pyodide, chapterId) {
    if (!pyodide || !chapterId) return;
    if (_loadedChapterDatasets.has(chapterId)) return;

    try {
        // future work: download and extract dataset archive if present
        const url = `${import.meta.env.BASE_URL}data/datasets/${chapterId}.zip`;
        const resp = await fetch(url);
        if (resp.ok) {
            console.log(`found dataset archive for ${chapterId}`);
            // attempt unzip if JSZip is available
            if (window.JSZip) {
                const buf = await resp.arrayBuffer();
                const zip = await window.JSZip.loadAsync(buf);
                await Promise.all(
                    Object.keys(zip.files).map(async fname => {
                        const data = await zip.files[fname].async('uint8array');
                        pyodide.FS.writeFile(fname, data);
                    })
                );
                console.log(`datasets for ${chapterId} extracted to FS`);
            } else {
                console.warn('JSZip not available, cannot unzip datasets');
            }
        }
    } catch (e) {
        console.warn('loadChapterDatasets error', e);
    } finally {
        _loadedChapterDatasets.add(chapterId);
    }
}

/**
 * Kick off background loading of large/optional Python packages so that
 * the first user invocation doesn't incur a long network delay.  This is
 * deliberately lightweight and tolerant of failure.
 *
 * @param {Object} pyodide - Pyodide instance
 */
export async function preloadHeavyPackages(pyodide) {
    if (!pyodide) return;

    try {
        // ensure micropip is available for pip installs
        await pyodide.loadPackage('micropip');
        const micropip = pyodide.pyimport('micropip');

        // list of wheel URLs or package names that tend to be large
        const wheelUrls = [
            `${import.meta.env.BASE_URL}wheels/pymoo-0.4.1-py3-none-any.whl`,
            `${import.meta.env.BASE_URL}wheels/pandas_datareader-0.10.0-py3-none-any.whl`,
            `${import.meta.env.BASE_URL}wheels/pyodide_http-0.2.2-py3-none-any.whl`,
            `${import.meta.env.BASE_URL}wheels/seaborn-0.13.2-py3-none-any.whl`
        ];

        // Install them in the background; ignore failures
        await micropip.install(wheelUrls, {transient: true}).catch(e => {
            console.warn('preloadHeavyPackages pip install failed', e);
        });
    } catch (e) {
        console.warn('preloadHeavyPackages error', e);
    }
}

