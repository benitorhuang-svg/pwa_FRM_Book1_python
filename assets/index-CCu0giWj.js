const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodePreviewPanel-BAmgNmSY.js","assets/vendor-react-Dhy20vu4.js","assets/vendor-Duqdn4fa.js","assets/CodePreviewPanel-V3Zu5mOS.css"])))=>i.map(i=>d[i]);
import{r as u,j as s,C as B,_ as me,B as ue,S as pe,M as fe,R as he,a as ge}from"./vendor-react-Dhy20vu4.js";import{B as ye,p as ve}from"./vendor-utils-DahDrsZr.js";import{m as _e}from"./vendor-katex-DnHNbJWt.js";import"./vendor-Duqdn4fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();function we({chapters:a,currentChapter:e,onChapterSelect:t,currentScript:r,onScriptSelect:o,selectedTopicId:c,onTopicSelect:h,loading:n}){var d;const g=u.useMemo(()=>{var b;const i=(b=e==null?void 0:e.content)==null?void 0:b.intro;if(!i)return[];let l="";if(typeof i=="string")l=i;else if(typeof i=="object"&&i.body)l=i.body;else return[];const p=/^###\s+(.+)$/gm,w=[];let L;for(;(L=p.exec(l))!==null;){const P=L[1].trim(),N="topic-"+P.replace(/\s+/g,"-").toLowerCase();w.push({id:N,title:P})}return w},[e]);return s.jsxs("div",{className:"top-nav-container",children:[s.jsx("div",{className:"nav-group",children:s.jsxs("div",{className:"custom-select-wrapper",children:[s.jsxs("select",{id:"chapter-select",name:"chapter-select",value:(e==null?void 0:e.id)||"",onChange:i=>{const l=a.find(p=>p.id===i.target.value);l&&t(l)},disabled:n||a.length===0,className:"custom-select",children:[s.jsx("option",{value:"",disabled:!0,children:n?"載入中...":"📖 章節選擇"}),a.map(i=>s.jsx("option",{value:i.id,children:i.title},i.id))]}),s.jsx(B,{className:"select-icon",size:16})]})}),s.jsx("div",{className:`nav-group ${!e||g.length===0?"disabled":""}`,children:s.jsxs("div",{className:"custom-select-wrapper",children:[s.jsxs("select",{id:"topic-select",name:"topic-select",value:c,onChange:i=>h(i.target.value),disabled:!e||g.length===0,className:"custom-select",children:[s.jsx("option",{value:"",children:"💡 重點導覽"}),g.map(i=>s.jsx("option",{value:i.id,children:i.title},i.id))]}),s.jsx(B,{className:"select-icon",size:16})]})}),s.jsx("div",{className:`nav-group ${e?"":"disabled"}`,children:s.jsxs("div",{className:"custom-select-wrapper",children:[s.jsxs("select",{id:"script-select",name:"script-select",value:(r==null?void 0:r.filename)||"",onChange:i=>{if(e!=null&&e.examples){const l=e.examples.find(p=>p.filename===i.target.value);l&&o(l)}},disabled:!e||!e.examples,className:"custom-select",children:[s.jsx("option",{value:"",disabled:!0,children:"💻 程式代碼"}),(d=e==null?void 0:e.examples)==null?void 0:d.map(i=>s.jsx("option",{value:i.filename,children:i.filename},i.filename))]}),s.jsx(B,{className:"select-icon",size:16})]})})]})}const be=new ye(_e({throwOnError:!1,output:"html",nonStandard:!0})),xe=u.memo(({chapter:a,onCodeClick:e,selectedTopicId:t,output:r,isRunning:o,plotImages:c})=>{const h=u.useMemo(()=>{var g;if(!a)return null;const n=(g=a.content)==null?void 0:g.intro;if(n){let d="";typeof n=="string"?d=n:typeof n=="object"&&(d=`# ${n.title||""}

`,n.roadmap&&(n.roadmap.guide&&(d+=`## 📌 章節導覽
${n.roadmap.guide}

