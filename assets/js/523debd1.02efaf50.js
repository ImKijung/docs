"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[40813],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:d,groupId:b,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=h[b];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==w&&(E(t),O(n),null!=b&&N(b,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:P,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},56088:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={id:"log-basics",title:"\uc791\ub3d9 \uc6d0\ub9ac",description:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uc791\ub3d9 \uc6d0\ub9ac\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",tags:["\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1"]},s=void 0,u={unversionedId:"log/log-basics",id:"log/log-basics",title:"\uc791\ub3d9 \uc6d0\ub9ac",description:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uc791\ub3d9 \uc6d0\ub9ac\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",source:"@site/docs/log/log-monitoring-basics.mdx",sourceDirName:"log",slug:"/log/log-basics",permalink:"/docs/log/log-basics",draft:!1,editUrl:"undefined/docs/log/log-monitoring-basics.mdx",tags:[{label:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1",permalink:"/docs/tags/\ub85c\uadf8-\ubaa8\ub2c8\ud130\ub9c1"}],version:"current",frontMatter:{id:"log-basics",title:"\uc791\ub3d9 \uc6d0\ub9ac",description:"\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uc791\ub3d9 \uc6d0\ub9ac\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",tags:["\ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1"]}},c={},p=[],m={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"log-wt-vs",src:a(95817).Z,width:"824",height:"520"})),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \ub85c\uadf8 \ud1b5\ud569 \uc11c\ube44\uc2a4\ub294 \uc218\uc9d1\uae30, \ucc98\ub9ac\uae30, \uc800\uc7a5\uc18c \uadf8\ub9ac\uace0 UI \ubaa8\ub4c8\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8\uacc4\ubcc4 \uc124\uc815\uacfc \uad6c\uc131 \uc791\uc5c5\uc744 \ud544\uc694\ub85c \ud558\uae30\uc5d0 \uac01\uac01\uc758 \ubaa8\ub4c8\uc744 \uad6c\ucd95\ud558\ub294 \uacfc\uc815\uc774 \ubc88\uac70\ub85c\uc6b0\uba70 \ucd94\uac00 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc640\ud0ed \ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1\uc740 \uc801\uc6a9\uc774 \uac04\ub2e8\ud569\ub2c8\ub2e4"),". \uae30\uc874\uc758 \ubaa8\ub2c8\ud130\ub9c1 \uc5d0\uc774\uc804\ud2b8\uac00 \uc218\uc9d1\uae30 \uc5ed\ud560\uc744 \ud558\uae30\uc5d0 \uc5d0\uc774\uc804\ud2b8 ",(0,r.kt)("strong",{parentName:"p"},"\uc635\uc158\uc744 \ucf1c\ub294 \uac83"),"\ub9cc\uc73c\ub85c \ub85c\uadf8 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ucd9c\ub825\ub41c \ud30c\uc77c\uc5d0\uc11c \ub85c\uadf8\ub97c \uc77d\uc9c0 \uc54a\uace0 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub85c\uadf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uc804\ub2ec\ub418\ub294 \ub85c\uadf8\ub97c \uc9c1\uc811 \uc218\uc9d1\ud569\ub2c8\ub2e4.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub85c\uadf8\ub97c \uc9c1\uc811 \uc218\uc9d1\ud558\uae30 \ub54c\ubb38\uc5d0 \ud30c\uc77c I/O\ub97c \uc720\ubc1c\ud558\uc9c0 \uc54a\uc544 \uc2dc\uc2a4\ud15c\uc5d0 \ubbf8\uce58\ub294 \uc131\ub2a5 \uc601\ud5a5\uc774 \ub9e4\uc6b0 \ub0ae\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud2b8\ub79c\uc7ad\uc158 \ud504\ub85c\ud30c\uc77c\uacfc \ub85c\uadf8\uc758 \uc5f0\uacb0 \ucd94\uc801\uc131\uc744 \ud655\ubcf4\ud558\uc5ec \ud504\ub85c\ud30c\uc77c\uc5d0\uc11c \ub85c\uadf8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("admonition",{title:"Java \ub85c\uadf8 \ub77c\uc774\ube0c\ub7ec\ub9ac",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ub300\ud45c\uc801\uc778 Java \ub85c\uadf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 Apache Log4j, Logback")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Java Agent 2.1.0 \ubc84\uc804\ubd80\ud130 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\uc874\uc758 \uc5d0\uc774\uc804\ud2b8\uc5d0 \ub85c\uadf8 \uc218\uc9d1 \uae30\ub2a5\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \ubaa8\ub2c8\ud130\ub9c1 \uc5d0\uc774\uc804\ud2b8\uac00 \ub85c\uadf8 \ud30c\uc77c\uc5d0 \ucd94\uac00\ub85c \ucd9c\ub825\ub41c \ub85c\uadf8\ub97c \uc77d\uc5b4 \uc218\uc9d1\ud558\ub294 \ubc29\uc2dd\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4.  ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"PHP Agent 2.3.2 \ubc84\uc804\ubd80\ud130 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uae30\uc874\uc758 \uc5d0\uc774\uc804\ud2b8\uc5d0 \ub85c\uadf8 \uc218\uc9d1 \uae30\ub2a5\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \ubaa8\ub2c8\ud130\ub9c1 \uc5d0\uc774\uc804\ud2b8\uac00 \ub85c\uadf8 \ud30c\uc77c\uc5d0 \ucd94\uac00\ub85c \ucd9c\ub825\ub41c \ub85c\uadf8\ub97c \uc77d\uc5b4 \uc218\uc9d1\ud558\ub294 \ubc29\uc2dd\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub85c\uadf8\uc5d0 \ud2b8\ub79c\uc7ad\uc158 ID\ub97c \ucd9c\ub825\ud558\uba74, \ud2b8\ub79c\uc7ad\uc158 \ud504\ub85c\ud30c\uc77c\uacfc \ub85c\uadf8\uc758 \uc5f0\uacb0 \ucd94\uc801\uc131\uc744 \ud655\ubcf4\ud558\uc5ec \ud504\ub85c\ud30c\uc77c\uc5d0\uc11c \ub85c\uadf8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Python Agent 1.2.2 \ubc84\uc804\ubd80\ud130 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)(o.Z,{value:"server",label:"Server",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\uc874\uc758 \uc5d0\uc774\uc804\ud2b8\uc5d0 \ub85c\uadf8 \uc218\uc9d1 \uae30\ub2a5\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \ubaa8\ub2c8\ud130\ub9c1 \uc5d0\uc774\uc804\ud2b8\uac00 \ub85c\uadf8 \ud30c\uc77c\uc5d0 \ucd94\uac00\ub85c \ucd9c\ub825\ub41c \ub85c\uadf8\ub97c \uc77d\uc5b4 \uc218\uc9d1\ud558\ub294 \ubc29\uc2dd\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4.   ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Server Agent 2.1.2 \ubc84\uc804\ubd80\ud130 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))))}d.isMDXComponent=!0},95817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/log-wt-vs-b76dfc99259593cff67d676a87cdb57d.svg"}}]);