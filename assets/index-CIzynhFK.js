const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodePreviewPanel-Y1A0b_QJ.js","assets/vendor-react-DZK0ENpr.js","assets/vendor--_apzOuR.js","assets/vendor-oJ_LK3JI.css","assets/CodePreviewPanel-Cz5hs9pL.css"])))=>i.map(i=>d[i]);
import{j as s,C as U,r as d,_ as de,B as ce,S as me,M as pe,R as ue,a as fe}from"./vendor-react-DZK0ENpr.js";import{d as ee,m as ge,p as he}from"./vendor-utils-BnrmxJWI.js";import"./vendor--_apzOuR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();function ye({chapters:t,currentChapter:e,onChapterSelect:a,currentScript:n,onScriptSelect:r,loading:o}){var c;return s.jsxs("div",{className:"top-nav-container",children:[s.jsxs("div",{className:"nav-group",children:[s.jsx("label",{className:"nav-label",htmlFor:"chapter-select",children:"章節 Selection"}),s.jsxs("div",{className:"custom-select-wrapper",children:[s.jsxs("select",{id:"chapter-select",name:"chapter-select",value:(e==null?void 0:e.id)||"",onChange:p=>{const m=t.find(f=>f.id===p.target.value);m&&a(m)},disabled:o||t.length===0,className:"custom-select",children:[s.jsx("option",{value:"",disabled:!0,children:o?"載入中...":"請選擇章節..."}),t.map(p=>s.jsx("option",{value:p.id,children:p.title},p.id))]}),s.jsx(U,{className:"select-icon",size:16})]})]}),s.jsxs("div",{className:`nav-group ${e?"":"disabled"}`,children:[s.jsx("label",{className:"nav-label",htmlFor:"script-select",children:"代碼 Code"}),s.jsxs("div",{className:"custom-select-wrapper",children:[s.jsxs("select",{id:"script-select",name:"script-select",value:(n==null?void 0:n.filename)||"",onChange:p=>{if(e!=null&&e.examples){const m=e.examples.find(f=>f.filename===p.target.value);m&&r(m)}},disabled:!e||!e.examples,className:"custom-select",children:[s.jsx("option",{value:"",disabled:!0,children:"選擇程式碼..."}),(c=e==null?void 0:e.examples)==null?void 0:c.map(p=>s.jsx("option",{value:p.filename,children:p.filename},p.filename))]}),s.jsx(U,{className:"select-icon",size:16})]})]})]})}const _e={throwOnError:!1,nonStandardPlaceholder:!0};ee.use(ge(_e));const ve=d.memo(({chapter:t,onCodeClick:e,darkMode:a,output:n,isRunning:r,plotImages:o,onClearOutput:c})=>{const p=d.useMemo(()=>{var m;if(!t)return null;if((m=t.content)!=null&&m.intro){let f=t.content.intro.replace(/##\s*💻\s*應用場景清單[\s\S]*?(?=##|$)/g,"");const k=ee.parse(f);let w=he.sanitize(k,{ADD_TAGS:["math","annotation","semantics","mrow","msub","msup","msubsup","mover","munder","munderover","mmultiscripts","mprec","mnext","mtable","mtr","mtd","mfrac","msqrt","mroot","mstyle","merror","mpadded","mphantom","mfenced","menclose","ms","mglyph","maligngroup","malignmark","maction","svg","path","use","span"],ADD_ATTR:["target","xlink:href","class","style","aria-hidden","viewBox","d","fill","stroke","stroke-width"]});return[...t.examples||[]].sort((x,j)=>j.filename.length-x.filename.length).forEach(x=>{const j=x.filename.replace(".","\\."),_=new RegExp(`(?<!['"\\w\\.])(${j})(?!['"\\w\\.])`,"g");w=w.replace(_,`<span class="code-link" data-filename="${x.filename}">${x.filename}</span>`)}),w}else{const f=t.examples||[];let k=`
        <div class="chapter-intro">
          <h2>${t.title}</h2>
          <p>本章包含 ${f.length} 個程式範例</p>
          <div class="example-grid">
      `;return f.forEach((g,w)=>{k+=`
          <div class="example-card">
            <div class="example-number">${w+1}</div>
            <div class="example-info">
              <h3>${g.title}</h3>
              <span class="code-link" data-filename="${g.filename}">${g.filename}</span>
            </div>
          </div>
        `}),k+=`
          </div>
        </div>
      `,k}},[t]);return d.useEffect(()=>{const m=f=>{if(f.target.classList.contains("code-link")){const k=f.target.dataset.filename;let g=null;t!=null&&t.examples&&(g=t.examples.find(w=>w.filename===k),g&&!g.metadata&&(g.metadata={description:g.title})),g&&e(g)}};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[t,e]),d.useEffect(()=>{const m=document.querySelector(".content-scroll");m&&(m.scrollTop=0)},[t]),d.useEffect(()=>{if(n||o&&o.length>0||r){const m=document.querySelector(".content-scroll");m&&m.scrollTo({top:0,behavior:"instant"})}},[n,o,r]),s.jsx("div",{className:"content-panel",children:s.jsx("div",{className:"content-scroll",children:n||o&&o.length>0||r?s.jsxs("div",{id:"execution-output",className:"execution-output-section",children:[r&&s.jsxs("div",{className:"running-indicator",children:[s.jsx("div",{className:"spinner"}),s.jsx("span",{children:"程式執行中..."})]}),n&&s.jsx("pre",{className:"output-text",children:n}),o&&o.length>0&&s.jsx("div",{className:"output-images",children:o.map((m,f)=>s.jsx("div",{className:"output-image",children:s.jsx("img",{src:m,alt:`Plot ${f+1}`})},f))})]}):p?s.jsx("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:p}}):s.jsxs("div",{className:"welcome-screen",children:[s.jsx("h2",{children:"👈 請從上方選擇章節開始學習"}),s.jsx("p",{children:"選擇章節後，可以查看內容並執行程式碼"})]})})})});function be({pyodide:t}){return null}let $=null,N=null;async function we(t){return $?(t&&t(100,"Ready"),$):N?N.then(e=>(t&&t(100,"Ready"),e)):(N=(async()=>{const e=(a,n)=>{t&&t(a,n)};try{e(0,"Initialize Pyodide (v0.26.4)...");let a=null,n=3;for(;n>0;)try{a=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"});break}catch(o){if(console.warn(`Failed to load Pyodide (attempts left: ${n-1}):`,o),n--,n===0)throw o;await new Promise(c=>setTimeout(c,1e3))}e(20,"Loading core packages...");const r=["micropip","numpy","pandas","matplotlib","scipy"];for(let o=0;o<r.length;o++){const c=r[o],p=25+o*10;e(p,`Loading ${c}...`),await a.loadPackage(c)}return e(70,"Initializing core environment..."),await a.loadPackage("micropip"),e(75,"Configuring environment..."),await a.runPythonAsync(`
import warnings
# 忽略 DeprecationWarning 和 FutureWarning，保持 Console 乾淨
warnings.simplefilter("ignore", DeprecationWarning)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", SyntaxWarning)
# 額外針對 pandas 的 pyarrow 警告進行過濾
warnings.filterwarnings("ignore", message=".*pyarrow.*")

try:
    import matplotlib
    matplotlib.use('AGG')
    import matplotlib.pyplot as plt
except ImportError:
    pass

import numpy as np

try:
    import pandas as pd
except ImportError:
    pass

import builtins
import js

def custom_input(prompt=""):
    result = js.window.prompt(prompt)
    return result if result is not None else ""

builtins.input = custom_input

import numpy as np
# 恢復舊版本 NumPy 的別名，以相容書中範例程式碼
if not hasattr(np, 'int'):
    np.int = int
if not hasattr(np, 'float'):
    np.float = float
if not hasattr(np, 'bool'):
    np.bool = bool

# NumPy Financial 相容性 (np.irr, np.npv 等在新版本 NumPy 移除)
try:
    import numpy_financial as npf
    fin_functions = ['irr', 'npv', 'pmt', 'pv', 'rate', 'nper', 'fv', 'ppmt', 'ipmt']
    for func in fin_functions:
        if not hasattr(np, func) and hasattr(npf, func):
            setattr(np, func, getattr(npf, func))
    print("✅ NumPy Financial：財務函數補丁已套用。")
except ImportError:
    pass

# distutils 相容性 (Python 3.12 移除)
import sys
try:
    import setuptools
    import distutils
except ImportError:
    # 如果 setuptools 沒提供，建立虛擬模組避免 error
    from types import ModuleType
    d = ModuleType('distutils')
    sys.modules['distutils'] = d

# 網路支援
try:
    import pyodide_http
    pyodide_http.patch_all()
except ImportError:
    pass

# SciPy 相容性 (binom_test 在新版本移除)
try:
    import scipy.stats
    if not hasattr(scipy.stats, 'binom_test') and hasattr(scipy.stats, 'binomtest'):
        def binom_test_shim(k, n=None, p=0.5, alternative='two-sided'):
            # binomtest 返回一個物件，其屬性 pvalue 即為舊版 binom_test 的返回值
            return scipy.stats.binomtest(k, n, p, alternative).pvalue
        scipy.stats.binom_test = binom_test_shim
        print("✅ SciPy 相容性：binom_test 修正補丁已套用。")
except ImportError:
    pass

# Pymoo 相容性與警告抑制
# pymoo 0.4.1 (純 Python wheel) 原生支援書中範例使用的舊版 API
# （pymoo.model.problem, pymoo.algorithms.nsga2, pymoo.factory 等）
try:
    import pymoo
    # 0.4.x 原生包含 pymoo.model.problem 和 pymoo.factory
    # 只需抑制編譯提示
    try:
        from pymoo.configuration import Configuration
        Configuration.show_compile_hint = False
    except (ImportError, AttributeError):
        pass
    
    # 驗證關鍵模組可匯入
    import pymoo.model.problem
    import pymoo.algorithms.nsga2
    print("✅ Pymoo 0.4.1：舊版 API 原生可用，無需額外映射。")
except ImportError as e:
    # 如果是 0.6.x 或其他版本，嘗試建立向後相容映射
    try:
        import pymoo.core.problem
        import pymoo.algorithms.moo.nsga2
        sys.modules['pymoo.model.problem'] = pymoo.core.problem
        sys.modules['pymoo.algorithms.nsga2'] = pymoo.algorithms.moo.nsga2
        
        from types import ModuleType
        if not hasattr(pymoo, 'factory'):
            factory = ModuleType('pymoo.factory')
            from pymoo.operators.sampling.rnd import FloatRandomSampling
            from pymoo.operators.crossover.sbx import SBX
            from pymoo.operators.mutation.pm import PM
            from pymoo.termination import get_termination as _get_termination
            def get_sampling(name, *args, **kwargs): return FloatRandomSampling()
            def get_crossover(name, *args, **kwargs): return SBX(prob=kwargs.get('prob', 0.9), eta=kwargs.get('eta', 15))
            def get_mutation(name, *args, **kwargs): return PM(eta=kwargs.get('eta', 20))
            factory.get_sampling = get_sampling
            factory.get_crossover = get_crossover
            factory.get_mutation = get_mutation
            factory.get_termination = _get_termination
            sys.modules['pymoo.factory'] = factory
        print("✅ Pymoo 相容性：舊版 API 映射已完成（0.6.x -> 0.4.x 路徑）。")
    except Exception as e2:
        if not isinstance(e2, ImportError):
            print(f"⚠️ Pymoo Shim Error: {e2}")
            print(f"Original Import Error (0.4.x): {e}")
except Exception as e:
    if not isinstance(e, ImportError):
        print(f"⚠️ Pymoo Shim Error: {e}")
    pass

# QuantLib (ql) 強大模擬層
# 由於 QuantLib 是 C++ 擴充套件，目前無法在瀏覽器原生執行。
# 我們提供一個高度相容的模擬層，以支援書中 Chapter 12 的債券與利率分析範例。
import sys
import datetime
from types import ModuleType
ql = ModuleType('QuantLib')
sys.modules['QuantLib'] = ql

class QLDate:
    def __init__(self, *args):
        try:
            if len(args) == 3: # (d, m, y)
                self.dt = datetime.date(args[2], args[1], args[0])
            elif len(args) == 2: # (str_val, fmt)
                py_fmt = args[1].replace('%d', '%d').replace('%m', '%m').replace('%Y', '%Y')
                self.dt = datetime.datetime.strptime(args[0], py_fmt).date()
            elif len(args) == 1 and isinstance(args[0], QLDate):
                self.dt = args[0].dt
            elif len(args) == 1 and isinstance(args[0], datetime.date):
                self.dt = args[0]
            else:
                self.dt = datetime.date(2020, 1, 1)
        except Exception:
            self.dt = datetime.date(2020, 1, 1)

    def __add__(self, other):
        if isinstance(other, int):
            new_dt = self.dt + datetime.timedelta(days=other)
            return QLDate(new_dt.day, new_dt.month, new_dt.year)
        elif hasattr(other, 'units'): # QLPeriod
            val = other.value
            if other.units == "Months":
                new_dt = self.dt + datetime.timedelta(days=val * 30)
                return QLDate(new_dt)
            elif other.units == "Years":
                new_dt = self.dt + datetime.timedelta(days=val * 365)
                return QLDate(new_dt)
        return self

    def __sub__(self, other):
        if isinstance(other, QLDate):
            return (self.dt - other.dt).days
        return 0

    def __str__(self): return self.dt.strftime('%B %d, %Y')
    def __repr__(self): return self.__str__()
    def date(self): return self

ql.Date = QLDate

class QLPeriod:
    def __init__(self, value, units=None):
        self.value = value
        self.units = units
ql.Period = QLPeriod
ql.Months = "Months"
ql.Years = "Years"
ql.Days = "Days"
ql.Weeks = "Weeks"

# 月份常數
ql.January, ql.February, ql.March = 1, 2, 3
ql.April, ql.May, ql.June = 4, 5, 6
ql.July, ql.August, ql.September = 7, 8, 9
ql.October, ql.November, ql.December = 10, 11, 12

class Settings:
    _inst = None
    @classmethod
    def instance(cls):
        if cls._inst is None: cls._inst = cls()
        return cls._inst
    evaluationDate = None
ql.Settings = Settings

class QLDayCount:
    def __init__(self, *args): pass
    def yearFraction(self, start, end):
        s = start.dt if hasattr(start, 'dt') else start
        e = end.dt if hasattr(end, 'dt') else end
        return (e - s).days / 365.0

ql.Thirty360 = QLDayCount
ql.ActualActual = QLDayCount
ql.ActualActual.Bond = "Bond"

class QLCalendar:
    def __init__(self, *args): pass
    def advance(self, date, value, units):
        if hasattr(units, 'units'): # It's a period
            return date + units
        return date + QLPeriod(value, units)

ql.NullCalendar = QLCalendar
ql.UnitedStates = QLCalendar
ql.UnitedStates.GovernmentBond = "GovernmentBond"
ql.Linear = lambda: "Linear"
ql.Compounded = "Compounded"
ql.Annual = 1
ql.Semiannual = 2
ql.Quarterly = 4
ql.Daily = 365
ql.Unadjusted = "Unadjusted"
ql.Following = "Following"

class DateGeneration: Backward = "Backward"
ql.DateGeneration = DateGeneration
ql.Schedule = lambda *args: "MockSchedule"
ql.MakeSchedule = lambda *args: "MockSchedule"
ql.FixedRateBondHelper = lambda *args: "MockHelper"

class CashFlow:
    def __init__(self, date, amount):
        self._date = date
        self._amount = amount
    def date(self): return self._date
    def amount(self): return self._amount

class QLZeroRate:
    def __init__(self, rate): self._rate = rate
    def rate(self): return self._rate
    def equivalentRate(self, *args): return self

class QLYieldCurve:
    def dates(self):
        d = ql.Settings.instance().evaluationDate or QLDate(15,1,2020)
        return [d + 90, d + 180, d + 365, d + 730, d + 1095]
    def zeroRate(self, yrs, compounding, freq): return QLZeroRate(0.05 + 0.005 * yrs)

ql.ZeroCurve = lambda *args: QLYieldCurve()
ql.PiecewiseLogCubicDiscount = lambda *args: QLYieldCurve()
ql.FlatForward = lambda *args: QLYieldCurve()

class QLQuote:
    def __init__(self, value=0.0): self._value = value
    def value(self): return self._value
    def setValue(self, value): self._value = value

class QLHandle:
    def __init__(self, link=None): self._link = link
    def linkTo(self, link): self._link = link
    def currentLink(self): return self._link
    def __getattr__(self, name): return getattr(self._link, name)

ql.QuoteHandle = QLHandle
ql.SimpleQuote = QLQuote
ql.YieldTermStructureHandle = QLHandle
ql.RelinkableYieldTermStructureHandle = QLHandle

class QLDuration:
    Modified = "Modified"
    Macaulay = "Macaulay"
ql.Duration = QLDuration

ql.BondFunctions = ModuleType('BondFunctions')
ql.BondFunctions.duration = lambda *args: 2.5
ql.BondFunctions.convexity = lambda *args: 10.0

class DiscountingBondEngine:
    def __init__(self, handle=None): self.handle = handle
ql.DiscountingBondEngine = DiscountingBondEngine

class FixedRateBond:
    def __init__(self, *args):
        self.faceValue = 100
        self.coupons = [0.05]
        self.engine = None
        if len(args) >= 2: self.faceValue = args[1]
        if len(args) >= 4: self.coupons = args[3]
    def dayCounter(self): return QLDayCount()
    def cashflows(self):
        d = ql.Settings.instance().evaluationDate or QLDate(15,1,2020)
        return [
            CashFlow(d + 180, self.faceValue * self.coupons[0] / 2),
            CashFlow(d + 360, self.faceValue + self.faceValue * self.coupons[0] / 2)
        ]
    def setPricingEngine(self, engine): self.engine = engine
    def cleanPrice(self, *args):
        rate = 0.05
        if self.engine and hasattr(self.engine, 'handle'):
            h = self.engine.handle
            while hasattr(h, 'currentLink') and h.currentLink() is not None:
                h = h.currentLink()
            if hasattr(h, 'zeroRate'):
                rate = h.zeroRate(10, 1, 1).rate() # 用 10 年期利率作為定價代理
        elif args: rate = args[0]
        return 100 / (1 + rate/2)**2
    def dirtyPrice(self, *args): return self.cleanPrice(*args) * 1.0125
    def NPV(self): return self.cleanPrice()
ql.FixedRateBond = FixedRateBond

class QLSpreadedCurve:
    def __init__(self, base_handle, spread_handles, dates):
        self._base = base_handle
        self._spreads = spread_handles
        self._dates = dates
    def zeroRate(self, yrs, compounding, freq):
        base = self._base
        while hasattr(base, 'currentLink') and base.currentLink() is not None:
            base = base.currentLink()
        br = base.zeroRate(yrs, compounding, freq).rate()
        # 簡單模擬：加總所有利差的平均值來體現敏感度
        total_spread = sum(s.value() if hasattr(s, 'value') else s for s in self._spreads)
        return QLZeroRate(br + total_spread / len(self._spreads))
    def dates(self): return self._dates

ql.SpreadedLinearZeroInterpolatedTermStructure = QLSpreadedCurve
class QLHullWhite:
    def __init__(self, handle, a, s): self.handle = handle
ql.HullWhite = QLHullWhite

class QLTreeEngine:
    def __init__(self, model, grid): self.handle = model.handle
ql.TreeCallableFixedRateBondEngine = QLTreeEngine

ql.CallabilitySchedule = list
ql.CallabilityPrice = lambda *args: "MockPrice"
ql.CallabilityPrice.Clean = "Clean"
ql.Callability = lambda *args: "MockCallability"
ql.Callability.Call = "Call"
ql.Callability.Put = "Put"
ql.CallableFixedRateBond = FixedRateBond

print("✅ QuantLib (ql) 強大模擬層已啟動。")

# 模擬數據引擎：處理 DataReader 因 CORS 導致的 RemoteDataError
def simulated_data_reader(name, data_source=None, start=None, end=None, **kwargs):
    import pandas as pd
    import numpy as np
    print(f"📡 模擬數據引擎：由於瀏覽器 CORS 限制，正在為 {name} 產生模擬股價數據...")
    
    start_date = pd.to_datetime(start or '2020-01-01')
    end_date = pd.to_datetime(end or '2020-12-31')
    dates = pd.date_range(start_date, end_date)
    
    tickers = [name] if isinstance(name, str) else name
    data = {}
    for ticker in tickers:
        stock_map = {
            'goog': 1500, 'amzn': 2000, 'fb': 200, 'nflx': 300, 
            'gld': 150, 'ge': 80, 'nke': 100, 'ford': 10, 'dis': 180, 'aapl': 150, 'tsla': 700
        }
        base_price = stock_map.get(ticker.lower(), 100)
        returns = np.random.normal(0.0005, 0.02, len(dates))
        price = base_price * np.exp(np.cumsum(returns))
        data[ticker] = price

    if len(tickers) > 1:
        df = pd.DataFrame(data, index=dates)
        df.columns = pd.MultiIndex.from_product([['Adj Close'], tickers])
        return df
    else:
        # 單一股票：返回一個以日期為索引、Adj Close 為欄位名的簡單 DataFrame
        # 這是 pandas_datareader 在請求單個股票時的標準行為（如果是 yahoo data_source）
        # 實際上 DataReader 返回的可視請求參數而定，但對於單一 ticker，通常返回一個簡單的 DataFrame
        df = pd.DataFrame({'Adj Close': data[name]}, index=dates)
        return df

try:
    import pandas_datareader
    import pandas_datareader.data as pdr_data
    # 同時覆蓋多個入口點以確保成功
    methods = ['DataReader', 'get_data_yahoo', 'get_data_stooq', 'get_data_fred']
    for method in methods:
        setattr(pdr_data, method, simulated_data_reader)
        setattr(pandas_datareader, method, simulated_data_reader)
        
    # 注入到 sys.modules 確保直接匯入也生效
    sys.modules['pandas_datareader.data'].DataReader = simulated_data_reader
    sys.modules['pandas_datareader'].DataReader = simulated_data_reader
    # 針對像 import pandas_datareader as web; web.get_data_yahoo 這種寫法
    for method in methods:
        setattr(sys.modules['pandas_datareader.data'], method, simulated_data_reader)
        setattr(sys.modules['pandas_datareader'], method, simulated_data_reader)
    print("✅ 模擬數據引擎：攔截器已成功啟動。")
except ImportError:
    # Silent for lazy loading
    pass
except Exception as e:
    print(f"⚠️ 模擬數據引擎啟動失敗: {str(e)}")
    `),await a.runPythonAsync(`
import builtins
import js

def custom_input(prompt=""):
    try:
        val = js.window.prompt(prompt if prompt else "")
        return val if val is not None else ""
    except Exception:
        return ""

builtins.input = custom_input
print("✅ Python input() function hooked to window.prompt")
        `),$=a,N=null,e(100,"Ready!"),a}catch(a){throw N=null,console.error("Failed to load Pyodide:",a),a}})(),N)}async function xe(t,e,a=3e4){let n;const r=new Promise((o,c)=>{n=setTimeout(()=>{c(new Error(`Execution timed out after ${a/1e3} seconds`))},a)});try{return await Promise.race([t.runPythonAsync(e),r])}finally{clearTimeout(n)}}async function ke(t){if(t)try{await t.runPythonAsync(`
import gc
import matplotlib.pyplot as plt
plt.close('all')
gc.collect()
        `)}catch{}}async function Pe(t){try{const e=await t.runPythonAsync(`
import matplotlib.pyplot as plt
len(plt.get_fignums())
    `);if(e===0)return[];const a=[];for(let n=0;n<e;n++){const r=await t.runPythonAsync(`
import matplotlib.pyplot as plt
import io
import base64

# 取得指定的圖表
fig = plt.figure(${n+1})
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=150, bbox_inches='tight', facecolor='white')
buf.seek(0)

# 轉換為 base64
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
img_base64
      `);a.push(`data:image/png;base64,${r}`)}return await t.runPythonAsync('import matplotlib.pyplot as plt; plt.close("all")'),a}catch(e){return console.error("Failed to capture plots:",e),[]}}async function V(t,e=!1){try{const a=e?"module://matplotlib_pyodide.wasm_backend":"AGG";await t.runPythonAsync(`
import matplotlib
import matplotlib.pyplot as plt
matplotlib.use('${a}')
if plt.style.available and 'default' in plt.style.available:
    plt.style.use('default')
    `),console.log(`✓ Matplotlib 初始化完成 (Backend: ${a})`)}catch(a){console.error("✗ Matplotlib 初始化失敗:",a)}}async function Le(t){try{await t.runPythonAsync(`
import matplotlib.pyplot as plt
if len(plt.get_fignums()) > 0:
    plt.show()
    `)}catch(e){console.error("Failed to show plots:",e)}}function Z(t){const e=t.message||String(t),a=[{pattern:/NameError: name '(.+)' is not defined/,format:n=>`❌ 變數錯誤：'${n[1]}' 未定義

💡 可能的原因：
• 變數名稱拼寫錯誤
• 變數尚未宣告就使用
• 注意 Python 區分大小寫（例如：data 和 Data 是不同的）

🔧 建議：
• 檢查變數名稱是否正確
• 確認變數是否已經定義
• 使用 print() 檢查變數值`},{pattern:/ModuleNotFoundError: No module named '(.+)'/,format:n=>`❌ 模組錯誤：找不到模組 '${n[1]}'

💡 可能的原因：
• 模組名稱拼寫錯誤
• 該模組不支援瀏覽器環境
• 模組尚未載入

🔧 支援的模組：
• numpy - 數值計算
• pandas - 資料分析
• matplotlib - 資料視覺化

如需使用其他模組，請確認是否支援 Pyodide。`},{pattern:/SyntaxError/,format:()=>`❌ 語法錯誤

💡 常見原因：
• 括號、引號未配對
• 縮排不正確
• 冒號遺漏（if、for、def 等後面需要冒號）
• 使用了中文標點符號

🔧 建議：
• 仔細檢查每一行的語法
• 確保括號 ()、[] 和 {} 都有配對
• 確保字串的引號配對（' 或 "）`},{pattern:/IndentationError/,format:()=>`❌ 縮排錯誤

💡 Python 使用縮排來表示程式碼區塊

🔧 建議：
• 使用一致的縮排（建議 4 個空格）
• 不要混用空格和 Tab
• 檢查 if、for、def 等語句後的縮排
• 確保同一區塊的程式碼縮排相同`},{pattern:/TypeError: (.+)/,format:n=>`❌ 型別錯誤：${n[1]}
    
💡 可能的原因：
• 對不支援的型別進行操作
• 函數參數型別不正確
• 嘗試對 None 進行操作
    
🔧 建議：
• 檢查變數的型別（使用 type() 函數）
• 確認函數參數是否正確
• 檢查是否有變數為 None`},{pattern:/IndexError: (.+)/,format:n=>`❌ 索引錯誤：${n[1]}

💡 可能的原因：
• 存取超出範圍的索引
• 列表或陣列為空

🔧 建議：
• 檢查索引值是否在有效範圍內
• 使用 len() 檢查列表長度
• 注意 Python 索引從 0 開始`},{pattern:/KeyError: (.+)/,format:n=>`❌ 鍵值錯誤：${n[1]}

💡 可能的原因：
• 字典中不存在該鍵值
• DataFrame 中不存在該欄位

🔧 建議：
• 使用 .get() 方法安全地存取字典
• 使用 .keys() 查看所有可用的鍵
• 檢查鍵名是否拼寫正確`},{pattern:/ValueError: (.+)/,format:n=>`❌ 數值錯誤：${n[1]}
    
💡 可能的原因：
• 函數接收到不合法的參數值
• 型別轉換失敗
• 數學運算的值不合法
    
🔧 建議：
• 檢查函數參數的值是否合理
• 確認資料格式是否正確
• 檢查是否有空值或異常值`},{pattern:/ZeroDivisionError/,format:()=>`❌ 除以零錯誤

💡 原因：
• 嘗試除以零

🔧 建議：
• 在除法前檢查除數是否為零
• 使用 if 語句避免除以零
• 檢查資料中是否有零值`},{pattern:/ImportError/,format:()=>`❌ 匯入錯誤

💡 可能的原因：
• 模組匯入失敗
• 模組內部錯誤

🔧 建議：
• 確認模組名稱正確
• 檢查是否支援該模組
• 查看完整錯誤訊息了解詳情`}];for(const{pattern:n,format:r}of a){const o=e.match(n);if(o)return r(o)}return`❌ 執行錯誤

${e}

💡 提示：
• 仔細閱讀錯誤訊息
• 檢查程式碼語法和邏輯
• 使用 print() 除錯
• 參考範例程式碼

🔧 除錯技巧：
• 逐行執行程式碼找出問題
• 使用 print() 輸出變數值
• 簡化程式碼，逐步測試`}class Se{constructor(){this.metrics={},this.enabled=!0}start(e){this.enabled&&(this.metrics[e]={start:performance.now(),end:null,duration:null})}end(e){if(!this.enabled||!this.metrics[e])return 0;const a=performance.now(),n=this.metrics[e].start,r=a-n;return this.metrics[e].end=a,this.metrics[e].duration=r,this.log(e,r),r}log(e,a){const n=a<100?"⚡":a<1e3?"⏱️":"🐌",r=a<100?"color: green":a<1e3?"color: orange":"color: red";console.log(`%c${n} ${e}: ${a.toFixed(2)}ms`,r),a>1e3&&console.warn(`⚠️ ${e} 執行時間過長: ${a.toFixed(2)}ms`)}async measure(e,a){this.start(e);try{return await a()}finally{this.end(e)}}getMetric(e){return this.metrics[e]||null}getMetrics(){return{...this.metrics}}getStats(){const e=Object.values(this.metrics).filter(a=>a.duration!==null).map(a=>a.duration);return e.length===0?{count:0,total:0,average:0,min:0,max:0}:{count:e.length,total:e.reduce((a,n)=>a+n,0),average:e.reduce((a,n)=>a+n,0)/e.length,min:Math.min(...e),max:Math.max(...e)}}clear(e){e?delete this.metrics[e]:this.metrics={}}setEnabled(e){this.enabled=e}report(){const e=this.getStats();console.group("📊 效能報告"),console.log(`總計測量: ${e.count} 次`),console.log(`總時間: ${e.total.toFixed(2)}ms`),console.log(`平均時間: ${e.average.toFixed(2)}ms`),console.log(`最快: ${e.min.toFixed(2)}ms`),console.log(`最慢: ${e.max.toFixed(2)}ms`),console.groupEnd(),console.group("📋 詳細指標"),Object.entries(this.metrics).forEach(([a,n])=>{n.duration!==null&&console.log(`${a}: ${n.duration.toFixed(2)}ms`)}),console.groupEnd()}}const C=new Se;C.setEnabled(!1);let J=!1;function Ee(){if(!J&&(J=!0,"PerformanceObserver"in window)){new PerformanceObserver(r=>{const o=r.getEntries(),c=o[o.length-1];console.log("🎨 LCP:",c.renderTime||c.loadTime)}).observe({entryTypes:["largest-contentful-paint"]}),new PerformanceObserver(r=>{r.getEntries().forEach(c=>{console.log("⚡ FID:",c.processingStart-c.startTime)})}).observe({entryTypes:["first-input"]});let a=0;new PerformanceObserver(r=>{r.getEntries().forEach(c=>{c.hadRecentInput||(a+=c.value)}),console.log("📐 CLS:",a)}).observe({entryTypes:["layout-shift"]})}}const qe=d.lazy(()=>de(()=>import("./CodePreviewPanel-Y1A0b_QJ.js"),__vite__mapDeps([0,1,2,3,4]))),K={pandas:"pandas",matplotlib:"matplotlib",scipy:"scipy",statsmodels:"statsmodels",sympy:"sympy",autograd:"autograd",lxml:"lxml",openpyxl:"openpyxl",requests:"requests",numpy_financial:"wheels/numpy_financial-1.0.0-py3-none-any.whl",seaborn:"wheels/seaborn-0.13.2-py3-none-any.whl",pymoo:"wheels/pymoo-0.4.1-py3-none-any.whl",pandas_datareader:"wheels/pandas_datareader-0.10.0-py3-none-any.whl",pyodide_http:"wheels/pyodide_http-0.2.2-py3-none-any.whl",mpl_toolkits:"matplotlib",pylab:"matplotlib"},X={requests:["certifi","charset_normalizer","idna","urllib3"],certifi:"wheels/certifi-2026.1.4-py3-none-any.whl",charset_normalizer:"wheels/charset_normalizer-3.4.4-py3-none-any.whl",idna:"wheels/idna-3.11-py3-none-any.whl",urllib3:"wheels/urllib3-2.6.3-py3-none-any.whl"};function je(){const[t,e]=d.useState(null),[a,n]=d.useState(!0),[r,o]=d.useState(0),[c,p]=d.useState("初始化中..."),[m,f]=d.useState([]),[k,g]=d.useState(!0),[w,A]=d.useState(null),[D,x]=d.useState(null),[j,_]=d.useState(""),[B,E]=d.useState([]),[F,Q]=d.useState(!1),[T,te]=d.useState(!1),[P,ae]=d.useState(()=>{const l=localStorage.getItem("theme");return l==="dark"||!l&&window.matchMedia("(prefers-color-scheme: dark)").matches}),[O,se]=d.useState(500),[R]=d.useState(new Set),[z,W]=d.useState(null);d.useEffect(()=>{g(!0);const l=`/pwa_FRM_Book1_python/data/chapters.json?t=${Date.now()}`;fetch(l).then(i=>i.json()).then(i=>{i&&i.length>0&&f(i),g(!1)}).catch(i=>{console.error("Failed to load chapters:",i),g(!1)})},[]),d.useEffect(()=>{we((i,h)=>{o(i),p(h)}).then(i=>{console.log("🚀 App initialized at:",new Date().toISOString()),console.log("📍 Current URL:",window.location.href),console.log("📦 Base URL:","/pwa_FRM_Book1_python/"),e(i),n(!1),C.end("pyodide-init")}),Ee();const l=[];if("serviceWorker"in navigator){const i=setInterval(()=>{navigator.serviceWorker.getRegistrations().then(b=>{b.forEach(v=>v.update())})},36e5),h=()=>{document.hidden||console.log("New Service Worker activated.")};navigator.serviceWorker.addEventListener("controllerchange",h),l.push(()=>{clearInterval(i),navigator.serviceWorker.removeEventListener("controllerchange",h)})}if("storage"in navigator&&"estimate"in navigator.storage){const i=async()=>{try{const b=await navigator.storage.estimate();if(b.usage&&b.quota){const v=b.usage/b.quota*100;console.log(`Storage usage: ${v.toFixed(2)}%`),v>80&&console.warn("Storage usage is high (>80%). Consider cleaning up.")}}catch(b){console.warn("Failed to check storage quota:",b)}};i();const h=setInterval(i,300*1e3);l.push(()=>clearInterval(h))}return()=>{l.forEach(i=>i())}},[]),d.useEffect(()=>{localStorage.setItem("theme",P?"dark":"light"),document.documentElement.setAttribute("data-theme",P?"dark":"light")},[P]);const H=async(l,i=!1)=>{var Y;if(!t)return;const h=l.match(/^\s*(?:from|import)\s+([a-zA-Z0-9_]+)/gm);if(!h)return;const b=["sys","os","io","time","base64","json","datetime","math","re","warnings","builtins","types","random","csv","copy","collections","itertools","functools","pathlib"],v=["numpy","pandas","matplotlib","scipy","micropip","js","builtins","QuantLib"],L=[...new Set(h.map(y=>{const u=y.trim().split(/\s+/);return u[0]==="from",u[1].split(".")[0]}))].filter(y=>!b.includes(y)&&!v.includes(y)).filter(y=>!R.has(y));if(L.length===0)return;const q=[],G=new URL("/pwa_FRM_Book1_python/",window.location.origin).href;if(L.forEach(y=>{const u=K[y];u?(q.push(u.endsWith(".whl")?G+u:u),(X[y]||[]).forEach(M=>{const I=X[M]||M;q.push(I.endsWith(".whl")?G+I:I)})):q.push(y)}),q.length>0)try{const y=[...new Set(q)];i||_(u=>u+`正在動態載入所需套件 [${L.join(", ")}]...
`),await t.loadPackage("micropip"),await t.runPythonAsync(`
import micropip
await micropip.install(${JSON.stringify(y)}, keep_going=True)
        `),L.includes("matplotlib")&&(await V(t),z||W("AGG")),L.forEach(u=>{R.add(u);const S=K[u];S&&!S.endsWith(".whl")&&R.add(S)}),i||_(u=>u+`✅ 套件載入完成。
`)}catch(y){if(console.warn("Dependency loading failed:",y),!i){const u=y.message||String(y);if(u.includes("Can't find a pure Python 3 wheel")){const S=((Y=u.match(/for: '([^']+)'/))==null?void 0:Y[1])||"unknown";_(M=>M+`⚠️ 套件 "${S}" 無法載入（可能不支援瀏覽器環境），嘗試繼續執行...
`)}else _(S=>S+`⚠️ 套件載入出現問題，嘗試直接執行...
`)}}},ne=async l=>{if(!(!t||F||!l)){C.start("run-code"),Q(!0),_(`執行中...
`),E([]);try{await ke(t);const i=l.includes("matplotlib.widgets")||l.includes("Slider")||l.includes("Button");te(i);const h=i?"module://matplotlib_pyodide.wasm_backend":"AGG";if(z!==h&&(await V(t,i),W(h)),await t.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `),i){const v=document.getElementById("pyodide-plot-container");v&&(v.innerHTML="",window.document.pyodideMplTarget=v)}await H(l);try{await xe(t,l)}catch(v){const L=await t.runPythonAsync("sys.stdout.getvalue()"),q=Z(v);_((L?L+`
`:"")+q),Q(!1),C.end("run-code");return}const b=await t.runPythonAsync("sys.stdout.getvalue()");if(_(b||"執行完成（無文字內容輸出 ）"),T)await Le(t);else{const v=await Pe(t);E(v)}}catch(i){const h=Z(i);_(h),console.error(i)}finally{Q(!1),C.end("run-code")}}},re=l=>{if(A(l),x(null),_(""),E([]),l&&l.examples&&t){const i=l.examples.map(h=>h.code).join(`
`);H(i,!0)}},oe=l=>{x(l),_(""),E([])},ie=l=>{x(l),_(""),E([])},le=()=>{x(null),_(""),E([])};return a?s.jsx("div",{className:"loading-screen",children:s.jsxs("div",{className:"loading-content",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("h2",{children:"正在載入 Python 執行環境..."}),s.jsx("div",{className:"progress-container",children:s.jsx("div",{className:"progress-bar",style:{width:`${r}%`}})}),s.jsxs("p",{className:"loading-text",children:[c," (",r,"%)"]}),s.jsx("p",{className:"loading-hint",children:"首次載入需要下載約 10MB 的資源，請稍候"})]})}):s.jsxs("div",{className:`app ${P?"dark":""}`,children:[s.jsxs("div",{className:"main-content",children:[s.jsxs("div",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsx(ce,{size:20,className:"logo-icon"}),s.jsx("span",{className:"app-title",children:"FRM_Book1 (基礎篇)"})]}),s.jsx(ye,{chapters:m,currentChapter:w,onChapterSelect:re,currentScript:D,onScriptSelect:ie,loading:k}),s.jsx("div",{className:"top-bar-right",children:s.jsx("button",{className:"theme-toggle",onClick:()=>ae(!P),title:P?"切換到亮色模式":"切換到暗色模式",children:P?s.jsx(me,{size:20}):s.jsx(pe,{size:20})})})]}),s.jsxs("div",{className:"panes-container",children:[s.jsx("div",{className:"content-pane",children:s.jsx(ve,{chapter:w,onCodeClick:oe,darkMode:P,output:j,isRunning:F,plotImages:B,onClearOutput:()=>{_(""),E([])}})}),D&&s.jsx("div",{className:"preview-pane",style:{width:`${O}px`},children:s.jsx(d.Suspense,{fallback:s.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",color:"#888"},children:"Loading Editor..."}),children:s.jsx(qe,{script:D,onClose:le,onRun:ne,isRunning:F,output:j,images:B,isInteractive:T,darkMode:P,width:O,onResize:se})})})]})]}),s.jsx(be,{pyodide:t})]})}ue.createRoot(document.getElementById("root")).render(s.jsx(fe.StrictMode,{children:s.jsx(je,{})}));
