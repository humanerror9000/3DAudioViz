(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Yg={exports:{}},Ic={},qg={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),i_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),o_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),wp=Symbol.iterator;function u_(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,Qg={};function fa(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Kg}fa.prototype.isReactComponent={};fa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jg(){}Jg.prototype=fa.prototype;function af(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Kg}var of=af.prototype=new Jg;of.constructor=af;Zg(of,fa.prototype);of.isPureReactComponent=!0;var bp=Array.isArray,e0=Object.prototype.hasOwnProperty,lf={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Do,type:t,key:s,ref:a,props:r,_owner:lf.current}}function d_(t,e){return{$$typeof:Do,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function h_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ep=/\/+/g;function iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h_(""+t.key):e.toString(36)}function Ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Do:case e_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+iu(a,0):i,bp(r)?(n="",t!=null&&(n=t.replace(Ep,"$&/")+"/"),Ol(r,e,n,"",function(c){return c})):r!=null&&(cf(r)&&(r=d_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ep,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",bp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+iu(s,o);a+=Ol(s,e,n,l,r)}else if(l=u_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+iu(s,o++),a+=Ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Wo(t,e,n){if(t==null)return t;var i=[],r=0;return Ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function f_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},kl={transition:null},p_={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:kl,ReactCurrentOwner:lf};function i0(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Wo,forEach:function(t,e,n){Wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wo(t,function(){e++}),e},toArray:function(t){return Wo(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=fa;tt.Fragment=t_;tt.Profiler=i_;tt.PureComponent=af;tt.StrictMode=n_;tt.Suspense=o_;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;tt.act=i0;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Do,type:t.type,key:r,ref:s,props:i,_owner:a}};tt.createContext=function(t){return t={$$typeof:s_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r_,_context:t},t.Consumer=t};tt.createElement=n0;tt.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:a_,render:t}};tt.isValidElement=cf;tt.lazy=function(t){return{$$typeof:c_,_payload:{_status:-1,_result:t},_init:f_}};tt.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};tt.unstable_act=i0;tt.useCallback=function(t,e){return Sn.current.useCallback(t,e)};tt.useContext=function(t){return Sn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return Sn.current.useEffect(t,e)};tt.useId=function(){return Sn.current.useId()};tt.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return Sn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};tt.useRef=function(t){return Sn.current.useRef(t)};tt.useState=function(t){return Sn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return Sn.current.useTransition()};tt.version="18.3.1";qg.exports=tt;var J=qg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=J,g_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),x_=Object.prototype.hasOwnProperty,__=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)x_.call(e,i)&&!y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:g_,type:t,key:s,ref:a,props:r,_owner:__.current}}Ic.Fragment=v_;Ic.jsx=r0;Ic.jsxs=r0;Yg.exports=Ic;var f=Yg.exports,s0={exports:{}},Yn={},a0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var q=O.length;O.push($);e:for(;0<q;){var ne=q-1>>>1,se=O[ne];if(0<r(se,$))O[ne]=$,O[q]=se,q=ne;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var $=O[0],q=O.pop();if(q!==$){O[0]=q;e:for(var ne=0,se=O.length,Ne=se>>>1;ne<Ne;){var Ue=2*(ne+1)-1,je=O[Ue],te=Ue+1,ie=O[te];if(0>r(je,q))te<se&&0>r(ie,je)?(O[ne]=ie,O[te]=q,ne=te):(O[ne]=je,O[Ue]=q,ne=Ue);else if(te<se&&0>r(ie,q))O[ne]=ie,O[te]=q,ne=te;else break e}}return $}function r(O,$){var q=O.sortIndex-$.sortIndex;return q!==0?q:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,u=null,p=3,m=!1,x=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=O)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function M(O){if(S=!1,_(O),!x)if(n(l)!==null)x=!0,X(E);else{var $=n(c);$!==null&&G(M,$.startTime-O)}}function E(O,$){x=!1,S&&(S=!1,d(R),R=-1),m=!0;var q=p;try{for(_($),u=n(l);u!==null&&(!(u.expirationTime>$)||O&&!L());){var ne=u.callback;if(typeof ne=="function"){u.callback=null,p=u.priorityLevel;var se=ne(u.expirationTime<=$);$=t.unstable_now(),typeof se=="function"?u.callback=se:u===n(l)&&i(l),_($)}else i(l);u=n(l)}if(u!==null)var Ne=!0;else{var Ue=n(c);Ue!==null&&G(M,Ue.startTime-$),Ne=!1}return Ne}finally{u=null,p=q,m=!1}}var T=!1,A=null,R=-1,w=5,b=-1;function L(){return!(t.unstable_now()-b<w)}function H(){if(A!==null){var O=t.unstable_now();b=O;var $=!0;try{$=A(!0,O)}finally{$?B():(T=!1,A=null)}}else T=!1}var B;if(typeof g=="function")B=function(){g(H)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,j=I.port2;I.port1.onmessage=H,B=function(){j.postMessage(null)}}else B=function(){v(H,0)};function X(O){A=O,T||(T=!0,B())}function G(O,$){R=v(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var q=p;p=$;try{return O()}finally{p=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=p;p=O;try{return $()}finally{p=q}},t.unstable_scheduleCallback=function(O,$,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=q+se,O={id:h++,callback:$,priorityLevel:O,startTime:q,expirationTime:se,sortIndex:-1},q>ne?(O.sortIndex=q,e(c,O),n(l)===null&&O===n(c)&&(S?(d(R),R=-1):S=!0,G(M,q-ne))):(O.sortIndex=se,e(l,O),x||m||(x=!0,X(E))),O},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(O){var $=p;return function(){var q=p;p=$;try{return O.apply(this,arguments)}finally{p=q}}}})(o0);a0.exports=o0;var S_=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_=J,$n=S_;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,ro={};function os(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(ro[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pd=Object.prototype.hasOwnProperty,w_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},Cp={};function b_(t){return pd.call(Cp,t)?!0:pd.call(Tp,t)?!1:w_.test(t)?Cp[t]=!0:(Tp[t]=!0,!1)}function E_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T_(t,e,n,i){if(e===null||typeof e>"u"||E_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);nn[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);nn[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);nn[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T_(e,n,r,i)&&(n=null),i||r===null?b_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),ff=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function Ea(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,ru;function Va(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var su=!1;function au(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Va(t):""}function C_(t){switch(t.tag){case 5:return Va(t.type);case 16:return Va("Lazy");case 13:return Va("Suspense");case 19:return Va("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ns:return"Portal";case md:return"Profiler";case ff:return"StrictMode";case gd:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:xd(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return xd(t(e))}catch{}}return null}function A_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xd(e);case 8:return e===ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R_(t){var e=h0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=R_(t))}function f0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=h0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function yd(t,e){p0(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sd(t,e,n){(e!=="number"||nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ha=Array.isArray;function Gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Ha(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function m0(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P_=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(t){P_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$a[e]=$a[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$a.hasOwnProperty(t)&&$a[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var N_=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bd(t,e){if(e){if(N_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function Ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Td=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cd=null,Ws=null,Xs=null;function Ip(t){if(t=Fo(t)){if(typeof Cd!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=kc(e),Cd(t.stateNode,t.type,e))}}function y0(t){Ws?Xs?Xs.push(t):Xs=[t]:Ws=t}function S0(){if(Ws){var t=Ws,e=Xs;if(Xs=Ws=null,Ip(t),e)for(t=0;t<e.length;t++)Ip(e[t])}}function M0(t,e){return t(e)}function w0(){}var ou=!1;function b0(t,e,n){if(ou)return t(e,n);ou=!0;try{return M0(t,e,n)}finally{ou=!1,(Ws!==null||Xs!==null)&&(w0(),S0())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var i=kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Ad=!1;if($i)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Ad=!1}function D_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ya=!1,ic=null,rc=!1,Rd=null,I_={onError:function(t){Ya=!0,ic=t}};function L_(t,e,n,i,r,s,a,o,l){Ya=!1,ic=null,D_.apply(I_,arguments)}function F_(t,e,n,i,r,s,a,o,l){if(L_.apply(this,arguments),Ya){if(Ya){var c=ic;Ya=!1,ic=null}else throw Error(pe(198));rc||(rc=!0,Rd=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lp(t){if(ls(t)!==t)throw Error(pe(188))}function U_(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lp(r),t;if(s===i)return Lp(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function T0(t){return t=U_(t),t!==null?C0(t):null}function C0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C0(t);if(e!==null)return e;t=t.sibling}return null}var A0=$n.unstable_scheduleCallback,Fp=$n.unstable_cancelCallback,O_=$n.unstable_shouldYield,k_=$n.unstable_requestPaint,Ft=$n.unstable_now,z_=$n.unstable_getCurrentPriorityLevel,vf=$n.unstable_ImmediatePriority,R0=$n.unstable_UserBlockingPriority,sc=$n.unstable_NormalPriority,B_=$n.unstable_LowPriority,P0=$n.unstable_IdlePriority,Lc=null,Ri=null;function V_(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(Lc,t,void 0,(t.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:G_,H_=Math.log,j_=Math.LN2;function G_(t){return t>>>=0,t===0?32:31-(H_(t)/j_|0)|0}var qo=64,Ko=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ja(o):(s&=a,s!==0&&(i=ja(s)))}else a=n&~r,a!==0?i=ja(a):s!==0&&(i=ja(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vi(e),r=1<<n,i|=t[n],e&=~r;return i}function W_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-vi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=W_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function N0(){var t=qo;return qo<<=1,!(qo&4194240)&&(qo=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vi(e),t[e]=n}function $_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-vi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function D0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I0,_f,L0,F0,U0,Nd=!1,Zo=[],gr=null,vr=null,xr=null,oo=new Map,lo=new Map,cr=[],Y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fo(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q_(t,e,n,i,r){switch(e){case"focusin":return gr=Ca(gr,t,e,n,i,r),!0;case"dragenter":return vr=Ca(vr,t,e,n,i,r),!0;case"mouseover":return xr=Ca(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ca(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ca(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function O0(t){var e=Wr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=E0(n),e!==null){t.blockedOn=e,U0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Td=i,n.target.dispatchEvent(i),Td=null}else return e=Fo(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function Op(t,e,n){zl(t)&&n.delete(e)}function K_(){Nd=!1,gr!==null&&zl(gr)&&(gr=null),vr!==null&&zl(vr)&&(vr=null),xr!==null&&zl(xr)&&(xr=null),oo.forEach(Op),lo.forEach(Op)}function Aa(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,$n.unstable_scheduleCallback($n.unstable_NormalPriority,K_)))}function co(t){function e(r){return Aa(r,t)}if(0<Zo.length){Aa(Zo[0],t);for(var n=1;n<Zo.length;n++){var i=Zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Aa(gr,t),vr!==null&&Aa(vr,t),xr!==null&&Aa(xr,t),oo.forEach(e),lo.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&cr.shift()}var $s=Qi.ReactCurrentBatchConfig,oc=!0;function Z_(t,e,n,i){var r=pt,s=$s.transition;$s.transition=null;try{pt=1,yf(t,e,n,i)}finally{pt=r,$s.transition=s}}function Q_(t,e,n,i){var r=pt,s=$s.transition;$s.transition=null;try{pt=4,yf(t,e,n,i)}finally{pt=r,$s.transition=s}}function yf(t,e,n,i){if(oc){var r=Dd(t,e,n,i);if(r===null)xu(t,e,i,lc,n),Up(t,i);else if(q_(r,t,e,n,i))i.stopPropagation();else if(Up(t,i),e&4&&-1<Y_.indexOf(t)){for(;r!==null;){var s=Fo(r);if(s!==null&&I0(s),s=Dd(t,e,n,i),s===null&&xu(t,e,i,lc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(t,e,i,null,n)}}var lc=null;function Dd(t,e,n,i){if(lc=null,t=gf(i),t=Wr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lc=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case vf:return 1;case R0:return 4;case sc:case B_:return 16;case P0:return 536870912;default:return 16}default:return 16}}var hr=null,Sf=null,Bl=null;function z0(){if(Bl)return Bl;var t,e=Sf,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function kp(){return!1}function qn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:kp,this.isPropagationStopped=kp,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=qn(pa),Lo=At({},pa,{view:0,detail:0}),J_=qn(Lo),cu,uu,Ra,Fc=At({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ra&&(Ra&&t.type==="mousemove"?(cu=t.screenX-Ra.screenX,uu=t.screenY-Ra.screenY):uu=cu=0,Ra=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),zp=qn(Fc),ey=At({},Fc,{dataTransfer:0}),ty=qn(ey),ny=At({},Lo,{relatedTarget:0}),du=qn(ny),iy=At({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),ry=qn(iy),sy=At({},pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ay=qn(sy),oy=At({},pa,{data:0}),Bp=qn(oy),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uy[t])?!!e[t]:!1}function wf(){return dy}var hy=At({},Lo,{key:function(t){if(t.key){var e=ly[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fy=qn(hy),py=At({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=qn(py),my=At({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),gy=qn(my),vy=At({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=qn(vy),_y=At({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=qn(_y),Sy=[9,13,27,32],bf=$i&&"CompositionEvent"in window,qa=null;$i&&"documentMode"in document&&(qa=document.documentMode);var My=$i&&"TextEvent"in window&&!qa,B0=$i&&(!bf||qa&&8<qa&&11>=qa),Hp=" ",jp=!1;function V0(t,e){switch(t){case"keyup":return Sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function wy(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(jp=!0,Hp);case"textInput":return t=e.data,t===Hp&&jp?null:t;default:return null}}function by(t,e){if(Is)return t==="compositionend"||!bf&&V0(t,e)?(t=z0(),Bl=Sf=hr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ey[t.type]:e==="textarea"}function j0(t,e,n,i){y0(i),e=cc(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ka=null,uo=null;function Ty(t){ev(t,0)}function Uc(t){var e=Us(t);if(f0(e))return t}function Cy(t,e){if(t==="change")return e}var G0=!1;if($i){var hu;if($i){var fu="oninput"in document;if(!fu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),fu=typeof Wp.oninput=="function"}hu=fu}else hu=!1;G0=hu&&(!document.documentMode||9<document.documentMode)}function Xp(){Ka&&(Ka.detachEvent("onpropertychange",W0),uo=Ka=null)}function W0(t){if(t.propertyName==="value"&&Uc(uo)){var e=[];j0(e,uo,t,gf(t)),b0(Ty,e)}}function Ay(t,e,n){t==="focusin"?(Xp(),Ka=e,uo=n,Ka.attachEvent("onpropertychange",W0)):t==="focusout"&&Xp()}function Ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(uo)}function Py(t,e){if(t==="click")return Uc(e)}function Ny(t,e){if(t==="input"||t==="change")return Uc(e)}function Dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:Dy;function ho(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pd.call(e,r)||!_i(t[r],e[r]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,e){var n=$p(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$p(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $0(){for(var t=window,e=nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nc(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Iy(t){var e=$0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(i!==null&&Ef(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Yp(n,s);var a=Yp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ly=$i&&"documentMode"in document&&11>=document.documentMode,Ls=null,Id=null,Za=null,Ld=!1;function qp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||Ls==null||Ls!==nc(i)||(i=Ls,"selectionStart"in i&&Ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Za&&ho(Za,i)||(Za=i,i=cc(Id,"onSelect"),0<i.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ls)))}function Jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},pu={},Y0={};$i&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Oc(t){if(pu[t])return pu[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return pu[t]=e[n];return t}var q0=Oc("animationend"),K0=Oc("animationiteration"),Z0=Oc("animationstart"),Q0=Oc("transitionend"),J0=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){J0.set(t,e),os(e,[t])}for(var mu=0;mu<Kp.length;mu++){var gu=Kp[mu],Fy=gu.toLowerCase(),Uy=gu[0].toUpperCase()+gu.slice(1);Ar(Fy,"on"+Uy)}Ar(q0,"onAnimationEnd");Ar(K0,"onAnimationIteration");Ar(Z0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Q0,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Zp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,F_(i,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,o,c),s=l}}}if(rc)throw t=Rd,rc=!1,Rd=null,t}function yt(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var i=t+"__bubble";n.has(i)||(tv(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),tv(n,t,i,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[el]){t[el]=!0,l0.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,vu("selectionchange",!1,e))}}function tv(t,e,n,i){switch(k0(e)){case 1:var r=Z_;break;case 4:r=Q_;break;default:r=yf}n=r.bind(null,e,n,t),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Wr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}b0(function(){var c=s,h=gf(n),u=[];e:{var p=J0.get(t);if(p!==void 0){var m=Mf,x=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":m=fy;break;case"focusin":x="focus",m=du;break;case"focusout":x="blur",m=du;break;case"beforeblur":case"afterblur":m=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=gy;break;case q0:case K0:case Z0:m=ry;break;case Q0:m=xy;break;case"scroll":m=J_;break;case"wheel":m=yy;break;case"copy":case"cut":case"paste":m=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vp}var S=(e&4)!==0,v=!S&&t==="scroll",d=S?p!==null?p+"Capture":null:p;S=[];for(var g=c,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,d!==null&&(M=ao(g,d),M!=null&&S.push(po(g,M,_)))),v)break;g=g.return}0<S.length&&(p=new m(p,x,null,n,h),u.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==Td&&(x=n.relatedTarget||n.fromElement)&&(Wr(x)||x[Yi]))break e;if((m||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Wr(x):null,x!==null&&(v=ls(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(S=zp,M="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Vp,M="onPointerLeave",d="onPointerEnter",g="pointer"),v=m==null?p:Us(m),_=x==null?p:Us(x),p=new S(M,g+"leave",m,n,h),p.target=v,p.relatedTarget=_,M=null,Wr(h)===c&&(S=new S(d,g+"enter",x,n,h),S.target=_,S.relatedTarget=v,M=S),v=M,m&&x)t:{for(S=m,d=x,g=0,_=S;_;_=hs(_))g++;for(_=0,M=d;M;M=hs(M))_++;for(;0<g-_;)S=hs(S),g--;for(;0<_-g;)d=hs(d),_--;for(;g--;){if(S===d||d!==null&&S===d.alternate)break t;S=hs(S),d=hs(d)}S=null}else S=null;m!==null&&Qp(u,p,m,S,!1),x!==null&&v!==null&&Qp(u,v,x,S,!0)}}e:{if(p=c?Us(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var E=Cy;else if(Gp(p))if(G0)E=Ny;else{E=Ry;var T=Ay}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Py);if(E&&(E=E(t,c))){j0(u,E,n,h);break e}T&&T(t,p,c),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Sd(p,"number",p.value)}switch(T=c?Us(c):window,t){case"focusin":(Gp(T)||T.contentEditable==="true")&&(Ls=T,Id=c,Za=null);break;case"focusout":Za=Id=Ls=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,qp(u,n,h);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":qp(u,n,h)}var A;if(bf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Is?V0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(B0&&n.locale!=="ko"&&(Is||R!=="onCompositionStart"?R==="onCompositionEnd"&&Is&&(A=z0()):(hr=h,Sf="value"in hr?hr.value:hr.textContent,Is=!0)),T=cc(c,R),0<T.length&&(R=new Bp(R,t,null,n,h),u.push({event:R,listeners:T}),A?R.data=A:(A=H0(n),A!==null&&(R.data=A)))),(A=My?wy(t,n):by(t,n))&&(c=cc(c,"onBeforeInput"),0<c.length&&(h=new Bp("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:c}),h.data=A))}ev(u,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(t,n),s!=null&&i.unshift(po(t,s,r)),s=ao(t,e),s!=null&&i.push(po(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ao(n,s),l!=null&&a.unshift(po(n,l,o))):r||(l=ao(n,s),l!=null&&a.push(po(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ky=/\r\n?/g,zy=/\u0000|\uFFFD/g;function Jp(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(zy,"")}function tl(t,e,n){if(e=Jp(e),Jp(t)!==e&&n)throw Error(pe(425))}function uc(){}var Fd=null,Ud=null;function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,By=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(Hy)}:kd;function Hy(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ma=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ma,mo="__reactProps$"+ma,Yi="__reactContainer$"+ma,zd="__reactEvents$"+ma,jy="__reactListeners$"+ma,Gy="__reactHandles$"+ma;function Wr(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[Ei])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[Ei]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function kc(t){return t[mo]||null}var Bd=[],Os=-1;function Rr(t){return{current:t}}function St(t){0>Os||(t.current=Bd[Os],Bd[Os]=null,Os--)}function _t(t,e){Os++,Bd[Os]=t.current,t.current=e}var Er={},pn=Rr(Er),Rn=Rr(!1),es=Er;function Js(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(t){return t=t.childContextTypes,t!=null}function dc(){St(Rn),St(pn)}function nm(t,e,n){if(pn.current!==Er)throw Error(pe(168));_t(pn,e),_t(Rn,n)}function nv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,A_(t)||"Unknown",r));return At({},n,i)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,es=pn.current,_t(pn,t),_t(Rn,Rn.current),!0}function im(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=nv(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,St(Rn),St(pn),_t(pn,t)):St(Rn),_t(Rn,n)}var Hi=null,zc=!1,yu=!1;function iv(t){Hi===null?Hi=[t]:Hi.push(t)}function Wy(t){zc=!0,iv(t)}function Pr(){if(!yu&&Hi!==null){yu=!0;var t=0,e=pt;try{var n=Hi;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,zc=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),A0(vf,Pr),r}finally{pt=e,yu=!1}}return null}var ks=[],zs=0,fc=null,pc=0,Jn=[],ei=0,ts=null,ji=1,Gi="";function Br(t,e){ks[zs++]=pc,ks[zs++]=fc,fc=t,pc=e}function rv(t,e,n){Jn[ei++]=ji,Jn[ei++]=Gi,Jn[ei++]=ts,ts=t;var i=ji;t=Gi;var r=32-vi(i)-1;i&=~(1<<r),n+=1;var s=32-vi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ji=1<<32-vi(e)+r|n<<r|i,Gi=s+t}else ji=1<<s|n<<r|i,Gi=t}function Tf(t){t.return!==null&&(Br(t,1),rv(t,1,0))}function Cf(t){for(;t===fc;)fc=ks[--zs],ks[zs]=null,pc=ks[--zs],ks[zs]=null;for(;t===ts;)ts=Jn[--ei],Jn[ei]=null,Gi=Jn[--ei],Jn[ei]=null,ji=Jn[--ei],Jn[ei]=null}var Xn=null,Gn=null,wt=!1,pi=null;function sv(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xn=t,Gn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xn=t,Gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:ji,overflow:Gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xn=t,Gn=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hd(t){if(wt){var e=Gn;if(e){var n=e;if(!rm(t,e)){if(Vd(t))throw Error(pe(418));e=_r(n.nextSibling);var i=Xn;e&&rm(t,e)?sv(i,n):(t.flags=t.flags&-4097|2,wt=!1,Xn=t)}}else{if(Vd(t))throw Error(pe(418));t.flags=t.flags&-4097|2,wt=!1,Xn=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xn=t}function nl(t){if(t!==Xn)return!1;if(!wt)return sm(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Od(t.type,t.memoizedProps)),e&&(e=Gn)){if(Vd(t))throw av(),Error(pe(418));for(;e;)sv(t,e),e=_r(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gn=null}}else Gn=Xn?_r(t.stateNode.nextSibling):null;return!0}function av(){for(var t=Gn;t;)t=_r(t.nextSibling)}function ea(){Gn=Xn=null,wt=!1}function Af(t){pi===null?pi=[t]:pi.push(t)}var Xy=Qi.ReactCurrentBatchConfig;function Pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function am(t){var e=t._init;return e(t._payload)}function ov(t){function e(d,g){if(t){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=wr(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,_,M){return g===null||g.tag!==6?(g=Cu(_,d.mode,M),g.return=d,g):(g=r(g,_),g.return=d,g)}function l(d,g,_,M){var E=_.type;return E===Ds?h(d,g,_.props.children,M,_.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&am(E)===g.type)?(M=r(g,_.props),M.ref=Pa(d,g,_),M.return=d,M):(M=Yl(_.type,_.key,_.props,null,d.mode,M),M.ref=Pa(d,g,_),M.return=d,M)}function c(d,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Au(_,d.mode,M),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function h(d,g,_,M,E){return g===null||g.tag!==7?(g=Qr(_,d.mode,M,E),g.return=d,g):(g=r(g,_),g.return=d,g)}function u(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Cu(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:return _=Yl(g.type,g.key,g.props,null,d.mode,_),_.ref=Pa(d,null,g),_.return=d,_;case Ns:return g=Au(g,d.mode,_),g.return=d,g;case ar:var M=g._init;return u(d,M(g._payload),_)}if(Ha(g)||Ea(g))return g=Qr(g,d.mode,_,null),g.return=d,g;il(d,g)}return null}function p(d,g,_,M){var E=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:o(d,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xo:return _.key===E?l(d,g,_,M):null;case Ns:return _.key===E?c(d,g,_,M):null;case ar:return E=_._init,p(d,g,E(_._payload),M)}if(Ha(_)||Ea(_))return E!==null?null:h(d,g,_,M,null);il(d,_)}return null}function m(d,g,_,M,E){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(_)||null,o(g,d,""+M,E);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xo:return d=d.get(M.key===null?_:M.key)||null,l(g,d,M,E);case Ns:return d=d.get(M.key===null?_:M.key)||null,c(g,d,M,E);case ar:var T=M._init;return m(d,g,_,T(M._payload),E)}if(Ha(M)||Ea(M))return d=d.get(_)||null,h(g,d,M,E,null);il(g,M)}return null}function x(d,g,_,M){for(var E=null,T=null,A=g,R=g=0,w=null;A!==null&&R<_.length;R++){A.index>R?(w=A,A=null):w=A.sibling;var b=p(d,A,_[R],M);if(b===null){A===null&&(A=w);break}t&&A&&b.alternate===null&&e(d,A),g=s(b,g,R),T===null?E=b:T.sibling=b,T=b,A=w}if(R===_.length)return n(d,A),wt&&Br(d,R),E;if(A===null){for(;R<_.length;R++)A=u(d,_[R],M),A!==null&&(g=s(A,g,R),T===null?E=A:T.sibling=A,T=A);return wt&&Br(d,R),E}for(A=i(d,A);R<_.length;R++)w=m(A,d,R,_[R],M),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?R:w.key),g=s(w,g,R),T===null?E=w:T.sibling=w,T=w);return t&&A.forEach(function(L){return e(d,L)}),wt&&Br(d,R),E}function S(d,g,_,M){var E=Ea(_);if(typeof E!="function")throw Error(pe(150));if(_=E.call(_),_==null)throw Error(pe(151));for(var T=E=null,A=g,R=g=0,w=null,b=_.next();A!==null&&!b.done;R++,b=_.next()){A.index>R?(w=A,A=null):w=A.sibling;var L=p(d,A,b.value,M);if(L===null){A===null&&(A=w);break}t&&A&&L.alternate===null&&e(d,A),g=s(L,g,R),T===null?E=L:T.sibling=L,T=L,A=w}if(b.done)return n(d,A),wt&&Br(d,R),E;if(A===null){for(;!b.done;R++,b=_.next())b=u(d,b.value,M),b!==null&&(g=s(b,g,R),T===null?E=b:T.sibling=b,T=b);return wt&&Br(d,R),E}for(A=i(d,A);!b.done;R++,b=_.next())b=m(A,d,R,b.value,M),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?R:b.key),g=s(b,g,R),T===null?E=b:T.sibling=b,T=b);return t&&A.forEach(function(H){return e(d,H)}),wt&&Br(d,R),E}function v(d,g,_,M){if(typeof _=="object"&&_!==null&&_.type===Ds&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Xo:e:{for(var E=_.key,T=g;T!==null;){if(T.key===E){if(E=_.type,E===Ds){if(T.tag===7){n(d,T.sibling),g=r(T,_.props.children),g.return=d,d=g;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&am(E)===T.type){n(d,T.sibling),g=r(T,_.props),g.ref=Pa(d,T,_),g.return=d,d=g;break e}n(d,T);break}else e(d,T);T=T.sibling}_.type===Ds?(g=Qr(_.props.children,d.mode,M,_.key),g.return=d,d=g):(M=Yl(_.type,_.key,_.props,null,d.mode,M),M.ref=Pa(d,g,_),M.return=d,d=M)}return a(d);case Ns:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Au(_,d.mode,M),g.return=d,d=g}return a(d);case ar:return T=_._init,v(d,g,T(_._payload),M)}if(Ha(_))return x(d,g,_,M);if(Ea(_))return S(d,g,_,M);il(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,_),g.return=d,d=g):(n(d,g),g=Cu(_,d.mode,M),g.return=d,d=g),a(d)):n(d,g)}return v}var ta=ov(!0),lv=ov(!1),mc=Rr(null),gc=null,Bs=null,Rf=null;function Pf(){Rf=Bs=gc=null}function Nf(t){var e=mc.current;St(mc),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){gc=t,Rf=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(gc===null)throw Error(pe(308));Bs=t,gc.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Xr=null;function Df(t){Xr===null?Xr=[t]:Xr.push(t)}function cv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Df(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Df(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}function om(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;a=0,h=c=l=null,o=s;do{var p=o.lane,m=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,S=o;switch(p=e,m=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){u=x.call(m,u,p);break e}u=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,p=typeof x=="function"?x.call(m,u,p):x,p==null)break e;u=At({},u,p);break e;case 2:or=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else m={eventTime:m,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=u):h=h.next=m,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=a,t.lanes=a,t.memoizedState=u}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var Uo={},Pi=Rr(Uo),go=Rr(Uo),vo=Rr(Uo);function $r(t){if(t===Uo)throw Error(pe(174));return t}function Lf(t,e){switch(_t(vo,e),_t(go,t),_t(Pi,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wd(e,t)}St(Pi),_t(Pi,e)}function na(){St(Pi),St(go),St(vo)}function dv(t){$r(vo.current);var e=$r(Pi.current),n=wd(e,t.type);e!==n&&(_t(go,t),_t(Pi,n))}function Ff(t){go.current===t&&(St(Pi),St(go))}var Tt=Rr(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function Uf(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var jl=Qi.ReactCurrentDispatcher,Mu=Qi.ReactCurrentBatchConfig,ns=0,Ct=null,Vt=null,Xt=null,_c=!1,Qa=!1,xo=0,$y=0;function on(){throw Error(pe(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function kf(t,e,n,i,r,s){if(ns=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?Zy:Qy,t=n(i,r),Qa){s=0;do{if(Qa=!1,xo=0,25<=s)throw Error(pe(301));s+=1,Xt=Vt=null,e.updateQueue=null,jl.current=Jy,t=n(i,r)}while(Qa)}if(jl.current=yc,e=Vt!==null&&Vt.next!==null,ns=0,Xt=Vt=Ct=null,_c=!1,e)throw Error(pe(300));return t}function zf(){var t=xo!==0;return xo=0,t}function wi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Ct.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function oi(){if(Vt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Xt===null?Ct.memoizedState:Xt.next;if(e!==null)Xt=e,Vt=t;else{if(t===null)throw Error(pe(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Xt===null?Ct.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function _o(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=oi(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((ns&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=i):l=l.next=u,Ct.lanes|=h,is|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,_i(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bu(t){var e=oi(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);_i(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hv(){}function fv(t,e){var n=Ct,i=oi(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Bf(gv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,yo(9,mv.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(pe(349));ns&30||pv(n,e,r)}return r}function pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mv(t,e,n,i){e.value=n,e.getSnapshot=i,vv(e)&&xv(t)}function gv(t,e,n){return n(function(){vv(e)&&xv(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function xv(t){var e=qi(t,1);e!==null&&xi(e,t,1,-1)}function cm(t){var e=wi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=Ky.bind(null,Ct,t),[e.memoizedState,t]}function yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _v(){return oi().memoizedState}function Gl(t,e,n,i){var r=wi();Ct.flags|=t,r.memoizedState=yo(1|e,n,void 0,i===void 0?null:i)}function Bc(t,e,n,i){var r=oi();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var a=Vt.memoizedState;if(s=a.destroy,i!==null&&Of(i,a.deps)){r.memoizedState=yo(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=yo(1|e,n,s,i)}function um(t,e){return Gl(8390656,8,t,e)}function Bf(t,e){return Bc(2048,8,t,e)}function yv(t,e){return Bc(4,2,t,e)}function Sv(t,e){return Bc(4,4,t,e)}function Mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wv(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,Mv.bind(null,e,t),n)}function Vf(){}function bv(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ev(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tv(t,e,n){return ns&21?(_i(n,e)||(n=N0(),Ct.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function Yy(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Mu.transition;Mu.transition={};try{t(!1),e()}finally{pt=n,Mu.transition=i}}function Cv(){return oi().memoizedState}function qy(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Av(t))Rv(e,n);else if(n=cv(t,e,n,i),n!==null){var r=yn();xi(n,t,i,r),Pv(n,e,i)}}function Ky(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(t))Rv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,_i(o,a)){var l=e.interleaved;l===null?(r.next=r,Df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=cv(t,e,r,i),n!==null&&(r=yn(),xi(n,t,i,r),Pv(n,e,i))}}function Av(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function Rv(t,e){Qa=_c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}var yc={readContext:ai,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Zy={readContext:ai,useCallback:function(t,e){return wi().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,Mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=wi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=wi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qy.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=wi();return t={current:t},e.memoizedState=t},useState:cm,useDebugValue:Vf,useDeferredValue:function(t){return wi().memoizedState=t},useTransition:function(){var t=cm(!1),e=t[0];return t=Yy.bind(null,t[1]),wi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=wi();if(wt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),qt===null)throw Error(pe(349));ns&30||pv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,um(gv.bind(null,i,s,t),[t]),i.flags|=2048,yo(9,mv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=wi(),e=qt.identifierPrefix;if(wt){var n=Gi,i=ji;n=(i&~(1<<32-vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$y++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qy={readContext:ai,useCallback:bv,useContext:ai,useEffect:Bf,useImperativeHandle:wv,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:Ev,useReducer:wu,useRef:_v,useState:function(){return wu(_o)},useDebugValue:Vf,useDeferredValue:function(t){var e=oi();return Tv(e,Vt.memoizedState,t)},useTransition:function(){var t=wu(_o)[0],e=oi().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:Cv,unstable_isNewReconciler:!1},Jy={readContext:ai,useCallback:bv,useContext:ai,useEffect:Bf,useImperativeHandle:wv,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:Ev,useReducer:bu,useRef:_v,useState:function(){return bu(_o)},useDebugValue:Vf,useDeferredValue:function(t){var e=oi();return Vt===null?e.memoizedState=t:Tv(e,Vt.memoizedState,t)},useTransition:function(){var t=bu(_o)[0],e=oi().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:Cv,unstable_isNewReconciler:!1};function hi(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Mr(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(xi(e,t,r,i),Hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Mr(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(xi(e,t,r,i),Hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=Mr(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(xi(e,t,i,n),Hl(e,t,i))}};function dm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ho(n,i)||!ho(r,s):!0}function Nv(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Pn(e)?es:pn.current,i=e.contextTypes,s=(i=i!=null)?Js(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function Wd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},If(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Pn(e)?es:pn.current,r.context=Js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vc.enqueueReplaceState(r,r.state,null),vc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,e){try{var n="",i=e;do n+=C_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function Dv(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Mc||(Mc=!0,nh=i),Xd(t,e)},n}function Iv(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new eS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=pS.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var tS=Qi.ReactCurrentOwner,An=!1;function _n(t,e,n,i){e.child=t===null?lv(e,null,n,i):ta(e,t.child,n,i)}function gm(t,e,n,i,r){n=n.render;var s=e.ref;return Ys(e,r),i=kf(t,e,n,i,s,r),n=zf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(wt&&n&&Tf(e),e.flags|=1,_n(t,e,i,r),e.child)}function vm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lv(t,e,s,i,r)):(t=Yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(a,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ho(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return $d(t,e,n,i,r)}function Fv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Hs,Vn),Vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Hs,Vn),Vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(Hs,Vn),Vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(Hs,Vn),Vn|=i;return _n(t,e,r,n),e.child}function Uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $d(t,e,n,i,r){var s=Pn(n)?es:pn.current;return s=Js(e,s),Ys(e,r),n=kf(t,e,n,i,s,r),i=zf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(wt&&i&&Tf(e),e.flags|=1,_n(t,e,n,r),e.child)}function xm(t,e,n,i,r){if(Pn(n)){var s=!0;hc(e)}else s=!1;if(Ys(e,r),e.stateNode===null)Wl(t,e),Nv(e,n,i),Wd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=Pn(n)?es:pn.current,c=Js(e,c));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&hm(e,a,i,c),or=!1;var p=e.memoizedState;a.state=p,vc(e,i,a,r),l=e.memoizedState,o!==i||p!==l||Rn.current||or?(typeof h=="function"&&(Gd(e,n,h,i),l=e.memoizedState),(o=or||dm(e,n,o,i,p,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,uv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:hi(e.type,o),a.props=c,u=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Pn(n)?es:pn.current,l=Js(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||p!==l)&&hm(e,a,i,l),or=!1,p=e.memoizedState,a.state=p,vc(e,i,a,r);var x=e.memoizedState;o!==u||p!==x||Rn.current||or?(typeof m=="function"&&(Gd(e,n,m,i),x=e.memoizedState),(c=or||dm(e,n,c,i,p,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Yd(t,e,n,i,s,r)}function Yd(t,e,n,i,r,s){Uv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&im(e,n,!1),Ki(t,e,s);i=e.stateNode,tS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ta(e,t.child,null,s),e.child=ta(e,null,o,s)):_n(t,e,o,s),e.memoizedState=i.state,r&&im(e,n,!0),e.child}function Ov(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),Lf(t,e.containerInfo)}function _m(t,e,n,i,r){return ea(),Af(r),e.flags|=256,_n(t,e,n,i),e.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Tt,r&1),t===null)return Hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Gc(a,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kd(n),e.memoizedState=qd,t):Hf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return nS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=wr(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Kd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=qd,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Hf(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rl(t,e,n,i){return i!==null&&Af(i),ta(e,t.child,null,n),t=Hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Eu(Error(pe(422))),rl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ta(e,t.child,null,a),e.child.memoizedState=Kd(a),e.memoizedState=qd,s);if(!(e.mode&1))return rl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(pe(419)),i=Eu(s,i,void 0),rl(t,e,a,i)}if(o=(a&t.childLanes)!==0,An||o){if(i=qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),xi(i,t,r,-1))}return Yf(),i=Eu(Error(pe(421))),rl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Gn=_r(r.nextSibling),Xn=e,wt=!0,pi=null,t!==null&&(Jn[ei++]=ji,Jn[ei++]=Gi,Jn[ei++]=ts,ji=t.id,Gi=t.overflow,ts=e),e=Hf(e,i.children),e.flags|=4096,e)}function ym(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jd(t.return,e,n)}function Tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,n,e);else if(t.tag===19)ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tu(e,!0,n,null,s);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iS(t,e,n){switch(e.tag){case 3:Ov(e),ea();break;case 5:dv(e);break;case 1:Pn(e.type)&&hc(e);break;case 4:Lf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?kv(t,e,n):(_t(Tt,Tt.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);_t(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return Ki(t,e,n)}var Bv,Zd,Vv,Hv;Bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zd=function(){};Vv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(Pi.current);var s=null;switch(n){case"input":r=_d(t,r),i=_d(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Md(t,r),i=Md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=uc)}bd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Na(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rS(t,e,n){var i=e.pendingProps;switch(Cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return Pn(e.type)&&dc(),ln(e),null;case 3:return i=e.stateNode,na(),St(Rn),St(pn),Uf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pi!==null&&(sh(pi),pi=null))),Zd(t,e),ln(e),null;case 5:Ff(e);var r=$r(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Vv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return ln(e),null}if(t=$r(Pi.current),nl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[mo]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Ga.length;r++)yt(Ga[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Rp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Np(i,s),yt("invalid",i)}bd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,o,t),r=["children",""+o]):ro.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(n){case"input":$o(i),Pp(i,s,!0);break;case"textarea":$o(i),Dp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=uc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ei]=e,t[mo]=i,Bv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ed(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ga.length;r++)yt(Ga[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":Rp(t,i),r=_d(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),yt("invalid",t);break;case"textarea":Np(t,i),r=Md(t,i),yt("invalid",t);break;default:r=i}bd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?_0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&hf(t,s,l,a))}switch(n){case"input":$o(t),Pp(t,i,!1);break;case"textarea":$o(t),Dp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=$r(vo.current),$r(Pi.current),nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Xn,t!==null))switch(t.tag){case 3:tl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return ln(e),null;case 13:if(St(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Gn!==null&&e.mode&1&&!(e.flags&128))av(),ea(),e.flags|=98560,s=!1;else if(s=nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[Ei]=e}else ea(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),s=!1}else pi!==null&&(sh(pi),pi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Ht===0&&(Ht=3):Yf())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return na(),Zd(t,e),t===null&&fo(e.stateNode.containerInfo),ln(e),null;case 10:return Nf(e.type._context),ln(e),null;case 17:return Pn(e.type)&&dc(),ln(e),null;case 19:if(St(Tt),s=e.memoizedState,s===null)return ln(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Na(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xc(t),a!==null){for(e.flags|=128,Na(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>ra&&(e.flags|=128,i=!0,Na(s,!1),e.lanes=4194304)}else{if(!i)if(t=xc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return ln(e),null}else 2*Ft()-s.renderingStartTime>ra&&n!==1073741824&&(e.flags|=128,i=!0,Na(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Tt.current,_t(Tt,i?n&1|2:n&1),e):(ln(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Vn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function sS(t,e){switch(Cf(e),e.tag){case 1:return Pn(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return na(),St(Rn),St(pn),Uf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ff(e),null;case 13:if(St(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Tt),null;case 4:return na(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var sl=!1,dn=!1,aS=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function Qd(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Sm=!1;function oS(t,e){if(Fd=oc,t=$0(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,u=t,p=null;t:for(;;){for(var m;u!==n||r!==0&&u.nodeType!==3||(o=a+r),u!==s||i!==0&&u.nodeType!==3||(l=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(m=u.firstChild)!==null;)p=u,u=m;for(;;){if(u===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++h===i&&(l=a),(m=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:t,selectionRange:n},oc=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,v=x.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:hi(e.type,S),v);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(M){Nt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return x=Sm,Sm=!1,x}function Ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qd(e,n,s)}r=r.next}while(r!==i)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jv(t){var e=t.alternate;e!==null&&(t.alternate=null,jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[mo],delete e[zd],delete e[jy],delete e[Gy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gv(t){return t.tag===5||t.tag===3||t.tag===4}function Mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(i!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}function th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}var Kt=null,fi=!1;function Ji(t,e,n){for(n=n.child;n!==null;)Wv(t,e,n),n=n.sibling}function Wv(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(Lc,n)}catch{}switch(n.tag){case 5:dn||Vs(n,e);case 6:var i=Kt,r=fi;Kt=null,Ji(t,e,n),Kt=i,fi=r,Kt!==null&&(fi?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(fi?(t=Kt,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),co(t)):_u(Kt,n.stateNode));break;case 4:i=Kt,r=fi,Kt=n.stateNode.containerInfo,fi=!0,Ji(t,e,n),Kt=i,fi=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qd(n,e,a),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!dn&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Nt(n,e,o)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(dn=(i=dn)||n.memoizedState!==null,Ji(t,e,n),dn=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aS),e.forEach(function(i){var r=gS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function li(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Kt=o.stateNode,fi=!1;break e;case 3:Kt=o.stateNode.containerInfo,fi=!0;break e;case 4:Kt=o.stateNode.containerInfo,fi=!0;break e}o=o.return}if(Kt===null)throw Error(pe(160));Wv(s,a,r),Kt=null,fi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,t),e=e.sibling}function Xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(e,t),Si(t),i&4){try{Ja(3,t,t.return),Hc(3,t)}catch(S){Nt(t,t.return,S)}try{Ja(5,t,t.return)}catch(S){Nt(t,t.return,S)}}break;case 1:li(e,t),Si(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(li(e,t),Si(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{so(r,"")}catch(S){Nt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),Ed(o,a);var c=Ed(o,s);for(a=0;a<l.length;a+=2){var h=l[a],u=l[a+1];h==="style"?_0(r,u):h==="dangerouslySetInnerHTML"?v0(r,u):h==="children"?so(r,u):hf(r,h,u,c)}switch(o){case"input":yd(r,s);break;case"textarea":m0(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Gs(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?Gs(r,!!s.multiple,s.defaultValue,!0):Gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(S){Nt(t,t.return,S)}}break;case 6:if(li(e,t),Si(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Nt(t,t.return,S)}}break;case 3:if(li(e,t),Si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(S){Nt(t,t.return,S)}break;case 4:li(e,t),Si(t);break;case 13:li(e,t),Si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=Ft())),i&4&&wm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(c=dn)||h,li(e,t),dn=c):li(e,t),Si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Pe=t,h=t.child;h!==null;){for(u=Pe=h;Pe!==null;){switch(p=Pe,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ja(4,p,p.return);break;case 1:Vs(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){Nt(i,n,S)}}break;case 5:Vs(p,p.return);break;case 22:if(p.memoizedState!==null){Em(u);continue}}m!==null?(m.return=p,Pe=m):Em(u)}h=h.sibling}e:for(h=null,u=t;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=x0("display",a))}catch(S){Nt(t,t.return,S)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(S){Nt(t,t.return,S)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:li(e,t),Si(t),i&4&&wm(t);break;case 21:break;default:li(e,t),Si(t)}}function Si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gv(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=Mm(t);th(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Mm(t);eh(t,o,a);break;default:throw Error(pe(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lS(t,e,n){Pe=t,$v(t)}function $v(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||sl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||dn;o=sl;var c=dn;if(sl=a,(dn=l)&&!c)for(Pe=r;Pe!==null;)a=Pe,l=a.child,a.tag===22&&a.memoizedState!==null?Tm(r):l!==null?(l.return=a,Pe=l):Tm(r);for(;s!==null;)Pe=s,$v(s),s=s.sibling;Pe=r,sl=o,dn=c}bm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):bm(t)}}function bm(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||Hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:hi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&co(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}dn||e.flags&512&&Jd(e)}catch(p){Nt(e,e.return,p)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Em(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Tm(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{Jd(e)}catch(l){Nt(e,s,l)}break;case 5:var a=e.return;try{Jd(e)}catch(l){Nt(e,a,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){Pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Pe=o;break}Pe=e.return}}var cS=Math.ceil,Sc=Qi.ReactCurrentDispatcher,jf=Qi.ReactCurrentOwner,ri=Qi.ReactCurrentBatchConfig,at=0,qt=null,zt=null,en=0,Vn=0,Hs=Rr(0),Ht=0,So=null,is=0,jc=0,Gf=0,eo=null,Tn=null,Wf=0,ra=1/0,Vi=null,Mc=!1,nh=null,Sr=null,al=!1,fr=null,wc=0,to=0,ih=null,Xl=-1,$l=0;function yn(){return at&6?Ft():Xl!==-1?Xl:Xl=Ft()}function Mr(t){return t.mode&1?at&2&&en!==0?en&-en:Xy.transition!==null?($l===0&&($l=N0()),$l):(t=pt,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function xi(t,e,n,i){if(50<to)throw to=0,ih=null,Error(pe(185));Io(t,n,i),(!(at&2)||t!==qt)&&(t===qt&&(!(at&2)&&(jc|=n),Ht===4&&ur(t,en)),Nn(t,i),n===1&&at===0&&!(e.mode&1)&&(ra=Ft()+500,zc&&Pr()))}function Nn(t,e){var n=t.callbackNode;X_(t,e);var i=ac(t,t===qt?en:0);if(i===0)n!==null&&Fp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Fp(n),e===1)t.tag===0?Wy(Cm.bind(null,t)):iv(Cm.bind(null,t)),Vy(function(){!(at&6)&&Pr()}),n=null;else{switch(D0(i)){case 1:n=vf;break;case 4:n=R0;break;case 16:n=sc;break;case 536870912:n=P0;break;default:n=sc}n=tx(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(Xl=-1,$l=0,at&6)throw Error(pe(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=ac(t,t===qt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bc(t,i);else{e=i;var r=at;at|=2;var s=Kv();(qt!==t||en!==e)&&(Vi=null,ra=Ft()+500,Zr(t,e));do try{hS();break}catch(o){qv(t,o)}while(!0);Pf(),Sc.current=s,at=r,zt!==null?e=0:(qt=null,en=0,e=Ht)}if(e!==0){if(e===2&&(r=Pd(t),r!==0&&(i=r,e=rh(t,r))),e===1)throw n=So,Zr(t,0),ur(t,i),Nn(t,Ft()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!uS(r)&&(e=bc(t,i),e===2&&(s=Pd(t),s!==0&&(i=s,e=rh(t,s))),e===1))throw n=So,Zr(t,0),ur(t,i),Nn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Vr(t,Tn,Vi);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=Wf+500-Ft(),10<e)){if(ac(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=kd(Vr.bind(null,t,Tn,Vi),e);break}Vr(t,Tn,Vi);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-vi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cS(i/1960))-i,10<i){t.timeoutHandle=kd(Vr.bind(null,t,Tn,Vi),i);break}Vr(t,Tn,Vi);break;case 5:Vr(t,Tn,Vi);break;default:throw Error(pe(329))}}}return Nn(t,Ft()),t.callbackNode===n?Yv.bind(null,t):null}function rh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=bc(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&sh(e)),t}function sh(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function uS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Gf,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vi(e),i=1<<n;t[n]=-1,e&=~i}}function Cm(t){if(at&6)throw Error(pe(327));qs();var e=ac(t,0);if(!(e&1))return Nn(t,Ft()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var i=Pd(t);i!==0&&(e=i,n=rh(t,i))}if(n===1)throw n=So,Zr(t,0),ur(t,e),Nn(t,Ft()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,Tn,Vi),Nn(t,Ft()),null}function Xf(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(ra=Ft()+500,zc&&Pr())}}function rs(t){fr!==null&&fr.tag===0&&!(at&6)&&qs();var e=at;at|=1;var n=ri.transition,i=pt;try{if(ri.transition=null,pt=1,t)return t()}finally{pt=i,ri.transition=n,at=e,!(at&6)&&Pr()}}function $f(){Vn=Hs.current,St(Hs)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,By(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(Cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dc();break;case 3:na(),St(Rn),St(pn),Uf();break;case 5:Ff(i);break;case 4:na();break;case 13:St(Tt);break;case 19:St(Tt);break;case 10:Nf(i.type._context);break;case 22:case 23:$f()}n=n.return}if(qt=t,zt=t=wr(t.current,null),en=Vn=e,Ht=0,So=null,Gf=jc=is=0,Tn=eo=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Xr=null}return t}function qv(t,e){do{var n=zt;try{if(Pf(),jl.current=yc,_c){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_c=!1}if(ns=0,Xt=Vt=Ct=null,Qa=!1,xo=0,jf.current=null,n===null||n.return===null){Ht=1,So=e,zt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=pm(a);if(m!==null){m.flags&=-257,mm(m,a,o,s,e),m.mode&1&&fm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){fm(s,c,e),Yf();break e}l=Error(pe(426))}}else if(wt&&o.mode&1){var v=pm(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),mm(v,a,o,s,e),Af(ia(l,o));break e}}s=l=ia(l,o),Ht!==4&&(Ht=2),eo===null?eo=[s]:eo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Dv(s,l,e);om(s,d);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Sr===null||!Sr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Iv(s,o,e);om(s,M);break e}}s=s.return}while(s!==null)}Qv(n)}catch(E){e=E,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Kv(){var t=Sc.current;return Sc.current=yc,t===null?yc:t}function Yf(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),qt===null||!(is&268435455)&&!(jc&268435455)||ur(qt,en)}function bc(t,e){var n=at;at|=2;var i=Kv();(qt!==t||en!==e)&&(Vi=null,Zr(t,e));do try{dS();break}catch(r){qv(t,r)}while(!0);if(Pf(),at=n,Sc.current=i,zt!==null)throw Error(pe(261));return qt=null,en=0,Ht}function dS(){for(;zt!==null;)Zv(zt)}function hS(){for(;zt!==null&&!O_();)Zv(zt)}function Zv(t){var e=ex(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,e===null?Qv(t):zt=e,jf.current=null}function Qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sS(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,zt=null;return}}else if(n=rS(n,e,Vn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Ht===0&&(Ht=5)}function Vr(t,e,n){var i=pt,r=ri.transition;try{ri.transition=null,pt=1,fS(t,e,n,i)}finally{ri.transition=r,pt=i}return null}function fS(t,e,n,i){do qs();while(fr!==null);if(at&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($_(t,s),t===qt&&(zt=qt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,tx(sc,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ri.transition,ri.transition=null;var a=pt;pt=1;var o=at;at|=4,jf.current=null,oS(t,n),Xv(n,t),Iy(Ud),oc=!!Fd,Ud=Fd=null,t.current=n,lS(n),k_(),at=o,pt=a,ri.transition=s}else t.current=n;if(al&&(al=!1,fr=t,wc=r),s=t.pendingLanes,s===0&&(Sr=null),V_(n.stateNode),Nn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Mc)throw Mc=!1,t=nh,nh=null,t;return wc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===ih?to++:(to=0,ih=t):to=0,Pr(),null}function qs(){if(fr!==null){var t=D0(wc),e=ri.transition,n=pt;try{if(ri.transition=null,pt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,wc=0,at&6)throw Error(pe(331));var r=at;for(at|=4,Pe=t.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Pe=c;Pe!==null;){var h=Pe;switch(h.tag){case 0:case 11:case 15:Ja(8,h,s)}var u=h.child;if(u!==null)u.return=h,Pe=u;else for(;Pe!==null;){h=Pe;var p=h.sibling,m=h.return;if(jv(h),h===c){Pe=null;break}if(p!==null){p.return=m,Pe=p;break}Pe=m}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var g=t.current;for(Pe=g;Pe!==null;){a=Pe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Pe=_;else e:for(a=g;Pe!==null;){if(o=Pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hc(9,o)}}catch(E){Nt(o,o.return,E)}if(o===a){Pe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Pe=M;break e}Pe=o.return}}if(at=r,Pr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(Lc,t)}catch{}i=!0}return i}finally{pt=n,ri.transition=e}}return!1}function Am(t,e,n){e=ia(n,e),e=Dv(t,e,1),t=yr(t,e,1),e=yn(),t!==null&&(Io(t,1,e),Nn(t,e))}function Nt(t,e,n){if(t.tag===3)Am(t,t,n);else for(;e!==null;){if(e.tag===3){Am(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=ia(n,t),t=Iv(e,t,1),e=yr(e,t,1),t=yn(),e!==null&&(Io(e,1,t),Nn(e,t));break}}e=e.return}}function pS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(en&n)===n&&(Ht===4||Ht===3&&(en&130023424)===en&&500>Ft()-Wf?Zr(t,0):Gf|=n),Nn(t,e)}function Jv(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=yn();t=qi(t,e),t!==null&&(Io(t,e,n),Nn(t,n))}function mS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jv(t,n)}function gS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),Jv(t,n)}var ex;ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,iS(t,e,n);An=!!(t.flags&131072)}else An=!1,wt&&e.flags&1048576&&rv(e,pc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=Js(e,pn.current);Ys(e,n),r=kf(null,e,i,t,r,n);var s=zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,If(e),r.updater=Vc,e.stateNode=r,r._reactInternals=e,Wd(e,i,t,n),e=Yd(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&Tf(e),_n(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xS(i),t=hi(i,t),r){case 0:e=$d(null,e,i,t,n);break e;case 1:e=xm(null,e,i,t,n);break e;case 11:e=gm(null,e,i,t,n);break e;case 14:e=vm(null,e,i,hi(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),$d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),xm(t,e,i,r,n);case 3:e:{if(Ov(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,uv(t,e),vc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ia(Error(pe(423)),e),e=_m(t,e,i,n,r);break e}else if(i!==r){r=ia(Error(pe(424)),e),e=_m(t,e,i,n,r);break e}else for(Gn=_r(e.stateNode.containerInfo.firstChild),Xn=e,wt=!0,pi=null,n=lv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ea(),i===r){e=Ki(t,e,n);break e}_n(t,e,i,n)}e=e.child}return e;case 5:return dv(e),t===null&&Hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Od(i,r)?a=null:s!==null&&Od(i,s)&&(e.flags|=32),Uv(t,e),_n(t,e,a,n),e.child;case 6:return t===null&&Hd(e),null;case 13:return kv(t,e,n);case 4:return Lf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ta(e,null,i,n):_n(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),gm(t,e,i,r,n);case 7:return _n(t,e,e.pendingProps,n),e.child;case 8:return _n(t,e,e.pendingProps.children,n),e.child;case 12:return _n(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(mc,i._currentValue),i._currentValue=a,s!==null)if(_i(s.value,a)){if(s.children===r.children&&!Rn.current){e=Ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(pe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),jd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}_n(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,n),r=ai(r),i=i(r),e.flags|=1,_n(t,e,i,n),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),vm(t,e,i,r,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Wl(t,e),e.tag=1,Pn(i)?(t=!0,hc(e)):t=!1,Ys(e,n),Nv(e,i,r),Wd(e,i,r,n),Yd(null,e,i,!0,t,n);case 19:return zv(t,e,n);case 22:return Fv(t,e,n)}throw Error(pe(156,e.tag))};function tx(t,e){return A0(t,e)}function vS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new vS(t,e,n,i)}function qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xS(t){if(typeof t=="function")return qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")qf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ds:return Qr(n.children,r,s,e);case ff:a=8,r|=8;break;case md:return t=ni(12,n,e,r|2),t.elementType=md,t.lanes=s,t;case gd:return t=ni(13,n,e,r),t.elementType=gd,t.lanes=s,t;case vd:return t=ni(19,n,e,r),t.elementType=vd,t.lanes=s,t;case d0:return Gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:a=10;break e;case u0:a=9;break e;case pf:a=11;break e;case mf:a=14;break e;case ar:a=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=ni(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function Gc(t,e,n,i){return t=ni(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function Au(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _S(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kf(t,e,n,i,r,s,a,o,l){return t=new _S(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),t}function yS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nx(t){if(!t)return Er;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(Pn(n))return nv(t,n,e)}return e}function ix(t,e,n,i,r,s,a,o,l){return t=Kf(n,i,!0,t,r,s,a,o,l),t.context=nx(null),n=t.current,i=yn(),r=Mr(n),s=Wi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,Io(t,r,i),Nn(t,i),t}function Wc(t,e,n,i){var r=e.current,s=yn(),a=Mr(r);return n=nx(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,a),t!==null&&(xi(t,r,a,s),Hl(t,r,a)),a}function Ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Rm(t,e),(t=t.alternate)&&Rm(t,e)}function SS(){return null}var rx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qf(t){this._internalRoot=t}Xc.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));Wc(t,e,null,null)};Xc.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){Wc(null,t,null,null)}),e[Yi]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=F0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&O0(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function MS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ec(a);s.call(c)}}var a=ix(e,i,t,0,null,!1,!1,"",Pm);return t._reactRootContainer=a,t[Yi]=a.current,fo(t.nodeType===8?t.parentNode:t),rs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ec(l);o.call(c)}}var l=Kf(t,0,!1,null,null,!1,!1,"",Pm);return t._reactRootContainer=l,t[Yi]=l.current,fo(t.nodeType===8?t.parentNode:t),rs(function(){Wc(e,l,n,i)}),l}function Yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ec(a);o.call(l)}}Wc(e,a,t,r)}else a=MS(n,e,t,r,i);return Ec(a)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(xf(e,n|1),Nn(e,Ft()),!(at&6)&&(ra=Ft()+500,Pr()))}break;case 13:rs(function(){var i=qi(t,1);if(i!==null){var r=yn();xi(i,t,1,r)}}),Zf(t,1)}};_f=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=yn();xi(e,t,134217728,n)}Zf(t,134217728)}};L0=function(t){if(t.tag===13){var e=Mr(t),n=qi(t,e);if(n!==null){var i=yn();xi(n,t,e,i)}Zf(t,e)}};F0=function(){return pt};U0=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};Cd=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=kc(i);if(!r)throw Error(pe(90));f0(i),yd(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};M0=Xf;w0=rs;var wS={usingClientEntryPoint:!1,Events:[Fo,Us,kc,y0,S0,Xf]},Da={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bS={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T0(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||SS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Lc=ol.inject(bS),Ri=ol}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(pe(200));return yS(t,e,null,n)};Yn.createRoot=function(t,e){if(!Jf(t))throw Error(pe(299));var n=!1,i="",r=rx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kf(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,fo(t.nodeType===8?t.parentNode:t),new Qf(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=T0(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return rs(t)};Yn.hydrate=function(t,e,n){if(!$c(e))throw Error(pe(200));return Yc(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=rx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ix(e,null,t,1,n??null,r,!1,s,a),t[Yi]=e.current,fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xc(e)};Yn.render=function(t,e,n){if(!$c(e))throw Error(pe(200));return Yc(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!$c(t))throw Error(pe(40));return t._reactRootContainer?(rs(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};Yn.unstable_batchedUpdates=Xf;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$c(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Yc(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(t){console.error(t)}}sx(),s0.exports=Yn;var ES=s0.exports,ax,Nm=ES;ax=Nm.createRoot,Nm.hydrateRoot;class ep{constructor(){this.audioContext=null,this.sourceNode=null,this.analyserNode=null,this.gainNode=null,this.audioBuffer=null,this.streamDestination=null,this._isPlaying=!1,this._currentTime=0,this._duration=0,this._volume=.7,this.startTime=0,this.pauseTime=0,this.onPlayCallback=null,this.onPauseCallback=null,this.onEndedCallback=null}async initialize(){this.audioContext||(this.audioContext=new AudioContext,this.analyserNode=this.audioContext.createAnalyser(),this.analyserNode.fftSize=2048,this.analyserNode.smoothingTimeConstant=0,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=this._volume,this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination)),this.audioContext.state==="suspended"&&await this.audioContext.resume()}async loadAudioFile(e){await this.initialize(),this.stop();const n=await e.arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(n),this._duration=this.audioBuffer.duration,this._currentTime=0}async play(){if(!this.audioBuffer||!this.audioContext||!this.analyserNode)return;await this.initialize(),this.sourceNode&&(this.sourceNode.stop(),this.sourceNode.disconnect()),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.audioBuffer,this.sourceNode.connect(this.analyserNode),this.sourceNode.onended=()=>{this._isPlaying&&(this._isPlaying=!1,this._currentTime=0,this.onEndedCallback&&this.onEndedCallback())};const e=this.pauseTime>0?this.pauseTime:0;this.sourceNode.start(0,e),this.startTime=this.audioContext.currentTime-e,this.pauseTime=0,this._isPlaying=!0,this.onPlayCallback&&this.onPlayCallback()}pause(){this._isPlaying&&this.sourceNode&&this.audioContext&&(this.pauseTime=this.audioContext.currentTime-this.startTime,this.sourceNode.stop(),this._isPlaying=!1,this.onPauseCallback&&this.onPauseCallback())}stop(){this.sourceNode&&(this._isPlaying&&this.sourceNode.stop(),this.sourceNode.disconnect(),this.sourceNode=null),this._isPlaying=!1,this._currentTime=0,this.pauseTime=0,this.startTime=0}seek(e){const n=this._isPlaying;this.stop(),this.pauseTime=Math.max(0,Math.min(e,this._duration)),this._currentTime=this.pauseTime,n&&this.play()}setVolume(e){this._volume=Math.max(0,Math.min(1,e)),this.gainNode&&(this.gainNode.gain.value=this._volume)}updateCurrentTime(){this._isPlaying&&this.audioContext?(this._currentTime=this.audioContext.currentTime-this.startTime,this._currentTime>=this._duration&&(this._currentTime=this._duration)):!this._isPlaying&&this.pauseTime>0&&(this._currentTime=this.pauseTime)}get isPlaying(){return this._isPlaying}get currentTime(){return this._currentTime}get duration(){return this._duration}get volume(){return this._volume}getAnalyserNode(){return this.analyserNode}createAudioStream(){return!this.audioContext||!this.gainNode?null:(this.streamDestination||(this.streamDestination=this.audioContext.createMediaStreamDestination(),this.gainNode.connect(this.streamDestination)),this.streamDestination.stream)}disposeAudioStream(){this.streamDestination&&this.gainNode&&(this.gainNode.disconnect(this.streamDestination),this.streamDestination=null)}onPlay(e){this.onPlayCallback=e}onPause(e){this.onPauseCallback=e}onEnded(e){this.onEndedCallback=e}cleanup(){this.stop(),this.disposeAudioStream(),this.gainNode&&(this.gainNode.disconnect(),this.gainNode=null),this.analyserNode&&(this.analyserNode.disconnect(),this.analyserNode=null),this.audioContext&&(this.audioContext.close(),this.audioContext=null),this.audioBuffer=null}}class tp{constructor(e,n){this.smoothedEnergy=0,this.smoothedSub=0,this.smoothedBass=0,this.smoothedMids=0,this.smoothedHighs=0,this.lastPeakTime=0,this.peakTriggerActive=!1,this.analyserNode=e,this.sampleRate=n,this.binCount=e.frequencyBinCount,this.dataArray=new Uint8Array(this.binCount)}frequencyToBin(e){return Math.round(e*this.binCount/(this.sampleRate/2))}getBandEnergy(e,n){const i=this.frequencyToBin(e),r=this.frequencyToBin(n);let s=0,a=0;for(let o=i;o<=r&&o<this.binCount;o++)s+=this.dataArray[o],a++;return a>0?s/a/255:0}getOverallEnergy(){let e=0;for(let n=0;n<this.binCount;n++){const i=this.dataArray[n]/255;e+=i*i}return Math.sqrt(e/this.binCount)}analyse(e){this.analyserNode.getByteFrequencyData(this.dataArray);const n=this.getOverallEnergy(),i=this.getBandEnergy(20,60),r=this.getBandEnergy(60,250),s=this.getBandEnergy(250,2e3),a=this.getBandEnergy(2e3,12e3),o=e.smoothing;this.smoothedEnergy=this.smoothedEnergy*o+n*(1-o),this.smoothedSub=this.smoothedSub*o+i*(1-o),this.smoothedBass=this.smoothedBass*o+r*(1-o),this.smoothedMids=this.smoothedMids*o+s*(1-o),this.smoothedHighs=this.smoothedHighs*o+a*(1-o);const l=e.sensitivity,c=Math.min(1,this.smoothedEnergy*l*1.2),h=Math.min(1,this.smoothedSub*l*.7),u=Math.min(1,this.smoothedBass*l*.8),p=Math.min(1,this.smoothedMids*l*.7),m=Math.min(1,this.smoothedHighs*l*1),x=performance.now();let S=!1;return u>e.peakThreshold&&!this.peakTriggerActive?x-this.lastPeakTime>e.peakCooldown&&(S=!0,this.peakTriggerActive=!0,this.lastPeakTime=x):u<e.peakThreshold*.8&&(this.peakTriggerActive=!1),{energy:c,sub:h,bass:u,mids:p,highs:m,peakTrigger:S,timestamp:x}}reset(){this.smoothedEnergy=0,this.smoothedSub=0,this.smoothedBass=0,this.smoothedMids=0,this.smoothedHighs=0,this.lastPeakTime=0,this.peakTriggerActive=!1}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="182",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TS=0,Dm=1,CS=2,ql=1,AS=2,Wa=3,Tr=0,Dn=1,Ti=2,Ni=0,Jr=1,Mo=2,Im=3,Lm=4,RS=5,Hr=100,PS=101,NS=102,DS=103,IS=104,LS=200,FS=201,US=202,OS=203,ah=204,oh=205,kS=206,zS=207,BS=208,VS=209,HS=210,jS=211,GS=212,WS=213,XS=214,lh=0,ch=1,uh=2,sa=3,dh=4,hh=5,fh=6,ph=7,ox=0,$S=1,YS=2,Di=0,lx=1,cx=2,ux=3,dx=4,hx=5,fx=6,px=7,mx=300,ss=301,aa=302,mh=303,gh=304,qc=306,vh=1e3,Wn=1001,xh=1002,Jt=1003,qS=1004,ll=1005,bt=1006,Ru=1007,Yr=1008,jn=1009,gx=1010,vx=1011,wo=1012,ip=1013,Ii=1014,Ci=1015,si=1016,rp=1017,sp=1018,bo=1020,xx=35902,_x=35899,yx=1021,ap=1022,ii=1023,Zi=1026,qr=1027,Sx=1028,op=1029,oa=1030,lp=1031,cp=1033,Kl=33776,Zl=33777,Ql=33778,Jl=33779,_h=35840,yh=35841,Sh=35842,Mh=35843,wh=36196,bh=37492,Eh=37496,Th=37488,Ch=37489,Ah=37490,Rh=37491,Ph=37808,Nh=37809,Dh=37810,Ih=37811,Lh=37812,Fh=37813,Uh=37814,Oh=37815,kh=37816,zh=37817,Bh=37818,Vh=37819,Hh=37820,jh=37821,Gh=36492,Wh=36494,Xh=36495,$h=36283,Yh=36284,qh=36285,Kh=36286,KS=3200,ZS=0,QS=1,dr="",En="srgb",la="srgb-linear",Tc="linear",ft="srgb",ms=7680,Fm=519,JS=512,e1=513,t1=514,up=515,n1=516,i1=517,dp=518,r1=519,Um=35044,Om="300 es",Ai=2e3,Cc=2001;function Mx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function s1(){const t=Ac("canvas");return t.style.display="block",t}const km={};function zm(...t){const e="THREE."+t.shift();console.log(e,...t)}function We(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ct(...t){const e="THREE."+t.shift();console.error(e,...t)}function Eo(...t){const e=t.join(" ");e in km||(km[e]=!0,We(...t))}function a1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}let ga=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bm=1234567;const no=Math.PI/180,To=180/Math.PI;function va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function hp(t,e){return(t%e+e)%e}function o1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function l1(t,e,n){return t!==e?(n-t)/(e-t):0}function io(t,e,n){return(1-n)*t+n*e}function c1(t,e,n,i){return io(t,e,1-Math.exp(-n*i))}function u1(t,e=1){return e-Math.abs(hp(t,e*2)-e)}function d1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function f1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function p1(t,e){return t+Math.random()*(e-t)}function m1(t){return t*(.5-Math.random())}function g1(t){t!==void 0&&(Bm=t);let e=Bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v1(t){return t*no}function x1(t){return t*To}function _1(t){return(t&t-1)===0&&t!==0}function y1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function S1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function M1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),p=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*p,o*c);break;case"YZY":t.set(l*p,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*p,o*h,o*c);break;case"XZX":t.set(o*h,l*x,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*x,o*c);break;case"ZYZ":t.set(l*x,l*m,o*h,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const w1={DEG2RAD:no,RAD2DEG:To,generateUUID:va,clamp:Ze,euclideanModulo:hp,mapLinear:o1,inverseLerp:l1,lerp:io,damp:c1,pingpong:u1,smoothstep:d1,smootherstep:h1,randInt:f1,randFloat:p1,randFloatSpread:m1,seededRandom:g1,degToRad:v1,radToDeg:x1,isPowerOfTwo:_1,ceilPowerOfTwo:y1,floorPowerOfTwo:S1,setQuaternionFromProperEuler:M1,normalize:vn,denormalize:Ps};class Ie{constructor(e=0,n=0){Ie.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],p=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o>=1){e[n+0]=p,e[n+1]=m,e[n+2]=x,e[n+3]=S;return}if(u!==S||l!==p||c!==m||h!==x){let v=l*p+c*m+h*x+u*S;v<0&&(p=-p,m=-m,x=-x,S=-S,v=-v);let d=1-o;if(v<.9995){const g=Math.acos(v),_=Math.sin(g);d=Math.sin(d*g)/_,o=Math.sin(o*g)/_,l=l*d+p*o,c=c*d+m*o,h=h*d+x*o,u=u*d+S*o}else{l=l*d+p*o,c=c*d+m*o,h=h*d+x*o,u=u*d+S*o;const g=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=g,c*=g,h*=g,u*=g}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],p=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*u+l*m-c*p,e[n+1]=l*x+h*p+c*u-o*m,e[n+2]=c*x+h*m+o*p-l*u,e[n+3]=h*x-o*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),p=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=p*h*u+c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u-p*m*x;break;case"YXZ":this._x=p*h*u+c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u+p*m*x;break;case"ZXY":this._x=p*h*u-c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u-p*m*x;break;case"ZYX":this._x=p*h*u-c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u+p*m*x;break;case"YZX":this._x=p*h*u+c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u-p*m*x;break;case"XZY":this._x=p*h*u-c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u+p*m*x;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],p=i+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new N,Vm=new as;class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],x=i[8],S=r[0],v=r[3],d=r[6],g=r[1],_=r[4],M=r[7],E=r[2],T=r[5],A=r[8];return s[0]=a*S+o*g+l*E,s[3]=a*v+o*_+l*T,s[6]=a*d+o*M+l*A,s[1]=c*S+h*g+u*E,s[4]=c*v+h*_+u*T,s[7]=c*d+h*M+u*A,s[2]=p*S+m*g+x*E,s[5]=p*v+m*_+x*T,s[8]=p*d+m*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*s,m=c*s-a*l,x=n*u+i*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=u*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new Ye,Hm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jm=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b1(){const t={enabled:!0,workingColorSpace:la,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=Ks(r.r),r.g=Ks(r.g),r.b=Ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?Tc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[la]:{primaries:e,whitePoint:i,transfer:Tc,toXYZ:Hm,fromXYZ:jm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Hm,fromXYZ:jm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),t}const st=b1();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class E1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=Ac("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T1=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Du(r[a].image)):s.push(Du(r[a]))}else s=Du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?E1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let C1=0;const Iu=new N;class tn extends ga{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Wn,r=Wn,s=bt,a=Yr,o=ii,l=jn,c=tn.DEFAULT_ANISOTROPY,h=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=va(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=mx;tn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],x=l[9],S=l[2],v=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-S)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+S)<.1&&Math.abs(x+v)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(m+1)/2,E=(d+1)/2,T=(h+p)/4,A=(u+S)/4,R=(x+v)/4;return _>M&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=R/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-x)*(v-x)+(u-S)*(u-S)+(p-h)*(p-h));return Math.abs(g)<.001&&(g=1),this.x=(v-x)/g,this.y=(u-S)/g,this.z=(p-h)/g,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A1 extends ga{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new tn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new fp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends A1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wx extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R1 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),ul.subVectors(this.max,Ia),vs.subVectors(e.a,Ia),xs.subVectors(e.b,Ia),_s.subVectors(e.c,Ia),er.subVectors(xs,vs),tr.subVectors(_s,xs),Ir.subVectors(vs,_s);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Ir.z,Ir.y,er.z,0,-er.x,tr.z,0,-tr.x,Ir.z,0,-Ir.x,-er.y,er.x,0,-tr.y,tr.x,0,-Ir.y,Ir.x,0];return!Lu(n,vs,xs,_s,ul)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,vs,xs,_s,ul))?!1:(dl.crossVectors(er,tr),n=[dl.x,dl.y,dl.z],Lu(n,vs,xs,_s,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,cl=new Oo,vs=new N,xs=new N,_s=new N,er=new N,tr=new N,Ir=new N,Ia=new N,ul=new N,dl=new N,Lr=new N;function Lu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Lr.fromArray(t,s);const o=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),h=i.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const P1=new Oo,La=new N,Fu=new N;class ko{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):P1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const n=La.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(La,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(Fu)),this.expandByPoint(La.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new N,Uu=new N,hl=new N,nr=new N,Ou=new N,fl=new N,ku=new N;class Kc{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uu.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Uu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(hl),o=nr.dot(this.direction),l=-nr.dot(hl),c=nr.lengthSq(),h=Math.abs(1-a*a);let u,p,m,x;if(h>0)if(u=a*l-o,p=a*o-l,x=s*h,u>=0)if(p>=-x)if(p<=x){const S=1/h;u*=S,p*=S,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=s,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-x?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+p*(p+2*l)+c):p<=x?(u=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+p*(p+2*l)+c);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uu).addScaledVector(hl,p),m}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){Ou.subVectors(n,e),fl.subVectors(i,e),ku.crossVectors(Ou,fl);let a=this.direction.dot(ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,e);const l=o*this.direction.dot(fl.crossVectors(nr,fl));if(l<0)return null;const c=o*this.direction.dot(Ou.cross(nr));if(c<0||l+c>a)return null;const h=-o*nr.dot(ku);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,h,u,p,m,x,S,v){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,u,p,m,x,S,v)}set(e,n,i,r,s,a,o,l,c,h,u,p,m,x,S,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=x,d[11]=S,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const p=a*h,m=a*u,x=o*h,S=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=m+x*c,n[5]=p-S*c,n[9]=-o*l,n[2]=S-p*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,x=c*h,S=c*u;n[0]=p+S*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=S+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,x=c*h,S=c*u;n[0]=p-S*o,n[4]=-a*u,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=S-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,m=a*u,x=o*h,S=o*u;n[0]=l*h,n[4]=x*c-m,n[8]=p*c+S,n[1]=l*u,n[5]=S*c+p,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*h,n[4]=S-p*u,n[8]=x*u+m,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*u+x,n[10]=p-S*u}else if(e.order==="XZY"){const p=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=p*u+S,n[5]=a*h,n[9]=m*u-x,n[2]=x*u-m,n[6]=o*h,n[10]=S*u+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N1,e,D1)}lookAt(e,n,i){const r=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ir.crossVectors(i,zn),ir.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ir.crossVectors(i,zn)),ir.normalize(),pl.crossVectors(zn,ir),r[0]=ir.x,r[4]=pl.x,r[8]=zn.x,r[1]=ir.y,r[5]=pl.y,r[9]=zn.y,r[2]=ir.z,r[6]=pl.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],x=i[2],S=i[6],v=i[10],d=i[14],g=i[3],_=i[7],M=i[11],E=i[15],T=r[0],A=r[4],R=r[8],w=r[12],b=r[1],L=r[5],H=r[9],B=r[13],I=r[2],j=r[6],X=r[10],G=r[14],O=r[3],$=r[7],q=r[11],ne=r[15];return s[0]=a*T+o*b+l*I+c*O,s[4]=a*A+o*L+l*j+c*$,s[8]=a*R+o*H+l*X+c*q,s[12]=a*w+o*B+l*G+c*ne,s[1]=h*T+u*b+p*I+m*O,s[5]=h*A+u*L+p*j+m*$,s[9]=h*R+u*H+p*X+m*q,s[13]=h*w+u*B+p*G+m*ne,s[2]=x*T+S*b+v*I+d*O,s[6]=x*A+S*L+v*j+d*$,s[10]=x*R+S*H+v*X+d*q,s[14]=x*w+S*B+v*G+d*ne,s[3]=g*T+_*b+M*I+E*O,s[7]=g*A+_*L+M*j+E*$,s[11]=g*R+_*H+M*X+E*q,s[15]=g*w+_*B+M*G+E*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],x=e[3],S=e[7],v=e[11],d=e[15],g=l*m-c*p,_=o*m-c*u,M=o*p-l*u,E=a*m-c*h,T=a*p-l*h,A=a*u-o*h;return n*(S*g-v*_+d*M)-i*(x*g-v*E+d*T)+r*(x*_-S*E+d*A)-s*(x*M-S*T+v*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],x=e[12],S=e[13],v=e[14],d=e[15],g=u*v*c-S*p*c+S*l*m-o*v*m-u*l*d+o*p*d,_=x*p*c-h*v*c-x*l*m+a*v*m+h*l*d-a*p*d,M=h*S*c-x*u*c+x*o*m-a*S*m-h*o*d+a*u*d,E=x*u*l-h*S*l-x*o*p+a*S*p+h*o*v-a*u*v,T=n*g+i*_+r*M+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(S*p*s-u*v*s-S*r*m+i*v*m+u*r*d-i*p*d)*A,e[2]=(o*v*s-S*l*s+S*r*c-i*v*c-o*r*d+i*l*d)*A,e[3]=(u*l*s-o*p*s-u*r*c+i*p*c+o*r*m-i*l*m)*A,e[4]=_*A,e[5]=(h*v*s-x*p*s+x*r*m-n*v*m-h*r*d+n*p*d)*A,e[6]=(x*l*s-a*v*s-x*r*c+n*v*c+a*r*d-n*l*d)*A,e[7]=(a*p*s-h*l*s+h*r*c-n*p*c-a*r*m+n*l*m)*A,e[8]=M*A,e[9]=(x*u*s-h*S*s-x*i*m+n*S*m+h*i*d-n*u*d)*A,e[10]=(a*S*s-x*o*s+x*i*c-n*S*c-a*i*d+n*o*d)*A,e[11]=(h*o*s-a*u*s-h*i*c+n*u*c+a*i*m-n*o*m)*A,e[12]=E*A,e[13]=(h*S*r-x*u*r+x*i*p-n*S*p-h*i*v+n*u*v)*A,e[14]=(x*o*r-a*S*r-x*i*l+n*S*l+a*i*v-n*o*v)*A,e[15]=(a*u*r-h*o*r+h*i*l-n*u*l-a*i*p+n*o*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,u=o+o,p=s*c,m=s*h,x=s*u,S=a*h,v=a*u,d=o*u,g=l*c,_=l*h,M=l*u,E=i.x,T=i.y,A=i.z;return r[0]=(1-(S+d))*E,r[1]=(m+M)*E,r[2]=(x-_)*E,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(p+d))*T,r[6]=(v+g)*T,r[7]=0,r[8]=(x+_)*A,r[9]=(v-g)*A,r[10]=(1-(p+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=ys.set(r[0],r[1],r[2]).length();const a=ys.set(r[4],r[5],r[6]).length(),o=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ui.copy(this);const c=1/s,h=1/a,u=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,n.setFromRotationMatrix(ui),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ai,l=!1){const c=this.elements,h=2*s/(n-e),u=2*s/(i-r),p=(n+e)/(n-e),m=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===Ai)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Cc)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ai,l=!1){const c=this.elements,h=2/(n-e),u=2/(i-r),p=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===Ai)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===Cc)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new N,ui=new Et,N1=new N(0,0,0),D1=new N(1,1,1),ir=new N,pl=new N,zn=new N,Gm=new Et,Wm=new as;class Li{constructor(e=0,n=0,i=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";let bx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I1=0;const Xm=new N,Ss=new as,ki=new Et,ml=new N,Fa=new N,L1=new N,F1=new as,$m=new N(1,0,0),Ym=new N(0,1,0),qm=new N(0,0,1),Km={type:"added"},U1={type:"removed"},Ms={type:"childadded",child:null},zu={type:"childremoved",child:null};class fn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new N,n=new Li,i=new as,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ye}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,n){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Fa,ml,this.up):ki.lookAt(ml,Fa,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(ki),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(U1),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,F1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new N(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new N,zi=new N,Bu=new N,Bi=new N,ws=new N,bs=new N,Zm=new N,Vu=new N,Hu=new N,ju=new N,Gu=new Dt,Wu=new Dt,Xu=new Dt;class mi{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),zi.subVectors(i,n),Bu.subVectors(e,n);const a=di.dot(di),o=di.dot(zi),l=di.dot(Bu),c=zi.dot(zi),h=zi.dot(Bu),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,x=(a*h-o*l)*p;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Gu.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),Gu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,i),Xu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gu,s.x),a.addScaledVector(Wu,s.y),a.addScaledVector(Xu,s.z),a}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),zi.subVectors(e,n),di.cross(zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return mi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ws.subVectors(r,i),bs.subVectors(s,i),Vu.subVectors(e,i);const l=ws.dot(Vu),c=bs.dot(Vu);if(l<=0&&c<=0)return n.copy(i);Hu.subVectors(e,r);const h=ws.dot(Hu),u=bs.dot(Hu);if(h>=0&&u<=h)return n.copy(r);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(ws,a);ju.subVectors(e,s);const m=ws.dot(ju),x=bs.dot(ju);if(x>=0&&m<=x)return n.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(bs,o);const v=h*x-m*u;if(v<=0&&u-h>=0&&m-x>=0)return Zm.subVectors(s,r),o=(u-h)/(u-h+(m-x)),n.copy(r).addScaledVector(Zm,o);const d=1/(v+S+p);return a=S*d,o=p*d,n.copy(i).addScaledVector(ws,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=hp(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$u(a,s,e+1/3),this.g=$u(a,s,e),this.b=$u(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=Ex[e.toLowerCase()];return i!==void 0?this.setHex(i,n):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return st.workingToColorSpace(un.copy(this),e),Math.round(Ze(un.r*255,0,255))*65536+Math.round(Ze(un.g*255,0,255))*256+Math.round(Ze(un.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(un.copy(this),n);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=En){st.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,r=un.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(gl);const i=io(rr.h,gl.h,n),r=io(rr.s,gl.s,n),s=io(rr.l,gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Xe;Xe.NAMES=Ex;let O1=0;class xa extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Jr,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){We(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pp extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new N,vl=new Ie;let k1=0;class hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Um,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Um&&(e.usage=this.usage),e}}class Tx extends hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cx extends hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Lt extends hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let z1=0;const Zn=new Et,Yu=new fn,Es=new N,Bn=new Oo,Ua=new Oo,Wt=new N;class It extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mx(e)?Cx:Tx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Bn.min,Ua.min),Bn.expandByPoint(Wt),Wt.addVectors(Bn.max,Ua.max),Bn.expandByPoint(Wt)):(Bn.expandByPoint(Ua.min),Bn.expandByPoint(Ua.max))}Bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),Wt.add(Es)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new N,l[R]=new N;const c=new N,h=new N,u=new N,p=new Ie,m=new Ie,x=new Ie,S=new N,v=new N;function d(R,w,b){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,b),h.sub(c),u.sub(c),m.sub(p),x.sub(p);const L=1/(m.x*x.y-x.x*m.y);isFinite(L)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(L),v.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(L),o[R].add(S),o[w].add(S),o[b].add(S),l[R].add(v),l[w].add(v),l[b].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,w=g.length;R<w;++R){const b=g[R],L=b.start,H=b.count;for(let B=L,I=L+H;B<I;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new N,M=new N,E=new N,T=new N;function A(R){E.fromBufferAttribute(r,R),T.copy(E);const w=o[R];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),M.crossVectors(T,w);const L=M.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,w=g.length;R<w;++R){const b=g[R],L=b.start,H=b.count;for(let B=L,I=L+H;B<I;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),S=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,v),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,x=0;for(let S=0,v=l.length;S<v;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let d=0;d<h;d++)p[x++]=c[m++]}return new hn(p,h,u)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new It,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qm=new Et,Fr=new Kc,xl=new ko,Jm=new N,_l=new N,yl=new N,Sl=new N,qu=new N,Ml=new N,eg=new N,wl=new N;class Ln extends fn{constructor(e=new It,n=new pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(qu.fromBufferAttribute(u,e),a?Ml.addScaledVector(qu,h):Ml.addScaledVector(qu.sub(n),h))}n.add(Ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(xl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(xl,Jm)===null||Fr.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Qm.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Qm),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=p.length;x<S;x++){const v=p[x],d=a[v.materialIndex],g=Math.max(v.start,m.start),_=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let M=g,E=_;M<E;M+=3){const T=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);r=bl(this,d,e,i,c,h,u,T,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let v=x,d=S;v<d;v+=3){const g=o.getX(v),_=o.getX(v+1),M=o.getX(v+2);r=bl(this,a,e,i,c,h,u,g,_,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=p.length;x<S;x++){const v=p[x],d=a[v.materialIndex],g=Math.max(v.start,m.start),_=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let M=g,E=_;M<E;M+=3){const T=M,A=M+1,R=M+2;r=bl(this,d,e,i,c,h,u,T,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let v=x,d=S;v<d;v+=3){const g=v,_=v+1,M=v+2;r=bl(this,a,e,i,c,h,u,g,_,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function B1(t,e,n,i,r,s,a,o){let l;if(e.side===Dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Tr,o),l===null)return null;wl.copy(o),wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wl);return c<n.near||c>n.far?null:{distance:c,point:wl.clone(),object:t}}function bl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,_l),t.getVertexPosition(l,yl),t.getVertexPosition(c,Sl);const h=B1(t,e,n,i,_l,yl,Sl,eg);if(h){const u=new N;mi.getBarycoord(eg,_l,yl,Sl,u),r&&(h.uv=mi.getInterpolatedAttribute(r,o,l,c,u,new Ie)),s&&(h.uv1=mi.getInterpolatedAttribute(s,o,l,c,u,new Ie)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new N,materialIndex:0};mi.getNormal(_l,yl,Sl,p.normal),h.face=p,h.barycoord=u}return h}class Cr extends It{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function x(S,v,d,g,_,M,E,T,A,R,w){const b=M/A,L=E/R,H=M/2,B=E/2,I=T/2,j=A+1,X=R+1;let G=0,O=0;const $=new N;for(let q=0;q<X;q++){const ne=q*L-B;for(let se=0;se<j;se++){const Ne=se*b-H;$[S]=Ne*g,$[v]=ne*_,$[d]=I,c.push($.x,$.y,$.z),$[S]=0,$[v]=0,$[d]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(se/A),u.push(1-q/R),G+=1}}for(let q=0;q<R;q++)for(let ne=0;ne<A;ne++){const se=p+ne+j*q,Ne=p+ne+j*(q+1),Ue=p+(ne+1)+j*(q+1),je=p+(ne+1)+j*q;l.push(se,Ne,je),l.push(Ne,Ue,je),O+=6}o.addGroup(m,O,w),m+=O,p+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ca(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=ca(t[n]);for(const r in i)e[r]=i[r]}return e}function V1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ax(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Rc={clone:ca,merge:xn};var H1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H1,this.fragmentShader=j1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=V1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rx extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new N,tg=new Ie,ng=new Ie;class Yt extends Rx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,tg,ng),n.subVectors(ng,tg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,Cs=1;class G1 extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(Ts,Cs,e,n);r.layers=this.layers,this.add(r);const s=new Yt(Ts,Cs,e,n);s.layers=this.layers,this.add(s);const a=new Yt(Ts,Cs,e,n);a.layers=this.layers,this.add(a);const o=new Yt(Ts,Cs,e,n);o.layers=this.layers,this.add(o);const l=new Yt(Ts,Cs,e,n);l.layers=this.layers,this.add(l);const c=new Yt(Ts,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(u,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Px extends tn{constructor(e=[],n=ss,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nx extends In{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Px(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Ni});s.uniforms.tEquirect.value=n;const a=new Ln(r,s),o=n.minFilter;return n.minFilter===Yr&&(n.minFilter=bt),new G1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class js extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W1={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const v=n.getJointPose(S,i),d=this._getHandJoint(c,S);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mp extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class X1 extends tn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Jt,h=Jt,u,p){super(null,a,o,l,c,h,r,s,u,p),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new N,$1=new N,Y1=new Ye;class lr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zu.subVectors(i,n).cross($1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Y1.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ko,q1=new Ie(.5,.5),El=new N;class gp{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],p=s[6],m=s[7],x=s[8],S=s[9],v=s[10],d=s[11],g=s[12],_=s[13],M=s[14],E=s[15];if(r[0].setComponents(c-a,m-h,d-x,E-g).normalize(),r[1].setComponents(c+a,m+h,d+x,E+g).normalize(),r[2].setComponents(c+o,m+u,d+S,E+_).normalize(),r[3].setComponents(c-o,m-u,d-S,E-_).normalize(),i)r[4].setComponents(l,p,v,M).normalize(),r[5].setComponents(c-l,m-p,d-v,E-M).normalize();else if(r[4].setComponents(c-l,m-p,d-v,E-M).normalize(),n===Ai)r[5].setComponents(c+l,m+p,d+v,E+M).normalize();else if(n===Cc)r[5].setComponents(l,p,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const n=q1.distanceTo(e.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zh extends xa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new N,Nc=new N,ig=new Et,Oa=new Kc,Tl=new ko,Qu=new N,rg=new N;class As extends fn{constructor(e=new It,n=new Zh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Pc.fromBufferAttribute(n,r-1),Nc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Pc.distanceTo(Nc);e.setAttribute("lineDistance",new Lt(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=s,e.ray.intersectsSphere(Tl)===!1)return;ig.copy(r).invert(),Oa.copy(e.ray).applyMatrix4(ig);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let S=m,v=x-1;S<v;S+=c){const d=h.getX(S),g=h.getX(S+1),_=Cl(this,e,Oa,l,d,g,S);_&&n.push(_)}if(this.isLineLoop){const S=h.getX(x-1),v=h.getX(m),d=Cl(this,e,Oa,l,S,v,x-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let S=m,v=x-1;S<v;S+=c){const d=Cl(this,e,Oa,l,S,S+1,S);d&&n.push(d)}if(this.isLineLoop){const S=Cl(this,e,Oa,l,x-1,m,x-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Pc.fromBufferAttribute(o,r),Nc.fromBufferAttribute(o,s),n.distanceSqToSegment(Pc,Nc,Qu,rg)>i)return;Qu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Qu);if(!(c<e.near||c>e.far))return{distance:c,point:rg.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class K1 extends xa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sg=new Et,Qh=new Kc,Al=new ko,Rl=new N;class Co extends fn{constructor(e=new It,n=new K1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;sg.copy(r).invert(),Qh.copy(e.ray).applyMatrix4(sg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=p,S=m;x<S;x++){const v=c.getX(x);Rl.fromBufferAttribute(u,v),ag(Rl,v,l,r,e,n,this)}}else{const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=p,S=m;x<S;x++)Rl.fromBufferAttribute(u,x),ag(Rl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ag(t,e,n,i,r,s,a){const o=Qh.distanceSqToPoint(t);if(o<n){const l=new N;Qh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Z1 extends tn{constructor(e,n,i,r,s=bt,a=bt,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ao extends tn{constructor(e,n,i=Ii,r,s,a,o=Jt,l=Jt,c,h=Zi,u=1){if(h!==Zi&&h!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:n,depth:u};super(p,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Q1 extends Ao{constructor(e,n=Ii,i=ss,r,s,a=Jt,o=Jt,l,c=Zi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dx extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ro extends It{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],p=[],m=[];let x=0;const S=[],v=i/2;let d=0;g(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(p,3)),this.setAttribute("uv",new Lt(m,2));function g(){const M=new N,E=new N;let T=0;const A=(n-e)/i;for(let R=0;R<=s;R++){const w=[],b=R/s,L=b*(n-e)+e;for(let H=0;H<=r;H++){const B=H/r,I=B*l+o,j=Math.sin(I),X=Math.cos(I);E.x=L*j,E.y=-b*i+v,E.z=L*X,u.push(E.x,E.y,E.z),M.set(j,A,X).normalize(),p.push(M.x,M.y,M.z),m.push(B,1-b),w.push(x++)}S.push(w)}for(let R=0;R<r;R++)for(let w=0;w<s;w++){const b=S[w][R],L=S[w+1][R],H=S[w+1][R+1],B=S[w][R+1];(e>0||w!==0)&&(h.push(b,L,B),T+=3),(n>0||w!==s-1)&&(h.push(L,H,B),T+=3)}c.addGroup(d,T,0),d+=T}function _(M){const E=x,T=new Ie,A=new N;let R=0;const w=M===!0?e:n,b=M===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,v*b,0),p.push(0,b,0),m.push(.5,.5),x++;const L=x;for(let H=0;H<=r;H++){const I=H/r*l+o,j=Math.cos(I),X=Math.sin(I);A.x=w*X,A.y=v*b,A.z=w*j,u.push(A.x,A.y,A.z),p.push(0,b,0),T.x=j*.5+.5,T.y=X*.5*b+.5,m.push(T.x,T.y),x++}for(let H=0;H<r;H++){const B=E+H,I=L+H;M===!0?h.push(I,I+1,B):h.push(I+1,I,B),R+=3}c.addGroup(d,R,M===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vp extends It{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(s.slice(),3)),this.setAttribute("uv",new Lt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new N,M=new N,E=new N;for(let T=0;T<n.length;T+=3)m(n[T+0],_),m(n[T+1],M),m(n[T+2],E),l(_,M,E,g)}function l(g,_,M,E){const T=E+1,A=[];for(let R=0;R<=T;R++){A[R]=[];const w=g.clone().lerp(M,R/T),b=_.clone().lerp(M,R/T),L=T-R;for(let H=0;H<=L;H++)H===0&&R===T?A[R][H]=w:A[R][H]=w.clone().lerp(b,H/L)}for(let R=0;R<T;R++)for(let w=0;w<2*(T-R)-1;w++){const b=Math.floor(w/2);w%2===0?(p(A[R][b+1]),p(A[R+1][b]),p(A[R][b])):(p(A[R][b+1]),p(A[R+1][b+1]),p(A[R+1][b]))}}function c(g){const _=new N;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(g),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function h(){const g=new N;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const M=v(g)/2/Math.PI+.5,E=d(g)/Math.PI+.5;a.push(M,1-E)}x(),u()}function u(){for(let g=0;g<a.length;g+=6){const _=a[g+0],M=a[g+2],E=a[g+4],T=Math.max(_,M,E),A=Math.min(_,M,E);T>.9&&A<.1&&(_<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),E<.2&&(a[g+4]+=1))}}function p(g){s.push(g.x,g.y,g.z)}function m(g,_){const M=g*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function x(){const g=new N,_=new N,M=new N,E=new N,T=new Ie,A=new Ie,R=new Ie;for(let w=0,b=0;w<s.length;w+=9,b+=6){g.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),T.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),E.copy(g).add(_).add(M).divideScalar(3);const L=v(E);S(T,b+0,g,L),S(A,b+2,_,L),S(R,b+4,M,L)}}function S(g,_,M,E){E<0&&g.x===1&&(a[_]=g.x-1),M.x===0&&M.z===0&&(a[_]=E/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vp(e.vertices,e.indices,e.radius,e.detail)}}class xp extends vp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new xp(e.radius,e.detail)}}class Hn extends It{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,p=n/l,m=[],x=[],S=[],v=[];for(let d=0;d<h;d++){const g=d*p-a;for(let _=0;_<c;_++){const M=_*u-s;x.push(M,-g,0),S.push(0,0,1),v.push(_/o),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const _=g+c*d,M=g+c*(d+1),E=g+1+c*(d+1),T=g+1+c*d;m.push(_,M,T),m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new Lt(x,3)),this.setAttribute("normal",new Lt(S,3)),this.setAttribute("uv",new Lt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ua extends It{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,p=new N,m=[],x=[],S=[],v=[];for(let d=0;d<=i;d++){const g=[],_=d/i;let M=0;d===0&&a===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let E=0;E<=n;E++){const T=E/n;u.x=-e*Math.cos(r+T*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+T*s)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),p.copy(u).normalize(),S.push(p.x,p.y,p.z),v.push(T+M,1-_),g.push(c++)}h.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const _=h[d][g+1],M=h[d][g],E=h[d+1][g],T=h[d+1][g+1];(d!==0||a>0)&&m.push(_,M,T),(d!==i-1||l<Math.PI)&&m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new Lt(x,3)),this.setAttribute("normal",new Lt(S,3)),this.setAttribute("uv",new Lt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Po extends It{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new N,u=new N,p=new N;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const S=x/r*s,v=m/i*Math.PI*2;u.x=(e+n*Math.cos(v))*Math.cos(S),u.y=(e+n*Math.cos(v))*Math.sin(S),u.z=n*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const S=(r+1)*m+x-1,v=(r+1)*(m-1)+x-1,d=(r+1)*(m-1)+x,g=(r+1)*m+x;a.push(S,v,g),a.push(v,d,g)}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class J1 extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eM extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tM extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ix extends fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ju=new Et,og=new N,lg=new N;class nM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),lg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lg),n.updateMatrixWorld(),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iM extends nM{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class rM extends Ix{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Zs extends Rx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sM extends Ix{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class aM extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class cg{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function ug(t,e,n,i){const r=oM(i);switch(n){case yx:return t*e;case Sx:return t*e/r.components*r.byteLength;case op:return t*e/r.components*r.byteLength;case oa:return t*e*2/r.components*r.byteLength;case lp:return t*e*2/r.components*r.byteLength;case ap:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case cp:return t*e*4/r.components*r.byteLength;case Kl:case Zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ql:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yh:case Mh:return Math.max(t,16)*Math.max(e,8)/4;case _h:case Sh:return Math.max(t,8)*Math.max(e,8)/2;case wh:case bh:case Th:case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Eh:case Ah:case Rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Wh:case Xh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $h:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qh:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oM(t){switch(t){case jn:case gx:return{byteLength:1,components:1};case wo:case vx:case si:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case Ii:case ip:case Ci:return{byteLength:4,components:1};case xx:case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lM(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,u=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<u.length;m++){const x=u[p],S=u[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++p,u[p]=S)}u.length=p+1;for(let m=0,x=u.length;m<x;m++){const S=u[m];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
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
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
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
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
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
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,wM=`#ifdef USE_BUMPMAP
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DM=`#define PI 3.141592653589793
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
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
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
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ew=`uniform bool receiveShadow;
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
#endif`,tw=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,nw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ow=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lw=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,cw=`#if defined( RE_IndirectDiffuse )
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
#endif`,uw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xw=`#if defined( USE_POINTS_UV )
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
#endif`,_w=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ww=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
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
#endif`,Dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ow=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$w=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Yw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qw=`#ifdef USE_SKINNING
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
#endif`,Kw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zw=`#ifdef USE_SKINNING
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
#endif`,Qw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gb=`#define DISTANCE
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
}`,vb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,bb=`#define LAMBERT
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
}`,Eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Tb=`#define MATCAP
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
}`,Cb=`#define MATCAP
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
}`,Ab=`#define NORMAL
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
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pb=`#define PHONG
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
}`,Nb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,Db=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Lb=`#define TOON
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
}`,Fb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ub=`uniform float size;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,zb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,Bb=`uniform float rotation;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:dM,alphamap_pars_fragment:hM,alphatest_fragment:fM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:vM,batching_vertex:xM,begin_vertex:_M,beginnormal_vertex:yM,bsdfs:SM,iridescence_fragment:MM,bumpmap_pars_fragment:wM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:CM,color_fragment:AM,color_pars_fragment:RM,color_pars_vertex:PM,color_vertex:NM,common:DM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:LM,displacementmap_pars_vertex:FM,displacementmap_vertex:UM,emissivemap_fragment:OM,emissivemap_pars_fragment:kM,colorspace_fragment:zM,colorspace_pars_fragment:BM,envmap_fragment:VM,envmap_common_pars_fragment:HM,envmap_pars_fragment:jM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:tw,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:$M,fog_fragment:YM,fog_pars_fragment:qM,gradientmap_pars_fragment:KM,lightmap_pars_fragment:ZM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:ew,lights_toon_fragment:nw,lights_toon_pars_fragment:iw,lights_phong_fragment:rw,lights_phong_pars_fragment:sw,lights_physical_fragment:aw,lights_physical_pars_fragment:ow,lights_fragment_begin:lw,lights_fragment_maps:cw,lights_fragment_end:uw,logdepthbuf_fragment:dw,logdepthbuf_pars_fragment:hw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:pw,map_fragment:mw,map_pars_fragment:gw,map_particle_fragment:vw,map_particle_pars_fragment:xw,metalnessmap_fragment:_w,metalnessmap_pars_fragment:yw,morphinstance_vertex:Sw,morphcolor_vertex:Mw,morphnormal_vertex:ww,morphtarget_pars_vertex:bw,morphtarget_vertex:Ew,normal_fragment_begin:Tw,normal_fragment_maps:Cw,normal_pars_fragment:Aw,normal_pars_vertex:Rw,normal_vertex:Pw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Dw,clearcoat_normal_fragment_maps:Iw,clearcoat_pars_fragment:Lw,iridescence_pars_fragment:Fw,opaque_fragment:Uw,packing:Ow,premultiplied_alpha_fragment:kw,project_vertex:zw,dithering_fragment:Bw,dithering_pars_fragment:Vw,roughnessmap_fragment:Hw,roughnessmap_pars_fragment:jw,shadowmap_pars_fragment:Gw,shadowmap_pars_vertex:Ww,shadowmap_vertex:Xw,shadowmask_pars_fragment:$w,skinbase_vertex:Yw,skinning_pars_vertex:qw,skinning_vertex:Kw,skinnormal_vertex:Zw,specularmap_fragment:Qw,specularmap_pars_fragment:Jw,tonemapping_fragment:eb,tonemapping_pars_fragment:tb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ab,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:db,cube_vert:hb,cube_frag:fb,depth_vert:pb,depth_frag:mb,distance_vert:gb,distance_frag:vb,equirect_vert:xb,equirect_frag:_b,linedashed_vert:yb,linedashed_frag:Sb,meshbasic_vert:Mb,meshbasic_frag:wb,meshlambert_vert:bb,meshlambert_frag:Eb,meshmatcap_vert:Tb,meshmatcap_frag:Cb,meshnormal_vert:Ab,meshnormal_frag:Rb,meshphong_vert:Pb,meshphong_frag:Nb,meshphysical_vert:Db,meshphysical_frag:Ib,meshtoon_vert:Lb,meshtoon_frag:Fb,points_vert:Ub,points_frag:Ob,shadow_vert:kb,shadow_frag:zb,sprite_vert:Bb,sprite_frag:Vb},be={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},bi={basic:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:xn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:xn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:xn([be.points,be.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:xn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:xn([be.common,be.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:xn([be.sprite,be.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:xn([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:xn([be.lights,be.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};bi.physical={uniforms:xn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Pl={r:0,b:0,g:0},Or=new Li,Hb=new Et;function jb(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,h,u=null,p=0,m=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?n:e).get(M)),M}function S(_){let M=!1;const E=x(_);E===null?d(o,l):E&&E.isColor&&(d(E,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(_,M){const E=x(M);E&&(E.isCubeTexture||E.mapping===qc)?(h===void 0&&(h=new Ln(new Cr(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:ca(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Or.copy(M.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(Or)),h.material.toneMapped=st.getTransfer(E.colorSpace)!==ft,(u!==E||p!==E.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,u=E,p=E.version,m=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ln(new Hn(2,2),new Ot({name:"BackgroundMaterial",uniforms:ca(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,u=E,p=E.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,M){_.getRGB(Pl,Ax(t)),i.buffers.color.setClear(Pl.r,Pl.g,Pl.b,M,a)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:S,addToRenderList:v,dispose:g}}function Gb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(b,L,H,B,I){let j=!1;const X=u(B,H,L);s!==X&&(s=X,c(s.object)),j=m(b,B,H,I),j&&x(b,B,H,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(b,L,H,B),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function h(b){return t.deleteVertexArray(b)}function u(b,L,H){const B=H.wireframe===!0;let I=i[b.id];I===void 0&&(I={},i[b.id]=I);let j=I[L.id];j===void 0&&(j={},I[L.id]=j);let X=j[B];return X===void 0&&(X=p(l()),j[B]=X),X}function p(b){const L=[],H=[],B=[];for(let I=0;I<n;I++)L[I]=0,H[I]=0,B[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:b,attributes:{},index:null}}function m(b,L,H,B){const I=s.attributes,j=L.attributes;let X=0;const G=H.getAttributes();for(const O in G)if(G[O].location>=0){const q=I[O];let ne=j[O];if(ne===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),q===void 0||q.attribute!==ne||ne&&q.data!==ne.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function x(b,L,H,B){const I={},j=L.attributes;let X=0;const G=H.getAttributes();for(const O in G)if(G[O].location>=0){let q=j[O];q===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));const ne={};ne.attribute=q,q&&q.data&&(ne.data=q.data),I[O]=ne,X++}s.attributes=I,s.attributesNum=X,s.index=B}function S(){const b=s.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function v(b){d(b,0)}function d(b,L){const H=s.newAttributes,B=s.enabledAttributes,I=s.attributeDivisors;H[b]=1,B[b]===0&&(t.enableVertexAttribArray(b),B[b]=1),I[b]!==L&&(t.vertexAttribDivisor(b,L),I[b]=L)}function g(){const b=s.newAttributes,L=s.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==b[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function _(b,L,H,B,I,j,X){X===!0?t.vertexAttribIPointer(b,L,H,I,j):t.vertexAttribPointer(b,L,H,B,I,j)}function M(b,L,H,B){S();const I=B.attributes,j=H.getAttributes(),X=L.defaultAttributeValues;for(const G in j){const O=j[G];if(O.location>=0){let $=I[G];if($===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){const q=$.normalized,ne=$.itemSize,se=e.get($);if(se===void 0)continue;const Ne=se.buffer,Ue=se.type,je=se.bytesPerElement,te=Ue===t.INT||Ue===t.UNSIGNED_INT||$.gpuType===ip;if($.isInterleavedBufferAttribute){const ie=$.data,Ee=ie.stride,Oe=$.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<O.locationSize;Me++)d(O.location+Me,ie.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<O.locationSize;Me++)v(O.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Me=0;Me<O.locationSize;Me++)_(O.location+Me,ne/O.locationSize,Ue,q,Ee*je,(Oe+ne/O.locationSize*Me)*je,te)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<O.locationSize;ie++)d(O.location+ie,$.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<O.locationSize;ie++)v(O.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ie=0;ie<O.locationSize;ie++)_(O.location+ie,ne/O.locationSize,Ue,q,ne*je,ne/O.locationSize*ie*je,te)}}else if(X!==void 0){const q=X[G];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(O.location,q);break;case 3:t.vertexAttrib3fv(O.location,q);break;case 4:t.vertexAttrib4fv(O.location,q);break;default:t.vertexAttrib1fv(O.location,q)}}}}g()}function E(){R();for(const b in i){const L=i[b];for(const H in L){const B=L[H];for(const I in B)h(B[I].object),delete B[I];delete L[H]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const L=i[b.id];for(const H in L){const B=L[H];for(const I in B)h(B[I].object),delete B[I];delete L[H]}delete i[b.id]}function A(b){for(const L in i){const H=i[L];if(H[b.id]===void 0)continue;const B=H[b.id];for(const I in B)h(B[I].object),delete B[I];delete H[b.id]}}function R(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:v,disableUnusedAttributes:g}}function Wb(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];n.update(m,i,1)}function l(c,h,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],h[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,u);let x=0;for(let S=0;S<u;S++)x+=h[S]*p[S];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ii&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:M,maxSamples:E,samples:T}}function $b(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||r;return r=p,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){n=h(u,p,0)},this.setState=function(u,p,m){const x=u.clippingPlanes,S=u.clipIntersection,v=u.clipShadows,d=t.get(u);if(!r||x===null||x.length===0||s&&!v)s?h(null):c();else{const g=s?0:i,_=g*4;let M=d.clippingState||null;l.value=M,M=h(x,p,_,m);for(let E=0;E!==_;++E)M[E]=n[E];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,m,x){const S=u!==null?u.length:0;let v=null;if(S!==0){if(v=l.value,x!==!0||v===null){const d=m+S*4,g=p.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<d)&&(v=new Float32Array(d));for(let _=0,M=m;_!==S;++_,M+=4)a.copy(u[_]).applyMatrix4(g,o),a.normal.toArray(v,M),v[M+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}function Yb(t){let e=new WeakMap;function n(a,o){return o===mh?a.mapping=ss:o===gh&&(a.mapping=aa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===mh||o===gh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nx(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const pr=4,dg=[.125,.215,.35,.446,.526,.582],jr=20,qb=256,ka=new Zs,hg=new Xe;let ed=null,td=0,nd=0,id=!1;const Kb=new N;class fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Kb}=s;ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:si,format:ii,colorSpace:la,depthBuffer:!1},r=pg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zb(s)),this._blurMaterial=Jb(s,e,n),this._ggxMaterial=Qb(s,e,n)}return r}_compileMaterial(e){const n=new Ln(new It,e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,i,r,s){const l=new Yt(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(hg),u.toneMapping=Di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new Cr,new pp({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,v=S.material;let d=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,d=!0):(v.color.copy(hg),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const E=this._cubeSize;Rs(r,M*E,_>2?E:0,E,E),u.setRenderTarget(r),d&&u.render(S,l),u.render(e,l)}u.toneMapping=m,u.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===aa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ka)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),p=0+c*1.25,m=u*p,{_lodMax:x}=this,S=this._sizeLods[i],v=3*S*(i>x-pr?i-x+pr:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,Rs(s,v,d,3*S,2*S),r.setRenderTarget(s),r.render(o,ka),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Rs(e,v,d,3*S,2*S),r.setRenderTarget(e),r.render(o,ka)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=c;const p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jr-1),S=s/x,v=isFinite(s)?1+Math.floor(h*S):jr;v>jr&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${jr}`);const d=[];let g=0;for(let A=0;A<jr;++A){const R=A/S,w=Math.exp(-R*R/2);d.push(w),A===0?g+=w:A<v&&(g+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;const M=this._sizeLods[r],E=3*M*(r>_-pr?r-_+pr:0),T=4*(this._cubeSize-M);Rs(n,E,T,3*M,2*M),l.setRenderTarget(n),l.render(u,ka)}}function Zb(t){const e=[],n=[],i=[];let r=t;const s=t-pr+1+dg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-pr?l=dg[a-t+pr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,S=3,v=2,d=1,g=new Float32Array(S*x*m),_=new Float32Array(v*x*m),M=new Float32Array(d*x*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,R=T>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];g.set(w,S*x*T),_.set(p,v*x*T);const b=[T,T,T,T,T,T];M.set(b,d*x*T)}const E=new It;E.setAttribute("position",new hn(g,S)),E.setAttribute("uv",new hn(_,v)),E.setAttribute("faceIndex",new hn(M,d)),i.push(new Ln(E,null)),r>pr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function pg(t,e,n){const i=new In(t,e,n);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qb(t,e,n){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Jb(t,e,n){const i=new Float32Array(jr),r=new N(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function mg(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function gg(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function eE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mh||l===gh,h=l===ss||l===aa;if(c||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new fg(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new fg(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function tE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Eo("WebGLRenderer: "+i+" extension not supported."),r}}}function nE(t,e,n,i){const r={},s=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(u,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(u){const p=u.attributes;for(const m in p)e.update(p[m],t.ARRAY_BUFFER)}function c(u){const p=[],m=u.index,x=u.attributes.position;let S=0;if(m!==null){const g=m.array;S=m.version;for(let _=0,M=g.length;_<M;_+=3){const E=g[_+0],T=g[_+1],A=g[_+2];p.push(E,T,T,A,A,E)}}else if(x!==void 0){const g=x.array;S=x.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const E=_+0,T=_+1,A=_+2;p.push(E,T,T,A,A,E)}}else return;const v=new(Mx(p)?Cx:Tx)(p,1);v.version=S;const d=s.get(u);d&&e.remove(d),s.set(u,v)}function h(u){const p=s.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function iE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*a),n.update(m,i,1)}function c(p,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,p*a,x),n.update(m,i,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,x);let v=0;for(let d=0;d<x;d++)v+=m[d];n.update(v,i,1)}function u(p,m,x,S){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<p.length;d++)c(p[d]/a,m[d],S[d]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,S,0,x);let d=0;for(let g=0;g<x;g++)d+=m[g]*S[g];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sE(t,e,n){const i=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==u){let b=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var m=b;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),v===!0&&(M=3);let E=o.attributes.position.count*M,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*T*4*u),R=new wx(A,E,T,u);R.type=Ci,R.needsUpdate=!0;const w=M*4;for(let L=0;L<u;L++){const H=d[L],B=g[L],I=_[L],j=E*T*4*L;for(let X=0;X<H.count;X++){const G=X*w;x===!0&&(r.fromBufferAttribute(H,X),A[j+G+0]=r.x,A[j+G+1]=r.y,A[j+G+2]=r.z,A[j+G+3]=0),S===!0&&(r.fromBufferAttribute(B,X),A[j+G+4]=r.x,A[j+G+5]=r.y,A[j+G+6]=r.z,A[j+G+7]=0),v===!0&&(r.fromBufferAttribute(I,X),A[j+G+8]=r.x,A[j+G+9]=r.y,A[j+G+10]=r.z,A[j+G+11]=I.itemSize===4?r.w:1)}}p={count:u,texture:R,size:new Ie(E,T)},i.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let v=0;v<c.length;v++)x+=c[v];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function aE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const oE={[lx]:"LINEAR_TONE_MAPPING",[cx]:"REINHARD_TONE_MAPPING",[ux]:"CINEON_TONE_MAPPING",[dx]:"ACES_FILMIC_TONE_MAPPING",[fx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[hx]:"CUSTOM_TONE_MAPPING"};function lE(t,e,n,i,r){const s=new In(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new In(e,n,{type:si,depthBuffer:!1,stencilBuffer:!1}),o=new It;o.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const l=new J1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ln(o,l),h=new Zs(-1,1,1,-1,0,1);let u=null,p=null,m=!1,x,S=null,v=[],d=!1;this.setSize=function(g,_){s.setSize(g,_),a.setSize(g,_);for(let M=0;M<v.length;M++){const E=v[M];E.setSize&&E.setSize(g,_)}},this.setEffects=function(g){v=g,d=v.length>0&&v[0].isRenderPass===!0;const _=s.width,M=s.height;for(let E=0;E<v.length;E++){const T=v[E];T.setSize&&T.setSize(_,M)}},this.begin=function(g,_){if(m||g.toneMapping===Di&&v.length===0)return!1;if(S=_,_!==null){const M=_.width,E=_.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return d===!1&&g.setRenderTarget(s),x=g.toneMapping,g.toneMapping=Di,!0},this.hasRenderPass=function(){return d},this.end=function(g,_){g.toneMapping=x,m=!0;let M=s,E=a;for(let T=0;T<v.length;T++){const A=v[T];if(A.enabled!==!1&&(A.render(g,E,M,_),A.needsSwap!==!1)){const R=M;M=E,E=R}}if(u!==g.outputColorSpace||p!==g.toneMapping){u=g.outputColorSpace,p=g.toneMapping,l.defines={},st.getTransfer(u)===ft&&(l.defines.SRGB_TRANSFER="");const T=oE[p];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(S),g.render(c,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ux=new tn,Jh=new Ao(1,1),Ox=new wx,kx=new R1,zx=new Px,vg=[],xg=[],_g=new Float32Array(16),yg=new Float32Array(9),Sg=new Float32Array(4);function _a(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vg[r];if(s===void 0&&(s=new Float32Array(r),vg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qc(t,e){let n=xg[e];n===void 0&&(n=new Int32Array(e),xg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function dE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function hE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function fE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(jt(n,i))return;Sg.set(i),t.uniformMatrix2fv(this.addr,!1,Sg),Gt(n,i)}}function pE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(jt(n,i))return;yg.set(i),t.uniformMatrix3fv(this.addr,!1,yg),Gt(n,i)}}function mE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(jt(n,i))return;_g.set(i),t.uniformMatrix4fv(this.addr,!1,_g),Gt(n,i)}}function gE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function yE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function ME(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function bE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jh.compareFunction=n.isReversedDepthBuffer()?dp:up,s=Jh):s=Ux,n.setTexture2D(e||s,r)}function EE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kx,r)}function TE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zx,r)}function CE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ox,r)}function AE(t){switch(t){case 5126:return cE;case 35664:return uE;case 35665:return dE;case 35666:return hE;case 35674:return fE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return xE;case 35669:case 35673:return _E;case 5125:return yE;case 36294:return SE;case 36295:return ME;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return CE}}function RE(t,e){t.uniform1fv(this.addr,e)}function PE(t,e){const n=_a(e,this.size,2);t.uniform2fv(this.addr,n)}function NE(t,e){const n=_a(e,this.size,3);t.uniform3fv(this.addr,n)}function DE(t,e){const n=_a(e,this.size,4);t.uniform4fv(this.addr,n)}function IE(t,e){const n=_a(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LE(t,e){const n=_a(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FE(t,e){const n=_a(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UE(t,e){t.uniform1iv(this.addr,e)}function OE(t,e){t.uniform2iv(this.addr,e)}function kE(t,e){t.uniform3iv(this.addr,e)}function zE(t,e){t.uniform4iv(this.addr,e)}function BE(t,e){t.uniform1uiv(this.addr,e)}function VE(t,e){t.uniform2uiv(this.addr,e)}function HE(t,e){t.uniform3uiv(this.addr,e)}function jE(t,e){t.uniform4uiv(this.addr,e)}function GE(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Jh:a=Ux;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function WE(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||kx,s[a])}function XE(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||zx,s[a])}function $E(t,e,n){const i=this.cache,r=e.length,s=Qc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ox,s[a])}function YE(t){switch(t){case 5126:return RE;case 35664:return PE;case 35665:return NE;case 35666:return DE;case 35674:return IE;case 35675:return LE;case 35676:return FE;case 5124:case 35670:return UE;case 35667:case 35671:return OE;case 35668:case 35672:return kE;case 35669:case 35673:return zE;case 5125:return BE;case 36294:return VE;case 36295:return HE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return WE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return $E}}class qE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AE(n.type)}}class KE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YE(n.type)}}class ZE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function Mg(t,e){t.seq.push(e),t.map[e.id]=e}function QE(t,e,n){const i=t.name,r=i.length;for(rd.lastIndex=0;;){const s=rd.exec(i),a=rd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Mg(n,c===void 0?new qE(o,t,e):new KE(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new ZE(o),Mg(n,u)),n=u}}}class ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);QE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function wg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const JE=37297;let eT=0;function tT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const bg=new Ye;function nT(t){st._getMatrix(bg,st.workingColorSpace,t);const e=`mat3( ${bg.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Tc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Eg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+tT(t.getShaderSource(e),o)}else return s}function iT(t,e){const n=nT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const rT={[lx]:"Linear",[cx]:"Reinhard",[ux]:"Cineon",[dx]:"ACESFilmic",[fx]:"AgX",[px]:"Neutral",[hx]:"Custom"};function sT(t,e){const n=rT[e];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new N;function aT(){st.getLuminanceCoefficients(Nl);const t=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function lT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xa(t){return t!==""}function Tg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(t){return t.replace(uT,hT)}const dT=new Map;function hT(t,e){let n=qe[e];if(n===void 0){const i=dT.get(e);if(i!==void 0)n=qe[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ef(n)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(t){return t.replace(fT,pT)}function pT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mT={[ql]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function gT(t){return mT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vT={[ss]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function xT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":vT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const _T={[aa]:"ENVMAP_MODE_REFRACTION"};function yT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":_T[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ST={[ox]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[YS]:"ENVMAP_BLENDING_ADD"};function MT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ST[t.combine]||"ENVMAP_BLENDING_NONE"}function wT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=gT(n),c=xT(n),h=yT(n),u=MT(n),p=wT(n),m=oT(n),x=lT(s),S=r.createProgram();let v,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xa).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xa).join(`
`),d.length>0&&(d+=`
`)):(v=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),d=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?qe.tonemapping_pars_fragment:"",n.toneMapping!==Di?sT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,iT("linearToOutputTexel",n.outputColorSpace),aT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xa).join(`
`)),a=ef(a),a=Tg(a,n),a=Cg(a,n),o=ef(o),o=Tg(o,n),o=Cg(o,n),a=Ag(a),o=Ag(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",n.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=g+v+a,M=g+d+o,E=wg(r,r.VERTEX_SHADER,_),T=wg(r,r.FRAGMENT_SHADER,M);r.attachShader(S,E),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(E)||"",I=r.getShaderInfoLog(T)||"",j=H.trim(),X=B.trim(),G=I.trim();let O=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,E,T);else{const q=Eg(r,E,"vertex"),ne=Eg(r,T,"fragment");ct("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+j+`
`+q+`
`+ne)}else j!==""?We("WebGLProgram: Program Info Log:",j):(X===""||G==="")&&($=!1);$&&(L.diagnostics={runnable:O,programLog:j,vertexShader:{log:X,prefix:v},fragmentShader:{log:G,prefix:d}})}r.deleteShader(E),r.deleteShader(T),R=new ec(r,S),w=cT(r,S)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(S,JE)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=T,this}let ET=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CT(e),n.set(e,i)),i}}class CT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function AT(t,e,n,i,r,s,a){const o=new bx,l=new TT,c=new Set,h=[],u=new Map,p=r.logarithmicDepthBuffer;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function v(w,b,L,H,B){const I=H.fog,j=B.geometry,X=w.isMeshStandardMaterial?H.environment:null,G=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),O=G&&G.mapping===qc?G.image.height:null,$=x[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&We("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ne=q!==void 0?q.length:0;let se=0;j.morphAttributes.position!==void 0&&(se=1),j.morphAttributes.normal!==void 0&&(se=2),j.morphAttributes.color!==void 0&&(se=3);let Ne,Ue,je,te;if($){const et=bi[$];Ne=et.vertexShader,Ue=et.fragmentShader}else Ne=w.vertexShader,Ue=w.fragmentShader,l.update(w),je=l.getVertexShaderID(w),te=l.getFragmentShaderID(w);const ie=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,$e=!!w.map,ut=!!w.matcap,Ge=!!G,Qe=!!w.aoMap,it=!!w.lightMap,Ve=!!w.bumpMap,gt=!!w.normalMap,k=!!w.displacementMap,dt=!!w.emissiveMap,Je=!!w.metalnessMap,ot=!!w.roughnessMap,Ae=w.anisotropy>0,P=w.clearcoat>0,y=w.dispersion>0,D=w.iridescence>0,z=w.sheen>0,ee=w.transmission>0,V=Ae&&!!w.anisotropyMap,ve=P&&!!w.clearcoatMap,le=P&&!!w.clearcoatNormalMap,_e=P&&!!w.clearcoatRoughnessMap,Re=D&&!!w.iridescenceMap,oe=D&&!!w.iridescenceThicknessMap,ce=z&&!!w.sheenColorMap,xe=z&&!!w.sheenRoughnessMap,F=!!w.specularMap,K=!!w.specularColorMap,ge=!!w.specularIntensityMap,U=ee&&!!w.transmissionMap,fe=ee&&!!w.thicknessMap,de=!!w.gradientMap,ye=!!w.alphaMap,he=w.alphaTest>0,re=!!w.alphaHash,me=!!w.extensions;let Fe=Di;w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const nt={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:Ue,defines:w.defines,customVertexShaderID:je,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:la,alphaToCoverage:!!w.alphaToCoverage,map:$e,matcap:ut,envMap:Ge,envMapMode:Ge&&G.mapping,envMapCubeUVHeight:O,aoMap:Qe,lightMap:it,bumpMap:Ve,normalMap:gt,displacementMap:k,emissiveMap:dt,normalMapObjectSpace:gt&&w.normalMapType===QS,normalMapTangentSpace:gt&&w.normalMapType===ZS,metalnessMap:Je,roughnessMap:ot,anisotropy:Ae,anisotropyMap:V,clearcoat:P,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:_e,dispersion:y,iridescence:D,iridescenceMap:Re,iridescenceThicknessMap:oe,sheen:z,sheenColorMap:ce,sheenRoughnessMap:xe,specularMap:F,specularColorMap:K,specularIntensityMap:ge,transmission:ee,transmissionMap:U,thicknessMap:fe,gradientMap:de,opaque:w.transparent===!1&&w.blending===Jr&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:he,alphaHash:re,combine:w.combine,mapUv:$e&&S(w.map.channel),aoMapUv:Qe&&S(w.aoMap.channel),lightMapUv:it&&S(w.lightMap.channel),bumpMapUv:Ve&&S(w.bumpMap.channel),normalMapUv:gt&&S(w.normalMap.channel),displacementMapUv:k&&S(w.displacementMap.channel),emissiveMapUv:dt&&S(w.emissiveMap.channel),metalnessMapUv:Je&&S(w.metalnessMap.channel),roughnessMapUv:ot&&S(w.roughnessMap.channel),anisotropyMapUv:V&&S(w.anisotropyMap.channel),clearcoatMapUv:ve&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:xe&&S(w.sheenRoughnessMap.channel),specularMapUv:F&&S(w.specularMap.channel),specularColorMapUv:K&&S(w.specularColorMap.channel),specularIntensityMapUv:ge&&S(w.specularIntensityMap.channel),transmissionMapUv:U&&S(w.transmissionMap.channel),thicknessMapUv:fe&&S(w.thicknessMap.channel),alphaMapUv:ye&&S(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(gt||Ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&($e||ye),fog:!!I,useFog:w.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:$e&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===ft,decodeVideoTextureEmissive:dt&&w.emissiveMap.isVideoTexture===!0&&st.getTransfer(w.emissiveMap.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ti,flipSided:w.side===Dn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:me&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&w.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function d(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(g(b,w),_(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function g(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const b=x[w.type];let L;if(b){const H=bi[b];L=Rc.clone(H.uniforms)}else L=w.uniforms;return L}function E(w,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new bT(t,b,w,s),h.push(L),u.set(b,L)),L}function T(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),u.delete(w.cacheKey),w.destroy()}}function A(w){l.remove(w)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:M,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function RT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function PT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ng(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u,p,m,x,S,v){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:x,renderOrder:u.renderOrder,z:S,group:v},t[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=S,d.group=v),e++,d}function o(u,p,m,x,S,v){const d=a(u,p,m,x,S,v);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(u,p,m,x,S,v){const d=a(u,p,m,x,S,v);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,p){n.length>1&&n.sort(u||PT),i.length>1&&i.sort(p||Pg),r.length>1&&r.sort(p||Pg)}function h(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function NT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ng,t.set(i,[a])):r>=s.length?(a=new Ng,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function DT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Xe};break;case"SpotLight":n={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function IT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LT=0;function FT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UT(t){const e=new DT,n=IT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Et,a=new Et;function o(c){let h=0,u=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,S=0,v=0,d=0,g=0,_=0,M=0,E=0,T=0,A=0;c.sort(FT);for(let w=0,b=c.length;w<b;w++){const L=c[w],H=L.color,B=L.intensity,I=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===oa?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*B,u+=H.g*B,p+=H.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],B);A++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,O=n.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=L.shadow.matrix,g++}i.directional[m]=X,m++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(B),X.distance=I,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[S]=X;const G=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,G.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[S]=G.matrix,L.castShadow){const O=n.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.spotShadow[S]=O,i.spotShadowMap[S]=j,M++}S++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(H).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=X,v++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const G=L.shadow,O=n.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,i.pointShadow[x]=O,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=L.shadow.matrix,_++}i.point[x]=X,x++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[d]=X,d++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==m||R.pointLength!==x||R.spotLength!==S||R.rectAreaLength!==v||R.hemiLength!==d||R.numDirectionalShadows!==g||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==E||R.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=v,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,R.directionalLength=m,R.pointLength=x,R.spotLength=S,R.rectAreaLength=v,R.hemiLength=d,R.numDirectionalShadows=g,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=E,R.numLightProbes=A,i.version=LT++)}function l(c,h){let u=0,p=0,m=0,x=0,S=0;const v=h.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),u++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),m++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),s.copy(_.matrixWorld),s.premultiply(v),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),p++}else if(_.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),S++}}}return{setup:o,setupView:l,state:i}}function Dg(t){const e=new UT(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function OT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Dg(t),e.set(r,[o])):s>=a.length?(o=new Dg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BT=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],VT=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Ig=new Et,za=new N,sd=new N;function HT(t,e,n){let i=new gp;const r=new Ie,s=new Ie,a=new Dt,o=new eM,l=new tM,c={},h=n.maxTextureSize,u={[Tr]:Dn,[Dn]:Tr,[Ti]:Ti},p=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:kT,fragmentShader:zT}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new It;x.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ln(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let d=this.type;this.render=function(T,A,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;T.type===AS&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=ql);const w=t.getRenderTarget(),b=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ni),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=d!==this.type;B&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(j=>j.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,j=T.length;I<j;I++){const X=T[I],G=X.shadow;if(G===void 0){We("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const O=G.getFrameExtents();if(r.multiply(O),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,G.mapSize.y=s.y)),G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Wa){if(X.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new In(r.x,r.y,{format:oa,type:si,minFilter:bt,magFilter:bt,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Ao(r.x,r.y,Ci),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Zi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt}else{X.isPointLight?(G.map=new Nx(r.x),G.map.depthTexture=new Q1(r.x,Ii)):(G.map=new In(r.x,r.y),G.map.depthTexture=new Ao(r.x,r.y,Ii)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Zi;const q=t.state.buffers.depth.getReversed();this.type===ql?(G.map.depthTexture.compareFunction=q?dp:up,G.map.depthTexture.minFilter=bt,G.map.depthTexture.magFilter=bt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt)}G.camera.updateProjectionMatrix()}const $=G.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<$;q++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,q),t.clear();else{q===0&&(t.setRenderTarget(G.map),t.clear());const ne=G.getViewport(q);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),H.viewport(a)}if(X.isPointLight){const ne=G.camera,se=G.matrix,Ne=X.distance||ne.far;Ne!==ne.far&&(ne.far=Ne,ne.updateProjectionMatrix()),za.setFromMatrixPosition(X.matrixWorld),ne.position.copy(za),sd.copy(ne.position),sd.add(BT[q]),ne.up.copy(VT[q]),ne.lookAt(sd),ne.updateMatrixWorld(),se.makeTranslation(-za.x,-za.y,-za.z),Ig.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ig,ne.coordinateSystem,ne.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),M(A,R,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Wa&&g(G,R),G.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(w,b,L)};function g(T,A){const R=e.update(S);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new In(r.x,r.y,{format:oa,type:si})),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,R,p,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,R,m,S,null)}function _(T,A,R,w){let b=null;const L=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const H=b.uuid,B=A.uuid;let I=c[H];I===void 0&&(I={},c[H]=I);let j=I[B];j===void 0&&(j=b.clone(),I[B]=j,A.addEventListener("dispose",E)),b=j}if(b.visible=A.visible,b.wireframe=A.wireframe,w===Wa?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=t.properties.get(b);H.light=R}return b}function M(T,A,R,w,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Wa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const B=e.update(T),I=T.material;if(Array.isArray(I)){const j=B.groups;for(let X=0,G=j.length;X<G;X++){const O=j[X],$=I[O.materialIndex];if($&&$.visible){const q=_(T,$,w,b);T.onBeforeShadow(t,T,A,R,B,q,O),t.renderBufferDirect(R,null,B,q,T,O),T.onAfterShadow(t,T,A,R,B,q,O)}}}else if(I.visible){const j=_(T,I,w,b);T.onBeforeShadow(t,T,A,R,B,j,null),t.renderBufferDirect(R,null,B,j,T,null),T.onAfterShadow(t,T,A,R,B,j,null)}}const H=T.children;for(let B=0,I=H.length;B<I;B++)M(H[B],A,R,w,b)}function E(T){T.target.removeEventListener("dispose",E);for(const R in c){const w=c[R],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const jT={[lh]:ch,[uh]:fh,[dh]:ph,[sa]:hh,[ch]:lh,[fh]:uh,[ph]:dh,[hh]:sa};function GT(t,e){function n(){let U=!1;const fe=new Dt;let de=null;const ye=new Dt(0,0,0,0);return{setMask:function(he){de!==he&&!U&&(t.colorMask(he,he,he,he),de=he)},setLocked:function(he){U=he},setClear:function(he,re,me,Fe,nt){nt===!0&&(he*=Fe,re*=Fe,me*=Fe),fe.set(he,re,me,Fe),ye.equals(fe)===!1&&(t.clearColor(he,re,me,Fe),ye.copy(fe))},reset:function(){U=!1,de=null,ye.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,de=null,ye=null,he=null;return{setReversed:function(re){if(fe!==re){const me=e.get("EXT_clip_control");re?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Fe=he;he=null,this.setClear(Fe)}},getReversed:function(){return fe},setTest:function(re){re?ie(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(re){de!==re&&!U&&(t.depthMask(re),de=re)},setFunc:function(re){if(fe&&(re=jT[re]),ye!==re){switch(re){case lh:t.depthFunc(t.NEVER);break;case ch:t.depthFunc(t.ALWAYS);break;case uh:t.depthFunc(t.LESS);break;case sa:t.depthFunc(t.LEQUAL);break;case dh:t.depthFunc(t.EQUAL);break;case hh:t.depthFunc(t.GEQUAL);break;case fh:t.depthFunc(t.GREATER);break;case ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=re}},setLocked:function(re){U=re},setClear:function(re){he!==re&&(fe&&(re=1-re),t.clearDepth(re),he=re)},reset:function(){U=!1,de=null,ye=null,he=null,fe=!1}}}function r(){let U=!1,fe=null,de=null,ye=null,he=null,re=null,me=null,Fe=null,nt=null;return{setTest:function(et){U||(et?ie(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(et){fe!==et&&!U&&(t.stencilMask(et),fe=et)},setFunc:function(et,Bt,rn){(de!==et||ye!==Bt||he!==rn)&&(t.stencilFunc(et,Bt,rn),de=et,ye=Bt,he=rn)},setOp:function(et,Bt,rn){(re!==et||me!==Bt||Fe!==rn)&&(t.stencilOp(et,Bt,rn),re=et,me=Bt,Fe=rn)},setLocked:function(et){U=et},setClear:function(et){nt!==et&&(t.clearStencil(et),nt=et)},reset:function(){U=!1,fe=null,de=null,ye=null,he=null,re=null,me=null,Fe=null,nt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,m=[],x=null,S=!1,v=null,d=null,g=null,_=null,M=null,E=null,T=null,A=new Xe(0,0,0),R=0,w=!1,b=null,L=null,H=null,B=null,I=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=G>=2);let $=null,q={};const ne=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ne=new Dt().fromArray(ne),Ue=new Dt().fromArray(se);function je(U,fe,de,ye){const he=new Uint8Array(4),re=t.createTexture();t.bindTexture(U,re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let me=0;me<de;me++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(fe+me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return re}const te={};te[t.TEXTURE_2D]=je(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(sa),Ve(!1),gt(Dm),ie(t.CULL_FACE),Qe(Ni);function ie(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Ee(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Oe(U,fe){return u[U]!==fe?(t.bindFramebuffer(U,fe),u[U]=fe,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Me(U,fe){let de=m,ye=!1;if(U){de=p.get(fe),de===void 0&&(de=[],p.set(fe,de));const he=U.textures;if(de.length!==he.length||de[0]!==t.COLOR_ATTACHMENT0){for(let re=0,me=he.length;re<me;re++)de[re]=t.COLOR_ATTACHMENT0+re;de.length=he.length,ye=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,ye=!0);ye&&t.drawBuffers(de)}function $e(U){return x!==U?(t.useProgram(U),x=U,!0):!1}const ut={[Hr]:t.FUNC_ADD,[PS]:t.FUNC_SUBTRACT,[NS]:t.FUNC_REVERSE_SUBTRACT};ut[DS]=t.MIN,ut[IS]=t.MAX;const Ge={[LS]:t.ZERO,[FS]:t.ONE,[US]:t.SRC_COLOR,[ah]:t.SRC_ALPHA,[HS]:t.SRC_ALPHA_SATURATE,[BS]:t.DST_COLOR,[kS]:t.DST_ALPHA,[OS]:t.ONE_MINUS_SRC_COLOR,[oh]:t.ONE_MINUS_SRC_ALPHA,[VS]:t.ONE_MINUS_DST_COLOR,[zS]:t.ONE_MINUS_DST_ALPHA,[jS]:t.CONSTANT_COLOR,[GS]:t.ONE_MINUS_CONSTANT_COLOR,[WS]:t.CONSTANT_ALPHA,[XS]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(U,fe,de,ye,he,re,me,Fe,nt,et){if(U===Ni){S===!0&&(Ee(t.BLEND),S=!1);return}if(S===!1&&(ie(t.BLEND),S=!0),U!==RS){if(U!==v||et!==w){if((d!==Hr||M!==Hr)&&(t.blendEquation(t.FUNC_ADD),d=Hr,M=Hr),et)switch(U){case Jr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mo:t.blendFunc(t.ONE,t.ONE);break;case Im:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",U);break}else switch(U){case Jr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Im:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lm:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",U);break}g=null,_=null,E=null,T=null,A.set(0,0,0),R=0,v=U,w=et}return}he=he||fe,re=re||de,me=me||ye,(fe!==d||he!==M)&&(t.blendEquationSeparate(ut[fe],ut[he]),d=fe,M=he),(de!==g||ye!==_||re!==E||me!==T)&&(t.blendFuncSeparate(Ge[de],Ge[ye],Ge[re],Ge[me]),g=de,_=ye,E=re,T=me),(Fe.equals(A)===!1||nt!==R)&&(t.blendColor(Fe.r,Fe.g,Fe.b,nt),A.copy(Fe),R=nt),v=U,w=!1}function it(U,fe){U.side===Ti?Ee(t.CULL_FACE):ie(t.CULL_FACE);let de=U.side===Dn;fe&&(de=!de),Ve(de),U.blending===Jr&&U.transparent===!1?Qe(Ni):Qe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ye=U.stencilWrite;o.setTest(ye),ye&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){b!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),b=U)}function gt(U){U!==TS?(ie(t.CULL_FACE),U!==L&&(U===Dm?t.cullFace(t.BACK):U===CS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),L=U}function k(U){U!==H&&(X&&t.lineWidth(U),H=U)}function dt(U,fe,de){U?(ie(t.POLYGON_OFFSET_FILL),(B!==fe||I!==de)&&(t.polygonOffset(fe,de),B=fe,I=de)):Ee(t.POLYGON_OFFSET_FILL)}function Je(U){U?ie(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function ot(U){U===void 0&&(U=t.TEXTURE0+j-1),$!==U&&(t.activeTexture(U),$=U)}function Ae(U,fe,de){de===void 0&&($===null?de=t.TEXTURE0+j-1:de=$);let ye=q[de];ye===void 0&&(ye={type:void 0,texture:void 0},q[de]=ye),(ye.type!==U||ye.texture!==fe)&&($!==de&&(t.activeTexture(de),$=de),t.bindTexture(U,fe||te[U]),ye.type=U,ye.texture=fe)}function P(){const U=q[$];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function z(){try{t.texSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function ee(){try{t.texSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function le(){try{t.texStorage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function _e(){try{t.texStorage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function Re(){try{t.texImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function oe(){try{t.texImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function ce(U){Ne.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function xe(U){Ue.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ue.copy(U))}function F(U,fe){let de=c.get(fe);de===void 0&&(de=new WeakMap,c.set(fe,de));let ye=de.get(U);ye===void 0&&(ye=t.getUniformBlockIndex(fe,U.name),de.set(U,ye))}function K(U,fe){const ye=c.get(fe).get(U);l.get(fe)!==ye&&(t.uniformBlockBinding(fe,ye,U.__bindingPointIndex),l.set(fe,ye))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,q={},u={},p=new WeakMap,m=[],x=null,S=!1,v=null,d=null,g=null,_=null,M=null,E=null,T=null,A=new Xe(0,0,0),R=0,w=!1,b=null,L=null,H=null,B=null,I=null,Ne.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Ee,bindFramebuffer:Oe,drawBuffers:Me,useProgram:$e,setBlending:Qe,setMaterial:it,setFlipSided:Ve,setCullFace:gt,setLineWidth:k,setPolygonOffset:dt,setScissorTest:Je,activeTexture:ot,bindTexture:Ae,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:D,texImage2D:Re,texImage3D:oe,updateUBOMapping:F,uniformBlockBinding:K,texStorage2D:le,texStorage3D:_e,texSubImage2D:z,texSubImage3D:ee,compressedTexSubImage2D:V,compressedTexSubImage3D:ve,scissor:ce,viewport:xe,reset:ge}}function WT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,y){return m?new OffscreenCanvas(P,y):Ac("canvas")}function S(P,y,D){let z=1;const ee=Ae(P);if((ee.width>D||ee.height>D)&&(z=D/Math.max(ee.width,ee.height)),z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const V=Math.floor(z*ee.width),ve=Math.floor(z*ee.height);u===void 0&&(u=x(V,ve));const le=y?x(V,ve):u;return le.width=V,le.height=ve,le.getContext("2d").drawImage(P,0,0,V,ve),We("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+V+"x"+ve+")."),le}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function v(P){return P.generateMipmaps}function d(P){t.generateMipmap(P)}function g(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,y,D,z,ee=!1){if(P!==null){if(t[P]!==void 0)return t[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let V=y;if(y===t.RED&&(D===t.FLOAT&&(V=t.R32F),D===t.HALF_FLOAT&&(V=t.R16F),D===t.UNSIGNED_BYTE&&(V=t.R8)),y===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.R8UI),D===t.UNSIGNED_SHORT&&(V=t.R16UI),D===t.UNSIGNED_INT&&(V=t.R32UI),D===t.BYTE&&(V=t.R8I),D===t.SHORT&&(V=t.R16I),D===t.INT&&(V=t.R32I)),y===t.RG&&(D===t.FLOAT&&(V=t.RG32F),D===t.HALF_FLOAT&&(V=t.RG16F),D===t.UNSIGNED_BYTE&&(V=t.RG8)),y===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RG8UI),D===t.UNSIGNED_SHORT&&(V=t.RG16UI),D===t.UNSIGNED_INT&&(V=t.RG32UI),D===t.BYTE&&(V=t.RG8I),D===t.SHORT&&(V=t.RG16I),D===t.INT&&(V=t.RG32I)),y===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RGB8UI),D===t.UNSIGNED_SHORT&&(V=t.RGB16UI),D===t.UNSIGNED_INT&&(V=t.RGB32UI),D===t.BYTE&&(V=t.RGB8I),D===t.SHORT&&(V=t.RGB16I),D===t.INT&&(V=t.RGB32I)),y===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),D===t.UNSIGNED_INT&&(V=t.RGBA32UI),D===t.BYTE&&(V=t.RGBA8I),D===t.SHORT&&(V=t.RGBA16I),D===t.INT&&(V=t.RGBA32I)),y===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(V=t.R11F_G11F_B10F)),y===t.RGBA){const ve=ee?Tc:st.getTransfer(z);D===t.FLOAT&&(V=t.RGBA32F),D===t.HALF_FLOAT&&(V=t.RGBA16F),D===t.UNSIGNED_BYTE&&(V=ve===ft?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(P,y){let D;return P?y===null||y===Ii||y===bo?D=t.DEPTH24_STENCIL8:y===Ci?D=t.DEPTH32F_STENCIL8:y===wo&&(D=t.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===bo?D=t.DEPTH_COMPONENT24:y===Ci?D=t.DEPTH_COMPONENT32F:y===wo&&(D=t.DEPTH_COMPONENT16),D}function E(P,y){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==bt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function T(P){const y=P.target;y.removeEventListener("dispose",T),R(y),y.isVideoTexture&&h.delete(y)}function A(P){const y=P.target;y.removeEventListener("dispose",A),b(y)}function R(P){const y=i.get(P);if(y.__webglInit===void 0)return;const D=P.source,z=p.get(D);if(z){const ee=z[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(P),Object.keys(z).length===0&&p.delete(D)}i.remove(P)}function w(P){const y=i.get(P);t.deleteTexture(y.__webglTexture);const D=P.source,z=p.get(D);delete z[y.__cacheKey],a.memory.textures--}function b(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let ee=0;ee<y.__webglFramebuffer[z].length;ee++)t.deleteFramebuffer(y.__webglFramebuffer[z][ee]);else t.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)t.deleteFramebuffer(y.__webglFramebuffer[z]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const D=P.textures;for(let z=0,ee=D.length;z<ee;z++){const V=i.get(D[z]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(D[z])}i.remove(P)}let L=0;function H(){L=0}function B(){const P=L;return P>=r.maxTextures&&We("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function I(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function j(P,y){const D=i.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&D.__version!==P.version){const z=P.image;if(z===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,P,y);return}}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+y)}function X(P,y){const D=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){te(D,P,y);return}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+y)}function G(P,y){const D=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){te(D,P,y);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+y)}function O(P,y){const D=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&D.__version!==P.version){ie(D,P,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+y)}const $={[vh]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[xh]:t.MIRRORED_REPEAT},q={[Jt]:t.NEAREST,[qS]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[bt]:t.LINEAR,[Ru]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},ne={[JS]:t.NEVER,[r1]:t.ALWAYS,[e1]:t.LESS,[up]:t.LEQUAL,[t1]:t.EQUAL,[dp]:t.GEQUAL,[n1]:t.GREATER,[i1]:t.NOTEQUAL};function se(P,y){if(y.type===Ci&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bt||y.magFilter===Ru||y.magFilter===ll||y.magFilter===Yr||y.minFilter===bt||y.minFilter===Ru||y.minFilter===ll||y.minFilter===Yr)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,$[y.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,$[y.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,$[y.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,q[y.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==ll&&y.minFilter!==Yr||y.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(P,y){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",T));const z=y.source;let ee=p.get(z);ee===void 0&&(ee={},p.set(z,ee));const V=I(y);if(V!==P.__cacheKey){ee[V]===void 0&&(ee[V]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ee[V].usedTimes++;const ve=ee[P.__cacheKey];ve!==void 0&&(ee[P.__cacheKey].usedTimes--,ve.usedTimes===0&&w(y)),P.__cacheKey=V,P.__webglTexture=ee[V].texture}return D}function Ue(P,y,D){return Math.floor(Math.floor(P/D)/y)}function je(P,y,D,z){const V=P.updateRanges;if(V.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,D,z,y.data);else{V.sort((oe,ce)=>oe.start-ce.start);let ve=0;for(let oe=1;oe<V.length;oe++){const ce=V[ve],xe=V[oe],F=ce.start+ce.count,K=Ue(xe.start,y.width,4),ge=Ue(ce.start,y.width,4);xe.start<=F+1&&K===ge&&Ue(xe.start+xe.count-1,y.width,4)===K?ce.count=Math.max(ce.count,xe.start+xe.count-ce.start):(++ve,V[ve]=xe)}V.length=ve+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),_e=t.getParameter(t.UNPACK_SKIP_PIXELS),Re=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let oe=0,ce=V.length;oe<ce;oe++){const xe=V[oe],F=Math.floor(xe.start/4),K=Math.ceil(xe.count/4),ge=F%y.width,U=Math.floor(F/y.width),fe=K,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,ge,U,fe,de,D,z,y.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(t.UNPACK_SKIP_ROWS,Re)}}function te(P,y,D){let z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=t.TEXTURE_3D);const ee=Ne(P,y),V=y.source;n.bindTexture(z,P.__webglTexture,t.TEXTURE0+D);const ve=i.get(V);if(V.version!==ve.__version||ee===!0){n.activeTexture(t.TEXTURE0+D);const le=st.getPrimaries(st.workingColorSpace),_e=y.colorSpace===dr?null:st.getPrimaries(y.colorSpace),Re=y.colorSpace===dr||le===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=S(y.image,!1,r.maxTextureSize);oe=ot(y,oe);const ce=s.convert(y.format,y.colorSpace),xe=s.convert(y.type);let F=_(y.internalFormat,ce,xe,y.colorSpace,y.isVideoTexture);se(z,y);let K;const ge=y.mipmaps,U=y.isVideoTexture!==!0,fe=ve.__version===void 0||ee===!0,de=V.dataReady,ye=E(y,oe);if(y.isDepthTexture)F=M(y.format===qr,y.type),fe&&(U?n.texStorage2D(t.TEXTURE_2D,1,F,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,F,oe.width,oe.height,0,ce,xe,null));else if(y.isDataTexture)if(ge.length>0){U&&fe&&n.texStorage2D(t.TEXTURE_2D,ye,F,ge[0].width,ge[0].height);for(let he=0,re=ge.length;he<re;he++)K=ge[he],U?de&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,K.width,K.height,ce,xe,K.data):n.texImage2D(t.TEXTURE_2D,he,F,K.width,K.height,0,ce,xe,K.data);y.generateMipmaps=!1}else U?(fe&&n.texStorage2D(t.TEXTURE_2D,ye,F,oe.width,oe.height),de&&je(y,oe,ce,xe)):n.texImage2D(t.TEXTURE_2D,0,F,oe.width,oe.height,0,ce,xe,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,F,ge[0].width,ge[0].height,oe.depth);for(let he=0,re=ge.length;he<re;he++)if(K=ge[he],y.format!==ii)if(ce!==null)if(U){if(de)if(y.layerUpdates.size>0){const me=ug(K.width,K.height,y.format,y.type);for(const Fe of y.layerUpdates){const nt=K.data.subarray(Fe*me/K.data.BYTES_PER_ELEMENT,(Fe+1)*me/K.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,Fe,K.width,K.height,1,ce,nt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,K.width,K.height,oe.depth,ce,K.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,F,K.width,K.height,oe.depth,0,K.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,K.width,K.height,oe.depth,ce,xe,K.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,F,K.width,K.height,oe.depth,0,ce,xe,K.data)}else{U&&fe&&n.texStorage2D(t.TEXTURE_2D,ye,F,ge[0].width,ge[0].height);for(let he=0,re=ge.length;he<re;he++)K=ge[he],y.format!==ii?ce!==null?U?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,K.width,K.height,ce,K.data):n.compressedTexImage2D(t.TEXTURE_2D,he,F,K.width,K.height,0,K.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?de&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,K.width,K.height,ce,xe,K.data):n.texImage2D(t.TEXTURE_2D,he,F,K.width,K.height,0,ce,xe,K.data)}else if(y.isDataArrayTexture)if(U){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,F,oe.width,oe.height,oe.depth),de)if(y.layerUpdates.size>0){const he=ug(oe.width,oe.height,y.format,y.type);for(const re of y.layerUpdates){const me=oe.data.subarray(re*he/oe.data.BYTES_PER_ELEMENT,(re+1)*he/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,ce,xe,me)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ce,xe,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,F,oe.width,oe.height,oe.depth,0,ce,xe,oe.data);else if(y.isData3DTexture)U?(fe&&n.texStorage3D(t.TEXTURE_3D,ye,F,oe.width,oe.height,oe.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ce,xe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,F,oe.width,oe.height,oe.depth,0,ce,xe,oe.data);else if(y.isFramebufferTexture){if(fe)if(U)n.texStorage2D(t.TEXTURE_2D,ye,F,oe.width,oe.height);else{let he=oe.width,re=oe.height;for(let me=0;me<ye;me++)n.texImage2D(t.TEXTURE_2D,me,F,he,re,0,ce,xe,null),he>>=1,re>>=1}}else if(ge.length>0){if(U&&fe){const he=Ae(ge[0]);n.texStorage2D(t.TEXTURE_2D,ye,F,he.width,he.height)}for(let he=0,re=ge.length;he<re;he++)K=ge[he],U?de&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ce,xe,K):n.texImage2D(t.TEXTURE_2D,he,F,ce,xe,K);y.generateMipmaps=!1}else if(U){if(fe){const he=Ae(oe);n.texStorage2D(t.TEXTURE_2D,ye,F,he.width,he.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,xe,oe)}else n.texImage2D(t.TEXTURE_2D,0,F,ce,xe,oe);v(y)&&d(z),ve.__version=V.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ie(P,y,D){if(y.image.length!==6)return;const z=Ne(P,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+D);const V=i.get(ee);if(ee.version!==V.__version||z===!0){n.activeTexture(t.TEXTURE0+D);const ve=st.getPrimaries(st.workingColorSpace),le=y.colorSpace===dr?null:st.getPrimaries(y.colorSpace),_e=y.colorSpace===dr||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let re=0;re<6;re++)!Re&&!oe?ce[re]=S(y.image[re],!0,r.maxCubemapSize):ce[re]=oe?y.image[re].image:y.image[re],ce[re]=ot(y,ce[re]);const xe=ce[0],F=s.convert(y.format,y.colorSpace),K=s.convert(y.type),ge=_(y.internalFormat,F,K,y.colorSpace),U=y.isVideoTexture!==!0,fe=V.__version===void 0||z===!0,de=ee.dataReady;let ye=E(y,xe);se(t.TEXTURE_CUBE_MAP,y);let he;if(Re){U&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,ge,xe.width,xe.height);for(let re=0;re<6;re++){he=ce[re].mipmaps;for(let me=0;me<he.length;me++){const Fe=he[me];y.format!==ii?F!==null?U?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Fe.width,Fe.height,F,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,ge,Fe.width,Fe.height,0,Fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Fe.width,Fe.height,F,K,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,ge,Fe.width,Fe.height,0,F,K,Fe.data)}}}else{if(he=y.mipmaps,U&&fe){he.length>0&&ye++;const re=Ae(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,ge,re.width,re.height)}for(let re=0;re<6;re++)if(oe){U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ce[re].width,ce[re].height,F,K,ce[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,ce[re].width,ce[re].height,0,F,K,ce[re].data);for(let me=0;me<he.length;me++){const nt=he[me].image[re].image;U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,nt.width,nt.height,F,K,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,ge,nt.width,nt.height,0,F,K,nt.data)}}else{U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,F,K,ce[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,F,K,ce[re]);for(let me=0;me<he.length;me++){const Fe=he[me];U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,F,K,Fe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,ge,F,K,Fe.image[re])}}}v(y)&&d(t.TEXTURE_CUBE_MAP),V.__version=ee.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ee(P,y,D,z,ee,V){const ve=s.convert(D.format,D.colorSpace),le=s.convert(D.type),_e=_(D.internalFormat,ve,le,D.colorSpace),Re=i.get(y),oe=i.get(D);if(oe.__renderTarget=y,!Re.__hasExternalTextures){const ce=Math.max(1,y.width>>V),xe=Math.max(1,y.height>>V);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,V,_e,ce,xe,y.depth,0,ve,le,null):n.texImage2D(ee,V,_e,ce,xe,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),dt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,ee,oe.__webglTexture,0,k(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,ee,oe.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(P,y,D){if(t.bindRenderbuffer(t.RENDERBUFFER,P),y.depthBuffer){const z=y.depthTexture,ee=z&&z.isDepthTexture?z.type:null,V=M(y.stencilBuffer,ee),ve=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;dt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(y),V,y.width,y.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(y),V,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,V,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,P)}else{const z=y.textures;for(let ee=0;ee<z.length;ee++){const V=z[ee],ve=s.convert(V.format,V.colorSpace),le=s.convert(V.type),_e=_(V.internalFormat,ve,le,V.colorSpace);dt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(y),_e,y.width,y.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(y),_e,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,_e,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(P,y,D){const z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),se(t.TEXTURE_CUBE_MAP,y.depthTexture);const Re=s.convert(y.depthTexture.format),oe=s.convert(y.depthTexture.type);let ce;y.depthTexture.format===Zi?ce=t.DEPTH_COMPONENT24:y.depthTexture.format===qr&&(ce=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,y.width,y.height,0,Re,oe,null)}}else j(y.depthTexture,0);const V=ee.__webglTexture,ve=k(y),le=z?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,_e=y.depthTexture.format===qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Zi)dt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,le,V,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,_e,le,V,0);else if(y.depthTexture.format===qr)dt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,le,V,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,_e,le,V,0);else throw new Error("Unknown depthTexture format")}function $e(P){const y=i.get(P),D=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const z=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),z){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,z.removeEventListener("dispose",ee)};z.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=z}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(D)for(let z=0;z<6;z++)Me(y.__webglFramebuffer[z],P,z);else{const z=P.texture.mipmaps;z&&z.length>0?Me(y.__webglFramebuffer[0],P,0):Me(y.__webglFramebuffer,P,0)}else if(D){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]===void 0)y.__webglDepthbuffer[z]=t.createRenderbuffer(),Oe(y.__webglDepthbuffer[z],P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,V)}}else{const z=P.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Oe(y.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,V)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(P,y,D){const z=i.get(P);y!==void 0&&Ee(z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&$e(P)}function Ge(P){const y=P.texture,D=i.get(P),z=i.get(y);P.addEventListener("dispose",A);const ee=P.textures,V=P.isWebGLCubeRenderTarget===!0,ve=ee.length>1;if(ve||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=y.version,a.memory.textures++),V){D.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[le]=[];for(let _e=0;_e<y.mipmaps.length;_e++)D.__webglFramebuffer[le][_e]=t.createFramebuffer()}else D.__webglFramebuffer[le]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)D.__webglFramebuffer[le]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ve)for(let le=0,_e=ee.length;le<_e;le++){const Re=i.get(ee[le]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&dt(P)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const _e=ee[le];D.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const Re=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),ce=_(_e.internalFormat,Re,oe,_e.colorSpace,P.isXRRenderTarget===!0),xe=k(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ce,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,D.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(D.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),se(t.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ee(D.__webglFramebuffer[le][_e],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e);else Ee(D.__webglFramebuffer[le],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let le=0,_e=ee.length;le<_e;le++){const Re=ee[le],oe=i.get(Re);let ce=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,oe.__webglTexture),se(ce,Re),Ee(D.__webglFramebuffer,P,Re,t.COLOR_ATTACHMENT0+le,ce,0),v(Re)&&d(ce)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,z.__webglTexture),se(le,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ee(D.__webglFramebuffer[_e],P,y,t.COLOR_ATTACHMENT0,le,_e);else Ee(D.__webglFramebuffer,P,y,t.COLOR_ATTACHMENT0,le,0);v(y)&&d(le),n.unbindTexture()}P.depthBuffer&&$e(P)}function Qe(P){const y=P.textures;for(let D=0,z=y.length;D<z;D++){const ee=y[D];if(v(ee)){const V=g(P),ve=i.get(ee).__webglTexture;n.bindTexture(V,ve),d(V),n.unbindTexture()}}}const it=[],Ve=[];function gt(P){if(P.samples>0){if(dt(P)===!1){const y=P.textures,D=P.width,z=P.height;let ee=t.COLOR_BUFFER_BIT;const V=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(P),le=y.length>1;if(le)for(let Re=0;Re<y.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const _e=P.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const oe=i.get(y[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,D,z,0,0,D,z,ee,t.NEAREST),l===!0&&(it.length=0,Ve.length=0,it.push(t.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(it.push(V),Ve.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Re=0;Re<y.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const oe=i.get(y[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function k(P){return Math.min(r.maxSamples,P.samples)}function dt(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Je(P){const y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function ot(P,y){const D=P.colorSpace,z=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==la&&D!==dr&&(st.getTransfer(D)===ft?(z!==ii||ee!==jn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",D)),y}function Ae(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=O,this.rebindTextures=ut,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function XT(t,e){function n(i,r=dr){let s;const a=st.getTransfer(r);if(i===jn)return t.UNSIGNED_BYTE;if(i===rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_x)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===gx)return t.BYTE;if(i===vx)return t.SHORT;if(i===wo)return t.UNSIGNED_SHORT;if(i===ip)return t.INT;if(i===Ii)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===si)return t.HALF_FLOAT;if(i===yx)return t.ALPHA;if(i===ap)return t.RGB;if(i===ii)return t.RGBA;if(i===Zi)return t.DEPTH_COMPONENT;if(i===qr)return t.DEPTH_STENCIL;if(i===Sx)return t.RED;if(i===op)return t.RED_INTEGER;if(i===oa)return t.RG;if(i===lp)return t.RG_INTEGER;if(i===cp)return t.RGBA_INTEGER;if(i===Kl||i===Zl||i===Ql||i===Jl)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_h||i===yh||i===Sh||i===Mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===bh||i===Eh||i===Th||i===Ch||i===Ah||i===Rh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wh||i===bh)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Th)return s.COMPRESSED_R11_EAC;if(i===Ch)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ah)return s.COMPRESSED_RG11_EAC;if(i===Rh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ph||i===Nh||i===Dh||i===Ih||i===Lh||i===Fh||i===Uh||i===Oh||i===kh||i===zh||i===Bh||i===Vh||i===Hh||i===jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ph)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gh||i===Wh||i===Xh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gh)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$h||i===Yh||i===qh||i===Kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$h)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const $T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YT=`
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

}`;class qT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Dx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ot({vertexShader:$T,fragmentShader:YT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new Hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KT extends ga{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",v=new qT,d={},g=n.getContextAttributes();let _=null,M=null;const E=[],T=[],A=new Ie;let R=null;const w=new Yt;w.viewport=new Dt;const b=new Yt;b.viewport=new Dt;const L=[w,b],H=new aM;let B=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=E[te];return ie===void 0&&(ie=new Ku,E[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=E[te];return ie===void 0&&(ie=new Ku,E[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=E[te];return ie===void 0&&(ie=new Ku,E[te]=ie),ie.getHandSpace()};function j(te){const ie=T.indexOf(te.inputSource);if(ie===-1)return;const Ee=E[ie];Ee!==void 0&&(Ee.update(te.inputSource,te.frame,c||a),Ee.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let te=0;te<E.length;te++){const ie=T[te];ie!==null&&(T[te]=null,E[te].disconnect(ie))}B=null,I=null,v.reset();for(const te in d)delete d[te];e.setRenderTarget(_),m=null,p=null,u=null,r=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(r,n)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Oe=null,Me=null;g.depth&&(Me=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=g.stencil?qr:Zi,Oe=g.stencil?bo:Ii);const $e={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};u=this.getBinding(),p=u.createProjectionLayer($e),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new In(p.textureWidth,p.textureHeight,{format:ii,type:jn,depthTexture:new Ao(p.textureWidth,p.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new In(m.framebufferWidth,m.framebufferHeight,{format:ii,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(te){for(let ie=0;ie<te.removed.length;ie++){const Ee=te.removed[ie],Oe=T.indexOf(Ee);Oe>=0&&(T[Oe]=null,E[Oe].disconnect(Ee))}for(let ie=0;ie<te.added.length;ie++){const Ee=te.added[ie];let Oe=T.indexOf(Ee);if(Oe===-1){for(let $e=0;$e<E.length;$e++)if($e>=T.length){T.push(Ee),Oe=$e;break}else if(T[$e]===null){T[$e]=Ee,Oe=$e;break}if(Oe===-1)break}const Me=E[Oe];Me&&Me.connect(Ee)}}const O=new N,$=new N;function q(te,ie,Ee){O.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(Ee.matrixWorld);const Oe=O.distanceTo($),Me=ie.projectionMatrix.elements,$e=Ee.projectionMatrix.elements,ut=Me[14]/(Me[10]-1),Ge=Me[14]/(Me[10]+1),Qe=(Me[9]+1)/Me[5],it=(Me[9]-1)/Me[5],Ve=(Me[8]-1)/Me[0],gt=($e[8]+1)/$e[0],k=ut*Ve,dt=ut*gt,Je=Oe/(-Ve+gt),ot=Je*-Ve;if(ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ot),te.translateZ(Je),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Me[10]===-1)te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=ut+Je,P=Ge+Je,y=k-ot,D=dt+(Oe-ot),z=Qe*Ge/P*Ae,ee=it*Ge/P*Ae;te.projectionMatrix.makePerspective(y,D,z,ee,Ae,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ne(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ie=te.near,Ee=te.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),H.near=b.near=w.near=ie,H.far=b.far=w.far=Ee,(B!==H.near||I!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,I=H.far),H.layers.mask=te.layers.mask|6,w.layers.mask=H.layers.mask&3,b.layers.mask=H.layers.mask&5;const Oe=te.parent,Me=H.cameras;ne(H,Oe);for(let $e=0;$e<Me.length;$e++)ne(Me[$e],Oe);Me.length===2?q(H,w,b):H.projectionMatrix.copy(w.projectionMatrix),se(te,H,Oe)};function se(te,ie,Ee){Ee===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(Ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=To*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(te){l=te,p!==null&&(p.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)},this.getCameraTexture=function(te){return d[te]};let Ne=null;function Ue(te,ie){if(h=ie.getViewerPose(c||a),x=ie,h!==null){const Ee=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Oe=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let Ge=0;Ge<Ee.length;Ge++){const Qe=Ee[Ge];let it=null;if(m!==null)it=m.getViewport(Qe);else{const gt=u.getViewSubImage(p,Qe);it=gt.viewport,Ge===0&&(e.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(M))}let Ve=L[Ge];Ve===void 0&&(Ve=new Yt,Ve.layers.enable(Ge),Ve.viewport=new Dt,L[Ge]=Ve),Ve.matrix.fromArray(Qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Ge===0&&(H.matrix.copy(Ve.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push(Ve)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){u=i.getBinding();const Ge=u.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&v.init(Ge,r.renderState)}if(Me&&Me.includes("camera-access")&&S){e.state.unbindTexture(),u=i.getBinding();for(let Ge=0;Ge<Ee.length;Ge++){const Qe=Ee[Ge].camera;if(Qe){let it=d[Qe];it||(it=new Dx,d[Qe]=it);const Ve=u.getCameraImage(Qe);it.sourceTexture=Ve}}}}for(let Ee=0;Ee<E.length;Ee++){const Oe=T[Ee],Me=E[Ee];Oe!==null&&Me!==void 0&&Me.update(Oe,ie,c||a)}Ne&&Ne(te,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const je=new Fx;je.setAnimationLoop(Ue),this.setAnimationLoop=function(te){Ne=te},this.dispose=function(){}}}const kr=new Li,ZT=new Et;function QT(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,Ax(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,g,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(v,d):d.isMeshToonMaterial?(s(v,d),u(v,d)):d.isMeshPhongMaterial?(s(v,d),h(v,d)):d.isMeshStandardMaterial?(s(v,d),p(v,d),d.isMeshPhysicalMaterial&&m(v,d,M)):d.isMeshMatcapMaterial?(s(v,d),x(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),S(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(a(v,d),d.isLineDashedMaterial&&o(v,d)):d.isPointsMaterial?l(v,d,g,_):d.isSpriteMaterial?c(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===Dn&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===Dn&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const g=e.get(d),_=g.envMap,M=g.envMapRotation;_&&(v.envMap.value=_,kr.copy(M),kr.x*=-1,kr.y*=-1,kr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(kr)),v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function a(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function o(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,g,_){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*g,v.scale.value=_*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function h(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function u(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function p(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function m(v,d,g){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dn&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,d){d.matcap&&(v.matcap.value=d.matcap)}function S(v,d){const g=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function c(g,_){let M=r[g.id];M===void 0&&(x(g),M=h(g),r[g.id]=M,g.addEventListener("dispose",v));const E=_.program;i.updateUBOMapping(g,E);const T=e.render.frame;s[g.id]!==T&&(p(g),s[g.id]=T)}function h(g){const _=u();g.__bindingPointIndex=_;const M=t.createBuffer(),E=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,E,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const _=r[g.id],M=g.uniforms,E=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,b=R.length;w<b;w++){const L=R[w];if(m(L,T,w,E)===!0){const H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let I=0;for(let j=0;j<B.length;j++){const X=B[j],G=S(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,H+I,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,I),I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,M,E){const T=g.value,A=_+"_"+M;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{const R=E[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return E[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function x(g){const _=g.uniforms;let M=0;const E=16;for(let A=0,R=_.length;A<R;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,L=w.length;b<L;b++){const H=w[b],B=Array.isArray(H.value)?H.value:[H.value];for(let I=0,j=B.length;I<j;I++){const X=B[I],G=S(X),O=M%E,$=O%G.boundary,q=O+$;M+=$,q!==0&&E-q<G.storage&&(M+=E-q),H.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=G.storage}}}const T=M%E;return T>0&&(M+=E-T),g.__size=M,g.__cache={},this}function S(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",g),_}function v(g){const _=g.target;_.removeEventListener("dispose",v);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const eC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function tC(){return Mi===null&&(Mi=new X1(eC,16,16,oa,si),Mi.name="DFG_LUT",Mi.minFilter=bt,Mi.magFilter=bt,Mi.wrapS=Wn,Mi.wrapT=Wn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class _p{constructor(e={}){const{canvas:n=s1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=jn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=m,v=new Set([cp,lp,op]),d=new Set([jn,Ii,wo,bo,rp,sp]),g=new Uint32Array(4),_=new Int32Array(4);let M=null,E=null;const T=[],A=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let b=!1;this._outputColorSpace=En;let L=0,H=0,B=null,I=-1,j=null;const X=new Dt,G=new Dt;let O=null;const $=new Xe(0);let q=0,ne=n.width,se=n.height,Ne=1,Ue=null,je=null;const te=new Dt(0,0,ne,se),ie=new Dt(0,0,ne,se);let Ee=!1;const Oe=new gp;let Me=!1,$e=!1;const ut=new Et,Ge=new N,Qe=new Dt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function gt(){return B===null?Ne:1}let k=i;function dt(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",et,!1),k===null){const W="webgl2";if(k=dt(W,C),k===null)throw dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ct("WebGLRenderer: "+C.message),C}let Je,ot,Ae,P,y,D,z,ee,V,ve,le,_e,Re,oe,ce,xe,F,K,ge,U,fe,de,ye,he;function re(){Je=new tE(k),Je.init(),de=new XT(k,Je),ot=new Xb(k,Je,e,de),Ae=new GT(k,Je),ot.reversedDepthBuffer&&p&&Ae.buffers.depth.setReversed(!0),P=new rE(k),y=new RT,D=new WT(k,Je,Ae,y,ot,de,P),z=new Yb(w),ee=new eE(w),V=new lM(k),ye=new Gb(k,V),ve=new nE(k,V,P,ye),le=new aE(k,ve,V,P),ge=new sE(k,ot,D),xe=new $b(y),_e=new AT(w,z,ee,Je,ot,ye,xe),Re=new QT(w,y),oe=new NT,ce=new OT(Je),K=new jb(w,z,ee,Ae,le,x,l),F=new HT(w,le,ot),he=new JT(k,P,ot,Ae),U=new Wb(k,Je,P),fe=new iE(k,Je,P),P.programs=_e.programs,w.capabilities=ot,w.extensions=Je,w.properties=y,w.renderLists=oe,w.shadowMap=F,w.state=Ae,w.info=P}re(),S!==jn&&(R=new lE(S,n.width,n.height,r,s));const me=new KT(w,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(C){C!==void 0&&(Ne=C,this.setSize(ne,se,!1))},this.getSize=function(C){return C.set(ne,se)},this.setSize=function(C,W,Q=!0){if(me.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,se=W,n.width=Math.floor(C*Ne),n.height=Math.floor(W*Ne),Q===!0&&(n.style.width=C+"px",n.style.height=W+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ne*Ne,se*Ne).floor()},this.setDrawingBufferSize=function(C,W,Q){ne=C,se=W,Ne=Q,n.width=Math.floor(C*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(S===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(X)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,W,Q,Z){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,W,Q,Z),Ae.viewport(X.copy(te).multiplyScalar(Ne).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,W,Q,Z){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,W,Q,Z),Ae.scissor(G.copy(ie).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Ae.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){Ue=C},this.setTransparentSort=function(C){je=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,Q=!0){let Z=0;if(C){let Y=!1;if(B!==null){const we=B.texture.format;Y=v.has(we)}if(Y){const we=B.texture.type,Ce=d.has(we),Te=K.getClearColor(),De=K.getClearAlpha(),Le=Te.r,He=Te.g,ke=Te.b;Ce?(g[0]=Le,g[1]=He,g[2]=ke,g[3]=De,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Le,_[1]=He,_[2]=ke,_[3]=De,k.clearBufferiv(k.COLOR,0,_))}else Z|=k.COLOR_BUFFER_BIT}W&&(Z|=k.DEPTH_BUFFER_BIT),Q&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",et,!1),K.dispose(),oe.dispose(),ce.dispose(),y.dispose(),z.dispose(),ee.dispose(),le.dispose(),ye.dispose(),he.dispose(),_e.dispose(),me.dispose(),me.removeEventListener("sessionstart",Nr),me.removeEventListener("sessionend",jo),Fi.stop()};function Fe(C){C.preventDefault(),zm("WebGLRenderer: Context Lost."),b=!0}function nt(){zm("WebGLRenderer: Context Restored."),b=!1;const C=P.autoReset,W=F.enabled,Q=F.autoUpdate,Z=F.needsUpdate,Y=F.type;re(),P.autoReset=C,F.enabled=W,F.autoUpdate=Q,F.needsUpdate=Z,F.type=Y}function et(C){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Bt(C){const W=C.target;W.removeEventListener("dispose",Bt),rn(W)}function rn(C){eu(C),y.remove(C)}function eu(C){const W=y.get(C).programs;W!==void 0&&(W.forEach(function(Q){_e.releaseProgram(Q)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Q,Z,Y,we){W===null&&(W=it);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=mn(C,W,Q,Z,Y);Ae.setMaterial(Z,Ce);let De=Q.index,Le=1;if(Z.wireframe===!0){if(De=ve.getWireframeAttribute(Q),De===void 0)return;Le=2}const He=Q.drawRange,ke=Q.attributes.position;let Ke=He.start*Le,mt=(He.start+He.count)*Le;we!==null&&(Ke=Math.max(Ke,we.start*Le),mt=Math.min(mt,(we.start+we.count)*Le)),De!==null?(Ke=Math.max(Ke,0),mt=Math.min(mt,De.count)):ke!=null&&(Ke=Math.max(Ke,0),mt=Math.min(mt,ke.count));const Rt=mt-Ke;if(Rt<0||Rt===1/0)return;ye.setup(Y,Z,Te,Q,De);let Pt,vt=U;if(De!==null&&(Pt=V.get(De),vt=fe,vt.setIndex(Pt)),Y.isMesh)Z.wireframe===!0?(Ae.setLineWidth(Z.wireframeLinewidth*gt()),vt.setMode(k.LINES)):vt.setMode(k.TRIANGLES);else if(Y.isLine){let ze=Z.linewidth;ze===void 0&&(ze=1),Ae.setLineWidth(ze*gt()),Y.isLineSegments?vt.setMode(k.LINES):Y.isLineLoop?vt.setMode(k.LINE_LOOP):vt.setMode(k.LINE_STRIP)}else Y.isPoints?vt.setMode(k.POINTS):Y.isSprite&&vt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ze=Y._multiDrawStarts,ht=Y._multiDrawCounts,lt=Y._multiDrawCount,On=De?V.get(De).bytesPerElement:1,ds=y.get(Z).currentProgram.getUniforms();for(let kn=0;kn<lt;kn++)ds.setValue(k,"_gl_DrawID",kn),vt.render(ze[kn]/On,ht[kn])}else if(Y.isInstancedMesh)vt.renderInstances(Ke,Rt,Y.count);else if(Q.isInstancedBufferGeometry){const ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ht=Math.min(Q.instanceCount,ze);vt.renderInstances(Ke,Rt,ht)}else vt.render(Ke,Rt)};function Ho(C,W,Q){C.transparent===!0&&C.side===Ti&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,ae(C,W,Q),C.side=Tr,C.needsUpdate=!0,ae(C,W,Q),C.side=Ti):ae(C,W,Q)}this.compile=function(C,W,Q=null){Q===null&&(Q=C),E=ce.get(Q),E.init(W),A.push(E),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),C!==Q&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights();const Z=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){const Te=we[Ce];Ho(Te,Q,Y),Z.add(Te)}else Ho(we,Q,Y),Z.add(we)}),E=A.pop(),Z},this.compileAsync=function(C,W,Q=null){const Z=this.compile(C,W,Q);return new Promise(Y=>{function we(){if(Z.forEach(function(Ce){y.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){Y(C);return}setTimeout(we,10)}Je.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Sa=null;function tu(C){Sa&&Sa(C)}function Nr(){Fi.stop()}function jo(){Fi.start()}const Fi=new Fx;Fi.setAnimationLoop(tu),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(C){Sa=C,me.setAnimationLoop(C),C===null?Fi.stop():Fi.start()},me.addEventListener("sessionstart",Nr),me.addEventListener("sessionend",jo),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Q=me.enabled===!0&&me.isPresenting===!0,Z=R!==null&&(B===null||Q)&&R.begin(w,B);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(W),W=me.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,W,B),E=ce.get(C,A.length),E.init(W),A.push(E),ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Oe.setFromProjectionMatrix(ut,Ai,W.reversedDepth),$e=this.localClippingEnabled,Me=xe.init(this.clippingPlanes,$e),M=oe.get(C,T.length),M.init(),T.push(M),me.enabled===!0&&me.isPresenting===!0){const Ce=w.xr.getDepthSensingMesh();Ce!==null&&Ma(Ce,W,-1/0,w.sortObjects)}Ma(C,W,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Ue,je),Ve=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ve&&K.addToRenderList(M,C),this.info.render.frame++,Me===!0&&xe.beginShadows();const Y=E.state.shadowsArray;if(F.render(Y,C,W),Me===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&R.hasRenderPass())===!1){const Ce=M.opaque,Te=M.transmissive;if(E.setupLights(),W.isArrayCamera){const De=W.cameras;if(Te.length>0)for(let Le=0,He=De.length;Le<He;Le++){const ke=De[Le];cs(Ce,Te,C,ke)}Ve&&K.render(C);for(let Le=0,He=De.length;Le<He;Le++){const ke=De[Le];Go(M,C,ke,ke.viewport)}}else Te.length>0&&cs(Ce,Te,C,W),Ve&&K.render(C),Go(M,C,W)}B!==null&&H===0&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),Z&&R.end(w),C.isScene===!0&&C.onAfterRender(w,C,W),ye.resetDefaultState(),I=-1,j=null,A.pop(),A.length>0?(E=A[A.length-1],Me===!0&&xe.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function Ma(C,W,Q,Z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Oe.intersectsSprite(C)){Z&&Qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ut);const Ce=le.update(C),Te=C.material;Te.visible&&M.push(C,Ce,Te,Q,Qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Oe.intersectsObject(C))){const Ce=le.update(C),Te=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qe.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Qe.copy(Ce.boundingSphere.center)),Qe.applyMatrix4(C.matrixWorld).applyMatrix4(ut)),Array.isArray(Te)){const De=Ce.groups;for(let Le=0,He=De.length;Le<He;Le++){const ke=De[Le],Ke=Te[ke.materialIndex];Ke&&Ke.visible&&M.push(C,Ce,Ke,Q,Qe.z,ke)}}else Te.visible&&M.push(C,Ce,Te,Q,Qe.z,null)}}const we=C.children;for(let Ce=0,Te=we.length;Ce<Te;Ce++)Ma(we[Ce],W,Q,Z)}function Go(C,W,Q,Z){const{opaque:Y,transmissive:we,transparent:Ce}=C;E.setupLightsView(Q),Me===!0&&xe.setGlobalState(w.clippingPlanes,Q),Z&&Ae.viewport(X.copy(Z)),Y.length>0&&Un(Y,W,Q),we.length>0&&Un(we,W,Q),Ce.length>0&&Un(Ce,W,Q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function cs(C,W,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){const Ke=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new In(1,1,{generateMipmaps:!0,type:Ke?si:jn,minFilter:Yr,samples:ot.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const we=E.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||X;we.setSize(Ce.z*w.transmissionResolutionScale,Ce.w*w.transmissionResolutionScale);const Te=w.getRenderTarget(),De=w.getActiveCubeFace(),Le=w.getActiveMipmapLevel();w.setRenderTarget(we),w.getClearColor($),q=w.getClearAlpha(),q<1&&w.setClearColor(16777215,.5),w.clear(),Ve&&K.render(Q);const He=w.toneMapping;w.toneMapping=Di;const ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),Me===!0&&xe.setGlobalState(w.clippingPlanes,Z),Un(C,Q,Z),D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let mt=0,Rt=W.length;mt<Rt;mt++){const Pt=W[mt],{object:vt,geometry:ze,material:ht,group:lt}=Pt;if(ht.side===Ti&&vt.layers.test(Z.layers)){const On=ht.side;ht.side=Dn,ht.needsUpdate=!0,wa(vt,Q,Z,ze,ht,lt),ht.side=On,ht.needsUpdate=!0,Ke=!0}}Ke===!0&&(D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we))}w.setRenderTarget(Te,De,Le),w.setClearColor($,q),ke!==void 0&&(Z.viewport=ke),w.toneMapping=He}function Un(C,W,Q){const Z=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){const Ce=C[Y],{object:Te,geometry:De,group:Le}=Ce;let He=Ce.material;He.allowOverride===!0&&Z!==null&&(He=Z),Te.layers.test(Q.layers)&&wa(Te,W,Q,De,He,Le)}}function wa(C,W,Q,Z,Y,we){C.onBeforeRender(w,W,Q,Z,Y,we),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(w,W,Q,Z,C,we),Y.transparent===!0&&Y.side===Ti&&Y.forceSinglePass===!1?(Y.side=Dn,Y.needsUpdate=!0,w.renderBufferDirect(Q,W,Z,Y,C,we),Y.side=Tr,Y.needsUpdate=!0,w.renderBufferDirect(Q,W,Z,Y,C,we),Y.side=Ti):w.renderBufferDirect(Q,W,Z,Y,C,we),C.onAfterRender(w,W,Q,Z,Y,we)}function ae(C,W,Q){W.isScene!==!0&&(W=it);const Z=y.get(C),Y=E.state.lights,we=E.state.shadowsArray,Ce=Y.state.version,Te=_e.getParameters(C,Y.state,we,W,Q),De=_e.getProgramCacheKey(Te);let Le=Z.programs;Z.environment=C.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(C.isMeshStandardMaterial?ee:z).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Le===void 0&&(C.addEventListener("dispose",Bt),Le=new Map,Z.programs=Le);let He=Le.get(De);if(He!==void 0){if(Z.currentProgram===He&&Z.lightsStateVersion===Ce)return Se(C,Te),He}else Te.uniforms=_e.getUniforms(C),C.onBeforeCompile(Te,w),He=_e.acquireProgram(Te,De),Le.set(De,He),Z.uniforms=Te.uniforms;const ke=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=xe.uniform),Se(C,Te),Z.needsLights=sn(C),Z.lightsStateVersion=Ce,Z.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=He,Z.uniformsList=null,He}function ue(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=ec.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Se(C,W){const Q=y.get(C);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function mn(C,W,Q,Z,Y){W.isScene!==!0&&(W=it),D.resetTextureUnits();const we=W.fog,Ce=Z.isMeshStandardMaterial?W.environment:null,Te=B===null?w.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:la,De=(Z.isMeshStandardMaterial?ee:z).get(Z.envMap||Ce),Le=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!Q.morphAttributes.position,Ke=!!Q.morphAttributes.normal,mt=!!Q.morphAttributes.color;let Rt=Di;Z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Rt=w.toneMapping);const Pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=Pt!==void 0?Pt.length:0,ze=y.get(Z),ht=E.state.lights;if(Me===!0&&($e===!0||C!==j)){const gn=C===j&&Z.id===I;xe.setState(Z,C,gn)}let lt=!1;Z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ht.state.version||ze.outputColorSpace!==Te||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==De||Z.fog===!0&&ze.fog!==we||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==xe.numPlanes||ze.numIntersection!==xe.numIntersection)||ze.vertexAlphas!==Le||ze.vertexTangents!==He||ze.morphTargets!==ke||ze.morphNormals!==Ke||ze.morphColors!==mt||ze.toneMapping!==Rt||ze.morphTargetsCount!==vt)&&(lt=!0):(lt=!0,ze.__version=Z.version);let On=ze.currentProgram;lt===!0&&(On=ae(Z,W,Y));let ds=!1,kn=!1,ba=!1;const xt=On.getUniforms(),wn=ze.uniforms;if(Ae.useProgram(On.program)&&(ds=!0,kn=!0,ba=!0),Z.id!==I&&(I=Z.id,kn=!0),ds||j!==C){Ae.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(k,"projectionMatrix",C.projectionMatrix),xt.setValue(k,"viewMatrix",C.matrixWorldInverse);const bn=xt.map.cameraPosition;bn!==void 0&&bn.setValue(k,Ge.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&xt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,kn=!0,ba=!0)}if(ze.needsLights&&(ht.state.directionalShadowMap.length>0&&xt.setValue(k,"directionalShadowMap",ht.state.directionalShadowMap,D),ht.state.spotShadowMap.length>0&&xt.setValue(k,"spotShadowMap",ht.state.spotShadowMap,D),ht.state.pointShadowMap.length>0&&xt.setValue(k,"pointShadowMap",ht.state.pointShadowMap,D)),Y.isSkinnedMesh){xt.setOptional(k,Y,"bindMatrix"),xt.setOptional(k,Y,"bindMatrixInverse");const gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),xt.setValue(k,"boneTexture",gn.boneTexture,D))}Y.isBatchedMesh&&(xt.setOptional(k,Y,"batchingTexture"),xt.setValue(k,"batchingTexture",Y._matricesTexture,D),xt.setOptional(k,Y,"batchingIdTexture"),xt.setValue(k,"batchingIdTexture",Y._indirectTexture,D),xt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xt.setValue(k,"batchingColorTexture",Y._colorsTexture,D));const Kn=Q.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&ge.update(Y,Q,On),(kn||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,xt.setValue(k,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(wn.envMap.value=De,wn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=tC()),kn&&(xt.setValue(k,"toneMappingExposure",w.toneMappingExposure),ze.needsLights&&rt(wn,ba),we&&Z.fog===!0&&Re.refreshFogUniforms(wn,we),Re.refreshMaterialUniforms(wn,Z,Ne,se,E.state.transmissionRenderTarget[C.id]),ec.upload(k,ue(ze),wn,D)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ec.upload(k,ue(ze),wn,D),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xt.setValue(k,"center",Y.center),xt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),xt.setValue(k,"normalMatrix",Y.normalMatrix),xt.setValue(k,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const gn=Z.uniformsGroups;for(let bn=0,nu=gn.length;bn<nu;bn++){const Dr=gn[bn];he.update(Dr,On),he.bind(Dr,On)}}return On}function rt(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function sn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,W,Q){const Z=y.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),y.get(C.texture).__webglTexture=W,y.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const Q=y.get(C);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const an=k.createFramebuffer();this.setRenderTarget=function(C,W=0,Q=0){B=C,L=W,H=Q;let Z=null,Y=!1,we=!1;if(C){const Te=y.get(C);if(Te.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(k.FRAMEBUFFER,Te.__webglFramebuffer),X.copy(C.viewport),G.copy(C.scissor),O=C.scissorTest,Ae.viewport(X),Ae.scissor(G),Ae.setScissorTest(O),I=-1;return}else if(Te.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Te.__hasExternalTextures)D.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const He=C.depthTexture;if(Te.__boundDepthTexture!==He){if(He!==null&&y.has(He)&&(C.width!==He.image.width||C.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);const Le=y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Le[W])?Z=Le[W][Q]:Z=Le[W],Y=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?Z=y.get(C).__webglMultisampledFramebuffer:Array.isArray(Le)?Z=Le[Q]:Z=Le,X.copy(C.viewport),G.copy(C.scissor),O=C.scissorTest}else X.copy(te).multiplyScalar(Ne).floor(),G.copy(ie).multiplyScalar(Ne).floor(),O=Ee;if(Q!==0&&(Z=an),Ae.bindFramebuffer(k.FRAMEBUFFER,Z)&&Ae.drawBuffers(C,Z),Ae.viewport(X),Ae.scissor(G),Ae.setScissorTest(O),Y){const Te=y.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,Q)}else if(we){const Te=W;for(let De=0;De<C.textures.length;De++){const Le=y.get(C.textures[De]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+De,Le.__webglTexture,Q,Te)}}else if(C!==null&&Q!==0){const Te=y.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Te.__webglTexture,Q)}I=-1},this.readRenderTargetPixels=function(C,W,Q,Z,Y,we,Ce,Te=0){if(!(C&&C.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){Ae.bindFramebuffer(k.FRAMEBUFFER,De);try{const Le=C.textures[Te],He=Le.format,ke=Le.type;if(!ot.textureFormatReadable(He)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(ke)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Z&&Q>=0&&Q<=C.height-Y&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(W,Q,Z,Y,de.convert(He),de.convert(ke),we))}finally{const Le=B!==null?y.get(B).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(C,W,Q,Z,Y,we,Ce,Te=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(W>=0&&W<=C.width-Z&&Q>=0&&Q<=C.height-Y){Ae.bindFramebuffer(k.FRAMEBUFFER,De);const Le=C.textures[Te],He=Le.format,ke=Le.type;if(!ot.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ke),k.bufferData(k.PIXEL_PACK_BUFFER,we.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(W,Q,Z,Y,de.convert(He),de.convert(ke),0);const mt=B!==null?y.get(B).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,mt);const Rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await a1(k,Rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ke),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,we),k.deleteBuffer(Ke),k.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,Q=0){const Z=Math.pow(2,-Q),Y=Math.floor(C.image.width*Z),we=Math.floor(C.image.height*Z),Ce=W!==null?W.x:0,Te=W!==null?W.y:0;D.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Ce,Te,Y,we),Ae.unbindTexture()};const yi=k.createFramebuffer(),us=k.createFramebuffer();this.copyTextureToTexture=function(C,W,Q=null,Z=null,Y=0,we=null){we===null&&(Y!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let Ce,Te,De,Le,He,ke,Ke,mt,Rt;const Pt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(Q!==null)Ce=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,De=Q.isBox3?Q.max.z-Q.min.z:1,Le=Q.min.x,He=Q.min.y,ke=Q.isBox3?Q.min.z:0;else{const Kn=Math.pow(2,-Y);Ce=Math.floor(Pt.width*Kn),Te=Math.floor(Pt.height*Kn),C.isDataArrayTexture?De=Pt.depth:C.isData3DTexture?De=Math.floor(Pt.depth*Kn):De=1,Le=0,He=0,ke=0}Z!==null?(Ke=Z.x,mt=Z.y,Rt=Z.z):(Ke=0,mt=0,Rt=0);const vt=de.convert(W.format),ze=de.convert(W.type);let ht;W.isData3DTexture?(D.setTexture3D(W,0),ht=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),ht=k.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),ht=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const lt=k.getParameter(k.UNPACK_ROW_LENGTH),On=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ds=k.getParameter(k.UNPACK_SKIP_PIXELS),kn=k.getParameter(k.UNPACK_SKIP_ROWS),ba=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Le),k.pixelStorei(k.UNPACK_SKIP_ROWS,He),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ke);const xt=C.isDataArrayTexture||C.isData3DTexture,wn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const Kn=y.get(C),gn=y.get(W),bn=y.get(Kn.__renderTarget),nu=y.get(gn.__renderTarget);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,nu.__webglFramebuffer);for(let Dr=0;Dr<De;Dr++)xt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,y.get(C).__webglTexture,Y,ke+Dr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,y.get(W).__webglTexture,we,Rt+Dr)),k.blitFramebuffer(Le,He,Ce,Te,Ke,mt,Ce,Te,k.DEPTH_BUFFER_BIT,k.NEAREST);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||y.has(C)){const Kn=y.get(C),gn=y.get(W);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,yi),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,us);for(let bn=0;bn<De;bn++)xt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kn.__webglTexture,Y,ke+bn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kn.__webglTexture,Y),wn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,we,Rt+bn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,we),Y!==0?k.blitFramebuffer(Le,He,Ce,Te,Ke,mt,Ce,Te,k.COLOR_BUFFER_BIT,k.NEAREST):wn?k.copyTexSubImage3D(ht,we,Ke,mt,Rt+bn,Le,He,Ce,Te):k.copyTexSubImage2D(ht,we,Ke,mt,Le,He,Ce,Te);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else wn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(ht,we,Ke,mt,Rt,Ce,Te,De,vt,ze,Pt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(ht,we,Ke,mt,Rt,Ce,Te,De,vt,Pt.data):k.texSubImage3D(ht,we,Ke,mt,Rt,Ce,Te,De,vt,ze,Pt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,we,Ke,mt,Ce,Te,vt,ze,Pt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,we,Ke,mt,Pt.width,Pt.height,vt,Pt.data):k.texSubImage2D(k.TEXTURE_2D,we,Ke,mt,Ce,Te,vt,ze,Pt);k.pixelStorei(k.UNPACK_ROW_LENGTH,lt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,On),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ds),k.pixelStorei(k.UNPACK_SKIP_ROWS,kn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ba),we===0&&W.generateMipmaps&&k.generateMipmap(ht),Ae.unbindTexture()},this.initRenderTarget=function(C){y.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){L=0,H=0,B=null,Ae.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}var nC=Object.defineProperty,iC=(t,e,n)=>e in t?nC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rC=(t,e,n)=>(iC(t,e+"",n),n);class sC{constructor(){rC(this,"_listeners")}addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}var aC=Object.defineProperty,oC=(t,e,n)=>e in t?aC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Be=(t,e,n)=>(oC(t,typeof e!="symbol"?e+"":e,n),n);const Dl=new Kc,Lg=new lr,lC=Math.cos(70*(Math.PI/180)),Fg=(t,e)=>(t%e+e)%e;class Bx extends sC{constructor(e,n){super(),Be(this,"object"),Be(this,"domElement"),Be(this,"enabled",!0),Be(this,"target",new N),Be(this,"minDistance",0),Be(this,"maxDistance",1/0),Be(this,"minZoom",0),Be(this,"maxZoom",1/0),Be(this,"minPolarAngle",0),Be(this,"maxPolarAngle",Math.PI),Be(this,"minAzimuthAngle",-1/0),Be(this,"maxAzimuthAngle",1/0),Be(this,"enableDamping",!1),Be(this,"dampingFactor",.05),Be(this,"enableZoom",!0),Be(this,"zoomSpeed",1),Be(this,"enableRotate",!0),Be(this,"rotateSpeed",1),Be(this,"enablePan",!0),Be(this,"panSpeed",1),Be(this,"screenSpacePanning",!0),Be(this,"keyPanSpeed",7),Be(this,"zoomToCursor",!1),Be(this,"autoRotate",!1),Be(this,"autoRotateSpeed",2),Be(this,"reverseOrbit",!1),Be(this,"reverseHorizontalOrbit",!1),Be(this,"reverseVerticalOrbit",!1),Be(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Be(this,"mouseButtons",{LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN}),Be(this,"touches",{ONE:ps.ROTATE,TWO:ps.DOLLY_PAN}),Be(this,"target0"),Be(this,"position0"),Be(this,"zoom0"),Be(this,"_domElementKeyEvents",null),Be(this,"getPolarAngle"),Be(this,"getAzimuthalAngle"),Be(this,"setPolarAngle"),Be(this,"setAzimuthalAngle"),Be(this,"getDistance"),Be(this,"getZoomScale"),Be(this,"listenToKeyEvents"),Be(this,"stopListenToKeyEvents"),Be(this,"saveState"),Be(this,"reset"),Be(this,"update"),Be(this,"connect"),Be(this,"dispose"),Be(this,"dollyIn"),Be(this,"dollyOut"),Be(this,"getScale"),Be(this,"setScale"),this.object=e,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>h.phi,this.getAzimuthalAngle=()=>h.theta,this.setPolarAngle=F=>{let K=Fg(F,2*Math.PI),ge=h.phi;ge<0&&(ge+=2*Math.PI),K<0&&(K+=2*Math.PI);let U=Math.abs(K-ge);2*Math.PI-U<U&&(K<ge?K+=2*Math.PI:ge+=2*Math.PI),u.phi=K-ge,i.update()},this.setAzimuthalAngle=F=>{let K=Fg(F,2*Math.PI),ge=h.theta;ge<0&&(ge+=2*Math.PI),K<0&&(K+=2*Math.PI);let U=Math.abs(K-ge);2*Math.PI-U<U&&(K<ge?K+=2*Math.PI:ge+=2*Math.PI),u.theta=K-ge,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=F=>{F.addEventListener("keydown",V),this._domElementKeyEvents=F},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",V),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),l=o.NONE},this.update=(()=>{const F=new N,K=new N(0,1,0),ge=new as().setFromUnitVectors(e.up,K),U=ge.clone().invert(),fe=new N,de=new as,ye=2*Math.PI;return function(){const re=i.object.position;ge.setFromUnitVectors(e.up,K),U.copy(ge).invert(),F.copy(re).sub(i.target),F.applyQuaternion(ge),h.setFromVector3(F),i.autoRotate&&l===o.NONE&&I(H()),i.enableDamping?(h.theta+=u.theta*i.dampingFactor,h.phi+=u.phi*i.dampingFactor):(h.theta+=u.theta,h.phi+=u.phi);let me=i.minAzimuthAngle,Fe=i.maxAzimuthAngle;isFinite(me)&&isFinite(Fe)&&(me<-Math.PI?me+=ye:me>Math.PI&&(me-=ye),Fe<-Math.PI?Fe+=ye:Fe>Math.PI&&(Fe-=ye),me<=Fe?h.theta=Math.max(me,Math.min(Fe,h.theta)):h.theta=h.theta>(me+Fe)/2?Math.max(me,h.theta):Math.min(Fe,h.theta)),h.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,h.phi)),h.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.zoomToCursor&&w||i.object.isOrthographicCamera?h.radius=Ne(h.radius):h.radius=Ne(h.radius*p),F.setFromSpherical(h),F.applyQuaternion(U),re.copy(i.target).add(F),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(u.theta*=1-i.dampingFactor,u.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(u.set(0,0,0),m.set(0,0,0));let nt=!1;if(i.zoomToCursor&&w){let et=null;if(i.object instanceof Yt&&i.object.isPerspectiveCamera){const Bt=F.length();et=Ne(Bt*p);const rn=Bt-et;i.object.position.addScaledVector(A,rn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Bt=new N(R.x,R.y,0);Bt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix(),nt=!0;const rn=new N(R.x,R.y,0);rn.unproject(i.object),i.object.position.sub(rn).add(Bt),i.object.updateMatrixWorld(),et=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;et!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(et).add(i.object.position):(Dl.origin.copy(i.object.position),Dl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Dl.direction))<lC?e.lookAt(i.target):(Lg.setFromNormalAndCoplanarPoint(i.object.up,i.target),Dl.intersectPlane(Lg,i.target))))}else i.object instanceof Zs&&i.object.isOrthographicCamera&&(nt=p!==1,nt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix()));return p=1,w=!1,nt||fe.distanceToSquared(i.object.position)>c||8*(1-de.dot(i.object.quaternion))>c?(i.dispatchEvent(r),fe.copy(i.object.position),de.copy(i.object.quaternion),nt=!1,!0):!1}})(),this.connect=F=>{i.domElement=F,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",_e),i.domElement.addEventListener("pointerdown",Ae),i.domElement.addEventListener("pointercancel",y),i.domElement.addEventListener("wheel",ee)},this.dispose=()=>{var F,K,ge,U,fe,de;i.domElement&&(i.domElement.style.touchAction="auto"),(F=i.domElement)==null||F.removeEventListener("contextmenu",_e),(K=i.domElement)==null||K.removeEventListener("pointerdown",Ae),(ge=i.domElement)==null||ge.removeEventListener("pointercancel",y),(U=i.domElement)==null||U.removeEventListener("wheel",ee),(fe=i.domElement)==null||fe.ownerDocument.removeEventListener("pointermove",P),(de=i.domElement)==null||de.ownerDocument.removeEventListener("pointerup",y),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",V)};const i=this,r={type:"change"},s={type:"start"},a={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=o.NONE;const c=1e-6,h=new cg,u=new cg;let p=1;const m=new N,x=new Ie,S=new Ie,v=new Ie,d=new Ie,g=new Ie,_=new Ie,M=new Ie,E=new Ie,T=new Ie,A=new N,R=new Ie;let w=!1;const b=[],L={};function H(){return 2*Math.PI/60/60*i.autoRotateSpeed}function B(){return Math.pow(.95,i.zoomSpeed)}function I(F){i.reverseOrbit||i.reverseHorizontalOrbit?u.theta+=F:u.theta-=F}function j(F){i.reverseOrbit||i.reverseVerticalOrbit?u.phi+=F:u.phi-=F}const X=(()=>{const F=new N;return function(ge,U){F.setFromMatrixColumn(U,0),F.multiplyScalar(-ge),m.add(F)}})(),G=(()=>{const F=new N;return function(ge,U){i.screenSpacePanning===!0?F.setFromMatrixColumn(U,1):(F.setFromMatrixColumn(U,0),F.crossVectors(i.object.up,F)),F.multiplyScalar(ge),m.add(F)}})(),O=(()=>{const F=new N;return function(ge,U){const fe=i.domElement;if(fe&&i.object instanceof Yt&&i.object.isPerspectiveCamera){const de=i.object.position;F.copy(de).sub(i.target);let ye=F.length();ye*=Math.tan(i.object.fov/2*Math.PI/180),X(2*ge*ye/fe.clientHeight,i.object.matrix),G(2*U*ye/fe.clientHeight,i.object.matrix)}else fe&&i.object instanceof Zs&&i.object.isOrthographicCamera?(X(ge*(i.object.right-i.object.left)/i.object.zoom/fe.clientWidth,i.object.matrix),G(U*(i.object.top-i.object.bottom)/i.object.zoom/fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function $(F){i.object instanceof Yt&&i.object.isPerspectiveCamera||i.object instanceof Zs&&i.object.isOrthographicCamera?p=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(F){$(p/F)}function ne(F){$(p*F)}function se(F){if(!i.zoomToCursor||!i.domElement)return;w=!0;const K=i.domElement.getBoundingClientRect(),ge=F.clientX-K.left,U=F.clientY-K.top,fe=K.width,de=K.height;R.x=ge/fe*2-1,R.y=-(U/de)*2+1,A.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Ne(F){return Math.max(i.minDistance,Math.min(i.maxDistance,F))}function Ue(F){x.set(F.clientX,F.clientY)}function je(F){se(F),M.set(F.clientX,F.clientY)}function te(F){d.set(F.clientX,F.clientY)}function ie(F){S.set(F.clientX,F.clientY),v.subVectors(S,x).multiplyScalar(i.rotateSpeed);const K=i.domElement;K&&(I(2*Math.PI*v.x/K.clientHeight),j(2*Math.PI*v.y/K.clientHeight)),x.copy(S),i.update()}function Ee(F){E.set(F.clientX,F.clientY),T.subVectors(E,M),T.y>0?q(B()):T.y<0&&ne(B()),M.copy(E),i.update()}function Oe(F){g.set(F.clientX,F.clientY),_.subVectors(g,d).multiplyScalar(i.panSpeed),O(_.x,_.y),d.copy(g),i.update()}function Me(F){se(F),F.deltaY<0?ne(B()):F.deltaY>0&&q(B()),i.update()}function $e(F){let K=!1;switch(F.code){case i.keys.UP:O(0,i.keyPanSpeed),K=!0;break;case i.keys.BOTTOM:O(0,-i.keyPanSpeed),K=!0;break;case i.keys.LEFT:O(i.keyPanSpeed,0),K=!0;break;case i.keys.RIGHT:O(-i.keyPanSpeed,0),K=!0;break}K&&(F.preventDefault(),i.update())}function ut(){if(b.length==1)x.set(b[0].pageX,b[0].pageY);else{const F=.5*(b[0].pageX+b[1].pageX),K=.5*(b[0].pageY+b[1].pageY);x.set(F,K)}}function Ge(){if(b.length==1)d.set(b[0].pageX,b[0].pageY);else{const F=.5*(b[0].pageX+b[1].pageX),K=.5*(b[0].pageY+b[1].pageY);d.set(F,K)}}function Qe(){const F=b[0].pageX-b[1].pageX,K=b[0].pageY-b[1].pageY,ge=Math.sqrt(F*F+K*K);M.set(0,ge)}function it(){i.enableZoom&&Qe(),i.enablePan&&Ge()}function Ve(){i.enableZoom&&Qe(),i.enableRotate&&ut()}function gt(F){if(b.length==1)S.set(F.pageX,F.pageY);else{const ge=xe(F),U=.5*(F.pageX+ge.x),fe=.5*(F.pageY+ge.y);S.set(U,fe)}v.subVectors(S,x).multiplyScalar(i.rotateSpeed);const K=i.domElement;K&&(I(2*Math.PI*v.x/K.clientHeight),j(2*Math.PI*v.y/K.clientHeight)),x.copy(S)}function k(F){if(b.length==1)g.set(F.pageX,F.pageY);else{const K=xe(F),ge=.5*(F.pageX+K.x),U=.5*(F.pageY+K.y);g.set(ge,U)}_.subVectors(g,d).multiplyScalar(i.panSpeed),O(_.x,_.y),d.copy(g)}function dt(F){const K=xe(F),ge=F.pageX-K.x,U=F.pageY-K.y,fe=Math.sqrt(ge*ge+U*U);E.set(0,fe),T.set(0,Math.pow(E.y/M.y,i.zoomSpeed)),q(T.y),M.copy(E)}function Je(F){i.enableZoom&&dt(F),i.enablePan&&k(F)}function ot(F){i.enableZoom&&dt(F),i.enableRotate&&gt(F)}function Ae(F){var K,ge;i.enabled!==!1&&(b.length===0&&((K=i.domElement)==null||K.ownerDocument.addEventListener("pointermove",P),(ge=i.domElement)==null||ge.ownerDocument.addEventListener("pointerup",y)),Re(F),F.pointerType==="touch"?ve(F):D(F))}function P(F){i.enabled!==!1&&(F.pointerType==="touch"?le(F):z(F))}function y(F){var K,ge,U;oe(F),b.length===0&&((K=i.domElement)==null||K.releasePointerCapture(F.pointerId),(ge=i.domElement)==null||ge.ownerDocument.removeEventListener("pointermove",P),(U=i.domElement)==null||U.ownerDocument.removeEventListener("pointerup",y)),i.dispatchEvent(a),l=o.NONE}function D(F){let K;switch(F.button){case 0:K=i.mouseButtons.LEFT;break;case 1:K=i.mouseButtons.MIDDLE;break;case 2:K=i.mouseButtons.RIGHT;break;default:K=-1}switch(K){case fs.DOLLY:if(i.enableZoom===!1)return;je(F),l=o.DOLLY;break;case fs.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enablePan===!1)return;te(F),l=o.PAN}else{if(i.enableRotate===!1)return;Ue(F),l=o.ROTATE}break;case fs.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enableRotate===!1)return;Ue(F),l=o.ROTATE}else{if(i.enablePan===!1)return;te(F),l=o.PAN}break;default:l=o.NONE}l!==o.NONE&&i.dispatchEvent(s)}function z(F){if(i.enabled!==!1)switch(l){case o.ROTATE:if(i.enableRotate===!1)return;ie(F);break;case o.DOLLY:if(i.enableZoom===!1)return;Ee(F);break;case o.PAN:if(i.enablePan===!1)return;Oe(F);break}}function ee(F){i.enabled===!1||i.enableZoom===!1||l!==o.NONE&&l!==o.ROTATE||(F.preventDefault(),i.dispatchEvent(s),Me(F),i.dispatchEvent(a))}function V(F){i.enabled===!1||i.enablePan===!1||$e(F)}function ve(F){switch(ce(F),b.length){case 1:switch(i.touches.ONE){case ps.ROTATE:if(i.enableRotate===!1)return;ut(),l=o.TOUCH_ROTATE;break;case ps.PAN:if(i.enablePan===!1)return;Ge(),l=o.TOUCH_PAN;break;default:l=o.NONE}break;case 2:switch(i.touches.TWO){case ps.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;it(),l=o.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ve(),l=o.TOUCH_DOLLY_ROTATE;break;default:l=o.NONE}break;default:l=o.NONE}l!==o.NONE&&i.dispatchEvent(s)}function le(F){switch(ce(F),l){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;gt(F),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;k(F),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Je(F),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(F),i.update();break;default:l=o.NONE}}function _e(F){i.enabled!==!1&&F.preventDefault()}function Re(F){b.push(F)}function oe(F){delete L[F.pointerId];for(let K=0;K<b.length;K++)if(b[K].pointerId==F.pointerId){b.splice(K,1);return}}function ce(F){let K=L[F.pointerId];K===void 0&&(K=new Ie,L[F.pointerId]=K),K.set(F.pageX,F.pageY)}function xe(F){const K=F.pointerId===b[0].pointerId?b[1]:b[0];return L[K.pointerId]}this.dollyIn=(F=B())=>{ne(F),i.update()},this.dollyOut=(F=B())=>{q(F),i.update()},this.getScale=()=>p,this.setScale=F=>{$(F),i.update()},this.getZoomScale=()=>B(),n!==void 0&&this.connect(n),this.update()}}var cC=Object.defineProperty,uC=(t,e,n)=>e in t?cC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kr=(t,e,n)=>(uC(t,typeof e!="symbol"?e+"":e,n),n);class zo{constructor(){Kr(this,"enabled",!0),Kr(this,"needsSwap",!0),Kr(this,"clear",!1),Kr(this,"renderToScreen",!1)}setSize(e,n){}render(e,n,i,r,s){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}class Vx{constructor(e){Kr(this,"camera",new Zs(-1,1,1,-1,0,1)),Kr(this,"geometry",new Hn(2,2)),Kr(this,"mesh"),this.mesh=new Ln(this.geometry,e)}get material(){return this.mesh.material}set material(e){this.mesh.material=e}dispose(){this.mesh.geometry.dispose()}render(e){e.render(this.mesh,this.camera)}}var dC=Object.defineProperty,hC=(t,e,n)=>e in t?dC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Il=(t,e,n)=>(hC(t,typeof e!="symbol"?e+"":e,n),n);class Ug extends zo{constructor(e,n="tDiffuse"){super(),Il(this,"textureID"),Il(this,"uniforms"),Il(this,"material"),Il(this,"fsQuad"),this.textureID=n,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):(this.uniforms=Rc.clone(e.uniforms),this.material=new Ot({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vx(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.fsQuad.dispose(),this.material.dispose()}}const tf={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`
    varying vec2 vUv;

    void main() {

    	vUv = uv;
    	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`
    uniform float opacity;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    void main() {

    	vec4 texel = texture2D( tDiffuse, vUv );
    	gl_FragColor = opacity * texel;

    }
  `},fC={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`
    varying vec2 vUv;

    void main() {

    	vUv = uv;

    	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 defaultColor;
    uniform float defaultOpacity;
    uniform float luminosityThreshold;
    uniform float smoothWidth;

    varying vec2 vUv;

    void main() {

    	vec4 texel = texture2D( tDiffuse, vUv );

    	vec3 luma = vec3( 0.299, 0.587, 0.114 );

    	float v = dot( texel.xyz, luma );

    	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

    	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

    	gl_FragColor = mix( outputColor, texel, alpha );

    }
  `};var pC=Object.defineProperty,mC=(t,e,n)=>e in t?pC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Og=(t,e,n)=>(mC(t,typeof e!="symbol"?e+"":e,n),n);const Hx=(()=>{const t=class extends zo{constructor(n,i,r,s){super(),this.strength=i!==void 0?i:1,this.radius=r,this.threshold=s,this.resolution=n!==void 0?new Ie(n.x,n.y):new Ie(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new In(a,o,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const m=new In(a,o,{type:si});m.texture.name="UnrealBloomPass.h"+p,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const x=new In(a,o,{type:si});x.texture.name="UnrealBloomPass.v"+p,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),a=Math.round(a/2),o=Math.round(o/2)}const l=fC;this.highPassUniforms=Rc.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[p])),this.separableBlurMaterials[p].uniforms.texSize.value=new Ie(a,o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=tf;this.copyUniforms=Rc.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ot({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Mo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new pp,this.fsQuad=new Vx(null)}dispose(){for(let n=0;n<this.renderTargetsHorizontal.length;n++)this.renderTargetsHorizontal[n].dispose();for(let n=0;n<this.renderTargetsVertical.length;n++)this.renderTargetsVertical[n].dispose();this.renderTargetBright.dispose();for(let n=0;n<this.separableBlurMaterials.length;n++)this.separableBlurMaterials[n].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(n,i){let r=Math.round(n/2),s=Math.round(i/2);this.renderTargetBright.setSize(r,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,s),this.renderTargetsVertical[a].setSize(r,s),this.separableBlurMaterials[a].uniforms.texSize.value=new Ie(r,s),r=Math.round(r/2),s=Math.round(s/2)}render(n,i,r,s,a){n.getClearColor(this._oldClearColor),this.oldClearAlpha=n.getClearAlpha();const o=n.autoClear;n.autoClear=!1,n.setClearColor(this.clearColor,0),a&&n.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,n.setRenderTarget(null),n.clear(),this.fsQuad.render(n)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,n.setRenderTarget(this.renderTargetBright),n.clear(),this.fsQuad.render(n);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=t.BlurDirectionX,n.setRenderTarget(this.renderTargetsHorizontal[c]),n.clear(),this.fsQuad.render(n),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=t.BlurDirectionY,n.setRenderTarget(this.renderTargetsVertical[c]),n.clear(),this.fsQuad.render(n),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,n.setRenderTarget(this.renderTargetsHorizontal[0]),n.clear(),this.fsQuad.render(n),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&n.state.buffers.stencil.setTest(!0),this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(r),this.fsQuad.render(n)),n.setClearColor(this._oldClearColor,this.oldClearAlpha),n.autoClear=o}getSeperableBlurMaterial(n){return new Ot({defines:{KERNEL_RADIUS:n,SIGMA:n},uniforms:{colorTexture:{value:null},texSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(n){return new Ot({defines:{NUM_MIPS:n},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};let e=t;return Og(e,"BlurDirectionX",new Ie(1,0)),Og(e,"BlurDirectionY",new Ie(0,1)),e})();var gC=Object.defineProperty,vC=(t,e,n)=>e in t?gC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ad=(t,e,n)=>(vC(t,typeof e!="symbol"?e+"":e,n),n);class kg extends zo{constructor(e,n){super(),ad(this,"scene"),ad(this,"camera"),ad(this,"inverse"),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class xC extends zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}var _C=Object.defineProperty,yC=(t,e,n)=>e in t?_C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Qn=(t,e,n)=>(yC(t,typeof e!="symbol"?e+"":e,n),n);class jx{constructor(e,n){if(Qn(this,"renderer"),Qn(this,"_pixelRatio"),Qn(this,"_width"),Qn(this,"_height"),Qn(this,"renderTarget1"),Qn(this,"renderTarget2"),Qn(this,"writeBuffer"),Qn(this,"readBuffer"),Qn(this,"renderToScreen"),Qn(this,"passes",[]),Qn(this,"copyPass"),Qn(this,"clock"),this.renderer=e,n===void 0){const i={minFilter:bt,magFilter:bt,format:ii},r=e.getSize(new Ie);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,n=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,i),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,tf===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ug===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ug(tf),this.copyPass.material.blending=Ni,this.clock=new Lx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;const r=this.passes.length;for(let s=0;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}kg!==void 0&&(a instanceof kg?i=!0:a instanceof xC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}var SC=Object.defineProperty,MC=(t,e,n)=>e in t?SC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zr=(t,e,n)=>(MC(t,typeof e!="symbol"?e+"":e,n),n);class Gx extends zo{constructor(e,n,i,r,s=0){super(),zr(this,"scene"),zr(this,"camera"),zr(this,"overrideMaterial"),zr(this,"clearColor"),zr(this,"clearAlpha"),zr(this,"clearDepth",!1),zr(this,"_oldClearColor",new Xe),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.needsSwap=!1}render(e,n,i){let r=e.autoClear;e.autoClear=!1;let s,a=null;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}class wC{constructor(e){this.activeVisual=null,this.bloomEnabled=!1,this.handleResize=()=>{const n=window.innerWidth,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.composer.setSize(n,i)},this.renderer=new _p({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,1),this.scene=new mp,this.camera=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,15),this.camera.lookAt(0,0,0),this.controls=new Bx(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=50,this.composer=new jx(this.renderer),this.renderPass=new Gx(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new Hx(new Ie(window.innerWidth,window.innerHeight),1.5,.4,.85),this.composer.addPass(this.bloomPass),window.addEventListener("resize",this.handleResize)}updateAutoOrbit(e,n){e?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=n):this.controls.autoRotate=!1}updateBloom(e,n,i,r){this.bloomEnabled=e,this.bloomPass.strength=n,this.bloomPass.radius=i,this.bloomPass.threshold=r}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}setActiveVisual(e){this.activeVisual&&this.scene.remove(this.activeVisual),this.activeVisual=e,this.scene.add(e)}render(){this.controls.update(),this.bloomEnabled?this.composer.render():this.renderer.render(this.scene,this.camera)}getScene(){return this.scene}getCamera(){return this.camera}updateCameraAndRenderer(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.composer.setSize(e,n)}setRenderSizeForRecording(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.composer.setSize(e,n)}cleanup(){window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.renderer.dispose()}}var $t=(t=>(t.PLANE="plane",t.SPHERE="sphere",t.ICOSPHERE="icosphere",t.TORUS="torus",t.CUBE="cube",t.CYLINDER="cylinder",t))($t||{}),Ut=(t=>(t.WIREFRAME="wireframe",t.POINTS="points",t.PARTICLES="particles",t))(Ut||{}),Cn=(t=>(t.LOW="low",t.MEDIUM="medium",t.HIGH="high",t))(Cn||{}),mr=(t=>(t.LOW="low",t.MEDIUM="medium",t.HIGH="high",t))(mr||{});const tc={quality:"medium",fieldSize:20,coreSize:2.5,coreBrightness:1.8,coreColor:"#00aaff",outerSize:6,outerOpacity:.25,outerColor:"#ff44aa",turbulence:1.5,noiseSpeed:.2,bassReactivity:1,highsReactivity:.6,energyReactivity:1,peakBurst:!0,size:3},Bo=`
//
// 3D Simplex Noise implementation
// Description : Array and textureless GLSL 3D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under MIT License.
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}
`,bC=`
${Bo}

uniform float uTime;
uniform float uDisplacement;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uSubBand;
uniform float uBassBand;
uniform float uMidsBand;
uniform float uHighsBand;
uniform float uSubWeight;
uniform float uBassWeight;
uniform float uMidsWeight;
uniform float uHighsWeight;
uniform float uPeakPulse;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;

void main() {
  vec3 pos = position;
  vec3 norm = normal;

  vec3 noisePos = pos * uNoiseScale + vec3(uTime * uNoiseSpeed);
  float noise = snoise(noisePos);

  float audioDrive =
    uSubBand * uSubWeight +
    uBassBand * uBassWeight +
    uMidsBand * uMidsWeight +
    uHighsBand * uHighsWeight;

  float totalDisplacement = uDisplacement * (noise * 0.5 + 0.5) * (1.0 + audioDrive * 2.0);
  totalDisplacement += uPeakPulse * 0.5;

  pos += norm * totalDisplacement;

  vNormal = normalize(normalMatrix * norm);
  vPosition = pos;
  vDisplacement = totalDisplacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,EC=`
varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;

uniform float uSubBand;
uniform float uBassBand;
uniform float uMidsBand;
uniform float uHighsBand;
uniform float uPeakPulse;
uniform vec3 uBaseColor;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));

  float diffuse = max(dot(normal, lightDir), 0.0) * 0.7 + 0.3;

  float audioIntensity = (uBassBand * 0.4 + uMidsBand * 0.3 + uHighsBand * 0.3);

  vec3 color = uBaseColor * (1.0 + audioIntensity * 0.5);
  color += vec3(uPeakPulse * 0.3);

  color *= diffuse;

  gl_FragColor = vec4(color, 1.0);
}
`,TC=`
${Bo}

uniform float uTime;
uniform float uDisplacement;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uSubBand;
uniform float uBassBand;
uniform float uMidsBand;
uniform float uHighsBand;
uniform float uSubWeight;
uniform float uBassWeight;
uniform float uMidsWeight;
uniform float uHighsWeight;
uniform float uPeakPulse;
uniform float uPointSize;
uniform vec3 uBaseColor;

varying vec3 vColor;
varying float vAudioIntensity;

void main() {
  vec3 pos = position;
  vec3 norm = normal;

  vec3 noisePos = pos * uNoiseScale + vec3(uTime * uNoiseSpeed);
  float noise = snoise(noisePos);

  float audioDrive =
    uSubBand * uSubWeight +
    uBassBand * uBassWeight +
    uMidsBand * uMidsWeight +
    uHighsBand * uHighsWeight;

  float totalDisplacement = uDisplacement * (noise * 0.5 + 0.5) * (1.0 + audioDrive * 2.0);
  totalDisplacement += uPeakPulse * 0.5;

  pos += norm * totalDisplacement;

  vAudioIntensity = audioDrive;
  vColor = uBaseColor + vec3(audioDrive * 0.3);

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  float sizeMultiplier = 1.0 + audioDrive * 0.5 + uPeakPulse * 0.3;
  gl_PointSize = uPointSize * sizeMultiplier * (50.0 / -mvPosition.z);
}
`,CC=`
varying vec3 vColor;
varying float vAudioIntensity;

void main() {
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);

  if (dist > 0.5) {
    discard;
  }

  float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

  vec3 finalColor = vColor * (0.8 + vAudioIntensity * 0.4);

  gl_FragColor = vec4(finalColor, alpha);
}
`;class od{constructor(){this.geometry=null,this.material=null,this.mesh=null,this.points=null,this.peakPulseValue=0,this.peakPulseTime=0,this.currentGeometryType=$t.SPHERE,this.currentDetailLevel=Cn.MEDIUM,this.currentRenderStyle=Ut.WIREFRAME}createGeometry(e,n){const i=this.getSegmentCount(n,e);let r;switch(e){case $t.PLANE:r=new Hn(4,4,i,i);break;case $t.SPHERE:r=new ua(2,i,i);break;case $t.ICOSPHERE:r=new xp(2,n===Cn.LOW?1:n===Cn.MEDIUM?2:3);break;case $t.TORUS:r=new Po(2,.6,i/2,i);break;case $t.CUBE:r=new Cr(3,3,3,i/2,i/2,i/2);break;case $t.CYLINDER:r=new Ro(1.5,1.5,3,i,i/2);break;default:r=new ua(2,i,i);break}return r}getSegmentCount(e,n){switch(e){case Cn.LOW:return 32;case Cn.MEDIUM:return 64;case Cn.HIGH:return 128;default:return 64}}createMaterial(e){const n=new Xe(e);return new Ot({vertexShader:bC,fragmentShader:EC,uniforms:{uTime:{value:0},uDisplacement:{value:.5},uNoiseScale:{value:2},uNoiseSpeed:{value:.5},uSubBand:{value:0},uBassBand:{value:0},uMidsBand:{value:0},uHighsBand:{value:0},uSubWeight:{value:.3},uBassWeight:{value:.5},uMidsWeight:{value:.3},uHighsWeight:{value:.2},uPeakPulse:{value:0},uBaseColor:{value:n}},wireframe:!1})}createPointsMaterial(e,n){const i=new Xe(e);return new Ot({vertexShader:TC,fragmentShader:CC,uniforms:{uTime:{value:0},uDisplacement:{value:.5},uNoiseScale:{value:2},uNoiseSpeed:{value:.5},uSubBand:{value:0},uBassBand:{value:0},uMidsBand:{value:0},uHighsBand:{value:0},uSubWeight:{value:.3},uBassWeight:{value:.5},uMidsWeight:{value:.3},uHighsWeight:{value:.2},uPeakPulse:{value:0},uBaseColor:{value:i},uPointSize:{value:n}},transparent:!0,depthWrite:!0,blending:Jr})}applyPointDensity(e,n){if(n>=1)return e;const i=e.getAttribute("position"),r=e.getAttribute("normal");if(!i||!r)return e;const s=Math.max(1,Math.floor(1/n)),a=i.count,o=Math.floor(a/s),l=new Float32Array(o*3),c=new Float32Array(o*3);let h=0;for(let p=0;p<a;p+=s)l[h*3]=i.getX(p),l[h*3+1]=i.getY(p),l[h*3+2]=i.getZ(p),c[h*3]=r.getX(p),c[h*3+1]=r.getY(p),c[h*3+2]=r.getZ(p),h++;const u=new It;return u.setAttribute("position",new hn(l,3)),u.setAttribute("normal",new hn(c,3)),u}initialize(e){this.currentGeometryType=e.geometryType,this.currentDetailLevel=e.detailLevel,this.currentRenderStyle=e.renderStyle;let n=this.createGeometry(e.geometryType,e.detailLevel);return e.renderStyle===Ut.POINTS?(e.pointDensity<1&&(n=this.applyPointDensity(n,e.pointDensity)),this.geometry=n,this.material=this.createPointsMaterial(e.baseColor,e.pointSize),this.points=new Co(this.geometry,this.material),this.points):(this.geometry=n,this.material=this.createMaterial(e.baseColor),this.material.wireframe=e.renderStyle===Ut.WIREFRAME,this.mesh=new Ln(this.geometry,this.material),this.mesh)}updateSettings(e){if(this.material){if(this.material.uniforms.uDisplacement.value=e.displacement,this.material.uniforms.uNoiseScale.value=e.noiseScale,this.material.uniforms.uNoiseSpeed.value=e.noiseSpeed,this.material.uniforms.uSubWeight.value=e.subWeight,this.material.uniforms.uBassWeight.value=e.bassWeight,this.material.uniforms.uMidsWeight.value=e.midsWeight,this.material.uniforms.uHighsWeight.value=e.highsWeight,this.material.uniforms.uPointSize&&(this.material.uniforms.uPointSize.value=e.pointSize),this.material.uniforms.uBaseColor){const n=new Xe(e.baseColor);this.material.uniforms.uBaseColor.value=n}this.mesh&&this.material&&(this.material.wireframe=e.renderStyle===Ut.WIREFRAME)}}update(e,n,i){i.pulseOnPeak&&n.peakTrigger&&(this.peakPulseValue=1,this.peakPulseTime=e);const r=Math.max(0,1-(e-this.peakPulseTime)/200);this.peakPulseValue=r,this.material&&(this.material.uniforms.uTime.value=e/1e3,this.material.uniforms.uSubBand.value=n.sub,this.material.uniforms.uBassBand.value=n.bass,this.material.uniforms.uMidsBand.value=n.mids,this.material.uniforms.uHighsBand.value=n.highs,this.material.uniforms.uPeakPulse.value=this.peakPulseValue)}getObject(){return this.currentRenderStyle===Ut.POINTS?this.points:this.mesh}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.mesh=null,this.points=null}}const AC=`
${Bo}

uniform float uTime;
uniform float uTurbulence;
uniform float uFieldSize;
uniform float uCoreSize;
uniform float uCoreBrightness;
uniform float uNoiseSpeed;
uniform float uEnergy;
uniform float uBass;
uniform float uMids;
uniform float uHighs;
uniform float uPeakBurst;
uniform float uBassReactivity;
uniform float uHighsReactivity;
uniform float uEnergyReactivity;
uniform vec3  uCoreColor;

varying vec3  vColor;
varying float vAlpha;
varying float vBrightness;

void main() {
  vec3 pos = position;

  // Layered noise for organic turbulence
  vec3 noisePos  = pos * 0.25 + vec3(uTime * uNoiseSpeed);
  vec3 noisePos2 = pos * 0.08 + vec3(uTime * uNoiseSpeed * 0.4 + 50.0);

  vec3 noiseVel = vec3(
    snoise(noisePos),
    snoise(noisePos + vec3(100.0)),
    snoise(noisePos + vec3(200.0))
  );
  vec3 noiseVel2 = vec3(
    snoise(noisePos2),
    snoise(noisePos2 + vec3(300.0)),
    snoise(noisePos2 + vec3(400.0))
  );

  // Bass drives large slow movement, highs drive small fast jitter
  float bassMove  = uBass  * uBassReactivity  * 10.0;
  float highsMove = uHighs * uHighsReactivity *  3.0;

  pos += noiseVel  * (uTurbulence + bassMove);
  pos += noiseVel2 * highsMove;

  // Peak burst — explosive outward push
  float burstStrength = uPeakBurst * 18.0;
  pos += normalize(pos + 0.001) * burstStrength;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  float depth = max(-mvPosition.z, 0.1);

  // Perspective-correct size with audio energy boost
  float energyBoost = 1.0 + uEnergy * uEnergyReactivity * 6.0 + uPeakBurst * 5.0;
  float sz = uCoreSize * (300.0 / depth) * energyBoost;
  gl_PointSize = clamp(sz, 1.0, 40.0);
  gl_Position  = projectionMatrix * mvPosition;

  // Color: shift from coreColor toward white at high energy
  float whiteness = uEnergy * uEnergyReactivity * 0.6 + uHighs * 0.3 + uPeakBurst * 0.5;
  vColor      = mix(uCoreColor, vec3(1.0), clamp(whiteness, 0.0, 0.85));
  vBrightness = uCoreBrightness * 0.4 + uEnergy * uEnergyReactivity * 0.8 + uPeakBurst * 1.2;
  vAlpha      = 1.0;
}
`,RC=`
varying vec3  vColor;
varying float vAlpha;
varying float vBrightness;

void main() {
  vec2  center = gl_PointCoord - vec2(0.5);
  float dist   = length(center) * 2.0;
  if (dist > 1.0) discard;

  // Soft bright core with sharp falloff at edge
  float core  = 1.0 - smoothstep(0.0, 0.35, dist);   // tight bright center
  float glow  = 1.0 - smoothstep(0.0, 1.0,  dist);   // wider soft halo
  float alpha = (core * 0.35 + glow * 0.12) * vAlpha;
  alpha = clamp(alpha, 0.0, 1.0);

  vec3 color = vColor * vBrightness;
  gl_FragColor = vec4(color, alpha);
}
`,PC=`
${Bo}

uniform float uTime;
uniform float uTurbulence;
uniform float uFieldSize;
uniform float uOuterSize;
uniform float uOuterOpacity;
uniform float uNoiseSpeed;
uniform float uEnergy;
uniform float uBass;
uniform float uHighs;
uniform float uPeakBurst;
uniform float uBassReactivity;
uniform float uEnergyReactivity;
uniform vec3  uOuterColor;

varying vec3  vColor;
varying float vAlpha;

void main() {
  vec3 pos = position;

  // Slower, larger-scale noise for the outer cloud
  vec3 noisePos = pos * 0.12 + vec3(uTime * uNoiseSpeed * 0.3);
  vec3 noiseVel = vec3(
    snoise(noisePos),
    snoise(noisePos + vec3(500.0)),
    snoise(noisePos + vec3(600.0))
  );

  float bassMove = uBass * uBassReactivity * 8.0;
  pos += noiseVel * (uTurbulence * 0.6 + bassMove);
  pos += normalize(pos + 0.001) * uPeakBurst * 12.0;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  float depth = max(-mvPosition.z, 0.1);

  float energyBoost = 1.0 + uEnergy * uEnergyReactivity * 3.0 + uPeakBurst * 2.0;
  float sz = uOuterSize * (300.0 / depth) * energyBoost;
  gl_PointSize = clamp(sz, 2.0, 80.0);
  gl_Position  = projectionMatrix * mvPosition;

  // Outer layer shifts color with bass
  float bassShift = uBass * uBassReactivity * 0.5;
  vColor = mix(uOuterColor, vec3(1.0, 0.3, 0.8), bassShift);
  vAlpha = uOuterOpacity * (1.0 + uEnergy * uEnergyReactivity * 0.8);
}
`,NC=`
varying vec3  vColor;
varying float vAlpha;

void main() {
  vec2  center = gl_PointCoord - vec2(0.5);
  float dist   = length(center) * 2.0;
  if (dist > 1.0) discard;

  // Pure soft gaussian — no hard core
  float alpha = exp(-dist * dist * 3.5) * vAlpha;
  alpha = clamp(alpha, 0.0, 1.0);

  gl_FragColor = vec4(vColor, alpha);
}
`;function Ll(t){const e=new Xe(t);return new N(e.r,e.g,e.b)}class ld{constructor(){this.coreGeometry=null,this.coreMaterial=null,this.corePoints=null,this.outerGeometry=null,this.outerMaterial=null,this.outerPoints=null,this.group=null,this.peakBurstValue=0,this.peakBurstTime=0,this.currentQuality=mr.MEDIUM,this.currentFieldSize=20}getParticleCount(e){switch(e){case mr.LOW:return{core:12e3,outer:6e3};case mr.MEDIUM:return{core:3e4,outer:12e3};case mr.HIGH:return{core:6e4,outer:2e4};default:return{core:3e4,outer:12e3}}}createPositions(e,n,i=1){const r=new Float32Array(e*3),s=n/2;for(let a=0;a<e;a++){const o=a*3,l=Math.pow(Math.random(),.3)*i,c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);r[o]=Math.sin(h)*Math.cos(c)*s*l,r[o+1]=Math.sin(h)*Math.sin(c)*s*l,r[o+2]=Math.cos(h)*s*l}return r}createCoreMaterial(e){return new Ot({vertexShader:AC,fragmentShader:RC,uniforms:{uTime:{value:0},uTurbulence:{value:e.turbulence},uFieldSize:{value:e.fieldSize},uCoreSize:{value:e.coreSize},uCoreBrightness:{value:e.coreBrightness},uNoiseSpeed:{value:e.noiseSpeed},uEnergy:{value:0},uBass:{value:0},uMids:{value:0},uHighs:{value:0},uPeakBurst:{value:0},uBassReactivity:{value:e.bassReactivity},uHighsReactivity:{value:e.highsReactivity},uEnergyReactivity:{value:e.energyReactivity},uCoreColor:{value:Ll(e.coreColor)}},transparent:!0,depthWrite:!1,blending:Mo})}createOuterMaterial(e){return new Ot({vertexShader:PC,fragmentShader:NC,uniforms:{uTime:{value:0},uTurbulence:{value:e.turbulence},uFieldSize:{value:e.fieldSize},uOuterSize:{value:e.outerSize},uOuterOpacity:{value:e.outerOpacity},uNoiseSpeed:{value:e.noiseSpeed},uEnergy:{value:0},uBass:{value:0},uHighs:{value:0},uPeakBurst:{value:0},uBassReactivity:{value:e.bassReactivity},uEnergyReactivity:{value:e.energyReactivity},uOuterColor:{value:Ll(e.outerColor)}},transparent:!0,depthWrite:!1,blending:Mo})}initialize(e){this.currentQuality=e.quality,this.currentFieldSize=e.fieldSize;const n=this.getParticleCount(e.quality),i=this.createPositions(n.core,e.fieldSize,1);this.coreGeometry=new It,this.coreGeometry.setAttribute("position",new hn(i,3)),this.coreMaterial=this.createCoreMaterial(e),this.corePoints=new Co(this.coreGeometry,this.coreMaterial);const r=this.createPositions(n.outer,e.fieldSize,1.3);return this.outerGeometry=new It,this.outerGeometry.setAttribute("position",new hn(r,3)),this.outerMaterial=this.createOuterMaterial(e),this.outerPoints=new Co(this.outerGeometry,this.outerMaterial),this.group=new js,this.group.add(this.outerPoints),this.group.add(this.corePoints),this.group}update(e,n,i){(i.quality!==this.currentQuality||i.fieldSize!==this.currentFieldSize)&&this.recreate(i),i.peakBurst&&n.peakTrigger&&(this.peakBurstValue=1,this.peakBurstTime=e),this.peakBurstValue=Math.max(0,1-(e-this.peakBurstTime)/200);const r=e/1e3;if(this.coreMaterial){const s=this.coreMaterial.uniforms;s.uTime.value=r,s.uTurbulence.value=i.turbulence,s.uFieldSize.value=i.fieldSize,s.uCoreSize.value=i.coreSize,s.uCoreBrightness.value=i.coreBrightness,s.uNoiseSpeed.value=i.noiseSpeed,s.uEnergy.value=n.energy,s.uBass.value=n.bass,s.uMids.value=n.mids,s.uHighs.value=n.highs,s.uPeakBurst.value=this.peakBurstValue,s.uBassReactivity.value=i.bassReactivity,s.uHighsReactivity.value=i.highsReactivity,s.uEnergyReactivity.value=i.energyReactivity,s.uCoreColor.value=Ll(i.coreColor)}if(this.outerMaterial){const s=this.outerMaterial.uniforms;s.uTime.value=r,s.uTurbulence.value=i.turbulence,s.uFieldSize.value=i.fieldSize,s.uOuterSize.value=i.outerSize,s.uOuterOpacity.value=i.outerOpacity,s.uNoiseSpeed.value=i.noiseSpeed,s.uEnergy.value=n.energy,s.uBass.value=n.bass,s.uHighs.value=n.highs,s.uPeakBurst.value=this.peakBurstValue,s.uBassReactivity.value=i.bassReactivity,s.uEnergyReactivity.value=i.energyReactivity,s.uOuterColor.value=Ll(i.outerColor)}}recreate(e){if(!this.group)return;this.currentQuality=e.quality,this.currentFieldSize=e.fieldSize;const n=this.getParticleCount(e.quality),i=this.coreGeometry;this.coreGeometry=new It,this.coreGeometry.setAttribute("position",new hn(this.createPositions(n.core,e.fieldSize,1),3)),this.corePoints&&(this.corePoints.geometry=this.coreGeometry),i==null||i.dispose();const r=this.outerGeometry;this.outerGeometry=new It,this.outerGeometry.setAttribute("position",new hn(this.createPositions(n.outer,e.fieldSize,1.3),3)),this.outerPoints&&(this.outerPoints.geometry=this.outerGeometry),r==null||r.dispose()}getObject(){return this.group}dispose(){var e,n,i,r;(e=this.coreGeometry)==null||e.dispose(),(n=this.coreMaterial)==null||n.dispose(),(i=this.outerGeometry)==null||i.dispose(),(r=this.outerMaterial)==null||r.dispose(),this.coreGeometry=null,this.coreMaterial=null,this.outerGeometry=null,this.outerMaterial=null,this.corePoints=null,this.outerPoints=null,this.group=null}}class yp{constructor(){this.mediaRecorder=null,this.recordedChunks=[],this.startTimestamp=0,this.onTimerUpdate=null,this.onError=null,this.onFormatWarning=null,this.timerInterval=null,this.actualMimeType="",this.actualFormat="webm",this.canvas=null,this.renderer=null}isRecording(){return this.mediaRecorder!==null&&this.mediaRecorder.state==="recording"}startRecording(e,n,i,r){if(!this.isRecording())try{this.canvas=e,this.renderer=r,n.width&&n.height&&r&&(r.setRenderSizeForRecording?r.setRenderSizeForRecording(n.width,n.height):r.updateCameraAndRenderer?r.updateCameraAndRenderer(n.width,n.height):(e.width=n.width,e.height=n.height,r.setSize(n.width,n.height,!1)));const s=e.captureStream(n.fps);let a;n.includeAudio&&i?a=new MediaStream([...s.getVideoTracks(),...i.getAudioTracks()]):a=s;const l={draft:{video:5e6,audio:128e3},high:{video:1e7,audio:192e3},ultra:{video:16e6,audio:192e3}}[n.quality],c=['video/mp4;codecs="avc1.42E01E,mp4a.40.2"',"video/mp4"],h=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"];let u="",p=[];n.format==="mp4"?p=c:n.format==="webm"?p=h:p=[...c,...h];for(const x of p)if(MediaRecorder.isTypeSupported(x)){u=x;break}if(!u){this.onError&&this.onError("Recording not supported in this browser");return}n.format==="mp4"&&!u.includes("mp4")&&this.onFormatWarning&&this.onFormatWarning("MP4 format not supported, using WebM instead"),this.actualMimeType=u,this.actualFormat=u.includes("mp4")?"mp4":"webm",this.recordedChunks=[];const m={mimeType:u,videoBitsPerSecond:l.video};n.includeAudio&&(m.audioBitsPerSecond=l.audio),this.mediaRecorder=new MediaRecorder(a,m),this.mediaRecorder.ondataavailable=x=>{x.data&&x.data.size>0&&this.recordedChunks.push(x.data)},this.mediaRecorder.onerror=()=>{this.onError&&this.onError("Recording error occurred"),this.cleanup()},this.mediaRecorder.start(100),this.startTimestamp=Date.now(),this.timerInterval=window.setInterval(()=>{if(this.onTimerUpdate){const x=Math.floor((Date.now()-this.startTimestamp)/1e3);this.onTimerUpdate(x)}},100)}catch{this.onError&&this.onError("Failed to start recording")}}stopRecording(){if(!(!this.mediaRecorder||this.mediaRecorder.state==="inactive"))return new Promise(e=>{if(!this.mediaRecorder){e();return}this.mediaRecorder.onstop=()=>{this.downloadRecording(),this.restoreCanvasSize(),this.cleanup(),e()},this.mediaRecorder.stop(),this.mediaRecorder.stream&&this.mediaRecorder.stream.getTracks().forEach(n=>n.stop())})}restoreCanvasSize(){if(this.canvas&&this.renderer){const e=this.canvas.clientWidth,n=this.canvas.clientHeight;this.renderer.updateCameraAndRenderer?this.renderer.updateCameraAndRenderer(e,n):this.renderer.setSize(e,n,!1)}}downloadRecording(){if(this.recordedChunks.length===0)return;const e=new Blob(this.recordedChunks,{type:this.actualMimeType}),n=URL.createObjectURL(e),i=new Date,r=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0"),o=String(i.getHours()).padStart(2,"0"),l=String(i.getMinutes()).padStart(2,"0"),c=String(i.getSeconds()).padStart(2,"0"),h=this.actualFormat,u=`visualizer-${r}${s}${a}-${o}${l}${c}.${h}`,p=document.createElement("a");p.style.display="none",p.href=n,p.download=u,document.body.appendChild(p),p.click(),setTimeout(()=>{document.body.removeChild(p),URL.revokeObjectURL(n)},100)}cleanup(){this.timerInterval!==null&&(clearInterval(this.timerInterval),this.timerInterval=null),this.mediaRecorder=null,this.recordedChunks=[],this.startTimestamp=0,this.canvas=null,this.renderer=null}setTimerCallback(e){this.onTimerUpdate=e}setErrorCallback(e){this.onError=e}setFormatWarningCallback(e){this.onFormatWarning=e}dispose(){this.isRecording()&&this.stopRecording(),this.cleanup()}}class No{constructor(){this.midiAccess=null,this.messageCallback=null,this.selectedDeviceId=null,this.smoothing=0,this.smoothedValues=new Map}async initialize(){if(!navigator.requestMIDIAccess)return!1;try{return this.midiAccess=await navigator.requestMIDIAccess(),this.setupInputListeners(),!0}catch(e){return console.error("Failed to get MIDI access:",e),!1}}setupInputListeners(){this.midiAccess&&(this.midiAccess.inputs.forEach(e=>{e.onmidimessage=n=>{this.handleMIDIMessage(n,e.id)}}),this.midiAccess.onstatechange=()=>{this.setupInputListeners()})}handleMIDIMessage(e,n){const[i,r,s]=e.data,a=i&240;if(this.messageCallback&&!(this.selectedDeviceId&&this.selectedDeviceId!=="all"&&this.selectedDeviceId!==n)&&a===176){const o=r;let l=s;if(this.smoothing>0){const c=o,h=this.smoothedValues.get(c)??l;l=h+(l-h)*(1-this.smoothing),this.smoothedValues.set(c,l)}this.messageCallback(o,l,n)}}getDevices(){if(!this.midiAccess)return[];const e=[];return this.midiAccess.inputs.forEach(n=>{e.push({id:n.id,name:n.name||"Unknown Device",manufacturer:n.manufacturer||"Unknown",state:n.state})}),e}setMessageCallback(e){this.messageCallback=e}setSelectedDevice(e){this.selectedDeviceId=e}setSmoothing(e){this.smoothing=Math.max(0,Math.min(.9,e))}isSupported(){return!!navigator.requestMIDIAccess}hasAccess(){return!!this.midiAccess}dispose(){this.midiAccess&&this.midiAccess.inputs.forEach(e=>{e.onmidimessage=null}),this.messageCallback=null,this.midiAccess=null}}function Wx(t,e){if(e.isToggle)return t>=64;const n=t/127;return e.min+n*(e.max-e.min)}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Mt=(t,e)=>{const n=J.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},h)=>J.createElement("svg",{ref:h,...DC,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${IC(t)}`,o].join(" "),...c},[...e.map(([u,p])=>J.createElement(u,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=Mt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=Mt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=Mt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=Mt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=Mt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=Mt("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=Mt("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=Mt("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=Mt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=Mt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=Mt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Mt("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=Mt("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=Mt("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=Mt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=Mt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=Mt("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=Mt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Mt("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=Mt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Mt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=Mt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=Mt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=Mt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=Mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function da(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}function ZC({isPlaying:t,currentTime:e,duration:n,volume:i,fileName:r,isLoading:s,error:a,isRecording:o,recordingTime:l,fps:c,includeAudio:h,recordingError:u,recordingQuality:p,recordingFormat:m,audioFeatures:x,onFileUpload:S,onPlayPause:v,onPlayFromBeginning:d,onSeek:g,onVolumeChange:_,onStartRecording:M,onStopRecording:E,onFpsChange:T,onIncludeAudioChange:A,onQualityChange:R,onFormatChange:w,onFullscreen:b}){const[L,H]=J.useState(!1),B=J.useRef(null);J.useEffect(()=>{const $=q=>{B.current&&!B.current.contains(q.target)&&H(!1)};return L&&document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}},[L]);const I=$=>{var ne;const q=(ne=$.target.files)==null?void 0:ne[0];q&&S(q)},j=$=>{const q=parseFloat($.target.value);g(q)},X=$=>{const q=parseFloat($.target.value);_(q)},G=n>0?e/n*100:0,O=$=>{const q=Math.floor($/60),ne=$%60;return`${String(q).padStart(2,"0")}:${String(ne).padStart(2,"0")}`};return f.jsx("div",{className:"fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10",children:f.jsx("div",{className:"max-w-7xl mx-auto px-4 py-3",children:f.jsxs("div",{className:"flex items-center gap-6",children:[f.jsxs("label",{className:"cursor-pointer",children:[f.jsx("input",{type:"file",accept:".mp3,.wav,.aac,.ogg",onChange:I,className:"hidden"}),f.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",children:[f.jsx(Dc,{size:18}),f.jsx("span",{className:"text-sm font-medium",children:"Upload"})]})]}),r&&f.jsx("div",{className:"text-sm text-white/70 truncate max-w-xs",children:r}),s&&f.jsx("div",{className:"text-sm text-white/70",children:"Loading..."}),a&&f.jsx("div",{className:"text-sm text-red-400",children:a}),f.jsx("div",{className:"h-8 w-px bg-white/10"}),f.jsxs("div",{ref:B,className:"flex items-center gap-3 relative",children:[f.jsx("button",{onClick:M,disabled:o||!r,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Start Recording (R)",children:f.jsx(Jc,{size:20,className:o?"fill-red-500 text-red-500":"text-red-500"})}),f.jsx("button",{onClick:E,disabled:!o,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Stop Recording (R)",children:f.jsx(Sp,{size:20,className:"text-white"})}),f.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:O(l)}),f.jsx("button",{onClick:()=>H(!L),disabled:o,className:`p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${L?"bg-white/10":""}`,title:"Recording Settings",children:f.jsx(YC,{size:20})}),L&&f.jsxs("div",{className:"absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-[280px] z-50 shadow-xl",children:[f.jsx("h3",{className:"text-sm font-semibold mb-3 text-white",children:"Recording Settings"}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs text-white/70 mb-1",children:"Quality"}),f.jsxs("select",{value:p,onChange:$=>R($.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:"draft",children:"Draft Quality"}),f.jsx("option",{value:"high",children:"High Quality"}),f.jsx("option",{value:"ultra",children:"Ultra Quality"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs text-white/70 mb-1",children:"Format"}),f.jsxs("select",{value:m,onChange:$=>w($.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:"auto",children:"Auto Format"}),f.jsx("option",{value:"mp4",children:"MP4"}),f.jsx("option",{value:"webm",children:"WebM"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs text-white/70 mb-1",children:"Frame Rate"}),f.jsxs("select",{value:c,onChange:$=>T(Number($.target.value)),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:30,children:"30 FPS"}),f.jsx("option",{value:60,children:"60 FPS"})]})]}),f.jsx("div",{className:"pt-2 border-t border-white/10",children:f.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer",children:[f.jsx("input",{type:"checkbox",checked:h,onChange:$=>A($.target.checked),className:"w-4 h-4 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"}),f.jsx("span",{className:"text-white/90",children:"Include Audio"})]})})]})]}),u&&f.jsx("div",{className:"text-xs text-red-400 absolute top-full left-0 mt-1 whitespace-nowrap",children:u})]}),f.jsx("div",{className:"h-8 w-px bg-white/10"}),f.jsx("button",{onClick:b,className:"p-2 hover:bg-white/10 rounded-lg transition-colors",title:"Fullscreen",children:f.jsx(HC,{size:20})}),f.jsxs("div",{className:"flex-1 flex items-center gap-4",children:[f.jsx("button",{onClick:d,disabled:!r||s,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play from beginning",children:f.jsx($x,{size:24})}),f.jsx("button",{onClick:v,disabled:!r||s,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play/Pause (Spacebar)",children:t?f.jsx(GC,{size:24}):f.jsx(WC,{size:24})}),f.jsxs("div",{className:"flex-1 flex items-center gap-3",children:[f.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:da(e)}),f.jsx("div",{className:"flex-1 relative",children:f.jsx("input",{type:"range",min:"0",max:n||0,value:e,onChange:j,disabled:!r,className:"w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed",style:{background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 ${G}%, rgba(255,255,255,0.1) ${G}%, rgba(255,255,255,0.1) 100%)`}})}),f.jsxs("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:["-",da(Math.max(0,n-e))]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{onClick:()=>_(i>0?0:.7),className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:i>0?f.jsx(qC,{size:20}):f.jsx(KC,{size:20})}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:i,onChange:X,className:"w-24 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"})]})]})]})})})}const Vo="audio-visualizer-presets",Bg="audio-visualizer-presets-version",Vg="3",nf=[{id:"default-1",name:"Electric Sphere",isBuiltIn:!0,createdAt:Date.now(),meshSettings:{geometryType:$t.SPHERE,detailLevel:Cn.MEDIUM,renderStyle:Ut.WIREFRAME,displacement:.8,noiseScale:2.5,noiseSpeed:.6,subWeight:.2,bassWeight:.7,midsWeight:.4,highsWeight:.3,pulseOnPeak:!0,baseColor:"#00ffff",pointSize:2,pointDensity:1},audioSettings:{smoothing:.75,sensitivity:1.2,peakThreshold:.8,peakCooldown:200},globalSettings:{autoOrbit:!0,orbitSpeed:.3,bloom:!0,bloomStrength:1.5,bloomRadius:.4,bloomThreshold:.85,parameterSmoothing:.2}},{id:"default-2",name:"Cosmic Torus",isBuiltIn:!0,createdAt:Date.now(),meshSettings:{geometryType:$t.TORUS,detailLevel:Cn.HIGH,renderStyle:Ut.POINTS,displacement:.5,noiseScale:3,noiseSpeed:.4,subWeight:.3,bassWeight:.5,midsWeight:.5,highsWeight:.6,pulseOnPeak:!0,baseColor:"#ff00ff",pointSize:.2,pointDensity:.7},audioSettings:{smoothing:.8,sensitivity:1,peakThreshold:.75,peakCooldown:250},globalSettings:{autoOrbit:!0,orbitSpeed:.5,bloom:!0,bloomStrength:2,bloomRadius:.5,bloomThreshold:.7,parameterSmoothing:.2}},{id:"default-3",name:"Icosahedral Dream",isBuiltIn:!0,createdAt:Date.now(),meshSettings:{geometryType:$t.ICOSPHERE,detailLevel:Cn.MEDIUM,renderStyle:Ut.WIREFRAME,displacement:1,noiseScale:1.8,noiseSpeed:.5,subWeight:.4,bassWeight:.6,midsWeight:.3,highsWeight:.2,pulseOnPeak:!0,baseColor:"#ffaa00",pointSize:2.5,pointDensity:1},audioSettings:{smoothing:.7,sensitivity:1.3,peakThreshold:.7,peakCooldown:150},globalSettings:{autoOrbit:!0,orbitSpeed:.4,bloom:!0,bloomStrength:1.2,bloomRadius:.3,bloomThreshold:.9,parameterSmoothing:.2}}];function qx(){if(localStorage.getItem(Bg)!==Vg){const n=ya().filter(r=>!r.isBuiltIn),i=[...nf,...n];localStorage.setItem(Vo,JSON.stringify(i)),localStorage.setItem(Bg,Vg)}}function ya(){try{const t=localStorage.getItem(Vo);return t?JSON.parse(t):nf}catch{return nf}}function QC(t){const e=ya(),n={id:`preset-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,name:t.name,isBuiltIn:!1,createdAt:Date.now(),meshSettings:{...t.meshSettings},audioSettings:{...t.audioSettings},globalSettings:{...t.globalSettings}};return e.push(n),localStorage.setItem(Vo,JSON.stringify(e)),n}function JC(t){const n=ya().filter(i=>i.id!==t);localStorage.setItem(Vo,JSON.stringify(n))}function eA(t){return ya().find(n=>n.id===t)||null}function tA(t,e){const n=ya(),i=n.findIndex(r=>r.id===t);i!==-1&&(n[i]={...n[i],name:e.name,meshSettings:{...e.meshSettings},audioSettings:{...e.audioSettings},globalSettings:{...e.globalSettings}},localStorage.setItem(Vo,JSON.stringify(n)))}function nA({onLoadPreset:t,getCurrentPresetData:e}){const[n,i]=J.useState([]),[r,s]=J.useState(!1),[a,o]=J.useState("");J.useEffect(()=>{qx(),l()},[]);const l=()=>{i(ya())},c=()=>{o(""),s(!0)},h=()=>{if(!a.trim())return;const m=e();QC({...m,name:a.trim()}),l(),s(!1),o("")},u=m=>{confirm("Delete this preset?")&&(JC(m),l())},p=m=>{t(m)};return f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[f.jsx(jC,{size:18,className:"text-blue-400"}),f.jsx("h3",{className:"text-sm font-semibold text-white",children:"Presets"})]}),f.jsxs("button",{onClick:c,className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors flex items-center justify-center gap-2",children:[f.jsx($C,{size:16}),"Save Current Preset"]}),r&&f.jsxs("div",{className:"p-3 bg-white/5 border border-white/10 rounded-lg space-y-2",children:[f.jsx("input",{type:"text",value:a,onChange:m=>o(m.target.value),onKeyDown:m=>{m.key==="Enter"&&h(),m.key==="Escape"&&s(!1)},placeholder:"Preset name...",className:"w-full px-2 py-1.5 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500",autoFocus:!0}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:h,disabled:!a.trim(),className:"flex-1 px-2 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white rounded text-xs font-medium transition-colors",children:"Save"}),f.jsx("button",{onClick:()=>s(!1),className:"flex-1 px-2 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors",children:"Cancel"})]})]}),f.jsxs("div",{className:"space-y-1.5 max-h-64 overflow-y-auto",children:[n.map(m=>f.jsxs("div",{className:"flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors group",children:[f.jsxs("button",{onClick:()=>p(m),className:"flex-1 flex items-center gap-2 text-left",children:[f.jsx(UC,{size:14,className:"text-blue-400 flex-shrink-0"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"text-sm text-white truncate",children:m.name}),m.isBuiltIn&&f.jsx("div",{className:"text-xs text-blue-400",children:"Built-in"})]})]}),!m.isBuiltIn&&f.jsx("button",{onClick:()=>u(m.id),className:"p-1.5 hover:bg-red-600/20 rounded transition-colors opacity-0 group-hover:opacity-100",title:"Delete preset",children:f.jsx(Mp,{size:14,className:"text-red-400"})})]},m.id)),n.length===0&&f.jsx("div",{className:"text-center py-4 text-white/40 text-sm",children:"No presets saved yet"})]})]})}function Kx({midiState:t,onEnableChange:e,onDeviceChange:n,onSmoothingChange:i,onLearnModeChange:r,onRemoveMapping:s,onClearMappings:a}){const{isSupported:o,hasAccess:l,isInitializing:c,devices:h,settings:u,learningParameterId:p,lastActivity:m}=t,x=Date.now()-m<100;return o?f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[f.jsx(zg,{size:18,className:"text-green-400"}),f.jsx("h3",{className:"text-sm font-semibold text-white",children:"MIDI"}),x&&f.jsx(Jc,{size:8,className:"text-green-400 fill-green-400 animate-pulse"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("input",{type:"checkbox",id:"midiEnable",checked:u.enabled,onChange:S=>e(S.target.checked),className:"w-4 h-4"}),f.jsx("label",{htmlFor:"midiEnable",className:"text-sm",children:"Enable MIDI"})]}),u.enabled&&c&&f.jsx("p",{className:"text-sm text-blue-400",children:"Requesting MIDI access..."}),u.enabled&&!l&&!c&&f.jsx("p",{className:"text-sm text-yellow-400",children:"MIDI access denied. Please allow MIDI permissions in your browser."}),u.enabled&&l&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Input Device"}),f.jsxs("select",{value:u.selectedDeviceId||"all",onChange:S=>n(S.target.value==="all"?null:S.target.value),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-green-500 text-sm",children:[f.jsx("option",{value:"all",children:"All Inputs"}),h.map(S=>f.jsx("option",{value:S.id,children:S.name},S.id))]}),h.length===0&&f.jsx("p",{className:"text-xs text-white/50 mt-1",children:"No MIDI devices detected"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["MIDI Smoothing: ",u.smoothing.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"0.9",step:"0.05",value:u.smoothing,onChange:S=>i(parseFloat(S.target.value)),className:"w-full"})]}),f.jsxs("div",{className:"pt-2 border-t border-white/10",children:[f.jsx("button",{onClick:()=>r(!u.learnMode),className:`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${u.learnMode?"bg-green-600 hover:bg-green-700 text-white":"bg-white/10 hover:bg-white/20 text-white"}`,children:u.learnMode?"MIDI Learn: ON":"MIDI Learn: OFF"}),u.learnMode&&p&&f.jsx("p",{className:"text-xs text-green-400 mt-2 text-center",children:"Move a MIDI knob to bind it..."})]}),u.mappings.length>0&&f.jsxs("div",{className:"pt-2 border-t border-white/10",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("h4",{className:"text-sm font-semibold",children:"Mappings"}),f.jsx("button",{onClick:a,className:"text-xs text-red-400 hover:text-red-300",children:"Clear All"})]}),f.jsx("div",{className:"space-y-1.5 max-h-48 overflow-y-auto",children:u.mappings.map(S=>f.jsxs("div",{className:"flex items-center justify-between p-2 bg-white/5 rounded text-xs group",children:[f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"text-white truncate",children:S.parameterName}),f.jsxs("div",{className:"text-white/50",children:["CC ",S.ccNumber]})]}),f.jsx("button",{onClick:()=>s(S.parameterId),className:"p-1 hover:bg-red-600/20 rounded opacity-0 group-hover:opacity-100 transition-opacity",title:"Remove mapping",children:f.jsx(Mp,{size:12,className:"text-red-400"})})]},S.parameterId))})]})]})]}):f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[f.jsx(zg,{size:18,className:"text-red-400"}),f.jsx("h3",{className:"text-sm font-semibold text-white",children:"MIDI"})]}),f.jsx("p",{className:"text-sm text-red-400",children:"Web MIDI API not supported in this browser"})]})}function iA({meshSettings:t,audioSettings:e,globalSettings:n,particleSettings:i,audioFeatures:r,midiState:s,onMeshSettingsChange:a,onAudioSettingsChange:o,onGlobalSettingsChange:l,onParticleSettingsChange:c,onHelpClick:h,onReset:u,onLoadPreset:p,onMIDIEnableChange:m,onMIDIDeviceChange:x,onMIDISmoothingChange:S,onMIDILearnModeChange:v,onMIDIRemoveMapping:d,onMIDIClearMappings:g,onParameterClick:_}){const[M,E]=J.useState(!0),[T,A]=J.useState(!0),R=t.renderStyle===Ut.PARTICLES,b=(I=>.1-(I-.05)*.2)(n.parameterSmoothing),L=(I,j,X,G)=>{s.settings.learnMode&&_&&_(I,j,X,G)},H=(I,j)=>{s.settings.learnMode&&_&&_(I,j,0,1,!0)},B=I=>s.settings.learnMode&&s.learningParameterId===I?"ring-2 ring-green-500":"";return f.jsxs("div",{className:`fixed top-16 right-0 bottom-0 bg-black/80 backdrop-blur-md border-l border-white/10 transition-transform duration-300 ${M?"translate-x-0":"translate-x-full"} w-96 overflow-y-auto`,children:[f.jsx("button",{onClick:()=>E(!M),className:"absolute -left-10 top-4 p-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-l-lg hover:bg-white/10 transition-colors",children:M?f.jsx(FC,{size:20}):f.jsx(LC,{size:20})}),f.jsxs("div",{className:"p-6 space-y-6",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h2",{className:"text-xl font-bold",children:"Controls"}),f.jsx("button",{onClick:h,className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:f.jsx(zC,{size:20})})]}),f.jsx("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:f.jsx(nA,{onLoadPreset:p,getCurrentPresetData:()=>({name:"",meshSettings:t,audioSettings:e,globalSettings:n})})}),f.jsx("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:f.jsx(Kx,{midiState:s,onEnableChange:m,onDeviceChange:x,onSmoothingChange:S,onLearnModeChange:v,onRemoveMapping:d,onClearMappings:g})}),T&&f.jsxs("div",{className:"space-y-3 bg-white/5 rounded-lg p-4",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h3",{className:"text-sm font-semibold",children:"Audio Analysis"}),f.jsx("button",{onClick:()=>A(!1),className:"text-xs text-white/50 hover:text-white/80",children:"Hide"})]}),f.jsxs("div",{className:"space-y-2 text-xs",children:[[{label:"Energy",value:r.energy,color:"from-blue-500 to-cyan-500"},{label:"Sub",value:r.sub,color:"bg-red-500"},{label:"Bass",value:r.bass,color:"bg-orange-500"},{label:"Mids",value:r.mids,color:"bg-yellow-500"},{label:"Highs",value:r.highs,color:"bg-cyan-500"}].map(({label:I,value:j,color:X})=>f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("span",{className:"text-white/70",children:I}),f.jsx("span",{className:"font-mono",children:j.toFixed(2)})]}),f.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:f.jsx("div",{className:`h-full ${X.startsWith("from")?`bg-gradient-to-r ${X}`:X}`,style:{width:`${j*100}%`}})})]},I)),f.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/10",children:[f.jsx("span",{className:"text-white/70",children:"Peak Trigger"}),f.jsx("div",{className:`w-3 h-3 rounded-full ${r.peakTrigger?"bg-green-500":"bg-white/20"}`})]})]})]}),!T&&f.jsx("button",{onClick:()=>A(!0),className:"text-sm text-white/50 hover:text-white/80",children:"Show Audio Analysis"}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("h3",{className:"text-lg font-semibold border-b border-white/10 pb-2",children:"Reactive Mesh"}),!R&&f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Geometry"}),f.jsxs("select",{value:t.geometryType,onChange:I=>a({...t,geometryType:I.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:$t.PLANE,children:"Plane"}),f.jsx("option",{value:$t.SPHERE,children:"Sphere"}),f.jsx("option",{value:$t.ICOSPHERE,children:"Icosphere"}),f.jsx("option",{value:$t.TORUS,children:"Torus"}),f.jsx("option",{value:$t.CUBE,children:"Cube"}),f.jsx("option",{value:$t.CYLINDER,children:"Cylinder"})]})]}),!R&&f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Detail Level"}),f.jsxs("select",{value:t.detailLevel,onChange:I=>a({...t,detailLevel:I.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:Cn.LOW,children:"Low"}),f.jsx("option",{value:Cn.MEDIUM,children:"Medium"}),f.jsx("option",{value:Cn.HIGH,children:"High"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Render Style"}),f.jsxs("select",{value:t.renderStyle,onChange:I=>a({...t,renderStyle:I.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:Ut.WIREFRAME,children:"Wireframe"}),f.jsx("option",{value:Ut.POINTS,children:"Points"}),f.jsx("option",{value:Ut.PARTICLES,children:"Particles"})]})]}),!R&&f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Base Color"}),f.jsx("input",{type:"color",value:t.baseColor,onChange:I=>a({...t,baseColor:I.target.value}),className:"w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer"})]}),t.renderStyle===Ut.POINTS&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Point Size: ",t.pointSize.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.1",max:"3",step:b,value:t.pointSize,onChange:I=>a({...t,pointSize:parseFloat(I.target.value)}),onClick:()=>L("pointSize","Point Size",.1,3),className:`w-full ${B("pointSize")}`})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Point Density: ",(t.pointDensity*100).toFixed(0),"%"]}),f.jsx("input",{type:"range",min:"0.1",max:"1",step:b,value:t.pointDensity,onChange:I=>a({...t,pointDensity:parseFloat(I.target.value)}),onClick:()=>L("pointDensity","Point Density",.1,1),className:`w-full ${B("pointDensity")}`})]})]}),!R&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Displacement: ",t.displacement.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"2",step:b,value:t.displacement,onChange:I=>a({...t,displacement:parseFloat(I.target.value)}),onClick:()=>L("displacement","Displacement",0,2),className:`w-full ${B("displacement")}`})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Noise Scale: ",t.noiseScale.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.5",max:"5",step:b,value:t.noiseScale,onChange:I=>a({...t,noiseScale:parseFloat(I.target.value)}),onClick:()=>L("noiseScale","Noise Scale",.5,5),className:`w-full ${B("noiseScale")}`})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Noise Speed: ",t.noiseSpeed.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.1",max:"2",step:b,value:t.noiseSpeed,onChange:I=>a({...t,noiseSpeed:parseFloat(I.target.value)}),onClick:()=>L("noiseSpeed","Noise Speed",.1,2),className:`w-full ${B("noiseSpeed")}`})]}),f.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[f.jsx("h4",{className:"text-sm font-semibold",children:"Band Mapping"}),[{key:"subWeight",label:"Sub",value:t.subWeight},{key:"bassWeight",label:"Bass",value:t.bassWeight},{key:"midsWeight",label:"Mids",value:t.midsWeight},{key:"highsWeight",label:"Highs",value:t.highsWeight}].map(({key:I,label:j,value:X})=>f.jsxs("div",{children:[f.jsxs("label",{className:"block text-xs text-white/70 mb-1",children:[j,": ",X.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:X,onChange:G=>a({...t,[I]:parseFloat(G.target.value)}),onClick:()=>L(I,`${j} Band`,0,1),className:`w-full ${B(I)}`})]},I))]}),f.jsxs("div",{className:`flex items-center gap-2 p-2 rounded ${B("pulseOnPeak")}`,onClick:()=>H("pulseOnPeak","Pulse on Peak"),children:[f.jsx("input",{type:"checkbox",id:"pulseOnPeak",checked:t.pulseOnPeak,onChange:I=>a({...t,pulseOnPeak:I.target.checked}),className:"w-4 h-4"}),f.jsx("label",{htmlFor:"pulseOnPeak",className:"text-sm cursor-pointer",children:"Pulse on Peak"})]})]})]}),R&&f.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/10",children:[f.jsx("h3",{className:"text-lg font-semibold",children:"Particle System"}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quality"}),f.jsxs("select",{value:i.quality,onChange:I=>c({...i,quality:I.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:mr.LOW,children:"Low (18k particles)"}),f.jsx("option",{value:mr.MEDIUM,children:"Medium (42k particles)"}),f.jsx("option",{value:mr.HIGH,children:"High (80k particles)"})]})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Field Size: ",i.fieldSize.toFixed(0)]}),f.jsx("input",{type:"range",min:"5",max:"50",step:"1",value:i.fieldSize,onChange:I=>c({...i,fieldSize:parseFloat(I.target.value)}),className:"w-full"})]}),f.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[f.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"✦ Core Layer"}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Core Color"}),f.jsx("input",{type:"color",value:i.coreColor,onChange:I=>c({...i,coreColor:I.target.value}),className:"w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Core Size: ",i.coreSize.toFixed(1)]}),f.jsx("input",{type:"range",min:"0.5",max:"8",step:"0.1",value:i.coreSize,onChange:I=>c({...i,coreSize:parseFloat(I.target.value)}),className:"w-full"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Core Brightness: ",i.coreBrightness.toFixed(1)]}),f.jsx("input",{type:"range",min:"0.5",max:"4",step:"0.1",value:i.coreBrightness,onChange:I=>c({...i,coreBrightness:parseFloat(I.target.value)}),className:"w-full"})]})]}),f.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[f.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"◎ Outer Layer"}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2",children:"Outer Color"}),f.jsx("input",{type:"color",value:i.outerColor,onChange:I=>c({...i,outerColor:I.target.value}),className:"w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Outer Size: ",i.outerSize.toFixed(1)]}),f.jsx("input",{type:"range",min:"2",max:"20",step:"0.5",value:i.outerSize,onChange:I=>c({...i,outerSize:parseFloat(I.target.value)}),className:"w-full"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Outer Opacity: ",i.outerOpacity.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.01",max:"0.8",step:"0.01",value:i.outerOpacity,onChange:I=>c({...i,outerOpacity:parseFloat(I.target.value)}),className:"w-full"})]})]}),f.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[f.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"↯ Motion"}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Turbulence: ",i.turbulence.toFixed(1)]}),f.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:i.turbulence,onChange:I=>c({...i,turbulence:parseFloat(I.target.value)}),className:"w-full"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Noise Speed: ",i.noiseSpeed.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.01",max:"1",step:"0.01",value:i.noiseSpeed,onChange:I=>c({...i,noiseSpeed:parseFloat(I.target.value)}),className:"w-full"})]})]}),f.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[f.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"♫ Audio Reactivity"}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Bass Reactivity: ",i.bassReactivity.toFixed(1)]}),f.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:i.bassReactivity,onChange:I=>c({...i,bassReactivity:parseFloat(I.target.value)}),className:"w-full"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Highs Reactivity: ",i.highsReactivity.toFixed(1)]}),f.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:i.highsReactivity,onChange:I=>c({...i,highsReactivity:parseFloat(I.target.value)}),className:"w-full"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Energy Reactivity: ",i.energyReactivity.toFixed(1)]}),f.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:i.energyReactivity,onChange:I=>c({...i,energyReactivity:parseFloat(I.target.value)}),className:"w-full"})]}),f.jsxs("div",{className:"flex items-center gap-2 p-2 rounded",children:[f.jsx("input",{type:"checkbox",id:"particlePeakBurst",checked:i.peakBurst,onChange:I=>c({...i,peakBurst:I.target.checked}),className:"w-4 h-4"}),f.jsx("label",{htmlFor:"particlePeakBurst",className:"text-sm cursor-pointer",children:"Peak Burst"})]})]}),f.jsx("button",{onClick:()=>c(tc),className:"w-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors",children:"Reset Particle Defaults"})]}),f.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/10",children:[f.jsx("h3",{className:"text-lg font-semibold",children:"Audio Analysis"}),[{key:"smoothing",label:"Smoothing",min:0,max:.95,step:.05,id:"audioSmoothing"},{key:"sensitivity",label:"Sensitivity",min:.5,max:3,step:.1,id:"audioSensitivity"},{key:"peakThreshold",label:"Peak Threshold",min:.1,max:.8,step:.05,id:"peakThreshold"},{key:"peakCooldown",label:"Peak Cooldown",min:50,max:500,step:50,id:"peakCooldown",suffix:"ms"}].map(({key:I,label:j,min:X,max:G,step:O,id:$,suffix:q})=>f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:[j,": ",e[I].toFixed(I==="peakCooldown"?0:2),q??""]}),f.jsx("input",{type:"range",min:X,max:G,step:O,value:e[I],onChange:ne=>o({...e,[I]:parseFloat(ne.target.value)}),onClick:()=>L($,j,X,G),className:`w-full ${B($)}`})]},I))]}),f.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/10",children:[f.jsx("h3",{className:"text-lg font-semibold",children:"Global Settings"}),f.jsxs("div",{className:`flex items-center gap-2 p-2 rounded ${B("autoOrbit")}`,onClick:()=>H("autoOrbit","Auto Orbit"),children:[f.jsx("input",{type:"checkbox",id:"autoOrbit",checked:n.autoOrbit,onChange:I=>l({...n,autoOrbit:I.target.checked}),className:"w-4 h-4"}),f.jsx("label",{htmlFor:"autoOrbit",className:"text-sm cursor-pointer",children:"Auto Orbit"})]}),n.autoOrbit&&f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Orbit Speed: ",n.orbitSpeed.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.1",max:"2",step:b,value:n.orbitSpeed,onChange:I=>l({...n,orbitSpeed:parseFloat(I.target.value)}),onClick:()=>L("orbitSpeed","Orbit Speed",.1,2),className:`w-full ${B("orbitSpeed")}`})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Parameter Smoothing: ",n.parameterSmoothing.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.05",max:"0.5",step:"0.05",value:n.parameterSmoothing,onChange:I=>l({...n,parameterSmoothing:parseFloat(I.target.value)}),className:"w-full"}),f.jsx("p",{className:"text-xs text-white/50 mt-1",children:"Controls smoothness of all parameter changes"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("input",{type:"checkbox",id:"bloom",checked:n.bloom,onChange:I=>l({...n,bloom:I.target.checked}),className:"w-4 h-4"}),f.jsx("label",{htmlFor:"bloom",className:"text-sm text-white",children:"Bloom Effect"})]}),n.bloom&&f.jsx(f.Fragment,{children:[{key:"bloomStrength",label:"Bloom Strength",min:0,max:3,step:.1},{key:"bloomRadius",label:"Bloom Radius",min:0,max:1,step:.05},{key:"bloomThreshold",label:"Bloom Threshold",min:0,max:1,step:.05}].map(({key:I,label:j,min:X,max:G,step:O})=>f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-white/70 flex justify-between",children:[f.jsx("span",{children:j}),f.jsx("span",{children:n[I].toFixed(2)})]}),f.jsx("input",{type:"range",min:X,max:G,step:O,value:n[I],onChange:$=>l({...n,[I]:parseFloat($.target.value)}),className:"w-full"})]},I))})]}),f.jsx("button",{onClick:u,className:"w-full px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",children:"Reset to Defaults"})]})]})}function rA({isOpen:t,onClose:e}){return t?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto",children:[f.jsxs("div",{className:"sticky top-0 bg-gray-900 border-b border-white/10 px-6 py-4 flex items-center justify-between",children:[f.jsx("h2",{className:"text-2xl font-bold",children:"Audio Reactive 3D Visualizer"}),f.jsx("button",{onClick:e,className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:f.jsx(Yx,{size:24})})]}),f.jsxs("div",{className:"px-6 py-6 space-y-6",children:[f.jsxs("section",{children:[f.jsx("h3",{className:"text-xl font-semibold mb-3",children:"How to Use"}),f.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-white/80",children:[f.jsx("li",{children:'Click the "Upload" button to load an audio file (MP3, WAV, AAC supported, up to ~7 minutes)'}),f.jsx("li",{children:"Press Play to start the visualization"}),f.jsx("li",{children:"Select a visualization mode: Reactive Mesh or Particles"}),f.jsx("li",{children:"Adjust controls to customize the visual experience"}),f.jsx("li",{children:"Use your mouse to orbit around the scene"})]})]}),f.jsxs("section",{children:[f.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Visualization Modes"}),f.jsxs("div",{className:"space-y-3 text-white/80",children:[f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Reactive Mesh:"})," A 3D geometric shape that deforms and pulses in response to audio. Choose from different geometries, adjust displacement, and map audio bands to control the effect."]}),f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Particles:"})," A volumetric particle field with GPU-driven motion. Particles move organically through 3D space and react to audio energy."]})]})]}),f.jsxs("section",{children:[f.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Audio Analysis Parameters"}),f.jsxs("div",{className:"space-y-2 text-white/80",children:[f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Smoothing (0.0-0.95):"})," Higher values create smoother, slower transitions in the audio analysis"]}),f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Sensitivity (0.5-3.0):"})," Multiplier for all audio bands; increase for more dramatic reactions"]}),f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Peak Threshold:"})," Controls when bass peaks trigger special effects"]}),f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Peak Cooldown:"})," Minimum time between peak triggers (in milliseconds)"]})]})]}),f.jsxs("section",{children:[f.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Audio Bands"}),f.jsxs("div",{className:"space-y-2 text-white/80",children:[f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Sub (20-60Hz):"})," Deep sub-bass frequencies"]}),f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Bass (60-250Hz):"})," Bass and low-mid frequencies"]}),f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Mids (250-2000Hz):"})," Mid-range frequencies (vocals, most instruments)"]}),f.jsxs("div",{children:[f.jsx("strong",{className:"text-white",children:"Highs (2000-12000Hz):"})," High frequencies (cymbals, hi-hats, brightness)"]})]})]}),f.jsxs("section",{children:[f.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Tips for Best Results"}),f.jsxs("ul",{className:"list-disc list-inside space-y-2 text-white/80",children:[f.jsx("li",{children:"Try different geometries to find what works best with your audio"}),f.jsx("li",{children:"Adjust band mapping weights to emphasize different frequency ranges"}),f.jsx("li",{children:"Increase sensitivity for more dramatic reactions"}),f.jsx("li",{children:'Enable "Pulse on Peak" or "Peak Burst" for extra visual impact on bass hits'}),f.jsx("li",{children:"Use Auto Orbit to slowly rotate the camera for a dynamic view"}),f.jsx("li",{children:"Electronic music with strong bass tends to produce the most dramatic effects"})]})]}),f.jsxs("section",{children:[f.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Performance"}),f.jsx("div",{className:"text-white/80",children:"For best performance, start with Medium quality settings. If you experience lag, reduce particle quality or geometry detail. High settings work best on powerful GPUs."})]})]})]})}):null}function sA({isRecording:t,recordingTime:e,canRecord:n,onStartRecording:i,onStopRecording:r}){const[s,a]=J.useState(!0),[o,l]=J.useState(null),c=h=>{const u=Math.floor(h/60),p=h%60;return`${String(u).padStart(2,"0")}:${String(p).padStart(2,"0")}`};return J.useEffect(()=>{const h=()=>{a(!0),o!==null&&clearTimeout(o);const p=window.setTimeout(()=>{a(!1)},3e3);l(p)};window.addEventListener("mousemove",h);const u=window.setTimeout(()=>{a(!1)},3e3);return l(u),()=>{window.removeEventListener("mousemove",h),o!==null&&clearTimeout(o)}},[]),J.useEffect(()=>{a(!0),o!==null&&clearTimeout(o);const h=window.setTimeout(()=>{a(!1)},3e3);l(h)},[t]),f.jsx("div",{className:`fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10 transition-opacity duration-300 ${s?"opacity-100":"opacity-0 pointer-events-none"}`,children:f.jsxs("div",{className:"flex items-center gap-3",children:[t&&f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),f.jsx("span",{className:"text-sm text-white/90 font-mono",children:c(e)})]}),f.jsx("button",{onClick:t?r:i,disabled:!n&&!t,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:t?"Stop Recording (R)":"Start Recording (R)",children:t?f.jsx(Sp,{size:20,className:"text-white"}):f.jsx(Jc,{size:20,className:"text-red-500"})})]})})}function aA({presetName:t,onSave:e,onDiscard:n,onCancel:i}){return f.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:f.jsxs("div",{className:"bg-gray-900 rounded-lg border border-white/10 shadow-2xl w-full max-w-md",children:[f.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-white/10",children:[f.jsx("h2",{className:"text-xl font-semibold",children:"Save Changes?"}),f.jsx("button",{onClick:i,className:"p-1 hover:bg-white/10 rounded transition-colors",children:f.jsx(Yx,{size:20})})]}),f.jsxs("div",{className:"p-4",children:[f.jsxs("p",{className:"text-white/70 mb-4",children:['You have modified the preset "',t,'". Would you like to save your changes?']}),f.jsxs("div",{className:"flex gap-3",children:[f.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium",children:"Save Changes"}),f.jsx("button",{onClick:n,className:"flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors",children:"Don't Save"}),f.jsx("button",{onClick:i,className:"px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors",children:"Cancel"})]})]})]})})}var rf=(t=>(t.IMAGE="image",t.VIDEO="video",t))(rf||{}),Zt=(t=>(t.PLANE="plane",t.SPHERE="sphere",t.TORUS="torus",t.CUBE="cube",t.CYLINDER="cylinder",t))(Zt||{}),Qt=(t=>(t.MODE_2D="2d",t.MODE_3D="3d",t))(Qt||{}),gi=(t=>(t.COVER="cover",t.CONTAIN="contain",t))(gi||{}),ti=(t=>(t.OFF="off",t.LOW="low",t.HIGH="high",t))(ti||{});const oA=`
${Bo}

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

uniform float time;
uniform float geometryDisplacement;
uniform float bassEnergy;
uniform float energy;
uniform float peakTrigger;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);

  vec3 pos = position;

  if (geometryDisplacement > 0.01) {
    float audioIntensity = (bassEnergy * 1.5 + energy * 0.8);

    float baseNoise = snoise(pos * 1.5 + time * 0.5);

    float wavePattern = sin(pos.x * 8.0 + time * 2.0) *
                        cos(pos.y * 8.0 + time * 1.5) *
                        sin(pos.z * 8.0 + time * 2.5);

    float ripple = sin(length(pos) * 10.0 - time * 3.0) * 0.5 + 0.5;

    float displacement = (baseNoise * 0.4 + wavePattern * 0.3 + ripple * 0.3)
                        * geometryDisplacement
                        * 0.3
                        * (1.0 + audioIntensity * 2.0);

    if (peakTrigger > 0.5) {
      displacement += geometryDisplacement * 0.2 * (1.0 + bassEnergy);
    }

    pos += normal * displacement;
  }

  vPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,lA=`
uniform sampler2D mediaTexture;
uniform float intensity;
uniform float brightness;
uniform float contrast;
uniform float rgbSplit;
uniform float glitch;
uniform float zoomPulse;
uniform float displacement;
uniform float time;
uniform float peakTrigger;
uniform float bassEnergy;
uniform float energy;
uniform vec2 resolution;
uniform float uMediaAspect;
uniform float uViewAspect;
uniform int uFitMode;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 getAspectCorrectedUV(vec2 uv, float mediaA, float viewA, int fitMode) {
  vec2 p = uv - 0.5;

  if (fitMode == 0) {
    if (mediaA > viewA) {
      p.y *= viewA / mediaA;
    } else {
      p.x *= mediaA / viewA;
    }
  } else {
    if (mediaA > viewA) {
      p.x *= mediaA / viewA;
    } else {
      p.y *= viewA / mediaA;
    }
  }

  return p + 0.5;
}

vec2 applyDisplacement(vec2 uv, float amount, float bass, float energy) {
  if (amount < 0.01) return uv;

  vec2 center = vec2(0.5, 0.5);
  vec2 offset = uv - center;
  float dist = length(offset);

  float audioBoost = (bass * 0.3 + energy * 0.2);
  float wave = sin(dist * 15.0 - time * 2.0) * amount * 0.015 * (1.0 + audioBoost);

  float angle = atan(offset.y, offset.x);
  offset.x += cos(angle) * wave;
  offset.y += sin(angle) * wave;

  vec2 result = center + offset;
  return clamp(result, 0.0, 1.0);
}

vec2 applyGlitch(vec2 uv, float amount, float time, float bass) {
  if (amount < 0.01) return uv;

  float glitchLine = floor(uv.y * 25.0);
  float baseGlitch = amount * 0.015;
  float audioGlitch = bass * amount * 0.04;
  float timeVarying = random(vec2(glitchLine, floor(time * 6.0))) * amount * 0.02;
  float glitchOffset = (baseGlitch + audioGlitch + timeVarying);

  vec2 result = uv;
  result.x += glitchOffset;

  if (peakTrigger > 0.5 || bass > 0.6) {
    float jump = random(vec2(time, glitchLine)) * amount * 0.015;
    result.y += jump;
  }

  return clamp(result, 0.0, 1.0);
}

vec2 applyZoomPulse(vec2 uv, float amount, float energy, float peak) {
  if (amount < 0.01) return uv;

  vec2 center = vec2(0.5, 0.5);
  vec2 offset = uv - center;

  float baseZoom = amount * 0.1;
  float pulseOscillation = sin(time * 2.0 + energy * 3.14159) * amount * 0.15;
  float audioZoom = energy * amount * 0.3;
  float zoom = 1.0 + baseZoom + pulseOscillation + audioZoom;

  if (peak > 0.5) {
    zoom += amount * 0.2;
  }

  zoom = max(zoom, 0.5);

  offset /= zoom;

  vec2 result = center + offset;
  return clamp(result, 0.0, 1.0);
}

void main() {
  vec2 uv = vUv;

  if (uMediaAspect > 0.0 && uViewAspect > 0.0) {
    uv = getAspectCorrectedUV(uv, uMediaAspect, uViewAspect, uFitMode);
  }

  float intensityMult = max(intensity, 0.1);

  uv = applyDisplacement(uv, displacement * intensityMult, bassEnergy, energy);

  uv = applyZoomPulse(uv, zoomPulse * intensityMult, energy, peakTrigger);

  uv = applyGlitch(uv, glitch * intensityMult, time, bassEnergy);

  vec4 color;

  if (rgbSplit > 0.01) {
    float baseOffset = rgbSplit * intensityMult * 0.008;
    float audioOffset = energy * rgbSplit * intensityMult * 0.012;
    float totalOffset = baseOffset + audioOffset;
    vec2 uvR = clamp(uv + vec2(totalOffset, 0.0), 0.0, 1.0);
    vec2 uvG = clamp(uv, 0.0, 1.0);
    vec2 uvB = clamp(uv - vec2(totalOffset, 0.0), 0.0, 1.0);
    float r = texture2D(mediaTexture, uvR).r;
    float g = texture2D(mediaTexture, uvG).g;
    float b = texture2D(mediaTexture, uvB).b;
    color = vec4(r, g, b, 1.0);
  } else {
    color = texture2D(mediaTexture, clamp(uv, 0.0, 1.0));
  }

  float brightAdjust = (brightness - 0.5);
  float audioBright = energy * 0.3 * intensity;
  color.rgb += brightAdjust + audioBright;

  float contrastBase = 1.0 + (contrast - 0.5) * 2.0;
  float audioContrast = energy * 0.8 * intensity;
  float totalContrast = max(contrastBase + audioContrast, 0.0);
  color.rgb = ((color.rgb - 0.5) * totalContrast) + 0.5;

  gl_FragColor = color;
}
`;class Hg{constructor(e){this.mesh=null,this.material=null,this.mediaTexture=null,this.mediaFile=null,this.currentSettings=null,this.handleResize=()=>{var s;const n=this.renderer.domElement,i=n.clientWidth,r=n.clientHeight;if(this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,r),this.material&&(this.material.uniforms.resolution&&this.material.uniforms.resolution.value.set(i,r),this.material.uniforms.uViewAspect&&(this.material.uniforms.uViewAspect.value=i/r)),this.currentSettings&&this.mesh&&this.mesh.geometry instanceof Hn&&((s=this.mediaTexture)!=null&&s.image)){let a=1.7777777777777777;this.mediaTexture.image.videoWidth?a=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?a=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(a=this.mediaTexture.image.width/this.mediaTexture.image.height);const o=this.calculatePlaneSize(a,this.currentSettings.fitMode);this.mesh.geometry.dispose(),this.mesh.geometry=new Hn(o.width,o.height,128,128)}},this.scene=new mp,this.scene.background=new Xe(0),this.camera=new Yt(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.z=2,this.renderer=new _p({canvas:e,antialias:!0,alpha:!1}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.controls=new Bx(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=1,this.controls.maxDistance=20,this.controls.enabled=!1,this.clock=new Lx,window.addEventListener("resize",this.handleResize)}calculatePlaneSize(e,n){const i=this.camera.position.z,r=w1.degToRad(this.camera.fov),s=2*Math.tan(r/2)*i,a=s*this.camera.aspect;let o=a,l=a/e;return n===gi.COVER?l<s&&(l=s,o=s*e):l>s&&(l=s,o=s*e),{width:o,height:l}}loadMedia(e){if(this.mediaFile=e,this.mediaTexture&&this.mediaTexture.dispose(),e.element instanceof HTMLVideoElement?(e.element.crossOrigin="anonymous",e.element.setAttribute("playsinline","true"),this.mediaTexture=new Z1(e.element),this.mediaTexture.minFilter=bt,this.mediaTexture.magFilter=bt,this.mediaTexture.wrapS=Wn,this.mediaTexture.wrapT=Wn,this.mediaTexture.format=ap,this.mediaTexture.generateMipmaps=!1,this.mediaTexture.colorSpace=En):e.element instanceof HTMLImageElement&&(this.mediaTexture=new tn(e.element),this.mediaTexture.minFilter=bt,this.mediaTexture.magFilter=bt,this.mediaTexture.wrapS=Wn,this.mediaTexture.wrapT=Wn,this.mediaTexture.colorSpace=En,this.mediaTexture.needsUpdate=!0),this.material&&this.mediaTexture&&this.mediaTexture.image){let n=1.7777777777777777;this.mediaTexture.image.videoWidth?n=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?n=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(n=this.mediaTexture.image.width/this.mediaTexture.image.height),this.material.uniforms.uMediaAspect&&(this.material.uniforms.uMediaAspect.value=n)}}initialize(e){if(this.currentSettings=e,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.material&&this.material.dispose()),!this.mediaTexture)return;let n;if(e.renderMode===Qt.MODE_2D||e.geometry===Zt.PLANE){let a=1.7777777777777777;this.mediaTexture.image&&(this.mediaTexture.image.videoWidth?a=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?a=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(a=this.mediaTexture.image.width/this.mediaTexture.image.height));const o=this.calculatePlaneSize(a,e.fitMode);n=new Hn(o.width,o.height,128,128)}else e.geometry===Zt.SPHERE?n=new ua(1,128,128):e.geometry===Zt.TORUS?n=new Po(.8,.4,64,128):e.geometry===Zt.CUBE?n=new Cr(1.5,1.5,1.5,64,64,64):n=new Ro(.6,.6,1.5,64,64);let i=16/9;this.mediaTexture.image&&(this.mediaTexture.image.videoWidth?i=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?i=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(i=this.mediaTexture.image.width/this.mediaTexture.image.height));const r=this.renderer.domElement,s=r.clientWidth/r.clientHeight;this.material=new Ot({uniforms:{mediaTexture:{value:this.mediaTexture},intensity:{value:e.intensity},brightness:{value:e.brightness},contrast:{value:e.contrast},rgbSplit:{value:e.rgbSplit},glitch:{value:e.glitch},zoomPulse:{value:e.zoomPulse},displacement:{value:e.displacement},geometryDisplacement:{value:e.geometryDisplacement},time:{value:0},peakTrigger:{value:0},bassEnergy:{value:0},energy:{value:0},resolution:{value:new Ie(window.innerWidth,window.innerHeight)},uMediaAspect:{value:i},uViewAspect:{value:s},uFitMode:{value:e.fitMode===gi.CONTAIN?0:1}},vertexShader:oA,fragmentShader:lA,side:Ti}),this.mesh=new Ln(n,this.material),this.scene.add(this.mesh),e.renderMode===Qt.MODE_3D?(this.camera.position.set(0,0,3),this.controls.enabled=!0,this.controls.target.set(0,0,0),this.controls.update()):(this.camera.position.set(0,0,2),this.controls.enabled=!1,this.controls.target.set(0,0,0),this.controls.update()),this.updateAutoOrbit(e.autoOrbit,e.orbitSpeed)}update(e,n){if(!this.material)return;const i=this.clock.getElapsedTime(),r=n.intensity;this.material.uniforms.time.value=i,this.material.uniforms.intensity.value=n.intensity,this.material.uniforms.brightness.value=n.brightness,this.material.uniforms.contrast.value=n.contrast,this.material.uniforms.rgbSplit.value=n.rgbSplit*r,this.material.uniforms.glitch.value=n.glitch*r,this.material.uniforms.zoomPulse.value=n.zoomPulse*r,this.material.uniforms.displacement.value=n.displacement*r,this.material.uniforms.geometryDisplacement.value=n.geometryDisplacement*r,this.material.uniforms.bassEnergy.value=e.bass,this.material.uniforms.energy.value=e.energy,this.material.uniforms.peakTrigger.value=e.peakTrigger?1:0}updateAutoOrbit(e,n){e?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=n):this.controls.autoRotate=!1}updateSettings(e){if(!this.material)return;!this.mesh||this.mesh.geometry instanceof Hn&&e.renderMode===Qt.MODE_3D&&e.geometry!==Zt.PLANE||!(this.mesh.geometry instanceof Hn)&&(e.renderMode===Qt.MODE_2D||e.geometry===Zt.PLANE)||this.mesh.geometry instanceof ua&&e.geometry!==Zt.SPHERE||this.mesh.geometry instanceof Po&&e.geometry!==Zt.TORUS||this.mesh.geometry instanceof Cr&&e.geometry!==Zt.CUBE||this.mesh.geometry instanceof Ro&&e.geometry!==Zt.CYLINDER||this.currentSettings&&e.fitMode!==this.currentSettings.fitMode?this.initialize(e):(this.currentSettings=e,this.material.uniforms.uFitMode&&(this.material.uniforms.uFitMode.value=e.fitMode===gi.CONTAIN?0:1),e.renderMode===Qt.MODE_3D?this.controls.enabled=!0:this.controls.enabled=!1),this.updateAutoOrbit(e.autoOrbit,e.orbitSpeed)}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose()),this.material&&this.material.dispose(),this.mediaTexture&&this.mediaTexture.dispose(),this.renderer.dispose()}getRenderer(){return this.renderer}updateCameraAndRenderer(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.material&&(this.material.uniforms.resolution&&this.material.uniforms.resolution.value.set(e,n),this.material.uniforms.uViewAspect&&(this.material.uniforms.uViewAspect.value=e/n))}setRenderSizeForRecording(e,n){var i;if(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.material&&(this.material.uniforms.resolution&&this.material.uniforms.resolution.value.set(e,n),this.material.uniforms.uViewAspect&&(this.material.uniforms.uViewAspect.value=e/n)),this.currentSettings&&this.mesh&&this.mesh.geometry instanceof Hn&&((i=this.mediaTexture)!=null&&i.image)){let r=1.7777777777777777;this.mediaTexture.image.videoWidth?r=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?r=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(r=this.mediaTexture.image.width/this.mediaTexture.image.height);const s=this.calculatePlaneSize(r,this.currentSettings.fitMode);this.mesh.geometry.dispose(),this.mesh.geometry=new Hn(s.width,s.height,128,128)}}}const cA={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};class jg{constructor(e){this.mediaFile=null,this.fitMode=gi.COVER,this.debugCallback=null,this.perfCallback=null,this.time=0,this.lastFrameTime=Date.now(),this.tempCanvas=null,this.tempCtx=null,this.sourceImageData=null,this.outputImageData=null,this.canvas=e;const n=e.getContext("2d",{alpha:!1});if(!n)throw new Error("Failed to get 2D context");this.ctx=n}setDebugCallback(e){this.debugCallback=e}setPerfCallback(e){this.perfCallback=e}loadMedia(e){this.mediaFile=e}setFitMode(e){this.fitMode=e}getMediaDimensions(){if(!this.mediaFile)return null;const e=this.mediaFile.element;return e instanceof HTMLVideoElement?e.videoWidth>0&&e.videoHeight>0?{width:e.videoWidth,height:e.videoHeight}:null:e instanceof HTMLImageElement&&e.naturalWidth>0&&e.naturalHeight>0?{width:e.naturalWidth,height:e.naturalHeight}:null}calculateDrawParams(){const e=this.getMediaDimensions();if(!e)return null;const n=this.canvas.width,i=this.canvas.height,r=e.width,s=e.height,a=n/i,o=r/s;let l=0,c=0,h=n,u=i;return this.fitMode===gi.CONTAIN?o>a?(h=n,u=n/o,l=0,c=(i-u)/2):(u=i,h=i*o,c=0,l=(n-h)/2):o>a?(u=i,h=i*o,c=0,l=(n-h)/2):(h=n,u=n/o,l=0,c=(i-u)/2),{dx:l,dy:c,dw:h,dh:u,mediaWidth:r,mediaHeight:s}}random(e,n){const i=Math.sin(e*12.9898+n*78.233)*43758.5453123;return i-Math.floor(i)}applyZoomPulse(e,n,i,r,s){if(i<.01)return{x:e,y:n};const a=.5,o=.5;let l=e-a,c=n-o;const h=i*.1,u=Math.sin(this.time*2+r*Math.PI)*i*.15,p=r*i*.3;let m=1+h+u+p;s&&(m+=i*.2),m=Math.max(m,.5),l/=m,c/=m;const x=Math.max(0,Math.min(1,a+l)),S=Math.max(0,Math.min(1,o+c));return{x,y:S}}applyDisplacement(e,n,i,r,s){if(i<.01)return{x:e,y:n};const a=.5,o=.5;let l=e-a,c=n-o;const h=Math.sqrt(l*l+c*c),u=r*.3+s*.2,p=Math.sin(h*15-this.time*2)*i*.015*(1+u),m=Math.atan2(c,l);l+=Math.cos(m)*p,c+=Math.sin(m)*p;const x=Math.max(0,Math.min(1,a+l)),S=Math.max(0,Math.min(1,o+c));return{x,y:S}}applyGlitch(e,n,i,r,s){if(i<.01)return{x:e,y:n};const a=Math.floor(n*25),o=i*.015,l=r*i*.04,c=this.random(a,Math.floor(this.time*6))*i*.02,h=o+l+c;let u=e+h,p=n;if(s||r>.6){const m=this.random(this.time,a)*i*.015;p+=m}return u=Math.max(0,Math.min(1,u)),p=Math.max(0,Math.min(1,p)),{x:u,y:p}}renderLowQuality(e,n,i){const r=this.mediaFile.element,s=n.energy,a=n.bass,o=n.peakTrigger,l=i.intensity,c=i.brightness,h=i.contrast,u=i.zoomPulse,p=i.rgbSplit,m=i.glitch,x=i.displacement;if(!(p>.01||m>.01||x>.01)){if(this.ctx.save(),this.ctx.translate(this.canvas.width/2,this.canvas.height/2),u>.01){const q=u*.15,ne=Math.sin(this.time*2+s*Math.PI)*u*.3,se=s*u*.6;let Ne=1+q+ne+se;o&&(Ne+=u*.4),this.ctx.scale(Ne,Ne)}this.ctx.translate(-this.canvas.width/2,-this.canvas.height/2);const I=(c-.5)*2,j=s*.5*l,X=I+j,G=1+(h-.5)*4,O=s*1.5*l,$=Math.max(G+O,.1);if(X!==0||$!==1){const q=Math.round(X*100),ne=Math.round($*100);this.ctx.filter=`brightness(${100+q}%) contrast(${ne}%)`}this.ctx.drawImage(r,e.dx,e.dy,e.dw,e.dh),this.ctx.restore(),this.perfCallback&&this.perfCallback(`${this.canvas.width}x${this.canvas.height} (fast)`);return}if(this.tempCanvas||(this.tempCanvas=document.createElement("canvas"),this.tempCtx=this.tempCanvas.getContext("2d",{willReadFrequently:!0})),!this.tempCtx)return;const v=Math.min(this.canvas.width,960),d=Math.min(this.canvas.height,540),g=Math.min(v/this.canvas.width,d/this.canvas.height),_=Math.floor(this.canvas.width*g),M=Math.floor(this.canvas.height*g);(this.tempCanvas.width!==_||this.tempCanvas.height!==M)&&(this.tempCanvas.width=_,this.tempCanvas.height=M,this.sourceImageData=null,this.outputImageData=null);const E={dx:Math.floor(e.dx*g),dy:Math.floor(e.dy*g),dw:Math.floor(e.dw*g),dh:Math.floor(e.dh*g)};if(this.tempCtx.fillStyle="#000000",this.tempCtx.fillRect(0,0,_,M),this.tempCtx.drawImage(r,E.dx,E.dy,E.dw,E.dh),!this.sourceImageData||this.sourceImageData.width!==_||this.sourceImageData.height!==M)this.sourceImageData=this.tempCtx.getImageData(0,0,_,M);else{const I=this.tempCtx.getImageData(0,0,_,M);this.sourceImageData.data.set(I.data)}const T=this.sourceImageData.data;(!this.outputImageData||this.outputImageData.width!==_||this.outputImageData.height!==M)&&(this.outputImageData=this.tempCtx.createImageData(_,M));const A=this.outputImageData.data,R=Math.max(l,.1),w=(c-.5)*2,b=s*.5*l,L=1+(h-.5)*4,H=s*1.5*l,B=Math.max(L+H,.1);for(let I=0;I<M;I++)for(let j=0;j<_;j++){let X=j/_,G=I/M,O={x:X,y:G};O=this.applyDisplacement(O.x,O.y,x*R,a,s),O=this.applyZoomPulse(O.x,O.y,u*R,s,o),O=this.applyGlitch(O.x,O.y,m*R,a,o);const $=(I*_+j)*4;let q=0,ne=0,se=0,Ne=255;if(p>.01){const Ue=p*R*.008,je=s*p*R*.012,te=Ue+je,ie={x:Math.max(0,Math.min(1,O.x+te)),y:O.y},Ee={x:Math.max(0,Math.min(1,O.x)),y:O.y},Oe={x:Math.max(0,Math.min(1,O.x-te)),y:O.y};q=this.sampleTexture(T,_,M,ie.x,ie.y,0),ne=this.sampleTexture(T,_,M,Ee.x,Ee.y,1),se=this.sampleTexture(T,_,M,Oe.x,Oe.y,2)}else q=this.sampleTexture(T,_,M,O.x,O.y,0),ne=this.sampleTexture(T,_,M,O.x,O.y,1),se=this.sampleTexture(T,_,M,O.x,O.y,2);q=q/255,ne=ne/255,se=se/255,q+=w+b,ne+=w+b,se+=w+b,q=(q-.5)*B+.5,ne=(ne-.5)*B+.5,se=(se-.5)*B+.5,A[$]=Math.max(0,Math.min(255,q*255)),A[$+1]=Math.max(0,Math.min(255,ne*255)),A[$+2]=Math.max(0,Math.min(255,se*255)),A[$+3]=Ne}this.tempCtx.putImageData(this.outputImageData,0,0),this.ctx.drawImage(this.tempCanvas,0,0,_,M,0,0,this.canvas.width,this.canvas.height),this.perfCallback&&this.perfCallback(`${_}x${M} (fast)`)}render(e,n){if(!this.mediaFile)return;const i=this.mediaFile.element;if(i instanceof HTMLVideoElement&&i.readyState<2)return;const r=Date.now();this.time+=(r-this.lastFrameTime)/1e3,this.lastFrameTime=r;const s=this.calculateDrawParams();if(!s)return;this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const a=(e==null?void 0:e.energy)||0,o=(e==null?void 0:e.bass)||0,l=(e==null?void 0:e.peakTrigger)||!1,c=(n==null?void 0:n.intensity)||1,h=(n==null?void 0:n.brightness)||.5,u=(n==null?void 0:n.contrast)||.5,p=(n==null?void 0:n.rgbSplit)||0,m=(n==null?void 0:n.glitch)||0,x=(n==null?void 0:n.zoomPulse)||0,S=(n==null?void 0:n.displacement)||0,v=(n==null?void 0:n.effectsQuality)||ti.LOW,d=p>0||m>0||x>0||S>0,g=h!==.5||u!==.5,_=((e==null?void 0:e.energy)||0)>0;if(!d&&!g&&!_){this.ctx.drawImage(i,s.dx,s.dy,s.dw,s.dh),this.debugCallback&&this.debugCallback(s),this.perfCallback&&this.perfCallback(`${this.canvas.width}x${this.canvas.height} (none)`);return}if(v===ti.OFF||v===ti.LOW){this.renderLowQuality(s,e||cA,n||{}),this.debugCallback&&this.debugCallback(s);return}if(this.tempCanvas||(this.tempCanvas=document.createElement("canvas"),this.tempCtx=this.tempCanvas.getContext("2d",{willReadFrequently:!0})),!this.tempCtx)return;const M=Math.min(this.canvas.width,1280),E=Math.min(this.canvas.height,720),T=Math.min(M/this.canvas.width,E/this.canvas.height),A=Math.floor(this.canvas.width*T),R=Math.floor(this.canvas.height*T);(this.tempCanvas.width!==A||this.tempCanvas.height!==R)&&(this.tempCanvas.width=A,this.tempCanvas.height=R,this.sourceImageData=null,this.outputImageData=null);const w={dx:Math.floor(s.dx*T),dy:Math.floor(s.dy*T),dw:Math.floor(s.dw*T),dh:Math.floor(s.dh*T)};if(this.tempCtx.fillStyle="#000000",this.tempCtx.fillRect(0,0,A,R),this.tempCtx.drawImage(i,w.dx,w.dy,w.dw,w.dh),!this.sourceImageData||this.sourceImageData.width!==A||this.sourceImageData.height!==R)this.sourceImageData=this.tempCtx.getImageData(0,0,A,R);else{const O=this.tempCtx.getImageData(0,0,A,R);this.sourceImageData.data.set(O.data)}const b=this.sourceImageData.data;(!this.outputImageData||this.outputImageData.width!==A||this.outputImageData.height!==R)&&(this.outputImageData=this.tempCtx.createImageData(A,R));const L=this.outputImageData.data,H=Math.max(c,.1),B=h-.5,I=a*.3*c,j=1+(u-.5)*2,X=a*.8*c,G=Math.max(j+X,0);for(let O=0;O<R;O++)for(let $=0;$<A;$++){let q=$/A,ne=O/R,se={x:q,y:ne};se=this.applyDisplacement(se.x,se.y,S*H,o,a),se=this.applyZoomPulse(se.x,se.y,x*H,a,l),se=this.applyGlitch(se.x,se.y,m*H,o,l);const Ne=(O*A+$)*4;let Ue=0,je=0,te=0,ie=255;if(p>.01){const Ee=p*H*.008,Oe=a*p*H*.012,Me=Ee+Oe,$e={x:Math.max(0,Math.min(1,se.x+Me)),y:se.y},ut={x:Math.max(0,Math.min(1,se.x)),y:se.y},Ge={x:Math.max(0,Math.min(1,se.x-Me)),y:se.y};Ue=this.sampleTexture(b,A,R,$e.x,$e.y,0),je=this.sampleTexture(b,A,R,ut.x,ut.y,1),te=this.sampleTexture(b,A,R,Ge.x,Ge.y,2)}else Ue=this.sampleTexture(b,A,R,se.x,se.y,0),je=this.sampleTexture(b,A,R,se.x,se.y,1),te=this.sampleTexture(b,A,R,se.x,se.y,2);Ue=Ue/255,je=je/255,te=te/255,Ue+=B+I,je+=B+I,te+=B+I,Ue=(Ue-.5)*G+.5,je=(je-.5)*G+.5,te=(te-.5)*G+.5,L[Ne]=Math.max(0,Math.min(255,Ue*255)),L[Ne+1]=Math.max(0,Math.min(255,je*255)),L[Ne+2]=Math.max(0,Math.min(255,te*255)),L[Ne+3]=ie}this.tempCtx.putImageData(this.outputImageData,0,0),this.ctx.drawImage(this.tempCanvas,0,0,A,R,0,0,this.canvas.width,this.canvas.height),this.debugCallback&&this.debugCallback(s),this.perfCallback&&this.perfCallback(`${A}x${R} (high)`)}sampleTexture(e,n,i,r,s,a){r=Math.max(0,Math.min(1,r)),s=Math.max(0,Math.min(1,s));const o=Math.floor(r*(n-1)),c=(Math.floor(s*(i-1))*n+o)*4+a;return e[c]||0}resize(e,n){this.canvas.width=e,this.canvas.height=n}setRenderSizeForRecording(e,n){this.resize(e,n)}dispose(){this.mediaFile=null,this.debugCallback=null,this.perfCallback=null,this.tempCanvas=null,this.tempCtx=null,this.sourceImageData=null,this.outputImageData=null}}const Zx="mediaReactor_midi_settings",cd={enabled:!1,selectedDeviceId:null,smoothing:.3,learnMode:!1,mappings:[]};function uA(){try{const t=localStorage.getItem(Zx);if(!t)return{...cd};const e=JSON.parse(t);return{...cd,...e,learnMode:!1}}catch{return{...cd}}}function dA(t){try{localStorage.setItem(Zx,JSON.stringify(t))}catch{}}function hA(t,e){const n=t.mappings.findIndex(r=>r.parameterId===e.parameterId),i=[...t.mappings];return n>=0?i[n]=e:i.push(e),{...t,mappings:i}}function fA(t,e){return{...t,mappings:t.mappings.filter(n=>n.parameterId!==e)}}function pA(t){return{...t,mappings:[]}}function mA(t,e){return t.mappings.find(n=>n.ccNumber===e)||null}function gA(t,e){return t.mappings.find(n=>n.parameterId===e)||null}function vA({settings:t,audioSettings:e,audioFeatures:n,midiState:i,onSettingsChange:r,onAudioSettingsChange:s,onParameterClick:a,onMIDIEnableChange:o,onMIDIDeviceChange:l,onMIDISmoothingChange:c,onMIDILearnModeChange:h,onMIDIRemoveMapping:u,onMIDIClearMappings:p}){const m=(d,g)=>{r({...t,[d]:g})},x=(d,g,_,M)=>{a(d,g,_,M,!1)},S=d=>i.learningParameterId===d,v=d=>!!gA(i.settings,d);return f.jsx("div",{className:"absolute right-4 top-20 bottom-20 w-80 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg overflow-y-auto",children:f.jsxs("div",{className:"p-4 space-y-6",children:[f.jsx("div",{children:f.jsx("h3",{className:"text-lg font-semibold mb-4 text-white",children:"Media Reactor Controls"})}),f.jsx(Kx,{midiState:i,onEnableChange:o,onDeviceChange:l,onSmoothingChange:c,onLearnModeChange:h,onRemoveMapping:u,onClearMappings:p}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Render Mode"}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:()=>m("renderMode",Qt.MODE_2D),className:`flex-1 px-3 py-2 rounded transition-colors ${t.renderMode===Qt.MODE_2D?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"2D"}),f.jsx("button",{onClick:()=>m("renderMode",Qt.MODE_3D),className:`flex-1 px-3 py-2 rounded transition-colors ${t.renderMode===Qt.MODE_3D?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"3D"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Fit Mode"}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:()=>m("fitMode",gi.COVER),className:`flex-1 px-3 py-2 rounded transition-colors ${t.fitMode===gi.COVER?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"Cover"}),f.jsx("button",{onClick:()=>m("fitMode",gi.CONTAIN),className:`flex-1 px-3 py-2 rounded transition-colors ${t.fitMode===gi.CONTAIN?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"Contain"})]})]}),t.renderMode===Qt.MODE_3D&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Geometry"}),f.jsxs("select",{value:t.geometry,onChange:d=>m("geometry",d.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:Zt.PLANE,children:"Plane"}),f.jsx("option",{value:Zt.SPHERE,children:"Sphere"}),f.jsx("option",{value:Zt.TORUS,children:"Torus"}),f.jsx("option",{value:Zt.CUBE,children:"Cube"}),f.jsx("option",{value:Zt.CYLINDER,children:"Cylinder"})]})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("label",{className:"text-sm font-medium text-white/90",children:"Auto Orbit"}),f.jsx("button",{onClick:()=>m("autoOrbit",!t.autoOrbit),className:`px-3 py-1 rounded text-sm transition-colors ${t.autoOrbit?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:t.autoOrbit?"On":"Off"})]}),t.autoOrbit&&f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Orbit Speed"}),f.jsx("span",{className:"text-sm text-white/70",children:t.orbitSpeed.toFixed(1)})]}),f.jsx("input",{type:"range",min:"0.1",max:"5",step:"0.1",value:t.orbitSpeed,onChange:d=>m("orbitSpeed",parseFloat(d.target.value)),onClick:()=>x("orbitSpeed","Orbit Speed",.1,5),className:`w-full ${S("orbitSpeed")?"ring-2 ring-yellow-500":""} ${v("orbitSpeed")?"ring-1 ring-blue-500":""}`})]})]})]}),t.renderMode===Qt.MODE_2D&&f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Effects Quality"}),f.jsxs("select",{value:t.effectsQuality,onChange:d=>m("effectsQuality",d.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-blue-500",children:[f.jsx("option",{value:ti.OFF,children:"Off"}),f.jsx("option",{value:ti.LOW,children:"Low (Fast)"}),f.jsx("option",{value:ti.HIGH,children:"High (Slow)"})]}),f.jsxs("p",{className:"text-xs text-white/50 mt-1",children:[t.effectsQuality===ti.HIGH&&"Per-pixel processing - RGB Split, Glitch, Displacement work fully",t.effectsQuality===ti.LOW&&"Canvas transforms only - Zoom/Pulse, Brightness, Contrast work",t.effectsQuality===ti.OFF&&"No effects applied"]})]}),f.jsxs("div",{className:"pt-4 border-t border-white/20",children:[f.jsx("h4",{className:"text-sm font-semibold mb-3 text-white/90",children:"Effects"}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Intensity"}),f.jsx("span",{className:"text-sm text-white/70",children:t.intensity.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:t.intensity,onChange:d=>m("intensity",parseFloat(d.target.value)),onClick:()=>x("intensity","Intensity",0,2),className:`w-full ${S("intensity")?"ring-2 ring-yellow-500":""} ${v("intensity")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Brightness"}),f.jsx("span",{className:"text-sm text-white/70",children:t.brightness.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.brightness,onChange:d=>m("brightness",parseFloat(d.target.value)),onClick:()=>x("brightness","Brightness",0,1),className:`w-full ${S("brightness")?"ring-2 ring-yellow-500":""} ${v("brightness")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Contrast"}),f.jsx("span",{className:"text-sm text-white/70",children:t.contrast.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.contrast,onChange:d=>m("contrast",parseFloat(d.target.value)),onClick:()=>x("contrast","Contrast",0,1),className:`w-full ${S("contrast")?"ring-2 ring-yellow-500":""} ${v("contrast")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"RGB Split"}),f.jsx("span",{className:"text-sm text-white/70",children:t.rgbSplit.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.rgbSplit,onChange:d=>m("rgbSplit",parseFloat(d.target.value)),onClick:()=>x("rgbSplit","RGB Split",0,1),className:`w-full ${S("rgbSplit")?"ring-2 ring-yellow-500":""} ${v("rgbSplit")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Glitch"}),f.jsx("span",{className:"text-sm text-white/70",children:t.glitch.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.glitch,onChange:d=>m("glitch",parseFloat(d.target.value)),onClick:()=>x("glitch","Glitch",0,1),className:`w-full ${S("glitch")?"ring-2 ring-yellow-500":""} ${v("glitch")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Zoom/Pulse"}),f.jsx("span",{className:"text-sm text-white/70",children:t.zoomPulse.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.zoomPulse,onChange:d=>m("zoomPulse",parseFloat(d.target.value)),onClick:()=>x("zoomPulse","Zoom/Pulse",0,1),className:`w-full ${S("zoomPulse")?"ring-2 ring-yellow-500":""} ${v("zoomPulse")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Displacement"}),f.jsx("span",{className:"text-sm text-white/70",children:t.displacement.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.displacement,onChange:d=>m("displacement",parseFloat(d.target.value)),onClick:()=>x("displacement","Displacement",0,1),className:`w-full ${S("displacement")?"ring-2 ring-yellow-500":""} ${v("displacement")?"ring-1 ring-blue-500":""}`})]}),t.renderMode===Qt.MODE_3D&&f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Geometry Displacement"}),f.jsx("span",{className:"text-sm text-white/70",children:t.geometryDisplacement.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.geometryDisplacement,onChange:d=>m("geometryDisplacement",parseFloat(d.target.value)),onClick:()=>x("geometryDisplacement","Geometry Displacement",0,1),className:`w-full ${S("geometryDisplacement")?"ring-2 ring-yellow-500":""} ${v("geometryDisplacement")?"ring-1 ring-blue-500":""}`}),f.jsx("p",{className:"text-xs text-white/50 mt-1",children:"Audio-reactive vertex deformation"})]})]})]}),f.jsxs("div",{className:"pt-4 border-t border-white/20",children:[f.jsx("h4",{className:"text-sm font-semibold mb-3 text-white/90",children:"Audio Analysis"}),f.jsxs("div",{className:"space-y-3 text-xs mb-4",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("span",{className:"text-white/70",children:"Energy"}),f.jsx("span",{className:"font-mono text-white/70",children:n.energy.toFixed(2)})]}),f.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all",style:{width:`${n.energy*100}%`}})})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("span",{className:"text-white/70",children:"Bass"}),f.jsx("span",{className:"font-mono text-white/70",children:n.bass.toFixed(2)})]}),f.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all",style:{width:`${n.bass*100}%`}})})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("span",{className:"text-white/70",children:"Mids"}),f.jsx("span",{className:"font-mono text-white/70",children:n.mids.toFixed(2)})]}),f.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all",style:{width:`${n.mids*100}%`}})})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("span",{className:"text-white/70",children:"Highs"}),f.jsx("span",{className:"font-mono text-white/70",children:n.highs.toFixed(2)})]}),f.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all",style:{width:`${n.highs*100}%`}})})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Smoothing"}),f.jsx("span",{className:"text-sm text-white/70",children:e.smoothing.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0",max:"0.95",step:"0.05",value:e.smoothing,onChange:d=>s({...e,smoothing:parseFloat(d.target.value)}),onClick:()=>x("audioSmoothing","Audio Smoothing",0,.95),className:`w-full ${S("audioSmoothing")?"ring-2 ring-yellow-500":""} ${v("audioSmoothing")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Sensitivity"}),f.jsx("span",{className:"text-sm text-white/70",children:e.sensitivity.toFixed(1)})]}),f.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:e.sensitivity,onChange:d=>s({...e,sensitivity:parseFloat(d.target.value)}),onClick:()=>x("audioSensitivity","Audio Sensitivity",.5,3),className:`w-full ${S("audioSensitivity")?"ring-2 ring-yellow-500":""} ${v("audioSensitivity")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Peak Threshold"}),f.jsx("span",{className:"text-sm text-white/70",children:e.peakThreshold.toFixed(2)})]}),f.jsx("input",{type:"range",min:"0.1",max:"0.8",step:"0.05",value:e.peakThreshold,onChange:d=>s({...e,peakThreshold:parseFloat(d.target.value)}),onClick:()=>x("peakThreshold","Peak Threshold",.1,.8),className:`w-full ${S("peakThreshold")?"ring-2 ring-yellow-500":""} ${v("peakThreshold")?"ring-1 ring-blue-500":""}`})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between mb-1",children:[f.jsx("label",{className:"text-sm text-white/70",children:"Peak Cooldown"}),f.jsxs("span",{className:"text-sm text-white/70",children:[e.peakCooldown,"ms"]})]}),f.jsx("input",{type:"range",min:"50",max:"500",step:"50",value:e.peakCooldown,onChange:d=>s({...e,peakCooldown:parseFloat(d.target.value)}),onClick:()=>x("peakCooldown","Peak Cooldown",50,500),className:`w-full ${S("peakCooldown")?"ring-2 ring-yellow-500":""} ${v("peakCooldown")?"ring-1 ring-blue-500":""}`})]})]})]})]})]})})}const Fl={renderMode:Qt.MODE_2D,geometry:Zt.SPHERE,brightness:.5,contrast:.5,rgbSplit:0,glitch:0,zoomPulse:0,displacement:0,geometryDisplacement:0,intensity:1,fitMode:gi.COVER,effectsQuality:ti.LOW,autoOrbit:!1,orbitSpeed:1},Gg={smoothing:.75,sensitivity:1,peakThreshold:.5,peakCooldown:200},Ba={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};function xA({onBack:t}){const e=J.useRef(null),n=J.useRef(null),i=J.useRef(null),r=J.useRef(null),s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(null),c=J.useRef(null),h=J.useRef(Fl),u=J.useRef(Gg),p=J.useRef(null),m=J.useRef(!1),x=J.useRef(null),[S,v]=J.useState(Fl),[d,g]=J.useState(Gg),[_,M]=J.useState(Ba),[E,T]=J.useState({isSupported:!1,hasAccess:!1,isInitializing:!1,devices:[],settings:uA(),lastActivity:0,learningParameterId:null,learningContext:null}),[A,R]=J.useState(null),[w,b]=J.useState(null),[L,H]=J.useState(!1),[B,I]=J.useState(0),[j,X]=J.useState(0),[G,O]=J.useState(.7),[$,q]=J.useState(!1),[ne,se]=J.useState(0),[Ne]=J.useState("high"),[Ue]=J.useState("auto");J.useEffect(()=>{if(!e.current)return;const y=Fl.renderMode;m.current=y===Qt.MODE_2D,y===Qt.MODE_2D?(i.current=new jg(e.current),i.current.setFitMode(Fl.fitMode)):n.current=new Hg(e.current),r.current=new ep,a.current=new yp,a.current.setTimerCallback(z=>{se(z)}),a.current.setErrorCallback(()=>{q(!1),se(0)}),r.current.onPlay(()=>{var z;H(!0),((z=c.current)==null?void 0:z.element)instanceof HTMLVideoElement&&c.current.element.play()}),r.current.onPause(()=>{var z;H(!1),((z=c.current)==null?void 0:z.element)instanceof HTMLVideoElement&&c.current.element.pause()}),r.current.onEnded(()=>{var z;H(!1),((z=c.current)==null?void 0:z.element)instanceof HTMLVideoElement&&(c.current.element.pause(),c.current.element.currentTime=0)});const D=()=>{if(!e.current)return;const z=e.current.clientWidth,ee=e.current.clientHeight;m.current&&i.current?i.current.resize(z,ee):n.current&&n.current.updateCameraAndRenderer(z,ee)};return setTimeout(D,0),window.addEventListener("resize",D),()=>{var z,ee;window.removeEventListener("resize",D),n.current&&n.current.dispose(),i.current&&i.current.dispose(),(z=r.current)==null||z.cleanup(),(ee=a.current)==null||ee.dispose()}},[]),J.useEffect(()=>{l.current!==null&&(cancelAnimationFrame(l.current),l.current=null);const y=()=>{var D,z;if(r.current)if(r.current.updateCurrentTime(),I(r.current.currentTime),r.current.getAnalyserNode()&&s.current&&r.current.isPlaying){const V=s.current.analyse(u.current);M(V),n.current&&!m.current&&n.current.update(V,h.current)}else{const V=Ba;n.current&&!m.current&&n.current.update(V,h.current)}if(m.current){if(i.current)if(((D=r.current)==null?void 0:D.getAnalyserNode())&&s.current&&((z=r.current)!=null&&z.isPlaying)){const V=s.current.analyse(u.current);i.current.render(V,h.current)}else i.current.render(Ba,h.current)}else n.current&&n.current.render();l.current=requestAnimationFrame(y)};return l.current=requestAnimationFrame(y),()=>{l.current!==null&&(cancelAnimationFrame(l.current),l.current=null)}},[]),J.useEffect(()=>{p.current=E},[E]),J.useEffect(()=>{dA(E.settings)},[E.settings]),J.useEffect(()=>((async()=>{const D=new No,z=D.isSupported();if(T(V=>({...V,isSupported:z})),!z||!E.settings.enabled)return;if(await D.initialize()){const V=D.getDevices();D.setSelectedDevice(E.settings.selectedDeviceId),D.setSmoothing(E.settings.smoothing),D.setMessageCallback(je),T(ve=>({...ve,hasAccess:!0,devices:V})),o.current=D}})(),()=>{var D;(D=o.current)==null||D.dispose()}),[]),J.useEffect(()=>{(async()=>{var D;if(E.settings.enabled&&!E.hasAccess&&E.isSupported){T(V=>({...V,isInitializing:!0}));const z=o.current||new No;if(await z.initialize()){const V=z.getDevices();z.setSelectedDevice(E.settings.selectedDeviceId),z.setSmoothing(E.settings.smoothing),z.setMessageCallback(je),T(ve=>({...ve,hasAccess:!0,isInitializing:!1,devices:V})),o.current=z}else T(V=>({...V,hasAccess:!1,isInitializing:!1}))}else!E.settings.enabled&&E.hasAccess&&((D=o.current)==null||D.dispose(),T(z=>({...z,hasAccess:!1,isInitializing:!1,devices:[]})),o.current=null)})()},[E.settings.enabled]),J.useEffect(()=>{o.current&&E.hasAccess&&o.current.setSelectedDevice(E.settings.selectedDeviceId)},[E.settings.selectedDeviceId]),J.useEffect(()=>{o.current&&E.hasAccess&&o.current.setSmoothing(E.settings.smoothing)},[E.settings.smoothing]),J.useEffect(()=>{h.current=S;const y=S.renderMode===Qt.MODE_2D,D=m.current,z=y!==D;if(m.current=y,z&&l.current!==null&&(cancelAnimationFrame(l.current),l.current=null),y&&!D&&e.current){n.current&&(n.current.dispose(),n.current=null);const ee=e.current.parentElement,V=e.current,ve=document.createElement("canvas");ve.className=V.className,ve.style.cssText=V.style.cssText,ee==null||ee.replaceChild(ve,V),e.current=ve,i.current=new jg(e.current),c.current&&(i.current.loadMedia(c.current),c.current.element instanceof HTMLVideoElement&&c.current.element.play().catch(()=>{})),i.current.setFitMode(S.fitMode),i.current.resize(e.current.clientWidth,e.current.clientHeight);const le=()=>{var _e,Re;if(r.current&&(r.current.updateCurrentTime(),I(r.current.currentTime),r.current.getAnalyserNode()&&s.current&&r.current.isPlaying)){const ce=s.current.analyse(u.current);M(ce)}if(i.current)if(((_e=r.current)==null?void 0:_e.getAnalyserNode())&&s.current&&((Re=r.current)!=null&&Re.isPlaying)){const ce=s.current.analyse(u.current);i.current.render(ce,h.current)}else i.current.render(Ba,h.current);l.current=requestAnimationFrame(le)};l.current=requestAnimationFrame(le)}else if(!y&&D&&e.current){i.current&&(i.current.dispose(),i.current=null);const ee=e.current.parentElement,V=e.current,ve=document.createElement("canvas");ve.className=V.className,ve.style.cssText=V.style.cssText,ee==null||ee.replaceChild(ve,V),e.current=ve,n.current=new Hg(e.current),c.current&&(n.current.loadMedia(c.current),n.current.initialize(S),c.current.element instanceof HTMLVideoElement&&c.current.element.play().catch(()=>{}));const le=()=>{if(r.current)if(r.current.updateCurrentTime(),I(r.current.currentTime),r.current.getAnalyserNode()&&s.current&&r.current.isPlaying){const Re=s.current.analyse(u.current);M(Re),n.current&&n.current.update(Re,h.current)}else{const Re=Ba;n.current&&n.current.update(Re,h.current)}n.current&&n.current.render(),l.current=requestAnimationFrame(le)};l.current=requestAnimationFrame(le)}else y&&i.current?(i.current.setFitMode(S.fitMode),e.current&&i.current.resize(e.current.clientWidth,e.current.clientHeight)):n.current&&n.current.updateSettings(S)},[S]),J.useEffect(()=>{u.current=d},[d]),J.useEffect(()=>{const y=D=>{D.target instanceof HTMLInputElement||D.target instanceof HTMLSelectElement||(D.key===" "||D.key==="Spacebar")&&(D.preventDefault(),w&&Ve())};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[w,L]);const je=(y,D)=>{T(V=>({...V,lastActivity:Date.now()}));const z=p.current;if(!z)return;const ee=mA(z.settings,y);if(!ee){if(z.settings.learnMode&&z.learningContext){const V=hA(z.settings,{parameterId:z.learningContext.parameterId,parameterName:z.learningContext.parameterName,ccNumber:y,min:z.learningContext.min,max:z.learningContext.max,isToggle:z.learningContext.isToggle});T(ve=>({...ve,settings:V,learningParameterId:null,learningContext:null}))}return}te(ee.parameterId,Wx(D,ee))},te=(y,D)=>{switch(y){case"brightness":v(z=>({...z,brightness:D}));break;case"contrast":v(z=>({...z,contrast:D}));break;case"rgbSplit":v(z=>({...z,rgbSplit:D}));break;case"glitch":v(z=>({...z,glitch:D}));break;case"zoomPulse":v(z=>({...z,zoomPulse:D}));break;case"displacement":v(z=>({...z,displacement:D}));break;case"geometryDisplacement":v(z=>({...z,geometryDisplacement:D}));break;case"intensity":v(z=>({...z,intensity:D}));break;case"audioSensitivity":g(z=>({...z,sensitivity:D}));break;case"audioSmoothing":g(z=>({...z,smoothing:D}));break;case"peakThreshold":g(z=>({...z,peakThreshold:D}));break;case"peakCooldown":g(z=>({...z,peakCooldown:D}));break;case"orbitSpeed":v(z=>({...z,orbitSpeed:D}));break;case"autoOrbit":v(z=>({...z,autoOrbit:D}));break}},ie=(y,D,z,ee,V)=>{E.settings.learnMode&&T(ve=>({...ve,learningParameterId:y,learningContext:{parameterId:y,parameterName:D,min:z,max:ee,isToggle:V}}))},Ee=y=>T(D=>({...D,settings:{...D.settings,enabled:y}})),Oe=y=>T(D=>({...D,settings:{...D.settings,selectedDeviceId:y}})),Me=y=>T(D=>({...D,settings:{...D.settings,smoothing:y}})),$e=y=>T(D=>({...D,settings:{...D.settings,learnMode:y},learningParameterId:null,learningContext:null})),ut=y=>T(D=>({...D,settings:fA(D.settings,y)})),Ge=()=>T(y=>({...y,settings:pA(y.settings)})),Qe=async y=>{var ve;const D=(ve=y.target.files)==null?void 0:ve[0];if(!D||!n.current&&!i.current)return;const z=D.type.startsWith("video/"),ee=D.type.startsWith("image/");if(!z&&!ee){alert("Please upload an image or video file"),y.target.value="";return}const V=URL.createObjectURL(D);try{if(z){const le=document.createElement("video");le.src=V,le.loop=!0,le.muted=!0,le.playsInline=!0,await new Promise(Re=>{le.addEventListener("loadedmetadata",Re)});const _e={file:D,type:rf.VIDEO,url:V,element:le};c.current=_e,m.current&&i.current?i.current.loadMedia(_e):n.current&&(n.current.loadMedia(_e),n.current.initialize(h.current)),R(D.name),le.play().catch(()=>{})}else{const le=new Image;le.src=V,await new Promise((Re,oe)=>{le.onload=Re,le.onerror=oe});const _e={file:D,type:rf.IMAGE,url:V,element:le};c.current=_e,m.current&&i.current?i.current.loadMedia(_e):n.current&&(n.current.loadMedia(_e),n.current.initialize(h.current)),R(D.name)}}catch{alert("Failed to load media file. Please try again.")}finally{y.target.value=""}},it=async y=>{var z,ee;const D=(z=y.target.files)==null?void 0:z[0];if(!(!D||!r.current))try{await r.current.loadAudioFile(D);const V=r.current.getAnalyserNode();V&&(s.current=new tp(V,((ee=r.current.audioContext)==null?void 0:ee.sampleRate)||44100)),b(D.name),X(r.current.duration),I(0)}catch{alert("Failed to load audio file. Please try again.")}finally{y.target.value=""}},Ve=async()=>{r.current&&(L?r.current.pause():await r.current.play())},gt=async()=>{var y;r.current&&(r.current.seek(0),I(0),((y=c.current)==null?void 0:y.element)instanceof HTMLVideoElement&&(c.current.element.currentTime=0),await r.current.play())},k=y=>{var D;r.current&&(r.current.seek(y),I(y),((D=c.current)==null?void 0:D.element)instanceof HTMLVideoElement&&(c.current.element.currentTime=y))},dt=y=>{O(y),r.current&&r.current.setVolume(y)},Je=()=>{if(!e.current||!a.current||!n.current&&!i.current)return;se(0),m.current&&(x.current=S.effectsQuality,v(V=>({...V,effectsQuality:ti.HIGH})));let y;if(r.current){const V=r.current.createAudioStream();V&&(y=V)}const D=e.current.clientWidth,z=e.current.clientHeight,ee=m.current?i.current:n.current;a.current.startRecording(e.current,{fps:30,includeAudio:!!y,quality:Ne,format:Ue,width:D,height:z},y,ee),q(!0)},ot=()=>{a.current&&(a.current.stopRecording(),q(!1),se(0),m.current&&x.current!==null&&(v(y=>({...y,effectsQuality:x.current})),x.current=null),r.current&&r.current.disposeAudioStream())},Ae=j>0?B/j*100:0,P=y=>{const D=Math.floor(y/60),z=y%60;return`${String(D).padStart(2,"0")}:${String(z).padStart(2,"0")}`};return f.jsxs("div",{className:"w-full h-screen bg-black text-white overflow-hidden relative",children:[f.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full",style:{touchAction:"none"}}),f.jsx("div",{className:"absolute top-4 left-4 flex flex-col gap-4 z-10",children:f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors",children:[f.jsx(Xx,{size:20}),f.jsx("span",{children:"Back to Visualizer"})]}),f.jsx("div",{className:"px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg",children:f.jsx("h1",{className:"text-xl font-bold",children:"Media Reactor"})})]})}),f.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10",children:[f.jsxs("label",{className:"cursor-pointer",children:[f.jsx("input",{type:"file",accept:"image/*,video/*",onChange:Qe,className:"hidden"}),f.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors",children:[f.jsx(Dc,{size:20}),f.jsx("span",{className:"text-sm",children:A||"Upload Media"})]})]}),f.jsxs("label",{className:"cursor-pointer",children:[f.jsx("input",{type:"file",accept:"audio/*",onChange:it,className:"hidden"}),f.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors",children:[f.jsx(Dc,{size:20}),f.jsx("span",{className:"text-sm",children:w||"Upload Audio"})]})]}),f.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg",children:[f.jsx("button",{onClick:Je,disabled:$||!A,className:"p-1 hover:bg-white/10 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:f.jsx(Jc,{size:18,className:$?"fill-red-500 text-red-500":"text-red-500"})}),f.jsx("button",{onClick:ot,disabled:!$,className:"p-1 hover:bg-white/10 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:f.jsx(Sp,{size:18,className:"text-white"})}),f.jsx("span",{className:"text-sm text-white/70 font-mono",children:P(ne)})]})]}),f.jsx(vA,{settings:S,audioSettings:d,audioFeatures:_,midiState:E,onSettingsChange:v,onAudioSettingsChange:g,onParameterClick:ie,onMIDIEnableChange:Ee,onMIDIDeviceChange:Oe,onMIDISmoothingChange:Me,onMIDILearnModeChange:$e,onMIDIRemoveMapping:ut,onMIDIClearMappings:Ge}),f.jsx("div",{className:"absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4",children:f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsx("button",{onClick:gt,disabled:!w,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play from beginning",children:f.jsx($x,{size:20})}),f.jsx("button",{onClick:Ve,disabled:!w,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play/Pause (Spacebar)",children:L?"⏸":"▶"}),f.jsxs("div",{className:"flex-1 flex items-center gap-3",children:[f.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:da(B)}),f.jsxs("div",{className:"flex-1 relative h-2 bg-white/20 rounded-full overflow-hidden",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 bg-blue-500 rounded-full transition-all",style:{width:`${Ae}%`}}),f.jsx("input",{type:"range",min:"0",max:j,step:"0.1",value:B,onChange:y=>k(parseFloat(y.target.value)),disabled:!w,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"})]}),f.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:da(j)})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-sm text-white/70",children:"🔊"}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:G,onChange:y=>dt(parseFloat(y.target.value)),className:"w-24"})]})]})})]})}const sf=(1+Math.sqrt(5))/2,Fn=Math.PI*2;function ha(t){const{center:e,radius:n,segments:i=64}=t,r=[];for(let s=0;s<=i;s++){const a=s/i*Fn,o=e[0]+Math.cos(a)*n,l=e[1]+Math.sin(a)*n;r.push(new N(o,l,0))}return r}function Wg(t=3){const n=[],i=[],r=[];n.push({center:[0,0],radius:1});for(let s=1;s<=t;s++){const a=s*6,o=1*2*s;for(let l=0;l<a;l++){const c=l/a*Fn,h=Math.cos(c)*o,u=Math.sin(c)*o;n.push({center:[h,u],radius:1})}}return n.forEach((s,a)=>{const o=ha(s),l=i.length;i.push(...o);for(let c=0;c<o.length-1;c++)r.push([l+c,l+c+1])}),{vertices:i,edges:r}}function Qx(){const e=[],n=[],i=[];e.push({center:[0,0],radius:1});for(let r=0;r<6;r++){const s=r/6*Fn,a=Math.cos(s)*1,o=Math.sin(s)*1;e.push({center:[a,o],radius:1})}return e.forEach(r=>{const s=ha(r),a=n.length;n.push(...s);for(let o=0;o<s.length-1;o++)i.push([a+o,a+o+1])}),{vertices:n,edges:i}}function _A(){const t=[],e=[];Qx();const n=[new N(0,0,0)];for(let i=0;i<6;i++){const r=i/6*Fn;n.push(new N(Math.cos(r),Math.sin(r),0))}for(let i=0;i<6;i++){const s=(i+.5)/6*Fn+Math.PI/6;n.push(new N(Math.cos(s)*.5,Math.sin(s)*.5,0))}t.push(...n);for(let i=1;i<n.length;i++)e.push([0,i]);for(let i=1;i<=6;i++){const r=i===6?1:i+1;e.push([i,r])}for(let i=7;i<=12;i++){const r=i===12?7:i+1;e.push([i,r])}for(let i=1;i<=6;i++)e.push([i,i+6]);return{vertices:t,edges:e}}function yA(){const e=[],n=[],i=ha({center:[-.5,0],radius:1}),r=ha({center:[1/2,0],radius:1}),s=e.length;e.push(...i);for(let o=0;o<i.length-1;o++)n.push([s+o,s+o+1]);const a=e.length;e.push(...r);for(let o=0;o<r.length-1;o++)n.push([a+o,a+o+1]);return{vertices:e,edges:n}}function SA(t=3){const e=[],n=[],r=100*t;for(let s=0;s<=r;s++){const a=s/100*Fn,o=Math.pow(sf,a/Math.PI),l=.2,c=o*Math.cos(a)*l,h=o*Math.sin(a)*l;e.push(new N(c,h,0)),s>0&&n.push([s-1,s])}return{vertices:e,edges:n}}function MA(){const t=[],e=[],n=ha({center:[0,0],radius:2});let i=t.length;t.push(...n);for(let l=0;l<n.length-1;l++)e.push([i+l,i+l+1]);const r=ha({center:[0,0],radius:1.8});i=t.length,t.push(...r);for(let l=0;l<r.length-1;l++)e.push([i+l,i+l+1]);const s=1.5,a=[[new N(0,s,0),new N(-s*.866,-s*.5,0),new N(s*.866,-s*.5,0)],[new N(0,s*.7,0),new N(-s*.6,-s*.35,0),new N(s*.6,-s*.35,0)],[new N(0,s*.4,0),new N(-s*.35,-s*.2,0),new N(s*.35,-s*.2,0)],[new N(0,s*.2,0),new N(-s*.17,-s*.1,0),new N(s*.17,-s*.1,0)]],o=[[new N(0,-s,0),new N(-s*.866,s*.5,0),new N(s*.866,s*.5,0)],[new N(0,-s*.7,0),new N(-s*.6,s*.35,0),new N(s*.6,s*.35,0)],[new N(0,-s*.4,0),new N(-s*.35,s*.2,0),new N(s*.35,s*.2,0)],[new N(0,-s*.2,0),new N(-s*.17,s*.1,0),new N(s*.17,s*.1,0)],[new N(0,-s*.1,0),new N(-s*.09,s*.05,0),new N(s*.09,s*.05,0)]];return[...a,...o].forEach(l=>{const c=t.length;t.push(...l),e.push([c,c+1]),e.push([c+1,c+2]),e.push([c+2,c])}),{vertices:t,edges:e}}function Gr(t){const e=[],n=[],i=[];switch(t){case"tetrahedron":{const r=1/Math.sqrt(3);e.push(new N(r,r,r),new N(r,-r,-r),new N(-r,r,-r),new N(-r,-r,r)),n.push([0,1],[0,2],[0,3],[1,2],[1,3],[2,3]),i.push([0,1,2],[0,1,3],[0,2,3],[1,2,3]);break}case"cube":{e.push(new N(-1,-1,-1),new N(1,-1,-1),new N(1,1,-1),new N(-1,1,-1),new N(-1,-1,1),new N(1,-1,1),new N(1,1,1),new N(-1,1,1)),n.push([0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]),i.push([0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[0,3,7,4],[1,2,6,5]);break}case"octahedron":{e.push(new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)),n.push([0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]),i.push([0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]);break}case"icosahedron":{const r=sf;e.push(new N(-1,r,0),new N(1,r,0),new N(-1,-r,0),new N(1,-r,0),new N(0,-1,r),new N(0,1,r),new N(0,-1,-r),new N(0,1,-r),new N(r,0,-1),new N(r,0,1),new N(-r,0,-1),new N(-r,0,1)),n.push([0,11],[0,5],[0,1],[0,7],[0,10],[1,5],[1,7],[1,8],[1,9],[2,11],[2,4],[2,3],[2,6],[2,10],[3,4],[3,6],[3,8],[3,9],[4,5],[4,9],[4,11],[5,9],[5,11],[6,7],[6,8],[6,10],[7,8],[7,10],[8,9],[10,11]);break}case"dodecahedron":{const r=sf,s=1/r;e.push(new N(1,1,1),new N(1,1,-1),new N(1,-1,1),new N(1,-1,-1),new N(-1,1,1),new N(-1,1,-1),new N(-1,-1,1),new N(-1,-1,-1),new N(0,s,r),new N(0,s,-r),new N(0,-s,r),new N(0,-s,-r),new N(s,r,0),new N(s,-r,0),new N(-s,r,0),new N(-s,-r,0),new N(r,0,s),new N(r,0,-s),new N(-r,0,s),new N(-r,0,-s)),n.push([0,8],[0,12],[0,16],[1,9],[1,12],[1,17],[2,10],[2,13],[2,16],[3,11],[3,13],[3,17],[4,8],[4,14],[4,18],[5,9],[5,14],[5,19],[6,10],[6,15],[6,18],[7,11],[7,15],[7,19],[8,10],[9,11],[12,14],[13,15],[16,17],[18,19]);break}}return{vertices:e,edges:n,faces:i}}function wA(t=1,e=.3,n=32,i=16){const r=[],s=[];for(let a=0;a<=n;a++){const o=a/n*Fn;for(let l=0;l<=i;l++){const c=l/i*Fn,h=(t+e*Math.cos(c))*Math.cos(o),u=(t+e*Math.cos(c))*Math.sin(o),p=e*Math.sin(c);if(r.push(new N(h,u,p)),a>0){const m=a*(i+1)+l,x=(a-1)*(i+1)+l;s.push([x,m])}if(l>0){const m=a*(i+1)+l,x=a*(i+1)+(l-1);s.push([x,m])}}}return{vertices:r,edges:s}}function bA(){const t=Gr("tetrahedron"),e=Gr("tetrahedron"),n=[...t.vertices],i=[...t.edges],r=t.vertices.length;return e.vertices.forEach(s=>{const a=s.clone();a.applyAxisAngle(new N(0,1,0),Math.PI),n.push(a)}),e.edges.forEach(([s,a])=>{i.push([s+r,a+r])}),{vertices:n,edges:i}}function EA(){const t=[],e=[];for(let i=0;i<6;i++){const r=i/6*Fn,s=Math.cos(r)*1.5,a=Math.sin(r)*1.5;t.push(new N(s,a,0))}return e.push([0,2],[2,4],[4,0]),e.push([1,3],[3,5],[5,1]),{vertices:t,edges:e}}function TA(){const t=[],e=[];for(let i=0;i<5;i++){const r=i/5*Fn-Math.PI/2,s=Math.cos(r)*1.5,a=Math.sin(r)*1.5;t.push(new N(s,a,0))}return e.push([0,2],[2,4],[4,1],[1,3],[3,0]),{vertices:t,edges:e}}function CA(){const t=[],e=[];for(let i=0;i<9;i++){const r=i/9*Fn-Math.PI/2,s=Math.cos(r)*1.5,a=Math.sin(r)*1.5;t.push(new N(s,a,0))}for(let i=0;i<9;i++)e.push([i,(i+1)%9]);return e.push([0,3],[3,6],[6,0]),e.push([1,4],[4,7],[7,1]),e.push([2,5],[5,8],[8,2]),{vertices:t,edges:e}}function AA(){const t=[],e=[];for(let s=0;s<8;s++){const a=s/8*Fn,o=Math.cos(a)*1.2,l=Math.sin(a)*1.2,c=Math.cos(a)*.6,h=Math.sin(a)*.6;t.push(new N(o,l,0)),t.push(new N(c,h,0));const u=s*2,p=s*2+1,m=(s+1)%8*2,x=(s+1)%8*2+1;e.push([u,x]),e.push([p,m])}return{vertices:t,edges:e}}function RA(t=6){const e=[],n=[];for(let r=1;r<=t;r++){const s=r/t*1.5,a=s*.3;for(let l=0;l<8;l++){const c=l/8*Fn,h=Math.cos(c)*s,u=Math.sin(c)*s,p=16,m=e.length;for(let x=0;x<=p;x++){const S=x/p*Fn,v=h+Math.cos(S)*a,d=u+Math.sin(S)*a;e.push(new N(v,d,0)),x>0&&n.push([m+x-1,m+x])}}const o=e.length-8*(petalSegments+1);for(let l=0;l<8;l++){const c=o+l*(petalSegments+1),h=o+(l+1)%8*(petalSegments+1);n.push([c,h])}}return{vertices:e,edges:n}}class PA{constructor(){this.renderer=null,this.scene=null,this.camera=null,this.composer=null,this.bloomPass=null,this.layerMeshes=new Map,this.time=0,this.audioFeatures=null}initialize(e,n){this.renderer=new _p({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight;this.renderer.setSize(i,r),this.scene=new mp,this.scene.background=new Xe(n.backgroundColor),this.camera=new Yt(75,i/r,.1,1e3),this.camera.position.z=5;const s=new sM(16777215,.5);this.scene.add(s);const a=new rM(16777215,1);a.position.set(5,5,5),this.scene.add(a),this.composer=new jx(this.renderer);const o=new Gx(this.scene,this.camera);this.composer.addPass(o),this.bloomPass=new Hx(new Ie(i,r),n.bloomStrength,n.bloomRadius,n.bloomThreshold),this.bloomPass.enabled=n.bloom,this.composer.addPass(this.bloomPass),this.updateLayers(n.layers)}createGeometry(e,n){switch(e){case"flower-of-life":return Wg(n);case"seed-of-life":return Qx();case"metatrons-cube":return _A();case"vesica-piscis":return yA();case"golden-spiral":return SA(n);case"sri-yantra":return MA();case"tetrahedron":return Gr("tetrahedron");case"cube":return Gr("cube");case"octahedron":return Gr("octahedron");case"dodecahedron":return Gr("dodecahedron");case"icosahedron":return Gr("icosahedron");case"torus":return wA(1,.3,32,16);case"merkaba":return bA();case"hexagram":return EA();case"pentagram":return TA();case"enneagram":return CA();case"celtic-knot":return AA();case"mandala":return RA(n);default:return Wg(3)}}createLayerMesh(e){const n=new js,i=this.createGeometry(e.geometryType,e.subdivisions),r=new Zh({color:new Xe(e.color),linewidth:e.strokeWidth,opacity:e.opacity,transparent:e.opacity<1});if(i.edges.forEach(([s,a])=>{const o=[i.vertices[s],i.vertices[a]],l=new It().setFromPoints(o),c=new As(l,r);n.add(c)}),e.glowIntensity>0){const s=new Zh({color:new Xe(e.color),linewidth:e.strokeWidth*2,opacity:e.opacity*e.glowIntensity*.3,transparent:!0});i.edges.forEach(([a,o])=>{const l=[i.vertices[a],i.vertices[o]],c=new It().setFromPoints(l),h=new As(c,s);n.add(h)})}return n.position.set(...e.position),n.rotation.set(...e.rotation),n.scale.setScalar(e.scale),n.visible=e.visible,{id:e.id,group:n,geometryType:e.geometryType,baseRotation:new Li(...e.rotation)}}updateLayers(e){if(!this.scene)return;const n=new Set(e.map(i=>i.id));this.layerMeshes.forEach((i,r)=>{n.has(r)||(this.scene.remove(i.group),this.layerMeshes.delete(r))}),e.forEach(i=>{const r=this.layerMeshes.get(i.id),s=r?e.find(o=>o.id===r.id):null;if(!r||r.geometryType!==i.geometryType||s&&(s.subdivisions!==i.subdivisions||s.strokeWidth!==i.strokeWidth||s.glowIntensity!==i.glowIntensity)){r&&this.scene.remove(r.group);const o=this.createLayerMesh(i);this.layerMeshes.set(i.id,o),this.scene.add(o.group)}else this.updateLayerProperties(i)})}updateLayerProperties(e){const n=this.layerMeshes.get(e.id);n&&(n.group.visible=e.visible,n.group.position.set(...e.position),n.group.scale.setScalar(e.scale),n.baseRotation.set(...e.rotation),n.group.rotation.copy(n.baseRotation),n.group.traverse(i=>{if(i instanceof As){const r=i.material;r.color.set(e.color),r.opacity=e.opacity,r.transparent=e.opacity<1,r.linewidth=e.strokeWidth}else if(i instanceof Ln){const r=i.material;r.color.set(e.color),r.opacity=e.opacity,r.transparent=e.opacity<1}else if(i instanceof Co){const r=i.material;r.color.set(e.color),r.opacity=e.opacity,r.transparent=e.opacity<1,r.size=e.strokeWidth*.05}}))}updateSettings(e){!this.scene||!this.bloomPass||(this.scene.background=new Xe(e.backgroundColor),this.bloomPass.enabled=e.bloom,this.bloomPass.strength=e.bloomStrength,this.bloomPass.radius=e.bloomRadius,this.bloomPass.threshold=e.bloomThreshold)}updateAudioFeatures(e){this.audioFeatures=e}render(e,n){!this.composer||!this.scene||(this.time+=e*n.animationSpeed,this.layerMeshes.forEach((i,r)=>{const s=n.layers.find(h=>h.id===r);if(!s||!s.visible)return;let a=i.baseRotation.x,o=i.baseRotation.y,l=i.baseRotation.z;n.globalRotationSpeed>0&&(o+=this.time*n.globalRotationSpeed);let c=s.scale;if(s.audioReactive&&this.audioFeatures){const h=1+this.audioFeatures.bass*n.bassReactivity*.8,u=1+this.audioFeatures.energy*n.energyReactivity*.4;if(c*=h*u,l+=this.audioFeatures.energy*n.energyReactivity*.15,a+=this.audioFeatures.highs*n.highsReactivity*.08,o+=this.audioFeatures.mids*n.energyReactivity*.05,n.peakPulse&&this.audioFeatures.peakTrigger){const p=Math.sin(this.time*20)*.3+1;c*=p}i.group.traverse(p=>{if(p instanceof As){const m=p.material,x=this.audioFeatures.energy*.5,S=this.audioFeatures.bass*.3;m.opacity=Math.min(1,s.opacity+x+S);const v=new Xe(s.color),d=1+this.audioFeatures.energy*.8;v.multiplyScalar(d),m.color.copy(v)}})}else i.group.traverse(h=>{if(h instanceof As){const u=h.material;u.opacity=s.opacity,u.color.set(s.color)}});i.group.scale.setScalar(c),i.group.rotation.set(a,o,l)}),this.composer.render())}resize(e,n){!this.renderer||!this.camera||!this.composer||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer.setSize(e,n))}dispose(){var e,n;this.layerMeshes.forEach(i=>{i.group.traverse(r=>{(r instanceof Ln||r instanceof As||r instanceof Co)&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())})}),this.layerMeshes.clear(),(e=this.composer)==null||e.dispose(),(n=this.renderer)==null||n.dispose()}}const NA={geometryType:"flower-of-life",visible:!0,position:[0,0,0],rotation:[0,0,0],scale:1,color:"#00d4ff",opacity:1,strokeWidth:2,glowIntensity:.5,subdivisions:6,audioReactive:!0},ud={layers:[{id:"layer-1",...NA,geometryType:"flower-of-life",color:"#00d4ff",scale:1.5}],backgroundColor:"#0a0a0f",colorScheme:"cosmic",customColors:["#00d4ff","#ff006e","#ffbe0b","#8338ec","#3a86ff"],globalRotationSpeed:.1,bassReactivity:1,energyReactivity:1,highsReactivity:.6,peakPulse:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.4,bloomThreshold:.3,showGrid:!1,showGoldenRatio:!1,symmetrySegments:6,animationSpeed:1,particleEmission:!1,particleDensity:100},Xg={"flower-of-life":{name:"Flower of Life",description:"Ancient symbol representing creation and the interconnectedness of all life"},"seed-of-life":{name:"Seed of Life",description:"Seven overlapping circles forming the basic pattern of creation"},"metatrons-cube":{name:"Metatron's Cube",description:"Contains all five Platonic solids, representing the building blocks of the universe"},"vesica-piscis":{name:"Vesica Piscis",description:"Intersection of two circles, symbolizing the womb of creation"},"golden-spiral":{name:"Golden Spiral",description:"Logarithmic spiral based on the Fibonacci sequence and golden ratio"},"sri-yantra":{name:"Sri Yantra",description:"Ancient Hindu diagram representing the cosmos and human consciousness"},tetrahedron:{name:"Tetrahedron",description:"Four-sided Platonic solid representing fire and transformation"},cube:{name:"Cube",description:"Six-sided Platonic solid representing earth and stability"},octahedron:{name:"Octahedron",description:"Eight-sided Platonic solid representing air and balance"},dodecahedron:{name:"Dodecahedron",description:"Twelve-sided Platonic solid representing ether and the universe"},icosahedron:{name:"Icosahedron",description:"Twenty-sided Platonic solid representing water and flow"},torus:{name:"Torus",description:"Fundamental energy flow pattern found throughout nature"},merkaba:{name:"Merkaba",description:"Counter-rotating tetrahedrons representing the light-body vehicle"},hexagram:{name:"Hexagram",description:"Six-pointed star representing harmony of opposites"},pentagram:{name:"Pentagram",description:"Five-pointed star representing the elements and protection"},enneagram:{name:"Enneagram",description:"Nine-pointed symbol representing personality types and growth"},"celtic-knot":{name:"Celtic Knot",description:"Interwoven pattern representing eternity and interconnection"},mandala:{name:"Mandala",description:"Circular pattern representing wholeness and the universe"}};function DA({settings:t,onSettingsChange:e,selectedLayerId:n,onLayerSelect:i}){const r=t.layers.find(u=>u.id===n),s=()=>{const u={id:`layer-${Date.now()}`,geometryType:"flower-of-life",visible:!0,position:[0,0,0],rotation:[0,0,0],scale:1,color:"#00d4ff",opacity:1,strokeWidth:2,glowIntensity:.5,subdivisions:3,audioReactive:!0};e({...t,layers:[...t.layers,u]}),i(u.id)},a=u=>{e({...t,layers:t.layers.filter(p=>p.id!==u)}),n===u&&i(null)},o=u=>{e({...t,layers:t.layers.map(p=>p.id===u?{...p,visible:!p.visible}:p)})},l=(u,p)=>{e({...t,layers:t.layers.map(m=>m.id===u?{...m,...p}:m)})},c=(u,p)=>{e({...t,[u]:p})},h=[{value:"flower-of-life",label:"Flower of Life"},{value:"seed-of-life",label:"Seed of Life"},{value:"metatrons-cube",label:"Metatron's Cube"},{value:"vesica-piscis",label:"Vesica Piscis"},{value:"golden-spiral",label:"Golden Spiral"},{value:"sri-yantra",label:"Sri Yantra"},{value:"tetrahedron",label:"Tetrahedron"},{value:"cube",label:"Cube"},{value:"octahedron",label:"Octahedron"},{value:"dodecahedron",label:"Dodecahedron"},{value:"icosahedron",label:"Icosahedron"},{value:"torus",label:"Torus"},{value:"merkaba",label:"Merkaba"}];return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4",children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(VC,{className:"w-4 h-4"}),f.jsx("h3",{className:"text-sm font-medium",children:"Geometry Layers"})]}),f.jsxs("button",{onClick:s,className:"px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs flex items-center gap-1",children:[f.jsx(XC,{className:"w-3 h-3"}),"Add Layer"]})]}),f.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:t.layers.map((u,p)=>f.jsx("div",{className:`p-2 rounded cursor-pointer transition-colors ${n===u.id?"bg-blue-600/30 border border-blue-500":"bg-gray-700/50 hover:bg-gray-700"}`,onClick:()=>i(u.id),children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[f.jsx("button",{onClick:m=>{m.stopPropagation(),o(u.id)},className:"p-1 hover:bg-gray-600 rounded",children:u.visible?f.jsx(kC,{className:"w-3 h-3"}):f.jsx(OC,{className:"w-3 h-3 opacity-50"})}),f.jsx("div",{className:"w-4 h-4 rounded border border-gray-600",style:{backgroundColor:u.color}}),f.jsx("span",{className:"text-xs",children:Xg[u.geometryType].name})]}),f.jsx("button",{onClick:m=>{m.stopPropagation(),a(u.id)},className:"p-1 hover:bg-red-600 rounded",disabled:t.layers.length===1,children:f.jsx(Mp,{className:"w-3 h-3"})})]})},u.id))})]}),r&&f.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 space-y-4",children:[f.jsxs("h3",{className:"text-sm font-medium flex items-center gap-2",children:["Layer Settings",f.jsxs("div",{className:"group relative",children:[f.jsx(BC,{className:"w-3 h-3 opacity-50 hover:opacity-100 cursor-help"}),f.jsx("div",{className:"absolute left-full ml-2 top-0 bg-gray-900 text-xs p-2 rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10",children:Xg[r.geometryType].description})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs text-gray-400",children:"Geometry Type"}),f.jsx("select",{value:r.geometryType,onChange:u=>l(r.id,{geometryType:u.target.value}),className:"w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1",children:h.map(u=>f.jsx("option",{value:u.value,children:u.label},u.value))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs text-gray-400",children:"Color"}),f.jsx("input",{type:"color",value:r.color,onChange:u=>l(r.id,{color:u.target.value}),className:"w-full h-8 bg-gray-700 rounded mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Scale: ",r.scale.toFixed(2)]}),f.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:r.scale,onChange:u=>l(r.id,{scale:parseFloat(u.target.value)}),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Opacity: ",r.opacity.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:r.opacity,onChange:u=>l(r.id,{opacity:parseFloat(u.target.value)}),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Stroke Width: ",r.strokeWidth.toFixed(1)]}),f.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.5",value:r.strokeWidth,onChange:u=>l(r.id,{strokeWidth:parseFloat(u.target.value)}),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Glow Intensity: ",r.glowIntensity.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:r.glowIntensity,onChange:u=>l(r.id,{glowIntensity:parseFloat(u.target.value)}),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Subdivisions: ",r.subdivisions]}),f.jsx("input",{type:"range",min:"1",max:"8",step:"1",value:r.subdivisions,onChange:u=>l(r.id,{subdivisions:parseInt(u.target.value)}),className:"w-full mt-1"})]}),f.jsxs("div",{className:"pt-2 border-t border-gray-700",children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Rotation X: ",r.rotation[0].toFixed(2)]}),f.jsx("input",{type:"range",min:"-3.14",max:"3.14",step:"0.01",value:r.rotation[0],onChange:u=>l(r.id,{rotation:[parseFloat(u.target.value),r.rotation[1],r.rotation[2]]}),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Rotation Y: ",r.rotation[1].toFixed(2)]}),f.jsx("input",{type:"range",min:"-3.14",max:"3.14",step:"0.01",value:r.rotation[1],onChange:u=>l(r.id,{rotation:[r.rotation[0],parseFloat(u.target.value),r.rotation[2]]}),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Rotation Z: ",r.rotation[2].toFixed(2)]}),f.jsx("input",{type:"range",min:"-3.14",max:"3.14",step:"0.01",value:r.rotation[2],onChange:u=>l(r.id,{rotation:[r.rotation[0],r.rotation[1],parseFloat(u.target.value)]}),className:"w-full mt-1"})]}),f.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-gray-700",children:[f.jsx("label",{className:"text-xs text-gray-400",children:"Audio Reactive"}),f.jsx("input",{type:"checkbox",checked:r.audioReactive,onChange:u=>l(r.id,{audioReactive:u.target.checked}),className:"w-4 h-4"})]})]}),f.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 space-y-4",children:[f.jsx("h3",{className:"text-sm font-medium",children:"Global Settings"}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs text-gray-400",children:"Background Color"}),f.jsx("input",{type:"color",value:t.backgroundColor,onChange:u=>c("backgroundColor",u.target.value),className:"w-full h-8 bg-gray-700 rounded mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Rotation Speed: ",t.globalRotationSpeed.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:t.globalRotationSpeed,onChange:u=>c("globalRotationSpeed",parseFloat(u.target.value)),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Animation Speed: ",t.animationSpeed.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:t.animationSpeed,onChange:u=>c("animationSpeed",parseFloat(u.target.value)),className:"w-full mt-1"})]}),f.jsxs("div",{className:"pt-2 border-t border-gray-700",children:[f.jsx("h4",{className:"text-xs font-medium mb-2",children:"Audio Reactivity"}),f.jsxs("div",{className:"space-y-2",children:[f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Bass: ",t.bassReactivity.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:t.bassReactivity,onChange:u=>c("bassReactivity",parseFloat(u.target.value)),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Energy: ",t.energyReactivity.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:t.energyReactivity,onChange:u=>c("energyReactivity",parseFloat(u.target.value)),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Highs: ",t.highsReactivity.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:t.highsReactivity,onChange:u=>c("highsReactivity",parseFloat(u.target.value)),className:"w-full mt-1"})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("label",{className:"text-xs text-gray-400",children:"Peak Pulse"}),f.jsx("input",{type:"checkbox",checked:t.peakPulse,onChange:u=>c("peakPulse",u.target.checked),className:"w-4 h-4"})]})]})]}),f.jsxs("div",{className:"pt-2 border-t border-gray-700",children:[f.jsx("h4",{className:"text-xs font-medium mb-2",children:"Bloom Effect"}),f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("label",{className:"text-xs text-gray-400",children:"Enabled"}),f.jsx("input",{type:"checkbox",checked:t.bloom,onChange:u=>c("bloom",u.target.checked),className:"w-4 h-4"})]}),t.bloom&&f.jsxs("div",{className:"space-y-2",children:[f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Strength: ",t.bloomStrength.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:t.bloomStrength,onChange:u=>c("bloomStrength",parseFloat(u.target.value)),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Radius: ",t.bloomRadius.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:t.bloomRadius,onChange:u=>c("bloomRadius",parseFloat(u.target.value)),className:"w-full mt-1"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs text-gray-400",children:["Threshold: ",t.bloomThreshold.toFixed(2)]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:t.bloomThreshold,onChange:u=>c("bloomThreshold",parseFloat(u.target.value)),className:"w-full mt-1"})]})]})]})]})]})}const IA={smoothing:.75,sensitivity:1,peakThreshold:.5,peakCooldown:200},$g={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};function LA({onBack:t}){var H;const e=J.useRef(null),n=J.useRef(null),i=J.useRef(null),r=J.useRef(null),s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(0),c=J.useRef(null),h=J.useRef(ud),[u,p]=J.useState(ud),[m,x]=J.useState($g),[S,v]=J.useState(!1),[d,g]=J.useState(0),[_,M]=J.useState(0),[E,T]=J.useState({enabled:!1,devices:[],learningParam:null,mappings:{}}),[A,R]=J.useState(((H=ud.layers[0])==null?void 0:H.id)||null);J.useEffect(()=>{if(!e.current)return;const B=e.current,I=new PA;I.initialize(B,u),n.current=I;const j=new ep;i.current=j;const X=new yp;s.current=X;const G=new No;a.current=G,G.initialize().then(q=>{q&&(T(ne=>({...ne,enabled:!0,devices:G.getDevices()})),G.setMessageCallback((ne,se)=>{console.log("MIDI message:",ne,se)}))});const O=()=>{if(!B)return;const q=B.clientWidth,ne=B.clientHeight;I.resize(q,ne)};window.addEventListener("resize",O),O();const $=q=>{const ne=l.current===0?0:(q-l.current)/1e3;l.current=q;let se=$g;j.isPlaying&&(j.getAnalyserNode()&&r.current&&(se=r.current.analyse(IA),x(se)),j.updateCurrentTime(),g(j.currentTime)),I.updateAudioFeatures(se),I.render(ne,h.current),o.current=requestAnimationFrame($)};return o.current=requestAnimationFrame($),()=>{o.current!==null&&cancelAnimationFrame(o.current),I.dispose(),j.cleanup(),G.dispose(),window.removeEventListener("resize",O)}},[]),J.useEffect(()=>{h.current=u,n.current&&(n.current.updateSettings(u),n.current.updateLayers(u.layers))},[u]);const w=async B=>{var j;const I=(j=B.target.files)==null?void 0:j[0];if(!(!I||!i.current))try{await i.current.loadAudioFile(I);const X=i.current.getAnalyserNode(),G=i.current.audioContext;X&&G&&(r.current=new tp(X,G.sampleRate)),M(i.current.duration),await i.current.play(),v(!0)}catch(X){console.error("Error loading audio file:",X)}},b=async()=>{i.current&&(S?(i.current.pause(),v(!1)):(await i.current.play(),v(!0)))},L=B=>{i.current&&(i.current.seek(B),g(B))};return f.jsxs("div",{className:"fixed inset-0 bg-black",children:[f.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full"}),f.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none",children:[f.jsxs("button",{onClick:t,className:"px-4 py-2 bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center gap-2 pointer-events-auto transition-colors",children:[f.jsx(Xx,{className:"w-4 h-4"}),"Back"]}),f.jsxs("div",{className:"text-right",children:[f.jsx("h1",{className:"text-2xl font-bold text-white drop-shadow-lg",children:"Sacred Geometry Visualizer"}),f.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"Ancient patterns meet modern audio reactivity"})]})]}),f.jsx("div",{className:"absolute top-20 left-4 w-80 max-h-[calc(100vh-120px)] overflow-y-auto pointer-events-none",children:f.jsxs("div",{className:"space-y-4 pointer-events-auto",children:[f.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-sm rounded-lg p-4",children:[f.jsx("h3",{className:"text-sm font-medium mb-3 flex items-center gap-2",children:"Audio Input"}),f.jsx("input",{ref:c,type:"file",accept:"audio/*",onChange:w,className:"hidden"}),f.jsxs("button",{onClick:()=>{var B;return(B=c.current)==null?void 0:B.click()},className:"w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center gap-2",children:[f.jsx(Dc,{className:"w-4 h-4"}),"Load Audio File"]}),_>0&&f.jsxs("div",{className:"mt-4",children:[f.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400 mb-1",children:[f.jsx("span",{children:da(d)}),f.jsx("span",{children:da(_)})]}),f.jsx("input",{type:"range",min:"0",max:_,step:"0.1",value:d,onChange:B=>L(parseFloat(B.target.value)),className:"w-full"}),f.jsx("button",{onClick:b,className:"w-full mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded",children:S?"Pause":"Play"})]})]}),f.jsx("div",{className:"bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden",children:f.jsx(DA,{settings:u,onSettingsChange:p,selectedLayerId:A,onLayerSelect:R})})]})}),f.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-center gap-8 text-xs text-gray-400 pointer-events-none",children:[f.jsxs("div",{className:"bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded",children:["Energy: ",(m.energy*100).toFixed(0),"%"]}),f.jsxs("div",{className:"bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded",children:["Bass: ",(m.bass*100).toFixed(0),"%"]}),f.jsxs("div",{className:"bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded",children:["Highs: ",(m.highs*100).toFixed(0),"%"]}),m.peakTrigger&&f.jsx("div",{className:"bg-blue-600/80 backdrop-blur-sm px-3 py-2 rounded animate-pulse",children:"PEAK"})]})]})}const Jx="audio-visualizer-midi-settings",dd={enabled:!1,selectedDeviceId:null,smoothing:.3,learnMode:!1,mappings:[]};function FA(){try{const t=localStorage.getItem(Jx);if(!t)return{...dd};const e=JSON.parse(t);return{...dd,...e,learnMode:!1}}catch{return{...dd}}}function UA(t){try{localStorage.setItem(Jx,JSON.stringify(t))}catch{}}function OA(t,e){const n=t.mappings.findIndex(r=>r.parameterId===e.parameterId),i=[...t.mappings];return n>=0?i[n]=e:i.push(e),{...t,mappings:i}}function kA(t,e){return{...t,mappings:t.mappings.filter(n=>n.parameterId!==e)}}function zA(t){return{...t,mappings:[]}}function BA(t,e){return t.mappings.find(n=>n.ccNumber===e)||null}const Ul={geometryType:$t.SPHERE,detailLevel:Cn.MEDIUM,renderStyle:Ut.WIREFRAME,displacement:.5,noiseScale:2,noiseSpeed:.5,subWeight:.3,bassWeight:.5,midsWeight:.3,highsWeight:.2,pulseOnPeak:!0,baseColor:"#3b82f6",pointSize:.2,pointDensity:.3},hd={smoothing:.75,sensitivity:1,peakThreshold:.5,peakCooldown:200},fd={autoOrbit:!1,orbitSpeed:.3,bloom:!1,bloomStrength:1.5,bloomRadius:.4,bloomThreshold:.85,parameterSmoothing:.2},VA={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};function HA(){const[t,e]=J.useState("visualizer"),n=J.useRef(null),i=J.useRef(null),r=J.useRef(null),s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(null),c=J.useRef(null),h=J.useRef(null),u=J.useRef(null),p=J.useRef(null),m=J.useRef({}),x=J.useRef(Ul),S=J.useRef(Ut.WIREFRAME),v=J.useRef(Ul),d=J.useRef(hd),g=J.useRef(fd),_=J.useRef(tc),[M,E]=J.useState(Ul),[T,A]=J.useState(hd),[R,w]=J.useState(fd),[b,L]=J.useState(tc),[H,B]=J.useState(VA),[I,j]=J.useState({isSupported:!1,hasAccess:!1,isInitializing:!1,devices:[],settings:FA(),lastActivity:0,learningParameterId:null,learningContext:null}),[X,G]=J.useState(!1),[O,$]=J.useState(0),[q,ne]=J.useState(0),[se,Ne]=J.useState(.7),[Ue,je]=J.useState(null),[te,ie]=J.useState(!1),[Ee,Oe]=J.useState(null),[Me,$e]=J.useState(!1),[ut,Ge]=J.useState(0),[Qe,it]=J.useState(30),[Ve,gt]=J.useState(!0),[k,dt]=J.useState(null),[Je,ot]=J.useState("high"),[Ae,P]=J.useState("auto"),[y,D]=J.useState(!1),[z,ee]=J.useState(!1),[V,ve]=J.useState(null),[le,_e]=J.useState(!1),[Re,oe]=J.useState(null),ce=(ae,ue)=>{m.current[ae]?m.current[ae].target=ue:m.current[ae]={target:ue,smoothed:ue}},xe=(ae,ue)=>{var Se;return((Se=m.current[ae])==null?void 0:Se.smoothed)??ue},F=ae=>{Object.keys(m.current).forEach(ue=>{const Se=m.current[ue];Se.smoothed+=(Se.target-Se.smoothed)*ae})},K=ae=>{if(!a.current)return;l.current||(l.current=new ld);const ue=l.current.initialize(ae);a.current.setActiveVisual(ue)},ge=ae=>{if(!a.current||!o.current)return;const ue=o.current.initialize(ae);ue&&a.current.setActiveVisual(ue)};J.useEffect(()=>{var ue,Se,mn;if(!n.current||t!=="visualizer")return;if((ue=a.current)==null||ue.cleanup(),(Se=o.current)==null||Se.dispose(),(mn=l.current)==null||mn.dispose(),r.current=new ep,a.current=new wC(n.current),o.current=new od,l.current=new ld,c.current=new yp,c.current.setTimerCallback(rt=>Ge(rt)),c.current.setErrorCallback(rt=>{dt(rt),$e(!1),Ge(0)}),c.current.setFormatWarningCallback(rt=>dt(rt)),r.current.onPlay(()=>G(!0)),r.current.onPause(()=>G(!1)),r.current.onEnded(()=>G(!1)),M.renderStyle===Ut.PARTICLES)K(b);else{const rt=o.current.initialize(M);rt&&a.current.setActiveVisual(rt)}const ae=()=>{var Q,Z,Y;const rt=performance.now(),sn=g.current,an=v.current,yi=d.current,us=_.current;F(sn.parameterSmoothing);const C={...an,displacement:xe("displacement",an.displacement),noiseScale:xe("noiseScale",an.noiseScale),noiseSpeed:xe("noiseSpeed",an.noiseSpeed),subWeight:xe("subWeight",an.subWeight),bassWeight:xe("bassWeight",an.bassWeight),midsWeight:xe("midsWeight",an.midsWeight),highsWeight:xe("highsWeight",an.highsWeight),pointSize:xe("pointSize",an.pointSize),pointDensity:xe("pointDensity",an.pointDensity)},W={...yi,smoothing:xe("audioSmoothing",yi.smoothing),sensitivity:xe("audioSensitivity",yi.sensitivity),peakThreshold:xe("peakThreshold",yi.peakThreshold),peakCooldown:xe("peakCooldown",yi.peakCooldown)};if(a.current&&sn.autoOrbit&&a.current.updateAutoOrbit(!0,xe("orbitSpeed",sn.orbitSpeed)),r.current){r.current.updateCurrentTime(),$(r.current.currentTime);const Ce=r.current.getAnalyserNode()&&s.current&&r.current.isPlaying?s.current.analyse(W):{energy:0,bass:0,mids:0,highs:0,sub:0,peakTrigger:!1,timestamp:rt};B(Ce),an.renderStyle===Ut.PARTICLES?(Q=l.current)==null||Q.update(rt,Ce,us):(Z=o.current)==null||Z.update(rt,Ce,C)}(Y=a.current)==null||Y.render(),u.current=requestAnimationFrame(ae)};return ae(),()=>{var rt,sn,an,yi,us;u.current&&cancelAnimationFrame(u.current),(rt=c.current)==null||rt.dispose(),(sn=r.current)==null||sn.cleanup(),(an=a.current)==null||an.cleanup(),(yi=o.current)==null||yi.dispose(),(us=l.current)==null||us.dispose()}},[t]),J.useEffect(()=>{qx();const ae=eA("default-1");ae&&Nr(ae)},[]),J.useEffect(()=>{var ae;(ae=a.current)==null||ae.updateAutoOrbit(R.autoOrbit,R.orbitSpeed)},[R.autoOrbit]),J.useEffect(()=>{var ae;(ae=a.current)==null||ae.updateBloom(R.bloom,R.bloomStrength,R.bloomRadius,R.bloomThreshold)},[R.bloom,R.bloomStrength,R.bloomRadius,R.bloomThreshold]),J.useEffect(()=>{var Se,mn;if(!a.current)return;const ae=S.current,ue=M.renderStyle;ue!==ae&&(S.current=ue,Me&&Un(),ue===Ut.PARTICLES?((Se=o.current)==null||Se.dispose(),o.current=new od,K(b)):ae===Ut.PARTICLES&&((mn=l.current)==null||mn.dispose(),l.current=new ld,o.current||(o.current=new od),ge(M)))},[M.renderStyle]),J.useEffect(()=>((async()=>{const ue=new No,Se=ue.isSupported();if(j(rt=>({...rt,isSupported:Se})),!Se||!I.settings.enabled)return;if(await ue.initialize()){const rt=ue.getDevices();ue.setSelectedDevice(I.settings.selectedDeviceId),ue.setSmoothing(I.settings.smoothing),ue.setMessageCallback(U),j(sn=>({...sn,hasAccess:!0,devices:rt})),h.current=ue}})(),()=>{var ue;(ue=h.current)==null||ue.dispose()}),[]),J.useEffect(()=>{p.current=I},[I]),J.useEffect(()=>{v.current=M},[M]),J.useEffect(()=>{d.current=T},[T]),J.useEffect(()=>{g.current=R},[R]),J.useEffect(()=>{_.current=b},[b]),J.useEffect(()=>{var ae;t==="mediaReactor"&&((ae=h.current)==null||ae.dispose(),h.current=null)},[t]),J.useEffect(()=>{ce("displacement",M.displacement),ce("noiseScale",M.noiseScale),ce("noiseSpeed",M.noiseSpeed),ce("subWeight",M.subWeight),ce("bassWeight",M.bassWeight),ce("midsWeight",M.midsWeight),ce("highsWeight",M.highsWeight),ce("pointSize",M.pointSize),ce("pointDensity",M.pointDensity)},[M.displacement,M.noiseScale,M.noiseSpeed,M.subWeight,M.bassWeight,M.midsWeight,M.highsWeight,M.pointSize,M.pointDensity]),J.useEffect(()=>{ce("orbitSpeed",R.orbitSpeed)},[R.orbitSpeed]),J.useEffect(()=>{ce("audioSmoothing",T.smoothing),ce("audioSensitivity",T.sensitivity),ce("peakThreshold",T.peakThreshold),ce("peakCooldown",T.peakCooldown)},[T.smoothing,T.sensitivity,T.peakThreshold,T.peakCooldown]),J.useEffect(()=>{UA(I.settings)},[I.settings]),J.useEffect(()=>{var ae;(ae=h.current)==null||ae.setSmoothing(I.settings.smoothing)},[I.settings.smoothing]),J.useEffect(()=>{var ae;(ae=h.current)==null||ae.setSelectedDevice(I.settings.selectedDeviceId)},[I.settings.selectedDeviceId]),J.useEffect(()=>{(async()=>{var ue;if(I.settings.enabled&&!I.hasAccess&&I.isSupported){j(rt=>({...rt,isInitializing:!0}));const Se=h.current||new No;if(await Se.initialize()){const rt=Se.getDevices();Se.setSelectedDevice(I.settings.selectedDeviceId),Se.setSmoothing(I.settings.smoothing),Se.setMessageCallback(U),j(sn=>({...sn,hasAccess:!0,isInitializing:!1,devices:rt})),h.current=Se}else j(rt=>({...rt,hasAccess:!1,isInitializing:!1}))}else!I.settings.enabled&&I.hasAccess&&((ue=h.current)==null||ue.dispose(),j(Se=>({...Se,hasAccess:!1,isInitializing:!1,devices:[]})),h.current=null)})()},[I.settings.enabled]),J.useEffect(()=>{const ae=()=>ee(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",ae),()=>document.removeEventListener("fullscreenchange",ae)},[]),J.useEffect(()=>{const ae=ue=>{ue.target instanceof HTMLInputElement||ue.target instanceof HTMLSelectElement||(ue.key===" "||ue.key==="Spacebar"?(ue.preventDefault(),Ue&&Bt()):ue.key==="r"||ue.key==="R"?(ue.preventDefault(),Me?Un():Ue&&cs()):ue.key==="f"||ue.key==="F"?(ue.preventDefault(),wa()):ue.key==="Escape"&&Me&&(ue.preventDefault(),Un()))};return window.addEventListener("keydown",ae),()=>window.removeEventListener("keydown",ae)},[Me,Ue,X]),J.useEffect(()=>{if(!a.current||!o.current||M.renderStyle===Ut.PARTICLES)return;const ae=x.current;if(M.geometryType!==ae.geometryType||M.detailLevel!==ae.detailLevel||M.renderStyle!==ae.renderStyle||M.pointDensity!==ae.pointDensity){Me&&Un(),o.current.dispose();const Se=o.current.initialize(M);Se&&a.current.setActiveVisual(Se)}else o.current.updateSettings(M);x.current=M},[M]);const U=(ae,ue)=>{j(rt=>({...rt,lastActivity:Date.now()}));const Se=p.current;if(!Se)return;const mn=BA(Se.settings,ae);if(!mn){if(Se.settings.learnMode&&Se.learningContext){const rt=OA(Se.settings,{parameterId:Se.learningContext.parameterId,parameterName:Se.learningContext.parameterName,ccNumber:ae,min:Se.learningContext.min,max:Se.learningContext.max,isToggle:Se.learningContext.isToggle});j(sn=>({...sn,settings:rt,learningParameterId:null,learningContext:null}))}return}fe(mn.parameterId,Wx(ue,mn))},fe=(ae,ue)=>{switch(ae){case"displacement":E(Se=>({...Se,displacement:ue}));break;case"noiseScale":E(Se=>({...Se,noiseScale:ue}));break;case"noiseSpeed":E(Se=>({...Se,noiseSpeed:ue}));break;case"subWeight":E(Se=>({...Se,subWeight:ue}));break;case"bassWeight":E(Se=>({...Se,bassWeight:ue}));break;case"midsWeight":E(Se=>({...Se,midsWeight:ue}));break;case"highsWeight":E(Se=>({...Se,highsWeight:ue}));break;case"pointSize":E(Se=>({...Se,pointSize:ue}));break;case"pointDensity":E(Se=>({...Se,pointDensity:ue}));break;case"pulseOnPeak":E(Se=>({...Se,pulseOnPeak:ue}));break;case"audioSmoothing":A(Se=>({...Se,smoothing:ue}));break;case"audioSensitivity":A(Se=>({...Se,sensitivity:ue}));break;case"peakThreshold":A(Se=>({...Se,peakThreshold:ue}));break;case"peakCooldown":A(Se=>({...Se,peakCooldown:ue}));break;case"autoOrbit":w(Se=>({...Se,autoOrbit:ue}));break;case"orbitSpeed":w(Se=>({...Se,orbitSpeed:ue}));break}},de=(ae,ue,Se,mn,rt)=>{I.settings.learnMode&&j(sn=>({...sn,learningParameterId:ae,learningContext:{parameterId:ae,parameterName:ue,min:Se,max:mn,isToggle:rt}}))},ye=ae=>j(ue=>({...ue,settings:{...ue.settings,enabled:ae}})),he=ae=>j(ue=>({...ue,settings:{...ue.settings,selectedDeviceId:ae}})),re=ae=>j(ue=>({...ue,settings:{...ue.settings,smoothing:ae}})),me=ae=>j(ue=>({...ue,settings:{...ue.settings,learnMode:ae},learningParameterId:null,learningContext:null})),Fe=ae=>j(ue=>({...ue,settings:kA(ue.settings,ae)})),nt=()=>j(ae=>({...ae,settings:zA(ae.settings)})),et=async ae=>{var ue;if(r.current){Me&&Un(),ie(!0),Oe(null);try{await r.current.loadAudioFile(ae);const Se=r.current.getAnalyserNode();Se&&(s.current=new tp(Se,((ue=r.current.audioContext)==null?void 0:ue.sampleRate)||44100)),je(ae.name),ne(r.current.duration),$(0),ie(!1)}catch{Oe("Failed to load audio file"),ie(!1)}}},Bt=async()=>{r.current&&(X?r.current.pause():await r.current.play())},rn=async()=>{r.current&&(r.current.seek(0),$(0),await r.current.play())},eu=ae=>{var ue;(ue=r.current)==null||ue.seek(ae),$(ae)},Ho=ae=>{var ue;Ne(ae),(ue=r.current)==null||ue.setVolume(ae)},Sa=()=>{E(Ul),A(hd),w(fd),L(tc),ve(null)},tu=()=>{if(!V)return!1;const ae={...V.globalSettings,parameterSmoothing:V.globalSettings.parameterSmoothing??.2,bloomStrength:V.globalSettings.bloomStrength??1.5,bloomRadius:V.globalSettings.bloomRadius??.4,bloomThreshold:V.globalSettings.bloomThreshold??.85};return JSON.stringify(M)!==JSON.stringify(V.meshSettings)||JSON.stringify(T)!==JSON.stringify(V.audioSettings)||JSON.stringify(R)!==JSON.stringify(ae)},Nr=ae=>{E(ae.meshSettings),A(ae.audioSettings),w({...ae.globalSettings,parameterSmoothing:ae.globalSettings.parameterSmoothing??.2,bloomStrength:ae.globalSettings.bloomStrength??1.5,bloomRadius:ae.globalSettings.bloomRadius??.4,bloomThreshold:ae.globalSettings.bloomThreshold??.85}),ve(ae)},jo=ae=>{Me&&Un(),(V==null?void 0:V.id)!==ae.id&&(tu()?(oe(ae),_e(!0)):Nr(ae))},Fi=()=>{V&&(tA(V.id,{name:V.name,meshSettings:M,audioSettings:T,globalSettings:R}),ve({...V,meshSettings:M,audioSettings:T,globalSettings:R})),_e(!1),Re&&(Nr(Re),oe(null))},Ma=()=>{_e(!1),Re&&(Nr(Re),oe(null))},Go=()=>{_e(!1),oe(null)},cs=()=>{if(!n.current||!c.current)return;dt(null),Ge(0);let ae;if(Ve&&r.current){const ue=r.current.createAudioStream();ue&&(ae=ue)}c.current.startRecording(n.current,{fps:Qe,includeAudio:Ve,quality:Je,format:Ae},ae),$e(!0)},Un=()=>{var ae;c.current&&(c.current.stopRecording(),$e(!1),Ge(0),(ae=r.current)==null||ae.disposeAudioStream())},wa=()=>{i.current&&(document.fullscreenElement?document.exitFullscreen():i.current.requestFullscreen().catch(ae=>{console.error("Fullscreen error:",ae)}))};return t==="mediaReactor"?f.jsx(xA,{onBack:()=>e("visualizer")}):t==="sacredGeometry"?f.jsx(LA,{onBack:()=>e("visualizer")}):f.jsxs("div",{className:"w-full h-screen bg-black text-white overflow-hidden",children:[f.jsx("div",{ref:i,className:"absolute inset-0",children:f.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full",style:{touchAction:"none"}})}),!z&&f.jsxs(f.Fragment,{children:[f.jsx(ZC,{isPlaying:X,currentTime:O,duration:q,volume:se,fileName:Ue,isLoading:te,error:Ee,isRecording:Me,recordingTime:ut,fps:Qe,includeAudio:Ve,recordingError:k,recordingQuality:Je,recordingFormat:Ae,audioFeatures:H,onFileUpload:et,onPlayPause:Bt,onPlayFromBeginning:rn,onSeek:eu,onVolumeChange:Ho,onStartRecording:cs,onStopRecording:Un,onFpsChange:it,onIncludeAudioChange:gt,onQualityChange:ot,onFormatChange:P,onFullscreen:wa}),f.jsxs("div",{className:"absolute bottom-4 left-4 z-20 flex gap-3",children:[f.jsx("button",{onClick:()=>e("mediaReactor"),className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 border border-blue-400 rounded-lg transition-colors shadow-lg font-medium",children:"Media Reactor"}),f.jsx("button",{onClick:()=>e("sacredGeometry"),className:"px-4 py-2 bg-amber-600 hover:bg-amber-700 border border-amber-400 rounded-lg transition-colors shadow-lg font-medium",children:"Sacred Geometry"})]})]}),z&&f.jsx(sA,{isRecording:Me,recordingTime:ut,canRecord:!!Ue,onStartRecording:cs,onStopRecording:Un}),!z&&f.jsx(iA,{meshSettings:M,audioSettings:T,globalSettings:R,particleSettings:b,audioFeatures:H,midiState:I,onMeshSettingsChange:E,onAudioSettingsChange:A,onGlobalSettingsChange:w,onParticleSettingsChange:L,onHelpClick:()=>D(!0),onReset:Sa,onLoadPreset:jo,onMIDIEnableChange:ye,onMIDIDeviceChange:he,onMIDISmoothingChange:re,onMIDILearnModeChange:me,onMIDIRemoveMapping:Fe,onMIDIClearMappings:nt,onParameterClick:de}),f.jsx(rA,{isOpen:y,onClose:()=>D(!1)}),le&&V&&f.jsx(aA,{presetName:V.name,onSave:Fi,onDiscard:Ma,onCancel:Go})]})}ax(document.getElementById("root")).render(f.jsx(J.StrictMode,{children:f.jsx(HA,{})}));
