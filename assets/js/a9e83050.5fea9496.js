"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[16505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,d=u["".concat(i,".").concat(k)]||u[k]||s[k]||p;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const p={id:"php-control-function",title:"PHP \uc5d0\uc774\uc804\ud2b8 \uae30\ub2a5 \uc81c\uc5b4",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc758 \uae30\ub2a5\uc744 \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["PHP","\uae30\ub2a5 \uc81c\uc5b4","\uc124\uc815\ud558\uae30"]},l=void 0,o={unversionedId:"apm/php-control-function",id:"apm/php-control-function",title:"PHP \uc5d0\uc774\uc804\ud2b8 \uae30\ub2a5 \uc81c\uc5b4",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc758 \uae30\ub2a5\uc744 \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/apm/php-control-function.mdx",sourceDirName:"apm",slug:"/apm/php-control-function",permalink:"/docs/apm/php-control-function",draft:!1,editUrl:"undefined/docs/apm/php-control-function.mdx",tags:[{label:"PHP",permalink:"/docs/tags/php"},{label:"\uae30\ub2a5 \uc81c\uc5b4",permalink:"/docs/tags/\uae30\ub2a5-\uc81c\uc5b4"},{label:"\uc124\uc815\ud558\uae30",permalink:"/docs/tags/\uc124\uc815\ud558\uae30"}],version:"current",frontMatter:{id:"php-control-function",title:"PHP \uc5d0\uc774\uc804\ud2b8 \uae30\ub2a5 \uc81c\uc5b4",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc758 \uae30\ub2a5\uc744 \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["PHP","\uae30\ub2a5 \uc81c\uc5b4","\uc124\uc815\ud558\uae30"]},sidebar:"apmSidebar",previous:{title:"PHP \uc5d0\uc774\uc804\ud2b8 \uc774\ub984 \uc2dd\ubcc4",permalink:"/docs/apm/php-agent-name"},next:{title:"PHP \uc5d0\uc774\uc804\ud2b8 \ud1b5\uc2e0 \uc124\uc815",permalink:"/docs/apm/php-agent-com"}},i={},c=[],m={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PHP \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc758 \uae30\ub2a5\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"whatap.stat_enabled"),(0,r.kt)("span",{class:"type"},"Boolean"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),(0,r.kt)("br",null),"\n\ud1b5\uacc4\uc815\ubcf4 \ucd94\uc801 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4. 5\ubd84 \ub2e8\uc704\ub85c \uc218\uc9d1\ub418\ub294 \ud2b8\ub79c\uc7ad\uc158, SQL, HTTPCALL, UserAgent, Client IP \ub4f1\uc758 \ud1b5\uacc4 \ub370\uc774\ud130 \ub4f1\uc774 \ud574\ub2f9\ub429\ub2c8\ub2e4.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"whatap.license"),(0,r.kt)("span",{class:"type"},"String"),(0,r.kt)("br",null),"\n\uc5d0\uc774\uc804\ud2b8\ub97c \uc124\uce58\ud560 \ub54c \uc11c\ubc84\ub85c\ubd80\ud130 \ubd80\uc5ec\ubc1b\uc740 \ub77c\uc774\uc120\uc2a4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. \ub77c\uc774\uc120\uc2a4\uc5d0\ub294 \uc5d0\uc774\uc804\ud2b8\uac00 \uc18d\ud55c \ud504\ub85c\uc81d\ud2b8\uc640 \ubcf4\uc548 \ud1b5\uc2e0\uc744 \uc704\ud55c \uc554\ud638 \ud0a4\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"whatap.realtime_user_thinktime_max"),(0,r.kt)("span",{class:"type"},"Milliseconds"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"300000"),(0,r.kt)("br",null),"\n\uc2e4\uc2dc\uac04 \uc0ac\uc6a9\uc790\ub97c \uce21\uc815\ud560 \ub54c \ub3d9\uc77c \uc0ac\uc6a9\uc790\ub85c \uc778\uc815\ub418\ub294 \ucd5c\ub300 \ud638\ucd9c \uac04\uaca9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"whatap.time_sync_interval_ms"),(0,r.kt)("span",{class:"type"},"Milliseconds"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"300000"),(0,r.kt)("br",null),"\n\uc5d0\uc774\uc804\ud2b8\uc640 \uc11c\ubc84 \uac04 \uc2dc\uac04 \ub3d9\uae30\ud654 \uc8fc\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. \ub3d9\uae30\ud654\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 0\uc73c\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"whatap.text_reset"),(0,r.kt)("span",{class:"type"},"Int"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),(0,r.kt)("br",null),"\n\uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 \ud55c\ubc88 \ubcf4\ub0b8 \ud14d\uc2a4\ud2b8 \uc720\ud615 \ub370\uc774\ud130\ub294 hash \ucc98\ub9ac\ub418\ubbc0\ub85c \ub2e4\uc74c\ub0a0\uae4c\uc9c0 \ub2e4\uc2dc \uc804\uc1a1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\uc804 \uc124\uc815\uac12\uacfc \ub2e4\ub978 \uac12\uc744 \uc124\uc815\ud558\ub294 \uacbd\uc6b0 \ub2e4\uc2dc \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ud2b8\ub79c\uc7ad\uc158 URL, SQL String \ub4f1\uc774 \ud14d\uc2a4\ud2b8 \uc720\ud615 \ub370\uc774\ud130\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"whatap.ext.error_enabled"),(0,r.kt)("span",{class:"type"},"Boolean"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),(0,r.kt)("br",null),"\nPHP \ud655\uc7a5 \ubaa8\ub4c8(PHP Extension module)\uc5d0\uc11c \uc624\ub958(Error) \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uae30\ub2a5\uc744 \ud65c\uc131\ud654 \ud569\ub2c8\ub2e4. PHP \ucef4\ud30c\uc77c \uc124\uce58\ub85c ",(0,r.kt)("em",{parentName:"p"},"php.ini"),"\uc5d0 whatap \ud56d\ubaa9\uc774 \uc788\uc73c\uba74 ",(0,r.kt)("em",{parentName:"p"},"whatap.ini"),"\uac00 \uc544\ub2cc ",(0,r.kt)("em",{parentName:"p"},"php.ini"),"\uc5d0 \ucd94\uac00\ud558\uc138\uc694."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"whatap.ext.exception_enabled"),(0,r.kt)("span",{class:"type"},"Boolean"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),(0,r.kt)("br",null),"\nPHP \ud655\uc7a5 \ubaa8\ub4c8(PHP Extension module)\uc5d0\uc11c \uc608\uc678 \ucc98\ub9ac(Exception) \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4. PHP \ucef4\ud30c\uc77c \uc124\uce58\ub85c ",(0,r.kt)("em",{parentName:"p"},"php.ini"),"\uc5d0 whatap \ud56d\ubaa9\uc774 \uc788\uc73c\uba74 ",(0,r.kt)("em",{parentName:"p"},"whatap.ini"),"\uac00 \uc544\ub2cc ",(0,r.kt)("em",{parentName:"p"},"php.ini"),"\uc5d0 \ucd94\uac00\ud558\uc138\uc694."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"whatap.debug_gc_percent"),(0,r.kt)("span",{class:"type"},"Int"),(0,r.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),(0,r.kt)("br",null),"\nwhatap-php \uc11c\ube44\uc2a4 \ub370\ubaac\uc758 gc \ud638\ucd9c \uac04\uaca9\uc744 \ub298\ub824\uc11c CPU \ubd80\ud558\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. CPU \ubd80\ud558\uac00 \uc904\uc5b4\ub4dc\ub294 \ub300\uc2e0 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \ub298\uc5b4\ub0a9\ub2c8\ub2e4. \ucd5c\ub300 1000\uae4c\uc9c0 \uc801\uc6a9\ub429\ub2c8\ub2e4."))))}s.isMDXComponent=!0}}]);