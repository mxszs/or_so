(self["webpackChunkor_so"]=self["webpackChunkor_so"]||[]).push([[632],{86845:function(){},46338:function(e,t,n){"use strict";n.r(t);var r=n(67294),o=n(96089),a=n(32851),l=r.memo((e=>{var t=e.demos,n=t["mydemo-importfile"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h3",{id:"\u5bfc\u5165--\u5bfc\u51fa"},r.createElement(o.AnchorLink,{to:"#\u5bfc\u5165--\u5bfc\u51fa","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u5bfc\u5165 && \u5bfc\u51fa")),r.createElement(a.default,t["mydemo-importfile"].previewerProps,r.createElement(n,null))))}));t["default"]=e=>{var t=r.useContext(o.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(l,{demos:n})}},32851:function(e,t,n){"use strict";n.r(t);var r=n(67294),o=n(7719),a=n(37899),l=n(96089),i=n(65659);n(86845);function c(e,t){return f(e)||m(e,t)||s(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0)if(a.push(r.value),t&&a.length===t)break}catch(c){i=!0,o=c}finally{try{l||null==n["return"]||n["return"]()}finally{if(i)throw o}}return a}}function f(e){if(Array.isArray(e))return e}function p(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,u,s=(0,r.useRef)(),d=(0,r.useContext)(l.context),m=d.locale,f=(0,l.useLocaleProps)(m,e),v=(0,l.useDemoUrl)(f.identifier),_=f.demoUrl||v,b=(null===a.m8||void 0===a.m8?void 0:a.m8.location.hash)==="#".concat(f.identifier),h=1===Object.keys(f.sources).length,y=(0,l.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),E=(0,l.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),g=(0,l.useMotions)(f.motions||[],s.current),k=c(g,2),w=k[0],C=k[1],N=(0,l.useCopy)(),x=c(N,2),S=x[0],A=x[1],L=(0,r.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),j=c(L,2),I=j[0],O=j[1],R=(0,r.useState)(p(I,f.sources[I])),T=c(R,2),M=T[0],P=T[1],U=(0,r.useState)(Boolean(f.defaultShowCode)),$=c(U,2),B=$[0],D=$[1],F=(0,r.useState)(Math.random()),J=c(F,2),X=J[0],Z=J[1],G=f.sources[I][M]||f.sources[I].content,H=(0,l.useTSPlaygroundUrl)(m,G),K=(0,r.useRef)(),q=(0,l.usePrefersColor)(),z=c(q,1),Q=z[0];function V(e){O(e),P(p(e,f.sources[e]))}return(0,r.useEffect)((function(){Z(Math.random())}),[Q]),r.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",b?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:X,src:_,ref:K}):f.children),r.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.createElement(l.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&r.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.createElement("div",{className:"__dumi-default-previewer-actions"},y&&r.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),E&&r.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:E}),f.motions&&r.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:C,onClick:function(){return w()}}),f.iframe&&r.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return Z(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&r.createElement(l.Link,{target:"_blank",to:_},r.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.createElement("span",null),r.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":A,onClick:function(){return S(G)}}),"tsx"===M&&B&&r.createElement(l.Link,{target:"_blank",to:H},r.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return D(!B)}})),B&&r.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.createElement(o.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:V},Object.keys(f.sources).map((function(e){return r.createElement(o.J,{tab:"_"===e?"index.".concat(p(e,f.sources[e])):e,key:e})}))),r.createElement("div",{className:"__dumi-default-previewer-source"},r.createElement(i.Z,{code:G,lang:M,showCopy:!1}))))};t["default"]=v}}]);