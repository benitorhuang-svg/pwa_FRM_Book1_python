const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodePreviewPanel-DcyHY-xF.js","assets/vendor-react-DBlZ22TX.js","assets/vendor-B3CQIlJd.js","assets/CodePreviewPanel-V3Zu5mOS.css"])))=>i.map(i=>d[i]);
import{r as f,j as r,C as V,_ as pe,B as Se,S as Ee,M as Ne,R as je,a as Le}from"./vendor-react-DBlZ22TX.js";import{B as Ae,p as $e}from"./vendor-utils-DahDrsZr.js";import{r as Re}from"./vendor-katex-CrEV6Ds-.js";import"./vendor-B3CQIlJd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();function De({chapters:s,currentChapter:e,bodyContent:t,onChapterSelect:n,currentScript:o,onScriptSelect:c,selectedTopicId:l,onTopicSelect:g,loading:b}){var k,p;const i=f.useMemo(()=>{const a=e==null?void 0:e.content;if(!a)return[];let d="";const u=a.intro;typeof u=="string"?d=u:u&&typeof u=="object"&&u.body&&(d+=typeof u.body=="string"?u.body:Object.values(u.body).join(`
`));const w=t||a.body;if(w&&(typeof w=="string"?d+=`
`+w:Array.isArray(w)?d+=`
`+w.join(`
`):typeof w=="object"&&(d+=`
`+Object.values(w).join(`
`))),!d)return[];const A=/^###\s+(.+)$/gm,R=[];let T;for(;(T=A.exec(d))!==null;){const M=T[1].trim(),I="topic-"+M.replace(/\s+/g,"-").toLowerCase();R.push({id:I,title:M})}return R},[e,t]);return r.jsxs("div",{className:"top-nav-container",children:[r.jsx("div",{className:"nav-group",children:r.jsxs("div",{className:"custom-select-wrapper",children:[r.jsxs("select",{id:"chapter-select",name:"chapter-select",value:(e==null?void 0:e.id)||"",onChange:a=>{const d=s.find(u=>u.id===a.target.value);d&&n(d)},disabled:b||s.length===0,className:"custom-select",children:[r.jsx("option",{value:"",disabled:!0,children:b?"載入中...":"📖 章節選擇"}),s.map(a=>r.jsx("option",{value:a.id,children:a.title},a.id))]}),r.jsx(V,{className:"select-icon",size:16})]})}),r.jsx("div",{className:`nav-group ${!e||i.length===0?"disabled":""}`,children:r.jsxs("div",{className:"custom-select-wrapper",children:[r.jsxs("select",{id:"topic-select",name:"topic-select",value:l,onChange:a=>g(a.target.value),disabled:!e||i.length===0,className:"custom-select",children:[r.jsx("option",{value:"",children:"💡 重點導覽"}),i.map(a=>r.jsx("option",{value:a.id,children:a.title},a.id))]}),r.jsx(V,{className:"select-icon",size:16})]})}),r.jsx("div",{className:`nav-group ${e?"":"disabled"}`,children:r.jsxs("div",{className:"custom-select-wrapper",children:[r.jsxs("select",{id:"script-select",name:"script-select",value:(o==null?void 0:o.filename)||"",onChange:a=>{var u;const d=(e==null?void 0:e.examples)||((u=e==null?void 0:e.content)==null?void 0:u.examples);if(d){const w=d.find(A=>A.filename===a.target.value);w&&c(w)}},disabled:!e||!(e.examples||(k=e.content)!=null&&k.examples)||(e.examples||((p=e.content)==null?void 0:p.examples)||[]).length===0,className:"custom-select",children:[r.jsx("option",{value:"",disabled:!0,children:"💻 程式代碼"}),(()=>{var u;return[...(e==null?void 0:e.examples)||((u=e==null?void 0:e.content)==null?void 0:u.examples)||[]].sort((w,A)=>w.filename.localeCompare(A.filename,void 0,{numeric:!0,sensitivity:"base"})).map(w=>r.jsx("option",{value:w.filename,children:w.filename},w.filename))})()]}),r.jsx(V,{className:"select-icon",size:16})]})})]})}const Me=new Ae,qe=f.memo(({chapter:s,bodyContent:e,onCodeClick:t,selectedTopicId:n,output:o,isRunning:c,plotImages:l})=>{const g=f.useRef(null),b=f.useMemo(()=>{var k,p;if(!s)return null;const i=(k=s.content)==null?void 0:k.intro;if(i){let a="";if(typeof i=="string")a=i;else if(typeof i=="object"){a=`# ${i.title||""}

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

`));const v=e||((p=s.content)==null?void 0:p.body)||i.body;if(v)if(a+=`
## 📝 章節重點解說 ( 內容由AI產生，非原書本提供 )
`,typeof v=="string"){let h=null;try{v.trim().startsWith("{")&&(h=JSON.parse(v))}catch{}h&&typeof h=="object"?a+=Object.values(h).join(`

`):a+=v}else Array.isArray(v)?a+=v.join(`

`):typeof v=="object"&&(a+=Object.values(v).join(`

