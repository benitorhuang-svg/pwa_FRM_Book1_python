const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodePreviewPanel-BAmgNmSY.js","assets/vendor-react-Dhy20vu4.js","assets/vendor-Duqdn4fa.js","assets/CodePreviewPanel-V3Zu5mOS.css"])))=>i.map(i=>d[i]);
import{r as p,j as a,C as B,_ as me,B as pe,S as ue,M as fe,R as he,a as ge}from"./vendor-react-Dhy20vu4.js";import{B as ye,p as _e}from"./vendor-utils-DahDrsZr.js";import{m as ve}from"./vendor-katex-DnHNbJWt.js";import"./vendor-Duqdn4fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(o){if(o.ep)return;o.ep=!0;const d=t(o);fetch(o.href,d)}})();function we({chapters:s,currentChapter:e,onChapterSelect:t,currentScript:n,onScriptSelect:o,selectedTopicId:d,onTopicSelect:h,loading:r}){var c;const g=p.useMemo(()=>{var b;const i=(b=e==null?void 0:e.content)==null?void 0:b.intro;if(!i)return[];let l="";if(typeof i=="string")l=i;else if(typeof i=="object"&&i.body)l=i.body;else return[];const u=/^###\s+(.+)$/gm,w=[];let S;for(;(S=u.exec(l))!==null;){const k=S[1].trim(),q="topic-"+k.replace(/\s+/g,"-").toLowerCase();w.push({id:q,title:k})}return w},[e]);return a.jsxs("div",{className:"top-nav-container",children:[a.jsx("div",{className:"nav-group",children:a.jsxs("div",{className:"custom-select-wrapper",children:[a.jsxs("select",{id:"chapter-select",name:"chapter-select",value:(e==null?void 0:e.id)||"",onChange:i=>{const l=s.find(u=>u.id===i.target.value);l&&t(l)},disabled:r||s.length===0,className:"custom-select",children:[a.jsx("option",{value:"",disabled:!0,children:r?"載入中...":"📖 章節選擇"}),s.map(i=>a.jsx("option",{value:i.id,children:i.title},i.id))]}),a.jsx(B,{className:"select-icon",size:16})]})}),a.jsx("div",{className:`nav-group ${!e||g.length===0?"disabled":""}`,children:a.jsxs("div",{className:"custom-select-wrapper",children:[a.jsxs("select",{id:"topic-select",name:"topic-select",value:d,onChange:i=>h(i.target.value),disabled:!e||g.length===0,className:"custom-select",children:[a.jsx("option",{value:"",children:"💡 重點導覽"}),g.map(i=>a.jsx("option",{value:i.id,children:i.title},i.id))]}),a.jsx(B,{className:"select-icon",size:16})]})}),a.jsx("div",{className:`nav-group ${e?"":"disabled"}`,children:a.jsxs("div",{className:"custom-select-wrapper",children:[a.jsxs("select",{id:"script-select",name:"script-select",value:(n==null?void 0:n.filename)||"",onChange:i=>{if(e!=null&&e.examples){const l=e.examples.find(u=>u.filename===i.target.value);l&&o(l)}},disabled:!e||!e.examples,className:"custom-select",children:[a.jsx("option",{value:"",disabled:!0,children:"💻 程式代碼"}),(c=e==null?void 0:e.examples)==null?void 0:c.map(i=>a.jsx("option",{value:i.filename,children:i.filename},i.filename))]}),a.jsx(B,{className:"select-icon",size:16})]})})]})}const be=new ye(ve({throwOnError:!1,output:"html",nonStandard:!0})),xe=p.memo(({chapter:s,onCodeClick:e,selectedTopicId:t,output:n,isRunning:o,plotImages:d})=>{const h=p.useMemo(()=>{var g;if(!s)return null;const r=(g=s.content)==null?void 0:g.intro;if(r){let c="";typeof r=="string"?c=r:typeof r=="object"&&(c=`# ${r.title||""}

`,r.roadmap&&(r.roadmap.guide&&(c+=`## 📌 章節導覽
${r.roadmap.guide}

`),r.roadmap.objectives&&(c+=`## 🎯 學習目標
${r.roadmap.objectives}

`),r.roadmap.topics&&(c+=`## 📋 章節重點分明
${r.roadmap.topics}

`)),r.value&&(r.value.practical&&(c+=`## 💼 FRM 考試與實務連結
${r.value.practical}

`),r.value.theory&&(c+=`## 🏛️ 財金理論深度解析
${r.value.theory}

`),r.value.further_reading&&(c+=`## 🚀 延伸閱讀與進階議題
${r.value.further_reading}

`)),r.implementation&&(r.implementation.python&&(c+=`## 🐍 Python 實踐價值
${r.implementation.python}

`),r.implementation.logic&&(c+=`## ⚙️ 代碼核心邏輯
${r.implementation.logic}

`),r.implementation.scenarios&&(c+=`## 💻 應用場景清單
${r.implementation.scenarios}

