"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[70280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>A});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(r),A=n,k=u["".concat(s,".").concat(A)]||u[A]||c[A]||i;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function A(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>A});var a=r(87462),n=r(67294),i=r(86010),l=r(72389),o=r(67392),s=r(7094),m=r(12466);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:r,block:l,defaultValue:u,values:A,groupId:k,className:N}=e,d=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=A??d.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=d.find((e=>e.props.default)))?void 0:t.props.value)??d[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:E}=(0,s.U)(),[I,w]=(0,n.useState)(h),R=[],{blockElementScrollPositionUntilNextRender:Z}=(0,m.o5)();if(null!=k){const e=v[k];null!=e&&e!==I&&g.some((t=>t.value===e))&&w(e)}const M=e=>{const t=e.currentTarget,r=R.indexOf(t),a=g[r].value;a!==I&&(Z(t),w(a),null!=k&&E(k,String(a)))},y=e=>{var t;let r=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;r=R[t]??R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;r=R[t]??R[R.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},N)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>R.push(e),onKeyDown:y,onClick:M},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":I===t})}),r??t)}))),r?(0,n.cloneElement)(d.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},d.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function A(e){const t=(0,l.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},39145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));r(65488),r(85162);const i={id:"server-windows",title:"Windows",description:"Windows \ud658\uacbd\uc5d0\uc11c \uc640\ud0ed \uc11c\ubc84 \ubaa8\ub2c8\ud130\ub9c1 \uc5d0\uc774\uc804\ud2b8\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["\uc11c\ubc84","\uc124\uce58\ud558\uae30","Windows"]},l=void 0,o={unversionedId:"server/server-os/server-windows",id:"server/server-os/server-windows",title:"Windows",description:"Windows \ud658\uacbd\uc5d0\uc11c \uc640\ud0ed \uc11c\ubc84 \ubaa8\ub2c8\ud130\ub9c1 \uc5d0\uc774\uc804\ud2b8\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/server/server-os/sv-windows.mdx",sourceDirName:"server/server-os",slug:"/server/server-os/server-windows",permalink:"/docs/server/server-os/server-windows",draft:!1,editUrl:"undefined/docs/server/server-os/sv-windows.mdx",tags:[{label:"\uc11c\ubc84",permalink:"/docs/tags/\uc11c\ubc84"},{label:"\uc124\uce58\ud558\uae30",permalink:"/docs/tags/\uc124\uce58\ud558\uae30"},{label:"Windows",permalink:"/docs/tags/windows"}],version:"current",frontMatter:{id:"server-windows",title:"Windows",description:"Windows \ud658\uacbd\uc5d0\uc11c \uc640\ud0ed \uc11c\ubc84 \ubaa8\ub2c8\ud130\ub9c1 \uc5d0\uc774\uc804\ud2b8\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["\uc11c\ubc84","\uc124\uce58\ud558\uae30","Windows"]},sidebar:"serverSidebar",previous:{title:"Linux \ubc0f Unix",permalink:"/docs/server/server-os/server-linux"},next:{title:"\uc11c\ubc84 \ucef4\ud4e8\ud130 \uc774\uc678\uc758 \uacbd\uc6b0",permalink:"/docs/server/server-os/server-other"}},s={},m=[],p={toc:m};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\uc2e0\uaddc \uc0dd\uc131\ud55c \uc11c\ubc84 \ubaa8\ub2c8\ud130\ub9c1 \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud558\uba74 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\uc5d0\uc774\uc804\ud2b8 \uc124\uce58"))," \ud654\uba74\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\uad00\ub9ac"))," > ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\uc5d0\uc774\uc804\ud2b8 \uc124\uce58"))," \uba54\ub274\ub97c \ud1b5\ud574\uc11c\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(14721).Z,width:"1021",height:"1165"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc5d0\uc774\uc804\ud2b8 \ud30c\uc77c"),"\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc138\uc694.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\uad00\ub9ac"))," > ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\uc5d0\uc774\uc804\ud2b8 \uc124\uce58")),"  \ud654\uba74 \uc0c1\ub2e8 \uc601\uc5ed\uc758 ",(0,n.kt)("img",{alt:"number-s",src:r(84657).Z,width:"35",height:"35"})," OS \ud0ed\uc5d0\uc11c \uc11c\ubc84 OS\ub97c \uc120\ud0dd\ud558\uc138\uc694. ",(0,n.kt)("img",{alt:"number-s",src:r(71540).Z,width:"35",height:"35"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\uc124\uce58 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc"))," \ud0ed\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"whatap_infra.exe"))," \ud639\uc740 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"whatap_infra.zip"))," \ubc84\ud2bc\uc744 \uc120\ud0dd\ud574 \uc5d0\uc774\uc804\ud2b8 \uc124\uce58 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud558\uc138\uc694.  "),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\ubcf4\uc548 \uc124\uc815\uc73c\ub85c \uc778\ud574 .exe \ud615\uc2dd\uc758 \ud30c\uc77c\uc774 \ubc1b\uc544\uc9c0\uc9c0 \uc54a\ub294 \uc0ac\uc6a9\uc790\ub97c \uc704\ud574 .zip \ud615\uc2dd\uc758 \ud30c\uc77c\ub3c4 \ud568\uaed8 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \ubcf4\uc548\uc744 \uc704\ud574 \ube0c\ub77c\uc6b0\uc800\ub97c \ud1b5\ud55c \uc9c1\uc811 \uc124\uce58 \ubcf4\ub2e4 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc740 \uc124\uce58 \ud30c\uc77c\uc744 \uc2e4\ud589\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1 \uc11c\ubc84\uc5d0 \uc811\uc18d\ud574 ",(0,n.kt)("strong",{parentName:"p"},"\uc5d0\uc774\uc804\ud2b8 \ud30c\uc77c"),"\uc744 \uc5c5\ub85c\ub4dc \ud558\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uce58 \ud30c\uc77c"),"\uc744 \ub450 \ubc88 \ud074\ub9ad\ud574 \uc2e4\ud589\ud558\uc138\uc694.  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"number-s",src:r(52581).Z,width:"35",height:"35"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\uc124\uce58 \ud30c\uc77c \uc2e4\ud589"))," \ud0ed\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \ubc1c\uae09\ubc1b\uc740 \ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4\uc640 \uc11c\ubc84 IP\ub97c \ud655\uc778\ud558\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud654\uba74\uc758 \uc548\ub0b4\uc5d0 \ub530\ub77c ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"License Key"))," \ud56d\ubaa9\uc5d0\ub294 \ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4\ub97c, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"WhaTap IP"))," \ud56d\ubaa9\uc5d0\ub294 \uc640\ud0ed \uc11c\ubc84\uc758 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://img.whatap.io/media/user_guide_server/management/1230.png",alt:null}),"  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Next"))," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc74c \ud654\uba74\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Install"))," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694. \uc124\uce58\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Finish"))," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574 \uc124\uce58\ub97c \uc644\ub8cc\ud558\uc138\uc694."))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\uc11c\ubc84 \uc5d0\uc774\uc804\ud2b8 \ud30c\uc77c \uad6c\uc131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uacf5\ud1b5 \ud30c\uc77c"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ChangeLog.txt"),(0,n.kt)("br",{parentName:"li"}),"\uc5d0\uc774\uc804\ud2b8 \ubcc0\uacbd \ub0b4\uc5ed\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"whatap.conf"),(0,n.kt)("br",{parentName:"li"}),"\uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud560 \uc11c\ubc84\uc758 \uc8fc\uc18c\uc640 \uc11c\ubc84\uc758 \ud504\ub85c\uc81d\ud2b8 \ub77c\uc774\uc13c\uc2a4 \ud0a4\uac00 \uc785\ub825\ub418\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4.   "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Windows"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"whatap_infra.exe"),(0,n.kt)("br",{parentName:"li"}),"\ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \uc804\uc1a1\uc6a9 \uc5d0\uc774\uc804\ud2b8\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"unins000.*"),(0,n.kt)("br",{parentName:"li"}),"\uc5d0\uc774\uc804\ud2b8 \uc0ad\uc81c \ud30c\uc77c\uc785\ub2c8\ub2e4. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"whatap.ico"),(0,n.kt)("br",{parentName:"li"}),"\uc640\ud0ed \uc778\ud504\ub77c\uc758 \uc544\uc774\ucf58 \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4.     "))))))}c.isMDXComponent=!0},84657:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjODRiZmViOC1hODNlLTQ1NTctYWI0Zi04NDdlMWMwZDkyM2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzE1QkREQjE0RTk5MTFFREE0OThDMDE2REJBMzkyN0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzE1QkREQjA0RTk5MTFFREE0OThDMDE2REJBMzkyN0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjODRiZmViOC1hODNlLTQ1NTctYWI0Zi04NDdlMWMwZDkyM2UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+w2TwTAAAAj1JREFUeNpi/HmYgRQgBcReQGwHxDpALAfEQkD8H4jfA/FDIL4KxAeBeBsQPyfFcEYiHeMIxGVA7ArEzESa/ReIdwBxN9RxBAETAXkVIN4JxPuA2IMEhzBA1XoD8QEg3grEypQ4JgGILwCxGwPlABS1F4E4llTHMAJxCxDPB2JuBuoBkFmLgLgOlwIWLGJtQFzBQDvQCKWbCIVMHI0dguygKHy5SQUar1wM9AGfgVgfiO9jC5mpdHQICPAC8WRs0eREbq7J72VgYLdF4F0nSNIOyvq26I4pIccha4Glz4wNFIdQKbJjpEgNla8/GBgaZgNTYD1VossTiMVgWdub2JL1/jMGhnM3qOYI5OIF5KCFIIY9MTpeAatBjXCaJWYHkGNA0aRNrgmhjlRzjBYszciTqlMVmMoOTAOWkF5Uc4wiLL74SQmJQGCABjtB+CRmY0JlDta6CSsQE2RgWNJE21IQFE0fGAYefIY55tEgcMx9mGMuDwLHXIU55tAgcMwBmGNA7dM/A+iQ39CGO9gxoO7ErgF0DCgwXiHX2l0D6Jge9CbEQVhQ0RlsBuKjuJqd54GYh04O+QTEBrianXeAOJNODgF1h9ORHYKtd7AEqStBS1AFxCuI6cQ10NBBoBCpAeIOUrq3IAfFAPEXKqeRCCBuJaevvRSawLZRKdeAzFpFySjEXWgbGTQes4XEkhpUsm4EYmsg9kNPrJSMz8CbNdARBXtoc1UB1jCCNgPuQyu9A9By6xUtBovoAgACDADvMXSExCNYaAAAAABJRU5ErkJggg=="},71540:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NWUyMzBiZi0xMjg5LTQ4NTItYTc2Ni1kNTY3OGVmN2RlYTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzE1QkREQjU0RTk5MTFFREE0OThDMDE2REJBMzkyN0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzE1QkREQjQ0RTk5MTFFREE0OThDMDE2REJBMzkyN0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NWUyMzBiZi0xMjg5LTQ4NTItYTc2Ni1kNTY3OGVmN2RlYTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iIOKuAAAAulJREFUeNq8mEloU1EUhk8cQNBKu2igXShRu7HUAVwUh1hdOKBoRYI4LNwlUMSFSrWKVtEq7cYBpSCoCy1KEYsaaxda64CChQarBdFai6CigjgUlCL6H3OvfUlefOcm770D3yL3vXv4c4f/nvsCP++RSRSD5WAhKAchMF49GwIDoBfcBe3gk0nygFDMXLADrABjhbmHwXXQCB5JOoxyeD4FXAMPQLWBEFLvrgEPQRuYnI+YDSABVlL+sRo8AZFcxOwFF0ABuRcTwSWw20TMPrCfvIkAOAh2SsRsAvXkfTTYTZl1N00DPWAC+RNfwSxlB39jjOXhcRMhl2/DTCC9uS21vawUcxwlWjCbKFjkuIaOqsWdMjJh0CURMfSDKIpBbu10frf7HFHFVMfX5ivr+LdmaqUjcvqKTAjHnM1EHz47vrbduoBLwFJJck5ceyq1LbKI6M1VIh7hFps9GL/vmJZdPajF8I/REjGJ55ltNZGRtbF2cXLNWGPwvcipl2kxYekUlRQn/32seqRtRtn/+xTKtkSV3k0VUjG8GBkegWPbMp+fxSn24m1q2/SQKHW5HplJbpgGC4k1pv1duMiSSlH3kB6ZwnxE8FavO2nvN827xGkK0k3POAYwJbHDRHcSmSPCQkKlZvlYzBdQZCqktz/pI+nBi7uhBuXfOKN037SYQVMx2YTwTuPFncsgazFP1YFFUuNbX5ez9WeLPi2mS5UOojh0JnP7auu3NRD8zY4Tjmk79daOg1/S6UnfNS4EF+43tZh3oEPSq7vPk7rmBs++9dRukvS69dgTMU12lV67PrB8DL4GrbKrgbeoW6FfwWXn1mwF+Uv2LJ+E/AZRa/1rdzs47+E1xRrsVBcl96Z6dXfyakT2gCMmN8oDYCP47vIaWce+mctdu0UdE3EXhKBKppmgNZ+vEP3q4h9WCYcNnZX9ep66G7126/uMjqDyoirLxyJd5fKUvgLP1HnHvvXRi49FvsQfAQYAqHqrUhrPiVEAAAAASUVORK5CYII="},52581:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyM2M4MWQwZS05MDMzLTQ2ZWEtYjczNC1lZWY3NjRjZTg4NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzE1QkREQjk0RTk5MTFFREE0OThDMDE2REJBMzkyN0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzE1QkREQjg0RTk5MTFFREE0OThDMDE2REJBMzkyN0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyM2M4MWQwZS05MDMzLTQ2ZWEtYjczNC1lZWY3NjRjZTg4NjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eB22PQAAAwVJREFUeNrMmFtIFGEUx89aUdCFekjIIFoqCDTaHoKKMi2oTbMLUUaJ4EssXeghjFoqu4CC0UNEYdhDaGxBRBJ5KcgWK+1R6PJSIRVU2IOkSUVF/Y/7fens7O6czxmHDvwenJ05/ud855zvfBP48Yj+GxtveH82KAIFIBfMBdPAHzAAesALEAetoNfEeUAYmVXgMAgbvMBP0AJqQafkgSyH3+eBZtABNhpGcgLYDJ6AOyDoRsxu0K2Wxa2VKF87RiPmFLgGpniYn5xbN8AxEzGnwYkxKpgAOAOOSMSUgeM+VHE12JmpmuardZ3sU1vpByHVDmx95oKJkPtPUa/PiGoarNcjW4jylxBtWyPKofNgU3JkuIk9lIgY/E4UvUhU15T5vu2FRJejeLtJji5XqvL/lzOV0oicbXQWwnYTr1Z/W+SycmQCzwLrJU/1fLAvSwxNgKP7Hm2tIGT97UqTSEyR2maGxBSDcdLI8D9neBkW5AznRvYMoj1brfe+gvjePlGnDusEzpcKCeYkYEuVoP2D1r9ZLIsUGOdsA0dmkRd12oXKitRarx0qEz+eqyMzx40IzqOFpfbrXOIVJWI3QZ0z092I+fotRcxDiV7DbUBoU0czXNns42f7tXh3As6Z9jpx3gxF5osbMeuWJUqbiV+yV1OsTeRmQIt569VmsxylcLTceq21U5Z6Wsxzk4q51U50sp5oIgbRvFLnvJgpW6KXWkyHydvvqhruwrwMvD1oY6HJHXrtUpHbuN4ouY29k3bhg+dke5NueoIE/gVm80mCI4P3o3viqWhfYiuQ2PVqUSW16CONHiG4uT8wWa508wz3GN6jwitE44M+Bj1OnvTapLu3h9asjkC2GXg/z04+CuHeciDdQP4a7PVRTGTk/JvqdMAZUOODED4KxSTnpqg624yVVaXzn5VBeYXHOcS+ytUh0fisfRUsNulBDr2EfTW6+QrxRs2nhaoMfxsI4HvvqpGyWPny5PuMNt46NoDVIE9NibrH9qkJQH8s4mh8MnH+V4ABAGk3vWlcc9tAAAAAAElFTkSuQmCC"},14721:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/server-install-windows-57b776d7ceeebd2b71d32c8b2cc582ee.png"}}]);