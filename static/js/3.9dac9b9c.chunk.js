(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{58:function(e,t,n){"use strict";var i=n(1),a=n(0),c=n(4),s=n.n(c),r=n(21),o=n.p+"static/media/gotham-bold.73ce573b.woff2";n(60);t.a=({children:e,level:t=1,as:n,align:c="auto",weight:l="medium",className:d,...u})=>{const j=Math.min(Math.max(t,0),4),h=n||`h${Math.max(j,1)}`;return Object(i.jsxs)(a.Fragment,{children:["bold"===l&&Object(i.jsxs)(r.a,{children:[Object(i.jsx)("link",{rel:"preload",href:o,as:"font",crossorigin:""}),Object(i.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(i.jsx)(h,{className:s()(d,"heading",`heading--align-${c}`,`heading--level-${j}`,`heading--weight-${l}`),...u,children:e})]})}},59:function(e,t,n){"use strict";var i=n(1),a=n(4),c=n.n(a);n(62);t.a=({children:e,size:t="m",as:n="p",align:a="auto",weight:s="auto",secondary:r,className:o,...l})=>Object(i.jsx)(n,{className:c()(o,"text",`text--align-${a}`,`text--size-${t}`,`text--weight-${s}`,{"text--secondary":r}),...l,children:e})},60:function(e,t,n){},61:function(e,t,n){"use strict";var i=n(1),a=n(0),c=n(4),s=n.n(c);n(65);const r=Object(a.forwardRef)((({as:e="div",children:t,className:n,...a},c)=>Object(i.jsx)(e,{className:s()("section",n),ref:c,...a,children:t})));t.a=r},62:function(e,t,n){},63:function(e,t,n){"use strict";var i=n(1),a=n(0),c=n(4),s=n.n(c),r=n(9),o=n(67),l=n(23),d=n(27);n(64);const u=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],j="glyph",h="value";const b=({text:e,start:t=!0,delay:n=0,className:c,...b})=>{const p=Object(a.useRef)([{type:j,value:""}]),m=Object(a.useRef)(),f=Object(r.h)();return Object(a.useEffect)((()=>{const i=m.current,a=e.split("");let c;const s=()=>{const e=p.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));i.innerHTML=e.join("")},r=Object(o.d)(0,(e=>{p.current=function(e,t,n){return e.map(((e,i)=>{if(i<n)return{type:h,value:e};if(n%1<.5){const e=Math.floor(Math.random()*u.length);return{type:j,value:u[e]}}return{type:j,value:t[i].value}}))}(a,p.current,e),s()}));return!t||c||f||d.a||(c=Object(o.a)(Object(o.b)(n),Object(o.c)({from:0,to:a.length,stiffness:8,damping:5})).start(r)),f&&(p.current=a.map(((e,t)=>({type:h,value:a[t]}))),s()),()=>{c&&c.stop()}}),[f,t,n,e]),Object(i.jsxs)("span",{className:s()("decoder-text",c),...b,children:[Object(i.jsx)(l.a,{className:"decoder-text__label",children:e}),Object(i.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:m})]})};t.a=Object(a.memo)(b)},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";var i=n(1),a=n(15),c=n(4),s=n.n(c),r=n(16);n(72);const o=["txt","png","jpg"];t.a=({rel:e,target:t,children:n,secondary:c,className:l,href:d,as:u,...j})=>{const h=o.includes(null===d||void 0===d?void 0:d.split(".").pop()),b=(null===d||void 0===d?void 0:d.includes("://"))||"#"===(null===d||void 0===d?void 0:d[0])||h,p=e||(b?"noreferrer noopener":void 0),m=t||(b?"_blank":void 0),f=u||(b?"a":a.b);return Object(i.jsx)(f,{className:s()("link",l,{"link--secondary":c}),rel:p,href:b?d:void 0,to:b?void 0:d,target:m,onMouseUp:r.a,...j,children:n})}},68:function(e,t,n){"use strict";async function i({src:e,srcSet:t,sizes:n}){return new Promise(((i,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const a=new Image;e&&(a.src=e),t&&(a.srcset=t),n&&(a.sizes=n);const c=()=>{a.removeEventListener("load",c);const e=a.currentSrc;i(e)};a.addEventListener("load",c)}catch(c){a(`Error loading ${t}: ${c}`)}}))}async function a(e){const t=e.split(", ").map((e=>{const[t,n]=e.split(" ");return{src:t,image:function(e=1,t=1){const n=document.createElement("canvas"),i=n.getContext("2d");n.width=e,n.height=t,i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0,0,e,t);const a=n.toDataURL("image/png","");return n.remove(),a}(Number(n.replace("w",""))),width:n}})),n=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),a=await i({srcSet:n});return t.find((e=>e.image===a)).src}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}))},69:function(e,t,n){"use strict";var i=n(1),a=n(4),c=n.n(a),s=n(2);n(71);const r=({lineWidth:e,lineHeight:t,notchWidth:n,notchHeight:a,collapseDelay:r,collapsed:o,className:l,style:d})=>Object(i.jsxs)("div",{className:c()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":n,"--notchHeight":a,"--collapseDelay":Object(s.c)(r),...d},children:[Object(i.jsx)("div",{className:c()("divider__line",{"divider__line--collapsed":o})}),Object(i.jsx)("div",{className:c()("divider__notch",{"divider__notch--collapsed":o}),style:{"--collapseDelay":Object(s.c)(r+160)}})]});r.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=r},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";var i=n(1),a=n(0),c=n(4),s=n.n(c),r=n(9),o=n(22),l=n(14),d=n(57),u=n(20),j=n(27),h=n(10),b=n(2),p=n(68),m=n(28),f=n(23);n(74);const A=({onLoad:e,loaded:t,inViewport:n,srcSet:c,placeholder:m,delay:A,src:O,alt:v,play:g=!0,reveal:x,..._})=>{const w=Object(r.h)(),[y,N]=Object(a.useState)(!0),[I,E]=Object(a.useState)(!w),[$,R]=Object(a.useState)(!1),[T,S]=Object(a.useState)(!1),[B,M]=Object(a.useState)(!1),[k,D]=Object(a.useState)(),[Q,U]=Object(a.useState)(),L=Object(a.useRef)(),H=Object(a.useRef)(),z=null===O||void 0===O?void 0:O.endsWith(".mp4"),C=O||(null===c||void 0===c?void 0:c.split(" ")[0]),W=!j.a&&n;Object(a.useEffect)((()=>{const e=()=>{N(!1)},t=L.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(a.useEffect)((()=>{z&&c?(async()=>{const e=await Object(p.b)(c);U(e)})():z&&U(O)}),[z,O,c]),Object(a.useEffect)((()=>{const{width:e,height:t}=L.current;e&&t&&D({width:e,height:t})}),[]),Object(a.useEffect)((()=>{H.current&&Q&&(g&&n?!n||w||j.a||(E(!0),H.current.play()):(E(!1),H.current.pause()))}),[n,g,w,Q]);const P=e=>{e.preventDefault(),H.current.paused?(E(!0),H.current.play()):(E(!1),H.current.pause())},F=()=>{R(!0),M(!0)};return Object(i.jsxs)("div",{className:s()("image__element-wrapper",{"image__element-wrapper--reveal":x,"image__element-wrapper--in-viewport":n}),onMouseOver:z?()=>{R(!0),S(!0)}:void 0,onMouseOut:z?()=>S(!1):void 0,style:{"--delay":Object(b.c)(A+1e3)},children:[z&&Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:s()("image__element",{"image__element--loaded":t}),autoPlay:!w,role:"img",onLoadStart:e,src:Q,"aria-label":v,ref:H,..._}),Object(i.jsx)(d.a,{in:T||B,onExit:u.b,onExited:()=>R(!1),timeout:{enter:0,exit:Object(b.b)(h.b.base.durationS)},children:e=>Object(i.jsx)(f.a,{visible:$,children:Object(i.jsxs)(o.a,{className:s()("image__button",`image__button--${e}`),onFocus:F,onBlur:()=>M(!1),onClick:P,children:[Object(i.jsx)(l.a,{icon:I?"pause":"play"}),I?"Pause":"Play"]})})})]}),!z&&Object(i.jsx)("img",{className:s()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:W?C:void 0,srcSet:W?c:void 0,width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,alt:v,..._}),y&&Object(i.jsx)("img",{"aria-hidden":!0,className:s()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(b.c)(A)},ref:L,src:m,onLoad:e=>{const{width:t,height:n}=e.target;D({width:t,height:n})},width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:n,delay:c=0,raised:o,src:l,...d})=>{const[u,j]=Object(a.useState)(!1),{themeId:h}=Object(m.c)(),p=Object(a.useRef)(),f=Object(r.d)(p,!(null===l||void 0===l?void 0:l.endsWith(".mp4"))),O=Object(a.useCallback)((()=>{j(!0)}),[]);return Object(i.jsx)("div",{className:s()("image",e,`image--${h}`,{"image--in-viewport":f,"image--reveal":n,"image--raised":o}),style:{...t,"--delay":Object(b.c)(c)},ref:p,children:Object(i.jsx)(A,{delay:c,onLoad:O,loaded:u,inViewport:f,reveal:n,src:l,...d})})}},74:function(e,t,n){},75:function(e,t,n){"use strict";var i=n(1);n(66),n(76);t.a=()=>Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Nalinda Gamaarachchi.`})})},76:function(e,t,n){},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s}));const i=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)a(e.material);else for(const t of e.material)a(t)}))},a=e=>{e.dispose();for(const t of Object.keys(e)){const n=e[t];n&&"object"===typeof n&&"minFilter"in n&&n.dispose()}},c=e=>{e.dispose(),e.forceContextLoss(),e=null},s=e=>{for(const t of e)t.parent.remove(t)}},78:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),c=n(21),s=n(4),r=n.n(s),o=n(57),l=n(56),d=n(63),u=n(9),j=n(20),h=n(27),b=n(2);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var m=a.createElement("path",{d:"M1 1l20.5 12L42 1",strokeWidth:2,fill:"none"});function f({title:e,titleId:t,...n},i){return a.createElement("svg",p({stroke:"currentColor",width:43,height:15,viewBox:"0 0 43 15",ref:i,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,m)}const A=a.forwardRef(f);n.p;var O=n(10),v=n(58),g=n(61),x=n(28),_=n(23);n(78);const w=Object(a.lazy)((()=>n.e(9).then(n.bind(null,97))));var y=function({id:e,sectionRef:t,disciplines:n,scrollIndicatorHidden:c,...s}){const p=Object(x.c)(),[m,f]=Object(a.useState)(0),y=Object(u.l)(),N=Object(u.i)(p),I=[n.slice(0,-1).join(", "),n.slice(-1)[0]].join(", and "),E=n.filter(((e,t)=>t===m)),$=`${e}-title`;return Object(u.e)((()=>{const e=(m+1)%n.length;f(e)}),5e3,p.themeId),Object(a.useEffect)((()=>{N&&N.themeId!==p.themeId&&f(0)}),[p.themeId,N]),Object(i.jsx)(g.a,{className:"intro",as:"section",ref:t,id:e,"aria-labelledby":$,tabIndex:-1,...s,children:Object(i.jsx)(o.a,{appear:!h.a,in:!h.a,timeout:3e3,onEnter:j.b,children:e=>Object(i.jsxs)(a.Fragment,{children:[!h.a&&Object(i.jsx)(a.Suspense,{fallback:null,children:Object(i.jsx)(w,{})}),Object(i.jsxs)("header",{className:"intro__text",children:[Object(i.jsx)("h1",{className:r()("intro__name",`intro__name--${e}`),id:$,children:Object(i.jsx)(d.a,{text:"Hello, I'm",start:!h.a,delay:300})}),Object(i.jsxs)(v.a,{level:0,as:"h2",className:"intro__title",children:[Object(i.jsx)(_.a,{className:"intro__title-label",children:`Designer + ${I}`}),Object(i.jsxs)("span",{"aria-hidden":!0,className:r()("intro__title-row",{"intro__title-row--hidden":h.a}),children:[Object(i.jsx)("span",{className:r()("intro__title-word",`intro__title-word--${e}`),style:{"--delay":O.b.base.durationXS},children:"Nalinda Gamaarachchi"}),Object(i.jsx)("span",{classNameperppplllsss:r()("intro__title-line",`intro__title-line--${e}`)})]}),Object(i.jsx)(l.a,{className:r()("intro__title-row",{"intro__title-row--hidden":h.a}),component:"span",children:E.map((e=>Object(i.jsx)(o.a,{appear:!0,timeout:{enter:3e3,exit:2e3},onEnter:j.b,children:t=>Object(i.jsx)("span",{"aria-hidden":!0,className:r()("intro__title-word","intro__title-word--plus",`intro__title-word--${t}`),style:{"--delay":O.b.base.durationL},children:e})},e)))})]})]}),y.width>b.a.tablet&&Object(i.jsx)("div",{className:r()("intro__scroll-indicator",`intro__scroll-indicator--${e}`,{"intro__scroll-indicator--hidden":c}),status:e}),y.width<=b.a.tablet&&Object(i.jsx)("div",{className:r()("intro__mobile-scroll-indicator",`intro__mobile-scroll-indicator--${e}`,{"intro__mobile-scroll-indicator--hidden":c}),children:Object(i.jsx)(A,{"aria-hidden":!0})})]})},p.themeId)})},N=n(22),I=(n(70),n(81),n(82),n(80),n(67),n(68),n(77),n.p+"static/media/iphone-11.dfa3acae.glb"),E=n.p+"static/media/macbook-pro.29527f3f.glb";n(79);var $=n(69);n.p;var R=n(59);n(83);n(66);var T=n(73),S=n.p+"static/media/slient-boy.8a45eecd.png";n.p,n(84);const B=({status:e,titleId:t})=>Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)(v.a,{className:r()("profile__title",`profile__title--${e}`),level:3,id:t,children:Object(i.jsx)(d.a,{text:"About me",start:"exited"!==e,delay:500})}),Object(i.jsx)(R.a,{className:r()("profile__description",`profile__description--${e}`),size:"l",children:"I'm a software engineering undergraduate with a passion for developing innovative mobile and web applications. My passion for software development started from a young age, and since then, I enjoy working on both mobile and web applications, and I have experience in developing web applications using React, Angular, Node.js, Next.js, MongoDB, SQL, and three.js. Additionally, I have developed native iOS mobile applications and have experience with ARKit and CoreML in iOS. My love for software engineering drives me to continually improve and develop innovative solutions to real-world problems."}),Object(i.jsx)(R.a,{className:r()("profile__description",`profile__description--${e}`),size:"l",children:"Feel free to reach out to me."})]});var M=({id:e,visible:t,sectionRef:n})=>{const a=`${e}-title`;return Object(i.jsx)(g.a,{className:"profile",as:"section",id:e,ref:n,"aria-labelledby":a,tabIndex:-1,children:Object(i.jsx)(o.a,{in:t,timeout:0,onEnter:j.b,children:e=>Object(i.jsxs)("div",{className:"profile__content",children:[Object(i.jsxs)("div",{className:"profile__column",children:[Object(i.jsx)(B,{status:e,titleId:a}),Object(i.jsx)(N.a,{secondary:!0,className:r()("profile__button",`profile__button--${e}`),href:"/contact",icon:"send",children:"Contact me"})]}),Object(i.jsxs)("div",{className:"profile__column",children:[Object(i.jsxs)("div",{className:"profile__tag","aria-hidden":!0,children:[Object(i.jsx)($.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(i.jsx)("div",{className:r()("profile__tag-text",`profile__tag-text--${e}`),children:"Me"})]}),Object(i.jsx)("div",{className:"profile__image-wrapper",children:Object(i.jsx)(T.a,{reveal:!0,delay:100,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAAOAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgQD/9oADAMBAAIQAxAAAACm+aiJ0VCWX//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAAQVBQYxUmL/2gAIAQEAAT8Aqbqe0iWUzTe0XpIjYMhLmYz3P//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMTIf/aAAgBAgEBPwB0yHw3MWc//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERP/2gAIAQMBAT8AikSqzIxP/9k=",srcSet:`${S} 480w, ${S} 960w`,sizes:`(max-width: ${b.a.mobile}px) 100vw, 480px`,alt:"Profile"})})]})]})})})},k=n(75),D=n(5);n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(85);const Q=["Student","Developer"];t.default=()=>{const{status:e}=Object(u.j)(),{hash:t,state:n}=Object(D.f)(),s=Object(a.useRef)(!0),[r,o]=Object(a.useState)([]),[l,d]=Object(a.useState)(!1),j=Object(a.useRef)(),h=(Object(a.useRef)(),Object(a.useRef)(),Object(a.useRef)(),Object(a.useRef)(),Object(a.useRef)()),b=Object(u.h)();return Object(a.useEffect)((()=>{const e=[j,h],t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const n=e.target;if(t.unobserve(n),r.includes(n))return;o((e=>[...e,n]))}}))}),{rootMargin:"0px 0px -10% 0px"}),n=new IntersectionObserver((([e])=>{d(!e.isIntersecting)}),{rootMargin:"-100% 0px 0px 0px"});return e.forEach((e=>{t.observe(e.current)})),n.observe(j.current),()=>{t.disconnect(),n.disconnect()}}),[r]),Object(a.useEffect)((()=>{const n="entered"===e,i="scrollBehavior"in document.documentElement.style;let a,c;const r=(e,t)=>{clearTimeout(c);const n=[j,h],s=e.replace("#",""),r=n.filter((e=>e.current.id===s))[0];if(!r)return;const o=t&&!b?"smooth":"instant",l=r.current.offsetTop;a=new IntersectionObserver(((e,t)=>{const[n]=e;n.isIntersecting&&(c=setTimeout((()=>{r.current.focus()}),b?0:400),t.unobserve(n.target))}),{rootMargin:"-20% 0px -20% 0px"}),a.observe(r.current),i?window.scroll({top:l,left:0,behavior:o}):window.scrollTo(0,l)};return t&&s.current&&n?(r(t,!1),s.current=!1):!t&&s.current&&n?(window.scrollTo(0,0),s.current=!1):n&&r(t,!0),()=>{clearTimeout(c),a&&a.disconnect()}}),[t,n,b,e]),Object(i.jsxs)("div",{className:"home",children:[Object(i.jsxs)(c.a,{children:[Object(i.jsx)("title",{children:"Hello,I'm | Nalinda Gamaarachchi "}),Object(i.jsx)("meta",{name:"description",content:"Portfolio of Nalinda Gamaarachchi \u2013 a devloper working"}),Object(i.jsx)("link",{rel:"prefetch",href:I,as:"fetch",crossorigin:""}),Object(i.jsx)("link",{rel:"prefetch",href:E,as:"fetch",crossorigin:""})]}),Object(i.jsx)(y,{id:"intro",sectionRef:j,disciplines:Q,scrollIndicatorHidden:l}),Object(i.jsx)(M,{sectionRef:h,visible:r.includes(h.current),id:"details"}),Object(i.jsx)(k.a,{})]})}}}]);
//# sourceMappingURL=3.9dac9b9c.chunk.js.map