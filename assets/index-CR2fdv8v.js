import{r as i,W as x,aa as k}from"./index-CJqm67pM.js";function Oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(r),!0).forEach(function(n){Oe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function we(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Me(e,t){if(e==null)return{};var r=we(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function je(e,t){return Ee(e)||Se(e,t)||Pe(e,t)||Ae()}function Ee(e){if(Array.isArray(e))return e}function Se(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,o=!1,a=void 0;try{for(var u=e[Symbol.iterator](),p;!(n=(p=u.next()).done)&&(r.push(p.value),!(t&&r.length===t));n=!0);}catch(h){o=!0,a=h}finally{try{!n&&u.return!=null&&u.return()}finally{if(o)throw a}}return r}}function Pe(e,t){if(e){if(typeof e=="string")return ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ie(e,t)}}function ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(r),!0).forEach(function(n){Ce(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Re(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(o,a){return a(o)},n)}}function _(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var u=arguments.length,p=new Array(u),h=0;h<u;h++)p[h]=arguments[h];return t.apply(r,[].concat(o,p))}}}function G(e){return{}.toString.call(e).includes("Object")}function Te(e){return!Object.keys(e).length}function U(e){return typeof e=="function"}function Ie(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function xe(e,t){return G(t)||S("changeType"),Object.keys(t).some(function(r){return!Ie(e,r)})&&S("changeField"),t}function De(e){U(e)||S("selectorType")}function Le(e){U(e)||G(e)||S("handlerType"),G(e)&&Object.values(e).some(function(t){return!U(t)})&&S("handlersType")}function Ne(e){e||S("initialIsRequired"),G(e)||S("initialType"),Te(e)&&S("initialContent")}function Ve(e,t){throw new Error(e[t]||e.default)}var $e={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},S=_(Ve)($e),B={changes:xe,selector:De,handler:Le,initial:Ne};function _e(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};B.initial(e),B.handler(t);var r={current:e},n=_(ze)(r,t),o=_(Ue)(r),a=_(B.changes)(e),u=_(qe)(r);function p(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(A){return A};return B.selector(y),y(r.current)}function h(y){Re(n,o,a,u)(y)}return[p,h]}function qe(e,t){return U(t)?t(e.current):t}function Ue(e,t){return e.current=se(se({},e.current),t),t}function ze(e,t,r){return U(t)?t(e.current):Object.keys(r).forEach(function(n){var o;return(o=t[n])===null||o===void 0?void 0:o.call(t,e.current[n])}),r}var Fe={create:_e},We={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function ke(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var u=arguments.length,p=new Array(u),h=0;h<u;h++)p[h]=arguments[h];return t.apply(r,[].concat(o,p))}}}function Be(e){return{}.toString.call(e).includes("Object")}function He(e){return e||le("configIsRequired"),Be(e)||le("configType"),e.urls?(Ge(),{paths:{vs:e.urls.monacoBase}}):e}function Ge(){console.warn(de.deprecation)}function Ke(e,t){throw new Error(e[t]||e.default)}var de={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},le=ke(Ke)(de),Ye={config:He},Je=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(o){return r.reduceRight(function(a,u){return u(a)},o)}};function fe(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],fe(e[r],t[r]))}),ce(ce({},e),t)}var Qe={type:"cancelation",msg:"operation is manually canceled"};function te(e){var t=!1,r=new Promise(function(n,o){e.then(function(a){return t?o(Qe):n(a)}),e.catch(o)});return r.cancel=function(){return t=!0},r}var Xe=Fe.create({config:We,isInitialized:!1,resolve:null,reject:null,monaco:null}),pe=je(Xe,2),z=pe[0],K=pe[1];function Ze(e){var t=Ye.config(e),r=t.monaco,n=Me(t,["monaco"]);K(function(o){return{config:fe(o.config,n),monaco:r}})}function et(){var e=z(function(t){var r=t.monaco,n=t.isInitialized,o=t.resolve;return{monaco:r,isInitialized:n,resolve:o}});if(!e.isInitialized){if(K({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),te(re);if(window.monaco&&window.monaco.editor)return ge(window.monaco),e.resolve(window.monaco),te(re);Je(tt,nt)(ot)}return te(re)}function tt(e){return document.body.appendChild(e)}function rt(e){var t=document.createElement("script");return e&&(t.src=e),t}function nt(e){var t=z(function(n){var o=n.config,a=n.reject;return{config:o,reject:a}}),r=rt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function ot(){var e=z(function(r){var n=r.config,o=r.resolve,a=r.reject;return{config:n,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){ge(r),e.resolve(r)},function(r){e.reject(r)})}function ge(e){z().monaco||K({monaco:e})}function at(){return z(function(e){var t=e.monaco;return t})}var re=new Promise(function(e,t){return K({resolve:e,reject:t})}),he={config:Ze,init:et,__getMonacoInstance:at},ct={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ne=ct,it={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ut=it;function st({children:e}){return x.createElement("div",{style:ut.container},e)}var lt=st,dt=lt;function ft({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:a,wrapperProps:u}){return x.createElement("section",{style:{...ne.wrapper,width:e,height:t},...u},!r&&x.createElement(dt,null,n),x.createElement("div",{ref:o,style:{...ne.fullWidth,...!r&&ne.hide},className:a}))}var pt=ft,me=i.memo(pt);function gt(e){i.useEffect(e,[])}var ve=gt;function ht(e,t,r=!0){let n=i.useRef(!0);i.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}var M=ht;function q(){}function I(e,t,r,n){return mt(e,n)||vt(e,t,r,n)}function mt(e,t){return e.editor.getModel(be(e,t))}function vt(e,t,r,n){return e.editor.createModel(t,r,n?be(e,n):void 0)}function be(e,t){return e.Uri.parse(t)}function bt({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:a,modifiedModelPath:u,keepCurrentOriginalModel:p=!1,keepCurrentModifiedModel:h=!1,theme:y="light",loading:A="Loading...",options:j={},height:Y="100%",width:J="100%",className:Q,wrapperProps:X={},beforeMount:Z=q,onMount:ee=q}){let[O,D]=i.useState(!1),[P,m]=i.useState(!0),v=i.useRef(null),g=i.useRef(null),L=i.useRef(null),b=i.useRef(ee),l=i.useRef(Z),C=i.useRef(!1);ve(()=>{let c=he.init();return c.then(d=>(g.current=d)&&m(!1)).catch(d=>(d==null?void 0:d.type)!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>v.current?N():c.cancel()}),M(()=>{if(v.current&&g.current){let c=v.current.getOriginalEditor(),d=I(g.current,e||"",n||r||"text",a||"");d!==c.getModel()&&c.setModel(d)}},[a],O),M(()=>{if(v.current&&g.current){let c=v.current.getModifiedEditor(),d=I(g.current,t||"",o||r||"text",u||"");d!==c.getModel()&&c.setModel(d)}},[u],O),M(()=>{let c=v.current.getModifiedEditor();c.getOption(g.current.editor.EditorOption.readOnly)?c.setValue(t||""):t!==c.getValue()&&(c.executeEdits("",[{range:c.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),c.pushUndoStop())},[t],O),M(()=>{var c,d;(d=(c=v.current)==null?void 0:c.getModel())==null||d.original.setValue(e||"")},[e],O),M(()=>{let{original:c,modified:d}=v.current.getModel();g.current.editor.setModelLanguage(c,n||r||"text"),g.current.editor.setModelLanguage(d,o||r||"text")},[r,n,o],O),M(()=>{var c;(c=g.current)==null||c.editor.setTheme(y)},[y],O),M(()=>{var c;(c=v.current)==null||c.updateOptions(j)},[j],O);let F=i.useCallback(()=>{var E;if(!g.current)return;l.current(g.current);let c=I(g.current,e||"",n||r||"text",a||""),d=I(g.current,t||"",o||r||"text",u||"");(E=v.current)==null||E.setModel({original:c,modified:d})},[r,t,o,e,n,a,u]),W=i.useCallback(()=>{var c;!C.current&&L.current&&(v.current=g.current.editor.createDiffEditor(L.current,{automaticLayout:!0,...j}),F(),(c=g.current)==null||c.editor.setTheme(y),D(!0),C.current=!0)},[j,y,F]);i.useEffect(()=>{O&&b.current(v.current,g.current)},[O]),i.useEffect(()=>{!P&&!O&&W()},[P,O,W]);function N(){var d,E,R,V;let c=(d=v.current)==null?void 0:d.getModel();p||((E=c==null?void 0:c.original)==null||E.dispose()),h||((R=c==null?void 0:c.modified)==null||R.dispose()),(V=v.current)==null||V.dispose()}return x.createElement(me,{width:J,height:Y,isEditorReady:O,loading:A,_ref:L,className:Q,wrapperProps:X})}var yt=bt;i.memo(yt);function Ot(e){let t=i.useRef();return i.useEffect(()=>{t.current=e},[e]),t.current}var wt=Ot,H=new Map;function Mt({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:a,theme:u="light",line:p,loading:h="Loading...",options:y={},overrideServices:A={},saveViewState:j=!0,keepCurrentModel:Y=!1,width:J="100%",height:Q="100%",className:X,wrapperProps:Z={},beforeMount:ee=q,onMount:O=q,onChange:D,onValidate:P=q}){let[m,v]=i.useState(!1),[g,L]=i.useState(!0),b=i.useRef(null),l=i.useRef(null),C=i.useRef(null),F=i.useRef(O),W=i.useRef(ee),N=i.useRef(),c=i.useRef(n),d=wt(a),E=i.useRef(!1),R=i.useRef(!1);ve(()=>{let s=he.init();return s.then(f=>(b.current=f)&&L(!1)).catch(f=>(f==null?void 0:f.type)!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>l.current?ye():s.cancel()}),M(()=>{var f,w,$,T;let s=I(b.current,e||n||"",t||o||"",a||r||"");s!==((f=l.current)==null?void 0:f.getModel())&&(j&&H.set(d,(w=l.current)==null?void 0:w.saveViewState()),($=l.current)==null||$.setModel(s),j&&((T=l.current)==null||T.restoreViewState(H.get(a))))},[a],m),M(()=>{var s;(s=l.current)==null||s.updateOptions(y)},[y],m),M(()=>{!l.current||n===void 0||(l.current.getOption(b.current.editor.EditorOption.readOnly)?l.current.setValue(n):n!==l.current.getValue()&&(R.current=!0,l.current.executeEdits("",[{range:l.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),l.current.pushUndoStop(),R.current=!1))},[n],m),M(()=>{var f,w;let s=(f=l.current)==null?void 0:f.getModel();s&&o&&((w=b.current)==null||w.editor.setModelLanguage(s,o))},[o],m),M(()=>{var s;p!==void 0&&((s=l.current)==null||s.revealLine(p))},[p],m),M(()=>{var s;(s=b.current)==null||s.editor.setTheme(u)},[u],m);let V=i.useCallback(()=>{var s;if(!(!C.current||!b.current)&&!E.current){W.current(b.current);let f=a||r,w=I(b.current,n||e||"",t||o||"",f||"");l.current=(s=b.current)==null?void 0:s.editor.create(C.current,{model:w,automaticLayout:!0,...y},A),j&&l.current.restoreViewState(H.get(f)),b.current.editor.setTheme(u),p!==void 0&&l.current.revealLine(p),v(!0),E.current=!0}},[e,t,r,n,o,a,y,A,j,u,p]);i.useEffect(()=>{m&&F.current(l.current,b.current)},[m]),i.useEffect(()=>{!g&&!m&&V()},[g,m,V]),c.current=n,i.useEffect(()=>{var s,f;m&&D&&((s=N.current)==null||s.dispose(),N.current=(f=l.current)==null?void 0:f.onDidChangeModelContent(w=>{R.current||D(l.current.getValue(),w)}))},[m,D]),i.useEffect(()=>{if(m){let s=b.current.editor.onDidChangeMarkers(f=>{var $;let w=($=l.current.getModel())==null?void 0:$.uri;if(w&&f.find(T=>T.path===w.path)){let T=b.current.editor.getModelMarkers({resource:w});P==null||P(T)}});return()=>{s==null||s.dispose()}}return()=>{}},[m,P]);function ye(){var s,f;(s=N.current)==null||s.dispose(),Y?j&&H.set(a,l.current.saveViewState()):(f=l.current.getModel())==null||f.dispose(),l.current.dispose()}return x.createElement(me,{width:J,height:Q,isEditorReady:m,loading:h,_ref:C,className:X,wrapperProps:Z})}var jt=Mt,Et=i.memo(jt);const St="_dashboard_1qek0_1",Pt="_left_1qek0_6",At="_right_1qek0_10",oe={dashboard:St,left:Pt,right:At},Rt=()=>{const e=(a,u)=>{console.log(a,u)},t=(a,u)=>{console.log("onMount: the editor instance:",a),console.log("onMount: the monaco instance:",u)},r=a=>{console.log("beforeMount: the monaco instance:",a)},n=a=>{a.forEach(u=>console.log("onValidate:",u.message))};return k.jsxs("div",{className:oe.dashboard,children:[k.jsx("div",{className:oe.left,children:k.jsx(Et,{height:"100%",defaultLanguage:"typescript",defaultValue:`/* 1. 数字求和 */
const numbers:number[]=[1,2,3,4,5];
const sums=numbers.reduce((acc,curr)=>acc+curr,0);
console.log(sums);

/* 2. 扁平化组数 */

const nestedArray: number[][] = [[1, 2], [3, 4], [5, 6]];
const flattenedArray: number[] = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray);

/* 3. 对对象进行分组 */

interface Person{
    name:string;
    age:number;
}

const people:Person[]=[
    { name:"alias",age:25},
    { name:"Bob",age:30},
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 30 }
]

const groupedByAge: { [key: number]: Person[] } = people.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
}, {});

console.log(groupedByAge);

/* 4. 查找映射
    使用reduce()创建查找映射，就可以在恒定的时间复杂度下通过元素的唯一标识符访问元素
 */

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 499 },
];

const productMap: { [key: number]: Product } = products.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(productMap);

const laptop: Product = productMap[1];
console.log(laptop); // Output: { id: 1, name: 'Laptop', price: 999 }

/**
 * 5. 计算出现次数
 */

const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCounts: { [key: string]: number } = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(fruitCounts);

/**
 * 6. 组合函数
 */
const add5 = (x: number): number => x + 5;
const multiply3 = (x: number): number => x * 3;
const subtract2 = (x: number): number => x - 2;

const composedFunctions: ((x: number) => number)[] = [add5, multiply3, subtract2];

const result: number = composedFunctions.reduce((acc, curr) => curr(acc), 10);
console.log(result); // Output: 43

/**
 * 7. 实现类似Redux的状态管理
 */

interface State {
  count: number;
  todos: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  count: 0,
  todos: [],
};

const actions: Action[] = [
  { type: 'INCREMENT_COUNT' },
  { type: 'ADD_TODO', payload: 'Learn Array.reduce()' },
  { type: 'INCREMENT_COUNT' },
  { type: 'ADD_TODO', payload: 'Master TypeScript' },
];

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const finalState: State = actions.reduce(reducer, initialState);
console.log(finalState);
/*
Output:
{
  count: 2,
  todos: ['Learn Array.reduce()', 'Master TypeScript']
}
*/

/** 8. 生成唯一值 */
const numbers8: number[] = [1, 2, 3, 2, 4, 3, 5, 1, 6];

const uniqueNumbers: number[] = numbers8.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

/** 9. 计算平均值 */
const grades: number[] = [85, 90, 92, 88, 95];

const average: number = grades.reduce((acc, curr, index, array) => {
  acc += curr;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

console.log(average); // Output: 90`,onChange:e,onMount:t,beforeMount:r,onValidate:n})}),k.jsx("div",{className:oe.right})]})};export{Rt as default};
