const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodePreviewPanel-oKRZDTCG.js","assets/vendor-react-CQh-Sngh.js","assets/vendor-B3CQIlJd.js","assets/CodePreviewPanel-D1Docn8-.css"])))=>i.map(i=>d[i]);
import{r as _,j as r,C as X,_ as ue,B as Ee,S as je,M as Ne,R as Le,a as Fe}from"./vendor-react-CQh-Sngh.js";import{B as Ae,p as Re}from"./vendor-utils-DahDrsZr.js";import{r as Ce}from"./vendor-katex-CppR7rPA.js";import"./vendor-B3CQIlJd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function Te({chapters:s,currentChapter:e,bodyContent:t,onChapterSelect:n,currentScript:l,onScriptSelect:c,selectedTopicId:o,onTopicSelect:y,loading:b}){var P,d;const i=_.useMemo(()=>{const a=e==null?void 0:e.content;if(!a)return[];let f="";const m=a.intro;typeof m=="string"?f=m:m&&typeof m=="object"&&m.body&&(f+=typeof m.body=="string"?m.body:Object.values(m.body).join(`
`));const x=t||a.body;if(x&&(typeof x=="string"?f+=`
`+x:Array.isArray(x)?f+=`
`+x.join(`
`):typeof x=="object"&&(f+=`
`+Object.values(x).join(`
`))),!f)return[];const L=/^###\s+(.+)$/gm,F=[];let T;for(;(T=L.exec(f))!==null;){const C=T[1].trim(),D="topic-"+C.replace(/\s+/g,"-").toLowerCase();F.push({id:D,title:C})}return F},[e,t]);return r.jsxs("div",{className:"top-nav-container",children:[r.jsx("div",{className:"nav-group",children:r.jsxs("div",{className:"custom-select-wrapper",children:[r.jsxs("select",{id:"chapter-select",name:"chapter-select",value:(e==null?void 0:e.id)||"",onChange:a=>{const f=s.find(m=>m.id===a.target.value);f&&n(f)},disabled:b||s.length===0,className:"custom-select",children:[r.jsx("option",{value:"",disabled:!0,children:b?"載入中...":"📖 章節選擇"}),s.map(a=>r.jsx("option",{value:a.id,children:a.title},a.id))]}),r.jsx(X,{className:"select-icon",size:16})]})}),r.jsx("div",{className:`nav-group ${!e||i.length===0?"disabled":""}`,children:r.jsxs("div",{className:"custom-select-wrapper",children:[r.jsxs("select",{id:"topic-select",name:"topic-select",value:o,onChange:a=>y(a.target.value),disabled:!e||i.length===0,className:"custom-select",children:[r.jsx("option",{value:"",children:"💡 重點導覽"}),i.map(a=>r.jsx("option",{value:a.id,children:a.title},a.id))]}),r.jsx(X,{className:"select-icon",size:16})]})}),r.jsx("div",{className:`nav-group ${e?"":"disabled"}`,children:r.jsxs("div",{className:"custom-select-wrapper",children:[r.jsxs("select",{id:"script-select",name:"script-select",value:(l==null?void 0:l.filename)||"",onChange:a=>{var m;const f=(e==null?void 0:e.examples)||((m=e==null?void 0:e.content)==null?void 0:m.examples);if(f){const x=f.find(L=>L.filename===a.target.value);x&&c(x)}},disabled:!e||!(e.examples||(P=e.content)!=null&&P.examples)||(e.examples||((d=e.content)==null?void 0:d.examples)||[]).length===0,className:"custom-select",children:[r.jsx("option",{value:"",disabled:!0,children:"💻 程式代碼"}),(()=>{var m;return[...(e==null?void 0:e.examples)||((m=e==null?void 0:e.content)==null?void 0:m.examples)||[]].sort((x,L)=>x.filename.localeCompare(L.filename,void 0,{numeric:!0,sensitivity:"base"})).map(x=>r.jsx("option",{value:x.filename,children:x.filename},x.filename))})()]}),r.jsx(X,{className:"select-icon",size:16})]})})]})}const Me=new Ae,$e=_.memo(({chapter:s,bodyContent:e,onCodeClick:t,selectedTopicId:n,output:l,isRunning:c,plotImages:o})=>{const y=_.useRef(null),b=_.useMemo(()=>{var P,d;if(!s)return null;const i=(P=s.content)==null?void 0:P.intro;if(i){let a="";if(typeof i=="string")a=i;else if(typeof i=="object"){a=`# ${i.title||""}

`,i.roadmap&&(i.roadmap.guide&&(a+=`## 📌 章節導覽
${i.roadmap.guide}

`),i.roadmap.objectives&&(a+=`## 🎯 學習目標
${i.roadmap.objectives}

`),i.roadmap.topics&&(a+=`## 📋 章節重點分明
${i.roadmap.topics}

`)),i.value&&(i.value.practical&&(a+=`## 💼 FRM 考試與實務連結
${i.value.practical}

`),i.value.theory&&(a+=`## 🏛️ 財金理論深度解析
${i.value.theory}

`),i.value.further_reading&&(a+=`## 🚀 延伸閱讀與進階議題
${i.value.further_reading}

`)),i.implementation&&(i.implementation.python&&(a+=`## 🐍 Python 實踐價值
${i.implementation.python}

`),i.implementation.logic&&(a+=`## ⚙️ 代碼核心邏輯
${i.implementation.logic}

`),i.implementation.scenarios&&(a+=`## 💻 應用場景清單
${i.implementation.scenarios}

`));const v=e||((d=s.content)==null?void 0:d.body)||i.body;if(v)if(a+=`
## 📝 章節重點解說 ( 內容由AI產生，非原書本提供 )
`,typeof v=="string"){let g=null;try{v.trim().startsWith("{")&&(g=JSON.parse(v))}catch{}g&&typeof g=="object"?a+=Object.values(g).join(`

`):a+=v}else Array.isArray(v)?a+=v.join(`

`):typeof v=="object"&&(a+=Object.values(v).join(`

