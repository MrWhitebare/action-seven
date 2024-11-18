import{t as J,g as A,b as k,r,C as j,c as I,d as W,_ as Z,e as ee,l as te,B as U,f as ne,R as F,h as ae,I as C,k as y,i as re,o as oe,a as ce,u as le,j as c,N as se,Q as ie,O as de}from"./index-B1BrVRdm.js";import{u as ue}from"./useLocalObservable-D7m1rBjp.js";import{S as D,L as ge,a as me,A as fe,M as he}from"./index-CXr0I7H1.js";import{P as ve,g as _,a as pe,A as L}from"./index-gzUfZ_3r.js";import"./index-CveXq9Df.js";function be(t,e,n){return typeof n=="boolean"?n:t.length?!0:J(e).some(o=>o.type===D)}const xe=t=>{const{componentCls:e,bodyBg:n,lightSiderBg:a,lightTriggerBg:o,lightTriggerColor:s}=t;return{[`${e}-sider-light`]:{background:a,[`${e}-sider-trigger`]:{color:s,background:o},[`${e}-sider-zero-width-trigger`]:{color:s,background:o,border:`1px solid ${n}`,borderInlineStart:0}}}},Ce=t=>{const{antCls:e,componentCls:n,colorText:a,triggerColor:o,footerBg:s,triggerBg:u,headerHeight:i,headerPadding:l,headerColor:g,footerPadding:d,triggerHeight:m,zeroTriggerHeight:b,zeroTriggerWidth:O,motionDurationMid:z,motionDurationSlow:v,fontSize:f,borderRadius:p,bodyBg:S,headerBg:w,siderBg:N}=t;return{[n]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:S,"&, *":{boxSizing:"border-box"},[`&${n}-has-sider`]:{flexDirection:"row",[`> ${n}, > ${n}-content`]:{width:0}},[`${n}-header, &${n}-footer`]:{flex:"0 0 auto"},[`${n}-sider`]:{position:"relative",minWidth:0,background:N,transition:`all ${z}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${e}-menu${e}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:m},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:m,color:o,lineHeight:k(m),textAlign:"center",background:u,cursor:"pointer",transition:`all ${z}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:i,insetInlineEnd:t.calc(O).mul(-1).equal(),zIndex:1,width:O,height:b,color:o,fontSize:t.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:N,borderStartStartRadius:0,borderStartEndRadius:p,borderEndEndRadius:p,borderEndStartRadius:0,cursor:"pointer",transition:`background ${v} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${v}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:t.calc(O).mul(-1).equal(),borderStartStartRadius:p,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:p}}}}},xe(t)),{"&-rtl":{direction:"rtl"}}),[`${n}-header`]:{height:i,padding:l,color:g,lineHeight:k(i),background:w,[`${e}-menu`]:{lineHeight:"inherit"}},[`${n}-footer`]:{padding:d,color:a,fontSize:f,background:s},[`${n}-content`]:{flex:"auto",color:a,minHeight:0}}},ye=t=>{const{colorBgLayout:e,controlHeight:n,controlHeightLG:a,colorText:o,controlHeightSM:s,marginXXS:u,colorTextLightSolid:i,colorBgContainer:l}=t,g=a*1.25;return{colorBgHeader:"#001529",colorBgBody:e,colorBgTrigger:"#002140",bodyBg:e,headerBg:"#001529",headerHeight:n*2,headerPadding:`0 ${g}px`,headerColor:o,footerPadding:`${s}px ${g}px`,footerBg:e,siderBg:"#001529",triggerHeight:a+u*2,triggerBg:"#002140",triggerColor:i,zeroTriggerWidth:a,zeroTriggerHeight:a,lightSiderBg:l,lightTriggerBg:l,lightTriggerColor:o}},X=A("Layout",t=>[Ce(t)],ye,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var q=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]]);return n};function M(t){let{suffixCls:e,tagName:n,displayName:a}=t;return o=>r.forwardRef((u,i)=>r.createElement(o,Object.assign({ref:i,suffixCls:e,tagName:n},u)))}const V=r.forwardRef((t,e)=>{const{prefixCls:n,suffixCls:a,className:o,tagName:s}=t,u=q(t,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:i}=r.useContext(j),l=i("layout",n),[g,d,m]=X(l),b=a?`${l}-${a}`:l;return g(r.createElement(s,Object.assign({className:I(n||b,o,d,m),ref:e},u)))}),Oe=r.forwardRef((t,e)=>{const{direction:n}=r.useContext(j),[a,o]=r.useState([]),{prefixCls:s,className:u,rootClassName:i,children:l,hasSider:g,tagName:d,style:m}=t,b=q(t,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),O=W(b,["suffixCls"]),{getPrefixCls:z,layout:v}=r.useContext(j),f=z("layout",s),p=be(a,l,g),[S,w,N]=X(f),R=I(f,{[`${f}-has-sider`]:p,[`${f}-rtl`]:n==="rtl"},v==null?void 0:v.className,u,i,w,N),B=r.useMemo(()=>({siderHook:{addSider:P=>{o(E=>[].concat(Z(E),[P]))},removeSider:P=>{o(E=>E.filter(h=>h!==P))}}}),[]);return S(r.createElement(ge.Provider,{value:B},r.createElement(d,Object.assign({ref:e,className:R,style:Object.assign(Object.assign({},v==null?void 0:v.style),m)},O),l)))}),ze=M({tagName:"div",displayName:"Layout"})(Oe),Se=M({suffixCls:"header",tagName:"header",displayName:"Header"})(V),$e=M({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(V),He=M({suffixCls:"content",tagName:"main",displayName:"Content"})(V),$=ze;$.Header=Se;$.Footer=$e;$.Content=He;$.Sider=D;$._InternalSiderContext=me;const Ne=t=>{const{componentCls:e,iconCls:n,antCls:a,zIndexPopup:o,colorText:s,colorWarning:u,marginXXS:i,marginXS:l,fontSize:g,fontWeightStrong:d,colorTextHeading:m}=t;return{[e]:{zIndex:o,[`&${a}-popover`]:{fontSize:g},[`${e}-message`]:{marginBottom:l,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e}-message-icon ${n}`]:{color:u,fontSize:g,lineHeight:1,marginInlineEnd:l},[`${e}-title`]:{fontWeight:d,color:m,"&:only-child":{fontWeight:"normal"}},[`${e}-description`]:{marginTop:i,color:s}},[`${e}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:l}}}}},je=t=>{const{zIndexPopupBase:e}=t;return{zIndexPopup:e+60}},Q=A("Popconfirm",t=>Ne(t),je,{resetStyle:!1});var we=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]]);return n};const G=t=>{const{prefixCls:e,okButtonProps:n,cancelButtonProps:a,title:o,description:s,cancelText:u,okText:i,okType:l="primary",icon:g=r.createElement(F,null),showCancel:d=!0,close:m,onConfirm:b,onCancel:O,onPopupClick:z}=t,{getPrefixCls:v}=r.useContext(j),[f]=ee("Popconfirm",te.Popconfirm),p=_(o),S=_(s);return r.createElement("div",{className:`${e}-inner-content`,onClick:z},r.createElement("div",{className:`${e}-message`},g&&r.createElement("span",{className:`${e}-message-icon`},g),r.createElement("div",{className:`${e}-message-text`},p&&r.createElement("div",{className:`${e}-title`},p),S&&r.createElement("div",{className:`${e}-description`},S))),r.createElement("div",{className:`${e}-buttons`},d&&r.createElement(U,Object.assign({onClick:O,size:"small"},a),u||(f==null?void 0:f.cancelText)),r.createElement(fe,{buttonProps:Object.assign(Object.assign({size:"small"},ne(l)),n),actionFn:b,close:m,prefixCls:v("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},i||(f==null?void 0:f.okText))))},Be=t=>{const{prefixCls:e,placement:n,className:a,style:o}=t,s=we(t,["prefixCls","placement","className","style"]),{getPrefixCls:u}=r.useContext(j),i=u("popconfirm",e),[l]=Q(i);return l(r.createElement(ve,{placement:n,className:I(i,a),style:o,content:r.createElement(G,Object.assign({prefixCls:i},s))}))};var Pe=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]]);return n};const Ee=r.forwardRef((t,e)=>{var n,a;const{prefixCls:o,placement:s="top",trigger:u="click",okType:i="primary",icon:l=r.createElement(F,null),children:g,overlayClassName:d,onOpenChange:m,onVisibleChange:b}=t,O=Pe(t,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:z}=r.useContext(j),[v,f]=ae(!1,{value:(n=t.open)!==null&&n!==void 0?n:t.visible,defaultValue:(a=t.defaultOpen)!==null&&a!==void 0?a:t.defaultVisible}),p=(h,x)=>{f(h,!0),b==null||b(h),m==null||m(h,x)},S=h=>{p(!1,h)},w=h=>{var x;return(x=t.onConfirm)===null||x===void 0?void 0:x.call(void 0,h)},N=h=>{var x;p(!1,h),(x=t.onCancel)===null||x===void 0||x.call(void 0,h)},R=(h,x)=>{const{disabled:Y=!1}=t;Y||p(h,x)},B=z("popconfirm",o),P=I(B,d),[E]=Q(B);return E(r.createElement(pe,Object.assign({},W(O,["title"]),{trigger:u,placement:s,onOpenChange:R,open:v,ref:e,overlayClassName:P,content:r.createElement(G,Object.assign({okType:i,icon:l},t,{prefixCls:B,close:S,onConfirm:w,onCancel:N})),"data-popover-inject":!0}),g))}),K=Ee;K._InternalPanelDoNotUseOrYouWillBeFired=Be;var Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M448.3 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32-13.4 32-31.9.1-18.4-13.4-31.9-32-31.9zm393.9 96.4c-13.8-13.8-32.7-21.5-53.2-21.5-3.9 0-7.4.4-10.7 1v-1h-3.6c-5.5-30.6-18.6-60.5-38.1-87.4-18.7-25.7-43-47.9-70.8-64.9l25.1-35.8v-3.3c0-.8.4-2.3.7-3.8.6-2.4 1.4-5.5 1.4-8.9 0-18.5-13.5-31.9-32-31.9-9.8 0-19.5 5.7-25.9 15.4l-29.3 42.1c-30-9.8-62.4-15-93.8-15-31.3 0-63.7 5.2-93.8 15L389 79.4c-6.6-9.6-16.1-15.4-26-15.4-18.6 0-32 13.4-32 31.9 0 6.2 2.5 12.8 6.7 17.4l22.6 32.3c-28.7 17-53.5 39.4-72.2 65.1-19.4 26.9-32 56.8-36.7 87.4h-5.5v1c-3.2-.6-6.7-1-10.7-1-20.3 0-39.2 7.5-53.1 21.3-13.8 13.8-21.5 32.6-21.5 53v235c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 3.9 0 7.4-.4 10.7-1v93.5c0 29.2 23.9 53.1 53.2 53.1H331v58.3c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-58.2H544v58.1c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.4 0 39.2-7.5 53.1-21.6 13.8-13.8 21.5-32.6 21.5-53v-58.2h31.9c29.3 0 53.2-23.8 53.2-53.1v-91.4c3.2.6 6.7 1 10.7 1 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-235c-.1-20.3-7.6-39-21.4-52.9zM246 609.6c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zm131.1-396.8c37.5-27.3 85.3-42.3 135-42.3s97.5 15.1 135 42.5c32.4 23.7 54.2 54.2 62.7 87.5H314.4c8.5-33.4 30.5-64 62.7-87.7zm39.3 674.7c-.6 5.6-4.4 8.7-10.5 8.7-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1zm202.3 8.7c-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1c-.6 5.6-4.3 8.7-10.5 8.7zm95.8-132.6H309.9V364h404.6v399.6zm85.2-154c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zM576.1 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32.1-13.4 32.1-32-.1-18.6-13.4-31.8-32.1-31.8z"}}]},name:"android",theme:"outlined"},Me=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:Ie}))},Re=r.forwardRef(Me),Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM440.2 765h-50.8c-2.2 0-4.5-1.1-5.9-2.9L348 718.6l-35.5 43.5a7.38 7.38 0 01-5.9 2.9h-50.8c-6.6 0-10.2-7.9-5.8-13.1l62.7-76.8-61.2-74.9c-4.3-5.2-.7-13.1 5.9-13.1h50.9c2.2 0 4.5 1.1 5.9 2.9l34 41.6 34-41.6c1.5-1.9 3.6-2.9 5.9-2.9h50.8c6.6 0 10.2 7.9 5.9 13.1L383.5 675l62.7 76.8c4.2 5.3.6 13.2-6 13.2zm7.8-382c0 2.2-1.4 4-3.2 4H376v68.7c0 1.9-1.8 3.3-4 3.3h-48c-2.2 0-4-1.4-4-3.2V387h-68.8c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4H320v-68.8c0-1.8 1.8-3.2 4-3.2h48c2.2 0 4 1.4 4 3.2V331h68.7c1.9 0 3.3 1.8 3.3 4v48zm328 369c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-104c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-265c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48z"}}]},name:"calculator",theme:"filled"},ke=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:Ve}))},_e=r.forwardRef(ke),Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 01140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 00-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 000 79.2 55.95 55.95 0 0079.2 0 55.87 55.87 0 0014.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 00-11.3 0l-56.6 56.6a8.03 8.03 0 000 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 00-11.3 0l-31.1 31.1a8.03 8.03 0 000 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"}}]},name:"dashboard",theme:"outlined"},Te=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:Le}))},Ae=r.forwardRef(Te),We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},Ue=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:We}))},Fe=r.forwardRef(Ue),De={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},Xe=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:De}))},qe=r.forwardRef(Xe),Qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394h164zM628 630H400V394h228v236z"}}]},name:"number",theme:"outlined"},Ge=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:Qe}))},Ke=r.forwardRef(Ge),Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"}}]},name:"picture",theme:"outlined"},Je=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:Ye}))},Ze=r.forwardRef(Je),et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},tt=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:et}))},nt=r.forwardRef(tt),at={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},rt=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:at}))},T=r.forwardRef(rt),ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"video-camera",theme:"outlined"},ct=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:ot}))},lt=r.forwardRef(ct),st={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"}}]},name:"wechat",theme:"outlined"},it=function(e,n){return r.createElement(C,y({},e,{ref:n,icon:st}))},dt=r.forwardRef(it);const ut="_layout_37bsc_1",gt="_avatar_37bsc_7",mt="_header_37bsc_18",ft="_info_37bsc_27",ht="_content_37bsc_41",H={layout:ut,avatar:gt,header:mt,"btn-expand":"_btn-expand_37bsc_23",info:ft,content:ht},{Header:vt,Sider:pt,Content:bt}=$,St=re("user")(oe(t=>{const{user:e}=t,n=ce(),a=ue(()=>({collapsed:!1,setCollapsed(d){this.collapsed=d},menubar:"preview",setMenubar(d){this.menubar=d}}));r.useEffect(()=>{n&&a.setMenubar(n.pathname.replace("/",""))},[]);const o=le();let s=localStorage.getItem("userInfo");if(s){const d=ie.parse(s);e==null||e.setUserInfo(d.nickname,"administrator")}else return c.jsx(se,{to:"/login",replace:!0});const u=()=>{s&&(e==null||e.setUserInfo(null,null),localStorage.clear(),o("/login",{replace:!0}))},i=d=>{a.setMenubar(d.key),o(d.key)},{collapsed:l,menubar:g}=a;return c.jsxs($,{className:H.layout,children:[c.jsxs(pt,{trigger:null,collapsible:!0,collapsed:l,children:[c.jsx(L,{className:H.avatar,icon:c.jsx(Re,{})}),c.jsx(he,{theme:"dark",mode:"inline",selectedKeys:[g],onClick:i,items:[{key:"preview",icon:c.jsx(Ze,{}),label:"图片预览"},{key:"region",icon:c.jsx(lt,{}),label:"区域权限"},{key:"webrtc",icon:c.jsx(nt,{}),label:"WebRtc"},{key:"dashboard",icon:c.jsx(Ae,{}),label:"看板"},{key:"game",icon:c.jsx(Ke,{}),label:"游戏"},{key:"user",icon:c.jsx(T,{}),label:"用户"},{key:"weChat",icon:c.jsx(dt,{}),label:"聊天"},{key:"doubleEleven",icon:c.jsx(_e,{}),label:"双十一满减"}]})]}),c.jsxs($,{children:[c.jsxs(vt,{className:H.header,children:[c.jsx(U,{className:H["btn-expand"],type:"text",icon:l?c.jsx(qe,{}):c.jsx(Fe,{}),onClick:()=>a.setCollapsed(!l)}),c.jsxs("div",{className:H.info,children:["欢迎您 ",e==null?void 0:e.userName,"!"]}),c.jsx("div",{className:H.avatar,children:c.jsx(K,{title:"是否退出系统？",onConfirm:u,children:c.jsx(L,{size:"large",style:{backgroundColor:"#87d068"},icon:c.jsx(T,{})})})})]}),c.jsx(bt,{className:H.content,children:c.jsx(de,{})})]})]})}));export{St as default};
