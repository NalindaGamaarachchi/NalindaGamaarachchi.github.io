(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{58:function(e,t,a){"use strict";var A=a(1),c=a(0),n=a(4),s=a.n(n),o=a(21),i=a.p+"static/media/gotham-bold.73ce573b.woff2";a(60);t.a=({children:e,level:t=1,as:a,align:n="auto",weight:r="medium",className:l,...g})=>{const d=Math.min(Math.max(t,0),4),p=a||`h${Math.max(d,1)}`;return Object(A.jsxs)(c.Fragment,{children:["bold"===r&&Object(A.jsxs)(o.a,{children:[Object(A.jsx)("link",{rel:"preload",href:i,as:"font",crossorigin:""}),Object(A.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${i}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(A.jsx)(p,{className:s()(l,"heading",`heading--align-${n}`,`heading--level-${d}`,`heading--weight-${r}`),...g,children:e})]})}},59:function(e,t,a){"use strict";var A=a(1),c=a(4),n=a.n(c);a(62);t.a=({children:e,size:t="m",as:a="p",align:c="auto",weight:s="auto",secondary:o,className:i,...r})=>Object(A.jsx)(a,{className:n()(i,"text",`text--align-${c}`,`text--size-${t}`,`text--weight-${s}`,{"text--secondary":o}),...r,children:e})},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";var A=a(1),c=a(0),n=a(4),s=a.n(n),o=a(9),i=a(67),r=a(23),l=a(27);a(64);const g=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],d="glyph",p="value";const h=({text:e,start:t=!0,delay:a=0,className:n,...h})=>{const j=Object(c.useRef)([{type:d,value:""}]),u=Object(c.useRef)(),m=Object(o.h)();return Object(c.useEffect)((()=>{const A=u.current,c=e.split("");let n;const s=()=>{const e=j.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));A.innerHTML=e.join("")},o=Object(i.d)(0,(e=>{j.current=function(e,t,a){return e.map(((e,A)=>{if(A<a)return{type:p,value:e};if(a%1<.5){const e=Math.floor(Math.random()*g.length);return{type:d,value:g[e]}}return{type:d,value:t[A].value}}))}(c,j.current,e),s()}));return!t||n||m||l.a||(n=Object(i.a)(Object(i.b)(a),Object(i.c)({from:0,to:c.length,stiffness:8,damping:5})).start(o)),m&&(j.current=c.map(((e,t)=>({type:p,value:c[t]}))),s()),()=>{n&&n.stop()}}),[m,t,a,e]),Object(A.jsxs)("span",{className:s()("decoder-text",n),...h,children:[Object(A.jsx)(r.a,{className:"decoder-text__label",children:e}),Object(A.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:u})]})};t.a=Object(c.memo)(h)},64:function(e,t,a){},89:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var A=a(1),c=a(0),n=a(4),s=a.n(n),o=a(57),i=a(21),r=a(22),l=a(63),g=a.p+"static/media/notfound.ced869d1.mp4",d=a(20),p=a(58),h=a(59);a(89);t.default=function(){return Object(A.jsxs)("section",{className:"page-404",children:[Object(A.jsxs)(i.a,{children:[Object(A.jsx)("title",{tag:"title",children:"404 | Not Found"}),Object(A.jsx)("meta",{name:"description",content:"404 page not found. This page doesn't exist"})]}),Object(A.jsx)(o.a,{appear:!0,in:!0,timeout:0,onEnter:d.b,children:e=>Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)("div",{className:"page-404__details",children:Object(A.jsxs)("div",{className:"page-404__text",children:[Object(A.jsx)(p.a,{className:s()("page-404__title",`page-404__title--${e}`),level:0,children:"404"}),Object(A.jsx)(p.a,{"aria-hidden":!0,className:s()("page-404__subheading",`page-404__subheading--${e}`),as:"h2",level:3,children:Object(A.jsx)(l.a,{text:"Error: Redacted",start:"exited"!==e,delay:300})}),Object(A.jsx)(h.a,{className:s()("page-404__description",`page-404__description--${e}`),children:"This page could not be found. It either doesn\u2019t exist or was deleted. Or perhaps you don\u2019t exist."}),Object(A.jsx)(r.a,{secondary:!0,iconHoverShift:!0,className:s()("page-404__button",`page-404__button--${e}`),href:"/",icon:"chevronRight",children:"Back to homepage"})]})}),Object(A.jsx)("div",{className:s()("page-404__video-container",`page-404__video-container--${e}`),children:Object(A.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:s()("page-404__video",`page-404__video--${e}`),poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAoADIDAREAAhEBAxEB/8QAHAAAAgICAwAAAAAAAAAAAAAAAAQFBgECAwcK/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAwUGAv/aAAwDAQACEAMQAAAA8/4AXvY5WLXfrGftgAAAXPV5uvI7EbQ4ABvPm97HLcUe6lmb+ZFKmNYmQuU7F3OOil364jsI0tp1MaR6euWWrtmGc9GppGlnBIH/xAApEAABAwMBCAEFAAAAAAAAAAABAgMEAAURBgcQEhMUISIyICQxQWGR/9oACAEBAAE/AN2znSNqlM9Vc0BRV6g1tFhwLfcTGhsBI/XxT2qz35EGzpKVELSPGtRXR+5yi6/9/gww9KdDDCCpROEgVozYTqLULZmThyGkpz5VcNLtW5qRFQ6FdOf7Sj1EzBT+alwkFZKDinGlNe27Tc42y5JnBAUWzmoe2qZJiGLx8A4cYFXR0vWw3ND2eYrzFSkRIX1Lae6hUmTkcwHvTrynVZVuZjdPCL5PtUV0pcNTL0UW5MVCu1SJJeh4J70VEjG//8QAIBEAAgICAQUBAAAAAAAAAAAAAQIAEQMEEgUQICFRMv/aAAgBAgEBPwDtoayMLabyoj0vlizBMUz5Dkaz4KCxoTV6Pmzjk3oR9cICPk/TRkhFdtduD8ovVWKkTIbx8/sYIvuFoTfYLSXENGNlpKELcl8P/8QAJBEAAgICAQMEAwAAAAAAAAAAAgMAAQQSEQUQMQYgIlETIUH/2gAIAQMBAT8A7dY6g8C1XOisc5Ox37n4ltyL+phIFC+B9hGIDtc6l6qw8O9A+VxGcTrErrzK+C4pl8fuCVF2zFU5Fh9w/TKgZt5mOOrvxXXiLtjORuLD+QR1rtZ7s1qGPIxWNy2yuLDVk47/AP/Z",children:Object(A.jsx)("source",{src:g,type:"video/mp4"})})})]})})]})}}}]);
//# sourceMappingURL=7.55f1833c.chunk.js.map