`))}a=a.replace(/##\s*💻\s*應用場景清單[\s\S]*?(?=##|$)/g,""),a=a.replace(/\x08(?![e\\])/g,"\\b").replace(/\x0c(?![r\\])/g,"\\f").replace(/\x0b/g,"\\v").replace(/\r(?![ \n])/g,"\\r").replace(/[\x08]egin\{/g,"\\begin{").replace(/[\x08]eta/g,"\\beta").replace(/[\x0c]rac\{/g,"\\frac{").replace(/[\x09]ext\{/g,"\\text{").replace(/[\x09]heta/g,"\\theta").replace(/[\x09]au(?=\s|$|[^a-z])/g,"\\tau"),a=a.replace(/\\n/g,`
`);const f=[];a=a.replace(/\$\$([\s\S]*?)\$\$/g,(v,g)=>{const E=f.length;return f.push({type:"display",content:g}),` @@MATH_BLOCK_${E}@@ `}),a=a.replace(/\\begin\{aligned\}([\s\S]*?)\\end\{aligned\}/g,(v,g)=>{const E=f.length;return f.push({type:"display",content:`\\begin{aligned}${g}\\end{aligned}`}),` @@MATH_BLOCK_${E}@@ `}),a=a.replace(new RegExp("(?<!\\\\)\\$([^$\\n]+?)\\$","g"),(v,g)=>{const E=f.length;return f.push({type:"inline",content:g}),` @@MATH_BLOCK_${E}@@ `});let x=Me.parse(a).replace(/<h3>(.*?)<\/h3>/g,(v,g)=>`<h3 id="${"topic-"+g.replace(/<[^>]*>/g,"").trim().replace(/\s+/g,"-").toLowerCase()}">${g}</h3>`);const L=Re.sanitize(x,{USE_PROFILES:{html:!0,mathml:!0},ADD_TAGS:["math","annotation","semantics","mrow","msub","msup","msubsup","mover","munder","munderover","mmultiscripts","mprec","mnext","mtable","mtr","mtd","mfrac","msqrt","mroot","mstyle","merror","mpadded","mphantom","mfenced","menclose","ms","mglyph","maligngroup","malignmark","maction","svg","path","use","span","div"],ADD_ATTR:["id","target","xlink:href","class","style","aria-hidden","viewBox","d","fill","stroke","stroke-width","data-filename","encoding","display"]}),T=[...s.examples||[]].sort((v,g)=>g.filename.length-v.filename.length);let C=L;return T.forEach(v=>{const g=v.filename.replace(".","\\."),E=new RegExp(`(?<!['".\\w])(${g})(?!['".\\w])`,"g");C=C.replace(E,`<span class="code-link" data-filename="${v.filename}">${v.filename}</span>`)}),C.replace(/@@MATH_BLOCK_(\d+)@@/g,(v,g)=>{const E=f[parseInt(g)];return E.type==="display"?`\\[ ${E.content.trim()} \\]`:`\\( ${E.content.trim()} \\)`})}else{const a=s.examples||[];let f=`
        <div class="chapter-intro">
          <h2>${s.title}</h2>
          <p>本章包含 ${a.length} 個程式範例</p>
          <div class="example-grid">
      `;return a.forEach((m,x)=>{f+=`
          <div class="example-card">
            <div class="example-number">${x+1}</div>
            <div class="example-info">
              <h3>${m.title}</h3>
              <span class="code-link" data-filename="${m.filename}">${m.filename}</span>
            </div>
          </div>
        `}),f+=`
          </div>
        </div>
      `,f}},[s,e]);return _.useEffect(()=>{const i=P=>{if(P.target.classList.contains("code-link")){const d=P.target.dataset.filename;let a=null;s!=null&&s.examples&&(a=s.examples.find(f=>f.filename===d),a&&!a.metadata&&(a.metadata={description:a.title})),a&&t(a)}};return document.addEventListener("click",i),()=>document.removeEventListener("click",i)},[s,t]),_.useEffect(()=>{const i=document.querySelector(".content-scroll");i&&(i.scrollTop=0)},[s]),_.useEffect(()=>{y.current&&b&&Ce(y.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1,strict:"ignore"})},[b]),_.useEffect(()=>{if(n){const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth",block:"start"})}},[n]),_.useEffect(()=>{if(l||o&&o.length>0||c){const i=document.querySelector(".content-scroll");i&&i.scrollTo({top:0,behavior:"instant"})}},[l,o,c]),r.jsx("div",{className:"content-panel",children:r.jsx("div",{className:"content-scroll",children:l||o&&o.length>0||c?r.jsxs("div",{id:"execution-output",className:"execution-output-section",children:[c&&r.jsxs("div",{className:"running-indicator",children:[r.jsx("div",{className:"spinner"}),r.jsx("span",{children:"程式執行中..."})]}),l&&r.jsx("pre",{className:"output-text",children:l}),o&&o.length>0&&r.jsx("div",{className:"output-images",children:o.map((i,P)=>r.jsx("div",{className:"output-image",children:r.jsx("img",{src:i,alt:`Plot ${P+1}`})},P))})]}):b?r.jsx("div",{ref:y,className:"markdown-body",dangerouslySetInnerHTML:{__html:b}}):r.jsx("div",{className:"welcome-screen",children:r.jsxs("div",{className:"welcome-card premium-welcome",children:[r.jsxs("div",{className:"welcome-brand",children:[r.jsx("img",{src:"book-cover.jpg",alt:"FRM Python 理論與實戰",className:"welcome-book-img"}),r.jsx("a",{href:"https://deepwisdom.com.tw/product/%e6%89%8b%e8%a1%93%e5%88%80%e8%88%ac%e7%b2%be%e6%ba%96%e7%9a%84frm-%e7%94%a8python%e7%a7%91%e5%ad%b8%e7%ae%a1%e6%8e%a7%e8%b2%a1%e9%87%91%e9%a2%a8%e9%9a%aa%e5%9f%ba%e7%a4%8e%e7%af%87dm2301/",target:"_blank",rel:"noopener noreferrer",className:"welcome-purchase-btn",children:"[ 本書官網購買連結 ]"})]}),r.jsxs("div",{className:"welcome-content",children:[r.jsxs("h2",{className:"welcome-title",children:["手術刀般精準的 FRM 用 Python",r.jsx("br",{}),"科學管控財金風險：基礎篇"]}),r.jsx("div",{className:"welcome-slogan",children:"☆★☆★【有如手術刀般精準！利用Python幫你管控財金風險！】★☆★☆"}),r.jsxs("div",{className:"welcome-text-scroll",children:[r.jsx("p",{children:"本書使用了當紅的程式語言 Python，從程式設計的基本觀念談起。沒有 Python 基礎也沒關係，完整的 Python 介紹，讓您能順利銜接資料科學家最常用的套件整理，包括 Numpy，以及特別針對格式化表格類處理的 Pandas，也充分介紹了 Dataframe 的各種應用。"}),r.jsx("p",{children:"在有了充足的資料之後，接著需要有可以展示數據的工具。除了大家最愛用的 Matplotlib 之外，也介紹了高手才會用的 Seaborn。當熟悉了工具之後，就正式進入了金融理論，包括基礎的機率及統計、各種模型及機率分佈，以及抽樣、信賴區間等內容說明。"}),r.jsx("p",{children:"最後則進入到金融領域，除了介紹各種計算的演算法、模型、術語，也結合了前面所學的 Python 及工具，並講解金融商品最重要的「固定收益分析」。"}),r.jsx("p",{children:"本書從科學下手，讓您精準了解金融原理，確保金錢不再陷入水深火熱之中，將是您從科學到金融領域最重要的橋樑。"})]})]})]})})})})});function De(){return null}function Be(s={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:l,onRegisteredSW:c,onRegisterError:o}=s;let y,b,i;const P=async(a=!0)=>{await b,i==null||i()};async function d(){if("serviceWorker"in navigator){if(y=await ue(async()=>{const{Workbox:a}=await import("./vendor-B3CQIlJd.js").then(f=>f.w);return{Workbox:a}},[]).then(({Workbox:a})=>new a("/pwa_FRM_Book1/sw.js",{scope:"/pwa_FRM_Book1/",type:"classic"})).catch(a=>{o==null||o(a)}),!y)return;i=()=>{y==null||y.messageSkipWaiting()};{let a=!1;const f=()=>{a=!0,y==null||y.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()}),t==null||t()};y.addEventListener("installed",m=>{typeof m.isUpdate>"u"?typeof m.isExternal<"u"&&m.isExternal?f():!a&&(n==null||n()):m.isUpdate||n==null||n()}),y.addEventListener("waiting",f)}y.register({immediate:e}).then(a=>{c?c("/pwa_FRM_Book1/sw.js",a):l==null||l(a)}).catch(a=>{o==null||o(a)})}}return b=d(),P}function Ie(s={}){const{immediate:e=!0,onNeedRefresh:t,onOfflineReady:n,onRegistered:l,onRegisteredSW:c,onRegisterError:o}=s,[y,b]=_.useState(!1),[i,P]=_.useState(!1),[d]=_.useState(()=>Be({immediate:e,onOfflineReady(){P(!0),n==null||n()},onNeedRefresh(){b(!0),t==null||t()},onRegistered:l,onRegisteredSW:c,onRegisterError:o}));return{needRefresh:[y,b],offlineReady:[i,P],updateServiceWorker:d}}function Oe(){const{offlineReady:[s,e],needRefresh:[t,n],updateServiceWorker:l}=Ie({onRegisteredSW(o,y){console.debug(`Service Worker at: ${o}`),y&&setInterval(()=>{y.update()},36e5)},onRegisterError(o){console.warn("SW registration error",o)}}),c=()=>{e(!1),n(!1)};return r.jsx("div",{className:"ReloadPrompt-container",children:(s||t)&&r.jsxs("div",{className:"ReloadPrompt-toast",children:[r.jsx("div",{className:"ReloadPrompt-message",children:s?"App ready to work offline":"New content available, click on reload button to update."}),t&&r.jsx("button",{className:"ReloadPrompt-toast-button",onClick:()=>l(!0),children:"Reload"}),r.jsx("button",{className:"ReloadPrompt-toast-button",onClick:c,children:"Close"})]})})}function We(s){const[e,t]=_.useState(null),[n,l]=_.useState(!1),c=_.useRef({});return _.useEffect(()=>{if(!s){t(null);return}const o=s.content,y=s.id;if(o!=null&&o.body&&!(o!=null&&o.bodyRef)){t(o.body);return}const b=o==null?void 0:o.bodyRef;if(!b||!Array.isArray(b)||b.length===0){t(null);return}let i=!1;return l(!0),(async()=>{const d={};await Promise.all(b.map(async a=>{const f=`${y}/${a}`;if(c.current[f]!==void 0){d[a]=c.current[f];return}try{const m=`/pwa_FRM_Book1/data/modular/${y}/${a}.json`,x=await fetch(m);if(!x.ok)throw new Error(`HTTP ${x.status}`);const F=(await x.json()).content||"";c.current[f]=F,d[a]=F}catch(m){console.warn(`[useBodyContent] Failed to load ${y}/${a}:`,m),d[a]=""}})),i||(t(d),l(!1))})(),()=>{i=!0}},[s]),{bodyContent:e,bodyLoading:n}}const _e=`
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
`,Qe=`
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
`,ge=`
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
`,Ue=`
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
`,He=`
# ══════════════════════════════════════════════════════════════
# Comprehensive Pure-Python SciPy Stub for Pyodide
# ALWAYS replaces scipy.stats (native _fblas is broken in WASM)
# Also provides scipy.linalg, scipy.optimize, scipy.interpolate
# ══════════════════════════════════════════════════════════════
import sys, types, math
import numpy as np

# ── Get or create scipy module ────────────────────────────
try:
    import scipy as _scipy_mod
except ImportError:
    _scipy_mod = types.ModuleType('scipy')
    sys.modules['scipy'] = _scipy_mod

# ── Special function helpers ──────────────────────────────
def _norm_cdf_scalar(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2.0)))

def _norm_pdf_scalar(x):
    return math.exp(-0.5 * x * x) / math.sqrt(2.0 * math.pi)

def _ppf_bisect(cdf_fn, q, lo=-40.0, hi=40.0):
    q = float(q)
    if q <= 0: return lo
    if q >= 1: return hi
    for _ in range(80):
        mid = 0.5 * (lo + hi)
        if cdf_fn(mid) < q:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)

def _gammainc(a, x):
    if x <= 0: return 0.0
    if x < a + 1:
        ap, s, d = a, 1.0 / a, 1.0 / a
        for _ in range(300):
            ap += 1; d *= x / ap; s += d
            if abs(d) < abs(s) * 1e-14: break
        return s * math.exp(-x + a * math.log(max(x, 1e-300)) - math.lgamma(a))
    else:
        b = x + 1 - a; c = 1e30; d = 1.0 / b; h = d
        for i in range(1, 300):
            an = -i * (i - a); b += 2
            d = an * d + b
            if abs(d) < 1e-30: d = 1e-30
            c = b + an / c
            if abs(c) < 1e-30: c = 1e-30
            d = 1.0 / d; dl = d * c; h *= dl
            if abs(dl - 1) < 1e-14: break
        return 1.0 - h * math.exp(-x + a * math.log(max(x, 1e-300)) - math.lgamma(a))

def _betainc(a, b, x):
    if x <= 0: return 0.0
    if x >= 1: return 1.0
    if x > (a + 1) / (a + b + 2):
        return 1.0 - _betainc(b, a, 1.0 - x)
    lbeta = math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b)
    front = math.exp(a * math.log(max(x, 1e-300)) + b * math.log(max(1 - x, 1e-300)) - lbeta) / a
    c = 1.0; d = 1.0 / max(abs(1.0 - (a + b) * x / (a + 1)), 1e-30)
    if 1.0 - (a + b) * x / (a + 1) < 0: d = -d
    h = d
    for m in range(1, 300):
        num = m * (b - m) * x / ((a + 2 * m - 1) * (a + 2 * m))
        d = 1.0 + num * d
        if abs(d) < 1e-30: d = 1e-30
        c = 1.0 + num / c
        if abs(c) < 1e-30: c = 1e-30
        d = 1.0 / d; h *= d * c
        num = -(a + m) * (a + b + m) * x / ((a + 2 * m) * (a + 2 * m + 1))
        d = 1.0 + num * d
        if abs(d) < 1e-30: d = 1e-30
        c = 1.0 + num / c
        if abs(c) < 1e-30: c = 1e-30
        d = 1.0 / d; dl = d * c; h *= dl
        if abs(dl - 1.0) < 1e-14: break
    return front * h

def _select_moments(m, v, s, k, moments):
    r = []
    if 'm' in moments: r.append(m)
    if 'v' in moments: r.append(v)
    if 's' in moments: r.append(s if s is not None else 0.0)
    if 'k' in moments: r.append(k if k is not None else 0.0)
    return tuple(r) if len(r) > 1 else r[0]

# ── Generator factory (unfrozen -> frozen delegation) ─────
def _make_gen(FrozenCls, name):
    class Gen:
        def __init__(self):
            self.name = name
        def __call__(self, *a, **kw):
            return FrozenCls(*a, **kw)
        def rvs(self, *a, **kw):
            sz = kw.pop('size', None); kw.pop('random_state', None)
            return FrozenCls(*a, **kw).rvs(size=sz)
        def stats(self, *a, **kw):
            mo = kw.pop('moments', 'mvsk')
            return FrozenCls(*a, **kw).stats(mo)
        def pmf(self, k, *a, **kw):
            return FrozenCls(*a, **kw).pmf(k)
        def pdf(self, x, *a, **kw):
            return FrozenCls(*a, **kw).pdf(x)
        def cdf(self, x, *a, **kw):
            return FrozenCls(*a, **kw).cdf(x)
        def ppf(self, q, *a, **kw):
            return FrozenCls(*a, **kw).ppf(q)
        def logpdf(self, x, *a, **kw):
            return FrozenCls(*a, **kw).logpdf(x)
        def sf(self, x, *a, **kw):
            return 1.0 - self.cdf(x, *a, **kw)
        def isf(self, q, *a, **kw):
            return self.ppf(1.0 - q, *a, **kw)
        def fit(self, data, **kw):
            if hasattr(FrozenCls, '_fit'):
                return FrozenCls._fit(data, **kw)
            return ()
        def interval(self, confidence, *a, **kw):
            alpha = 1.0 - confidence
            return self.ppf(alpha / 2, *a, **kw), self.ppf(1 - alpha / 2, *a, **kw)
        def __repr__(self):
            return '<scipy.stats.' + name + '_gen object>'
    return Gen()

