"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[23671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(86010),i=r(53438),c=r(39960),o=r(13919),s=r(95999);const l="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},83930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(52991);const c={id:"server-agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\uc11c\ubc84 \uc5d0\uc774\uc804\ud2b8 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["\uc11c\ubc84","\uc124\uc815\ud558\uae30"]},o=void 0,s={unversionedId:"server/server-agent-settings",id:"server/server-agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\uc11c\ubc84 \uc5d0\uc774\uc804\ud2b8 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",source:"@site/docs/server/server-agent-setting.mdx",sourceDirName:"server",slug:"/server/server-agent-settings",permalink:"/docs/server/server-agent-settings",draft:!1,editUrl:"undefined/docs/server/server-agent-setting.mdx",tags:[{label:"\uc11c\ubc84",permalink:"/docs/tags/\uc11c\ubc84"},{label:"\uc124\uc815\ud558\uae30",permalink:"/docs/tags/\uc124\uc815\ud558\uae30"}],version:"current",frontMatter:{id:"server-agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\uc11c\ubc84 \uc5d0\uc774\uc804\ud2b8 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["\uc11c\ubc84","\uc124\uc815\ud558\uae30"]},sidebar:"serverSidebar",previous:{title:"\uc124\uce58 \uc810\uac80 \uc0ac\ud56d",permalink:"/docs/server/after-install-server-agent"},next:{title:"\uc5d0\uc774\uc804\ud2b8 \uc774\ub984 \uc2dd\ubcc4",permalink:"/docs/server/server-agent-naming"}},l={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 \uc5d0\uc774\uc804\ud2b8 \ubcc4 \ud544\uc694\ud55c \uc124\uc815\uc744 ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4. \uc5d0\uc774\uc804\ud2b8\ub294 \ud658\uacbd\ubcc0\uc218\ub97c \ud1b5\ud574 \uc124\uc815 \ud30c\uc77c\uc758 \uc704\uce58\ub97c \ud30c\uc545\ud558\uace0 \ub85c\ub529\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);