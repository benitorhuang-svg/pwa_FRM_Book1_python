const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodePreviewPanel-XY5y1u4n.js","assets/monaco-h6ncRSsj.js","assets/vendor-CRB3T2We.js","assets/pyodide-CzPjtFpi.js","assets/CodePreviewPanel-_nNuClhk.css"])))=>i.map(i=>d[i]);
var nr=Object.defineProperty;var rr=(n,e,t)=>e in n?nr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var S=(n,e,t)=>rr(n,typeof e!="symbol"?e+"":e,t);import{r as sr,a as ar,g as ir}from"./vendor-CRB3T2We.js";import{r as A,R as lr}from"./monaco-h6ncRSsj.js";import{_ as or}from"./pyodide-CzPjtFpi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var wt={exports:{}},ve={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dn;function cr(){if(dn)return ve;dn=1;var n=sr(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(l,p,c){var d,h={},m=null,f=null;c!==void 0&&(m=""+c),p.key!==void 0&&(m=""+p.key),p.ref!==void 0&&(f=p.ref);for(d in p)r.call(p,d)&&!i.hasOwnProperty(d)&&(h[d]=p[d]);if(l&&l.defaultProps)for(d in p=l.defaultProps,p)h[d]===void 0&&(h[d]=p[d]);return{$$typeof:e,type:l,key:m,ref:f,props:h,_owner:s.current}}return ve.Fragment=t,ve.jsx=o,ve.jsxs=o,ve}var fn;function pr(){return fn||(fn=1,wt.exports=cr()),wt.exports}var k=pr(),Ze={},hn;function ur(){if(hn)return Ze;hn=1;var n=ar();return Ze.createRoot=n.createRoot,Ze.hydrateRoot=n.hydrateRoot,Ze}var dr=ur();const fr=ir(dr);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nn=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=A.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},p)=>A.createElement("svg",{ref:p,...mr,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Nn("lucide",s),...l},[...o.map(([c,d])=>A.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(n,e)=>{const t=A.forwardRef(({className:r,...s},i)=>A.createElement(gr,{ref:i,iconNode:e,className:Nn(`lucide-${hr(n)}`,r),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=st("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=st("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=st("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=st("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function xr({chapters:n,currentChapter:e,onChapterSelect:t,currentScript:r,onScriptSelect:s,loading:i}){var o;return k.jsxs("div",{className:"top-nav-container",children:[k.jsxs("div",{className:"nav-group",children:[k.jsx("label",{className:"nav-label",htmlFor:"chapter-select",children:"章節 Selection"}),k.jsxs("div",{className:"custom-select-wrapper",children:[k.jsxs("select",{id:"chapter-select",name:"chapter-select",value:(e==null?void 0:e.id)||"",onChange:l=>{const p=n.find(c=>c.id===l.target.value);p&&t(p)},disabled:i||n.length===0,className:"custom-select",children:[k.jsx("option",{value:"",disabled:!0,children:i?"載入中...":"請選擇章節..."}),n.map(l=>k.jsx("option",{value:l.id,children:l.title},l.id))]}),k.jsx(mn,{className:"select-icon",size:16})]})]}),k.jsxs("div",{className:`nav-group ${e?"":"disabled"}`,children:[k.jsx("label",{className:"nav-label",htmlFor:"script-select",children:"代碼 Code"}),k.jsxs("div",{className:"custom-select-wrapper",children:[k.jsxs("select",{id:"script-select",name:"script-select",value:(r==null?void 0:r.filename)||"",onChange:l=>{if(e!=null&&e.examples){const p=e.examples.find(c=>c.filename===l.target.value);p&&s(p)}},disabled:!e||!e.examples,className:"custom-select",children:[k.jsx("option",{value:"",disabled:!0,children:"選擇程式碼..."}),(o=e==null?void 0:e.examples)==null?void 0:o.map(l=>k.jsx("option",{value:l.filename,children:l.filename},l.filename))]}),k.jsx(mn,{className:"select-icon",size:16})]})]})]})}function Mt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var fe=Mt();function Dn(n){fe=n}var ze={exec:()=>null};function w(n,e=""){let t=typeof n=="string"?n:n.source,r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(B.caret,"$1"),t=t.replace(s,o),r},getRegex:()=>new RegExp(t,e)};return r}var _r=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),B={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},wr=/^(?:[ \t]*(?:\n|$))+/,Tr=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Er=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Fe=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Sr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,$t=/(?:[*+-]|\d{1,9}[.)])/,In=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,On=w(In).replace(/bull/g,$t).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ar=w(In).replace(/bull/g,$t).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),zt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Rr=/^[^\n]+/,Ft=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,vr=w(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ft).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Lr=w(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$t).getRegex(),at="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",qt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pr=w("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",qt).replace("tag",at).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Mn=w(zt).replace("hr",Fe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at).getRegex(),Cr=w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Mn).getRegex(),Bt={blockquote:Cr,code:Tr,def:vr,fences:Er,heading:Sr,hr:Fe,html:Pr,lheading:On,list:Lr,newline:wr,paragraph:Mn,table:ze,text:Rr},gn=w("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Fe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at).getRegex(),Nr={...Bt,lheading:Ar,table:gn,paragraph:w(zt).replace("hr",Fe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",gn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at).getRegex()},Dr={...Bt,html:w(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",qt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ze,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:w(zt).replace("hr",Fe).replace("heading",` *#{1,6} *[^
]`).replace("lheading",On).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ir=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Or=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$n=/^( {2,}|\\)\n(?!\s*$)/,Mr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,it=/[\p{P}\p{S}]/u,jt=/[\s\p{P}\p{S}]/u,zn=/[^\s\p{P}\p{S}]/u,$r=w(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,jt).getRegex(),Fn=/(?!~)[\p{P}\p{S}]/u,zr=/(?!~)[\s\p{P}\p{S}]/u,Fr=/(?:[^\s\p{P}\p{S}]|~)/u,qr=w(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",_r?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),qn=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Br=w(qn,"u").replace(/punct/g,it).getRegex(),jr=w(qn,"u").replace(/punct/g,Fn).getRegex(),Bn="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ur=w(Bn,"gu").replace(/notPunctSpace/g,zn).replace(/punctSpace/g,jt).replace(/punct/g,it).getRegex(),Hr=w(Bn,"gu").replace(/notPunctSpace/g,Fr).replace(/punctSpace/g,zr).replace(/punct/g,Fn).getRegex(),Qr=w("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,zn).replace(/punctSpace/g,jt).replace(/punct/g,it).getRegex(),Gr=w(/\\(punct)/,"gu").replace(/punct/g,it).getRegex(),Wr=w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Yr=w(qt).replace("(?:-->|$)","-->").getRegex(),Zr=w("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Yr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),tt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Xr=w(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",tt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jn=w(/^!?\[(label)\]\[(ref)\]/).replace("label",tt).replace("ref",Ft).getRegex(),Un=w(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ft).getRegex(),Vr=w("reflink|nolink(?!\\()","g").replace("reflink",jn).replace("nolink",Un).getRegex(),kn=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ut={_backpedal:ze,anyPunctuation:Gr,autolink:Wr,blockSkip:qr,br:$n,code:Or,del:ze,emStrongLDelim:Br,emStrongRDelimAst:Ur,emStrongRDelimUnd:Qr,escape:Ir,link:Xr,nolink:Un,punctuation:$r,reflink:jn,reflinkSearch:Vr,tag:Zr,text:Mr,url:ze},Kr={...Ut,link:w(/^!?\[(label)\]\((.*?)\)/).replace("label",tt).getRegex(),reflink:w(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",tt).getRegex()},Pt={...Ut,emStrongRDelimAst:Hr,emStrongLDelim:jr,url:w(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",kn).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:w(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",kn).getRegex()},Jr={...Pt,br:w($n).replace("{2,}","*").getRegex(),text:w(Pt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xe={normal:Bt,gfm:Nr,pedantic:Dr},Le={normal:Ut,gfm:Pt,breaks:Jr,pedantic:Kr},es={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bn=n=>es[n];function oe(n,e){if(e){if(B.escapeTest.test(n))return n.replace(B.escapeReplace,bn)}else if(B.escapeTestNoEncode.test(n))return n.replace(B.escapeReplaceNoEncode,bn);return n}function yn(n){try{n=encodeURI(n).replace(B.percentDecode,"%")}catch{return null}return n}function xn(n,e){var i;let t=n.replace(B.findPipe,(o,l,p)=>{let c=!1,d=l;for(;--d>=0&&p[d]==="\\";)c=!c;return c?"|":" |"}),r=t.split(B.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(B.slashPipe,"|");return r}function Pe(n,e,t){let r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function ts(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function _n(n,e,t,r,s){let i=e.href,o=e.title||null,l=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let p={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:o,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,p}function ns(n,e,t){let r=n.match(t.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(i=>{let o=i.match(t.other.beginningSpace);if(o===null)return i;let[l]=o;return l.length>=s.length?i.slice(s.length):i}).join(`
`)}var nt=class{constructor(n){S(this,"options");S(this,"rules");S(this,"lexer");this.options=n||fe}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Pe(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],r=ns(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let r=Pe(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Pe(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=Pe(e[0],`
`).split(`
`),r="",s="",i=[];for(;t.length>0;){let o=!1,l=[],p;for(p=0;p<t.length;p++)if(this.rules.other.blockquoteStart.test(t[p]))l.push(t[p]),o=!0;else if(!o)l.push(t[p]);else break;t=t.slice(p);let c=l.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,s=s?`${s}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,i,!0),this.lexer.state.top=h,t.length===0)break;let m=i.at(-1);if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){let f=m,_=f.raw+`
`+t.join(`
`),y=this.blockquote(_);i[i.length-1]=y,r=r.substring(0,r.length-f.raw.length)+y.raw,s=s.substring(0,s.length-f.text.length)+y.text;break}else if((m==null?void 0:m.type)==="list"){let f=m,_=f.raw+`
`+t.join(`
`),y=this.list(_);i[i.length-1]=y,r=r.substring(0,r.length-m.raw.length)+y.raw,s=s.substring(0,s.length-f.raw.length)+y.raw,t=_.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(n){var t,r;let e=this.rules.block.list.exec(n);if(e){let s=e[1].trim(),i=s.length>1,o={type:"list",raw:"",ordered:i,start:i?+s.slice(0,-1):"",loose:!1,items:[]};s=i?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=i?s:"[*+-]");let l=this.rules.other.listItemRegex(s),p=!1;for(;n;){let d=!1,h="",m="";if(!(e=l.exec(n))||this.rules.block.hr.test(n))break;h=e[0],n=n.substring(h.length);let f=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,P=>" ".repeat(3*P.length)),_=n.split(`
`,1)[0],y=!f.trim(),R=0;if(this.options.pedantic?(R=2,m=f.trimStart()):y?R=e[1].length+1:(R=e[2].search(this.rules.other.nonSpaceChar),R=R>4?1:R,m=f.slice(R),R+=e[1].length),y&&this.rules.other.blankLine.test(_)&&(h+=_+`
`,n=n.substring(_.length+1),d=!0),!d){let P=this.rules.other.nextBulletRegex(R),W=this.rules.other.hrRegex(R),H=this.rules.other.fencesBeginRegex(R),D=this.rules.other.headingBeginRegex(R),Y=this.rules.other.htmlBeginRegex(R);for(;n;){let J=n.split(`
`,1)[0],se;if(_=J,this.options.pedantic?(_=_.replace(this.rules.other.listReplaceNesting,"  "),se=_):se=_.replace(this.rules.other.tabCharGlobal,"    "),H.test(_)||D.test(_)||Y.test(_)||P.test(_)||W.test(_))break;if(se.search(this.rules.other.nonSpaceChar)>=R||!_.trim())m+=`
`+se.slice(R);else{if(y||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||H.test(f)||D.test(f)||W.test(f))break;m+=`
`+_}!y&&!_.trim()&&(y=!0),h+=J+`
`,n=n.substring(J.length+1),f=se.slice(R)}}o.loose||(p?o.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(p=!0)),o.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(m),loose:!1,text:m,tokens:[]}),o.raw+=h}let c=o.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let d of o.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),((t=d.tokens[0])==null?void 0:t.type)==="text"||((r=d.tokens[0])==null?void 0:r.type)==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}}let h=this.rules.other.listTaskCheckbox.exec(d.raw);if(h){let m={type:"checkbox",raw:h[0]+" ",checked:h[0]!=="[ ]"};d.checked=m.checked,o.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=m.raw+d.tokens[0].raw,d.tokens[0].text=m.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(m)):d.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):d.tokens.unshift(m)}}if(!o.loose){let h=d.tokens.filter(f=>f.type==="space"),m=h.length>0&&h.some(f=>this.rules.other.anyLine.test(f.raw));o.loose=m}}if(o.loose)for(let d of o.items){d.loose=!0;for(let h of d.tokens)h.type==="text"&&(h.type="paragraph")}return o}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:s}}}table(n){var o;let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=xn(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(o=e[3])!=null&&o.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(let l of r)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<t.length;l++)i.header.push({text:t[l],tokens:this.lexer.inline(t[l]),header:!0,align:i.align[l]});for(let l of s)i.rows.push(xn(l,i.header.length).map((p,c)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:i.align[c]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=Pe(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{let i=ts(e[2],"()");if(i===-2)return;if(i>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),_n(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return _n(t,s,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!t||this.rules.inline.punctuation.exec(t))){let s=[...r[0]].length-1,i,o,l=s,p=0,c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+s);(r=c.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(o=[...i].length,r[3]||r[4]){l+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){p+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+p);let d=[...r[0]][0].length,h=n.slice(0,s+r.index+d+o);if(Math.min(s,o)%2){let f=h.slice(1,-1);return{type:"em",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}let m=h.slice(2,-2);return{type:"strong",raw:h,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){let e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let i;do i=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(i!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},V=class Ct{constructor(e){S(this,"tokens");S(this,"options");S(this,"state");S(this,"inlineQueue");S(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||fe,this.options.tokenizer=this.options.tokenizer||new nt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:B,block:Xe.normal,inline:Le.normal};this.options.pedantic?(t.block=Xe.pedantic,t.inline=Le.pedantic):this.options.gfm&&(t.block=Xe.gfm,this.options.breaks?t.inline=Le.breaks:t.inline=Le.gfm),this.tokenizer.rules=t}static get rules(){return{block:Xe,inline:Le}}static lex(e,t){return new Ct(t).lex(e)}static lexInline(e,t){return new Ct(t).inlineTokens(e)}lex(e){e=e.replace(B.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){var s,i,o;for(this.options.pedantic&&(e=e.replace(B.tabCharGlobal,"    ").replace(B.spaceLine,""));e;){let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(c=>(l=c.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);let c=t.at(-1);l.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.at(-1).src=c.text):t.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},t.push(l));continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),t.push(l);continue}let p=e;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0,d=e.slice(1),h;this.options.extensions.startBlock.forEach(m=>{h=m.call({lexer:this},d),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(p=e.substring(0,c+1))}if(this.state.top&&(l=this.tokenizer.paragraph(p))){let c=t.at(-1);r&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(l),r=p.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(l);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var p,c,d,h,m;let r=e,s=null;if(this.tokens.links){let f=Object.keys(this.tokens.links);if(f.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)f.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)i=s[2]?s[2].length:0,r=r.slice(0,s.index+i)+"["+"a".repeat(s[0].length-i-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=((c=(p=this.options.hooks)==null?void 0:p.emStrongMask)==null?void 0:c.call({lexer:this},r))??r;let o=!1,l="";for(;e;){o||(l=""),o=!1;let f;if((h=(d=this.options.extensions)==null?void 0:d.inline)!=null&&h.some(y=>(f=y.call({lexer:this},e,t))?(e=e.substring(f.raw.length),t.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);let y=t.at(-1);f.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=f.raw,y.text+=f.text):t.push(f);continue}if(f=this.tokenizer.emStrong(e,r,l)){e=e.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.del(e)){e=e.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),t.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),t.push(f);continue}let _=e;if((m=this.options.extensions)!=null&&m.startInline){let y=1/0,R=e.slice(1),P;this.options.extensions.startInline.forEach(W=>{P=W.call({lexer:this},R),typeof P=="number"&&P>=0&&(y=Math.min(y,P))}),y<1/0&&y>=0&&(_=e.substring(0,y+1))}if(f=this.tokenizer.inlineText(_)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(l=f.raw.slice(-1)),o=!0;let y=t.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=f.raw,y.text+=f.text):t.push(f);continue}if(e){let y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}},rt=class{constructor(n){S(this,"options");S(this,"parser");this.options=n||fe}space(n){return""}code({text:n,lang:e,escaped:t}){var i;let r=(i=(e||"").match(B.notSpaceStart))==null?void 0:i[0],s=n.replace(B.endingNewline,"")+`
`;return r?'<pre><code class="language-'+oe(r)+'">'+(t?s:oe(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:oe(s,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,r="";for(let o=0;o<n.items.length;o++){let l=n.items[o];r+=this.listitem(l)}let s=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let s=0;s<n.header.length;s++)t+=this.tablecell(n.header[s]);e+=this.tablerow({text:t});let r="";for(let s=0;s<n.rows.length;s++){let i=n.rows[s];t="";for(let o=0;o<i.length;o++)t+=this.tablecell(i[o]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${oe(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let r=this.parser.parseInline(t),s=yn(n);if(s===null)return r;n=s;let i='<a href="'+n+'"';return e&&(i+=' title="'+oe(e)+'"'),i+=">"+r+"</a>",i}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let s=yn(n);if(s===null)return oe(t);n=s;let i=`<img src="${n}" alt="${t}"`;return e&&(i+=` title="${oe(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:oe(n.text)}},Ht=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},K=class Nt{constructor(e){S(this,"options");S(this,"renderer");S(this,"textRenderer");this.options=e||fe,this.options.renderer=this.options.renderer||new rt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ht}static parse(e,t){return new Nt(t).parse(e)}static parseInline(e,t){return new Nt(t).parseInline(e)}parse(e){var r,s;let t="";for(let i=0;i<e.length;i++){let o=e[i];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[o.type]){let p=o,c=this.options.extensions.renderers[p.type].call({parser:this},p);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(p.type)){t+=c||"";continue}}let l=o;switch(l.type){case"space":{t+=this.renderer.space(l);break}case"hr":{t+=this.renderer.hr(l);break}case"heading":{t+=this.renderer.heading(l);break}case"code":{t+=this.renderer.code(l);break}case"table":{t+=this.renderer.table(l);break}case"blockquote":{t+=this.renderer.blockquote(l);break}case"list":{t+=this.renderer.list(l);break}case"checkbox":{t+=this.renderer.checkbox(l);break}case"html":{t+=this.renderer.html(l);break}case"def":{t+=this.renderer.def(l);break}case"paragraph":{t+=this.renderer.paragraph(l);break}case"text":{t+=this.renderer.text(l);break}default:{let p='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return t}parseInline(e,t=this.renderer){var s,i;let r="";for(let o=0;o<e.length;o++){let l=e[o];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){let c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=c||"";continue}}let p=l;switch(p.type){case"escape":{r+=t.text(p);break}case"html":{r+=t.html(p);break}case"link":{r+=t.link(p);break}case"image":{r+=t.image(p);break}case"checkbox":{r+=t.checkbox(p);break}case"strong":{r+=t.strong(p);break}case"em":{r+=t.em(p);break}case"codespan":{r+=t.codespan(p);break}case"br":{r+=t.br(p);break}case"del":{r+=t.del(p);break}case"text":{r+=t.text(p);break}default:{let c='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},Je,Me=(Je=class{constructor(n){S(this,"options");S(this,"block");this.options=n||fe}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?V.lex:V.lexInline}provideParser(){return this.block?K.parse:K.parseInline}},S(Je,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),S(Je,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Je),rs=class{constructor(...n){S(this,"defaults",Mt());S(this,"options",this.setOptions);S(this,"parse",this.parseMarkdown(!0));S(this,"parseInline",this.parseMarkdown(!1));S(this,"Parser",K);S(this,"Renderer",rt);S(this,"TextRenderer",Ht);S(this,"Lexer",V);S(this,"Tokenizer",nt);S(this,"Hooks",Me);this.use(...n)}walkTokens(n,e){var r,s;let t=[];for(let i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{let o=i;for(let l of o.header)t=t.concat(this.walkTokens(l.tokens,e));for(let l of o.rows)for(let p of l)t=t.concat(this.walkTokens(p.tokens,e));break}case"list":{let o=i;t=t.concat(this.walkTokens(o.items,e));break}default:{let o=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{let p=o[l].flat(1/0);t=t.concat(this.walkTokens(p,e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let i=e.renderers[s.name];i?e.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),t.renderer){let s=this.defaults.renderer||new rt(this.defaults);for(let i in t.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,l=t.renderer[o],p=s[o];s[o]=(...c)=>{let d=l.apply(s,c);return d===!1&&(d=p.apply(s,c)),d||""}}r.renderer=s}if(t.tokenizer){let s=this.defaults.tokenizer||new nt(this.defaults);for(let i in t.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,l=t.tokenizer[o],p=s[o];s[o]=(...c)=>{let d=l.apply(s,c);return d===!1&&(d=p.apply(s,c)),d}}r.tokenizer=s}if(t.hooks){let s=this.defaults.hooks||new Me;for(let i in t.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,l=t.hooks[o],p=s[o];Me.passThroughHooks.has(i)?s[o]=c=>{if(this.defaults.async&&Me.passThroughHooksRespectAsync.has(i))return(async()=>{let h=await l.call(s,c);return p.call(s,h)})();let d=l.call(s,c);return p.call(s,d)}:s[o]=(...c)=>{if(this.defaults.async)return(async()=>{let h=await l.apply(s,c);return h===!1&&(h=await p.apply(s,c)),h})();let d=l.apply(s,c);return d===!1&&(d=p.apply(s,c)),d}}r.hooks=s}if(t.walkTokens){let s=this.defaults.walkTokens,i=t.walkTokens;r.walkTokens=function(o){let l=[];return l.push(i.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return V.lex(n,e??this.defaults)}parser(n,e){return K.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let r={...t},s={...this.defaults,...r},i=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let o=s.hooks?await s.hooks.preprocess(e):e,l=await(s.hooks?await s.hooks.provideLexer():n?V.lex:V.lexInline)(o,s),p=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(p,s.walkTokens));let c=await(s.hooks?await s.hooks.provideParser():n?K.parse:K.parseInline)(p,s);return s.hooks?await s.hooks.postprocess(c):c})().catch(i);try{s.hooks&&(e=s.hooks.preprocess(e));let o=(s.hooks?s.hooks.provideLexer():n?V.lex:V.lexInline)(e,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let l=(s.hooks?s.hooks.provideParser():n?K.parse:K.parseInline)(o,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(o){return i(o)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+oe(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},de=new rs;function T(n,e){return de.parse(n,e)}T.options=T.setOptions=function(n){return de.setOptions(n),T.defaults=de.defaults,Dn(T.defaults),T};T.getDefaults=Mt;T.defaults=fe;T.use=function(...n){return de.use(...n),T.defaults=de.defaults,Dn(T.defaults),T};T.walkTokens=function(n,e){return de.walkTokens(n,e)};T.parseInline=de.parseInline;T.Parser=K;T.parser=K.parse;T.Renderer=rt;T.TextRenderer=Ht;T.Lexer=V;T.lexer=V.lex;T.Tokenizer=nt;T.Hooks=Me;T.parse=T;T.options;T.setOptions;T.use;T.walkTokens;T.parseInline;K.parse;V.lex;/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Hn,setPrototypeOf:wn,isFrozen:ss,getPrototypeOf:as,getOwnPropertyDescriptor:is}=Object;let{freeze:j,seal:G,create:Dt}=Object,{apply:It,construct:Ot}=typeof Reflect<"u"&&Reflect;j||(j=function(e){return e});G||(G=function(e){return e});It||(It=function(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),i=2;i<r;i++)s[i-2]=arguments[i];return e.apply(t,s)});Ot||(Ot=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return new e(...r)});const Ve=U(Array.prototype.forEach),ls=U(Array.prototype.lastIndexOf),Tn=U(Array.prototype.pop),Ce=U(Array.prototype.push),os=U(Array.prototype.splice),et=U(String.prototype.toLowerCase),Tt=U(String.prototype.toString),Et=U(String.prototype.match),Ne=U(String.prototype.replace),cs=U(String.prototype.indexOf),ps=U(String.prototype.trim),X=U(Object.prototype.hasOwnProperty),q=U(RegExp.prototype.test),De=us(TypeError);function U(n){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return It(n,e,r)}}function us(n){return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Ot(n,t)}}function x(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:et;wn&&wn(n,null);let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const i=t(s);i!==s&&(ss(e)||(e[r]=i),s=i)}n[s]=!0}return n}function ds(n){for(let e=0;e<n.length;e++)X(n,e)||(n[e]=null);return n}function re(n){const e=Dt(null);for(const[t,r]of Hn(n))X(n,t)&&(Array.isArray(r)?e[t]=ds(r):r&&typeof r=="object"&&r.constructor===Object?e[t]=re(r):e[t]=r);return e}function Ie(n,e){for(;n!==null;){const r=is(n,e);if(r){if(r.get)return U(r.get);if(typeof r.value=="function")return U(r.value)}n=as(n)}function t(){return null}return t}const En=j(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),St=j(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),At=j(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),fs=j(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Rt=j(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hs=j(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Sn=j(["#text"]),An=j(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),vt=j(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Rn=j(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ke=j(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ms=G(/\{\{[\w\W]*|[\w\W]*\}\}/gm),gs=G(/<%[\w\W]*|[\w\W]*%>/gm),ks=G(/\$\{[\w\W]*/gm),bs=G(/^data-[\-\w.\u00B7-\uFFFF]+$/),ys=G(/^aria-[\-\w]+$/),Qn=G(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),xs=G(/^(?:\w+script|data):/i),_s=G(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Gn=G(/^html$/i),ws=G(/^[a-z][.\w]*(-[.\w]+)+$/i);var vn=Object.freeze({__proto__:null,ARIA_ATTR:ys,ATTR_WHITESPACE:_s,CUSTOM_ELEMENT:ws,DATA_ATTR:bs,DOCTYPE_NAME:Gn,ERB_EXPR:gs,IS_ALLOWED_URI:Qn,IS_SCRIPT_OR_DATA:xs,MUSTACHE_EXPR:ms,TMPLIT_EXPR:ks});const Oe={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ts=function(){return typeof window>"u"?null:window},Es=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(r=t.getAttribute(s));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Ln=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Wn(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ts();const e=b=>Wn(b);if(e.version="3.3.1",e.removed=[],!n||!n.document||n.document.nodeType!==Oe.document||!n.Element)return e.isSupported=!1,e;let{document:t}=n;const r=t,s=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:l,Element:p,NodeFilter:c,NamedNodeMap:d=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:h,DOMParser:m,trustedTypes:f}=n,_=p.prototype,y=Ie(_,"cloneNode"),R=Ie(_,"remove"),P=Ie(_,"nextSibling"),W=Ie(_,"childNodes"),H=Ie(_,"parentNode");if(typeof o=="function"){const b=t.createElement("template");b.content&&b.content.ownerDocument&&(t=b.content.ownerDocument)}let D,Y="";const{implementation:J,createNodeIterator:se,createDocumentFragment:Z,getElementsByTagName:lt}=t,{importNode:qe}=r;let $=Ln();e.isSupported=typeof Hn=="function"&&typeof H=="function"&&J&&J.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:we,ERB_EXPR:Te,TMPLIT_EXPR:Ee,DATA_ATTR:ot,ARIA_ATTR:ct,IS_SCRIPT_OR_DATA:v,ATTR_WHITESPACE:O,CUSTOM_ELEMENT:he}=vn;let{IS_ALLOWED_URI:Be}=vn,E=null;const ce=x({},[...En,...St,...At,...Rt,...Sn]);let C=null;const ee=x({},[...An,...vt,...Rn,...Ke]);let N=Object.seal(Dt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,pt=null;const me=Object.seal(Dt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Qt=!0,ut=!0,Gt=!1,Wt=!0,ge=!1,je=!0,pe=!1,dt=!1,ft=!1,ke=!1,Ue=!1,He=!1,Yt=!0,Zt=!1;const Yn="user-content-";let ht=!0,Ae=!1,be={},te=null;const mt=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Xt=null;const Vt=x({},["audio","video","img","source","image","track"]);let gt=null;const Kt=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Qe="http://www.w3.org/1998/Math/MathML",Ge="http://www.w3.org/2000/svg",ae="http://www.w3.org/1999/xhtml";let ye=ae,kt=!1,bt=null;const Zn=x({},[Qe,Ge,ae],Tt);let We=x({},["mi","mo","mn","ms","mtext"]),Ye=x({},["annotation-xml"]);const Xn=x({},["title","style","font","a","script"]);let Re=null;const Vn=["application/xhtml+xml","text/html"],Kn="text/html";let M=null,xe=null;const Jn=t.createElement("form"),Jt=function(a){return a instanceof RegExp||a instanceof Function},yt=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(xe&&xe===a)){if((!a||typeof a!="object")&&(a={}),a=re(a),Re=Vn.indexOf(a.PARSER_MEDIA_TYPE)===-1?Kn:a.PARSER_MEDIA_TYPE,M=Re==="application/xhtml+xml"?Tt:et,E=X(a,"ALLOWED_TAGS")?x({},a.ALLOWED_TAGS,M):ce,C=X(a,"ALLOWED_ATTR")?x({},a.ALLOWED_ATTR,M):ee,bt=X(a,"ALLOWED_NAMESPACES")?x({},a.ALLOWED_NAMESPACES,Tt):Zn,gt=X(a,"ADD_URI_SAFE_ATTR")?x(re(Kt),a.ADD_URI_SAFE_ATTR,M):Kt,Xt=X(a,"ADD_DATA_URI_TAGS")?x(re(Vt),a.ADD_DATA_URI_TAGS,M):Vt,te=X(a,"FORBID_CONTENTS")?x({},a.FORBID_CONTENTS,M):mt,Se=X(a,"FORBID_TAGS")?x({},a.FORBID_TAGS,M):re({}),pt=X(a,"FORBID_ATTR")?x({},a.FORBID_ATTR,M):re({}),be=X(a,"USE_PROFILES")?a.USE_PROFILES:!1,Qt=a.ALLOW_ARIA_ATTR!==!1,ut=a.ALLOW_DATA_ATTR!==!1,Gt=a.ALLOW_UNKNOWN_PROTOCOLS||!1,Wt=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ge=a.SAFE_FOR_TEMPLATES||!1,je=a.SAFE_FOR_XML!==!1,pe=a.WHOLE_DOCUMENT||!1,ke=a.RETURN_DOM||!1,Ue=a.RETURN_DOM_FRAGMENT||!1,He=a.RETURN_TRUSTED_TYPE||!1,ft=a.FORCE_BODY||!1,Yt=a.SANITIZE_DOM!==!1,Zt=a.SANITIZE_NAMED_PROPS||!1,ht=a.KEEP_CONTENT!==!1,Ae=a.IN_PLACE||!1,Be=a.ALLOWED_URI_REGEXP||Qn,ye=a.NAMESPACE||ae,We=a.MATHML_TEXT_INTEGRATION_POINTS||We,Ye=a.HTML_INTEGRATION_POINTS||Ye,N=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&Jt(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(N.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&Jt(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(N.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(N.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ge&&(ut=!1),Ue&&(ke=!0),be&&(E=x({},Sn),C=[],be.html===!0&&(x(E,En),x(C,An)),be.svg===!0&&(x(E,St),x(C,vt),x(C,Ke)),be.svgFilters===!0&&(x(E,At),x(C,vt),x(C,Ke)),be.mathMl===!0&&(x(E,Rt),x(C,Rn),x(C,Ke))),a.ADD_TAGS&&(typeof a.ADD_TAGS=="function"?me.tagCheck=a.ADD_TAGS:(E===ce&&(E=re(E)),x(E,a.ADD_TAGS,M))),a.ADD_ATTR&&(typeof a.ADD_ATTR=="function"?me.attributeCheck=a.ADD_ATTR:(C===ee&&(C=re(C)),x(C,a.ADD_ATTR,M))),a.ADD_URI_SAFE_ATTR&&x(gt,a.ADD_URI_SAFE_ATTR,M),a.FORBID_CONTENTS&&(te===mt&&(te=re(te)),x(te,a.FORBID_CONTENTS,M)),a.ADD_FORBID_CONTENTS&&(te===mt&&(te=re(te)),x(te,a.ADD_FORBID_CONTENTS,M)),ht&&(E["#text"]=!0),pe&&x(E,["html","head","body"]),E.table&&(x(E,["tbody"]),delete Se.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw De('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw De('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');D=a.TRUSTED_TYPES_POLICY,Y=D.createHTML("")}else D===void 0&&(D=Es(f,s)),D!==null&&typeof Y=="string"&&(Y=D.createHTML(""));j&&j(a),xe=a}},en=x({},[...St,...At,...fs]),tn=x({},[...Rt,...hs]),er=function(a){let u=H(a);(!u||!u.tagName)&&(u={namespaceURI:ye,tagName:"template"});const g=et(a.tagName),L=et(u.tagName);return bt[a.namespaceURI]?a.namespaceURI===Ge?u.namespaceURI===ae?g==="svg":u.namespaceURI===Qe?g==="svg"&&(L==="annotation-xml"||We[L]):!!en[g]:a.namespaceURI===Qe?u.namespaceURI===ae?g==="math":u.namespaceURI===Ge?g==="math"&&Ye[L]:!!tn[g]:a.namespaceURI===ae?u.namespaceURI===Ge&&!Ye[L]||u.namespaceURI===Qe&&!We[L]?!1:!tn[g]&&(Xn[g]||!en[g]):!!(Re==="application/xhtml+xml"&&bt[a.namespaceURI]):!1},ne=function(a){Ce(e.removed,{element:a});try{H(a).removeChild(a)}catch{R(a)}},ue=function(a,u){try{Ce(e.removed,{attribute:u.getAttributeNode(a),from:u})}catch{Ce(e.removed,{attribute:null,from:u})}if(u.removeAttribute(a),a==="is")if(ke||Ue)try{ne(u)}catch{}else try{u.setAttribute(a,"")}catch{}},nn=function(a){let u=null,g=null;if(ft)a="<remove></remove>"+a;else{const I=Et(a,/^[\r\n\t ]+/);g=I&&I[0]}Re==="application/xhtml+xml"&&ye===ae&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const L=D?D.createHTML(a):a;if(ye===ae)try{u=new m().parseFromString(L,Re)}catch{}if(!u||!u.documentElement){u=J.createDocument(ye,"template",null);try{u.documentElement.innerHTML=kt?Y:L}catch{}}const F=u.body||u.documentElement;return a&&g&&F.insertBefore(t.createTextNode(g),F.childNodes[0]||null),ye===ae?lt.call(u,pe?"html":"body")[0]:pe?u.documentElement:F},rn=function(a){return se.call(a.ownerDocument||a,a,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},xt=function(a){return a instanceof h&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof d)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},sn=function(a){return typeof l=="function"&&a instanceof l};function ie(b,a,u){Ve(b,g=>{g.call(e,a,u,xe)})}const an=function(a){let u=null;if(ie($.beforeSanitizeElements,a,null),xt(a))return ne(a),!0;const g=M(a.nodeName);if(ie($.uponSanitizeElement,a,{tagName:g,allowedTags:E}),je&&a.hasChildNodes()&&!sn(a.firstElementChild)&&q(/<[/\w!]/g,a.innerHTML)&&q(/<[/\w!]/g,a.textContent)||a.nodeType===Oe.progressingInstruction||je&&a.nodeType===Oe.comment&&q(/<[/\w]/g,a.data))return ne(a),!0;if(!(me.tagCheck instanceof Function&&me.tagCheck(g))&&(!E[g]||Se[g])){if(!Se[g]&&on(g)&&(N.tagNameCheck instanceof RegExp&&q(N.tagNameCheck,g)||N.tagNameCheck instanceof Function&&N.tagNameCheck(g)))return!1;if(ht&&!te[g]){const L=H(a)||a.parentNode,F=W(a)||a.childNodes;if(F&&L){const I=F.length;for(let Q=I-1;Q>=0;--Q){const le=y(F[Q],!0);le.__removalCount=(a.__removalCount||0)+1,L.insertBefore(le,P(a))}}}return ne(a),!0}return a instanceof p&&!er(a)||(g==="noscript"||g==="noembed"||g==="noframes")&&q(/<\/no(script|embed|frames)/i,a.innerHTML)?(ne(a),!0):(ge&&a.nodeType===Oe.text&&(u=a.textContent,Ve([we,Te,Ee],L=>{u=Ne(u,L," ")}),a.textContent!==u&&(Ce(e.removed,{element:a.cloneNode()}),a.textContent=u)),ie($.afterSanitizeElements,a,null),!1)},ln=function(a,u,g){if(Yt&&(u==="id"||u==="name")&&(g in t||g in Jn))return!1;if(!(ut&&!pt[u]&&q(ot,u))){if(!(Qt&&q(ct,u))){if(!(me.attributeCheck instanceof Function&&me.attributeCheck(u,a))){if(!C[u]||pt[u]){if(!(on(a)&&(N.tagNameCheck instanceof RegExp&&q(N.tagNameCheck,a)||N.tagNameCheck instanceof Function&&N.tagNameCheck(a))&&(N.attributeNameCheck instanceof RegExp&&q(N.attributeNameCheck,u)||N.attributeNameCheck instanceof Function&&N.attributeNameCheck(u,a))||u==="is"&&N.allowCustomizedBuiltInElements&&(N.tagNameCheck instanceof RegExp&&q(N.tagNameCheck,g)||N.tagNameCheck instanceof Function&&N.tagNameCheck(g))))return!1}else if(!gt[u]){if(!q(Be,Ne(g,O,""))){if(!((u==="src"||u==="xlink:href"||u==="href")&&a!=="script"&&cs(g,"data:")===0&&Xt[a])){if(!(Gt&&!q(v,Ne(g,O,"")))){if(g)return!1}}}}}}}return!0},on=function(a){return a!=="annotation-xml"&&Et(a,he)},cn=function(a){ie($.beforeSanitizeAttributes,a,null);const{attributes:u}=a;if(!u||xt(a))return;const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:C,forceKeepAttr:void 0};let L=u.length;for(;L--;){const F=u[L],{name:I,namespaceURI:Q,value:le}=F,_e=M(I),_t=le;let z=I==="value"?_t:ps(_t);if(g.attrName=_e,g.attrValue=z,g.keepAttr=!0,g.forceKeepAttr=void 0,ie($.uponSanitizeAttribute,a,g),z=g.attrValue,Zt&&(_e==="id"||_e==="name")&&(ue(I,a),z=Yn+z),je&&q(/((--!?|])>)|<\/(style|title|textarea)/i,z)){ue(I,a);continue}if(_e==="attributename"&&Et(z,"href")){ue(I,a);continue}if(g.forceKeepAttr)continue;if(!g.keepAttr){ue(I,a);continue}if(!Wt&&q(/\/>/i,z)){ue(I,a);continue}ge&&Ve([we,Te,Ee],un=>{z=Ne(z,un," ")});const pn=M(a.nodeName);if(!ln(pn,_e,z)){ue(I,a);continue}if(D&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!Q)switch(f.getAttributeType(pn,_e)){case"TrustedHTML":{z=D.createHTML(z);break}case"TrustedScriptURL":{z=D.createScriptURL(z);break}}if(z!==_t)try{Q?a.setAttributeNS(Q,I,z):a.setAttribute(I,z),xt(a)?ne(a):Tn(e.removed)}catch{ue(I,a)}}ie($.afterSanitizeAttributes,a,null)},tr=function b(a){let u=null;const g=rn(a);for(ie($.beforeSanitizeShadowDOM,a,null);u=g.nextNode();)ie($.uponSanitizeShadowNode,u,null),an(u),cn(u),u.content instanceof i&&b(u.content);ie($.afterSanitizeShadowDOM,a,null)};return e.sanitize=function(b){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=null,g=null,L=null,F=null;if(kt=!b,kt&&(b="<!-->"),typeof b!="string"&&!sn(b))if(typeof b.toString=="function"){if(b=b.toString(),typeof b!="string")throw De("dirty is not a string, aborting")}else throw De("toString is not a function");if(!e.isSupported)return b;if(dt||yt(a),e.removed=[],typeof b=="string"&&(Ae=!1),Ae){if(b.nodeName){const le=M(b.nodeName);if(!E[le]||Se[le])throw De("root node is forbidden and cannot be sanitized in-place")}}else if(b instanceof l)u=nn("<!---->"),g=u.ownerDocument.importNode(b,!0),g.nodeType===Oe.element&&g.nodeName==="BODY"||g.nodeName==="HTML"?u=g:u.appendChild(g);else{if(!ke&&!ge&&!pe&&b.indexOf("<")===-1)return D&&He?D.createHTML(b):b;if(u=nn(b),!u)return ke?null:He?Y:""}u&&ft&&ne(u.firstChild);const I=rn(Ae?b:u);for(;L=I.nextNode();)an(L),cn(L),L.content instanceof i&&tr(L.content);if(Ae)return b;if(ke){if(Ue)for(F=Z.call(u.ownerDocument);u.firstChild;)F.appendChild(u.firstChild);else F=u;return(C.shadowroot||C.shadowrootmode)&&(F=qe.call(r,F,!0)),F}let Q=pe?u.outerHTML:u.innerHTML;return pe&&E["!doctype"]&&u.ownerDocument&&u.ownerDocument.doctype&&u.ownerDocument.doctype.name&&q(Gn,u.ownerDocument.doctype.name)&&(Q="<!DOCTYPE "+u.ownerDocument.doctype.name+`>
`+Q),ge&&Ve([we,Te,Ee],le=>{Q=Ne(Q,le," ")}),D&&He?D.createHTML(Q):Q},e.setConfig=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};yt(b),dt=!0},e.clearConfig=function(){xe=null,dt=!1},e.isValidAttribute=function(b,a,u){xe||yt({});const g=M(b),L=M(a);return ln(g,L,u)},e.addHook=function(b,a){typeof a=="function"&&Ce($[b],a)},e.removeHook=function(b,a){if(a!==void 0){const u=ls($[b],a);return u===-1?void 0:os($[b],u,1)[0]}return Tn($[b])},e.removeHooks=function(b){$[b]=[]},e.removeAllHooks=function(){$=Ln()},e}var Ss=Wn();function As({chapter:n,onCodeClick:e,darkMode:t,output:r,isRunning:s,plotImages:i}){const[o,l]=A.useState("");return A.useEffect(()=>{var p;if(n)if((p=n.content)!=null&&p.intro){let c=n.content.intro.replace(/##\s*💻\s*應用場景清單[\s\S]*?(?=##|$)/g,"");const d=T.parse(c);let m=Ss.sanitize(d);[...n.examples||[]].sort((y,R)=>R.filename.length-y.filename.length).forEach((y,R)=>{const P=y.filename.replace(".","\\."),W=new RegExp(`(?<!['"\\w\\.])(${P})(?!['"\\w\\.])`,"g");m=m.replace(W,`<span class="code-link" data-filename="${y.filename}">${y.filename}</span>`)}),l(m)}else{const c=n.examples||[];let d=`
          <div class="chapter-intro">
            <h2>${n.title}</h2>
            <p>本章包含 ${c.length} 個程式範例</p>
            <div class="example-grid">
        `;c.forEach((h,m)=>{d+=`
            <div class="example-card">
              <div class="example-number">${m+1}</div>
              <div class="example-info">
                <h3>${h.title}</h3>
                <span class="code-link" data-filename="${h.filename}">${h.filename}</span>
              </div>
            </div>
          `}),d+=`
            </div>
          </div>
        `,l(d)}else l(`
        <div class="welcome-screen">
          <h2>👈 請從上方選擇章節開始學習</h2>
          <p>選擇章節後，可以查看內容並執行程式碼</p>
        </div>
      `)},[n]),A.useEffect(()=>{const p=c=>{if(c.target.classList.contains("code-link")){const d=c.target.dataset.filename;let h=null;n!=null&&n.examples&&(h=n.examples.find(m=>m.filename===d),h&&(h.metadata||(h.metadata={description:h.title}))),h&&e(h)}};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[n,e]),A.useEffect(()=>{if(r||i&&i.length>0){const p=document.querySelector(".content-scroll"),c=document.getElementById("execution-output");p&&c&&c.scrollIntoView({behavior:"smooth",block:"start"})}},[r,i]),k.jsx("div",{className:"content-panel",children:k.jsx("div",{className:"content-scroll",children:r||i&&i.length>0||s?k.jsxs("div",{id:"execution-output",className:"execution-output-section",children:[k.jsx("h3",{className:"output-title",children:"執行結果"}),s&&k.jsxs("div",{className:"running-indicator",children:[k.jsx("div",{className:"spinner"}),k.jsx("span",{children:"程式執行中..."})]}),r&&k.jsx("pre",{className:"output-text",children:r}),i&&i.length>0&&k.jsx("div",{className:"output-images",children:i.map((p,c)=>k.jsx("div",{className:"output-image",children:k.jsx("img",{src:p,alt:`Plot ${c+1}`})},c))})]}):k.jsx("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:o}})})})}function Rs({pyodide:n}){return null}let Lt=null;async function vs(n){if(Lt)return n&&n(100,"Ready"),Lt;const e=(t,r)=>{n&&n(t,r)};try{e(0,"Initialize Pyodide (v1.0.2)...");const t=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"});e(20,"Loading core packages (numpy, pandas, matplotlib...)..."),await Promise.all([t.loadPackage("micropip"),t.loadPackage("numpy"),t.loadPackage("matplotlib"),t.loadPackage("pandas"),t.loadPackage("scipy"),t.loadPackage("statsmodels"),t.loadPackage("sympy"),t.loadPackage("autograd"),t.loadPackage("lxml")]),e(70,"Loading extra packages from local wheels...");const r=new URL("/pwa_FRM_Book1_python/",window.location.origin).href+"wheels/";return await t.loadPackage("micropip"),await t.runPythonAsync(`
import micropip
await micropip.install([
    '${r}certifi-2026.1.4-py3-none-any.whl',
    '${r}charset_normalizer-3.4.4-py3-none-any.whl',
    '${r}idna-3.11-py3-none-any.whl',
    '${r}urllib3-2.6.3-py3-none-any.whl',
    '${r}requests-2.32.5-py3-none-any.whl',
    '${r}et_xmlfile-2.0.0-py3-none-any.whl',
    '${r}pyodide_http-0.2.2-py3-none-any.whl',
    '${r}openpyxl-3.1.5-py2.py3-none-any.whl',
    '${r}pandas_datareader-0.10.0-py3-none-any.whl',
    '${r}numpy_financial-1.0.0-py3-none-any.whl',
    '${r}seaborn-0.13.2-py3-none-any.whl',
    '${r}pymoo-0.4.1-py3-none-any.whl',
    '${r}setuptools-82.0.0-py3-none-any.whl',
], deps=False, keep_going=True)
    `),e(75,"Configuring environment..."),await t.runPythonAsync(`
import warnings
# 忽略 DeprecationWarning 和 FutureWarning，保持 Console 乾淨
warnings.simplefilter("ignore", DeprecationWarning)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", SyntaxWarning)
# 額外針對 pandas 的 pyarrow 警告進行過濾
warnings.filterwarnings("ignore", message=".*pyarrow.*")

import matplotlib
matplotlib.use('AGG')
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

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
import pyodide_http
pyodide_http.patch_all()

# SciPy 相容性 (binom_test 在新版本移除)
import scipy.stats
if not hasattr(scipy.stats, 'binom_test') and hasattr(scipy.stats, 'binomtest'):
    def binom_test_shim(k, n=None, p=0.5, alternative='two-sided'):
        # binomtest 返回一個物件，其屬性 pvalue 即為舊版 binom_test 的返回值
        return scipy.stats.binomtest(k, n, p, alternative).pvalue
    scipy.stats.binom_test = binom_test_shim
    print("✅ SciPy 相容性：binom_test 修正補丁已套用。")

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
        print(f"⚠️ Pymoo Shim Error: {e2}")
        print(f"Original Import Error (0.4.x): {e}")
except Exception as e:
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
except Exception as e:
    print(f"⚠️ 模擬數據引擎啟動失敗: {str(e)}")
    `),await t.runPythonAsync(`
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
        `),Lt=t,e(100,"Ready!"),t}catch(t){throw console.error("Failed to load Pyodide:",t),t}}async function Ls(n){try{const e=await n.runPythonAsync(`
import matplotlib.pyplot as plt
len(plt.get_fignums())
    `);if(e===0)return[];const t=[];for(let r=0;r<e;r++){const s=await n.runPythonAsync(`
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
      `);t.push(`data:image/png;base64,${s}`)}return await n.runPythonAsync('import matplotlib.pyplot as plt; plt.close("all")'),t}catch(e){return console.error("Failed to capture plots:",e),[]}}async function Pn(n,e=!1){try{const t=e?"module://matplotlib_pyodide.wasm_backend":"AGG";await n.runPythonAsync(`
import matplotlib
matplotlib.use('${t}')
import matplotlib.pyplot as plt

# 設定預設樣式
plt.style.use('default')
    `),console.log(`✓ Matplotlib 初始化完成 (Backend: ${t})`)}catch(t){console.error("✗ Matplotlib 初始化失敗:",t)}}async function Ps(n){try{await n.runPythonAsync(`
import matplotlib.pyplot as plt
if len(plt.get_fignums()) > 0:
    plt.show()
    `)}catch(e){console.error("Failed to show plots:",e)}}function Cn(n){const e=n.message||String(n),t=[{pattern:/NameError: name '(.+)' is not defined/,format:r=>`❌ 變數錯誤：'${r[1]}' 未定義

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
• 查看完整錯誤訊息了解詳情`}];for(const{pattern:r,format:s}of t){const i=e.match(r);if(i)return s(i)}return`❌ 執行錯誤

${e}

💡 提示：
• 仔細閱讀錯誤訊息
• 檢查程式碼語法和邏輯
• 使用 print() 除錯
• 參考範例程式碼

🔧 除錯技巧：
• 逐行執行程式碼找出問題
• 使用 print() 輸出變數值
• 簡化程式碼，逐步測試`}class Cs{constructor(){this.metrics={},this.enabled=!0}start(e){this.enabled&&(this.metrics[e]={start:performance.now(),end:null,duration:null})}end(e){if(!this.enabled||!this.metrics[e])return 0;const t=performance.now(),r=this.metrics[e].start,s=t-r;return this.metrics[e].end=t,this.metrics[e].duration=s,this.log(e,s),s}log(e,t){const r=t<100?"⚡":t<1e3?"⏱️":"🐌",s=t<100?"color: green":t<1e3?"color: orange":"color: red";console.log(`%c${r} ${e}: ${t.toFixed(2)}ms`,s),t>1e3&&console.warn(`⚠️ ${e} 執行時間過長: ${t.toFixed(2)}ms`)}async measure(e,t){this.start(e);try{return await t()}finally{this.end(e)}}getMetric(e){return this.metrics[e]||null}getMetrics(){return{...this.metrics}}getStats(){const e=Object.values(this.metrics).filter(t=>t.duration!==null).map(t=>t.duration);return e.length===0?{count:0,total:0,average:0,min:0,max:0}:{count:e.length,total:e.reduce((t,r)=>t+r,0),average:e.reduce((t,r)=>t+r,0)/e.length,min:Math.min(...e),max:Math.max(...e)}}clear(e){e?delete this.metrics[e]:this.metrics={}}setEnabled(e){this.enabled=e}report(){const e=this.getStats();console.group("📊 效能報告"),console.log(`總計測量: ${e.count} 次`),console.log(`總時間: ${e.total.toFixed(2)}ms`),console.log(`平均時間: ${e.average.toFixed(2)}ms`),console.log(`最快: ${e.min.toFixed(2)}ms`),console.log(`最慢: ${e.max.toFixed(2)}ms`),console.groupEnd(),console.group("📋 詳細指標"),Object.entries(this.metrics).forEach(([t,r])=>{r.duration!==null&&console.log(`${t}: ${r.duration.toFixed(2)}ms`)}),console.groupEnd()}}const $e=new Cs;$e.setEnabled(!1);function Ns(){if("PerformanceObserver"in window){new PerformanceObserver(s=>{const i=s.getEntries(),o=i[i.length-1];console.log("🎨 LCP:",o.renderTime||o.loadTime)}).observe({entryTypes:["largest-contentful-paint"]}),new PerformanceObserver(s=>{s.getEntries().forEach(o=>{console.log("⚡ FID:",o.processingStart-o.startTime)})}).observe({entryTypes:["first-input"]});let t=0;new PerformanceObserver(s=>{s.getEntries().forEach(o=>{o.hadRecentInput||(t+=o.value)}),console.log("📐 CLS:",t)}).observe({entryTypes:["layout-shift"]})}}const Ds=A.lazy(()=>or(()=>import("./CodePreviewPanel-XY5y1u4n.js"),__vite__mapDeps([0,1,2,3,4])));function Is(){const[n,e]=A.useState(null),[t,r]=A.useState(!0),[s,i]=A.useState(0),[o,l]=A.useState("初始化中..."),[p,c]=A.useState([]),[d,h]=A.useState(!0),[m,f]=A.useState(null),[_,y]=A.useState(null),[R,P]=A.useState(""),[W,H]=A.useState([]),[D,Y]=A.useState(!1),[J,se]=A.useState(!1),[Z,lt]=A.useState(()=>{const v=localStorage.getItem("theme");return v==="dark"||!v&&window.matchMedia("(prefers-color-scheme: dark)").matches}),[qe,$]=A.useState(500);A.useEffect(()=>{h(!0);const v=`/pwa_FRM_Book1_python/data/chapters.json?t=${Date.now()}`;fetch(v).then(O=>O.json()).then(O=>{O&&O.length>0&&c(O),h(!1)}).catch(O=>{console.error("Failed to load chapters:",O),h(!1)})},[]),A.useEffect(()=>{vs((v,O)=>{i(v),l(O)}).then(v=>{e(v),r(!1),Pn(v),$e.end("pyodide-init")}),Ns()},[]),A.useEffect(()=>{localStorage.setItem("theme",Z?"dark":"light"),document.documentElement.setAttribute("data-theme",Z?"dark":"light")},[Z]);const we=async v=>{if(!(!n||D||!v)){$e.start("run-code"),Y(!0),P(`執行中...
`),H([]);try{const O=v.includes("matplotlib.widgets")||v.includes("Slider")||v.includes("Button");if(se(O),await n.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `),await Pn(n,O),O){const E=document.getElementById("pyodide-plot-container");E&&(E.innerHTML="",window.document.pyodideMplTarget=E)}const he=v.match(/^\s*(?:from|import)\s+([a-zA-Z0-9_]+)/gm);if(he){const E=["sys","io","base64","time","math","re","json","datetime","random","os","fractions","decimal","abc","collections","itertools","functools","importlib","timeit"],ce=["pymoo","numpy_financial","pandas_datareader","seaborn","openpyxl","setuptools","pyodide_http","QuantLib","quantlib","numpy","pandas","matplotlib","scipy","statsmodels","sympy","autograd","lxml","micropip"],C=he.map(ee=>ee.split(/\s+/).pop()).filter(ee=>![...E,...ce].includes(ee));if(C.length>0)try{P(ee=>ee+`正在安裝所需套件: ${C.join(", ")}...
`),await n.runPythonAsync(`
              import micropip
              await micropip.install(${JSON.stringify(C)})
            `)}catch(ee){console.warn("Package installation failed:",ee),P(N=>N+`⚠️ 部分套件安裝失敗，嘗試直接執行...
`)}}try{await n.runPythonAsync(v)}catch(E){const ce=await n.runPythonAsync("sys.stdout.getvalue()"),C=Cn(E);P((ce?ce+`
`:"")+C),Y(!1),$e.end("run-code");return}const Be=await n.runPythonAsync("sys.stdout.getvalue()");if(P(Be||"執行完成（無輸出）"),J)await Ps(n);else{const E=await Ls(n);H(E)}}catch(O){const he=Cn(O);P(he),console.error(O)}finally{Y(!1),$e.end("run-code")}}},Te=v=>{f(v),y(null),P(""),H([])},Ee=v=>{y(v),P(""),H([])},ot=v=>{y(v),P(""),H([])},ct=()=>{y(null),P(""),H([])};return t?k.jsx("div",{className:"loading-screen",children:k.jsxs("div",{className:"loading-content",children:[k.jsx("div",{className:"loading-spinner"}),k.jsx("h2",{children:"正在載入 Python 執行環境..."}),k.jsx("div",{className:"progress-container",children:k.jsx("div",{className:"progress-bar",style:{width:`${s}%`}})}),k.jsxs("p",{className:"loading-text",children:[o," (",s,"%)"]}),k.jsx("p",{className:"loading-hint",children:"首次載入需要下載約 10MB 的資源，請稍候"})]})}):k.jsxs("div",{className:`app ${Z?"dark":""}`,children:[k.jsxs("div",{className:"main-content",children:[k.jsxs("div",{className:"top-bar",children:[k.jsxs("div",{className:"top-bar-left",children:[k.jsx(kr,{size:20,className:"logo-icon"}),k.jsx("span",{className:"app-title",children:"FRM Python"})]}),k.jsx(xr,{chapters:p,currentChapter:m,onChapterSelect:Te,currentScript:_,onScriptSelect:ot,loading:d}),k.jsx("div",{className:"top-bar-right",children:k.jsx("button",{className:"theme-toggle",onClick:()=>lt(!Z),title:Z?"切換到亮色模式":"切換到暗色模式",children:Z?k.jsx(yr,{size:20}):k.jsx(br,{size:20})})})]}),k.jsxs("div",{className:"panes-container",children:[k.jsx("div",{className:"content-pane",children:k.jsx(As,{chapter:m,onCodeClick:Ee,darkMode:Z,output:R,isRunning:D,plotImages:W})}),_&&k.jsx("div",{className:"preview-pane",style:{width:`${qe}px`},children:k.jsx(A.Suspense,{fallback:k.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",color:"#888"},children:"Loading Editor..."}),children:k.jsx(Ds,{script:_,onClose:ct,onRun:we,isRunning:D,output:R,images:W,isInteractive:J,darkMode:Z,width:qe,onResize:$})})})]})]}),k.jsx(Rs,{pyodide:n})]})}fr.createRoot(document.getElementById("root")).render(k.jsx(lr.StrictMode,{children:k.jsx(Is,{})}));export{st as c,k as j};