# ── Frozen distribution classes ───────────────────────────

class _NormF:
    _name = 'norm'
    def __init__(self, loc=0.0, scale=1.0):
        self.loc, self.scale = float(loc), float(scale)
    def _z(self, x):
        return (np.asarray(x, dtype=float) - self.loc) / self.scale
    def pdf(self, x):
        z = self._z(x)
        r = np.exp(-0.5 * z ** 2) / (self.scale * math.sqrt(2 * math.pi))
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        z = self._z(x)
        r = 0.5 * (1.0 + _verf(z / math.sqrt(2.0)))
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q_arr = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _norm_cdf_scalar((v - self.loc) / self.scale), float(qi),
                      self.loc - 40 * self.scale, self.loc + 40 * self.scale) for qi in q_arr.flat])
        r = r.reshape(q_arr.shape)
        return float(r) if np.ndim(q) == 0 else r
    def rvs(self, size=None):
        return np.random.normal(self.loc, self.scale, size=size)
    def stats(self, moments='mvsk'):
        return _select_moments(self.loc, self.scale ** 2, 0.0, 0.0, moments)
    @staticmethod
    def _fit(data, **kw):
        d = np.asarray(data, dtype=float)
        return float(np.mean(d)), float(np.std(d, ddof=0))

def _verf(x):
    x = np.asarray(x, dtype=float)
    return np.vectorize(math.erf)(x)

class _BernoulliF:
    _name = 'bernoulli'
    def __init__(self, p=0.5):
        self.p = float(p)
    def pmf(self, k):
        k = np.asarray(k); p = self.p
        return np.where(k == 1, p, np.where(k == 0, 1 - p, 0.0))
    def cdf(self, k):
        k = np.asarray(k, dtype=float); p = self.p
        return np.where(k < 0, 0.0, np.where(k < 1, 1 - p, 1.0))
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return np.where(q <= 1 - self.p, 0, 1)
    def rvs(self, size=None):
        return np.random.binomial(1, self.p, size=size)
    def stats(self, moments='mvsk'):
        p = self.p; q = 1 - p
        sk = (1 - 2*p) / max(math.sqrt(p*q), 1e-30) if p*q > 0 else 0.0
        ku = (1 - 6*p*q) / max(p*q, 1e-30) if p*q > 0 else 0.0
        return _select_moments(p, p*q, sk, ku, moments)