`),n.roadmap.objectives&&(d+=`## 🎯 學習目標
${n.roadmap.objectives}

`),n.roadmap.topics&&(d+=`## 📋 章節重點分明
${n.roadmap.topics}

`)),n.value&&(n.value.practical&&(d+=`## 💼 FRM 考試與實務連結
${n.value.practical}

`),n.value.theory&&(d+=`## 🏛️ 財金理論深度解析
${n.value.theory}

`),n.value.further_reading&&(d+=`## 🚀 延伸閱讀與進階議題
${n.value.further_reading}

`)),n.implementation&&(n.implementation.python&&(d+=`## 🐍 Python 實踐價值
${n.implementation.python}

`),n.implementation.logic&&(d+=`## ⚙️ 代碼核心邏輯
${n.implementation.logic}

`),n.implementation.scenarios&&(d+=`## 💻 應用場景清單
${n.implementation.scenarios}

`)),n.body&&(d+=`
## 📝 章節重點詳細解說的內容
${n.body}`)),d=d.replace(/##\s*💻\s*應用場景清單[\s\S]*?(?=##|$)/g,""),d=d.replace(/\s*\$\$\s*/g,`
$$
`).replace(new RegExp("(?<!\\$)\\$(?!\\$)\\s*(.*?)\\s*(?<!\\$)\\$(?!\\$)","g"),"$$$1$");let i=be.parse(d);i=i.replace(/<h3>(.*?)<\/h3>/g,(b,P)=>`<h3 id="${"topic-"+P.replace(/<[^>]*>/g,"").trim().replace(/\s+/g,"-").toLowerCase()}">${P}</h3>`);let p=ve.sanitize(i,{ADD_TAGS:["math","annotation","semantics","mrow","msub","msup","msubsup","mover","munder","munderover","mmultiscripts","mprec","mnext","mtable","mtr","mtd","mfrac","msqrt","mroot","mstyle","merror","mpadded","mphantom","mfenced","menclose","ms","mglyph","maligngroup","malignmark","maction","svg","path","use","span","div"],ADD_ATTR:["id","target","xlink:href","class","style","aria-hidden","viewBox","d","fill","stroke","stroke-width","data-filename"]});return[...a.examples||[]].sort((b,P)=>P.filename.length-b.filename.length).forEach(b=>{const P=b.filename.replace(".","\\."),N=new RegExp(`(?<!['".\\w])(${P})(?!['".\\w])`,"g");p=p.replace(N,`<span class="code-link" data-filename="${b.filename}">${b.filename}</span>`)}),p}else{const d=a.examples||[];let i=`
        <div class="chapter-intro">
          <h2>${a.title}</h2>
          <p>本章包含 ${d.length} 個程式範例</p>
          <div class="example-grid">
      `;return d.forEach((l,p)=>{i+=`
          <div class="example-card">
            <div class="example-number">${p+1}</div>
            <div class="example-info">
              <h3>${l.title}</h3>
              <span class="code-link" data-filename="${l.filename}">${l.filename}</span>
            </div>
          </div>
        `}),i+=`
          </div>
        </div>
      `,i}},[a]);return u.useEffect(()=>{const n=g=>{if(g.target.classList.contains("code-link")){const d=g.target.dataset.filename;let i=null;a!=null&&a.examples&&(i=a.examples.find(l=>l.filename===d),i&&!i.metadata&&(i.metadata={description:i.title})),i&&e(i)}};return document.addEventListener("click",n),()=>document.removeEventListener("click",n)},[a,e]),u.useEffect(()=>{const n=document.querySelector(".content-scroll");n&&(n.scrollTop=0)},[a]),u.useEffect(()=>{if(t){const n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}},[t]),u.useEffect(()=>{if(r||c&&c.length>0||o){const n=document.querySelector(".content-scroll");n&&n.scrollTo({top:0,behavior:"instant"})}},[r,c,o]),s.jsx("div",{className:"content-panel",children:s.jsx("div",{className:"content-scroll",children:r||c&&c.length>0||o?s.jsxs("div",{id:"execution-output",className:"execution-output-section",children:[o&&s.jsxs("div",{className:"running-indicator",children:[s.jsx("div",{className:"spinner"}),s.jsx("span",{children:"程式執行中..."})]}),r&&s.jsx("pre",{className:"output-text",children:r}),c&&c.length>0&&s.jsx("div",{className:"output-images",children:c.map((n,g)=>s.jsx("div",{className:"output-image",children:s.jsx("img",{src:n,alt:`Plot ${g+1}`})},g))})]}):h?s.jsx("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:h}}):s.jsx("div",{className:"welcome-screen",children:s.jsxs("div",{className:"welcome-card premium-welcome",children:[s.jsxs("div",{className:"welcome-brand",children:[s.jsx("img",{src:"book-cover.jpg",alt:"FRM Python 理論與實戰",className:"welcome-book-img"}),s.jsx("a",{href:"https://deepwisdom.com.tw/product/%e6%89%8b%e8%a1%93%e5%88%80%e8%88%ac%e7%b2%be%e6%ba%96%e7%9a%84frm-%e7%94%a8python%e7%a7%91%e5%ad%b8%e7%ae%a1%e6%8e%a7%e8%b2%a1%e9%87%91%e9%a2%a8%e9%9a%aa%e5%9f%ba%e7%a4%8e%e7%af%87dm2301/",target:"_blank",rel:"noopener noreferrer",className:"welcome-purchase-btn",children:"[ 本書官網購買連結 ]"})]}),s.jsxs("div",{className:"welcome-content",children:[s.jsxs("h2",{className:"welcome-title",children:["手術刀般精準的 FRM 用 Python",s.jsx("br",{}),"科學管控財金風險：基礎篇"]}),s.jsx("div",{className:"welcome-slogan",children:"☆★☆★【有如手術刀般精準！利用Python幫你管控財金風險！】★☆★☆"}),s.jsxs("div",{className:"welcome-text-scroll",children:[s.jsx("p",{children:"本書使用了當紅的程式語言 Python，從程式設計的基本觀念談起。沒有 Python 基礎也沒關係，完整的 Python 介紹，讓您能順利銜接資料科學家最常用的套件整理，包括 Numpy，以及特別針對格式化表格類處理的 Pandas，也充分介紹了 Dataframe 的各種應用。"}),s.jsx("p",{children:"在有了充足的資料之後，接著需要有可以展示數據的工具。除了大家最愛用的 Matplotlib 之外，也介紹了高手才會用的 Seaborn。當熟悉了工具之後，就正式進入了金融理論，包括基礎的機率及統計、各種模型及機率分佈，以及抽樣、信賴區間等內容說明。"}),s.jsx("p",{children:"最後則進入到金融領域，除了介紹各種計算的演算法、模型、術語，也結合了前面所學的 Python 及工具，並講解金融商品最重要的「固定收益分析」。"}),s.jsx("p",{children:"本書從科學下手，讓您精準了解金融原理，確保金錢不再陷入水深火熱之中，將是您從科學到金融領域最重要的橋樑。"})]})]})]})})})})});function Pe(){return null}const Se=`
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
`,je=`
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
`;let O=null,F=null;class Le{constructor(e){this.onProgress=e,this.current=0,this.target=0,this.message="",this.interval=null,this.step=.1}start(){this.interval||(this.interval=setInterval(()=>{if(this.current<this.target){const e=this.target-this.current,t=e>20?3.5:e>5?1.5:.5;this.current=Math.min(this.current+t,this.target),this.onProgress(Math.floor(this.current),this.message)}else this.target<99&&(this.current=Math.min(this.current+.08,99.9),this.onProgress(Math.floor(this.current),this.message))},100))}update(e,t){this.target=e,t&&(this.message=t)}async yieldToUI(){return new Promise(e=>setTimeout(e,30))}finish(e="Ready!"){this.interval&&clearInterval(this.interval),this.current=100,this.onProgress(100,e)}}async function ke(a){return O?(a&&a(100,"Ready"),O):F?F.then(e=>(a&&a(100,"Ready"),e)):(F=(async()=>{const e=new Le(a);e.start();try{e.update(10,"正在啟動 Python 直譯器 (v0.26.4)...");let t=null,r=3;for(;r>0;)try{const l="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";console.log("Using Pyodide CDN for packages:",l),t=await window.loadPyodide({indexURL:l});break}catch(l){if(console.warn(`Failed to load Pyodide (attempts left: ${r-1}):`,l),r--,r===0)throw l;await new Promise(p=>setTimeout(p,1e3))}e.update(25,"引擎啟動完成，正在檢查本地暫存環境..."),await e.yieldToUI();const o="/lib/python3.12/site-packages";try{t.FS.mkdirTree(o)}catch{}t.FS.mount(t.FS.filesystems.IDBFS,{},o),e.update(26,"正在從本地儲存區載入 Python 環境..."),await new Promise(l=>{t.FS.syncfs(!0,p=>{p&&console.error("IDBFS sync error:",p),l()})}),await e.yieldToUI();const c=["numpy","pandas","matplotlib","scipy","micropip"],h=["numpy-financial"],n=t.FS.readdir(o),g=c.filter(l=>!n.includes(l)&&!n.some(p=>p.startsWith(l+"-"))),d=h.filter(l=>{const p=l.replace("-","_");return!n.includes(l)&&!n.includes(p)&&!n.some(w=>w.startsWith(l+"-"))&&!n.some(w=>w.startsWith(p+"-"))});if(g.length>0||d.length>0){const l=[...g,...d];if(e.update(30,`正在同步並安裝套件: ${l.join(", ")}...`),g.length>0&&(e.update(40,`正在從 CDN 獲取核心科學套件 (${g.length} 個)...`),await t.loadPackage(g)),d.length>0){e.update(70,`正在掛載第三方擴充資源 (${d.length} 個)...`),await t.loadPackage("micropip");const p=t.pyimport("micropip"),w=d.map(L=>L==="numpy-financial"?"/pwa_FRM_Book1_python/wheels/numpy_financial-1.0.0-py3-none-any.whl":L);await p.install(w)}e.update(85,"正在固化環境映射至本地磁碟..."),await new Promise(p=>{t.FS.syncfs(!1,w=>{w&&console.error("IDBFS save error:",w),p()})}),e.update(90,"✅ 環境已完成本地持久化儲存")}else e.update(90,"🚀 偵測到本地環境快照，已跳過網路請求");return await e.yieldToUI(),e.update(92,"⚙️ 配置：正在載入環境優化補丁..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(`
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
                `)]),await e.yieldToUI(),e.update(98,"🚀 系統：正在啟動 Pymoo & QuantLib 虛擬層..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(je),t.runPythonAsync(Se)]),e.update(99,"🛡️ 系統：權限校正與輸入掛鉤注入..."),await t.runPythonAsync(`
import builtins
import js
def custom_input(prompt = ""):
    try:
        val = js.window.prompt(prompt if prompt else "")
        return val if val is not None else ""
    except Exception: return ""
builtins.input = custom_input
            `),await e.yieldToUI(),O=t,F=null,e.finish("載入完成！正在進入主介面..."),t}catch(t){throw F=null,e.interval&&clearInterval(e.interval),console.error("Failed to load Pyodide:",t),t}})(),F)}async function qe(a,e,t=3e4){let r;const o=new Promise((c,h)=>{r=setTimeout(()=>{h(new Error(`Execution timed out after ${t/1e3} seconds`))},t)});try{return await Promise.race([a.runPythonAsync(e),o])}finally{clearTimeout(r)}}async function Ee(a){if(a)try{await a.runPythonAsync(`
            import gc
import matplotlib.pyplot as plt
            plt.close('all')
            gc.collect()
                `)}catch{}}async function Ne(a){try{const e=await a.runPythonAsync(`
import matplotlib.pyplot as plt
len(plt.get_fignums())
    `);if(e===0)return[];const t=[];for(let r=0;r<e;r++){const o=await a.runPythonAsync(`
import matplotlib.pyplot as plt
import io
import base64

# 取得指定的圖表
fig = plt.figure(${r+1})
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=150, bbox_inches='tight', facecolor='white')
buf.seek(0)

# 轉換為 base64
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
img_base64
      `);t.push(`data:image/png;base64,${o}`)}return await a.runPythonAsync('import matplotlib.pyplot as plt; plt.close("all")'),t}catch(e){return console.error("Failed to capture plots:",e),[]}}async function J(a,e=!1){try{const t=e?"module://matplotlib_pyodide.wasm_backend":"AGG";await a.runPythonAsync(`
import matplotlib
import matplotlib.pyplot as plt
matplotlib.use('${t}')
if plt.style.available and 'default' in plt.style.available:
    plt.style.use('default')
    `)}catch(t){console.error("✗ Matplotlib 初始化失敗:",t)}}async function $e(a){try{await a.runPythonAsync(`
import matplotlib.pyplot as plt
if len(plt.get_fignums()) > 0:
    plt.show()
    `)}catch(e){console.error("Failed to show plots:",e)}}function K(a){const e=a.message||String(a),t=[{pattern:/NameError: name '(.+)' is not defined/,format:r=>`❌ 變數錯誤：'${r[1]}' 未定義

💡 可能的原因：
• 變數名稱拼寫錯誤
• 變數尚未宣告就使用
• 注意 Python 區分大小寫（例如：data 和 Data 是不同的）

🔧 建議：
• 檢查變數名稱是否正確
• 確認變數是否已經定義
• 使用 print() 檢查變數值`},{pattern:/ModuleNotFoundError: No module named '(.+)'/,format:r=>`❌ 模組錯誤：找不到模組 '${r[1]}'

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
• 確保同一區塊的程式碼縮排相同`},{pattern:/TypeError: (.+)/,format:r=>`❌ 型別錯誤：${r[1]}
    
💡 可能的原因：
• 對不支援的型別進行操作
• 函數參數型別不正確
• 嘗試對 None 進行操作
    
🔧 建議：
• 檢查變數的型別（使用 type() 函數）
• 確認函數參數是否正確
• 檢查是否有變數為 None`},{pattern:/IndexError: (.+)/,format:r=>`❌ 索引錯誤：${r[1]}

💡 可能的原因：
• 存取超出範圍的索引
• 列表或陣列為空

🔧 建議：
• 檢查索引值是否在有效範圍內
• 使用 len() 檢查列表長度
• 注意 Python 索引從 0 開始`},{pattern:/KeyError: (.+)/,format:r=>`❌ 鍵值錯誤：${r[1]}

💡 可能的原因：
• 字典中不存在該鍵值
• DataFrame 中不存在該欄位

🔧 建議：
• 使用 .get() 方法安全地存取字典
• 使用 .keys() 查看所有可用的鍵
• 檢查鍵名是否拼寫正確`},{pattern:/ValueError: (.+)/,format:r=>`❌ 數值錯誤：${r[1]}
    
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
• 查看完整錯誤訊息了解詳情`}];for(const{pattern:r,format:o}of t){const c=e.match(r);if(c)return o(c)}return`❌ 執行錯誤

${e}

💡 提示：
• 仔細閱讀錯誤訊息
• 檢查程式碼語法和邏輯
• 使用 print() 除錯
• 參考範例程式碼

🔧 除錯技巧：
• 逐行執行程式碼找出問題
• 使用 print() 輸出變數值
• 簡化程式碼，逐步測試`}class Me{constructor(){this.metrics={},this.enabled=!0}start(e){this.enabled&&(this.metrics[e]={start:performance.now(),end:null,duration:null})}end(e){if(!this.enabled||!this.metrics[e])return 0;const t=performance.now(),r=this.metrics[e].start,o=t-r;return this.metrics[e].end=t,this.metrics[e].duration=o,this.log(e,o),o}log(e,t){const r=t<100?"⚡":t<1e3?"⏱️":"🐌",o=t<100?"color: green":t<1e3?"color: orange":"color: red";console.log(`%c${r} ${e}: ${t.toFixed(2)}ms`,o),t>1e3&&console.warn(`⚠️ ${e} 執行時間過長: ${t.toFixed(2)}ms`)}async measure(e,t){this.start(e);try{return await t()}finally{this.end(e)}}getMetric(e){return this.metrics[e]||null}getMetrics(){return{...this.metrics}}getStats(){const e=Object.values(this.metrics).filter(t=>t.duration!==null).map(t=>t.duration);return e.length===0?{count:0,total:0,average:0,min:0,max:0}:{count:e.length,total:e.reduce((t,r)=>t+r,0),average:e.reduce((t,r)=>t+r,0)/e.length,min:Math.min(...e),max:Math.max(...e)}}clear(e){e?delete this.metrics[e]:this.metrics={}}setEnabled(e){this.enabled=e}report(){const e=this.getStats();console.group("📊 效能報告"),console.log(`總計測量: ${e.count} 次`),console.log(`總時間: ${e.total.toFixed(2)}ms`),console.log(`平均時間: ${e.average.toFixed(2)}ms`),console.log(`最快: ${e.min.toFixed(2)}ms`),console.log(`最慢: ${e.max.toFixed(2)}ms`),console.groupEnd(),console.group("📋 詳細指標"),Object.entries(this.metrics).forEach(([t,r])=>{r.duration!==null&&console.log(`${t}: ${r.duration.toFixed(2)}ms`)}),console.groupEnd()}}const D=new Me;D.setEnabled(!1);let X=!1;function Fe(){if(!X&&(X=!0,"PerformanceObserver"in window)){new PerformanceObserver(o=>{const c=o.getEntries(),h=c[c.length-1];console.log("🎨 LCP:",h.renderTime||h.loadTime)}).observe({entryTypes:["largest-contentful-paint"]}),new PerformanceObserver(o=>{o.getEntries().forEach(h=>{console.log("⚡ FID:",h.processingStart-h.startTime)})}).observe({entryTypes:["first-input"]});let t=0;new PerformanceObserver(o=>{o.getEntries().forEach(h=>{h.hadRecentInput||(t+=h.value)}),console.log("📐 CLS:",t)}).observe({entryTypes:["layout-shift"]})}}const De=u.lazy(()=>me(()=>import("./CodePreviewPanel-BAmgNmSY.js"),__vite__mapDeps([0,1,2,3]))),ee={pandas:"pandas",matplotlib:"matplotlib",scipy:"scipy",statsmodels:"statsmodels",sympy:"sympy",autograd:"autograd",lxml:"lxml",openpyxl:"openpyxl",requests:"requests",numpy_financial:"wheels/numpy_financial-1.0.0-py3-none-any.whl",seaborn:"wheels/seaborn-0.13.2-py3-none-any.whl",pymoo:"wheels/pymoo-0.4.1-py3-none-any.whl",pandas_datareader:"wheels/pandas_datareader-0.10.0-py3-none-any.whl",pyodide_http:"wheels/pyodide_http-0.2.2-py3-none-any.whl",mpl_toolkits:"matplotlib",pylab:"matplotlib"},te={requests:["certifi","charset_normalizer","idna","urllib3"],certifi:"wheels/certifi-2026.1.4-py3-none-any.whl",charset_normalizer:"wheels/charset_normalizer-3.4.4-py3-none-any.whl",idna:"wheels/idna-3.11-py3-none-any.whl",urllib3:"wheels/urllib3-2.6.3-py3-none-any.whl"};function Ie(){const[a,e]=u.useState(null),[t,r]=u.useState(!0),[o,c]=u.useState(0),[h,n]=u.useState("初始化中..."),[g,d]=u.useState([]),[i,l]=u.useState(!0),[p,w]=u.useState(null),[L,b]=u.useState(null),[P,N]=u.useState(""),[C,x]=u.useState(""),[U,$]=u.useState([]),[Q,T]=u.useState(!1),[W,se]=u.useState(!1),[k,ae]=u.useState(()=>{const f=localStorage.getItem("theme");return f==="dark"||!f&&!1}),[z,ne]=u.useState(600),[R]=u.useState(new Set),[H,G]=u.useState(null);u.useEffect(()=>{l(!0);const f=`/pwa_FRM_Book1_python/data/chapters.json?t=${Date.now()}`;fetch(f).then(m=>m.json()).then(m=>{m&&m.length>0&&d(m),l(!1)}).catch(m=>{console.error("Failed to load chapters:",m),l(!1)})},[]),u.useEffect(()=>{ke((m,v)=>{c(m),n(v)}).then(m=>{e(m),r(!1),D.end("pyodide-init")}),Fe();const f=[];if("serviceWorker"in navigator){const m=setInterval(()=>{navigator.serviceWorker.getRegistrations().then(S=>{S.forEach(j=>j.update())})},36e5),v=()=>{};navigator.serviceWorker.addEventListener("controllerchange",v),f.push(()=>{clearInterval(m),navigator.serviceWorker.removeEventListener("controllerchange",v)})}if("storage"in navigator&&"estimate"in navigator.storage){const m=async()=>{try{const S=await navigator.storage.estimate();S.usage&&S.quota&&S.usage/S.quota*100>80&&console.warn("Storage usage is high (>80%). Consider cleaning up.")}catch(S){console.warn("Failed to check storage quota:",S)}};m();const v=setInterval(m,300*1e3);f.push(()=>clearInterval(v))}return()=>{f.forEach(m=>m())}},[]),u.useEffect(()=>{localStorage.setItem("theme",k?"dark":"light"),document.documentElement.setAttribute("data-theme",k?"dark":"light")},[k]);const Y=async(f,m=!1)=>{var Z;if(!a)return;const v=f.match(/^\s*(?:from|import)\s+([a-zA-Z0-9_]+)/gm);if(!v)return;const S=["sys","os","io","time","base64","json","datetime","math","re","warnings","builtins","types","random","csv","copy","collections","itertools","functools","pathlib"],j=["numpy","pandas","matplotlib","scipy","micropip","js","builtins","QuantLib"],q=[...new Set(v.map(_=>{const y=_.trim().split(/\s+/);return y[0]==="from",y[1].split(".")[0]}))].filter(_=>!S.includes(_)&&!j.includes(_)).filter(_=>!R.has(_));if(q.length===0)return;const M=[],V=new URL("/pwa_FRM_Book1_python/",window.location.origin).href;if(q.forEach(_=>{const y=ee[_];y?(M.push(y.endsWith(".whl")?V+y:y),(te[_]||[]).forEach(I=>{const A=te[I]||I;M.push(A.endsWith(".whl")?V+A:A)})):M.push(_)}),M.length>0)try{const _=[...new Set(M)];m||x(y=>y+`正在動態載入所需套件 [${q.join(", ")}]...
`),await a.loadPackage("micropip"),await a.runPythonAsync(`
import micropip
await micropip.install(${JSON.stringify(_)}, keep_going=True)
        `),q.includes("matplotlib")&&(await J(a),H||G("AGG")),q.forEach(y=>{R.add(y);const E=ee[y];E&&!E.endsWith(".whl")&&R.add(E)}),m||x(y=>y+`✅ 套件載入完成。
`)}catch(_){if(console.warn("Dependency loading failed:",_),!m){const y=_.message||String(_);if(y.includes("Can't find a pure Python 3 wheel")){const E=((Z=y.match(/for: '([^']+)'/))==null?void 0:Z[1])||"unknown";x(I=>I+`⚠️ 套件 "${E}" 無法載入（可能不支援瀏覽器環境），嘗試繼續執行...
`)}else x(E=>E+`⚠️ 套件載入出現問題，嘗試直接執行...
`)}}},re=async f=>{if(!(!a||Q||!f)){D.start("run-code"),T(!0),x(`執行中...
`),$([]);try{await Ee(a);const m=f.includes("matplotlib.widgets")||f.includes("Slider")||f.includes("Button");se(m);const v=m?"module://matplotlib_pyodide.wasm_backend":"AGG";if(H!==v&&(await J(a,m),G(v)),await a.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `),m){const j=document.getElementById("pyodide-plot-container");j&&(j.innerHTML="",window.document.pyodideMplTarget=j)}await Y(f);try{await qe(a,f)}catch(j){const q=await a.runPythonAsync("sys.stdout.getvalue()"),M=K(j);x((q?q+`
`:"")+M),T(!1),D.end("run-code");return}const S=await a.runPythonAsync("sys.stdout.getvalue()");if(x(S||"執行完成（無文字內容輸出 ）"),W)await $e(a);else{const j=await Ne(a);$(j)}}catch(m){const v=K(m);x(v),console.error(m)}finally{T(!1),D.end("run-code")}}},oe=f=>{if(w(f),b(null),N(""),x(""),$([]),f&&f.examples&&a){const m=f.examples.map(v=>v.code).join(`
`);Y(m,!0)}},ie=f=>{b(f),x(""),$([])},le=f=>{b(f),x(""),$([])},ce=()=>{b(null),x(""),$([])},de=t;return s.jsxs("div",{className:`app ${k?"dark":""}`,children:[s.jsxs("div",{className:"main-content",children:[s.jsxs("div",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsx(ue,{size:20,className:"logo-icon"}),s.jsx("span",{className:"app-title",children:"FRM_Book1 (基礎篇)"})]}),s.jsx(we,{chapters:g,currentChapter:p,onChapterSelect:oe,currentScript:L,onScriptSelect:le,selectedTopicId:P,onTopicSelect:N,loading:i}),s.jsx("div",{className:"top-bar-right",children:s.jsx("button",{className:"theme-toggle",onClick:()=>ae(!k),title:k?"切換到亮色模式":"切換到暗色模式",children:k?s.jsx(pe,{size:20}):s.jsx(fe,{size:20})})})]}),de&&s.jsx("div",{className:"hydration-overlay",children:s.jsxs("div",{className:"hydration-card",children:[s.jsxs("div",{className:"hydration-header",children:[s.jsx("div",{className:"hydration-title",children:"FRM Python 引擎啟動中"}),s.jsx("div",{className:"hydration-subtitle",children:"Financial Risk Management"})]}),s.jsx("div",{className:"hydration-progress-container",children:s.jsx("div",{className:"hydration-progress-bar",style:{width:`${o}%`}})}),s.jsxs("div",{className:"hydration-status",children:[s.jsx("span",{children:h}),s.jsxs("span",{children:[o,"%"]})]})]})}),s.jsxs("div",{className:"panes-container",children:[s.jsx("div",{className:"content-pane",children:s.jsx(xe,{chapter:p,onCodeClick:ie,selectedTopicId:P,darkMode:k,output:C,isRunning:Q,plotImages:U,onClearOutput:()=>{x(""),$([])}})}),L&&s.jsx("div",{className:"preview-pane",style:{width:`${z}px`},children:s.jsx(u.Suspense,{fallback:s.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",color:"#888"},children:"Loading Editor..."}),children:s.jsx(De,{script:L,onClose:ce,onRun:re,isRunning:Q,isLoading:t,output:C,images:U,isInteractive:W,darkMode:k,width:z,onResize:ne})})})]})]}),s.jsx(Pe,{pyodide:a})]})}he.createRoot(document.getElementById("root")).render(s.jsx(ge.StrictMode,{children:s.jsx(Ie,{})}));