`))}a=a.replace(/##\s*💻\s*應用場景清單[\s\S]*?(?=##|$)/g,""),a=a.replace(/\x08(?![e\\])/g,"\\b").replace(/\x0c(?![r\\])/g,"\\f").replace(/\x0b/g,"\\v").replace(/\r(?![ \n])/g,"\\r").replace(/[\x08]egin\{/g,"\\begin{").replace(/[\x08]eta/g,"\\beta").replace(/[\x0c]rac\{/g,"\\frac{").replace(/[\x09]ext\{/g,"\\text{").replace(/[\x09]heta/g,"\\theta").replace(/[\x09]au(?=\s|$|[^a-z])/g,"\\tau"),a=a.replace(/\\n/g,`
`);const d=[];a=a.replace(/\$\$([\s\S]*?)\$\$/g,(v,h)=>{const j=d.length;return d.push({type:"display",content:h}),` @@MATH_BLOCK_${j}@@ `}),a=a.replace(/\\begin\{aligned\}([\s\S]*?)\\end\{aligned\}/g,(v,h)=>{const j=d.length;return d.push({type:"display",content:`\\begin{aligned}${h}\\end{aligned}`}),` @@MATH_BLOCK_${j}@@ `}),a=a.replace(new RegExp("(?<!\\\\)\\$([^$\\n]+?)\\$","g"),(v,h)=>{const j=d.length;return d.push({type:"inline",content:h}),` @@MATH_BLOCK_${j}@@ `});let w=Me.parse(a).replace(/<h3>(.*?)<\/h3>/g,(v,h)=>`<h3 id="${"topic-"+h.replace(/<[^>]*>/g,"").trim().replace(/\s+/g,"-").toLowerCase()}">${h}</h3>`);const A=$e.sanitize(w,{USE_PROFILES:{html:!0,mathml:!0},ADD_TAGS:["math","annotation","semantics","mrow","msub","msup","msubsup","mover","munder","munderover","mmultiscripts","mprec","mnext","mtable","mtr","mtd","mfrac","msqrt","mroot","mstyle","merror","mpadded","mphantom","mfenced","menclose","ms","mglyph","maligngroup","malignmark","maction","svg","path","use","span","div"],ADD_ATTR:["id","target","xlink:href","class","style","aria-hidden","viewBox","d","fill","stroke","stroke-width","data-filename","encoding","display"]}),T=[...s.examples||[]].sort((v,h)=>h.filename.length-v.filename.length);let M=A;return T.forEach(v=>{const h=v.filename.replace(".","\\."),j=new RegExp(`(?<!['".\\w])(${h})(?!['".\\w])`,"g");M=M.replace(j,`<span class="code-link" data-filename="${v.filename}">${v.filename}</span>`)}),M.replace(/@@MATH_BLOCK_(\d+)@@/g,(v,h)=>{const j=d[parseInt(h)];return j.type==="display"?`\\[ ${j.content.trim()} \\]`:`\\( ${j.content.trim()} \\)`})}else{const a=s.examples||[];let d=`
        <div class="chapter-intro">
          <h2>${s.title}</h2>
          <p>本章包含 ${a.length} 個程式範例</p>
          <div class="example-grid">
      `;return a.forEach((u,w)=>{d+=`
          <div class="example-card">
            <div class="example-number">${w+1}</div>
            <div class="example-info">
              <h3>${u.title}</h3>
              <span class="code-link" data-filename="${u.filename}">${u.filename}</span>
            </div>
          </div>
        `}),d+=`
          </div>
        </div>
      `,d}},[s,e]);return f.useEffect(()=>{const i=k=>{if(k.target.classList.contains("code-link")){const p=k.target.dataset.filename;let a=null;s!=null&&s.examples&&(a=s.examples.find(d=>d.filename===p),a&&!a.metadata&&(a.metadata={description:a.title})),a&&t(a)}};return document.addEventListener("click",i),()=>document.removeEventListener("click",i)},[s,t]),f.useEffect(()=>{const i=document.querySelector(".content-scroll");i&&(i.scrollTop=0)},[s]),f.useEffect(()=>{g.current&&b&&Re(g.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1,strict:"ignore"})},[b]),f.useEffect(()=>{if(n){const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth",block:"start"})}},[n]),f.useEffect(()=>{if(o||l&&l.length>0||c){const i=document.querySelector(".content-scroll");i&&i.scrollTo({top:0,behavior:"instant"})}},[o,l,c]),r.jsx("div",{className:"content-panel",children:r.jsx("div",{className:"content-scroll",children:o||l&&l.length>0||c?r.jsxs("div",{id:"execution-output",className:"execution-output-section",children:[c&&r.jsxs("div",{className:"running-indicator",children:[r.jsx("div",{className:"spinner"}),r.jsx("span",{children:"程式執行中..."})]}),o&&r.jsx("pre",{className:"output-text",children:o}),l&&l.length>0&&r.jsx("div",{className:"output-images",children:l.map((i,k)=>r.jsx("div",{className:"output-image",children:r.jsx("img",{src:i,alt:`Plot ${k+1}`})},k))})]}):b?r.jsx("div",{ref:g,className:"markdown-body",dangerouslySetInnerHTML:{__html:b}}):r.jsx("div",{className:"welcome-screen",children:r.jsxs("div",{className:"welcome-card premium-welcome",children:[r.jsxs("div",{className:"welcome-brand",children:[r.jsx("img",{src:"book-cover.jpg",alt:"FRM Python 理論與實戰",className:"welcome-book-img"}),r.jsx("a",{href:"https://deepwisdom.com.tw/product/%e6%89%8b%e8%a1%93%e5%88%80%e8%88%ac%e7%b2%be%e6%ba%96%e7%9a%84frm-%e7%94%a8python%e7%a7%91%e5%ad%b8%e7%ae%a1%e6%8e%a7%e8%b2%a1%e9%87%91%e9%a2%a8%e9%9a%aa%e5%9f%ba%e7%a4%8e%e7%af%87dm2301/",target:"_blank",rel:"noopener noreferrer",className:"welcome-purchase-btn",children:"[ 本書官網購買連結 ]"})]}),r.jsxs("div",{className:"welcome-content",children:[r.jsxs("h2",{className:"welcome-title",children:["手術刀般精準的 FRM 用 Python",r.jsx("br",{}),"科學管控財金風險：基礎篇"]}),r.jsx("div",{className:"welcome-slogan",children:"☆★☆★【有如手術刀般精準！利用Python幫你管控財金風險！】★☆★☆"}),r.jsxs("div",{className:"welcome-text-scroll",children:[r.jsx("p",{children:"本書使用了當紅的程式語言 Python，從程式設計的基本觀念談起。沒有 Python 基礎也沒關係，完整的 Python 介紹，讓您能順利銜接資料科學家最常用的套件整理，包括 Numpy，以及特別針對格式化表格類處理的 Pandas，也充分介紹了 Dataframe 的各種應用。"}),r.jsx("p",{children:"在有了充足的資料之後，接著需要有可以展示數據的工具。除了大家最愛用的 Matplotlib 之外，也介紹了高手才會用的 Seaborn。當熟悉了工具之後，就正式進入了金融理論，包括基礎的機率及統計、各種模型及機率分佈，以及抽樣、信賴區間等內容說明。"}),r.jsx("p",{children:"最後則進入到金融領域，除了介紹各種計算的演算法、模型、術語，也結合了前面所學的 Python 及工具，並講解金融商品最重要的「固定收益分析」。"}),r.jsx("p",{children:"本書從科學下手，讓您精準了解金融原理，確保金錢不再陷入水深火熱之中，將是您從科學到金融領域最重要的橋樑。"})]})]})]})})})})});function Te(){return null}function Ce(s={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:o,onRegisteredSW:c,onRegisterError:l}=s;let g,b,i;const k=async(a=!0)=>{await b,i==null||i()};async function p(){if("serviceWorker"in navigator){if(g=await pe(async()=>{const{Workbox:a}=await import("./vendor-B3CQIlJd.js").then(d=>d.w);return{Workbox:a}},[]).then(({Workbox:a})=>new a("/pwa_FRM_Book1_python/sw.js",{scope:"/pwa_FRM_Book1_python/",type:"classic"})).catch(a=>{l==null||l(a)}),!g)return;i=()=>{g==null||g.messageSkipWaiting()};{let a=!1;const d=()=>{a=!0,g==null||g.addEventListener("controlling",u=>{u.isUpdate&&window.location.reload()}),t==null||t()};g.addEventListener("installed",u=>{typeof u.isUpdate>"u"?typeof u.isExternal<"u"&&u.isExternal?d():!a&&(n==null||n()):u.isUpdate||n==null||n()}),g.addEventListener("waiting",d)}g.register({immediate:e}).then(a=>{c?c("/pwa_FRM_Book1_python/sw.js",a):o==null||o(a)}).catch(a=>{l==null||l(a)})}}return b=p(),k}function Fe(s={}){const{immediate:e=!0,onNeedRefresh:t,onOfflineReady:n,onRegistered:o,onRegisteredSW:c,onRegisterError:l}=s,[g,b]=f.useState(!1),[i,k]=f.useState(!1),[p]=f.useState(()=>Ce({immediate:e,onOfflineReady(){k(!0),n==null||n()},onNeedRefresh(){b(!0),t==null||t()},onRegistered:o,onRegisteredSW:c,onRegisterError:l}));return{needRefresh:[g,b],offlineReady:[i,k],updateServiceWorker:p}}function Ie(){const{offlineReady:[s,e],needRefresh:[t,n],updateServiceWorker:o}=Fe({onRegisteredSW(l,g){console.debug(`Service Worker at: ${l}`),g&&setInterval(()=>{g.update()},36e5)},onRegisterError(l){console.warn("SW registration error",l)}}),c=()=>{e(!1),n(!1)};return r.jsx("div",{className:"ReloadPrompt-container",children:(s||t)&&r.jsxs("div",{className:"ReloadPrompt-toast",children:[r.jsx("div",{className:"ReloadPrompt-message",children:s?"App ready to work offline":"New content available, click on reload button to update."}),t&&r.jsx("button",{className:"ReloadPrompt-toast-button",onClick:()=>o(!0),children:"Reload"}),r.jsx("button",{className:"ReloadPrompt-toast-button",onClick:c,children:"Close"})]})})}function Be(s){const[e,t]=f.useState(null),[n,o]=f.useState(!1),c=f.useRef({});return f.useEffect(()=>{if(!s){t(null);return}const l=s.content,g=s.id;if(l!=null&&l.body&&!(l!=null&&l.bodyRef)){t(l.body);return}const b=l==null?void 0:l.bodyRef;if(!b||!Array.isArray(b)||b.length===0){t(null);return}let i=!1;return o(!0),(async()=>{const p={};await Promise.all(b.map(async a=>{const d=`${g}/${a}`;if(c.current[d]!==void 0){p[a]=c.current[d];return}try{const u=`/pwa_FRM_Book1_python/data/modular/${g}/${a}.json`,w=await fetch(u);if(!w.ok)throw new Error(`HTTP ${w.status}`);const R=(await w.json()).content||"";c.current[d]=R,p[a]=R}catch(u){console.warn(`[useBodyContent] Failed to load ${g}/${a}:`,u),p[a]=""}})),i||(t(p),o(!1))})(),()=>{i=!0}},[s]),{bodyContent:e,bodyLoading:n}}const me=`
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
`,ze=`
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
`,fe=`
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
`,Oe=`
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
`,Qe=`
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

    # Provide a minimal scipy.linalg stub for common examples (pascal, ldl)
    linalg = types.ModuleType('scipy.linalg')

    def pascal(n):
        import numpy as _np
        from math import comb
        M = _np.zeros((n, n), dtype=int)
        for i in range(n):
            for j in range(n):
                ii = i
                jj = j
                if jj < ii:
                    M[i, j] = comb(ii, jj)
                else:
                    M[i, j] = comb(jj, ii)
        return M

    def ldl(A):
        import numpy as _np
        A = _np.array(A)
        n = A.shape[0]
        # Try Cholesky for positive-definite matrices
        try:
            L = _np.linalg.cholesky(A)
            D = _np.eye(n)
            P = None
            return L, D, P
        except Exception:
            # Fallback: eigen-decomposition (not triangular but satisfies A = V D V.T)
            evals, evecs = _np.linalg.eigh(A)
            D = _np.diag(evals)
            L = evecs
            P = None
            return L, D, P

    # Additional common linear algebra helpers
    def eig(A):
        import numpy as _np
        vals, vecs = _np.linalg.eig(_np.array(A))
        return vals, vecs

    def inv(A):
        import numpy as _np
        return _np.linalg.inv(_np.array(A))

    def solve(a, b):
        import numpy as _np
        return _np.linalg.solve(_np.array(a), _np.array(b))

    linalg.pascal = pascal
    linalg.ldl = ldl
    linalg.eig = eig
    linalg.inv = inv
    linalg.solve = solve
    scipy.linalg = linalg
    sys.modules['scipy.linalg'] = linalg

`,We=`
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
`;let Y=null,F=null;const Ue=["https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js","https://unpkg.com/pyodide@0.26.4/pyodide.js"];function He(s){return new Promise((e,t)=>{const n=document.createElement("script");n.src=s,n.crossOrigin="anonymous",n.onload=e,n.onerror=()=>t(new Error(`Failed to load script: ${s}`)),document.head.appendChild(n)})}async function Ge(){if(typeof window.loadPyodide!="function"){console.warn("window.loadPyodide not found, loading dynamically...");for(const s of Ue)try{if(await He(s),typeof window.loadPyodide=="function"){console.log(`Pyodide loaded from ${s}`);return}}catch(e){console.warn(`Failed to load Pyodide from ${s}:`,e.message)}throw new Error("Failed to load Pyodide from all CDN sources")}}class Ve{constructor(e){this.onProgress=e,this.current=0,this.target=0,this.message="",this.interval=null,this.step=.1}start(){this.interval||(this.interval=setInterval(()=>{if(this.current<this.target){const e=this.target-this.current,t=e>20?3.5:e>5?1.5:.5;this.current=Math.min(this.current+t,this.target),this.onProgress(Math.floor(this.current),this.message)}else this.target<99&&(this.current=Math.min(this.current+.08,99.9),this.onProgress(Math.floor(this.current),this.message))},100))}update(e,t){this.target=e,t&&(this.message=t)}async yieldToUI(){return new Promise(e=>setTimeout(e,30))}finish(e="Ready!"){this.interval&&clearInterval(this.interval),this.current=100,this.onProgress(100,e)}}async function Ye(s){return Y?(s&&s(100,"Ready"),Y):F?F.then(e=>(s&&s(100,"Ready"),e)):(F=(async()=>{const e=new Ve(s);e.start();try{e.update(10,"正在啟動 Python 直譯器 (v0.26.4)..."),await Ge();let t=null,n=3;for(;n>0;)try{const p="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";console.log("Using Pyodide CDN for packages:",p),t=await window.loadPyodide({indexURL:p});break}catch(p){if(console.warn(`Failed to load Pyodide (attempts left: ${n-1}):`,p),n--,n===0)throw p;await new Promise(a=>setTimeout(a,1e3))}try{const p=document.getElementById("inline-scipy-stub");if(p&&p.textContent&&p.textContent.trim().length>0)try{await t.runPythonAsync(p.textContent),console.log("Inline SciPy stub executed early.")}catch(a){console.warn("Failed to execute inline SciPy stub:",a)}}catch(p){console.warn("Error checking inline SciPy stub:",p)}e.update(25,"引擎啟動完成，正在檢查本地暫存環境..."),await e.yieldToUI();const o="/lib/python3.12/site-packages";try{t.FS.mkdirTree(o)}catch{}t.FS.mount(t.FS.filesystems.IDBFS,{},o),e.update(26,"正在從本地儲存區載入 Python 環境..."),await new Promise(p=>{t.FS.syncfs(!0,a=>{a&&console.error("IDBFS sync error:",a),p()})}),await e.yieldToUI();const c=["numpy","pandas","matplotlib","statsmodels","sympy","lxml","micropip"],l=["numpy-financial","pandas-datareader","pyodide-http","pymoo==0.4.1","seaborn"],g=t.FS.readdir(o),b=c.filter(p=>!g.includes(p)&&!g.some(a=>a.startsWith(p+"-"))),i=l.filter(p=>{const a=p.replace("-","_");return!g.includes(p)&&!g.includes(a)&&!g.some(d=>d.startsWith(p+"-"))&&!g.some(d=>d.startsWith(a+"-"))});if(b.length>0||i.length>0){const p=[...b,...i];if(e.update(30,`正在同步並安裝套件: ${p.join(", ")}...`),b.length>0&&(e.update(40,`正在從 CDN 獲取核心科學套件 (${b.length} 個)...`),await t.loadPackage(b)),i.length>0){e.update(70,`正在掛載第三方擴充資源 (${i.length} 個)...`),await t.loadPackage("micropip");const a=t.pyimport("micropip"),d=i.map(u=>u==="numpy-financial"?"/pwa_FRM_Book1_python/wheels/numpy_financial-1.0.0-py3-none-any.whl":u);await a.install(d)}e.update(85,"正在固化環境映射至本地磁碟..."),await new Promise(a=>{t.FS.syncfs(!1,d=>{d&&console.error("IDBFS save error:",d),a()})}),e.update(90,"✅ 環境已完成本地持久化儲存")}else e.update(90,"🚀 偵測到本地環境快照，已跳過網路請求");return await e.yieldToUI(),e.update(92,"⚙️ 配置：正在載入環境優化補丁..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(`
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
                `)]),await e.yieldToUI(),e.update(98,"🚀 系統：正在啟動 Pymoo & QuantLib 虛擬層..."),await e.yieldToUI(),await Promise.all([t.runPythonAsync(Qe),t.runPythonAsync(We),t.runPythonAsync(ze),t.runPythonAsync(me),t.runPythonAsync(fe),t.runPythonAsync(Oe)]),e.update(99,"🛡️ 系統：權限校正與輸入掛鉤注入..."),await t.runPythonAsync(`
import builtins
import js
def custom_input(prompt = ""):
    try:
        val = js.window.prompt(prompt if prompt else "")
        return val if val is not None else ""
    except Exception: return ""
builtins.input = custom_input
            `),await e.yieldToUI(),Y=t,F=null,e.finish("載入完成！正在進入主介面..."),t}catch(t){throw F=null,e.interval&&clearInterval(e.interval),console.error("Failed to load Pyodide:",t),t}})(),F)}async function Ke(s,e,t=3e4){let n;const o=new Promise((c,l)=>{n=setTimeout(()=>{l(new Error(`Execution timed out after ${t/1e3} seconds`))},t)});try{return await Promise.race([s.runPythonAsync(e),o])}finally{clearTimeout(n)}}async function Je(s){if(s)try{await s.runPythonAsync(`
            import gc
import matplotlib.pyplot as plt
            plt.close('all')
            gc.collect()
                `)}catch{}}const re=new Set;async function oe(s,e){!s||!e||re.has(e)||re.add(e)}async function Ze(s){if(s)try{await s.loadPackage("micropip");const e=s.pyimport("micropip"),t=["/pwa_FRM_Book1_python/wheels/pymoo-0.4.1-py3-none-any.whl","/pwa_FRM_Book1_python/wheels/pandas_datareader-0.10.0-py3-none-any.whl","/pwa_FRM_Book1_python/wheels/pyodide_http-0.2.2-py3-none-any.whl","/pwa_FRM_Book1_python/wheels/seaborn-0.13.2-py3-none-any.whl"];await e.install(t,{transient:!0}).catch(n=>{console.warn("preloadHeavyPackages pip install failed",n)})}catch(e){console.warn("preloadHeavyPackages error",e)}}async function Xe(s){try{const e=await s.runPythonAsync(`
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
      `);t.push(`data:image/png;base64,${o}`)}return await s.runPythonAsync('import matplotlib.pyplot as plt; plt.close("all")'),t}catch(e){return console.error("Failed to capture plots:",e),[]}}async function ie(s,e=!1){try{const t=e?"module://matplotlib_pyodide.wasm_backend":"AGG";await s.runPythonAsync(`
import matplotlib
import matplotlib.pyplot as plt
matplotlib.use('${t}')
if plt.style.available and 'default' in plt.style.available:
    plt.style.use('default')
    `)}catch(t){console.error("✗ Matplotlib 初始化失敗:",t)}}async function et(s){try{await s.runPythonAsync(`
import matplotlib.pyplot as plt
if len(plt.get_fignums()) > 0:
    plt.show()
    `)}catch(e){console.error("Failed to show plots:",e)}}function le(s){const e=s.message||String(s),t=[{pattern:/NameError: name '(.+)' is not defined/,format:n=>`❌ 變數錯誤：'${n[1]}' 未定義

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
• 查看完整錯誤訊息了解詳情`}];for(const{pattern:n,format:o}of t){const c=e.match(n);if(c)return o(c)}return`❌ 執行錯誤

${e}

💡 提示：
• 仔細閱讀錯誤訊息
• 檢查程式碼語法和邏輯
• 使用 print() 除錯
• 參考範例程式碼

🔧 除錯技巧：
• 逐行執行程式碼找出問題
• 使用 print() 輸出變數值
• 簡化程式碼，逐步測試`}class tt{constructor(){this.metrics={},this.enabled=!0}start(e){this.enabled&&(this.metrics[e]={start:performance.now(),end:null,duration:null})}end(e){if(!this.enabled||!this.metrics[e])return 0;const t=performance.now(),n=this.metrics[e].start,o=t-n;return this.metrics[e].end=t,this.metrics[e].duration=o,this.log(e,o),o}log(e,t){const n=t<100?"⚡":t<1e3?"⏱️":"🐌",o=t<100?"color: green":t<1e3?"color: orange":"color: red";console.log(`%c${n} ${e}: ${t.toFixed(2)}ms`,o),t>1e3&&console.warn(`⚠️ ${e} 執行時間過長: ${t.toFixed(2)}ms`)}async measure(e,t){this.start(e);try{return await t()}finally{this.end(e)}}getMetric(e){return this.metrics[e]||null}getMetrics(){return{...this.metrics}}getStats(){const e=Object.values(this.metrics).filter(t=>t.duration!==null).map(t=>t.duration);return e.length===0?{count:0,total:0,average:0,min:0,max:0}:{count:e.length,total:e.reduce((t,n)=>t+n,0),average:e.reduce((t,n)=>t+n,0)/e.length,min:Math.min(...e),max:Math.max(...e)}}clear(e){e?delete this.metrics[e]:this.metrics={}}setEnabled(e){this.enabled=e}report(){const e=this.getStats();console.group("📊 效能報告"),console.log(`總計測量: ${e.count} 次`),console.log(`總時間: ${e.total.toFixed(2)}ms`),console.log(`平均時間: ${e.average.toFixed(2)}ms`),console.log(`最快: ${e.min.toFixed(2)}ms`),console.log(`最慢: ${e.max.toFixed(2)}ms`),console.groupEnd(),console.group("📋 詳細指標"),Object.entries(this.metrics).forEach(([t,n])=>{n.duration!==null&&console.log(`${t}: ${n.duration.toFixed(2)}ms`)}),console.groupEnd()}}const z=new tt;z.setEnabled(!1);let ce=!1;function at(){if(!ce&&(ce=!0,"PerformanceObserver"in window)){new PerformanceObserver(o=>{const c=o.getEntries(),l=c[c.length-1];console.log("🎨 LCP:",l.renderTime||l.loadTime)}).observe({entryTypes:["largest-contentful-paint"]}),new PerformanceObserver(o=>{o.getEntries().forEach(l=>{console.log("⚡ FID:",l.processingStart-l.startTime)})}).observe({entryTypes:["first-input"]});let t=0;new PerformanceObserver(o=>{o.getEntries().forEach(l=>{l.hadRecentInput||(t+=l.value)}),console.log("📐 CLS:",t)}).observe({entryTypes:["layout-shift"]})}}const st=f.lazy(()=>pe(()=>import("./CodePreviewPanel-DcyHY-xF.js"),__vite__mapDeps([0,1,2,3]))),K={QuantLib:"QuantLib",arch:"arch",autograd:"autograd",chart_studio:"chart-studio",datetime:"datetime",lxml:"lxml",math:"math",matplotlib:"matplotlib",mcint:"mcint",mibian:"mibian",mpl_toolkits:"matplotlib",numpy:"numpy",numpy_financial:"wheels/numpy_financial-1.0.0-py3-none-any.whl",openpyxl:"openpyxl",pandas:"pandas",pandas_datareader:"wheels/pandas_datareader-0.10.0-py3-none-any.whl",plotly:"plotly",prettytable:"prettytable",pylab:"matplotlib",pymoo:"wheels/pymoo-0.4.1-py3-none-any.whl",pyodide_http:"wheels/pyodide_http-0.2.2-py3-none-any.whl",qpsolvers:"qpsolvers",requests:"requests","scikit-learn":"scikit-learn",scipy:"scipy",seaborn:"wheels/seaborn-0.13.2-py3-none-any.whl",sklearn:"scikit-learn",statsmodels:"statsmodels",sympy:"sympy",tabulate:"tabulate"},de={requests:["certifi","charset_normalizer","idna","urllib3"],certifi:"wheels/certifi-2026.1.4-py3-none-any.whl",charset_normalizer:"wheels/charset_normalizer-3.4.4-py3-none-any.whl",idna:"wheels/idna-3.11-py3-none-any.whl",urllib3:"wheels/urllib3-2.6.3-py3-none-any.whl"};typeof window<"u"&&"serviceWorker"in navigator&&(async()=>{try{const s=`/pwa_FRM_Book1_python/manifest.webmanifest?t=${Date.now()}`;let e=null;try{const c=await fetch(s,{cache:"no-store"});c&&c.ok&&(e=await c.text())}catch{}if(!e)return;const t=localStorage.getItem("app_assets_manifest_text");if(t&&t===e)return;localStorage.setItem("app_assets_manifest_text",e);const n=await navigator.serviceWorker.getRegistrations();if(!n||n.length===0){localStorage.getItem("app_manifest_reload_done")||(localStorage.setItem("app_manifest_reload_done","1"),location.reload());return}for(const c of n)try{await c.update(),c.waiting&&c.waiting.postMessage({type:"SKIP_WAITING"})}catch(l){console.warn("SW update attempt failed:",l)}const o=()=>{localStorage.getItem("app_manifest_reload_done")||(localStorage.setItem("app_manifest_reload_done","1"),window.location.reload())};navigator.serviceWorker.addEventListener("controllerchange",o)}catch(s){console.warn("Version check/update failed:",s)}})();function nt(){const[s,e]=f.useState(null),[t,n]=f.useState(!0),[o,c]=f.useState(0),[l,g]=f.useState("初始化中..."),[b,i]=f.useState([]),[k,p]=f.useState(!0),[a,d]=f.useState(null),[u,w]=f.useState(null),[A,R]=f.useState(""),[T,M]=f.useState({}),{bodyContent:I}=Be(a),[v,h]=f.useState(""),[j,q]=f.useState([]),[W,U]=f.useState(!1),[J,ue]=f.useState(!1),[D,ye]=f.useState(()=>{const y=localStorage.getItem("theme");return y==="dark"||!y&&!1}),[Z,he]=f.useState(600),[C]=f.useState(new Set),[X,ee]=f.useState(null),te=f.useRef(!1);f.useEffect(()=>{p(!0);const y=`/pwa_FRM_Book1_python/data/chapters_index.json?t=${Date.now()}`;fetch(y).then(m=>m.json()).then(m=>{m&&m.length>0&&i(m),p(!1)}).catch(m=>{console.error("Failed to load chapters index:",m),p(!1)})},[]);const ge=async y=>{if(T[y])return T[y];try{p(!0);const m=await fetch(`/pwa_FRM_Book1_python/data/chapters_${y}.json?t=${Date.now()}`);if(!m.ok)throw new Error(`HTTP error! status: ${m.status}`);const P=await m.text();let S=null;try{S=JSON.parse(P)}catch{try{const E=P.replace(/\\(?!["\\/bfnrtu])/g,"\\\\");S=JSON.parse(E)}catch(E){throw new Error(`Failed to parse chapter data: ${E.message}`)}}return M(E=>({...E,[y]:S})),p(!1),S}catch(m){return console.error(`Failed to load chapter ${y}:`,m),p(!1),null}};f.useEffect(()=>{Ye((m,P)=>{c(m),g(P)}).then(m=>{e(m),n(!1),z.end("pyodide-init")}),at();const y=[];if("serviceWorker"in navigator){const m=setInterval(()=>{navigator.serviceWorker.getRegistrations().then(S=>{S.forEach(E=>E.update())})},36e5),P=()=>{};navigator.serviceWorker.addEventListener("controllerchange",P),y.push(()=>{clearInterval(m),navigator.serviceWorker.removeEventListener("controllerchange",P)})}if("storage"in navigator&&"estimate"in navigator.storage){const m=async()=>{try{const S=await navigator.storage.estimate();S.usage&&S.quota&&S.usage/S.quota*100>80&&console.warn("Storage usage is high (>80%). Consider cleaning up.")}catch(S){console.warn("Failed to check storage quota:",S)}};m();const P=setInterval(m,300*1e3);y.push(()=>clearInterval(P))}return()=>{y.forEach(m=>m())}},[]),f.useEffect(()=>{s&&!t&&Ze(s).then(()=>{te.current||(te.current=!0,console.warn("Background initialization complete"))}).catch(y=>console.error("Background loaded failed",y))},[s,t]),f.useEffect(()=>{localStorage.setItem("theme",D?"dark":"light"),document.documentElement.setAttribute("data-theme",D?"dark":"light")},[D]);const ae=async(y,m=!1)=>{var ne;if(!s)return;const P=y.match(/^\s*(?:from|import)\s+([a-zA-Z0-9_]+)/gm);if(!P)return;if(/^\s*(?:from|import)\s+QuantLib\b/m.test(y)&&!C.has("QuantLib"))try{m||h(_=>_+`正在啟用 QuantLib 相容性墊片...
`),await s.runPythonAsync(me),C.add("QuantLib"),m||h(_=>_+`✅ QuantLib 墊片已啟用。
`)}catch(_){console.warn("QuantLib shim injection failed:",_),m||h(x=>x+`⚠️ QuantLib 墊片啟用失敗，將嘗試繼續執行...
`)}const S=["sys","os","io","time","timeit","base64","json","datetime","math","re","warnings","builtins","types","random","csv","copy","collections","itertools","functools","pathlib","fractions","struct","operator","string","decimal","abc","enum","typing","textwrap"],E=["numpy","pandas","matplotlib","micropip","js","builtins","QuantLib","mcint","arch","mibian"],$=[...new Set(P.map(_=>{const x=_.trim().split(/\s+/);return x[0]==="from",x[1].split(".")[0]}))].filter(_=>!S.includes(_)&&!E.includes(_)).filter(_=>{var x;return!C.has(_)&&!((x=window.failedPackages)!=null&&x.has(_))});if($.length===0)return;const B=[],O=[],H=new URL("/pwa_FRM_Book1_python/",window.location.origin).href,Pe=new Set(["scipy","statsmodels","scikit-learn","sympy"]),Q=_=>{if(_){if(typeof _=="string"&&(_.endsWith(".whl")||_.startsWith("http"))){O.push(_);return}Pe.has(_)?B.push(_):O.push(_)}},se={sklearn:["scipy","scikit-learn"],"scikit-learn":["scipy"],statsmodels:["scipy"],sympy:[],seaborn:["matplotlib","pandas","scipy","statsmodels"],pandas_datareader:["requests"]};if($.forEach(_=>{const x=K[_];x?(Q(x.endsWith(".whl")?H+x:x),(de[_]||[]).forEach(L=>{const G=de[L]||L;Q(G.endsWith(".whl")?H+G:G)})):Q(_),se[_]&&se[_].forEach(N=>{if(!C.has(N)&&!E.includes(N)){const L=K[N]||N;Q(L.endsWith(".whl")?H+L:L)}})}),B.length>0||O.length>0)try{const _=[...new Set(B)],x=[...new Set(O)];m||h(N=>N+`正在動態載入所需套件 [${$.join(", ")}]...
`);for(const N of _)await s.loadPackage(N);x.length>0&&(await s.loadPackage("micropip"),await s.runPythonAsync(`
import micropip
await micropip.install(${JSON.stringify(x)}, keep_going=True)
          `)),$.includes("pandas_datareader")&&await s.runPythonAsync(fe),$.includes("matplotlib")&&(await ie(s),X||ee("AGG")),$.forEach(N=>{C.add(N);const L=K[N];L&&!L.endsWith(".whl")&&C.add(L)}),m||h(N=>N+`✅ 套件載入完成。
`)}catch(_){if(console.warn("Dependency loading failed:",_),window.failedPackages||(window.failedPackages=new Set),$.forEach(x=>window.failedPackages.add(x)),!m){const x=_.message||String(_);if(x.includes("Can't find a pure Python 3 wheel")){const N=((ne=x.match(/for: '([^']+)'/))==null?void 0:ne[1])||"unknown";h(L=>L+`⚠️ 套件 "${N}" 無法載入（可能不支援瀏覽器環境），嘗試繼續執行...
`)}else h(N=>N+`⚠️ 套件載入出現問題，嘗試直接執行...
`)}}},_e=async y=>{if(!(!s||W||!y)){U(!0),h(`執行中...
`),q([]);try{a&&a.id&&await oe(s,a.id),await ae(y),z.start("run-code"),await Je(s);const m=y.includes("matplotlib.widgets")||y.includes("Slider")||y.includes("Button");ue(m);const P=m?"module://matplotlib_pyodide.wasm_backend":"AGG";if(X!==P&&(await ie(s,m),ee(P)),await s.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `),m){const E=document.getElementById("pyodide-plot-container");E&&(E.innerHTML="",window.document.pyodideMplTarget=E)}try{await Ke(s,y)}catch(E){const $=await s.runPythonAsync("sys.stdout.getvalue()"),B=le(E);h(($?$+`
`:"")+B),U(!1),z.end("run-code");return}const S=await s.runPythonAsync("sys.stdout.getvalue()");if(h(S||"執行完成（無文字內容輸出 ）"),J)await et(s);else{const E=await Xe(s);q(E)}}catch(m){const P=le(m);h(P),console.error(m)}finally{U(!1),z.end("run-code")}}},we=async y=>{let m=y;if(y&&!y.content&&(m=await ge(y.id)),!!m&&(d(m),w(null),R(""),h(""),q([]),m&&m.examples&&s)){const P=m.examples.map(S=>S.code).join(`
`);ae(P,!0)}};f.useEffect(()=>{s&&a&&a.id&&oe(s,a.id).catch(y=>console.error("Dataset lazy load failed",y))},[s,a]);const be=y=>{w(y),h(""),q([])},ve=y=>{w(y),h(""),q([])},xe=()=>{w(null),h(""),q([])},ke=t;return r.jsxs("div",{className:`app ${D?"dark":""}`,children:[r.jsxs("div",{className:"main-content",children:[r.jsxs("div",{className:"top-bar",children:[r.jsxs("div",{className:"top-bar-left",children:[r.jsx(Se,{size:20,className:"logo-icon"}),r.jsx("span",{className:"app-title",children:"FRM_Book1 (基礎篇)"})]}),r.jsx(De,{chapters:b,currentChapter:a,bodyContent:I,onChapterSelect:we,currentScript:u,onScriptSelect:ve,selectedTopicId:A,onTopicSelect:R,loading:k}),r.jsx("div",{className:"top-bar-right",children:r.jsx("button",{className:"theme-toggle",onClick:()=>ye(!D),title:D?"切換到亮色模式":"切換到暗色模式",children:D?r.jsx(Ee,{size:20}):r.jsx(Ne,{size:20})})})]}),ke&&r.jsx("div",{className:"hydration-overlay",children:r.jsxs("div",{className:"hydration-card",children:[r.jsxs("div",{className:"hydration-header",children:[r.jsx("div",{className:"hydration-title",children:"FRM Python 引擎啟動中"}),r.jsx("div",{className:"hydration-subtitle",children:"Financial Risk Management"})]}),r.jsx("div",{className:"hydration-progress-container",children:r.jsx("div",{className:"hydration-progress-bar",style:{width:`${o}%`}})}),r.jsxs("div",{className:"hydration-status",children:[r.jsx("span",{children:l}),r.jsxs("span",{children:[o,"%"]})]})]})}),r.jsxs("div",{className:"panes-container",children:[r.jsx("div",{className:"content-pane",children:r.jsx(qe,{chapter:a,bodyContent:I,onCodeClick:be,selectedTopicId:A,darkMode:D,output:v,isRunning:W,plotImages:j,onClearOutput:()=>{h(""),q([])}})}),u&&r.jsx("div",{className:"preview-pane",style:{width:`${Z}px`},children:r.jsx(f.Suspense,{fallback:r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",color:"#888"},children:"Loading Editor..."}),children:r.jsx(st,{script:u,onClose:xe,onRun:_e,isRunning:W,isLoading:t,output:v,images:j,isInteractive:J,darkMode:D,width:Z,onResize:he})})})]})]}),r.jsx(Te,{pyodide:s}),r.jsx(Ie,{})]})}async function rt(){try{if(!("serviceWorker"in navigator))return;const s="frm_sw_cleanup_done_v1";if(localStorage.getItem(s))return;if(!navigator.serviceWorker.controller){localStorage.setItem(s,"1");return}console.info("[AUTO-CLEAN] Detected active Service Worker — cleaning caches and storage.");try{const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(t=>t.unregister().catch(()=>{}))),console.info("[AUTO-CLEAN] serviceWorker registrations unregistered.")}catch(e){console.warn("[AUTO-CLEAN] Failed to unregister service workers",e)}try{if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t).catch(()=>{}))),console.info("[AUTO-CLEAN] CacheStorage cleared:",e)}}catch(e){console.warn("[AUTO-CLEAN] Failed to clear CacheStorage",e)}try{if("databases"in indexedDB){const e=await indexedDB.databases();await Promise.all(e.map(t=>indexedDB.deleteDatabase(t.name).catch(()=>{}))),console.info("[AUTO-CLEAN] IndexedDB databases deleted:",e.map(t=>t.name))}else{const e=["pyodide","emscripten-archives","idb-filesystem","file_storage"];await Promise.all(e.map(t=>indexedDB.deleteDatabase(t).catch(()=>{}))),console.info("[AUTO-CLEAN] IndexedDB fallback delete attempted for candidates.")}}catch(e){console.warn("[AUTO-CLEAN] Failed to clear IndexedDB",e)}try{localStorage.clear(),sessionStorage.clear(),console.info("[AUTO-CLEAN] localStorage and sessionStorage cleared.")}catch(e){console.warn("[AUTO-CLEAN] Failed to clear storage",e)}try{localStorage.setItem(s,"1")}catch{}try{console.info("[AUTO-CLEAN] Reloading page to load fresh assets."),window.location.reload(!0)}catch(e){console.info("[AUTO-CLEAN] Reload skipped.",e)}}catch(s){console.warn("[AUTO-CLEAN] Unexpected error",s)}}rt().catch(()=>{});je.createRoot(document.getElementById("root")).render(r.jsx(Le.StrictMode,{children:r.jsx(nt,{})}));
