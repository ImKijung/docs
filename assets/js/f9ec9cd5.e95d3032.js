"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[35255],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,p=function(t,e){if(null==t)return{};var n,a,p={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,p=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=k(n),N=p,c=u["".concat(o,".").concat(N)]||u[N]||s[N]||l;return n?a.createElement(c,r(r({ref:e},m),{},{components:n})):a.createElement(c,r({ref:e},m))}));function N(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:p,r[1]=i;for(var k=2;k<l;k++)r[k]=n[k];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9835:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var a=n(87462),p=(n(67294),n(3905));const l={id:"php-transaction",title:"\ud2b8\ub79c\uc7ad\uc158",description:"PHP \ud2b8\ub79c\uc7ad\uc158\uacfc \uad00\ub828\ub41c \uc124\uc815\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["PHP","\ud2b8\ub79c\uc7ad\uc158","\uc124\uc815\ud558\uae30"]},r=void 0,i={unversionedId:"apm/php-transaction",id:"apm/php-transaction",title:"\ud2b8\ub79c\uc7ad\uc158",description:"PHP \ud2b8\ub79c\uc7ad\uc158\uacfc \uad00\ub828\ub41c \uc124\uc815\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/apm/php-transaction.mdx",sourceDirName:"apm",slug:"/apm/php-transaction",permalink:"/docs/apm/php-transaction",draft:!1,editUrl:"undefined/docs/apm/php-transaction.mdx",tags:[{label:"PHP",permalink:"/docs/tags/php"},{label:"\ud2b8\ub79c\uc7ad\uc158",permalink:"/docs/tags/\ud2b8\ub79c\uc7ad\uc158"},{label:"\uc124\uc815\ud558\uae30",permalink:"/docs/tags/\uc124\uc815\ud558\uae30"}],version:"current",frontMatter:{id:"php-transaction",title:"\ud2b8\ub79c\uc7ad\uc158",description:"PHP \ud2b8\ub79c\uc7ad\uc158\uacfc \uad00\ub828\ub41c \uc124\uc815\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["PHP","\ud2b8\ub79c\uc7ad\uc158","\uc124\uc815\ud558\uae30"]},sidebar:"apmSidebar",previous:{title:"PHP \uc5d0\uc774\uc804\ud2b8 \ub85c\uadf8",permalink:"/docs/apm/php-agent-log"},next:{title:"PHP \uc5d0\uc774\uc804\ud2b8 DB, SQL \uc124\uc815",permalink:"/docs/apm/php-db-sql"}},o={},k=[{value:"\ud2b8\ub79c\uc7ad\uc158 \ud504\ub85c\ud30c\uc77c\ub9c1",id:"\ud2b8\ub79c\uc7ad\uc158-\ud504\ub85c\ud30c\uc77c\ub9c1",level:2},{value:"HTTP \ud2b8\ub79c\uc7ad\uc158 \ucd94\uc801",id:"http-\ud2b8\ub79c\uc7ad\uc158-\ucd94\uc801",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 \ucd94\uc801",id:"\ud2b8\ub79c\uc7ad\uc158-\ucd94\uc801",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 \uc5f0\uacc4 \ucd94\uc801",id:"\ud2b8\ub79c\uc7ad\uc158-\uc5f0\uacc4-\ucd94\uc801",level:2}],m={toc:k};function s(t){let{components:e,...n}=t;return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,p.kt)("a",{parentName:"p",href:"/docs/track-transactions/track-transactions-intro"},"\ub2e4\uc74c \uc124\uba85\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694. \uc608\ub97c \ub4e4\uc5b4 ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("em",{parentName:"strong"},"\ud788\ud2b8\ub9f5")),"\uc744 \ud65c\uc6a9\ud55c \ud2b8\ub79c\uc7ad\uc158 \ubd84\uc11d \uc548\ub0b4\ub294 \ud558\uc704 \uba54\ub274\uc778 ",(0,p.kt)("a",{parentName:"p",href:"../track-transactions/trs-view"},"\ub2e4\uc74c \uc124\uba85\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,p.kt)("h2",{id:"\ud2b8\ub79c\uc7ad\uc158-\ud504\ub85c\ud30c\uc77c\ub9c1"},"\ud2b8\ub79c\uc7ad\uc158 \ud504\ub85c\ud30c\uc77c\ub9c1"),(0,p.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uc131\ub2a5\uc774 \ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791\uacfc \uc885\ub8cc \uc0ac\uc774\uc758 \uc694\uc57d \uc9c0\ud45c\ub4e4\uc774\ub098 \uc18d\uc131\ub4e4\uc744 \uc758\ubbf8\ud55c\ub2e4\uba74 \ud2b8\ub79c\uc7ad\uc158 \ud504\ub85c\ud30c\uc77c\uc740 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc218\ud589\ub418\ub294 \uacfc\uc815 \uc911\uc778 \uc2a4\ud15d\ub4e4\uc744 \ucd94\uc801\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \ub290\ub9ac\uac70\ub098 \uc624\ub958\uac00 \uc788\ub2e4\uba74 \uadf8 \uc6d0\uc778\uc744 \ucd94\uc801\ud558\uae30 \uc704\ud574\uc11c \uc218\ud589 \uc774\ub825\uc744 \uc2a4\ud15d\ubcc4\ub85c \ucd94\uc801\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\uac83\uc744 \ud2b8\ub79c\uc7ad\uc158 \ud504\ub85c\ud30c\uc77c\ub9c1\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc640\ud0ed\uc774 \uc218\uc9d1\ud558\ub294 \uc2a4\ud15d\uc758 \uc885\ub958\uc5d0\ub294 \ud06c\uac8c SQL \uc2a4\ud15d, HTTP CALL \uc2a4\ud15d, \uba54\uc2dc\uc9c0 \uc2a4\ud15d, SOCKET \uc624\ud508 \uc2a4\ud15d, DB \uc5f0\uacb0 \uc2a4\ud15d, \uba54\uc18c\ub4dc \uc2a4\ud15d \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. "),(0,p.kt)("hr",null),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"DB \uc5f0\uacb0 \uc2a4\ud15d"),(0,p.kt)("span",{class:"type"},"START-END"),(0,p.kt)("br",null),"\nRDB\uc5d0 \ub300\ud55c \uc5f0\uacb0\uc5d0 \ub300\ud55c \uc131\ub2a5\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc2a4\ud15d \uc815\ubcf4\uc5d0\ub294 \uc774\ub984, \uc751\ub2f5\uc2dc\uac04, \uc5d0\ub7ec\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"SQL \uc2a4\ud15d"),(0,p.kt)("span",{class:"type"},"START-END"),(0,p.kt)("br",null),"\nJDBC SQL\uc5d0 \ub300\ud55c \uc131\ub2a5\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc2a4\ud15d \uc815\ubcf4\uc5d0\ub294 \uc5f0\uacb0 \uc815\ubcf4, SQL\ubb38, \uc5d0\ub7ec\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"HTTP Call \uc2a4\ud15d"),(0,p.kt)("span",{class:"type"},"START-END"),(0,p.kt)("br",null),"\n\uc678\ubd80 http \uc11c\ube44\uc2a4 \ud638\ucd9c\uc5d0 \ub300\ud55c \uc131\ub2a5\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc2a4\ud15d \uc815\ubcf4\uc5d0\ub294 url, host, port, \uc751\ub2f5\uc2dc\uac04, \uc5d0\ub7ec\uac00 \ud3ec\ud568\ub429\ub2c8\ub2e4."))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Message \uc2a4\ud15d"),(0,p.kt)("span",{class:"type"},"ADD"),(0,p.kt)("br",null),"\n\ud504\ub85c\ud30c\uc77c\uc744 \uc218\uc9d1\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ube44\uc815\ud615\uc801\uc778 \ubaa8\ub4e0 \uad6c\uac04\uc5d0 \ub300\ud55c \uc774\ub825\uc744 \uc218\uc9d1\ud560 \ub54c \uba54\uc2dc\uc9c0 \uc2a4\ud15d\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.  ")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"SOCKET \uc2a4\ud15d"),(0,p.kt)("span",{class:"type"},"ADD"),(0,p.kt)("br",null),"\nSocket \uc624\ud508\uc744 \ud45c\ud604\ud558\ub294 \uc2a4\ud15d\uc785\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"METHOD \uc2a4\ud15d"),(0,p.kt)("span",{class:"type"},"START-END"),(0,p.kt)("br",null),"\n\uba54\uc18c\ub4dc \uc751\ub2f5\uc2dc\uac04\uc744 \ucd94\uc801\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"ACTIVE STATCK \uc2a4\ud15d"),(0,p.kt)("span",{class:"type"},"START-END"),(0,p.kt)("br",null),"\n\uc561\ud2f0\ube0c \uc2a4\ud15d\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \ubcc4\ub3c4 \uc2a4\ub808\ub4dc\uac00 \uc0dd\uc131\ud558\uc5ec \ud504\ub85c\ud30c\uc77c\uc5d0 \ucd94\uac00\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4."))),(0,p.kt)("hr",null),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_step_normal_count"),(0,p.kt)("span",{class:"type"},"Int"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"1000"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 \ud504\ub85c\ud30c\uc77c\uc758 \ucd5c\ub300 \uc2a4\ud15d \uc218\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_step_max_count"),(0,p.kt)("span",{class:"type"},"Int"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"1024"),(0,p.kt)("br",null),"\n\uc218\uc9d1 \uac00\ub2a5\ud55c \ud504\ub85c\ud30c\uc77c \uc2a4\ud15d\uc758 \ucd5c\ub300 \uac1c\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uc218\uc9d1\ub41c \ud504\ub85c\ud30c\uc77c \uc2a4\ud15d \uc218\uac00 \uc774 \uac12\uc744 \ucd08\uacfc\ud558\uba74 \uc774\ud6c4 \uc218\uc9d1\ub418\ub294 \uc2a4\ud15d\ub4e4\uc740 \ubaa8\ub450 \ubc84\ub824\uc9d1\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_step_heavy_count"),(0,p.kt)("span",{class:"type"},"Int"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"1000"),(0,p.kt)("br",null),"\n\uae30\ubcf8 \uc2a4\ud15d\uc758 \uc218\uc9d1 \uac1c\uc218\uac00 \ucd08\uacfc\ub418\uba74, \uc2e4\ud589 \uc2dc\uac04\uc774 profile_step_heavy_time\uc744 \ucd08\uacfc\ud558\ub294 \uc2a4\ud15d\ub9cc \uc218\uc9d1\ud569\ub2c8\ub2e4. \ud574\ub2f9 \uc2a4\ud15d\uc758 \uc218\uc9d1 \uac00\ub2a5\ud55c \uac1c\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. Default \uc124\uc815\uc77c \uacbd\uc6b0 profile_step_normal_count\uac00 800 \uc774\uba74 \ucd5c\ub300 200\uac1c\uc758 \uc2a4\ud15d\uc774 \uc218\uc9d1\ub429\ub2c8\ub2e4."))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_step_heavy_time"),(0,p.kt)("span",{class:"type"},"Millisecond"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"100"),(0,p.kt)("br",null),"\nHeavy \ud55c \uc2a4\ud15d\uc758 \uae30\uc900\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc9c0\uc815\ub41c \uac12\ubcf4\ub2e4 \uc218\ud589 \uc2dc\uac04\uc774 \uae34 \uacbd\uc6b0 profile_step_normal_count\ub97c \ucd08\uacfc\ud558\ub294 \uacbd\uc6b0\ub77c\ub3c4 profile_step_heavy_count \uc774\ub0b4\uc5d0\uc11c \uae30\ub85d\ub429\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_basetime"),(0,p.kt)("span",{class:"type"},"Millisecond"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"500"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158\uc774 \uc124\uc815\ub41c \uac12 \uc774\ud558\uc758 \uc2dc\uac04 \ub0b4\uc5d0 \uc885\ub8cc\ub41c \uacbd\uc6b0 \ud504\ub85c\ud30c\uc77c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e8 5\ubd84 \ub2e8\uc704\ub85c \ucd5c\ucd08 \ud638\ucd9c\ub41c URL, \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \ud504\ub85c\ud30c\uc77c \uc815\ubcf4\ub294 \uc218\uc9d1\ub429\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.query_string_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 URL\uc758 \ucffc\ub9ac \uc2a4\ud2b8\ub9c1\uc744 \ud568\uaed8 \uc218\uc9d1\ud558\ub294 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4. whatap.query_string_urls\uc5d0 \ub4f1\ub85d\ub41c URL\ub9cc \uc801\uc6a9\ub429\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.query_string_urls"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ucffc\ub9ac \uc2a4\ud2b8\ub9c1\uc744 \uc218\uc9d1\ud560 URL\ub4e4\uc744 \ub4f1\ub85d\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.whatap.profile_compile_file_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\ncompile_file, compile_string \ud568\uc218\uc758 \ucd94\uc801 \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. PHP \ub0b4\ubd80 \ud568\uc218\uc778 compile_file, compile_string \ud568\uc218\ub294 \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589 \uc804\uc5d0 \ucef4\ud30c\uc77c\ud558\ub294 \ud568\uc218\ub85c Main, include, require \ubc0f autoload \uc2a4\ud06c\ub9bd\ud2b8\uc758 \ucef4\ud30c\uc77c \uc2dc\uc810\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c \uacbd\ub85c\uc640 \uc2e4\ud589 \uc2dc\uac04\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_compile_file_basetime"),(0,p.kt)("span",{class:"type"},"Millisecond"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"200"),(0,p.kt)("br",null),"\n\uc2e4\ud589 \uc2dc\uac04\uc758 \uae30\uc900\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \uc124\uc815\ud55c \uc2dc\uac04\uc744 \ucd08\uacfc\ud558\uc5ec \uc2e4\ud589\ub418\ub294 \uacbd\uc6b0\ub9cc \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,p.kt)("admonition",{parentName:"li",type:"caution"},(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("inlineCode",{parentName:"p"},"whatap.profile_compile_file_basetime"),"\uc744 \ub108\ubb34 \uc791\uac8c \uc124\uc815\ud560 \uacbd\uc6b0 \ub108\ubb34 \ub9ce\uc774 \uc218\uc9d1\ud558\uac8c \ub418\uc5b4 \uc11c\ubc84\uc5d0 \ubd80\ud558\ub97c \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_method_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),(0,p.kt)("br",null),"\n\uc2e4\ud589 \uc2dc\uac04\uc774 1\ucd08(whatap.profile_method_time)\ub97c \ucd08\uacfc\ud558\ub294 \uc0ac\uc6a9\uc790 \ud568\uc218\uc758 \uc815\ubcf4\ub97c \ud2b8\ub79c\uc7ad\uc158 \uc0c1\uc138 \uc815\ubcf4\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_method_time"),(0,p.kt)("span",{class:"type"},"Milliseconds"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"1000"),(0,p.kt)("br",null),"\nwhatap.profile_method_enabled \uc124\uc815 \uc218\uc9d1\ub418\ub294 \ud568\uc218\uc758 \uc2e4\ud589 \uc2dc\uac04\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_method_stack_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\uc0ac\uc6a9\uc790 \ud568\uc218\uc758 \uc2a4\ud0dd \uc815\ubcf4\ub97c \ud2b8\ub79c\uc7ad\uc158 \uc0c1\uc138 \uc815\ubcf4\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_internal_method_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),(0,p.kt)("br",null),"\nPHP \ub0b4\ubd80 \ud568\uc218\uc758 \ucd94\uc801 \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uc2e4\ud589 \uc2dc\uac04\uc758 \uae30\uc900\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \uc124\uc815\ud55c \uc2dc\uac04\uc744 \ucd08\uacfc\ud558\uc5ec \uc2e4\ud589\ub418\ub294 \uacbd\uc6b0\ub9cc \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4.")))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_internal_method_time"),(0,p.kt)("span",{class:"type"},"Milliseconds"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"1000"),(0,p.kt)("br",null),"\nwhatap.profile_method_enabled \uc124\uc815 \uc218\uc9d1\ub418\ub294 \ud568\uc218\uc758 \uc2e4\ud589 \uc2dc\uac04\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_internal_method_param_enabled"),(0,p.kt)("span",{class:"type"},"Milliseconds"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"1000"),(0,p.kt)("br",null),"\nwhatap.profile_method_enabled \uc124\uc815 \uc218\uc9d1\ub418\ub294 \ud568\uc218\uc758 \uc2e4\ud589 \uc2dc\uac04\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.net_udp_flush_start"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),(0,p.kt)("br",null),"\n\uac12\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\uc774\uba74 \ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791 \uc2dc\uc810\uc744 \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.  "),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\uc2dc\uc791 \uc2dc\uc810\uc744 \uc218\uc9d1\ud558\uc9c0 \uc54a\uc544 \uc9c4\ud589 \uc911\uc778 \ud2b8\ub79c\uc7ad\uc158 \uc218\ub97c \uacc4\uc0b0\ud558\ub294 \uc561\ud2f0\ube0c \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\uc5d0 \uc870\uae08 \ub2a6\uac8c \ubc18\uc601\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc561\ud2f0\ube0c \uc2a4\ud14c\uc774\ud130\uc2a4\ub294 \uc815\uc0c1\uc801\uc73c\ub85c \ud45c\uae30\ub429\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.net_udp_profile_basetime_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\uac12\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 \uc124\uc815\ub41c \uc751\ub2f5\uc2dc\uac04\ubcf4\ub2e4 \ube60\ub978 \ud2b8\ub79c\uc7ad\uc158\uc758 \ud504\ub85c\ud30c\uc77c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.net_udp_profile_basetime"),(0,p.kt)("span",{class:"type"},"Miliseconds"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\ud504\ub85c\ud30c\uc77c \uc815\ubcf4 \uc218\uc9d1\uc744 \uc81c\uc678\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc751\ub2f5\uc2dc\uac04\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\ud504\ub85c\ud30c\uc77c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 SQL, HTTPC \ub4f1\uc758 \ud1b5\uacc4\uc5d0\ub294 \ubc18\uc601\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.net_udp_trace_ignoretime_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\uac12\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 \uc124\uc815\ub41c \uc751\ub2f5\uc2dc\uac04\uc774 \uc18c\uc694\ub418\ub294 \ud2b8\ub79c\uc7ad\uc158 \ubc0f \ud504\ub85c\ud30c\uc77c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.net_udp_trace_ignoretime"),(0,p.kt)("span",{class:"type"},"Miliseconds"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"30"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 \ubc0f \ud504\ub85c\ud30c\uc77c \uc815\ubcf4 \uc218\uc9d1\uc744 \uc81c\uc678\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc751\ub2f5\uc2dc\uac04\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.shm_tx_counter_enable"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\uac12\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 whatap.net_udp_trace_ignoretime_enabled \uc124\uc815\uc73c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc758 \uc815\ubcf4 \uc218\uc9d1\uc774 \uc81c\uc678\ub418\ub294 \uacbd\uc6b0 TPS, \ud3c9\uade0 \uc751\ub2f5\uc2dc\uac04, Apdex \uc9c0\ud45c\ub97c \uacf5\uc720 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc218\uc9d1\ud558\uba74 \uc81c\uc678\ub41c \ud2b8\ub79c\uc7ad\uc158\uc758 \uc815\ubcf4\uac00 \ud1b5\uacc4\uc5d0 \ubc18\uc601\ub429\ub2c8\ub2e4."),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\uc218\uc9d1\uc774 \uc548 \ub41c \ud2b8\ub79c\uc7ad\uc158\uc758 \uacbd\uc6b0 TPS, \ud3c9\uade0 \uc751\ub2f5\uc2dc\uac04, Apdex \uc9c0\ud45c\uc5d0\ub294 \uc815\uc0c1\uc801\uc73c\ub85c \ubc18\uc601\ub418\uc9c0\ub9cc, \uadf8 \uc678 \ud1b5\uacc4 \ub370\uc774\ud130\uc5d0\ub294 \ubc18\uc601\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,p.kt)("h2",{id:"http-\ud2b8\ub79c\uc7ad\uc158-\ucd94\uc801"},"HTTP \ud2b8\ub79c\uc7ad\uc158 \ucd94\uc801"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"whatap.trace_normalize_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"li"},"true"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 URL\uc744 \ubcc0\ud658\ud558\uc5ec \uc77c\ubc18\ud654\ud558\ub294 \uae30\ub2a5\uc744 \ud65c\uc131\ud654 \ud569\ub2c8\ub2e4.")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_normalize_urls"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 URL\uc744 \ubcc0\ud658\ud558\uace0 \uc77c\ubc18\ud654\ud560 \ub300\uc0c1 URL\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \ud638\ucd9c URL\ud328\ud134\uc744 \ubcc0\ud658\ud558\uc5ec \ud328\uc2a4 \ud30c\ub77c\ubbf8\ud130\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.      "),(0,p.kt)("admonition",{parentName:"li",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\uc608\uc2dc, ",(0,p.kt)("strong",{parentName:"p"},"/a/{v}/b")," \ub77c\uace0 \uc124\uc815\ud558\uba74 \ud574\ub2f9 \ud615\uc2dd\uc73c\ub85c \ud638\ucd9c\ub418\ub294 \ud2b8\ub79c\uc7ad\uc158 URL\uc740 ",(0,p.kt)("strong",{parentName:"p"},"/a/{v}/b")," \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\ub97c \ub4f1\ub85d\ud560 \ub54c\ub294 \ucf64\ub9c8(,)\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_ignore_url_set"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"0"),(0,p.kt)("br",null),"\n\ud2b9\uc815 URL\uc744 \uc124\uc815\ud558\uba74 \ud2b8\ub79c\uc7ad\uc158 \ucd94\uc801 \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678\ub429\ub2c8\ub2e4. \uc124\uc815\ub41c URL\uc740 \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uc9c0 \uc54a\uc544, \ud2b8\ub79c\uc7ad\uc158 \ubaa9\ub85d\uc5d0\uc11c \ud655\uc778\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \ucd94\uc801 \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678\ud560 URL\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\ub97c \uc9c0\uc815\ud560 \uacbd\uc6b0 \ucf64\ub9c8(,)\ub85c \uad6c\ubd84\ud569\ub2c8\ub2e4."))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_ignore_url_prefix"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"0"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 \ucd94\uc801 \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678\ud560 URL prefix\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_http_header_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\ud504\ub85c\ud30c\uc77c \ub0b4\uc5ed\uc5d0 http \ud5e4\ub354 \uc815\ubcf4\ub97c \uae30\ub85d\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_http_header_ignore_keys"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"host,accept,user-agent,referer, accept-language, connection"),(0,p.kt)("br",null),'\nHTTP Header \uc774\ub984\uc744 \uc9c0\uc815\ud574 \uc218\uc9d1 \uc815\ubcf4\uc5d0\uc11c \uc81c\uc678\ud558\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \uc9c0\uc815\ub41c HTTP Header \uc774\ub984\uc758 \uac12\uc740 \uc218\uc9d1\uc5d0\uc11c \uc81c\uc678\ub418\uba70, "#"\uc73c\ub85c \ud45c\uae30\ub429\ub2c8\ub2e4.')),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_http_parameter_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\ud504\ub85c\ud30c\uc77c \ub0b4\uc5ed\uc5d0 http \ud30c\ub77c\ubbf8\ud130 \uc815\ubcf4\ub97c \uae30\ub85d\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud30c\ub77c\ubbf8\ud130\ub294 \ubcc4\ub3c4 \ubcf4\uc548\ud0a4\ub97c \uc785\ub825\ud574\uc57c \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",{parentName:"li"},"  Get, Post \ud30c\ub77c\uba54\ud130 \uc911 text \ud0c0\uc785\uc758 \uc774\ub984\uacfc \uac12\uc744 \uc218\uc9d1\ud569\ub2c8\ub2e4. \ucd5c\ub300 40\uac1c(Get 20\uac1c, Post 20\uac1c) \ub97c \uc218\uc9d1\ud558\uba70 \ud30c\ub77c\uba54\ud130 \uc774\ub984\uacfc \uac12\uc740 \ucd5c\ub300 256 byte \uae4c\uc9c0 \uc218\uc9d1\ub429\ub2c8\ub2e4."),(0,p.kt)("p",{parentName:"li"},"  \ud30c\ub77c\uba54\ud130 \uc815\ubcf4\ub294 \ubcc4\ub3c4 \uc554\ud638\ud654\ub418\uc5b4 \uc804\uc1a1\ub418\uba70, \ud574\ub2f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc758 ",(0,p.kt)("em",{parentName:"p"},"/usr/whatap/php/paramkey.txt")," \uc5d0 \uc788\ub294 \ud0a4\ub85c \ubcf5\ud638\ud654\ud558\uc5ec \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_http_parameter_url_prefix"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"/"),(0,p.kt)("br",null),"\n\ud504\ub85c\ud30c\uc77c \ub0b4\uc5ed\uc5d0 http \ud30c\ub77c\ubbf8\ud130 \uc815\ubcf4\ub97c \uae30\ub85d\ud560 \ub300\uc0c1 URL\uc758 prefix\ub97c \uc815\uc758 \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.profile_http_host_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158\uc758 Host \uc815\ubcf4\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4. \uac12\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\uc77c \uacbd\uc6b0 \ud2b8\ub79c\uc7ad\uc158\uc758 URL\uc5d0 URI\ub9cc \ud45c\uae30\ud558\uace0, ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"/xxx.aaa.com/URL")," \ud615\uc2dd\uc73c\ub85c \ucd9c\ub825\ub429\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.biz_exceptions"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"Empty"),(0,p.kt)("br",null),"\n\ud2b9\uc815 Error \ub610\ub294 Exception\uc744 Business Exception\uc73c\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4. \ud788\ud2b8\ub9f5\uc5d0\uc11c\ub294 \uc5d0\ub7ec\ub85c \ud45c\uae30\ub418\uc9c0 \uc54a\uace0 \ud1b5\uacc4 \uc815\ubcf4\uc5d0\ub9cc \uc218\uc9d1\ub429\ub2c8\ub2e4. \uc218\uc9d1\ub418\ub294 Error Class \uba85\uacfc \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ud569\ub2c8\ub2e4. \ucf64\ub9c8\ub97c \uad6c\ubd84\uc790\ub85c \ud558\uc5ec \uc5ec\ub7ec \uac1c\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.ignore_exceptions"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\ubb34\uc2dc\ud560 Exception\uc744 \ub4f1\ub85d\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \ub4f1\ub85d\ub418\uba74 \uc5d0\ub7ec \uc790\uccb4\uac00 \ubb34\uc2dc\ub429\ub2c8\ub2e4. "),(0,p.kt)("p",{parentName:"li"},"  Exception\uc758 \uacbd\uc6b0 Custom Exception Class\uac00 \uc815\uc758\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\uba74, \uae30\ubcf8\uc73c\ub85c Exception\uc73c\ub85c \uc218\uc9d1\ub429\ub2c8\ub2e4. \ud2b9\uc815 Exception\uc744 \uad6c\ubd84\ud558\uae30 \uc704\ud574\uc11c\ub294 Custom Exception Class\ub97c \uc815\uc758\ud558\uace0 \ud574\ub2f9 \uc774\ub984\uc744 \uc9c0\uc815\ud558\uba74 \uc81c\uc678\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,p.kt)("h2",{id:"\ud2b8\ub79c\uc7ad\uc158-\ucd94\uc801"},"\ud2b8\ub79c\uc7ad\uc158 \ucd94\uc801"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_active_transaction_slow_time"),(0,p.kt)("span",{class:"type"},"Millisecond"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"3000"),(0,p.kt)("br",null),"\n\uc218\uc9d1 \uc815\ubcf4\ub97c \ud655\uc778\ud558\ub294 \ub300\uc2dc\ubcf4\ub4dc\uc758 \uc561\ud2f0\ube0c \ud2b8\ub79c\uc7ad\uc158 \uc544\ud06c \uc774\ud004\ub77c\uc774\uc800 \uadf8\ub798\ud504\uc5d0\uc11c Slow \uad6c\uac04\uc73c\ub85c \ud45c\uae30\ub420 \uc218 \uc788\ub294 \ud2b8\ub79c\uc7ad\uc158 \uc751\ub2f5 \uc2dc\uac04\uc758 \uae30\uc900\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc758 \uc751\ub2f5\uc2dc\uac04\uc774 \uc9c0\uc815 \uc2dc\uac04\uc744 \ucd08\uacfc\ud560 \uacbd\uc6b0 Slow \uc561\ud2f0\ube0c \ud2b8\ub79c\uc7ad\uc158\uc758 \uac1c\uc218\uc5d0 \ud3ec\ud568\ub429\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_active_transaction_very_slow_time"),(0,p.kt)("span",{class:"type"},"Millisecond"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"8000"),(0,p.kt)("br",null))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_active_transaction_lost_time"),(0,p.kt)("span",{class:"type"},"Millisecond"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"30000"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158\uc758 \uc885\ub8cc\ub97c \uae30\ub2e4\ub9ac\ub294 \uc81c\ud55c \uc2dc\uac04 5\ubd84 \uc548\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub05d\ub098\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc815\ubcf4\ub97c \ub354 \uc774\uc0c1 \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc758 \ud504\ub85c\ud30c\uc77c \uc815\ubcf4\uc5d0\uc11c \u201cLost Connection\u201d\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_useragent_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\uac12\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc720\uc800 \uc5d0\uc774\uc804\ud2b8 \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. ")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.trace_referer_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\uac12\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 \ud2b8\ub79c\uc7ad\uc158\uc758 Refere \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."))),(0,p.kt)("h2",{id:"\ud2b8\ub79c\uc7ad\uc158-\uc5f0\uacc4-\ucd94\uc801"},"\ud2b8\ub79c\uc7ad\uc158 \uc5f0\uacc4 \ucd94\uc801"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.mtrace_enabled"),(0,p.kt)("span",{class:"type"},"Boolean"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),(0,p.kt)("br",null),"\n\ud2b8\ub79c\uc7ad\uc158 \uc5f0\uacc4 \ucd94\uc801 \uae30\ub2a5(MTID) \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. MTID\ub97c \ucd94\uc801\ud558\uba74 \ub4f1\ub85d\ub41c \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac04\uc758 \ud638\ucd9c\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.mtrace_rate"),(0,p.kt)("span",{class:"type"},"Percentage"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"10"),(0,p.kt)("br",null),"\n\ucd5c\ucd08 \ud2b8\ub79c\uc7ad\uc158\uc774 \ubc1c\uc0dd\ud560 \ub54c \ubc1c\uae09\ubc1b\ub294 MTID(Multi Transaction ID)\uc758 \ubc1c\uae09\ube44\uc728\uc744 \uc124\uc815\ud558\ub294 \uc635\uc158\uc785\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.mtrace_poid_key"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"x-wtap-po"),(0,p.kt)("br",null),"\nMTID \ucd94\uc801\uc5d0 \uc0ac\uc6a9\ud560 Caller \ud504\ub85c\uc81d\ud2b8 \uc815\ubcf4\ub97c \uc804\ub2ec\ud560 Key Name\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.mtrace_caller_key"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"x-wtap-mst"),(0,p.kt)("br",null),"\nMTID \ucd94\uc801\uc5d0 \uc0ac\uc6a9\ud560 Caller Key Name\uc744 \uc815\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.mtrace_callee_key"),(0,p.kt)("span",{class:"type"},"String"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"x-wtap-tx"),(0,p.kt)("br",null),"\nMTID \ucd94\uc801\uc5d0 \uc0ac\uc6a9\ud560 Callee Key Name\uc744 \uc815\ud569\ub2c8\ub2e4.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"whatap.mtrace_send_url_length"),(0,p.kt)("span",{class:"type"},"Int"),(0,p.kt)("br",null),"\n\uae30\ubcf8\uac12 ",(0,p.kt)("inlineCode",{parentName:"p"},"80"),(0,p.kt)("br",null),"\nHttp Caller\ub294 Callee\uc5d0\uac8c \uc790\uc2e0\uc758 URL\uc744 \ub118\uaca8\uc90d\ub2c8\ub2e4. \uc774\ub54c URL \uae38\uc774\ub97c \uc81c\ud55c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."))))}s.isMDXComponent=!0}}]);