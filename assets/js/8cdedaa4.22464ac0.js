"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[19565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||s[g]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),o=n(53438),l=n(39960),i=n(13919),c=n(95999);const m="cardContainer_fWXF",p="cardTitle_rnsV",s="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",m)},n)}function g(e){let{href:t,icon:n,title:o,description:l}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},n," ",o),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",s),title:l},l))}function d(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(g,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(N,e);const l=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(k,{item:e})))))}},29737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(52991);const l={id:"log-learn-main-menu",title:"\uc8fc\uc694 \uba54\ub274 \uc54c\uc544\ubcf4\uae30",description:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1\uc758 \uc8fc\uc694 \uba54\ub274\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",tags:["\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1","UI"]},i=void 0,c={unversionedId:"log/log-learn-main-menu",id:"log/log-learn-main-menu",title:"\uc8fc\uc694 \uba54\ub274 \uc54c\uc544\ubcf4\uae30",description:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1\uc758 \uc8fc\uc694 \uba54\ub274\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",source:"@site/docs/log/learn-log-main-menu.mdx",sourceDirName:"log",slug:"/log/log-learn-main-menu",permalink:"/log/log-learn-main-menu",draft:!1,editUrl:"undefined/docs/log/learn-log-main-menu.mdx",tags:[{label:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1",permalink:"/tags/\ub85c\uadf8-\ubaa8\ub2c8\ud130\ub9c1"},{label:"UI",permalink:"/tags/ui"}],version:"current",frontMatter:{id:"log-learn-main-menu",title:"\uc8fc\uc694 \uba54\ub274 \uc54c\uc544\ubcf4\uae30",description:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1\uc758 \uc8fc\uc694 \uba54\ub274\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",tags:["\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1","UI"]},sidebar:"logSidebar",previous:{title:"Server",permalink:"/log/log-server"},next:{title:"\ub77c\uc774\ube0c Tail",permalink:"/log/log-lt"}},m={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc640\ud0ed\uc758 \ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1\uc740 \ud1b5\ud569 \uc2dc\uc2a4\ud15c \uad6c\ucd95\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0ac\uc6a9\uc790 \ud3b8\uc758\uc131\uacfc \uc811\uadfc\uc131\uc744 \ub192\uc600\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("p",null,"\uc640\ud0ed\uc740 \uc790\uccb4 \uae30\uc220\ub825\uc744 \uae30\ubc18\uc73c\ub85c \ud0c4\ud0c4\ud55c \ub370\uc774\ud130 \uc218\uc9d1\uc744 \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \ub77c\uc774\ube0c Tail, \ud0d0\uc0c9\uae30, \uac80\uc0c9\uae30, \uc774\ubca4\ud2b8 \uc54c\ub9bc\uc740 \ubb3c\ub860 Parser\uc758 \ud6a8\uc728\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\ub85c\uadf8"))," \uba54\ub274\ub294 \uc870\ud68c \ubc0f \ubd84\uc11d\uacfc \uc635\uc158 \uc124\uc815 \ub4f1\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\uc774\ubca4\ud2b8 \uc124\uc815"))," \uba54\ub274\ub294 \ub85c\uadf8 \uad00\ub828 \uc774\ubca4\ud2b8 \uc54c\ub9bc\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud648 \ud654\uba74 > \ud504\ub85c\uc81d\ud2b8 \uc120\ud0dd > ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\ub85c\uadf8")),(0,a.kt)("br",{parentName:"p"}),"\n","\uc640\ud0ed \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4 \ucd08\uae30 \ud654\uba74\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud55c \ub2e4\uc74c \ud504\ub85c\uc81d\ud2b8 \uba54\ub274 \ud558\uc704\uc5d0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\ub85c\uadf8"))," \uba54\ub274\ub97c \uc120\ud0dd\ud558\uc138\uc694. "),(0,a.kt)("p",{parentName:"li"},"  \ub2e4\uc74c \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\uba74 \ubcf5\uc7a1\ud55c \ub85c\uadf8\uc5d0 \ubcf4\ub2e4 \uc190\uc27d\uac8c \uc811\uadfc\ud558\uc5ec \ub2e4\uc591\ud55c \uc870\uac74\uc73c\ub85c \uc2e4\uc2dc\uac04 \ud655\uc778 \ubc0f \ubd84\uc11d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\ub77c\uc774\ube0c Tail"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\ud0d0\uc0c9\uae30"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\uac80\uc0c9\uae30"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\uc124\uc815"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud648 \ud654\uba74 > \ud504\ub85c\uc81d\ud2b8 \uc120\ud0dd > ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\uacbd\uace0 \uc54c\ub9bc"))," > ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\uc774\ubca4\ud2b8 \uc124\uc815")),(0,a.kt)("br",{parentName:"p"}),"\n","\uc640\ud0ed \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4 \ucd08\uae30 \ud654\uba74\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud55c \ub2e4\uc74c \ud504\ub85c\uc81d\ud2b8 \uba54\ub274 \ud558\uc704\uc5d0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\uacbd\uace0 \uc54c\ub9bc"))," \uba54\ub274\ub97c \uc120\ud0dd\ud574 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\uc774\ubca4\ud2b8 \uc124\uc815"))," \uba54\ub274\uc5d0 \uc9c4\uc785\ud558\uc138\uc694."),(0,a.kt)("p",{parentName:"li"},"  \uc774\ubca4\ud2b8 \uc870\uac74\uc744 \uc124\uc815\ud558\uace0 \uc774\uba54\uc77c, SMS, \uba54\uc2e0\uc800, App Push \ub4f1 \ub2e4\uc591\ud55c \uacbd\ub85c\ub85c \uc54c\ub9bc\uc744 \uc218\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("p",null,"\uc640\ud0ed \ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uc8fc\uc694 \uba54\ub274 \uc548\ub0b4\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);