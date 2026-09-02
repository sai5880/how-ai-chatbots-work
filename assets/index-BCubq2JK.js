(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function AM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bd={exports:{}},ga={},zd={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function CM(){if(ov)return ht;ov=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(B,ie,Ue){this.props=B,this.context=ie,this.refs=T,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(B,ie){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ie,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=S.prototype;function b(B,ie,Ue){this.props=B,this.context=ie,this.refs=T,this.updater=Ue||y}var R=b.prototype=new _;R.constructor=b,E(R,S.prototype),R.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function k(B,ie,Ue){var Q,de={},Ee=null,xe=null;if(ie!=null)for(Q in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)N.call(ie,Q)&&!F.hasOwnProperty(Q)&&(de[Q]=ie[Q]);var we=arguments.length-2;if(we===1)de.children=Ue;else if(1<we){for(var Fe=Array(we),Je=0;Je<we;Je++)Fe[Je]=arguments[Je+2];de.children=Fe}if(B&&B.defaultProps)for(Q in we=B.defaultProps,we)de[Q]===void 0&&(de[Q]=we[Q]);return{$$typeof:n,type:B,key:Ee,ref:xe,props:de,_owner:I.current}}function L(B,ie){return{$$typeof:n,type:B.type,key:ie,ref:B.ref,props:B.props,_owner:B._owner}}function P(B){return typeof B=="object"&&B!==null&&B.$$typeof===n}function z(B){var ie={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ue){return ie[Ue]})}var ae=/\/+/g;function ee(B,ie){return typeof B=="object"&&B!==null&&B.key!=null?z(""+B.key):ie.toString(36)}function ue(B,ie,Ue,Q,de){var Ee=typeof B;(Ee==="undefined"||Ee==="boolean")&&(B=null);var xe=!1;if(B===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(B.$$typeof){case n:case e:xe=!0}}if(xe)return xe=B,de=de(xe),B=Q===""?"."+ee(xe,0):Q,A(de)?(Ue="",B!=null&&(Ue=B.replace(ae,"$&/")+"/"),ue(de,ie,Ue,"",function(Je){return Je})):de!=null&&(P(de)&&(de=L(de,Ue+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ae,"$&/")+"/")+B)),ie.push(de)),1;if(xe=0,Q=Q===""?".":Q+":",A(B))for(var we=0;we<B.length;we++){Ee=B[we];var Fe=Q+ee(Ee,we);xe+=ue(Ee,ie,Ue,Fe,de)}else if(Fe=v(B),typeof Fe=="function")for(B=Fe.call(B),we=0;!(Ee=B.next()).done;)Ee=Ee.value,Fe=Q+ee(Ee,we++),xe+=ue(Ee,ie,Ue,Fe,de);else if(Ee==="object")throw ie=String(B),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function pe(B,ie,Ue){if(B==null)return B;var Q=[],de=0;return ue(B,Q,"","",function(Ee){return ie.call(Ue,Ee,de++)}),Q}function ce(B){if(B._status===-1){var ie=B._result;ie=ie(),ie.then(function(Ue){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ue)},function(Ue){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ue)}),B._status===-1&&(B._status=0,B._result=ie)}if(B._status===1)return B._result.default;throw B._result}var re={current:null},H={transition:null},le={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:H,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:pe,forEach:function(B,ie,Ue){pe(B,function(){ie.apply(this,arguments)},Ue)},count:function(B){var ie=0;return pe(B,function(){ie++}),ie},toArray:function(B){return pe(B,function(ie){return ie})||[]},only:function(B){if(!P(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},ht.Component=S,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=b,ht.StrictMode=r,ht.Suspense=f,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ht.act=se,ht.cloneElement=function(B,ie,Ue){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Q=E({},B.props),de=B.key,Ee=B.ref,xe=B._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,xe=I.current),ie.key!==void 0&&(de=""+ie.key),B.type&&B.type.defaultProps)var we=B.type.defaultProps;for(Fe in ie)N.call(ie,Fe)&&!F.hasOwnProperty(Fe)&&(Q[Fe]=ie[Fe]===void 0&&we!==void 0?we[Fe]:ie[Fe])}var Fe=arguments.length-2;if(Fe===1)Q.children=Ue;else if(1<Fe){we=Array(Fe);for(var Je=0;Je<Fe;Je++)we[Je]=arguments[Je+2];Q.children=we}return{$$typeof:n,type:B.type,key:de,ref:Ee,props:Q,_owner:xe}},ht.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},ht.createElement=k,ht.createFactory=function(B){var ie=k.bind(null,B);return ie.type=B,ie},ht.createRef=function(){return{current:null}},ht.forwardRef=function(B){return{$$typeof:u,render:B}},ht.isValidElement=P,ht.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:ce}},ht.memo=function(B,ie){return{$$typeof:h,type:B,compare:ie===void 0?null:ie}},ht.startTransition=function(B){var ie=H.transition;H.transition={};try{B()}finally{H.transition=ie}},ht.unstable_act=se,ht.useCallback=function(B,ie){return re.current.useCallback(B,ie)},ht.useContext=function(B){return re.current.useContext(B)},ht.useDebugValue=function(){},ht.useDeferredValue=function(B){return re.current.useDeferredValue(B)},ht.useEffect=function(B,ie){return re.current.useEffect(B,ie)},ht.useId=function(){return re.current.useId()},ht.useImperativeHandle=function(B,ie,Ue){return re.current.useImperativeHandle(B,ie,Ue)},ht.useInsertionEffect=function(B,ie){return re.current.useInsertionEffect(B,ie)},ht.useLayoutEffect=function(B,ie){return re.current.useLayoutEffect(B,ie)},ht.useMemo=function(B,ie){return re.current.useMemo(B,ie)},ht.useReducer=function(B,ie,Ue){return re.current.useReducer(B,ie,Ue)},ht.useRef=function(B){return re.current.useRef(B)},ht.useState=function(B){return re.current.useState(B)},ht.useSyncExternalStore=function(B,ie,Ue){return re.current.useSyncExternalStore(B,ie,Ue)},ht.useTransition=function(){return re.current.useTransition()},ht.version="18.3.1",ht}var av;function zh(){return av||(av=1,zd.exports=CM()),zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function RM(){if(lv)return ga;lv=1;var n=zh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,g={},v=null,y=null;h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)r.call(f,p)&&!l.hasOwnProperty(p)&&(g[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:u,key:v,ref:y,props:g,_owner:o.current}}return ga.Fragment=t,ga.jsx=c,ga.jsxs=c,ga}var cv;function PM(){return cv||(cv=1,Bd.exports=RM()),Bd.exports}var M=PM(),be=zh();const bM=AM(be);var ic={},Vd={exports:{}},Hn={},Hd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function DM(){return uv||(uv=1,(function(n){function e(H,le){var se=H.length;H.push(le);e:for(;0<se;){var B=se-1>>>1,ie=H[B];if(0<o(ie,le))H[B]=le,H[se]=ie,se=B;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],se=H.pop();if(se!==le){H[0]=se;e:for(var B=0,ie=H.length,Ue=ie>>>1;B<Ue;){var Q=2*(B+1)-1,de=H[Q],Ee=Q+1,xe=H[Ee];if(0>o(de,se))Ee<ie&&0>o(xe,de)?(H[B]=xe,H[Ee]=se,B=Ee):(H[B]=de,H[Q]=se,B=Q);else if(Ee<ie&&0>o(xe,se))H[B]=xe,H[Ee]=se,B=Ee;else break e}}return le}function o(H,le){var se=H.sortIndex-le.sortIndex;return se!==0?se:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,g=null,v=3,y=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(H){for(var le=t(h);le!==null;){if(le.callback===null)r(h);else if(le.startTime<=H)r(h),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(h)}}function A(H){if(T=!1,R(H),!E)if(t(f)!==null)E=!0,ce(N);else{var le=t(h);le!==null&&re(A,le.startTime-H)}}function N(H,le){E=!1,T&&(T=!1,_(k),k=-1),y=!0;var se=v;try{for(R(le),g=t(f);g!==null&&(!(g.expirationTime>le)||H&&!z());){var B=g.callback;if(typeof B=="function"){g.callback=null,v=g.priorityLevel;var ie=B(g.expirationTime<=le);le=n.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(f)&&r(f),R(le)}else r(f);g=t(f)}if(g!==null)var Ue=!0;else{var Q=t(h);Q!==null&&re(A,Q.startTime-le),Ue=!1}return Ue}finally{g=null,v=se,y=!1}}var I=!1,F=null,k=-1,L=5,P=-1;function z(){return!(n.unstable_now()-P<L)}function ae(){if(F!==null){var H=n.unstable_now();P=H;var le=!0;try{le=F(!0,H)}finally{le?ee():(I=!1,F=null)}}else I=!1}var ee;if(typeof b=="function")ee=function(){b(ae)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=ae,ee=function(){pe.postMessage(null)}}else ee=function(){S(ae,0)};function ce(H){F=H,I||(I=!0,ee())}function re(H,le){k=S(function(){H(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){E||y||(E=!0,ce(N))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(H){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var se=v;v=le;try{return H()}finally{v=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=v;v=H;try{return le()}finally{v=se}},n.unstable_scheduleCallback=function(H,le,se){var B=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?B+se:B):se=B,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,H={id:p++,callback:le,priorityLevel:H,startTime:se,expirationTime:ie,sortIndex:-1},se>B?(H.sortIndex=se,e(h,H),t(f)===null&&H===t(h)&&(T?(_(k),k=-1):T=!0,re(A,se-B))):(H.sortIndex=ie,e(f,H),E||y||(E=!0,ce(N))),H},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(H){var le=v;return function(){var se=v;v=le;try{return H.apply(this,arguments)}finally{v=se}}}})(Gd)),Gd}var dv;function LM(){return dv||(dv=1,Hd.exports=DM()),Hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function NM(){if(fv)return Hn;fv=1;var n=zh(),e=LM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return f.call(g,i)?!0:f.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function y(i,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,a,d){if(s===null||typeof s>"u"||y(i,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,d,m,x,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(_,b);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(_,b);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(_,b);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function R(i,s,a,d){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,m,d)&&(a=null),d||m===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):m.mustUseProperty?i[m.propertyName]=a===null?m.type===3?!1:"":a:(s=m.attributeName,d=m.attributeNamespace,a===null?i.removeAttribute(s):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,d?i.setAttributeNS(d,s,a):i.setAttribute(s,a))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,B;function ie(i){if(B===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);B=s&&s[1]||""}return`
`+B+i}var Ue=!1;function Q(i,s){if(!i||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(J){var d=J}Reflect.construct(i,[],s)}else{try{s.call()}catch(J){d=J}i.call(s.prototype)}else{try{throw Error()}catch(J){d=J}i()}}catch(J){if(J&&d&&typeof J.stack=="string"){for(var m=J.stack.split(`
`),x=d.stack.split(`
`),w=m.length-1,O=x.length-1;1<=w&&0<=O&&m[w]!==x[O];)O--;for(;1<=w&&0<=O;w--,O--)if(m[w]!==x[O]){if(w!==1||O!==1)do if(w--,O--,0>O||m[w]!==x[O]){var V=`
`+m[w].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=w&&0<=O);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?ie(i):""}function de(i){switch(i.tag){case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function Ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case I:return"Portal";case L:return"Profiler";case k:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case P:return(i._context.displayName||"Context")+".Provider";case ae:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case pe:return s=i.displayName||null,s!==null?s:Ee(i.type)||"Memo";case ce:s=i._payload,i=i._init;try{return Ee(i(s))}catch{}}return null}function xe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function we(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Fe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Fe(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,x=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(w){d=""+w,x.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Dt(i){i._valueTracker||(i._valueTracker=Je(i))}function gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return i&&(d=Fe(i)?i.checked?"true":"false":i.value),i=d,i!==a?(s.setValue(i),!0):!1}function Ut(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function G(i,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Pn(i,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=we(s.value!=null?s.value:a),i._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&R(i,"checked",s,!1)}function dt(i,s){pt(i,s);var a=we(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?bt(i,s.type,a):s.hasOwnProperty("defaultValue")&&bt(i,s.type,we(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function qe(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function bt(i,s,a){(s!=="number"||Ut(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var Xe=Array.isArray;function U(i,s,a,d){if(i=i.options,s){s={};for(var m=0;m<a.length;m++)s["$"+a[m]]=!0;for(a=0;a<i.length;a++)m=s.hasOwnProperty("$"+i[a].value),i[a].selected!==m&&(i[a].selected=m),m&&d&&(i[a].defaultSelected=!0)}else{for(a=""+we(a),s=null,m=0;m<i.length;m++){if(i[m].value===a){i[m].selected=!0,d&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function C(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Z(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Xe(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:we(a)}}function me(i,s){var a=we(s.value),d=we(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),d!=null&&(i.defaultValue=""+d)}function ve(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function fe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?fe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ae,Oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,m){MSApp.execUnsafeLocalFunction(function(){return i(s,a,d,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ut(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){ze.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function Ke(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function tt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,m=Ke(a,s[a],d);a==="float"&&(a="cssFloat"),d?i.setProperty(a,m):i[a]=m}}var Ve=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(i,s){if(s){if(Ve[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ce=null,oe=null,he=null;function Le(i){if(i=ta(i)){if(typeof Ce!="function")throw Error(t(280));var s=i.stateNode;s&&(s=_l(s),Ce(i.stateNode,i.type,s))}}function De(i){oe?he?he.push(i):he=[i]:oe=i}function ot(){if(oe){var i=oe,s=he;if(he=oe=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Ot(i,s){return i(s)}function rn(){}var Mt=!1;function Fn(i,s,a){if(Mt)return i(s,a);Mt=!0;try{return Ot(i,s,a)}finally{Mt=!1,(oe!==null||he!==null)&&(rn(),ot())}}function bn(i,s){var a=i.stateNode;if(a===null)return null;var d=_l(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var bs=!1;if(u)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){bs=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{bs=!1}function ki(i,s,a,d,m,x,w,O,V){var J=Array.prototype.slice.call(arguments,3);try{s.apply(a,J)}catch(_e){this.onError(_e)}}var Bi=!1,Xr=null,Yr=!1,cr=null,Za={onError:function(i){Bi=!0,Xr=i}};function Ds(i,s,a,d,m,x,w,O,V){Bi=!1,Xr=null,ki.apply(Za,arguments)}function Qa(i,s,a,d,m,x,w,O,V){if(Ds.apply(this,arguments),Bi){if(Bi){var J=Xr;Bi=!1,Xr=null}else throw Error(t(198));Yr||(Yr=!0,cr=J)}}function Ci(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Ja(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function el(i){if(Ci(i)!==i)throw Error(t(188))}function lu(i){var s=i.alternate;if(!s){if(s=Ci(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,d=s;;){var m=a.return;if(m===null)break;var x=m.alternate;if(x===null){if(d=m.return,d!==null){a=d;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===a)return el(m),i;if(x===d)return el(m),s;x=x.sibling}throw Error(t(188))}if(a.return!==d.return)a=m,d=x;else{for(var w=!1,O=m.child;O;){if(O===a){w=!0,a=m,d=x;break}if(O===d){w=!0,d=m,a=x;break}O=O.sibling}if(!w){for(O=x.child;O;){if(O===a){w=!0,a=x,d=m;break}if(O===d){w=!0,d=x,a=m;break}O=O.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function tl(i){return i=lu(i),i!==null?nl(i):null}function nl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=nl(i);if(s!==null)return s;i=i.sibling}return null}var D=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,j=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,Ye=null,at=null;function Tt(i){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ye,i,void 0,(i.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:$e,Ht=Math.log,yt=Math.LN2;function $e(i){return i>>>=0,i===0?32:31-(Ht(i)/yt|0)|0}var $t=64,vt=4194304;function pn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function di(i,s){var a=i.pendingLanes;if(a===0)return 0;var d=0,m=i.suspendedLanes,x=i.pingedLanes,w=a&268435455;if(w!==0){var O=w&~m;O!==0?d=pn(O):(x&=w,x!==0&&(d=pn(x)))}else w=a&~m,w!==0?d=pn(w):x!==0&&(d=pn(x));if(d===0)return 0;if(s!==0&&s!==d&&(s&m)===0&&(m=d&-d,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)a=31-wt(s),m=1<<a,d|=i[a],s&=~m;return d}function Dn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(i,s){for(var a=i.suspendedLanes,d=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var w=31-wt(x),O=1<<w,V=m[w];V===-1?((O&a)===0||(O&d)!==0)&&(m[w]=Dn(O,s)):V<=s&&(i.expiredLanes|=O),x&=~O}}function Lt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ln(){var i=$t;return $t<<=1,($t&4194240)===0&&($t=64),i}function xn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Qt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-wt(s),i[s]=a}function yn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<a;){var m=31-wt(a),x=1<<m;s[m]=0,d[m]=-1,i[m]=-1,a&=~x}}function $r(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var d=31-wt(a),m=1<<d;m&s|i[d]&s&&(i[d]|=s),a&=~m}}var mt=0;function kp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Bp,cu,zp,Vp,Hp,uu=!1,il=[],ur=null,dr=null,fr=null,Bo=new Map,zo=new Map,hr=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(i,s){switch(i){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Bo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(s.pointerId)}}function Vo(i,s,a,d,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:x,targetContainers:[m]},s!==null&&(s=ta(s),s!==null&&cu(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function $y(i,s,a,d,m){switch(s){case"focusin":return ur=Vo(ur,i,s,a,d,m),!0;case"dragenter":return dr=Vo(dr,i,s,a,d,m),!0;case"mouseover":return fr=Vo(fr,i,s,a,d,m),!0;case"pointerover":var x=m.pointerId;return Bo.set(x,Vo(Bo.get(x)||null,i,s,a,d,m)),!0;case"gotpointercapture":return x=m.pointerId,zo.set(x,Vo(zo.get(x)||null,i,s,a,d,m)),!0}return!1}function jp(i){var s=Kr(i.target);if(s!==null){var a=Ci(s);if(a!==null){if(s=a.tag,s===13){if(s=Ja(a),s!==null){i.blockedOn=s,Hp(i.priority,function(){zp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function rl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=fu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var d=new a.constructor(a.type,a);Pt=d,a.target.dispatchEvent(d),Pt=null}else return s=ta(a),s!==null&&cu(s),i.blockedOn=a,!1;s.shift()}return!0}function Wp(i,s,a){rl(i)&&a.delete(s)}function Ky(){uu=!1,ur!==null&&rl(ur)&&(ur=null),dr!==null&&rl(dr)&&(dr=null),fr!==null&&rl(fr)&&(fr=null),Bo.forEach(Wp),zo.forEach(Wp)}function Ho(i,s){i.blockedOn===s&&(i.blockedOn=null,uu||(uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ky)))}function Go(i){function s(m){return Ho(m,i)}if(0<il.length){Ho(il[0],i);for(var a=1;a<il.length;a++){var d=il[a];d.blockedOn===i&&(d.blockedOn=null)}}for(ur!==null&&Ho(ur,i),dr!==null&&Ho(dr,i),fr!==null&&Ho(fr,i),Bo.forEach(s),zo.forEach(s),a=0;a<hr.length;a++)d=hr[a],d.blockedOn===i&&(d.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)jp(a),a.blockedOn===null&&hr.shift()}var Ls=A.ReactCurrentBatchConfig,sl=!0;function Zy(i,s,a,d){var m=mt,x=Ls.transition;Ls.transition=null;try{mt=1,du(i,s,a,d)}finally{mt=m,Ls.transition=x}}function Qy(i,s,a,d){var m=mt,x=Ls.transition;Ls.transition=null;try{mt=4,du(i,s,a,d)}finally{mt=m,Ls.transition=x}}function du(i,s,a,d){if(sl){var m=fu(i,s,a,d);if(m===null)Pu(i,s,d,ol,a),Gp(i,d);else if($y(m,i,s,a,d))d.stopPropagation();else if(Gp(i,d),s&4&&-1<qy.indexOf(i)){for(;m!==null;){var x=ta(m);if(x!==null&&Bp(x),x=fu(i,s,a,d),x===null&&Pu(i,s,d,ol,a),x===m)break;m=x}m!==null&&d.stopPropagation()}else Pu(i,s,d,null,a)}}var ol=null;function fu(i,s,a,d){if(ol=null,i=X(d),i=Kr(i),i!==null)if(s=Ci(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Ja(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ol=i,null}function Xp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case Ie:return 4;case ke:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var pr=null,hu=null,al=null;function Yp(){if(al)return al;var i,s=hu,a=s.length,d,m="value"in pr?pr.value:pr.textContent,x=m.length;for(i=0;i<a&&s[i]===m[i];i++);var w=a-i;for(d=1;d<=w&&s[a-d]===m[x-d];d++);return al=m.slice(i,1<d?1-d:void 0)}function ll(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cl(){return!0}function qp(){return!1}function Xn(i){function s(a,d,m,x,w){this._reactName=a,this._targetInst=m,this.type=d,this.nativeEvent=x,this.target=w,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(a=i[O],this[O]=a?a(x):x[O]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?cl:qp,this.isPropagationStopped=qp,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),s}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Xn(Ns),jo=se({},Ns,{view:0,detail:0}),Jy=Xn(jo),mu,gu,Wo,ul=se({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Wo&&(Wo&&i.type==="mousemove"?(mu=i.screenX-Wo.screenX,gu=i.screenY-Wo.screenY):gu=mu=0,Wo=i),mu)},movementY:function(i){return"movementY"in i?i.movementY:gu}}),$p=Xn(ul),eS=se({},ul,{dataTransfer:0}),tS=Xn(eS),nS=se({},jo,{relatedTarget:0}),vu=Xn(nS),iS=se({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=Xn(iS),sS=se({},Ns,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),oS=Xn(sS),aS=se({},Ns,{data:0}),Kp=Xn(aS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=uS[i])?!!s[i]:!1}function _u(){return dS}var fS=se({},jo,{key:function(i){if(i.key){var s=lS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ll(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(i){return i.type==="keypress"?ll(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ll(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),hS=Xn(fS),pS=se({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Xn(pS),mS=se({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),gS=Xn(mS),vS=se({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Xn(vS),xS=se({},ul,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Xn(xS),SS=[9,13,27,32],xu=u&&"CompositionEvent"in window,Xo=null;u&&"documentMode"in document&&(Xo=document.documentMode);var MS=u&&"TextEvent"in window&&!Xo,Qp=u&&(!xu||Xo&&8<Xo&&11>=Xo),Jp=" ",em=!1;function tm(i,s){switch(i){case"keyup":return SS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Is=!1;function ES(i,s){switch(i){case"compositionend":return nm(s);case"keypress":return s.which!==32?null:(em=!0,Jp);case"textInput":return i=s.data,i===Jp&&em?null:i;default:return null}}function TS(i,s){if(Is)return i==="compositionend"||!xu&&tm(i,s)?(i=Yp(),al=hu=pr=null,Is=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Qp&&s.locale!=="ko"?null:s.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!wS[i.type]:s==="textarea"}function rm(i,s,a,d){De(d),s=ml(s,"onChange"),0<s.length&&(a=new pu("onChange","change",null,a,d),i.push({event:a,listeners:s}))}var Yo=null,qo=null;function AS(i){Mm(i,0)}function dl(i){var s=Bs(i);if(gt(s))return i}function CS(i,s){if(i==="change")return s}var sm=!1;if(u){var yu;if(u){var Su="oninput"in document;if(!Su){var om=document.createElement("div");om.setAttribute("oninput","return;"),Su=typeof om.oninput=="function"}yu=Su}else yu=!1;sm=yu&&(!document.documentMode||9<document.documentMode)}function am(){Yo&&(Yo.detachEvent("onpropertychange",lm),qo=Yo=null)}function lm(i){if(i.propertyName==="value"&&dl(qo)){var s=[];rm(s,qo,i,X(i)),Fn(AS,s)}}function RS(i,s,a){i==="focusin"?(am(),Yo=s,qo=a,Yo.attachEvent("onpropertychange",lm)):i==="focusout"&&am()}function PS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dl(qo)}function bS(i,s){if(i==="click")return dl(s)}function DS(i,s){if(i==="input"||i==="change")return dl(s)}function LS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var fi=typeof Object.is=="function"?Object.is:LS;function $o(i,s){if(fi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var m=a[d];if(!f.call(s,m)||!fi(i[m],s[m]))return!1}return!0}function cm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function um(i,s){var a=cm(i);i=0;for(var d;a;){if(a.nodeType===3){if(d=i+a.textContent.length,i<=s&&d>=s)return{node:a,offset:s-i};i=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cm(a)}}function dm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?dm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function fm(){for(var i=window,s=Ut();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=Ut(i.document)}return s}function Mu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function NS(i){var s=fm(),a=i.focusedElem,d=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&dm(a.ownerDocument.documentElement,a)){if(d!==null&&Mu(a)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=a.textContent.length,x=Math.min(d.start,m);d=d.end===void 0?x:Math.min(d.end,m),!i.extend&&x>d&&(m=d,d=x,x=m),m=um(a,x);var w=um(a,d);m&&w&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>d?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var IS=u&&"documentMode"in document&&11>=document.documentMode,Us=null,Eu=null,Ko=null,Tu=!1;function hm(i,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||Us==null||Us!==Ut(d)||(d=Us,"selectionStart"in d&&Mu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ko&&$o(Ko,d)||(Ko=d,d=ml(Eu,"onSelect"),0<d.length&&(s=new pu("onSelect","select",null,s,a),i.push({event:s,listeners:d}),s.target=Us)))}function fl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Fs={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},wu={},pm={};u&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function hl(i){if(wu[i])return wu[i];if(!Fs[i])return i;var s=Fs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in pm)return wu[i]=s[a];return i}var mm=hl("animationend"),gm=hl("animationiteration"),vm=hl("animationstart"),_m=hl("transitionend"),xm=new Map,ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(i,s){xm.set(i,s),l(s,[i])}for(var Au=0;Au<ym.length;Au++){var Cu=ym[Au],US=Cu.toLowerCase(),FS=Cu[0].toUpperCase()+Cu.slice(1);mr(US,"on"+FS)}mr(mm,"onAnimationEnd"),mr(gm,"onAnimationIteration"),mr(vm,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(_m,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Sm(i,s,a){var d=i.type||"unknown-event";i.currentTarget=a,Qa(d,s,void 0,i),i.currentTarget=null}function Mm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var d=i[a],m=d.event;d=d.listeners;e:{var x=void 0;if(s)for(var w=d.length-1;0<=w;w--){var O=d[w],V=O.instance,J=O.currentTarget;if(O=O.listener,V!==x&&m.isPropagationStopped())break e;Sm(m,O,J),x=V}else for(w=0;w<d.length;w++){if(O=d[w],V=O.instance,J=O.currentTarget,O=O.listener,V!==x&&m.isPropagationStopped())break e;Sm(m,O,J),x=V}}}if(Yr)throw i=cr,Yr=!1,cr=null,i}function kt(i,s){var a=s[Uu];a===void 0&&(a=s[Uu]=new Set);var d=i+"__bubble";a.has(d)||(Em(s,i,2,!1),a.add(d))}function Ru(i,s,a){var d=0;s&&(d|=4),Em(a,i,d,s)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Qo(i){if(!i[pl]){i[pl]=!0,r.forEach(function(a){a!=="selectionchange"&&(OS.has(a)||Ru(a,!1,i),Ru(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[pl]||(s[pl]=!0,Ru("selectionchange",!1,s))}}function Em(i,s,a,d){switch(Xp(s)){case 1:var m=Zy;break;case 4:m=Qy;break;default:m=du}a=m.bind(null,s,a,i),m=void 0,!bs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),d?m!==void 0?i.addEventListener(s,a,{capture:!0,passive:m}):i.addEventListener(s,a,!0):m!==void 0?i.addEventListener(s,a,{passive:m}):i.addEventListener(s,a,!1)}function Pu(i,s,a,d,m){var x=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var O=d.stateNode.containerInfo;if(O===m||O.nodeType===8&&O.parentNode===m)break;if(w===4)for(w=d.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;w=w.return}for(;O!==null;){if(w=Kr(O),w===null)return;if(V=w.tag,V===5||V===6){d=x=w;continue e}O=O.parentNode}}d=d.return}Fn(function(){var J=x,_e=X(a),ye=[];e:{var ge=xm.get(i);if(ge!==void 0){var Ne=pu,He=i;switch(i){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":Ne=hS;break;case"focusin":He="focus",Ne=vu;break;case"focusout":He="blur",Ne=vu;break;case"beforeblur":case"afterblur":Ne=vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=gS;break;case mm:case gm:case vm:Ne=rS;break;case _m:Ne=_S;break;case"scroll":Ne=Jy;break;case"wheel":Ne=yS;break;case"copy":case"cut":case"paste":Ne=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Zp}var Ge=(s&4)!==0,Jt=!Ge&&i==="scroll",$=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var W=J,K;W!==null;){K=W;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=bn(W,$),Te!=null&&Ge.push(Jo(W,Te,K)))),Jt)break;W=W.return}0<Ge.length&&(ge=new Ne(ge,He,null,a,_e),ye.push({event:ge,listeners:Ge}))}}if((s&7)===0){e:{if(ge=i==="mouseover"||i==="pointerover",Ne=i==="mouseout"||i==="pointerout",ge&&a!==Pt&&(He=a.relatedTarget||a.fromElement)&&(Kr(He)||He[zi]))break e;if((Ne||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(He=a.relatedTarget||a.toElement,Ne=J,He=He?Kr(He):null,He!==null&&(Jt=Ci(He),He!==Jt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ne=null,He=J),Ne!==He)){if(Ge=$p,Te="onMouseLeave",$="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=Zp,Te="onPointerLeave",$="onPointerEnter",W="pointer"),Jt=Ne==null?ge:Bs(Ne),K=He==null?ge:Bs(He),ge=new Ge(Te,W+"leave",Ne,a,_e),ge.target=Jt,ge.relatedTarget=K,Te=null,Kr(_e)===J&&(Ge=new Ge($,W+"enter",He,a,_e),Ge.target=K,Ge.relatedTarget=Jt,Te=Ge),Jt=Te,Ne&&He)t:{for(Ge=Ne,$=He,W=0,K=Ge;K;K=Os(K))W++;for(K=0,Te=$;Te;Te=Os(Te))K++;for(;0<W-K;)Ge=Os(Ge),W--;for(;0<K-W;)$=Os($),K--;for(;W--;){if(Ge===$||$!==null&&Ge===$.alternate)break t;Ge=Os(Ge),$=Os($)}Ge=null}else Ge=null;Ne!==null&&Tm(ye,ge,Ne,Ge,!1),He!==null&&Jt!==null&&Tm(ye,Jt,He,Ge,!0)}}e:{if(ge=J?Bs(J):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var We=CS;else if(im(ge))if(sm)We=DS;else{We=PS;var Ze=RS}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=bS);if(We&&(We=We(i,J))){rm(ye,We,a,_e);break e}Ze&&Ze(i,ge,J),i==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&bt(ge,"number",ge.value)}switch(Ze=J?Bs(J):window,i){case"focusin":(im(Ze)||Ze.contentEditable==="true")&&(Us=Ze,Eu=J,Ko=null);break;case"focusout":Ko=Eu=Us=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,hm(ye,a,_e);break;case"selectionchange":if(IS)break;case"keydown":case"keyup":hm(ye,a,_e)}var Qe;if(xu)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Is?tm(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Qp&&a.locale!=="ko"&&(Is||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Is&&(Qe=Yp()):(pr=_e,hu="value"in pr?pr.value:pr.textContent,Is=!0)),Ze=ml(J,rt),0<Ze.length&&(rt=new Kp(rt,i,null,a,_e),ye.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=nm(a),Qe!==null&&(rt.data=Qe)))),(Qe=MS?ES(i,a):TS(i,a))&&(J=ml(J,"onBeforeInput"),0<J.length&&(_e=new Kp("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:J}),_e.data=Qe))}Mm(ye,s)})}function Jo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function ml(i,s){for(var a=s+"Capture",d=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=bn(i,a),x!=null&&d.unshift(Jo(i,x,m)),x=bn(i,s),x!=null&&d.push(Jo(i,x,m))),i=i.return}return d}function Os(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Tm(i,s,a,d,m){for(var x=s._reactName,w=[];a!==null&&a!==d;){var O=a,V=O.alternate,J=O.stateNode;if(V!==null&&V===d)break;O.tag===5&&J!==null&&(O=J,m?(V=bn(a,x),V!=null&&w.unshift(Jo(a,V,O))):m||(V=bn(a,x),V!=null&&w.push(Jo(a,V,O)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var kS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function wm(i){return(typeof i=="string"?i:""+i).replace(kS,`
`).replace(BS,"")}function gl(i,s,a){if(s=wm(s),wm(i)!==s&&a)throw Error(t(425))}function vl(){}var bu=null,Du=null;function Lu(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(i){return Am.resolve(null).then(i).catch(HS)}:Nu;function HS(i){setTimeout(function(){throw i})}function Iu(i,s){var a=s,d=0;do{var m=a.nextSibling;if(i.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(d===0){i.removeChild(m),Go(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=m}while(a);Go(s)}function gr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Cm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Ri="__reactFiber$"+ks,ea="__reactProps$"+ks,zi="__reactContainer$"+ks,Uu="__reactEvents$"+ks,GS="__reactListeners$"+ks,jS="__reactHandles$"+ks;function Kr(i){var s=i[Ri];if(s)return s;for(var a=i.parentNode;a;){if(s=a[zi]||a[Ri]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Cm(i);i!==null;){if(a=i[Ri])return a;i=Cm(i)}return s}i=a,a=i.parentNode}return null}function ta(i){return i=i[Ri]||i[zi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Bs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function _l(i){return i[ea]||null}var Fu=[],zs=-1;function vr(i){return{current:i}}function Bt(i){0>zs||(i.current=Fu[zs],Fu[zs]=null,zs--)}function Ft(i,s){zs++,Fu[zs]=i.current,i.current=s}var _r={},Sn=vr(_r),On=vr(!1),Zr=_r;function Vs(i,s){var a=i.type.contextTypes;if(!a)return _r;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in a)m[x]=s[x];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function kn(i){return i=i.childContextTypes,i!=null}function xl(){Bt(On),Bt(Sn)}function Rm(i,s,a){if(Sn.current!==_r)throw Error(t(168));Ft(Sn,s),Ft(On,a)}function Pm(i,s,a){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var m in d)if(!(m in s))throw Error(t(108,xe(i)||"Unknown",m));return se({},a,d)}function yl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||_r,Zr=Sn.current,Ft(Sn,i),Ft(On,On.current),!0}function bm(i,s,a){var d=i.stateNode;if(!d)throw Error(t(169));a?(i=Pm(i,s,Zr),d.__reactInternalMemoizedMergedChildContext=i,Bt(On),Bt(Sn),Ft(Sn,i)):Bt(On),Ft(On,a)}var Vi=null,Sl=!1,Ou=!1;function Dm(i){Vi===null?Vi=[i]:Vi.push(i)}function WS(i){Sl=!0,Dm(i)}function xr(){if(!Ou&&Vi!==null){Ou=!0;var i=0,s=mt;try{var a=Vi;for(mt=1;i<a.length;i++){var d=a[i];do d=d(!0);while(d!==null)}Vi=null,Sl=!1}catch(m){throw Vi!==null&&(Vi=Vi.slice(i+1)),D(Re,xr),m}finally{mt=s,Ou=!1}}return null}var Hs=[],Gs=0,Ml=null,El=0,ti=[],ni=0,Qr=null,Hi=1,Gi="";function Jr(i,s){Hs[Gs++]=El,Hs[Gs++]=Ml,Ml=i,El=s}function Lm(i,s,a){ti[ni++]=Hi,ti[ni++]=Gi,ti[ni++]=Qr,Qr=i;var d=Hi;i=Gi;var m=32-wt(d)-1;d&=~(1<<m),a+=1;var x=32-wt(s)+m;if(30<x){var w=m-m%5;x=(d&(1<<w)-1).toString(32),d>>=w,m-=w,Hi=1<<32-wt(s)+m|a<<m|d,Gi=x+i}else Hi=1<<x|a<<m|d,Gi=i}function ku(i){i.return!==null&&(Jr(i,1),Lm(i,1,0))}function Bu(i){for(;i===Ml;)Ml=Hs[--Gs],Hs[Gs]=null,El=Hs[--Gs],Hs[Gs]=null;for(;i===Qr;)Qr=ti[--ni],ti[ni]=null,Gi=ti[--ni],ti[ni]=null,Hi=ti[--ni],ti[ni]=null}var Yn=null,qn=null,Gt=!1,hi=null;function Nm(i,s){var a=oi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Im(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Yn=i,qn=gr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Yn=i,qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qr!==null?{id:Hi,overflow:Gi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=oi(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Yn=i,qn=null,!0):!1;default:return!1}}function zu(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Vu(i){if(Gt){var s=qn;if(s){var a=s;if(!Im(i,s)){if(zu(i))throw Error(t(418));s=gr(a.nextSibling);var d=Yn;s&&Im(i,s)?Nm(d,a):(i.flags=i.flags&-4097|2,Gt=!1,Yn=i)}}else{if(zu(i))throw Error(t(418));i.flags=i.flags&-4097|2,Gt=!1,Yn=i}}}function Um(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Yn=i}function Tl(i){if(i!==Yn)return!1;if(!Gt)return Um(i),Gt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Lu(i.type,i.memoizedProps)),s&&(s=qn)){if(zu(i))throw Fm(),Error(t(418));for(;s;)Nm(i,s),s=gr(s.nextSibling)}if(Um(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){qn=gr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}qn=null}}else qn=Yn?gr(i.stateNode.nextSibling):null;return!0}function Fm(){for(var i=qn;i;)i=gr(i.nextSibling)}function js(){qn=Yn=null,Gt=!1}function Hu(i){hi===null?hi=[i]:hi.push(i)}var XS=A.ReactCurrentBatchConfig;function na(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,i));var m=d,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(w){var O=m.refs;w===null?delete O[x]:O[x]=w},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function wl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Om(i){var s=i._init;return s(i._payload)}function km(i){function s($,W){if(i){var K=$.deletions;K===null?($.deletions=[W],$.flags|=16):K.push(W)}}function a($,W){if(!i)return null;for(;W!==null;)s($,W),W=W.sibling;return null}function d($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function m($,W){return $=Cr($,W),$.index=0,$.sibling=null,$}function x($,W,K){return $.index=K,i?(K=$.alternate,K!==null?(K=K.index,K<W?($.flags|=2,W):K):($.flags|=2,W)):($.flags|=1048576,W)}function w($){return i&&$.alternate===null&&($.flags|=2),$}function O($,W,K,Te){return W===null||W.tag!==6?(W=Nd(K,$.mode,Te),W.return=$,W):(W=m(W,K),W.return=$,W)}function V($,W,K,Te){var We=K.type;return We===F?_e($,W,K.props.children,Te,K.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ce&&Om(We)===W.type)?(Te=m(W,K.props),Te.ref=na($,W,K),Te.return=$,Te):(Te=$l(K.type,K.key,K.props,null,$.mode,Te),Te.ref=na($,W,K),Te.return=$,Te)}function J($,W,K,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=Id(K,$.mode,Te),W.return=$,W):(W=m(W,K.children||[]),W.return=$,W)}function _e($,W,K,Te,We){return W===null||W.tag!==7?(W=as(K,$.mode,Te,We),W.return=$,W):(W=m(W,K),W.return=$,W)}function ye($,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Nd(""+W,$.mode,K),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return K=$l(W.type,W.key,W.props,null,$.mode,K),K.ref=na($,null,W),K.return=$,K;case I:return W=Id(W,$.mode,K),W.return=$,W;case ce:var Te=W._init;return ye($,Te(W._payload),K)}if(Xe(W)||le(W))return W=as(W,$.mode,K,null),W.return=$,W;wl($,W)}return null}function ge($,W,K,Te){var We=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:O($,W,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case N:return K.key===We?V($,W,K,Te):null;case I:return K.key===We?J($,W,K,Te):null;case ce:return We=K._init,ge($,W,We(K._payload),Te)}if(Xe(K)||le(K))return We!==null?null:_e($,W,K,Te,null);wl($,K)}return null}function Ne($,W,K,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,O(W,$,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case N:return $=$.get(Te.key===null?K:Te.key)||null,V(W,$,Te,We);case I:return $=$.get(Te.key===null?K:Te.key)||null,J(W,$,Te,We);case ce:var Ze=Te._init;return Ne($,W,K,Ze(Te._payload),We)}if(Xe(Te)||le(Te))return $=$.get(K)||null,_e(W,$,Te,We,null);wl(W,Te)}return null}function He($,W,K,Te){for(var We=null,Ze=null,Qe=W,rt=W=0,fn=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(fn=Qe,Qe=null):fn=Qe.sibling;var At=ge($,Qe,K[rt],Te);if(At===null){Qe===null&&(Qe=fn);break}i&&Qe&&At.alternate===null&&s($,Qe),W=x(At,W,rt),Ze===null?We=At:Ze.sibling=At,Ze=At,Qe=fn}if(rt===K.length)return a($,Qe),Gt&&Jr($,rt),We;if(Qe===null){for(;rt<K.length;rt++)Qe=ye($,K[rt],Te),Qe!==null&&(W=x(Qe,W,rt),Ze===null?We=Qe:Ze.sibling=Qe,Ze=Qe);return Gt&&Jr($,rt),We}for(Qe=d($,Qe);rt<K.length;rt++)fn=Ne(Qe,$,rt,K[rt],Te),fn!==null&&(i&&fn.alternate!==null&&Qe.delete(fn.key===null?rt:fn.key),W=x(fn,W,rt),Ze===null?We=fn:Ze.sibling=fn,Ze=fn);return i&&Qe.forEach(function(Rr){return s($,Rr)}),Gt&&Jr($,rt),We}function Ge($,W,K,Te){var We=le(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var Ze=We=null,Qe=W,rt=W=0,fn=null,At=K.next();Qe!==null&&!At.done;rt++,At=K.next()){Qe.index>rt?(fn=Qe,Qe=null):fn=Qe.sibling;var Rr=ge($,Qe,At.value,Te);if(Rr===null){Qe===null&&(Qe=fn);break}i&&Qe&&Rr.alternate===null&&s($,Qe),W=x(Rr,W,rt),Ze===null?We=Rr:Ze.sibling=Rr,Ze=Rr,Qe=fn}if(At.done)return a($,Qe),Gt&&Jr($,rt),We;if(Qe===null){for(;!At.done;rt++,At=K.next())At=ye($,At.value,Te),At!==null&&(W=x(At,W,rt),Ze===null?We=At:Ze.sibling=At,Ze=At);return Gt&&Jr($,rt),We}for(Qe=d($,Qe);!At.done;rt++,At=K.next())At=Ne(Qe,$,rt,At.value,Te),At!==null&&(i&&At.alternate!==null&&Qe.delete(At.key===null?rt:At.key),W=x(At,W,rt),Ze===null?We=At:Ze.sibling=At,Ze=At);return i&&Qe.forEach(function(wM){return s($,wM)}),Gt&&Jr($,rt),We}function Jt($,W,K,Te){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case N:e:{for(var We=K.key,Ze=W;Ze!==null;){if(Ze.key===We){if(We=K.type,We===F){if(Ze.tag===7){a($,Ze.sibling),W=m(Ze,K.props.children),W.return=$,$=W;break e}}else if(Ze.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ce&&Om(We)===Ze.type){a($,Ze.sibling),W=m(Ze,K.props),W.ref=na($,Ze,K),W.return=$,$=W;break e}a($,Ze);break}else s($,Ze);Ze=Ze.sibling}K.type===F?(W=as(K.props.children,$.mode,Te,K.key),W.return=$,$=W):(Te=$l(K.type,K.key,K.props,null,$.mode,Te),Te.ref=na($,W,K),Te.return=$,$=Te)}return w($);case I:e:{for(Ze=K.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){a($,W.sibling),W=m(W,K.children||[]),W.return=$,$=W;break e}else{a($,W);break}else s($,W);W=W.sibling}W=Id(K,$.mode,Te),W.return=$,$=W}return w($);case ce:return Ze=K._init,Jt($,W,Ze(K._payload),Te)}if(Xe(K))return He($,W,K,Te);if(le(K))return Ge($,W,K,Te);wl($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(a($,W.sibling),W=m(W,K),W.return=$,$=W):(a($,W),W=Nd(K,$.mode,Te),W.return=$,$=W),w($)):a($,W)}return Jt}var Ws=km(!0),Bm=km(!1),Al=vr(null),Cl=null,Xs=null,Gu=null;function ju(){Gu=Xs=Cl=null}function Wu(i){var s=Al.current;Bt(Al),i._currentValue=s}function Xu(i,s,a){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===a)break;i=i.return}}function Ys(i,s){Cl=i,Gu=Xs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Bn=!0),i.firstContext=null)}function ii(i){var s=i._currentValue;if(Gu!==i)if(i={context:i,memoizedValue:s,next:null},Xs===null){if(Cl===null)throw Error(t(308));Xs=i,Cl.dependencies={lanes:0,firstContext:i}}else Xs=Xs.next=i;return s}var es=null;function Yu(i){es===null?es=[i]:es.push(i)}function zm(i,s,a,d){var m=s.interleaved;return m===null?(a.next=a,Yu(s)):(a.next=m.next,m.next=a),s.interleaved=a,ji(i,d)}function ji(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var yr=!1;function qu(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Wi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Sr(i,s,a){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Et&2)!==0){var m=d.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s,ji(i,a)}return m=d.interleaved,m===null?(s.next=s,Yu(d)):(s.next=m.next,m.next=s),d.interleaved=s,ji(i,a)}function Rl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,a|=d,s.lanes=a,$r(i,a)}}function Hm(i,s){var a=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var m=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?m=x=w:x=x.next=w,a=a.next}while(a!==null);x===null?m=x=s:x=x.next=s}else m=x=s;a={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:d.shared,effects:d.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Pl(i,s,a,d){var m=i.updateQueue;yr=!1;var x=m.firstBaseUpdate,w=m.lastBaseUpdate,O=m.shared.pending;if(O!==null){m.shared.pending=null;var V=O,J=V.next;V.next=null,w===null?x=J:w.next=J,w=V;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,O=_e.lastBaseUpdate,O!==w&&(O===null?_e.firstBaseUpdate=J:O.next=J,_e.lastBaseUpdate=V))}if(x!==null){var ye=m.baseState;w=0,_e=J=V=null,O=x;do{var ge=O.lane,Ne=O.eventTime;if((d&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ne,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var He=i,Ge=O;switch(ge=s,Ne=a,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(Ne,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ge=typeof He=="function"?He.call(Ne,ye,ge):He,ge==null)break e;ye=se({},ye,ge);break e;case 2:yr=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,ge=m.effects,ge===null?m.effects=[O]:ge.push(O))}else Ne={eventTime:Ne,lane:ge,tag:O.tag,payload:O.payload,callback:O.callback,next:null},_e===null?(J=_e=Ne,V=ye):_e=_e.next=Ne,w|=ge;if(O=O.next,O===null){if(O=m.shared.pending,O===null)break;ge=O,O=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(_e===null&&(V=ye),m.baseState=V,m.firstBaseUpdate=J,m.lastBaseUpdate=_e,s=m.shared.interleaved,s!==null){m=s;do w|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);is|=w,i.lanes=w,i.memoizedState=ye}}function Gm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],m=d.callback;if(m!==null){if(d.callback=null,d=a,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var ia={},Pi=vr(ia),ra=vr(ia),sa=vr(ia);function ts(i){if(i===ia)throw Error(t(174));return i}function $u(i,s){switch(Ft(sa,s),Ft(ra,i),Ft(Pi,ia),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:je(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=je(s,i)}Bt(Pi),Ft(Pi,s)}function qs(){Bt(Pi),Bt(ra),Bt(sa)}function jm(i){ts(sa.current);var s=ts(Pi.current),a=je(s,i.type);s!==a&&(Ft(ra,i),Ft(Pi,a))}function Ku(i){ra.current===i&&(Bt(Pi),Bt(ra))}var Wt=vr(0);function bl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Zu=[];function Qu(){for(var i=0;i<Zu.length;i++)Zu[i]._workInProgressVersionPrimary=null;Zu.length=0}var Dl=A.ReactCurrentDispatcher,Ju=A.ReactCurrentBatchConfig,ns=0,Xt=null,sn=null,un=null,Ll=!1,oa=!1,aa=0,YS=0;function Mn(){throw Error(t(321))}function ed(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!fi(i[a],s[a]))return!1;return!0}function td(i,s,a,d,m,x){if(ns=x,Xt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Dl.current=i===null||i.memoizedState===null?ZS:QS,i=a(d,m),oa){x=0;do{if(oa=!1,aa=0,25<=x)throw Error(t(301));x+=1,un=sn=null,s.updateQueue=null,Dl.current=JS,i=a(d,m)}while(oa)}if(Dl.current=Ul,s=sn!==null&&sn.next!==null,ns=0,un=sn=Xt=null,Ll=!1,s)throw Error(t(300));return i}function nd(){var i=aa!==0;return aa=0,i}function bi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Xt.memoizedState=un=i:un=un.next=i,un}function ri(){if(sn===null){var i=Xt.alternate;i=i!==null?i.memoizedState:null}else i=sn.next;var s=un===null?Xt.memoizedState:un.next;if(s!==null)un=s,sn=i;else{if(i===null)throw Error(t(310));sn=i,i={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?Xt.memoizedState=un=i:un=un.next=i}return un}function la(i,s){return typeof s=="function"?s(i):s}function id(i){var s=ri(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var d=sn,m=d.baseQueue,x=a.pending;if(x!==null){if(m!==null){var w=m.next;m.next=x.next,x.next=w}d.baseQueue=m=x,a.pending=null}if(m!==null){x=m.next,d=d.baseState;var O=w=null,V=null,J=x;do{var _e=J.lane;if((ns&_e)===_e)V!==null&&(V=V.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),d=J.hasEagerState?J.eagerState:i(d,J.action);else{var ye={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};V===null?(O=V=ye,w=d):V=V.next=ye,Xt.lanes|=_e,is|=_e}J=J.next}while(J!==null&&J!==x);V===null?w=d:V.next=O,fi(d,s.memoizedState)||(Bn=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=V,a.lastRenderedState=d}if(i=a.interleaved,i!==null){m=i;do x=m.lane,Xt.lanes|=x,is|=x,m=m.next;while(m!==i)}else m===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function rd(i){var s=ri(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var d=a.dispatch,m=a.pending,x=s.memoizedState;if(m!==null){a.pending=null;var w=m=m.next;do x=i(x,w.action),w=w.next;while(w!==m);fi(x,s.memoizedState)||(Bn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),a.lastRenderedState=x}return[x,d]}function Wm(){}function Xm(i,s){var a=Xt,d=ri(),m=s(),x=!fi(d.memoizedState,m);if(x&&(d.memoizedState=m,Bn=!0),d=d.queue,sd($m.bind(null,a,d,i),[i]),d.getSnapshot!==s||x||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,ca(9,qm.bind(null,a,d,m,s),void 0,null),dn===null)throw Error(t(349));(ns&30)!==0||Ym(a,s,m)}return m}function Ym(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function qm(i,s,a,d){s.value=a,s.getSnapshot=d,Km(s)&&Zm(i)}function $m(i,s,a){return a(function(){Km(s)&&Zm(i)})}function Km(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!fi(i,a)}catch{return!0}}function Zm(i){var s=ji(i,1);s!==null&&vi(s,i,1,-1)}function Qm(i){var s=bi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:i},s.queue=i,i=i.dispatch=KS.bind(null,Xt,i),[s.memoizedState,i]}function ca(i,s,a,d){return i={tag:i,create:s,destroy:a,deps:d,next:null},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(d=a.next,a.next=i,i.next=d,s.lastEffect=i)),i}function Jm(){return ri().memoizedState}function Nl(i,s,a,d){var m=bi();Xt.flags|=i,m.memoizedState=ca(1|s,a,void 0,d===void 0?null:d)}function Il(i,s,a,d){var m=ri();d=d===void 0?null:d;var x=void 0;if(sn!==null){var w=sn.memoizedState;if(x=w.destroy,d!==null&&ed(d,w.deps)){m.memoizedState=ca(s,a,x,d);return}}Xt.flags|=i,m.memoizedState=ca(1|s,a,x,d)}function eg(i,s){return Nl(8390656,8,i,s)}function sd(i,s){return Il(2048,8,i,s)}function tg(i,s){return Il(4,2,i,s)}function ng(i,s){return Il(4,4,i,s)}function ig(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function rg(i,s,a){return a=a!=null?a.concat([i]):null,Il(4,4,ig.bind(null,s,i),a)}function od(){}function sg(i,s){var a=ri();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ed(s,d[1])?d[0]:(a.memoizedState=[i,s],i)}function og(i,s){var a=ri();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ed(s,d[1])?d[0]:(i=i(),a.memoizedState=[i,s],i)}function ag(i,s,a){return(ns&21)===0?(i.baseState&&(i.baseState=!1,Bn=!0),i.memoizedState=a):(fi(a,s)||(a=Ln(),Xt.lanes|=a,is|=a,i.baseState=!0),s)}function qS(i,s){var a=mt;mt=a!==0&&4>a?a:4,i(!0);var d=Ju.transition;Ju.transition={};try{i(!1),s()}finally{mt=a,Ju.transition=d}}function lg(){return ri().memoizedState}function $S(i,s,a){var d=wr(i);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},cg(i))ug(s,a);else if(a=zm(i,s,a,d),a!==null){var m=In();vi(a,i,d,m),dg(a,s,d)}}function KS(i,s,a){var d=wr(i),m={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(cg(i))ug(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var w=s.lastRenderedState,O=x(w,a);if(m.hasEagerState=!0,m.eagerState=O,fi(O,w)){var V=s.interleaved;V===null?(m.next=m,Yu(s)):(m.next=V.next,V.next=m),s.interleaved=m;return}}catch{}finally{}a=zm(i,s,m,d),a!==null&&(m=In(),vi(a,i,d,m),dg(a,s,d))}}function cg(i){var s=i.alternate;return i===Xt||s!==null&&s===Xt}function ug(i,s){oa=Ll=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function dg(i,s,a){if((a&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,a|=d,s.lanes=a,$r(i,a)}}var Ul={readContext:ii,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},ZS={readContext:ii,useCallback:function(i,s){return bi().memoizedState=[i,s===void 0?null:s],i},useContext:ii,useEffect:eg,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Nl(4194308,4,ig.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Nl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Nl(4,2,i,s)},useMemo:function(i,s){var a=bi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var d=bi();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=$S.bind(null,Xt,i),[d.memoizedState,i]},useRef:function(i){var s=bi();return i={current:i},s.memoizedState=i},useState:Qm,useDebugValue:od,useDeferredValue:function(i){return bi().memoizedState=i},useTransition:function(){var i=Qm(!1),s=i[0];return i=qS.bind(null,i[1]),bi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var d=Xt,m=bi();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),dn===null)throw Error(t(349));(ns&30)!==0||Ym(d,s,a)}m.memoizedState=a;var x={value:a,getSnapshot:s};return m.queue=x,eg($m.bind(null,d,x,i),[i]),d.flags|=2048,ca(9,qm.bind(null,d,x,a,s),void 0,null),a},useId:function(){var i=bi(),s=dn.identifierPrefix;if(Gt){var a=Gi,d=Hi;a=(d&~(1<<32-wt(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=aa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=YS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},QS={readContext:ii,useCallback:sg,useContext:ii,useEffect:sd,useImperativeHandle:rg,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:id,useRef:Jm,useState:function(){return id(la)},useDebugValue:od,useDeferredValue:function(i){var s=ri();return ag(s,sn.memoizedState,i)},useTransition:function(){var i=id(la)[0],s=ri().memoizedState;return[i,s]},useMutableSource:Wm,useSyncExternalStore:Xm,useId:lg,unstable_isNewReconciler:!1},JS={readContext:ii,useCallback:sg,useContext:ii,useEffect:sd,useImperativeHandle:rg,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:rd,useRef:Jm,useState:function(){return rd(la)},useDebugValue:od,useDeferredValue:function(i){var s=ri();return sn===null?s.memoizedState=i:ag(s,sn.memoizedState,i)},useTransition:function(){var i=rd(la)[0],s=ri().memoizedState;return[i,s]},useMutableSource:Wm,useSyncExternalStore:Xm,useId:lg,unstable_isNewReconciler:!1};function pi(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function ad(i,s,a,d){s=i.memoizedState,a=a(d,s),a=a==null?s:se({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Fl={isMounted:function(i){return(i=i._reactInternals)?Ci(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var d=In(),m=wr(i),x=Wi(d,m);x.payload=s,a!=null&&(x.callback=a),s=Sr(i,x,m),s!==null&&(vi(s,i,m,d),Rl(s,i,m))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var d=In(),m=wr(i),x=Wi(d,m);x.tag=1,x.payload=s,a!=null&&(x.callback=a),s=Sr(i,x,m),s!==null&&(vi(s,i,m,d),Rl(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=In(),d=wr(i),m=Wi(a,d);m.tag=2,s!=null&&(m.callback=s),s=Sr(i,m,d),s!==null&&(vi(s,i,d,a),Rl(s,i,d))}};function fg(i,s,a,d,m,x,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,x,w):s.prototype&&s.prototype.isPureReactComponent?!$o(a,d)||!$o(m,x):!0}function hg(i,s,a){var d=!1,m=_r,x=s.contextType;return typeof x=="object"&&x!==null?x=ii(x):(m=kn(s)?Zr:Sn.current,d=s.contextTypes,x=(d=d!=null)?Vs(i,m):_r),s=new s(a,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fl,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function pg(i,s,a,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==i&&Fl.enqueueReplaceState(s,s.state,null)}function ld(i,s,a,d){var m=i.stateNode;m.props=a,m.state=i.memoizedState,m.refs={},qu(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=ii(x):(x=kn(s)?Zr:Sn.current,m.context=Vs(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(ad(i,s,x,a),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Fl.enqueueReplaceState(m,m.state,null),Pl(i,a,m,d),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function $s(i,s){try{var a="",d=s;do a+=de(d),d=d.return;while(d);var m=a}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function cd(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function ud(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var eM=typeof WeakMap=="function"?WeakMap:Map;function mg(i,s,a){a=Wi(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){Gl||(Gl=!0,wd=d),ud(i,s)},a}function gg(i,s,a){a=Wi(-1,a),a.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=s.value;a.payload=function(){return d(m)},a.callback=function(){ud(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){ud(i,s),typeof d!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function vg(i,s,a){var d=i.pingCache;if(d===null){d=i.pingCache=new eM;var m=new Set;d.set(s,m)}else m=d.get(s),m===void 0&&(m=new Set,d.set(s,m));m.has(a)||(m.add(a),i=pM.bind(null,i,s,a),s.then(i,i))}function _g(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function xg(i,s,a,d,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Wi(-1,1),s.tag=2,Sr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var tM=A.ReactCurrentOwner,Bn=!1;function Nn(i,s,a,d){s.child=i===null?Bm(s,null,a,d):Ws(s,i.child,a,d)}function yg(i,s,a,d,m){a=a.render;var x=s.ref;return Ys(s,m),d=td(i,s,a,d,x,m),a=nd(),i!==null&&!Bn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Xi(i,s,m)):(Gt&&a&&ku(s),s.flags|=1,Nn(i,s,d,m),s.child)}function Sg(i,s,a,d,m){if(i===null){var x=a.type;return typeof x=="function"&&!Ld(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=x,Mg(i,s,x,d,m)):(i=$l(a.type,null,d,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&m)===0){var w=x.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(w,d)&&i.ref===s.ref)return Xi(i,s,m)}return s.flags|=1,i=Cr(x,d),i.ref=s.ref,i.return=s,s.child=i}function Mg(i,s,a,d,m){if(i!==null){var x=i.memoizedProps;if($o(x,d)&&i.ref===s.ref)if(Bn=!1,s.pendingProps=d=x,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Bn=!0);else return s.lanes=i.lanes,Xi(i,s,m)}return dd(i,s,a,d,m)}function Eg(i,s,a){var d=s.pendingProps,m=d.children,x=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Zs,$n),$n|=a;else{if((a&1073741824)===0)return i=x!==null?x.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ft(Zs,$n),$n|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:a,Ft(Zs,$n),$n|=d}else x!==null?(d=x.baseLanes|a,s.memoizedState=null):d=a,Ft(Zs,$n),$n|=d;return Nn(i,s,m,a),s.child}function Tg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function dd(i,s,a,d,m){var x=kn(a)?Zr:Sn.current;return x=Vs(s,x),Ys(s,m),a=td(i,s,a,d,x,m),d=nd(),i!==null&&!Bn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Xi(i,s,m)):(Gt&&d&&ku(s),s.flags|=1,Nn(i,s,a,m),s.child)}function wg(i,s,a,d,m){if(kn(a)){var x=!0;yl(s)}else x=!1;if(Ys(s,m),s.stateNode===null)kl(i,s),hg(s,a,d),ld(s,a,d,m),d=!0;else if(i===null){var w=s.stateNode,O=s.memoizedProps;w.props=O;var V=w.context,J=a.contextType;typeof J=="object"&&J!==null?J=ii(J):(J=kn(a)?Zr:Sn.current,J=Vs(s,J));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==d||V!==J)&&pg(s,w,d,J),yr=!1;var ge=s.memoizedState;w.state=ge,Pl(s,d,w,m),V=s.memoizedState,O!==d||ge!==V||On.current||yr?(typeof _e=="function"&&(ad(s,a,_e,d),V=s.memoizedState),(O=yr||fg(s,a,O,d,ge,V,J))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=V),w.props=d,w.state=V,w.context=J,d=O):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,Vm(i,s),O=s.memoizedProps,J=s.type===s.elementType?O:pi(s.type,O),w.props=J,ye=s.pendingProps,ge=w.context,V=a.contextType,typeof V=="object"&&V!==null?V=ii(V):(V=kn(a)?Zr:Sn.current,V=Vs(s,V));var Ne=a.getDerivedStateFromProps;(_e=typeof Ne=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==ye||ge!==V)&&pg(s,w,d,V),yr=!1,ge=s.memoizedState,w.state=ge,Pl(s,d,w,m);var He=s.memoizedState;O!==ye||ge!==He||On.current||yr?(typeof Ne=="function"&&(ad(s,a,Ne,d),He=s.memoizedState),(J=yr||fg(s,a,J,d,ge,He,V)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,He,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,He,V)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=He),w.props=d,w.state=He,w.context=V,d=J):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),d=!1)}return fd(i,s,a,d,x,m)}function fd(i,s,a,d,m,x){Tg(i,s);var w=(s.flags&128)!==0;if(!d&&!w)return m&&bm(s,a,!1),Xi(i,s,x);d=s.stateNode,tM.current=s;var O=w&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&w?(s.child=Ws(s,i.child,null,x),s.child=Ws(s,null,O,x)):Nn(i,s,O,x),s.memoizedState=d.state,m&&bm(s,a,!0),s.child}function Ag(i){var s=i.stateNode;s.pendingContext?Rm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Rm(i,s.context,!1),$u(i,s.containerInfo)}function Cg(i,s,a,d,m){return js(),Hu(m),s.flags|=256,Nn(i,s,a,d),s.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function pd(i){return{baseLanes:i,cachePool:null,transitions:null}}function Rg(i,s,a){var d=s.pendingProps,m=Wt.current,x=!1,w=(s.flags&128)!==0,O;if((O=w)||(O=i!==null&&i.memoizedState===null?!1:(m&2)!==0),O?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ft(Wt,m&1),i===null)return Vu(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=d.children,i=d.fallback,x?(d=s.mode,x=s.child,w={mode:"hidden",children:w},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=w):x=Kl(w,d,0,null),i=as(i,d,a,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=pd(a),s.memoizedState=hd,i):md(s,w));if(m=i.memoizedState,m!==null&&(O=m.dehydrated,O!==null))return nM(i,s,w,d,O,m,a);if(x){x=d.fallback,w=s.mode,m=i.child,O=m.sibling;var V={mode:"hidden",children:d.children};return(w&1)===0&&s.child!==m?(d=s.child,d.childLanes=0,d.pendingProps=V,s.deletions=null):(d=Cr(m,V),d.subtreeFlags=m.subtreeFlags&14680064),O!==null?x=Cr(O,x):(x=as(x,w,a,null),x.flags|=2),x.return=s,d.return=s,d.sibling=x,s.child=d,d=x,x=s.child,w=i.child.memoizedState,w=w===null?pd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},x.memoizedState=w,x.childLanes=i.childLanes&~a,s.memoizedState=hd,d}return x=i.child,i=x.sibling,d=Cr(x,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=d,s.memoizedState=null,d}function md(i,s){return s=Kl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Ol(i,s,a,d){return d!==null&&Hu(d),Ws(s,i.child,null,a),i=md(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function nM(i,s,a,d,m,x,w){if(a)return s.flags&256?(s.flags&=-257,d=cd(Error(t(422))),Ol(i,s,w,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=d.fallback,m=s.mode,d=Kl({mode:"visible",children:d.children},m,0,null),x=as(x,m,w,null),x.flags|=2,d.return=s,x.return=s,d.sibling=x,s.child=d,(s.mode&1)!==0&&Ws(s,i.child,null,w),s.child.memoizedState=pd(w),s.memoizedState=hd,x);if((s.mode&1)===0)return Ol(i,s,w,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var O=d.dgst;return d=O,x=Error(t(419)),d=cd(x,d,void 0),Ol(i,s,w,d)}if(O=(w&i.childLanes)!==0,Bn||O){if(d=dn,d!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|w))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,ji(i,m),vi(d,i,m,-1))}return Dd(),d=cd(Error(t(421))),Ol(i,s,w,d)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=mM.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,qn=gr(m.nextSibling),Yn=s,Gt=!0,hi=null,i!==null&&(ti[ni++]=Hi,ti[ni++]=Gi,ti[ni++]=Qr,Hi=i.id,Gi=i.overflow,Qr=s),s=md(s,d.children),s.flags|=4096,s)}function Pg(i,s,a){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),Xu(i.return,s,a)}function gd(i,s,a,d,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=a,x.tailMode=m)}function bg(i,s,a){var d=s.pendingProps,m=d.revealOrder,x=d.tail;if(Nn(i,s,d.children,a),d=Wt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Pg(i,a,s);else if(i.tag===19)Pg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Ft(Wt,d),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(a=s.child,m=null;a!==null;)i=a.alternate,i!==null&&bl(i)===null&&(m=a),a=a.sibling;a=m,a===null?(m=s.child,s.child=null):(m=a.sibling,a.sibling=null),gd(s,!1,m,a,x);break;case"backwards":for(a=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&bl(i)===null){s.child=m;break}i=m.sibling,m.sibling=a,a=m,m=i}gd(s,!0,a,null,x);break;case"together":gd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function kl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Xi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),is|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Cr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Cr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function iM(i,s,a){switch(s.tag){case 3:Ag(s),js();break;case 5:jm(s);break;case 1:kn(s.type)&&yl(s);break;case 4:$u(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,m=s.memoizedProps.value;Ft(Al,d._currentValue),d._currentValue=m;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Ft(Wt,Wt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Rg(i,s,a):(Ft(Wt,Wt.current&1),i=Xi(i,s,a),i!==null?i.sibling:null);Ft(Wt,Wt.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(i.flags&128)!==0){if(d)return bg(i,s,a);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ft(Wt,Wt.current),d)break;return null;case 22:case 23:return s.lanes=0,Eg(i,s,a)}return Xi(i,s,a)}var Dg,vd,Lg,Ng;Dg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vd=function(){},Lg=function(i,s,a,d){var m=i.memoizedProps;if(m!==d){i=s.stateNode,ts(Pi.current);var x=null;switch(a){case"input":m=G(i,m),d=G(i,d),x=[];break;case"select":m=se({},m,{value:void 0}),d=se({},d,{value:void 0}),x=[];break;case"textarea":m=C(i,m),d=C(i,d),x=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=vl)}ft(a,d);var w;a=null;for(J in m)if(!d.hasOwnProperty(J)&&m.hasOwnProperty(J)&&m[J]!=null)if(J==="style"){var O=m[J];for(w in O)O.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(o.hasOwnProperty(J)?x||(x=[]):(x=x||[]).push(J,null));for(J in d){var V=d[J];if(O=m!=null?m[J]:void 0,d.hasOwnProperty(J)&&V!==O&&(V!=null||O!=null))if(J==="style")if(O){for(w in O)!O.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in V)V.hasOwnProperty(w)&&O[w]!==V[w]&&(a||(a={}),a[w]=V[w])}else a||(x||(x=[]),x.push(J,a)),a=V;else J==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(x=x||[]).push(J,V)):J==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(J,""+V):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(o.hasOwnProperty(J)?(V!=null&&J==="onScroll"&&kt("scroll",i),x||O===V||(x=[])):(x=x||[]).push(J,V))}a&&(x=x||[]).push("style",a);var J=x;(s.updateQueue=J)&&(s.flags|=4)}},Ng=function(i,s,a,d){a!==d&&(s.flags|=4)};function ua(i,s){if(!Gt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function En(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,d=0;if(s)for(var m=i.child;m!==null;)a|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)a|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=d,i.childLanes=a,s}function rM(i,s,a){var d=s.pendingProps;switch(Bu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(s),null;case 1:return kn(s.type)&&xl(),En(s),null;case 3:return d=s.stateNode,qs(),Bt(On),Bt(Sn),Qu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Tl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,hi!==null&&(Rd(hi),hi=null))),vd(i,s),En(s),null;case 5:Ku(s);var m=ts(sa.current);if(a=s.type,i!==null&&s.stateNode!=null)Lg(i,s,a,d,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return En(s),null}if(i=ts(Pi.current),Tl(s)){d=s.stateNode,a=s.type;var x=s.memoizedProps;switch(d[Ri]=s,d[ea]=x,i=(s.mode&1)!==0,a){case"dialog":kt("cancel",d),kt("close",d);break;case"iframe":case"object":case"embed":kt("load",d);break;case"video":case"audio":for(m=0;m<Zo.length;m++)kt(Zo[m],d);break;case"source":kt("error",d);break;case"img":case"image":case"link":kt("error",d),kt("load",d);break;case"details":kt("toggle",d);break;case"input":Pn(d,x),kt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},kt("invalid",d);break;case"textarea":Z(d,x),kt("invalid",d)}ft(a,x),m=null;for(var w in x)if(x.hasOwnProperty(w)){var O=x[w];w==="children"?typeof O=="string"?d.textContent!==O&&(x.suppressHydrationWarning!==!0&&gl(d.textContent,O,i),m=["children",O]):typeof O=="number"&&d.textContent!==""+O&&(x.suppressHydrationWarning!==!0&&gl(d.textContent,O,i),m=["children",""+O]):o.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&kt("scroll",d)}switch(a){case"input":Dt(d),qe(d,x,!0);break;case"textarea":Dt(d),ve(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=vl)}d=m,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=fe(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=w.createElement(a,{is:d.is}):(i=w.createElement(a),a==="select"&&(w=i,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):i=w.createElementNS(i,a),i[Ri]=s,i[ea]=d,Dg(i,s,!1,!1),s.stateNode=i;e:{switch(w=st(a,d),a){case"dialog":kt("cancel",i),kt("close",i),m=d;break;case"iframe":case"object":case"embed":kt("load",i),m=d;break;case"video":case"audio":for(m=0;m<Zo.length;m++)kt(Zo[m],i);m=d;break;case"source":kt("error",i),m=d;break;case"img":case"image":case"link":kt("error",i),kt("load",i),m=d;break;case"details":kt("toggle",i),m=d;break;case"input":Pn(i,d),m=G(i,d),kt("invalid",i);break;case"option":m=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},m=se({},d,{value:void 0}),kt("invalid",i);break;case"textarea":Z(i,d),m=C(i,d),kt("invalid",i);break;default:m=d}ft(a,m),O=m;for(x in O)if(O.hasOwnProperty(x)){var V=O[x];x==="style"?tt(i,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Oe(i,V)):x==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ut(i,V):typeof V=="number"&&ut(i,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&kt("scroll",i):V!=null&&R(i,x,V,w))}switch(a){case"input":Dt(i),qe(i,d,!1);break;case"textarea":Dt(i),ve(i);break;case"option":d.value!=null&&i.setAttribute("value",""+we(d.value));break;case"select":i.multiple=!!d.multiple,x=d.value,x!=null?U(i,!!d.multiple,x,!1):d.defaultValue!=null&&U(i,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=vl)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return En(s),null;case 6:if(i&&s.stateNode!=null)Ng(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=ts(sa.current),ts(Pi.current),Tl(s)){if(d=s.stateNode,a=s.memoizedProps,d[Ri]=s,(x=d.nodeValue!==a)&&(i=Yn,i!==null))switch(i.tag){case 3:gl(d.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&gl(d.nodeValue,a,(i.mode&1)!==0)}x&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Ri]=s,s.stateNode=d}return En(s),null;case 13:if(Bt(Wt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Gt&&qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Fm(),js(),s.flags|=98560,x=!1;else if(x=Tl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ri]=s}else js(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;En(s),x=!1}else hi!==null&&(Rd(hi),hi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Wt.current&1)!==0?on===0&&(on=3):Dd())),s.updateQueue!==null&&(s.flags|=4),En(s),null);case 4:return qs(),vd(i,s),i===null&&Qo(s.stateNode.containerInfo),En(s),null;case 10:return Wu(s.type._context),En(s),null;case 17:return kn(s.type)&&xl(),En(s),null;case 19:if(Bt(Wt),x=s.memoizedState,x===null)return En(s),null;if(d=(s.flags&128)!==0,w=x.rendering,w===null)if(d)ua(x,!1);else{if(on!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=bl(i),w!==null){for(s.flags|=128,ua(x,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)x=a,i=d,x.flags&=14680066,w=x.alternate,w===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=w.childLanes,x.lanes=w.lanes,x.child=w.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=w.memoizedProps,x.memoizedState=w.memoizedState,x.updateQueue=w.updateQueue,x.type=w.type,i=w.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ft(Wt,Wt.current&1|2),s.child}i=i.sibling}x.tail!==null&&j()>Qs&&(s.flags|=128,d=!0,ua(x,!1),s.lanes=4194304)}else{if(!d)if(i=bl(w),i!==null){if(s.flags|=128,d=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ua(x,!0),x.tail===null&&x.tailMode==="hidden"&&!w.alternate&&!Gt)return En(s),null}else 2*j()-x.renderingStartTime>Qs&&a!==1073741824&&(s.flags|=128,d=!0,ua(x,!1),s.lanes=4194304);x.isBackwards?(w.sibling=s.child,s.child=w):(a=x.last,a!==null?a.sibling=w:s.child=w,x.last=w)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=j(),s.sibling=null,a=Wt.current,Ft(Wt,d?a&1|2:a&1),s):(En(s),null);case 22:case 23:return bd(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?($n&1073741824)!==0&&(En(s),s.subtreeFlags&6&&(s.flags|=8192)):En(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function sM(i,s){switch(Bu(s),s.tag){case 1:return kn(s.type)&&xl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return qs(),Bt(On),Bt(Sn),Qu(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Ku(s),null;case 13:if(Bt(Wt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));js()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Bt(Wt),null;case 4:return qs(),null;case 10:return Wu(s.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var Bl=!1,Tn=!1,oM=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ks(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){Kt(i,s,d)}else a.current=null}function _d(i,s,a){try{a()}catch(d){Kt(i,s,d)}}var Ig=!1;function aM(i,s){if(bu=sl,i=fm(),Mu(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var m=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var w=0,O=-1,V=-1,J=0,_e=0,ye=i,ge=null;t:for(;;){for(var Ne;ye!==a||m!==0&&ye.nodeType!==3||(O=w+m),ye!==x||d!==0&&ye.nodeType!==3||(V=w+d),ye.nodeType===3&&(w+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===i)break t;if(ge===a&&++J===m&&(O=w),ge===x&&++_e===d&&(V=w),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}a=O===-1||V===-1?null:{start:O,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Du={focusedElem:i,selectionRange:a},sl=!1,Be=s;Be!==null;)if(s=Be,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Be=i;else for(;Be!==null;){s=Be;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Jt=He.memoizedState,$=s.stateNode,W=$.getSnapshotBeforeUpdate(s.elementType===s.type?Ge:pi(s.type,Ge),Jt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Kt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,Be=i;break}Be=s.return}return He=Ig,Ig=!1,He}function da(i,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&_d(s,a,x)}m=m.next}while(m!==d)}}function zl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function xd(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Ug(i){var s=i.alternate;s!==null&&(i.alternate=null,Ug(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ri],delete s[ea],delete s[Uu],delete s[GS],delete s[jS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Fg(i){return i.tag===5||i.tag===3||i.tag===4}function Og(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Fg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function yd(i,s,a){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=vl));else if(d!==4&&(i=i.child,i!==null))for(yd(i,s,a),i=i.sibling;i!==null;)yd(i,s,a),i=i.sibling}function Sd(i,s,a){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Sd(i,s,a),i=i.sibling;i!==null;)Sd(i,s,a),i=i.sibling}var mn=null,mi=!1;function Mr(i,s,a){for(a=a.child;a!==null;)kg(i,s,a),a=a.sibling}function kg(i,s,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ye,a)}catch{}switch(a.tag){case 5:Tn||Ks(a,s);case 6:var d=mn,m=mi;mn=null,Mr(i,s,a),mn=d,mi=m,mn!==null&&(mi?(i=mn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(mi?(i=mn,a=a.stateNode,i.nodeType===8?Iu(i.parentNode,a):i.nodeType===1&&Iu(i,a),Go(i)):Iu(mn,a.stateNode));break;case 4:d=mn,m=mi,mn=a.stateNode.containerInfo,mi=!0,Mr(i,s,a),mn=d,mi=m;break;case 0:case 11:case 14:case 15:if(!Tn&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var x=m,w=x.destroy;x=x.tag,w!==void 0&&((x&2)!==0||(x&4)!==0)&&_d(a,s,w),m=m.next}while(m!==d)}Mr(i,s,a);break;case 1:if(!Tn&&(Ks(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(O){Kt(a,s,O)}Mr(i,s,a);break;case 21:Mr(i,s,a);break;case 22:a.mode&1?(Tn=(d=Tn)||a.memoizedState!==null,Mr(i,s,a),Tn=d):Mr(i,s,a);break;default:Mr(i,s,a)}}function Bg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new oM),s.forEach(function(d){var m=gM.bind(null,i,d);a.has(d)||(a.add(d),d.then(m,m))})}}function gi(i,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var m=a[d];try{var x=i,w=s,O=w;e:for(;O!==null;){switch(O.tag){case 5:mn=O.stateNode,mi=!1;break e;case 3:mn=O.stateNode.containerInfo,mi=!0;break e;case 4:mn=O.stateNode.containerInfo,mi=!0;break e}O=O.return}if(mn===null)throw Error(t(160));kg(x,w,m),mn=null,mi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(J){Kt(m,s,J)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)zg(s,i),s=s.sibling}function zg(i,s){var a=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(gi(s,i),Di(i),d&4){try{da(3,i,i.return),zl(3,i)}catch(Ge){Kt(i,i.return,Ge)}try{da(5,i,i.return)}catch(Ge){Kt(i,i.return,Ge)}}break;case 1:gi(s,i),Di(i),d&512&&a!==null&&Ks(a,a.return);break;case 5:if(gi(s,i),Di(i),d&512&&a!==null&&Ks(a,a.return),i.flags&32){var m=i.stateNode;try{ut(m,"")}catch(Ge){Kt(i,i.return,Ge)}}if(d&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,w=a!==null?a.memoizedProps:x,O=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{O==="input"&&x.type==="radio"&&x.name!=null&&pt(m,x),st(O,w);var J=st(O,x);for(w=0;w<V.length;w+=2){var _e=V[w],ye=V[w+1];_e==="style"?tt(m,ye):_e==="dangerouslySetInnerHTML"?Oe(m,ye):_e==="children"?ut(m,ye):R(m,_e,ye,J)}switch(O){case"input":dt(m,x);break;case"textarea":me(m,x);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Ne=x.value;Ne!=null?U(m,!!x.multiple,Ne,!1):ge!==!!x.multiple&&(x.defaultValue!=null?U(m,!!x.multiple,x.defaultValue,!0):U(m,!!x.multiple,x.multiple?[]:"",!1))}m[ea]=x}catch(Ge){Kt(i,i.return,Ge)}}break;case 6:if(gi(s,i),Di(i),d&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch(Ge){Kt(i,i.return,Ge)}}break;case 3:if(gi(s,i),Di(i),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Go(s.containerInfo)}catch(Ge){Kt(i,i.return,Ge)}break;case 4:gi(s,i),Di(i);break;case 13:gi(s,i),Di(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Td=j())),d&4&&Bg(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(Tn=(J=Tn)||_e,gi(s,i),Tn=J):gi(s,i),Di(i),d&8192){if(J=i.memoizedState!==null,(i.stateNode.isHidden=J)&&!_e&&(i.mode&1)!==0)for(Be=i,_e=i.child;_e!==null;){for(ye=Be=_e;Be!==null;){switch(ge=Be,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:da(4,ge,ge.return);break;case 1:Ks(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){d=ge,a=ge.return;try{s=d,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(Ge){Kt(d,a,Ge)}}break;case 5:Ks(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Gg(ye);continue}}Ne!==null?(Ne.return=ge,Be=Ne):Gg(ye)}_e=_e.sibling}e:for(_e=null,ye=i;;){if(ye.tag===5){if(_e===null){_e=ye;try{m=ye.stateNode,J?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(O=ye.stateNode,V=ye.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=Ke("display",w))}catch(Ge){Kt(i,i.return,Ge)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(Ge){Kt(i,i.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:gi(s,i),Di(i),d&4&&Bg(i);break;case 21:break;default:gi(s,i),Di(i)}}function Di(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Fg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(ut(m,""),d.flags&=-33);var x=Og(i);Sd(i,x,m);break;case 3:case 4:var w=d.stateNode.containerInfo,O=Og(i);yd(i,O,w);break;default:throw Error(t(161))}}catch(V){Kt(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function lM(i,s,a){Be=i,Vg(i)}function Vg(i,s,a){for(var d=(i.mode&1)!==0;Be!==null;){var m=Be,x=m.child;if(m.tag===22&&d){var w=m.memoizedState!==null||Bl;if(!w){var O=m.alternate,V=O!==null&&O.memoizedState!==null||Tn;O=Bl;var J=Tn;if(Bl=w,(Tn=V)&&!J)for(Be=m;Be!==null;)w=Be,V=w.child,w.tag===22&&w.memoizedState!==null?jg(m):V!==null?(V.return=w,Be=V):jg(m);for(;x!==null;)Be=x,Vg(x),x=x.sibling;Be=m,Bl=O,Tn=J}Hg(i)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,Be=x):Hg(i)}}function Hg(i){for(;Be!==null;){var s=Be;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Tn||zl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Tn)if(a===null)d.componentDidMount();else{var m=s.elementType===s.type?a.memoizedProps:pi(s.type,a.memoizedProps);d.componentDidUpdate(m,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Gm(s,x,d);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Gm(s,w,a)}break;case 5:var O=s.stateNode;if(a===null&&s.flags&4){a=O;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var J=s.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Go(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||s.flags&512&&xd(s)}catch(ge){Kt(s,s.return,ge)}}if(s===i){Be=null;break}if(a=s.sibling,a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Gg(i){for(;Be!==null;){var s=Be;if(s===i){Be=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Be=a;break}Be=s.return}}function jg(i){for(;Be!==null;){var s=Be;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{zl(4,s)}catch(V){Kt(s,a,V)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var m=s.return;try{d.componentDidMount()}catch(V){Kt(s,m,V)}}var x=s.return;try{xd(s)}catch(V){Kt(s,x,V)}break;case 5:var w=s.return;try{xd(s)}catch(V){Kt(s,w,V)}}}catch(V){Kt(s,s.return,V)}if(s===i){Be=null;break}var O=s.sibling;if(O!==null){O.return=s.return,Be=O;break}Be=s.return}}var cM=Math.ceil,Vl=A.ReactCurrentDispatcher,Md=A.ReactCurrentOwner,si=A.ReactCurrentBatchConfig,Et=0,dn=null,tn=null,gn=0,$n=0,Zs=vr(0),on=0,fa=null,is=0,Hl=0,Ed=0,ha=null,zn=null,Td=0,Qs=1/0,Yi=null,Gl=!1,wd=null,Er=null,jl=!1,Tr=null,Wl=0,pa=0,Ad=null,Xl=-1,Yl=0;function In(){return(Et&6)!==0?j():Xl!==-1?Xl:Xl=j()}function wr(i){return(i.mode&1)===0?1:(Et&2)!==0&&gn!==0?gn&-gn:XS.transition!==null?(Yl===0&&(Yl=Ln()),Yl):(i=mt,i!==0||(i=window.event,i=i===void 0?16:Xp(i.type)),i)}function vi(i,s,a,d){if(50<pa)throw pa=0,Ad=null,Error(t(185));Qt(i,a,d),((Et&2)===0||i!==dn)&&(i===dn&&((Et&2)===0&&(Hl|=a),on===4&&Ar(i,gn)),Vn(i,d),a===1&&Et===0&&(s.mode&1)===0&&(Qs=j()+500,Sl&&xr()))}function Vn(i,s){var a=i.callbackNode;qr(i,s);var d=di(i,i===dn?gn:0);if(d===0)a!==null&&Y(a),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(a!=null&&Y(a),s===1)i.tag===0?WS(Xg.bind(null,i)):Dm(Xg.bind(null,i)),VS(function(){(Et&6)===0&&xr()}),a=null;else{switch(kp(d)){case 1:a=Re;break;case 4:a=Ie;break;case 16:a=ke;break;case 536870912:a=it;break;default:a=ke}a=ev(a,Wg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Wg(i,s){if(Xl=-1,Yl=0,(Et&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Js()&&i.callbackNode!==a)return null;var d=di(i,i===dn?gn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=ql(i,d);else{s=d;var m=Et;Et|=2;var x=qg();(dn!==i||gn!==s)&&(Yi=null,Qs=j()+500,ss(i,s));do try{fM();break}catch(O){Yg(i,O)}while(!0);ju(),Vl.current=x,Et=m,tn!==null?s=0:(dn=null,gn=0,s=on)}if(s!==0){if(s===2&&(m=Lt(i),m!==0&&(d=m,s=Cd(i,m))),s===1)throw a=fa,ss(i,0),Ar(i,d),Vn(i,j()),a;if(s===6)Ar(i,d);else{if(m=i.current.alternate,(d&30)===0&&!uM(m)&&(s=ql(i,d),s===2&&(x=Lt(i),x!==0&&(d=x,s=Cd(i,x))),s===1))throw a=fa,ss(i,0),Ar(i,d),Vn(i,j()),a;switch(i.finishedWork=m,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:os(i,zn,Yi);break;case 3:if(Ar(i,d),(d&130023424)===d&&(s=Td+500-j(),10<s)){if(di(i,0)!==0)break;if(m=i.suspendedLanes,(m&d)!==d){In(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Nu(os.bind(null,i,zn,Yi),s);break}os(i,zn,Yi);break;case 4:if(Ar(i,d),(d&4194240)===d)break;for(s=i.eventTimes,m=-1;0<d;){var w=31-wt(d);x=1<<w,w=s[w],w>m&&(m=w),d&=~x}if(d=m,d=j()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*cM(d/1960))-d,10<d){i.timeoutHandle=Nu(os.bind(null,i,zn,Yi),d);break}os(i,zn,Yi);break;case 5:os(i,zn,Yi);break;default:throw Error(t(329))}}}return Vn(i,j()),i.callbackNode===a?Wg.bind(null,i):null}function Cd(i,s){var a=ha;return i.current.memoizedState.isDehydrated&&(ss(i,s).flags|=256),i=ql(i,s),i!==2&&(s=zn,zn=a,s!==null&&Rd(s)),i}function Rd(i){zn===null?zn=i:zn.push.apply(zn,i)}function uM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var m=a[d],x=m.getSnapshot;m=m.value;try{if(!fi(x(),m))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ar(i,s){for(s&=~Ed,s&=~Hl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-wt(s),d=1<<a;i[a]=-1,s&=~d}}function Xg(i){if((Et&6)!==0)throw Error(t(327));Js();var s=di(i,0);if((s&1)===0)return Vn(i,j()),null;var a=ql(i,s);if(i.tag!==0&&a===2){var d=Lt(i);d!==0&&(s=d,a=Cd(i,d))}if(a===1)throw a=fa,ss(i,0),Ar(i,s),Vn(i,j()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,os(i,zn,Yi),Vn(i,j()),null}function Pd(i,s){var a=Et;Et|=1;try{return i(s)}finally{Et=a,Et===0&&(Qs=j()+500,Sl&&xr())}}function rs(i){Tr!==null&&Tr.tag===0&&(Et&6)===0&&Js();var s=Et;Et|=1;var a=si.transition,d=mt;try{if(si.transition=null,mt=1,i)return i()}finally{mt=d,si.transition=a,Et=s,(Et&6)===0&&xr()}}function bd(){$n=Zs.current,Bt(Zs)}function ss(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,zS(a)),tn!==null)for(a=tn.return;a!==null;){var d=a;switch(Bu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&xl();break;case 3:qs(),Bt(On),Bt(Sn),Qu();break;case 5:Ku(d);break;case 4:qs();break;case 13:Bt(Wt);break;case 19:Bt(Wt);break;case 10:Wu(d.type._context);break;case 22:case 23:bd()}a=a.return}if(dn=i,tn=i=Cr(i.current,null),gn=$n=s,on=0,fa=null,Ed=Hl=is=0,zn=ha=null,es!==null){for(s=0;s<es.length;s++)if(a=es[s],d=a.interleaved,d!==null){a.interleaved=null;var m=d.next,x=a.pending;if(x!==null){var w=x.next;x.next=m,d.next=w}a.pending=d}es=null}return i}function Yg(i,s){do{var a=tn;try{if(ju(),Dl.current=Ul,Ll){for(var d=Xt.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Ll=!1}if(ns=0,un=sn=Xt=null,oa=!1,aa=0,Md.current=null,a===null||a.return===null){on=1,fa=s,tn=null;break}e:{var x=i,w=a.return,O=a,V=s;if(s=gn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var J=V,_e=O,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ne=_g(w);if(Ne!==null){Ne.flags&=-257,xg(Ne,w,O,x,s),Ne.mode&1&&vg(x,J,s),s=Ne,V=J;var He=s.updateQueue;if(He===null){var Ge=new Set;Ge.add(V),s.updateQueue=Ge}else He.add(V);break e}else{if((s&1)===0){vg(x,J,s),Dd();break e}V=Error(t(426))}}else if(Gt&&O.mode&1){var Jt=_g(w);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),xg(Jt,w,O,x,s),Hu($s(V,O));break e}}x=V=$s(V,O),on!==4&&(on=2),ha===null?ha=[x]:ha.push(x),x=w;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var $=mg(x,V,s);Hm(x,$);break e;case 1:O=V;var W=x.type,K=x.stateNode;if((x.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Er===null||!Er.has(K)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=gg(x,O,s);Hm(x,Te);break e}}x=x.return}while(x!==null)}Kg(a)}catch(We){s=We,tn===a&&a!==null&&(tn=a=a.return);continue}break}while(!0)}function qg(){var i=Vl.current;return Vl.current=Ul,i===null?Ul:i}function Dd(){(on===0||on===3||on===2)&&(on=4),dn===null||(is&268435455)===0&&(Hl&268435455)===0||Ar(dn,gn)}function ql(i,s){var a=Et;Et|=2;var d=qg();(dn!==i||gn!==s)&&(Yi=null,ss(i,s));do try{dM();break}catch(m){Yg(i,m)}while(!0);if(ju(),Et=a,Vl.current=d,tn!==null)throw Error(t(261));return dn=null,gn=0,on}function dM(){for(;tn!==null;)$g(tn)}function fM(){for(;tn!==null&&!te();)$g(tn)}function $g(i){var s=Jg(i.alternate,i,$n);i.memoizedProps=i.pendingProps,s===null?Kg(i):tn=s,Md.current=null}function Kg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=rM(a,s,$n),a!==null){tn=a;return}}else{if(a=sM(a,s),a!==null){a.flags&=32767,tn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{on=6,tn=null;return}}if(s=s.sibling,s!==null){tn=s;return}tn=s=i}while(s!==null);on===0&&(on=5)}function os(i,s,a){var d=mt,m=si.transition;try{si.transition=null,mt=1,hM(i,s,a,d)}finally{si.transition=m,mt=d}return null}function hM(i,s,a,d){do Js();while(Tr!==null);if((Et&6)!==0)throw Error(t(327));a=i.finishedWork;var m=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=a.lanes|a.childLanes;if(yn(i,x),i===dn&&(tn=dn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||jl||(jl=!0,ev(ke,function(){return Js(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=si.transition,si.transition=null;var w=mt;mt=1;var O=Et;Et|=4,Md.current=null,aM(i,a),zg(a,i),NS(Du),sl=!!bu,Du=bu=null,i.current=a,lM(a),ne(),Et=O,mt=w,si.transition=x}else i.current=a;if(jl&&(jl=!1,Tr=i,Wl=m),x=i.pendingLanes,x===0&&(Er=null),Tt(a.stateNode),Vn(i,j()),s!==null)for(d=i.onRecoverableError,a=0;a<s.length;a++)m=s[a],d(m.value,{componentStack:m.stack,digest:m.digest});if(Gl)throw Gl=!1,i=wd,wd=null,i;return(Wl&1)!==0&&i.tag!==0&&Js(),x=i.pendingLanes,(x&1)!==0?i===Ad?pa++:(pa=0,Ad=i):pa=0,xr(),null}function Js(){if(Tr!==null){var i=kp(Wl),s=si.transition,a=mt;try{if(si.transition=null,mt=16>i?16:i,Tr===null)var d=!1;else{if(i=Tr,Tr=null,Wl=0,(Et&6)!==0)throw Error(t(331));var m=Et;for(Et|=4,Be=i.current;Be!==null;){var x=Be,w=x.child;if((Be.flags&16)!==0){var O=x.deletions;if(O!==null){for(var V=0;V<O.length;V++){var J=O[V];for(Be=J;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:da(8,_e,x)}var ye=_e.child;if(ye!==null)ye.return=_e,Be=ye;else for(;Be!==null;){_e=Be;var ge=_e.sibling,Ne=_e.return;if(Ug(_e),_e===J){Be=null;break}if(ge!==null){ge.return=Ne,Be=ge;break}Be=Ne}}}var He=x.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Jt=Ge.sibling;Ge.sibling=null,Ge=Jt}while(Ge!==null)}}Be=x}}if((x.subtreeFlags&2064)!==0&&w!==null)w.return=x,Be=w;else e:for(;Be!==null;){if(x=Be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:da(9,x,x.return)}var $=x.sibling;if($!==null){$.return=x.return,Be=$;break e}Be=x.return}}var W=i.current;for(Be=W;Be!==null;){w=Be;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,Be=K;else e:for(w=W;Be!==null;){if(O=Be,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:zl(9,O)}}catch(We){Kt(O,O.return,We)}if(O===w){Be=null;break e}var Te=O.sibling;if(Te!==null){Te.return=O.return,Be=Te;break e}Be=O.return}}if(Et=m,xr(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ye,i)}catch{}d=!0}return d}finally{mt=a,si.transition=s}}return!1}function Zg(i,s,a){s=$s(a,s),s=mg(i,s,1),i=Sr(i,s,1),s=In(),i!==null&&(Qt(i,1,s),Vn(i,s))}function Kt(i,s,a){if(i.tag===3)Zg(i,i,a);else for(;s!==null;){if(s.tag===3){Zg(s,i,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Er===null||!Er.has(d))){i=$s(a,i),i=gg(s,i,1),s=Sr(s,i,1),i=In(),s!==null&&(Qt(s,1,i),Vn(s,i));break}}s=s.return}}function pM(i,s,a){var d=i.pingCache;d!==null&&d.delete(s),s=In(),i.pingedLanes|=i.suspendedLanes&a,dn===i&&(gn&a)===a&&(on===4||on===3&&(gn&130023424)===gn&&500>j()-Td?ss(i,0):Ed|=a),Vn(i,s)}function Qg(i,s){s===0&&((i.mode&1)===0?s=1:(s=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var a=In();i=ji(i,s),i!==null&&(Qt(i,s,a),Vn(i,a))}function mM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Qg(i,a)}function gM(i,s){var a=0;switch(i.tag){case 13:var d=i.stateNode,m=i.memoizedState;m!==null&&(a=m.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Qg(i,a)}var Jg;Jg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||On.current)Bn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Bn=!1,iM(i,s,a);Bn=(i.flags&131072)!==0}else Bn=!1,Gt&&(s.flags&1048576)!==0&&Lm(s,El,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;kl(i,s),i=s.pendingProps;var m=Vs(s,Sn.current);Ys(s,a),m=td(null,s,d,i,m,a);var x=nd();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,kn(d)?(x=!0,yl(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,qu(s),m.updater=Fl,s.stateNode=m,m._reactInternals=s,ld(s,d,i,a),s=fd(null,s,d,!0,x,a)):(s.tag=0,Gt&&x&&ku(s),Nn(null,s,m,a),s=s.child),s;case 16:d=s.elementType;e:{switch(kl(i,s),i=s.pendingProps,m=d._init,d=m(d._payload),s.type=d,m=s.tag=_M(d),i=pi(d,i),m){case 0:s=dd(null,s,d,i,a);break e;case 1:s=wg(null,s,d,i,a);break e;case 11:s=yg(null,s,d,i,a);break e;case 14:s=Sg(null,s,d,pi(d.type,i),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:pi(d,m),dd(i,s,d,m,a);case 1:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:pi(d,m),wg(i,s,d,m,a);case 3:e:{if(Ag(s),i===null)throw Error(t(387));d=s.pendingProps,x=s.memoizedState,m=x.element,Vm(i,s),Pl(s,d,null,a);var w=s.memoizedState;if(d=w.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=$s(Error(t(423)),s),s=Cg(i,s,d,a,m);break e}else if(d!==m){m=$s(Error(t(424)),s),s=Cg(i,s,d,a,m);break e}else for(qn=gr(s.stateNode.containerInfo.firstChild),Yn=s,Gt=!0,hi=null,a=Bm(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),d===m){s=Xi(i,s,a);break e}Nn(i,s,d,a)}s=s.child}return s;case 5:return jm(s),i===null&&Vu(s),d=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,w=m.children,Lu(d,m)?w=null:x!==null&&Lu(d,x)&&(s.flags|=32),Tg(i,s),Nn(i,s,w,a),s.child;case 6:return i===null&&Vu(s),null;case 13:return Rg(i,s,a);case 4:return $u(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Ws(s,null,d,a):Nn(i,s,d,a),s.child;case 11:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:pi(d,m),yg(i,s,d,m,a);case 7:return Nn(i,s,s.pendingProps,a),s.child;case 8:return Nn(i,s,s.pendingProps.children,a),s.child;case 12:return Nn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,m=s.pendingProps,x=s.memoizedProps,w=m.value,Ft(Al,d._currentValue),d._currentValue=w,x!==null)if(fi(x.value,w)){if(x.children===m.children&&!On.current){s=Xi(i,s,a);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var O=x.dependencies;if(O!==null){w=x.child;for(var V=O.firstContext;V!==null;){if(V.context===d){if(x.tag===1){V=Wi(-1,a&-a),V.tag=2;var J=x.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),J.pending=V}}x.lanes|=a,V=x.alternate,V!==null&&(V.lanes|=a),Xu(x.return,a,s),O.lanes|=a;break}V=V.next}}else if(x.tag===10)w=x.type===s.type?null:x.child;else if(x.tag===18){if(w=x.return,w===null)throw Error(t(341));w.lanes|=a,O=w.alternate,O!==null&&(O.lanes|=a),Xu(w,a,s),w=x.sibling}else w=x.child;if(w!==null)w.return=x;else for(w=x;w!==null;){if(w===s){w=null;break}if(x=w.sibling,x!==null){x.return=w.return,w=x;break}w=w.return}x=w}Nn(i,s,m.children,a),s=s.child}return s;case 9:return m=s.type,d=s.pendingProps.children,Ys(s,a),m=ii(m),d=d(m),s.flags|=1,Nn(i,s,d,a),s.child;case 14:return d=s.type,m=pi(d,s.pendingProps),m=pi(d.type,m),Sg(i,s,d,m,a);case 15:return Mg(i,s,s.type,s.pendingProps,a);case 17:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:pi(d,m),kl(i,s),s.tag=1,kn(d)?(i=!0,yl(s)):i=!1,Ys(s,a),hg(s,d,m),ld(s,d,m,a),fd(null,s,d,!0,i,a);case 19:return bg(i,s,a);case 22:return Eg(i,s,a)}throw Error(t(156,s.tag))};function ev(i,s){return D(i,s)}function vM(i,s,a,d){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(i,s,a,d){return new vM(i,s,a,d)}function Ld(i){return i=i.prototype,!(!i||!i.isReactComponent)}function _M(i){if(typeof i=="function")return Ld(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ae)return 11;if(i===pe)return 14}return 2}function Cr(i,s){var a=i.alternate;return a===null?(a=oi(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function $l(i,s,a,d,m,x){var w=2;if(d=i,typeof i=="function")Ld(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case F:return as(a.children,m,x,s);case k:w=8,m|=8;break;case L:return i=oi(12,a,s,m|2),i.elementType=L,i.lanes=x,i;case ee:return i=oi(13,a,s,m),i.elementType=ee,i.lanes=x,i;case ue:return i=oi(19,a,s,m),i.elementType=ue,i.lanes=x,i;case re:return Kl(a,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case P:w=10;break e;case z:w=9;break e;case ae:w=11;break e;case pe:w=14;break e;case ce:w=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=oi(w,a,s,m),s.elementType=i,s.type=d,s.lanes=x,s}function as(i,s,a,d){return i=oi(7,i,d,s),i.lanes=a,i}function Kl(i,s,a,d){return i=oi(22,i,d,s),i.elementType=re,i.lanes=a,i.stateNode={isHidden:!1},i}function Nd(i,s,a){return i=oi(6,i,null,s),i.lanes=a,i}function Id(i,s,a){return s=oi(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function xM(i,s,a,d,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Ud(i,s,a,d,m,x,w,O,V){return i=new xM(i,s,a,O,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=oi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(x),i}function yM(i,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:d==null?null:""+d,children:i,containerInfo:s,implementation:a}}function tv(i){if(!i)return _r;i=i._reactInternals;e:{if(Ci(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(kn(a))return Pm(i,a,s)}return s}function nv(i,s,a,d,m,x,w,O,V){return i=Ud(a,d,!0,i,m,x,w,O,V),i.context=tv(null),a=i.current,d=In(),m=wr(a),x=Wi(d,m),x.callback=s??null,Sr(a,x,m),i.current.lanes=m,Qt(i,m,d),Vn(i,d),i}function Zl(i,s,a,d){var m=s.current,x=In(),w=wr(m);return a=tv(a),s.context===null?s.context=a:s.pendingContext=a,s=Wi(x,w),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Sr(m,s,w),i!==null&&(vi(i,m,w,x),Rl(i,m,w)),w}function Ql(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function iv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Fd(i,s){iv(i,s),(i=i.alternate)&&iv(i,s)}function SM(){return null}var rv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Od(i){this._internalRoot=i}Jl.prototype.render=Od.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Zl(i,s,null,null)},Jl.prototype.unmount=Od.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;rs(function(){Zl(null,i,null,null)}),s[zi]=null}};function Jl(i){this._internalRoot=i}Jl.prototype.unstable_scheduleHydration=function(i){if(i){var s=Vp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<hr.length&&s!==0&&s<hr[a].priority;a++);hr.splice(a,0,i),a===0&&jp(i)}};function kd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ec(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function sv(){}function MM(i,s,a,d,m){if(m){if(typeof d=="function"){var x=d;d=function(){var J=Ql(w);x.call(J)}}var w=nv(s,d,i,0,null,!1,!1,"",sv);return i._reactRootContainer=w,i[zi]=w.current,Qo(i.nodeType===8?i.parentNode:i),rs(),w}for(;m=i.lastChild;)i.removeChild(m);if(typeof d=="function"){var O=d;d=function(){var J=Ql(V);O.call(J)}}var V=Ud(i,0,!1,null,null,!1,!1,"",sv);return i._reactRootContainer=V,i[zi]=V.current,Qo(i.nodeType===8?i.parentNode:i),rs(function(){Zl(s,V,a,d)}),V}function tc(i,s,a,d,m){var x=a._reactRootContainer;if(x){var w=x;if(typeof m=="function"){var O=m;m=function(){var V=Ql(w);O.call(V)}}Zl(s,w,i,m)}else w=MM(a,s,i,m,d);return Ql(w)}Bp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=pn(s.pendingLanes);a!==0&&($r(s,a|1),Vn(s,j()),(Et&6)===0&&(Qs=j()+500,xr()))}break;case 13:rs(function(){var d=ji(i,1);if(d!==null){var m=In();vi(d,i,1,m)}}),Fd(i,1)}},cu=function(i){if(i.tag===13){var s=ji(i,134217728);if(s!==null){var a=In();vi(s,i,134217728,a)}Fd(i,134217728)}},zp=function(i){if(i.tag===13){var s=wr(i),a=ji(i,s);if(a!==null){var d=In();vi(a,i,s,d)}Fd(i,s)}},Vp=function(){return mt},Hp=function(i,s){var a=mt;try{return mt=i,s()}finally{mt=a}},Ce=function(i,s,a){switch(s){case"input":if(dt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==i&&d.form===i.form){var m=_l(d);if(!m)throw Error(t(90));gt(d),dt(d,m)}}}break;case"textarea":me(i,a);break;case"select":s=a.value,s!=null&&U(i,!!a.multiple,s,!1)}},Ot=Pd,rn=rs;var EM={usingClientEntryPoint:!1,Events:[ta,Bs,_l,De,ot,Pd]},ma={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TM={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=tl(i),i===null?null:i.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||SM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Ye=nc.inject(TM),at=nc}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EM,Hn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(s))throw Error(t(200));return yM(i,s,null,a)},Hn.createRoot=function(i,s){if(!kd(i))throw Error(t(299));var a=!1,d="",m=rv;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Ud(i,1,!1,null,null,a,!1,d,m),i[zi]=s.current,Qo(i.nodeType===8?i.parentNode:i),new Od(s)},Hn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=tl(s),i=i===null?null:i.stateNode,i},Hn.flushSync=function(i){return rs(i)},Hn.hydrate=function(i,s,a){if(!ec(s))throw Error(t(200));return tc(null,i,s,!0,a)},Hn.hydrateRoot=function(i,s,a){if(!kd(i))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,m=!1,x="",w=rv;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=nv(s,null,i,1,a??null,m,!1,x,w),i[zi]=s.current,Qo(i),d)for(i=0;i<d.length;i++)a=d[i],m=a._getVersion,m=m(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,m]:s.mutableSourceEagerHydrationData.push(a,m);return new Jl(s)},Hn.render=function(i,s,a){if(!ec(s))throw Error(t(200));return tc(null,i,s,!1,a)},Hn.unmountComponentAtNode=function(i){if(!ec(i))throw Error(t(40));return i._reactRootContainer?(rs(function(){tc(null,null,i,!1,function(){i._reactRootContainer=null,i[zi]=null})}),!0):!1},Hn.unstable_batchedUpdates=Pd,Hn.unstable_renderSubtreeIntoContainer=function(i,s,a,d){if(!ec(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return tc(i,s,a,!1,d)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var hv;function IM(){if(hv)return Vd.exports;hv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vd.exports=NM(),Vd.exports}var pv;function UM(){if(pv)return ic;pv=1;var n=IM();return ic.createRoot=n.createRoot,ic.hydrateRoot=n.hydrateRoot,ic}var FM=UM();const Vh=be.createContext({});function Hh(n){const e=be.useRef(null);return e.current===null&&(e.current=n()),e.current}const Jc=be.createContext(null),Gh=be.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class OM extends be.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function kM({children:n,isPresent:e}){const t=be.useId(),r=be.useRef(null),o=be.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=be.useContext(Gh);return be.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:h}=o.current;if(e||!r.current||!c||!u)return;r.current.dataset.motionPopId=t;const p=document.createElement("style");return l&&(p.nonce=l),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),M.jsx(OM,{isPresent:e,childRef:r,sizeRef:o,children:be.cloneElement(n,{ref:r})})}const BM=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:c})=>{const u=Hh(zM),f=be.useId(),h=be.useCallback(g=>{u.set(g,!0);for(const v of u.values())if(!v)return;r&&r()},[u,r]),p=be.useMemo(()=>({id:f,initial:e,isPresent:t,custom:o,onExitComplete:h,register:g=>(u.set(g,!1),()=>u.delete(g))}),l?[Math.random(),h]:[t,h]);return be.useMemo(()=>{u.forEach((g,v)=>u.set(v,!1))},[t]),be.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),c==="popLayout"&&(n=M.jsx(kM,{isPresent:t,children:n})),M.jsx(Jc.Provider,{value:p,children:n})};function zM(){return new Map}function N_(n=!0){const e=be.useContext(Jc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=be.useId();be.useEffect(()=>{n&&o(l)},[n]);const c=be.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,c]:[!0]}const rc=n=>n.key||"";function mv(n){const e=[];return be.Children.forEach(n,t=>{be.isValidElement(t)&&e.push(t)}),e}const jh=typeof window<"u",I_=jh?be.useLayoutEffect:be.useEffect,VM=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:c=!1})=>{const[u,f]=N_(c),h=be.useMemo(()=>mv(n),[n]),p=c&&!u?[]:h.map(rc),g=be.useRef(!0),v=be.useRef(h),y=Hh(()=>new Map),[E,T]=be.useState(h),[S,_]=be.useState(h);I_(()=>{g.current=!1,v.current=h;for(let A=0;A<S.length;A++){const N=rc(S[A]);p.includes(N)?y.delete(N):y.get(N)!==!0&&y.set(N,!1)}},[S,p.length,p.join("-")]);const b=[];if(h!==E){let A=[...h];for(let N=0;N<S.length;N++){const I=S[N],F=rc(I);p.includes(F)||(A.splice(N,0,I),b.push(I))}l==="wait"&&b.length&&(A=b),_(mv(A)),T(h);return}const{forceRender:R}=be.useContext(Vh);return M.jsx(M.Fragment,{children:S.map(A=>{const N=rc(A),I=c&&!u?!1:h===S||p.includes(N),F=()=>{if(y.has(N))y.set(N,!0);else return;let k=!0;y.forEach(L=>{L||(k=!1)}),k&&(R==null||R(),_(v.current),c&&(f==null||f()),r&&r())};return M.jsx(BM,{isPresent:I,initial:!g.current||t?void 0:!1,custom:I?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:I?void 0:F,children:A},N)})})},Jn=n=>n;let U_=Jn;function Wh(n){let e;return()=>(e===void 0&&(e=n()),e)}const wo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},ir=n=>n*1e3,rr=n=>n/1e3,HM={useManualTiming:!1};function GM(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){l.has(h)&&(f.schedule(h),n()),h(c)}const f={schedule:(h,p=!1,g=!1)=>{const y=g&&r?e:t;return p&&l.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(u),e.clear(),r=!1,o&&(o=!1,f.process(h))}};return f}const sc=["read","resolveKeyframes","update","preRender","render","postRender"],jM=40;function F_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,c=sc.reduce((_,b)=>(_[b]=GM(l),_),{}),{read:u,resolveKeyframes:f,update:h,preRender:p,render:g,postRender:v}=c,y=()=>{const _=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(_-o.timestamp,jM),1),o.timestamp=_,o.isProcessing=!0,u.process(o),f.process(o),h.process(o),p.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},E=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:sc.reduce((_,b)=>{const R=c[b];return _[b]=(A,N=!1,I=!1)=>(t||E(),R.schedule(A,N,I)),_},{}),cancel:_=>{for(let b=0;b<sc.length;b++)c[sc[b]].cancel(_)},state:o,steps:c}}const{schedule:zt,cancel:zr,state:vn,steps:jd}=F_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jn,!0),O_=be.createContext({strict:!1}),gv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ao={};for(const n in gv)Ao[n]={isEnabled:e=>gv[n].some(t=>!!e[t])};function WM(n){for(const e in n)Ao[e]={...Ao[e],...n[e]}}const XM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||XM.has(n)}let k_=n=>!zc(n);function YM(n){n&&(k_=e=>e.startsWith("on")?!zc(e):n(e))}try{YM(require("@emotion/is-prop-valid").default)}catch{}function qM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(k_(o)||t===!0&&zc(o)||!e&&!zc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function $M(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const eu=be.createContext({});function Ia(n){return typeof n=="string"||Array.isArray(n)}function tu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Xh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yh=["initial",...Xh];function nu(n){return tu(n.animate)||Yh.some(e=>Ia(n[e]))}function B_(n){return!!(nu(n)||n.variants)}function KM(n,e){if(nu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ia(t)?t:void 0,animate:Ia(r)?r:void 0}}return n.inherit!==!1?e:{}}function ZM(n){const{initial:e,animate:t}=KM(n,be.useContext(eu));return be.useMemo(()=>({initial:e,animate:t}),[vv(e),vv(t)])}function vv(n){return Array.isArray(n)?n.join(" "):n}const QM=Symbol.for("motionComponentSymbol");function go(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function JM(n,e,t){return be.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):go(t)&&(t.current=r))},[e])}const qh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),eE="framerAppearId",z_="data-"+qh(eE),{schedule:$h}=F_(queueMicrotask,!1),V_=be.createContext({});function tE(n,e,t,r,o){var l,c;const{visualElement:u}=be.useContext(eu),f=be.useContext(O_),h=be.useContext(Jc),p=be.useContext(Gh).reducedMotion,g=be.useRef(null);r=r||f.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const v=g.current,y=be.useContext(V_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&nE(g.current,t,o,y);const E=be.useRef(!1);be.useInsertionEffect(()=>{v&&E.current&&v.update(t,h)});const T=t[z_],S=be.useRef(!!T&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,T))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,T)));return I_(()=>{v&&(E.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),$h.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),be.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window,T)}),S.current=!1))}),v}function nE(n,e,t,r){const{layoutId:o,layout:l,drag:c,dragConstraints:u,layoutScroll:f,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:H_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!c||u&&go(u),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:f,layoutRoot:h})}function H_(n){if(n)return n.options.allowProjection!==!1?n.projection:H_(n.parent)}function iE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,c;n&&WM(n);function u(h,p){let g;const v={...be.useContext(Gh),...h,layoutId:rE(h)},{isStatic:y}=v,E=ZM(h),T=r(h,y);if(!y&&jh){sE();const S=oE(v);g=S.MeasureLayout,E.visualElement=tE(o,T,v,e,S.ProjectionNode)}return M.jsxs(eu.Provider,{value:E,children:[g&&E.visualElement?M.jsx(g,{visualElement:E.visualElement,...v}):null,t(o,h,JM(T,E.visualElement,p),T,y,E.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${(c=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&c!==void 0?c:""})`}`;const f=be.forwardRef(u);return f[QM]=o,f}function rE({layoutId:n}){const e=be.useContext(Vh).id;return e&&n!==void 0?e+"-"+n:n}function sE(n,e){be.useContext(O_).strict}function oE(n){const{drag:e,layout:t}=Ao;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const aE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kh(n){return typeof n!="string"||n.includes("-")?!1:!!(aE.indexOf(n)>-1||/[A-Z]/u.test(n))}function _v(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Zh(n,e,t,r){if(typeof e=="function"){const[o,l]=_v(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=_v(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Of=n=>Array.isArray(n),lE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),cE=n=>Of(n)?n[n.length-1]||0:n,Rn=n=>!!(n&&n.getVelocity);function Dc(n){const e=Rn(n)?n.get():n;return lE(e)?e.toValue():e}function uE({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const c={latestValues:dE(r,o,l,n),renderState:e()};return t&&(c.onMount=u=>t({props:r,current:u,...c}),c.onUpdate=u=>t(u)),c}const G_=n=>(e,t)=>{const r=be.useContext(eu),o=be.useContext(Jc),l=()=>uE(n,e,r,o);return t?l():Hh(l)};function dE(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Dc(l[v]);let{initial:c,animate:u}=n;const f=nu(n),h=B_(n);e&&h&&!f&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const g=p?u:c;if(g&&typeof g!="boolean"&&!tu(g)){const v=Array.isArray(g)?g:[g];for(let y=0;y<v.length;y++){const E=Zh(n,v[y]);if(E){const{transitionEnd:T,transition:S,..._}=E;for(const b in _){let R=_[b];if(Array.isArray(R)){const A=p?R.length-1:0;R=R[A]}R!==null&&(o[b]=R)}for(const b in T)o[b]=T[b]}}}return o}const Uo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ps=new Set(Uo),j_=n=>e=>typeof e=="string"&&e.startsWith(n),W_=j_("--"),fE=j_("var(--"),Qh=n=>fE(n)?hE.test(n.split("/*")[0].trim()):!1,hE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,X_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,or=(n,e,t)=>t>e?e:t<n?n:t,Fo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ua={...Fo,transform:n=>or(0,1,n)},oc={...Fo,default:1},Va=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ur=Va("deg"),Ii=Va("%"),et=Va("px"),pE=Va("vh"),mE=Va("vw"),xv={...Ii,parse:n=>Ii.parse(n)/100,transform:n=>Ii.transform(n*100)},gE={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,backgroundPositionX:et,backgroundPositionY:et},vE={rotate:Ur,rotateX:Ur,rotateY:Ur,rotateZ:Ur,scale:oc,scaleX:oc,scaleY:oc,scaleZ:oc,skew:Ur,skewX:Ur,skewY:Ur,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:Ua,originX:xv,originY:xv,originZ:et},yv={...Fo,transform:Math.round},Jh={...gE,...vE,zIndex:yv,size:et,fillOpacity:Ua,strokeOpacity:Ua,numOctaves:yv},_E={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xE=Uo.length;function yE(n,e,t){let r="",o=!0;for(let l=0;l<xE;l++){const c=Uo[l],u=n[c];if(u===void 0)continue;let f=!0;if(typeof u=="number"?f=u===(c.startsWith("scale")?1:0):f=parseFloat(u)===0,!f||t){const h=X_(u,Jh[c]);if(!f){o=!1;const p=_E[c]||c;r+=`${p}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function ep(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let c=!1,u=!1;for(const f in e){const h=e[f];if(Ps.has(f)){c=!0;continue}else if(W_(f)){o[f]=h;continue}else{const p=X_(h,Jh[f]);f.startsWith("origin")?(u=!0,l[f]=p):r[f]=p}}if(e.transform||(c||t?r.transform=yE(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:p=0}=l;r.transformOrigin=`${f} ${h} ${p}`}}const SE={offset:"stroke-dashoffset",array:"stroke-dasharray"},ME={offset:"strokeDashoffset",array:"strokeDasharray"};function EE(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?SE:ME;n[l.offset]=et.transform(-r);const c=et.transform(e),u=et.transform(t);n[l.array]=`${c} ${u}`}function Sv(n,e,t){return typeof n=="string"?n:et.transform(e+t*n)}function TE(n,e,t){const r=Sv(e,n.x,n.width),o=Sv(t,n.y,n.height);return`${r} ${o}`}function tp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:f=0,...h},p,g){if(ep(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:y,dimensions:E}=n;v.transform&&(E&&(y.transform=v.transform),delete v.transform),E&&(o!==void 0||l!==void 0||y.transform)&&(y.transformOrigin=TE(E,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),c!==void 0&&EE(v,c,u,f,!1)}const np=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Y_=()=>({...np(),attrs:{}}),ip=n=>typeof n=="string"&&n.toLowerCase()==="svg";function q_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const $_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function K_(n,e,t,r){q_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute($_.has(o)?o:qh(o),e.attrs[o])}const Vc={};function wE(n){Object.assign(Vc,n)}function Z_(n,{layout:e,layoutId:t}){return Ps.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Vc[n]||n==="opacity")}function rp(n,e,t){var r;const{style:o}=n,l={};for(const c in o)(Rn(o[c])||e.style&&Rn(e.style[c])||Z_(c,n)||((r=t==null?void 0:t.getValue(c))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[c]=o[c]);return l}function Q_(n,e,t){const r=rp(n,e,t);for(const o in n)if(Rn(n[o])||Rn(e[o])){const l=Uo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function AE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Mv=["x","y","width","height","cx","cy","r"],CE={useVisualState:G_({scrapeMotionValuesFromProps:Q_,createRenderState:Y_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const u in o)if(Ps.has(u)){l=!0;break}}if(!l)return;let c=!e;if(e)for(let u=0;u<Mv.length;u++){const f=Mv[u];n[f]!==e[f]&&(c=!0)}c&&zt.read(()=>{AE(t,r),zt.render(()=>{tp(r,o,ip(t.tagName),n.transformTemplate),K_(t,r)})})}})},RE={useVisualState:G_({scrapeMotionValuesFromProps:rp,createRenderState:np})};function J_(n,e,t){for(const r in e)!Rn(e[r])&&!Z_(r,t)&&(n[r]=e[r])}function PE({transformTemplate:n},e){return be.useMemo(()=>{const t=np();return ep(t,e,n),Object.assign({},t.vars,t.style)},[e])}function bE(n,e){const t=n.style||{},r={};return J_(r,t,n),Object.assign(r,PE(n,e)),r}function DE(n,e){const t={},r=bE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function LE(n,e,t,r){const o=be.useMemo(()=>{const l=Y_();return tp(l,e,ip(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};J_(l,n.style,n),o.style={...l,...o.style}}return o}function NE(n=!1){return(t,r,o,{latestValues:l},c)=>{const f=(Kh(t)?LE:DE)(r,l,c,t),h=qM(r,typeof t=="string",n),p=t!==be.Fragment?{...h,...f,ref:o}:{},{children:g}=r,v=be.useMemo(()=>Rn(g)?g.get():g,[g]);return be.createElement(t,{...p,children:v})}}function IE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...Kh(r)?CE:RE,preloadedFeatures:n,useRender:NE(o),createVisualElement:e,Component:r};return iE(c)}}function ex(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function iu(n,e,t){const r=n.getProps();return Zh(r,e,t!==void 0?t:r.custom,n)}const UE=Wh(()=>window.ScrollTimeline!==void 0);class FE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(UE()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class OE extends FE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function sp(n,e){return n?n[e]||n.default||n:void 0}const kf=2e4;function tx(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<kf;)e+=t,r=n.next(e);return e>=kf?1/0:e}function op(n){return typeof n=="function"}function Ev(n,e){n.timeline=e,n.onfinish=null}const ap=n=>Array.isArray(n)&&typeof n[0]=="number",kE={linearEasing:void 0};function BE(n,e){const t=Wh(n);return()=>{var r;return(r=kE[e])!==null&&r!==void 0?r:t()}}const Hc=BE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),nx=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(wo(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function ix(n){return!!(typeof n=="function"&&Hc()||!n||typeof n=="string"&&(n in Bf||Hc())||ap(n)||Array.isArray(n)&&n.every(ix))}const wa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Bf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wa([0,.65,.55,1]),circOut:wa([.55,0,1,.45]),backIn:wa([.31,.01,.66,-.59]),backOut:wa([.33,1.53,.69,.99])};function rx(n,e){if(n)return typeof n=="function"&&Hc()?nx(n,e):ap(n)?wa(n):Array.isArray(n)?n.map(t=>rx(t,e)||Bf.easeOut):Bf[n]}const Si={x:!1,y:!1};function sx(){return Si.x||Si.y}function zE(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function ox(n,e){const t=zE(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Tv(n){return e=>{e.pointerType==="touch"||sx()||n(e)}}function VE(n,e,t={}){const[r,o,l]=ox(n,t),c=Tv(u=>{const{target:f}=u,h=e(u);if(typeof h!="function"||!f)return;const p=Tv(g=>{h(g),f.removeEventListener("pointerleave",p)});f.addEventListener("pointerleave",p,o)});return r.forEach(u=>{u.addEventListener("pointerenter",c,o)}),l}const ax=(n,e)=>e?n===e?!0:ax(n,e.parentElement):!1,lp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,HE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function GE(n){return HE.has(n.tagName)||n.tabIndex!==-1}const Aa=new WeakSet;function wv(n){return e=>{e.key==="Enter"&&n(e)}}function Wd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const jE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=wv(()=>{if(Aa.has(t))return;Wd(t,"down");const o=wv(()=>{Wd(t,"up")}),l=()=>Wd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Av(n){return lp(n)&&!sx()}function WE(n,e,t={}){const[r,o,l]=ox(n,t),c=u=>{const f=u.currentTarget;if(!Av(u)||Aa.has(f))return;Aa.add(f);const h=e(u),p=(y,E)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!Av(y)||!Aa.has(f))&&(Aa.delete(f),typeof h=="function"&&h(y,{success:E}))},g=y=>{p(y,t.useGlobalTarget||ax(f,y.target))},v=y=>{p(y,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(u=>{!GE(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),u.addEventListener("focus",h=>jE(h,o),o)}),l}function XE(n){return n==="x"||n==="y"?Si[n]?null:(Si[n]=!0,()=>{Si[n]=!1}):Si.x||Si.y?null:(Si.x=Si.y=!0,()=>{Si.x=Si.y=!1})}const lx=new Set(["width","height","top","left","right","bottom",...Uo]);let Lc;function YE(){Lc=void 0}const Ui={now:()=>(Lc===void 0&&Ui.set(vn.isProcessing||HM.useManualTiming?vn.timestamp:performance.now()),Lc),set:n=>{Lc=n,queueMicrotask(YE)}};function cp(n,e){n.indexOf(e)===-1&&n.push(e)}function up(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class dp{constructor(){this.subscriptions=[]}add(e){return cp(this.subscriptions,e),()=>up(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const c=this.subscriptions[l];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function cx(n,e){return e?n*(1e3/e):0}const Cv=30,qE=n=>!isNaN(parseFloat(n));class $E{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ui.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=qE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new dp);const r=this.events[e].add(t);return e==="change"?()=>{r(),zt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Cv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Cv);return cx(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fa(n,e){return new $E(n,e)}function KE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Fa(t))}function ZE(n,e){const t=iu(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const c in l){const u=cE(l[c]);KE(n,c,u)}}function QE(n){return!!(Rn(n)&&n.add)}function zf(n,e){const t=n.getValue("willChange");if(QE(t))return t.add(e)}function ux(n){return n.props[z_]}const dx=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,JE=1e-7,eT=12;function tT(n,e,t,r,o){let l,c,u=0;do c=e+(t-e)/2,l=dx(c,r,o)-n,l>0?t=c:e=c;while(Math.abs(l)>JE&&++u<eT);return c}function Ha(n,e,t,r){if(n===e&&t===r)return Jn;const o=l=>tT(l,0,1,n,t);return l=>l===0||l===1?l:dx(o(l),e,r)}const fx=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,hx=n=>e=>1-n(1-e),px=Ha(.33,1.53,.69,.99),fp=hx(px),mx=fx(fp),gx=n=>(n*=2)<1?.5*fp(n):.5*(2-Math.pow(2,-10*(n-1))),hp=n=>1-Math.sin(Math.acos(n)),vx=hx(hp),_x=fx(hp),xx=n=>/^0[^.\s]+$/u.test(n);function nT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||xx(n):!0}const ba=n=>Math.round(n*1e5)/1e5,pp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function iT(n){return n==null}const rT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,mp=(n,e)=>t=>!!(typeof t=="string"&&rT.test(t)&&t.startsWith(n)||e&&!iT(t)&&Object.prototype.hasOwnProperty.call(t,e)),yx=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,c,u]=r.match(pp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},sT=n=>or(0,255,n),Xd={...Fo,transform:n=>Math.round(sT(n))},Ss={test:mp("rgb","red"),parse:yx("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Xd.transform(n)+", "+Xd.transform(e)+", "+Xd.transform(t)+", "+ba(Ua.transform(r))+")"};function oT(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Vf={test:mp("#"),parse:oT,transform:Ss.transform},vo={test:mp("hsl","hue"),parse:yx("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Ii.transform(ba(e))+", "+Ii.transform(ba(t))+", "+ba(Ua.transform(r))+")"},Cn={test:n=>Ss.test(n)||Vf.test(n)||vo.test(n),parse:n=>Ss.test(n)?Ss.parse(n):vo.test(n)?vo.parse(n):Vf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ss.transform(n):vo.transform(n)},aT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lT(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(pp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(aT))===null||t===void 0?void 0:t.length)||0)>0}const Sx="number",Mx="color",cT="var",uT="var(",Rv="${}",dT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Oa(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const u=e.replace(dT,f=>(Cn.test(f)?(r.color.push(l),o.push(Mx),t.push(Cn.parse(f))):f.startsWith(uT)?(r.var.push(l),o.push(cT),t.push(f)):(r.number.push(l),o.push(Sx),t.push(parseFloat(f))),++l,Rv)).split(Rv);return{values:t,split:u,indexes:r,types:o}}function Ex(n){return Oa(n).values}function Tx(n){const{split:e,types:t}=Oa(n),r=e.length;return o=>{let l="";for(let c=0;c<r;c++)if(l+=e[c],o[c]!==void 0){const u=t[c];u===Sx?l+=ba(o[c]):u===Mx?l+=Cn.transform(o[c]):l+=o[c]}return l}}const fT=n=>typeof n=="number"?0:n;function hT(n){const e=Ex(n);return Tx(n)(e.map(fT))}const Vr={test:lT,parse:Ex,createTransformer:Tx,getAnimatableNone:hT},pT=new Set(["brightness","contrast","saturate","opacity"]);function mT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(pp)||[];if(!r)return n;const o=t.replace(r,"");let l=pT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const gT=/\b([a-z-]*)\(.*?\)/gu,Hf={...Vr,getAnimatableNone:n=>{const e=n.match(gT);return e?e.map(mT).join(" "):n}},vT={...Jh,color:Cn,backgroundColor:Cn,outlineColor:Cn,fill:Cn,stroke:Cn,borderColor:Cn,borderTopColor:Cn,borderRightColor:Cn,borderBottomColor:Cn,borderLeftColor:Cn,filter:Hf,WebkitFilter:Hf},gp=n=>vT[n];function wx(n,e){let t=gp(n);return t!==Hf&&(t=Vr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const _T=new Set(["auto","none","0"]);function xT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!_T.has(l)&&Oa(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=wx(t,o)}const Pv=n=>n===Fo||n===et,bv=(n,e)=>parseFloat(n.split(", ")[e]),Dv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return bv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?bv(l[1],n):0}},yT=new Set(["x","y","z"]),ST=Uo.filter(n=>!yT.has(n));function MT(n){const e=[];return ST.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Co={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Dv(4,13),y:Dv(5,14)};Co.translateX=Co.x;Co.translateY=Co.y;const Ts=new Set;let Gf=!1,jf=!1;function Ax(){if(jf){const n=Array.from(Ts).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=MT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,c])=>{var u;(u=r.getValue(l))===null||u===void 0||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}jf=!1,Gf=!1,Ts.forEach(n=>n.complete()),Ts.clear()}function Cx(){Ts.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(jf=!0)})}function ET(){Cx(),Ax()}class vp{constructor(e,t,r,o,l,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ts.add(this),Gf||(Gf=!0,zt.read(Cx),zt.resolveKeyframes(Ax))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&t){const f=r.readValue(t,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ts.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ts.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Rx=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),TT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wT(n){const e=TT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Px(n,e,t=1){const[r,o]=wT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const c=l.trim();return Rx(c)?parseFloat(c):c}return Qh(o)?Px(o,e,t+1):o}const bx=n=>e=>e.test(n),AT={test:n=>n==="auto",parse:n=>n},Dx=[Fo,et,Ii,Ur,mE,pE,AT],Lv=n=>Dx.find(bx(n));class Lx extends vp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),Qh(h))){const p=Px(h,t.current);p!==void 0&&(e[f]=p),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!lx.has(r)||e.length!==2)return;const[o,l]=e,c=Lv(o),u=Lv(l);if(c!==u)if(Pv(c)&&Pv(u))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)nT(e[o])&&r.push(o);r.length&&xT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Co[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=Co[r](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Nv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Vr.test(n)||n==="0")&&!n.startsWith("url("));function CT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function RT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],c=Nv(o,e),u=Nv(l,e);return!c||!u?!1:CT(n)||(t==="spring"||op(t))&&r}const PT=n=>n!==null;function ru(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(PT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const bT=40;class Nx{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:c="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ui.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:c,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>bT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&ET(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ui.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:c,onComplete:u,onUpdate:f,isGenerator:h}=this.options;if(!h&&!RT(e,r,o,l))if(c)this.options.duration=0;else{f&&f(ru(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Yt=(n,e,t)=>n+(e-n)*t;function Yd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function DT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,c=0;if(!e)o=l=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,f=2*t-u;o=Yd(f,u,n+1/3),l=Yd(f,u,n),c=Yd(f,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:r}}function Gc(n,e){return t=>t>0?e:n}const qd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},LT=[Vf,Ss,vo],NT=n=>LT.find(e=>e.test(n));function Iv(n){const e=NT(n);if(!e)return!1;let t=e.parse(n);return e===vo&&(t=DT(t)),t}const Uv=(n,e)=>{const t=Iv(n),r=Iv(e);if(!t||!r)return Gc(n,e);const o={...t};return l=>(o.red=qd(t.red,r.red,l),o.green=qd(t.green,r.green,l),o.blue=qd(t.blue,r.blue,l),o.alpha=Yt(t.alpha,r.alpha,l),Ss.transform(o))},IT=(n,e)=>t=>e(n(t)),Ga=(...n)=>n.reduce(IT),Wf=new Set(["none","hidden"]);function UT(n,e){return Wf.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function FT(n,e){return t=>Yt(n,e,t)}function _p(n){return typeof n=="number"?FT:typeof n=="string"?Qh(n)?Gc:Cn.test(n)?Uv:BT:Array.isArray(n)?Ix:typeof n=="object"?Cn.test(n)?Uv:OT:Gc}function Ix(n,e){const t=[...n],r=t.length,o=n.map((l,c)=>_p(l)(l,e[c]));return l=>{for(let c=0;c<r;c++)t[c]=o[c](l);return t}}function OT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=_p(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function kT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const c=e.types[l],u=n.indexes[c][o[c]],f=(t=n.values[u])!==null&&t!==void 0?t:0;r[l]=f,o[c]++}return r}const BT=(n,e)=>{const t=Vr.createTransformer(e),r=Oa(n),o=Oa(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Wf.has(n)&&!o.values.length||Wf.has(e)&&!r.values.length?UT(n,e):Ga(Ix(kT(r,o),o.values),t):Gc(n,e)};function Ux(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Yt(n,e,t):_p(n)(n,e)}const zT=5;function Fx(n,e,t){const r=Math.max(e-zT,0);return cx(t-n(r),e-r)}const Zt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$d=.001;function VT({duration:n=Zt.duration,bounce:e=Zt.bounce,velocity:t=Zt.velocity,mass:r=Zt.mass}){let o,l,c=1-e;c=or(Zt.minDamping,Zt.maxDamping,c),n=or(Zt.minDuration,Zt.maxDuration,rr(n)),c<1?(o=h=>{const p=h*c,g=p*n,v=p-t,y=Xf(h,c),E=Math.exp(-g);return $d-v/y*E},l=h=>{const g=h*c*n,v=g*t+t,y=Math.pow(c,2)*Math.pow(h,2)*n,E=Math.exp(-g),T=Xf(Math.pow(h,2),c);return(-o(h)+$d>0?-1:1)*((v-y)*E)/T}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-$d+p*g},l=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const u=5/n,f=GT(o,l,u);if(n=ir(n),isNaN(f))return{stiffness:Zt.stiffness,damping:Zt.damping,duration:n};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const HT=12;function GT(n,e,t){let r=t;for(let o=1;o<HT;o++)r=r-n(r)/e(r);return r}function Xf(n,e){return n*Math.sqrt(1-e*e)}const jT=["duration","bounce"],WT=["stiffness","damping","mass"];function Fv(n,e){return e.some(t=>n[t]!==void 0)}function XT(n){let e={velocity:Zt.velocity,stiffness:Zt.stiffness,damping:Zt.damping,mass:Zt.mass,isResolvedFromDuration:!1,...n};if(!Fv(n,WT)&&Fv(n,jT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*or(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Zt.mass,stiffness:o,damping:l}}else{const t=VT(n);e={...e,...t,mass:Zt.mass},e.isResolvedFromDuration=!0}return e}function Ox(n=Zt.visualDuration,e=Zt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:l},{stiffness:f,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:y}=XT({...t,velocity:-rr(t.velocity||0)}),E=v||0,T=h/(2*Math.sqrt(f*p)),S=c-l,_=rr(Math.sqrt(f/p)),b=Math.abs(S)<5;r||(r=b?Zt.restSpeed.granular:Zt.restSpeed.default),o||(o=b?Zt.restDelta.granular:Zt.restDelta.default);let R;if(T<1){const N=Xf(_,T);R=I=>{const F=Math.exp(-T*_*I);return c-F*((E+T*_*S)/N*Math.sin(N*I)+S*Math.cos(N*I))}}else if(T===1)R=N=>c-Math.exp(-_*N)*(S+(E+_*S)*N);else{const N=_*Math.sqrt(T*T-1);R=I=>{const F=Math.exp(-T*_*I),k=Math.min(N*I,300);return c-F*((E+T*_*S)*Math.sinh(k)+N*S*Math.cosh(k))/N}}const A={calculatedDuration:y&&g||null,next:N=>{const I=R(N);if(y)u.done=N>=g;else{let F=0;T<1&&(F=N===0?ir(E):Fx(R,N,I));const k=Math.abs(F)<=r,L=Math.abs(c-I)<=o;u.done=k&&L}return u.value=u.done?c:I,u},toString:()=>{const N=Math.min(tx(A),kf),I=nx(F=>A.next(N*F).value,N,30);return N+"ms "+I}};return A}function Ov({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:c,min:u,max:f,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},y=k=>u!==void 0&&k<u||f!==void 0&&k>f,E=k=>u===void 0?f:f===void 0||Math.abs(u-k)<Math.abs(f-k)?u:f;let T=t*e;const S=g+T,_=c===void 0?S:c(S);_!==S&&(T=_-g);const b=k=>-T*Math.exp(-k/r),R=k=>_+b(k),A=k=>{const L=b(k),P=R(k);v.done=Math.abs(L)<=h,v.value=v.done?_:P};let N,I;const F=k=>{y(v.value)&&(N=k,I=Ox({keyframes:[v.value,E(v.value)],velocity:Fx(R,k,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:k=>{let L=!1;return!I&&N===void 0&&(L=!0,A(k),F(k)),N!==void 0&&k>=N?I.next(k-N):(!L&&A(k),v)}}}const YT=Ha(.42,0,1,1),qT=Ha(0,0,.58,1),kx=Ha(.42,0,.58,1),$T=n=>Array.isArray(n)&&typeof n[0]!="number",KT={linear:Jn,easeIn:YT,easeInOut:kx,easeOut:qT,circIn:hp,circInOut:_x,circOut:vx,backIn:fp,backInOut:mx,backOut:px,anticipate:gx},kv=n=>{if(ap(n)){U_(n.length===4);const[e,t,r,o]=n;return Ha(e,t,r,o)}else if(typeof n=="string")return KT[n];return n};function ZT(n,e,t){const r=[],o=t||Ux,l=n.length-1;for(let c=0;c<l;c++){let u=o(n[c],n[c+1]);if(e){const f=Array.isArray(e)?e[c]||Jn:e;u=Ga(f,u)}r.push(u)}return r}function QT(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(U_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=ZT(e,r,o),f=u.length,h=p=>{if(c&&p<n[0])return e[0];let g=0;if(f>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const v=wo(n[g],n[g+1],p);return u[g](v)};return t?p=>h(or(n[0],n[l-1],p)):h}function JT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=wo(0,e,r);n.push(Yt(t,1,o))}}function e1(n){const e=[0];return JT(e,n.length-1),e}function t1(n,e){return n.map(t=>t*e)}function n1(n,e){return n.map(()=>e||kx).splice(0,n.length-1)}function jc({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=$T(r)?r.map(kv):kv(r),l={done:!1,value:e[0]},c=t1(t&&t.length===e.length?t:e1(e),n),u=QT(c,e,{ease:Array.isArray(o)?o:n1(e,o)});return{calculatedDuration:n,next:f=>(l.value=u(f),l.done=f>=n,l)}}const i1=n=>{const e=({timestamp:t})=>n(t);return{start:()=>zt.update(e,!0),stop:()=>zr(e),now:()=>vn.isProcessing?vn.timestamp:Ui.now()}},r1={decay:Ov,inertia:Ov,tween:jc,keyframes:jc,spring:Ox},s1=n=>n/100;class xp extends Nx{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,c=(o==null?void 0:o.KeyframeResolver)||vp,u=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new c(l,u,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:c=0}=this.options,u=op(t)?t:r1[t]||jc;let f,h;u!==jc&&typeof e[0]!="number"&&(f=Ga(s1,Ux(e[0],e[1])),e=[0,100]);const p=u({...this.options,keyframes:e});l==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=tx(p));const{calculatedDuration:g}=p,v=g+o,y=v*(r+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:g,resolvedDuration:v,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:c,mapPercentToKeyframes:u,keyframes:f,calculatedDuration:h,totalDuration:p,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:y,repeatType:E,repeatDelay:T,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const _=this.currentTime-v*(this.speed>=0?1:-1),b=this.speed>=0?_<0:_>p;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let R=this.currentTime,A=l;if(y){const k=Math.min(this.currentTime,p)/g;let L=Math.floor(k),P=k%1;!P&&k>=1&&(P=1),P===1&&L--,L=Math.min(L,y+1),!!(L%2)&&(E==="reverse"?(P=1-P,T&&(P-=T/g)):E==="mirror"&&(A=c)),R=or(0,1,P)*g}const N=b?{done:!1,value:f[0]}:A.next(R);u&&(N.value=u(N.value));let{done:I}=N;!b&&h!==null&&(I=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return F&&o!==void 0&&(N.value=ru(f,this.options,o)),S&&S(N.value),F&&this.finish(),N}get duration(){const{resolved:e}=this;return e?rr(e.calculatedDuration):0}get time(){return rr(this.currentTime)}set time(e){e=ir(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=rr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=i1,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const o1=new Set(["opacity","clipPath","filter","transform"]);function a1(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:c="loop",ease:u="easeInOut",times:f}={}){const h={[e]:t};f&&(h.offset=f);const p=rx(u,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"})}const l1=Wh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Wc=10,c1=2e4;function u1(n){return op(n.type)||n.type==="spring"||!ix(n.ease)}function d1(n,e){const t=new xp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<c1;)r=t.sample(l),o.push(r.value),l+=Wc;return{times:void 0,keyframes:o,duration:l-Wc,ease:"linear"}}const Bx={anticipate:gx,backInOut:mx,circInOut:_x};function f1(n){return n in Bx}class Bv extends Nx{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new Lx(l,(c,u)=>this.onKeyframesResolved(c,u),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:c,motionValue:u,name:f,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof l=="string"&&Hc()&&f1(l)&&(l=Bx[l]),u1(this.options)){const{onComplete:g,onUpdate:v,motionValue:y,element:E,...T}=this.options,S=d1(e,T);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,c="keyframes"}const p=a1(u.owner.current,f,e,{...this.options,duration:r,times:o,ease:l});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(Ev(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:g}=this.options;u.set(ru(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:r,times:o,type:c,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return rr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return rr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=ir(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Jn;const{animation:r}=t;Ev(r,e)}return Jn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:c,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:g,element:v,...y}=this.options,E=new xp({...y,keyframes:r,duration:o,type:l,ease:c,times:u,isGenerator:!0}),T=ir(this.time);h.setWithVelocity(E.sample(T-Wc).value,E.sample(T).value,Wc)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:c,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return l1()&&r&&o1.has(r)&&!f&&!h&&!o&&l!=="mirror"&&c!==0&&u!=="inertia"}}const h1={type:"spring",stiffness:500,damping:25,restSpeed:10},p1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),m1={type:"keyframes",duration:.8},g1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},v1=(n,{keyframes:e})=>e.length>2?m1:Ps.has(n)?n.startsWith("scale")?p1(e[1]):h1:g1;function _1({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:c,repeatDelay:u,from:f,elapsed:h,...p}){return!!Object.keys(p).length}const yp=(n,e,t,r={},o,l)=>c=>{const u=sp(r,n)||{},f=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ir(f);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:v=>{e.set(v),u.onUpdate&&u.onUpdate(v)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:l?void 0:o};_1(u)||(p={...p,...v1(n,p)}),p.duration&&(p.duration=ir(p.duration)),p.repeatDelay&&(p.repeatDelay=ir(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=ru(p.keyframes,u);if(v!==void 0)return zt.update(()=>{p.onUpdate(v),p.onComplete()}),new OE([])}return!l&&Bv.supports(p)?new Bv(p):new xp(p)};function x1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function zx(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:c=n.getDefaultTransition(),transitionEnd:u,...f}=e;r&&(c=r);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const g in f){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),y=f[g];if(y===void 0||p&&x1(p,g))continue;const E={delay:t,...sp(c||{},g)};let T=!1;if(window.MotionHandoffAnimation){const _=ux(n);if(_){const b=window.MotionHandoffAnimation(_,g,zt);b!==null&&(E.startTime=b,T=!0)}}zf(n,g),v.start(yp(g,v,y,n.shouldReduceMotion&&lx.has(g)?{type:!1}:E,n,T));const S=v.animation;S&&h.push(S)}return u&&Promise.all(h).then(()=>{zt.update(()=>{u&&ZE(n,u)})}),h}function Yf(n,e,t={}){var r;const o=iu(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const c=o?()=>Promise.all(zx(n,o,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:v}=l;return y1(n,e,p+h,g,v,t)}:()=>Promise.resolve(),{when:f}=l;if(f){const[h,p]=f==="beforeChildren"?[c,u]:[u,c];return h().then(()=>p())}else return Promise.all([c(),u(t.delay)])}function y1(n,e,t=0,r=0,o=1,l){const c=[],u=(n.variantChildren.size-1)*r,f=o===1?(h=0)=>h*r:(h=0)=>u-h*r;return Array.from(n.variantChildren).sort(S1).forEach((h,p)=>{h.notify("AnimationStart",e),c.push(Yf(h,e,{...l,delay:t+f(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function S1(n,e){return n.sortNodePosition(e)}function M1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Yf(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Yf(n,e,t);else{const o=typeof e=="function"?iu(n,e,t.custom):e;r=Promise.all(zx(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const E1=Yh.length;function Vx(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Vx(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<E1;t++){const r=Yh[t],o=n.props[r];(Ia(o)||o===!1)&&(e[r]=o)}return e}const T1=[...Xh].reverse(),w1=Xh.length;function A1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>M1(n,t,r)))}function C1(n){let e=A1(n),t=zv(),r=!0;const o=f=>(h,p)=>{var g;const v=iu(n,p,f==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:y,transitionEnd:E,...T}=v;h={...h,...T,...E}}return h};function l(f){e=f(n)}function c(f){const{props:h}=n,p=Vx(n.parent)||{},g=[],v=new Set;let y={},E=1/0;for(let S=0;S<w1;S++){const _=T1[S],b=t[_],R=h[_]!==void 0?h[_]:p[_],A=Ia(R),N=_===f?b.isActive:null;N===!1&&(E=S);let I=R===p[_]&&R!==h[_]&&A;if(I&&r&&n.manuallyAnimateOnMount&&(I=!1),b.protectedKeys={...y},!b.isActive&&N===null||!R&&!b.prevProp||tu(R)||typeof R=="boolean")continue;const F=R1(b.prevProp,R);let k=F||_===f&&b.isActive&&!I&&A||S>E&&A,L=!1;const P=Array.isArray(R)?R:[R];let z=P.reduce(o(_),{});N===!1&&(z={});const{prevResolvedValues:ae={}}=b,ee={...ae,...z},ue=re=>{k=!0,v.has(re)&&(L=!0,v.delete(re)),b.needsAnimating[re]=!0;const H=n.getValue(re);H&&(H.liveStyle=!1)};for(const re in ee){const H=z[re],le=ae[re];if(y.hasOwnProperty(re))continue;let se=!1;Of(H)&&Of(le)?se=!ex(H,le):se=H!==le,se?H!=null?ue(re):v.add(re):H!==void 0&&v.has(re)?ue(re):b.protectedKeys[re]=!0}b.prevProp=R,b.prevResolvedValues=z,b.isActive&&(y={...y,...z}),r&&n.blockInitialAnimation&&(k=!1),k&&(!(I&&F)||L)&&g.push(...P.map(re=>({animation:re,options:{type:_}})))}if(v.size){const S={};v.forEach(_=>{const b=n.getBaseTarget(_),R=n.getValue(_);R&&(R.liveStyle=!0),S[_]=b??null}),g.push({animation:S})}let T=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(g):Promise.resolve()}function u(f,h){var p;if(t[f].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(v=>{var y;return(y=v.animationState)===null||y===void 0?void 0:y.setActive(f,h)}),t[f].isActive=h;const g=c(f);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:c,setActive:u,setAnimateFunction:l,getState:()=>t,reset:()=>{t=zv(),r=!0}}}function R1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!ex(e,n):!1}function ls(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zv(){return{animate:ls(!0),whileInView:ls(),whileHover:ls(),whileTap:ls(),whileDrag:ls(),whileFocus:ls(),exit:ls()}}class jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class P1 extends jr{constructor(e){super(e),e.animationState||(e.animationState=C1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();tu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let b1=0;class D1 extends jr{constructor(){super(...arguments),this.id=b1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const L1={animation:{Feature:P1},exit:{Feature:D1}};function ka(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function ja(n){return{point:{x:n.pageX,y:n.pageY}}}const N1=n=>e=>lp(e)&&n(e,ja(e));function Da(n,e,t,r){return ka(n,e,N1(t),r)}const Vv=(n,e)=>Math.abs(n-e);function I1(n,e){const t=Vv(n.x,e.x),r=Vv(n.y,e.y);return Math.sqrt(t**2+r**2)}class Hx{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Zd(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,y=I1(g.offset,{x:0,y:0})>=3;if(!v&&!y)return;const{point:E}=g,{timestamp:T}=vn;this.history.push({...E,timestamp:T});const{onStart:S,onMove:_}=this.handlers;v||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Kd(v,this.transformPagePoint),zt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:y,onSessionEnd:E,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Zd(g.type==="pointercancel"?this.lastMoveEventInfo:Kd(v,this.transformPagePoint),this.history);this.startEvent&&y&&y(g,S),E&&E(g,S)},!lp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const c=ja(e),u=Kd(c,this.transformPagePoint),{point:f}=u,{timestamp:h}=vn;this.history=[{...f,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,Zd(u,this.history)),this.removeListeners=Ga(Da(this.contextWindow,"pointermove",this.handlePointerMove),Da(this.contextWindow,"pointerup",this.handlePointerUp),Da(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),zr(this.updatePoint)}}function Kd(n,e){return e?{point:e(n.point)}:n}function Hv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Zd({point:n},e){return{point:n,delta:Hv(n,Gx(e)),offset:Hv(n,U1(e)),velocity:F1(e,.1)}}function U1(n){return n[0]}function Gx(n){return n[n.length-1]}function F1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Gx(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ir(e)));)t--;if(!r)return{x:0,y:0};const l=rr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const c={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const jx=1e-4,O1=1-jx,k1=1+jx,Wx=.01,B1=0-Wx,z1=0+Wx;function ei(n){return n.max-n.min}function V1(n,e,t){return Math.abs(n-e)<=t}function Gv(n,e,t,r=.5){n.origin=r,n.originPoint=Yt(e.min,e.max,n.origin),n.scale=ei(t)/ei(e),n.translate=Yt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=O1&&n.scale<=k1||isNaN(n.scale))&&(n.scale=1),(n.translate>=B1&&n.translate<=z1||isNaN(n.translate))&&(n.translate=0)}function La(n,e,t,r){Gv(n.x,e.x,t.x,r?r.originX:void 0),Gv(n.y,e.y,t.y,r?r.originY:void 0)}function jv(n,e,t){n.min=t.min+e.min,n.max=n.min+ei(e)}function H1(n,e,t){jv(n.x,e.x,t.x),jv(n.y,e.y,t.y)}function Wv(n,e,t){n.min=e.min-t.min,n.max=n.min+ei(e)}function Na(n,e,t){Wv(n.x,e.x,t.x),Wv(n.y,e.y,t.y)}function G1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Yt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Yt(t,n,r.max):Math.min(n,t)),n}function Xv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function j1(n,{top:e,left:t,bottom:r,right:o}){return{x:Xv(n.x,t,o),y:Xv(n.y,e,r)}}function Yv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function W1(n,e){return{x:Yv(n.x,e.x),y:Yv(n.y,e.y)}}function X1(n,e){let t=.5;const r=ei(n),o=ei(e);return o>r?t=wo(e.min,e.max-r,n.min):r>o&&(t=wo(n.min,n.max-o,e.min)),or(0,1,t)}function Y1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const qf=.35;function q1(n=qf){return n===!1?n=0:n===!0&&(n=qf),{x:qv(n,"left","right"),y:qv(n,"top","bottom")}}function qv(n,e,t){return{min:$v(n,e),max:$v(n,t)}}function $v(n,e){return typeof n=="number"?n:n[e]||0}const Kv=()=>({translate:0,scale:1,origin:0,originPoint:0}),_o=()=>({x:Kv(),y:Kv()}),Zv=()=>({min:0,max:0}),en=()=>({x:Zv(),y:Zv()});function ci(n){return[n("x"),n("y")]}function Xx({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function $1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function K1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Qd(n){return n===void 0||n===1}function $f({scale:n,scaleX:e,scaleY:t}){return!Qd(n)||!Qd(e)||!Qd(t)}function ms(n){return $f(n)||Yx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Yx(n){return Qv(n.x)||Qv(n.y)}function Qv(n){return n&&n!=="0%"}function Xc(n,e,t){const r=n-t,o=e*r;return t+o}function Jv(n,e,t,r,o){return o!==void 0&&(n=Xc(n,o,r)),Xc(n,t,r)+e}function Kf(n,e=0,t=1,r,o){n.min=Jv(n.min,e,t,r,o),n.max=Jv(n.max,e,t,r,o)}function qx(n,{x:e,y:t}){Kf(n.x,e.translate,e.scale,e.originPoint),Kf(n.y,t.translate,t.scale,t.originPoint)}const e0=.999999999999,t0=1.0000000000001;function Z1(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,c;for(let u=0;u<o;u++){l=t[u],c=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&yo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,qx(n,c)),r&&ms(l.latestValues)&&yo(n,l.latestValues))}e.x<t0&&e.x>e0&&(e.x=1),e.y<t0&&e.y>e0&&(e.y=1)}function xo(n,e){n.min=n.min+e,n.max=n.max+e}function n0(n,e,t,r,o=.5){const l=Yt(n.min,n.max,o);Kf(n,e,t,l,r)}function yo(n,e){n0(n.x,e.x,e.scaleX,e.scale,e.originX),n0(n.y,e.y,e.scaleY,e.scale,e.originY)}function $x(n,e){return Xx(K1(n.getBoundingClientRect(),e))}function Q1(n,e,t){const r=$x(n,t),{scroll:o}=e;return o&&(xo(r.x,o.offset.x),xo(r.y,o.offset.y)),r}const Kx=({current:n})=>n?n.ownerDocument.defaultView:null,J1=new WeakMap;class ew{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=en(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ja(p).point)},l=(p,g)=>{const{drag:v,dragPropagation:y,onDragStart:E}=this.getProps();if(v&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(S=>{let _=this.getAxisMotionValue(S).get()||0;if(Ii.test(_)){const{projection:b}=this.visualElement;if(b&&b.layout){const R=b.layout.layoutBox[S];R&&(_=ei(R)*(parseFloat(_)/100))}}this.originPoint[S]=_}),E&&zt.postRender(()=>E(p,g)),zf(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},c=(p,g)=>{const{dragPropagation:v,dragDirectionLock:y,onDirectionLock:E,onDrag:T}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=g;if(y&&this.currentDirection===null){this.currentDirection=tw(S),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),T&&T(p,g)},u=(p,g)=>this.stop(p,g),f=()=>ci(p=>{var g;return this.getAnimationState(p)==="paused"&&((g=this.getAxisMotionValue(p).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Hx(e,{onSessionStart:o,onStart:l,onMove:c,onSessionEnd:u,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Kx(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&zt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!ac(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=G1(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&go(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=j1(o.layoutBox,t):this.constraints=!1,this.elastic=q1(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ci(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=Y1(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!go(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=Q1(r,o.root,this.visualElement.getTransformPagePoint());let c=W1(o.layout.layoutBox,l);if(t){const u=t($1(c));this.hasMutatedConstraints=!!u,u&&(c=Xx(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},h=ci(p=>{if(!ac(p,t,this.currentDirection))return;let g=f&&f[p]||{};c&&(g={min:0,max:0});const v=o?200:1e6,y=o?40:1e7,E={type:"inertia",velocity:r?e[p]:0,bounceStiffness:v,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(p,E)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return zf(this.visualElement,e),r.start(yp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ci(t=>{const{drag:r}=this.getProps();if(!ac(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];l.set(e[t]-Yt(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!go(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ci(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const f=u.get();o[c]=X1({min:f,max:f},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ci(c=>{if(!ac(c,e,null))return;const u=this.getAxisMotionValue(c),{min:f,max:h}=this.constraints[c];u.set(Yt(f,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;J1.set(this.visualElement,this);const e=this.visualElement.current,t=Da(e,"pointerdown",f=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();go(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),zt.read(r);const c=ka(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(ci(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=f[p].translate,g.set(g.get()+f[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),l(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:c=qf,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:c,dragMomentum:u}}}function ac(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function tw(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class nw extends jr{constructor(e){super(e),this.removeGroupControls=Jn,this.removeListeners=Jn,this.controls=new ew(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jn}unmount(){this.removeGroupControls(),this.removeListeners()}}const i0=n=>(e,t)=>{n&&zt.postRender(()=>n(e,t))};class iw extends jr{constructor(){super(...arguments),this.removePointerDownListener=Jn}onPointerDown(e){this.session=new Hx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Kx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:i0(e),onStart:i0(t),onMove:r,onEnd:(l,c)=>{delete this.session,o&&zt.postRender(()=>o(l,c))}}}mount(){this.removePointerDownListener=Da(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Nc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function r0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const va={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(et.test(n))n=parseFloat(n);else return n;const t=r0(n,e.target.x),r=r0(n,e.target.y);return`${t}% ${r}%`}},rw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Vr.parse(n);if(o.length>5)return r;const l=Vr.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,f=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=f;const h=Yt(u,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),l(o)}};class sw extends be.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;wE(ow),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Nc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,c=r.projection;return c&&(c.isPresent=l,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||zt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),$h.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Zx(n){const[e,t]=N_(),r=be.useContext(Vh);return M.jsx(sw,{...n,layoutGroup:r,switchLayoutGroup:be.useContext(V_),isPresent:e,safeToRemove:t})}const ow={borderRadius:{...va,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:va,borderTopRightRadius:va,borderBottomLeftRadius:va,borderBottomRightRadius:va,boxShadow:rw};function aw(n,e,t){const r=Rn(n)?n:Fa(n);return r.start(yp("",r,e,t)),r.animation}function lw(n){return n instanceof SVGElement&&n.tagName!=="svg"}const cw=(n,e)=>n.depth-e.depth;class uw{constructor(){this.children=[],this.isDirty=!1}add(e){cp(this.children,e),this.isDirty=!0}remove(e){up(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(cw),this.isDirty=!1,this.children.forEach(e)}}function dw(n,e){const t=Ui.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(zr(r),n(l-e))};return zt.read(r,!0),()=>zr(r)}const Qx=["TopLeft","TopRight","BottomLeft","BottomRight"],fw=Qx.length,s0=n=>typeof n=="string"?parseFloat(n):n,o0=n=>typeof n=="number"||et.test(n);function hw(n,e,t,r,o,l){o?(n.opacity=Yt(0,t.opacity!==void 0?t.opacity:1,pw(r)),n.opacityExit=Yt(e.opacity!==void 0?e.opacity:1,0,mw(r))):l&&(n.opacity=Yt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let c=0;c<fw;c++){const u=`border${Qx[c]}Radius`;let f=a0(e,u),h=a0(t,u);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||o0(f)===o0(h)?(n[u]=Math.max(Yt(s0(f),s0(h),r),0),(Ii.test(h)||Ii.test(f))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Yt(e.rotate||0,t.rotate||0,r))}function a0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const pw=Jx(0,.5,vx),mw=Jx(.5,.95,Jn);function Jx(n,e,t){return r=>r<n?0:r>e?1:t(wo(n,e,r))}function l0(n,e){n.min=e.min,n.max=e.max}function ai(n,e){l0(n.x,e.x),l0(n.y,e.y)}function c0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function u0(n,e,t,r,o){return n-=e,n=Xc(n,1/t,r),o!==void 0&&(n=Xc(n,1/o,r)),n}function gw(n,e=0,t=1,r=.5,o,l=n,c=n){if(Ii.test(e)&&(e=parseFloat(e),e=Yt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Yt(l.min,l.max,r);n===l&&(u-=e),n.min=u0(n.min,e,t,u,o),n.max=u0(n.max,e,t,u,o)}function d0(n,e,[t,r,o],l,c){gw(n,e[t],e[r],e[o],e.scale,l,c)}const vw=["x","scaleX","originX"],_w=["y","scaleY","originY"];function f0(n,e,t,r){d0(n.x,e,vw,t?t.x:void 0,r?r.x:void 0),d0(n.y,e,_w,t?t.y:void 0,r?r.y:void 0)}function h0(n){return n.translate===0&&n.scale===1}function ey(n){return h0(n.x)&&h0(n.y)}function p0(n,e){return n.min===e.min&&n.max===e.max}function xw(n,e){return p0(n.x,e.x)&&p0(n.y,e.y)}function m0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function ty(n,e){return m0(n.x,e.x)&&m0(n.y,e.y)}function g0(n){return ei(n.x)/ei(n.y)}function v0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class yw{constructor(){this.members=[]}add(e){cp(this.members,e),e.scheduleRender()}remove(e){if(up(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Sw(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||l||c)&&(r=`translate3d(${o}px, ${l}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:y,skewY:E}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),y&&(r+=`skewX(${y}deg) `),E&&(r+=`skewY(${E}deg) `)}const u=n.x.scale*e.x,f=n.y.scale*e.y;return(u!==1||f!==1)&&(r+=`scale(${u}, ${f})`),r||"none"}const gs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ca=typeof window<"u"&&window.MotionDebug!==void 0,Jd=["","X","Y","Z"],Mw={visibility:"hidden"},_0=1e3;let Ew=0;function ef(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function ny(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=ux(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",zt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&ny(r)}function iy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=Ew++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ca&&(gs.totalNodes=gs.resolvedTargetDeltas=gs.recalculatedProjection=0),this.nodes.forEach(Aw),this.nodes.forEach(Dw),this.nodes.forEach(Lw),this.nodes.forEach(Cw),Ca&&window.MotionDebug.record(gs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new uw)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new dp),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const f=this.eventHandlers.get(c);f&&f.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=lw(c),this.instance=c;const{layoutId:f,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||f)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=dw(v,250),Nc.hasAnimatedSinceResize&&(Nc.hasAnimatedSinceResize=!1,this.nodes.forEach(y0))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:y,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||Ow,{onLayoutAnimationStart:S,onLayoutAnimationComplete:_}=p.getProps(),b=!this.targetLayout||!ty(this.targetLayout,E)||y,R=!v&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||R||v&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,R);const A={...sp(T,"layout"),onPlay:S,onComplete:_};(p.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A)}else v||y0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,zr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Nw),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ny(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(x0);return}this.isUpdating||this.nodes.forEach(Pw),this.isUpdating=!1,this.nodes.forEach(bw),this.nodes.forEach(Tw),this.nodes.forEach(ww),this.clearAllSnapshots();const u=Ui.now();vn.delta=or(0,1e3/60,u-vn.timestamp),vn.timestamp=u,vn.isProcessing=!0,jd.update.process(vn),jd.preRender.process(vn),jd.render.process(vn),vn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$h.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Rw),this.sharedNodes.forEach(Iw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=en(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!ey(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&(u||ms(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return c&&(f=this.removeTransform(f)),kw(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:u}=this.options;if(!u)return en();const f=u.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(Bw))){const{scroll:p}=this.root;p&&(xo(f.x,p.offset.x),xo(f.y,p.offset.y))}return f}removeElementScroll(c){var u;const f=en();if(ai(f,c),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return f;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:v}=p;p!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&ai(f,c),xo(f.x,g.offset.x),xo(f.y,g.offset.y))}return f}applyTransform(c,u=!1){const f=en();ai(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&yo(f,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ms(p.latestValues)&&yo(f,p.latestValues)}return ms(this.latestValues)&&yo(f,this.latestValues),f}removeTransform(c){const u=en();ai(u,c);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!ms(h.latestValues))continue;$f(h.latestValues)&&h.updateSnapshot();const p=en(),g=h.measurePageBox();ai(p,g),f0(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return ms(this.latestValues)&&f0(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var u;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=vn.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=en(),this.relativeTargetOrigin=en(),Na(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),ai(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=en(),this.targetWithTransforms=en()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),H1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ai(this.target,this.layout.layoutBox),qx(this.target,this.targetDelta)):ai(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=en(),this.relativeTargetOrigin=en(),Na(this.relativeTargetOrigin,this.target,y.target),ai(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ca&&gs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||$f(this.parent.latestValues)||Yx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===vn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;ai(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,y=this.treeScale.y;Z1(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=en());const{target:E}=u;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(c0(this.prevProjectionDelta.x,this.projectionDelta.x),c0(this.prevProjectionDelta.y,this.projectionDelta.y)),La(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==y||!v0(this.projectionDelta.x,this.prevProjectionDelta.x)||!v0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),Ca&&gs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_o(),this.projectionDelta=_o(),this.projectionDeltaWithTransform=_o()}setAnimationOrigin(c,u=!1){const f=this.snapshot,h=f?f.latestValues:{},p={...this.latestValues},g=_o();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const v=en(),y=f?f.source:void 0,E=this.layout?this.layout.source:void 0,T=y!==E,S=this.getStack(),_=!S||S.members.length<=1,b=!!(T&&!_&&this.options.crossfade===!0&&!this.path.some(Fw));this.animationProgress=0;let R;this.mixTargetDelta=A=>{const N=A/1e3;S0(g.x,c.x,N),S0(g.y,c.y,N),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Na(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Uw(this.relativeTarget,this.relativeTargetOrigin,v,N),R&&xw(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=en()),ai(R,this.relativeTarget)),T&&(this.animationValues=p,hw(p,h,this.latestValues,N,b,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(zr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zt.update(()=>{Nc.hasAnimatedSinceResize=!0,this.currentAnimation=aw(0,_0,{...c,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:f,layout:h,latestValues:p}=c;if(!(!u||!f||!h)){if(this!==c&&this.layout&&h&&ry(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||en();const g=ei(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+g;const v=ei(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+v}ai(u,f),yo(u,p),La(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new yw),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const h={};f.z&&ef("z",c,h,this.animationValues);for(let p=0;p<Jd.length;p++)ef(`rotate${Jd[p]}`,c,h,this.animationValues),ef(`skew${Jd[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){var u,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Mw;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Dc(c==null?void 0:c.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Dc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!ms(this.latestValues)&&(T.transform=p?p({},""):"none",this.hasProjected=!1),T}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=Sw(this.projectionDeltaWithTransform,this.treeScale,v),p&&(h.transform=p(v,h.transform));const{x:y,y:E}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${E.origin*100}% 0`,g.animationValues?h.opacity=g===this?(f=(u=v.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const T in Vc){if(v[T]===void 0)continue;const{correct:S,applyTo:_}=Vc[T],b=h.transform==="none"?v[T]:S(v[T],g);if(_){const R=_.length;for(let A=0;A<R;A++)h[_[A]]=b}else h[T]=b}return this.options.layoutId&&(h.pointerEvents=g===this?Dc(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(x0),this.root.sharedNodes.clear()}}}function Tw(n){n.updateLayout()}function ww(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,c=t.source!==n.layout.source;l==="size"?ci(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],y=ei(v);v.min=r[g].min,v.max=v.min+y}):ry(l,t.layoutBox,r)&&ci(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],y=ei(r[g]);v.max=v.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+y)});const u=_o();La(u,r,t.layoutBox);const f=_o();c?La(f,n.applyTransform(o,!0),t.measuredBox):La(f,r,t.layoutBox);const h=!ey(u);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:y}=g;if(v&&y){const E=en();Na(E,t.layoutBox,v.layoutBox);const T=en();Na(T,r,y.layoutBox),ty(E,T)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=E,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function Aw(n){Ca&&gs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Cw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Rw(n){n.clearSnapshot()}function x0(n){n.clearMeasurements()}function Pw(n){n.isLayoutDirty=!1}function bw(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function y0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Dw(n){n.resolveTargetDelta()}function Lw(n){n.calcProjection()}function Nw(n){n.resetSkewAndRotation()}function Iw(n){n.removeLeadSnapshot()}function S0(n,e,t){n.translate=Yt(e.translate,0,t),n.scale=Yt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function M0(n,e,t,r){n.min=Yt(e.min,t.min,r),n.max=Yt(e.max,t.max,r)}function Uw(n,e,t,r){M0(n.x,e.x,t.x,r),M0(n.y,e.y,t.y,r)}function Fw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Ow={duration:.45,ease:[.4,0,.1,1]},E0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),T0=E0("applewebkit/")&&!E0("chrome/")?Math.round:Jn;function w0(n){n.min=T0(n.min),n.max=T0(n.max)}function kw(n){w0(n.x),w0(n.y)}function ry(n,e,t){return n==="position"||n==="preserve-aspect"&&!V1(g0(e),g0(t),.2)}function Bw(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const zw=iy({attachResizeListener:(n,e)=>ka(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tf={current:void 0},sy=iy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!tf.current){const n=new zw({});n.mount(window),n.setOptions({layoutScroll:!0}),tf.current=n}return tf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Vw={pan:{Feature:iw},drag:{Feature:nw,ProjectionNode:sy,MeasureLayout:Zx}};function A0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&zt.postRender(()=>l(e,ja(e)))}class Hw extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=VE(e,t=>(A0(this.node,t,"Start"),r=>A0(this.node,r,"End"))))}unmount(){}}class Gw extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ga(ka(this.node.current,"focus",()=>this.onFocus()),ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function C0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&zt.postRender(()=>l(e,ja(e)))}class jw extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=WE(e,t=>(C0(this.node,t,"Start"),(r,{success:o})=>C0(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Zf=new WeakMap,nf=new WeakMap,Ww=n=>{const e=Zf.get(n.target);e&&e(n)},Xw=n=>{n.forEach(Ww)};function Yw({root:n,...e}){const t=n||document;nf.has(t)||nf.set(t,{});const r=nf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Xw,{root:n,...e})),r[o]}function qw(n,e,t){const r=Yw(e);return Zf.set(n,t),r.observe(n),()=>{Zf.delete(n),r.unobserve(n)}}const $w={some:0,all:1};class Kw extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:$w[o]},u=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(f)};return qw(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Zw(e,t))&&this.startObserver()}unmount(){}}function Zw({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Qw={inView:{Feature:Kw},tap:{Feature:jw},focus:{Feature:Gw},hover:{Feature:Hw}},Jw={layout:{ProjectionNode:sy,MeasureLayout:Zx}},Qf={current:null},oy={current:!1};function eA(){if(oy.current=!0,!!jh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Qf.current=n.matches;n.addListener(e),e()}else Qf.current=!1}const tA=[...Dx,Cn,Vr],nA=n=>tA.find(bx(n)),R0=new WeakMap;function iA(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Rn(o))n.addValue(r,o);else if(Rn(l))n.addValue(r,Fa(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Fa(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const P0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class rA{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Ui.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,zt.render(this.render,!1,!0))};const{latestValues:f,renderState:h,onUpdate:p}=c;this.onUpdate=p,this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!l,this.isControllingVariants=nu(t),this.isVariantNode=B_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in v){const E=v[y];f[y]!==void 0&&Rn(E)&&E.set(f[y],!1)}}mount(e){this.current=e,R0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),oy.current||eA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){R0.delete(this.current),this.projection&&this.projection.unmount(),zr(this.notifyUpdate),zr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ps.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&zt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ao){const t=Ao[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):en()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<P0.length;r++){const o=P0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,c=e[l];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=iA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Fa(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Rx(o)||xx(o))?o=parseFloat(o):!nA(o)&&Vr.test(t)&&(o=wx(e,t)),this.setBaseTarget(e,Rn(o)?o.get():o)),Rn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const c=Zh(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Rn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new dp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class ay extends rA{constructor(){super(...arguments),this.KeyframeResolver=Lx}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Rn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function sA(n){return window.getComputedStyle(n)}class oA extends ay{constructor(){super(...arguments),this.type="html",this.renderInstance=q_}readValueFromInstance(e,t){if(Ps.has(t)){const r=gp(t);return r&&r.default||0}else{const r=sA(e),o=(W_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return $x(e,t)}build(e,t,r){ep(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return rp(e,t,r)}}class aA extends ay{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=en}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ps.has(t)){const r=gp(t);return r&&r.default||0}return t=$_.has(t)?t:qh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Q_(e,t,r)}build(e,t,r){tp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){K_(e,t,r,o)}mount(e){this.isSVGTag=ip(e.tagName),super.mount(e)}}const lA=(n,e)=>Kh(n)?new aA(e):new oA(e,{allowProjection:n!==be.Fragment}),cA=IE({...L1,...Qw,...Vw,...Jw},lA),xt=$M(cA),Yc=({height:n=28})=>M.jsxs("svg",{width:n*371/481,height:n,viewBox:"0 0 371 481",fill:"none","aria-hidden":"true",children:[M.jsx("path",{d:"M0 370.5V0L285.5 89.5V123.5L239.5 137V121.5L49 62L51 311.5L240.5 249.5V218L285.5 203.5V279.5L0 370.5Z",fill:"#FF7503"}),M.jsx("path",{d:"M90 205.5V281L134.5 269V236.5L324.5 174V423.5L135 364V348L89.5 361V394.5L370.5 480V115.5L90 205.5Z",fill:"#FF5029",stroke:"#FF5029"})]}),Vt=({size:n=22,children:e,...t})=>M.jsx("svg",{viewBox:"0 0 24 24",width:n,height:n,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...t,children:e}),uA=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M4 5h16v11H9l-5 4V5z"}),M.jsx("path",{d:"M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"})]}),ly=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M12 5.5v13"}),M.jsx("path",{d:"M9.6 4.2a2.4 2.4 0 0 0-2.3 3A3.8 3.8 0 0 0 6 14v2a3 3 0 0 0 3 3h3"}),M.jsx("path",{d:"M14.4 4.2a2.4 2.4 0 0 1 2.3 3A3.8 3.8 0 0 1 18 14v2a3 3 0 0 1-3 3h-3"}),M.jsx("path",{d:"M9.6 4.2A2.4 2.4 0 0 1 12 6a2.4 2.4 0 0 1 2.4-1.8"}),M.jsx("path",{d:"M8.5 10.5H7M17 10.5h-1.5"})]}),dA=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M21 3L10.5 13.5"}),M.jsx("path",{d:"M21 3l-6.8 18-3.7-8.3L2 9z"})]}),b0=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"}),M.jsx("path",{d:"M19 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"})]}),fA=n=>M.jsxs(Vt,{...n,children:[M.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),M.jsx("path",{d:"M12 7.5V12l3 2"})]}),Or=n=>M.jsx(Vt,{...n,children:M.jsx("path",{d:"M5 13l4 4 10-11"})}),ws=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M12 3.5l8.5 4.5L12 12.5 3.5 8z"}),M.jsx("path",{d:"M4 13l8 4.5 8-4.5"})]}),hA=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M8 7l-5 5 5 5"}),M.jsx("path",{d:"M16 7l5 5-5 5"})]}),Ba=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M4 12h15"}),M.jsx("path",{d:"M13.5 6l5.5 6-5.5 6"})]}),cy=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M20 12H5"}),M.jsx("path",{d:"M10.5 6L5 12l5.5 6"})]}),uy=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M20 12a8 8 0 1 1-2.4-5.7"}),M.jsx("path",{d:"M20 3.5V9h-5.5"})]}),pA=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M6.5 4.5h11"}),M.jsx("path",{d:"M12 4.5v15"}),M.jsx("path",{d:"M9 19.5h6"})]}),dy=n=>M.jsxs(Vt,{...n,children:[M.jsx("circle",{cx:"6.5",cy:"6.5",r:"2.3"}),M.jsx("circle",{cx:"6.5",cy:"17.5",r:"2.3"}),M.jsx("path",{d:"M8.5 8L20 19"}),M.jsx("path",{d:"M8.5 16L20 5"})]}),mA=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M9.5 4L7.5 20M16.5 4l-2 16"}),M.jsx("path",{d:"M4.5 9h16M3.5 15h16"})]}),qc=n=>M.jsx(Vt,{...n,children:M.jsx("path",{d:"M13 2L4.5 14h6L11 22l8.5-12h-6z"})}),gA=n=>M.jsxs(Vt,{...n,children:[M.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),M.jsx("path",{d:"M3.5 7l8.5 6 8.5-6"})]}),vA=n=>M.jsxs(Vt,{...n,children:[M.jsx("rect",{x:"4",y:"7",width:"16",height:"11",rx:"3"}),M.jsx("path",{d:"M12 3v4"}),M.jsx("circle",{cx:"9",cy:"12",r:"1"}),M.jsx("circle",{cx:"15",cy:"12",r:"1"}),M.jsx("path",{d:"M9 16h6"})]}),_A=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M4 16a8 8 0 1 1 16 0"}),M.jsx("path",{d:"M12 16l3.5-4.5"})]}),Sp=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M9 11V6a3 3 0 0 1 6 0v5"}),M.jsx("path",{d:"M8 11h8v2a4 4 0 0 1-4 4v3"}),M.jsx("path",{d:"M8 15h0"})]}),fy=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"}),M.jsx("circle",{cx:"12",cy:"12",r:"2.6"})]}),D0=n=>M.jsx(Vt,{...n,children:M.jsx("path",{d:"M6.5 6.5l11 11M17.5 6.5l-11 11"})}),xA=n=>M.jsx(Vt,{...n,children:M.jsx("path",{d:"M6.5 3.5h11V20.5L12 17l-5.5 3.5z"})}),yA=n=>M.jsx(Vt,{...n,children:M.jsx("path",{d:"M8 5v14l11-7z"})}),SA=n=>M.jsx(Vt,{...n,children:M.jsx("path",{d:"M9 6v12M15 6v12"})}),MA=n=>M.jsxs(Vt,{...n,children:[M.jsx("path",{d:"M6 4v5M6 13v7M12 4v2M12 10v10M18 4v7M18 15v5"}),M.jsx("path",{d:"M3 13h6M9 10h6M15 15h6"})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="171",EA=0,L0=1,TA=2,hy=1,wA=2,Ji=3,Hr=0,jn=1,er=2,kr=0,Mo=1,N0=2,I0=3,U0=4,AA=5,xs=100,CA=101,RA=102,PA=103,bA=104,DA=200,LA=201,NA=202,IA=203,Jf=204,eh=205,UA=206,FA=207,OA=208,kA=209,BA=210,zA=211,VA=212,HA=213,GA=214,th=0,nh=1,ih=2,Ro=3,rh=4,sh=5,oh=6,ah=7,py=0,jA=1,WA=2,Br=0,XA=1,YA=2,qA=3,$A=4,KA=5,ZA=6,QA=7,my=300,Po=301,bo=302,lh=303,ch=304,su=306,uh=1e3,Ms=1001,dh=1002,wi=1003,JA=1004,lc=1005,Ni=1006,rf=1007,Es=1008,ar=1009,gy=1010,vy=1011,za=1012,Ep=1013,As=1014,tr=1015,Wa=1016,Tp=1017,wp=1018,Do=1020,_y=35902,xy=1021,yy=1022,Ei=1023,Sy=1024,My=1025,Eo=1026,Lo=1027,Ey=1028,Ap=1029,Ty=1030,Cp=1031,Rp=1033,Ic=33776,Uc=33777,Fc=33778,Oc=33779,fh=35840,hh=35841,ph=35842,mh=35843,gh=36196,vh=37492,_h=37496,xh=37808,yh=37809,Sh=37810,Mh=37811,Eh=37812,Th=37813,wh=37814,Ah=37815,Ch=37816,Rh=37817,Ph=37818,bh=37819,Dh=37820,Lh=37821,kc=36492,Nh=36494,Ih=36495,wy=36283,Uh=36284,Fh=36285,Oh=36286,eC=3200,tC=3201,Ay=0,nC=1,Fr="",ui="srgb",No="srgb-linear",$c="linear",Nt="srgb",eo=7680,F0=519,iC=512,rC=513,sC=514,Cy=515,oC=516,aC=517,lC=518,cC=519,O0=35044,k0="300 es",nr=2e3,Kc=2001;class Oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,kh=180/Math.PI;function Xa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function uC(n,e){return(n%e+e)%e}function of(n,e,t){return(1-t)*n+t*e}function _a(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,c,u,f,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,f,h)}set(e,t,r,o,l,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=l,p[5]=f,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[3],f=r[6],h=r[1],p=r[4],g=r[7],v=r[2],y=r[5],E=r[8],T=o[0],S=o[3],_=o[6],b=o[1],R=o[4],A=o[7],N=o[2],I=o[5],F=o[8];return l[0]=c*T+u*b+f*N,l[3]=c*S+u*R+f*I,l[6]=c*_+u*A+f*F,l[1]=h*T+p*b+g*N,l[4]=h*S+p*R+g*I,l[7]=h*_+p*A+g*F,l[2]=v*T+y*b+E*N,l[5]=v*S+y*R+E*I,l[8]=v*_+y*A+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*l*p+r*u*f+o*l*h-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],g=p*c-u*h,v=u*f-p*l,y=h*l-c*f,E=t*g+r*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(o*h-p*r)*T,e[2]=(u*r-o*c)*T,e[3]=v*T,e[4]=(p*t-o*f)*T,e[5]=(o*l-u*t)*T,e[6]=y*T,e[7]=(r*f-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,u){const f=Math.cos(l),h=Math.sin(l);return this.set(r*f,r*h,-r*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const af=new lt;function Ry(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dC(){const n=Zc("canvas");return n.style.display="block",n}const B0={};function mo(n){n in B0||(B0[n]=!0,console.warn(n))}function fC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function hC(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pC(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const z0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mC(){const n={enabled:!0,workingColorSpace:No,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(o.r=sr(o.r),o.g=sr(o.g),o.b=sr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=To(o.r),o.g=To(o.g),o.b=To(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?$c:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[No]:{primaries:e,whitePoint:r,transfer:$c,toXYZ:z0,fromXYZ:V0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:z0,fromXYZ:V0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),n}const Ct=mC();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function To(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let to;class gC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{to===void 0&&(to=Zc("canvas")),to.width=e.width,to.height=e.height;const r=to.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=to}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=sr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(sr(t[r]/255)*255):t[r]=sr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vC=0;class Py{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vC++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?l.push(lf(o[c].image)):l.push(lf(o[c]))}else l=lf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function lf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _C=0;class Wn extends Oo{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,r=Ms,o=Ms,l=Ni,c=Es,u=Ei,f=ar,h=Wn.DEFAULT_ANISOTROPY,p=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_C++}),this.uuid=Xa(),this.name="",this.source=new Py(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==my)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=my;Wn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,r=0,o=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,h=f[0],p=f[4],g=f[8],v=f[1],y=f[5],E=f[9],T=f[2],S=f[6],_=f[10];if(Math.abs(p-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,A=(y+1)/2,N=(_+1)/2,I=(p+v)/4,F=(g+T)/4,k=(E+S)/4;return R>A&&R>N?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=F/r):A>N?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=I/o,l=k/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=F/l,o=k/l),this.set(r,o,l,t),this}let b=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(v-p)*(v-p));return Math.abs(b)<.001&&(b=1),this.x=(S-E)/b,this.y=(g-T)/b,this.z=(v-p)/b,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xC extends Oo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Wn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Py(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends xC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class by extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yC extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,u){let f=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3];const v=l[c+0],y=l[c+1],E=l[c+2],T=l[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=T;return}if(g!==T||f!==v||h!==y||p!==E){let S=1-u;const _=f*v+h*y+p*E+g*T,b=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const N=Math.sqrt(R),I=Math.atan2(N,_*b);S=Math.sin(S*I)/N,u=Math.sin(u*I)/N}const A=u*b;if(f=f*S+v*A,h=h*S+y*A,p=p*S+E*A,g=g*S+T*A,S===1-u){const N=1/Math.sqrt(f*f+h*h+p*p+g*g);f*=N,h*=N,p*=N,g*=N}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,c){const u=r[o],f=r[o+1],h=r[o+2],p=r[o+3],g=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return e[t]=u*E+p*g+f*y-h*v,e[t+1]=f*E+p*v+h*g-u*y,e[t+2]=h*E+p*y+u*v-f*g,e[t+3]=p*E-u*g-f*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(r/2),p=u(o/2),g=u(l/2),v=f(r/2),y=f(o/2),E=f(l/2);switch(c){case"XYZ":this._x=v*p*g+h*y*E,this._y=h*y*g-v*p*E,this._z=h*p*E+v*y*g,this._w=h*p*g-v*y*E;break;case"YXZ":this._x=v*p*g+h*y*E,this._y=h*y*g-v*p*E,this._z=h*p*E-v*y*g,this._w=h*p*g+v*y*E;break;case"ZXY":this._x=v*p*g-h*y*E,this._y=h*y*g+v*p*E,this._z=h*p*E+v*y*g,this._w=h*p*g-v*y*E;break;case"ZYX":this._x=v*p*g-h*y*E,this._y=h*y*g+v*p*E,this._z=h*p*E-v*y*g,this._w=h*p*g+v*y*E;break;case"YZX":this._x=v*p*g+h*y*E,this._y=h*y*g+v*p*E,this._z=h*p*E-v*y*g,this._w=h*p*g-v*y*E;break;case"XZY":this._x=v*p*g-h*y*E,this._y=h*y*g-v*p*E,this._z=h*p*E+v*y*g,this._w=h*p*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],g=t[10],v=r+u+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-f)*y,this._y=(l-h)*y,this._z=(c-o)*y}else if(r>u&&r>g){const y=2*Math.sqrt(1+r-u-g);this._w=(p-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-r-g);this._w=(l-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+g-r-u);this._w=(c-o)/y,this._x=(l+h)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-l*f,this._y=o*p+c*f+l*u-r*h,this._z=l*p+c*h+r*f-o*u,this._w=c*p-r*u-o*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let u=c*e._w+r*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*r+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=c*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(H0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*r),p=2*(u*t-l*o),g=2*(l*r-c*t);return this.x=t+f*h+c*g-u*p,this.y=r+f*p+u*h-l*g,this.z=o+f*g+l*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-l*u,this.y=l*c-r*f,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new q,H0=new Ya;class qa{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=l.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,_i):_i.fromBufferAttribute(l,c),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),uc.subVectors(this.max,xa),no.subVectors(e.a,xa),io.subVectors(e.b,xa),ro.subVectors(e.c,xa),Pr.subVectors(io,no),br.subVectors(ro,io),cs.subVectors(no,ro);let t=[0,-Pr.z,Pr.y,0,-br.z,br.y,0,-cs.z,cs.y,Pr.z,0,-Pr.x,br.z,0,-br.x,cs.z,0,-cs.x,-Pr.y,Pr.x,0,-br.y,br.x,0,-cs.y,cs.x,0];return!uf(t,no,io,ro,uc)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,no,io,ro,uc))?!1:(dc.crossVectors(Pr,br),t=[dc.x,dc.y,dc.z],uf(t,no,io,ro,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new q,new q,new q,new q,new q,new q,new q,new q],_i=new q,cc=new qa,no=new q,io=new q,ro=new q,Pr=new q,br=new q,cs=new q,xa=new q,uc=new q,dc=new q,us=new q;function uf(n,e,t,r,o){for(let l=0,c=n.length-3;l<=c;l+=3){us.fromArray(n,l);const u=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),f=e.dot(us),h=t.dot(us),p=r.dot(us);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const SC=new qa,ya=new q,df=new q;class Pp{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):SC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(df)),this.expandByPoint(ya.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new q,ff=new q,fc=new q,Dr=new q,hf=new q,hc=new q,pf=new q;class MC{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ff.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(ff);const l=e.distanceTo(t)*.5,c=-this.direction.dot(fc),u=Dr.dot(this.direction),f=-Dr.dot(fc),h=Dr.lengthSq(),p=Math.abs(1-c*c);let g,v,y,E;if(p>0)if(g=c*f-u,v=c*u-f,E=l*p,g>=0)if(v>=-E)if(v<=E){const T=1/p;g*=T,v*=T,y=g*(g+c*v+2*u)+v*(c*g+v+2*f)+h}else v=l,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*f)+h;else v=-l,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*f)+h;else v<=-E?(g=Math.max(0,-(-c*l+u)),v=g>0?-l:Math.min(Math.max(-l,-f),l),y=-g*g+v*(v+2*f)+h):v<=E?(g=0,v=Math.min(Math.max(-l,-f),l),y=v*(v+2*f)+h):(g=Math.max(0,-(c*l+u)),v=g>0?l:Math.min(Math.max(-l,-f),l),y=-g*g+v*(v+2*f)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(ff).addScaledVector(fc,v),y}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),u=r-c,f=r+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(l=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),r>f||u>o)||((u>r||r!==r)&&(r=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){hf.subVectors(t,e),hc.subVectors(r,e),pf.crossVectors(hf,hc);let c=this.direction.dot(pf),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Dr.subVectors(this.origin,e);const f=u*this.direction.dot(hc.crossVectors(Dr,hc));if(f<0)return null;const h=u*this.direction.dot(hf.cross(Dr));if(h<0||f+h>c)return null;const p=-u*Dr.dot(pf);return p<0?null:this.at(p/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,r,o,l,c,u,f,h,p,g,v,y,E,T,S){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,f,h,p,g,v,y,E,T,S)}set(e,t,r,o,l,c,u,f,h,p,g,v,y,E,T,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=c,_[9]=u,_[13]=f,_[2]=h,_[6]=p,_[10]=g,_[14]=v,_[3]=y,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/so.setFromMatrixColumn(e,0).length(),l=1/so.setFromMatrixColumn(e,1).length(),c=1/so.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o),p=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*p,y=c*g,E=u*p,T=u*g;t[0]=f*p,t[4]=-f*g,t[8]=h,t[1]=y+E*h,t[5]=v-T*h,t[9]=-u*f,t[2]=T-v*h,t[6]=E+y*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*p,y=f*g,E=h*p,T=h*g;t[0]=v+T*u,t[4]=E*u-y,t[8]=c*h,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-E,t[6]=T+v*u,t[10]=c*f}else if(e.order==="ZXY"){const v=f*p,y=f*g,E=h*p,T=h*g;t[0]=v-T*u,t[4]=-c*g,t[8]=E+y*u,t[1]=y+E*u,t[5]=c*p,t[9]=T-v*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const v=c*p,y=c*g,E=u*p,T=u*g;t[0]=f*p,t[4]=E*h-y,t[8]=v*h+T,t[1]=f*g,t[5]=T*h+v,t[9]=y*h-E,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,y=c*h,E=u*f,T=u*h;t[0]=f*p,t[4]=T-v*g,t[8]=E*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*g+E,t[10]=v-T*g}else if(e.order==="XZY"){const v=c*f,y=c*h,E=u*f,T=u*h;t[0]=f*p,t[4]=-g,t[8]=h*p,t[1]=v*g+T,t[5]=c*p,t[9]=y*g-E,t[2]=E*g-y,t[6]=u*p,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EC,e,TC)}lookAt(e,t,r){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Lr.crossVectors(r,Kn),Lr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Lr.crossVectors(r,Kn)),Lr.normalize(),pc.crossVectors(Kn,Lr),o[0]=Lr.x,o[4]=pc.x,o[8]=Kn.x,o[1]=Lr.y,o[5]=pc.y,o[9]=Kn.y,o[2]=Lr.z,o[6]=pc.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[4],f=r[8],h=r[12],p=r[1],g=r[5],v=r[9],y=r[13],E=r[2],T=r[6],S=r[10],_=r[14],b=r[3],R=r[7],A=r[11],N=r[15],I=o[0],F=o[4],k=o[8],L=o[12],P=o[1],z=o[5],ae=o[9],ee=o[13],ue=o[2],pe=o[6],ce=o[10],re=o[14],H=o[3],le=o[7],se=o[11],B=o[15];return l[0]=c*I+u*P+f*ue+h*H,l[4]=c*F+u*z+f*pe+h*le,l[8]=c*k+u*ae+f*ce+h*se,l[12]=c*L+u*ee+f*re+h*B,l[1]=p*I+g*P+v*ue+y*H,l[5]=p*F+g*z+v*pe+y*le,l[9]=p*k+g*ae+v*ce+y*se,l[13]=p*L+g*ee+v*re+y*B,l[2]=E*I+T*P+S*ue+_*H,l[6]=E*F+T*z+S*pe+_*le,l[10]=E*k+T*ae+S*ce+_*se,l[14]=E*L+T*ee+S*re+_*B,l[3]=b*I+R*P+A*ue+N*H,l[7]=b*F+R*z+A*pe+N*le,l[11]=b*k+R*ae+A*ce+N*se,l[15]=b*L+R*ee+A*re+N*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],g=e[6],v=e[10],y=e[14],E=e[3],T=e[7],S=e[11],_=e[15];return E*(+l*f*g-o*h*g-l*u*v+r*h*v+o*u*y-r*f*y)+T*(+t*f*y-t*h*v+l*c*v-o*c*y+o*h*p-l*f*p)+S*(+t*h*g-t*u*y-l*c*g+r*c*y+l*u*p-r*h*p)+_*(-o*u*p-t*f*g+t*u*v+o*c*g-r*c*v+r*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],g=e[9],v=e[10],y=e[11],E=e[12],T=e[13],S=e[14],_=e[15],b=g*S*h-T*v*h+T*f*y-u*S*y-g*f*_+u*v*_,R=E*v*h-p*S*h-E*f*y+c*S*y+p*f*_-c*v*_,A=p*T*h-E*g*h+E*u*y-c*T*y-p*u*_+c*g*_,N=E*g*f-p*T*f-E*u*v+c*T*v+p*u*S-c*g*S,I=t*b+r*R+o*A+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=b*F,e[1]=(T*v*l-g*S*l-T*o*y+r*S*y+g*o*_-r*v*_)*F,e[2]=(u*S*l-T*f*l+T*o*h-r*S*h-u*o*_+r*f*_)*F,e[3]=(g*f*l-u*v*l-g*o*h+r*v*h+u*o*y-r*f*y)*F,e[4]=R*F,e[5]=(p*S*l-E*v*l+E*o*y-t*S*y-p*o*_+t*v*_)*F,e[6]=(E*f*l-c*S*l-E*o*h+t*S*h+c*o*_-t*f*_)*F,e[7]=(c*v*l-p*f*l+p*o*h-t*v*h-c*o*y+t*f*y)*F,e[8]=A*F,e[9]=(E*g*l-p*T*l-E*r*y+t*T*y+p*r*_-t*g*_)*F,e[10]=(c*T*l-E*u*l+E*r*h-t*T*h-c*r*_+t*u*_)*F,e[11]=(p*u*l-c*g*l-p*r*h+t*g*h+c*r*y-t*u*y)*F,e[12]=N*F,e[13]=(p*T*o-E*g*o+E*r*v-t*T*v-p*r*S+t*g*S)*F,e[14]=(E*u*o-c*T*o-E*r*f+t*T*f+c*r*S-t*u*S)*F,e[15]=(c*g*o-p*u*o+p*r*f-t*g*f-c*r*v+t*u*v)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,u=e.y,f=e.z,h=l*c,p=l*u;return this.set(h*c+r,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+r,p*f-o*c,0,h*f-o*u,p*f+o*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,u=t._z,f=t._w,h=l+l,p=c+c,g=u+u,v=l*h,y=l*p,E=l*g,T=c*p,S=c*g,_=u*g,b=f*h,R=f*p,A=f*g,N=r.x,I=r.y,F=r.z;return o[0]=(1-(T+_))*N,o[1]=(y+A)*N,o[2]=(E-R)*N,o[3]=0,o[4]=(y-A)*I,o[5]=(1-(v+_))*I,o[6]=(S+b)*I,o[7]=0,o[8]=(E+R)*F,o[9]=(S-b)*F,o[10]=(1-(v+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=so.set(o[0],o[1],o[2]).length();const c=so.set(o[4],o[5],o[6]).length(),u=so.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const h=1/l,p=1/c,g=1/u;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,t.setFromRotationMatrix(xi),r.x=l,r.y=c,r.z=u,this}makePerspective(e,t,r,o,l,c,u=nr){const f=this.elements,h=2*l/(t-e),p=2*l/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let y,E;if(u===nr)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(u===Kc)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,c,u=nr){const f=this.elements,h=1/(t-e),p=1/(r-o),g=1/(c-l),v=(t+e)*h,y=(r+o)*p;let E,T;if(u===nr)E=(c+l)*g,T=-2*g;else if(u===Kc)E=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=T,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const so=new q,xi=new qt,EC=new q(0,0,0),TC=new q(1,1,1),Lr=new q,pc=new q,Kn=new q,G0=new qt,j0=new Ya;class Oi{constructor(e=0,t=0,r=0,o=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],g=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return j0.setFromEuler(this),this.setFromQuaternion(j0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Dy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wC=0;const W0=new q,oo=new Ya,Ki=new qt,mc=new q,Sa=new q,AC=new q,CC=new Ya,X0=new q(1,0,0),Y0=new q(0,1,0),q0=new q(0,0,1),$0={type:"added"},RC={type:"removed"},ao={type:"childadded",child:null},mf={type:"childremoved",child:null};class _n extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new q,t=new Oi,r=new Ya,o=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new lt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(X0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(q0,e)}translateOnAxis(e,t){return W0.copy(e).applyQuaternion(this.quaternion),this.position.add(W0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?mc.copy(e):mc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Sa,mc,this.up):Ki.lookAt(mc,Sa,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),oo.setFromRotationMatrix(Ki),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),ao.child=e,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RC),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,AC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,CC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const g=f[h];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(l(e.materials,this.material[f]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(l(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),g=c(e.shapes),v=c(e.skeletons),y=c(e.animations),E=c(e.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}_n.DEFAULT_UP=new q(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new q,Zi=new q,gf=new q,Qi=new q,lo=new q,co=new q,K0=new q,vf=new q,_f=new q,xf=new q,yf=new It,Sf=new It,Mf=new It;class Mi{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),yi.subVectors(e,t),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){yi.subVectors(o,t),Zi.subVectors(r,t),gf.subVectors(e,t);const c=yi.dot(yi),u=yi.dot(Zi),f=yi.dot(gf),h=Zi.dot(Zi),p=Zi.dot(gf),g=c*h-u*u;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(h*f-u*p)*v,E=(c*p-u*f)*v;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,r,o,l,c,u,f){return this.getBarycoord(e,t,r,o,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(c,Qi.y),f.addScaledVector(u,Qi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,c){return yf.setScalar(0),Sf.setScalar(0),Mf.setScalar(0),yf.fromBufferAttribute(e,t),Sf.fromBufferAttribute(e,r),Mf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(yf,l.x),c.addScaledVector(Sf,l.y),c.addScaledVector(Mf,l.z),c}static isFrontFacing(e,t,r,o){return yi.subVectors(r,t),Zi.subVectors(e,t),yi.cross(Zi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),yi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,u;lo.subVectors(o,r),co.subVectors(l,r),vf.subVectors(e,r);const f=lo.dot(vf),h=co.dot(vf);if(f<=0&&h<=0)return t.copy(r);_f.subVectors(e,o);const p=lo.dot(_f),g=co.dot(_f);if(p>=0&&g<=p)return t.copy(o);const v=f*g-p*h;if(v<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(r).addScaledVector(lo,c);xf.subVectors(e,l);const y=lo.dot(xf),E=co.dot(xf);if(E>=0&&y<=E)return t.copy(l);const T=y*h-f*E;if(T<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(r).addScaledVector(co,u);const S=p*E-y*g;if(S<=0&&g-p>=0&&y-E>=0)return K0.subVectors(l,o),u=(g-p)/(g-p+(y-E)),t.copy(o).addScaledVector(K0,u);const _=1/(S+T+v);return c=T*_,u=v*_,t.copy(r).addScaledVector(lo,c).addScaledVector(co,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Ef(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=uC(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Ef(c,l,e+1/3),this.g=Ef(c,l,e),this.b=Ef(c,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=Ly[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ct.fromWorkingColorSpace(An.copy(this),e),Math.round(_t(An.r*255,0,255))*65536+Math.round(_t(An.g*255,0,255))*256+Math.round(_t(An.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(An.copy(this),t);const r=An.r,o=An.g,l=An.b,c=Math.max(r,o,l),u=Math.min(r,o,l);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=p<=.5?g/(c+u):g/(2-c-u),c){case r:f=(o-l)/g+(o<l?6:0);break;case o:f=(l-r)/g+2;break;case l:f=(r-o)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ui){Ct.fromWorkingColorSpace(An.copy(this),e);const t=An.r,r=An.g,o=An.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(gc);const r=of(Nr.h,gc.h,t),o=of(Nr.s,gc.s,t),l=of(Nr.l,gc.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Rt;Rt.NAMES=Ly;let PC=0;class $a extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PC++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Mo,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=eh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jf&&(r.blendSrc=this.blendSrc),this.blendDst!==eh&&(r.blendDst=this.blendDst),this.blendEquation!==xs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bp extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=py,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new q,vc=new St;class Fi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=O0,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vc.fromBufferAttribute(this,t),vc.applyMatrix3(e),this.setXY(t,vc.x,vc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=_a(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_a(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_a(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_a(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),o=Gn(o,this.array),l=Gn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O0&&(e.usage=this.usage),e}}class Ny extends Fi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Iy extends Fi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class an extends Fi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let bC=0;const li=new qt,Tf=new _n,uo=new q,Zn=new qa,Ma=new qa,hn=new q;class Ai extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ry(e)?Iy:Ny)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new an(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const u=t[l];Ma.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Zn.min,Ma.min),Zn.expandByPoint(hn),hn.addVectors(Zn.max,Ma.max),Zn.expandByPoint(hn)):(Zn.expandByPoint(Ma.min),Zn.expandByPoint(Ma.max))}Zn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(hn));if(t)for(let l=0,c=t.length;l<c;l++){const u=t[l],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)hn.fromBufferAttribute(u,h),f&&(uo.fromBufferAttribute(e,h),hn.add(uo)),o=Math.max(o,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let k=0;k<r.count;k++)u[k]=new q,f[k]=new q;const h=new q,p=new q,g=new q,v=new St,y=new St,E=new St,T=new q,S=new q;function _(k,L,P){h.fromBufferAttribute(r,k),p.fromBufferAttribute(r,L),g.fromBufferAttribute(r,P),v.fromBufferAttribute(l,k),y.fromBufferAttribute(l,L),E.fromBufferAttribute(l,P),p.sub(h),g.sub(h),y.sub(v),E.sub(v);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(T.copy(p).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(z),u[k].add(T),u[L].add(T),u[P].add(T),f[k].add(S),f[L].add(S),f[P].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,L=b.length;k<L;++k){const P=b[k],z=P.start,ae=P.count;for(let ee=z,ue=z+ae;ee<ue;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new q,A=new q,N=new q,I=new q;function F(k){N.fromBufferAttribute(o,k),I.copy(N);const L=u[k];R.copy(L),R.sub(N.multiplyScalar(N.dot(L))).normalize(),A.crossVectors(I,L);const z=A.dot(f[k])<0?-1:1;c.setXYZW(k,R.x,R.y,R.z,z)}for(let k=0,L=b.length;k<L;++k){const P=b[k],z=P.start,ae=P.count;for(let ee=z,ue=z+ae;ee<ue;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new q,l=new q,c=new q,u=new q,f=new q,h=new q,p=new q,g=new q;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),p.subVectors(c,l),g.subVectors(o,l),p.cross(g),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),u.add(p),f.add(p),h.add(p),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,l),g.subVectors(o,l),p.cross(g),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,g=u.normalized,v=new h.constructor(f.length*p);let y=0,E=0;for(let T=0,S=f.length;T<S;T++){u.isInterleavedBufferAttribute?y=f[T]*u.data.stride+u.offset:y=f[T]*p;for(let _=0;_<p;_++)v[E++]=h[y++]}return new Fi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,r=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,r);t.setAttribute(u,h)}const l=this.morphAttributes;for(const u in l){const f=[],h=l[u];for(let p=0,g=h.length;p<g;p++){const v=h[p],y=e(v,r);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let g=0,v=h.length;g<v;g++){const y=h[g];p.push(y.toJSON(e.data))}p.length>0&&(o[f]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const l=e.morphAttributes;for(const h in l){const p=[],g=l[h];for(let v=0,y=g.length;v<y;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z0=new qt,ds=new MC,_c=new Pp,Q0=new q,xc=new q,yc=new q,Sc=new q,wf=new q,Mc=new q,J0=new q,Ec=new q;class Ti extends _n{constructor(e=new Ai,t=new bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(l&&u){Mc.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const p=u[f],g=l[f];p!==0&&(wf.fromBufferAttribute(g,e),c?Mc.addScaledVector(wf,p):Mc.addScaledVector(wf.sub(t),p))}t.add(Mc)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(l),ds.copy(e.ray).recast(e.near),!(_c.containsPoint(ds.origin)===!1&&(ds.intersectSphere(_c,Q0)===null||ds.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(Z0.copy(l).invert(),ds.copy(e.ray).applyMatrix4(Z0),!(r.boundingBox!==null&&ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,u=l.index,f=l.attributes.position,h=l.attributes.uv,p=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const S=v[E],_=c[S.materialIndex],b=Math.max(S.start,y.start),R=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,N=R;A<N;A+=3){const I=u.getX(A),F=u.getX(A+1),k=u.getX(A+2);o=Tc(this,_,e,r,h,p,g,I,F,k),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(u.count,y.start+y.count);for(let S=E,_=T;S<_;S+=3){const b=u.getX(S),R=u.getX(S+1),A=u.getX(S+2);o=Tc(this,c,e,r,h,p,g,b,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const S=v[E],_=c[S.materialIndex],b=Math.max(S.start,y.start),R=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,N=R;A<N;A+=3){const I=A,F=A+1,k=A+2;o=Tc(this,_,e,r,h,p,g,I,F,k),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=E,_=T;S<_;S+=3){const b=S,R=S+1,A=S+2;o=Tc(this,c,e,r,h,p,g,b,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function DC(n,e,t,r,o,l,c,u){let f;if(e.side===jn?f=r.intersectTriangle(c,l,o,!0,u):f=r.intersectTriangle(o,l,c,e.side===Hr,u),f===null)return null;Ec.copy(u),Ec.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Ec);return h<t.near||h>t.far?null:{distance:h,point:Ec.clone(),object:n}}function Tc(n,e,t,r,o,l,c,u,f,h){n.getVertexPosition(u,xc),n.getVertexPosition(f,yc),n.getVertexPosition(h,Sc);const p=DC(n,e,t,r,xc,yc,Sc,J0);if(p){const g=new q;Mi.getBarycoord(J0,xc,yc,Sc,g),o&&(p.uv=Mi.getInterpolatedAttribute(o,u,f,h,g,new St)),l&&(p.uv1=Mi.getInterpolatedAttribute(l,u,f,h,g,new St)),c&&(p.normal=Mi.getInterpolatedAttribute(c,u,f,h,g,new q),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:f,c:h,normal:new q,materialIndex:0};Mi.getNormal(xc,yc,Sc,v.normal),p.face=v,p.barycoord=g}return p}class Ka extends Ai{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const u=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],p=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(p,3)),this.setAttribute("uv",new an(g,2));function E(T,S,_,b,R,A,N,I,F,k,L){const P=A/F,z=N/k,ae=A/2,ee=N/2,ue=I/2,pe=F+1,ce=k+1;let re=0,H=0;const le=new q;for(let se=0;se<ce;se++){const B=se*z-ee;for(let ie=0;ie<pe;ie++){const Ue=ie*P-ae;le[T]=Ue*b,le[S]=B*R,le[_]=ue,h.push(le.x,le.y,le.z),le[T]=0,le[S]=0,le[_]=I>0?1:-1,p.push(le.x,le.y,le.z),g.push(ie/F),g.push(1-se/k),re+=1}}for(let se=0;se<k;se++)for(let B=0;B<F;B++){const ie=v+B+pe*se,Ue=v+B+pe*(se+1),Q=v+(B+1)+pe*(se+1),de=v+(B+1)+pe*se;f.push(ie,Ue,de),f.push(Ue,Q,de),H+=6}u.addGroup(y,H,L),y+=H,v+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const r=Io(n[t]);for(const o in r)e[o]=r[o]}return e}function LC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const NC={clone:Io,merge:Un};var IC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IC,this.fragmentShader=UC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=LC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Fy extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new q,e_=new St,t_=new St;class Qn extends Fy{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,e_,t_),t.subVectors(t_,e_)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*r/h,o*=c.width/f,r*=c.height/h}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,ho=1;class FC extends _n{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(fo,ho,e,t);o.layers=this.layers,this.add(o);const l=new Qn(fo,ho,e,t);l.layers=this.layers,this.add(l);const c=new Qn(fo,ho,e,t);c.layers=this.layers,this.add(c);const u=new Qn(fo,ho,e,t);u.layers=this.layers,this.add(u);const f=new Qn(fo,ho,e,t);f.layers=this.layers,this.add(f);const h=new Qn(fo,ho,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,u,f]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,u,f,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,u),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(g,v,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Oy extends Wn{constructor(e,t,r,o,l,c,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Po,super(e,t,r,o,l,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OC extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Oy(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ka(5,5,5),l=new Gr({name:"CubemapFromEquirect",uniforms:Io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:kr});l.uniforms.tEquirect.value=t;const c=new Ti(o,l),u=t.minFilter;return t.minFilter===Es&&(t.minFilter=Ni),new FC(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class kC extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Af=new q,BC=new q,zC=new lt;class vs{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Af.subVectors(r,t).cross(BC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Af),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||zC.getNormalMatrix(e),o=this.coplanarPoint(Af).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Pp,wc=new q;class Dp{constructor(e=new vs,t=new vs,r=new vs,o=new vs,l=new vs,c=new vs){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr){const r=this.planes,o=e.elements,l=o[0],c=o[1],u=o[2],f=o[3],h=o[4],p=o[5],g=o[6],v=o[7],y=o[8],E=o[9],T=o[10],S=o[11],_=o[12],b=o[13],R=o[14],A=o[15];if(r[0].setComponents(f-l,v-h,S-y,A-_).normalize(),r[1].setComponents(f+l,v+h,S+y,A+_).normalize(),r[2].setComponents(f+c,v+p,S+E,A+b).normalize(),r[3].setComponents(f-c,v-p,S-E,A-b).normalize(),r[4].setComponents(f-u,v-g,S-T,A-R).normalize(),t===nr)r[5].setComponents(f+u,v+g,S+T,A+R).normalize();else if(t===Kc)r[5].setComponents(u,g,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(wc.x=o.normal.x>0?e.max.x:e.min.x,wc.y=o.normal.y>0?e.max.y:e.min.y,wc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ra extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ky extends Wn{constructor(e,t,r,o,l,c,u,f,h,p=Eo){if(p!==Eo&&p!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===Eo&&(r=As),r===void 0&&p===Lo&&(r=Do),super(null,o,l,c,u,f,p,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:wi,this.minFilter=f!==void 0?f:wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lp extends Ai{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];u(o),h(r),p(),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(l.slice(),3)),this.setAttribute("uv",new an(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const R=new q,A=new q,N=new q;for(let I=0;I<t.length;I+=3)y(t[I+0],R),y(t[I+1],A),y(t[I+2],N),f(R,A,N,b)}function f(b,R,A,N){const I=N+1,F=[];for(let k=0;k<=I;k++){F[k]=[];const L=b.clone().lerp(A,k/I),P=R.clone().lerp(A,k/I),z=I-k;for(let ae=0;ae<=z;ae++)ae===0&&k===I?F[k][ae]=L:F[k][ae]=L.clone().lerp(P,ae/z)}for(let k=0;k<I;k++)for(let L=0;L<2*(I-k)-1;L++){const P=Math.floor(L/2);L%2===0?(v(F[k][P+1]),v(F[k+1][P]),v(F[k][P])):(v(F[k][P+1]),v(F[k+1][P+1]),v(F[k+1][P]))}}function h(b){const R=new q;for(let A=0;A<l.length;A+=3)R.x=l[A+0],R.y=l[A+1],R.z=l[A+2],R.normalize().multiplyScalar(b),l[A+0]=R.x,l[A+1]=R.y,l[A+2]=R.z}function p(){const b=new q;for(let R=0;R<l.length;R+=3){b.x=l[R+0],b.y=l[R+1],b.z=l[R+2];const A=S(b)/2/Math.PI+.5,N=_(b)/Math.PI+.5;c.push(A,1-N)}E(),g()}function g(){for(let b=0;b<c.length;b+=6){const R=c[b+0],A=c[b+2],N=c[b+4],I=Math.max(R,A,N),F=Math.min(R,A,N);I>.9&&F<.1&&(R<.2&&(c[b+0]+=1),A<.2&&(c[b+2]+=1),N<.2&&(c[b+4]+=1))}}function v(b){l.push(b.x,b.y,b.z)}function y(b,R){const A=b*3;R.x=e[A+0],R.y=e[A+1],R.z=e[A+2]}function E(){const b=new q,R=new q,A=new q,N=new q,I=new St,F=new St,k=new St;for(let L=0,P=0;L<l.length;L+=9,P+=6){b.set(l[L+0],l[L+1],l[L+2]),R.set(l[L+3],l[L+4],l[L+5]),A.set(l[L+6],l[L+7],l[L+8]),I.set(c[P+0],c[P+1]),F.set(c[P+2],c[P+3]),k.set(c[P+4],c[P+5]),N.copy(b).add(R).add(A).divideScalar(3);const z=S(N);T(I,P+0,b,z),T(F,P+2,R,z),T(k,P+4,A,z)}}function T(b,R,A,N){N<0&&b.x===1&&(c[R]=b.x-1),A.x===0&&A.z===0&&(c[R]=N/2/Math.PI+.5)}function S(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lp(e.vertices,e.indices,e.radius,e.details)}}class Np extends Lp{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Np(e.radius,e.detail)}}class ou extends Ai{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,u=Math.floor(r),f=Math.floor(o),h=u+1,p=f+1,g=e/u,v=t/f,y=[],E=[],T=[],S=[];for(let _=0;_<p;_++){const b=_*v-c;for(let R=0;R<h;R++){const A=R*g-l;E.push(A,-b,0),T.push(0,0,1),S.push(R/u),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let b=0;b<u;b++){const R=b+h*_,A=b+h*(_+1),N=b+1+h*(_+1),I=b+1+h*_;y.push(R,A,I),y.push(A,N,I)}this.setIndex(y),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(T,3)),this.setAttribute("uv",new an(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qc extends Ai{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+u,Math.PI);let h=0;const p=[],g=new q,v=new q,y=[],E=[],T=[],S=[];for(let _=0;_<=r;_++){const b=[],R=_/r;let A=0;_===0&&c===0?A=.5/t:_===r&&f===Math.PI&&(A=-.5/t);for(let N=0;N<=t;N++){const I=N/t;g.x=-e*Math.cos(o+I*l)*Math.sin(c+R*u),g.y=e*Math.cos(c+R*u),g.z=e*Math.sin(o+I*l)*Math.sin(c+R*u),E.push(g.x,g.y,g.z),v.copy(g).normalize(),T.push(v.x,v.y,v.z),S.push(I+A,1-R),b.push(h++)}p.push(b)}for(let _=0;_<r;_++)for(let b=0;b<t;b++){const R=p[_][b+1],A=p[_][b],N=p[_+1][b],I=p[_+1][b+1];(_!==0||c>0)&&y.push(R,A,I),(_!==r-1||f<Math.PI)&&y.push(A,N,I)}this.setIndex(y),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(T,3)),this.setAttribute("uv",new an(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ip extends Ai{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const c=[],u=[],f=[],h=[],p=new q,g=new q,v=new q;for(let y=0;y<=r;y++)for(let E=0;E<=o;E++){const T=E/o*l,S=y/r*Math.PI*2;g.x=(e+t*Math.cos(S))*Math.cos(T),g.y=(e+t*Math.cos(S))*Math.sin(T),g.z=t*Math.sin(S),u.push(g.x,g.y,g.z),p.x=e*Math.cos(T),p.y=e*Math.sin(T),v.subVectors(g,p).normalize(),f.push(v.x,v.y,v.z),h.push(E/o),h.push(y/r)}for(let y=1;y<=r;y++)for(let E=1;E<=o;E++){const T=(o+1)*y+E-1,S=(o+1)*(y-1)+E-1,_=(o+1)*(y-1)+E,b=(o+1)*y+E;c.push(T,S,b),c.push(S,_,b)}this.setIndex(c),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Up extends Ai{constructor(e=1,t=.4,r=64,o=8,l=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:r,radialSegments:o,p:l,q:c},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],h=[],p=[],g=new q,v=new q,y=new q,E=new q,T=new q,S=new q,_=new q;for(let R=0;R<=r;++R){const A=R/r*l*Math.PI*2;b(A,l,c,e,y),b(A+.01,l,c,e,E),S.subVectors(E,y),_.addVectors(E,y),T.crossVectors(S,_),_.crossVectors(T,S),T.normalize(),_.normalize();for(let N=0;N<=o;++N){const I=N/o*Math.PI*2,F=-t*Math.cos(I),k=t*Math.sin(I);g.x=y.x+(F*_.x+k*T.x),g.y=y.y+(F*_.y+k*T.y),g.z=y.z+(F*_.z+k*T.z),f.push(g.x,g.y,g.z),v.subVectors(g,y).normalize(),h.push(v.x,v.y,v.z),p.push(R/r),p.push(N/o)}}for(let R=1;R<=r;R++)for(let A=1;A<=o;A++){const N=(o+1)*(R-1)+(A-1),I=(o+1)*R+(A-1),F=(o+1)*R+A,k=(o+1)*(R-1)+A;u.push(N,I,k),u.push(I,F,k)}this.setIndex(u),this.setAttribute("position",new an(f,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(p,2));function b(R,A,N,I,F){const k=Math.cos(R),L=Math.sin(R),P=N/A*R,z=Math.cos(P);F.x=I*(2+z)*.5*k,F.y=I*(2+z)*L*.5,F.z=I*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class VC extends $a{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ay,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HC extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GC extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fp extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jC extends Fp{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Cf=new qt,n_=new q,i_=new q;class By{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dp,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;n_.setFromMatrixPosition(e.matrixWorld),t.position.copy(n_),i_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i_),t.updateMatrixWorld(),Cf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const r_=new qt,Ea=new q,Rf=new q;class WC extends By{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ea.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ea),Rf.copy(r.position),Rf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Rf),r.updateMatrixWorld(),o.makeTranslation(-Ea.x,-Ea.y,-Ea.z),r_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r_)}}class XC extends Fp{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new WC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zy extends Fy{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(l,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class YC extends By{constructor(){super(new zy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qC extends Fp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new YC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $C extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class KC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=s_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=s_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function s_(){return performance.now()}function o_(n,e,t,r){const o=ZC(r);switch(t){case xy:return n*e;case Sy:return n*e;case My:return n*e*2;case Ey:return n*e/o.components*o.byteLength;case Ap:return n*e/o.components*o.byteLength;case Ty:return n*e*2/o.components*o.byteLength;case Cp:return n*e*2/o.components*o.byteLength;case yy:return n*e*3/o.components*o.byteLength;case Ei:return n*e*4/o.components*o.byteLength;case Rp:return n*e*4/o.components*o.byteLength;case Ic:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:case mh:return Math.max(n,16)*Math.max(e,8)/4;case fh:case ph:return Math.max(n,8)*Math.max(e,8)/2;case gh:case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kc:case Nh:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wy:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZC(n){switch(n){case ar:case gy:return{byteLength:1,components:1};case za:case vy:case Wa:return{byteLength:2,components:1};case Tp:case wp:return{byteLength:2,components:4};case As:case Ep:case tr:return{byteLength:4,components:1};case _y:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vy(){let n=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function QC(n){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,f,h){const p=f.array,g=f.updateRanges;if(n.bindBuffer(h,u),g.length===0)n.bufferSubData(h,0,p);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,g[v]=T)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,f),h.version=u.version}}return{get:o,remove:l,update:c}}var JC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_R=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ER=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PR="gl_FragColor = linearToOutputTexel( gl_FragColor );",bR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$R=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_P=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$P=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:JC,alphahash_pars_fragment:eR,alphamap_fragment:tR,alphamap_pars_fragment:nR,alphatest_fragment:iR,alphatest_pars_fragment:rR,aomap_fragment:sR,aomap_pars_fragment:oR,batching_pars_vertex:aR,batching_vertex:lR,begin_vertex:cR,beginnormal_vertex:uR,bsdfs:dR,iridescence_fragment:fR,bumpmap_pars_fragment:hR,clipping_planes_fragment:pR,clipping_planes_pars_fragment:mR,clipping_planes_pars_vertex:gR,clipping_planes_vertex:vR,color_fragment:_R,color_pars_fragment:xR,color_pars_vertex:yR,color_vertex:SR,common:MR,cube_uv_reflection_fragment:ER,defaultnormal_vertex:TR,displacementmap_pars_vertex:wR,displacementmap_vertex:AR,emissivemap_fragment:CR,emissivemap_pars_fragment:RR,colorspace_fragment:PR,colorspace_pars_fragment:bR,envmap_fragment:DR,envmap_common_pars_fragment:LR,envmap_pars_fragment:NR,envmap_pars_vertex:IR,envmap_physical_pars_fragment:WR,envmap_vertex:UR,fog_vertex:FR,fog_pars_vertex:OR,fog_fragment:kR,fog_pars_fragment:BR,gradientmap_pars_fragment:zR,lightmap_pars_fragment:VR,lights_lambert_fragment:HR,lights_lambert_pars_fragment:GR,lights_pars_begin:jR,lights_toon_fragment:XR,lights_toon_pars_fragment:YR,lights_phong_fragment:qR,lights_phong_pars_fragment:$R,lights_physical_fragment:KR,lights_physical_pars_fragment:ZR,lights_fragment_begin:QR,lights_fragment_maps:JR,lights_fragment_end:eP,logdepthbuf_fragment:tP,logdepthbuf_pars_fragment:nP,logdepthbuf_pars_vertex:iP,logdepthbuf_vertex:rP,map_fragment:sP,map_pars_fragment:oP,map_particle_fragment:aP,map_particle_pars_fragment:lP,metalnessmap_fragment:cP,metalnessmap_pars_fragment:uP,morphinstance_vertex:dP,morphcolor_vertex:fP,morphnormal_vertex:hP,morphtarget_pars_vertex:pP,morphtarget_vertex:mP,normal_fragment_begin:gP,normal_fragment_maps:vP,normal_pars_fragment:_P,normal_pars_vertex:xP,normal_vertex:yP,normalmap_pars_fragment:SP,clearcoat_normal_fragment_begin:MP,clearcoat_normal_fragment_maps:EP,clearcoat_pars_fragment:TP,iridescence_pars_fragment:wP,opaque_fragment:AP,packing:CP,premultiplied_alpha_fragment:RP,project_vertex:PP,dithering_fragment:bP,dithering_pars_fragment:DP,roughnessmap_fragment:LP,roughnessmap_pars_fragment:NP,shadowmap_pars_fragment:IP,shadowmap_pars_vertex:UP,shadowmap_vertex:FP,shadowmask_pars_fragment:OP,skinbase_vertex:kP,skinning_pars_vertex:BP,skinning_vertex:zP,skinnormal_vertex:VP,specularmap_fragment:HP,specularmap_pars_fragment:GP,tonemapping_fragment:jP,tonemapping_pars_fragment:WP,transmission_fragment:XP,transmission_pars_fragment:YP,uv_pars_fragment:qP,uv_pars_vertex:$P,uv_vertex:KP,worldpos_vertex:ZP,background_vert:QP,background_frag:JP,backgroundCube_vert:eb,backgroundCube_frag:tb,cube_vert:nb,cube_frag:ib,depth_vert:rb,depth_frag:sb,distanceRGBA_vert:ob,distanceRGBA_frag:ab,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:db,meshbasic_vert:fb,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:vb,meshnormal_vert:_b,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:Tb,meshtoon_frag:wb,points_vert:Ab,points_frag:Cb,shadow_vert:Rb,shadow_frag:Pb,sprite_vert:bb,sprite_frag:Db},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Li={basic:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Un([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Un([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Un([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Un([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Un([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Un([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Un([Pe.common,Pe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Un([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Li.physical={uniforms:Un([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ac={r:0,b:0,g:0},hs=new Oi,Lb=new qt;function Nb(n,e,t,r,o,l,c){const u=new Rt(0);let f=l===!0?0:1,h,p,g=null,v=0,y=null;function E(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function T(R){let A=!1;const N=E(R);N===null?_(u,f):N&&N.isColor&&(_(N,1),A=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(n.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(R,A){const N=E(A);N&&(N.isCubeTexture||N.mapping===su)?(p===void 0&&(p=new Ti(new Ka(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Io(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),hs.copy(A.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(hs)),p.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Nt,(g!==N||v!==N.version||y!==n.toneMapping)&&(p.material.needsUpdate=!0,g=N,v=N.version,y=n.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Ti(new ou(2,2),new Gr({name:"BackgroundMaterial",uniforms:Io(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Nt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||y!==n.toneMapping)&&(h.material.needsUpdate=!0,g=N,v=N.version,y=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function _(R,A){R.getRGB(Ac,Uy(n)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,A,c)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(R,A=1){u.set(R),f=A,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,_(u,f)},render:T,addToRenderList:S,dispose:b}}function Ib(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,c=!1;function u(P,z,ae,ee,ue){let pe=!1;const ce=g(ee,ae,z);l!==ce&&(l=ce,h(l.object)),pe=y(P,ee,ae,ue),pe&&E(P,ee,ae,ue),ue!==null&&e.update(ue,n.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,A(P,z,ae,ee),ue!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function f(){return n.createVertexArray()}function h(P){return n.bindVertexArray(P)}function p(P){return n.deleteVertexArray(P)}function g(P,z,ae){const ee=ae.wireframe===!0;let ue=r[P.id];ue===void 0&&(ue={},r[P.id]=ue);let pe=ue[z.id];pe===void 0&&(pe={},ue[z.id]=pe);let ce=pe[ee];return ce===void 0&&(ce=v(f()),pe[ee]=ce),ce}function v(P){const z=[],ae=[],ee=[];for(let ue=0;ue<t;ue++)z[ue]=0,ae[ue]=0,ee[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ae,attributeDivisors:ee,object:P,attributes:{},index:null}}function y(P,z,ae,ee){const ue=l.attributes,pe=z.attributes;let ce=0;const re=ae.getAttributes();for(const H in re)if(re[H].location>=0){const se=ue[H];let B=pe[H];if(B===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),se===void 0||se.attribute!==B||B&&se.data!==B.data)return!0;ce++}return l.attributesNum!==ce||l.index!==ee}function E(P,z,ae,ee){const ue={},pe=z.attributes;let ce=0;const re=ae.getAttributes();for(const H in re)if(re[H].location>=0){let se=pe[H];se===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const B={};B.attribute=se,se&&se.data&&(B.data=se.data),ue[H]=B,ce++}l.attributes=ue,l.attributesNum=ce,l.index=ee}function T(){const P=l.newAttributes;for(let z=0,ae=P.length;z<ae;z++)P[z]=0}function S(P){_(P,0)}function _(P,z){const ae=l.newAttributes,ee=l.enabledAttributes,ue=l.attributeDivisors;ae[P]=1,ee[P]===0&&(n.enableVertexAttribArray(P),ee[P]=1),ue[P]!==z&&(n.vertexAttribDivisor(P,z),ue[P]=z)}function b(){const P=l.newAttributes,z=l.enabledAttributes;for(let ae=0,ee=z.length;ae<ee;ae++)z[ae]!==P[ae]&&(n.disableVertexAttribArray(ae),z[ae]=0)}function R(P,z,ae,ee,ue,pe,ce){ce===!0?n.vertexAttribIPointer(P,z,ae,ue,pe):n.vertexAttribPointer(P,z,ae,ee,ue,pe)}function A(P,z,ae,ee){T();const ue=ee.attributes,pe=ae.getAttributes(),ce=z.defaultAttributeValues;for(const re in pe){const H=pe[re];if(H.location>=0){let le=ue[re];if(le===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){const se=le.normalized,B=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ue=ie.buffer,Q=ie.type,de=ie.bytesPerElement,Ee=Q===n.INT||Q===n.UNSIGNED_INT||le.gpuType===Ep;if(le.isInterleavedBufferAttribute){const xe=le.data,we=xe.stride,Fe=le.offset;if(xe.isInstancedInterleavedBuffer){for(let Je=0;Je<H.locationSize;Je++)_(H.location+Je,xe.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Je=0;Je<H.locationSize;Je++)S(H.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Je=0;Je<H.locationSize;Je++)R(H.location+Je,B/H.locationSize,Q,se,we*de,(Fe+B/H.locationSize*Je)*de,Ee)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)_(H.location+xe,le.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<H.locationSize;xe++)S(H.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let xe=0;xe<H.locationSize;xe++)R(H.location+xe,B/H.locationSize,Q,se,B*de,B/H.locationSize*xe*de,Ee)}}else if(ce!==void 0){const se=ce[re];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(H.location,se);break;case 3:n.vertexAttrib3fv(H.location,se);break;case 4:n.vertexAttrib4fv(H.location,se);break;default:n.vertexAttrib1fv(H.location,se)}}}}b()}function N(){k();for(const P in r){const z=r[P];for(const ae in z){const ee=z[ae];for(const ue in ee)p(ee[ue].object),delete ee[ue];delete z[ae]}delete r[P]}}function I(P){if(r[P.id]===void 0)return;const z=r[P.id];for(const ae in z){const ee=z[ae];for(const ue in ee)p(ee[ue].object),delete ee[ue];delete z[ae]}delete r[P.id]}function F(P){for(const z in r){const ae=r[z];if(ae[P.id]===void 0)continue;const ee=ae[P.id];for(const ue in ee)p(ee[ue].object),delete ee[ue];delete ae[P.id]}}function k(){L(),c=!0,l!==o&&(l=o,h(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:k,resetDefaultState:L,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:b}}function Ub(n,e,t){let r;function o(h){r=h}function l(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,g){g!==0&&(n.drawArraysInstanced(r,h,p,g),t.update(p,r,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,g);let y=0;for(let E=0;E<g;E++)y+=p[E];t.update(y,r,1)}function f(h,p,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)c(h[E],p[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,p,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=p[T]*v[T];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Fb(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Ei&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const k=F===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ar&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==tr&&!k)}function f(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:N,maxSamples:I}}function Ob(n){const e=this;let t=null,r=0,o=!1,l=!1;const c=new vs,u=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||o;return o=v,r=g.length,y},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=n.get(g);if(!o||E===null||E.length===0||l&&!S)l?p(null):h();else{const b=l?0:r,R=b*4;let A=_.clippingState||null;f.value=A,A=p(E,v,R,y);for(let N=0;N!==R;++N)A[N]=t[N];_.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,v,y,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=f.value,E!==!0||S===null){const _=y+T*4,b=v.matrixWorldInverse;u.getNormalMatrix(b),(S===null||S.length<_)&&(S=new Float32Array(_));for(let R=0,A=y;R!==T;++R,A+=4)c.copy(g[R]).applyMatrix4(b,u),c.normal.toArray(S,A),S[A+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function kb(n){let e=new WeakMap;function t(c,u){return u===lh?c.mapping=Po:u===ch&&(c.mapping=bo),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===lh||u===ch)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new OC(f.height);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const So=4,a_=[.125,.215,.35,.446,.526,.582],ys=20,Pf=new zy,l_=new Rt;let bf=null,Df=0,Lf=0,Nf=!1;const _s=(1+Math.sqrt(5))/2,po=1/_s,c_=[new q(-_s,po,0),new q(_s,po,0),new q(-po,0,_s),new q(po,0,_s),new q(0,_s,-po),new q(0,_s,po),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class u_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){bf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Df,Lf),this._renderer.xr.enabled=Nf,e.scissorTest=!1,Cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Po||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Wa,format:Ei,colorSpace:No,depthBuffer:!1},o=d_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bb(l)),this._blurMaterial=zb(l,e,t)}return o}_compileMaterial(e){const t=new Ti(this._lodPlanes[0],e);this._renderer.compile(t,Pf)}_sceneToCubeUV(e,t,r,o){const u=new Qn(90,1,t,r),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(l_),p.toneMapping=Br,p.autoClear=!1;const y=new bp({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),E=new Ti(new Ka,y);let T=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,T=!0):(y.color.copy(l_),T=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(u.up.set(0,f[_],0),u.lookAt(h[_],0,0)):b===1?(u.up.set(0,0,f[_]),u.lookAt(0,h[_],0)):(u.up.set(0,f[_],0),u.lookAt(0,0,h[_]));const R=this._cubeSize;Cc(o,b*R,_>2?R:0,R,R),p.setRenderTarget(o),T&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Po||e.mapping===bo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=h_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f_());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Ti(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const f=this._cubeSize;Cc(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,Pf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=c_[(o-l-1)%c_.length];this._blur(e,l-1,l,c,u)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Ti(this._lodPlanes[o],h),v=h.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ys-1),T=l/E,S=isFinite(l)?1+Math.floor(p*T):ys;S>ys&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ys}`);const _=[];let b=0;for(let F=0;F<ys;++F){const k=F/T,L=Math.exp(-k*k/2);_.push(L),F===0?b+=L:F<S&&(b+=2*L)}for(let F=0;F<_.length;F++)_[F]=_[F]/b;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:R}=this;v.dTheta.value=E,v.mipInt.value=R-r;const A=this._sizeLods[o],N=3*A*(o>R-So?o-R+So:0),I=4*(this._cubeSize-A);Cc(t,N,I,3*A,2*A),f.setRenderTarget(t),f.render(g,Pf)}}function Bb(n){const e=[],t=[],r=[];let o=n;const l=n-So+1+a_.length;for(let c=0;c<l;c++){const u=Math.pow(2,o);t.push(u);let f=1/u;c>n-So?f=a_[c-n+So-1]:c===0&&(f=0),r.push(f);const h=1/(u-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,E=6,T=3,S=2,_=1,b=new Float32Array(T*E*y),R=new Float32Array(S*E*y),A=new Float32Array(_*E*y);for(let I=0;I<y;I++){const F=I%3*2/3-1,k=I>2?0:-1,L=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];b.set(L,T*E*I),R.set(v,S*E*I);const P=[I,I,I,I,I,I];A.set(P,_*E*I)}const N=new Ai;N.setAttribute("position",new Fi(b,T)),N.setAttribute("uv",new Fi(R,S)),N.setAttribute("faceIndex",new Fi(A,_)),e.push(N),o>So&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function d_(n,e,t){const r=new Cs(n,e,t);return r.texture.mapping=su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cc(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function zb(n,e,t){const r=new Float32Array(ys),o=new q(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function f_(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function h_(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vb(n){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const f=u.mapping,h=f===lh||f===ch,p=f===Po||f===bo;if(h||p){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new u_(n)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return h&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new u_(n)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",l),g.texture):null}}}return u}function o(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function l(u){const f=u.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function Hb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&mo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Gb(n,e,t,r){const o={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete o[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const y in v)e.update(v[y],n.ARRAY_BUFFER)}function h(g){const v=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const b=y.array;T=y.version;for(let R=0,A=b.length;R<A;R+=3){const N=b[R+0],I=b[R+1],F=b[R+2];v.push(N,I,I,F,F,N)}}else if(E!==void 0){const b=E.array;T=E.version;for(let R=0,A=b.length/3-1;R<A;R+=3){const N=R+0,I=R+1,F=R+2;v.push(N,I,I,F,F,N)}}else return;const S=new(Ry(v)?Iy:Ny)(v,1);S.version=T;const _=l.get(g);_&&e.remove(_),l.set(g,S)}function p(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&h(g)}else h(g);return l.get(g)}return{get:u,update:f,getWireframeAttribute:p}}function jb(n,e,t){let r;function o(v){r=v}let l,c;function u(v){l=v.type,c=v.bytesPerElement}function f(v,y){n.drawElements(r,y,l,v*c),t.update(y,r,1)}function h(v,y,E){E!==0&&(n.drawElementsInstanced(r,y,l,v*c,E),t.update(y,r,E))}function p(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,v,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];t.update(S,r,1)}function g(v,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)h(v[_]/c,y[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,v,0,T,0,E);let _=0;for(let b=0;b<E;b++)_+=y[b]*T[b];t.update(_,r,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function Wb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(l/3);break;case n.LINES:t.lines+=u*(l/2);break;case n.LINE_STRIP:t.lines+=u*(l-1);break;case n.LINE_LOOP:t.lines+=u*l;break;case n.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Xb(n,e,t){const r=new WeakMap,o=new It;function l(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let P=function(){k.dispose(),r.delete(u),u.removeEventListener("dispose",P)};var y=P;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let A=0;E===!0&&(A=1),T===!0&&(A=2),S===!0&&(A=3);let N=u.attributes.position.count*A,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*I*4*g),k=new by(F,N,I,g);k.type=tr,k.needsUpdate=!0;const L=A*4;for(let z=0;z<g;z++){const ae=_[z],ee=b[z],ue=R[z],pe=N*I*4*z;for(let ce=0;ce<ae.count;ce++){const re=ce*L;E===!0&&(o.fromBufferAttribute(ae,ce),F[pe+re+0]=o.x,F[pe+re+1]=o.y,F[pe+re+2]=o.z,F[pe+re+3]=0),T===!0&&(o.fromBufferAttribute(ee,ce),F[pe+re+4]=o.x,F[pe+re+5]=o.y,F[pe+re+6]=o.z,F[pe+re+7]=0),S===!0&&(o.fromBufferAttribute(ue,ce),F[pe+re+8]=o.x,F[pe+re+9]=o.y,F[pe+re+10]=o.z,F[pe+re+11]=ue.itemSize===4?o.w:1)}}v={count:g,texture:k,size:new St(N,I)},r.set(u,v),u.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const T=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function Yb(n,e,t,r){let o=new WeakMap;function l(f){const h=r.render.frame,p=f.geometry,g=e.get(f,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==h&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),o.set(f,h))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function c(){o=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const Hy=new Wn,p_=new ky(1,1),Gy=new by,jy=new yC,Wy=new Oy,m_=[],g_=[],v_=new Float32Array(16),__=new Float32Array(9),x_=new Float32Array(4);function ko(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=m_[o];if(l===void 0&&(l=new Float32Array(o),m_[o]=l),e!==0){r.toArray(l,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(l,u)}return l}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function au(n,e){let t=g_[e];t===void 0&&(t=new Int32Array(e),g_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function Qb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;x_.set(r),n.uniformMatrix2fv(this.addr,!1,x_),cn(t,r)}}function Jb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;__.set(r),n.uniformMatrix3fv(this.addr,!1,__),cn(t,r)}}function e2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;v_.set(r),n.uniformMatrix4fv(this.addr,!1,v_),cn(t,r)}}function t2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function i2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function r2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function s2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function a2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function l2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function c2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(p_.compareFunction=Cy,l=p_):l=Hy,t.setTexture2D(e||l,o)}function u2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||jy,o)}function d2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Wy,o)}function f2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Gy,o)}function h2(n){switch(n){case 5126:return qb;case 35664:return $b;case 35665:return Kb;case 35666:return Zb;case 35674:return Qb;case 35675:return Jb;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return f2}}function p2(n,e){n.uniform1fv(this.addr,e)}function m2(n,e){const t=ko(e,this.size,2);n.uniform2fv(this.addr,t)}function g2(n,e){const t=ko(e,this.size,3);n.uniform3fv(this.addr,t)}function v2(n,e){const t=ko(e,this.size,4);n.uniform4fv(this.addr,t)}function _2(n,e){const t=ko(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function x2(n,e){const t=ko(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y2(n,e){const t=ko(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function S2(n,e){n.uniform1iv(this.addr,e)}function M2(n,e){n.uniform2iv(this.addr,e)}function E2(n,e){n.uniform3iv(this.addr,e)}function T2(n,e){n.uniform4iv(this.addr,e)}function w2(n,e){n.uniform1uiv(this.addr,e)}function A2(n,e){n.uniform2uiv(this.addr,e)}function C2(n,e){n.uniform3uiv(this.addr,e)}function R2(n,e){n.uniform4uiv(this.addr,e)}function P2(n,e,t){const r=this.cache,o=e.length,l=au(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Hy,l[c])}function b2(n,e,t){const r=this.cache,o=e.length,l=au(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||jy,l[c])}function D2(n,e,t){const r=this.cache,o=e.length,l=au(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Wy,l[c])}function L2(n,e,t){const r=this.cache,o=e.length,l=au(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Gy,l[c])}function N2(n){switch(n){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return v2;case 35674:return _2;case 35675:return x2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return M2;case 35668:case 35672:return E2;case 35669:case 35673:return T2;case 5125:return w2;case 36294:return A2;case 36295:return C2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return L2}}class I2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=h2(t.type)}}class U2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N2(t.type)}}class F2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const u=o[l];u.setValue(e,t[u.id],r)}}}const If=/(\w+)(\])?(\[|\.)?/g;function y_(n,e){n.seq.push(e),n.map[e.id]=e}function O2(n,e,t){const r=n.name,o=r.length;for(If.lastIndex=0;;){const l=If.exec(r),c=If.lastIndex;let u=l[1];const f=l[2]==="]",h=l[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){y_(t,h===void 0?new I2(u,n,e):new U2(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new F2(u),y_(t,g)),t=g}}}class Bc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);O2(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const u=t[l],f=r[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function S_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const k2=37297;let B2=0;function z2(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const M_=new lt;function V2(n){Ct._getMatrix(M_,Ct.workingColorSpace,n);const e=`mat3( ${M_.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case $c:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function E_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+z2(n.getShaderSource(e),c)}else return o}function H2(n,e){const t=V2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G2(n,e){let t;switch(e){case XA:t="Linear";break;case YA:t="Reinhard";break;case qA:t="Cineon";break;case $A:t="ACESFilmic";break;case ZA:t="AgX";break;case QA:t="Neutral";break;case KA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new q;function j2(){Ct.getLuminanceCoefficients(Rc);const n=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function X2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Y2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),c=l.name;let u=1;l.type===n.FLOAT_MAT2&&(u=2),l.type===n.FLOAT_MAT3&&(u=3),l.type===n.FLOAT_MAT4&&(u=4),t[c]={type:l.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Pa(n){return n!==""}function T_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(n){return n.replace(q2,K2)}const $2=new Map;function K2(n,e){let t=ct[e];if(t===void 0){const r=$2.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bh(t)}const Z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(n){return n.replace(Z2,Q2)}function Q2(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function C_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function eD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Po:case bo:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function nD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case py:e="ENVMAP_BLENDING_MULTIPLY";break;case jA:e="ENVMAP_BLENDING_MIX";break;case WA:e="ENVMAP_BLENDING_ADD";break}return e}function iD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function rD(n,e,t,r){const o=n.getContext(),l=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=J2(t),h=eD(t),p=tD(t),g=nD(t),v=iD(t),y=W2(t),E=X2(l),T=o.createProgram();let S,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pa).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pa).join(`
`),_.length>0&&(_+=`
`)):(S=[C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),_=[C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?ct.tonemapping_pars_fragment:"",t.toneMapping!==Br?G2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,H2("linearToOutputTexel",t.outputColorSpace),j2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),c=Bh(c),c=T_(c,t),c=w_(c,t),u=Bh(u),u=T_(u,t),u=w_(u,t),c=A_(c),u=A_(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=b+S+c,A=b+_+u,N=S_(o,o.VERTEX_SHADER,R),I=S_(o,o.FRAGMENT_SHADER,A);o.attachShader(T,N),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(z){if(n.debug.checkShaderErrors){const ae=o.getProgramInfoLog(T).trim(),ee=o.getShaderInfoLog(N).trim(),ue=o.getShaderInfoLog(I).trim();let pe=!0,ce=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,N,I);else{const re=E_(o,N,"vertex"),H=E_(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ae+`
`+re+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ee===""||ue==="")&&(ce=!1);ce&&(z.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:ee,prefix:S},fragmentShader:{log:ue,prefix:_}})}o.deleteShader(N),o.deleteShader(I),k=new Bc(o,T),L=Y2(o,T)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(T,k2)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B2++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=I,this}let sD=0;class oD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new aD(e),t.set(e,r)),r}}class aD{constructor(e){this.id=sD++,this.code=e,this.usedTimes=0}}function lD(n,e,t,r,o,l,c){const u=new Dy,f=new oD,h=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return h.add(L),L===0?"uv":`uv${L}`}function S(L,P,z,ae,ee){const ue=ae.fog,pe=ee.geometry,ce=L.isMeshStandardMaterial?ae.environment:null,re=(L.isMeshStandardMaterial?t:e).get(L.envMap||ce),H=re&&re.mapping===su?re.image.height:null,le=E[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,B=se!==void 0?se.length:0;let ie=0;pe.morphAttributes.position!==void 0&&(ie=1),pe.morphAttributes.normal!==void 0&&(ie=2),pe.morphAttributes.color!==void 0&&(ie=3);let Ue,Q,de,Ee;if(le){const Mt=Li[le];Ue=Mt.vertexShader,Q=Mt.fragmentShader}else Ue=L.vertexShader,Q=L.fragmentShader,f.update(L),de=f.getVertexShaderID(L),Ee=f.getFragmentShaderID(L);const xe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Fe=ee.isInstancedMesh===!0,Je=ee.isBatchedMesh===!0,Dt=!!L.map,gt=!!L.matcap,Ut=!!re,G=!!L.aoMap,Pn=!!L.lightMap,pt=!!L.bumpMap,dt=!!L.normalMap,qe=!!L.displacementMap,bt=!!L.emissiveMap,Xe=!!L.metalnessMap,U=!!L.roughnessMap,C=L.anisotropy>0,Z=L.clearcoat>0,me=L.dispersion>0,ve=L.iridescence>0,fe=L.sheen>0,je=L.transmission>0,Ae=C&&!!L.anisotropyMap,Oe=Z&&!!L.clearcoatMap,ut=Z&&!!L.clearcoatNormalMap,Me=Z&&!!L.clearcoatRoughnessMap,ze=ve&&!!L.iridescenceMap,Ke=ve&&!!L.iridescenceThicknessMap,tt=fe&&!!L.sheenColorMap,Ve=fe&&!!L.sheenRoughnessMap,ft=!!L.specularMap,st=!!L.specularColorMap,Pt=!!L.specularIntensityMap,X=je&&!!L.transmissionMap,Ce=je&&!!L.thicknessMap,oe=!!L.gradientMap,he=!!L.alphaMap,Le=L.alphaTest>0,De=!!L.alphaHash,ot=!!L.extensions;let Ot=Br;L.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const rn={shaderID:le,shaderType:L.type,shaderName:L.name,vertexShader:Ue,fragmentShader:Q,defines:L.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Je,batchingColor:Je&&ee._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ee.instanceColor!==null,instancingMorph:Fe&&ee.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:No,alphaToCoverage:!!L.alphaToCoverage,map:Dt,matcap:gt,envMap:Ut,envMapMode:Ut&&re.mapping,envMapCubeUVHeight:H,aoMap:G,lightMap:Pn,bumpMap:pt,normalMap:dt,displacementMap:v&&qe,emissiveMap:bt,normalMapObjectSpace:dt&&L.normalMapType===nC,normalMapTangentSpace:dt&&L.normalMapType===Ay,metalnessMap:Xe,roughnessMap:U,anisotropy:C,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:ze,iridescenceThicknessMap:Ke,sheen:fe,sheenColorMap:tt,sheenRoughnessMap:Ve,specularMap:ft,specularColorMap:st,specularIntensityMap:Pt,transmission:je,transmissionMap:X,thicknessMap:Ce,gradientMap:oe,opaque:L.transparent===!1&&L.blending===Mo&&L.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:De,combine:L.combine,mapUv:Dt&&T(L.map.channel),aoMapUv:G&&T(L.aoMap.channel),lightMapUv:Pn&&T(L.lightMap.channel),bumpMapUv:pt&&T(L.bumpMap.channel),normalMapUv:dt&&T(L.normalMap.channel),displacementMapUv:qe&&T(L.displacementMap.channel),emissiveMapUv:bt&&T(L.emissiveMap.channel),metalnessMapUv:Xe&&T(L.metalnessMap.channel),roughnessMapUv:U&&T(L.roughnessMap.channel),anisotropyMapUv:Ae&&T(L.anisotropyMap.channel),clearcoatMapUv:Oe&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(L.sheenRoughnessMap.channel),specularMapUv:ft&&T(L.specularMap.channel),specularColorMapUv:st&&T(L.specularColorMap.channel),specularIntensityMapUv:Pt&&T(L.specularIntensityMap.channel),transmissionMapUv:X&&T(L.transmissionMap.channel),thicknessMapUv:Ce&&T(L.thicknessMap.channel),alphaMapUv:he&&T(L.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(dt||C),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(Dt||he),fog:!!ue,useFog:L.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ie,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Dt&&L.map.isVideoTexture===!0&&Ct.getTransfer(L.map.colorSpace)===Nt,decodeVideoTextureEmissive:bt&&L.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(L.emissiveMap.colorSpace)===Nt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===er,flipSided:L.side===jn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ot&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&L.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return rn.vertexUv1s=h.has(1),rn.vertexUv2s=h.has(2),rn.vertexUv3s=h.has(3),h.clear(),rn}function _(L){const P=[];if(L.shaderID?P.push(L.shaderID):(P.push(L.customVertexShaderID),P.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)P.push(z),P.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(b(P,L),R(P,L),P.push(n.outputColorSpace)),P.push(L.customProgramCacheKey),P.join()}function b(L,P){L.push(P.precision),L.push(P.outputColorSpace),L.push(P.envMapMode),L.push(P.envMapCubeUVHeight),L.push(P.mapUv),L.push(P.alphaMapUv),L.push(P.lightMapUv),L.push(P.aoMapUv),L.push(P.bumpMapUv),L.push(P.normalMapUv),L.push(P.displacementMapUv),L.push(P.emissiveMapUv),L.push(P.metalnessMapUv),L.push(P.roughnessMapUv),L.push(P.anisotropyMapUv),L.push(P.clearcoatMapUv),L.push(P.clearcoatNormalMapUv),L.push(P.clearcoatRoughnessMapUv),L.push(P.iridescenceMapUv),L.push(P.iridescenceThicknessMapUv),L.push(P.sheenColorMapUv),L.push(P.sheenRoughnessMapUv),L.push(P.specularMapUv),L.push(P.specularColorMapUv),L.push(P.specularIntensityMapUv),L.push(P.transmissionMapUv),L.push(P.thicknessMapUv),L.push(P.combine),L.push(P.fogExp2),L.push(P.sizeAttenuation),L.push(P.morphTargetsCount),L.push(P.morphAttributeCount),L.push(P.numDirLights),L.push(P.numPointLights),L.push(P.numSpotLights),L.push(P.numSpotLightMaps),L.push(P.numHemiLights),L.push(P.numRectAreaLights),L.push(P.numDirLightShadows),L.push(P.numPointLightShadows),L.push(P.numSpotLightShadows),L.push(P.numSpotLightShadowsWithMaps),L.push(P.numLightProbes),L.push(P.shadowMapType),L.push(P.toneMapping),L.push(P.numClippingPlanes),L.push(P.numClipIntersection),L.push(P.depthPacking)}function R(L,P){u.disableAll(),P.supportsVertexTextures&&u.enable(0),P.instancing&&u.enable(1),P.instancingColor&&u.enable(2),P.instancingMorph&&u.enable(3),P.matcap&&u.enable(4),P.envMap&&u.enable(5),P.normalMapObjectSpace&&u.enable(6),P.normalMapTangentSpace&&u.enable(7),P.clearcoat&&u.enable(8),P.iridescence&&u.enable(9),P.alphaTest&&u.enable(10),P.vertexColors&&u.enable(11),P.vertexAlphas&&u.enable(12),P.vertexUv1s&&u.enable(13),P.vertexUv2s&&u.enable(14),P.vertexUv3s&&u.enable(15),P.vertexTangents&&u.enable(16),P.anisotropy&&u.enable(17),P.alphaHash&&u.enable(18),P.batching&&u.enable(19),P.dispersion&&u.enable(20),P.batchingColor&&u.enable(21),L.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reverseDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),L.push(u.mask)}function A(L){const P=E[L.type];let z;if(P){const ae=Li[P];z=NC.clone(ae.uniforms)}else z=L.uniforms;return z}function N(L,P){let z;for(let ae=0,ee=p.length;ae<ee;ae++){const ue=p[ae];if(ue.cacheKey===P){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new rD(n,P,L,l),p.push(z)),z}function I(L){if(--L.usedTimes===0){const P=p.indexOf(L);p[P]=p[p.length-1],p.pop(),L.destroy()}}function F(L){f.remove(L)}function k(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:A,acquireProgram:N,releaseProgram:I,releaseShaderCache:F,programs:p,dispose:k}}function cD(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,f){n.get(c)[u]=f}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function uD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function R_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function P_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g,v,y,E,T,S){let _=n[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},n[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=S),e++,_}function u(g,v,y,E,T,S){const _=c(g,v,y,E,T,S);y.transmission>0?r.push(_):y.transparent===!0?o.push(_):t.push(_)}function f(g,v,y,E,T,S){const _=c(g,v,y,E,T,S);y.transmission>0?r.unshift(_):y.transparent===!0?o.unshift(_):t.unshift(_)}function h(g,v){t.length>1&&t.sort(g||uD),r.length>1&&r.sort(v||R_),o.length>1&&o.sort(v||R_)}function p(){for(let g=e,v=n.length;g<v;g++){const y=n[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:f,finish:p,sort:h}}function dD(){let n=new WeakMap;function e(r,o){const l=n.get(r);let c;return l===void 0?(c=new P_,n.set(r,[c])):o>=l.length?(c=new P_,l.push(c)):c=l[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function fD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Rt};break;case"SpotLight":t={position:new q,direction:new q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function hD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pD=0;function mD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gD(n){const e=new fD,t=hD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new q);const o=new q,l=new qt,c=new qt;function u(h){let p=0,g=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,E=0,T=0,S=0,_=0,b=0,R=0,A=0,N=0,I=0,F=0;h.sort(mD);for(let L=0,P=h.length;L<P;L++){const z=h[L],ae=z.color,ee=z.intensity,ue=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=ae.r*ee,g+=ae.g*ee,v+=ae.b*ee;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(z.sh.coefficients[ce],ee);F++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const re=z.shadow,H=t.get(z);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=pe,r.directionalShadowMatrix[y]=z.shadow.matrix,b++}r.directional[y]=ce,y++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(ae).multiplyScalar(ee),ce.distance=ue,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,r.spot[T]=ce;const re=z.shadow;if(z.map&&(r.spotLightMap[N]=z.map,N++,re.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[T]=re.matrix,z.castShadow){const H=t.get(z);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,r.spotShadow[T]=H,r.spotShadowMap[T]=pe,A++}T++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(ae).multiplyScalar(ee),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ce,S++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const re=z.shadow,H=t.get(z);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=z.shadow.matrix,R++}r.point[E]=ce,E++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(ee),ce.groundColor.copy(z.groundColor).multiplyScalar(ee),r.hemi[_]=ce,_++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==b||k.numPointShadows!==R||k.numSpotShadows!==A||k.numSpotMaps!==N||k.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+N-I,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,k.directionalLength=y,k.pointLength=E,k.spotLength=T,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=b,k.numPointShadows=R,k.numSpotShadows=A,k.numSpotMaps=N,k.numLightProbes=F,r.version=pD++)}function f(h,p){let g=0,v=0,y=0,E=0,T=0;const S=p.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){const R=h[_];if(R.isDirectionalLight){const A=r.directional[g];A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),g++}else if(R.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(R.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(R.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(R.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),v++}else if(R.isHemisphereLight){const A=r.hemi[T];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:u,setupView:f,state:r}}function b_(n){const e=new gD(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function c(p){r.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:f,pushLight:l,pushShadow:c}}function vD(n){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let u;return c===void 0?(u=new b_(n),e.set(o,[u])):l>=c.length?(u=new b_(n),c.push(u)):u=c[l],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const _D=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yD(n,e,t){let r=new Dp;const o=new St,l=new St,c=new It,u=new HC({depthPacking:tC}),f=new GC,h={},p=t.maxTextureSize,g={[Hr]:jn,[jn]:Hr,[er]:er},v=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:_D,fragmentShader:xD}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ai;E.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ti(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hy;let _=this.type;this.render=function(I,F,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const L=n.getRenderTarget(),P=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(kr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=_!==Ji&&this.type===Ji,ue=_===Ji&&this.type!==Ji;for(let pe=0,ce=I.length;pe<ce;pe++){const re=I[pe],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();if(o.multiply(le),l.copy(H.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/le.x),o.x=l.x*le.x,H.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/le.y),o.y=l.y*le.y,H.mapSize.y=l.y)),H.map===null||ee===!0||ue===!0){const B=this.type!==Ji?{minFilter:wi,magFilter:wi}:{};H.map!==null&&H.map.dispose(),H.map=new Cs(o.x,o.y,B),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const se=H.getViewportCount();for(let B=0;B<se;B++){const ie=H.getViewport(B);c.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),ae.viewport(c),H.updateMatrices(re,B),r=H.getFrustum(),A(F,k,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===Ji&&b(H,k),H.needsUpdate=!1}_=this.type,S.needsUpdate=!1,n.setRenderTarget(L,P,z)};function b(I,F){const k=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Cs(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(F,null,k,v,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(F,null,k,y,T,null)}function R(I,F,k,L){let P=null;const z=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)P=z;else if(P=k.isPointLight===!0?f:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ae=P.uuid,ee=F.uuid;let ue=h[ae];ue===void 0&&(ue={},h[ae]=ue);let pe=ue[ee];pe===void 0&&(pe=P.clone(),ue[ee]=pe,F.addEventListener("dispose",N)),P=pe}if(P.visible=F.visible,P.wireframe=F.wireframe,L===Ji?P.side=F.shadowSide!==null?F.shadowSide:F.side:P.side=F.shadowSide!==null?F.shadowSide:g[F.side],P.alphaMap=F.alphaMap,P.alphaTest=F.alphaTest,P.map=F.map,P.clipShadows=F.clipShadows,P.clippingPlanes=F.clippingPlanes,P.clipIntersection=F.clipIntersection,P.displacementMap=F.displacementMap,P.displacementScale=F.displacementScale,P.displacementBias=F.displacementBias,P.wireframeLinewidth=F.wireframeLinewidth,P.linewidth=F.linewidth,k.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ae=n.properties.get(P);ae.light=k}return P}function A(I,F,k,L,P){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&P===Ji)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),ue=I.material;if(Array.isArray(ue)){const pe=ee.groups;for(let ce=0,re=pe.length;ce<re;ce++){const H=pe[ce],le=ue[H.materialIndex];if(le&&le.visible){const se=R(I,le,L,P);I.onBeforeShadow(n,I,F,k,ee,se,H),n.renderBufferDirect(k,null,ee,se,I,H),I.onAfterShadow(n,I,F,k,ee,se,H)}}}else if(ue.visible){const pe=R(I,ue,L,P);I.onBeforeShadow(n,I,F,k,ee,pe,null),n.renderBufferDirect(k,null,ee,pe,I,null),I.onAfterShadow(n,I,F,k,ee,pe,null)}}const ae=I.children;for(let ee=0,ue=ae.length;ee<ue;ee++)A(ae[ee],F,k,L,P)}function N(I){I.target.removeEventListener("dispose",N);for(const k in h){const L=h[k],P=I.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}const SD={[th]:nh,[ih]:oh,[rh]:ah,[Ro]:sh,[nh]:th,[oh]:ih,[ah]:rh,[sh]:Ro};function MD(n,e){function t(){let X=!1;const Ce=new It;let oe=null;const he=new It(0,0,0,0);return{setMask:function(Le){oe!==Le&&!X&&(n.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){X=Le},setClear:function(Le,De,ot,Ot,rn){rn===!0&&(Le*=Ot,De*=Ot,ot*=Ot),Ce.set(Le,De,ot,Ot),he.equals(Ce)===!1&&(n.clearColor(Le,De,ot,Ot),he.copy(Ce))},reset:function(){X=!1,oe=null,he.set(-1,0,0,0)}}}function r(){let X=!1,Ce=!1,oe=null,he=null,Le=null;return{setReversed:function(De){if(Ce!==De){const ot=e.get("EXT_clip_control");Ce?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ot=Le;Le=null,this.setClear(Ot)}Ce=De},getReversed:function(){return Ce},setTest:function(De){De?xe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(De){oe!==De&&!X&&(n.depthMask(De),oe=De)},setFunc:function(De){if(Ce&&(De=SD[De]),he!==De){switch(De){case th:n.depthFunc(n.NEVER);break;case nh:n.depthFunc(n.ALWAYS);break;case ih:n.depthFunc(n.LESS);break;case Ro:n.depthFunc(n.LEQUAL);break;case rh:n.depthFunc(n.EQUAL);break;case sh:n.depthFunc(n.GEQUAL);break;case oh:n.depthFunc(n.GREATER);break;case ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=De}},setLocked:function(De){X=De},setClear:function(De){Le!==De&&(Ce&&(De=1-De),n.clearDepth(De),Le=De)},reset:function(){X=!1,oe=null,he=null,Le=null,Ce=!1}}}function o(){let X=!1,Ce=null,oe=null,he=null,Le=null,De=null,ot=null,Ot=null,rn=null;return{setTest:function(Mt){X||(Mt?xe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Mt){Ce!==Mt&&!X&&(n.stencilMask(Mt),Ce=Mt)},setFunc:function(Mt,Fn,bn){(oe!==Mt||he!==Fn||Le!==bn)&&(n.stencilFunc(Mt,Fn,bn),oe=Mt,he=Fn,Le=bn)},setOp:function(Mt,Fn,bn){(De!==Mt||ot!==Fn||Ot!==bn)&&(n.stencilOp(Mt,Fn,bn),De=Mt,ot=Fn,Ot=bn)},setLocked:function(Mt){X=Mt},setClear:function(Mt){rn!==Mt&&(n.clearStencil(Mt),rn=Mt)},reset:function(){X=!1,Ce=null,oe=null,he=null,Le=null,De=null,ot=null,Ot=null,rn=null}}}const l=new t,c=new r,u=new o,f=new WeakMap,h=new WeakMap;let p={},g={},v=new WeakMap,y=[],E=null,T=!1,S=null,_=null,b=null,R=null,A=null,N=null,I=null,F=new Rt(0,0,0),k=0,L=!1,P=null,z=null,ae=null,ee=null,ue=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,re=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),ce=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ce=re>=2);let le=null,se={};const B=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ue=new It().fromArray(B),Q=new It().fromArray(ie);function de(X,Ce,oe,he){const Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(X,De),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<oe;ot++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Ce+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}const Ee={};Ee[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),xe(n.DEPTH_TEST),c.setFunc(Ro),pt(!1),dt(L0),xe(n.CULL_FACE),G(kr);function xe(X){p[X]!==!0&&(n.enable(X),p[X]=!0)}function we(X){p[X]!==!1&&(n.disable(X),p[X]=!1)}function Fe(X,Ce){return g[X]!==Ce?(n.bindFramebuffer(X,Ce),g[X]=Ce,X===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ce),X===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Je(X,Ce){let oe=y,he=!1;if(X){oe=v.get(Ce),oe===void 0&&(oe=[],v.set(Ce,oe));const Le=X.textures;if(oe.length!==Le.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let De=0,ot=Le.length;De<ot;De++)oe[De]=n.COLOR_ATTACHMENT0+De;oe.length=Le.length,he=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,he=!0);he&&n.drawBuffers(oe)}function Dt(X){return E!==X?(n.useProgram(X),E=X,!0):!1}const gt={[xs]:n.FUNC_ADD,[CA]:n.FUNC_SUBTRACT,[RA]:n.FUNC_REVERSE_SUBTRACT};gt[PA]=n.MIN,gt[bA]=n.MAX;const Ut={[DA]:n.ZERO,[LA]:n.ONE,[NA]:n.SRC_COLOR,[Jf]:n.SRC_ALPHA,[BA]:n.SRC_ALPHA_SATURATE,[OA]:n.DST_COLOR,[UA]:n.DST_ALPHA,[IA]:n.ONE_MINUS_SRC_COLOR,[eh]:n.ONE_MINUS_SRC_ALPHA,[kA]:n.ONE_MINUS_DST_COLOR,[FA]:n.ONE_MINUS_DST_ALPHA,[zA]:n.CONSTANT_COLOR,[VA]:n.ONE_MINUS_CONSTANT_COLOR,[HA]:n.CONSTANT_ALPHA,[GA]:n.ONE_MINUS_CONSTANT_ALPHA};function G(X,Ce,oe,he,Le,De,ot,Ot,rn,Mt){if(X===kr){T===!0&&(we(n.BLEND),T=!1);return}if(T===!1&&(xe(n.BLEND),T=!0),X!==AA){if(X!==S||Mt!==L){if((_!==xs||A!==xs)&&(n.blendEquation(n.FUNC_ADD),_=xs,A=xs),Mt)switch(X){case Mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case N0:n.blendFunc(n.ONE,n.ONE);break;case I0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case U0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case N0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case I0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case U0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,R=null,N=null,I=null,F.set(0,0,0),k=0,S=X,L=Mt}return}Le=Le||Ce,De=De||oe,ot=ot||he,(Ce!==_||Le!==A)&&(n.blendEquationSeparate(gt[Ce],gt[Le]),_=Ce,A=Le),(oe!==b||he!==R||De!==N||ot!==I)&&(n.blendFuncSeparate(Ut[oe],Ut[he],Ut[De],Ut[ot]),b=oe,R=he,N=De,I=ot),(Ot.equals(F)===!1||rn!==k)&&(n.blendColor(Ot.r,Ot.g,Ot.b,rn),F.copy(Ot),k=rn),S=X,L=!1}function Pn(X,Ce){X.side===er?we(n.CULL_FACE):xe(n.CULL_FACE);let oe=X.side===jn;Ce&&(oe=!oe),pt(oe),X.blending===Mo&&X.transparent===!1?G(kr):G(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const he=X.stencilWrite;u.setTest(he),he&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){P!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),P=X)}function dt(X){X!==EA?(xe(n.CULL_FACE),X!==z&&(X===L0?n.cullFace(n.BACK):X===TA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),z=X}function qe(X){X!==ae&&(ce&&n.lineWidth(X),ae=X)}function bt(X,Ce,oe){X?(xe(n.POLYGON_OFFSET_FILL),(ee!==Ce||ue!==oe)&&(n.polygonOffset(Ce,oe),ee=Ce,ue=oe)):we(n.POLYGON_OFFSET_FILL)}function Xe(X){X?xe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function U(X){X===void 0&&(X=n.TEXTURE0+pe-1),le!==X&&(n.activeTexture(X),le=X)}function C(X,Ce,oe){oe===void 0&&(le===null?oe=n.TEXTURE0+pe-1:oe=le);let he=se[oe];he===void 0&&(he={type:void 0,texture:void 0},se[oe]=he),(he.type!==X||he.texture!==Ce)&&(le!==oe&&(n.activeTexture(oe),le=oe),n.bindTexture(X,Ce||Ee[X]),he.type=X,he.texture=Ce)}function Z(){const X=se[le];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(X){Ue.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Ue.copy(X))}function Ve(X){Q.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function ft(X,Ce){let oe=h.get(Ce);oe===void 0&&(oe=new WeakMap,h.set(Ce,oe));let he=oe.get(X);he===void 0&&(he=n.getUniformBlockIndex(Ce,X.name),oe.set(X,he))}function st(X,Ce){const he=h.get(Ce).get(X);f.get(Ce)!==he&&(n.uniformBlockBinding(Ce,he,X.__bindingPointIndex),f.set(Ce,he))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},le=null,se={},g={},v=new WeakMap,y=[],E=null,T=!1,S=null,_=null,b=null,R=null,A=null,N=null,I=null,F=new Rt(0,0,0),k=0,L=!1,P=null,z=null,ae=null,ee=null,ue=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:xe,disable:we,bindFramebuffer:Fe,drawBuffers:Je,useProgram:Dt,setBlending:G,setMaterial:Pn,setFlipSided:pt,setCullFace:dt,setLineWidth:qe,setPolygonOffset:bt,setScissorTest:Xe,activeTexture:U,bindTexture:C,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ze,texImage3D:Ke,updateUBOMapping:ft,uniformBlockBinding:st,texStorage2D:ut,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Oe,scissor:tt,viewport:Ve,reset:Pt}}function ED(n,e,t,r,o,l,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,p=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,C){return y?new OffscreenCanvas(U,C):Zc("canvas")}function T(U,C,Z){let me=1;const ve=Xe(U);if((ve.width>Z||ve.height>Z)&&(me=Z/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(me*ve.width),je=Math.floor(me*ve.height);g===void 0&&(g=E(fe,je));const Ae=C?E(fe,je):g;return Ae.width=fe,Ae.height=je,Ae.getContext("2d").drawImage(U,0,0,fe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+je+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function S(U){return U.generateMipmaps}function _(U){n.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(U,C,Z,me,ve=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=C;if(C===n.RED&&(Z===n.FLOAT&&(fe=n.R32F),Z===n.HALF_FLOAT&&(fe=n.R16F),Z===n.UNSIGNED_BYTE&&(fe=n.R8)),C===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.R8UI),Z===n.UNSIGNED_SHORT&&(fe=n.R16UI),Z===n.UNSIGNED_INT&&(fe=n.R32UI),Z===n.BYTE&&(fe=n.R8I),Z===n.SHORT&&(fe=n.R16I),Z===n.INT&&(fe=n.R32I)),C===n.RG&&(Z===n.FLOAT&&(fe=n.RG32F),Z===n.HALF_FLOAT&&(fe=n.RG16F),Z===n.UNSIGNED_BYTE&&(fe=n.RG8)),C===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RG16UI),Z===n.UNSIGNED_INT&&(fe=n.RG32UI),Z===n.BYTE&&(fe=n.RG8I),Z===n.SHORT&&(fe=n.RG16I),Z===n.INT&&(fe=n.RG32I)),C===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),Z===n.UNSIGNED_INT&&(fe=n.RGB32UI),Z===n.BYTE&&(fe=n.RGB8I),Z===n.SHORT&&(fe=n.RGB16I),Z===n.INT&&(fe=n.RGB32I)),C===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(fe=n.RGBA32UI),Z===n.BYTE&&(fe=n.RGBA8I),Z===n.SHORT&&(fe=n.RGBA16I),Z===n.INT&&(fe=n.RGBA32I)),C===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),C===n.RGBA){const je=ve?$c:Ct.getTransfer(me);Z===n.FLOAT&&(fe=n.RGBA32F),Z===n.HALF_FLOAT&&(fe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(fe=je===Nt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(U,C){let Z;return U?C===null||C===As||C===Do?Z=n.DEPTH24_STENCIL8:C===tr?Z=n.DEPTH32F_STENCIL8:C===za&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===As||C===Do?Z=n.DEPTH_COMPONENT24:C===tr?Z=n.DEPTH_COMPONENT32F:C===za&&(Z=n.DEPTH_COMPONENT16),Z}function N(U,C){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==wi&&U.minFilter!==Ni?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function I(U){const C=U.target;C.removeEventListener("dispose",I),k(C),C.isVideoTexture&&p.delete(C)}function F(U){const C=U.target;C.removeEventListener("dispose",F),P(C)}function k(U){const C=r.get(U);if(C.__webglInit===void 0)return;const Z=U.source,me=v.get(Z);if(me){const ve=me[C.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&L(U),Object.keys(me).length===0&&v.delete(Z)}r.remove(U)}function L(U){const C=r.get(U);n.deleteTexture(C.__webglTexture);const Z=U.source,me=v.get(Z);delete me[C.__cacheKey],c.memory.textures--}function P(U){const C=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(C.__webglFramebuffer[me]))for(let ve=0;ve<C.__webglFramebuffer[me].length;ve++)n.deleteFramebuffer(C.__webglFramebuffer[me][ve]);else n.deleteFramebuffer(C.__webglFramebuffer[me]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[me])}else{if(Array.isArray(C.__webglFramebuffer))for(let me=0;me<C.__webglFramebuffer.length;me++)n.deleteFramebuffer(C.__webglFramebuffer[me]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let me=0;me<C.__webglColorRenderbuffer.length;me++)C.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[me]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Z=U.textures;for(let me=0,ve=Z.length;me<ve;me++){const fe=r.get(Z[me]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(Z[me])}r.remove(U)}let z=0;function ae(){z=0}function ee(){const U=z;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),z+=1,U}function ue(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function pe(U,C){const Z=r.get(U);if(U.isVideoTexture&&qe(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const me=U.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,U,C);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+C)}function ce(U,C){const Z=r.get(U);if(U.version>0&&Z.__version!==U.version){Q(Z,U,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+C)}function re(U,C){const Z=r.get(U);if(U.version>0&&Z.__version!==U.version){Q(Z,U,C);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+C)}function H(U,C){const Z=r.get(U);if(U.version>0&&Z.__version!==U.version){de(Z,U,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+C)}const le={[uh]:n.REPEAT,[Ms]:n.CLAMP_TO_EDGE,[dh]:n.MIRRORED_REPEAT},se={[wi]:n.NEAREST,[JA]:n.NEAREST_MIPMAP_NEAREST,[lc]:n.NEAREST_MIPMAP_LINEAR,[Ni]:n.LINEAR,[rf]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},B={[iC]:n.NEVER,[cC]:n.ALWAYS,[rC]:n.LESS,[Cy]:n.LEQUAL,[sC]:n.EQUAL,[lC]:n.GEQUAL,[oC]:n.GREATER,[aC]:n.NOTEQUAL};function ie(U,C){if(C.type===tr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ni||C.magFilter===rf||C.magFilter===lc||C.magFilter===Es||C.minFilter===Ni||C.minFilter===rf||C.minFilter===lc||C.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,le[C.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,le[C.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,le[C.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,se[C.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,se[C.minFilter]),C.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,B[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===wi||C.minFilter!==lc&&C.minFilter!==Es||C.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Ue(U,C){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",I));const me=C.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const fe=ue(C);if(fe!==U.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),ve[fe].usedTimes++;const je=ve[U.__cacheKey];je!==void 0&&(ve[U.__cacheKey].usedTimes--,je.usedTimes===0&&L(C)),U.__cacheKey=fe,U.__webglTexture=ve[fe].texture}return Z}function Q(U,C,Z){let me=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(me=n.TEXTURE_3D);const ve=Ue(U,C),fe=C.source;t.bindTexture(me,U.__webglTexture,n.TEXTURE0+Z);const je=r.get(fe);if(fe.version!==je.__version||ve===!0){t.activeTexture(n.TEXTURE0+Z);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Oe=C.colorSpace===Fr?null:Ct.getPrimaries(C.colorSpace),ut=C.colorSpace===Fr||Ae===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=T(C.image,!1,o.maxTextureSize);Me=bt(C,Me);const ze=l.convert(C.format,C.colorSpace),Ke=l.convert(C.type);let tt=R(C.internalFormat,ze,Ke,C.colorSpace,C.isVideoTexture);ie(me,C);let Ve;const ft=C.mipmaps,st=C.isVideoTexture!==!0,Pt=je.__version===void 0||ve===!0,X=fe.dataReady,Ce=N(C,Me);if(C.isDepthTexture)tt=A(C.format===Lo,C.type),Pt&&(st?t.texStorage2D(n.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,tt,Me.width,Me.height,0,ze,Ke,null));else if(C.isDataTexture)if(ft.length>0){st&&Pt&&t.texStorage2D(n.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let oe=0,he=ft.length;oe<he;oe++)Ve=ft[oe],st?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ve.width,Ve.height,ze,Ke,Ve.data):t.texImage2D(n.TEXTURE_2D,oe,tt,Ve.width,Ve.height,0,ze,Ke,Ve.data);C.generateMipmaps=!1}else st?(Pt&&t.texStorage2D(n.TEXTURE_2D,Ce,tt,Me.width,Me.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,ze,Ke,Me.data)):t.texImage2D(n.TEXTURE_2D,0,tt,Me.width,Me.height,0,ze,Ke,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){st&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,tt,ft[0].width,ft[0].height,Me.depth);for(let oe=0,he=ft.length;oe<he;oe++)if(Ve=ft[oe],C.format!==Ei)if(ze!==null)if(st){if(X)if(C.layerUpdates.size>0){const Le=o_(Ve.width,Ve.height,C.format,C.type);for(const De of C.layerUpdates){const ot=Ve.data.subarray(De*Le/Ve.data.BYTES_PER_ELEMENT,(De+1)*Le/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,De,Ve.width,Ve.height,1,ze,ot)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ve.width,Ve.height,Me.depth,ze,Ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,tt,Ve.width,Ve.height,Me.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ve.width,Ve.height,Me.depth,ze,Ke,Ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,tt,Ve.width,Ve.height,Me.depth,0,ze,Ke,Ve.data)}else{st&&Pt&&t.texStorage2D(n.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let oe=0,he=ft.length;oe<he;oe++)Ve=ft[oe],C.format!==Ei?ze!==null?st?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Ve.width,Ve.height,ze,Ve.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,tt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ve.width,Ve.height,ze,Ke,Ve.data):t.texImage2D(n.TEXTURE_2D,oe,tt,Ve.width,Ve.height,0,ze,Ke,Ve.data)}else if(C.isDataArrayTexture)if(st){if(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,tt,Me.width,Me.height,Me.depth),X)if(C.layerUpdates.size>0){const oe=o_(Me.width,Me.height,C.format,C.type);for(const he of C.layerUpdates){const Le=Me.data.subarray(he*oe/Me.data.BYTES_PER_ELEMENT,(he+1)*oe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,ze,Ke,Le)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ke,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,ze,Ke,Me.data);else if(C.isData3DTexture)st?(Pt&&t.texStorage3D(n.TEXTURE_3D,Ce,tt,Me.width,Me.height,Me.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ke,Me.data)):t.texImage3D(n.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,ze,Ke,Me.data);else if(C.isFramebufferTexture){if(Pt)if(st)t.texStorage2D(n.TEXTURE_2D,Ce,tt,Me.width,Me.height);else{let oe=Me.width,he=Me.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(n.TEXTURE_2D,Le,tt,oe,he,0,ze,Ke,null),oe>>=1,he>>=1}}else if(ft.length>0){if(st&&Pt){const oe=Xe(ft[0]);t.texStorage2D(n.TEXTURE_2D,Ce,tt,oe.width,oe.height)}for(let oe=0,he=ft.length;oe<he;oe++)Ve=ft[oe],st?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ze,Ke,Ve):t.texImage2D(n.TEXTURE_2D,oe,tt,ze,Ke,Ve);C.generateMipmaps=!1}else if(st){if(Pt){const oe=Xe(Me);t.texStorage2D(n.TEXTURE_2D,Ce,tt,oe.width,oe.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Ke,Me)}else t.texImage2D(n.TEXTURE_2D,0,tt,ze,Ke,Me);S(C)&&_(me),je.__version=fe.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function de(U,C,Z){if(C.image.length!==6)return;const me=Ue(U,C),ve=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+Z);const fe=r.get(ve);if(ve.version!==fe.__version||me===!0){t.activeTexture(n.TEXTURE0+Z);const je=Ct.getPrimaries(Ct.workingColorSpace),Ae=C.colorSpace===Fr?null:Ct.getPrimaries(C.colorSpace),Oe=C.colorSpace===Fr||je===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ut=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,ze=[];for(let he=0;he<6;he++)!ut&&!Me?ze[he]=T(C.image[he],!0,o.maxCubemapSize):ze[he]=Me?C.image[he].image:C.image[he],ze[he]=bt(C,ze[he]);const Ke=ze[0],tt=l.convert(C.format,C.colorSpace),Ve=l.convert(C.type),ft=R(C.internalFormat,tt,Ve,C.colorSpace),st=C.isVideoTexture!==!0,Pt=fe.__version===void 0||me===!0,X=ve.dataReady;let Ce=N(C,Ke);ie(n.TEXTURE_CUBE_MAP,C);let oe;if(ut){st&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,ft,Ke.width,Ke.height);for(let he=0;he<6;he++){oe=ze[he].mipmaps;for(let Le=0;Le<oe.length;Le++){const De=oe[Le];C.format!==Ei?tt!==null?st?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,De.width,De.height,tt,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,De.width,De.height,tt,Ve,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ft,De.width,De.height,0,tt,Ve,De.data)}}}else{if(oe=C.mipmaps,st&&Pt){oe.length>0&&Ce++;const he=Xe(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Me){st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze[he].width,ze[he].height,tt,Ve,ze[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,ze[he].width,ze[he].height,0,tt,Ve,ze[he].data);for(let Le=0;Le<oe.length;Le++){const ot=oe[Le].image[he].image;st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,ot.width,ot.height,tt,Ve,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ft,ot.width,ot.height,0,tt,Ve,ot.data)}}else{st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,tt,Ve,ze[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,tt,Ve,ze[he]);for(let Le=0;Le<oe.length;Le++){const De=oe[Le];st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,tt,Ve,De.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ft,tt,Ve,De.image[he])}}}S(C)&&_(n.TEXTURE_CUBE_MAP),fe.__version=ve.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function Ee(U,C,Z,me,ve,fe){const je=l.convert(Z.format,Z.colorSpace),Ae=l.convert(Z.type),Oe=R(Z.internalFormat,je,Ae,Z.colorSpace),ut=r.get(C),Me=r.get(Z);if(Me.__renderTarget=C,!ut.__hasExternalTextures){const ze=Math.max(1,C.width>>fe),Ke=Math.max(1,C.height>>fe);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,Oe,ze,Ke,C.depth,0,je,Ae,null):t.texImage2D(ve,fe,Oe,ze,Ke,0,je,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),dt(C)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ve,Me.__webglTexture,0,pt(C)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ve,Me.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(U,C,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,U),C.depthBuffer){const me=C.depthTexture,ve=me&&me.isDepthTexture?me.type:null,fe=A(C.stencilBuffer,ve),je=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=pt(C);dt(C)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,fe,C.width,C.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,fe,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,je,n.RENDERBUFFER,U)}else{const me=C.textures;for(let ve=0;ve<me.length;ve++){const fe=me[ve],je=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Oe=R(fe.internalFormat,je,Ae,fe.colorSpace),ut=pt(C);Z&&dt(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Oe,C.width,C.height):dt(C)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Oe,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(C.depthTexture);me.__renderTarget=C,(!me.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),pe(C.depthTexture,0);const ve=me.__webglTexture,fe=pt(C);if(C.depthTexture.format===Eo)dt(C)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(C.depthTexture.format===Lo)dt(C)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Fe(U){const C=r.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const me=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),me){const ve=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),C.__depthDisposeCallback=ve}C.__boundDepthTexture=me}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(C.__webglFramebuffer,U)}else if(Z){C.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[me]),C.__webglDepthbuffer[me]===void 0)C.__webglDepthbuffer[me]=n.createRenderbuffer(),xe(C.__webglDepthbuffer[me],U,!1);else{const ve=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),xe(C.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(U,C,Z){const me=r.get(U);C!==void 0&&Ee(me.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Fe(U)}function Dt(U){const C=U.texture,Z=r.get(U),me=r.get(C);U.addEventListener("dispose",F);const ve=U.textures,fe=U.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=C.version,c.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Oe=0;Oe<C.mipmaps.length;Oe++)Z.__webglFramebuffer[Ae][Oe]=n.createFramebuffer()}else Z.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(je)for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++){const ut=r.get(ve[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),c.memory.textures++)}if(U.samples>0&&dt(U)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Oe=ve[Ae];Z.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ut=l.convert(Oe.format,Oe.colorSpace),Me=l.convert(Oe.type),ze=R(Oe.internalFormat,ut,Me,Oe.colorSpace,U.isXRRenderTarget===!0),Ke=pt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,ze,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),ie(n.TEXTURE_CUBE_MAP,C);for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)Ee(Z.__webglFramebuffer[Ae][Oe],U,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Oe);else Ee(Z.__webglFramebuffer[Ae],U,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(C)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++){const ut=ve[Ae],Me=r.get(ut);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),ie(n.TEXTURE_2D,ut),Ee(Z.__webglFramebuffer,U,ut,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),S(ut)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),ie(Ae,C),C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)Ee(Z.__webglFramebuffer[Oe],U,C,n.COLOR_ATTACHMENT0,Ae,Oe);else Ee(Z.__webglFramebuffer,U,C,n.COLOR_ATTACHMENT0,Ae,0);S(C)&&_(Ae),t.unbindTexture()}U.depthBuffer&&Fe(U)}function gt(U){const C=U.textures;for(let Z=0,me=C.length;Z<me;Z++){const ve=C[Z];if(S(ve)){const fe=b(U),je=r.get(ve).__webglTexture;t.bindTexture(fe,je),_(fe),t.unbindTexture()}}}const Ut=[],G=[];function Pn(U){if(U.samples>0){if(dt(U)===!1){const C=U.textures,Z=U.width,me=U.height;let ve=n.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,je=r.get(U),Ae=C.length>1;if(Ae)for(let Oe=0;Oe<C.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Oe=0;Oe<C.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,je.__webglColorRenderbuffer[Oe]);const ut=r.get(C[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ut,0)}n.blitFramebuffer(0,0,Z,me,0,0,Z,me,ve,n.NEAREST),f===!0&&(Ut.length=0,G.length=0,Ut.push(n.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ut.push(fe),G.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Oe=0;Oe<C.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,je.__webglColorRenderbuffer[Oe]);const ut=r.get(C[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const C=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function pt(U){return Math.min(o.maxSamples,U.samples)}function dt(U){const C=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function qe(U){const C=c.render.frame;p.get(U)!==C&&(p.set(U,C),U.update())}function bt(U,C){const Z=U.colorSpace,me=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==No&&Z!==Fr&&(Ct.getTransfer(Z)===Nt?(me!==Ei||ve!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=ce,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt}function TD(n,e){function t(r,o=Fr){let l;const c=Ct.getTransfer(o);if(r===ar)return n.UNSIGNED_BYTE;if(r===Tp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===wp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===_y)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===gy)return n.BYTE;if(r===vy)return n.SHORT;if(r===za)return n.UNSIGNED_SHORT;if(r===Ep)return n.INT;if(r===As)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===Wa)return n.HALF_FLOAT;if(r===xy)return n.ALPHA;if(r===yy)return n.RGB;if(r===Ei)return n.RGBA;if(r===Sy)return n.LUMINANCE;if(r===My)return n.LUMINANCE_ALPHA;if(r===Eo)return n.DEPTH_COMPONENT;if(r===Lo)return n.DEPTH_STENCIL;if(r===Ey)return n.RED;if(r===Ap)return n.RED_INTEGER;if(r===Ty)return n.RG;if(r===Cp)return n.RG_INTEGER;if(r===Rp)return n.RGBA_INTEGER;if(r===Ic||r===Uc||r===Fc||r===Oc)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fh||r===hh||r===ph||r===mh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===fh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ph)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh||r===vh||r===_h)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===gh||r===vh)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===_h)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===yh||r===Sh||r===Mh||r===Eh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===Ph||r===bh||r===Dh||r===Lh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===xh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ah)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lh)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kc||r===Nh||r===Ih)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===kc)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wy||r===Uh||r===Fh||r===Oh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===kc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Uh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Do?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const wD={type:"move"};class Uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),_=this._getHandJoint(h,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),y=.02,E=.005;h.inputState.pinching&&v>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(wD)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const AD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Wn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Gr({vertexShader:AD,fragmentShader:CD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ti(new ou(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PD extends Oo{constructor(e,t){super();const r=this;let o=null,l=1,c=null,u="local-floor",f=1,h=null,p=null,g=null,v=null,y=null,E=null;const T=new RD,S=t.getContextAttributes();let _=null,b=null;const R=[],A=[],N=new St;let I=null;const F=new Qn;F.viewport=new It;const k=new Qn;k.viewport=new It;const L=[F,k],P=new $C;let z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=R[Q];return de===void 0&&(de=new Uf,R[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=R[Q];return de===void 0&&(de=new Uf,R[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=R[Q];return de===void 0&&(de=new Uf,R[Q]=de),de.getHandSpace()};function ee(Q){const de=A.indexOf(Q.inputSource);if(de===-1)return;const Ee=R[de];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,h||c),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",pe);for(let Q=0;Q<R.length;Q++){const de=A[Q];de!==null&&(A[Q]=null,R[Q].disconnect(de))}z=null,ae=null,T.reset(),e.setRenderTarget(_),y=null,v=null,g=null,o=null,b=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(N),o.renderState.layers===void 0){const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new Cs(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let de=null,Ee=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?Lo:Eo,Ee=S.stencil?Do:As);const we={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(we),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new Cs(v.textureWidth,v.textureHeight,{format:Ei,type:ar,depthTexture:new ky(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pe(Q){for(let de=0;de<Q.removed.length;de++){const Ee=Q.removed[de],xe=A.indexOf(Ee);xe>=0&&(A[xe]=null,R[xe].disconnect(Ee))}for(let de=0;de<Q.added.length;de++){const Ee=Q.added[de];let xe=A.indexOf(Ee);if(xe===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=A.length){A.push(Ee),xe=Fe;break}else if(A[Fe]===null){A[Fe]=Ee,xe=Fe;break}if(xe===-1)break}const we=R[xe];we&&we.connect(Ee)}}const ce=new q,re=new q;function H(Q,de,Ee){ce.setFromMatrixPosition(de.matrixWorld),re.setFromMatrixPosition(Ee.matrixWorld);const xe=ce.distanceTo(re),we=de.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,Je=we[14]/(we[10]-1),Dt=we[14]/(we[10]+1),gt=(we[9]+1)/we[5],Ut=(we[9]-1)/we[5],G=(we[8]-1)/we[0],Pn=(Fe[8]+1)/Fe[0],pt=Je*G,dt=Je*Pn,qe=xe/(-G+Pn),bt=qe*-G;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(bt),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Xe=Je+qe,U=Dt+qe,C=pt-bt,Z=dt+(xe-bt),me=gt*Dt/U*Xe,ve=Ut*Dt/U*Xe;Q.projectionMatrix.makePerspective(C,Z,me,ve,Xe,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let de=Q.near,Ee=Q.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),P.near=k.near=F.near=de,P.far=k.far=F.far=Ee,(z!==P.near||ae!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,ae=P.far),F.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,P.layers.mask=F.layers.mask|k.layers.mask;const xe=Q.parent,we=P.cameras;le(P,xe);for(let Fe=0;Fe<we.length;Fe++)le(we[Fe],xe);we.length===2?H(P,F,k):P.projectionMatrix.copy(F.projectionMatrix),se(Q,P,xe)};function se(Q,de,Ee){Ee===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(P)};let B=null;function ie(Q,de){if(p=de.getViewerPose(h||c),E=de,p!==null){const Ee=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let xe=!1;Ee.length!==P.cameras.length&&(P.cameras.length=0,xe=!0);for(let Fe=0;Fe<Ee.length;Fe++){const Je=Ee[Fe];let Dt=null;if(y!==null)Dt=y.getViewport(Je);else{const Ut=g.getViewSubImage(v,Je);Dt=Ut.viewport,Fe===0&&(e.setRenderTargetTextures(b,Ut.colorTexture,v.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(b))}let gt=L[Fe];gt===void 0&&(gt=new Qn,gt.layers.enable(Fe),gt.viewport=new It,L[Fe]=gt),gt.matrix.fromArray(Je.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Je.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Fe===0&&(P.matrix.copy(gt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),xe===!0&&P.cameras.push(gt)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Fe=g.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,o.renderState)}}for(let Ee=0;Ee<R.length;Ee++){const xe=A[Ee],we=R[Ee];xe!==null&&we!==void 0&&we.update(xe,de,h||c)}B&&B(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ue=new Vy;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(Q){B=Q},this.dispose=function(){}}}const ps=new Oi,bD=new qt;function DD(n,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Uy(n)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,b,R,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),g(S,_)):_.isMeshPhongMaterial?(l(S,_),p(S,_)):_.isMeshStandardMaterial?(l(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,A)):_.isMeshMatcapMaterial?(l(S,_),E(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),T(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&u(S,_)):_.isPointsMaterial?f(S,_,b,R):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===jn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===jn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const b=e.get(_),R=b.envMap,A=b.envMapRotation;R&&(S.envMap.value=R,ps.copy(A),ps.x*=-1,ps.y*=-1,ps.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(bD.makeRotationFromEuler(ps)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function u(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,b,R){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*b,S.scale.value=R*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,b){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const b=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LD(n,e,t,r){let o={},l={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,R){const A=R.program;r.uniformBlockBinding(b,A)}function h(b,R){let A=o[b.id];A===void 0&&(E(b),A=p(b),o[b.id]=A,b.addEventListener("dispose",S));const N=R.program;r.updateUBOMapping(b,N);const I=e.render.frame;l[b.id]!==I&&(v(b),l[b.id]=I)}function p(b){const R=g();b.__bindingPointIndex=R;const A=n.createBuffer(),N=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,A),A}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const R=o[b.id],A=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let I=0,F=A.length;I<F;I++){const k=Array.isArray(A[I])?A[I]:[A[I]];for(let L=0,P=k.length;L<P;L++){const z=k[L];if(y(z,I,L,N)===!0){const ae=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let pe=0;pe<ee.length;pe++){const ce=ee[pe],re=T(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,n.bufferSubData(n.UNIFORM_BUFFER,ae+ue,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,ue),ue+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(b,R,A,N){const I=b.value,F=R+"_"+A;if(N[F]===void 0)return typeof I=="number"||typeof I=="boolean"?N[F]=I:N[F]=I.clone(),!0;{const k=N[F];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return N[F]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function E(b){const R=b.uniforms;let A=0;const N=16;for(let F=0,k=R.length;F<k;F++){const L=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,z=L.length;P<z;P++){const ae=L[P],ee=Array.isArray(ae.value)?ae.value:[ae.value];for(let ue=0,pe=ee.length;ue<pe;ue++){const ce=ee[ue],re=T(ce),H=A%N,le=H%re.boundary,se=H+le;A+=le,se!==0&&N-se<re.storage&&(A+=N-se),ae.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=re.storage}}}const I=A%N;return I>0&&(A+=N-I),b.__size=A,b.__cache={},this}function T(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function S(b){const R=b.target;R.removeEventListener("dispose",S);const A=c.indexOf(R.__bindingPointIndex);c.splice(A,1),n.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const b in o)n.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:f,update:h,dispose:_}}class ND{constructor(e={}){const{canvas:t=dC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Br,this.toneMappingExposure=1;const A=this;let N=!1,I=0,F=0,k=null,L=-1,P=null;const z=new It,ae=new It;let ee=null;const ue=new Rt(0);let pe=0,ce=t.width,re=t.height,H=1,le=null,se=null;const B=new It(0,0,ce,re),ie=new It(0,0,ce,re);let Ue=!1;const Q=new Dp;let de=!1,Ee=!1;const xe=new qt,we=new qt,Fe=new q,Je=new It,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ut(){return k===null?H:1}let G=r;function Pn(D,Y){return t.getContext(D,Y)}try{const D={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mp}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),G===null){const Y="webgl2";if(G=Pn(Y,D),G===null)throw Pn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let pt,dt,qe,bt,Xe,U,C,Z,me,ve,fe,je,Ae,Oe,ut,Me,ze,Ke,tt,Ve,ft,st,Pt,X;function Ce(){pt=new Hb(G),pt.init(),st=new TD(G,pt),dt=new Fb(G,pt,e,st),qe=new MD(G,pt),dt.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),bt=new Wb(G),Xe=new cD,U=new ED(G,pt,qe,Xe,dt,st,bt),C=new kb(A),Z=new Vb(A),me=new QC(G),Pt=new Ib(G,me),ve=new Gb(G,me,bt,Pt),fe=new Yb(G,ve,me,bt),tt=new Xb(G,dt,U),Me=new Ob(Xe),je=new lD(A,C,Z,pt,dt,Pt,Me),Ae=new DD(A,Xe),Oe=new dD,ut=new vD(pt),Ke=new Nb(A,C,Z,qe,fe,y,f),ze=new yD(A,fe,dt),X=new LD(G,bt,dt,qe),Ve=new Ub(G,pt,bt),ft=new jb(G,pt,bt),bt.programs=je.programs,A.capabilities=dt,A.extensions=pt,A.properties=Xe,A.renderLists=Oe,A.shadowMap=ze,A.state=qe,A.info=bt}Ce();const oe=new PD(A,G);this.xr=oe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(D){D!==void 0&&(H=D,this.setSize(ce,re,!1))},this.getSize=function(D){return D.set(ce,re)},this.setSize=function(D,Y,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=D,re=Y,t.width=Math.floor(D*H),t.height=Math.floor(Y*H),te===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(ce*H,re*H).floor()},this.setDrawingBufferSize=function(D,Y,te){ce=D,re=Y,H=te,t.width=Math.floor(D*te),t.height=Math.floor(Y*te),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(B)},this.setViewport=function(D,Y,te,ne){D.isVector4?B.set(D.x,D.y,D.z,D.w):B.set(D,Y,te,ne),qe.viewport(z.copy(B).multiplyScalar(H).round())},this.getScissor=function(D){return D.copy(ie)},this.setScissor=function(D,Y,te,ne){D.isVector4?ie.set(D.x,D.y,D.z,D.w):ie.set(D,Y,te,ne),qe.scissor(ae.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(D){qe.setScissorTest(Ue=D)},this.setOpaqueSort=function(D){le=D},this.setTransparentSort=function(D){se=D},this.getClearColor=function(D){return D.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(D=!0,Y=!0,te=!0){let ne=0;if(D){let j=!1;if(k!==null){const Se=k.texture.format;j=Se===Rp||Se===Cp||Se===Ap}if(j){const Se=k.texture.type,Re=Se===ar||Se===As||Se===za||Se===Do||Se===Tp||Se===wp,Ie=Ke.getClearColor(),ke=Ke.getClearAlpha(),nt=Ie.r,it=Ie.g,Ye=Ie.b;Re?(E[0]=nt,E[1]=it,E[2]=Ye,E[3]=ke,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=nt,T[1]=it,T[2]=Ye,T[3]=ke,G.clearBufferiv(G.COLOR,0,T))}else ne|=G.COLOR_BUFFER_BIT}Y&&(ne|=G.DEPTH_BUFFER_BIT),te&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ke.dispose(),Oe.dispose(),ut.dispose(),Xe.dispose(),C.dispose(),Z.dispose(),fe.dispose(),Pt.dispose(),X.dispose(),je.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",bs),oe.removeEventListener("sessionend",lr),ki.stop()};function he(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const D=bt.autoReset,Y=ze.enabled,te=ze.autoUpdate,ne=ze.needsUpdate,j=ze.type;Ce(),bt.autoReset=D,ze.enabled=Y,ze.autoUpdate=te,ze.needsUpdate=ne,ze.type=j}function De(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ot(D){const Y=D.target;Y.removeEventListener("dispose",ot),Ot(Y)}function Ot(D){rn(D),Xe.remove(D)}function rn(D){const Y=Xe.get(D).programs;Y!==void 0&&(Y.forEach(function(te){je.releaseProgram(te)}),D.isShaderMaterial&&je.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,te,ne,j,Se){Y===null&&(Y=Dt);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Ie=Ja(D,Y,te,ne,j);qe.setMaterial(ne,Re);let ke=te.index,nt=1;if(ne.wireframe===!0){if(ke=ve.getWireframeAttribute(te),ke===void 0)return;nt=2}const it=te.drawRange,Ye=te.attributes.position;let at=it.start*nt,Tt=(it.start+it.count)*nt;Se!==null&&(at=Math.max(at,Se.start*nt),Tt=Math.min(Tt,(Se.start+Se.count)*nt)),ke!==null?(at=Math.max(at,0),Tt=Math.min(Tt,ke.count)):Ye!=null&&(at=Math.max(at,0),Tt=Math.min(Tt,Ye.count));const wt=Tt-at;if(wt<0||wt===1/0)return;Pt.setup(j,ne,Ie,te,ke);let Ht,yt=Ve;if(ke!==null&&(Ht=me.get(ke),yt=ft,yt.setIndex(Ht)),j.isMesh)ne.wireframe===!0?(qe.setLineWidth(ne.wireframeLinewidth*Ut()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(j.isLine){let $e=ne.linewidth;$e===void 0&&($e=1),qe.setLineWidth($e*Ut()),j.isLineSegments?yt.setMode(G.LINES):j.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else j.isPoints?yt.setMode(G.POINTS):j.isSprite&&yt.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)yt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $e=j._multiDrawStarts,$t=j._multiDrawCounts,vt=j._multiDrawCount,pn=ke?me.get(ke).bytesPerElement:1,di=Xe.get(ne).currentProgram.getUniforms();for(let Dn=0;Dn<vt;Dn++)di.setValue(G,"_gl_DrawID",Dn),yt.render($e[Dn]/pn,$t[Dn])}else if(j.isInstancedMesh)yt.renderInstances(at,wt,j.count);else if(te.isInstancedBufferGeometry){const $e=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,$t=Math.min(te.instanceCount,$e);yt.renderInstances(at,wt,$t)}else yt.render(at,wt)};function Mt(D,Y,te){D.transparent===!0&&D.side===er&&D.forceSinglePass===!1?(D.side=jn,D.needsUpdate=!0,Ds(D,Y,te),D.side=Hr,D.needsUpdate=!0,Ds(D,Y,te),D.side=er):Ds(D,Y,te)}this.compile=function(D,Y,te=null){te===null&&(te=D),_=ut.get(te),_.init(Y),R.push(_),te.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),D!==te&&D.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ne=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Ie=Se[Re];Mt(Ie,te,j),ne.add(Ie)}else Mt(Se,te,j),ne.add(Se)}),R.pop(),_=null,ne},this.compileAsync=function(D,Y,te=null){const ne=this.compile(D,Y,te);return new Promise(j=>{function Se(){if(ne.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){j(D);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Fn=null;function bn(D){Fn&&Fn(D)}function bs(){ki.stop()}function lr(){ki.start()}const ki=new Vy;ki.setAnimationLoop(bn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(D){Fn=D,oe.setAnimationLoop(D),D===null?ki.stop():ki.start()},oe.addEventListener("sessionstart",bs),oe.addEventListener("sessionend",lr),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(Y),Y=oe.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Y,k),_=ut.get(D,R.length),_.init(Y),R.push(_),we.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Ee),S=Oe.get(D,b.length),S.init(),b.push(S),oe.enabled===!0&&oe.isPresenting===!0){const Se=A.xr.getDepthSensingMesh();Se!==null&&Bi(Se,Y,-1/0,A.sortObjects)}Bi(D,Y,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(le,se),gt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,gt&&Ke.addToRenderList(S,D),this.info.render.frame++,de===!0&&Me.beginShadows();const te=_.state.shadowsArray;ze.render(te,D,Y),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,j=S.transmissive;if(_.setupLights(),Y.isArrayCamera){const Se=Y.cameras;if(j.length>0)for(let Re=0,Ie=Se.length;Re<Ie;Re++){const ke=Se[Re];Yr(ne,j,D,ke)}gt&&Ke.render(D);for(let Re=0,Ie=Se.length;Re<Ie;Re++){const ke=Se[Re];Xr(S,D,ke,ke.viewport)}}else j.length>0&&Yr(ne,j,D,Y),gt&&Ke.render(D),Xr(S,D,Y);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),D.isScene===!0&&D.onAfterRender(A,D,Y),Pt.resetDefaultState(),L=-1,P=null,R.pop(),R.length>0?(_=R[R.length-1],de===!0&&Me.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function Bi(D,Y,te,ne){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)te=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Q.intersectsSprite(D)){ne&&Je.setFromMatrixPosition(D.matrixWorld).applyMatrix4(we);const Re=fe.update(D),Ie=D.material;Ie.visible&&S.push(D,Re,Ie,te,Je.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Q.intersectsObject(D))){const Re=fe.update(D),Ie=D.material;if(ne&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Je.copy(D.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Je.copy(Re.boundingSphere.center)),Je.applyMatrix4(D.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const ke=Re.groups;for(let nt=0,it=ke.length;nt<it;nt++){const Ye=ke[nt],at=Ie[Ye.materialIndex];at&&at.visible&&S.push(D,Re,at,te,Je.z,Ye)}}else Ie.visible&&S.push(D,Re,Ie,te,Je.z,null)}}const Se=D.children;for(let Re=0,Ie=Se.length;Re<Ie;Re++)Bi(Se[Re],Y,te,ne)}function Xr(D,Y,te,ne){const j=D.opaque,Se=D.transmissive,Re=D.transparent;_.setupLightsView(te),de===!0&&Me.setGlobalState(A.clippingPlanes,te),ne&&qe.viewport(z.copy(ne)),j.length>0&&cr(j,Y,te),Se.length>0&&cr(Se,Y,te),Re.length>0&&cr(Re,Y,te),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Yr(D,Y,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ne.id]===void 0&&(_.state.transmissionRenderTarget[ne.id]=new Cs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Wa:ar,minFilter:Es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Se=_.state.transmissionRenderTarget[ne.id],Re=ne.viewport||z;Se.setSize(Re.z,Re.w);const Ie=A.getRenderTarget();A.setRenderTarget(Se),A.getClearColor(ue),pe=A.getClearAlpha(),pe<1&&A.setClearColor(16777215,.5),A.clear(),gt&&Ke.render(te);const ke=A.toneMapping;A.toneMapping=Br;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),_.setupLightsView(ne),de===!0&&Me.setGlobalState(A.clippingPlanes,ne),cr(D,te,ne),U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ye=0,at=Y.length;Ye<at;Ye++){const Tt=Y[Ye],wt=Tt.object,Ht=Tt.geometry,yt=Tt.material,$e=Tt.group;if(yt.side===er&&wt.layers.test(ne.layers)){const $t=yt.side;yt.side=jn,yt.needsUpdate=!0,Za(wt,te,ne,Ht,yt,$e),yt.side=$t,yt.needsUpdate=!0,it=!0}}it===!0&&(U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se))}A.setRenderTarget(Ie),A.setClearColor(ue,pe),nt!==void 0&&(ne.viewport=nt),A.toneMapping=ke}function cr(D,Y,te){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Se=D.length;j<Se;j++){const Re=D[j],Ie=Re.object,ke=Re.geometry,nt=ne===null?Re.material:ne,it=Re.group;Ie.layers.test(te.layers)&&Za(Ie,Y,te,ke,nt,it)}}function Za(D,Y,te,ne,j,Se){D.onBeforeRender(A,Y,te,ne,j,Se),D.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(A,Y,te,ne,D,Se),j.transparent===!0&&j.side===er&&j.forceSinglePass===!1?(j.side=jn,j.needsUpdate=!0,A.renderBufferDirect(te,Y,ne,j,D,Se),j.side=Hr,j.needsUpdate=!0,A.renderBufferDirect(te,Y,ne,j,D,Se),j.side=er):A.renderBufferDirect(te,Y,ne,j,D,Se),D.onAfterRender(A,Y,te,ne,j,Se)}function Ds(D,Y,te){Y.isScene!==!0&&(Y=Dt);const ne=Xe.get(D),j=_.state.lights,Se=_.state.shadowsArray,Re=j.state.version,Ie=je.getParameters(D,j.state,Se,Y,te),ke=je.getProgramCacheKey(Ie);let nt=ne.programs;ne.environment=D.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(D.isMeshStandardMaterial?Z:C).get(D.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,nt===void 0&&(D.addEventListener("dispose",ot),nt=new Map,ne.programs=nt);let it=nt.get(ke);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Re)return Ci(D,Ie),it}else Ie.uniforms=je.getUniforms(D),D.onBeforeCompile(Ie,A),it=je.acquireProgram(Ie,ke),nt.set(ke,it),ne.uniforms=Ie.uniforms;const Ye=ne.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ye.clippingPlanes=Me.uniform),Ci(D,Ie),ne.needsLights=lu(D),ne.lightsStateVersion=Re,ne.needsLights&&(Ye.ambientLightColor.value=j.state.ambient,Ye.lightProbe.value=j.state.probe,Ye.directionalLights.value=j.state.directional,Ye.directionalLightShadows.value=j.state.directionalShadow,Ye.spotLights.value=j.state.spot,Ye.spotLightShadows.value=j.state.spotShadow,Ye.rectAreaLights.value=j.state.rectArea,Ye.ltc_1.value=j.state.rectAreaLTC1,Ye.ltc_2.value=j.state.rectAreaLTC2,Ye.pointLights.value=j.state.point,Ye.pointLightShadows.value=j.state.pointShadow,Ye.hemisphereLights.value=j.state.hemi,Ye.directionalShadowMap.value=j.state.directionalShadowMap,Ye.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ye.spotShadowMap.value=j.state.spotShadowMap,Ye.spotLightMatrix.value=j.state.spotLightMatrix,Ye.spotLightMap.value=j.state.spotLightMap,Ye.pointShadowMap.value=j.state.pointShadowMap,Ye.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function Qa(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=Bc.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function Ci(D,Y){const te=Xe.get(D);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function Ja(D,Y,te,ne,j){Y.isScene!==!0&&(Y=Dt),U.resetTextureUnits();const Se=Y.fog,Re=ne.isMeshStandardMaterial?Y.environment:null,Ie=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:No,ke=(ne.isMeshStandardMaterial?Z:C).get(ne.envMap||Re),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!te.morphAttributes.position,at=!!te.morphAttributes.normal,Tt=!!te.morphAttributes.color;let wt=Br;ne.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(wt=A.toneMapping);const Ht=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=Ht!==void 0?Ht.length:0,$e=Xe.get(ne),$t=_.state.lights;if(de===!0&&(Ee===!0||D!==P)){const Qt=D===P&&ne.id===L;Me.setState(ne,D,Qt)}let vt=!1;ne.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==$t.state.version||$e.outputColorSpace!==Ie||j.isBatchedMesh&&$e.batching===!1||!j.isBatchedMesh&&$e.batching===!0||j.isBatchedMesh&&$e.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&$e.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||j.isInstancedMesh&&$e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$e.instancingMorph===!1&&j.morphTexture!==null||$e.envMap!==ke||ne.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==it||$e.morphTargets!==Ye||$e.morphNormals!==at||$e.morphColors!==Tt||$e.toneMapping!==wt||$e.morphTargetsCount!==yt)&&(vt=!0):(vt=!0,$e.__version=ne.version);let pn=$e.currentProgram;vt===!0&&(pn=Ds(ne,Y,j));let di=!1,Dn=!1,qr=!1;const Lt=pn.getUniforms(),Ln=$e.uniforms;if(qe.useProgram(pn.program)&&(di=!0,Dn=!0,qr=!0),ne.id!==L&&(L=ne.id,Dn=!0),di||P!==D){qe.buffers.depth.getReversed()?(xe.copy(D.projectionMatrix),hC(xe),pC(xe),Lt.setValue(G,"projectionMatrix",xe)):Lt.setValue(G,"projectionMatrix",D.projectionMatrix),Lt.setValue(G,"viewMatrix",D.matrixWorldInverse);const yn=Lt.map.cameraPosition;yn!==void 0&&yn.setValue(G,Fe.setFromMatrixPosition(D.matrixWorld)),dt.logarithmicDepthBuffer&&Lt.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),P!==D&&(P=D,Dn=!0,qr=!0)}if(j.isSkinnedMesh){Lt.setOptional(G,j,"bindMatrix"),Lt.setOptional(G,j,"bindMatrixInverse");const Qt=j.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Lt.setValue(G,"boneTexture",Qt.boneTexture,U))}j.isBatchedMesh&&(Lt.setOptional(G,j,"batchingTexture"),Lt.setValue(G,"batchingTexture",j._matricesTexture,U),Lt.setOptional(G,j,"batchingIdTexture"),Lt.setValue(G,"batchingIdTexture",j._indirectTexture,U),Lt.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(G,"batchingColorTexture",j._colorsTexture,U));const xn=te.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&tt.update(j,te,pn),(Dn||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,Lt.setValue(G,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ln.envMap.value=ke,Ln.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Y.environment!==null&&(Ln.envMapIntensity.value=Y.environmentIntensity),Dn&&(Lt.setValue(G,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&el(Ln,qr),Se&&ne.fog===!0&&Ae.refreshFogUniforms(Ln,Se),Ae.refreshMaterialUniforms(Ln,ne,H,re,_.state.transmissionRenderTarget[D.id]),Bc.upload(G,Qa($e),Ln,U)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Bc.upload(G,Qa($e),Ln,U),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(G,"center",j.center),Lt.setValue(G,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(G,"normalMatrix",j.normalMatrix),Lt.setValue(G,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Qt=ne.uniformsGroups;for(let yn=0,$r=Qt.length;yn<$r;yn++){const mt=Qt[yn];X.update(mt,pn),X.bind(mt,pn)}}return pn}function el(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function lu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(D,Y,te){Xe.get(D.texture).__webglTexture=Y,Xe.get(D.depthTexture).__webglTexture=te;const ne=Xe.get(D);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Y){const te=Xe.get(D);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,te=0){k=D,I=Y,F=te;let ne=!0,j=null,Se=!1,Re=!1;if(D){const ke=Xe.get(D);if(ke.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(G.FRAMEBUFFER,null),ne=!1;else if(ke.__webglFramebuffer===void 0)U.setupRenderTarget(D);else if(ke.__hasExternalTextures)U.rebindTextures(D,Xe.get(D.texture).__webglTexture,Xe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ye=D.depthTexture;if(ke.__boundDepthTexture!==Ye){if(Ye!==null&&Xe.has(Ye)&&(D.width!==Ye.image.width||D.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(D)}}const nt=D.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const it=Xe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?j=it[Y][te]:j=it[Y],Se=!0):D.samples>0&&U.useMultisampledRTT(D)===!1?j=Xe.get(D).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[te]:j=it,z.copy(D.viewport),ae.copy(D.scissor),ee=D.scissorTest}else z.copy(B).multiplyScalar(H).floor(),ae.copy(ie).multiplyScalar(H).floor(),ee=Ue;if(qe.bindFramebuffer(G.FRAMEBUFFER,j)&&ne&&qe.drawBuffers(D,j),qe.viewport(z),qe.scissor(ae),qe.setScissorTest(ee),Se){const ke=Xe.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,te)}else if(Re){const ke=Xe.get(D.texture),nt=Y||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,te||0,nt)}L=-1},this.readRenderTargetPixels=function(D,Y,te,ne,j,Se,Re){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){qe.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const ke=D.texture,nt=ke.format,it=ke.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-ne&&te>=0&&te<=D.height-j&&G.readPixels(Y,te,ne,j,st.convert(nt),st.convert(it),Se)}finally{const ke=k!==null?Xe.get(k).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(D,Y,te,ne,j,Se,Re){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){const ke=D.texture,nt=ke.format,it=ke.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=D.width-ne&&te>=0&&te<=D.height-j){qe.bindFramebuffer(G.FRAMEBUFFER,Ie);const Ye=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.bufferData(G.PIXEL_PACK_BUFFER,Se.byteLength,G.STREAM_READ),G.readPixels(Y,te,ne,j,st.convert(nt),st.convert(it),0);const at=k!==null?Xe.get(k).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,at);const Tt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await fC(G,Tt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Se),G.deleteBuffer(Ye),G.deleteSync(Tt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,Y=null,te=0){D.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,D=arguments[1]);const ne=Math.pow(2,-te),j=Math.floor(D.image.width*ne),Se=Math.floor(D.image.height*ne),Re=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;U.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Re,Ie,j,Se),qe.unbindTexture()};const tl=G.createFramebuffer(),nl=G.createFramebuffer();this.copyTextureToTexture=function(D,Y,te=null,ne=null,j=0,Se=null){D.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,D=arguments[1],Y=arguments[2],Se=arguments[3]||0,te=null),Se===null&&(j!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let Re,Ie,ke,nt,it,Ye,at,Tt,wt;const Ht=D.isCompressedTexture?D.mipmaps[Se]:D.image;if(te!==null)Re=te.max.x-te.min.x,Ie=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,it=te.min.y,Ye=te.isBox3?te.min.z:0;else{const xn=Math.pow(2,-j);Re=Math.floor(Ht.width*xn),Ie=Math.floor(Ht.height*xn),D.isDataArrayTexture?ke=Ht.depth:D.isData3DTexture?ke=Math.floor(Ht.depth*xn):ke=1,nt=0,it=0,Ye=0}ne!==null?(at=ne.x,Tt=ne.y,wt=ne.z):(at=0,Tt=0,wt=0);const yt=st.convert(Y.format),$e=st.convert(Y.type);let $t;Y.isData3DTexture?(U.setTexture3D(Y,0),$t=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),$t=G.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),$t=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=G.getParameter(G.UNPACK_ROW_LENGTH),pn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),di=G.getParameter(G.UNPACK_SKIP_PIXELS),Dn=G.getParameter(G.UNPACK_SKIP_ROWS),qr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ht.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),G.pixelStorei(G.UNPACK_SKIP_ROWS,it),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ye);const Lt=D.isDataArrayTexture||D.isData3DTexture,Ln=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){const xn=Xe.get(D),Qt=Xe.get(Y),yn=Xe.get(xn.__renderTarget),$r=Xe.get(Qt.__renderTarget);qe.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let mt=0;mt<ke;mt++)Lt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(D).__webglTexture,j,Ye+mt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(Y).__webglTexture,Se,wt+mt)),G.blitFramebuffer(nt,it,Re,Ie,at,Tt,Re,Ie,G.DEPTH_BUFFER_BIT,G.NEAREST);qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||D.isRenderTargetTexture||Xe.has(D)){const xn=Xe.get(D),Qt=Xe.get(Y);qe.bindFramebuffer(G.READ_FRAMEBUFFER,tl),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,nl);for(let yn=0;yn<ke;yn++)Lt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,xn.__webglTexture,j,Ye+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,xn.__webglTexture,j),Ln?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qt.__webglTexture,Se,wt+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qt.__webglTexture,Se),j!==0?G.blitFramebuffer(nt,it,Re,Ie,at,Tt,Re,Ie,G.COLOR_BUFFER_BIT,G.NEAREST):Ln?G.copyTexSubImage3D($t,Se,at,Tt,wt+yn,nt,it,Re,Ie):G.copyTexSubImage2D($t,Se,at,Tt,nt,it,Re,Ie);qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ln?D.isDataTexture||D.isData3DTexture?G.texSubImage3D($t,Se,at,Tt,wt,Re,Ie,ke,yt,$e,Ht.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D($t,Se,at,Tt,wt,Re,Ie,ke,yt,Ht.data):G.texSubImage3D($t,Se,at,Tt,wt,Re,Ie,ke,yt,$e,Ht):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Se,at,Tt,Re,Ie,yt,$e,Ht.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Se,at,Tt,Ht.width,Ht.height,yt,Ht.data):G.texSubImage2D(G.TEXTURE_2D,Se,at,Tt,Re,Ie,yt,$e,Ht);G.pixelStorei(G.UNPACK_ROW_LENGTH,vt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,di),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qr),Se===0&&Y.generateMipmaps&&G.generateMipmap($t),qe.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,te=null,ne=null,j=0){return D.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,D=arguments[2],Y=arguments[3],j=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Y,te,ne,j)},this.initRenderTarget=function(D){Xe.get(D).__webglFramebuffer===void 0&&U.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?U.setTextureCube(D,0):D.isData3DTexture?U.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?U.setTexture2DArray(D,0):U.setTexture2D(D,0),qe.unbindTexture()},this.resetState=function(){I=0,F=0,k=null,qe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function ID(){const n=be.useRef(null);return be.useEffect(()=>{const e=n.current;if(!e)return;let t=e.clientWidth||1,r=e.clientHeight||1;const o=new ND({antialias:!0,alpha:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(t,r),o.setClearColor(0,0),e.appendChild(o.domElement);const l=new kC,c=new Qn(42,t/r,.1,100);c.position.set(0,0,9),l.add(new jC(16777215,16767408,.85));const u=new qC(16777215,1.15);u.position.set(4,6,8),l.add(u);const f=new XC(16732201,18,40);f.position.set(-6,-3,5),l.add(f);const h=new Ra;l.add(h);const p=[],g=(A,N,I,F,k)=>{const L=new Ti(A,new VC({color:N,roughness:.32,metalness:.05}));return L.position.set(I,F,k),L.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),L.userData={by:F,sp:.6+Math.random()*.7,amp:.22+Math.random()*.25},h.add(L),p.push(L),L};g(new Up(1.05,.34,160,24),16741635,3.4,.4,-.5),g(new Qc(.82,48,48),16732201,-3.6,1.7,-1.2),g(new Qc(.42,32,32),16757340,-2.3,-2,.6),g(new Ip(.68,.24,24,64),16767406,1.5,-2.3,.2);const v=new Ti(new Np(.55,0),new bp({color:16741635,wireframe:!0,transparent:!0,opacity:.55}));v.position.set(.2,2.6,-2.2),h.add(v);const y={tx:0,ty:0,x:0,y:0},E=A=>{y.tx=A.clientX/window.innerWidth*2-1,y.ty=A.clientY/window.innerHeight*2-1};window.addEventListener("pointermove",E);const T=()=>{t=e.clientWidth||1,r=e.clientHeight||1,o.setSize(t,r),c.aspect=t/r,c.updateProjectionMatrix()},S=new ResizeObserver(T);S.observe(e);const _=new KC;let b;const R=()=>{b=requestAnimationFrame(R);const A=_.getElapsedTime();y.x+=(y.tx-y.x)*.04,y.y+=(y.ty-y.y)*.04,h.rotation.y=A*.09+y.x*.28,h.rotation.x=Math.sin(A*.12)*.06+y.y*.16,p.forEach((N,I)=>{N.position.y=N.userData.by+Math.sin(A*N.userData.sp+I*1.7)*N.userData.amp,N.rotation.z+=.0016}),v.rotation.x+=.004,v.rotation.y+=.003,o.render(l,c)};return R(),()=>{cancelAnimationFrame(b),window.removeEventListener("pointermove",E),S.disconnect(),h.traverse(A=>{A.isMesh&&(A.geometry.dispose(),Array.isArray(A.material)?A.material.forEach(N=>N.dispose()):A.material.dispose())}),o.dispose(),o.domElement.parentNode===e&&e.removeChild(o.domElement)}},[]),M.jsx("div",{ref:n,className:"orbfield","aria-hidden":"true"})}const UD={hidden:{},show:{transition:{staggerChildren:.09,delayChildren:.3}}},jt={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},Rs={hidden:{opacity:0,scale:.85},show:{opacity:1,scale:1,transition:{type:"spring",stiffness:260,damping:20}}};function FD(){return M.jsxs("div",{className:"title-slide",children:[M.jsx("div",{className:"hero-stage","aria-hidden":"true",children:M.jsx(ID,{})}),M.jsxs("div",{className:"hero-copy",children:[M.jsxs(xt.p,{variants:jt,className:"eyebrow-chip",children:[M.jsx(b0,{size:15})," A plain english talk"]}),M.jsxs(xt.h1,{variants:jt,className:"hero-title",children:["How ",M.jsx("span",{className:"grad",children:"AI agents"})," actually work"]}),M.jsx(xt.p,{variants:jt,className:"hero-sub",children:"From a friendly chat to the tools they quietly use behind the scenes, here is what is really going on under the hood, and why agents are not just smarter chatbots."}),M.jsxs(xt.div,{variants:jt,className:"hero-chips",children:[M.jsxs("span",{className:"chip",children:[M.jsx(vA,{size:14})," What an agent is"]}),M.jsxs("span",{className:"chip",children:[M.jsx(Sp,{size:14})," Tools they use"]}),M.jsxs("span",{className:"chip",children:[M.jsx(b0,{size:14})," Live end to end demo"]})]}),M.jsxs(xt.p,{variants:jt,className:"hero-hint",children:["Move with the arrow keys or the buttons below. Press ",M.jsx("kbd",{children:"F"})," for fullscreen."]})]})]})}function Wr({eyebrow:n,title:e,lead:t,children:r,dense:o}){return M.jsxs(xt.div,{variants:UD,initial:"hidden",animate:"show",className:`slide${o?" dense":""}`,children:[(n||e)&&M.jsxs("header",{className:"slide-head",children:[n&&M.jsx(xt.p,{variants:jt,className:"eyebrow",children:n}),e&&M.jsx(xt.h2,{variants:jt,className:"slide-title",children:e}),t&&M.jsx(xt.p,{variants:jt,className:"lead",children:t})]}),M.jsx("div",{className:"slide-body",children:r})]})}const OD=[{icon:gA,title:"An email agent",body:"Reads your inbox, drafts replies, sorts and trims, even books meetings and attaches the right files."},{icon:uA,title:"A WhatsApp agent",body:"Answers customers any hour, in their own language, then hands to a human the moment a query turns tricky."},{icon:hA,title:"An analytics agent",body:"It plans the SQL query, brings the data from your database to the user, and presents it with a chart or visualization."}];function kD(){return M.jsx(Wr,{eyebrow:"Opening",title:"What is an AI agent?",lead:"Think of an agent as a smart helper with a to do list and a toolbox. You give it a goal, it breaks it into steps, uses tools, and reports back when the job is done.",children:M.jsx("div",{className:"grid4",children:OD.map(n=>M.jsxs(xt.article,{variants:jt,className:"card use-card",children:[M.jsx("span",{className:"icon-badge",children:M.jsx(n.icon,{size:22})}),M.jsx("h3",{children:n.title}),M.jsx("p",{children:n.body})]},n.title))})})}const BD=[{ref:"SLM",name:"Small language model",icon:ly,body:"A slim brain that runs on a phone and replies fast. Great for lightweight, low cost chores."},{ref:"LLM",name:"Large language model",icon:ws,body:"The heavyweight in your agent. Handles almost any text task, from answers to code.",active:!0},{ref:"VLM",name:"Vision language model",icon:fy,body:"An LLM with eyes. It understands images and video too, not just typed words."}],zD=[{icon:fA,name:"Context window",unit:"tokens it can recall",body:"How much the model can hold at once, like a desk that fills up. Beyond that, older words start to blur."},{icon:_A,name:"Max tokens",unit:"a reply limit",body:"A ceiling on the answer. The model must finish inside this many pieces, no matter how long it wants to go."},{icon:ws,name:"Temperature",unit:"creativity dial",body:"Low is steady and precise. High is wander-y and creative. Agents usually run cool for dependable work."}];function VD(){return M.jsxs(Wr,{dense:!0,title:"The brain on board, and its knobs",children:[M.jsx(xt.div,{variants:jt,className:"llm-intro",children:"An LLM is software trained on a mountain of text that got extremely good at predicting words. Every agent runs on one. They come in sizes, and they carry three dials you can turn."}),M.jsx("div",{className:"specs",children:BD.map(n=>M.jsxs(xt.div,{variants:jt,className:`card spec-card${n.active?" on":""}`,children:[M.jsx("span",{className:"spec-badge",children:M.jsx(n.icon,{size:18})}),M.jsx("span",{className:"spec-ref",children:n.ref}),M.jsx("h3",{children:n.name}),M.jsx("p",{children:n.body})]},n.ref))}),M.jsx("div",{className:"params",children:zD.map(n=>M.jsxs(xt.div,{variants:jt,className:"card param-card",children:[M.jsx("span",{className:"icon-badge sm",children:M.jsx(n.icon,{size:18})}),M.jsxs("div",{className:"param-txt",children:[M.jsxs("h3",{children:[n.name," ",M.jsx("em",{children:n.unit})]}),M.jsx("p",{children:n.body})]})]},n.name))})]})}const HD=["the"," you"," I"," is","!"];function GD(){return M.jsxs(Wr,{dense:!0,eyebrow:"A closer look",title:"How the word pieces are made",children:[M.jsxs("div",{className:"split even",children:[M.jsxs(xt.div,{variants:jt,className:"card",children:[M.jsx("span",{className:"icon-badge",children:M.jsx(ws,{size:22})}),M.jsx("h3",{children:"The dictionary"}),M.jsx("p",{children:"The model ships with one fixed dictionary of pieces: common words, word parts and punctuation. Everyday words map straight to a single entry."}),M.jsx("div",{className:"guts-chips",children:HD.map(n=>M.jsx("span",{className:"token-chip sm",children:n===" I"?" I":n},n))})]}),M.jsxs(xt.div,{variants:jt,className:"card",children:[M.jsx("span",{className:"icon-badge",children:M.jsx(dy,{size:22})}),M.jsx("h3",{children:"Unseen words get sliced"}),M.jsx("p",{children:"A brand new or very long word is simply rebuilt from smaller pieces the dictionary does know, so nothing is ever unknown to the model."}),M.jsxs("div",{className:"guts-chips",children:[M.jsx("span",{className:"token-chip sm",children:"the"}),M.jsx("span",{className:"split-hint sep",children:"stays whole"})]}),M.jsxs("div",{className:"guts-chips",children:[M.jsx("span",{className:"token-chip sm sliced",children:"xeno"}),M.jsx("span",{className:"token-chip sm sliced",children:"glyph"})]})]})]}),M.jsxs(xt.div,{variants:Rs,className:"card merge-card",children:[M.jsx("span",{className:"icon-badge warn",children:M.jsx(Or,{size:20})}),M.jsxs("div",{className:"merge-txt",children:[M.jsx("h3",{children:"How the dictionary was built"}),M.jsx("p",{children:"A simple rule, run once before you ever chat: find the two letter chunks that appear together most often across a huge pile of real text, then merge them into one bigger piece. Repeat until the dictionary feels balanced."})]}),M.jsxs("div",{className:"merge-seq",children:[M.jsx("span",{className:"token-chip sm",children:"a"}),M.jsx("span",{className:"token-chip sm",children:"n"}),M.jsx("em",{children:"merge"}),M.jsx("span",{className:"token-chip sm on",children:"an"})]})]})]})}const jD=[45,78,30,92,55,66,22,85,40,70],WD=["dog","puppy","cat","kitten"],XD=["skyscraper","pizza"];function YD(){return M.jsxs(Wr,{dense:!0,eyebrow:"A closer look",title:"Embeddings, what they really are",children:[M.jsxs("div",{className:"split even",children:[M.jsxs(xt.div,{variants:jt,className:"card",children:[M.jsx("span",{className:"icon-badge",children:M.jsx(ws,{size:22})}),M.jsx("h3",{className:"emb-title",children:"A token becomes a pile of numbers"}),M.jsx("p",{className:"emb-txt",children:"Each word points at a long list of numbers. Nobody types these. They are learned, nudged again and again during training until words used alike sit close together."}),M.jsxs("div",{className:"emb-demo",children:[M.jsxs("div",{className:"emb-vec",children:[M.jsx("span",{className:"emb-bars",children:jD.map((n,e)=>M.jsx("i",{style:{height:`${n}%`}},e))}),M.jsx("em",{children:"dog"})]}),M.jsx("span",{className:"emb-arrow",children:"→"}),M.jsxs("div",{className:"emb-map",children:[M.jsxs("span",{className:"emb-map-dots",children:[WD.map(n=>M.jsx("b",{children:n[0]},n)),M.jsx("i",{})]}),M.jsx("span",{className:"emb-map-far",children:XD.map(n=>M.jsx("b",{children:n[0]},n))}),M.jsxs("span",{className:"emb-map-cap",children:[M.jsx("em",{children:"dog, puppy"})," close · ",M.jsx("em",{children:"skyscraper"})," far"]})]})]})]}),M.jsxs(xt.div,{variants:jt,className:"card",children:[M.jsx("span",{className:"icon-badge warn",children:M.jsx(ws,{size:22})}),M.jsx("h3",{className:"emb-title",children:"How the numbers get learned"}),M.jsx("p",{className:"emb-txt",children:"The model starts with random numbers. Training reads millions of example sentences and, after each one, nudges the numbers: words used in the same context are pulled together, unrelated words are pushed apart. Repeat millions of times and a useful meaning map settles in."}),M.jsxs("div",{className:"emb-strip",children:[M.jsx("span",{className:"chip",children:"starts random"}),M.jsx("span",{className:"chip",children:"pulled by context"}),M.jsx("span",{className:"chip",children:"settles into a map"})]})]})]}),M.jsx(xt.div,{variants:Rs,className:"emb-note",children:"The Embedding Layer is just this map. It answers the simple question, how close is the meaning of these words to each other?"})]})}function Xy({playing:n,onToggle:e,onNext:t,onPrev:r,phase:o,total:l,label:c}){const u=f=>h=>{h.stopPropagation(),f()};return M.jsxs("div",{className:"demo-controls",children:[M.jsx("span",{className:"dc-label",children:c}),M.jsxs("span",{className:"dc-counter",children:[String(o+1).padStart(2,"0")," / ",String(l).padStart(2,"0")]}),M.jsxs("div",{className:"dc-btns",children:[M.jsx("button",{className:"dc-btn",onClick:u(r),"aria-label":"Previous step",children:M.jsx(cy,{size:16})}),M.jsx("button",{className:"dc-btn toggle",onClick:u(e),"aria-label":"Toggle automatic play",children:n?M.jsx(SA,{size:16}):M.jsx(yA,{size:16})}),M.jsxs("button",{className:"dc-btn main",onClick:u(t),"aria-label":"Next step",children:["Step ",M.jsx(Ba,{size:15})]})]}),M.jsx("span",{className:"dc-hint",children:n?"auto playing":"click the stage, Space, or Step"})]})}function Yy(n,{interval:e=2e3,auto:t=!1}={}){const[r,o]=be.useState(0),[l,c]=be.useState(t);be.useEffect(()=>{if(!l)return;const p=setInterval(()=>o(g=>(g+1)%n),e);return()=>clearInterval(p)},[l,e,n]);const u=()=>o(p=>(p+1)%n),f=()=>o(p=>p<=0?n-1:p-1),h=()=>c(p=>!p);return be.useEffect(()=>{const p=()=>o(g=>(g+1)%n);return window.addEventListener("demo-advance",p),()=>window.removeEventListener("demo-advance",p)},[n]),{phase:r,next:u,prev:f,toggle:h,playing:l}}const qD="How is the weather in Bangalore?",Pc=["How"," is"," the"," weather"," in"," Bangalore","?"],Ta=[{name:"User input",note:"plain sentence, in English"},{name:"Tokenizer",note:"chops it into small pieces"},{name:"Token IDs",note:"each piece gets a dictionary number"},{name:"Embeddings",note:"how similar do the pieces feel"},{name:"Transformer",note:"which pieces matter, and how"},{name:"Probability",note:"scores for every possible next piece"},{name:"Pick next",note:"the winner is the highest probability"},{name:"Append + repeat",note:"join it on, predict the next again"},{name:"End of sentence?",note:"keep going, or stop when a stop piece appears"},{name:"Response",note:"the answer is complete and sent back"}],$D=[{t:'"today"',pct:41,win:!0},{t:'"the"',pct:27},{t:'"it"',pct:18},{t:'"sunny"',pct:14}];function KD({interval:n=2e3}){const{phase:e,next:t,prev:r,toggle:o,playing:l}=Yy(Ta.length,{interval:n,auto:!1}),c=Ta[e];return M.jsxs(Wr,{dense:!0,eyebrow:"How an LLM writes a reply",title:"From sentence to sentence",children:[M.jsx(Xy,{playing:l,onToggle:o,onNext:t,onPrev:r,phase:e,total:Ta.length,label:"Generation pipeline"}),M.jsxs("div",{className:"gen",onClick:()=>{l||t()},children:[M.jsx(xt.div,{variants:jt,className:"gen-rail",children:Ta.map((u,f)=>M.jsxs("div",{className:`gen-step${f===e?" cur":""}${f<e||f===0&&e===Ta.length-1?" done":""}`,children:[M.jsx("span",{className:"step-no",children:f+1}),M.jsx("span",{className:"step-name",children:u.name}),f<e&&M.jsx(Or,{size:13})]},u.name))}),M.jsxs(xt.div,{variants:Rs,className:"gen-view",children:[M.jsxs("div",{className:"gen-stage-label",children:[M.jsx("span",{className:"pn",children:String(e+1).padStart(2,"0")}),M.jsx("strong",{children:c.name}),M.jsx("span",{className:"gen-note",children:c.note})]}),M.jsx("div",{className:"gen-body",children:M.jsx(ZD,{phase:e})})]})]})]})}function ZD({phase:n}){return n===0?M.jsxs("div",{className:"gen-bubble",children:[qD,M.jsx("span",{className:"caret dark"})]}):n===1?M.jsx("div",{className:"gen-row",children:Pc.map(e=>M.jsx("span",{className:"token-chip sm sliced",children:e},e))}):n===2?M.jsx("div",{className:"gen-ids",children:Pc.map((e,t)=>M.jsxs("span",{className:"id-pair",children:[M.jsx("b",{children:e}),M.jsx("span",{className:"token-id",children:2100+t*137})]},e))}):n===3?M.jsxs("div",{className:"verbose",children:[M.jsx("p",{children:"Each Embedding Layer helps the model answer: how similar are these tokens to each other? Words that feel alike sit close, words that do not, sit far apart."}),M.jsx("div",{className:"vec-row",children:Pc.map((e,t)=>M.jsxs("span",{className:"vec-col",children:[M.jsx("span",{className:"vec-bars",children:[40,80,30,95,55,65,20,88,44,72].slice(0,6+t%4).map((r,o)=>M.jsx("i",{style:{height:`${r}%`}},o))}),M.jsx("em",{children:e})]},t))})]}):n===4?M.jsxs("div",{className:"verbose",children:[M.jsx("div",{className:"attention",children:Pc.map((e,t)=>M.jsx("span",{className:"attn-token",children:e},t))}),M.jsx("p",{children:"Each Transformer Layer helps the model answer: which tokens should I pay attention to, and how do they relate to each other? That is how the model understands your whole question at once."})]}):n===5?M.jsx("div",{className:"prob-list",children:$D.map((e,t)=>M.jsxs("div",{className:`prob-row${e.win?" win":""}`,children:[M.jsx("span",{className:"prob-tok",children:e.t}),M.jsx("span",{className:"prob-track",children:M.jsx(xt.span,{className:"prob-fill",initial:{width:0},animate:{width:`${e.pct}%`},transition:{delay:.15+t*.1,duration:.7}})}),M.jsxs("span",{className:"prob-pct",children:[e.pct,"%"]})]},e.t))}):n===6?M.jsxs("div",{className:"pick-row",children:[M.jsx("span",{className:"pick-choice",children:'"today"'}),M.jsx(qc,{size:18}),M.jsx("span",{className:"pick-result",children:"now on the end of the sentence"})]}):n===7?M.jsxs("div",{className:"verbose",children:[M.jsxs("div",{className:"gen-bubble",children:["The weather in Bangalore is",M.jsx("span",{className:"caret dark"})]}),M.jsxs("div",{className:"loop-dia",children:[M.jsx("span",{className:"loop-node",children:"score next words"}),M.jsx("span",{className:"loop-arrow",children:M.jsx(Ba,{size:16})}),M.jsx("span",{className:"loop-node",children:"pick one"}),M.jsx("span",{className:"loop-arrow",children:M.jsx(Ba,{size:16})}),M.jsx("span",{className:"loop-node",children:"add it"}),M.jsx(uy,{className:"loop-back",size:16})]}),M.jsx("p",{className:"loop-cap",children:"process, predict, add. Then do it all over again for the next piece."})]}):n===8?M.jsxs("div",{className:"end-check",children:[M.jsx("div",{className:"gen-bubble end-final",children:"The weather in Bangalore is pleasant today."}),M.jsx("span",{className:"end-q",children:"End of sentence?"}),M.jsxs("div",{className:"end-rows",children:[M.jsxs("span",{className:"end-no",children:[M.jsx(qc,{size:15})," no, keep going"]}),M.jsxs("span",{className:"end-yes",children:[M.jsx(Or,{size:15})," yes, the stop piece was picked"]})]})]}):M.jsxs("div",{className:"gen-done",children:[M.jsx("span",{className:"done-badge",children:M.jsx(Or,{size:16})}),M.jsx("p",{children:"The weather in Bangalore is pleasant today."}),M.jsx("span",{className:"done-note",children:"the complete reply is sent back"})]})}const QD=["fast, light and cheap chatbots","writing and summarizing","logic-heavy tasks like code"],D_=["anything that needs eyes","reading images, charts, screenshots"],JD=["describe what a photo shows","read diagrams, charts and signs","decode a screenshot of an error"];function eL(){return M.jsx(Wr,{dense:!0,title:"LLM or VLM, which one do you need?",children:M.jsxs("div",{className:"vlm",children:[M.jsxs(xt.div,{variants:jt,className:"card side-card",children:[M.jsxs("span",{className:"side-head",children:[M.jsx("span",{className:"icon-badge",children:M.jsx(pA,{size:20})}),M.jsxs("div",{children:[M.jsx("h3",{children:"LLM"}),M.jsx("span",{className:"tag",children:"text only"})]})]}),M.jsxs("ul",{className:"do-list",children:[QD.map(n=>M.jsxs("li",{children:[M.jsx(Or,{size:15})," ",n]},n)),M.jsxs("li",{className:"no",children:[M.jsx(D0,{size:15})," ",D_[0]]}),M.jsxs("li",{className:"no",children:[M.jsx(D0,{size:15})," ",D_[1]]})]})]}),M.jsx(xt.span,{variants:jt,className:"vlm-cmp",children:M.jsx(Ba,{size:22})}),M.jsxs(xt.div,{variants:jt,className:"card side-card vlm-accent",children:[M.jsxs("span",{className:"side-head",children:[M.jsx("span",{className:"icon-badge",children:M.jsx(fy,{size:20})}),M.jsxs("div",{children:[M.jsx("h3",{children:"VLM"}),M.jsx("span",{className:"tag",children:"adds eyes"})]})]}),M.jsxs("ul",{className:"do-list",children:[JD.map(n=>M.jsxs("li",{children:[M.jsx(Or,{size:15})," ",n]},n)),M.jsxs("li",{children:[M.jsx(Or,{size:15})," still does all the text depth of an LLM"]})]})]})]})})}const bc="M84 140 C 200 70 250 70 340 140 C 420 210 480 210 560 140 C 640 70 700 70 780 140 C 860 210 920 210 984 140",tL=[{x:84,n:"1",l1:"User",l2:"asks"},{x:340,n:"2",l1:"Agent sizes",l2:"up the task"},{x:560,n:"3",l1:"Picks",l2:"a tool"},{x:780,n:"4",l1:"Tool runs",l2:"and returns"},{x:984,n:"5",l1:"Agent composes",l2:"the reply"}],nL=[{icon:xA,title:"System prompt",body:"The job description the agent follows. It never shows up in the chat."},{icon:Sp,title:"Tools",body:"The utilities it can call, like weather, search, calendar, or your own apps."},{icon:ws,title:"Live context",body:"The conversation plus tool results, so the agent keeps the thread straight."}];function iL(){return M.jsxs(Wr,{dense:!0,eyebrow:"How an agent works",title:"Think, pick a tool, act, report back",children:[M.jsxs(xt.div,{variants:Rs,className:"map-wrap",children:[M.jsxs("svg",{viewBox:"0 0 1070 250",role:"img","aria-label":"Agent flow from user, to tools, back to answer",children:[M.jsxs("defs",{children:[M.jsxs("linearGradient",{id:"agGrad",x1:"0",y1:"0",x2:"1",y2:"0",children:[M.jsx("stop",{offset:"0%",stopColor:"#FF7503"}),M.jsx("stop",{offset:"100%",stopColor:"#FF5029"})]}),M.jsxs("linearGradient",{id:"agNode",x1:"0",y1:"0",x2:"1",y2:"1",children:[M.jsx("stop",{offset:"0%",stopColor:"#FF7503"}),M.jsx("stop",{offset:"100%",stopColor:"#FF5029"})]})]}),M.jsx("path",{d:bc,fill:"none",stroke:"#F3E2CF",strokeWidth:"4",strokeLinecap:"round"}),M.jsx("path",{d:bc,fill:"none",stroke:"url(#agGrad)",strokeWidth:"4",strokeLinecap:"round",className:"flowline"}),M.jsx("path",{d:"M 560 184 C 432 214 300 216 300 190 C 300 170 480 168 560 184",fill:"none",stroke:"#FFB877",strokeWidth:"2",strokeDasharray:"4 8",className:"flowline slow",transform:"translate(0,6)"}),M.jsx("circle",{r:"8",fill:"#FF5029",stroke:"#fff",strokeWidth:"3",children:M.jsx("animateMotion",{dur:"6s",repeatCount:"indefinite",path:bc})}),M.jsx("circle",{r:"5",fill:"#FFB25C",opacity:"0.85",children:M.jsx("animateMotion",{dur:"6s",begin:"-3s",repeatCount:"indefinite",path:bc})}),tL.map((n,e)=>M.jsxs("g",{children:[M.jsx("circle",{cx:n.x,cy:"140",r:"34",className:"stn-pulse",style:{animationDelay:`${e*1.4}s`}}),M.jsx("circle",{cx:n.x,cy:"140",r:"34",fill:"#fff",stroke:"#F0DECA",strokeWidth:"2"}),M.jsx("circle",{cx:n.x,cy:"140",r:"22",fill:"url(#agNode)"}),M.jsx("text",{x:n.x,y:"146",textAnchor:"middle",className:"stn-num sm",children:n.n}),M.jsx("text",{x:n.x,y:"208",textAnchor:"middle",className:"stn-l1 sm",children:n.l1}),M.jsx("text",{x:n.x,y:"228",textAnchor:"middle",className:"stn-l2 sm",children:n.l2})]},n.n))]}),M.jsxs("div",{className:"loop-tag",children:[M.jsx(qc,{size:14})," may loop around the tools more than once"]})]}),M.jsx("div",{className:"grid3 flows",children:nL.map(n=>M.jsxs(xt.div,{variants:jt,className:"card flow-card",children:[M.jsx("span",{className:"icon-badge sm",children:M.jsx(n.icon,{size:18})}),M.jsxs("div",{children:[M.jsx("h3",{children:n.title}),M.jsx("p",{children:n.body})]})]},n.title))})]})}const rL="How is the weather in Bangalore?",L_=["The"," weather"," in"," Bangalore"," is"," 26°C"," and"," partly"," cloudy"," right now","."],sL=[{icon:ws,title:"Context loaded",sub:"system prompt + user text"},{icon:dy,title:"Tokenizer",sub:"to token IDs"},{icon:mA,title:"Embeddings",sub:"meaning as numbers"},{icon:ly,title:"Transformer think",sub:"decides next piece"},{icon:Sp,title:"Tool: weather.api",sub:"call, then read result"},{icon:qc,title:"Compose reply",sub:"pick answer tokens"},{icon:dA,title:"Stream final answer",sub:'until a stop piece answers "end of sentence?"'}],oL=["Loading the system prompt and the user question.","Tokenizer chops the question into token IDs.","Meaning loaded as computed numbers.","The Transformer decides a weather tool would help.","Calling the weather API...","26°C, partly cloudy came back.","Composing the answer, one token at a time.","Tokens arriving on the chat.","End of sentence? Yes, a stop piece ended it. Response done."];function aL({interval:n=2e3}){const{phase:e,next:t,prev:r,toggle:o,playing:l}=Yy(9,{interval:n,auto:!1}),c=Math.min(e,6),u=e<=5?0:e===6?2:e===7?7:L_.length,f=e===8;return M.jsxs(Wr,{dense:!0,eyebrow:"End to end",title:"Watch one agent run",children:[M.jsx(Xy,{playing:l,onToggle:o,onNext:t,onPrev:r,phase:e,total:9,label:"Agent run"}),M.jsxs("div",{className:"demo",onClick:()=>{l||t()},children:[M.jsxs(xt.div,{variants:Rs,className:"demo-chat",children:[M.jsxs("div",{className:"dc-head",children:[M.jsx("span",{className:"avatar tiny",children:M.jsx(Yc,{height:14})}),M.jsxs("div",{children:[M.jsx("strong",{children:"Customer chat"}),M.jsxs("span",{className:"online",children:[M.jsx("i",{})," agent online"]})]})]}),M.jsxs("div",{className:"dc-body",children:[M.jsx("div",{className:"bubble user",children:rL}),e>=1&&M.jsxs("div",{className:"bubble assistant dc-answer",children:[M.jsx("span",{className:"avatar micro",children:M.jsx(Yc,{height:10})}),M.jsxs("span",{children:[L_.slice(0,u).join(""),!f&&M.jsx("span",{className:"caret dark"}),f&&M.jsx(Or,{size:13})]})]})]})]}),M.jsxs(xt.div,{variants:Rs,className:"n8n",children:[M.jsxs("div",{className:"n8n-head",children:[M.jsx("span",{className:"n8n-title",children:"Agent run, frame by frame"}),M.jsxs("span",{className:"n8n-status",children:[M.jsx("i",{className:e>=1?"on":"idle"})," live"]})]}),M.jsxs("div",{className:"sys-chip",children:[M.jsx("strong",{children:"System"})," you are a helpful assistant. Use the weather tool for forecasts."]}),M.jsx("div",{className:"n8n-rail",children:sL.map((h,p)=>M.jsxs("div",{className:`n8n-node${p===c&&e>=1&&p<=c?" cur":""}${p<c||e===8?" done":""}`,children:[M.jsx("span",{className:"n8n-ico",children:M.jsx(h.icon,{size:15})}),M.jsxs("span",{className:"n8n-txt",children:[M.jsx("strong",{children:h.title}),M.jsx("em",{children:h.sub})]}),M.jsx("span",{className:"n8n-conn"})]},h.title))}),M.jsx("div",{className:"n8n-foot",children:oL[e]})]})]})]})}function lL(){return M.jsxs(xt.div,{variants:{hidden:{},show:{transition:{staggerChildren:.12,delayChildren:.3}}},initial:"hidden",animate:"show",className:"close-slide",children:[M.jsx(xt.div,{variants:Rs,className:"close-logo",children:M.jsx(Yc,{height:64})}),M.jsxs(xt.h2,{variants:jt,className:"close-title",children:["That is the whole ",M.jsx("span",{className:"grad",children:"agent"}),"."]}),M.jsx(xt.p,{variants:jt,className:"close-sub",children:"An LLM turns words into meaning and back. An agent wraps that brain in rules, tools and an aim, then loops until the job is truly done. Same brain, now with hands."}),M.jsx(xt.p,{variants:jt,className:"thanks",children:"Thank you. Now, questions."})]})}const Ff=[FD,kD,VD,GD,YD,KD,eL,iL,aL,lL],cL=new Set([5,8]),uL={enter:n=>({x:n>0?90:-90,opacity:0}),center:{x:0,opacity:1,transition:{duration:.5,ease:[.22,1,.36,1]}},exit:n=>({x:n>0?-70:70,opacity:0,transition:{duration:.3,ease:"easeIn"}})};function dL(){const[n,e]=be.useState(0),[t,r]=be.useState(1),[o,l]=be.useState(45),c=be.useRef(null),u=Ff.length,f=600+Math.round(5400*(1-o/100)),h=be.useCallback(S=>{e(_=>S<0||S>=u||S===_?_:(r(S>_?1:-1),S))},[u]),p=be.useCallback(()=>h(0),[h]);be.useEffect(()=>{const S=_=>{if(!(_.metaKey||_.ctrlKey||_.altKey)){if(_.key===" "){_.preventDefault(),cL.has(n)?window.dispatchEvent(new Event("demo-advance")):h(n+1);return}switch(_.key){case"ArrowRight":case"PageDown":_.preventDefault(),h(n+1);break;case"ArrowLeft":case"PageUp":_.preventDefault(),h(n-1);break;case"Home":h(0);break;case"End":h(u-1);break;case"f":case"F":document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{});break}}};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[n,h,u]);const g=S=>{c.current={x:S.touches[0].clientX,y:S.touches[0].clientY}},v=S=>{if(!c.current)return;const _=S.changedTouches[0].clientX-c.current.x,b=S.changedTouches[0].clientY-c.current.y;c.current=null,Math.abs(_)>64&&Math.abs(_)>Math.abs(b)*1.4&&h(n+(_<0?1:-1))},y=Ff[n],E=String(n+1).padStart(2,"0"),T=n===u-1;return M.jsxs("div",{className:"deck",onTouchStart:g,onTouchEnd:v,children:[M.jsx("div",{className:"progress","aria-hidden":"true",children:M.jsx("span",{style:{width:`${(n+1)/u*100}%`}})}),M.jsx("button",{className:"brandmark",onClick:p,"aria-label":"Back to start",children:M.jsx(Yc,{height:26})}),M.jsx("div",{className:"watermark","aria-hidden":"true",children:E}),M.jsx(VM,{mode:"wait",custom:t,initial:!1,children:M.jsx(xt.main,{className:"stage",custom:t,variants:uL,initial:"enter",animate:"center",exit:"exit",children:M.jsx(y,{interval:f})},n)}),M.jsxs("div",{className:"amb-controls",children:[M.jsx(MA,{size:16}),M.jsx("span",{className:"amb-label",children:"anim speed"}),M.jsx("input",{className:"amb-slider",type:"range",min:"0",max:"100",value:o,onChange:S=>l(Number(S.target.value)),"aria-label":"Animation speed"}),M.jsxs("span",{className:"amb-value",children:[(f/1e3).toFixed(1),"s / step"]})]}),M.jsx("nav",{className:"dots","aria-label":"Slides",children:Ff.map((S,_)=>M.jsx("button",{className:`dot${_===n?" active":""}`,onClick:()=>h(_),"aria-label":`Go to slide ${_+1}`},_))}),M.jsxs("div",{className:"controls",children:[M.jsxs("span",{className:"counter",children:[E," ",M.jsx("em",{children:"/"})," ",String(u).padStart(2,"0")]}),M.jsx("button",{className:"btn-icon",onClick:()=>h(n-1),disabled:n===0,"aria-label":"Previous slide",children:M.jsx(cy,{size:18})}),M.jsx("button",{className:"btn-next",onClick:T?p:()=>h(n+1),children:T?M.jsxs(M.Fragment,{children:["Restart ",M.jsx(uy,{size:17})]}):M.jsxs(M.Fragment,{children:["Next ",M.jsx(Ba,{size:17})]})})]}),M.jsxs("p",{className:"sr-only","aria-live":"polite",children:["Slide ",n+1," of ",u]})]})}FM.createRoot(document.getElementById("root")).render(M.jsx(bM.StrictMode,{children:M.jsx(dL,{})}));