class _BinomF:
    _name = 'binom'
    def __init__(self, n, p):
        self.n, self.p = int(n), float(p)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); n = self.n; p = self.p
        r = np.array([math.comb(n, int(ki)) * p**int(ki) * (1-p)**(n-int(ki))
                      if 0 <= ki <= n else 0.0 for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int))
        r = np.array([sum(self.pmf(j) for j in range(int(ki)+1)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            c = 0.0
            for j in range(self.n + 1):
                c += float(self.pmf(j))
                if c >= qi: return j
            return self.n
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return int(r) if r.size == 1 else r
    def rvs(self, size=None):
        return np.random.binomial(self.n, self.p, size=size)
    def stats(self, moments='mvsk'):
        n, p = self.n, self.p; q = 1 - p
        return _select_moments(n*p, n*p*q, (1-2*p)/max(math.sqrt(n*p*q),1e-30), (1-6*p*q)/(max(n*p*q,1e-30)), moments)

class _PoissonF:
    _name = 'poisson'
    def __init__(self, mu):
        self.mu = float(mu)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); mu = self.mu
        r = np.array([math.exp(-mu) * mu**int(ki) / math.factorial(int(ki))
                      if ki >= 0 else 0.0 for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int))
        r = np.array([sum(float(self.pmf(j)) for j in range(max(0, int(ki))+1)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            c = 0.0
            for j in range(int(self.mu * 20) + 100):
                c += float(self.pmf(j))
                if c >= qi: return j
            return j
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return int(r) if r.size == 1 else r
    def rvs(self, size=None):
        return np.random.poisson(self.mu, size=size)
    def stats(self, moments='mvsk'):
        mu = self.mu
        return _select_moments(mu, mu, 1.0/max(math.sqrt(mu),1e-30), 1.0/max(mu,1e-30), moments)

class _GeomF:
    _name = 'geom'
    def __init__(self, p=0.5):
        self.p = float(p)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); p = self.p
        r = np.array([(1 - p)**(ki - 1) * p if ki >= 1 else 0.0 for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.asarray(k, dtype=float); p = self.p
        return np.where(k < 1, 0.0, 1.0 - (1.0 - p) ** np.floor(k))
    def ppf(self, q):
        q = np.asarray(q, dtype=float); p = self.p
        r = np.ceil(np.log(1.0 - q) / np.log(max(1.0 - p, 1e-30)))
        return int(r) if np.ndim(q) == 0 else r.astype(int)
    def rvs(self, size=None):
        return np.random.geometric(self.p, size=size)
    def stats(self, moments='mvsk'):
        p = self.p; q = 1 - p
        return _select_moments(1.0/p, q/p**2, (2-p)/max(math.sqrt(q),1e-30), 6+p**2/max(q,1e-30), moments)

class _NbinomF:
    _name = 'nbinom'
    def __init__(self, n, p):
        self.n = float(n); self.p = float(p)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); n = self.n; p = self.p
        def _nb(ki):
            if ki < 0: return 0.0
            return math.exp(math.lgamma(ki + n) - math.lgamma(ki + 1) - math.lgamma(n)
                            + n * math.log(max(p, 1e-300)) + ki * math.log(max(1 - p, 1e-300)))
        r = np.array([_nb(int(ki)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int))
        r = np.array([sum(float(self.pmf(j)) for j in range(max(0, int(ki)) + 1)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            c = 0.0
            for j in range(int(self.n / max(self.p, 1e-30) * 10) + 200):
                c += float(self.pmf(j))
                if c >= qi: return j
            return j
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return int(r) if r.size == 1 else r
    def rvs(self, size=None):
        return np.random.negative_binomial(self.n, self.p, size=size)
    def stats(self, moments='mvsk'):
        n, p = self.n, self.p; q = 1 - p
        m = n * q / max(p, 1e-30); v = n * q / max(p**2, 1e-30)
        s = (1 + q) / max(math.sqrt(n * q), 1e-30)
        kk = 6.0 / n + p**2 / max(n * q, 1e-30)
        return _select_moments(m, v, s, kk, moments)

class _UniformF:
    _name = 'uniform'
    def __init__(self, loc=0.0, scale=1.0):
        self.loc, self.scale = float(loc), float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); a, s = self.loc, self.scale
        return np.where((x >= a) & (x <= a + s), 1.0 / s, 0.0)
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); a, s = self.loc, self.scale
        return np.clip((x - a) / s, 0.0, 1.0)
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return self.loc + q * self.scale
    def rvs(self, size=None):
        return np.random.uniform(self.loc, self.loc + self.scale, size=size)
    def stats(self, moments='mvsk'):
        a, s = self.loc, self.scale
        return _select_moments(a + s/2, s**2/12, 0.0, -6.0/5.0, moments)

class _ExponF:
    _name = 'expon'
    def __init__(self, loc=0.0, scale=1.0):
        self.loc, self.scale = float(loc), float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); lo, sc = self.loc, self.scale
        z = (x - lo) / sc
        return np.where(z >= 0, np.exp(-z) / sc, 0.0)
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); lo, sc = self.loc, self.scale
        z = (x - lo) / sc
        return np.where(z >= 0, 1.0 - np.exp(-z), 0.0)
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return self.loc - self.scale * np.log(1.0 - q)
    def rvs(self, size=None):
        return np.random.exponential(self.scale, size=size) + self.loc
    def stats(self, moments='mvsk'):
        return _select_moments(self.loc + self.scale, self.scale**2, 2.0, 6.0, moments)

class _BetaF:
    _name = 'beta'
    def __init__(self, a, b, loc=0.0, scale=1.0):
        self.a, self.b = float(a), float(b)
        self.loc, self.scale = float(loc), float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float)
        z = (x - self.loc) / self.scale; a, b = self.a, self.b
        lB = math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b)
        def _p(zi):
            if zi <= 0 or zi >= 1: return 0.0
            return math.exp((a-1)*math.log(zi) + (b-1)*math.log(1-zi) - lB) / self.scale
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float)
        z = np.clip((x - self.loc) / self.scale, 0, 1)
        r = np.vectorize(lambda zi: _betainc(self.a, self.b, zi))(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _betainc(self.a, self.b, (v-self.loc)/self.scale),
                      float(qi), self.loc, self.loc+self.scale) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.beta(self.a, self.b, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        a, b = self.a, self.b; ab = a + b
        m = a / ab; v = a * b / (ab**2 * (ab + 1))
        s = 2*(b-a)*math.sqrt(ab+1) / ((ab+2)*math.sqrt(max(a*b,1e-30)))
        ku = 6*(a**3 - a**2*(2*b-1) + b**2*(b+1) - 2*a*b*(b+2)) / max(a*b*(ab+2)*(ab+3),1e-30)
        return _select_moments(m*self.scale+self.loc, v*self.scale**2, s, ku, moments)

class _GammaF:
    _name = 'gamma'
    def __init__(self, a, loc=0.0, scale=1.0):
        self.a = float(a); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); a, sc = self.a, self.scale
        z = (x - self.loc) / sc
        def _p(zi):
            if zi <= 0: return 0.0
            return math.exp((a-1)*math.log(max(zi,1e-300)) - zi - math.lgamma(a)) / sc
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float)
        z = (x - self.loc) / self.scale
        r = np.vectorize(lambda zi: _gammainc(self.a, max(zi, 0)))(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _gammainc(self.a, max((v-self.loc)/self.scale, 0)),
                      float(qi), self.loc, self.loc + self.a * self.scale * 40) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.gamma(self.a, self.scale, size=size) + self.loc
    def stats(self, moments='mvsk'):
        a, sc = self.a, self.scale
        return _select_moments(a*sc+self.loc, a*sc**2, 2.0/math.sqrt(max(a,1e-30)), 6.0/max(a,1e-30), moments)

class _Chi2F:
    _name = 'chi2'
    def __init__(self, df, loc=0.0, scale=1.0):
        self.df = float(df); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); k = self.df
        z = (x - self.loc) / self.scale
        def _p(zi):
            if zi <= 0: return 0.0
            hk = k / 2.0
            return math.exp((hk-1)*math.log(max(zi,1e-300)) - zi/2 - hk*math.log(2) - math.lgamma(hk)) / self.scale
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); k = self.df
        z = (x - self.loc) / self.scale
        r = np.vectorize(lambda zi: _gammainc(k / 2.0, max(zi, 0) / 2.0))(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _gammainc(self.df/2, max((v-self.loc)/self.scale, 0)/2),
                      float(qi), self.loc, self.loc + self.df * self.scale * 20) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.chisquare(self.df, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        k = self.df
        return _select_moments(k, 2*k, math.sqrt(8.0/max(k,1e-30)), 12.0/max(k,1e-30), moments)

class _TF:
    _name = 't'
    def __init__(self, df, loc=0.0, scale=1.0):
        self.df = float(df); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); v = self.df
        z = (x - self.loc) / self.scale
        c = math.exp(math.lgamma((v+1)/2) - math.lgamma(v/2)) / math.sqrt(v * math.pi)
        r = c * (1 + z**2 / v)**(-(v+1)/2) / self.scale
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); v = self.df
        z = (x - self.loc) / self.scale
        def _c(zi):
            t2 = zi * zi
            ib = _betainc(v / 2, 0.5, v / (v + t2))
            return 0.5 * ib if zi < 0 else 1.0 - 0.5 * ib
        r = np.vectorize(_c)(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: self.cdf(v), float(qi),
                      self.loc - 200*self.scale, self.loc + 200*self.scale) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.standard_t(self.df, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        v = self.df
        m = self.loc
        va = v / (v - 2) * self.scale**2 if v > 2 else float('inf')
        s = 0.0
        ku = 6.0 / (v - 4) if v > 4 else float('inf')
        return _select_moments(m, va, s, ku, moments)

class _FF:
    _name = 'f'
    def __init__(self, dfn, dfd, loc=0.0, scale=1.0):
        self.d1 = float(dfn); self.d2 = float(dfd)
        self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); d1, d2 = self.d1, self.d2
        z = (x - self.loc) / self.scale
        def _p(zi):
            if zi <= 0: return 0.0
            # Use log-space to avoid overflow for large d1,d2
            log_num = (d1/2)*math.log(d1) + (d2/2)*math.log(d2) + (d1/2 - 1)*math.log(zi)                       - ((d1+d2)/2)*math.log(d1*zi + d2)
            log_beta = math.lgamma(d1/2) + math.lgamma(d2/2) - math.lgamma((d1+d2)/2)
            return math.exp(log_num - log_beta) / self.scale
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); d1, d2 = self.d1, self.d2
        z = (x - self.loc) / self.scale
        def _c(zi):
            if zi <= 0: return 0.0
            return _betainc(d1/2, d2/2, d1*zi / (d1*zi + d2))
        r = np.vectorize(_c)(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: self.cdf(v), float(qi),
                      self.loc, self.loc + self.d2*self.scale*20) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.f(self.d1, self.d2, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        d1, d2 = self.d1, self.d2
        m = d2 / (d2 - 2) if d2 > 2 else float('inf')
        v = 2*d2**2*(d1+d2-2) / (d1*(d2-2)**2*(d2-4)) if d2 > 4 else float('inf')
        return _select_moments(m, v, 0.0, 0.0, moments)

class _LognormF:
    _name = 'lognorm'
    def __init__(self, s, loc=0.0, scale=1.0):
        self.s = float(s); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); s, sc = self.s, self.scale
        z = (x - self.loc) / sc
        def _p(zi):
            if zi <= 0: return 0.0
            return math.exp(-0.5*(math.log(zi)/s)**2) / (s * zi * math.sqrt(2*math.pi)) / sc
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); s = self.s
        z = (x - self.loc) / self.scale
        def _c(zi):
            if zi <= 0: return 0.0
            return _norm_cdf_scalar(math.log(zi) / s)
        r = np.vectorize(_c)(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            nppf = _ppf_bisect(_norm_cdf_scalar, float(qi))
            return math.exp(self.s * nppf) * self.scale + self.loc
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.lognormal(0, self.s, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        s = self.s; s2 = s * s
        m = math.exp(s2 / 2) * self.scale + self.loc
        v = (math.exp(s2) - 1) * math.exp(s2) * self.scale**2
        return _select_moments(m, v, 0.0, 0.0, moments)
    @staticmethod
    def _fit(data, **kw):
        d = np.asarray(data, dtype=float)
        d = d[d > 0]
        lndata = np.log(d)
        s = float(np.std(lndata, ddof=1))
        scale = float(np.exp(np.mean(lndata)))
        return s, 0.0, scale

class _RandintF:
    _name = 'randint'
    def __init__(self, low, high):
        self.low, self.high = int(low), int(high)
    def pmf(self, k):
        k = np.asarray(k, dtype=int); lo, hi = self.low, self.high
        n = hi - lo
        return np.where((k >= lo) & (k < hi), 1.0 / n, 0.0)
    def cdf(self, k):
        k = np.asarray(k, dtype=float); lo, hi = self.low, self.high
        return np.clip((np.floor(k) - lo + 1) / (hi - lo), 0.0, 1.0)
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return np.floor(self.low + q * (self.high - self.low)).astype(int)
    def rvs(self, size=None):
        return np.random.randint(self.low, self.high, size=size)
    def stats(self, moments='mvsk'):
        lo, hi = self.low, self.high; n = hi - lo
        m = (lo + hi - 1) / 2.0; v = (n**2 - 1) / 12.0
        return _select_moments(m, v, 0.0, -6*(n**2+1)/(5*(n**2-1)) if n > 1 else 0, moments)

# ── Register scipy.stats (ALWAYS override native) ────────
_stats = types.ModuleType('scipy.stats')
_stats.norm = _make_gen(_NormF, 'norm')
_stats.bernoulli = _make_gen(_BernoulliF, 'bernoulli')
_stats.binom = _make_gen(_BinomF, 'binom')
_stats.poisson = _make_gen(_PoissonF, 'poisson')
_stats.geom = _make_gen(_GeomF, 'geom')
_stats.nbinom = _make_gen(_NbinomF, 'nbinom')
_stats.uniform = _make_gen(_UniformF, 'uniform')
_stats.expon = _make_gen(_ExponF, 'expon')
_stats.beta = _make_gen(_BetaF, 'beta')
_stats.gamma = _make_gen(_GammaF, 'gamma')
_stats.chi2 = _make_gen(_Chi2F, 'chi2')
_stats.t = _make_gen(_TF, 't')
_stats.f = _make_gen(_FF, 'f')
_stats.lognorm = _make_gen(_LognormF, 'lognorm')
_stats.randint = _make_gen(_RandintF, 'randint')

# add base classes so imports like 'from scipy.stats import rv_continuous' succeed
class _RVContinuous:
    def __init__(self, *args, **kw):
        pass
class _RVDiscrete:
    def __init__(self, *args, **kw):
        pass
_stats.rv_continuous = _RVContinuous
_stats.rv_discrete = _RVDiscrete

# ── scipy.stats standalone functions ──────────────────────
def _ttest_ind(a, b, equal_var=True, **kw):
    a = np.asarray(a, dtype=float); b = np.asarray(b, dtype=float)
    n1, n2 = len(a), len(b)
    m1, m2 = np.mean(a), np.mean(b)
    v1, v2 = np.var(a, ddof=1), np.var(b, ddof=1)
    if equal_var:
        sp2 = ((n1 - 1) * v1 + (n2 - 1) * v2) / (n1 + n2 - 2)
        t_stat = (m1 - m2) / math.sqrt(sp2 * (1.0/n1 + 1.0/n2))
        df = n1 + n2 - 2
    else:
        se = math.sqrt(v1/n1 + v2/n2)
        t_stat = (m1 - m2) / se if se > 0 else 0.0
        num = (v1/n1 + v2/n2)**2
        den = (v1/n1)**2/(n1-1) + (v2/n2)**2/(n2-1) if (n1>1 and n2>1) else 1.0
        df = num / den if den > 0 else 1.0
    # two-sided p-value via t distribution cdf
    t_dist = _TF(df)
    p = 2.0 * (1.0 - t_dist.cdf(abs(t_stat)))
    class _TtestResult:
        def __init__(self, stat, pval):
            self.statistic = stat; self.pvalue = pval
        def __repr__(self):
            return f'Ttest_indResult(statistic={self.statistic}, pvalue={self.pvalue})'
        def __iter__(self):
            return iter((self.statistic, self.pvalue))
    return _TtestResult(t_stat, p)

def _binom_test_fn(x, n=None, p=0.5, alternative='two-sided'):
    if n is None: n = x
    from math import comb as _comb
    pmf_obs = _comb(n, x) * p**x * (1-p)**(n-x)
    if alternative == 'two-sided':
        pval = 0.0
        for k in range(n + 1):
            pk = _comb(n, k) * p**k * (1-p)**(n-k)
            if pk <= pmf_obs + 1e-15: pval += pk
        return min(pval, 1.0)
    elif alternative == 'less':
        return sum(_comb(n, k) * p**k * (1-p)**(n-k) for k in range(x + 1))
    else:
        return sum(_comb(n, k) * p**k * (1-p)**(n-k) for k in range(x, n + 1))

_stats.ttest_ind = _ttest_ind
_stats.binom_test = _binom_test_fn

_scipy_mod.stats = _stats
sys.modules['scipy.stats'] = _stats
print('✅ SciPy.stats: 14 distributions + ttest_ind + binom_test installed.')

# ── scipy.linalg ─────────────────────────────────────────
try:
    from scipy import linalg as _native_linalg
    _native_linalg.inv
    _native_linalg.solve
except Exception:
    _linalg = types.ModuleType('scipy.linalg')
    def _pascal(n):
        M = np.zeros((n, n), dtype=int)
        for i in range(n):
            for j in range(n):
                M[i, j] = math.comb(j, i) if j >= i else math.comb(i, j)
        return M
    def _ldl(A):
        A = np.array(A, dtype=float); n = A.shape[0]
        try:
            L = np.linalg.cholesky(A); return L, np.eye(n), None
        except Exception:
            evals, evecs = np.linalg.eigh(A)
            return evecs, np.diag(evals), None
    _linalg.pascal = _pascal
    _linalg.ldl = _ldl
    _linalg.eig = lambda A: np.linalg.eig(np.asarray(A, dtype=float))
    _linalg.inv = lambda A: np.linalg.inv(np.asarray(A, dtype=float))
    _linalg.solve = lambda a, b: np.linalg.solve(np.asarray(a, dtype=float), np.asarray(b, dtype=float))
    _linalg.det = lambda A: float(np.linalg.det(np.asarray(A, dtype=float)))
    _linalg.norm = lambda x, **kw: np.linalg.norm(np.asarray(x, dtype=float))
    _scipy_mod.linalg = _linalg
    sys.modules['scipy.linalg'] = _linalg
    print('✅ SciPy.linalg: stub installed (numpy backend).')

# ── scipy.optimize ────────────────────────────────────────
try:
    from scipy import optimize as _native_opt
    _native_opt.minimize
    _native_opt.brentq
except Exception:
    _opt = types.ModuleType('scipy.optimize')
    class _OptResult:
        def __init__(self, **kw):
            self.__dict__.update(kw)
        def __repr__(self):
            return str(self.__dict__)

    def _minimize(fun, x0, args=(), method=None, bounds=None, constraints=(), options=None, jac=None, hess=None, **kw):
        x = np.array(x0, dtype=float).copy(); n = len(x)
        maxiter = (options or {}).get('maxiter', 2000 * n)
        tol = (options or {}).get('ftol', 1e-10)
        # Convert _Bounds object to list of (lo, hi) tuples
        _bnds = None
        if bounds is not None:
            if hasattr(bounds, 'lb'):
                _bnds = list(zip(bounds.lb, bounds.ub))
            else:
                _bnds = list(bounds)
        def _pen(xv):
            v = float(fun(xv, *args) if args else fun(xv))
            if _bnds:
                for i, (lo, hi) in enumerate(_bnds):
                    if lo is not None and xv[i] < lo: v += 1e8 * (lo - xv[i])**2
                    if hi is not None and xv[i] > hi: v += 1e8 * (xv[i] - hi)**2
            c_list = [constraints] if isinstance(constraints, dict) else list(constraints)
            for c in c_list:
                # Handle both dict constraints and LinearConstraint objects
                if hasattr(c, 'A'):
                    Ax = np.dot(np.atleast_2d(c.A), xv)
                    lb = np.atleast_1d(c.lb); ub = np.atleast_1d(c.ub)
                    for j in range(len(Ax)):
                        if Ax[j] < lb[j]: v += 1e8 * (lb[j] - Ax[j])**2
                        if Ax[j] > ub[j]: v += 1e8 * (Ax[j] - ub[j])**2
                else:
                    cv = float(c['fun'](xv))
                    if c.get('type') == 'eq': v += 1e8 * cv**2
                    elif c.get('type') == 'ineq' and cv < 0: v += 1e8 * cv**2
            return v
        simplex = [x.copy()]
        for i in range(n):
            xi = x.copy(); xi[i] += 0.05 * (abs(x[i]) + 0.01); simplex.append(xi)
        fvals = [_pen(s) for s in simplex]
        nit = 0
        for nit in range(maxiter):
            idx = np.argsort(fvals); simplex = [simplex[i] for i in idx]; fvals = [fvals[i] for i in idx]
            if abs(fvals[-1] - fvals[0]) < tol: break
            c = np.mean(simplex[:-1], axis=0)
            xr = c + (c - simplex[-1]); fr = _pen(xr)
            if fvals[0] <= fr < fvals[-2]:
                simplex[-1] = xr; fvals[-1] = fr
            elif fr < fvals[0]:
                xe = c + 2*(xr - c); fe = _pen(xe)
                if fe < fr: simplex[-1] = xe; fvals[-1] = fe
                else: simplex[-1] = xr; fvals[-1] = fr
            else:
                xc = c + 0.5*(simplex[-1] - c); fc = _pen(xc)
                if fc < fvals[-1]: simplex[-1] = xc; fvals[-1] = fc
                else:
                    for i in range(1, len(simplex)):
                        simplex[i] = simplex[0] + 0.5*(simplex[i] - simplex[0]); fvals[i] = _pen(simplex[i])
        best = simplex[np.argmin(fvals)]
        return _OptResult(x=best, fun=float(fun(best, *args) if args else fun(best)),
                          success=True, message='Optimization terminated.', nit=nit+1, nfev=(nit+1)*(n+1))

    def _brentq(f, a, b, args=(), xtol=1e-12, maxiter=100, **kw):
        fa = f(a, *args); fb = f(b, *args)
        for _ in range(maxiter):
            c = (a + b) / 2.0; fc = f(c, *args)
            if abs(fc) < xtol or (b - a) / 2 < xtol: return c
            if fa * fc < 0: b = c; fb = fc
            else: a = c; fa = fc
        return (a + b) / 2.0

    def _newton(func, x0, fprime=None, args=(), tol=1e-12, maxiter=50, **kw):
        x = float(x0)
        for _ in range(maxiter):
            fx = func(x, *args)
            if abs(fx) < tol: return x
            if fprime:
                dfx = fprime(x, *args)
            else:
                h = max(abs(x) * 1e-8, 1e-10)
                dfx = (func(x + h, *args) - func(x - h, *args)) / (2 * h)
            if abs(dfx) < 1e-30: break
            x -= fx / dfx
        return x

    class _LinearConstraint:
        def __init__(self, A, lb, ub):
            self.A, self.lb, self.ub = A, lb, ub
    class _Bounds:
        def __init__(self, lb, ub):
            self.lb, self.ub = lb, ub

    _opt.minimize = _minimize
    _opt.brentq = _brentq
    _opt.newton = _newton
    _opt.LinearConstraint = _LinearConstraint
    _opt.Bounds = _Bounds
    _opt.OptimizeResult = _OptResult
    _scipy_mod.optimize = _opt
    sys.modules['scipy.optimize'] = _opt
    print('✅ SciPy.optimize: stub installed (Nelder-Mead + Brent + Newton).')

# ── scipy.interpolate ────────────────────────────────────
try:
    from scipy import interpolate as _native_interp
    _native_interp.interp1d
except Exception:
    _interp = types.ModuleType('scipy.interpolate')
    class _Interp1d:
        def __init__(self, x, y, kind='linear', fill_value=None, bounds_error=True, **kw):
            order = np.argsort(x)
            self._x = np.asarray(x, dtype=float)[order]
            self._y = np.asarray(y, dtype=float)[order]
        def __call__(self, x_new):
            x_new = np.atleast_1d(np.asarray(x_new, dtype=float))
            r = np.interp(x_new, self._x, self._y)
            return float(r) if x_new.size == 1 else r
    class _Interp2d:
        def __init__(self, x, y, z, kind='linear', **kw):
            # very lightweight bilinear-like stub: just nearest neighbor
            self._x = np.asarray(x, dtype=float)
            self._y = np.asarray(y, dtype=float)
            self._z = np.asarray(z, dtype=float)
            # ensure z is 2D array with shape (len(y), len(x))
            if self._z.ndim == 1:
                self._z = self._z.reshape(len(y), -1)
        def __call__(self, xn, yn):
            xn = np.atleast_1d(np.asarray(xn, dtype=float))
            yn = np.atleast_1d(np.asarray(yn, dtype=float))
            # create output grid shape (len(yn), len(xn))
            Xq, Yq = np.meshgrid(xn, yn)
            # nearest-neighbor index along each axis
            xi = np.searchsorted(self._x, Xq, side='right') - 1
            yi = np.searchsorted(self._y, Yq, side='right') - 1
            xi = np.clip(xi, 0, len(self._x) - 1)
            yi = np.clip(yi, 0, len(self._y) - 1)
            return self._z[yi, xi]
    _interp.interp1d = _Interp1d
    _interp.interp2d = _Interp2d
    _scipy_mod.interpolate = _interp
    sys.modules['scipy.interpolate'] = _interp
    print('✅ SciPy.interpolate: stub installed (numpy interp backend).')

# ── scipy.integrate ──────────────────────────────────────
try:
    from scipy import integrate as _native_integrate
    _native_integrate.quad
except Exception:
    _integrate = types.ModuleType('scipy.integrate')
    def _quad(func, a, b, args=(), limit=50, **kw):
        # Adaptive Simpson's rule
        n = min(max(limit * 4, 200), 2000)
        if a == float('-inf') and b == float('inf'):
            # substitution t = x/(1-x^2)
            def _g(t):
                if abs(t) >= 1.0: return 0.0
                x = t / (1 - t*t); dx = (1 + t*t) / (1 - t*t)**2
                return func(x, *args) * dx
            return _quad(_g, -0.999, 0.999, args=(), limit=limit)
        elif a == float('-inf'):
            def _g(t):
                if t <= 0: return 0.0
                x = b - (1 - t) / t; dx = 1.0 / (t*t)
                return func(x, *args) * dx
            return _quad(_g, 1e-10, 1.0, args=(), limit=limit)
        elif b == float('inf'):
            def _g(t):
                if t <= 0: return 0.0
                x = a + (1 - t) / t; dx = 1.0 / (t*t)
                return func(x, *args) * dx
            return _quad(_g, 1e-10, 1.0, args=(), limit=limit)
        h = (b - a) / n
        xs = [a + i * h for i in range(n + 1)]
        ys = [func(xi, *args) for xi in xs]
        # Simpson's composite rule
        s = ys[0] + ys[-1]
        for i in range(1, n, 2): s += 4 * ys[i]
        for i in range(2, n, 2): s += 2 * ys[i]
        result = s * h / 3.0
        err = abs(result) * 1e-8
        return (result, err)
    _integrate.quad = _quad
    _scipy_mod.integrate = _integrate
    sys.modules['scipy.integrate'] = _integrate
    print('✅ SciPy.integrate: stub installed (Simpson rule).')

# ── scipy.special (minimal stub) ─────────────────────────
try:
    from scipy import special as _native_special
    _native_special.comb
except Exception:
    _special = types.ModuleType('scipy.special')
    _special.comb = lambda n, k, exact=False: float(math.comb(int(n), int(k)))
    _special.factorial = lambda n, exact=False: float(math.factorial(int(n)))
    _special.gamma = lambda x: math.gamma(float(x))
    _special.gammaln = lambda x: math.lgamma(float(x))
    _special.beta = lambda a, b: math.exp(math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b))
    _special.erf = lambda x: math.erf(float(x))
    _special.erfc = lambda x: math.erfc(float(x))
    _special.ndtr = lambda x: 0.5 * (1.0 + math.erf(float(x) / math.sqrt(2.0)))
    _special.ndtri = lambda p: _ppf_bisect(_norm_cdf_scalar, float(p))
    _scipy_mod.special = _special
    sys.modules['scipy.special'] = _special
    print('✅ SciPy.special: stub installed (gamma, erf, comb, factorial).')

# ── scipy.spatial (minimal stub) ─────────────────────────
try:
    from scipy import spatial as _native_spatial
    _native_spatial.distance
except Exception:
    _spatial = types.ModuleType('scipy.spatial')
    _spatial_distance = types.ModuleType('scipy.spatial.distance')
    _spatial_distance.euclidean = lambda u, v: float(np.linalg.norm(np.asarray(u) - np.asarray(v)))
    _spatial_distance.cdist = lambda XA, XB, metric='euclidean': np.sqrt(np.sum((np.asarray(XA)[:, None, :] - np.asarray(XB)[None, :, :])**2, axis=-1))
    _spatial.distance = _spatial_distance
    sys.modules['scipy.spatial'] = _spatial
    sys.modules['scipy.spatial.distance'] = _spatial_distance
    _scipy_mod.spatial = _spatial
    print('✅ SciPy.spatial: stub installed (distance metrics).')

print('✅ SciPy comprehensive stub fully loaded.')
`,Ve=`
import warnings
import logging
# 忽略 DeprecationWarning 和 FutureWarning，保持 Console 乾淨
warnings.simplefilter("ignore", DeprecationWarning)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", SyntaxWarning)
# 額外針對 pandas 的 pyarrow 警告進行過濾
warnings.filterwarnings("ignore", message=".*pyarrow.*")
warnings.filterwarnings("ignore", message=".*Matplotlib is currently using agg.*")

# Reduce noisy Matplotlib font fallback logs in browser runtime
logging.getLogger('matplotlib').setLevel(logging.ERROR)
logging.getLogger('matplotlib.font_manager').setLevel(logging.ERROR)

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
    mpl.rcParams['mathtext.default'] = 'regular'
    mpl.rcParams['text.usetex'] = False
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

# distutils 相容性 (Python 3.12 移除 distutils)
import sys
from types import ModuleType as _MT
if 'distutils' not in sys.modules:
    _d = _MT('distutils')
    sys.modules['distutils'] = _d
if 'distutils.version' not in sys.modules:
    sys.modules['distutils.version'] = _MT('distutils.version')
if 'distutils.util' not in sys.modules:
    sys.modules['distutils.util'] = _MT('distutils.util')
if 'distutils.spawn' not in sys.modules:
    sys.modules['distutils.spawn'] = _MT('distutils.spawn')

import distutils.version as _dv
import re as _re
class _LooseVersion:
    component_re = _re.compile(r'(\\d+|[a-z]+|\\.)', _re.VERBOSE)
    def __init__(self, vstring=None):
        if vstring:
            self.vstring = str(vstring)
            self.version = [int(x) if x.isdigit() else x for x in self.component_re.findall(self.vstring) if x != '.']
        else:
            self.vstring = '0'
            self.version = [0]
    def __str__(self): return self.vstring
    def __repr__(self): return 'LooseVersion(' + repr(self.vstring) + ')'
    def _cmp(self, other):
        if isinstance(other, str): other = _LooseVersion(other)
        for a, b in zip(self.version, other.version):
            if a == b: continue
            try: return (int(a) > int(b)) - (int(a) < int(b))
            except (ValueError, TypeError): return (str(a) > str(b)) - (str(a) < str(b))
        return (len(self.version) > len(other.version)) - (len(self.version) < len(other.version))
    def __eq__(self, o): return self._cmp(o) == 0
    def __lt__(self, o): return self._cmp(o) < 0
    def __le__(self, o): return self._cmp(o) <= 0
    def __gt__(self, o): return self._cmp(o) > 0
    def __ge__(self, o): return self._cmp(o) >= 0
_dv.LooseVersion = _LooseVersion
_dv.StrictVersion = _LooseVersion
print('✅ distutils.version.LooseVersion: 相容層已安裝。')

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
`;let K=null,$=null;const Ge=["https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js","https://unpkg.com/pyodide@0.26.4/pyodide.js"];function Ye(s){return new Promise((e,t)=>{const n=document.createElement("script");n.src=s,n.crossOrigin="anonymous",n.onload=e,n.onerror=()=>t(new Error(`Failed to load script: ${s}`)),document.head.appendChild(n)})}async function Xe(){if(typeof window.loadPyodide!="function"){console.warn("window.loadPyodide not found, loading dynamically...");for(const s of Ge)try{if(await Ye(s),typeof window.loadPyodide=="function"){console.log(`Pyodide loaded from ${s}`);return}}catch(e){console.warn(`Failed to load Pyodide from ${s}:`,e.message)}throw new Error("Failed to load Pyodide from all CDN sources")}}class Ke{constructor(e){this.onProgress=e,this.current=0,this.target=0,this.message="",this.interval=null,this.step=.1}start(){this.interval||(this.interval=setInterval(()=>{if(this.current<this.target){const e=this.target-this.current,t=e>20?3.5:e>5?1.5:.5;this.current=Math.min(this.current+t,this.target),this.onProgress(Math.floor(this.current),this.message)}else this.target<99&&(this.current=Math.min(this.current+.08,99.9),this.onProgress(Math.floor(this.current),this.message))},100))}update(e,t){this.target=e,t&&(this.message=t)}async yieldToUI(){return new Promise(e=>setTimeout(e,30))}finish(e="Ready!"){this.interval&&clearInterval(this.interval),this.current=100,this.onProgress(100,e)}}async function Je(s){return K?(s&&s(100,"Ready"),K):$?$.then(e=>(s&&s(100,"Ready"),e)):($=(async()=>{const e=new Ke(s);e.start();try{e.update(10,"正在啟動 Python 直譯器 (v0.26.4)..."),await Xe();let t=null,n=3;for(;n>0;)try{const d="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";console.log("Using Pyodide CDN for packages:",d),t=await window.loadPyodide({indexURL:d});break}catch(d){if(console.warn(`Failed to load Pyodide (attempts left: ${n-1}):`,d),n--,n===0)throw d;await new Promise(a=>setTimeout(a,1e3))}try{const d=document.getElementById("inline-scipy-stub");if(d&&d.textContent&&d.textContent.trim().length>0)try{await t.runPythonAsync(d.textContent),console.log("Inline SciPy stub executed early.")}catch(a){console.debug("Inline SciPy stub skipped:",a)}}catch(d){console.debug("Error checking inline SciPy stub:",d)}e.update(25,"引擎啟動完成，正在檢查本地暫存環境..."),await e.yieldToUI();const l="/lib/python3.12/site-packages";try{t.FS.mkdirTree(l)}catch{}t.FS.mount(t.FS.filesystems.IDBFS,{},l),e.update(26,"正在從本地儲存區載入 Python 環境..."),await new Promise(d=>{t.FS.syncfs(!0,a=>{a&&console.error("IDBFS sync error:",a),d()})}),await e.yieldToUI();try{const d=t.FS.readdir(l).filter(a=>a.startsWith("scipy")||a.startsWith("statsmodels"));for(const a of d)try{const f=l+"/"+a,m=t.FS.stat(f);t.FS.isDir(m.mode)?(t.FS.unmount,await t.runPythonAsync(`import shutil; shutil.rmtree('${f}', ignore_errors=True)`)):t.FS.unlink(f)}catch{}d.length>0&&console.log("Purged stale IDBFS entries:",d.join(", "))}catch{}const c=["numpy","pandas","matplotlib","sympy","lxml","micropip"],o=["setuptools","numpy-financial","pandas-datareader","pyodide-http","pymoo==0.4.1","seaborn"],y=t.FS.readdir(l),b=c.filter(d=>!y.includes(d)&&!y.some(a=>a.startsWith(d+"-"))),i=o.filter(d=>{const a=d.replace("-","_");return!y.includes(d)&&!y.includes(a)&&!y.some(f=>f.startsWith(d+"-"))&&!y.some(f=>f.startsWith(a+"-"))});if(b.length>0||i.length>0){const d=[...b,...i];if(e.update(30,`正在同步並安裝套件: ${d.join(", ")}...`),b.length>0&&(e.update(40,`正在從 CDN 獲取核心科學套件 (${b.length} 個)...`),await t.loadPackage(b)),i.length>0){e.update(70,`正在掛載第三方擴充資源 (${i.length} 個)...`),await t.loadPackage("micropip");const a=t.pyimport("micropip"),f=i.map(m=>m==="numpy-financial"?"/pwa_FRM_Book1/wheels/numpy_financial-1.0.0-py3-none-any.whl":m);await a.install(f)}e.update(85,"正在固化環境映射至本地磁碟..."),await new Promise(a=>{t.FS.syncfs(!1,f=>{f&&console.error("IDBFS save error:",f),a()})}),e.update(90,"✅ 環境已完成本地持久化儲存")}else e.update(90,"🚀 偵測到本地環境快照，已跳過網路請求");return await e.yieldToUI(),e.update(92,"⚙️ 配置：正在載入環境優化補丁..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(`
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
                `)]),await e.yieldToUI(),e.update(95,"🔬 系統：正在安裝 SciPy 純 Python 計算引擎..."),await e.yieldToUI(),await t.runPythonAsync(He),e.update(98,"🚀 系統：正在啟動 Pymoo & QuantLib 虛擬層..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(Ve),t.runPythonAsync(Qe),t.runPythonAsync(_e),t.runPythonAsync(ge),t.runPythonAsync(Ue)]),e.update(99,"🛡️ 系統：權限校正與輸入掛鉤注入..."),await t.runPythonAsync(`
import builtins
import js
def custom_input(prompt = ""):
    try:
        val = js.window.prompt(prompt if prompt else "")
        return val if val is not None else ""
    except Exception: return ""
builtins.input = custom_input
            `),await e.yieldToUI(),K=t,$=null,e.finish("載入完成！正在進入主介面..."),t}catch(t){throw $=null,e.interval&&clearInterval(e.interval),console.error("Failed to load Pyodide:",t),t}})(),$)}async function Ze(s,e,t=3e4){let n;const l=new Promise((c,o)=>{n=setTimeout(()=>{o(new Error(`Execution timed out after ${t/1e3} seconds`))},t)});try{return await Promise.race([s.runPythonAsync(e),l])}finally{clearTimeout(n)}}async function et(s){if(s)try{await s.runPythonAsync(`
            import gc
import matplotlib.pyplot as plt
            plt.close('all')
            gc.collect()
                `)}catch{}}const ie=new Set;async function oe(s,e){!s||!e||ie.has(e)||ie.add(e)}async function tt(s){if(s)try{await s.loadPackage("micropip");const e=s.pyimport("micropip"),t=["/pwa_FRM_Book1/wheels/pymoo-0.4.1-py3-none-any.whl","/pwa_FRM_Book1/wheels/pandas_datareader-0.10.0-py3-none-any.whl","/pwa_FRM_Book1/wheels/pyodide_http-0.2.2-py3-none-any.whl","/pwa_FRM_Book1/wheels/seaborn-0.13.2-py3-none-any.whl"];await e.install(t,{transient:!0}).catch(n=>{console.warn("preloadHeavyPackages pip install failed",n)})}catch(e){console.warn("preloadHeavyPackages error",e)}}async function fe(s){try{const e=await s.runPythonAsync(`
import matplotlib.pyplot as plt
len(plt.get_fignums())
    `);if(e===0)return[];const t=[];for(let n=0;n<e;n++)try{const l=await s.runPythonAsync(`
import matplotlib.pyplot as plt
import io, base64
fig = plt.figure(${n+1})
buf = io.BytesIO()
_safe_save_figure(fig, buf)
buf.seek(0)
base64.b64encode(buf.read()).decode('utf-8')
      `);t.push(`data:image/png;base64,${l}`)}catch(l){console.warn(`Skipping figure ${n+1} due to capture error`,l)}try{await s.runPythonAsync(`
import matplotlib.pyplot as plt
try:
    plt.close('all')
except Exception:
    pass
      `)}catch{}return t}catch(e){return console.error("Failed to capture plots:",e),[]}}async function de(s,e=!1){try{const t=e?"module://matplotlib_pyodide.wasm_backend":"AGG";await s.runPythonAsync(`
import matplotlib
import matplotlib.pyplot as plt
import warnings
import io
import base64

# ── Monkey-patch WASM backend destroy to prevent parentNode crash ──
# This MUST happen before matplotlib.use() which calls close("all")
try:
    from matplotlib_pyodide import browser_backend as _bb
    _orig_destroy = _bb.FigureCanvasWasm.destroy
    def _safe_destroy(self, *a, **kw):
        try:
            _orig_destroy(self, *a, **kw)
        except (AttributeError, Exception):
            pass
    _bb.FigureCanvasWasm.destroy = _safe_destroy
except Exception:
    pass

matplotlib.use('${t}')
if plt.style.available and 'default' in plt.style.available:
    plt.style.use('default')

warnings.filterwarnings("ignore", message=".*Matplotlib is currently using agg.*")
if '${t}' == 'AGG':
    def _silent_show(*args, **kwargs):
        return None
    plt.show = _silent_show

# ── Pre-registered figure helpers ──
_BS = chr(92)  # single backslash character
_DBS = _BS + _BS  # double backslash

def _sanitize_figure_text(fig):
    """Collapse sequences of multiple backslashes into one in all text artists."""
    for ax in fig.get_axes():
        texts = [ax.title, ax.xaxis.label, ax.yaxis.label] + list(ax.texts)
        leg = ax.get_legend()
        if leg:
            texts.extend(leg.get_texts())
        for t in texts:
            if t is None:
                continue
            s = t.get_text()
            if isinstance(s, str) and _DBS in s:
                while _DBS in s:
                    s = s.replace(_DBS, _BS)
                t.set_text(s)

def _safe_save_figure(fig, buf):
    """Try to save fig; on failure, strip all backslashes from labels and retry."""
    _sanitize_figure_text(fig)
    try:
        fig.savefig(buf, format='png', dpi=150, bbox_inches='tight', facecolor='white')
    except Exception:
        import matplotlib as _mpl
        _mpl.rcParams['text.usetex'] = False
        _mpl.rcParams['mathtext.default'] = 'regular'
        for ax in fig.get_axes():
            ax.set_xlabel(str(ax.get_xlabel()).replace(_BS, ''))
            ax.set_ylabel(str(ax.get_ylabel()).replace(_BS, ''))
            ax.set_title(str(ax.get_title()).replace(_BS, ''))
        fig.savefig(buf, format='png', dpi=150, bbox_inches='tight', facecolor='white')
    `)}catch(t){console.error("✗ Matplotlib 初始化失敗:",t)}}async function at(s){try{await s.runPythonAsync(`
import matplotlib.pyplot as plt
if len(plt.get_fignums()) > 0:
    plt.show()
    `)}catch(e){console.error("Failed to show plots:",e)}}function ce(s){const e=s.message||String(s),t=[{pattern:/NameError: name '(.+)' is not defined/,format:n=>`❌ 變數錯誤：'${n[1]}' 未定義

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
• 查看完整錯誤訊息了解詳情`}];for(const{pattern:n,format:l}of t){const c=e.match(n);if(c)return l(c)}return`❌ 執行錯誤

${e}

💡 提示：
• 仔細閱讀錯誤訊息
• 檢查程式碼語法和邏輯
• 使用 print() 除錯
• 參考範例程式碼

🔧 除錯技巧：
• 逐行執行程式碼找出問題
• 使用 print() 輸出變數值
• 簡化程式碼，逐步測試`}class st{constructor(){this.metrics={},this.enabled=!0}start(e){this.enabled&&(this.metrics[e]={start:performance.now(),end:null,duration:null})}end(e){if(!this.enabled||!this.metrics[e])return 0;const t=performance.now(),n=this.metrics[e].start,l=t-n;return this.metrics[e].end=t,this.metrics[e].duration=l,this.log(e,l),l}log(e,t){const n=t<100?"⚡":t<1e3?"⏱️":"🐌",l=t<100?"color: green":t<1e3?"color: orange":"color: red";console.log(`%c${n} ${e}: ${t.toFixed(2)}ms`,l),t>1e3&&console.warn(`⚠️ ${e} 執行時間過長: ${t.toFixed(2)}ms`)}async measure(e,t){this.start(e);try{return await t()}finally{this.end(e)}}getMetric(e){return this.metrics[e]||null}getMetrics(){return{...this.metrics}}getStats(){const e=Object.values(this.metrics).filter(t=>t.duration!==null).map(t=>t.duration);return e.length===0?{count:0,total:0,average:0,min:0,max:0}:{count:e.length,total:e.reduce((t,n)=>t+n,0),average:e.reduce((t,n)=>t+n,0)/e.length,min:Math.min(...e),max:Math.max(...e)}}clear(e){e?delete this.metrics[e]:this.metrics={}}setEnabled(e){this.enabled=e}report(){const e=this.getStats();console.group("📊 效能報告"),console.log(`總計測量: ${e.count} 次`),console.log(`總時間: ${e.total.toFixed(2)}ms`),console.log(`平均時間: ${e.average.toFixed(2)}ms`),console.log(`最快: ${e.min.toFixed(2)}ms`),console.log(`最慢: ${e.max.toFixed(2)}ms`),console.groupEnd(),console.group("📋 詳細指標"),Object.entries(this.metrics).forEach(([t,n])=>{n.duration!==null&&console.log(`${t}: ${n.duration.toFixed(2)}ms`)}),console.groupEnd()}}const I=new st;I.setEnabled(!1);let pe=!1;function nt(){if(!pe&&(pe=!0,"PerformanceObserver"in window)){new PerformanceObserver(l=>{const c=l.getEntries(),o=c[c.length-1];console.log("🎨 LCP:",o.renderTime||o.loadTime)}).observe({entryTypes:["largest-contentful-paint"]}),new PerformanceObserver(l=>{l.getEntries().forEach(o=>{console.log("⚡ FID:",o.processingStart-o.startTime)})}).observe({entryTypes:["first-input"]});let t=0;new PerformanceObserver(l=>{l.getEntries().forEach(o=>{o.hadRecentInput||(t+=o.value)}),console.log("📐 CLS:",t)}).observe({entryTypes:["layout-shift"]})}}const rt=_.lazy(()=>ue(()=>import("./CodePreviewPanel-oKRZDTCG.js"),__vite__mapDeps([0,1,2,3]))),J={QuantLib:"QuantLib",arch:"arch",autograd:"autograd",chart_studio:"chart-studio",datetime:"datetime",lxml:"lxml",math:"math",matplotlib:"matplotlib",mcint:"mcint",mibian:"mibian",mpl_toolkits:"matplotlib",numpy:"numpy",numpy_financial:"wheels/numpy_financial-1.0.0-py3-none-any.whl",openpyxl:"openpyxl",pandas:"pandas",pandas_datareader:"wheels/pandas_datareader-0.10.0-py3-none-any.whl",plotly:"plotly",prettytable:"prettytable",pylab:"matplotlib",pymoo:"wheels/pymoo-0.4.1-py3-none-any.whl",pyodide_http:"wheels/pyodide_http-0.2.2-py3-none-any.whl",qpsolvers:"qpsolvers",requests:"requests","scikit-learn":"scikit-learn",scipy:"scipy",seaborn:"wheels/seaborn-0.13.2-py3-none-any.whl",sklearn:"scikit-learn",statsmodels:"statsmodels",sympy:"sympy",tabulate:"tabulate"},me={requests:["certifi","charset_normalizer","idna","urllib3"],certifi:"wheels/certifi-2026.1.4-py3-none-any.whl",charset_normalizer:"wheels/charset_normalizer-3.4.4-py3-none-any.whl",idna:"wheels/idna-3.11-py3-none-any.whl",urllib3:"wheels/urllib3-2.6.3-py3-none-any.whl"},Z=760,lt=28;typeof window<"u"&&"serviceWorker"in navigator&&(async()=>{try{const s=`/pwa_FRM_Book1/manifest.webmanifest?t=${Date.now()}`;let e=null;try{const c=await fetch(s,{cache:"no-store"});c&&c.ok&&(e=await c.text())}catch{}if(!e)return;const t=localStorage.getItem("app_assets_manifest_text");if(t&&t===e)return;localStorage.setItem("app_assets_manifest_text",e);const n=await navigator.serviceWorker.getRegistrations();if(!n||n.length===0){localStorage.getItem("app_manifest_reload_done")||(localStorage.setItem("app_manifest_reload_done","1"),location.reload());return}for(const c of n)try{await c.update(),c.waiting&&c.waiting.postMessage({type:"SKIP_WAITING"})}catch(o){console.warn("SW update attempt failed:",o)}const l=()=>{localStorage.getItem("app_manifest_reload_done")||(localStorage.setItem("app_manifest_reload_done","1"),window.location.reload())};navigator.serviceWorker.addEventListener("controllerchange",l)}catch(s){console.warn("Version check/update failed:",s)}})();function it(){const[s,e]=_.useState(null),[t,n]=_.useState(!0),[l,c]=_.useState(0),[o,y]=_.useState("初始化中..."),[b,i]=_.useState([]),[P,d]=_.useState(!0),[a,f]=_.useState(null),[m,x]=_.useState(null),[L,F]=_.useState(""),[T,C]=_.useState({}),{bodyContent:D}=We(a),[v,g]=_.useState(""),[E,A]=_.useState([]),[U,H]=_.useState(!1),[ye,he]=_.useState(!1),[R,xe]=_.useState(()=>{const u=localStorage.getItem("theme");return u==="dark"||!u&&!1}),[ee,O]=_.useState(Z),[M]=_.useState(new Set),[te,ae]=_.useState(null),se=_.useRef(!1),V=()=>{if(typeof window>"u"||typeof document>"u")return Z;const u=document.getElementById("topic-select");if(!u)return Z;const k=u.getBoundingClientRect().left+lt,q=window.innerWidth-k,w=420,j=Math.floor(window.innerWidth*.8);return Math.max(w,Math.min(q,j))};_.useEffect(()=>{d(!0);const u=`/pwa_FRM_Book1/data/chapters_index.json?t=${Date.now()}`;fetch(u).then(p=>p.json()).then(p=>{p&&p.length>0&&i(p),d(!1)}).catch(p=>{console.error("Failed to load chapters index:",p),d(!1)})},[]);const be=async u=>{if(T[u])return T[u];try{d(!0);const p=await fetch(`/pwa_FRM_Book1/data/chapters_${u}.json?t=${Date.now()}`);if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const k=await p.text();let q=null;try{q=JSON.parse(k)}catch{try{const w=k.replace(/\\(?!["\\/bfnrtu])/g,"\\\\");q=JSON.parse(w)}catch(w){throw new Error(`Failed to parse chapter data: ${w.message}`)}}return C(w=>({...w,[u]:q})),d(!1),q}catch(p){return console.error(`Failed to load chapter ${u}:`,p),d(!1),null}};_.useEffect(()=>{Je((p,k)=>{c(p),y(k)}).then(p=>{e(p),n(!1),I.end("pyodide-init")}),nt();const u=[];if("serviceWorker"in navigator){const p=setInterval(()=>{navigator.serviceWorker.getRegistrations().then(q=>{q.forEach(w=>w.update())})},36e5),k=()=>{};navigator.serviceWorker.addEventListener("controllerchange",k),u.push(()=>{clearInterval(p),navigator.serviceWorker.removeEventListener("controllerchange",k)})}if("storage"in navigator&&"estimate"in navigator.storage){const p=async()=>{try{const q=await navigator.storage.estimate();q.usage&&q.quota&&q.usage/q.quota*100>80&&console.warn("Storage usage is high (>80%). Consider cleaning up.")}catch(q){console.warn("Failed to check storage quota:",q)}};p();const k=setInterval(p,300*1e3);u.push(()=>clearInterval(k))}return()=>{u.forEach(p=>p())}},[]),_.useEffect(()=>{s&&!t&&tt(s).then(()=>{se.current||(se.current=!0,console.warn("Background initialization complete"))}).catch(u=>console.error("Background loaded failed",u))},[s,t]),_.useEffect(()=>{if(!m)return;const u=()=>{O(V())};return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[m]),_.useEffect(()=>{localStorage.setItem("theme",R?"dark":"light"),document.documentElement.setAttribute("data-theme",R?"dark":"light")},[R]);const ne=async(u,p=!1)=>{var le;if(!s)return;const k=u.match(/^\s*(?:from|import)\s+([a-zA-Z0-9_]+)/gm);if(!k)return;if(/^\s*(?:from|import)\s+QuantLib\b/m.test(u)&&!M.has("QuantLib"))try{p||g(h=>h+`正在啟用 QuantLib 相容性墊片...
`),await s.runPythonAsync(_e),M.add("QuantLib"),p||g(h=>h+`✅ QuantLib 墊片已啟用。
`)}catch(h){console.warn("QuantLib shim injection failed:",h),p||g(z=>z+`⚠️ QuantLib 墊片啟用失敗，將嘗試繼續執行...
`)}const q=["sys","os","io","time","timeit","base64","json","datetime","math","re","warnings","builtins","types","random","csv","copy","collections","itertools","functools","pathlib","fractions","struct","operator","string","decimal","abc","enum","typing","textwrap"],w=["numpy","pandas","matplotlib","micropip","js","builtins","QuantLib","mcint","arch","mibian"],j=[...new Set(k.map(h=>{const z=h.trim().split(/\s+/);return z[0]==="from",z[1].split(".")[0]}))].filter(h=>!q.includes(h)&&!w.includes(h)).filter(h=>{var z;return!M.has(h)&&!((z=window.failedPackages)!=null&&z.has(h))});if(j.length===0)return;const B=[],W=[],G=new URL("/pwa_FRM_Book1/",window.location.origin).href,Se=new Set(["scipy","statsmodels","scikit-learn","sympy"]),Q=h=>{if(h){if(typeof h=="string"&&(h.endsWith(".whl")||h.startsWith("http"))){W.push(h);return}Se.has(h)?B.push(h):W.push(h)}},re={sklearn:["scipy","scikit-learn"],"scikit-learn":["scipy"],statsmodels:["scipy"],sympy:[],seaborn:["matplotlib","pandas","scipy","statsmodels"],pandas_datareader:["requests"]};if(j.forEach(h=>{const z=J[h];z?(Q(z.endsWith(".whl")?G+z:z),(me[h]||[]).forEach(N=>{const Y=me[N]||N;Q(Y.endsWith(".whl")?G+Y:Y)})):Q(h),re[h]&&re[h].forEach(S=>{if(!M.has(S)&&!w.includes(S)){const N=J[S]||S;Q(N.endsWith(".whl")?G+N:N)}})}),B.length>0||W.length>0)try{const h=[...new Set(B)],z=[...new Set(W)];p||g(S=>S+`正在動態載入所需套件 [${j.join(", ")}]...
`);for(const S of h)await s.loadPackage(S);z.length>0&&(await s.loadPackage("micropip"),await s.runPythonAsync(`
import micropip
await micropip.install(${JSON.stringify(z)}, keep_going=True)
          `)),j.includes("pandas_datareader")&&await s.runPythonAsync(ge),j.includes("matplotlib")&&(await de(s),te||ae("AGG")),j.forEach(S=>{M.add(S);const N=J[S];N&&!N.endsWith(".whl")&&M.add(N)}),p||g(S=>S+`✅ 套件載入完成。
`)}catch(h){if(console.warn("Dependency loading failed:",h),window.failedPackages||(window.failedPackages=new Set),j.forEach(z=>window.failedPackages.add(z)),!p){const z=h.message||String(h);if(z.includes("Can't find a pure Python 3 wheel")){const S=((le=z.match(/for: '([^']+)'/))==null?void 0:le[1])||"unknown";g(N=>N+`⚠️ 套件 "${S}" 無法載入（可能不支援瀏覽器環境），嘗試繼續執行...
`)}else g(S=>S+`⚠️ 套件載入出現問題，嘗試直接執行...
`)}}},ve=async u=>{if(!(!s||U||!u)){H(!0),g(`執行中...
`),A([]);try{a&&a.id&&await oe(s,a.id),await ne(u),I.start("run-code"),await et(s);const p=u.includes("matplotlib.widgets")||u.includes("Slider")||u.includes("Button");he(p);const k=p?"module://matplotlib_pyodide.wasm_backend":"AGG";if(te!==k&&(await de(s,p),ae(k)),await s.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `),p){const w=document.getElementById("pyodide-plot-container");w&&(w.innerHTML="",window.document.pyodideMplTarget=w)}try{await Ze(s,u)}catch(w){const j=await s.runPythonAsync("sys.stdout.getvalue()"),B=ce(w);g((j?j+`
`:"")+B),H(!1),I.end("run-code");return}const q=await s.runPythonAsync("sys.stdout.getvalue()");if(g(q||"執行完成（無文字內容輸出 ）"),p){await at(s);const w=await fe(s);A(w)}else{const w=await fe(s);A(w)}}catch(p){const k=ce(p);g(k),console.error(p)}finally{H(!1),I.end("run-code")}}},we=async u=>{let p=u;if(u&&!u.content&&(p=await be(u.id)),!!p&&(f(p),x(null),F(""),g(""),A([]),p&&p.examples&&s)){const k=p.examples.map(q=>q.code).join(`
`);ne(k,!0)}};_.useEffect(()=>{s&&a&&a.id&&oe(s,a.id).catch(u=>console.error("Dataset lazy load failed",u))},[s,a]);const ke=u=>{x(u),O(V()),g(""),A([])},qe=u=>{x(u),O(V()),g(""),A([])},ze=()=>{x(null),g(""),A([])},Pe=t;return r.jsxs("div",{className:`app ${R?"dark":""}`,children:[r.jsxs("div",{className:"main-content",children:[r.jsxs("div",{className:"top-bar",children:[r.jsxs("div",{className:"top-bar-left",children:[r.jsx(Ee,{size:20,className:"logo-icon"}),r.jsx("span",{className:"app-title",children:"FRM_Book1 (基礎篇)"})]}),r.jsx(Te,{chapters:b,currentChapter:a,bodyContent:D,onChapterSelect:we,currentScript:m,onScriptSelect:qe,selectedTopicId:L,onTopicSelect:F,loading:P}),r.jsx("div",{className:"top-bar-right",children:r.jsx("button",{className:"theme-toggle",onClick:()=>xe(!R),title:R?"切換到亮色模式":"切換到暗色模式",children:R?r.jsx(je,{size:20}):r.jsx(Ne,{size:20})})})]}),Pe&&r.jsx("div",{className:"hydration-overlay",children:r.jsxs("div",{className:"hydration-card",children:[r.jsxs("div",{className:"hydration-header",children:[r.jsx("div",{className:"hydration-title",children:"FRM Python 引擎啟動中"}),r.jsx("div",{className:"hydration-subtitle",children:"Financial Risk Management"})]}),r.jsx("div",{className:"hydration-progress-container",children:r.jsx("div",{className:"hydration-progress-bar",style:{width:`${l}%`}})}),r.jsxs("div",{className:"hydration-status",children:[r.jsx("span",{children:o}),r.jsxs("span",{children:[l,"%"]})]})]})}),r.jsxs("div",{className:"panes-container",children:[r.jsx("div",{className:"content-pane",children:r.jsx($e,{chapter:a,bodyContent:D,onCodeClick:ke,selectedTopicId:L,darkMode:R,output:v,isRunning:U,plotImages:E,onClearOutput:()=>{g(""),A([])}})}),r.jsx("div",{className:`preview-pane${m?"":" preview-pane--hidden"}`,style:{width:m?`${ee}px`:0},children:m&&r.jsx(_.Suspense,{fallback:r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",color:"#888"},children:"Loading Editor..."}),children:r.jsx(rt,{script:m,onClose:ze,onRun:ve,isRunning:U,isLoading:t,output:v,images:E,isInteractive:ye,darkMode:R,width:ee,onResize:O})})})]})]}),r.jsx(De,{pyodide:s}),r.jsx(Oe,{})]})}async function ot(){try{if(!("serviceWorker"in navigator))return;const s="frm_sw_cleanup_done_v1";if(localStorage.getItem(s))return;if(!navigator.serviceWorker.controller){localStorage.setItem(s,"1");return}console.info("[AUTO-CLEAN] Detected active Service Worker — cleaning caches and storage.");try{const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(t=>t.unregister().catch(()=>{}))),console.info("[AUTO-CLEAN] serviceWorker registrations unregistered.")}catch(e){console.warn("[AUTO-CLEAN] Failed to unregister service workers",e)}try{if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t).catch(()=>{}))),console.info("[AUTO-CLEAN] CacheStorage cleared:",e)}}catch(e){console.warn("[AUTO-CLEAN] Failed to clear CacheStorage",e)}try{if("databases"in indexedDB){const e=await indexedDB.databases();await Promise.all(e.map(t=>indexedDB.deleteDatabase(t.name).catch(()=>{}))),console.info("[AUTO-CLEAN] IndexedDB databases deleted:",e.map(t=>t.name))}else{const e=["pyodide","emscripten-archives","idb-filesystem","file_storage"];await Promise.all(e.map(t=>indexedDB.deleteDatabase(t).catch(()=>{}))),console.info("[AUTO-CLEAN] IndexedDB fallback delete attempted for candidates.")}}catch(e){console.warn("[AUTO-CLEAN] Failed to clear IndexedDB",e)}try{localStorage.clear(),sessionStorage.clear(),console.info("[AUTO-CLEAN] localStorage and sessionStorage cleared.")}catch(e){console.warn("[AUTO-CLEAN] Failed to clear storage",e)}try{localStorage.setItem(s,"1")}catch{}try{console.info("[AUTO-CLEAN] Reloading page to load fresh assets."),window.location.reload(!0)}catch(e){console.info("[AUTO-CLEAN] Reload skipped.",e)}}catch(s){console.warn("[AUTO-CLEAN] Unexpected error",s)}}ot().catch(()=>{});Le.createRoot(document.getElementById("root")).render(r.jsx(Fe.StrictMode,{children:r.jsx(it,{})}));
