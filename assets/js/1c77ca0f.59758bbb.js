"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[68413],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(a),k=r,f=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(f,p(p({ref:e},s),{},{components:a})):n.createElement(f,p({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var c=2;c<l;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17325:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={id:"java-agent-httpcapicall",title:"HTTPC, API Call",description:"Java \uc5d0\uc774\uc804\ud2b8\uc758 HTTPC, API Call \uad00\ub828 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["Java","HTTPC","API"]},p=void 0,i={unversionedId:"apm/java-agent-httpcapicall",id:"apm/java-agent-httpcapicall",title:"HTTPC, API Call",description:"Java \uc5d0\uc774\uc804\ud2b8\uc758 HTTPC, API Call \uad00\ub828 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/apm/java-agent-httpcapicall.mdx",sourceDirName:"apm",slug:"/apm/java-agent-httpcapicall",permalink:"/apm/java-agent-httpcapicall",draft:!1,editUrl:"undefined/docs/apm/java-agent-httpcapicall.mdx",tags:[{label:"Java",permalink:"/tags/java"},{label:"HTTPC",permalink:"/tags/httpc"},{label:"API",permalink:"/tags/api"}],version:"current",frontMatter:{id:"java-agent-httpcapicall",title:"HTTPC, API Call",description:"Java \uc5d0\uc774\uc804\ud2b8\uc758 HTTPC, API Call \uad00\ub828 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["Java","HTTPC","API"]},sidebar:"apmSidebar",previous:{title:"DB, SQL",permalink:"/apm/java-agent-dbsql"},next:{title:"Java \uc2a4\ud06c\ub9bd\ud2b8 \ud50c\ub7ec\uadf8\uc778",permalink:"/apm/java-script-plugin"}},o={},c=[],s={toc:c};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Java \uc5d0\uc774\uc804\ud2b8\uc758 HTTPC, API Call \uad00\ub828 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"profile_error_httpc_time_max")," ",(0,r.kt)("span",{class:"type"},"Int"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"10000"),(0,r.kt)("br",null),"\nHTTPC \uc218\ud589 \uc2dc\uac04\uc774 \uc9c0\uc815\ud55c \uac12\uc744 \ucd08\uacfc\ud558\uba74 TOO SLOW \uc5d0\ub7ec\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\uc73c\ub85c \uc124\uc815\ud558\uba74 \uc5d0\ub7ec \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"profile_httpc_resource_enabled")," ",(0,r.kt)("span",{class:"type"},"Boolean"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),(0,r.kt)("br",null),"\n\ud504\ub85c\ud30c\uc77c\uc5d0\uc11c HTTP Call \uc2a4\ud15d\uc744 \uc218\uc9d1\ud560 \ub54c \ud574\ub2f9 \uc2a4\ud15d\uc5d0\uc11c \uc0ac\uc6a9\ud55c CPU\uc640 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc744 \ucd94\uc801\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"profile_position_httpc")," ",(0,r.kt)("span",{class:"type"},"Boolean"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),(0,r.kt)("br",null),"\nHTTPC\uac00 \uc218\ud589\ud558\ub294 \uc2dc\uc810\uc758 StackTrace\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"trace_httpc_normalize_enabled")," ",(0,r.kt)("span",{class:"type"},"Boolean"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),(0,r.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 \ub0b4 HTTPC URL\uc744 \ud30c\uc2f1\ud574 \uc815\uaddc\ud654\ud558\ub294 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"trace_httpc_normalize_urls")," ",(0,r.kt)("span",{class:"type"},"String"),(0,r.kt)("br",null),"\n\uc815\uaddc\ud654\ud560 HTTPC URL \ud328\ud134\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \ud638\ucd9c URL \ud328\ud134\uc744 \ud30c\uc2f1\ud574 \ud328\uc2a4 \ud30c\ub77c\ubbf8\ud130\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\uc608\uc2dc, ",(0,r.kt)("strong",{parentName:"p"},"/a/{v}/b"),"\ub77c\uace0 \uc120\uc5b8\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"a/123/b")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"a/{v}/b"),"\ub85c \uce58\ud658\ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\ub97c \ub4f1\ub85d\ud560 \ub54c\ub294 \uc27c\ud45c(,)\ub97c \uad6c\ubd84\uc790\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uce58\ud658 \ud328\ud134 \uc815\ub9ac \ud6c4 \ubcf4\uc644\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hook_httpc_patterns")," ",(0,r.kt)("span",{class:"type"},"String"),(0,r.kt)("br",null),"\nHTTP Call\uc744 \uc218\ud589\ud558\ub294 \ud074\ub798\uc2a4\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."))))}m.isMDXComponent=!0}}]);