(self["webpackChunkor_so"]=self["webpackChunkor_so"]||[]).push([[896],{85500:function(){},22259:function(){},55952:function(){},60689:function(){},62946:function(){},44507:function(){},59475:function(){},46195:function(e,t,a){"use strict";a.d(t,{Z:function(){return S}});var n=a(44742),r=a(67294),l=a(96089),c=a(37899),o=(a(22259),e=>{var t=e.location,a=(0,r.useContext)(l.context),n=a.base,o=a.locale,i=a.config.locales,u=i.find((e=>{var t=e.name;return t!==o}));function s(e){var a=n.replace("/".concat(o),""),r=t.pathname.replace(new RegExp("^".concat(n,"(/|$)")),"".concat(a,"$1"))||"/";if(e!==i[0].name){var l="".concat(a,"/").concat(e).replace(/\/\//,"/"),c=t.pathname.replace(n.replace(/^\/$/,"//"),"");return"".concat(l).concat(c).replace(/\/$/,"")}return r}return u?r.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":i.length},i.length>2?r.createElement("select",{value:o,onChange:e=>c.m8.push(s(e.target.value))},i.map((e=>r.createElement("option",{value:e.name,key:e.name},e.label)))):r.createElement(l.Link,{to:s(u.name)},u.label)):null}),i=o,u=(a(55952),e=>{var t=e.onMobileMenuClick,a=e.navPrefix,n=e.location,c=e.darkPrefix,o=(0,r.useContext)(l.context),u=o.base,s=o.config,m=s.mode,d=s.title,f=s.logo,p=o.nav;return r.createElement("div",{className:"__dumi-default-navbar","data-mode":m},r.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),r.createElement(l.Link,{className:"__dumi-default-navbar-logo",style:{backgroundImage:f&&"url('".concat(f,"')")},to:u,"data-plaintext":!1===f||void 0},d),r.createElement("nav",null,a,p.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.createElement("ul",null,e.children.map((e=>r.createElement("li",{key:e.path},r.createElement(l.NavLink,{to:e.path},e.title)))));return r.createElement("span",{key:e.title||e.path},e.path?r.createElement(l.NavLink,{to:e.path,key:e.path},e.title):e.title,a)})),r.createElement("div",{className:"__dumi-default-navbar-tool"},r.createElement(i,{location:n}),c)))}),s=u,m=a(13378),d=a(3911),f=(a(44507),e=>{var t=e.slugs,a=(0,d.Z)(e,["slugs"]);return r.createElement("ul",(0,m.Z)({role:"slug-list"},a),t.filter((e=>{var t=e.depth;return t>1&&t<4})).map((e=>r.createElement("li",{key:e.heading,title:e.value,"data-depth":e.depth},r.createElement(l.AnchorLink,{to:"#".concat(e.heading)},r.createElement("span",null,e.value))))))}),p=f,h=(a(62946),e=>{var t=e.mobileMenuCollapsed,a=e.location,n=e.darkPrefix,c=(0,r.useContext)(l.context),o=c.config,u=o.logo,s=o.title,m=o.description,d=o.mode,f=o.repository.url,h=c.menu,v=c.nav,g=c.base,y=c.meta,E=Boolean((y.hero||y.features||y.gapless)&&"site"===d)||!1===y.sidemenu||void 0;return r.createElement("div",{className:"__dumi-default-menu","data-mode":d,"data-hidden":E,"data-mobile-show":!t||void 0},r.createElement("div",{className:"__dumi-default-menu-inner"},r.createElement("div",{className:"__dumi-default-menu-header"},r.createElement(l.Link,{to:g,className:"__dumi-default-menu-logo",style:{backgroundImage:u&&"url('".concat(u,"')")}}),r.createElement("h1",null,s),r.createElement("p",null,m),/github\.com/.test(f)&&"doc"===d&&r.createElement("p",null,r.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(f.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),r.createElement("div",{className:"__dumi-default-menu-mobile-area"},!!v.length&&r.createElement("ul",{className:"__dumi-default-menu-nav-list"},v.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.createElement("ul",null,e.children.map((e=>r.createElement("li",{key:e.path||e.title},r.createElement(l.NavLink,{to:e.path},e.title)))));return r.createElement("li",{key:e.path||e.title},e.path?r.createElement(l.NavLink,{to:e.path},e.title):e.title,a)}))),r.createElement(i,{location:a}),n),r.createElement("ul",{className:"__dumi-default-menu-list"},!E&&h.map((e=>{var t,n=Boolean(null===(t=y.slugs)||void 0===t?void 0:t.length),c=e.children&&Boolean(e.children.length),o="menu"===y.toc&&!c&&n&&e.path===a.pathname.replace(/([^^])\/$/,"$1"),i=c?e.children.map((e=>e.path)):[e.path,a.pathname.startsWith("".concat(e.path,"/"))&&y.title===e.title?a.pathname:null];return r.createElement("li",{key:e.path||e.title},r.createElement(l.NavLink,{to:e.path,isActive:()=>i.includes(a.pathname)},e.title),Boolean(e.children&&e.children.length)&&r.createElement("ul",null,e.children.map((e=>r.createElement("li",{key:e.path},r.createElement(l.NavLink,{to:e.path,exact:!0},r.createElement("span",null,e.title)),Boolean("menu"===y.toc&&"undefined"!==typeof window&&e.path===a.pathname&&n)&&r.createElement(p,{slugs:y.slugs}))))),o&&r.createElement(p,{slugs:y.slugs}))})))))}),v=h,g=(a(60689),(e,t)=>{var a=t.toLowerCase().indexOf(e.toLowerCase()),n=e.length;return r.createElement(r.Fragment,null,t.substring(0,a),r.createElement("span",{className:"__dumi-default-search-highlight"},t.substring(a,a+n)),t.substring(a+n,t.length))}),y=()=>{var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],c=t[1],o=(0,r.useState)([]),i=(0,n.Z)(o,2),u=i[0],s=i[1],d=(0,r.useRef)(),f=(0,l.useSearch)(a),p=r.createElement("svg",{className:"__dumi-default-search-empty",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2347",width:"32",height:"32"},r.createElement("path",{d:"M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"}));return(0,r.useEffect)((()=>{Array.isArray(f)?s(f):"function"===typeof f&&f(".".concat(d.current.className))}),[f]),r.createElement("div",{className:"__dumi-default-search"},r.createElement("input",(0,m.Z)({className:"__dumi-default-search-input",type:"search",ref:d},Array.isArray(f)?{value:a,onChange:e=>c(e.target.value)}:{})),r.createElement("ul",null,u.length>0&&u.map((e=>{var t;return r.createElement("li",{key:e.path,onClick:()=>c("")},r.createElement(l.AnchorLink,{to:e.path},(null===(t=e.parent)||void 0===t?void 0:t.title)&&r.createElement("span",null,e.parent.title),g(a,e.title)))})),0===u.length&&a&&r.createElement("li",{style:{textAlign:"center"}},p)))},E=(a(85500),e=>{var t=e.darkSwitch,a=e.onDarkSwitchClick,c=e.isSideMenu,o=["dark","light","auto"],i=(0,l.usePrefersColor)(),u=(0,n.Z)(i,2),s=u[0],m=u[1],d=s,f=r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4026",width:"22",height:"22"},r.createElement("path",{d:"M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z","p-id":"4027"})),p=r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3854",width:"22",height:"22"},r.createElement("path",{d:"M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z","p-id":"3855"})),h=r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11002",width:"22",height:"22"},r.createElement("path",{d:"M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z","p-id":"11003"})),v=o.filter((e=>e!==d)),g=(e,t)=>{!c&&a&&a(e),t!==d&&m(t)},y=e=>{switch(e){case"dark":return r.createElement("button",{key:"dumi-dark-btn-moon",title:"Dark theme",onClick:t=>g(t,e),className:"__dumi-default-dark-moon ".concat(e===d?"__dumi-default-dark-switch-active":"")},p);case"light":return r.createElement("button",{key:"dumi-dark-btn-sun",title:"Light theme",onClick:t=>g(t,e),className:"__dumi-default-dark-sun ".concat(e===d?"__dumi-default-dark-switch-active":"")},f);case"auto":return r.createElement("button",{key:"dumi-dark-btn-auto",title:"Default to system",onClick:t=>g(t,e),className:"__dumi-default-dark-auto ".concat(e===d?"__dumi-default-dark-switch-active":"")},h);default:}};return r.createElement("div",{className:"__dumi-default-dark"},r.createElement("div",{className:"__dumi-default-dark-switch ".concat(!c&&t?"__dumi-default-dark-switch-open":"")},c?o.map((e=>y(e))):y(d)),!c&&t&&r.createElement("div",{className:"__dumi-default-dark-switch-list"},v.map((e=>y(e)))))}),b=E,_=(a(59475),e=>r.createElement(r.Fragment,null,r.createElement("div",{className:"__dumi-default-layout-hero"},e.image&&r.createElement("img",{src:e.image}),r.createElement("h1",null,e.title),r.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.actions&&e.actions.map((e=>r.createElement(l.Link,{to:e.link,key:e.text},r.createElement("button",{type:"button"},e.text))))))),k=e=>r.createElement("div",{className:"__dumi-default-layout-features"},e.map((e=>r.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?r.createElement(l.Link,{to:e.link},r.createElement("dt",null,e.title)):r.createElement("dt",null,e.title),r.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))))),w=e=>{var t,a,c=e.children,o=e.location,i=(0,r.useContext)(l.context),u=i.config,m=u.mode,d=u.repository,f=(i.nav,i.meta),h=i.locale,g=d.url,E=d.branch,w=d.platform,S=(0,r.useState)(!0),O=(0,n.Z)(S,2),x=O[0],N=O[1],L=(0,r.useState)(!1),M=(0,n.Z)(L,2),C=M[0],P=M[1],j="site"===m,z=j&&f.hero,A=j&&f.features,$=!1!==f.sidemenu&&!z&&!A&&!f.gapless,B=!z&&!A&&Boolean(null===(t=f.slugs)||void 0===t?void 0:t.length)&&("content"===f.toc||void 0===f.toc)&&!f.gapless,Z=/^zh|cn$/i.test(h),D=new Date(f.updatedTime),H="".concat(D.toLocaleDateString([],{hour12:!1})," ").concat(D.toLocaleTimeString([],{hour12:!1})),I={github:"GitHub",gitlab:"GitLab"}[(null===(a=(g||"").match(/(github|gitlab)/))||void 0===a?void 0:a[1])||"nothing"]||w;return r.createElement("div",{className:"__dumi-default-layout","data-route":o.pathname,"data-show-sidemenu":String($),"data-show-slugs":String(B),"data-site-mode":j,"data-gapless":String(!!f.gapless),onClick:()=>{P(!1),x||N(!0)}},r.createElement(s,{location:o,navPrefix:r.createElement(y,null),darkPrefix:r.createElement(b,{darkSwitch:C,onDarkSwitchClick:e=>{P((e=>!e)),e.stopPropagation()},isSideMenu:!1}),onMobileMenuClick:e=>{N((e=>!e)),e.stopPropagation()}}),r.createElement(v,{darkPrefix:r.createElement(b,{darkSwitch:C,isSideMenu:!0}),mobileMenuCollapsed:x,location:o}),B&&r.createElement(p,{slugs:f.slugs,className:"__dumi-default-layout-toc"}),z&&_(f.hero),A&&k(f.features),r.createElement("div",{className:"__dumi-default-layout-content"},c,!z&&!A&&f.filePath&&!f.gapless&&r.createElement("div",{className:"__dumi-default-layout-footer-meta"},I&&r.createElement(l.Link,{to:"".concat(g,"/edit/").concat(E,"/").concat(f.filePath)},Z?"\u5728 ".concat(I," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(I)),r.createElement("span",{"data-updated-text":Z?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},H)),(z||A)&&f.footer&&r.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:f.footer}})))},S=w},13378:function(e,t,a){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return n}})},3911:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function r(e,t){if(null==e)return{};var a,r,l=n(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,{Z:function(){return r}})},49215:function(e,t,a){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var r=i(a(67294)),l=c(a(96433));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=l?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=e[c]}return r["default"]=e,a&&a.set(e,r),r}function u(e,t){return p(e)||f(e,t)||m(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw r}}return l}}function p(e){if(Array.isArray(e))return e}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e,t){var a=function(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var l=n[1].replace(/([^^])\/$/,"$1");return v(v({},(null===(e=n[0].find((function(e){var t=e.path;return t===l})))||void 0===e?void 0:e.meta)||{}),{},{__pathname:t})},n=(0,r.useState)(a(e,t)),l=u(n,2),c=l[0],o=l[1];return(0,r.useLayoutEffect)((function(){o(a(e,t))}),[t]),c},E=function(e,t){var a=function(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(null===(t=n[0].find((function(e){return new RegExp("/".concat(e.name,"(/|$)")).test(n[1])})))||void 0===t?void 0:t.name)||e[0].name},n=(0,r.useState)(a(e,t)),l=u(n,2),c=l[0],o=l[1];return(0,r.useLayoutEffect)((function(){o(a(e,t))}),[t]),c},b=function(e,t,a){var n=function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];for(var r=a[0].navs[a[1]]||[],l="*",c=r.length-1;c>=0;c-=1){var o=r[c],i=[o].concat(o.children).filter(Boolean),u=i.find((function(e){return e.path&&new RegExp("^".concat(e.path.replace(/\.html$/,""),"(/|.|$)")).test(a[2])}));if(u){l=u.path;break}}return(null===(e=a[0].menus[a[1]])||void 0===e?void 0:e[l])||[]},l=(0,r.useState)(n(e,t,a)),c=u(l,2),o=c[0],i=c[1];return(0,r.useLayoutEffect)((function(){i(n(e,t,a))}),[e.navs,e.menus,t,a]),o},_=function(e,t,a){var n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n[0]===n[1][0].name?n[2].path:"".concat(a.path,"/").concat(e).replace(/\/\//,"/")},l=(0,r.useState)(n(e,t,a)),c=u(l,2),o=c[0],i=c[1];return(0,r.useLayoutEffect)((function(){i(n(e,t,a))}),[e]),o},k=function e(t){var a;return null===(a=t.find((function(t){return!!t.__dumiRoot||!!t.routes&&e(t.routes)})))||void 0===a?void 0:a.routes},w=function(e){var t=e.location,a=e.route,n=e.children,c=e.config,o=e.apis,i=e.demos,u=t.pathname.replace(a.path.replace(/^\/$/,"//"),""),s=k(e.routes)||[],m=y(s,t.pathname),d=E(c.locales,u),f=b(c,d,t.pathname),p=_(d,c.locales,a);return r["default"].createElement(l["default"].Provider,{value:{config:c,meta:m.__pathname===t.pathname?m:{},locale:d,nav:c.navs[d]||[],menu:f,base:p,routes:s,apis:o,demos:i}},n)},S=w;t.Z=S}}]);