`)),r.body&&(c+=`
## 📝 章節重點詳細解說的內容
${r.body}`)),c=c.replace(/##\s*💻\s*應用場景清單[\s\S]*?(?=##|$)/g,""),c=c.replace(/\s*\$\$\s*/g,`
$$
`).replace(new RegExp("(?<!\\$)\\$(?!\\$)\\s*(.*?)\\s*(?<!\\$)\\$(?!\\$)","g"),"$$$1$");let i=be.parse(c);i=i.replace(/<h3>(.*?)<\/h3>/g,(b,k)=>`<h3 id="${"topic-"+k.replace(/<[^>]*>/g,"").trim().replace(/\s+/g,"-").toLowerCase()}">${k}</h3>`);let u=_e.sanitize(i,{ADD_TAGS:["math","annotation","semantics","mrow","msub","msup","msubsup","mover","munder","munderover","mmultiscripts","mprec","mnext","mtable","mtr","mtd","mfrac","msqrt","mroot","mstyle","merror","mpadded","mphantom","mfenced","menclose","ms","mglyph","maligngroup","malignmark","maction","svg","path","use","span","div"],ADD_ATTR:["id","target","xlink:href","class","style","aria-hidden","viewBox","d","fill","stroke","stroke-width","data-filename"]});return[...s.examples||[]].sort((b,k)=>k.filename.length-b.filename.length).forEach(b=>{const k=b.filename.replace(".","\\."),q=new RegExp(`(?<!['".\\w])(${k})(?!['".\\w])`,"g");u=u.replace(q,`<span class="code-link" data-filename="${b.filename}">${b.filename}</span>`)}),u}else{const c=s.examples||[];let i=`
        <div class="chapter-intro">
          <h2>${s.title}</h2>
          <p>本章包含 ${c.length} 個程式範例</p>
          <div class="example-grid">
      `;return c.forEach((l,u)=>{i+=`
          <div class="example-card">
            <div class="example-number">${u+1}</div>
            <div class="example-info">
              <h3>${l.title}</h3>
              <span class="code-link" data-filename="${l.filename}">${l.filename}</span>
            </div>
          </div>
        `}),i+=`
          </div>
        </div>
      `,i}},[s]);return p.useEffect(()=>{const r=g=>{if(g.target.classList.contains("code-link")){const c=g.target.dataset.filename;let i=null;s!=null&&s.examples&&(i=s.examples.find(l=>l.filename===c),i&&!i.metadata&&(i.metadata={description:i.title})),i&&e(i)}};return document.addEventListener("click",r),()=>document.removeEventListener("click",r)},[s,e]),p.useEffect(()=>{const r=document.querySelector(".content-scroll");r&&(r.scrollTop=0)},[s]),p.useEffect(()=>{if(t){const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}},[t]),p.useEffect(()=>{if(n||d&&d.length>0||o){const r=document.querySelector(".content-scroll");r&&r.scrollTo({top:0,behavior:"instant"})}},[n,d,o]),a.jsx("div",{className:"content-panel",children:a.jsx("div",{className:"content-scroll",children:n||d&&d.length>0||o?a.jsxs("div",{id:"execution-output",className:"execution-output-section",children:[o&&a.jsxs("div",{className:"running-indicator",children:[a.jsx("div",{className:"spinner"}),a.jsx("span",{children:"程式執行中..."})]}),n&&a.jsx("pre",{className:"output-text",children:n}),d&&d.length>0&&a.jsx("div",{className:"output-images",children:d.map((r,g)=>a.jsx("div",{className:"output-image",children:a.jsx("img",{src:r,alt:`Plot ${g+1}`})},g))})]}):h?a.jsx("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:h}}):a.jsx("div",{className:"welcome-screen",children:a.jsxs("div",{className:"welcome-card premium-welcome",children:[a.jsxs("div",{className:"welcome-brand",children:[a.jsx("img",{src:"book-cover.jpg",alt:"FRM Python 理論與實戰",className:"welcome-book-img"}),a.jsx("a",{href:"https://deepwisdom.com.tw/product/%e6%89%8b%e8%a1%93%e5%88%80%e8%88%ac%e7%b2%be%e6%ba%96%e7%9a%84frm-%e7%94%a8python%e7%a7%91%e5%ad%b8%e7%ae%a1%e6%8e%a7%e8%b2%a1%e9%87%91%e9%a2%a8%e9%9a%aa%e5%9f%ba%e7%a4%8e%e7%af%87dm2301/",target:"_blank",rel:"noopener noreferrer",className:"welcome-purchase-btn",children:"[ 本書官網購買連結 ]"})]}),a.jsxs("div",{className:"welcome-content",children:[a.jsxs("h2",{className:"welcome-title",children:["手術刀般精準的 FRM 用 Python",a.jsx("br",{}),"科學管控財金風險：基礎篇"]}),a.jsx("div",{className:"welcome-slogan",children:"☆★☆★【有如手術刀般精準！利用Python幫你管控財金風險！】★☆★☆"}),a.jsxs("div",{className:"welcome-text-scroll",children:[a.jsx("p",{children:"本書使用了當紅的程式語言 Python，從程式設計的基本觀念談起。沒有 Python 基礎也沒關係，完整的 Python 介紹，讓您能順利銜接資料科學家最常用的套件整理，包括 Numpy，以及特別針對格式化表格類處理的 Pandas，也充分介紹了 Dataframe 的各種應用。"}),a.jsx("p",{children:"在有了充足的資料之後，接著需要有可以展示數據的工具。除了大家最愛用的 Matplotlib 之外，也介紹了高手才會用的 Seaborn。當熟悉了工具之後，就正式進入了金融理論，包括基礎的機率及統計、各種模型及機率分佈，以及抽樣、信賴區間等內容說明。"}),a.jsx("p",{children:"最後則進入到金融領域，除了介紹各種計算的演算法、模型、術語，也結合了前面所學的 Python 及工具，並講解金融商品最重要的「固定收益分析」。"}),a.jsx("p",{children:"本書從科學下手，讓您精準了解金融原理，確保金錢不再陷入水深火熱之中，將是您從科學到金融領域最重要的橋樑。"})]})]})]})})})})});function ke(){return null}const Pe=`
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
`,Ne=`
# Pymoo 相容性與警告抑制
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
        import sys
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
`,Se=`
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
        df = pd.DataFrame({'Adj Close': data[name]}, index=dates)
        return df

try:
    import sys
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
`,Ee=`
# SciPy .rvs() 相容性墊片
# 在 Pyodide 環境中，scipy.stats 的 .rvs() 方法可能因 _fblas 模組無法載入而失敗。
# 此墊片攔截 ImportError，改用 numpy.random 提供等效的隨機取樣。
try:
    import scipy.stats as _scipy_stats
    import numpy as _np
    _orig_rvs = _scipy_stats.rv_generic.rvs

    def _patched_rvs(self, *args, **kwargs):
        try:
            return _orig_rvs(self, *args, **kwargs)
        except (ImportError, AttributeError) as _e:
            if 'fblas' not in str(_e) and 'flapack' not in str(_e):
                raise
            # 取得分佈名稱
            _name = getattr(self, 'name', getattr(getattr(self, 'dist', None), 'name', ''))
            _size = kwargs.get('size', None)
            _loc = kwargs.get('loc', 0)
            _scale = kwargs.get('scale', 1)
            _fallback_map = {
                'bernoulli': lambda: _np.random.binomial(1, args[0] if args else kwargs.get('p', 0.5), size=_size),
                'binom': lambda: _np.random.binomial(args[0] if args else kwargs.get('n', 1), args[1] if len(args) > 1 else kwargs.get('p', 0.5), size=_size),
                'uniform': lambda: _np.random.uniform(_loc, _loc + _scale, size=_size),
                'norm': lambda: _np.random.normal(_loc, _scale, size=_size),
                'expon': lambda: _np.random.exponential(_scale, size=_size) + _loc,
                'poisson': lambda: _np.random.poisson(args[0] if args else kwargs.get('mu', 1), size=_size),
                'geom': lambda: _np.random.geometric(args[0] if args else kwargs.get('p', 0.5), size=_size),
                'randint': lambda: _np.random.randint(args[0] if args else kwargs.get('low', 0), args[1] if len(args) > 1 else kwargs.get('high', 2), size=_size),
            }
            if _name in _fallback_map:
                return _fallback_map[_name]()
            raise

    _scipy_stats.rv_generic.rvs = _patched_rvs
    print("✅ SciPy 相容性：.rvs() 安全墊片已啟動。")
except Exception:
    pass
`,Le=`
# Lightweight SciPy stub to avoid ImportError in restricted environments
try:
    import scipy
except Exception:
    import types, sys
    import numpy as np
    import math

    scipy = types.ModuleType('scipy')
    stats = types.ModuleType('scipy.stats')

    def _ensure_array(x):
        return np.array(x)

    def _scalar_or_array(func):
        def wrapper(x, *args, **kwargs):
            x_arr = np.array(x)
            if x_arr.shape == ():
                return func(float(x), *args, **kwargs)
            return np.array([func(float(xi), *args, **kwargs) for xi in x_arr])
        return wrapper

    # Normal distribution
    def norm(loc=0.0, scale=1.0):
        class N:
            name = 'norm'
            def rvs(self, size=None, **kwargs):
                return np.random.normal(loc, scale, size=size)
            @_scalar_or_array
            def pdf(self, x):
                return math.exp(-0.5*((x-loc)/scale)**2)/(scale*math.sqrt(2*math.pi))
            @_scalar_or_array
            def cdf(self, x):
                return 0.5*(1+math.erf((x-loc)/(scale*math.sqrt(2))))
            def ppf(self, q):
                # numeric inverse via bisection
                def cdf_fn(x):
                    return 0.5*(1+math.erf((x-loc)/(scale*math.sqrt(2))))
                def scalar_ppf(qi):
                    a = loc - 10*scale
                    b = loc + 10*scale
                    for _ in range(60):
                        m = 0.5*(a+b)
                        if cdf_fn(m) < qi:
                            a = m
                        else:
                            b = m
                    return 0.5*(a+b)
                if hasattr(q, '__iter__'):
                    return np.array([scalar_ppf(float(qi)) for qi in q])
                return scalar_ppf(float(q))
            def stats(self, moments='mvsk'):
                return loc, scale**2, None, None
        return N()

    # Bernoulli
    def bernoulli(p=0.5):
        class B:
            name = 'bernoulli'
            def rvs(self, size=None, **kwargs):
                return np.random.binomial(1, p, size=size)
            def pmf(self, k):
                k_arr = np.array(k)
                return np.where(k_arr==1, p, 1-p)
            def stats(self, moments='mvsk'):
                return p, p*(1-p), None, None
        return B()

    # Binomial
    def binom(n, p):
        class Bn:
            name = 'binom'
            def rvs(self, size=None, **kwargs):
                return np.random.binomial(n, p, size=size)
            def pmf(self, k):
                k_arr = np.atleast_1d(k)
                res = []
                for ki in k_arr:
                    from math import comb
                    res.append(comb(int(n), int(ki)) * (p**int(ki)) * ((1-p)**(int(n)-int(ki))))
                return np.array(res).reshape(np.array(k).shape)
            def stats(self, moments='mvsk'):
                mean = n*p
                var = n*p*(1-p)
                return mean, var, None, None
        return Bn()

    # Uniform
    def uniform(loc=0.0, scale=1.0):
        class U:
            name = 'uniform'
            def rvs(self, size=None, **kwargs):
                return np.random.uniform(loc, loc+scale, size=size)
            @_scalar_or_array
            def pdf(self, x):
                return 1.0/scale if (loc <= x <= loc+scale) else 0.0
            @_scalar_or_array
            def cdf(self, x):
                return min(max((x-loc)/scale, 0.0), 1.0)
        return U()

    # Exponential
    def expon(scale=1.0, loc=0.0):
        class E:
            name = 'expon'
            def rvs(self, size=None, **kwargs):
                return np.random.exponential(scale, size=size) + loc
            @_scalar_or_array
            def pdf(self, x):
                if x < loc:
                    return 0.0
                return (1.0/scale) * math.exp(-(x-loc)/scale)
            @_scalar_or_array
            def cdf(self, x):
                if x < loc:
                    return 0.0
                return 1 - math.exp(-(x-loc)/scale)
        return E()

    # Poisson
    def poisson(mu):
        class P:
            name = 'poisson'
            def rvs(self, size=None, **kwargs):
                return np.random.poisson(mu, size=size)
            def pmf(self, k):
                k_arr = np.atleast_1d(k)
                res = []
                from math import factorial
                for ki in k_arr:
                    res.append(math.exp(-mu) * mu**int(ki) / factorial(int(ki)))
                return np.array(res).reshape(np.array(k).shape)
            def stats(self, moments='mvsk'):
                return mu, mu, None, None
        return P()

    # Geometric
    def geom(p=0.5):
        class G:
            name = 'geom'
            def rvs(self, size=None, **kwargs):
                return np.random.geometric(p, size=size)
            def pmf(self, k):
                k_arr = np.atleast_1d(k)
                res = [(1-p)**(int(ki)-1) * p for ki in k_arr]
                return np.array(res).reshape(np.array(k).shape)
            def stats(self, moments='mvsk'):
                mean = 1.0/p
                var = (1-p)/(p**2)
                return mean, var, None, None
        return G()

    # RandInt
    def randint(low, high=None):
        if high is None:
            low, high = 0, low
        class R:
            name = 'randint'
            def rvs(self, size=None, **kwargs):
                return np.random.randint(low, high, size=size)
        return R()

    # Beta
    def beta(a, b):
        class BETA:
            name = 'beta'
            def rvs(self, size=None, **kwargs):
                return np.random.beta(a, b, size=size)
            def mean(self):
                return a / (a + b)
            def stats(self, moments='mvsk'):
                mean = a / (a + b)
                var = a*b / ((a + b)**2 * (a + b + 1))
                return mean, var, None, None
        return BETA()

    # Gamma
    def gamma(shape, scale=1.0):
        class GAM:
            name = 'gamma'
            def rvs(self, size=None, **kwargs):
                return np.random.gamma(shape, scale, size=size)
            def mean(self):
                return shape * scale
            def stats(self, moments='mvsk'):
                mean = shape * scale
                var = shape * (scale**2)
                return mean, var, None, None
        return GAM()

    stats.norm = norm
    stats.bernoulli = bernoulli
    stats.binom = binom
    stats.uniform = uniform
    stats.expon = expon
    stats.poisson = poisson
    stats.beta = beta
    stats.gamma = gamma
    stats.geom = geom
    stats.randint = randint

    scipy.stats = stats
    sys.modules['scipy'] = scipy
    sys.modules['scipy.stats'] = stats
    print('✅ SciPy stub installed (enhanced).')

`,je=`
import warnings
# 忽略 DeprecationWarning 和 FutureWarning，保持 Console 乾淨
warnings.simplefilter("ignore", DeprecationWarning)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", SyntaxWarning)
# 額外針對 pandas 的 pyarrow 警告進行過濾
warnings.filterwarnings("ignore", message=".*pyarrow.*")

try:
    import matplotlib.pyplot as plt
except ImportError:
    pass

import numpy as np

# Ensure Matplotlib uses a non-GUI backend and set a reliable default font
try:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib as mpl
    mpl.rcParams['font.family'] = ['DejaVu Sans', 'sans-serif']
except Exception:
    pass

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
    from types import ModuleType
    d = ModuleType('distutils')
    d.version = ModuleType('distutils.version')
    d.util = ModuleType('distutils.util')
    d.spawn = ModuleType('distutils.spawn')
    sys.modules['distutils'] = d
    sys.modules['distutils.version'] = d.version
    sys.modules['distutils.util'] = d.util
    sys.modules['distutils.spawn'] = d.spawn
    print("✅ distutils 相容性：已建立虛擬模組。")

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
            return scipy.stats.binomtest(k, n, p, alternative).pvalue
        scipy.stats.binom_test = binom_test_shim
        print("✅ SciPy 相容性：binom_test 修正補丁已套用。")
except ImportError:
    pass
`;let Q=null,C=null;const qe=["https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js","https://unpkg.com/pyodide@0.26.4/pyodide.js"];function Ae(s){return new Promise((e,t)=>{const n=document.createElement("script");n.src=s,n.crossOrigin="anonymous",n.onload=e,n.onerror=()=>t(new Error(`Failed to load script: ${s}`)),document.head.appendChild(n)})}async function De(){if(typeof window.loadPyodide!="function"){console.warn("window.loadPyodide not found, loading dynamically...");for(const s of qe)try{if(await Ae(s),typeof window.loadPyodide=="function"){console.log(`Pyodide loaded from ${s}`);return}}catch(e){console.warn(`Failed to load Pyodide from ${s}:`,e.message)}throw new Error("Failed to load Pyodide from all CDN sources")}}class Ce{constructor(e){this.onProgress=e,this.current=0,this.target=0,this.message="",this.interval=null,this.step=.1}start(){this.interval||(this.interval=setInterval(()=>{if(this.current<this.target){const e=this.target-this.current,t=e>20?3.5:e>5?1.5:.5;this.current=Math.min(this.current+t,this.target),this.onProgress(Math.floor(this.current),this.message)}else this.target<99&&(this.current=Math.min(this.current+.08,99.9),this.onProgress(Math.floor(this.current),this.message))},100))}update(e,t){this.target=e,t&&(this.message=t)}async yieldToUI(){return new Promise(e=>setTimeout(e,30))}finish(e="Ready!"){this.interval&&clearInterval(this.interval),this.current=100,this.onProgress(100,e)}}async function Me(s){return Q?(s&&s(100,"Ready"),Q):C?C.then(e=>(s&&s(100,"Ready"),e)):(C=(async()=>{const e=new Ce(s);e.start();try{e.update(10,"正在啟動 Python 直譯器 (v0.26.4)..."),await De();let t=null,n=3;for(;n>0;)try{const l="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";console.log("Using Pyodide CDN for packages:",l),t=await window.loadPyodide({indexURL:l});break}catch(l){if(console.warn(`Failed to load Pyodide (attempts left: ${n-1}):`,l),n--,n===0)throw l;await new Promise(u=>setTimeout(u,1e3))}e.update(25,"引擎啟動完成，正在檢查本地暫存環境..."),await e.yieldToUI();const o="/lib/python3.12/site-packages";try{t.FS.mkdirTree(o)}catch{}t.FS.mount(t.FS.filesystems.IDBFS,{},o),e.update(26,"正在從本地儲存區載入 Python 環境..."),await new Promise(l=>{t.FS.syncfs(!0,u=>{u&&console.error("IDBFS sync error:",u),l()})}),await e.yieldToUI();const d=["numpy","pandas","matplotlib","scipy","statsmodels","sympy","lxml","micropip"],h=["numpy-financial","pandas-datareader","pyodide-http","pymoo==0.4.1","seaborn"],r=t.FS.readdir(o),g=d.filter(l=>!r.includes(l)&&!r.some(u=>u.startsWith(l+"-"))),c=h.filter(l=>{const u=l.replace("-","_");return!r.includes(l)&&!r.includes(u)&&!r.some(w=>w.startsWith(l+"-"))&&!r.some(w=>w.startsWith(u+"-"))});if(g.length>0||c.length>0){const l=[...g,...c];if(e.update(30,`正在同步並安裝套件: ${l.join(", ")}...`),g.length>0&&(e.update(40,`正在從 CDN 獲取核心科學套件 (${g.length} 個)...`),await t.loadPackage(g)),c.length>0){e.update(70,`正在掛載第三方擴充資源 (${c.length} 個)...`),await t.loadPackage("micropip");const u=t.pyimport("micropip"),w=c.map(S=>S==="numpy-financial"?"/pwa_FRM_Book1_python/wheels/numpy_financial-1.0.0-py3-none-any.whl":S);await u.install(w)}e.update(85,"正在固化環境映射至本地磁碟..."),await new Promise(u=>{t.FS.syncfs(!1,w=>{w&&console.error("IDBFS save error:",w),u()})}),e.update(90,"✅ 環境已完成本地持久化儲存")}else e.update(90,"🚀 偵測到本地環境快照，已跳過網路請求");return await e.yieldToUI(),e.update(92,"⚙️ 配置：正在載入環境優化補丁..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(`
import warnings
warnings.simplefilter("ignore", DeprecationWarning)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", SyntaxWarning)
warnings.filterwarnings("ignore", message=".*pyarrow.*")
                `),t.runPythonAsync(`
import numpy as np
if not hasattr(np, 'int'): np.int = int
if not hasattr(np, 'float'): np.float = float
if not hasattr(np, 'bool'): np.bool = bool
try:
    import numpy_financial as npf
    for func in ['irr', 'npv', 'pmt', 'pv', 'rate', 'nper', 'fv', 'ppmt', 'ipmt']:
        if not hasattr(np, func) and hasattr(npf, func): setattr(np, func, getattr(npf, func))
except ImportError: pass
                `),t.runPythonAsync(`
try:
    import scipy.stats
    if not hasattr(scipy.stats, 'binom_test') and hasattr(scipy.stats, 'binomtest'):
        def binom_test_shim(k, n=None, p=0.5, alternative='two-sided'):
            return scipy.stats.binomtest(k, n, p, alternative).pvalue
        scipy.stats.binom_test = binom_test_shim
except: pass
                `)]),await e.yieldToUI(),e.update(98,"🚀 系統：正在啟動 Pymoo & QuantLib 虛擬層..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(Le),t.runPythonAsync(je),t.runPythonAsync(Ne),t.runPythonAsync(Pe),t.runPythonAsync(Se),t.runPythonAsync(Ee)]),e.update(99,"🛡️ 系統：權限校正與輸入掛鉤注入..."),await t.runPythonAsync(`
import builtins
import js
def custom_input(prompt = ""):
    try:
        val = js.window.prompt(prompt if prompt else "")
        return val if val is not None else ""
    except Exception: return ""
builtins.input = custom_input
            `),await e.yieldToUI(),Q=t,C=null,e.finish("載入完成！正在進入主介面..."),t}catch(t){throw C=null,e.interval&&clearInterval(e.interval),console.error("Failed to load Pyodide:",t),t}})(),C)}async function Ie(s,e,t=3e4){let n;const o=new Promise((d,h)=>{n=setTimeout(()=>{h(new Error(`Execution timed out after ${t/1e3} seconds`))},t)});try{return await Promise.race([s.runPythonAsync(e),o])}finally{clearTimeout(n)}}async function $e(s){if(s)try{await s.runPythonAsync(`
            import gc
import matplotlib.pyplot as plt
            plt.close('all')
            gc.collect()
                `)}catch{}}async function Te(s){try{const e=await s.runPythonAsync(`
import matplotlib.pyplot as plt
len(plt.get_fignums())
    `);if(e===0)return[];const t=[];for(let n=0;n<e;n++){const o=await s.runPythonAsync(`
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
      `);t.push(`data:image/png;base64,${o}`)}return await s.runPythonAsync('import matplotlib.pyplot as plt; plt.close("all")'),t}catch(e){return console.error("Failed to capture plots:",e),[]}}async function J(s,e=!1){try{const t=e?"module://matplotlib_pyodide.wasm_backend":"AGG";await s.runPythonAsync(`
import matplotlib
import matplotlib.pyplot as plt
matplotlib.use('${t}')
if plt.style.available and 'default' in plt.style.available:
    plt.style.use('default')
    `)}catch(t){console.error("✗ Matplotlib 初始化失敗:",t)}}async function Fe(s){try{await s.runPythonAsync(`
import matplotlib.pyplot as plt
if len(plt.get_fignums()) > 0:
    plt.show()
    `)}catch(e){console.error("Failed to show plots:",e)}}function K(s){const e=s.message||String(s),t=[{pattern:/NameError: name '(.+)' is not defined/,format:n=>`❌ 變數錯誤：'${n[1]}' 未定義

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
• 檢查資料中是否有零值`},{pattern:/ImportError: (.+)/,format:n=>`❌ 匯入錯誤：${n[1]}

💡 可能的原因：
• 模組內部代碼執行出錯
• 該模組的某些子功能不支援瀏覽器環境
• 循環引用或其他內部相容性問題

🔧 建議：
• 檢查模組名稱是否正確
• 某些 C 擴展模組在瀏覽器中受限
• 點擊「查看詳情」了解完整錯誤堆棧`},{pattern:/ImportError/,format:()=>`❌ 匯入錯誤

💡 可能的原因：
• 模組匯入失敗
• 模組內部錯誤

🔧 建議：
• 確認模組名稱正確
• 檢查是否支援該模組
• 查看完整錯誤訊息了解詳情`}];for(const{pattern:n,format:o}of t){const d=e.match(n);if(d)return o(d)}return`❌ 執行錯誤

${e}

💡 提示：
• 仔細閱讀錯誤訊息
• 檢查程式碼語法和邏輯
• 使用 print() 除錯
• 參考範例程式碼

🔧 除錯技巧：
• 逐行執行程式碼找出問題
• 使用 print() 輸出變數值
• 簡化程式碼，逐步測試`}class ze{constructor(){this.metrics={},this.enabled=!0}start(e){this.enabled&&(this.metrics[e]={start:performance.now(),end:null,duration:null})}end(e){if(!this.enabled||!this.metrics[e])return 0;const t=performance.now(),n=this.metrics[e].start,o=t-n;return this.metrics[e].end=t,this.metrics[e].duration=o,this.log(e,o),o}log(e,t){const n=t<100?"⚡":t<1e3?"⏱️":"🐌",o=t<100?"color: green":t<1e3?"color: orange":"color: red";console.log(`%c${n} ${e}: ${t.toFixed(2)}ms`,o),t>1e3&&console.warn(`⚠️ ${e} 執行時間過長: ${t.toFixed(2)}ms`)}async measure(e,t){this.start(e);try{return await t()}finally{this.end(e)}}getMetric(e){return this.metrics[e]||null}getMetrics(){return{...this.metrics}}getStats(){const e=Object.values(this.metrics).filter(t=>t.duration!==null).map(t=>t.duration);return e.length===0?{count:0,total:0,average:0,min:0,max:0}:{count:e.length,total:e.reduce((t,n)=>t+n,0),average:e.reduce((t,n)=>t+n,0)/e.length,min:Math.min(...e),max:Math.max(...e)}}clear(e){e?delete this.metrics[e]:this.metrics={}}setEnabled(e){this.enabled=e}report(){const e=this.getStats();console.group("📊 效能報告"),console.log(`總計測量: ${e.count} 次`),console.log(`總時間: ${e.total.toFixed(2)}ms`),console.log(`平均時間: ${e.average.toFixed(2)}ms`),console.log(`最快: ${e.min.toFixed(2)}ms`),console.log(`最慢: ${e.max.toFixed(2)}ms`),console.groupEnd(),console.group("📋 詳細指標"),Object.entries(this.metrics).forEach(([t,n])=>{n.duration!==null&&console.log(`${t}: ${n.duration.toFixed(2)}ms`)}),console.groupEnd()}}const M=new ze;M.setEnabled(!1);let X=!1;function Re(){if(!X&&(X=!0,"PerformanceObserver"in window)){new PerformanceObserver(o=>{const d=o.getEntries(),h=d[d.length-1];console.log("🎨 LCP:",h.renderTime||h.loadTime)}).observe({entryTypes:["largest-contentful-paint"]}),new PerformanceObserver(o=>{o.getEntries().forEach(h=>{console.log("⚡ FID:",h.processingStart-h.startTime)})}).observe({entryTypes:["first-input"]});let t=0;new PerformanceObserver(o=>{o.getEntries().forEach(h=>{h.hadRecentInput||(t+=h.value)}),console.log("📐 CLS:",t)}).observe({entryTypes:["layout-shift"]})}}const Be=p.lazy(()=>me(()=>import("./CodePreviewPanel-BAmgNmSY.js"),__vite__mapDeps([0,1,2,3]))),ee={pandas:"pandas",matplotlib:"matplotlib",scipy:"scipy",statsmodels:"statsmodels",sympy:"sympy",autograd:"autograd",lxml:"lxml",openpyxl:"openpyxl",requests:"requests",numpy_financial:"wheels/numpy_financial-1.0.0-py3-none-any.whl",seaborn:"wheels/seaborn-0.13.2-py3-none-any.whl",pymoo:"wheels/pymoo-0.4.1-py3-none-any.whl",pandas_datareader:"wheels/pandas_datareader-0.10.0-py3-none-any.whl",pyodide_http:"wheels/pyodide_http-0.2.2-py3-none-any.whl",mpl_toolkits:"matplotlib",pylab:"matplotlib"},te={requests:["certifi","charset_normalizer","idna","urllib3"],certifi:"wheels/certifi-2026.1.4-py3-none-any.whl",charset_normalizer:"wheels/charset_normalizer-3.4.4-py3-none-any.whl",idna:"wheels/idna-3.11-py3-none-any.whl",urllib3:"wheels/urllib3-2.6.3-py3-none-any.whl"};function Qe(){const[s,e]=p.useState(null),[t,n]=p.useState(!0),[o,d]=p.useState(0),[h,r]=p.useState("初始化中..."),[g,c]=p.useState([]),[i,l]=p.useState(!0),[u,w]=p.useState(null),[S,b]=p.useState(null),[k,q]=p.useState(""),[$,x]=p.useState(""),[O,A]=p.useState([]),[T,F]=p.useState(!1),[U,ae]=p.useState(!1),[E,se]=p.useState(()=>{const f=localStorage.getItem("theme");return f==="dark"||!f&&!1}),[W,ne]=p.useState(600),[z]=p.useState(new Set),[G,H]=p.useState(null);p.useEffect(()=>{l(!0);const f=`/pwa_FRM_Book1_python/data/chapters.json?t=${Date.now()}`;fetch(f).then(m=>m.json()).then(m=>{m&&m.length>0&&c(m),l(!1)}).catch(m=>{console.error("Failed to load chapters:",m),l(!1)})},[]),p.useEffect(()=>{Me((m,_)=>{d(m),r(_)}).then(m=>{e(m),n(!1),M.end("pyodide-init")}),Re();const f=[];if("serviceWorker"in navigator){const m=setInterval(()=>{navigator.serviceWorker.getRegistrations().then(P=>{P.forEach(N=>N.update())})},36e5),_=()=>{};navigator.serviceWorker.addEventListener("controllerchange",_),f.push(()=>{clearInterval(m),navigator.serviceWorker.removeEventListener("controllerchange",_)})}if("storage"in navigator&&"estimate"in navigator.storage){const m=async()=>{try{const P=await navigator.storage.estimate();P.usage&&P.quota&&P.usage/P.quota*100>80&&console.warn("Storage usage is high (>80%). Consider cleaning up.")}catch(P){console.warn("Failed to check storage quota:",P)}};m();const _=setInterval(m,300*1e3);f.push(()=>clearInterval(_))}return()=>{f.forEach(m=>m())}},[]),p.useEffect(()=>{localStorage.setItem("theme",E?"dark":"light"),document.documentElement.setAttribute("data-theme",E?"dark":"light")},[E]);const Y=async(f,m=!1)=>{var Z;if(!s)return;const _=f.match(/^\s*(?:from|import)\s+([a-zA-Z0-9_]+)/gm);if(!_)return;const P=["sys","os","io","time","base64","json","datetime","math","re","warnings","builtins","types","random","csv","copy","collections","itertools","functools","pathlib"],N=["numpy","pandas","matplotlib","scipy","statsmodels","sympy","lxml","micropip","js","builtins","QuantLib"],L=[...new Set(_.map(v=>{const y=v.trim().split(/\s+/);return y[0]==="from",y[1].split(".")[0]}))].filter(v=>!P.includes(v)&&!N.includes(v)).filter(v=>!z.has(v));if(L.length===0)return;const D=[],V=new URL("/pwa_FRM_Book1_python/",window.location.origin).href;if(L.forEach(v=>{const y=ee[v];y?(D.push(y.endsWith(".whl")?V+y:y),(te[v]||[]).forEach(I=>{const R=te[I]||I;D.push(R.endsWith(".whl")?V+R:R)})):D.push(v)}),D.length>0)try{const v=[...new Set(D)];m||x(y=>y+`正在動態載入所需套件 [${L.join(", ")}]...
`),await s.loadPackage("micropip"),await s.runPythonAsync(`
import micropip
await micropip.install(${JSON.stringify(v)}, keep_going=True)
        `),L.includes("matplotlib")&&(await J(s),G||H("AGG")),L.forEach(y=>{z.add(y);const j=ee[y];j&&!j.endsWith(".whl")&&z.add(j)}),m||x(y=>y+`✅ 套件載入完成。
`)}catch(v){if(console.warn("Dependency loading failed:",v),!m){const y=v.message||String(v);if(y.includes("Can't find a pure Python 3 wheel")){const j=((Z=y.match(/for: '([^']+)'/))==null?void 0:Z[1])||"unknown";x(I=>I+`⚠️ 套件 "${j}" 無法載入（可能不支援瀏覽器環境），嘗試繼續執行...
`)}else x(j=>j+`⚠️ 套件載入出現問題，嘗試直接執行...
`)}}},re=async f=>{if(!(!s||T||!f)){M.start("run-code"),F(!0),x(`執行中...
`),A([]);try{await $e(s);const m=f.includes("matplotlib.widgets")||f.includes("Slider")||f.includes("Button");ae(m);const _=m?"module://matplotlib_pyodide.wasm_backend":"AGG";if(G!==_&&(await J(s,m),H(_)),await s.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `),m){const N=document.getElementById("pyodide-plot-container");N&&(N.innerHTML="",window.document.pyodideMplTarget=N)}await Y(f);try{await Ie(s,f)}catch(N){const L=await s.runPythonAsync("sys.stdout.getvalue()"),D=K(N);x((L?L+`
`:"")+D),F(!1),M.end("run-code");return}const P=await s.runPythonAsync("sys.stdout.getvalue()");if(x(P||"執行完成（無文字內容輸出 ）"),U)await Fe(s);else{const N=await Te(s);A(N)}}catch(m){const _=K(m);x(_),console.error(m)}finally{F(!1),M.end("run-code")}}},oe=f=>{if(w(f),b(null),q(""),x(""),A([]),f&&f.examples&&s){const m=f.examples.map(_=>_.code).join(`
`);Y(m,!0)}},ie=f=>{b(f),x(""),A([])},le=f=>{b(f),x(""),A([])},de=()=>{b(null),x(""),A([])},ce=t;return a.jsxs("div",{className:`app ${E?"dark":""}`,children:[a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"top-bar",children:[a.jsxs("div",{className:"top-bar-left",children:[a.jsx(pe,{size:20,className:"logo-icon"}),a.jsx("span",{className:"app-title",children:"FRM_Book1 (基礎篇)"})]}),a.jsx(we,{chapters:g,currentChapter:u,onChapterSelect:oe,currentScript:S,onScriptSelect:le,selectedTopicId:k,onTopicSelect:q,loading:i}),a.jsx("div",{className:"top-bar-right",children:a.jsx("button",{className:"theme-toggle",onClick:()=>se(!E),title:E?"切換到亮色模式":"切換到暗色模式",children:E?a.jsx(ue,{size:20}):a.jsx(fe,{size:20})})})]}),ce&&a.jsx("div",{className:"hydration-overlay",children:a.jsxs("div",{className:"hydration-card",children:[a.jsxs("div",{className:"hydration-header",children:[a.jsx("div",{className:"hydration-title",children:"FRM Python 引擎啟動中"}),a.jsx("div",{className:"hydration-subtitle",children:"Financial Risk Management"})]}),a.jsx("div",{className:"hydration-progress-container",children:a.jsx("div",{className:"hydration-progress-bar",style:{width:`${o}%`}})}),a.jsxs("div",{className:"hydration-status",children:[a.jsx("span",{children:h}),a.jsxs("span",{children:[o,"%"]})]})]})}),a.jsxs("div",{className:"panes-container",children:[a.jsx("div",{className:"content-pane",children:a.jsx(xe,{chapter:u,onCodeClick:ie,selectedTopicId:k,darkMode:E,output:$,isRunning:T,plotImages:O,onClearOutput:()=>{x(""),A([])}})}),S&&a.jsx("div",{className:"preview-pane",style:{width:`${W}px`},children:a.jsx(p.Suspense,{fallback:a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",color:"#888"},children:"Loading Editor..."}),children:a.jsx(Be,{script:S,onClose:de,onRun:re,isRunning:T,isLoading:t,output:$,images:O,isInteractive:U,darkMode:E,width:W,onResize:ne})})})]})]}),a.jsx(ke,{pyodide:s})]})}async function Oe(){try{if(!("serviceWorker"in navigator))return;const s="frm_sw_cleanup_done_v1";if(localStorage.getItem(s))return;if(!navigator.serviceWorker.controller){localStorage.setItem(s,"1");return}console.info("[AUTO-CLEAN] Detected active Service Worker — cleaning caches and storage.");try{const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(t=>t.unregister().catch(()=>{}))),console.info("[AUTO-CLEAN] serviceWorker registrations unregistered.")}catch(e){console.warn("[AUTO-CLEAN] Failed to unregister service workers",e)}try{if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t).catch(()=>{}))),console.info("[AUTO-CLEAN] CacheStorage cleared:",e)}}catch(e){console.warn("[AUTO-CLEAN] Failed to clear CacheStorage",e)}try{if("databases"in indexedDB){const e=await indexedDB.databases();await Promise.all(e.map(t=>indexedDB.deleteDatabase(t.name).catch(()=>{}))),console.info("[AUTO-CLEAN] IndexedDB databases deleted:",e.map(t=>t.name))}else{const e=["pyodide","emscripten-archives","idb-filesystem","file_storage"];await Promise.all(e.map(t=>indexedDB.deleteDatabase(t).catch(()=>{}))),console.info("[AUTO-CLEAN] IndexedDB fallback delete attempted for candidates.")}}catch(e){console.warn("[AUTO-CLEAN] Failed to clear IndexedDB",e)}try{localStorage.clear(),sessionStorage.clear(),console.info("[AUTO-CLEAN] localStorage and sessionStorage cleared.")}catch(e){console.warn("[AUTO-CLEAN] Failed to clear storage",e)}try{localStorage.setItem(s,"1")}catch{}try{console.info("[AUTO-CLEAN] Reloading page to load fresh assets."),window.location.reload(!0)}catch(e){console.info("[AUTO-CLEAN] Reload skipped.",e)}}catch(s){console.warn("[AUTO-CLEAN] Unexpected error",s)}}Oe().catch(()=>{});he.createRoot(document.getElementById("root")).render(a.jsx(ge.StrictMode,{children:a.jsx(Qe,{})}));
