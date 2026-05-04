(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Dg={exports:{}},bc={},Ig={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),kx=Symbol.for("react.fragment"),zx=Symbol.for("react.strict_mode"),Bx=Symbol.for("react.profiler"),Vx=Symbol.for("react.provider"),Hx=Symbol.for("react.context"),Gx=Symbol.for("react.forward_ref"),jx=Symbol.for("react.suspense"),Wx=Symbol.for("react.memo"),Xx=Symbol.for("react.lazy"),up=Symbol.iterator;function $x(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,Ug={};function ca(t,e,n){this.props=t,this.context=e,this.refs=Ug,this.updater=n||Lg}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Og(){}Og.prototype=ca.prototype;function Yh(t,e,n){this.props=t,this.context=e,this.refs=Ug,this.updater=n||Lg}var qh=Yh.prototype=new Og;qh.constructor=Yh;Fg(qh,ca.prototype);qh.isPureReactComponent=!0;var dp=Array.isArray,kg=Object.prototype.hasOwnProperty,Kh={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Bg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)kg.call(e,i)&&!zg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:To,type:t,key:s,ref:a,props:r,_owner:Kh.current}}function Yx(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function qx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qx(""+t.key):e.toString(36)}function Pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case To:case Ox:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Yc(a,0):i,dp(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),Pl(r,e,n,"",function(c){return c})):r!=null&&(Zh(r)&&(r=Yx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",dp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Yc(s,o);a+=Pl(s,e,n,l,r)}else if(l=$x(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Yc(s,o++),a+=Pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Bo(t,e,n){if(t==null)return t;var i=[],r=0;return Pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Kx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},Nl={transition:null},Zx={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:Kh};function Vg(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=ca;tt.Fragment=kx;tt.Profiler=Bx;tt.PureComponent=Yh;tt.StrictMode=zx;tt.Suspense=jx;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;tt.act=Vg;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Fg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)kg.call(e,l)&&!zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:To,type:t.type,key:r,ref:s,props:i,_owner:a}};tt.createContext=function(t){return t={$$typeof:Hx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vx,_context:t},t.Consumer=t};tt.createElement=Bg;tt.createFactory=function(t){var e=Bg.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:Gx,render:t}};tt.isValidElement=Zh;tt.lazy=function(t){return{$$typeof:Xx,_payload:{_status:-1,_result:t},_init:Kx}};tt.memo=function(t,e){return{$$typeof:Wx,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};tt.unstable_act=Vg;tt.useCallback=function(t,e){return yn.current.useCallback(t,e)};tt.useContext=function(t){return yn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return yn.current.useEffect(t,e)};tt.useId=function(){return yn.current.useId()};tt.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return yn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};tt.useRef=function(t){return yn.current.useRef(t)};tt.useState=function(t){return yn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return yn.current.useTransition()};tt.version="18.3.1";Ig.exports=tt;var J=Ig.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qx=J,Jx=Symbol.for("react.element"),e_=Symbol.for("react.fragment"),t_=Object.prototype.hasOwnProperty,n_=Qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i_={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)t_.call(e,i)&&!i_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Jx,type:t,key:s,ref:a,props:r,_owner:n_.current}}bc.Fragment=e_;bc.jsx=Hg;bc.jsxs=Hg;Dg.exports=bc;var p=Dg.exports,Gg={exports:{}},Wn={},jg={exports:{}},Wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,$){var q=U.length;U.push($);e:for(;0<q;){var ne=q-1>>>1,se=U[ne];if(0<r(se,$))U[ne]=$,U[q]=se,q=ne;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],q=U.pop();if(q!==$){U[0]=q;e:for(var ne=0,se=U.length,Ne=se>>>1;ne<Ne;){var Ue=2*(ne+1)-1,Ge=U[Ue],te=Ue+1,ie=U[te];if(0>r(Ge,q))te<se&&0>r(ie,Ge)?(U[ne]=ie,U[te]=q,ne=te):(U[ne]=Ge,U[Ue]=q,ne=Ue);else if(te<se&&0>r(ie,q))U[ne]=ie,U[te]=q,ne=te;else break e}}return $}function r(U,$){var q=U.sortIndex-$.sortIndex;return q!==0?q:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,v=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=U)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function M(U){if(x=!1,y(U),!v)if(n(l)!==null)v=!0,X(w);else{var $=n(c);$!==null&&G(M,$.startTime-U)}}function w(U,$){v=!1,x&&(x=!1,u(R),R=-1),m=!0;var q=f;try{for(y($),h=n(l);h!==null&&(!(h.expirationTime>$)||U&&!I());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var se=ne(h.expirationTime<=$);$=t.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&i(l),y($)}else i(l);h=n(l)}if(h!==null)var Ne=!0;else{var Ue=n(c);Ue!==null&&G(M,Ue.startTime-$),Ne=!1}return Ne}finally{h=null,f=q,m=!1}}var T=!1,C=null,R=-1,E=5,b=-1;function I(){return!(t.unstable_now()-b<E)}function V(){if(C!==null){var U=t.unstable_now();b=U;var $=!0;try{$=C(!0,U)}finally{$?z():(T=!1,C=null)}}else T=!1}var z;if(typeof _=="function")z=function(){_(V)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,H=D.port2;D.port1.onmessage=V,z=function(){H.postMessage(null)}}else z=function(){g(V,0)};function X(U){C=U,T||(T=!0,z())}function G(U,$){R=g(function(){U(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,X(w))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var q=f;f=$;try{return U()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=f;f=U;try{return $()}finally{f=q}},t.unstable_scheduleCallback=function(U,$,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=q+se,U={id:d++,callback:$,priorityLevel:U,startTime:q,expirationTime:se,sortIndex:-1},q>ne?(U.sortIndex=q,e(c,U),n(l)===null&&U===n(c)&&(x?(u(R),R=-1):x=!0,G(M,q-ne))):(U.sortIndex=se,e(l,U),v||m||(v=!0,X(w))),U},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(U){var $=f;return function(){var q=f;f=$;try{return U.apply(this,arguments)}finally{f=q}}}})(Wg);jg.exports=Wg;var r_=jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_=J,jn=r_;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,Ja={};function as(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Ja[t]=e,t=0;t<e.length;t++)Xg.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rd=Object.prototype.hasOwnProperty,a_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fp={},pp={};function o_(t){return rd.call(pp,t)?!0:rd.call(fp,t)?!1:a_.test(t)?pp[t]=!0:(fp[t]=!0,!1)}function l_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function c_(t,e,n,i){if(e===null||typeof e>"u"||l_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new Sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new Sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new Sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new Sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new Sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new Sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new Sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new Sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new Sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Jh);tn[e]=new Sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Jh);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Jh);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c_(e,n,r,i)&&(n=null),i||r===null?o_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=s_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),qg=Symbol.for("react.offscreen"),mp=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,qc;function Fa(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Kc=!1;function Zc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fa(t):""}function u_(t){switch(t.tag){case 5:return Fa(t.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case Rs:return"Portal";case sd:return"Profiler";case tf:return"StrictMode";case ad:return"Suspense";case od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yg:return(t.displayName||"Context")+".Consumer";case $g:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:ld(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return ld(t(e))}catch{}}return null}function d_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h_(t){var e=Kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=h_(t))}function Zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Kg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cd(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qg(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function ud(t,e){Qg(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&dd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dd(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ua=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Ua(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function Jg(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function e0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?e0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,t0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f_=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){f_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function n0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function i0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=n0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var p_=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(t,e){if(e){if(p_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vd=null,Hs=null,Gs=null;function yp(t){if(t=Ro(t)){if(typeof vd!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=Rc(e),vd(t.stateNode,t.type,e))}}function r0(t){Hs?Gs?Gs.push(t):Gs=[t]:Hs=t}function s0(){if(Hs){var t=Hs,e=Gs;if(Gs=Hs=null,yp(t),e)for(t=0;t<e.length;t++)yp(e[t])}}function a0(t,e){return t(e)}function o0(){}var Qc=!1;function l0(t,e,n){if(Qc)return t(e,n);Qc=!0;try{return a0(t,e,n)}finally{Qc=!1,(Hs!==null||Gs!==null)&&(o0(),s0())}}function to(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var xd=!1;if(Xi)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){xd=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{xd=!1}function m_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ga=!1,Kl=null,Zl=!1,_d=null,g_={onError:function(t){Ga=!0,Kl=t}};function v_(t,e,n,i,r,s,a,o,l){Ga=!1,Kl=null,m_.apply(g_,arguments)}function x_(t,e,n,i,r,s,a,o,l){if(v_.apply(this,arguments),Ga){if(Ga){var c=Kl;Ga=!1,Kl=null}else throw Error(pe(198));Zl||(Zl=!0,_d=c)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(os(t)!==t)throw Error(pe(188))}function __(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sp(r),t;if(s===i)return Sp(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function u0(t){return t=__(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var h0=jn.unstable_scheduleCallback,Mp=jn.unstable_cancelCallback,y_=jn.unstable_shouldYield,S_=jn.unstable_requestPaint,Nt=jn.unstable_now,M_=jn.unstable_getCurrentPriorityLevel,af=jn.unstable_ImmediatePriority,f0=jn.unstable_UserBlockingPriority,Ql=jn.unstable_NormalPriority,E_=jn.unstable_LowPriority,p0=jn.unstable_IdlePriority,wc=null,Ri=null;function b_(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var gi=Math.clz32?Math.clz32:C_,w_=Math.log,T_=Math.LN2;function C_(t){return t>>>=0,t===0?32:31-(w_(t)/T_|0)|0}var jo=64,Wo=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Oa(o):(s&=a,s!==0&&(i=Oa(s)))}else a=n&~r,a!==0?i=Oa(a):s!==0&&(i=Oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-gi(e),r=1<<n,i|=t[n],e&=~r;return i}function A_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-gi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=A_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function m0(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gi(e),t[e]=n}function P_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-gi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-gi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function g0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v0,lf,x0,_0,y0,Sd=!1,Xo=[],gr=null,vr=null,xr=null,no=new Map,io=new Map,cr=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Ma(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ro(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D_(t,e,n,i,r){switch(e){case"focusin":return gr=Ma(gr,t,e,n,i,r),!0;case"dragenter":return vr=Ma(vr,t,e,n,i,r),!0;case"mouseover":return xr=Ma(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return no.set(s,Ma(no.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,io.set(s,Ma(io.get(s)||null,t,e,n,i,r)),!0}return!1}function S0(t){var e=jr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,y0(t.priority,function(){x0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gd=i,n.target.dispatchEvent(i),gd=null}else return e=Ro(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){Dl(t)&&n.delete(e)}function I_(){Sd=!1,gr!==null&&Dl(gr)&&(gr=null),vr!==null&&Dl(vr)&&(vr=null),xr!==null&&Dl(xr)&&(xr=null),no.forEach(bp),io.forEach(bp)}function Ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Sd||(Sd=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,I_)))}function ro(t){function e(r){return Ea(r,t)}if(0<Xo.length){Ea(Xo[0],t);for(var n=1;n<Xo.length;n++){var i=Xo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Ea(gr,t),vr!==null&&Ea(vr,t),xr!==null&&Ea(xr,t),no.forEach(e),io.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)S0(n),n.blockedOn===null&&cr.shift()}var js=Qi.ReactCurrentBatchConfig,ec=!0;function L_(t,e,n,i){var r=pt,s=js.transition;js.transition=null;try{pt=1,cf(t,e,n,i)}finally{pt=r,js.transition=s}}function F_(t,e,n,i){var r=pt,s=js.transition;js.transition=null;try{pt=4,cf(t,e,n,i)}finally{pt=r,js.transition=s}}function cf(t,e,n,i){if(ec){var r=Md(t,e,n,i);if(r===null)cu(t,e,i,tc,n),Ep(t,i);else if(D_(r,t,e,n,i))i.stopPropagation();else if(Ep(t,i),e&4&&-1<N_.indexOf(t)){for(;r!==null;){var s=Ro(r);if(s!==null&&v0(s),s=Md(t,e,n,i),s===null&&cu(t,e,i,tc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var tc=null;function Md(t,e,n,i){if(tc=null,t=sf(i),t=jr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function M0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M_()){case af:return 1;case f0:return 4;case Ql:case E_:return 16;case p0:return 536870912;default:return 16}default:return 16}}var hr=null,uf=null,Il=null;function E0(){if(Il)return Il;var t,e=uf,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Il=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function wp(){return!1}function Xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:wp,this.isPropagationStopped=wp,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Xn(ua),Ao=Ct({},ua,{view:0,detail:0}),U_=Xn(Ao),eu,tu,ba,Tc=Ct({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ba&&(ba&&t.type==="mousemove"?(eu=t.screenX-ba.screenX,tu=t.screenY-ba.screenY):tu=eu=0,ba=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Tp=Xn(Tc),O_=Ct({},Tc,{dataTransfer:0}),k_=Xn(O_),z_=Ct({},Ao,{relatedTarget:0}),nu=Xn(z_),B_=Ct({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),V_=Xn(B_),H_=Ct({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G_=Xn(H_),j_=Ct({},ua,{data:0}),Cp=Xn(j_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$_[t])?!!e[t]:!1}function hf(){return Y_}var q_=Ct({},Ao,{key:function(t){if(t.key){var e=W_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K_=Xn(q_),Z_=Ct({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Xn(Z_),Q_=Ct({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),J_=Xn(Q_),ey=Ct({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Xn(ey),ny=Ct({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=Xn(ny),ry=[9,13,27,32],ff=Xi&&"CompositionEvent"in window,ja=null;Xi&&"documentMode"in document&&(ja=document.documentMode);var sy=Xi&&"TextEvent"in window&&!ja,b0=Xi&&(!ff||ja&&8<ja&&11>=ja),Rp=" ",Pp=!1;function w0(t,e){switch(t){case"keyup":return ry.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function ay(t,e){switch(t){case"compositionend":return T0(e);case"keypress":return e.which!==32?null:(Pp=!0,Rp);case"textInput":return t=e.data,t===Rp&&Pp?null:t;default:return null}}function oy(t,e){if(Ns)return t==="compositionend"||!ff&&w0(t,e)?(t=E0(),Il=uf=hr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b0&&e.locale!=="ko"?null:e.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ly[t.type]:e==="textarea"}function C0(t,e,n,i){r0(i),e=nc(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wa=null,so=null;function cy(t){k0(t,0)}function Cc(t){var e=Ls(t);if(Zg(e))return t}function uy(t,e){if(t==="change")return e}var A0=!1;if(Xi){var iu;if(Xi){var ru="oninput"in document;if(!ru){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),ru=typeof Dp.oninput=="function"}iu=ru}else iu=!1;A0=iu&&(!document.documentMode||9<document.documentMode)}function Ip(){Wa&&(Wa.detachEvent("onpropertychange",R0),so=Wa=null)}function R0(t){if(t.propertyName==="value"&&Cc(so)){var e=[];C0(e,so,t,sf(t)),l0(cy,e)}}function dy(t,e,n){t==="focusin"?(Ip(),Wa=e,so=n,Wa.attachEvent("onpropertychange",R0)):t==="focusout"&&Ip()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(so)}function fy(t,e){if(t==="click")return Cc(e)}function py(t,e){if(t==="input"||t==="change")return Cc(e)}function my(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:my;function ao(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rd.call(e,r)||!_i(t[r],e[r]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,e){var n=Lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function P0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?P0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gy(t){var e=N0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&P0(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fp(n,s);var a=Fp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vy=Xi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ed=null,Xa=null,bd=!1;function Up(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||Ds==null||Ds!==ql(i)||(i=Ds,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xa&&ao(Xa,i)||(Xa=i,i=nc(Ed,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ds)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},su={},D0={};Xi&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Ac(t){if(su[t])return su[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return su[t]=e[n];return t}var I0=Ac("animationend"),L0=Ac("animationiteration"),F0=Ac("animationstart"),U0=Ac("transitionend"),O0=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){O0.set(t,e),as(e,[t])}for(var au=0;au<Op.length;au++){var ou=Op[au],xy=ou.toLowerCase(),_y=ou[0].toUpperCase()+ou.slice(1);Ar(xy,"on"+_y)}Ar(I0,"onAnimationEnd");Ar(L0,"onAnimationIteration");Ar(F0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(U0,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,x_(i,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;kp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;kp(r,o,c),s=l}}}if(Zl)throw t=_d,Zl=!1,_d=null,t}function yt(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var i=t+"__bubble";n.has(i)||(z0(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),z0(n,t,i,e)}var qo="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[qo]){t[qo]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(yy.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qo]||(e[qo]=!0,lu("selectionchange",!1,e))}}function z0(t,e,n,i){switch(M0(e)){case 1:var r=L_;break;case 4:r=F_;break;default:r=cf}n=r.bind(null,e,n,t),r=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}l0(function(){var c=s,d=sf(n),h=[];e:{var f=O0.get(t);if(f!==void 0){var m=df,v=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":m=K_;break;case"focusin":v="focus",m=nu;break;case"focusout":v="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=J_;break;case I0:case L0:case F0:m=V_;break;case U0:m=ty;break;case"scroll":m=U_;break;case"wheel":m=iy;break;case"copy":case"cut":case"paste":m=G_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ap}var x=(e&4)!==0,g=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,y;_!==null;){y=_;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,u!==null&&(M=to(_,u),M!=null&&x.push(lo(_,M,y)))),g)break;_=_.return}0<x.length&&(f=new m(f,v,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==gd&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[$i]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?jr(v):null,v!==null&&(g=os(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(x=Tp,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ap,M="onPointerLeave",u="onPointerEnter",_="pointer"),g=m==null?f:Ls(m),y=v==null?f:Ls(v),f=new x(M,_+"leave",m,n,d),f.target=g,f.relatedTarget=y,M=null,jr(d)===c&&(x=new x(u,_+"enter",v,n,d),x.target=y,x.relatedTarget=g,M=x),g=M,m&&v)t:{for(x=m,u=v,_=0,y=x;y;y=ds(y))_++;for(y=0,M=u;M;M=ds(M))y++;for(;0<_-y;)x=ds(x),_--;for(;0<y-_;)u=ds(u),y--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=ds(x),u=ds(u)}x=null}else x=null;m!==null&&zp(h,f,m,x,!1),v!==null&&g!==null&&zp(h,g,v,x,!0)}}e:{if(f=c?Ls(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var w=uy;else if(Np(f))if(A0)w=py;else{w=hy;var T=dy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=fy);if(w&&(w=w(t,c))){C0(h,w,n,d);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&dd(f,"number",f.value)}switch(T=c?Ls(c):window,t){case"focusin":(Np(T)||T.contentEditable==="true")&&(Ds=T,Ed=c,Xa=null);break;case"focusout":Xa=Ed=Ds=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Up(h,n,d);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":Up(h,n,d)}var C;if(ff)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ns?w0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(b0&&n.locale!=="ko"&&(Ns||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ns&&(C=E0()):(hr=d,uf="value"in hr?hr.value:hr.textContent,Ns=!0)),T=nc(c,R),0<T.length&&(R=new Cp(R,t,null,n,d),h.push({event:R,listeners:T}),C?R.data=C:(C=T0(n),C!==null&&(R.data=C)))),(C=sy?ay(t,n):oy(t,n))&&(c=nc(c,"onBeforeInput"),0<c.length&&(d=new Cp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}k0(h,e)})}function lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=to(t,n),s!=null&&i.unshift(lo(t,s,r)),s=to(t,e),s!=null&&i.push(lo(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=to(n,s),l!=null&&a.unshift(lo(n,l,o))):r||(l=to(n,s),l!=null&&a.push(lo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Sy=/\r\n?/g,My=/\u0000|\uFFFD/g;function Bp(t){return(typeof t=="string"?t:""+t).replace(Sy,`
`).replace(My,"")}function Ko(t,e,n){if(e=Bp(e),Bp(t)!==e&&n)throw Error(pe(425))}function ic(){}var wd=null,Td=null;function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(t){return Vp.resolve(null).then(t).catch(wy)}:Ad;function wy(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ro(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),wi="__reactFiber$"+da,co="__reactProps$"+da,$i="__reactContainer$"+da,Rd="__reactEvents$"+da,Ty="__reactListeners$"+da,Cy="__reactHandles$"+da;function jr(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[wi])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[wi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function Rc(t){return t[co]||null}var Pd=[],Fs=-1;function Rr(t){return{current:t}}function St(t){0>Fs||(t.current=Pd[Fs],Pd[Fs]=null,Fs--)}function _t(t,e){Fs++,Pd[Fs]=t.current,t.current=e}var wr={},fn=Rr(wr),An=Rr(!1),Jr=wr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(t){return t=t.childContextTypes,t!=null}function rc(){St(An),St(fn)}function Gp(t,e,n){if(fn.current!==wr)throw Error(pe(168));_t(fn,e),_t(An,n)}function B0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,d_(t)||"Unknown",r));return Ct({},n,i)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Jr=fn.current,_t(fn,t),_t(An,An.current),!0}function jp(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=B0(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,St(An),St(fn),_t(fn,t)):St(An),_t(An,n)}var Vi=null,Pc=!1,du=!1;function V0(t){Vi===null?Vi=[t]:Vi.push(t)}function Ay(t){Pc=!0,V0(t)}function Pr(){if(!du&&Vi!==null){du=!0;var t=0,e=pt;try{var n=Vi;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Vi=null,Pc=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(t+1)),h0(af,Pr),r}finally{pt=e,du=!1}}return null}var Us=[],Os=0,ac=null,oc=0,Kn=[],Zn=0,es=null,Hi=1,Gi="";function Br(t,e){Us[Os++]=oc,Us[Os++]=ac,ac=t,oc=e}function H0(t,e,n){Kn[Zn++]=Hi,Kn[Zn++]=Gi,Kn[Zn++]=es,es=t;var i=Hi;t=Gi;var r=32-gi(i)-1;i&=~(1<<r),n+=1;var s=32-gi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Hi=1<<32-gi(e)+r|n<<r|i,Gi=s+t}else Hi=1<<s|n<<r|i,Gi=t}function mf(t){t.return!==null&&(Br(t,1),H0(t,1,0))}function gf(t){for(;t===ac;)ac=Us[--Os],Us[Os]=null,oc=Us[--Os],Us[Os]=null;for(;t===es;)es=Kn[--Zn],Kn[Zn]=null,Gi=Kn[--Zn],Kn[Zn]=null,Hi=Kn[--Zn],Kn[Zn]=null}var Gn=null,Vn=null,Mt=!1,fi=null;function G0(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gn=t,Vn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Hi,overflow:Gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gn=t,Vn=null,!0):!1;default:return!1}}function Nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dd(t){if(Mt){var e=Vn;if(e){var n=e;if(!Wp(t,e)){if(Nd(t))throw Error(pe(418));e=_r(n.nextSibling);var i=Gn;e&&Wp(t,e)?G0(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Gn=t)}}else{if(Nd(t))throw Error(pe(418));t.flags=t.flags&-4097|2,Mt=!1,Gn=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Zo(t){if(t!==Gn)return!1;if(!Mt)return Xp(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cd(t.type,t.memoizedProps)),e&&(e=Vn)){if(Nd(t))throw j0(),Error(pe(418));for(;e;)G0(t,e),e=_r(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=Gn?_r(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=Vn;t;)t=_r(t.nextSibling)}function Zs(){Vn=Gn=null,Mt=!1}function vf(t){fi===null?fi=[t]:fi.push(t)}var Ry=Qi.ReactCurrentBatchConfig;function wa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Qo(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function W0(t){function e(u,_){if(t){var y=u.deletions;y===null?(u.deletions=[_],u.flags|=16):y.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Er(u,_),u.index=0,u.sibling=null,u}function s(u,_,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<_?(u.flags|=2,_):y):(u.flags|=2,_)):(u.flags|=1048576,_)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,_,y,M){return _===null||_.tag!==6?(_=xu(y,u.mode,M),_.return=u,_):(_=r(_,y),_.return=u,_)}function l(u,_,y,M){var w=y.type;return w===Ps?d(u,_,y.props.children,M,y.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ar&&$p(w)===_.type)?(M=r(_,y.props),M.ref=wa(u,_,y),M.return=u,M):(M=Vl(y.type,y.key,y.props,null,u.mode,M),M.ref=wa(u,_,y),M.return=u,M)}function c(u,_,y,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=_u(y,u.mode,M),_.return=u,_):(_=r(_,y.children||[]),_.return=u,_)}function d(u,_,y,M,w){return _===null||_.tag!==7?(_=Zr(y,u.mode,M,w),_.return=u,_):(_=r(_,y),_.return=u,_)}function h(u,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=xu(""+_,u.mode,y),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:return y=Vl(_.type,_.key,_.props,null,u.mode,y),y.ref=wa(u,null,_),y.return=u,y;case Rs:return _=_u(_,u.mode,y),_.return=u,_;case ar:var M=_._init;return h(u,M(_._payload),y)}if(Ua(_)||ya(_))return _=Zr(_,u.mode,y,null),_.return=u,_;Qo(u,_)}return null}function f(u,_,y,M){var w=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:o(u,_,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:return y.key===w?l(u,_,y,M):null;case Rs:return y.key===w?c(u,_,y,M):null;case ar:return w=y._init,f(u,_,w(y._payload),M)}if(Ua(y)||ya(y))return w!==null?null:d(u,_,y,M,null);Qo(u,y)}return null}function m(u,_,y,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(y)||null,o(_,u,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Vo:return u=u.get(M.key===null?y:M.key)||null,l(_,u,M,w);case Rs:return u=u.get(M.key===null?y:M.key)||null,c(_,u,M,w);case ar:var T=M._init;return m(u,_,y,T(M._payload),w)}if(Ua(M)||ya(M))return u=u.get(y)||null,d(_,u,M,w,null);Qo(_,M)}return null}function v(u,_,y,M){for(var w=null,T=null,C=_,R=_=0,E=null;C!==null&&R<y.length;R++){C.index>R?(E=C,C=null):E=C.sibling;var b=f(u,C,y[R],M);if(b===null){C===null&&(C=E);break}t&&C&&b.alternate===null&&e(u,C),_=s(b,_,R),T===null?w=b:T.sibling=b,T=b,C=E}if(R===y.length)return n(u,C),Mt&&Br(u,R),w;if(C===null){for(;R<y.length;R++)C=h(u,y[R],M),C!==null&&(_=s(C,_,R),T===null?w=C:T.sibling=C,T=C);return Mt&&Br(u,R),w}for(C=i(u,C);R<y.length;R++)E=m(C,u,R,y[R],M),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?R:E.key),_=s(E,_,R),T===null?w=E:T.sibling=E,T=E);return t&&C.forEach(function(I){return e(u,I)}),Mt&&Br(u,R),w}function x(u,_,y,M){var w=ya(y);if(typeof w!="function")throw Error(pe(150));if(y=w.call(y),y==null)throw Error(pe(151));for(var T=w=null,C=_,R=_=0,E=null,b=y.next();C!==null&&!b.done;R++,b=y.next()){C.index>R?(E=C,C=null):E=C.sibling;var I=f(u,C,b.value,M);if(I===null){C===null&&(C=E);break}t&&C&&I.alternate===null&&e(u,C),_=s(I,_,R),T===null?w=I:T.sibling=I,T=I,C=E}if(b.done)return n(u,C),Mt&&Br(u,R),w;if(C===null){for(;!b.done;R++,b=y.next())b=h(u,b.value,M),b!==null&&(_=s(b,_,R),T===null?w=b:T.sibling=b,T=b);return Mt&&Br(u,R),w}for(C=i(u,C);!b.done;R++,b=y.next())b=m(C,u,R,b.value,M),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?R:b.key),_=s(b,_,R),T===null?w=b:T.sibling=b,T=b);return t&&C.forEach(function(V){return e(u,V)}),Mt&&Br(u,R),w}function g(u,_,y,M){if(typeof y=="object"&&y!==null&&y.type===Ps&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:e:{for(var w=y.key,T=_;T!==null;){if(T.key===w){if(w=y.type,w===Ps){if(T.tag===7){n(u,T.sibling),_=r(T,y.props.children),_.return=u,u=_;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ar&&$p(w)===T.type){n(u,T.sibling),_=r(T,y.props),_.ref=wa(u,T,y),_.return=u,u=_;break e}n(u,T);break}else e(u,T);T=T.sibling}y.type===Ps?(_=Zr(y.props.children,u.mode,M,y.key),_.return=u,u=_):(M=Vl(y.type,y.key,y.props,null,u.mode,M),M.ref=wa(u,_,y),M.return=u,u=M)}return a(u);case Rs:e:{for(T=y.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(u,_.sibling),_=r(_,y.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=_u(y,u.mode,M),_.return=u,u=_}return a(u);case ar:return T=y._init,g(u,_,T(y._payload),M)}if(Ua(y))return v(u,_,y,M);if(ya(y))return x(u,_,y,M);Qo(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,y),_.return=u,u=_):(n(u,_),_=xu(y,u.mode,M),_.return=u,u=_),a(u)):n(u,_)}return g}var Qs=W0(!0),X0=W0(!1),lc=Rr(null),cc=null,ks=null,xf=null;function _f(){xf=ks=cc=null}function yf(t){var e=lc.current;St(lc),t._currentValue=e}function Id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){cc=t,xf=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function ri(t){var e=t._currentValue;if(xf!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(cc===null)throw Error(pe(308));ks=t,cc.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Wr=null;function Sf(t){Wr===null?Wr=[t]:Wr.push(t)}function $0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Yi(t,i)}function Yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}function Yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,x=o;switch(f=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=Ct({},h,f);break e;case 2:or=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=a,t.lanes=a,t.memoizedState=h}}function qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var Po={},Pi=Rr(Po),uo=Rr(Po),ho=Rr(Po);function Xr(t){if(t===Po)throw Error(pe(174));return t}function Ef(t,e){switch(_t(ho,e),_t(uo,t),_t(Pi,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fd(e,t)}St(Pi),_t(Pi,e)}function Js(){St(Pi),St(uo),St(ho)}function q0(t){Xr(ho.current);var e=Xr(Pi.current),n=fd(e,t.type);e!==n&&(_t(uo,t),_t(Pi,n))}function bf(t){uo.current===t&&(St(Pi),St(uo))}var wt=Rr(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function wf(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var Ul=Qi.ReactCurrentDispatcher,fu=Qi.ReactCurrentBatchConfig,ts=0,Tt=null,Bt=null,Xt=null,hc=!1,$a=!1,fo=0,Py=0;function an(){throw Error(pe(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function Cf(t,e,n,i,r,s){if(ts=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?Ly:Fy,t=n(i,r),$a){s=0;do{if($a=!1,fo=0,25<=s)throw Error(pe(301));s+=1,Xt=Bt=null,e.updateQueue=null,Ul.current=Uy,t=n(i,r)}while($a)}if(Ul.current=fc,e=Bt!==null&&Bt.next!==null,ts=0,Xt=Bt=Tt=null,hc=!1,e)throw Error(pe(300));return t}function Af(){var t=fo!==0;return fo=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Tt.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function si(){if(Bt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Xt===null?Tt.memoizedState:Xt.next;if(e!==null)Xt=e,Bt=t;else{if(t===null)throw Error(pe(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Xt===null?Tt.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function po(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=si(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Tt.lanes|=d,ns|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,_i(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=si(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);_i(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function K0(){}function Z0(t,e){var n=Tt,i=si(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,Cn=!0),i=i.queue,Rf(ev.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,mo(9,J0.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(pe(349));ts&30||Q0(n,e,r)}return r}function Q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J0(t,e,n,i){e.value=n,e.getSnapshot=i,tv(e)&&nv(t)}function ev(t,e,n){return n(function(){tv(e)&&nv(t)})}function tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function nv(t){var e=Yi(t,1);e!==null&&vi(e,t,1,-1)}function Kp(t){var e=Ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},e.queue=t,t=t.dispatch=Iy.bind(null,Tt,t),[e.memoizedState,t]}function mo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function iv(){return si().memoizedState}function Ol(t,e,n,i){var r=Ei();Tt.flags|=t,r.memoizedState=mo(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Tf(i,a.deps)){r.memoizedState=mo(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=mo(1|e,n,s,i)}function Zp(t,e){return Ol(8390656,8,t,e)}function Rf(t,e){return Nc(2048,8,t,e)}function rv(t,e){return Nc(4,2,t,e)}function sv(t,e){return Nc(4,4,t,e)}function av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ov(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,av.bind(null,e,t),n)}function Pf(){}function lv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function uv(t,e,n){return ts&21?(_i(n,e)||(n=m0(),Tt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function Ny(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=fu.transition;fu.transition={};try{t(!1),e()}finally{pt=n,fu.transition=i}}function dv(){return si().memoizedState}function Dy(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hv(t))fv(e,n);else if(n=$0(t,e,n,i),n!==null){var r=_n();vi(n,t,i,r),pv(n,e,i)}}function Iy(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(t))fv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,_i(o,a)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$0(t,e,r,i),n!==null&&(r=_n(),vi(n,t,i,r),pv(n,e,i))}}function hv(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function fv(t,e){$a=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}var fc={readContext:ri,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},Ly={readContext:ri,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:Zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=Ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:Kp,useDebugValue:Pf,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=Kp(!1),e=t[0];return t=Ny.bind(null,t[1]),Ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=Ei();if(Mt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),Yt===null)throw Error(pe(349));ts&30||Q0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zp(ev.bind(null,i,s,t),[t]),i.flags|=2048,mo(9,J0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ei(),e=Yt.identifierPrefix;if(Mt){var n=Gi,i=Hi;n=(i&~(1<<32-gi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Py++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:ri,useCallback:lv,useContext:ri,useEffect:Rf,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:cv,useReducer:pu,useRef:iv,useState:function(){return pu(po)},useDebugValue:Pf,useDeferredValue:function(t){var e=si();return uv(e,Bt.memoizedState,t)},useTransition:function(){var t=pu(po)[0],e=si().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:Z0,useId:dv,unstable_isNewReconciler:!1},Uy={readContext:ri,useCallback:lv,useContext:ri,useEffect:Rf,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:cv,useReducer:mu,useRef:iv,useState:function(){return mu(po)},useDebugValue:Pf,useDeferredValue:function(t){var e=si();return Bt===null?e.memoizedState=t:uv(e,Bt.memoizedState,t)},useTransition:function(){var t=mu(po)[0],e=si().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:Z0,useId:dv,unstable_isNewReconciler:!1};function di(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Mr(t),s=ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(vi(e,t,r,i),Fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Mr(t),s=ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(vi(e,t,r,i),Fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=Mr(t),r=ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(vi(e,t,i,n),Fl(e,t,i))}};function Qp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ao(n,i)||!ao(r,s):!0}function mv(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=Rn(e)?Jr:fn.current,i=e.contextTypes,s=(i=i!=null)?Ks(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=Rn(e)?Jr:fn.current,r.context=Ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dc.enqueueReplaceState(r,r.state,null),uc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ea(t,e){try{var n="",i=e;do n+=u_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function gv(t,e,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mc||(mc=!0,Xd=i),Ud(t,e)},n}function vv(t,e,n){n=ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ud(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function em(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Oy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Zy.bind(null,t,e,n),e.then(t,t))}function tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ji(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var ky=Qi.ReactCurrentOwner,Cn=!1;function xn(t,e,n,i){e.child=t===null?X0(e,null,n,i):Qs(e,t.child,n,i)}function im(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=Cf(t,e,n,i,s,r),n=Af(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(Mt&&n&&mf(e),e.flags|=1,xn(t,e,i,r),e.child)}function rm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xv(t,e,s,i,r)):(t=Vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(a,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Er(s,i),t.ref=e.ref,t.return=e,e.child=t}function xv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ao(s,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return Od(t,e,n,i,r)}function _v(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Bs,zn),zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Bs,zn),zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(Bs,zn),zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(Bs,zn),zn|=i;return xn(t,e,r,n),e.child}function yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,i,r){var s=Rn(n)?Jr:fn.current;return s=Ks(e,s),Ws(e,r),n=Cf(t,e,n,i,s,r),i=Af(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(Mt&&i&&mf(e),e.flags|=1,xn(t,e,n,r),e.child)}function sm(t,e,n,i,r){if(Rn(n)){var s=!0;sc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)kl(t,e),mv(e,n,i),Fd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=Rn(n)?Jr:fn.current,c=Ks(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Jp(e,a,i,c),or=!1;var f=e.memoizedState;a.state=f,uc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||An.current||or?(typeof d=="function"&&(Ld(e,n,d,i),l=e.memoizedState),(o=or||Qp(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Y0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:di(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=Rn(n)?Jr:fn.current,l=Ks(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Jp(e,a,i,l),or=!1,f=e.memoizedState,a.state=f,uc(e,i,a,r);var v=e.memoizedState;o!==h||f!==v||An.current||or?(typeof m=="function"&&(Ld(e,n,m,i),v=e.memoizedState),(c=or||Qp(e,n,c,i,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return kd(t,e,n,i,s,r)}function kd(t,e,n,i,r,s){yv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&jp(e,n,!1),qi(t,e,s);i=e.stateNode,ky.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,o,s)):xn(t,e,o,s),e.memoizedState=i.state,r&&jp(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),Ef(t,e.containerInfo)}function am(t,e,n,i,r){return Zs(),vf(r),e.flags|=256,xn(t,e,n,i),e.child}var zd={dehydrated:null,treeContext:null,retryLane:0};function Bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mv(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(wt,r&1),t===null)return Dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fc(a,i,0,null),t=Zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bd(n),e.memoizedState=zd,t):Nf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return zy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Er(o,s):(s=Zr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Bd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zd,i}return s=t.child,t=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nf(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jo(t,e,n,i){return i!==null&&vf(i),Qs(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(pe(422))),Jo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,a),e.child.memoizedState=Bd(a),e.memoizedState=zd,s);if(!(e.mode&1))return Jo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(pe(419)),i=gu(s,i,void 0),Jo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Cn||o){if(i=Yt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(t,r),vi(i,t,r,-1))}return Of(),i=gu(Error(pe(421))),Jo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Qy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=_r(r.nextSibling),Gn=e,Mt=!0,fi=null,t!==null&&(Kn[Zn++]=Hi,Kn[Zn++]=Gi,Kn[Zn++]=es,Hi=t.id,Gi=t.overflow,es=e),e=Nf(e,i.children),e.flags|=4096,e)}function om(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Id(t.return,e,n)}function vu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ev(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function By(t,e,n){switch(e.tag){case 3:Sv(e),Zs();break;case 5:q0(e);break;case 1:Rn(e.type)&&sc(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?Mv(t,e,n):(_t(wt,wt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);_t(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ev(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,_v(t,e,n)}return qi(t,e,n)}var bv,Vd,wv,Tv;bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vd=function(){};wv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xr(Pi.current);var s=null;switch(n){case"input":r=cd(t,r),i=cd(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=hd(t,r),i=hd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ic)}pd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ja.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ta(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Vy(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Rn(e.type)&&rc(),on(e),null;case 3:return i=e.stateNode,Js(),St(An),St(fn),wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(qd(fi),fi=null))),Vd(t,e),on(e),null;case 5:bf(e);var r=Xr(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)wv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return on(e),null}if(t=Xr(Pi.current),Zo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[co]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<ka.length;r++)yt(ka[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":gp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":xp(i,s),yt("invalid",i)}pd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,o,t),r=["children",""+o]):Ja.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(n){case"input":Ho(i),vp(i,s,!0);break;case"textarea":Ho(i),_p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=e0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[wi]=e,t[co]=i,bv(t,e,!1,!1),e.stateNode=t;e:{switch(a=md(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ka.length;r++)yt(ka[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":gp(t,i),r=cd(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),yt("invalid",t);break;case"textarea":xp(t,i),r=hd(t,i),yt("invalid",t);break;default:r=i}pd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?i0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&t0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&eo(t,l):typeof l=="number"&&eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&ef(t,s,l,a))}switch(n){case"input":Ho(t),vp(t,i,!1);break;case"textarea":Ho(t),_p(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ic)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)Tv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=Xr(ho.current),Xr(Pi.current),Zo(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==n)&&(t=Gn,t!==null))switch(t.tag){case 3:Ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return on(e),null;case 13:if(St(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Vn!==null&&e.mode&1&&!(e.flags&128))j0(),Zs(),e.flags|=98560,s=!1;else if(s=Zo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[wi]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else fi!==null&&(qd(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?Vt===0&&(Vt=3):Of())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return Js(),Vd(t,e),t===null&&oo(e.stateNode.containerInfo),on(e),null;case 10:return yf(e.type._context),on(e),null;case 17:return Rn(e.type)&&rc(),on(e),null;case 19:if(St(wt),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ta(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=dc(t),a!==null){for(e.flags|=128,Ta(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>ta&&(e.flags|=128,i=!0,Ta(s,!1),e.lanes=4194304)}else{if(!i)if(t=dc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return on(e),null}else 2*Nt()-s.renderingStartTime>ta&&n!==1073741824&&(e.flags|=128,i=!0,Ta(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=wt.current,_t(wt,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function Hy(t,e){switch(gf(e),e.tag){case 1:return Rn(e.type)&&rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),St(An),St(fn),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(St(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(wt),null;case 4:return Js(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var el=!1,un=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function Hd(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var lm=!1;function jy(t,e){if(wd=ec,t=N0(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},ec=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,g=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:di(e.type,x),g);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(M){Pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return v=lm,lm=!1,v}function Ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hd(e,n,s)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cv(t){var e=t.alternate;e!==null&&(t.alternate=null,Cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[co],delete e[Rd],delete e[Ty],delete e[Cy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ic));else if(i!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}function Wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}var qt=null,hi=!1;function Ji(t,e,n){for(n=n.child;n!==null;)Rv(t,e,n),n=n.sibling}function Rv(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:un||zs(n,e);case 6:var i=qt,r=hi;qt=null,Ji(t,e,n),qt=i,hi=r,qt!==null&&(hi?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(hi?(t=qt,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),ro(t)):uu(qt,n.stateNode));break;case 4:i=qt,r=hi,qt=n.stateNode.containerInfo,hi=!0,Ji(t,e,n),qt=i,hi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Hd(n,e,a),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!un&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,Ji(t,e,n),un=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Gy),e.forEach(function(i){var r=Jy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function oi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,hi=!1;break e;case 3:qt=o.stateNode.containerInfo,hi=!0;break e;case 4:qt=o.stateNode.containerInfo,hi=!0;break e}o=o.return}if(qt===null)throw Error(pe(160));Rv(s,a,r),qt=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(e,t),Si(t),i&4){try{Ya(3,t,t.return),Ic(3,t)}catch(x){Pt(t,t.return,x)}try{Ya(5,t,t.return)}catch(x){Pt(t,t.return,x)}}break;case 1:oi(e,t),Si(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(oi(e,t),Si(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{eo(r,"")}catch(x){Pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Qg(r,s),md(o,a);var c=md(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?i0(r,h):d==="dangerouslySetInnerHTML"?t0(r,h):d==="children"?eo(r,h):ef(r,d,h,c)}switch(o){case"input":ud(r,s);break;case"textarea":Jg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Vs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[co]=s}catch(x){Pt(t,t.return,x)}}break;case 6:if(oi(e,t),Si(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Pt(t,t.return,x)}}break;case 3:if(oi(e,t),Si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(x){Pt(t,t.return,x)}break;case 4:oi(e,t),Si(t);break;case 13:oi(e,t),Si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lf=Nt())),i&4&&um(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||d,oi(e,t),un=c):oi(e,t),Si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Pe=t,d=t.child;d!==null;){for(h=Pe=d;Pe!==null;){switch(f=Pe,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ya(4,f,f.return);break;case 1:zs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Pt(i,n,x)}}break;case 5:zs(f,f.return);break;case 22:if(f.memoizedState!==null){hm(h);continue}}m!==null?(m.return=f,Pe=m):hm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=n0("display",a))}catch(x){Pt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Pt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:oi(e,t),Si(t),i&4&&um(t);break;case 21:break;default:oi(e,t),Si(t)}}function Si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(eo(r,""),i.flags&=-33);var s=cm(t);Wd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=cm(t);jd(t,o,a);break;default:throw Error(pe(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wy(t,e,n){Pe=t,Nv(t)}function Nv(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||el;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||un;o=el;var c=un;if(el=a,(un=l)&&!c)for(Pe=r;Pe!==null;)a=Pe,l=a.child,a.tag===22&&a.memoizedState!==null?fm(r):l!==null?(l.return=a,Pe=l):fm(r);for(;s!==null;)Pe=s,Nv(s),s=s.sibling;Pe=r,el=o,un=c}dm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):dm(t)}}function dm(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:di(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ro(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}un||e.flags&512&&Gd(e)}catch(f){Pt(e,e.return,f)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function hm(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function fm(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Gd(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{Gd(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Pe=o;break}Pe=e.return}}var Xy=Math.ceil,pc=Qi.ReactCurrentDispatcher,Df=Qi.ReactCurrentOwner,ni=Qi.ReactCurrentBatchConfig,at=0,Yt=null,kt=null,Jt=0,zn=0,Bs=Rr(0),Vt=0,go=null,ns=0,Lc=0,If=0,qa=null,wn=null,Lf=0,ta=1/0,Bi=null,mc=!1,Xd=null,Sr=null,tl=!1,fr=null,gc=0,Ka=0,$d=null,zl=-1,Bl=0;function _n(){return at&6?Nt():zl!==-1?zl:zl=Nt()}function Mr(t){return t.mode&1?at&2&&Jt!==0?Jt&-Jt:Ry.transition!==null?(Bl===0&&(Bl=m0()),Bl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:M0(t.type)),t):1}function vi(t,e,n,i){if(50<Ka)throw Ka=0,$d=null,Error(pe(185));Co(t,n,i),(!(at&2)||t!==Yt)&&(t===Yt&&(!(at&2)&&(Lc|=n),Vt===4&&ur(t,Jt)),Pn(t,i),n===1&&at===0&&!(e.mode&1)&&(ta=Nt()+500,Pc&&Pr()))}function Pn(t,e){var n=t.callbackNode;R_(t,e);var i=Jl(t,t===Yt?Jt:0);if(i===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?Ay(pm.bind(null,t)):V0(pm.bind(null,t)),by(function(){!(at&6)&&Pr()}),n=null;else{switch(g0(i)){case 1:n=af;break;case 4:n=f0;break;case 16:n=Ql;break;case 536870912:n=p0;break;default:n=Ql}n=zv(n,Dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dv(t,e){if(zl=-1,Bl=0,at&6)throw Error(pe(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=Jl(t,t===Yt?Jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vc(t,i);else{e=i;var r=at;at|=2;var s=Lv();(Yt!==t||Jt!==e)&&(Bi=null,ta=Nt()+500,Kr(t,e));do try{qy();break}catch(o){Iv(t,o)}while(!0);_f(),pc.current=s,at=r,kt!==null?e=0:(Yt=null,Jt=0,e=Vt)}if(e!==0){if(e===2&&(r=yd(t),r!==0&&(i=r,e=Yd(t,r))),e===1)throw n=go,Kr(t,0),ur(t,i),Pn(t,Nt()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!$y(r)&&(e=vc(t,i),e===2&&(s=yd(t),s!==0&&(i=s,e=Yd(t,s))),e===1))throw n=go,Kr(t,0),ur(t,i),Pn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Vr(t,wn,Bi);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=Lf+500-Nt(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ad(Vr.bind(null,t,wn,Bi),e);break}Vr(t,wn,Bi);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-gi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xy(i/1960))-i,10<i){t.timeoutHandle=Ad(Vr.bind(null,t,wn,Bi),i);break}Vr(t,wn,Bi);break;case 5:Vr(t,wn,Bi);break;default:throw Error(pe(329))}}}return Pn(t,Nt()),t.callbackNode===n?Dv.bind(null,t):null}function Yd(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=vc(t,e),t!==2&&(e=wn,wn=n,e!==null&&qd(e)),t}function qd(t){wn===null?wn=t:wn.push.apply(wn,t)}function $y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~If,e&=~Lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gi(e),i=1<<n;t[n]=-1,e&=~i}}function pm(t){if(at&6)throw Error(pe(327));Xs();var e=Jl(t,0);if(!(e&1))return Pn(t,Nt()),null;var n=vc(t,e);if(t.tag!==0&&n===2){var i=yd(t);i!==0&&(e=i,n=Yd(t,i))}if(n===1)throw n=go,Kr(t,0),ur(t,e),Pn(t,Nt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,wn,Bi),Pn(t,Nt()),null}function Ff(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(ta=Nt()+500,Pc&&Pr())}}function is(t){fr!==null&&fr.tag===0&&!(at&6)&&Xs();var e=at;at|=1;var n=ni.transition,i=pt;try{if(ni.transition=null,pt=1,t)return t()}finally{pt=i,ni.transition=n,at=e,!(at&6)&&Pr()}}function Uf(){zn=Bs.current,St(Bs)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ey(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rc();break;case 3:Js(),St(An),St(fn),wf();break;case 5:bf(i);break;case 4:Js();break;case 13:St(wt);break;case 19:St(wt);break;case 10:yf(i.type._context);break;case 22:case 23:Uf()}n=n.return}if(Yt=t,kt=t=Er(t.current,null),Jt=zn=e,Vt=0,go=null,If=Lc=ns=0,wn=qa=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Wr=null}return t}function Iv(t,e){do{var n=kt;try{if(_f(),Ul.current=fc,hc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(ts=0,Xt=Bt=Tt=null,$a=!1,fo=0,Df.current=null,n===null||n.return===null){Vt=1,go=e,kt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=tm(a);if(m!==null){m.flags&=-257,nm(m,a,o,s,e),m.mode&1&&em(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){em(s,c,e),Of();break e}l=Error(pe(426))}}else if(Mt&&o.mode&1){var g=tm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),nm(g,a,o,s,e),vf(ea(l,o));break e}}s=l=ea(l,o),Vt!==4&&(Vt=2),qa===null?qa=[s]:qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=gv(s,l,e);Yp(s,u);break e;case 1:o=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=vv(s,o,e);Yp(s,M);break e}}s=s.return}while(s!==null)}Uv(n)}catch(w){e=w,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function Lv(){var t=pc.current;return pc.current=fc,t===null?fc:t}function Of(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Yt===null||!(ns&268435455)&&!(Lc&268435455)||ur(Yt,Jt)}function vc(t,e){var n=at;at|=2;var i=Lv();(Yt!==t||Jt!==e)&&(Bi=null,Kr(t,e));do try{Yy();break}catch(r){Iv(t,r)}while(!0);if(_f(),at=n,pc.current=i,kt!==null)throw Error(pe(261));return Yt=null,Jt=0,Vt}function Yy(){for(;kt!==null;)Fv(kt)}function qy(){for(;kt!==null&&!y_();)Fv(kt)}function Fv(t){var e=kv(t.alternate,t,zn);t.memoizedProps=t.pendingProps,e===null?Uv(t):kt=e,Df.current=null}function Uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hy(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,kt=null;return}}else if(n=Vy(n,e,zn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Vt===0&&(Vt=5)}function Vr(t,e,n){var i=pt,r=ni.transition;try{ni.transition=null,pt=1,Ky(t,e,n,i)}finally{ni.transition=r,pt=i}return null}function Ky(t,e,n,i){do Xs();while(fr!==null);if(at&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(P_(t,s),t===Yt&&(kt=Yt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,zv(Ql,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ni.transition,ni.transition=null;var a=pt;pt=1;var o=at;at|=4,Df.current=null,jy(t,n),Pv(n,t),gy(Td),ec=!!wd,Td=wd=null,t.current=n,Wy(n),S_(),at=o,pt=a,ni.transition=s}else t.current=n;if(tl&&(tl=!1,fr=t,gc=r),s=t.pendingLanes,s===0&&(Sr=null),b_(n.stateNode),Pn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mc)throw mc=!1,t=Xd,Xd=null,t;return gc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===$d?Ka++:(Ka=0,$d=t):Ka=0,Pr(),null}function Xs(){if(fr!==null){var t=g0(gc),e=ni.transition,n=pt;try{if(ni.transition=null,pt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,gc=0,at&6)throw Error(pe(331));var r=at;for(at|=4,Pe=t.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Pe=c;Pe!==null;){var d=Pe;switch(d.tag){case 0:case 11:case 15:Ya(8,d,s)}var h=d.child;if(h!==null)h.return=d,Pe=h;else for(;Pe!==null;){d=Pe;var f=d.sibling,m=d.return;if(Cv(d),d===c){Pe=null;break}if(f!==null){f.return=m,Pe=f;break}Pe=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Pe=u;break e}Pe=s.return}}var _=t.current;for(Pe=_;Pe!==null;){a=Pe;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Pe=y;else e:for(a=_;Pe!==null;){if(o=Pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ic(9,o)}}catch(w){Pt(o,o.return,w)}if(o===a){Pe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Pe=M;break e}Pe=o.return}}if(at=r,Pr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(wc,t)}catch{}i=!0}return i}finally{pt=n,ni.transition=e}}return!1}function mm(t,e,n){e=ea(n,e),e=gv(t,e,1),t=yr(t,e,1),e=_n(),t!==null&&(Co(t,1,e),Pn(t,e))}function Pt(t,e,n){if(t.tag===3)mm(t,t,n);else for(;e!==null;){if(e.tag===3){mm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=ea(n,t),t=vv(e,t,1),e=yr(e,t,1),t=_n(),e!==null&&(Co(e,1,t),Pn(e,t));break}}e=e.return}}function Zy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Jt&n)===n&&(Vt===4||Vt===3&&(Jt&130023424)===Jt&&500>Nt()-Lf?Kr(t,0):If|=n),Pn(t,e)}function Ov(t,e){e===0&&(t.mode&1?(e=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):e=1);var n=_n();t=Yi(t,e),t!==null&&(Co(t,e,n),Pn(t,n))}function Qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ov(t,n)}function Jy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),Ov(t,n)}var kv;kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||An.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,By(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,Mt&&e.flags&1048576&&H0(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kl(t,e),t=e.pendingProps;var r=Ks(e,fn.current);Ws(e,n),r=Cf(null,e,i,t,r,n);var s=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=Dc,e.stateNode=r,r._reactInternals=e,Fd(e,i,t,n),e=kd(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&mf(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tS(i),t=di(i,t),r){case 0:e=Od(null,e,i,t,n);break e;case 1:e=sm(null,e,i,t,n);break e;case 11:e=im(null,e,i,t,n);break e;case 14:e=rm(null,e,i,di(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),Od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),sm(t,e,i,r,n);case 3:e:{if(Sv(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Y0(t,e),uc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ea(Error(pe(423)),e),e=am(t,e,i,n,r);break e}else if(i!==r){r=ea(Error(pe(424)),e),e=am(t,e,i,n,r);break e}else for(Vn=_r(e.stateNode.containerInfo.firstChild),Gn=e,Mt=!0,fi=null,n=X0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=qi(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return q0(e),t===null&&Dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Cd(i,r)?a=null:s!==null&&Cd(i,s)&&(e.flags|=32),yv(t,e),xn(t,e,a,n),e.child;case 6:return t===null&&Dd(e),null;case 13:return Mv(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),im(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(lc,i._currentValue),i._currentValue=a,s!==null)if(_i(s.value,a)){if(s.children===r.children&&!An.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Id(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(pe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Id(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=ri(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=di(i,e.pendingProps),r=di(i.type,r),rm(t,e,i,r,n);case 15:return xv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),kl(t,e),e.tag=1,Rn(i)?(t=!0,sc(e)):t=!1,Ws(e,n),mv(e,i,r),Fd(e,i,r,n),kd(null,e,i,!0,t,n);case 19:return Ev(t,e,n);case 22:return _v(t,e,n)}throw Error(pe(156,e.tag))};function zv(t,e){return h0(t,e)}function eS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new eS(t,e,n,i)}function kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tS(t){if(typeof t=="function")return kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")kf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ps:return Zr(n.children,r,s,e);case tf:a=8,r|=8;break;case sd:return t=ei(12,n,e,r|2),t.elementType=sd,t.lanes=s,t;case ad:return t=ei(13,n,e,r),t.elementType=ad,t.lanes=s,t;case od:return t=ei(19,n,e,r),t.elementType=od,t.lanes=s,t;case qg:return Fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $g:a=10;break e;case Yg:a=9;break e;case nf:a=11;break e;case rf:a=14;break e;case ar:a=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=ei(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Zr(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function Fc(t,e,n,i){return t=ei(22,t,i,e),t.elementType=qg,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zf(t,e,n,i,r,s,a,o,l){return t=new nS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function iS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bv(t){if(!t)return wr;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(Rn(n))return B0(t,n,e)}return e}function Vv(t,e,n,i,r,s,a,o,l){return t=zf(n,i,!0,t,r,s,a,o,l),t.context=Bv(null),n=t.current,i=_n(),r=Mr(n),s=ji(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,Co(t,r,i),Pn(t,i),t}function Uc(t,e,n,i){var r=e.current,s=_n(),a=Mr(r);return n=Bv(n),e.context===null?e.context=n:e.pendingContext=n,e=ji(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,a),t!==null&&(vi(t,r,a,s),Fl(t,r,a)),a}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function rS(){return null}var Hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Oc.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));Uc(t,e,null,null)};Oc.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Uc(null,t,null,null)}),e[$i]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=_0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&S0(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function sS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xc(a);s.call(c)}}var a=Vv(e,i,t,0,null,!1,!1,"",vm);return t._reactRootContainer=a,t[$i]=a.current,oo(t.nodeType===8?t.parentNode:t),is(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=xc(l);o.call(c)}}var l=zf(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[$i]=l.current,oo(t.nodeType===8?t.parentNode:t),is(function(){Uc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=xc(a);o.call(l)}}Uc(e,a,t,r)}else a=sS(n,e,t,r,i);return xc(a)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(of(e,n|1),Pn(e,Nt()),!(at&6)&&(ta=Nt()+500,Pr()))}break;case 13:is(function(){var i=Yi(t,1);if(i!==null){var r=_n();vi(i,t,1,r)}}),Bf(t,1)}};lf=function(t){if(t.tag===13){var e=Yi(t,134217728);if(e!==null){var n=_n();vi(e,t,134217728,n)}Bf(t,134217728)}};x0=function(t){if(t.tag===13){var e=Mr(t),n=Yi(t,e);if(n!==null){var i=_n();vi(n,t,e,i)}Bf(t,e)}};_0=function(){return pt};y0=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};vd=function(t,e,n){switch(e){case"input":if(ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(pe(90));Zg(i),ud(i,r)}}}break;case"textarea":Jg(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};a0=Ff;o0=is;var aS={usingClientEntryPoint:!1,Events:[Ro,Ls,Rc,r0,s0,Ff]},Ca={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oS={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=u0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{wc=nl.inject(oS),Ri=nl}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(pe(200));return iS(t,e,null,n)};Wn.createRoot=function(t,e){if(!Hf(t))throw Error(pe(299));var n=!1,i="",r=Hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zf(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,oo(t.nodeType===8?t.parentNode:t),new Vf(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=u0(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return is(t)};Wn.hydrate=function(t,e,n){if(!kc(e))throw Error(pe(200));return zc(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Vv(e,null,t,1,n??null,r,!1,s,a),t[$i]=e.current,oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Wn.render=function(t,e,n){if(!kc(e))throw Error(pe(200));return zc(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!kc(t))throw Error(pe(40));return t._reactRootContainer?(is(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Wn.unstable_batchedUpdates=Ff;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return zc(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),Gg.exports=Wn;var lS=Gg.exports,jv,xm=lS;jv=xm.createRoot,xm.hydrateRoot;class Gf{constructor(){this.audioContext=null,this.sourceNode=null,this.analyserNode=null,this.gainNode=null,this.audioBuffer=null,this.streamDestination=null,this._isPlaying=!1,this._currentTime=0,this._duration=0,this._volume=.7,this.startTime=0,this.pauseTime=0,this.onPlayCallback=null,this.onPauseCallback=null,this.onEndedCallback=null}async initialize(){this.audioContext||(this.audioContext=new AudioContext,this.analyserNode=this.audioContext.createAnalyser(),this.analyserNode.fftSize=2048,this.analyserNode.smoothingTimeConstant=0,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=this._volume,this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination)),this.audioContext.state==="suspended"&&await this.audioContext.resume()}async loadAudioFile(e){await this.initialize(),this.stop();const n=await e.arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(n),this._duration=this.audioBuffer.duration,this._currentTime=0}async play(){if(!this.audioBuffer||!this.audioContext||!this.analyserNode)return;await this.initialize(),this.sourceNode&&(this.sourceNode.stop(),this.sourceNode.disconnect()),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.audioBuffer,this.sourceNode.connect(this.analyserNode),this.sourceNode.onended=()=>{this._isPlaying&&(this._isPlaying=!1,this._currentTime=0,this.onEndedCallback&&this.onEndedCallback())};const e=this.pauseTime>0?this.pauseTime:0;this.sourceNode.start(0,e),this.startTime=this.audioContext.currentTime-e,this.pauseTime=0,this._isPlaying=!0,this.onPlayCallback&&this.onPlayCallback()}pause(){this._isPlaying&&this.sourceNode&&this.audioContext&&(this.pauseTime=this.audioContext.currentTime-this.startTime,this.sourceNode.stop(),this._isPlaying=!1,this.onPauseCallback&&this.onPauseCallback())}stop(){this.sourceNode&&(this._isPlaying&&this.sourceNode.stop(),this.sourceNode.disconnect(),this.sourceNode=null),this._isPlaying=!1,this._currentTime=0,this.pauseTime=0,this.startTime=0}seek(e){const n=this._isPlaying;this.stop(),this.pauseTime=Math.max(0,Math.min(e,this._duration)),this._currentTime=this.pauseTime,n&&this.play()}setVolume(e){this._volume=Math.max(0,Math.min(1,e)),this.gainNode&&(this.gainNode.gain.value=this._volume)}updateCurrentTime(){this._isPlaying&&this.audioContext?(this._currentTime=this.audioContext.currentTime-this.startTime,this._currentTime>=this._duration&&(this._currentTime=this._duration)):!this._isPlaying&&this.pauseTime>0&&(this._currentTime=this.pauseTime)}get isPlaying(){return this._isPlaying}get currentTime(){return this._currentTime}get duration(){return this._duration}get volume(){return this._volume}getAnalyserNode(){return this.analyserNode}createAudioStream(){return!this.audioContext||!this.gainNode?null:(this.streamDestination||(this.streamDestination=this.audioContext.createMediaStreamDestination(),this.gainNode.connect(this.streamDestination)),this.streamDestination.stream)}disposeAudioStream(){this.streamDestination&&this.gainNode&&(this.gainNode.disconnect(this.streamDestination),this.streamDestination=null)}onPlay(e){this.onPlayCallback=e}onPause(e){this.onPauseCallback=e}onEnded(e){this.onEndedCallback=e}cleanup(){this.stop(),this.disposeAudioStream(),this.gainNode&&(this.gainNode.disconnect(),this.gainNode=null),this.analyserNode&&(this.analyserNode.disconnect(),this.analyserNode=null),this.audioContext&&(this.audioContext.close(),this.audioContext=null),this.audioBuffer=null}}class jf{constructor(e,n){this.smoothedEnergy=0,this.smoothedSub=0,this.smoothedBass=0,this.smoothedMids=0,this.smoothedHighs=0,this.lastPeakTime=0,this.peakTriggerActive=!1,this.analyserNode=e,this.sampleRate=n,this.binCount=e.frequencyBinCount,this.dataArray=new Uint8Array(this.binCount)}frequencyToBin(e){return Math.round(e*this.binCount/(this.sampleRate/2))}getBandEnergy(e,n){const i=this.frequencyToBin(e),r=this.frequencyToBin(n);let s=0,a=0;for(let o=i;o<=r&&o<this.binCount;o++)s+=this.dataArray[o],a++;return a>0?s/a/255:0}getOverallEnergy(){let e=0;for(let n=0;n<this.binCount;n++){const i=this.dataArray[n]/255;e+=i*i}return Math.sqrt(e/this.binCount)}analyse(e){this.analyserNode.getByteFrequencyData(this.dataArray);const n=this.getOverallEnergy(),i=this.getBandEnergy(20,60),r=this.getBandEnergy(60,250),s=this.getBandEnergy(250,2e3),a=this.getBandEnergy(2e3,12e3),o=e.smoothing;this.smoothedEnergy=this.smoothedEnergy*o+n*(1-o),this.smoothedSub=this.smoothedSub*o+i*(1-o),this.smoothedBass=this.smoothedBass*o+r*(1-o),this.smoothedMids=this.smoothedMids*o+s*(1-o),this.smoothedHighs=this.smoothedHighs*o+a*(1-o);const l=e.sensitivity,c=Math.min(1,this.smoothedEnergy*l*1.2),d=Math.min(1,this.smoothedSub*l*.7),h=Math.min(1,this.smoothedBass*l*.8),f=Math.min(1,this.smoothedMids*l*.7),m=Math.min(1,this.smoothedHighs*l*1),v=performance.now();let x=!1;return h>e.peakThreshold&&!this.peakTriggerActive?v-this.lastPeakTime>e.peakCooldown&&(x=!0,this.peakTriggerActive=!0,this.lastPeakTime=v):h<e.peakThreshold*.8&&(this.peakTriggerActive=!1),{energy:c,sub:d,bass:h,mids:f,highs:m,peakTrigger:x,timestamp:v}}reset(){this.smoothedEnergy=0,this.smoothedSub=0,this.smoothedBass=0,this.smoothedMids=0,this.smoothedHighs=0,this.lastPeakTime=0,this.peakTriggerActive=!1}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="182",hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cS=0,_m=1,uS=2,Hl=1,dS=2,za=3,Tr=0,Nn=1,Ti=2,Ni=0,Qr=1,vo=2,ym=3,Sm=4,hS=5,Hr=100,fS=101,pS=102,mS=103,gS=104,vS=200,xS=201,_S=202,yS=203,Kd=204,Zd=205,SS=206,MS=207,ES=208,bS=209,wS=210,TS=211,CS=212,AS=213,RS=214,Qd=0,Jd=1,eh=2,na=3,th=4,nh=5,ih=6,rh=7,Wv=0,PS=1,NS=2,Di=0,Xv=1,$v=2,Yv=3,qv=4,Kv=5,Zv=6,Qv=7,Jv=300,rs=301,ia=302,sh=303,ah=304,Bc=306,oh=1e3,Hn=1001,lh=1002,Qt=1003,DS=1004,il=1005,Et=1006,yu=1007,$r=1008,Jn=1009,ex=1010,tx=1011,xo=1012,Xf=1013,Ii=1014,Ci=1015,ii=1016,$f=1017,Yf=1018,_o=1020,nx=35902,ix=35899,rx=1021,qf=1022,ti=1023,Ki=1026,Yr=1027,sx=1028,Kf=1029,ra=1030,Zf=1031,Qf=1033,Gl=33776,jl=33777,Wl=33778,Xl=33779,ch=35840,uh=35841,dh=35842,hh=35843,fh=36196,ph=37492,mh=37496,gh=37488,vh=37489,xh=37490,_h=37491,yh=37808,Sh=37809,Mh=37810,Eh=37811,bh=37812,wh=37813,Th=37814,Ch=37815,Ah=37816,Rh=37817,Ph=37818,Nh=37819,Dh=37820,Ih=37821,Lh=36492,Fh=36494,Uh=36495,Oh=36283,kh=36284,zh=36285,Bh=36286,IS=3200,LS=0,FS=1,dr="",bn="srgb",sa="srgb-linear",_c="linear",ft="srgb",ps=7680,Mm=519,US=512,OS=513,kS=514,Jf=515,zS=516,BS=517,ep=518,VS=519,Em=35044,bm="300 es",Ai=2e3,yc=2001;function ax(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HS(){const t=Sc("canvas");return t.style.display="block",t}const wm={};function Tm(...t){const e="THREE."+t.shift();console.log(e,...t)}function We(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ct(...t){const e="THREE."+t.shift();console.error(e,...t)}function yo(...t){const e=t.join(" ");e in wm||(wm[e]=!0,We(...t))}function GS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}let ha=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cm=1234567;const Za=Math.PI/180,So=180/Math.PI;function fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function tp(t,e){return(t%e+e)%e}function jS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function WS(t,e,n){return t!==e?(n-t)/(e-t):0}function Qa(t,e,n){return(1-n)*t+n*e}function XS(t,e,n,i){return Qa(t,e,1-Math.exp(-n*i))}function $S(t,e=1){return e-Math.abs(tp(t,e*2)-e)}function YS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function qS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function KS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ZS(t,e){return t+Math.random()*(e-t)}function QS(t){return t*(.5-Math.random())}function JS(t){t!==void 0&&(Cm=t);let e=Cm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eM(t){return t*Za}function tM(t){return t*So}function nM(t){return(t&t-1)===0&&t!==0}function iM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function rM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function sM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*f,o*c);break;case"YZY":t.set(l*f,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*f,o*d,o*c);break;case"XZX":t.set(o*d,l*v,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*v,o*c);break;case"ZYZ":t.set(l*v,l*m,o*d,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function As(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const aM={DEG2RAD:Za,RAD2DEG:So,generateUUID:fa,clamp:Ke,euclideanModulo:tp,mapLinear:jS,inverseLerp:WS,lerp:Qa,damp:XS,pingpong:$S,smoothstep:YS,smootherstep:qS,randInt:KS,randFloat:ZS,randFloatSpread:QS,seededRandom:JS,degToRad:eM,radToDeg:tM,isPowerOfTwo:nM,ceilPowerOfTwo:iM,floorPowerOfTwo:rM,setQuaternionFromProperEuler:sM,normalize:gn,denormalize:As};class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ss{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o>=1){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==f||c!==m||d!==v){let g=l*f+c*m+d*v+h*x;g<0&&(f=-f,m=-m,v=-v,x=-x,g=-g);let u=1-o;if(g<.9995){const _=Math.acos(g),y=Math.sin(_);u=Math.sin(u*_)/y,o=Math.sin(o*_)/y,l=l*u+f*o,c=c*u+m*o,d=d*u+v*o,h=h*u+x*o}else{l=l*u+f*o,c=c*u+m*o,d=d*u+v*o,h=h*u+x*o;const _=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=_,c*=_,d*=_,h*=_}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*m-c*f,e[n+1]=l*v+d*f+c*h-o*m,e[n+2]=c*v+d*m+o*f-l*h,e[n+3]=d*v-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"YXZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"ZXY":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"ZYX":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"YZX":this._x=f*d*h+c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h-f*m*v;break;case"XZY":this._x=f*d*h-c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h+f*m*v;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Am.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Am.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new W,Am=new ss;class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],v=i[8],x=r[0],g=r[3],u=r[6],_=r[1],y=r[4],M=r[7],w=r[2],T=r[5],C=r[8];return s[0]=a*x+o*_+l*w,s[3]=a*g+o*y+l*T,s[6]=a*u+o*M+l*C,s[1]=c*x+d*_+h*w,s[4]=c*g+d*y+h*T,s[7]=c*u+d*M+h*C,s[2]=f*x+m*_+v*w,s[5]=f*g+m*y+v*T,s[8]=f*u+m*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,v=n*h+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new $e,Rm=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oM(){const t={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?_c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[sa]:{primaries:e,whitePoint:i,transfer:_c,toXYZ:Rm,fromXYZ:Pm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Rm,fromXYZ:Pm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const st=oM();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class lM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Sc("canvas")),ms.width=e.width,ms.height=e.height;const r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cM=0;class np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=fa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Eu(r[a].image)):s.push(Eu(r[a]))}else s=Eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let uM=0;const bu=new W;class en extends ha{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Hn,r=Hn,s=Et,a=$r,o=ti,l=Jn,c=en.DEFAULT_ANISOTROPY,d=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=fa(),this.name="",this.source=new np(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bu).x}get height(){return this.source.getSize(bu).y}get depth(){return this.source.getSize(bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Jv;en.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],v=l[9],x=l[2],g=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(m+1)/2,w=(u+1)/2,T=(d+f)/4,C=(h+x)/4,R=(v+g)/4;return y>M&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=C/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=R/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-v)*(g-v)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(h-x)/_,this.z=(f-d)/_,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends ha{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new en(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new np(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends dM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ox extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(s,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),sl.subVectors(this.max,Aa),gs.subVectors(e.a,Aa),vs.subVectors(e.b,Aa),xs.subVectors(e.c,Aa),er.subVectors(vs,gs),tr.subVectors(xs,vs),Ir.subVectors(gs,xs);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Ir.z,Ir.y,er.z,0,-er.x,tr.z,0,-tr.x,Ir.z,0,-Ir.x,-er.y,er.x,0,-tr.y,tr.x,0,-Ir.y,Ir.x,0];return!wu(n,gs,vs,xs,sl)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,gs,vs,xs,sl))?!1:(al.crossVectors(er,tr),n=[al.x,al.y,al.z],wu(n,gs,vs,xs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new W,new W,new W,new W,new W,new W,new W,new W],li=new W,rl=new No,gs=new W,vs=new W,xs=new W,er=new W,tr=new W,Ir=new W,Aa=new W,sl=new W,al=new W,Lr=new W;function wu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Lr.fromArray(t,s);const o=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),d=i.dot(Lr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const fM=new No,Ra=new W,Tu=new W;class Vc{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):fM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Tu)),this.expandByPoint(Ra.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ui=new W,Cu=new W,ol=new W,nr=new W,Au=new W,ll=new W,Ru=new W;class ip{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Cu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ol),o=nr.dot(this.direction),l=-nr.dot(ol),c=nr.lengthSq(),d=Math.abs(1-a*a);let h,f,m,v;if(d>0)if(h=a*l-o,f=a*o-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const x=1/d;h*=x,f*=x,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cu).addScaledVector(ol,f),m}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,r,s){Au.subVectors(n,e),ll.subVectors(i,e),Ru.crossVectors(Au,ll);let a=this.direction.dot(Ru),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,e);const l=o*this.direction.dot(ll.crossVectors(nr,ll));if(l<0)return null;const c=o*this.direction.dot(Au.cross(nr));if(c<0||l+c>a)return null;const d=-o*nr.dot(Ru);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,v,x,g){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,v,x,g)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,v,x,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=x,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,v=o*d,x=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,v=c*d,x=c*h;n[0]=f+x*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-v,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,v=c*d,x=c*h;n[0]=f-x*o,n[4]=-a*h,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*d,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,v=o*d,x=o*h;n[0]=l*d,n[4]=v*c-m,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,x=o*c;n[0]=l*d,n[4]=x-f*h,n[8]=v*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+v,n[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,x=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=a*d,n[9]=m*h-v,n[2]=v*h-m,n[6]=o*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),ir.crossVectors(i,On),ir.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ir.crossVectors(i,On)),ir.normalize(),cl.crossVectors(On,ir),r[0]=ir.x,r[4]=cl.x,r[8]=On.x,r[1]=ir.y,r[5]=cl.y,r[9]=On.y,r[2]=ir.z,r[6]=cl.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],v=i[2],x=i[6],g=i[10],u=i[14],_=i[3],y=i[7],M=i[11],w=i[15],T=r[0],C=r[4],R=r[8],E=r[12],b=r[1],I=r[5],V=r[9],z=r[13],D=r[2],H=r[6],X=r[10],G=r[14],U=r[3],$=r[7],q=r[11],ne=r[15];return s[0]=a*T+o*b+l*D+c*U,s[4]=a*C+o*I+l*H+c*$,s[8]=a*R+o*V+l*X+c*q,s[12]=a*E+o*z+l*G+c*ne,s[1]=d*T+h*b+f*D+m*U,s[5]=d*C+h*I+f*H+m*$,s[9]=d*R+h*V+f*X+m*q,s[13]=d*E+h*z+f*G+m*ne,s[2]=v*T+x*b+g*D+u*U,s[6]=v*C+x*I+g*H+u*$,s[10]=v*R+x*V+g*X+u*q,s[14]=v*E+x*z+g*G+u*ne,s[3]=_*T+y*b+M*D+w*U,s[7]=_*C+y*I+M*H+w*$,s[11]=_*R+y*V+M*X+w*q,s[15]=_*E+y*z+M*G+w*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],v=e[3],x=e[7],g=e[11],u=e[15],_=l*m-c*f,y=o*m-c*h,M=o*f-l*h,w=a*m-c*d,T=a*f-l*d,C=a*h-o*d;return n*(x*_-g*y+u*M)-i*(v*_-g*w+u*T)+r*(v*y-x*w+u*C)-s*(v*M-x*T+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],v=e[12],x=e[13],g=e[14],u=e[15],_=h*g*c-x*f*c+x*l*m-o*g*m-h*l*u+o*f*u,y=v*f*c-d*g*c-v*l*m+a*g*m+d*l*u-a*f*u,M=d*x*c-v*h*c+v*o*m-a*x*m-d*o*u+a*h*u,w=v*h*l-d*x*l-v*o*f+a*x*f+d*o*g-a*h*g,T=n*_+i*y+r*M+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(x*f*s-h*g*s-x*r*m+i*g*m+h*r*u-i*f*u)*C,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*u+i*l*u)*C,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*C,e[4]=y*C,e[5]=(d*g*s-v*f*s+v*r*m-n*g*m-d*r*u+n*f*u)*C,e[6]=(v*l*s-a*g*s-v*r*c+n*g*c+a*r*u-n*l*u)*C,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*C,e[8]=M*C,e[9]=(v*h*s-d*x*s-v*i*m+n*x*m+d*i*u-n*h*u)*C,e[10]=(a*x*s-v*o*s+v*i*c-n*x*c-a*i*u+n*o*u)*C,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*C,e[12]=w*C,e[13]=(d*x*r-v*h*r+v*i*f-n*x*f-d*i*g+n*h*g)*C,e[14]=(v*o*r-a*x*r-v*i*l+n*x*l+a*i*g-n*o*g)*C,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,v=s*h,x=a*d,g=a*h,u=o*h,_=l*c,y=l*d,M=l*h,w=i.x,T=i.y,C=i.z;return r[0]=(1-(x+u))*w,r[1]=(m+M)*w,r[2]=(v-y)*w,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(f+u))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(v+y)*C,r[9]=(g-_)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),o=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ci.copy(this);const c=1/s,d=1/a,h=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=d,ci.elements[5]*=d,ci.elements[6]*=d,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,n.setFromRotationMatrix(ci),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ai,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let v,x;if(l)v=s/(a-s),x=a*s/(a-s);else if(o===Ai)v=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===yc)v=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ai,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,x;if(l)v=1/(a-s),x=a/(a-s);else if(o===Ai)v=-2/(a-s),x=-(a+s)/(a-s);else if(o===yc)v=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _s=new W,ci=new Ft,pM=new W(0,0,0),mM=new W(1,1,1),ir=new W,cl=new W,On=new W,Nm=new Ft,Dm=new ss;class Zi{constructor(e=0,n=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dm.setFromEuler(this),this.setFromQuaternion(Dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";let lx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gM=0;const Im=new W,ys=new ss,Oi=new Ft,ul=new W,Pa=new W,vM=new W,xM=new ss,Lm=new W(1,0,0),Fm=new W(0,1,0),Um=new W(0,0,1),Om={type:"added"},_M={type:"removed"},Ss={type:"childadded",child:null},Pu={type:"childremoved",child:null};class In extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new W,n=new Zi,i=new ss,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new $e}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(Um,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(Um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ul.copy(e):ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Pa,ul,this.up):Oi.lookAt(ul,Pa,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Oi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_M),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,vM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,xM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}In.DEFAULT_UP=new W(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new W,ki=new W,Nu=new W,zi=new W,Ms=new W,Es=new W,km=new W,Du=new W,Iu=new W,Lu=new W,Fu=new It,Uu=new It,Ou=new It;class pi{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ui.subVectors(e,n),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ui.subVectors(r,n),ki.subVectors(i,n),Nu.subVectors(e,n);const a=ui.dot(ui),o=ui.dot(ki),l=ui.dot(Nu),c=ki.dot(ki),d=ki.dot(Nu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,v=(a*d-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Fu.setScalar(0),Uu.setScalar(0),Ou.setScalar(0),Fu.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,i),Ou.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fu,s.x),a.addScaledVector(Uu,s.y),a.addScaledVector(Ou,s.z),a}static isFrontFacing(e,n,i,r){return ui.subVectors(i,n),ki.subVectors(e,n),ui.cross(ki).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ui.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ms.subVectors(r,i),Es.subVectors(s,i),Du.subVectors(e,i);const l=Ms.dot(Du),c=Es.dot(Du);if(l<=0&&c<=0)return n.copy(i);Iu.subVectors(e,r);const d=Ms.dot(Iu),h=Es.dot(Iu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Ms,a);Lu.subVectors(e,s);const m=Ms.dot(Lu),v=Es.dot(Lu);if(v>=0&&m<=v)return n.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Es,o);const g=d*v-m*h;if(g<=0&&h-d>=0&&m-v>=0)return km.subVectors(s,r),o=(h-d)/(h-d+(m-v)),n.copy(r).addScaledVector(km,o);const u=1/(g+x+f);return a=x*u,o=f*u,n.copy(i).addScaledVector(Ms,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=tp(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ku(a,s,e+1/3),this.g=ku(a,s,e),this.b=ku(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=cx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return st.workingToColorSpace(cn.copy(this),e),Math.round(Ke(cn.r*255,0,255))*65536+Math.round(Ke(cn.g*255,0,255))*256+Math.round(Ke(cn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=bn){st.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(dl);const i=Qa(rr.h,dl.h,n),r=Qa(rr.s,dl.s,n),s=Qa(rr.l,dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Ze;Ze.NAMES=cx;let yM=0;class Do extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=Qr,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Zd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){We(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kd&&(i.blendSrc=this.blendSrc),this.blendDst!==Zd&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rp extends Do{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new W,hl=new Fe;let SM=0;class hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Em,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=As(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=As(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=As(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=As(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Em&&(e.usage=this.usage),e}}class ux extends hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dx extends hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ut extends hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let MM=0;const Yn=new Ft,zu=new In,bs=new W,kn=new No,Na=new No,Wt=new W;class Ht extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?dx:ux)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,i){return Yn.makeTranslation(e,n,i),this.applyMatrix4(Yn),this}scale(e,n,i){return Yn.makeScale(e,n,i),this.applyMatrix4(Yn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(kn.min,Na.min),kn.expandByPoint(Wt),Wt.addVectors(kn.max,Na.max),kn.expandByPoint(Wt)):(kn.expandByPoint(Na.min),kn.expandByPoint(Na.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Wt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Wt.add(bs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new W,l[R]=new W;const c=new W,d=new W,h=new W,f=new Fe,m=new Fe,v=new Fe,x=new W,g=new W;function u(R,E,b){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,b),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,E),v.fromBufferAttribute(s,b),d.sub(c),h.sub(c),m.sub(f),v.sub(f);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(I),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(I),o[R].add(x),o[E].add(x),o[b].add(x),l[R].add(g),l[E].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,E=_.length;R<E;++R){const b=_[R],I=b.start,V=b.count;for(let z=I,D=I+V;z<D;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new W,M=new W,w=new W,T=new W;function C(R){w.fromBufferAttribute(r,R),T.copy(w);const E=o[R];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(T,E);const I=M.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,I)}for(let R=0,E=_.length;R<E;++R){const b=_[R],I=b.start,V=b.count;for(let z=I,D=I+V;z<D;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,d=new W,h=new W;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let u=0;u<d;u++)f[v++]=c[m++]}return new hn(f,d,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ht,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zm=new Ft,Fr=new ip,fl=new Vc,Bm=new W,pl=new W,ml=new W,gl=new W,Bu=new W,vl=new W,Vm=new W,xl=new W;class ai extends In{constructor(e=new Ht,n=new rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Bu.fromBufferAttribute(h,e),a?vl.addScaledVector(Bu,d):vl.addScaledVector(Bu.sub(n),d))}n.add(vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(fl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(fl,Bm)===null||Fr.origin.distanceToSquared(Bm)>(e.far-e.near)**2))&&(zm.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(zm),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const g=f[v],u=a[g.materialIndex],_=Math.max(g.start,m.start),y=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=_,w=y;M<w;M+=3){const T=o.getX(M),C=o.getX(M+1),R=o.getX(M+2);r=_l(this,u,e,i,c,d,h,T,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=v,u=x;g<u;g+=3){const _=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);r=_l(this,a,e,i,c,d,h,_,y,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const g=f[v],u=a[g.materialIndex],_=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=_,w=y;M<w;M+=3){const T=M,C=M+1,R=M+2;r=_l(this,u,e,i,c,d,h,T,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=v,u=x;g<u;g+=3){const _=g,y=g+1,M=g+2;r=_l(this,a,e,i,c,d,h,_,y,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function EM(t,e,n,i,r,s,a,o){let l;if(e.side===Nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Tr,o),l===null)return null;xl.copy(o),xl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xl);return c<n.near||c>n.far?null:{distance:c,point:xl.clone(),object:t}}function _l(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,pl),t.getVertexPosition(l,ml),t.getVertexPosition(c,gl);const d=EM(t,e,n,i,pl,ml,gl,Vm);if(d){const h=new W;pi.getBarycoord(Vm,pl,ml,gl,h),r&&(d.uv=pi.getInterpolatedAttribute(r,o,l,c,h,new Fe)),s&&(d.uv1=pi.getInterpolatedAttribute(s,o,l,c,h,new Fe)),a&&(d.normal=pi.getInterpolatedAttribute(a,o,l,c,h,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};pi.getNormal(pl,ml,gl,f.normal),d.face=f,d.barycoord=h}return d}class Cr extends Ht{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(h,2));function v(x,g,u,_,y,M,w,T,C,R,E){const b=M/C,I=w/R,V=M/2,z=w/2,D=T/2,H=C+1,X=R+1;let G=0,U=0;const $=new W;for(let q=0;q<X;q++){const ne=q*I-z;for(let se=0;se<H;se++){const Ne=se*b-V;$[x]=Ne*_,$[g]=ne*y,$[u]=D,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[u]=T>0?1:-1,d.push($.x,$.y,$.z),h.push(se/C),h.push(1-q/R),G+=1}}for(let q=0;q<R;q++)for(let ne=0;ne<C;ne++){const se=f+ne+H*q,Ne=f+ne+H*(q+1),Ue=f+(ne+1)+H*(q+1),Ge=f+(ne+1)+H*q;l.push(se,Ne,Ge),l.push(Ne,Ue,Ge),U+=6}o.addGroup(m,U,E),m+=U,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function vn(t){const e={};for(let n=0;n<t.length;n++){const i=aa(t[n]);for(const r in i)e[r]=i[r]}return e}function bM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Mc={clone:aa,merge:vn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends Do{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=bM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fx extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new W,Hm=new Fe,Gm=new Fe;class dn extends fx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,Hm,Gm),n.subVectors(Gm,Hm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Za*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,Ts=1;class CM extends In{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(ws,Ts,e,n);r.layers=this.layers,this.add(r);const s=new dn(ws,Ts,e,n);s.layers=this.layers,this.add(s);const a=new dn(ws,Ts,e,n);a.layers=this.layers,this.add(a);const o=new dn(ws,Ts,e,n);o.layers=this.layers,this.add(o);const l=new dn(ws,Ts,e,n);l.layers=this.layers,this.add(l);const c=new dn(ws,Ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class px extends en{constructor(e=[],n=rs,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mx extends Dn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new px(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:Ni});s.uniforms.tEquirect.value=n;const a=new ai(r,s),o=n.minFilter;return n.minFilter===$r&&(n.minFilter=Et),new CM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Ba extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),u=this._getHandJoint(c,x);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gx extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class RM extends en{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Qt,d=Qt,h,f){super(null,a,o,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=new W,PM=new W,NM=new $e;class lr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hu.subVectors(i,n).cross(PM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||NM.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Vc,DM=new Fe(.5,.5),yl=new W;class vx{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],f=s[6],m=s[7],v=s[8],x=s[9],g=s[10],u=s[11],_=s[12],y=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-a,m-d,u-v,w-_).normalize(),r[1].setComponents(c+a,m+d,u+v,w+_).normalize(),r[2].setComponents(c+o,m+h,u+x,w+y).normalize(),r[3].setComponents(c-o,m-h,u-x,w-y).normalize(),i)r[4].setComponents(l,f,g,M).normalize(),r[5].setComponents(c-l,m-f,u-g,w-M).normalize();else if(r[4].setComponents(c-l,m-f,u-g,w-M).normalize(),n===Ai)r[5].setComponents(c+l,m+f,u+g,w+M).normalize();else if(n===yc)r[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const n=DM.distanceTo(e.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IM extends Do{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jm=new Ft,Vh=new ip,Sl=new Vc,Ml=new W;class Hh extends In{constructor(e=new Ht,n=new IM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;jm.copy(r).invert(),Vh.copy(e.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=f,x=m;v<x;v++){const g=c.getX(v);Ml.fromBufferAttribute(h,g),Wm(Ml,g,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,x=m;v<x;v++)Ml.fromBufferAttribute(h,v),Wm(Ml,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wm(t,e,n,i,r,s,a){const o=Vh.distanceSqToPoint(t);if(o<n){const l=new W;Vh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class LM extends en{constructor(e,n,i,r,s=Et,a=Et,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const d=this;function h(){d.needsUpdate=!0,d._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Mo extends en{constructor(e,n,i=Ii,r,s,a,o=Qt,l=Qt,c,d=Ki,h=1){if(d!==Ki&&d!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FM extends Mo{constructor(e,n=Ii,i=rs,r,s,a=Qt,o=Qt,l,c=Ki){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xx extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eo extends Ht{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let v=0;const x=[],g=i/2;let u=0;_(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Ut(h,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(m,2));function _(){const M=new W,w=new W;let T=0;const C=(n-e)/i;for(let R=0;R<=s;R++){const E=[],b=R/s,I=b*(n-e)+e;for(let V=0;V<=r;V++){const z=V/r,D=z*l+o,H=Math.sin(D),X=Math.cos(D);w.x=I*H,w.y=-b*i+g,w.z=I*X,h.push(w.x,w.y,w.z),M.set(H,C,X).normalize(),f.push(M.x,M.y,M.z),m.push(z,1-b),E.push(v++)}x.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){const b=x[E][R],I=x[E+1][R],V=x[E+1][R+1],z=x[E][R+1];(e>0||E!==0)&&(d.push(b,I,z),T+=3),(n>0||E!==s-1)&&(d.push(I,V,z),T+=3)}c.addGroup(u,T,0),u+=T}function y(M){const w=v,T=new Fe,C=new W;let R=0;const E=M===!0?e:n,b=M===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,g*b,0),f.push(0,b,0),m.push(.5,.5),v++;const I=v;for(let V=0;V<=r;V++){const D=V/r*l+o,H=Math.cos(D),X=Math.sin(D);C.x=E*X,C.y=g*b,C.z=E*H,h.push(C.x,C.y,C.z),f.push(0,b,0),T.x=H*.5+.5,T.y=X*.5*b+.5,m.push(T.x,T.y),v++}for(let V=0;V<r;V++){const z=w+V,D=I+V;M===!0?d.push(D,D+1,z):d.push(D+1,D,z),R+=3}c.addGroup(u,R,M===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sp extends Ht{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new Ut(s,3)),this.setAttribute("normal",new Ut(s.slice(),3)),this.setAttribute("uv",new Ut(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new W,M=new W,w=new W;for(let T=0;T<n.length;T+=3)m(n[T+0],y),m(n[T+1],M),m(n[T+2],w),l(y,M,w,_)}function l(_,y,M,w){const T=w+1,C=[];for(let R=0;R<=T;R++){C[R]=[];const E=_.clone().lerp(M,R/T),b=y.clone().lerp(M,R/T),I=T-R;for(let V=0;V<=I;V++)V===0&&R===T?C[R][V]=E:C[R][V]=E.clone().lerp(b,V/I)}for(let R=0;R<T;R++)for(let E=0;E<2*(T-R)-1;E++){const b=Math.floor(E/2);E%2===0?(f(C[R][b+1]),f(C[R+1][b]),f(C[R][b])):(f(C[R][b+1]),f(C[R+1][b+1]),f(C[R+1][b]))}}function c(_){const y=new W;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(_),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function d(){const _=new W;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const M=g(_)/2/Math.PI+.5,w=u(_)/Math.PI+.5;a.push(M,1-w)}v(),h()}function h(){for(let _=0;_<a.length;_+=6){const y=a[_+0],M=a[_+2],w=a[_+4],T=Math.max(y,M,w),C=Math.min(y,M,w);T>.9&&C<.1&&(y<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),w<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function m(_,y){const M=_*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function v(){const _=new W,y=new W,M=new W,w=new W,T=new Fe,C=new Fe,R=new Fe;for(let E=0,b=0;E<s.length;E+=9,b+=6){_.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),T.set(a[b+0],a[b+1]),C.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),w.copy(_).add(y).add(M).divideScalar(3);const I=g(w);x(T,b+0,_,I),x(C,b+2,y,I),x(R,b+4,M,I)}}function x(_,y,M,w){w<0&&_.x===1&&(a[y]=_.x-1),M.x===0&&M.z===0&&(a[y]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sp(e.vertices,e.indices,e.radius,e.detail)}}class ap extends sp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ap(e.radius,e.detail)}}class Bn extends Ht{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],v=[],x=[],g=[];for(let u=0;u<d;u++){const _=u*f-a;for(let y=0;y<c;y++){const M=y*h-s;v.push(M,-_,0),x.push(0,0,1),g.push(y/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const y=_+c*u,M=_+c*(u+1),w=_+1+c*(u+1),T=_+1+c*u;m.push(y,M,T),m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class oa extends Ht{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new W,f=new W,m=[],v=[],x=[],g=[];for(let u=0;u<=i;u++){const _=[],y=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let w=0;w<=n;w++){const T=w/n;h.x=-e*Math.cos(r+T*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+y*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(T+M,1-y),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const y=d[u][_+1],M=d[u][_],w=d[u+1][_],T=d[u+1][_+1];(u!==0||a>0)&&m.push(y,M,T),(u!==i-1||l<Math.PI)&&m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bo extends Ht{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],d=new W,h=new W,f=new W;for(let m=0;m<=i;m++)for(let v=0;v<=r;v++){const x=v/r*s,g=m/i*Math.PI*2;h.x=(e+n*Math.cos(g))*Math.cos(x),h.y=(e+n*Math.cos(g))*Math.sin(x),h.z=n*Math.sin(g),o.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=r;v++){const x=(r+1)*m+v-1,g=(r+1)*(m-1)+v-1,u=(r+1)*(m-1)+v,_=(r+1)*m+v;a.push(x,g,_),a.push(g,u,_)}this.setIndex(a),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class UM extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class OM extends Do{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kM extends Do{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ys extends fx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zM extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _x{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Xm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function $m(t,e,n,i){const r=BM(i);switch(n){case rx:return t*e;case sx:return t*e/r.components*r.byteLength;case Kf:return t*e/r.components*r.byteLength;case ra:return t*e*2/r.components*r.byteLength;case Zf:return t*e*2/r.components*r.byteLength;case qf:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case Qf:return t*e*4/r.components*r.byteLength;case Gl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:case hh:return Math.max(t,16)*Math.max(e,8)/4;case ch:case dh:return Math.max(t,8)*Math.max(e,8)/2;case fh:case ph:case gh:case vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mh:case xh:case _h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lh:case Fh:case Uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Oh:case kh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zh:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BM(t){switch(t){case Jn:case ex:return{byteLength:1,components:1};case xo:case tx:case ii:return{byteLength:2,components:1};case $f:case Yf:return{byteLength:2,components:4};case Ii:case Xf:case Ci:return{byteLength:4,components:1};case nx:case ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function VM(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],x=h[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,h[f]=x)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const x=h[m];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
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
#endif`,jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YM=`#ifdef USE_AOMAP
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
#endif`,qM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
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
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t1=`#ifdef USE_IRIDESCENCE
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
#endif`,n1=`#ifdef USE_BUMPMAP
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
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d1=`#define PI 3.141592653589793
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
} // validated`,h1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f1=`vec3 transformedNormal = objectNormal;
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
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R1=`#ifdef USE_GRADIENTMAP
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
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I1=`uniform bool receiveShadow;
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
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,F1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z1=`PhysicalMaterial material;
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
#endif`,B1=`uniform sampler2D dfgLUT;
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
}`,V1=`
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
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
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z1=`#if defined( USE_POINTS_UV )
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
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,NE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
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
}`,YE=`#if DEPTH_PACKING == 3200
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
}`,qE=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#define LAMBERT
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
}`,rb=`#define LAMBERT
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
}`,sb=`#define MATCAP
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
}`,ab=`#define MATCAP
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
}`,ob=`#define NORMAL
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
}`,lb=`#define NORMAL
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
}`,cb=`#define PHONG
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
}`,ub=`#define PHONG
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
}`,db=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,pb=`#define TOON
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
}`,mb=`uniform float size;
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
}`,gb=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,xb=`uniform vec3 color;
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
}`,_b=`uniform float rotation;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:HM,alphahash_pars_fragment:GM,alphamap_fragment:jM,alphamap_pars_fragment:WM,alphatest_fragment:XM,alphatest_pars_fragment:$M,aomap_fragment:YM,aomap_pars_fragment:qM,batching_pars_vertex:KM,batching_vertex:ZM,begin_vertex:QM,beginnormal_vertex:JM,bsdfs:e1,iridescence_fragment:t1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:r1,clipping_planes_pars_vertex:s1,clipping_planes_vertex:a1,color_fragment:o1,color_pars_fragment:l1,color_pars_vertex:c1,color_vertex:u1,common:d1,cube_uv_reflection_fragment:h1,defaultnormal_vertex:f1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:v1,colorspace_fragment:x1,colorspace_pars_fragment:_1,envmap_fragment:y1,envmap_common_pars_fragment:S1,envmap_pars_fragment:M1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:L1,envmap_vertex:b1,fog_vertex:w1,fog_pars_vertex:T1,fog_fragment:C1,fog_pars_fragment:A1,gradientmap_pars_fragment:R1,lightmap_pars_fragment:P1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:D1,lights_pars_begin:I1,lights_toon_fragment:F1,lights_toon_pars_fragment:U1,lights_phong_fragment:O1,lights_phong_pars_fragment:k1,lights_physical_fragment:z1,lights_physical_pars_fragment:B1,lights_fragment_begin:V1,lights_fragment_maps:H1,lights_fragment_end:G1,logdepthbuf_fragment:j1,logdepthbuf_pars_fragment:W1,logdepthbuf_pars_vertex:X1,logdepthbuf_vertex:$1,map_fragment:Y1,map_pars_fragment:q1,map_particle_fragment:K1,map_particle_pars_fragment:Z1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:J1,morphinstance_vertex:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:aE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:xE,dithering_fragment:_E,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:bE,shadowmap_vertex:wE,shadowmask_pars_fragment:TE,skinbase_vertex:CE,skinning_pars_vertex:AE,skinning_vertex:RE,skinnormal_vertex:PE,specularmap_fragment:NE,specularmap_pars_fragment:DE,tonemapping_fragment:IE,tonemapping_pars_fragment:LE,transmission_fragment:FE,transmission_pars_fragment:UE,uv_pars_fragment:OE,uv_pars_vertex:kE,uv_vertex:zE,worldpos_vertex:BE,background_vert:VE,background_frag:HE,backgroundCube_vert:GE,backgroundCube_frag:jE,cube_vert:WE,cube_frag:XE,depth_vert:$E,depth_frag:YE,distance_vert:qE,distance_frag:KE,equirect_vert:ZE,equirect_frag:QE,linedashed_vert:JE,linedashed_frag:eb,meshbasic_vert:tb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:rb,meshmatcap_vert:sb,meshmatcap_frag:ab,meshnormal_vert:ob,meshnormal_frag:lb,meshphong_vert:cb,meshphong_frag:ub,meshphysical_vert:db,meshphysical_frag:hb,meshtoon_vert:fb,meshtoon_frag:pb,points_vert:mb,points_frag:gb,shadow_vert:vb,shadow_frag:xb,sprite_vert:_b,sprite_frag:yb},be={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},bi={basic:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:vn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:vn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:vn([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:vn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:vn([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:vn([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:vn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:vn([be.lights,be.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bi.physical={uniforms:vn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const El={r:0,b:0,g:0},Or=new Zi,Sb=new Ft;function Mb(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function v(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?n:e).get(M)),M}function x(y){let M=!1;const w=v(y);w===null?u(o,l):w&&w.isColor&&(u(w,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,M){const w=v(M);w&&(w.isCubeTexture||w.mapping===Bc)?(d===void 0&&(d=new ai(new Cr(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:aa(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Or.copy(M.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(Or)),d.material.toneMapped=st.getTransfer(w.colorSpace)!==ft,(h!==w||f!==w.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=w,f=w.version,m=t.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ai(new Bn(2,2),new Lt({name:"BackgroundMaterial",uniforms:aa(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,m=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,M){y.getRGB(El,hx(t)),i.buffers.color.setClear(El.r,El.g,El.b,M,a)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:x,addToRenderList:g,dispose:_}}function Eb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(b,I,V,z,D){let H=!1;const X=h(z,V,I);s!==X&&(s=X,c(s.object)),H=m(b,z,V,D),H&&v(b,z,V,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(b,I,V,z),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function d(b){return t.deleteVertexArray(b)}function h(b,I,V){const z=V.wireframe===!0;let D=i[b.id];D===void 0&&(D={},i[b.id]=D);let H=D[I.id];H===void 0&&(H={},D[I.id]=H);let X=H[z];return X===void 0&&(X=f(l()),H[z]=X),X}function f(b){const I=[],V=[],z=[];for(let D=0;D<n;D++)I[D]=0,V[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:z,object:b,attributes:{},index:null}}function m(b,I,V,z){const D=s.attributes,H=I.attributes;let X=0;const G=V.getAttributes();for(const U in G)if(G[U].location>=0){const q=D[U];let ne=H[U];if(ne===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),q===void 0||q.attribute!==ne||ne&&q.data!==ne.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function v(b,I,V,z){const D={},H=I.attributes;let X=0;const G=V.getAttributes();for(const U in G)if(G[U].location>=0){let q=H[U];q===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));const ne={};ne.attribute=q,q&&q.data&&(ne.data=q.data),D[U]=ne,X++}s.attributes=D,s.attributesNum=X,s.index=z}function x(){const b=s.newAttributes;for(let I=0,V=b.length;I<V;I++)b[I]=0}function g(b){u(b,0)}function u(b,I){const V=s.newAttributes,z=s.enabledAttributes,D=s.attributeDivisors;V[b]=1,z[b]===0&&(t.enableVertexAttribArray(b),z[b]=1),D[b]!==I&&(t.vertexAttribDivisor(b,I),D[b]=I)}function _(){const b=s.newAttributes,I=s.enabledAttributes;for(let V=0,z=I.length;V<z;V++)I[V]!==b[V]&&(t.disableVertexAttribArray(V),I[V]=0)}function y(b,I,V,z,D,H,X){X===!0?t.vertexAttribIPointer(b,I,V,D,H):t.vertexAttribPointer(b,I,V,z,D,H)}function M(b,I,V,z){x();const D=z.attributes,H=V.getAttributes(),X=I.defaultAttributeValues;for(const G in H){const U=H[G];if(U.location>=0){let $=D[G];if($===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){const q=$.normalized,ne=$.itemSize,se=e.get($);if(se===void 0)continue;const Ne=se.buffer,Ue=se.type,Ge=se.bytesPerElement,te=Ue===t.INT||Ue===t.UNSIGNED_INT||$.gpuType===Xf;if($.isInterleavedBufferAttribute){const ie=$.data,we=ie.stride,Oe=$.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)u(U.location+Me,ie.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<U.locationSize;Me++)g(U.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Me=0;Me<U.locationSize;Me++)y(U.location+Me,ne/U.locationSize,Ue,q,we*Ge,(Oe+ne/U.locationSize*Me)*Ge,te)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<U.locationSize;ie++)u(U.location+ie,$.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<U.locationSize;ie++)g(U.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ie=0;ie<U.locationSize;ie++)y(U.location+ie,ne/U.locationSize,Ue,q,ne*Ge,ne/U.locationSize*ie*Ge,te)}}else if(X!==void 0){const q=X[G];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(U.location,q);break;case 3:t.vertexAttrib3fv(U.location,q);break;case 4:t.vertexAttrib4fv(U.location,q);break;default:t.vertexAttrib1fv(U.location,q)}}}}_()}function w(){R();for(const b in i){const I=i[b];for(const V in I){const z=I[V];for(const D in z)d(z[D].object),delete z[D];delete I[V]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const V in I){const z=I[V];for(const D in z)d(z[D].object),delete z[D];delete I[V]}delete i[b.id]}function C(b){for(const I in i){const V=i[I];if(V[b.id]===void 0)continue;const z=V[b.id];for(const D in z)d(z[D].object),delete z[D];delete V[b.id]}}function R(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function bb(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],d[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x]*f[x];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ti&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ci&&!R)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(We("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:w,samples:T}}function Tb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?d(null):c();else{const _=s?0:i,y=_*4;let M=u.clippingState||null;l.value=M,M=d(v,f,y,m);for(let w=0;w!==y;++w)M[w]=n[w];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,v){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const u=m+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,M=m;y!==x;++y,M+=4)a.copy(h[y]).applyMatrix4(_,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Cb(t){let e=new WeakMap;function n(a,o){return o===sh?a.mapping=rs:o===ah&&(a.mapping=ia),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sh||o===ah)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mx(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const pr=4,Ym=[.125,.215,.35,.446,.526,.582],Gr=20,Ab=256,Da=new Ys,qm=new Ze;let Gu=null,ju=0,Wu=0,Xu=!1;const Rb=new W;class Km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Rb}=s;Gu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gu,ju,Wu),this._renderer.xr.enabled=Xu,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:ii,format:ti,colorSpace:sa,depthBuffer:!1},r=Zm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pb(s)),this._blurMaterial=Db(s,e,n),this._ggxMaterial=Nb(s,e,n)}return r}_compileMaterial(e){const n=new ai(new Ht,e);this._renderer.compile(n,Da)}_sceneToCubeUV(e,n,i,r,s){const l=new dn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(qm),h.toneMapping=Di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new Cr,new rp({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let u=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,u=!0):(g.color.copy(qm),u=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const w=this._cubeSize;Cs(r,M*w,y>2?w:0,w,w),h.setRenderTarget(r),u&&h.render(x,l),h.render(e,l)}h.toneMapping=m,h.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===rs||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Da)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=0+c*1.25,m=h*f,{_lodMax:v}=this,x=this._sizeLods[i],g=3*x*(i>v-pr?i-v+pr:0),u=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Cs(s,g,u,3*x,2*x),r.setRenderTarget(s),r.render(o,Da),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Cs(e,g,u,3*x,2*x),r.setRenderTarget(e),r.render(o,Da)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gr-1),x=s/v,g=isFinite(s)?1+Math.floor(d*x):Gr;g>Gr&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gr}`);const u=[];let _=0;for(let C=0;C<Gr;++C){const R=C/x,E=Math.exp(-R*R/2);u.push(E),C===0?_+=E:C<g&&(_+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const M=this._sizeLods[r],w=3*M*(r>y-pr?r-y+pr:0),T=4*(this._cubeSize-M);Cs(n,w,T,3*M,2*M),l.setRenderTarget(n),l.render(h,Da)}}function Pb(t){const e=[],n=[],i=[];let r=t;const s=t-pr+1+Ym.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-pr?l=Ym[a-t+pr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,x=3,g=2,u=1,_=new Float32Array(x*v*m),y=new Float32Array(g*v*m),M=new Float32Array(u*v*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,R=T>2?0:-1,E=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];_.set(E,x*v*T),y.set(f,g*v*T);const b=[T,T,T,T,T,T];M.set(b,u*v*T)}const w=new Ht;w.setAttribute("position",new hn(_,x)),w.setAttribute("uv",new hn(y,g)),w.setAttribute("faceIndex",new hn(M,u)),i.push(new ai(w,null)),r>pr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Zm(t,e,n){const i=new Dn(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Nb(t,e,n){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Db(t,e,n){const i=new Float32Array(Gr),r=new W(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Qm(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Jm(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function Ib(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sh||l===ah,d=l===rs||l===ia;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Km(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Km(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Lb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&yo("WebGLRenderer: "+i+" extension not supported."),r}}}function Fb(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,v=h.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let y=0,M=_.length;y<M;y+=3){const w=_[y+0],T=_[y+1],C=_[y+2];f.push(w,T,T,C,C,w)}}else if(v!==void 0){const _=v.array;x=v.version;for(let y=0,M=_.length/3-1;y<M;y+=3){const w=y+0,T=y+1,C=y+2;f.push(w,T,T,C,C,w)}}else return;const g=new(ax(f)?dx:ux)(f,1);g.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Ub(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,f*a,v),n.update(m,i,v))}function d(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let g=0;for(let u=0;u<v;u++)g+=m[u];n.update(g,i,1)}function h(f,m,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],x[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,v);let u=0;for(let _=0;_<v;_++)u+=m[_]*x[_];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Ob(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kb(t,e,n){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let b=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var m=b;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let w=o.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*h),R=new ox(C,w,T,h);R.type=Ci,R.needsUpdate=!0;const E=M*4;for(let I=0;I<h;I++){const V=u[I],z=_[I],D=y[I],H=w*T*4*I;for(let X=0;X<V.count;X++){const G=X*E;v===!0&&(r.fromBufferAttribute(V,X),C[H+G+0]=r.x,C[H+G+1]=r.y,C[H+G+2]=r.z,C[H+G+3]=0),x===!0&&(r.fromBufferAttribute(z,X),C[H+G+4]=r.x,C[H+G+5]=r.y,C[H+G+6]=r.z,C[H+G+7]=0),g===!0&&(r.fromBufferAttribute(D,X),C[H+G+8]=r.x,C[H+G+9]=r.y,C[H+G+10]=r.z,C[H+G+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Fe(w,T)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function zb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Bb={[Xv]:"LINEAR_TONE_MAPPING",[$v]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[qv]:"ACES_FILMIC_TONE_MAPPING",[Zv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[Kv]:"CUSTOM_TONE_MAPPING"};function Vb(t,e,n,i,r){const s=new Dn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new Dn(e,n,{type:ii,depthBuffer:!1,stencilBuffer:!1}),o=new Ht;o.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const l=new UM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ai(o,l),d=new Ys(-1,1,1,-1,0,1);let h=null,f=null,m=!1,v,x=null,g=[],u=!1;this.setSize=function(_,y){s.setSize(_,y),a.setSize(_,y);for(let M=0;M<g.length;M++){const w=g[M];w.setSize&&w.setSize(_,y)}},this.setEffects=function(_){g=_,u=g.length>0&&g[0].isRenderPass===!0;const y=s.width,M=s.height;for(let w=0;w<g.length;w++){const T=g[w];T.setSize&&T.setSize(y,M)}},this.begin=function(_,y){if(m||_.toneMapping===Di&&g.length===0)return!1;if(x=y,y!==null){const M=y.width,w=y.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return u===!1&&_.setRenderTarget(s),v=_.toneMapping,_.toneMapping=Di,!0},this.hasRenderPass=function(){return u},this.end=function(_,y){_.toneMapping=v,m=!0;let M=s,w=a;for(let T=0;T<g.length;T++){const C=g[T];if(C.enabled!==!1&&(C.render(_,w,M,y),C.needsSwap!==!1)){const R=M;M=w,w=R}}if(h!==_.outputColorSpace||f!==_.toneMapping){h=_.outputColorSpace,f=_.toneMapping,l.defines={},st.getTransfer(h)===ft&&(l.defines.SRGB_TRANSFER="");const T=Bb[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(x),_.render(c,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Sx=new en,Gh=new Mo(1,1),Mx=new ox,Ex=new hM,bx=new px,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function pa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gc(t,e){let n=tg[e];n===void 0&&(n=new Int32Array(e),tg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function Xb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Gt(n,i))return;rg.set(i),t.uniformMatrix2fv(this.addr,!1,rg),jt(n,i)}}function $b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Gt(n,i))return;ig.set(i),t.uniformMatrix3fv(this.addr,!1,ig),jt(n,i)}}function Yb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Gt(n,i))return;ng.set(i),t.uniformMatrix4fv(this.addr,!1,ng),jt(n,i)}}function qb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function Jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gh.compareFunction=n.isReversedDepthBuffer()?ep:Jf,s=Gh):s=Sx,n.setTexture2D(e||s,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ex,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||bx,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mx,r)}function ow(t){switch(t){case 5126:return Hb;case 35664:return Gb;case 35665:return jb;case 35666:return Wb;case 35674:return Xb;case 35675:return $b;case 35676:return Yb;case 5124:case 35670:return qb;case 35667:case 35671:return Kb;case 35668:case 35672:return Zb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}function lw(t,e){t.uniform1fv(this.addr,e)}function cw(t,e){const n=pa(e,this.size,2);t.uniform2fv(this.addr,n)}function uw(t,e){const n=pa(e,this.size,3);t.uniform3fv(this.addr,n)}function dw(t,e){const n=pa(e,this.size,4);t.uniform4fv(this.addr,n)}function hw(t,e){const n=pa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fw(t,e){const n=pa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pw(t,e){const n=pa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mw(t,e){t.uniform1iv(this.addr,e)}function gw(t,e){t.uniform2iv(this.addr,e)}function vw(t,e){t.uniform3iv(this.addr,e)}function xw(t,e){t.uniform4iv(this.addr,e)}function _w(t,e){t.uniform1uiv(this.addr,e)}function yw(t,e){t.uniform2uiv(this.addr,e)}function Sw(t,e){t.uniform3uiv(this.addr,e)}function Mw(t,e){t.uniform4uiv(this.addr,e)}function Ew(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Gh:a=Sx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function bw(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ex,s[a])}function ww(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||bx,s[a])}function Tw(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Mx,s[a])}function Cw(t){switch(t){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return dw;case 35674:return hw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return _w;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}class Aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ow(n.type)}}class Rw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Cw(n.type)}}class Pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function sg(t,e){t.seq.push(e),t.map[e.id]=e}function Nw(t,e,n){const i=t.name,r=i.length;for($u.lastIndex=0;;){const s=$u.exec(i),a=$u.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){sg(n,c===void 0?new Aw(o,t,e):new Rw(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Pw(o),sg(n,h)),n=h}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Nw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ag(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Dw=37297;let Iw=0;function Lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const og=new $e;function Fw(t){st._getMatrix(og,st.workingColorSpace,t);const e=`mat3( ${og.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case _c:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function lg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Lw(t.getShaderSource(e),o)}else return s}function Uw(t,e){const n=Fw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Ow={[Xv]:"Linear",[$v]:"Reinhard",[Yv]:"Cineon",[qv]:"ACESFilmic",[Zv]:"AgX",[Qv]:"Neutral",[Kv]:"Custom"};function kw(t,e){const n=Ow[e];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bl=new W;function zw(){st.getLuminanceCoefficients(bl);const t=bl.x.toFixed(4),e=bl.y.toFixed(4),n=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function Vw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Hw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Va(t){return t!==""}function cg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(t){return t.replace(Gw,Ww)}const jw=new Map;function Ww(t,e){let n=Ye[e];if(n===void 0){const i=jw.get(e);if(i!==void 0)n=Ye[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jh(n)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(t){return t.replace(Xw,$w)}function $w(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Yw={[Hl]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function qw(t){return Yw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kw={[rs]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function Zw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Kw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qw={[ia]:"ENVMAP_MODE_REFRACTION"};function Jw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eT={[Wv]:"ENVMAP_BLENDING_MULTIPLY",[PS]:"ENVMAP_BLENDING_MIX",[NS]:"ENVMAP_BLENDING_ADD"};function tT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":eT[t.combine]||"ENVMAP_BLENDING_NONE"}function nT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=qw(n),c=Zw(n),d=Jw(n),h=tT(n),f=nT(n),m=Bw(n),v=Vw(s),x=r.createProgram();let g,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Va).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Va).join(`
`),u.length>0&&(u+=`
`)):(g=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),u=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Di?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Uw("linearToOutputTexel",n.outputColorSpace),zw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),a=jh(a),a=cg(a,n),a=ug(a,n),o=jh(o),o=cg(o,n),o=ug(o,n),a=dg(a),o=dg(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=_+g+a,M=_+u+o,w=ag(r,r.VERTEX_SHADER,y),T=ag(r,r.FRAGMENT_SHADER,M);r.attachShader(x,w),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(w)||"",D=r.getShaderInfoLog(T)||"",H=V.trim(),X=z.trim(),G=D.trim();let U=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,T);else{const q=lg(r,w,"vertex"),ne=lg(r,T,"fragment");ct("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+q+`
`+ne)}else H!==""?We("WebGLProgram: Program Info Log:",H):(X===""||G==="")&&($=!1);$&&(I.diagnostics={runnable:U,programLog:H,vertexShader:{log:X,prefix:g},fragmentShader:{log:G,prefix:u}})}r.deleteShader(w),r.deleteShader(T),R=new $l(r,x),E=Hw(r,x)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,Dw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Iw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=rT++,this.code=e,this.usedTimes=0}}function oT(t,e,n,i,r,s,a){const o=new lx,l=new sT,c=new Set,d=[],h=new Map,f=r.logarithmicDepthBuffer;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,b,I,V,z){const D=V.fog,H=z.geometry,X=E.isMeshStandardMaterial?V.environment:null,G=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),U=G&&G.mapping===Bc?G.image.height:null,$=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&We("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=q!==void 0?q.length:0;let se=0;H.morphAttributes.position!==void 0&&(se=1),H.morphAttributes.normal!==void 0&&(se=2),H.morphAttributes.color!==void 0&&(se=3);let Ne,Ue,Ge,te;if($){const et=bi[$];Ne=et.vertexShader,Ue=et.fragmentShader}else Ne=E.vertexShader,Ue=E.fragmentShader,l.update(E),Ge=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const ie=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Oe=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,Xe=!!E.map,ut=!!E.matcap,je=!!G,Qe=!!E.aoMap,it=!!E.lightMap,Ve=!!E.bumpMap,gt=!!E.normalMap,O=!!E.displacementMap,dt=!!E.emissiveMap,Je=!!E.metalnessMap,ot=!!E.roughnessMap,Ae=E.anisotropy>0,P=E.clearcoat>0,S=E.dispersion>0,N=E.iridescence>0,k=E.sheen>0,ee=E.transmission>0,B=Ae&&!!E.anisotropyMap,ve=P&&!!E.clearcoatMap,le=P&&!!E.clearcoatNormalMap,_e=P&&!!E.clearcoatRoughnessMap,Re=N&&!!E.iridescenceMap,oe=N&&!!E.iridescenceThicknessMap,ce=k&&!!E.sheenColorMap,xe=k&&!!E.sheenRoughnessMap,L=!!E.specularMap,K=!!E.specularColorMap,ge=!!E.specularIntensityMap,F=ee&&!!E.transmissionMap,fe=ee&&!!E.thicknessMap,de=!!E.gradientMap,ye=!!E.alphaMap,he=E.alphaTest>0,re=!!E.alphaHash,me=!!E.extensions;let Le=Di;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=t.toneMapping);const nt={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Ne,fragmentShader:Ue,defines:E.defines,customVertexShaderID:Ge,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,instancingMorph:Oe&&z.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:sa,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:ut,envMap:je,envMapMode:je&&G.mapping,envMapCubeUVHeight:U,aoMap:Qe,lightMap:it,bumpMap:Ve,normalMap:gt,displacementMap:O,emissiveMap:dt,normalMapObjectSpace:gt&&E.normalMapType===FS,normalMapTangentSpace:gt&&E.normalMapType===LS,metalnessMap:Je,roughnessMap:ot,anisotropy:Ae,anisotropyMap:B,clearcoat:P,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:_e,dispersion:S,iridescence:N,iridescenceMap:Re,iridescenceThicknessMap:oe,sheen:k,sheenColorMap:ce,sheenRoughnessMap:xe,specularMap:L,specularColorMap:K,specularIntensityMap:ge,transmission:ee,transmissionMap:F,thicknessMap:fe,gradientMap:de,opaque:E.transparent===!1&&E.blending===Qr&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:he,alphaHash:re,combine:E.combine,mapUv:Xe&&x(E.map.channel),aoMapUv:Qe&&x(E.aoMap.channel),lightMapUv:it&&x(E.lightMap.channel),bumpMapUv:Ve&&x(E.bumpMap.channel),normalMapUv:gt&&x(E.normalMap.channel),displacementMapUv:O&&x(E.displacementMap.channel),emissiveMapUv:dt&&x(E.emissiveMap.channel),metalnessMapUv:Je&&x(E.metalnessMap.channel),roughnessMapUv:ot&&x(E.roughnessMap.channel),anisotropyMapUv:B&&x(E.anisotropyMap.channel),clearcoatMapUv:ve&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(E.sheenRoughnessMap.channel),specularMapUv:L&&x(E.specularMap.channel),specularColorMapUv:K&&x(E.specularColorMap.channel),specularIntensityMapUv:ge&&x(E.specularIntensityMap.channel),transmissionMapUv:F&&x(E.transmissionMap.channel),thicknessMapUv:fe&&x(E.thicknessMap.channel),alphaMapUv:ye&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(gt||Ae),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Xe||ye),fog:!!D,useFog:E.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:dt&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ti,flipSided:E.side===Nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:me&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&E.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function u(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)b.push(I),b.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(b,E),y(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function _(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const b=v[E.type];let I;if(b){const V=bi[b];I=Mc.clone(V.uniforms)}else I=E.uniforms;return I}function w(E,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new iT(t,b,E,s),d.push(I),h.set(b,I)),I}function T(E){if(--E.usedTimes===0){const b=d.indexOf(E);d[b]=d[d.length-1],d.pop(),h.delete(E.cacheKey),E.destroy()}}function C(E){l.remove(E)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:d,dispose:R}}function lT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function cT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,v,x,g){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:x,group:g},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=x,u.group=g),e++,u}function o(h,f,m,v,x,g){const u=a(h,f,m,v,x,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,v,x,g){const u=a(h,f,m,v,x,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||cT),i.length>1&&i.sort(f||fg),r.length>1&&r.sort(f||fg)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function uT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new pg,t.set(i,[a])):r>=s.length?(a=new pg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Ze};break;case"SpotLight":n={position:new W,direction:new W,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fT=0;function pT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mT(t){const e=new dT,n=hT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Ft,a=new Ft;function o(c){let d=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,v=0,x=0,g=0,u=0,_=0,y=0,M=0,w=0,T=0,C=0;c.sort(pT);for(let E=0,b=c.length;E<b;E++){const I=c[E],V=I.color,z=I.intensity,D=I.distance;let H=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ra?H=I.shadow.map.texture:H=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=V.r*z,h+=V.g*z,f+=V.b*z;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],z);C++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,U=n.get(I);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=X,m++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(V).multiplyScalar(z),X.distance=D,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[x]=X;const G=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,G.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[x]=G.matrix,I.castShadow){const U=n.get(I);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=H,M++}x++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(V).multiplyScalar(z),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=X,g++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const G=I.shadow,U=n.get(I);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=I.shadow.matrix,y++}i.point[v]=X,v++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(z),X.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[u]=X,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==M||R.numSpotMaps!==w||R.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,R.directionalLength=m,R.pointLength=v,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=M,R.numSpotMaps=w,R.numLightProbes=C,i.version=fT++)}function l(c,d){let h=0,f=0,m=0,v=0,x=0;const g=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const y=c[u];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(y.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function mg(t){const e=new mT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new mg(t),e.set(r,[o])):s>=a.length?(o=new mg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
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
}`,_T=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],yT=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],gg=new Ft,Ia=new W,Yu=new W;function ST(t,e,n){let i=new vx;const r=new Fe,s=new Fe,a=new It,o=new OM,l=new kM,c={},d=n.maxTextureSize,h={[Tr]:Nn,[Nn]:Tr,[Ti]:Ti},f=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:vT,fragmentShader:xT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ht;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ai(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let u=this.type;this.render=function(T,C,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;T.type===dS&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Hl);const E=t.getRenderTarget(),b=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ni),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=u!==this.type;z&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=T.length;D<H;D++){const X=T[D],G=X.shadow;if(G===void 0){We("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const U=G.getFrameExtents();if(r.multiply(U),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/U.x),r.x=s.x*U.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/U.y),r.y=s.y*U.y,G.mapSize.y=s.y)),G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===za){if(X.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Dn(r.x,r.y,{format:ra,type:ii,minFilter:Et,magFilter:Et,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Mo(r.x,r.y,Ci),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Ki,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt}else{X.isPointLight?(G.map=new mx(r.x),G.map.depthTexture=new FM(r.x,Ii)):(G.map=new Dn(r.x,r.y),G.map.depthTexture=new Mo(r.x,r.y,Ii)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Ki;const q=t.state.buffers.depth.getReversed();this.type===Hl?(G.map.depthTexture.compareFunction=q?ep:Jf,G.map.depthTexture.minFilter=Et,G.map.depthTexture.magFilter=Et):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt)}G.camera.updateProjectionMatrix()}const $=G.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<$;q++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,q),t.clear();else{q===0&&(t.setRenderTarget(G.map),t.clear());const ne=G.getViewport(q);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),V.viewport(a)}if(X.isPointLight){const ne=G.camera,se=G.matrix,Ne=X.distance||ne.far;Ne!==ne.far&&(ne.far=Ne,ne.updateProjectionMatrix()),Ia.setFromMatrixPosition(X.matrixWorld),ne.position.copy(Ia),Yu.copy(ne.position),Yu.add(_T[q]),ne.up.copy(yT[q]),ne.lookAt(Yu),ne.updateMatrixWorld(),se.makeTranslation(-Ia.x,-Ia.y,-Ia.z),gg.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),G._frustum.setFromProjectionMatrix(gg,ne.coordinateSystem,ne.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),M(C,R,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===za&&_(G,R),G.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,b,I)};function _(T,C){const R=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dn(r.x,r.y,{format:ra,type:ii})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,R,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,R,m,x,null)}function y(T,C,R,E){let b=null;const I=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)b=I;else if(b=R.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const V=b.uuid,z=C.uuid;let D=c[V];D===void 0&&(D={},c[V]=D);let H=D[z];H===void 0&&(H=b.clone(),D[z]=H,C.addEventListener("dispose",w)),b=H}if(b.visible=C.visible,b.wireframe=C.wireframe,E===za?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=t.properties.get(b);V.light=R}return b}function M(T,C,R,E,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===za)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const z=e.update(T),D=T.material;if(Array.isArray(D)){const H=z.groups;for(let X=0,G=H.length;X<G;X++){const U=H[X],$=D[U.materialIndex];if($&&$.visible){const q=y(T,$,E,b);T.onBeforeShadow(t,T,C,R,z,q,U),t.renderBufferDirect(R,null,z,q,T,U),T.onAfterShadow(t,T,C,R,z,q,U)}}}else if(D.visible){const H=y(T,D,E,b);T.onBeforeShadow(t,T,C,R,z,H,null),t.renderBufferDirect(R,null,z,H,T,null),T.onAfterShadow(t,T,C,R,z,H,null)}}const V=T.children;for(let z=0,D=V.length;z<D;z++)M(V[z],C,R,E,b)}function w(T){T.target.removeEventListener("dispose",w);for(const R in c){const E=c[R],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const MT={[Qd]:Jd,[eh]:ih,[th]:rh,[na]:nh,[Jd]:Qd,[ih]:eh,[rh]:th,[nh]:na};function ET(t,e){function n(){let F=!1;const fe=new It;let de=null;const ye=new It(0,0,0,0);return{setMask:function(he){de!==he&&!F&&(t.colorMask(he,he,he,he),de=he)},setLocked:function(he){F=he},setClear:function(he,re,me,Le,nt){nt===!0&&(he*=Le,re*=Le,me*=Le),fe.set(he,re,me,Le),ye.equals(fe)===!1&&(t.clearColor(he,re,me,Le),ye.copy(fe))},reset:function(){F=!1,de=null,ye.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,de=null,ye=null,he=null;return{setReversed:function(re){if(fe!==re){const me=e.get("EXT_clip_control");re?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Le=he;he=null,this.setClear(Le)}},getReversed:function(){return fe},setTest:function(re){re?ie(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(re){de!==re&&!F&&(t.depthMask(re),de=re)},setFunc:function(re){if(fe&&(re=MT[re]),ye!==re){switch(re){case Qd:t.depthFunc(t.NEVER);break;case Jd:t.depthFunc(t.ALWAYS);break;case eh:t.depthFunc(t.LESS);break;case na:t.depthFunc(t.LEQUAL);break;case th:t.depthFunc(t.EQUAL);break;case nh:t.depthFunc(t.GEQUAL);break;case ih:t.depthFunc(t.GREATER);break;case rh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=re}},setLocked:function(re){F=re},setClear:function(re){he!==re&&(fe&&(re=1-re),t.clearDepth(re),he=re)},reset:function(){F=!1,de=null,ye=null,he=null,fe=!1}}}function r(){let F=!1,fe=null,de=null,ye=null,he=null,re=null,me=null,Le=null,nt=null;return{setTest:function(et){F||(et?ie(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(et){fe!==et&&!F&&(t.stencilMask(et),fe=et)},setFunc:function(et,zt,nn){(de!==et||ye!==zt||he!==nn)&&(t.stencilFunc(et,zt,nn),de=et,ye=zt,he=nn)},setOp:function(et,zt,nn){(re!==et||me!==zt||Le!==nn)&&(t.stencilOp(et,zt,nn),re=et,me=zt,Le=nn)},setLocked:function(et){F=et},setClear:function(et){nt!==et&&(t.clearStencil(et),nt=et)},reset:function(){F=!1,fe=null,de=null,ye=null,he=null,re=null,me=null,Le=null,nt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],v=null,x=!1,g=null,u=null,_=null,y=null,M=null,w=null,T=null,C=new Ze(0,0,0),R=0,E=!1,b=null,I=null,V=null,z=null,D=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),X=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),X=G>=2);let $=null,q={};const ne=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ne=new It().fromArray(ne),Ue=new It().fromArray(se);function Ge(F,fe,de,ye){const he=new Uint8Array(4),re=t.createTexture();t.bindTexture(F,re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let me=0;me<de;me++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(fe+me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return re}const te={};te[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(na),Ve(!1),gt(_m),ie(t.CULL_FACE),Qe(Ni);function ie(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function we(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Oe(F,fe){return h[F]!==fe?(t.bindFramebuffer(F,fe),h[F]=fe,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Me(F,fe){let de=m,ye=!1;if(F){de=f.get(fe),de===void 0&&(de=[],f.set(fe,de));const he=F.textures;if(de.length!==he.length||de[0]!==t.COLOR_ATTACHMENT0){for(let re=0,me=he.length;re<me;re++)de[re]=t.COLOR_ATTACHMENT0+re;de.length=he.length,ye=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,ye=!0);ye&&t.drawBuffers(de)}function Xe(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const ut={[Hr]:t.FUNC_ADD,[fS]:t.FUNC_SUBTRACT,[pS]:t.FUNC_REVERSE_SUBTRACT};ut[mS]=t.MIN,ut[gS]=t.MAX;const je={[vS]:t.ZERO,[xS]:t.ONE,[_S]:t.SRC_COLOR,[Kd]:t.SRC_ALPHA,[wS]:t.SRC_ALPHA_SATURATE,[ES]:t.DST_COLOR,[SS]:t.DST_ALPHA,[yS]:t.ONE_MINUS_SRC_COLOR,[Zd]:t.ONE_MINUS_SRC_ALPHA,[bS]:t.ONE_MINUS_DST_COLOR,[MS]:t.ONE_MINUS_DST_ALPHA,[TS]:t.CONSTANT_COLOR,[CS]:t.ONE_MINUS_CONSTANT_COLOR,[AS]:t.CONSTANT_ALPHA,[RS]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,fe,de,ye,he,re,me,Le,nt,et){if(F===Ni){x===!0&&(we(t.BLEND),x=!1);return}if(x===!1&&(ie(t.BLEND),x=!0),F!==hS){if(F!==g||et!==E){if((u!==Hr||M!==Hr)&&(t.blendEquation(t.FUNC_ADD),u=Hr,M=Hr),et)switch(F){case Qr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vo:t.blendFunc(t.ONE,t.ONE);break;case ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",F);break}else switch(F){case Qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ym:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sm:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",F);break}_=null,y=null,w=null,T=null,C.set(0,0,0),R=0,g=F,E=et}return}he=he||fe,re=re||de,me=me||ye,(fe!==u||he!==M)&&(t.blendEquationSeparate(ut[fe],ut[he]),u=fe,M=he),(de!==_||ye!==y||re!==w||me!==T)&&(t.blendFuncSeparate(je[de],je[ye],je[re],je[me]),_=de,y=ye,w=re,T=me),(Le.equals(C)===!1||nt!==R)&&(t.blendColor(Le.r,Le.g,Le.b,nt),C.copy(Le),R=nt),g=F,E=!1}function it(F,fe){F.side===Ti?we(t.CULL_FACE):ie(t.CULL_FACE);let de=F.side===Nn;fe&&(de=!de),Ve(de),F.blending===Qr&&F.transparent===!1?Qe(Ni):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ye=F.stencilWrite;o.setTest(ye),ye&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){b!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),b=F)}function gt(F){F!==cS?(ie(t.CULL_FACE),F!==I&&(F===_m?t.cullFace(t.BACK):F===uS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),I=F}function O(F){F!==V&&(X&&t.lineWidth(F),V=F)}function dt(F,fe,de){F?(ie(t.POLYGON_OFFSET_FILL),(z!==fe||D!==de)&&(t.polygonOffset(fe,de),z=fe,D=de)):we(t.POLYGON_OFFSET_FILL)}function Je(F){F?ie(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function ot(F){F===void 0&&(F=t.TEXTURE0+H-1),$!==F&&(t.activeTexture(F),$=F)}function Ae(F,fe,de){de===void 0&&($===null?de=t.TEXTURE0+H-1:de=$);let ye=q[de];ye===void 0&&(ye={type:void 0,texture:void 0},q[de]=ye),(ye.type!==F||ye.texture!==fe)&&($!==de&&(t.activeTexture(de),$=de),t.bindTexture(F,fe||te[F]),ye.type=F,ye.texture=fe)}function P(){const F=q[$];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function k(){try{t.texSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function ee(){try{t.texSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function B(){try{t.compressedTexSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function le(){try{t.texStorage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function _e(){try{t.texStorage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function Re(){try{t.texImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function oe(){try{t.texImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function ce(F){Ne.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ne.copy(F))}function xe(F){Ue.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function L(F,fe){let de=c.get(fe);de===void 0&&(de=new WeakMap,c.set(fe,de));let ye=de.get(F);ye===void 0&&(ye=t.getUniformBlockIndex(fe,F.name),de.set(F,ye))}function K(F,fe){const ye=c.get(fe).get(F);l.get(fe)!==ye&&(t.uniformBlockBinding(fe,ye,F.__bindingPointIndex),l.set(fe,ye))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,q={},h={},f=new WeakMap,m=[],v=null,x=!1,g=null,u=null,_=null,y=null,M=null,w=null,T=null,C=new Ze(0,0,0),R=0,E=!1,b=null,I=null,V=null,z=null,D=null,Ne.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:we,bindFramebuffer:Oe,drawBuffers:Me,useProgram:Xe,setBlending:Qe,setMaterial:it,setFlipSided:Ve,setCullFace:gt,setLineWidth:O,setPolygonOffset:dt,setScissorTest:Je,activeTexture:ot,bindTexture:Ae,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:N,texImage2D:Re,texImage3D:oe,updateUBOMapping:L,uniformBlockBinding:K,texStorage2D:le,texStorage3D:_e,texSubImage2D:k,texSubImage3D:ee,compressedTexSubImage2D:B,compressedTexSubImage3D:ve,scissor:ce,viewport:xe,reset:ge}}function bT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return m?new OffscreenCanvas(P,S):Sc("canvas")}function x(P,S,N){let k=1;const ee=Ae(P);if((ee.width>N||ee.height>N)&&(k=N/Math.max(ee.width,ee.height)),k<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const B=Math.floor(k*ee.width),ve=Math.floor(k*ee.height);h===void 0&&(h=v(B,ve));const le=S?v(B,ve):h;return le.width=B,le.height=ve,le.getContext("2d").drawImage(P,0,0,B,ve),We("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+B+"x"+ve+")."),le}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function g(P){return P.generateMipmaps}function u(P){t.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,S,N,k,ee=!1){if(P!==null){if(t[P]!==void 0)return t[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B=S;if(S===t.RED&&(N===t.FLOAT&&(B=t.R32F),N===t.HALF_FLOAT&&(B=t.R16F),N===t.UNSIGNED_BYTE&&(B=t.R8)),S===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.R8UI),N===t.UNSIGNED_SHORT&&(B=t.R16UI),N===t.UNSIGNED_INT&&(B=t.R32UI),N===t.BYTE&&(B=t.R8I),N===t.SHORT&&(B=t.R16I),N===t.INT&&(B=t.R32I)),S===t.RG&&(N===t.FLOAT&&(B=t.RG32F),N===t.HALF_FLOAT&&(B=t.RG16F),N===t.UNSIGNED_BYTE&&(B=t.RG8)),S===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.RG8UI),N===t.UNSIGNED_SHORT&&(B=t.RG16UI),N===t.UNSIGNED_INT&&(B=t.RG32UI),N===t.BYTE&&(B=t.RG8I),N===t.SHORT&&(B=t.RG16I),N===t.INT&&(B=t.RG32I)),S===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.RGB8UI),N===t.UNSIGNED_SHORT&&(B=t.RGB16UI),N===t.UNSIGNED_INT&&(B=t.RGB32UI),N===t.BYTE&&(B=t.RGB8I),N===t.SHORT&&(B=t.RGB16I),N===t.INT&&(B=t.RGB32I)),S===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(B=t.RGBA16UI),N===t.UNSIGNED_INT&&(B=t.RGBA32UI),N===t.BYTE&&(B=t.RGBA8I),N===t.SHORT&&(B=t.RGBA16I),N===t.INT&&(B=t.RGBA32I)),S===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(B=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(B=t.R11F_G11F_B10F)),S===t.RGBA){const ve=ee?_c:st.getTransfer(k);N===t.FLOAT&&(B=t.RGBA32F),N===t.HALF_FLOAT&&(B=t.RGBA16F),N===t.UNSIGNED_BYTE&&(B=ve===ft?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(B=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(B=t.RGB5_A1)}return(B===t.R16F||B===t.R32F||B===t.RG16F||B===t.RG32F||B===t.RGBA16F||B===t.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function M(P,S){let N;return P?S===null||S===Ii||S===_o?N=t.DEPTH24_STENCIL8:S===Ci?N=t.DEPTH32F_STENCIL8:S===xo&&(N=t.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ii||S===_o?N=t.DEPTH_COMPONENT24:S===Ci?N=t.DEPTH_COMPONENT32F:S===xo&&(N=t.DEPTH_COMPONENT16),N}function w(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==Et?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){const S=P.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&d.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),b(S)}function R(P){const S=i.get(P);if(S.__webglInit===void 0)return;const N=P.source,k=f.get(N);if(k){const ee=k[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(P),Object.keys(k).length===0&&f.delete(N)}i.remove(P)}function E(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const N=P.source,k=f.get(N);delete k[S.__cacheKey],a.memory.textures--}function b(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(S.__webglFramebuffer[k]))for(let ee=0;ee<S.__webglFramebuffer[k].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[k][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[k]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[k])}else{if(Array.isArray(S.__webglFramebuffer))for(let k=0;k<S.__webglFramebuffer.length;k++)t.deleteFramebuffer(S.__webglFramebuffer[k]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let k=0;k<S.__webglColorRenderbuffer.length;k++)S.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[k]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=P.textures;for(let k=0,ee=N.length;k<ee;k++){const B=i.get(N[k]);B.__webglTexture&&(t.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(N[k])}i.remove(P)}let I=0;function V(){I=0}function z(){const P=I;return P>=r.maxTextures&&We("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function D(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function H(P,S){const N=i.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&N.__version!==P.version){const k=P.image;if(k===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{te(N,P,S);return}}else P.isExternalTexture&&(N.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+S)}function X(P,S){const N=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){te(N,P,S);return}else P.isExternalTexture&&(N.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+S)}function G(P,S){const N=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){te(N,P,S);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+S)}function U(P,S){const N=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&N.__version!==P.version){ie(N,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+S)}const $={[oh]:t.REPEAT,[Hn]:t.CLAMP_TO_EDGE,[lh]:t.MIRRORED_REPEAT},q={[Qt]:t.NEAREST,[DS]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[Et]:t.LINEAR,[yu]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},ne={[US]:t.NEVER,[VS]:t.ALWAYS,[OS]:t.LESS,[Jf]:t.LEQUAL,[kS]:t.EQUAL,[ep]:t.GEQUAL,[zS]:t.GREATER,[BS]:t.NOTEQUAL};function se(P,S){if(S.type===Ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Et||S.magFilter===yu||S.magFilter===il||S.magFilter===$r||S.minFilter===Et||S.minFilter===yu||S.minFilter===il||S.minFilter===$r)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,$[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,$[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,$[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,q[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==il&&S.minFilter!==$r||S.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ne(P,S){let N=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));const k=S.source;let ee=f.get(k);ee===void 0&&(ee={},f.set(k,ee));const B=D(S);if(B!==P.__cacheKey){ee[B]===void 0&&(ee[B]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ee[B].usedTimes++;const ve=ee[P.__cacheKey];ve!==void 0&&(ee[P.__cacheKey].usedTimes--,ve.usedTimes===0&&E(S)),P.__cacheKey=B,P.__webglTexture=ee[B].texture}return N}function Ue(P,S,N){return Math.floor(Math.floor(P/N)/S)}function Ge(P,S,N,k){const B=P.updateRanges;if(B.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,N,k,S.data);else{B.sort((oe,ce)=>oe.start-ce.start);let ve=0;for(let oe=1;oe<B.length;oe++){const ce=B[ve],xe=B[oe],L=ce.start+ce.count,K=Ue(xe.start,S.width,4),ge=Ue(ce.start,S.width,4);xe.start<=L+1&&K===ge&&Ue(xe.start+xe.count-1,S.width,4)===K?ce.count=Math.max(ce.count,xe.start+xe.count-ce.start):(++ve,B[ve]=xe)}B.length=ve+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),_e=t.getParameter(t.UNPACK_SKIP_PIXELS),Re=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let oe=0,ce=B.length;oe<ce;oe++){const xe=B[oe],L=Math.floor(xe.start/4),K=Math.ceil(xe.count/4),ge=L%S.width,F=Math.floor(L/S.width),fe=K,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,ge,F,fe,de,N,k,S.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(t.UNPACK_SKIP_ROWS,Re)}}function te(P,S,N){let k=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=t.TEXTURE_3D);const ee=Ne(P,S),B=S.source;n.bindTexture(k,P.__webglTexture,t.TEXTURE0+N);const ve=i.get(B);if(B.version!==ve.__version||ee===!0){n.activeTexture(t.TEXTURE0+N);const le=st.getPrimaries(st.workingColorSpace),_e=S.colorSpace===dr?null:st.getPrimaries(S.colorSpace),Re=S.colorSpace===dr||le===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=x(S.image,!1,r.maxTextureSize);oe=ot(S,oe);const ce=s.convert(S.format,S.colorSpace),xe=s.convert(S.type);let L=y(S.internalFormat,ce,xe,S.colorSpace,S.isVideoTexture);se(k,S);let K;const ge=S.mipmaps,F=S.isVideoTexture!==!0,fe=ve.__version===void 0||ee===!0,de=B.dataReady,ye=w(S,oe);if(S.isDepthTexture)L=M(S.format===Yr,S.type),fe&&(F?n.texStorage2D(t.TEXTURE_2D,1,L,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,L,oe.width,oe.height,0,ce,xe,null));else if(S.isDataTexture)if(ge.length>0){F&&fe&&n.texStorage2D(t.TEXTURE_2D,ye,L,ge[0].width,ge[0].height);for(let he=0,re=ge.length;he<re;he++)K=ge[he],F?de&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,K.width,K.height,ce,xe,K.data):n.texImage2D(t.TEXTURE_2D,he,L,K.width,K.height,0,ce,xe,K.data);S.generateMipmaps=!1}else F?(fe&&n.texStorage2D(t.TEXTURE_2D,ye,L,oe.width,oe.height),de&&Ge(S,oe,ce,xe)):n.texImage2D(t.TEXTURE_2D,0,L,oe.width,oe.height,0,ce,xe,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,L,ge[0].width,ge[0].height,oe.depth);for(let he=0,re=ge.length;he<re;he++)if(K=ge[he],S.format!==ti)if(ce!==null)if(F){if(de)if(S.layerUpdates.size>0){const me=$m(K.width,K.height,S.format,S.type);for(const Le of S.layerUpdates){const nt=K.data.subarray(Le*me/K.data.BYTES_PER_ELEMENT,(Le+1)*me/K.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,Le,K.width,K.height,1,ce,nt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,K.width,K.height,oe.depth,ce,K.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,L,K.width,K.height,oe.depth,0,K.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,K.width,K.height,oe.depth,ce,xe,K.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,L,K.width,K.height,oe.depth,0,ce,xe,K.data)}else{F&&fe&&n.texStorage2D(t.TEXTURE_2D,ye,L,ge[0].width,ge[0].height);for(let he=0,re=ge.length;he<re;he++)K=ge[he],S.format!==ti?ce!==null?F?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,K.width,K.height,ce,K.data):n.compressedTexImage2D(t.TEXTURE_2D,he,L,K.width,K.height,0,K.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?de&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,K.width,K.height,ce,xe,K.data):n.texImage2D(t.TEXTURE_2D,he,L,K.width,K.height,0,ce,xe,K.data)}else if(S.isDataArrayTexture)if(F){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,L,oe.width,oe.height,oe.depth),de)if(S.layerUpdates.size>0){const he=$m(oe.width,oe.height,S.format,S.type);for(const re of S.layerUpdates){const me=oe.data.subarray(re*he/oe.data.BYTES_PER_ELEMENT,(re+1)*he/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,ce,xe,me)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ce,xe,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,L,oe.width,oe.height,oe.depth,0,ce,xe,oe.data);else if(S.isData3DTexture)F?(fe&&n.texStorage3D(t.TEXTURE_3D,ye,L,oe.width,oe.height,oe.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ce,xe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,L,oe.width,oe.height,oe.depth,0,ce,xe,oe.data);else if(S.isFramebufferTexture){if(fe)if(F)n.texStorage2D(t.TEXTURE_2D,ye,L,oe.width,oe.height);else{let he=oe.width,re=oe.height;for(let me=0;me<ye;me++)n.texImage2D(t.TEXTURE_2D,me,L,he,re,0,ce,xe,null),he>>=1,re>>=1}}else if(ge.length>0){if(F&&fe){const he=Ae(ge[0]);n.texStorage2D(t.TEXTURE_2D,ye,L,he.width,he.height)}for(let he=0,re=ge.length;he<re;he++)K=ge[he],F?de&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ce,xe,K):n.texImage2D(t.TEXTURE_2D,he,L,ce,xe,K);S.generateMipmaps=!1}else if(F){if(fe){const he=Ae(oe);n.texStorage2D(t.TEXTURE_2D,ye,L,he.width,he.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,xe,oe)}else n.texImage2D(t.TEXTURE_2D,0,L,ce,xe,oe);g(S)&&u(k),ve.__version=B.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ie(P,S,N){if(S.image.length!==6)return;const k=Ne(P,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+N);const B=i.get(ee);if(ee.version!==B.__version||k===!0){n.activeTexture(t.TEXTURE0+N);const ve=st.getPrimaries(st.workingColorSpace),le=S.colorSpace===dr?null:st.getPrimaries(S.colorSpace),_e=S.colorSpace===dr||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let re=0;re<6;re++)!Re&&!oe?ce[re]=x(S.image[re],!0,r.maxCubemapSize):ce[re]=oe?S.image[re].image:S.image[re],ce[re]=ot(S,ce[re]);const xe=ce[0],L=s.convert(S.format,S.colorSpace),K=s.convert(S.type),ge=y(S.internalFormat,L,K,S.colorSpace),F=S.isVideoTexture!==!0,fe=B.__version===void 0||k===!0,de=ee.dataReady;let ye=w(S,xe);se(t.TEXTURE_CUBE_MAP,S);let he;if(Re){F&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,ge,xe.width,xe.height);for(let re=0;re<6;re++){he=ce[re].mipmaps;for(let me=0;me<he.length;me++){const Le=he[me];S.format!==ti?L!==null?F?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Le.width,Le.height,L,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,ge,Le.width,Le.height,0,Le.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Le.width,Le.height,L,K,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,ge,Le.width,Le.height,0,L,K,Le.data)}}}else{if(he=S.mipmaps,F&&fe){he.length>0&&ye++;const re=Ae(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,ge,re.width,re.height)}for(let re=0;re<6;re++)if(oe){F?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ce[re].width,ce[re].height,L,K,ce[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,ce[re].width,ce[re].height,0,L,K,ce[re].data);for(let me=0;me<he.length;me++){const nt=he[me].image[re].image;F?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,nt.width,nt.height,L,K,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,ge,nt.width,nt.height,0,L,K,nt.data)}}else{F?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,L,K,ce[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,L,K,ce[re]);for(let me=0;me<he.length;me++){const Le=he[me];F?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,L,K,Le.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,ge,L,K,Le.image[re])}}}g(S)&&u(t.TEXTURE_CUBE_MAP),B.__version=ee.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function we(P,S,N,k,ee,B){const ve=s.convert(N.format,N.colorSpace),le=s.convert(N.type),_e=y(N.internalFormat,ve,le,N.colorSpace),Re=i.get(S),oe=i.get(N);if(oe.__renderTarget=S,!Re.__hasExternalTextures){const ce=Math.max(1,S.width>>B),xe=Math.max(1,S.height>>B);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,B,_e,ce,xe,S.depth,0,ve,le,null):n.texImage2D(ee,B,_e,ce,xe,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,ee,oe.__webglTexture,0,O(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,ee,oe.__webglTexture,B),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(P,S,N){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const k=S.depthTexture,ee=k&&k.isDepthTexture?k.type:null,B=M(S.stencilBuffer,ee),ve=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O(S),B,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,O(S),B,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,B,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,P)}else{const k=S.textures;for(let ee=0;ee<k.length;ee++){const B=k[ee],ve=s.convert(B.format,B.colorSpace),le=s.convert(B.type),_e=y(B.internalFormat,ve,le,B.colorSpace);dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O(S),_e,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,O(S),_e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,_e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(P,S,N){const k=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),se(t.TEXTURE_CUBE_MAP,S.depthTexture);const Re=s.convert(S.depthTexture.format),oe=s.convert(S.depthTexture.type);let ce;S.depthTexture.format===Ki?ce=t.DEPTH_COMPONENT24:S.depthTexture.format===Yr&&(ce=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,S.width,S.height,0,Re,oe,null)}}else H(S.depthTexture,0);const B=ee.__webglTexture,ve=O(S),le=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,_e=S.depthTexture.format===Yr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ki)dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,le,B,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,_e,le,B,0);else if(S.depthTexture.format===Yr)dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,le,B,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,_e,le,B,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const S=i.get(P),N=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const k=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",ee)};k.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=k}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)Me(S.__webglFramebuffer[k],P,k);else{const k=P.texture.mipmaps;k&&k.length>0?Me(S.__webglFramebuffer[0],P,0):Me(S.__webglFramebuffer,P,0)}else if(N){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=t.createRenderbuffer(),Oe(S.__webglDepthbuffer[k],P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,B)}}else{const k=P.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Oe(S.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,B)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(P,S,N){const k=i.get(P);S!==void 0&&we(k.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Xe(P)}function je(P){const S=P.texture,N=i.get(P),k=i.get(S);P.addEventListener("dispose",C);const ee=P.textures,B=P.isWebGLCubeRenderTarget===!0,ve=ee.length>1;if(ve||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=S.version,a.memory.textures++),B){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let _e=0;_e<S.mipmaps.length;_e++)N.__webglFramebuffer[le][_e]=t.createFramebuffer()}else N.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)N.__webglFramebuffer[le]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ve)for(let le=0,_e=ee.length;le<_e;le++){const Re=i.get(ee[le]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&dt(P)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const _e=ee[le];N.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Re=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),ce=y(_e.internalFormat,Re,oe,_e.colorSpace,P.isXRRenderTarget===!0),xe=O(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ce,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,N.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(N.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(B){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)we(N.__webglFramebuffer[le][_e],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e);else we(N.__webglFramebuffer[le],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let le=0,_e=ee.length;le<_e;le++){const Re=ee[le],oe=i.get(Re);let ce=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,oe.__webglTexture),se(ce,Re),we(N.__webglFramebuffer,P,Re,t.COLOR_ATTACHMENT0+le,ce,0),g(Re)&&u(ce)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,k.__webglTexture),se(le,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)we(N.__webglFramebuffer[_e],P,S,t.COLOR_ATTACHMENT0,le,_e);else we(N.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,le,0);g(S)&&u(le),n.unbindTexture()}P.depthBuffer&&Xe(P)}function Qe(P){const S=P.textures;for(let N=0,k=S.length;N<k;N++){const ee=S[N];if(g(ee)){const B=_(P),ve=i.get(ee).__webglTexture;n.bindTexture(B,ve),u(B),n.unbindTexture()}}}const it=[],Ve=[];function gt(P){if(P.samples>0){if(dt(P)===!1){const S=P.textures,N=P.width,k=P.height;let ee=t.COLOR_BUFFER_BIT;const B=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(P),le=S.length>1;if(le)for(let Re=0;Re<S.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const _e=P.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const oe=i.get(S[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,N,k,0,0,N,k,ee,t.NEAREST),l===!0&&(it.length=0,Ve.length=0,it.push(t.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(it.push(B),Ve.push(B),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Re=0;Re<S.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const oe=i.get(S[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function O(P){return Math.min(r.maxSamples,P.samples)}function dt(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Je(P){const S=a.render.frame;d.get(P)!==S&&(d.set(P,S),P.update())}function ot(P,S){const N=P.colorSpace,k=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||N!==sa&&N!==dr&&(st.getTransfer(N)===ft?(k!==ti||ee!==Jn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",N)),S}function Ae(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=U,this.rebindTextures=ut,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wT(t,e){function n(i,r=dr){let s;const a=st.getTransfer(r);if(i===Jn)return t.UNSIGNED_BYTE;if(i===$f)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ix)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ex)return t.BYTE;if(i===tx)return t.SHORT;if(i===xo)return t.UNSIGNED_SHORT;if(i===Xf)return t.INT;if(i===Ii)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===ii)return t.HALF_FLOAT;if(i===rx)return t.ALPHA;if(i===qf)return t.RGB;if(i===ti)return t.RGBA;if(i===Ki)return t.DEPTH_COMPONENT;if(i===Yr)return t.DEPTH_STENCIL;if(i===sx)return t.RED;if(i===Kf)return t.RED_INTEGER;if(i===ra)return t.RG;if(i===Zf)return t.RG_INTEGER;if(i===Qf)return t.RGBA_INTEGER;if(i===Gl||i===jl||i===Wl||i===Xl)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===uh||i===dh||i===hh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fh||i===ph)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===gh)return s.COMPRESSED_R11_EAC;if(i===vh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xh)return s.COMPRESSED_RG11_EAC;if(i===_h)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yh||i===Sh||i===Mh||i===Eh||i===bh||i===wh||i===Th||i===Ch||i===Ah||i===Rh||i===Ph||i===Nh||i===Dh||i===Ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ch)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ah)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ph)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lh||i===Fh||i===Uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lh)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oh||i===kh||i===zh||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CT=`
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

}`;class AT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new xx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Lt({vertexShader:TT,fragmentShader:CT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RT extends ha{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,v=null;const x=typeof XRWebGLBinding<"u",g=new AT,u={},_=n.getContextAttributes();let y=null,M=null;const w=[],T=[],C=new Fe;let R=null;const E=new dn;E.viewport=new It;const b=new dn;b.viewport=new It;const I=[E,b],V=new zM;let z=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=w[te];return ie===void 0&&(ie=new Vu,w[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=w[te];return ie===void 0&&(ie=new Vu,w[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=w[te];return ie===void 0&&(ie=new Vu,w[te]=ie),ie.getHandSpace()};function H(te){const ie=T.indexOf(te.inputSource);if(ie===-1)return;const we=w[ie];we!==void 0&&(we.update(te.inputSource,te.frame,c||a),we.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let te=0;te<w.length;te++){const ie=T[te];ie!==null&&(T[te]=null,w[te].disconnect(ie))}z=null,D=null,g.reset();for(const te in u)delete u[te];e.setRenderTarget(y),m=null,f=null,h=null,r=null,M=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Oe=null,Me=null;_.depth&&(Me=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=_.stencil?Yr:Ki,Oe=_.stencil?_o:Ii);const Xe={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Dn(f.textureWidth,f.textureHeight,{format:ti,type:Jn,depthTexture:new Mo(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Dn(m.framebufferWidth,m.framebufferHeight,{format:ti,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(te){for(let ie=0;ie<te.removed.length;ie++){const we=te.removed[ie],Oe=T.indexOf(we);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(we))}for(let ie=0;ie<te.added.length;ie++){const we=te.added[ie];let Oe=T.indexOf(we);if(Oe===-1){for(let Xe=0;Xe<w.length;Xe++)if(Xe>=T.length){T.push(we),Oe=Xe;break}else if(T[Xe]===null){T[Xe]=we,Oe=Xe;break}if(Oe===-1)break}const Me=w[Oe];Me&&Me.connect(we)}}const U=new W,$=new W;function q(te,ie,we){U.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(we.matrixWorld);const Oe=U.distanceTo($),Me=ie.projectionMatrix.elements,Xe=we.projectionMatrix.elements,ut=Me[14]/(Me[10]-1),je=Me[14]/(Me[10]+1),Qe=(Me[9]+1)/Me[5],it=(Me[9]-1)/Me[5],Ve=(Me[8]-1)/Me[0],gt=(Xe[8]+1)/Xe[0],O=ut*Ve,dt=ut*gt,Je=Oe/(-Ve+gt),ot=Je*-Ve;if(ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ot),te.translateZ(Je),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Me[10]===-1)te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=ut+Je,P=je+Je,S=O-ot,N=dt+(Oe-ot),k=Qe*je/P*Ae,ee=it*je/P*Ae;te.projectionMatrix.makePerspective(S,N,k,ee,Ae,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ne(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ie=te.near,we=te.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(we=g.depthFar)),V.near=b.near=E.near=ie,V.far=b.far=E.far=we,(z!==V.near||D!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,D=V.far),V.layers.mask=te.layers.mask|6,E.layers.mask=V.layers.mask&3,b.layers.mask=V.layers.mask&5;const Oe=te.parent,Me=V.cameras;ne(V,Oe);for(let Xe=0;Xe<Me.length;Xe++)ne(Me[Xe],Oe);Me.length===2?q(V,E,b):V.projectionMatrix.copy(E.projectionMatrix),se(te,V,Oe)};function se(te,ie,we){we===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=So*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(te){return u[te]};let Ne=null;function Ue(te,ie){if(d=ie.getViewerPose(c||a),v=ie,d!==null){const we=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Oe=!1;we.length!==V.cameras.length&&(V.cameras.length=0,Oe=!0);for(let je=0;je<we.length;je++){const Qe=we[je];let it=null;if(m!==null)it=m.getViewport(Qe);else{const gt=h.getViewSubImage(f,Qe);it=gt.viewport,je===0&&(e.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(M))}let Ve=I[je];Ve===void 0&&(Ve=new dn,Ve.layers.enable(je),Ve.viewport=new It,I[je]=Ve),Ve.matrix.fromArray(Qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),je===0&&(V.matrix.copy(Ve.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Oe===!0&&V.cameras.push(Ve)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const je=h.getDepthInformation(we[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let je=0;je<we.length;je++){const Qe=we[je].camera;if(Qe){let it=u[Qe];it||(it=new xx,u[Qe]=it);const Ve=h.getCameraImage(Qe);it.sourceTexture=Ve}}}}for(let we=0;we<w.length;we++){const Oe=T[we],Me=w[we];Oe!==null&&Me!==void 0&&Me.update(Oe,ie,c||a)}Ne&&Ne(te,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ge=new yx;Ge.setAnimationLoop(Ue),this.setAnimationLoop=function(te){Ne=te},this.dispose=function(){}}}const kr=new Zi,PT=new Ft;function NT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,hx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,_,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),f(g,u),u.isMeshPhysicalMaterial&&m(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),x(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,_,y):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Nn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Nn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const _=e.get(u),y=_.envMap,M=_.envMapRotation;y&&(g.envMap.value=y,kr.copy(M),kr.x*=-1,kr.y*=-1,kr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),g.envMapRotation.value.setFromMatrix4(PT.makeRotationFromEuler(kr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,_,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*_,g.scale.value=y*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,_){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Nn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function x(g,u){const _=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const M=y.program;i.uniformBlockBinding(_,M)}function c(_,y){let M=r[_.id];M===void 0&&(v(_),M=d(_),r[_.id]=M,_.addEventListener("dispose",g));const w=y.program;i.updateUBOMapping(_,w);const T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function d(_){const y=h();_.__bindingPointIndex=y;const M=t.createBuffer(),w=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=r[_.id],M=_.uniforms,w=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,C=M.length;T<C;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,b=R.length;E<b;E++){const I=R[E];if(m(I,T,E,w)===!0){const V=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let H=0;H<z.length;H++){const X=z[H],G=x(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,V+D,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,D),D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,y,M,w){const T=_.value,C=y+"_"+M;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const R=w[C];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return w[C]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function v(_){const y=_.uniforms;let M=0;const w=16;for(let C=0,R=y.length;C<R;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,I=E.length;b<I;b++){const V=E[b],z=Array.isArray(V.value)?V.value:[V.value];for(let D=0,H=z.length;D<H;D++){const X=z[D],G=x(X),U=M%w,$=U%G.boundary,q=U+$;M+=$,q!==0&&w-q<G.storage&&(M+=w-q),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=G.storage}}}const T=M%w;return T>0&&(M+=w-T),_.__size=M,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const IT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function LT(){return Mi===null&&(Mi=new RM(IT,16,16,ra,ii),Mi.name="DFG_LUT",Mi.minFilter=Et,Mi.magFilter=Et,Mi.wrapS=Hn,Mi.wrapT=Hn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class wx{constructor(e={}){const{canvas:n=HS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Jn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const x=m,g=new Set([Qf,Zf,Kf]),u=new Set([Jn,Ii,xo,_o,$f,Yf]),_=new Uint32Array(4),y=new Int32Array(4);let M=null,w=null;const T=[],C=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let b=!1;this._outputColorSpace=bn;let I=0,V=0,z=null,D=-1,H=null;const X=new It,G=new It;let U=null;const $=new Ze(0);let q=0,ne=n.width,se=n.height,Ne=1,Ue=null,Ge=null;const te=new It(0,0,ne,se),ie=new It(0,0,ne,se);let we=!1;const Oe=new vx;let Me=!1,Xe=!1;const ut=new Ft,je=new W,Qe=new It,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function gt(){return z===null?Ne:1}let O=i;function dt(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wf}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",et,!1),O===null){const j="webgl2";if(O=dt(j,A),O===null)throw dt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw ct("WebGLRenderer: "+A.message),A}let Je,ot,Ae,P,S,N,k,ee,B,ve,le,_e,Re,oe,ce,xe,L,K,ge,F,fe,de,ye,he;function re(){Je=new Lb(O),Je.init(),de=new wT(O,Je),ot=new wb(O,Je,e,de),Ae=new ET(O,Je),ot.reversedDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),P=new Ob(O),S=new lT,N=new bT(O,Je,Ae,S,ot,de,P),k=new Cb(E),ee=new Ib(E),B=new VM(O),ye=new Eb(O,B),ve=new Fb(O,B,P,ye),le=new zb(O,ve,B,P),ge=new kb(O,ot,N),xe=new Tb(S),_e=new oT(E,k,ee,Je,ot,ye,xe),Re=new NT(E,S),oe=new uT,ce=new gT(Je),K=new Mb(E,k,ee,Ae,le,v,l),L=new ST(E,le,ot),he=new DT(O,P,ot,Ae),F=new bb(O,Je,P),fe=new Ub(O,Je,P),P.programs=_e.programs,E.capabilities=ot,E.extensions=Je,E.properties=S,E.renderLists=oe,E.shadowMap=L,E.state=Ae,E.info=P}re(),x!==Jn&&(R=new Vb(x,n.width,n.height,r,s));const me=new RT(E,O);this.xr=me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(ne,se,!1))},this.getSize=function(A){return A.set(ne,se)},this.setSize=function(A,j,Q=!0){if(me.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,se=j,n.width=Math.floor(A*Ne),n.height=Math.floor(j*Ne),Q===!0&&(n.style.width=A+"px",n.style.height=j+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ne*Ne,se*Ne).floor()},this.setDrawingBufferSize=function(A,j,Q){ne=A,se=j,Ne=Q,n.width=Math.floor(A*Q),n.height=Math.floor(j*Q),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(x===Jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,j,Q,Z){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,j,Q,Z),Ae.viewport(X.copy(te).multiplyScalar(Ne).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,j,Q,Z){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,j,Q,Z),Ae.scissor(G.copy(ie).multiplyScalar(Ne).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){Ae.setScissorTest(we=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,Q=!0){let Z=0;if(A){let Y=!1;if(z!==null){const Ee=z.texture.format;Y=g.has(Ee)}if(Y){const Ee=z.texture.type,Ce=u.has(Ee),Te=K.getClearColor(),De=K.getClearAlpha(),Ie=Te.r,He=Te.g,ke=Te.b;Ce?(_[0]=Ie,_[1]=He,_[2]=ke,_[3]=De,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=Ie,y[1]=He,y[2]=ke,y[3]=De,O.clearBufferiv(O.COLOR,0,y))}else Z|=O.COLOR_BUFFER_BIT}j&&(Z|=O.DEPTH_BUFFER_BIT),Q&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",et,!1),K.dispose(),oe.dispose(),ce.dispose(),S.dispose(),k.dispose(),ee.dispose(),le.dispose(),ye.dispose(),he.dispose(),_e.dispose(),me.dispose(),me.removeEventListener("sessionstart",Nr),me.removeEventListener("sessionend",ko),Li.stop()};function Le(A){A.preventDefault(),Tm("WebGLRenderer: Context Lost."),b=!0}function nt(){Tm("WebGLRenderer: Context Restored."),b=!1;const A=P.autoReset,j=L.enabled,Q=L.autoUpdate,Z=L.needsUpdate,Y=L.type;re(),P.autoReset=A,L.enabled=j,L.autoUpdate=Q,L.needsUpdate=Z,L.type=Y}function et(A){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zt(A){const j=A.target;j.removeEventListener("dispose",zt),nn(j)}function nn(A){Wc(A),S.remove(A)}function Wc(A){const j=S.get(A).programs;j!==void 0&&(j.forEach(function(Q){_e.releaseProgram(Q)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,Q,Z,Y,Ee){j===null&&(j=it);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=pn(A,j,Q,Z,Y);Ae.setMaterial(Z,Ce);let De=Q.index,Ie=1;if(Z.wireframe===!0){if(De=ve.getWireframeAttribute(Q),De===void 0)return;Ie=2}const He=Q.drawRange,ke=Q.attributes.position;let qe=He.start*Ie,mt=(He.start+He.count)*Ie;Ee!==null&&(qe=Math.max(qe,Ee.start*Ie),mt=Math.min(mt,(Ee.start+Ee.count)*Ie)),De!==null?(qe=Math.max(qe,0),mt=Math.min(mt,De.count)):ke!=null&&(qe=Math.max(qe,0),mt=Math.min(mt,ke.count));const At=mt-qe;if(At<0||At===1/0)return;ye.setup(Y,Z,Te,Q,De);let Rt,vt=F;if(De!==null&&(Rt=B.get(De),vt=fe,vt.setIndex(Rt)),Y.isMesh)Z.wireframe===!0?(Ae.setLineWidth(Z.wireframeLinewidth*gt()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(Y.isLine){let ze=Z.linewidth;ze===void 0&&(ze=1),Ae.setLineWidth(ze*gt()),Y.isLineSegments?vt.setMode(O.LINES):Y.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else Y.isPoints?vt.setMode(O.POINTS):Y.isSprite&&vt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)yo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ze=Y._multiDrawStarts,ht=Y._multiDrawCounts,lt=Y._multiDrawCount,Fn=De?B.get(De).bytesPerElement:1,us=S.get(Z).currentProgram.getUniforms();for(let Un=0;Un<lt;Un++)us.setValue(O,"_gl_DrawID",Un),vt.render(ze[Un]/Fn,ht[Un])}else if(Y.isInstancedMesh)vt.renderInstances(qe,At,Y.count);else if(Q.isInstancedBufferGeometry){const ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ht=Math.min(Q.instanceCount,ze);vt.renderInstances(qe,At,ht)}else vt.render(qe,At)};function Oo(A,j,Q){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,ae(A,j,Q),A.side=Tr,A.needsUpdate=!0,ae(A,j,Q),A.side=Ti):ae(A,j,Q)}this.compile=function(A,j,Q=null){Q===null&&(Q=A),w=ce.get(Q),w.init(j),C.push(w),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),A!==Q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const Z=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const Te=Ee[Ce];Oo(Te,Q,Y),Z.add(Te)}else Oo(Ee,Q,Y),Z.add(Ee)}),w=C.pop(),Z},this.compileAsync=function(A,j,Q=null){const Z=this.compile(A,j,Q);return new Promise(Y=>{function Ee(){if(Z.forEach(function(Ce){S.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){Y(A);return}setTimeout(Ee,10)}Je.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ga=null;function Xc(A){ga&&ga(A)}function Nr(){Li.stop()}function ko(){Li.start()}const Li=new yx;Li.setAnimationLoop(Xc),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){ga=A,me.setAnimationLoop(A),A===null?Li.stop():Li.start()},me.addEventListener("sessionstart",Nr),me.addEventListener("sessionend",ko),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Q=me.enabled===!0&&me.isPresenting===!0,Z=R!==null&&(z===null||Q)&&R.begin(E,z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(j),j=me.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,j,z),w=ce.get(A,C.length),w.init(j),C.push(w),ut.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Oe.setFromProjectionMatrix(ut,Ai,j.reversedDepth),Xe=this.localClippingEnabled,Me=xe.init(this.clippingPlanes,Xe),M=oe.get(A,T.length),M.init(),T.push(M),me.enabled===!0&&me.isPresenting===!0){const Ce=E.xr.getDepthSensingMesh();Ce!==null&&va(Ce,j,-1/0,E.sortObjects)}va(A,j,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(Ue,Ge),Ve=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ve&&K.addToRenderList(M,A),this.info.render.frame++,Me===!0&&xe.beginShadows();const Y=w.state.shadowsArray;if(L.render(Y,A,j),Me===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&R.hasRenderPass())===!1){const Ce=M.opaque,Te=M.transmissive;if(w.setupLights(),j.isArrayCamera){const De=j.cameras;if(Te.length>0)for(let Ie=0,He=De.length;Ie<He;Ie++){const ke=De[Ie];ls(Ce,Te,A,ke)}Ve&&K.render(A);for(let Ie=0,He=De.length;Ie<He;Ie++){const ke=De[Ie];zo(M,A,ke,ke.viewport)}}else Te.length>0&&ls(Ce,Te,A,j),Ve&&K.render(A),zo(M,A,j)}z!==null&&V===0&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),Z&&R.end(E),A.isScene===!0&&A.onAfterRender(E,A,j),ye.resetDefaultState(),D=-1,H=null,C.pop(),C.length>0?(w=C[C.length-1],Me===!0&&xe.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function va(A,j,Q,Z){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){Z&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const Ce=le.update(A),Te=A.material;Te.visible&&M.push(A,Ce,Te,Q,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const Ce=le.update(A),Te=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Qe.copy(Ce.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Te)){const De=Ce.groups;for(let Ie=0,He=De.length;Ie<He;Ie++){const ke=De[Ie],qe=Te[ke.materialIndex];qe&&qe.visible&&M.push(A,Ce,qe,Q,Qe.z,ke)}}else Te.visible&&M.push(A,Ce,Te,Q,Qe.z,null)}}const Ee=A.children;for(let Ce=0,Te=Ee.length;Ce<Te;Ce++)va(Ee[Ce],j,Q,Z)}function zo(A,j,Q,Z){const{opaque:Y,transmissive:Ee,transparent:Ce}=A;w.setupLightsView(Q),Me===!0&&xe.setGlobalState(E.clippingPlanes,Q),Z&&Ae.viewport(X.copy(Z)),Y.length>0&&Ln(Y,j,Q),Ee.length>0&&Ln(Ee,j,Q),Ce.length>0&&Ln(Ce,j,Q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ls(A,j,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){const qe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new Dn(1,1,{generateMipmaps:!0,type:qe?ii:Jn,minFilter:$r,samples:ot.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||X;Ee.setSize(Ce.z*E.transmissionResolutionScale,Ce.w*E.transmissionResolutionScale);const Te=E.getRenderTarget(),De=E.getActiveCubeFace(),Ie=E.getActiveMipmapLevel();E.setRenderTarget(Ee),E.getClearColor($),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),Ve&&K.render(Q);const He=E.toneMapping;E.toneMapping=Di;const ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),Me===!0&&xe.setGlobalState(E.clippingPlanes,Z),Ln(A,Q,Z),N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee),Je.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let mt=0,At=j.length;mt<At;mt++){const Rt=j[mt],{object:vt,geometry:ze,material:ht,group:lt}=Rt;if(ht.side===Ti&&vt.layers.test(Z.layers)){const Fn=ht.side;ht.side=Nn,ht.needsUpdate=!0,xa(vt,Q,Z,ze,ht,lt),ht.side=Fn,ht.needsUpdate=!0,qe=!0}}qe===!0&&(N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee))}E.setRenderTarget(Te,De,Ie),E.setClearColor($,q),ke!==void 0&&(Z.viewport=ke),E.toneMapping=He}function Ln(A,j,Q){const Z=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Ee=A.length;Y<Ee;Y++){const Ce=A[Y],{object:Te,geometry:De,group:Ie}=Ce;let He=Ce.material;He.allowOverride===!0&&Z!==null&&(He=Z),Te.layers.test(Q.layers)&&xa(Te,j,Q,De,He,Ie)}}function xa(A,j,Q,Z,Y,Ee){A.onBeforeRender(E,j,Q,Z,Y,Ee),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(E,j,Q,Z,A,Ee),Y.transparent===!0&&Y.side===Ti&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,E.renderBufferDirect(Q,j,Z,Y,A,Ee),Y.side=Tr,Y.needsUpdate=!0,E.renderBufferDirect(Q,j,Z,Y,A,Ee),Y.side=Ti):E.renderBufferDirect(Q,j,Z,Y,A,Ee),A.onAfterRender(E,j,Q,Z,Y,Ee)}function ae(A,j,Q){j.isScene!==!0&&(j=it);const Z=S.get(A),Y=w.state.lights,Ee=w.state.shadowsArray,Ce=Y.state.version,Te=_e.getParameters(A,Y.state,Ee,j,Q),De=_e.getProgramCacheKey(Te);let Ie=Z.programs;Z.environment=A.isMeshStandardMaterial?j.environment:null,Z.fog=j.fog,Z.envMap=(A.isMeshStandardMaterial?ee:k).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",zt),Ie=new Map,Z.programs=Ie);let He=Ie.get(De);if(He!==void 0){if(Z.currentProgram===He&&Z.lightsStateVersion===Ce)return Se(A,Te),He}else Te.uniforms=_e.getUniforms(A),A.onBeforeCompile(Te,E),He=_e.acquireProgram(Te,De),Ie.set(De,He),Z.uniforms=Te.uniforms;const ke=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=xe.uniform),Se(A,Te),Z.needsLights=rn(A),Z.lightsStateVersion=Ce,Z.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=He,Z.uniformsList=null,He}function ue(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=$l.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Se(A,j){const Q=S.get(A);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function pn(A,j,Q,Z,Y){j.isScene!==!0&&(j=it),N.resetTextureUnits();const Ee=j.fog,Ce=Z.isMeshStandardMaterial?j.environment:null,Te=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:sa,De=(Z.isMeshStandardMaterial?ee:k).get(Z.envMap||Ce),Ie=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!Q.morphAttributes.position,qe=!!Q.morphAttributes.normal,mt=!!Q.morphAttributes.color;let At=Di;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(At=E.toneMapping);const Rt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=Rt!==void 0?Rt.length:0,ze=S.get(Z),ht=w.state.lights;if(Me===!0&&(Xe===!0||A!==H)){const mn=A===H&&Z.id===D;xe.setState(Z,A,mn)}let lt=!1;Z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ht.state.version||ze.outputColorSpace!==Te||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==De||Z.fog===!0&&ze.fog!==Ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==xe.numPlanes||ze.numIntersection!==xe.numIntersection)||ze.vertexAlphas!==Ie||ze.vertexTangents!==He||ze.morphTargets!==ke||ze.morphNormals!==qe||ze.morphColors!==mt||ze.toneMapping!==At||ze.morphTargetsCount!==vt)&&(lt=!0):(lt=!0,ze.__version=Z.version);let Fn=ze.currentProgram;lt===!0&&(Fn=ae(Z,j,Y));let us=!1,Un=!1,_a=!1;const xt=Fn.getUniforms(),Mn=ze.uniforms;if(Ae.useProgram(Fn.program)&&(us=!0,Un=!0,_a=!0),Z.id!==D&&(D=Z.id,Un=!0),us||H!==A){Ae.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(O,"projectionMatrix",A.projectionMatrix),xt.setValue(O,"viewMatrix",A.matrixWorldInverse);const En=xt.map.cameraPosition;En!==void 0&&En.setValue(O,je.setFromMatrixPosition(A.matrixWorld)),ot.logarithmicDepthBuffer&&xt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Un=!0,_a=!0)}if(ze.needsLights&&(ht.state.directionalShadowMap.length>0&&xt.setValue(O,"directionalShadowMap",ht.state.directionalShadowMap,N),ht.state.spotShadowMap.length>0&&xt.setValue(O,"spotShadowMap",ht.state.spotShadowMap,N),ht.state.pointShadowMap.length>0&&xt.setValue(O,"pointShadowMap",ht.state.pointShadowMap,N)),Y.isSkinnedMesh){xt.setOptional(O,Y,"bindMatrix"),xt.setOptional(O,Y,"bindMatrixInverse");const mn=Y.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),xt.setValue(O,"boneTexture",mn.boneTexture,N))}Y.isBatchedMesh&&(xt.setOptional(O,Y,"batchingTexture"),xt.setValue(O,"batchingTexture",Y._matricesTexture,N),xt.setOptional(O,Y,"batchingIdTexture"),xt.setValue(O,"batchingIdTexture",Y._indirectTexture,N),xt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xt.setValue(O,"batchingColorTexture",Y._colorsTexture,N));const $n=Q.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&ge.update(Y,Q,Fn),(Un||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,xt.setValue(O,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Mn.envMap.value=De,Mn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&j.environment!==null&&(Mn.envMapIntensity.value=j.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=LT()),Un&&(xt.setValue(O,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&rt(Mn,_a),Ee&&Z.fog===!0&&Re.refreshFogUniforms(Mn,Ee),Re.refreshMaterialUniforms(Mn,Z,Ne,se,w.state.transmissionRenderTarget[A.id]),$l.upload(O,ue(ze),Mn,N)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&($l.upload(O,ue(ze),Mn,N),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xt.setValue(O,"center",Y.center),xt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),xt.setValue(O,"normalMatrix",Y.normalMatrix),xt.setValue(O,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const mn=Z.uniformsGroups;for(let En=0,$c=mn.length;En<$c;En++){const Dr=mn[En];he.update(Dr,Fn),he.bind(Dr,Fn)}}return Fn}function rt(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function rn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,j,Q){const Z=S.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),S.get(A.texture).__webglTexture=j,S.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const Q=S.get(A);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0};const sn=O.createFramebuffer();this.setRenderTarget=function(A,j=0,Q=0){z=A,I=j,V=Q;let Z=null,Y=!1,Ee=!1;if(A){const Te=S.get(A);if(Te.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(O.FRAMEBUFFER,Te.__webglFramebuffer),X.copy(A.viewport),G.copy(A.scissor),U=A.scissorTest,Ae.viewport(X),Ae.scissor(G),Ae.setScissorTest(U),D=-1;return}else if(Te.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Te.__hasExternalTextures)N.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Te.__boundDepthTexture!==He){if(He!==null&&S.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);const Ie=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[j])?Z=Ie[j][Q]:Z=Ie[j],Y=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?Z=S.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?Z=Ie[Q]:Z=Ie,X.copy(A.viewport),G.copy(A.scissor),U=A.scissorTest}else X.copy(te).multiplyScalar(Ne).floor(),G.copy(ie).multiplyScalar(Ne).floor(),U=we;if(Q!==0&&(Z=sn),Ae.bindFramebuffer(O.FRAMEBUFFER,Z)&&Ae.drawBuffers(A,Z),Ae.viewport(X),Ae.scissor(G),Ae.setScissorTest(U),Y){const Te=S.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te.__webglTexture,Q)}else if(Ee){const Te=j;for(let De=0;De<A.textures.length;De++){const Ie=S.get(A.textures[De]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+De,Ie.__webglTexture,Q,Te)}}else if(A!==null&&Q!==0){const Te=S.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Te.__webglTexture,Q)}D=-1},this.readRenderTargetPixels=function(A,j,Q,Z,Y,Ee,Ce,Te=0){if(!(A&&A.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){Ae.bindFramebuffer(O.FRAMEBUFFER,De);try{const Ie=A.textures[Te],He=Ie.format,ke=Ie.type;if(!ot.textureFormatReadable(He)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(ke)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-Z&&Q>=0&&Q<=A.height-Y&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te),O.readPixels(j,Q,Z,Y,de.convert(He),de.convert(ke),Ee))}finally{const Ie=z!==null?S.get(z).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,j,Q,Z,Y,Ee,Ce,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(j>=0&&j<=A.width-Z&&Q>=0&&Q<=A.height-Y){Ae.bindFramebuffer(O.FRAMEBUFFER,De);const Ie=A.textures[Te],He=Ie.format,ke=Ie.type;if(!ot.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te),O.readPixels(j,Q,Z,Y,de.convert(He),de.convert(ke),0);const mt=z!==null?S.get(z).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,mt);const At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await GS(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.deleteBuffer(qe),O.deleteSync(At),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,Q=0){const Z=Math.pow(2,-Q),Y=Math.floor(A.image.width*Z),Ee=Math.floor(A.image.height*Z),Ce=j!==null?j.x:0,Te=j!==null?j.y:0;N.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Ce,Te,Y,Ee),Ae.unbindTexture()};const yi=O.createFramebuffer(),cs=O.createFramebuffer();this.copyTextureToTexture=function(A,j,Q=null,Z=null,Y=0,Ee=null){Ee===null&&(Y!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Y,Y=0):Ee=0);let Ce,Te,De,Ie,He,ke,qe,mt,At;const Rt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(Q!==null)Ce=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,De=Q.isBox3?Q.max.z-Q.min.z:1,Ie=Q.min.x,He=Q.min.y,ke=Q.isBox3?Q.min.z:0;else{const $n=Math.pow(2,-Y);Ce=Math.floor(Rt.width*$n),Te=Math.floor(Rt.height*$n),A.isDataArrayTexture?De=Rt.depth:A.isData3DTexture?De=Math.floor(Rt.depth*$n):De=1,Ie=0,He=0,ke=0}Z!==null?(qe=Z.x,mt=Z.y,At=Z.z):(qe=0,mt=0,At=0);const vt=de.convert(j.format),ze=de.convert(j.type);let ht;j.isData3DTexture?(N.setTexture3D(j,0),ht=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(N.setTexture2DArray(j,0),ht=O.TEXTURE_2D_ARRAY):(N.setTexture2D(j,0),ht=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const lt=O.getParameter(O.UNPACK_ROW_LENGTH),Fn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),us=O.getParameter(O.UNPACK_SKIP_PIXELS),Un=O.getParameter(O.UNPACK_SKIP_ROWS),_a=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ie),O.pixelStorei(O.UNPACK_SKIP_ROWS,He),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ke);const xt=A.isDataArrayTexture||A.isData3DTexture,Mn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const $n=S.get(A),mn=S.get(j),En=S.get($n.__renderTarget),$c=S.get(mn.__renderTarget);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,En.__webglFramebuffer),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,$c.__webglFramebuffer);for(let Dr=0;Dr<De;Dr++)xt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,S.get(A).__webglTexture,Y,ke+Dr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,S.get(j).__webglTexture,Ee,At+Dr)),O.blitFramebuffer(Ie,He,Ce,Te,qe,mt,Ce,Te,O.DEPTH_BUFFER_BIT,O.NEAREST);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||S.has(A)){const $n=S.get(A),mn=S.get(j);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,yi),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,cs);for(let En=0;En<De;En++)xt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$n.__webglTexture,Y,ke+En):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$n.__webglTexture,Y),Mn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mn.__webglTexture,Ee,At+En):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mn.__webglTexture,Ee),Y!==0?O.blitFramebuffer(Ie,He,Ce,Te,qe,mt,Ce,Te,O.COLOR_BUFFER_BIT,O.NEAREST):Mn?O.copyTexSubImage3D(ht,Ee,qe,mt,At+En,Ie,He,Ce,Te):O.copyTexSubImage2D(ht,Ee,qe,mt,Ie,He,Ce,Te);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(ht,Ee,qe,mt,At,Ce,Te,De,vt,ze,Rt.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(ht,Ee,qe,mt,At,Ce,Te,De,vt,Rt.data):O.texSubImage3D(ht,Ee,qe,mt,At,Ce,Te,De,vt,ze,Rt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ee,qe,mt,Ce,Te,vt,ze,Rt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ee,qe,mt,Rt.width,Rt.height,vt,Rt.data):O.texSubImage2D(O.TEXTURE_2D,Ee,qe,mt,Ce,Te,vt,ze,Rt);O.pixelStorei(O.UNPACK_ROW_LENGTH,lt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Fn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,us),O.pixelStorei(O.UNPACK_SKIP_ROWS,Un),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_a),Ee===0&&j.generateMipmaps&&O.generateMipmap(ht),Ae.unbindTexture()},this.initRenderTarget=function(A){S.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){I=0,V=0,z=null,Ae.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}var FT=Object.defineProperty,UT=(t,e,n)=>e in t?FT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,OT=(t,e,n)=>(UT(t,e+"",n),n);class kT{constructor(){OT(this,"_listeners")}addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}var zT=Object.defineProperty,BT=(t,e,n)=>e in t?zT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Be=(t,e,n)=>(BT(t,typeof e!="symbol"?e+"":e,n),n);const wl=new ip,vg=new lr,VT=Math.cos(70*(Math.PI/180)),xg=(t,e)=>(t%e+e)%e;class Tx extends kT{constructor(e,n){super(),Be(this,"object"),Be(this,"domElement"),Be(this,"enabled",!0),Be(this,"target",new W),Be(this,"minDistance",0),Be(this,"maxDistance",1/0),Be(this,"minZoom",0),Be(this,"maxZoom",1/0),Be(this,"minPolarAngle",0),Be(this,"maxPolarAngle",Math.PI),Be(this,"minAzimuthAngle",-1/0),Be(this,"maxAzimuthAngle",1/0),Be(this,"enableDamping",!1),Be(this,"dampingFactor",.05),Be(this,"enableZoom",!0),Be(this,"zoomSpeed",1),Be(this,"enableRotate",!0),Be(this,"rotateSpeed",1),Be(this,"enablePan",!0),Be(this,"panSpeed",1),Be(this,"screenSpacePanning",!0),Be(this,"keyPanSpeed",7),Be(this,"zoomToCursor",!1),Be(this,"autoRotate",!1),Be(this,"autoRotateSpeed",2),Be(this,"reverseOrbit",!1),Be(this,"reverseHorizontalOrbit",!1),Be(this,"reverseVerticalOrbit",!1),Be(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Be(this,"mouseButtons",{LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN}),Be(this,"touches",{ONE:fs.ROTATE,TWO:fs.DOLLY_PAN}),Be(this,"target0"),Be(this,"position0"),Be(this,"zoom0"),Be(this,"_domElementKeyEvents",null),Be(this,"getPolarAngle"),Be(this,"getAzimuthalAngle"),Be(this,"setPolarAngle"),Be(this,"setAzimuthalAngle"),Be(this,"getDistance"),Be(this,"getZoomScale"),Be(this,"listenToKeyEvents"),Be(this,"stopListenToKeyEvents"),Be(this,"saveState"),Be(this,"reset"),Be(this,"update"),Be(this,"connect"),Be(this,"dispose"),Be(this,"dollyIn"),Be(this,"dollyOut"),Be(this,"getScale"),Be(this,"setScale"),this.object=e,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=L=>{let K=xg(L,2*Math.PI),ge=d.phi;ge<0&&(ge+=2*Math.PI),K<0&&(K+=2*Math.PI);let F=Math.abs(K-ge);2*Math.PI-F<F&&(K<ge?K+=2*Math.PI:ge+=2*Math.PI),h.phi=K-ge,i.update()},this.setAzimuthalAngle=L=>{let K=xg(L,2*Math.PI),ge=d.theta;ge<0&&(ge+=2*Math.PI),K<0&&(K+=2*Math.PI);let F=Math.abs(K-ge);2*Math.PI-F<F&&(K<ge?K+=2*Math.PI:ge+=2*Math.PI),h.theta=K-ge,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=L=>{L.addEventListener("keydown",B),this._domElementKeyEvents=L},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",B),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),l=o.NONE},this.update=(()=>{const L=new W,K=new W(0,1,0),ge=new ss().setFromUnitVectors(e.up,K),F=ge.clone().invert(),fe=new W,de=new ss,ye=2*Math.PI;return function(){const re=i.object.position;ge.setFromUnitVectors(e.up,K),F.copy(ge).invert(),L.copy(re).sub(i.target),L.applyQuaternion(ge),d.setFromVector3(L),i.autoRotate&&l===o.NONE&&D(V()),i.enableDamping?(d.theta+=h.theta*i.dampingFactor,d.phi+=h.phi*i.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let me=i.minAzimuthAngle,Le=i.maxAzimuthAngle;isFinite(me)&&isFinite(Le)&&(me<-Math.PI?me+=ye:me>Math.PI&&(me-=ye),Le<-Math.PI?Le+=ye:Le>Math.PI&&(Le-=ye),me<=Le?d.theta=Math.max(me,Math.min(Le,d.theta)):d.theta=d.theta>(me+Le)/2?Math.max(me,d.theta):Math.min(Le,d.theta)),d.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,d.phi)),d.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.zoomToCursor&&E||i.object.isOrthographicCamera?d.radius=Ne(d.radius):d.radius=Ne(d.radius*f),L.setFromSpherical(d),L.applyQuaternion(F),re.copy(i.target).add(L),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),m.set(0,0,0));let nt=!1;if(i.zoomToCursor&&E){let et=null;if(i.object instanceof dn&&i.object.isPerspectiveCamera){const zt=L.length();et=Ne(zt*f);const nn=zt-et;i.object.position.addScaledVector(C,nn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const zt=new W(R.x,R.y,0);zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),nt=!0;const nn=new W(R.x,R.y,0);nn.unproject(i.object),i.object.position.sub(nn).add(zt),i.object.updateMatrixWorld(),et=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;et!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(et).add(i.object.position):(wl.origin.copy(i.object.position),wl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(wl.direction))<VT?e.lookAt(i.target):(vg.setFromNormalAndCoplanarPoint(i.object.up,i.target),wl.intersectPlane(vg,i.target))))}else i.object instanceof Ys&&i.object.isOrthographicCamera&&(nt=f!==1,nt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix()));return f=1,E=!1,nt||fe.distanceToSquared(i.object.position)>c||8*(1-de.dot(i.object.quaternion))>c?(i.dispatchEvent(r),fe.copy(i.object.position),de.copy(i.object.quaternion),nt=!1,!0):!1}})(),this.connect=L=>{i.domElement=L,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",_e),i.domElement.addEventListener("pointerdown",Ae),i.domElement.addEventListener("pointercancel",S),i.domElement.addEventListener("wheel",ee)},this.dispose=()=>{var L,K,ge,F,fe,de;i.domElement&&(i.domElement.style.touchAction="auto"),(L=i.domElement)==null||L.removeEventListener("contextmenu",_e),(K=i.domElement)==null||K.removeEventListener("pointerdown",Ae),(ge=i.domElement)==null||ge.removeEventListener("pointercancel",S),(F=i.domElement)==null||F.removeEventListener("wheel",ee),(fe=i.domElement)==null||fe.ownerDocument.removeEventListener("pointermove",P),(de=i.domElement)==null||de.ownerDocument.removeEventListener("pointerup",S),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",B)};const i=this,r={type:"change"},s={type:"start"},a={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=o.NONE;const c=1e-6,d=new Xm,h=new Xm;let f=1;const m=new W,v=new Fe,x=new Fe,g=new Fe,u=new Fe,_=new Fe,y=new Fe,M=new Fe,w=new Fe,T=new Fe,C=new W,R=new Fe;let E=!1;const b=[],I={};function V(){return 2*Math.PI/60/60*i.autoRotateSpeed}function z(){return Math.pow(.95,i.zoomSpeed)}function D(L){i.reverseOrbit||i.reverseHorizontalOrbit?h.theta+=L:h.theta-=L}function H(L){i.reverseOrbit||i.reverseVerticalOrbit?h.phi+=L:h.phi-=L}const X=(()=>{const L=new W;return function(ge,F){L.setFromMatrixColumn(F,0),L.multiplyScalar(-ge),m.add(L)}})(),G=(()=>{const L=new W;return function(ge,F){i.screenSpacePanning===!0?L.setFromMatrixColumn(F,1):(L.setFromMatrixColumn(F,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(ge),m.add(L)}})(),U=(()=>{const L=new W;return function(ge,F){const fe=i.domElement;if(fe&&i.object instanceof dn&&i.object.isPerspectiveCamera){const de=i.object.position;L.copy(de).sub(i.target);let ye=L.length();ye*=Math.tan(i.object.fov/2*Math.PI/180),X(2*ge*ye/fe.clientHeight,i.object.matrix),G(2*F*ye/fe.clientHeight,i.object.matrix)}else fe&&i.object instanceof Ys&&i.object.isOrthographicCamera?(X(ge*(i.object.right-i.object.left)/i.object.zoom/fe.clientWidth,i.object.matrix),G(F*(i.object.top-i.object.bottom)/i.object.zoom/fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function $(L){i.object instanceof dn&&i.object.isPerspectiveCamera||i.object instanceof Ys&&i.object.isOrthographicCamera?f=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(L){$(f/L)}function ne(L){$(f*L)}function se(L){if(!i.zoomToCursor||!i.domElement)return;E=!0;const K=i.domElement.getBoundingClientRect(),ge=L.clientX-K.left,F=L.clientY-K.top,fe=K.width,de=K.height;R.x=ge/fe*2-1,R.y=-(F/de)*2+1,C.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Ne(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function Ue(L){v.set(L.clientX,L.clientY)}function Ge(L){se(L),M.set(L.clientX,L.clientY)}function te(L){u.set(L.clientX,L.clientY)}function ie(L){x.set(L.clientX,L.clientY),g.subVectors(x,v).multiplyScalar(i.rotateSpeed);const K=i.domElement;K&&(D(2*Math.PI*g.x/K.clientHeight),H(2*Math.PI*g.y/K.clientHeight)),v.copy(x),i.update()}function we(L){w.set(L.clientX,L.clientY),T.subVectors(w,M),T.y>0?q(z()):T.y<0&&ne(z()),M.copy(w),i.update()}function Oe(L){_.set(L.clientX,L.clientY),y.subVectors(_,u).multiplyScalar(i.panSpeed),U(y.x,y.y),u.copy(_),i.update()}function Me(L){se(L),L.deltaY<0?ne(z()):L.deltaY>0&&q(z()),i.update()}function Xe(L){let K=!1;switch(L.code){case i.keys.UP:U(0,i.keyPanSpeed),K=!0;break;case i.keys.BOTTOM:U(0,-i.keyPanSpeed),K=!0;break;case i.keys.LEFT:U(i.keyPanSpeed,0),K=!0;break;case i.keys.RIGHT:U(-i.keyPanSpeed,0),K=!0;break}K&&(L.preventDefault(),i.update())}function ut(){if(b.length==1)v.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),K=.5*(b[0].pageY+b[1].pageY);v.set(L,K)}}function je(){if(b.length==1)u.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),K=.5*(b[0].pageY+b[1].pageY);u.set(L,K)}}function Qe(){const L=b[0].pageX-b[1].pageX,K=b[0].pageY-b[1].pageY,ge=Math.sqrt(L*L+K*K);M.set(0,ge)}function it(){i.enableZoom&&Qe(),i.enablePan&&je()}function Ve(){i.enableZoom&&Qe(),i.enableRotate&&ut()}function gt(L){if(b.length==1)x.set(L.pageX,L.pageY);else{const ge=xe(L),F=.5*(L.pageX+ge.x),fe=.5*(L.pageY+ge.y);x.set(F,fe)}g.subVectors(x,v).multiplyScalar(i.rotateSpeed);const K=i.domElement;K&&(D(2*Math.PI*g.x/K.clientHeight),H(2*Math.PI*g.y/K.clientHeight)),v.copy(x)}function O(L){if(b.length==1)_.set(L.pageX,L.pageY);else{const K=xe(L),ge=.5*(L.pageX+K.x),F=.5*(L.pageY+K.y);_.set(ge,F)}y.subVectors(_,u).multiplyScalar(i.panSpeed),U(y.x,y.y),u.copy(_)}function dt(L){const K=xe(L),ge=L.pageX-K.x,F=L.pageY-K.y,fe=Math.sqrt(ge*ge+F*F);w.set(0,fe),T.set(0,Math.pow(w.y/M.y,i.zoomSpeed)),q(T.y),M.copy(w)}function Je(L){i.enableZoom&&dt(L),i.enablePan&&O(L)}function ot(L){i.enableZoom&&dt(L),i.enableRotate&&gt(L)}function Ae(L){var K,ge;i.enabled!==!1&&(b.length===0&&((K=i.domElement)==null||K.ownerDocument.addEventListener("pointermove",P),(ge=i.domElement)==null||ge.ownerDocument.addEventListener("pointerup",S)),Re(L),L.pointerType==="touch"?ve(L):N(L))}function P(L){i.enabled!==!1&&(L.pointerType==="touch"?le(L):k(L))}function S(L){var K,ge,F;oe(L),b.length===0&&((K=i.domElement)==null||K.releasePointerCapture(L.pointerId),(ge=i.domElement)==null||ge.ownerDocument.removeEventListener("pointermove",P),(F=i.domElement)==null||F.ownerDocument.removeEventListener("pointerup",S)),i.dispatchEvent(a),l=o.NONE}function N(L){let K;switch(L.button){case 0:K=i.mouseButtons.LEFT;break;case 1:K=i.mouseButtons.MIDDLE;break;case 2:K=i.mouseButtons.RIGHT;break;default:K=-1}switch(K){case hs.DOLLY:if(i.enableZoom===!1)return;Ge(L),l=o.DOLLY;break;case hs.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;te(L),l=o.PAN}else{if(i.enableRotate===!1)return;Ue(L),l=o.ROTATE}break;case hs.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;Ue(L),l=o.ROTATE}else{if(i.enablePan===!1)return;te(L),l=o.PAN}break;default:l=o.NONE}l!==o.NONE&&i.dispatchEvent(s)}function k(L){if(i.enabled!==!1)switch(l){case o.ROTATE:if(i.enableRotate===!1)return;ie(L);break;case o.DOLLY:if(i.enableZoom===!1)return;we(L);break;case o.PAN:if(i.enablePan===!1)return;Oe(L);break}}function ee(L){i.enabled===!1||i.enableZoom===!1||l!==o.NONE&&l!==o.ROTATE||(L.preventDefault(),i.dispatchEvent(s),Me(L),i.dispatchEvent(a))}function B(L){i.enabled===!1||i.enablePan===!1||Xe(L)}function ve(L){switch(ce(L),b.length){case 1:switch(i.touches.ONE){case fs.ROTATE:if(i.enableRotate===!1)return;ut(),l=o.TOUCH_ROTATE;break;case fs.PAN:if(i.enablePan===!1)return;je(),l=o.TOUCH_PAN;break;default:l=o.NONE}break;case 2:switch(i.touches.TWO){case fs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;it(),l=o.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ve(),l=o.TOUCH_DOLLY_ROTATE;break;default:l=o.NONE}break;default:l=o.NONE}l!==o.NONE&&i.dispatchEvent(s)}function le(L){switch(ce(L),l){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;gt(L),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;O(L),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Je(L),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(L),i.update();break;default:l=o.NONE}}function _e(L){i.enabled!==!1&&L.preventDefault()}function Re(L){b.push(L)}function oe(L){delete I[L.pointerId];for(let K=0;K<b.length;K++)if(b[K].pointerId==L.pointerId){b.splice(K,1);return}}function ce(L){let K=I[L.pointerId];K===void 0&&(K=new Fe,I[L.pointerId]=K),K.set(L.pageX,L.pageY)}function xe(L){const K=L.pointerId===b[0].pointerId?b[1]:b[0];return I[K.pointerId]}this.dollyIn=(L=z())=>{ne(L),i.update()},this.dollyOut=(L=z())=>{q(L),i.update()},this.getScale=()=>f,this.setScale=L=>{$(L),i.update()},this.getZoomScale=()=>z(),n!==void 0&&this.connect(n),this.update()}}var HT=Object.defineProperty,GT=(t,e,n)=>e in t?HT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qr=(t,e,n)=>(GT(t,typeof e!="symbol"?e+"":e,n),n);class Io{constructor(){qr(this,"enabled",!0),qr(this,"needsSwap",!0),qr(this,"clear",!1),qr(this,"renderToScreen",!1)}setSize(e,n){}render(e,n,i,r,s){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}class Cx{constructor(e){qr(this,"camera",new Ys(-1,1,1,-1,0,1)),qr(this,"geometry",new Bn(2,2)),qr(this,"mesh"),this.mesh=new ai(this.geometry,e)}get material(){return this.mesh.material}set material(e){this.mesh.material=e}dispose(){this.mesh.geometry.dispose()}render(e){e.render(this.mesh,this.camera)}}var jT=Object.defineProperty,WT=(t,e,n)=>e in t?jT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Tl=(t,e,n)=>(WT(t,typeof e!="symbol"?e+"":e,n),n);class _g extends Io{constructor(e,n="tDiffuse"){super(),Tl(this,"textureID"),Tl(this,"uniforms"),Tl(this,"material"),Tl(this,"fsQuad"),this.textureID=n,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):(this.uniforms=Mc.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cx(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.fsQuad.dispose(),this.material.dispose()}}const Wh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`
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
  `},XT={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`
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
  `};var $T=Object.defineProperty,YT=(t,e,n)=>e in t?$T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,yg=(t,e,n)=>(YT(t,typeof e!="symbol"?e+"":e,n),n);const qT=(()=>{const t=class extends Io{constructor(n,i,r,s){super(),this.strength=i!==void 0?i:1,this.radius=r,this.threshold=s,this.resolution=n!==void 0?new Fe(n.x,n.y):new Fe(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(a,o,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const m=new Dn(a,o,{type:ii});m.texture.name="UnrealBloomPass.h"+f,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const v=new Dn(a,o,{type:ii});v.texture.name="UnrealBloomPass.v"+f,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),a=Math.round(a/2),o=Math.round(o/2)}const l=XT;this.highPassUniforms=Mc.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new Fe(a,o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Wh;this.copyUniforms=Mc.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:vo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new rp,this.fsQuad=new Cx(null)}dispose(){for(let n=0;n<this.renderTargetsHorizontal.length;n++)this.renderTargetsHorizontal[n].dispose();for(let n=0;n<this.renderTargetsVertical.length;n++)this.renderTargetsVertical[n].dispose();this.renderTargetBright.dispose();for(let n=0;n<this.separableBlurMaterials.length;n++)this.separableBlurMaterials[n].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(n,i){let r=Math.round(n/2),s=Math.round(i/2);this.renderTargetBright.setSize(r,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,s),this.renderTargetsVertical[a].setSize(r,s),this.separableBlurMaterials[a].uniforms.texSize.value=new Fe(r,s),r=Math.round(r/2),s=Math.round(s/2)}render(n,i,r,s,a){n.getClearColor(this._oldClearColor),this.oldClearAlpha=n.getClearAlpha();const o=n.autoClear;n.autoClear=!1,n.setClearColor(this.clearColor,0),a&&n.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,n.setRenderTarget(null),n.clear(),this.fsQuad.render(n)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,n.setRenderTarget(this.renderTargetBright),n.clear(),this.fsQuad.render(n);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=t.BlurDirectionX,n.setRenderTarget(this.renderTargetsHorizontal[c]),n.clear(),this.fsQuad.render(n),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=t.BlurDirectionY,n.setRenderTarget(this.renderTargetsVertical[c]),n.clear(),this.fsQuad.render(n),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,n.setRenderTarget(this.renderTargetsHorizontal[0]),n.clear(),this.fsQuad.render(n),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&n.state.buffers.stencil.setTest(!0),this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(r),this.fsQuad.render(n)),n.setClearColor(this._oldClearColor,this.oldClearAlpha),n.autoClear=o}getSeperableBlurMaterial(n){return new Lt({defines:{KERNEL_RADIUS:n,SIGMA:n},uniforms:{colorTexture:{value:null},texSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(n){return new Lt({defines:{NUM_MIPS:n},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};let e=t;return yg(e,"BlurDirectionX",new Fe(1,0)),yg(e,"BlurDirectionY",new Fe(0,1)),e})();var KT=Object.defineProperty,ZT=(t,e,n)=>e in t?KT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qu=(t,e,n)=>(ZT(t,typeof e!="symbol"?e+"":e,n),n);class Sg extends Io{constructor(e,n){super(),qu(this,"scene"),qu(this,"camera"),qu(this,"inverse"),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class QT extends Io{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}var JT=Object.defineProperty,eC=(t,e,n)=>e in t?JT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qn=(t,e,n)=>(eC(t,typeof e!="symbol"?e+"":e,n),n);class tC{constructor(e,n){if(qn(this,"renderer"),qn(this,"_pixelRatio"),qn(this,"_width"),qn(this,"_height"),qn(this,"renderTarget1"),qn(this,"renderTarget2"),qn(this,"writeBuffer"),qn(this,"readBuffer"),qn(this,"renderToScreen"),qn(this,"passes",[]),qn(this,"copyPass"),qn(this,"clock"),this.renderer=e,n===void 0){const i={minFilter:Et,magFilter:Et,format:ti},r=e.getSize(new Fe);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,n=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,i),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,Wh===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),_g===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new _g(Wh),this.copyPass.material.blending=Ni,this.clock=new _x}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;const r=this.passes.length;for(let s=0;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sg!==void 0&&(a instanceof Sg?i=!0:a instanceof QT&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}var nC=Object.defineProperty,iC=(t,e,n)=>e in t?nC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zr=(t,e,n)=>(iC(t,typeof e!="symbol"?e+"":e,n),n);class rC extends Io{constructor(e,n,i,r,s=0){super(),zr(this,"scene"),zr(this,"camera"),zr(this,"overrideMaterial"),zr(this,"clearColor"),zr(this,"clearAlpha"),zr(this,"clearDepth",!1),zr(this,"_oldClearColor",new Ze),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.needsSwap=!1}render(e,n,i){let r=e.autoClear;e.autoClear=!1;let s,a=null;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}class sC{constructor(e){this.activeVisual=null,this.bloomEnabled=!1,this.handleResize=()=>{const n=window.innerWidth,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.composer.setSize(n,i)},this.renderer=new wx({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,1),this.scene=new gx,this.camera=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,15),this.camera.lookAt(0,0,0),this.controls=new Tx(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=50,this.composer=new tC(this.renderer),this.renderPass=new rC(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new qT(new Fe(window.innerWidth,window.innerHeight),1.5,.4,.85),this.composer.addPass(this.bloomPass),window.addEventListener("resize",this.handleResize)}updateAutoOrbit(e,n){e?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=n):this.controls.autoRotate=!1}updateBloom(e,n,i,r){this.bloomEnabled=e,this.bloomPass.strength=n,this.bloomPass.radius=i,this.bloomPass.threshold=r}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}setActiveVisual(e){this.activeVisual&&this.scene.remove(this.activeVisual),this.activeVisual=e,this.scene.add(e)}render(){this.controls.update(),this.bloomEnabled?this.composer.render():this.renderer.render(this.scene,this.camera)}getScene(){return this.scene}getCamera(){return this.camera}updateCameraAndRenderer(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.composer.setSize(e,n)}setRenderSizeForRecording(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.composer.setSize(e,n)}cleanup(){window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.renderer.dispose()}}var $t=(t=>(t.PLANE="plane",t.SPHERE="sphere",t.ICOSPHERE="icosphere",t.TORUS="torus",t.CUBE="cube",t.CYLINDER="cylinder",t))($t||{}),Dt=(t=>(t.WIREFRAME="wireframe",t.POINTS="points",t.PARTICLES="particles",t))(Dt||{}),Tn=(t=>(t.LOW="low",t.MEDIUM="medium",t.HIGH="high",t))(Tn||{}),mr=(t=>(t.LOW="low",t.MEDIUM="medium",t.HIGH="high",t))(mr||{});const Yl={quality:"medium",fieldSize:20,coreSize:2.5,coreBrightness:1.8,coreColor:"#00aaff",outerSize:6,outerOpacity:.25,outerColor:"#ff44aa",turbulence:1.5,noiseSpeed:.2,bassReactivity:1,highsReactivity:.6,energyReactivity:1,peakBurst:!0,size:3},Lo=`
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
`,aC=`
${Lo}

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
`,oC=`
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
`,lC=`
${Lo}

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
`,cC=`
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
`;class Ku{constructor(){this.geometry=null,this.material=null,this.mesh=null,this.points=null,this.peakPulseValue=0,this.peakPulseTime=0,this.currentGeometryType=$t.SPHERE,this.currentDetailLevel=Tn.MEDIUM,this.currentRenderStyle=Dt.WIREFRAME}createGeometry(e,n){const i=this.getSegmentCount(n,e);let r;switch(e){case $t.PLANE:r=new Bn(4,4,i,i);break;case $t.SPHERE:r=new oa(2,i,i);break;case $t.ICOSPHERE:r=new ap(2,n===Tn.LOW?1:n===Tn.MEDIUM?2:3);break;case $t.TORUS:r=new bo(2,.6,i/2,i);break;case $t.CUBE:r=new Cr(3,3,3,i/2,i/2,i/2);break;case $t.CYLINDER:r=new Eo(1.5,1.5,3,i,i/2);break;default:r=new oa(2,i,i);break}return r}getSegmentCount(e,n){switch(e){case Tn.LOW:return 32;case Tn.MEDIUM:return 64;case Tn.HIGH:return 128;default:return 64}}createMaterial(e){const n=new Ze(e);return new Lt({vertexShader:aC,fragmentShader:oC,uniforms:{uTime:{value:0},uDisplacement:{value:.5},uNoiseScale:{value:2},uNoiseSpeed:{value:.5},uSubBand:{value:0},uBassBand:{value:0},uMidsBand:{value:0},uHighsBand:{value:0},uSubWeight:{value:.3},uBassWeight:{value:.5},uMidsWeight:{value:.3},uHighsWeight:{value:.2},uPeakPulse:{value:0},uBaseColor:{value:n}},wireframe:!1})}createPointsMaterial(e,n){const i=new Ze(e);return new Lt({vertexShader:lC,fragmentShader:cC,uniforms:{uTime:{value:0},uDisplacement:{value:.5},uNoiseScale:{value:2},uNoiseSpeed:{value:.5},uSubBand:{value:0},uBassBand:{value:0},uMidsBand:{value:0},uHighsBand:{value:0},uSubWeight:{value:.3},uBassWeight:{value:.5},uMidsWeight:{value:.3},uHighsWeight:{value:.2},uPeakPulse:{value:0},uBaseColor:{value:i},uPointSize:{value:n}},transparent:!0,depthWrite:!0,blending:Qr})}applyPointDensity(e,n){if(n>=1)return e;const i=e.getAttribute("position"),r=e.getAttribute("normal");if(!i||!r)return e;const s=Math.max(1,Math.floor(1/n)),a=i.count,o=Math.floor(a/s),l=new Float32Array(o*3),c=new Float32Array(o*3);let d=0;for(let f=0;f<a;f+=s)l[d*3]=i.getX(f),l[d*3+1]=i.getY(f),l[d*3+2]=i.getZ(f),c[d*3]=r.getX(f),c[d*3+1]=r.getY(f),c[d*3+2]=r.getZ(f),d++;const h=new Ht;return h.setAttribute("position",new hn(l,3)),h.setAttribute("normal",new hn(c,3)),h}initialize(e){this.currentGeometryType=e.geometryType,this.currentDetailLevel=e.detailLevel,this.currentRenderStyle=e.renderStyle;let n=this.createGeometry(e.geometryType,e.detailLevel);return e.renderStyle===Dt.POINTS?(e.pointDensity<1&&(n=this.applyPointDensity(n,e.pointDensity)),this.geometry=n,this.material=this.createPointsMaterial(e.baseColor,e.pointSize),this.points=new Hh(this.geometry,this.material),this.points):(this.geometry=n,this.material=this.createMaterial(e.baseColor),this.material.wireframe=e.renderStyle===Dt.WIREFRAME,this.mesh=new ai(this.geometry,this.material),this.mesh)}updateSettings(e){if(this.material){if(this.material.uniforms.uDisplacement.value=e.displacement,this.material.uniforms.uNoiseScale.value=e.noiseScale,this.material.uniforms.uNoiseSpeed.value=e.noiseSpeed,this.material.uniforms.uSubWeight.value=e.subWeight,this.material.uniforms.uBassWeight.value=e.bassWeight,this.material.uniforms.uMidsWeight.value=e.midsWeight,this.material.uniforms.uHighsWeight.value=e.highsWeight,this.material.uniforms.uPointSize&&(this.material.uniforms.uPointSize.value=e.pointSize),this.material.uniforms.uBaseColor){const n=new Ze(e.baseColor);this.material.uniforms.uBaseColor.value=n}this.mesh&&this.material&&(this.material.wireframe=e.renderStyle===Dt.WIREFRAME)}}update(e,n,i){i.pulseOnPeak&&n.peakTrigger&&(this.peakPulseValue=1,this.peakPulseTime=e);const r=Math.max(0,1-(e-this.peakPulseTime)/200);this.peakPulseValue=r,this.material&&(this.material.uniforms.uTime.value=e/1e3,this.material.uniforms.uSubBand.value=n.sub,this.material.uniforms.uBassBand.value=n.bass,this.material.uniforms.uMidsBand.value=n.mids,this.material.uniforms.uHighsBand.value=n.highs,this.material.uniforms.uPeakPulse.value=this.peakPulseValue)}getObject(){return this.currentRenderStyle===Dt.POINTS?this.points:this.mesh}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.mesh=null,this.points=null}}const uC=`
${Lo}

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
`,dC=`
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
`,hC=`
${Lo}

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
`,fC=`
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
`;function Cl(t){const e=new Ze(t);return new W(e.r,e.g,e.b)}class Zu{constructor(){this.coreGeometry=null,this.coreMaterial=null,this.corePoints=null,this.outerGeometry=null,this.outerMaterial=null,this.outerPoints=null,this.group=null,this.peakBurstValue=0,this.peakBurstTime=0,this.currentQuality=mr.MEDIUM,this.currentFieldSize=20}getParticleCount(e){switch(e){case mr.LOW:return{core:12e3,outer:6e3};case mr.MEDIUM:return{core:3e4,outer:12e3};case mr.HIGH:return{core:6e4,outer:2e4};default:return{core:3e4,outer:12e3}}}createPositions(e,n,i=1){const r=new Float32Array(e*3),s=n/2;for(let a=0;a<e;a++){const o=a*3,l=Math.pow(Math.random(),.3)*i,c=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);r[o]=Math.sin(d)*Math.cos(c)*s*l,r[o+1]=Math.sin(d)*Math.sin(c)*s*l,r[o+2]=Math.cos(d)*s*l}return r}createCoreMaterial(e){return new Lt({vertexShader:uC,fragmentShader:dC,uniforms:{uTime:{value:0},uTurbulence:{value:e.turbulence},uFieldSize:{value:e.fieldSize},uCoreSize:{value:e.coreSize},uCoreBrightness:{value:e.coreBrightness},uNoiseSpeed:{value:e.noiseSpeed},uEnergy:{value:0},uBass:{value:0},uMids:{value:0},uHighs:{value:0},uPeakBurst:{value:0},uBassReactivity:{value:e.bassReactivity},uHighsReactivity:{value:e.highsReactivity},uEnergyReactivity:{value:e.energyReactivity},uCoreColor:{value:Cl(e.coreColor)}},transparent:!0,depthWrite:!1,blending:vo})}createOuterMaterial(e){return new Lt({vertexShader:hC,fragmentShader:fC,uniforms:{uTime:{value:0},uTurbulence:{value:e.turbulence},uFieldSize:{value:e.fieldSize},uOuterSize:{value:e.outerSize},uOuterOpacity:{value:e.outerOpacity},uNoiseSpeed:{value:e.noiseSpeed},uEnergy:{value:0},uBass:{value:0},uHighs:{value:0},uPeakBurst:{value:0},uBassReactivity:{value:e.bassReactivity},uEnergyReactivity:{value:e.energyReactivity},uOuterColor:{value:Cl(e.outerColor)}},transparent:!0,depthWrite:!1,blending:vo})}initialize(e){this.currentQuality=e.quality,this.currentFieldSize=e.fieldSize;const n=this.getParticleCount(e.quality),i=this.createPositions(n.core,e.fieldSize,1);this.coreGeometry=new Ht,this.coreGeometry.setAttribute("position",new hn(i,3)),this.coreMaterial=this.createCoreMaterial(e),this.corePoints=new Hh(this.coreGeometry,this.coreMaterial);const r=this.createPositions(n.outer,e.fieldSize,1.3);return this.outerGeometry=new Ht,this.outerGeometry.setAttribute("position",new hn(r,3)),this.outerMaterial=this.createOuterMaterial(e),this.outerPoints=new Hh(this.outerGeometry,this.outerMaterial),this.group=new Ba,this.group.add(this.outerPoints),this.group.add(this.corePoints),this.group}update(e,n,i){(i.quality!==this.currentQuality||i.fieldSize!==this.currentFieldSize)&&this.recreate(i),i.peakBurst&&n.peakTrigger&&(this.peakBurstValue=1,this.peakBurstTime=e),this.peakBurstValue=Math.max(0,1-(e-this.peakBurstTime)/200);const r=e/1e3;if(this.coreMaterial){const s=this.coreMaterial.uniforms;s.uTime.value=r,s.uTurbulence.value=i.turbulence,s.uFieldSize.value=i.fieldSize,s.uCoreSize.value=i.coreSize,s.uCoreBrightness.value=i.coreBrightness,s.uNoiseSpeed.value=i.noiseSpeed,s.uEnergy.value=n.energy,s.uBass.value=n.bass,s.uMids.value=n.mids,s.uHighs.value=n.highs,s.uPeakBurst.value=this.peakBurstValue,s.uBassReactivity.value=i.bassReactivity,s.uHighsReactivity.value=i.highsReactivity,s.uEnergyReactivity.value=i.energyReactivity,s.uCoreColor.value=Cl(i.coreColor)}if(this.outerMaterial){const s=this.outerMaterial.uniforms;s.uTime.value=r,s.uTurbulence.value=i.turbulence,s.uFieldSize.value=i.fieldSize,s.uOuterSize.value=i.outerSize,s.uOuterOpacity.value=i.outerOpacity,s.uNoiseSpeed.value=i.noiseSpeed,s.uEnergy.value=n.energy,s.uBass.value=n.bass,s.uHighs.value=n.highs,s.uPeakBurst.value=this.peakBurstValue,s.uBassReactivity.value=i.bassReactivity,s.uEnergyReactivity.value=i.energyReactivity,s.uOuterColor.value=Cl(i.outerColor)}}recreate(e){if(!this.group)return;this.currentQuality=e.quality,this.currentFieldSize=e.fieldSize;const n=this.getParticleCount(e.quality),i=this.coreGeometry;this.coreGeometry=new Ht,this.coreGeometry.setAttribute("position",new hn(this.createPositions(n.core,e.fieldSize,1),3)),this.corePoints&&(this.corePoints.geometry=this.coreGeometry),i==null||i.dispose();const r=this.outerGeometry;this.outerGeometry=new Ht,this.outerGeometry.setAttribute("position",new hn(this.createPositions(n.outer,e.fieldSize,1.3),3)),this.outerPoints&&(this.outerPoints.geometry=this.outerGeometry),r==null||r.dispose()}getObject(){return this.group}dispose(){var e,n,i,r;(e=this.coreGeometry)==null||e.dispose(),(n=this.coreMaterial)==null||n.dispose(),(i=this.outerGeometry)==null||i.dispose(),(r=this.outerMaterial)==null||r.dispose(),this.coreGeometry=null,this.coreMaterial=null,this.outerGeometry=null,this.outerMaterial=null,this.corePoints=null,this.outerPoints=null,this.group=null}}class op{constructor(){this.mediaRecorder=null,this.recordedChunks=[],this.startTimestamp=0,this.onTimerUpdate=null,this.onError=null,this.onFormatWarning=null,this.timerInterval=null,this.actualMimeType="",this.actualFormat="webm",this.canvas=null,this.renderer=null}isRecording(){return this.mediaRecorder!==null&&this.mediaRecorder.state==="recording"}startRecording(e,n,i,r){if(!this.isRecording())try{this.canvas=e,this.renderer=r,n.width&&n.height&&r&&(r.setRenderSizeForRecording?r.setRenderSizeForRecording(n.width,n.height):r.updateCameraAndRenderer?r.updateCameraAndRenderer(n.width,n.height):(e.width=n.width,e.height=n.height,r.setSize(n.width,n.height,!1)));const s=e.captureStream(n.fps);let a;n.includeAudio&&i?a=new MediaStream([...s.getVideoTracks(),...i.getAudioTracks()]):a=s;const l={draft:{video:5e6,audio:128e3},high:{video:1e7,audio:192e3},ultra:{video:16e6,audio:192e3}}[n.quality],c=['video/mp4;codecs="avc1.42E01E,mp4a.40.2"',"video/mp4"],d=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"];let h="",f=[];n.format==="mp4"?f=c:n.format==="webm"?f=d:f=[...c,...d];for(const v of f)if(MediaRecorder.isTypeSupported(v)){h=v;break}if(!h){this.onError&&this.onError("Recording not supported in this browser");return}n.format==="mp4"&&!h.includes("mp4")&&this.onFormatWarning&&this.onFormatWarning("MP4 format not supported, using WebM instead"),this.actualMimeType=h,this.actualFormat=h.includes("mp4")?"mp4":"webm",this.recordedChunks=[];const m={mimeType:h,videoBitsPerSecond:l.video};n.includeAudio&&(m.audioBitsPerSecond=l.audio),this.mediaRecorder=new MediaRecorder(a,m),this.mediaRecorder.ondataavailable=v=>{v.data&&v.data.size>0&&this.recordedChunks.push(v.data)},this.mediaRecorder.onerror=()=>{this.onError&&this.onError("Recording error occurred"),this.cleanup()},this.mediaRecorder.start(100),this.startTimestamp=Date.now(),this.timerInterval=window.setInterval(()=>{if(this.onTimerUpdate){const v=Math.floor((Date.now()-this.startTimestamp)/1e3);this.onTimerUpdate(v)}},100)}catch{this.onError&&this.onError("Failed to start recording")}}stopRecording(){if(!(!this.mediaRecorder||this.mediaRecorder.state==="inactive"))return new Promise(e=>{if(!this.mediaRecorder){e();return}this.mediaRecorder.onstop=()=>{this.downloadRecording(),this.restoreCanvasSize(),this.cleanup(),e()},this.mediaRecorder.stop(),this.mediaRecorder.stream&&this.mediaRecorder.stream.getTracks().forEach(n=>n.stop())})}restoreCanvasSize(){if(this.canvas&&this.renderer){const e=this.canvas.clientWidth,n=this.canvas.clientHeight;this.renderer.updateCameraAndRenderer?this.renderer.updateCameraAndRenderer(e,n):this.renderer.setSize(e,n,!1)}}downloadRecording(){if(this.recordedChunks.length===0)return;const e=new Blob(this.recordedChunks,{type:this.actualMimeType}),n=URL.createObjectURL(e),i=new Date,r=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0"),o=String(i.getHours()).padStart(2,"0"),l=String(i.getMinutes()).padStart(2,"0"),c=String(i.getSeconds()).padStart(2,"0"),d=this.actualFormat,h=`visualizer-${r}${s}${a}-${o}${l}${c}.${d}`,f=document.createElement("a");f.style.display="none",f.href=n,f.download=h,document.body.appendChild(f),f.click(),setTimeout(()=>{document.body.removeChild(f),URL.revokeObjectURL(n)},100)}cleanup(){this.timerInterval!==null&&(clearInterval(this.timerInterval),this.timerInterval=null),this.mediaRecorder=null,this.recordedChunks=[],this.startTimestamp=0,this.canvas=null,this.renderer=null}setTimerCallback(e){this.onTimerUpdate=e}setErrorCallback(e){this.onError=e}setFormatWarningCallback(e){this.onFormatWarning=e}dispose(){this.isRecording()&&this.stopRecording(),this.cleanup()}}class wo{constructor(){this.midiAccess=null,this.messageCallback=null,this.selectedDeviceId=null,this.smoothing=0,this.smoothedValues=new Map}async initialize(){if(!navigator.requestMIDIAccess)return!1;try{return this.midiAccess=await navigator.requestMIDIAccess(),this.setupInputListeners(),!0}catch(e){return console.error("Failed to get MIDI access:",e),!1}}setupInputListeners(){this.midiAccess&&(this.midiAccess.inputs.forEach(e=>{e.onmidimessage=n=>{this.handleMIDIMessage(n,e.id)}}),this.midiAccess.onstatechange=()=>{this.setupInputListeners()})}handleMIDIMessage(e,n){const[i,r,s]=e.data,a=i&240;if(this.messageCallback&&!(this.selectedDeviceId&&this.selectedDeviceId!=="all"&&this.selectedDeviceId!==n)&&a===176){const o=r;let l=s;if(this.smoothing>0){const c=o,d=this.smoothedValues.get(c)??l;l=d+(l-d)*(1-this.smoothing),this.smoothedValues.set(c,l)}this.messageCallback(o,l,n)}}getDevices(){if(!this.midiAccess)return[];const e=[];return this.midiAccess.inputs.forEach(n=>{e.push({id:n.id,name:n.name||"Unknown Device",manufacturer:n.manufacturer||"Unknown",state:n.state})}),e}setMessageCallback(e){this.messageCallback=e}setSelectedDevice(e){this.selectedDeviceId=e}setSmoothing(e){this.smoothing=Math.max(0,Math.min(.9,e))}isSupported(){return!!navigator.requestMIDIAccess}hasAccess(){return!!this.midiAccess}dispose(){this.midiAccess&&this.midiAccess.inputs.forEach(e=>{e.onmidimessage=null}),this.messageCallback=null,this.midiAccess=null}}function Ax(t,e){if(e.isToggle)return t>=64;const n=t/127;return e.min+n*(e.max-e.min)}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),bt=(t,e)=>{const n=J.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},d)=>J.createElement("svg",{ref:d,...pC,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${mC(t)}`,o].join(" "),...c},[...e.map(([h,f])=>J.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=bt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=bt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=bt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=bt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=bt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=bt("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=bt("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=bt("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=bt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=bt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=bt("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=bt("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=bt("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=bt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=bt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=bt("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=bt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=bt("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=bt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=bt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=bt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=bt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=bt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=bt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function la(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}function DC({isPlaying:t,currentTime:e,duration:n,volume:i,fileName:r,isLoading:s,error:a,isRecording:o,recordingTime:l,fps:c,includeAudio:d,recordingError:h,recordingQuality:f,recordingFormat:m,audioFeatures:v,onFileUpload:x,onPlayPause:g,onPlayFromBeginning:u,onSeek:_,onVolumeChange:y,onStartRecording:M,onStopRecording:w,onFpsChange:T,onIncludeAudioChange:C,onQualityChange:R,onFormatChange:E,onFullscreen:b}){const[I,V]=J.useState(!1),z=J.useRef(null);J.useEffect(()=>{const $=q=>{z.current&&!z.current.contains(q.target)&&V(!1)};return I&&document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}},[I]);const D=$=>{var ne;const q=(ne=$.target.files)==null?void 0:ne[0];q&&x(q)},H=$=>{const q=parseFloat($.target.value);_(q)},X=$=>{const q=parseFloat($.target.value);y(q)},G=n>0?e/n*100:0,U=$=>{const q=Math.floor($/60),ne=$%60;return`${String(q).padStart(2,"0")}:${String(ne).padStart(2,"0")}`};return p.jsx("div",{className:"fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 py-3",children:p.jsxs("div",{className:"flex items-center gap-6",children:[p.jsxs("label",{className:"cursor-pointer",children:[p.jsx("input",{type:"file",accept:".mp3,.wav,.aac,.ogg",onChange:D,className:"hidden"}),p.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",children:[p.jsx(Ec,{size:18}),p.jsx("span",{className:"text-sm font-medium",children:"Upload"})]})]}),r&&p.jsx("div",{className:"text-sm text-white/70 truncate max-w-xs",children:r}),s&&p.jsx("div",{className:"text-sm text-white/70",children:"Loading..."}),a&&p.jsx("div",{className:"text-sm text-red-400",children:a}),p.jsx("div",{className:"h-8 w-px bg-white/10"}),p.jsxs("div",{ref:z,className:"flex items-center gap-3 relative",children:[p.jsx("button",{onClick:M,disabled:o||!r,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Start Recording (R)",children:p.jsx(jc,{size:20,className:o?"fill-red-500 text-red-500":"text-red-500"})}),p.jsx("button",{onClick:w,disabled:!o,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Stop Recording (R)",children:p.jsx(lp,{size:20,className:"text-white"})}),p.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:U(l)}),p.jsx("button",{onClick:()=>V(!I),disabled:o,className:`p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${I?"bg-white/10":""}`,title:"Recording Settings",children:p.jsx(RC,{size:20})}),I&&p.jsxs("div",{className:"absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-[280px] z-50 shadow-xl",children:[p.jsx("h3",{className:"text-sm font-semibold mb-3 text-white",children:"Recording Settings"}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs text-white/70 mb-1",children:"Quality"}),p.jsxs("select",{value:f,onChange:$=>R($.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:"draft",children:"Draft Quality"}),p.jsx("option",{value:"high",children:"High Quality"}),p.jsx("option",{value:"ultra",children:"Ultra Quality"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs text-white/70 mb-1",children:"Format"}),p.jsxs("select",{value:m,onChange:$=>E($.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:"auto",children:"Auto Format"}),p.jsx("option",{value:"mp4",children:"MP4"}),p.jsx("option",{value:"webm",children:"WebM"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs text-white/70 mb-1",children:"Frame Rate"}),p.jsxs("select",{value:c,onChange:$=>T(Number($.target.value)),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:30,children:"30 FPS"}),p.jsx("option",{value:60,children:"60 FPS"})]})]}),p.jsx("div",{className:"pt-2 border-t border-white/10",children:p.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer",children:[p.jsx("input",{type:"checkbox",checked:d,onChange:$=>C($.target.checked),className:"w-4 h-4 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"}),p.jsx("span",{className:"text-white/90",children:"Include Audio"})]})})]})]}),h&&p.jsx("div",{className:"text-xs text-red-400 absolute top-full left-0 mt-1 whitespace-nowrap",children:h})]}),p.jsx("div",{className:"h-8 w-px bg-white/10"}),p.jsx("button",{onClick:b,className:"p-2 hover:bg-white/10 rounded-lg transition-colors",title:"Fullscreen",children:p.jsx(EC,{size:20})}),p.jsxs("div",{className:"flex-1 flex items-center gap-4",children:[p.jsx("button",{onClick:u,disabled:!r||s,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play from beginning",children:p.jsx(Px,{size:24})}),p.jsx("button",{onClick:g,disabled:!r||s,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play/Pause (Spacebar)",children:t?p.jsx(wC,{size:24}):p.jsx(TC,{size:24})}),p.jsxs("div",{className:"flex-1 flex items-center gap-3",children:[p.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:la(e)}),p.jsx("div",{className:"flex-1 relative",children:p.jsx("input",{type:"range",min:"0",max:n||0,value:e,onChange:H,disabled:!r,className:"w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed",style:{background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 ${G}%, rgba(255,255,255,0.1) ${G}%, rgba(255,255,255,0.1) 100%)`}})}),p.jsxs("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:["-",la(Math.max(0,n-e))]})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{onClick:()=>y(i>0?0:.7),className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:i>0?p.jsx(PC,{size:20}):p.jsx(NC,{size:20})}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:i,onChange:X,className:"w-24 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"})]})]})]})})})}const Fo="audio-visualizer-presets",Eg="audio-visualizer-presets-version",bg="3",Xh=[{id:"default-1",name:"Electric Sphere",isBuiltIn:!0,createdAt:Date.now(),meshSettings:{geometryType:$t.SPHERE,detailLevel:Tn.MEDIUM,renderStyle:Dt.WIREFRAME,displacement:.8,noiseScale:2.5,noiseSpeed:.6,subWeight:.2,bassWeight:.7,midsWeight:.4,highsWeight:.3,pulseOnPeak:!0,baseColor:"#00ffff",pointSize:2,pointDensity:1},audioSettings:{smoothing:.75,sensitivity:1.2,peakThreshold:.8,peakCooldown:200},globalSettings:{autoOrbit:!0,orbitSpeed:.3,bloom:!0,bloomStrength:1.5,bloomRadius:.4,bloomThreshold:.85,parameterSmoothing:.2}},{id:"default-2",name:"Cosmic Torus",isBuiltIn:!0,createdAt:Date.now(),meshSettings:{geometryType:$t.TORUS,detailLevel:Tn.HIGH,renderStyle:Dt.POINTS,displacement:.5,noiseScale:3,noiseSpeed:.4,subWeight:.3,bassWeight:.5,midsWeight:.5,highsWeight:.6,pulseOnPeak:!0,baseColor:"#ff00ff",pointSize:.2,pointDensity:.7},audioSettings:{smoothing:.8,sensitivity:1,peakThreshold:.75,peakCooldown:250},globalSettings:{autoOrbit:!0,orbitSpeed:.5,bloom:!0,bloomStrength:2,bloomRadius:.5,bloomThreshold:.7,parameterSmoothing:.2}},{id:"default-3",name:"Icosahedral Dream",isBuiltIn:!0,createdAt:Date.now(),meshSettings:{geometryType:$t.ICOSPHERE,detailLevel:Tn.MEDIUM,renderStyle:Dt.WIREFRAME,displacement:1,noiseScale:1.8,noiseSpeed:.5,subWeight:.4,bassWeight:.6,midsWeight:.3,highsWeight:.2,pulseOnPeak:!0,baseColor:"#ffaa00",pointSize:2.5,pointDensity:1},audioSettings:{smoothing:.7,sensitivity:1.3,peakThreshold:.7,peakCooldown:150},globalSettings:{autoOrbit:!0,orbitSpeed:.4,bloom:!0,bloomStrength:1.2,bloomRadius:.3,bloomThreshold:.9,parameterSmoothing:.2}}];function Dx(){if(localStorage.getItem(Eg)!==bg){const n=ma().filter(r=>!r.isBuiltIn),i=[...Xh,...n];localStorage.setItem(Fo,JSON.stringify(i)),localStorage.setItem(Eg,bg)}}function ma(){try{const t=localStorage.getItem(Fo);return t?JSON.parse(t):Xh}catch{return Xh}}function IC(t){const e=ma(),n={id:`preset-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,name:t.name,isBuiltIn:!1,createdAt:Date.now(),meshSettings:{...t.meshSettings},audioSettings:{...t.audioSettings},globalSettings:{...t.globalSettings}};return e.push(n),localStorage.setItem(Fo,JSON.stringify(e)),n}function LC(t){const n=ma().filter(i=>i.id!==t);localStorage.setItem(Fo,JSON.stringify(n))}function FC(t){return ma().find(n=>n.id===t)||null}function UC(t,e){const n=ma(),i=n.findIndex(r=>r.id===t);i!==-1&&(n[i]={...n[i],name:e.name,meshSettings:{...e.meshSettings},audioSettings:{...e.audioSettings},globalSettings:{...e.globalSettings}},localStorage.setItem(Fo,JSON.stringify(n)))}function OC({onLoadPreset:t,getCurrentPresetData:e}){const[n,i]=J.useState([]),[r,s]=J.useState(!1),[a,o]=J.useState("");J.useEffect(()=>{Dx(),l()},[]);const l=()=>{i(ma())},c=()=>{o(""),s(!0)},d=()=>{if(!a.trim())return;const m=e();IC({...m,name:a.trim()}),l(),s(!1),o("")},h=m=>{confirm("Delete this preset?")&&(LC(m),l())},f=m=>{t(m)};return p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx(bC,{size:18,className:"text-blue-400"}),p.jsx("h3",{className:"text-sm font-semibold text-white",children:"Presets"})]}),p.jsxs("button",{onClick:c,className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors flex items-center justify-center gap-2",children:[p.jsx(AC,{size:16}),"Save Current Preset"]}),r&&p.jsxs("div",{className:"p-3 bg-white/5 border border-white/10 rounded-lg space-y-2",children:[p.jsx("input",{type:"text",value:a,onChange:m=>o(m.target.value),onKeyDown:m=>{m.key==="Enter"&&d(),m.key==="Escape"&&s(!1)},placeholder:"Preset name...",className:"w-full px-2 py-1.5 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500",autoFocus:!0}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:d,disabled:!a.trim(),className:"flex-1 px-2 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white rounded text-xs font-medium transition-colors",children:"Save"}),p.jsx("button",{onClick:()=>s(!1),className:"flex-1 px-2 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors",children:"Cancel"})]})]}),p.jsxs("div",{className:"space-y-1.5 max-h-64 overflow-y-auto",children:[n.map(m=>p.jsxs("div",{className:"flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors group",children:[p.jsxs("button",{onClick:()=>f(m),className:"flex-1 flex items-center gap-2 text-left",children:[p.jsx(xC,{size:14,className:"text-blue-400 flex-shrink-0"}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("div",{className:"text-sm text-white truncate",children:m.name}),m.isBuiltIn&&p.jsx("div",{className:"text-xs text-blue-400",children:"Built-in"})]})]}),!m.isBuiltIn&&p.jsx("button",{onClick:()=>h(m.id),className:"p-1.5 hover:bg-red-600/20 rounded transition-colors opacity-0 group-hover:opacity-100",title:"Delete preset",children:p.jsx(cp,{size:14,className:"text-red-400"})})]},m.id)),n.length===0&&p.jsx("div",{className:"text-center py-4 text-white/40 text-sm",children:"No presets saved yet"})]})]})}function Ix({midiState:t,onEnableChange:e,onDeviceChange:n,onSmoothingChange:i,onLearnModeChange:r,onRemoveMapping:s,onClearMappings:a}){const{isSupported:o,hasAccess:l,isInitializing:c,devices:d,settings:h,learningParameterId:f,lastActivity:m}=t,v=Date.now()-m<100;return o?p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx(Mg,{size:18,className:"text-green-400"}),p.jsx("h3",{className:"text-sm font-semibold text-white",children:"MIDI"}),v&&p.jsx(jc,{size:8,className:"text-green-400 fill-green-400 animate-pulse"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("input",{type:"checkbox",id:"midiEnable",checked:h.enabled,onChange:x=>e(x.target.checked),className:"w-4 h-4"}),p.jsx("label",{htmlFor:"midiEnable",className:"text-sm",children:"Enable MIDI"})]}),h.enabled&&c&&p.jsx("p",{className:"text-sm text-blue-400",children:"Requesting MIDI access..."}),h.enabled&&!l&&!c&&p.jsx("p",{className:"text-sm text-yellow-400",children:"MIDI access denied. Please allow MIDI permissions in your browser."}),h.enabled&&l&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Input Device"}),p.jsxs("select",{value:h.selectedDeviceId||"all",onChange:x=>n(x.target.value==="all"?null:x.target.value),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-green-500 text-sm",children:[p.jsx("option",{value:"all",children:"All Inputs"}),d.map(x=>p.jsx("option",{value:x.id,children:x.name},x.id))]}),d.length===0&&p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"No MIDI devices detected"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["MIDI Smoothing: ",h.smoothing.toFixed(2)]}),p.jsx("input",{type:"range",min:"0",max:"0.9",step:"0.05",value:h.smoothing,onChange:x=>i(parseFloat(x.target.value)),className:"w-full"})]}),p.jsxs("div",{className:"pt-2 border-t border-white/10",children:[p.jsx("button",{onClick:()=>r(!h.learnMode),className:`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${h.learnMode?"bg-green-600 hover:bg-green-700 text-white":"bg-white/10 hover:bg-white/20 text-white"}`,children:h.learnMode?"MIDI Learn: ON":"MIDI Learn: OFF"}),h.learnMode&&f&&p.jsx("p",{className:"text-xs text-green-400 mt-2 text-center",children:"Move a MIDI knob to bind it..."})]}),h.mappings.length>0&&p.jsxs("div",{className:"pt-2 border-t border-white/10",children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("h4",{className:"text-sm font-semibold",children:"Mappings"}),p.jsx("button",{onClick:a,className:"text-xs text-red-400 hover:text-red-300",children:"Clear All"})]}),p.jsx("div",{className:"space-y-1.5 max-h-48 overflow-y-auto",children:h.mappings.map(x=>p.jsxs("div",{className:"flex items-center justify-between p-2 bg-white/5 rounded text-xs group",children:[p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("div",{className:"text-white truncate",children:x.parameterName}),p.jsxs("div",{className:"text-white/50",children:["CC ",x.ccNumber]})]}),p.jsx("button",{onClick:()=>s(x.parameterId),className:"p-1 hover:bg-red-600/20 rounded opacity-0 group-hover:opacity-100 transition-opacity",title:"Remove mapping",children:p.jsx(cp,{size:12,className:"text-red-400"})})]},x.parameterId))})]})]})]}):p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx(Mg,{size:18,className:"text-red-400"}),p.jsx("h3",{className:"text-sm font-semibold text-white",children:"MIDI"})]}),p.jsx("p",{className:"text-sm text-red-400",children:"Web MIDI API not supported in this browser"})]})}function kC({meshSettings:t,audioSettings:e,globalSettings:n,particleSettings:i,audioFeatures:r,midiState:s,onMeshSettingsChange:a,onAudioSettingsChange:o,onGlobalSettingsChange:l,onParticleSettingsChange:c,onHelpClick:d,onReset:h,onLoadPreset:f,onMIDIEnableChange:m,onMIDIDeviceChange:v,onMIDISmoothingChange:x,onMIDILearnModeChange:g,onMIDIRemoveMapping:u,onMIDIClearMappings:_,onParameterClick:y}){const[M,w]=J.useState(!0),[T,C]=J.useState(!0),R=t.renderStyle===Dt.PARTICLES,b=(D=>.1-(D-.05)*.2)(n.parameterSmoothing),I=(D,H,X,G)=>{s.settings.learnMode&&y&&y(D,H,X,G)},V=(D,H)=>{s.settings.learnMode&&y&&y(D,H,0,1,!0)},z=D=>s.settings.learnMode&&s.learningParameterId===D?"ring-2 ring-green-500":"";return p.jsxs("div",{className:`fixed top-16 right-0 bottom-0 bg-black/80 backdrop-blur-md border-l border-white/10 transition-transform duration-300 ${M?"translate-x-0":"translate-x-full"} w-96 overflow-y-auto`,children:[p.jsx("button",{onClick:()=>w(!M),className:"absolute -left-10 top-4 p-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-l-lg hover:bg-white/10 transition-colors",children:M?p.jsx(vC,{size:20}):p.jsx(gC,{size:20})}),p.jsxs("div",{className:"p-6 space-y-6",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("h2",{className:"text-xl font-bold",children:"Controls"}),p.jsx("button",{onClick:d,className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:p.jsx(SC,{size:20})})]}),p.jsx("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:p.jsx(OC,{onLoadPreset:f,getCurrentPresetData:()=>({name:"",meshSettings:t,audioSettings:e,globalSettings:n})})}),p.jsx("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:p.jsx(Ix,{midiState:s,onEnableChange:m,onDeviceChange:v,onSmoothingChange:x,onLearnModeChange:g,onRemoveMapping:u,onClearMappings:_})}),T&&p.jsxs("div",{className:"space-y-3 bg-white/5 rounded-lg p-4",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("h3",{className:"text-sm font-semibold",children:"Audio Analysis"}),p.jsx("button",{onClick:()=>C(!1),className:"text-xs text-white/50 hover:text-white/80",children:"Hide"})]}),p.jsxs("div",{className:"space-y-2 text-xs",children:[[{label:"Energy",value:r.energy,color:"from-blue-500 to-cyan-500"},{label:"Sub",value:r.sub,color:"bg-red-500"},{label:"Bass",value:r.bass,color:"bg-orange-500"},{label:"Mids",value:r.mids,color:"bg-yellow-500"},{label:"Highs",value:r.highs,color:"bg-cyan-500"}].map(({label:D,value:H,color:X})=>p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("span",{className:"text-white/70",children:D}),p.jsx("span",{className:"font-mono",children:H.toFixed(2)})]}),p.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:p.jsx("div",{className:`h-full ${X.startsWith("from")?`bg-gradient-to-r ${X}`:X}`,style:{width:`${H*100}%`}})})]},D)),p.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/10",children:[p.jsx("span",{className:"text-white/70",children:"Peak Trigger"}),p.jsx("div",{className:`w-3 h-3 rounded-full ${r.peakTrigger?"bg-green-500":"bg-white/20"}`})]})]})]}),!T&&p.jsx("button",{onClick:()=>C(!0),className:"text-sm text-white/50 hover:text-white/80",children:"Show Audio Analysis"}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"text-lg font-semibold border-b border-white/10 pb-2",children:"Reactive Mesh"}),!R&&p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Geometry"}),p.jsxs("select",{value:t.geometryType,onChange:D=>a({...t,geometryType:D.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:$t.PLANE,children:"Plane"}),p.jsx("option",{value:$t.SPHERE,children:"Sphere"}),p.jsx("option",{value:$t.ICOSPHERE,children:"Icosphere"}),p.jsx("option",{value:$t.TORUS,children:"Torus"}),p.jsx("option",{value:$t.CUBE,children:"Cube"}),p.jsx("option",{value:$t.CYLINDER,children:"Cylinder"})]})]}),!R&&p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Detail Level"}),p.jsxs("select",{value:t.detailLevel,onChange:D=>a({...t,detailLevel:D.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:Tn.LOW,children:"Low"}),p.jsx("option",{value:Tn.MEDIUM,children:"Medium"}),p.jsx("option",{value:Tn.HIGH,children:"High"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Render Style"}),p.jsxs("select",{value:t.renderStyle,onChange:D=>a({...t,renderStyle:D.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:Dt.WIREFRAME,children:"Wireframe"}),p.jsx("option",{value:Dt.POINTS,children:"Points"}),p.jsx("option",{value:Dt.PARTICLES,children:"Particles"})]})]}),!R&&p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Base Color"}),p.jsx("input",{type:"color",value:t.baseColor,onChange:D=>a({...t,baseColor:D.target.value}),className:"w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer"})]}),t.renderStyle===Dt.POINTS&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Point Size: ",t.pointSize.toFixed(2)]}),p.jsx("input",{type:"range",min:"0.1",max:"3",step:b,value:t.pointSize,onChange:D=>a({...t,pointSize:parseFloat(D.target.value)}),onClick:()=>I("pointSize","Point Size",.1,3),className:`w-full ${z("pointSize")}`})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Point Density: ",(t.pointDensity*100).toFixed(0),"%"]}),p.jsx("input",{type:"range",min:"0.1",max:"1",step:b,value:t.pointDensity,onChange:D=>a({...t,pointDensity:parseFloat(D.target.value)}),onClick:()=>I("pointDensity","Point Density",.1,1),className:`w-full ${z("pointDensity")}`})]})]}),!R&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Displacement: ",t.displacement.toFixed(2)]}),p.jsx("input",{type:"range",min:"0",max:"2",step:b,value:t.displacement,onChange:D=>a({...t,displacement:parseFloat(D.target.value)}),onClick:()=>I("displacement","Displacement",0,2),className:`w-full ${z("displacement")}`})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Noise Scale: ",t.noiseScale.toFixed(2)]}),p.jsx("input",{type:"range",min:"0.5",max:"5",step:b,value:t.noiseScale,onChange:D=>a({...t,noiseScale:parseFloat(D.target.value)}),onClick:()=>I("noiseScale","Noise Scale",.5,5),className:`w-full ${z("noiseScale")}`})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Noise Speed: ",t.noiseSpeed.toFixed(2)]}),p.jsx("input",{type:"range",min:"0.1",max:"2",step:b,value:t.noiseSpeed,onChange:D=>a({...t,noiseSpeed:parseFloat(D.target.value)}),onClick:()=>I("noiseSpeed","Noise Speed",.1,2),className:`w-full ${z("noiseSpeed")}`})]}),p.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[p.jsx("h4",{className:"text-sm font-semibold",children:"Band Mapping"}),[{key:"subWeight",label:"Sub",value:t.subWeight},{key:"bassWeight",label:"Bass",value:t.bassWeight},{key:"midsWeight",label:"Mids",value:t.midsWeight},{key:"highsWeight",label:"Highs",value:t.highsWeight}].map(({key:D,label:H,value:X})=>p.jsxs("div",{children:[p.jsxs("label",{className:"block text-xs text-white/70 mb-1",children:[H,": ",X.toFixed(2)]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:X,onChange:G=>a({...t,[D]:parseFloat(G.target.value)}),onClick:()=>I(D,`${H} Band`,0,1),className:`w-full ${z(D)}`})]},D))]}),p.jsxs("div",{className:`flex items-center gap-2 p-2 rounded ${z("pulseOnPeak")}`,onClick:()=>V("pulseOnPeak","Pulse on Peak"),children:[p.jsx("input",{type:"checkbox",id:"pulseOnPeak",checked:t.pulseOnPeak,onChange:D=>a({...t,pulseOnPeak:D.target.checked}),className:"w-4 h-4"}),p.jsx("label",{htmlFor:"pulseOnPeak",className:"text-sm cursor-pointer",children:"Pulse on Peak"})]})]})]}),R&&p.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/10",children:[p.jsx("h3",{className:"text-lg font-semibold",children:"Particle System"}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quality"}),p.jsxs("select",{value:i.quality,onChange:D=>c({...i,quality:D.target.value}),className:"w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:mr.LOW,children:"Low (18k particles)"}),p.jsx("option",{value:mr.MEDIUM,children:"Medium (42k particles)"}),p.jsx("option",{value:mr.HIGH,children:"High (80k particles)"})]})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Field Size: ",i.fieldSize.toFixed(0)]}),p.jsx("input",{type:"range",min:"5",max:"50",step:"1",value:i.fieldSize,onChange:D=>c({...i,fieldSize:parseFloat(D.target.value)}),className:"w-full"})]}),p.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[p.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"✦ Core Layer"}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Core Color"}),p.jsx("input",{type:"color",value:i.coreColor,onChange:D=>c({...i,coreColor:D.target.value}),className:"w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Core Size: ",i.coreSize.toFixed(1)]}),p.jsx("input",{type:"range",min:"0.5",max:"8",step:"0.1",value:i.coreSize,onChange:D=>c({...i,coreSize:parseFloat(D.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Core Brightness: ",i.coreBrightness.toFixed(1)]}),p.jsx("input",{type:"range",min:"0.5",max:"4",step:"0.1",value:i.coreBrightness,onChange:D=>c({...i,coreBrightness:parseFloat(D.target.value)}),className:"w-full"})]})]}),p.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[p.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"◎ Outer Layer"}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2",children:"Outer Color"}),p.jsx("input",{type:"color",value:i.outerColor,onChange:D=>c({...i,outerColor:D.target.value}),className:"w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Outer Size: ",i.outerSize.toFixed(1)]}),p.jsx("input",{type:"range",min:"2",max:"20",step:"0.5",value:i.outerSize,onChange:D=>c({...i,outerSize:parseFloat(D.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Outer Opacity: ",i.outerOpacity.toFixed(2)]}),p.jsx("input",{type:"range",min:"0.01",max:"0.8",step:"0.01",value:i.outerOpacity,onChange:D=>c({...i,outerOpacity:parseFloat(D.target.value)}),className:"w-full"})]})]}),p.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[p.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"↯ Motion"}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Turbulence: ",i.turbulence.toFixed(1)]}),p.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:i.turbulence,onChange:D=>c({...i,turbulence:parseFloat(D.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Noise Speed: ",i.noiseSpeed.toFixed(2)]}),p.jsx("input",{type:"range",min:"0.01",max:"1",step:"0.01",value:i.noiseSpeed,onChange:D=>c({...i,noiseSpeed:parseFloat(D.target.value)}),className:"w-full"})]})]}),p.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[p.jsx("h4",{className:"text-sm font-semibold text-white/80",children:"♫ Audio Reactivity"}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Bass Reactivity: ",i.bassReactivity.toFixed(1)]}),p.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:i.bassReactivity,onChange:D=>c({...i,bassReactivity:parseFloat(D.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Highs Reactivity: ",i.highsReactivity.toFixed(1)]}),p.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:i.highsReactivity,onChange:D=>c({...i,highsReactivity:parseFloat(D.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Energy Reactivity: ",i.energyReactivity.toFixed(1)]}),p.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:i.energyReactivity,onChange:D=>c({...i,energyReactivity:parseFloat(D.target.value)}),className:"w-full"})]}),p.jsxs("div",{className:"flex items-center gap-2 p-2 rounded",children:[p.jsx("input",{type:"checkbox",id:"particlePeakBurst",checked:i.peakBurst,onChange:D=>c({...i,peakBurst:D.target.checked}),className:"w-4 h-4"}),p.jsx("label",{htmlFor:"particlePeakBurst",className:"text-sm cursor-pointer",children:"Peak Burst"})]})]}),p.jsx("button",{onClick:()=>c(Yl),className:"w-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors",children:"Reset Particle Defaults"})]}),p.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/10",children:[p.jsx("h3",{className:"text-lg font-semibold",children:"Audio Analysis"}),[{key:"smoothing",label:"Smoothing",min:0,max:.95,step:.05,id:"audioSmoothing"},{key:"sensitivity",label:"Sensitivity",min:.5,max:3,step:.1,id:"audioSensitivity"},{key:"peakThreshold",label:"Peak Threshold",min:.1,max:.8,step:.05,id:"peakThreshold"},{key:"peakCooldown",label:"Peak Cooldown",min:50,max:500,step:50,id:"peakCooldown",suffix:"ms"}].map(({key:D,label:H,min:X,max:G,step:U,id:$,suffix:q})=>p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:[H,": ",e[D].toFixed(D==="peakCooldown"?0:2),q??""]}),p.jsx("input",{type:"range",min:X,max:G,step:U,value:e[D],onChange:ne=>o({...e,[D]:parseFloat(ne.target.value)}),onClick:()=>I($,H,X,G),className:`w-full ${z($)}`})]},D))]}),p.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/10",children:[p.jsx("h3",{className:"text-lg font-semibold",children:"Global Settings"}),p.jsxs("div",{className:`flex items-center gap-2 p-2 rounded ${z("autoOrbit")}`,onClick:()=>V("autoOrbit","Auto Orbit"),children:[p.jsx("input",{type:"checkbox",id:"autoOrbit",checked:n.autoOrbit,onChange:D=>l({...n,autoOrbit:D.target.checked}),className:"w-4 h-4"}),p.jsx("label",{htmlFor:"autoOrbit",className:"text-sm cursor-pointer",children:"Auto Orbit"})]}),n.autoOrbit&&p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Orbit Speed: ",n.orbitSpeed.toFixed(2)]}),p.jsx("input",{type:"range",min:"0.1",max:"2",step:b,value:n.orbitSpeed,onChange:D=>l({...n,orbitSpeed:parseFloat(D.target.value)}),onClick:()=>I("orbitSpeed","Orbit Speed",.1,2),className:`w-full ${z("orbitSpeed")}`})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Parameter Smoothing: ",n.parameterSmoothing.toFixed(2)]}),p.jsx("input",{type:"range",min:"0.05",max:"0.5",step:"0.05",value:n.parameterSmoothing,onChange:D=>l({...n,parameterSmoothing:parseFloat(D.target.value)}),className:"w-full"}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"Controls smoothness of all parameter changes"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("input",{type:"checkbox",id:"bloom",checked:n.bloom,onChange:D=>l({...n,bloom:D.target.checked}),className:"w-4 h-4"}),p.jsx("label",{htmlFor:"bloom",className:"text-sm text-white",children:"Bloom Effect"})]}),n.bloom&&p.jsx(p.Fragment,{children:[{key:"bloomStrength",label:"Bloom Strength",min:0,max:3,step:.1},{key:"bloomRadius",label:"Bloom Radius",min:0,max:1,step:.05},{key:"bloomThreshold",label:"Bloom Threshold",min:0,max:1,step:.05}].map(({key:D,label:H,min:X,max:G,step:U})=>p.jsxs("div",{children:[p.jsxs("label",{className:"text-xs text-white/70 flex justify-between",children:[p.jsx("span",{children:H}),p.jsx("span",{children:n[D].toFixed(2)})]}),p.jsx("input",{type:"range",min:X,max:G,step:U,value:n[D],onChange:$=>l({...n,[D]:parseFloat($.target.value)}),className:"w-full"})]},D))})]}),p.jsx("button",{onClick:h,className:"w-full px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",children:"Reset to Defaults"})]})]})}function zC({isOpen:t,onClose:e}){return t?p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:p.jsxs("div",{className:"bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto",children:[p.jsxs("div",{className:"sticky top-0 bg-gray-900 border-b border-white/10 px-6 py-4 flex items-center justify-between",children:[p.jsx("h2",{className:"text-2xl font-bold",children:"Audio Reactive 3D Visualizer"}),p.jsx("button",{onClick:e,className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:p.jsx(Nx,{size:24})})]}),p.jsxs("div",{className:"px-6 py-6 space-y-6",children:[p.jsxs("section",{children:[p.jsx("h3",{className:"text-xl font-semibold mb-3",children:"How to Use"}),p.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-white/80",children:[p.jsx("li",{children:'Click the "Upload" button to load an audio file (MP3, WAV, AAC supported, up to ~7 minutes)'}),p.jsx("li",{children:"Press Play to start the visualization"}),p.jsx("li",{children:"Select a visualization mode: Reactive Mesh or Particles"}),p.jsx("li",{children:"Adjust controls to customize the visual experience"}),p.jsx("li",{children:"Use your mouse to orbit around the scene"})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Visualization Modes"}),p.jsxs("div",{className:"space-y-3 text-white/80",children:[p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Reactive Mesh:"})," A 3D geometric shape that deforms and pulses in response to audio. Choose from different geometries, adjust displacement, and map audio bands to control the effect."]}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Particles:"})," A volumetric particle field with GPU-driven motion. Particles move organically through 3D space and react to audio energy."]})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Audio Analysis Parameters"}),p.jsxs("div",{className:"space-y-2 text-white/80",children:[p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Smoothing (0.0-0.95):"})," Higher values create smoother, slower transitions in the audio analysis"]}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Sensitivity (0.5-3.0):"})," Multiplier for all audio bands; increase for more dramatic reactions"]}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Peak Threshold:"})," Controls when bass peaks trigger special effects"]}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Peak Cooldown:"})," Minimum time between peak triggers (in milliseconds)"]})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Audio Bands"}),p.jsxs("div",{className:"space-y-2 text-white/80",children:[p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Sub (20-60Hz):"})," Deep sub-bass frequencies"]}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Bass (60-250Hz):"})," Bass and low-mid frequencies"]}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Mids (250-2000Hz):"})," Mid-range frequencies (vocals, most instruments)"]}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-white",children:"Highs (2000-12000Hz):"})," High frequencies (cymbals, hi-hats, brightness)"]})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Tips for Best Results"}),p.jsxs("ul",{className:"list-disc list-inside space-y-2 text-white/80",children:[p.jsx("li",{children:"Try different geometries to find what works best with your audio"}),p.jsx("li",{children:"Adjust band mapping weights to emphasize different frequency ranges"}),p.jsx("li",{children:"Increase sensitivity for more dramatic reactions"}),p.jsx("li",{children:'Enable "Pulse on Peak" or "Peak Burst" for extra visual impact on bass hits'}),p.jsx("li",{children:"Use Auto Orbit to slowly rotate the camera for a dynamic view"}),p.jsx("li",{children:"Electronic music with strong bass tends to produce the most dramatic effects"})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Performance"}),p.jsx("div",{className:"text-white/80",children:"For best performance, start with Medium quality settings. If you experience lag, reduce particle quality or geometry detail. High settings work best on powerful GPUs."})]})]})]})}):null}function BC({isRecording:t,recordingTime:e,canRecord:n,onStartRecording:i,onStopRecording:r}){const[s,a]=J.useState(!0),[o,l]=J.useState(null),c=d=>{const h=Math.floor(d/60),f=d%60;return`${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")}`};return J.useEffect(()=>{const d=()=>{a(!0),o!==null&&clearTimeout(o);const f=window.setTimeout(()=>{a(!1)},3e3);l(f)};window.addEventListener("mousemove",d);const h=window.setTimeout(()=>{a(!1)},3e3);return l(h),()=>{window.removeEventListener("mousemove",d),o!==null&&clearTimeout(o)}},[]),J.useEffect(()=>{a(!0),o!==null&&clearTimeout(o);const d=window.setTimeout(()=>{a(!1)},3e3);l(d)},[t]),p.jsx("div",{className:`fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10 transition-opacity duration-300 ${s?"opacity-100":"opacity-0 pointer-events-none"}`,children:p.jsxs("div",{className:"flex items-center gap-3",children:[t&&p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),p.jsx("span",{className:"text-sm text-white/90 font-mono",children:c(e)})]}),p.jsx("button",{onClick:t?r:i,disabled:!n&&!t,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:t?"Stop Recording (R)":"Start Recording (R)",children:t?p.jsx(lp,{size:20,className:"text-white"}):p.jsx(jc,{size:20,className:"text-red-500"})})]})})}function VC({presetName:t,onSave:e,onDiscard:n,onCancel:i}){return p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:p.jsxs("div",{className:"bg-gray-900 rounded-lg border border-white/10 shadow-2xl w-full max-w-md",children:[p.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-white/10",children:[p.jsx("h2",{className:"text-xl font-semibold",children:"Save Changes?"}),p.jsx("button",{onClick:i,className:"p-1 hover:bg-white/10 rounded transition-colors",children:p.jsx(Nx,{size:20})})]}),p.jsxs("div",{className:"p-4",children:[p.jsxs("p",{className:"text-white/70 mb-4",children:['You have modified the preset "',t,'". Would you like to save your changes?']}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium",children:"Save Changes"}),p.jsx("button",{onClick:n,className:"flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors",children:"Don't Save"}),p.jsx("button",{onClick:i,className:"px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors",children:"Cancel"})]})]})]})})}var $h=(t=>(t.IMAGE="image",t.VIDEO="video",t))($h||{}),Kt=(t=>(t.PLANE="plane",t.SPHERE="sphere",t.TORUS="torus",t.CUBE="cube",t.CYLINDER="cylinder",t))(Kt||{}),Zt=(t=>(t.MODE_2D="2d",t.MODE_3D="3d",t))(Zt||{}),mi=(t=>(t.COVER="cover",t.CONTAIN="contain",t))(mi||{}),Qn=(t=>(t.OFF="off",t.LOW="low",t.HIGH="high",t))(Qn||{});const HC=`
${Lo}

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
`,GC=`
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
`;class wg{constructor(e){this.mesh=null,this.material=null,this.mediaTexture=null,this.mediaFile=null,this.currentSettings=null,this.handleResize=()=>{var s;const n=this.renderer.domElement,i=n.clientWidth,r=n.clientHeight;if(this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,r),this.material&&(this.material.uniforms.resolution&&this.material.uniforms.resolution.value.set(i,r),this.material.uniforms.uViewAspect&&(this.material.uniforms.uViewAspect.value=i/r)),this.currentSettings&&this.mesh&&this.mesh.geometry instanceof Bn&&((s=this.mediaTexture)!=null&&s.image)){let a=1.7777777777777777;this.mediaTexture.image.videoWidth?a=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?a=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(a=this.mediaTexture.image.width/this.mediaTexture.image.height);const o=this.calculatePlaneSize(a,this.currentSettings.fitMode);this.mesh.geometry.dispose(),this.mesh.geometry=new Bn(o.width,o.height,128,128)}},this.scene=new gx,this.scene.background=new Ze(0),this.camera=new dn(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.z=2,this.renderer=new wx({canvas:e,antialias:!0,alpha:!1}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.controls=new Tx(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=1,this.controls.maxDistance=20,this.controls.enabled=!1,this.clock=new _x,window.addEventListener("resize",this.handleResize)}calculatePlaneSize(e,n){const i=this.camera.position.z,r=aM.degToRad(this.camera.fov),s=2*Math.tan(r/2)*i,a=s*this.camera.aspect;let o=a,l=a/e;return n===mi.COVER?l<s&&(l=s,o=s*e):l>s&&(l=s,o=s*e),{width:o,height:l}}loadMedia(e){if(this.mediaFile=e,this.mediaTexture&&this.mediaTexture.dispose(),e.element instanceof HTMLVideoElement?(e.element.crossOrigin="anonymous",e.element.setAttribute("playsinline","true"),this.mediaTexture=new LM(e.element),this.mediaTexture.minFilter=Et,this.mediaTexture.magFilter=Et,this.mediaTexture.wrapS=Hn,this.mediaTexture.wrapT=Hn,this.mediaTexture.format=qf,this.mediaTexture.generateMipmaps=!1,this.mediaTexture.colorSpace=bn):e.element instanceof HTMLImageElement&&(this.mediaTexture=new en(e.element),this.mediaTexture.minFilter=Et,this.mediaTexture.magFilter=Et,this.mediaTexture.wrapS=Hn,this.mediaTexture.wrapT=Hn,this.mediaTexture.colorSpace=bn,this.mediaTexture.needsUpdate=!0),this.material&&this.mediaTexture&&this.mediaTexture.image){let n=1.7777777777777777;this.mediaTexture.image.videoWidth?n=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?n=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(n=this.mediaTexture.image.width/this.mediaTexture.image.height),this.material.uniforms.uMediaAspect&&(this.material.uniforms.uMediaAspect.value=n)}}initialize(e){if(this.currentSettings=e,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.material&&this.material.dispose()),!this.mediaTexture)return;let n;if(e.renderMode===Zt.MODE_2D||e.geometry===Kt.PLANE){let a=1.7777777777777777;this.mediaTexture.image&&(this.mediaTexture.image.videoWidth?a=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?a=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(a=this.mediaTexture.image.width/this.mediaTexture.image.height));const o=this.calculatePlaneSize(a,e.fitMode);n=new Bn(o.width,o.height,128,128)}else e.geometry===Kt.SPHERE?n=new oa(1,128,128):e.geometry===Kt.TORUS?n=new bo(.8,.4,64,128):e.geometry===Kt.CUBE?n=new Cr(1.5,1.5,1.5,64,64,64):n=new Eo(.6,.6,1.5,64,64);let i=16/9;this.mediaTexture.image&&(this.mediaTexture.image.videoWidth?i=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?i=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(i=this.mediaTexture.image.width/this.mediaTexture.image.height));const r=this.renderer.domElement,s=r.clientWidth/r.clientHeight;this.material=new Lt({uniforms:{mediaTexture:{value:this.mediaTexture},intensity:{value:e.intensity},brightness:{value:e.brightness},contrast:{value:e.contrast},rgbSplit:{value:e.rgbSplit},glitch:{value:e.glitch},zoomPulse:{value:e.zoomPulse},displacement:{value:e.displacement},geometryDisplacement:{value:e.geometryDisplacement},time:{value:0},peakTrigger:{value:0},bassEnergy:{value:0},energy:{value:0},resolution:{value:new Fe(window.innerWidth,window.innerHeight)},uMediaAspect:{value:i},uViewAspect:{value:s},uFitMode:{value:e.fitMode===mi.CONTAIN?0:1}},vertexShader:HC,fragmentShader:GC,side:Ti}),this.mesh=new ai(n,this.material),this.scene.add(this.mesh),e.renderMode===Zt.MODE_3D?(this.camera.position.set(0,0,3),this.controls.enabled=!0,this.controls.target.set(0,0,0),this.controls.update()):(this.camera.position.set(0,0,2),this.controls.enabled=!1,this.controls.target.set(0,0,0),this.controls.update()),this.updateAutoOrbit(e.autoOrbit,e.orbitSpeed)}update(e,n){if(!this.material)return;const i=this.clock.getElapsedTime(),r=n.intensity;this.material.uniforms.time.value=i,this.material.uniforms.intensity.value=n.intensity,this.material.uniforms.brightness.value=n.brightness,this.material.uniforms.contrast.value=n.contrast,this.material.uniforms.rgbSplit.value=n.rgbSplit*r,this.material.uniforms.glitch.value=n.glitch*r,this.material.uniforms.zoomPulse.value=n.zoomPulse*r,this.material.uniforms.displacement.value=n.displacement*r,this.material.uniforms.geometryDisplacement.value=n.geometryDisplacement*r,this.material.uniforms.bassEnergy.value=e.bass,this.material.uniforms.energy.value=e.energy,this.material.uniforms.peakTrigger.value=e.peakTrigger?1:0}updateAutoOrbit(e,n){e?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=n):this.controls.autoRotate=!1}updateSettings(e){if(!this.material)return;!this.mesh||this.mesh.geometry instanceof Bn&&e.renderMode===Zt.MODE_3D&&e.geometry!==Kt.PLANE||!(this.mesh.geometry instanceof Bn)&&(e.renderMode===Zt.MODE_2D||e.geometry===Kt.PLANE)||this.mesh.geometry instanceof oa&&e.geometry!==Kt.SPHERE||this.mesh.geometry instanceof bo&&e.geometry!==Kt.TORUS||this.mesh.geometry instanceof Cr&&e.geometry!==Kt.CUBE||this.mesh.geometry instanceof Eo&&e.geometry!==Kt.CYLINDER||this.currentSettings&&e.fitMode!==this.currentSettings.fitMode?this.initialize(e):(this.currentSettings=e,this.material.uniforms.uFitMode&&(this.material.uniforms.uFitMode.value=e.fitMode===mi.CONTAIN?0:1),e.renderMode===Zt.MODE_3D?this.controls.enabled=!0:this.controls.enabled=!1),this.updateAutoOrbit(e.autoOrbit,e.orbitSpeed)}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose()),this.material&&this.material.dispose(),this.mediaTexture&&this.mediaTexture.dispose(),this.renderer.dispose()}getRenderer(){return this.renderer}updateCameraAndRenderer(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.material&&(this.material.uniforms.resolution&&this.material.uniforms.resolution.value.set(e,n),this.material.uniforms.uViewAspect&&(this.material.uniforms.uViewAspect.value=e/n))}setRenderSizeForRecording(e,n){var i;if(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.material&&(this.material.uniforms.resolution&&this.material.uniforms.resolution.value.set(e,n),this.material.uniforms.uViewAspect&&(this.material.uniforms.uViewAspect.value=e/n)),this.currentSettings&&this.mesh&&this.mesh.geometry instanceof Bn&&((i=this.mediaTexture)!=null&&i.image)){let r=1.7777777777777777;this.mediaTexture.image.videoWidth?r=this.mediaTexture.image.videoWidth/this.mediaTexture.image.videoHeight:this.mediaTexture.image instanceof HTMLImageElement?r=this.mediaTexture.image.naturalWidth/this.mediaTexture.image.naturalHeight:this.mediaTexture.image.width&&this.mediaTexture.image.height&&(r=this.mediaTexture.image.width/this.mediaTexture.image.height);const s=this.calculatePlaneSize(r,this.currentSettings.fitMode);this.mesh.geometry.dispose(),this.mesh.geometry=new Bn(s.width,s.height,128,128)}}}const jC={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};class Tg{constructor(e){this.mediaFile=null,this.fitMode=mi.COVER,this.debugCallback=null,this.perfCallback=null,this.time=0,this.lastFrameTime=Date.now(),this.tempCanvas=null,this.tempCtx=null,this.sourceImageData=null,this.outputImageData=null,this.canvas=e;const n=e.getContext("2d",{alpha:!1});if(!n)throw new Error("Failed to get 2D context");this.ctx=n}setDebugCallback(e){this.debugCallback=e}setPerfCallback(e){this.perfCallback=e}loadMedia(e){this.mediaFile=e}setFitMode(e){this.fitMode=e}getMediaDimensions(){if(!this.mediaFile)return null;const e=this.mediaFile.element;return e instanceof HTMLVideoElement?e.videoWidth>0&&e.videoHeight>0?{width:e.videoWidth,height:e.videoHeight}:null:e instanceof HTMLImageElement&&e.naturalWidth>0&&e.naturalHeight>0?{width:e.naturalWidth,height:e.naturalHeight}:null}calculateDrawParams(){const e=this.getMediaDimensions();if(!e)return null;const n=this.canvas.width,i=this.canvas.height,r=e.width,s=e.height,a=n/i,o=r/s;let l=0,c=0,d=n,h=i;return this.fitMode===mi.CONTAIN?o>a?(d=n,h=n/o,l=0,c=(i-h)/2):(h=i,d=i*o,c=0,l=(n-d)/2):o>a?(h=i,d=i*o,c=0,l=(n-d)/2):(d=n,h=n/o,l=0,c=(i-h)/2),{dx:l,dy:c,dw:d,dh:h,mediaWidth:r,mediaHeight:s}}random(e,n){const i=Math.sin(e*12.9898+n*78.233)*43758.5453123;return i-Math.floor(i)}applyZoomPulse(e,n,i,r,s){if(i<.01)return{x:e,y:n};const a=.5,o=.5;let l=e-a,c=n-o;const d=i*.1,h=Math.sin(this.time*2+r*Math.PI)*i*.15,f=r*i*.3;let m=1+d+h+f;s&&(m+=i*.2),m=Math.max(m,.5),l/=m,c/=m;const v=Math.max(0,Math.min(1,a+l)),x=Math.max(0,Math.min(1,o+c));return{x:v,y:x}}applyDisplacement(e,n,i,r,s){if(i<.01)return{x:e,y:n};const a=.5,o=.5;let l=e-a,c=n-o;const d=Math.sqrt(l*l+c*c),h=r*.3+s*.2,f=Math.sin(d*15-this.time*2)*i*.015*(1+h),m=Math.atan2(c,l);l+=Math.cos(m)*f,c+=Math.sin(m)*f;const v=Math.max(0,Math.min(1,a+l)),x=Math.max(0,Math.min(1,o+c));return{x:v,y:x}}applyGlitch(e,n,i,r,s){if(i<.01)return{x:e,y:n};const a=Math.floor(n*25),o=i*.015,l=r*i*.04,c=this.random(a,Math.floor(this.time*6))*i*.02,d=o+l+c;let h=e+d,f=n;if(s||r>.6){const m=this.random(this.time,a)*i*.015;f+=m}return h=Math.max(0,Math.min(1,h)),f=Math.max(0,Math.min(1,f)),{x:h,y:f}}renderLowQuality(e,n,i){const r=this.mediaFile.element,s=n.energy,a=n.bass,o=n.peakTrigger,l=i.intensity,c=i.brightness,d=i.contrast,h=i.zoomPulse,f=i.rgbSplit,m=i.glitch,v=i.displacement;if(!(f>.01||m>.01||v>.01)){if(this.ctx.save(),this.ctx.translate(this.canvas.width/2,this.canvas.height/2),h>.01){const q=h*.15,ne=Math.sin(this.time*2+s*Math.PI)*h*.3,se=s*h*.6;let Ne=1+q+ne+se;o&&(Ne+=h*.4),this.ctx.scale(Ne,Ne)}this.ctx.translate(-this.canvas.width/2,-this.canvas.height/2);const D=(c-.5)*2,H=s*.5*l,X=D+H,G=1+(d-.5)*4,U=s*1.5*l,$=Math.max(G+U,.1);if(X!==0||$!==1){const q=Math.round(X*100),ne=Math.round($*100);this.ctx.filter=`brightness(${100+q}%) contrast(${ne}%)`}this.ctx.drawImage(r,e.dx,e.dy,e.dw,e.dh),this.ctx.restore(),this.perfCallback&&this.perfCallback(`${this.canvas.width}x${this.canvas.height} (fast)`);return}if(this.tempCanvas||(this.tempCanvas=document.createElement("canvas"),this.tempCtx=this.tempCanvas.getContext("2d",{willReadFrequently:!0})),!this.tempCtx)return;const g=Math.min(this.canvas.width,960),u=Math.min(this.canvas.height,540),_=Math.min(g/this.canvas.width,u/this.canvas.height),y=Math.floor(this.canvas.width*_),M=Math.floor(this.canvas.height*_);(this.tempCanvas.width!==y||this.tempCanvas.height!==M)&&(this.tempCanvas.width=y,this.tempCanvas.height=M,this.sourceImageData=null,this.outputImageData=null);const w={dx:Math.floor(e.dx*_),dy:Math.floor(e.dy*_),dw:Math.floor(e.dw*_),dh:Math.floor(e.dh*_)};if(this.tempCtx.fillStyle="#000000",this.tempCtx.fillRect(0,0,y,M),this.tempCtx.drawImage(r,w.dx,w.dy,w.dw,w.dh),!this.sourceImageData||this.sourceImageData.width!==y||this.sourceImageData.height!==M)this.sourceImageData=this.tempCtx.getImageData(0,0,y,M);else{const D=this.tempCtx.getImageData(0,0,y,M);this.sourceImageData.data.set(D.data)}const T=this.sourceImageData.data;(!this.outputImageData||this.outputImageData.width!==y||this.outputImageData.height!==M)&&(this.outputImageData=this.tempCtx.createImageData(y,M));const C=this.outputImageData.data,R=Math.max(l,.1),E=(c-.5)*2,b=s*.5*l,I=1+(d-.5)*4,V=s*1.5*l,z=Math.max(I+V,.1);for(let D=0;D<M;D++)for(let H=0;H<y;H++){let X=H/y,G=D/M,U={x:X,y:G};U=this.applyDisplacement(U.x,U.y,v*R,a,s),U=this.applyZoomPulse(U.x,U.y,h*R,s,o),U=this.applyGlitch(U.x,U.y,m*R,a,o);const $=(D*y+H)*4;let q=0,ne=0,se=0,Ne=255;if(f>.01){const Ue=f*R*.008,Ge=s*f*R*.012,te=Ue+Ge,ie={x:Math.max(0,Math.min(1,U.x+te)),y:U.y},we={x:Math.max(0,Math.min(1,U.x)),y:U.y},Oe={x:Math.max(0,Math.min(1,U.x-te)),y:U.y};q=this.sampleTexture(T,y,M,ie.x,ie.y,0),ne=this.sampleTexture(T,y,M,we.x,we.y,1),se=this.sampleTexture(T,y,M,Oe.x,Oe.y,2)}else q=this.sampleTexture(T,y,M,U.x,U.y,0),ne=this.sampleTexture(T,y,M,U.x,U.y,1),se=this.sampleTexture(T,y,M,U.x,U.y,2);q=q/255,ne=ne/255,se=se/255,q+=E+b,ne+=E+b,se+=E+b,q=(q-.5)*z+.5,ne=(ne-.5)*z+.5,se=(se-.5)*z+.5,C[$]=Math.max(0,Math.min(255,q*255)),C[$+1]=Math.max(0,Math.min(255,ne*255)),C[$+2]=Math.max(0,Math.min(255,se*255)),C[$+3]=Ne}this.tempCtx.putImageData(this.outputImageData,0,0),this.ctx.drawImage(this.tempCanvas,0,0,y,M,0,0,this.canvas.width,this.canvas.height),this.perfCallback&&this.perfCallback(`${y}x${M} (fast)`)}render(e,n){if(!this.mediaFile)return;const i=this.mediaFile.element;if(i instanceof HTMLVideoElement&&i.readyState<2)return;const r=Date.now();this.time+=(r-this.lastFrameTime)/1e3,this.lastFrameTime=r;const s=this.calculateDrawParams();if(!s)return;this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const a=(e==null?void 0:e.energy)||0,o=(e==null?void 0:e.bass)||0,l=(e==null?void 0:e.peakTrigger)||!1,c=(n==null?void 0:n.intensity)||1,d=(n==null?void 0:n.brightness)||.5,h=(n==null?void 0:n.contrast)||.5,f=(n==null?void 0:n.rgbSplit)||0,m=(n==null?void 0:n.glitch)||0,v=(n==null?void 0:n.zoomPulse)||0,x=(n==null?void 0:n.displacement)||0,g=(n==null?void 0:n.effectsQuality)||Qn.LOW,u=f>0||m>0||v>0||x>0,_=d!==.5||h!==.5,y=((e==null?void 0:e.energy)||0)>0;if(!u&&!_&&!y){this.ctx.drawImage(i,s.dx,s.dy,s.dw,s.dh),this.debugCallback&&this.debugCallback(s),this.perfCallback&&this.perfCallback(`${this.canvas.width}x${this.canvas.height} (none)`);return}if(g===Qn.OFF||g===Qn.LOW){this.renderLowQuality(s,e||jC,n||{}),this.debugCallback&&this.debugCallback(s);return}if(this.tempCanvas||(this.tempCanvas=document.createElement("canvas"),this.tempCtx=this.tempCanvas.getContext("2d",{willReadFrequently:!0})),!this.tempCtx)return;const M=Math.min(this.canvas.width,1280),w=Math.min(this.canvas.height,720),T=Math.min(M/this.canvas.width,w/this.canvas.height),C=Math.floor(this.canvas.width*T),R=Math.floor(this.canvas.height*T);(this.tempCanvas.width!==C||this.tempCanvas.height!==R)&&(this.tempCanvas.width=C,this.tempCanvas.height=R,this.sourceImageData=null,this.outputImageData=null);const E={dx:Math.floor(s.dx*T),dy:Math.floor(s.dy*T),dw:Math.floor(s.dw*T),dh:Math.floor(s.dh*T)};if(this.tempCtx.fillStyle="#000000",this.tempCtx.fillRect(0,0,C,R),this.tempCtx.drawImage(i,E.dx,E.dy,E.dw,E.dh),!this.sourceImageData||this.sourceImageData.width!==C||this.sourceImageData.height!==R)this.sourceImageData=this.tempCtx.getImageData(0,0,C,R);else{const U=this.tempCtx.getImageData(0,0,C,R);this.sourceImageData.data.set(U.data)}const b=this.sourceImageData.data;(!this.outputImageData||this.outputImageData.width!==C||this.outputImageData.height!==R)&&(this.outputImageData=this.tempCtx.createImageData(C,R));const I=this.outputImageData.data,V=Math.max(c,.1),z=d-.5,D=a*.3*c,H=1+(h-.5)*2,X=a*.8*c,G=Math.max(H+X,0);for(let U=0;U<R;U++)for(let $=0;$<C;$++){let q=$/C,ne=U/R,se={x:q,y:ne};se=this.applyDisplacement(se.x,se.y,x*V,o,a),se=this.applyZoomPulse(se.x,se.y,v*V,a,l),se=this.applyGlitch(se.x,se.y,m*V,o,l);const Ne=(U*C+$)*4;let Ue=0,Ge=0,te=0,ie=255;if(f>.01){const we=f*V*.008,Oe=a*f*V*.012,Me=we+Oe,Xe={x:Math.max(0,Math.min(1,se.x+Me)),y:se.y},ut={x:Math.max(0,Math.min(1,se.x)),y:se.y},je={x:Math.max(0,Math.min(1,se.x-Me)),y:se.y};Ue=this.sampleTexture(b,C,R,Xe.x,Xe.y,0),Ge=this.sampleTexture(b,C,R,ut.x,ut.y,1),te=this.sampleTexture(b,C,R,je.x,je.y,2)}else Ue=this.sampleTexture(b,C,R,se.x,se.y,0),Ge=this.sampleTexture(b,C,R,se.x,se.y,1),te=this.sampleTexture(b,C,R,se.x,se.y,2);Ue=Ue/255,Ge=Ge/255,te=te/255,Ue+=z+D,Ge+=z+D,te+=z+D,Ue=(Ue-.5)*G+.5,Ge=(Ge-.5)*G+.5,te=(te-.5)*G+.5,I[Ne]=Math.max(0,Math.min(255,Ue*255)),I[Ne+1]=Math.max(0,Math.min(255,Ge*255)),I[Ne+2]=Math.max(0,Math.min(255,te*255)),I[Ne+3]=ie}this.tempCtx.putImageData(this.outputImageData,0,0),this.ctx.drawImage(this.tempCanvas,0,0,C,R,0,0,this.canvas.width,this.canvas.height),this.debugCallback&&this.debugCallback(s),this.perfCallback&&this.perfCallback(`${C}x${R} (high)`)}sampleTexture(e,n,i,r,s,a){r=Math.max(0,Math.min(1,r)),s=Math.max(0,Math.min(1,s));const o=Math.floor(r*(n-1)),c=(Math.floor(s*(i-1))*n+o)*4+a;return e[c]||0}resize(e,n){this.canvas.width=e,this.canvas.height=n}setRenderSizeForRecording(e,n){this.resize(e,n)}dispose(){this.mediaFile=null,this.debugCallback=null,this.perfCallback=null,this.tempCanvas=null,this.tempCtx=null,this.sourceImageData=null,this.outputImageData=null}}const Lx="mediaReactor_midi_settings",Qu={enabled:!1,selectedDeviceId:null,smoothing:.3,learnMode:!1,mappings:[]};function WC(){try{const t=localStorage.getItem(Lx);if(!t)return{...Qu};const e=JSON.parse(t);return{...Qu,...e,learnMode:!1}}catch{return{...Qu}}}function XC(t){try{localStorage.setItem(Lx,JSON.stringify(t))}catch{}}function $C(t,e){const n=t.mappings.findIndex(r=>r.parameterId===e.parameterId),i=[...t.mappings];return n>=0?i[n]=e:i.push(e),{...t,mappings:i}}function YC(t,e){return{...t,mappings:t.mappings.filter(n=>n.parameterId!==e)}}function qC(t){return{...t,mappings:[]}}function KC(t,e){return t.mappings.find(n=>n.ccNumber===e)||null}function ZC(t,e){return t.mappings.find(n=>n.parameterId===e)||null}function QC({settings:t,audioSettings:e,audioFeatures:n,midiState:i,onSettingsChange:r,onAudioSettingsChange:s,onParameterClick:a,onMIDIEnableChange:o,onMIDIDeviceChange:l,onMIDISmoothingChange:c,onMIDILearnModeChange:d,onMIDIRemoveMapping:h,onMIDIClearMappings:f}){const m=(u,_)=>{r({...t,[u]:_})},v=(u,_,y,M)=>{a(u,_,y,M,!1)},x=u=>i.learningParameterId===u,g=u=>!!ZC(i.settings,u);return p.jsx("div",{className:"absolute right-4 top-20 bottom-20 w-80 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg overflow-y-auto",children:p.jsxs("div",{className:"p-4 space-y-6",children:[p.jsx("div",{children:p.jsx("h3",{className:"text-lg font-semibold mb-4 text-white",children:"Media Reactor Controls"})}),p.jsx(Ix,{midiState:i,onEnableChange:o,onDeviceChange:l,onSmoothingChange:c,onLearnModeChange:d,onRemoveMapping:h,onClearMappings:f}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Render Mode"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>m("renderMode",Zt.MODE_2D),className:`flex-1 px-3 py-2 rounded transition-colors ${t.renderMode===Zt.MODE_2D?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"2D"}),p.jsx("button",{onClick:()=>m("renderMode",Zt.MODE_3D),className:`flex-1 px-3 py-2 rounded transition-colors ${t.renderMode===Zt.MODE_3D?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"3D"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Fit Mode"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>m("fitMode",mi.COVER),className:`flex-1 px-3 py-2 rounded transition-colors ${t.fitMode===mi.COVER?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"Cover"}),p.jsx("button",{onClick:()=>m("fitMode",mi.CONTAIN),className:`flex-1 px-3 py-2 rounded transition-colors ${t.fitMode===mi.CONTAIN?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:"Contain"})]})]}),t.renderMode===Zt.MODE_3D&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Geometry"}),p.jsxs("select",{value:t.geometry,onChange:u=>m("geometry",u.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:Kt.PLANE,children:"Plane"}),p.jsx("option",{value:Kt.SPHERE,children:"Sphere"}),p.jsx("option",{value:Kt.TORUS,children:"Torus"}),p.jsx("option",{value:Kt.CUBE,children:"Cube"}),p.jsx("option",{value:Kt.CYLINDER,children:"Cylinder"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("label",{className:"text-sm font-medium text-white/90",children:"Auto Orbit"}),p.jsx("button",{onClick:()=>m("autoOrbit",!t.autoOrbit),className:`px-3 py-1 rounded text-sm transition-colors ${t.autoOrbit?"bg-blue-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:t.autoOrbit?"On":"Off"})]}),t.autoOrbit&&p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Orbit Speed"}),p.jsx("span",{className:"text-sm text-white/70",children:t.orbitSpeed.toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.1",max:"5",step:"0.1",value:t.orbitSpeed,onChange:u=>m("orbitSpeed",parseFloat(u.target.value)),onClick:()=>v("orbitSpeed","Orbit Speed",.1,5),className:`w-full ${x("orbitSpeed")?"ring-2 ring-yellow-500":""} ${g("orbitSpeed")?"ring-1 ring-blue-500":""}`})]})]})]}),t.renderMode===Zt.MODE_2D&&p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium mb-2 text-white/90",children:"Effects Quality"}),p.jsxs("select",{value:t.effectsQuality,onChange:u=>m("effectsQuality",u.target.value),className:"w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-blue-500",children:[p.jsx("option",{value:Qn.OFF,children:"Off"}),p.jsx("option",{value:Qn.LOW,children:"Low (Fast)"}),p.jsx("option",{value:Qn.HIGH,children:"High (Slow)"})]}),p.jsxs("p",{className:"text-xs text-white/50 mt-1",children:[t.effectsQuality===Qn.HIGH&&"Per-pixel processing - RGB Split, Glitch, Displacement work fully",t.effectsQuality===Qn.LOW&&"Canvas transforms only - Zoom/Pulse, Brightness, Contrast work",t.effectsQuality===Qn.OFF&&"No effects applied"]})]}),p.jsxs("div",{className:"pt-4 border-t border-white/20",children:[p.jsx("h4",{className:"text-sm font-semibold mb-3 text-white/90",children:"Effects"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Intensity"}),p.jsx("span",{className:"text-sm text-white/70",children:t.intensity.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:t.intensity,onChange:u=>m("intensity",parseFloat(u.target.value)),onClick:()=>v("intensity","Intensity",0,2),className:`w-full ${x("intensity")?"ring-2 ring-yellow-500":""} ${g("intensity")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Brightness"}),p.jsx("span",{className:"text-sm text-white/70",children:t.brightness.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.brightness,onChange:u=>m("brightness",parseFloat(u.target.value)),onClick:()=>v("brightness","Brightness",0,1),className:`w-full ${x("brightness")?"ring-2 ring-yellow-500":""} ${g("brightness")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Contrast"}),p.jsx("span",{className:"text-sm text-white/70",children:t.contrast.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.contrast,onChange:u=>m("contrast",parseFloat(u.target.value)),onClick:()=>v("contrast","Contrast",0,1),className:`w-full ${x("contrast")?"ring-2 ring-yellow-500":""} ${g("contrast")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"RGB Split"}),p.jsx("span",{className:"text-sm text-white/70",children:t.rgbSplit.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.rgbSplit,onChange:u=>m("rgbSplit",parseFloat(u.target.value)),onClick:()=>v("rgbSplit","RGB Split",0,1),className:`w-full ${x("rgbSplit")?"ring-2 ring-yellow-500":""} ${g("rgbSplit")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Glitch"}),p.jsx("span",{className:"text-sm text-white/70",children:t.glitch.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.glitch,onChange:u=>m("glitch",parseFloat(u.target.value)),onClick:()=>v("glitch","Glitch",0,1),className:`w-full ${x("glitch")?"ring-2 ring-yellow-500":""} ${g("glitch")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Zoom/Pulse"}),p.jsx("span",{className:"text-sm text-white/70",children:t.zoomPulse.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.zoomPulse,onChange:u=>m("zoomPulse",parseFloat(u.target.value)),onClick:()=>v("zoomPulse","Zoom/Pulse",0,1),className:`w-full ${x("zoomPulse")?"ring-2 ring-yellow-500":""} ${g("zoomPulse")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Displacement"}),p.jsx("span",{className:"text-sm text-white/70",children:t.displacement.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.displacement,onChange:u=>m("displacement",parseFloat(u.target.value)),onClick:()=>v("displacement","Displacement",0,1),className:`w-full ${x("displacement")?"ring-2 ring-yellow-500":""} ${g("displacement")?"ring-1 ring-blue-500":""}`})]}),t.renderMode===Zt.MODE_3D&&p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Geometry Displacement"}),p.jsx("span",{className:"text-sm text-white/70",children:t.geometryDisplacement.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.geometryDisplacement,onChange:u=>m("geometryDisplacement",parseFloat(u.target.value)),onClick:()=>v("geometryDisplacement","Geometry Displacement",0,1),className:`w-full ${x("geometryDisplacement")?"ring-2 ring-yellow-500":""} ${g("geometryDisplacement")?"ring-1 ring-blue-500":""}`}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"Audio-reactive vertex deformation"})]})]})]}),p.jsxs("div",{className:"pt-4 border-t border-white/20",children:[p.jsx("h4",{className:"text-sm font-semibold mb-3 text-white/90",children:"Audio Analysis"}),p.jsxs("div",{className:"space-y-3 text-xs mb-4",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("span",{className:"text-white/70",children:"Energy"}),p.jsx("span",{className:"font-mono text-white/70",children:n.energy.toFixed(2)})]}),p.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all",style:{width:`${n.energy*100}%`}})})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("span",{className:"text-white/70",children:"Bass"}),p.jsx("span",{className:"font-mono text-white/70",children:n.bass.toFixed(2)})]}),p.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all",style:{width:`${n.bass*100}%`}})})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("span",{className:"text-white/70",children:"Mids"}),p.jsx("span",{className:"font-mono text-white/70",children:n.mids.toFixed(2)})]}),p.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all",style:{width:`${n.mids*100}%`}})})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("span",{className:"text-white/70",children:"Highs"}),p.jsx("span",{className:"font-mono text-white/70",children:n.highs.toFixed(2)})]}),p.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all",style:{width:`${n.highs*100}%`}})})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Smoothing"}),p.jsx("span",{className:"text-sm text-white/70",children:e.smoothing.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0",max:"0.95",step:"0.05",value:e.smoothing,onChange:u=>s({...e,smoothing:parseFloat(u.target.value)}),onClick:()=>v("audioSmoothing","Audio Smoothing",0,.95),className:`w-full ${x("audioSmoothing")?"ring-2 ring-yellow-500":""} ${g("audioSmoothing")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Sensitivity"}),p.jsx("span",{className:"text-sm text-white/70",children:e.sensitivity.toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:e.sensitivity,onChange:u=>s({...e,sensitivity:parseFloat(u.target.value)}),onClick:()=>v("audioSensitivity","Audio Sensitivity",.5,3),className:`w-full ${x("audioSensitivity")?"ring-2 ring-yellow-500":""} ${g("audioSensitivity")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Peak Threshold"}),p.jsx("span",{className:"text-sm text-white/70",children:e.peakThreshold.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0.1",max:"0.8",step:"0.05",value:e.peakThreshold,onChange:u=>s({...e,peakThreshold:parseFloat(u.target.value)}),onClick:()=>v("peakThreshold","Peak Threshold",.1,.8),className:`w-full ${x("peakThreshold")?"ring-2 ring-yellow-500":""} ${g("peakThreshold")?"ring-1 ring-blue-500":""}`})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between mb-1",children:[p.jsx("label",{className:"text-sm text-white/70",children:"Peak Cooldown"}),p.jsxs("span",{className:"text-sm text-white/70",children:[e.peakCooldown,"ms"]})]}),p.jsx("input",{type:"range",min:"50",max:"500",step:"50",value:e.peakCooldown,onChange:u=>s({...e,peakCooldown:parseFloat(u.target.value)}),onClick:()=>v("peakCooldown","Peak Cooldown",50,500),className:`w-full ${x("peakCooldown")?"ring-2 ring-yellow-500":""} ${g("peakCooldown")?"ring-1 ring-blue-500":""}`})]})]})]})]})]})})}const Al={renderMode:Zt.MODE_2D,geometry:Kt.SPHERE,brightness:.5,contrast:.5,rgbSplit:0,glitch:0,zoomPulse:0,displacement:0,geometryDisplacement:0,intensity:1,fitMode:mi.COVER,effectsQuality:Qn.LOW,autoOrbit:!1,orbitSpeed:1},Cg={smoothing:.75,sensitivity:1,peakThreshold:.5,peakCooldown:200},La={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};function JC({onBack:t}){const e=J.useRef(null),n=J.useRef(null),i=J.useRef(null),r=J.useRef(null),s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(null),c=J.useRef(null),d=J.useRef(Al),h=J.useRef(Cg),f=J.useRef(null),m=J.useRef(!1),v=J.useRef(null),[x,g]=J.useState(Al),[u,_]=J.useState(Cg),[y,M]=J.useState(La),[w,T]=J.useState({isSupported:!1,hasAccess:!1,isInitializing:!1,devices:[],settings:WC(),lastActivity:0,learningParameterId:null,learningContext:null}),[C,R]=J.useState(null),[E,b]=J.useState(null),[I,V]=J.useState(!1),[z,D]=J.useState(0),[H,X]=J.useState(0),[G,U]=J.useState(.7),[$,q]=J.useState(!1),[ne,se]=J.useState(0),[Ne]=J.useState("high"),[Ue]=J.useState("auto");J.useEffect(()=>{if(!e.current)return;const S=Al.renderMode;m.current=S===Zt.MODE_2D,S===Zt.MODE_2D?(i.current=new Tg(e.current),i.current.setFitMode(Al.fitMode)):n.current=new wg(e.current),r.current=new Gf,a.current=new op,a.current.setTimerCallback(k=>{se(k)}),a.current.setErrorCallback(()=>{q(!1),se(0)}),r.current.onPlay(()=>{var k;V(!0),((k=c.current)==null?void 0:k.element)instanceof HTMLVideoElement&&c.current.element.play()}),r.current.onPause(()=>{var k;V(!1),((k=c.current)==null?void 0:k.element)instanceof HTMLVideoElement&&c.current.element.pause()}),r.current.onEnded(()=>{var k;V(!1),((k=c.current)==null?void 0:k.element)instanceof HTMLVideoElement&&(c.current.element.pause(),c.current.element.currentTime=0)});const N=()=>{if(!e.current)return;const k=e.current.clientWidth,ee=e.current.clientHeight;m.current&&i.current?i.current.resize(k,ee):n.current&&n.current.updateCameraAndRenderer(k,ee)};return setTimeout(N,0),window.addEventListener("resize",N),()=>{var k,ee;window.removeEventListener("resize",N),n.current&&n.current.dispose(),i.current&&i.current.dispose(),(k=r.current)==null||k.cleanup(),(ee=a.current)==null||ee.dispose()}},[]),J.useEffect(()=>{l.current!==null&&(cancelAnimationFrame(l.current),l.current=null);const S=()=>{var N,k;if(r.current)if(r.current.updateCurrentTime(),D(r.current.currentTime),r.current.getAnalyserNode()&&s.current&&r.current.isPlaying){const B=s.current.analyse(h.current);M(B),n.current&&!m.current&&n.current.update(B,d.current)}else{const B=La;n.current&&!m.current&&n.current.update(B,d.current)}if(m.current){if(i.current)if(((N=r.current)==null?void 0:N.getAnalyserNode())&&s.current&&((k=r.current)!=null&&k.isPlaying)){const B=s.current.analyse(h.current);i.current.render(B,d.current)}else i.current.render(La,d.current)}else n.current&&n.current.render();l.current=requestAnimationFrame(S)};return l.current=requestAnimationFrame(S),()=>{l.current!==null&&(cancelAnimationFrame(l.current),l.current=null)}},[]),J.useEffect(()=>{f.current=w},[w]),J.useEffect(()=>{XC(w.settings)},[w.settings]),J.useEffect(()=>((async()=>{const N=new wo,k=N.isSupported();if(T(B=>({...B,isSupported:k})),!k||!w.settings.enabled)return;if(await N.initialize()){const B=N.getDevices();N.setSelectedDevice(w.settings.selectedDeviceId),N.setSmoothing(w.settings.smoothing),N.setMessageCallback(Ge),T(ve=>({...ve,hasAccess:!0,devices:B})),o.current=N}})(),()=>{var N;(N=o.current)==null||N.dispose()}),[]),J.useEffect(()=>{(async()=>{var N;if(w.settings.enabled&&!w.hasAccess&&w.isSupported){T(B=>({...B,isInitializing:!0}));const k=o.current||new wo;if(await k.initialize()){const B=k.getDevices();k.setSelectedDevice(w.settings.selectedDeviceId),k.setSmoothing(w.settings.smoothing),k.setMessageCallback(Ge),T(ve=>({...ve,hasAccess:!0,isInitializing:!1,devices:B})),o.current=k}else T(B=>({...B,hasAccess:!1,isInitializing:!1}))}else!w.settings.enabled&&w.hasAccess&&((N=o.current)==null||N.dispose(),T(k=>({...k,hasAccess:!1,isInitializing:!1,devices:[]})),o.current=null)})()},[w.settings.enabled]),J.useEffect(()=>{o.current&&w.hasAccess&&o.current.setSelectedDevice(w.settings.selectedDeviceId)},[w.settings.selectedDeviceId]),J.useEffect(()=>{o.current&&w.hasAccess&&o.current.setSmoothing(w.settings.smoothing)},[w.settings.smoothing]),J.useEffect(()=>{d.current=x;const S=x.renderMode===Zt.MODE_2D,N=m.current,k=S!==N;if(m.current=S,k&&l.current!==null&&(cancelAnimationFrame(l.current),l.current=null),S&&!N&&e.current){n.current&&(n.current.dispose(),n.current=null);const ee=e.current.parentElement,B=e.current,ve=document.createElement("canvas");ve.className=B.className,ve.style.cssText=B.style.cssText,ee==null||ee.replaceChild(ve,B),e.current=ve,i.current=new Tg(e.current),c.current&&(i.current.loadMedia(c.current),c.current.element instanceof HTMLVideoElement&&c.current.element.play().catch(()=>{})),i.current.setFitMode(x.fitMode),i.current.resize(e.current.clientWidth,e.current.clientHeight);const le=()=>{var _e,Re;if(r.current&&(r.current.updateCurrentTime(),D(r.current.currentTime),r.current.getAnalyserNode()&&s.current&&r.current.isPlaying)){const ce=s.current.analyse(h.current);M(ce)}if(i.current)if(((_e=r.current)==null?void 0:_e.getAnalyserNode())&&s.current&&((Re=r.current)!=null&&Re.isPlaying)){const ce=s.current.analyse(h.current);i.current.render(ce,d.current)}else i.current.render(La,d.current);l.current=requestAnimationFrame(le)};l.current=requestAnimationFrame(le)}else if(!S&&N&&e.current){i.current&&(i.current.dispose(),i.current=null);const ee=e.current.parentElement,B=e.current,ve=document.createElement("canvas");ve.className=B.className,ve.style.cssText=B.style.cssText,ee==null||ee.replaceChild(ve,B),e.current=ve,n.current=new wg(e.current),c.current&&(n.current.loadMedia(c.current),n.current.initialize(x),c.current.element instanceof HTMLVideoElement&&c.current.element.play().catch(()=>{}));const le=()=>{if(r.current)if(r.current.updateCurrentTime(),D(r.current.currentTime),r.current.getAnalyserNode()&&s.current&&r.current.isPlaying){const Re=s.current.analyse(h.current);M(Re),n.current&&n.current.update(Re,d.current)}else{const Re=La;n.current&&n.current.update(Re,d.current)}n.current&&n.current.render(),l.current=requestAnimationFrame(le)};l.current=requestAnimationFrame(le)}else S&&i.current?(i.current.setFitMode(x.fitMode),e.current&&i.current.resize(e.current.clientWidth,e.current.clientHeight)):n.current&&n.current.updateSettings(x)},[x]),J.useEffect(()=>{h.current=u},[u]),J.useEffect(()=>{const S=N=>{N.target instanceof HTMLInputElement||N.target instanceof HTMLSelectElement||(N.key===" "||N.key==="Spacebar")&&(N.preventDefault(),E&&Ve())};return window.addEventListener("keydown",S),()=>{window.removeEventListener("keydown",S)}},[E,I]);const Ge=(S,N)=>{T(B=>({...B,lastActivity:Date.now()}));const k=f.current;if(!k)return;const ee=KC(k.settings,S);if(!ee){if(k.settings.learnMode&&k.learningContext){const B=$C(k.settings,{parameterId:k.learningContext.parameterId,parameterName:k.learningContext.parameterName,ccNumber:S,min:k.learningContext.min,max:k.learningContext.max,isToggle:k.learningContext.isToggle});T(ve=>({...ve,settings:B,learningParameterId:null,learningContext:null}))}return}te(ee.parameterId,Ax(N,ee))},te=(S,N)=>{switch(S){case"brightness":g(k=>({...k,brightness:N}));break;case"contrast":g(k=>({...k,contrast:N}));break;case"rgbSplit":g(k=>({...k,rgbSplit:N}));break;case"glitch":g(k=>({...k,glitch:N}));break;case"zoomPulse":g(k=>({...k,zoomPulse:N}));break;case"displacement":g(k=>({...k,displacement:N}));break;case"geometryDisplacement":g(k=>({...k,geometryDisplacement:N}));break;case"intensity":g(k=>({...k,intensity:N}));break;case"audioSensitivity":_(k=>({...k,sensitivity:N}));break;case"audioSmoothing":_(k=>({...k,smoothing:N}));break;case"peakThreshold":_(k=>({...k,peakThreshold:N}));break;case"peakCooldown":_(k=>({...k,peakCooldown:N}));break;case"orbitSpeed":g(k=>({...k,orbitSpeed:N}));break;case"autoOrbit":g(k=>({...k,autoOrbit:N}));break}},ie=(S,N,k,ee,B)=>{w.settings.learnMode&&T(ve=>({...ve,learningParameterId:S,learningContext:{parameterId:S,parameterName:N,min:k,max:ee,isToggle:B}}))},we=S=>T(N=>({...N,settings:{...N.settings,enabled:S}})),Oe=S=>T(N=>({...N,settings:{...N.settings,selectedDeviceId:S}})),Me=S=>T(N=>({...N,settings:{...N.settings,smoothing:S}})),Xe=S=>T(N=>({...N,settings:{...N.settings,learnMode:S},learningParameterId:null,learningContext:null})),ut=S=>T(N=>({...N,settings:YC(N.settings,S)})),je=()=>T(S=>({...S,settings:qC(S.settings)})),Qe=async S=>{var ve;const N=(ve=S.target.files)==null?void 0:ve[0];if(!N||!n.current&&!i.current)return;const k=N.type.startsWith("video/"),ee=N.type.startsWith("image/");if(!k&&!ee){alert("Please upload an image or video file"),S.target.value="";return}const B=URL.createObjectURL(N);try{if(k){const le=document.createElement("video");le.src=B,le.loop=!0,le.muted=!0,le.playsInline=!0,await new Promise(Re=>{le.addEventListener("loadedmetadata",Re)});const _e={file:N,type:$h.VIDEO,url:B,element:le};c.current=_e,m.current&&i.current?i.current.loadMedia(_e):n.current&&(n.current.loadMedia(_e),n.current.initialize(d.current)),R(N.name),le.play().catch(()=>{})}else{const le=new Image;le.src=B,await new Promise((Re,oe)=>{le.onload=Re,le.onerror=oe});const _e={file:N,type:$h.IMAGE,url:B,element:le};c.current=_e,m.current&&i.current?i.current.loadMedia(_e):n.current&&(n.current.loadMedia(_e),n.current.initialize(d.current)),R(N.name)}}catch{alert("Failed to load media file. Please try again.")}finally{S.target.value=""}},it=async S=>{var k,ee;const N=(k=S.target.files)==null?void 0:k[0];if(!(!N||!r.current))try{await r.current.loadAudioFile(N);const B=r.current.getAnalyserNode();B&&(s.current=new jf(B,((ee=r.current.audioContext)==null?void 0:ee.sampleRate)||44100)),b(N.name),X(r.current.duration),D(0)}catch{alert("Failed to load audio file. Please try again.")}finally{S.target.value=""}},Ve=async()=>{r.current&&(I?r.current.pause():await r.current.play())},gt=async()=>{var S;r.current&&(r.current.seek(0),D(0),((S=c.current)==null?void 0:S.element)instanceof HTMLVideoElement&&(c.current.element.currentTime=0),await r.current.play())},O=S=>{var N;r.current&&(r.current.seek(S),D(S),((N=c.current)==null?void 0:N.element)instanceof HTMLVideoElement&&(c.current.element.currentTime=S))},dt=S=>{U(S),r.current&&r.current.setVolume(S)},Je=()=>{if(!e.current||!a.current||!n.current&&!i.current)return;se(0),m.current&&(v.current=x.effectsQuality,g(B=>({...B,effectsQuality:Qn.HIGH})));let S;if(r.current){const B=r.current.createAudioStream();B&&(S=B)}const N=e.current.clientWidth,k=e.current.clientHeight,ee=m.current?i.current:n.current;a.current.startRecording(e.current,{fps:30,includeAudio:!!S,quality:Ne,format:Ue,width:N,height:k},S,ee),q(!0)},ot=()=>{a.current&&(a.current.stopRecording(),q(!1),se(0),m.current&&v.current!==null&&(g(S=>({...S,effectsQuality:v.current})),v.current=null),r.current&&r.current.disposeAudioStream())},Ae=H>0?z/H*100:0,P=S=>{const N=Math.floor(S/60),k=S%60;return`${String(N).padStart(2,"0")}:${String(k).padStart(2,"0")}`};return p.jsxs("div",{className:"w-full h-screen bg-black text-white overflow-hidden relative",children:[p.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full",style:{touchAction:"none"}}),p.jsx("div",{className:"absolute top-4 left-4 flex flex-col gap-4 z-10",children:p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors",children:[p.jsx(Rx,{size:20}),p.jsx("span",{children:"Back to Visualizer"})]}),p.jsx("div",{className:"px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg",children:p.jsx("h1",{className:"text-xl font-bold",children:"Media Reactor"})})]})}),p.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10",children:[p.jsxs("label",{className:"cursor-pointer",children:[p.jsx("input",{type:"file",accept:"image/*,video/*",onChange:Qe,className:"hidden"}),p.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors",children:[p.jsx(Ec,{size:20}),p.jsx("span",{className:"text-sm",children:C||"Upload Media"})]})]}),p.jsxs("label",{className:"cursor-pointer",children:[p.jsx("input",{type:"file",accept:"audio/*",onChange:it,className:"hidden"}),p.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors",children:[p.jsx(Ec,{size:20}),p.jsx("span",{className:"text-sm",children:E||"Upload Audio"})]})]}),p.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg",children:[p.jsx("button",{onClick:Je,disabled:$||!C,className:"p-1 hover:bg-white/10 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:p.jsx(jc,{size:18,className:$?"fill-red-500 text-red-500":"text-red-500"})}),p.jsx("button",{onClick:ot,disabled:!$,className:"p-1 hover:bg-white/10 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:p.jsx(lp,{size:18,className:"text-white"})}),p.jsx("span",{className:"text-sm text-white/70 font-mono",children:P(ne)})]})]}),p.jsx(QC,{settings:x,audioSettings:u,audioFeatures:y,midiState:w,onSettingsChange:g,onAudioSettingsChange:_,onParameterClick:ie,onMIDIEnableChange:we,onMIDIDeviceChange:Oe,onMIDISmoothingChange:Me,onMIDILearnModeChange:Xe,onMIDIRemoveMapping:ut,onMIDIClearMappings:je}),p.jsx("div",{className:"absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4",children:p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("button",{onClick:gt,disabled:!E,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play from beginning",children:p.jsx(Px,{size:20})}),p.jsx("button",{onClick:Ve,disabled:!E,className:"p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Play/Pause (Spacebar)",children:I?"⏸":"▶"}),p.jsxs("div",{className:"flex-1 flex items-center gap-3",children:[p.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:la(z)}),p.jsxs("div",{className:"flex-1 relative h-2 bg-white/20 rounded-full overflow-hidden",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 bg-blue-500 rounded-full transition-all",style:{width:`${Ae}%`}}),p.jsx("input",{type:"range",min:"0",max:H,step:"0.1",value:z,onChange:S=>O(parseFloat(S.target.value)),disabled:!E,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"})]}),p.jsx("span",{className:"text-sm text-white/70 font-mono min-w-[45px]",children:la(H)})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"text-sm text-white/70",children:"🔊"}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:G,onChange:S=>dt(parseFloat(S.target.value)),className:"w-24"})]})]})})]})}const eA={geometryType:"girih-star-8",visible:!0,audioBand:"bass",rotationOffset:0,rotationSpeed:.3,scale:1,opacity:1,strokeWidth:1.5,glowIntensity:12,symmetryFolds:8,radialPosition:0,reactivity:1,colorOverride:null,growthEnabled:!0},Ju={layers:[{id:"layer-bass",geometryType:"girih-star-8",visible:!0,audioBand:"bass",rotationOffset:0,rotationSpeed:.2,scale:1,opacity:1,strokeWidth:2,glowIntensity:16,symmetryFolds:8,radialPosition:0,reactivity:1.2,colorOverride:null,growthEnabled:!0},{id:"layer-mids",geometryType:"arabesque",visible:!0,audioBand:"mids",rotationOffset:Math.PI/8,rotationSpeed:-.15,scale:.85,opacity:.75,strokeWidth:1,glowIntensity:8,symmetryFolds:8,radialPosition:.3,reactivity:.8,colorOverride:null,growthEnabled:!0},{id:"layer-highs",geometryType:"rosette",visible:!0,audioBand:"highs",rotationOffset:Math.PI/16,rotationSpeed:.4,scale:.6,opacity:.5,strokeWidth:.75,glowIntensity:6,symmetryFolds:12,radialPosition:.6,reactivity:.6,colorOverride:null,growthEnabled:!1}],backgroundColor:"#020408",palette:"neon-souk",customColors:["#00d4ff","#aa44ff","#ffd700","#ffffff"],globalRotationSpeed:.15,animationSpeed:1,bassReactivity:1,energyReactivity:1,highsReactivity:.6,peakPulse:!0,growthEnabled:!0,growthRate:.4,maxRings:5,lineDrawSpeed:1.2,symmetryEvolution:!0,baseSymmetry:8,trailOpacity:.08,zoomReveal:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.4,bloomThreshold:.3},tA={zellige:["#1a3a6b","#00688b","#c8860a","#f5e6c8"],"neon-souk":["#0a1628","#00d4ff","#aa44ff","#ffd700"],alhambra:["#0d2137","#1a6b8a","#c06820","#f0e8d0"],hammam:["#091520","#0a4a6b","#1a8a8a","#c8e8f0"],fire:["#1a0800","#cc4400","#ff8800","#ffffff"],midnight:["#050510","#1a1a6b","#0044dd","#88ccff"],custom:["#00d4ff","#aa44ff","#ffd700","#ffffff"]},Ag={"girih-star-6":{name:"6-Point Star",description:"Classic hexagonal star — foundation of Islamic pattern"},"girih-star-8":{name:"8-Point Star",description:"Octagonal star — the signature motif of Moroccan zellige"},"girih-star-10":{name:"10-Point Star",description:"Decagonal star — Alhambra complexity, 72° geometry"},"girih-star-12":{name:"12-Point Star",description:"Maximum intricacy — dodecagonal star polygon"},"zellij-field":{name:"Zellij Field",description:"Full-screen interlocking tile mosaic, infinite tiling"},arabesque:{name:"Arabesque",description:"Flowing interlaced strapwork ribbons"},muqarnas:{name:"Muqarnas",description:"Stalactite geometry radiating from center"},khatam:{name:"Khatam",description:"Persian six-fold repeat tile system"},rosette:{name:"Rosette",description:"Multi-petal flower from overlapping circles"}},xi=Math.PI*2;function ed(t,e,n,i=1){const r=Rg(t),s=Rg(e),a=Math.round(r[0]+(s[0]-r[0])*n),o=Math.round(r[1]+(s[1]-r[1])*n),l=Math.round(r[2]+(s[2]-r[2])*n);return`rgba(${a},${o},${l},${i})`}function Rg(t){const e=t.replace("#","");return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)]}function Pg(t,e,n=1){const i=Math.max(0,Math.min(1,e));return i<.33?ed(t[0],t[1],i/.33,n):i<.66?ed(t[1],t[2],(i-.33)/.33,n):ed(t[2],t[3],(i-.66)/.34,n)}function Uo(t,e,n){t.shadowColor=e,t.shadowBlur=n}function nA(t,e,n,i=0){const r=n??e*Math.sin(Math.PI/t)/Math.sin(2*Math.PI/t),s=[];for(let a=0;a<t*2;a++){const o=i+a*Math.PI/t-Math.PI/2,l=a%2===0?e:r;s.push([Math.cos(o)*l,Math.sin(o)*l])}return s}function Fx(t,e,n,i,r,s,a,o,l,c=0){t.save(),t.translate(e,n),t.strokeStyle=a,t.lineWidth=o,Uo(t,a,l),t.lineCap="round";const d=nA(r,i,i*.382,c),h=d.length,f=Math.floor(h*s);if(t.beginPath(),d.slice(0,f+1).forEach((m,v)=>{v===0?t.moveTo(m[0],m[1]):t.lineTo(m[0],m[1])}),s>=1&&t.closePath(),t.stroke(),s>.6){const m=(s-.6)/.4,v=i*.382;t.globalAlpha=m*.7;for(let x=0;x<r;x++){const g=c+x*xi/r-Math.PI/2,u=Math.cos(g)*v,_=Math.sin(g)*v;t.beginPath(),t.moveTo(0,0),t.lineTo(u,_),t.stroke()}t.globalAlpha=1}t.restore()}function iA(t,e,n,i,r,s,a,o,l,c,d,h){const f=e/2,m=n/2,v=Math.ceil(e/r)+2,x=Math.ceil(n/r)+2;for(let g=-1;g<x;g++)for(let u=-1;u<v;u++){const _=u*r-r/2,y=g*r-r/2,M=Math.sqrt((_-f)**2+(y-m)**2),w=Math.sin(M*.02-s*2)*o*.1,T=Math.max(0,Math.min(1,l+w));Fx(t,_,y,r*.45,i,T,c,d,h*.5,s*.1)}}function rA(t,e,n,i,r,s,a,o,l,c,d){t.save(),t.translate(e,n),t.strokeStyle=l,t.lineWidth=c,t.lineCap="round",Uo(t,l,d);const h=r*2,f=xi/h;for(let m=0;m<Math.floor(h*o);m++){const v=m*f+s*.05,x=v+f,g=Math.cos(v)*i*.5,u=Math.sin(v)*i*.5,_=Math.cos(x)*i*.5,y=Math.sin(x)*i*.5,M=Math.cos(v+f*.5)*i*(.8+a*.2),w=Math.sin(v+f*.5)*i*(.8+a*.2);t.beginPath(),t.moveTo(g,u),t.quadraticCurveTo(M,w,_,y),t.stroke(),o>.7&&(t.globalAlpha=(o-.7)/.3*.5,t.beginPath(),t.moveTo(g,u),t.lineTo(0,0),t.stroke(),t.globalAlpha=1)}t.restore()}function sA(t,e,n,i,r,s,a,o,l,c,d,h){t.save(),t.translate(e,n),t.strokeStyle=c,t.lineWidth=d,Uo(t,c,h);const f=xi/r;for(let m=1;m<=o&&!(m>l*o);m++){const v=m/o*i,x=Math.min(1,l*o-(m-1));for(let g=0;g<Math.floor(r*x);g++){const u=g*f+s*.03*(m%2===0?1:-1),_=Math.cos(u)*v,y=Math.sin(u)*v,M=Math.cos(u+f)*v,w=Math.sin(u+f)*v,T=Math.cos(u+f/2)*v*1.1,C=Math.sin(u+f/2)*v*1.1;if(t.beginPath(),t.moveTo(_,y),t.lineTo(T,C),t.lineTo(M,w),t.stroke(),m>1){const R=(m-1)/o*i;t.globalAlpha=.4,t.beginPath(),t.moveTo(Math.cos(u)*R,Math.sin(u)*R),t.lineTo(_,y),t.stroke(),t.globalAlpha=1}}}t.restore()}function aA(t,e,n,i,r,s,a,o,l,c){t.save(),t.translate(e,n),t.strokeStyle=o,t.lineWidth=l,Uo(t,o,c);const d=[];for(let f=0;f<6;f++){const m=f/6*xi+r*.05;d.push([Math.cos(m)*i,Math.sin(m)*i])}const h=Math.floor(6*a);if(t.beginPath(),d.slice(0,h+1).forEach((f,m)=>{m===0?t.moveTo(f[0],f[1]):t.lineTo(f[0],f[1])}),a>=1&&t.closePath(),t.stroke(),a>.4){const f=(a-.4)/.6;for(let m=0;m<2;m++){const v=m===0?0:Math.PI/3+r*.03,x=[];for(let u=0;u<3;u++){const _=v+u/3*xi;x.push([Math.cos(_)*i*.8,Math.sin(_)*i*.8])}const g=Math.floor(3*f);t.beginPath(),x.slice(0,g+1).forEach((u,_)=>{_===0?t.moveTo(u[0],u[1]):t.lineTo(u[0],u[1])}),f>=1&&t.closePath(),t.stroke()}}if(a>.7){const f=(a-.7)/.3,m=[];for(let x=0;x<6;x++){const g=x/6*xi+Math.PI/6-r*.04;m.push([Math.cos(g)*i*.4,Math.sin(g)*i*.4])}const v=Math.floor(6*f);t.beginPath(),m.slice(0,v+1).forEach((x,g)=>{g===0?t.moveTo(x[0],x[1]):t.lineTo(x[0],x[1])}),f>=1&&t.closePath(),t.stroke()}t.restore()}function oA(t,e,n,i,r,s,a,o,l,c,d){t.save(),t.translate(e,n),t.strokeStyle=l,t.lineWidth=c,Uo(t,l,d);const h=Math.floor(r*o);for(let f=0;f<h;f++){const m=f/r*xi+s*.04,v=Math.cos(m)*i*.5,x=Math.sin(m)*i*.5;t.beginPath(),t.arc(v,x,i*.5,0,xi),t.stroke()}o>.5&&(t.globalAlpha=(o-.5)/.5,t.beginPath(),t.arc(0,0,i*.2*(1+a*.3),0,xi),t.stroke(),t.globalAlpha=1),t.restore()}function lA(t,e,n,i,r,s,a){for(let o=0;o<i;o++)t.save(),t.translate(e,n),t.rotate(s+o/i*xi),a(t),t.restore()}function cA(t,e){if(t===0)return[[0,0]];const n=[],i=t*6;for(let r=0;r<i;r++){const s=r/i*xi,a=e*t;n.push([Math.cos(s)*a,Math.sin(s)*a])}return n}class uA{constructor(){this.canvas=null,this.ctx=null,this.time=0,this.audioFeatures=null,this.growth={revealedRings:0,targetRings:1,lineCompletion:.3,currentFolds:8,colorTemperature:0,accumulatedEnergy:0,zoom:1,peakFlash:0,lastPeakTime:0,lastSymmetryChange:0}}initialize(e,n){this.canvas=e;const i=e.getContext("2d");if(!i)throw new Error("Could not get 2D context");this.ctx=i,this.growth.currentFolds=n.baseSymmetry,this.resize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight)}updateAudioFeatures(e){this.audioFeatures=e}updateSettings(e){}updateLayers(e){}getPalette(e){return e.palette==="custom"?e.customColors:tA[e.palette]}render(e,n){if(!this.ctx||!this.canvas)return;const i=this.ctx,r=this.canvas.width,s=this.canvas.height,a=r/2,o=s/2;this.time+=e*n.animationSpeed;const l=this.audioFeatures??{energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0},c=l.bass*n.bassReactivity,d=l.energy*n.energyReactivity;l.highs*n.highsReactivity,l.mids;const h=l.peakTrigger&&n.peakPulse;if(n.growthEnabled){this.growth.accumulatedEnergy+=d*e*n.growthRate*.1,this.growth.accumulatedEnergy=Math.min(1,this.growth.accumulatedEnergy),this.growth.targetRings=Math.ceil(this.growth.accumulatedEnergy*n.maxRings),this.growth.revealedRings<this.growth.targetRings&&(this.growth.revealedRings=Math.min(this.growth.targetRings,this.growth.revealedRings+e*n.growthRate*.5));const v=.3+d*.5+c*.2;this.growth.lineCompletion+=(v-this.growth.lineCompletion)*e*n.lineDrawSpeed*3,this.growth.lineCompletion=Math.max(0,Math.min(1,this.growth.lineCompletion)),this.growth.colorTemperature+=(this.growth.accumulatedEnergy-this.growth.colorTemperature)*e*.05}else this.growth.lineCompletion=1,this.growth.revealedRings=n.maxRings,this.growth.colorTemperature=d*.5;if(h&&(this.growth.peakFlash=1,this.growth.lastPeakTime=this.time,n.symmetryEvolution&&this.time-this.growth.lastSymmetryChange>8)){const v=[6,8,10,12],g=(v.indexOf(this.growth.currentFolds)+1)%v.length;this.growth.currentFolds=v[g],this.growth.lastSymmetryChange=this.time}if(this.growth.peakFlash=Math.max(0,this.growth.peakFlash-e*4),n.zoomReveal){const v=1-this.growth.accumulatedEnergy*.4;this.growth.zoom+=(v-this.growth.zoom)*e*.2}else this.growth.zoom=1;n.trailOpacity>0?(i.fillStyle=`rgba(${this._bgRgb(n.backgroundColor)},${1-n.trailOpacity})`,i.fillRect(0,0,r,s)):(i.fillStyle=n.backgroundColor,i.fillRect(0,0,r,s));const f=this.getPalette(n);if(this.growth.peakFlash>0){const v=Pg(f,.9,this.growth.peakFlash*.15);i.fillStyle=v,i.fillRect(0,0,r,s)}i.save(),i.translate(a,o),i.scale(this.growth.zoom,this.growth.zoom),i.translate(-a,-o),n.layers.forEach(v=>{if(!v.visible)return;const x=this._getBandValue(l,v.audioBand,n),g=.3+x*v.reactivity,u=this.growth.colorTemperature*.7+x*v.reactivity*.3,_=v.colorOverride??Pg(f,u+this.growth.peakFlash*.3),y=v.rotationOffset+this.time*v.rotationSpeed*n.globalRotationSpeed+this.time*n.globalRotationSpeed,M=v.scale*(1+x*.15*v.reactivity),w=Math.min(r,s)*.38*M;switch(i.save(),i.globalAlpha=v.opacity,v.geometryType){case"girih-star-6":case"girih-star-8":case"girih-star-10":case"girih-star-12":{const T=v.geometryType==="girih-star-6"?6:v.geometryType==="girih-star-8"?8:v.geometryType==="girih-star-10"?10:12,C=Math.floor(this.growth.revealedRings),R=w*.55;for(let E=0;E<=C&&E<=n.maxRings;E++){const b=cA(E,R),I=E===0?1:.85,V=w*.42*I,z=1-E/(n.maxRings+1)*.4;i.globalAlpha=v.opacity*z,b.forEach(([D,H])=>{Fx(i,a+D,o+H,V,T,E===C?this.growth.lineCompletion:1,_,v.strokeWidth,v.glowIntensity*g,y+E*.1)})}break}case"zellij-field":{const T=w*.5*(1/this.growth.zoom);iA(i,r,s,this.growth.currentFolds,T,this.time,d,c,this.growth.lineCompletion,_,v.strokeWidth,v.glowIntensity*g);break}case"arabesque":{rA(i,a,o,w,v.symmetryFolds,this.time+y,g,this.growth.lineCompletion,_,v.strokeWidth,v.glowIntensity*g);break}case"muqarnas":{sA(i,a,o,w,v.symmetryFolds,this.time+y,g,Math.floor(this.growth.revealedRings)+1,this.growth.lineCompletion,_,v.strokeWidth,v.glowIntensity*g);break}case"khatam":{lA(i,a,o,v.symmetryFolds,this.time,y,T=>{aA(T,0,-w*.5,w*.4,this.time,g,this.growth.lineCompletion,_,v.strokeWidth,v.glowIntensity*g)});break}case"rosette":{oA(i,a,o,w,v.symmetryFolds,this.time+y,g,this.growth.lineCompletion,_,v.strokeWidth,v.glowIntensity*g);break}}i.globalAlpha=1,i.restore()}),i.restore();const m=i.createRadialGradient(a,o,Math.min(r,s)*.3,a,o,Math.min(r,s)*.8);m.addColorStop(0,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,0.6)"),i.fillStyle=m,i.fillRect(0,0,r,s)}_getBandValue(e,n,i){switch(n){case"bass":return e.bass*i.bassReactivity;case"mids":return e.mids*i.energyReactivity;case"highs":return e.highs*i.highsReactivity;case"energy":return e.energy*i.energyReactivity;case"sub":return e.sub*i.bassReactivity;default:return e.energy}}_bgRgb(e){const n=e.replace("#","");return[parseInt(n.substring(0,2),16),parseInt(n.substring(2,4),16),parseInt(n.substring(4,6),16)].join(",")}resize(e,n){!this.canvas||!this.ctx||(this.canvas.width=e,this.canvas.height=n)}dispose(){this.ctx=null,this.canvas=null}}function dA({settings:t,onSettingsChange:e,selectedLayerId:n,onLayerSelect:i}){const r=t.layers.find(x=>x.id===n),s=()=>{const x={id:`layer-${Date.now()}`,...eA,rotationSpeed:(Math.random()>.5?1:-1)*(.1+Math.random()*.3),colorOverride:null};e({...t,layers:[...t.layers,x]}),i(x.id)},a=x=>{e({...t,layers:t.layers.filter(g=>g.id!==x)}),n===x&&i(null)},o=x=>{e({...t,layers:t.layers.map(g=>g.id===x?{...g,visible:!g.visible}:g)})},l=(x,g)=>{e({...t,layers:t.layers.map(u=>u.id===x?{...u,...g}:u)})},c=(x,g)=>{e({...t,[x]:g})},d=[{value:"girih-star-6",label:"6-Point Star"},{value:"girih-star-8",label:"8-Point Star"},{value:"girih-star-10",label:"10-Point Star"},{value:"girih-star-12",label:"12-Point Star"},{value:"zellij-field",label:"Zellij Field"},{value:"arabesque",label:"Arabesque"},{value:"muqarnas",label:"Muqarnas"},{value:"khatam",label:"Khatam"},{value:"rosette",label:"Rosette"}],h=[{value:"bass",label:"Bass"},{value:"mids",label:"Mids"},{value:"highs",label:"Highs"},{value:"energy",label:"Energy"},{value:"sub",label:"Sub"}],f=[{value:"neon-souk",label:"Neon Souk"},{value:"zellige",label:"Zellige"},{value:"alhambra",label:"Alhambra"},{value:"hammam",label:"Hammam"},{value:"fire",label:"Fire"},{value:"midnight",label:"Midnight"},{value:"custom",label:"Custom"}],m=(x,g,u,_,y=.05)=>p.jsxs("div",{children:[p.jsxs("label",{className:"text-xs text-gray-400",children:[x,": ",typeof t[g]=="number"?t[g].toFixed(2):t[g]]}),p.jsx("input",{type:"range",min:u,max:_,step:y,value:t[g],onChange:M=>c(g,parseFloat(M.target.value)),className:"w-full mt-1"})]},g),v=(x,g,u,_,y=.05,M)=>p.jsxs("div",{children:[p.jsxs("label",{className:"text-xs text-gray-400",children:[x,": ",typeof M[g]=="number"?M[g].toFixed(2):M[g]]}),p.jsx("input",{type:"range",min:u,max:_,step:y,value:M[g],onChange:w=>l(M.id,{[g]:parseFloat(w.target.value)}),className:"w-full mt-1"})]},g);return p.jsxs("div",{className:"space-y-5 text-white",children:[p.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4",children:[p.jsxs("div",{className:"flex items-center justify-between mb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(MC,{className:"w-4 h-4"}),p.jsx("h3",{className:"text-sm font-medium",children:"Geometry Layers"})]}),p.jsxs("button",{onClick:s,className:"px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs flex items-center gap-1",children:[p.jsx(CC,{className:"w-3 h-3"})," Add Layer"]})]}),p.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:t.layers.map(x=>p.jsx("div",{onClick:()=>i(x.id),className:`p-2 rounded cursor-pointer transition-colors ${n===x.id?"bg-blue-600/30 border border-blue-500":"bg-gray-700/50 hover:bg-gray-700"}`,children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[p.jsx("button",{onClick:g=>{g.stopPropagation(),o(x.id)},className:"p-1 hover:bg-gray-600 rounded",children:x.visible?p.jsx(yC,{className:"w-3 h-3"}):p.jsx(_C,{className:"w-3 h-3 opacity-50"})}),p.jsx("div",{className:"w-4 h-4 rounded border border-gray-600",style:{backgroundColor:x.colorOverride??"#00d4ff"}}),p.jsx("span",{className:"text-xs",children:Ag[x.geometryType].name}),p.jsxs("span",{className:"text-xs text-gray-500",children:["· ",x.audioBand]})]}),p.jsx("button",{onClick:g=>{g.stopPropagation(),a(x.id)},className:"p-1 hover:bg-red-600 rounded",disabled:t.layers.length===1,children:p.jsx(cp,{className:"w-3 h-3"})})]})},x.id))})]}),r&&p.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 space-y-4",children:[p.jsx("h3",{className:"text-sm font-medium",children:"Layer Settings"}),p.jsx("p",{className:"text-xs text-gray-500 -mt-2",children:Ag[r.geometryType].description}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Geometry Type"}),p.jsx("select",{value:r.geometryType,onChange:x=>l(r.id,{geometryType:x.target.value}),className:"w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1",children:d.map(x=>p.jsx("option",{value:x.value,children:x.label},x.value))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Audio Band"}),p.jsx("select",{value:r.audioBand,onChange:x=>l(r.id,{audioBand:x.target.value}),className:"w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1",children:h.map(x=>p.jsx("option",{value:x.value,children:x.label},x.value))})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Color Override"}),p.jsx("button",{onClick:()=>l(r.id,{colorOverride:r.colorOverride?null:"#00d4ff"}),className:"text-xs text-blue-400 hover:text-blue-300",children:r.colorOverride?"Use Palette":"Override"})]}),r.colorOverride&&p.jsx("input",{type:"color",value:r.colorOverride,onChange:x=>l(r.id,{colorOverride:x.target.value}),className:"w-full h-8 bg-gray-700 rounded mt-1"})]}),v("Scale","scale",.1,3,.05,r),v("Opacity","opacity",0,1,.05,r),v("Stroke Width","strokeWidth",.25,5,.25,r),v("Glow Intensity","glowIntensity",0,40,1,r),v("Reactivity","reactivity",0,2,.1,r),v("Rotation Speed","rotationSpeed",-1,1,.05,r),v("Rotation Offset","rotationOffset",0,6.28,.05,r),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Symmetry Folds"}),p.jsx("select",{value:r.symmetryFolds,onChange:x=>l(r.id,{symmetryFolds:parseInt(x.target.value)}),className:"w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1",children:[4,6,8,10,12,16].map(x=>p.jsxs("option",{value:x,children:[x,"-fold"]},x))})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Growth Enabled"}),p.jsx("input",{type:"checkbox",checked:r.growthEnabled,onChange:x=>l(r.id,{growthEnabled:x.target.checked}),className:"w-4 h-4"})]})]}),p.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 space-y-4",children:[p.jsx("h3",{className:"text-sm font-medium",children:"Global Settings"}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Background"}),p.jsx("input",{type:"color",value:t.backgroundColor,onChange:x=>c("backgroundColor",x.target.value),className:"w-full h-8 bg-gray-700 rounded mt-1"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Colour Palette"}),p.jsx("select",{value:t.palette,onChange:x=>c("palette",x.target.value),className:"w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1",children:f.map(x=>p.jsx("option",{value:x.value,children:x.label},x.value))})]}),t.palette==="custom"&&p.jsx("div",{className:"grid grid-cols-4 gap-2",children:t.customColors.map((x,g)=>p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-500",children:["Cold","Mid","Warm","Hot"][g]}),p.jsx("input",{type:"color",value:x,onChange:u=>{const _=[...t.customColors];_[g]=u.target.value,c("customColors",_)},className:"w-full h-8 bg-gray-700 rounded mt-1"})]},g))}),m("Rotation Speed","globalRotationSpeed",0,1),m("Animation Speed","animationSpeed",.1,3),m("Trail Opacity","trailOpacity",0,.3,.01),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Base Symmetry"}),p.jsx("select",{value:t.baseSymmetry,onChange:x=>c("baseSymmetry",parseInt(x.target.value)),className:"w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1",children:[4,6,8,10,12].map(x=>p.jsxs("option",{value:x,children:[x,"-fold"]},x))})]})]}),p.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("h3",{className:"text-sm font-medium",children:"Growth Mechanics"}),p.jsx("input",{type:"checkbox",checked:t.growthEnabled,onChange:x=>c("growthEnabled",x.target.checked),className:"w-4 h-4"})]}),t.growthEnabled&&p.jsxs(p.Fragment,{children:[m("Growth Rate","growthRate",.05,2,.05),m("Max Rings","maxRings",1,8,1),m("Line Draw Speed","lineDrawSpeed",.1,3,.1),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Symmetry Evolution"}),p.jsx("input",{type:"checkbox",checked:t.symmetryEvolution,onChange:x=>c("symmetryEvolution",x.target.checked),className:"w-4 h-4"})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Zoom Reveal"}),p.jsx("input",{type:"checkbox",checked:t.zoomReveal,onChange:x=>c("zoomReveal",x.target.checked),className:"w-4 h-4"})]})]})]}),p.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 space-y-3",children:[p.jsx("h3",{className:"text-sm font-medium",children:"Audio Reactivity"}),m("Bass","bassReactivity",0,2),m("Energy","energyReactivity",0,2),m("Highs","highsReactivity",0,2),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("label",{className:"text-xs text-gray-400",children:"Peak Pulse"}),p.jsx("input",{type:"checkbox",checked:t.peakPulse,onChange:x=>c("peakPulse",x.target.checked),className:"w-4 h-4"})]})]}),p.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("h3",{className:"text-sm font-medium",children:"Bloom"}),p.jsx("input",{type:"checkbox",checked:t.bloom,onChange:x=>c("bloom",x.target.checked),className:"w-4 h-4"})]}),t.bloom&&p.jsxs(p.Fragment,{children:[m("Strength","bloomStrength",0,3,.1),m("Radius","bloomRadius",0,1,.05),m("Threshold","bloomThreshold",0,1,.05)]})]})]})}const hA={smoothing:.75,sensitivity:1,peakThreshold:.5,peakCooldown:200},Ng={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};function fA({onBack:t}){var V;const e=J.useRef(null),n=J.useRef(null),i=J.useRef(null),r=J.useRef(null),s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(0),c=J.useRef(null),d=J.useRef(Ju),[h,f]=J.useState(Ju),[m,v]=J.useState(Ng),[x,g]=J.useState(!1),[u,_]=J.useState(0),[y,M]=J.useState(0),[w,T]=J.useState({enabled:!1,devices:[],learningParam:null,mappings:{}}),[C,R]=J.useState(((V=Ju.layers[0])==null?void 0:V.id)||null);J.useEffect(()=>{if(!e.current)return;const z=e.current,D=new uA;D.initialize(z,h),n.current=D;const H=new Gf;i.current=H;const X=new op;s.current=X;const G=new wo;a.current=G,G.initialize().then(q=>{q&&(T(ne=>({...ne,enabled:!0,devices:G.getDevices()})),G.setMessageCallback((ne,se)=>{console.log("MIDI message:",ne,se)}))});const U=()=>{if(!z)return;const q=z.clientWidth,ne=z.clientHeight;D.resize(q,ne)};window.addEventListener("resize",U),U();const $=q=>{const ne=l.current===0?0:(q-l.current)/1e3;l.current=q;let se=Ng;H.isPlaying&&(H.getAnalyserNode()&&r.current&&(se=r.current.analyse(hA),v(se)),H.updateCurrentTime(),_(H.currentTime)),D.updateAudioFeatures(se),D.render(ne,d.current),o.current=requestAnimationFrame($)};return o.current=requestAnimationFrame($),()=>{o.current!==null&&cancelAnimationFrame(o.current),D.dispose(),H.cleanup(),G.dispose(),window.removeEventListener("resize",U)}},[]),J.useEffect(()=>{d.current=h,n.current&&(n.current.updateSettings(h),n.current.updateLayers(h.layers))},[h]);const E=async z=>{var H;const D=(H=z.target.files)==null?void 0:H[0];if(!(!D||!i.current))try{await i.current.loadAudioFile(D);const X=i.current.getAnalyserNode(),G=i.current.audioContext;X&&G&&(r.current=new jf(X,G.sampleRate)),M(i.current.duration),await i.current.play(),g(!0)}catch(X){console.error("Error loading audio file:",X)}},b=async()=>{i.current&&(x?(i.current.pause(),g(!1)):(await i.current.play(),g(!0)))},I=z=>{i.current&&(i.current.seek(z),_(z))};return p.jsxs("div",{className:"fixed inset-0 bg-black",children:[p.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full"}),p.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none",children:[p.jsxs("button",{onClick:t,className:"px-4 py-2 bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center gap-2 pointer-events-auto transition-colors",children:[p.jsx(Rx,{className:"w-4 h-4"}),"Back"]}),p.jsxs("div",{className:"text-right",children:[p.jsx("h1",{className:"text-2xl font-bold text-white drop-shadow-lg",children:"Sacred Geometry Visualizer"}),p.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"Ancient patterns meet modern audio reactivity"})]})]}),p.jsx("div",{className:"absolute top-20 left-4 w-80 max-h-[calc(100vh-120px)] overflow-y-auto pointer-events-none",children:p.jsxs("div",{className:"space-y-4 pointer-events-auto",children:[p.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-sm rounded-lg p-4",children:[p.jsx("h3",{className:"text-sm font-medium mb-3 flex items-center gap-2",children:"Audio Input"}),p.jsx("input",{ref:c,type:"file",accept:"audio/*",onChange:E,className:"hidden"}),p.jsxs("button",{onClick:()=>{var z;return(z=c.current)==null?void 0:z.click()},className:"w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center gap-2",children:[p.jsx(Ec,{className:"w-4 h-4"}),"Load Audio File"]}),y>0&&p.jsxs("div",{className:"mt-4",children:[p.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400 mb-1",children:[p.jsx("span",{children:la(u)}),p.jsx("span",{children:la(y)})]}),p.jsx("input",{type:"range",min:"0",max:y,step:"0.1",value:u,onChange:z=>I(parseFloat(z.target.value)),className:"w-full"}),p.jsx("button",{onClick:b,className:"w-full mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded",children:x?"Pause":"Play"})]})]}),p.jsx("div",{className:"bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden",children:p.jsx(dA,{settings:h,onSettingsChange:f,selectedLayerId:C,onLayerSelect:R})})]})}),p.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-center gap-8 text-xs text-gray-400 pointer-events-none",children:[p.jsxs("div",{className:"bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded",children:["Energy: ",(m.energy*100).toFixed(0),"%"]}),p.jsxs("div",{className:"bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded",children:["Bass: ",(m.bass*100).toFixed(0),"%"]}),p.jsxs("div",{className:"bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded",children:["Highs: ",(m.highs*100).toFixed(0),"%"]}),m.peakTrigger&&p.jsx("div",{className:"bg-blue-600/80 backdrop-blur-sm px-3 py-2 rounded animate-pulse",children:"PEAK"})]})]})}const Ux="audio-visualizer-midi-settings",td={enabled:!1,selectedDeviceId:null,smoothing:.3,learnMode:!1,mappings:[]};function pA(){try{const t=localStorage.getItem(Ux);if(!t)return{...td};const e=JSON.parse(t);return{...td,...e,learnMode:!1}}catch{return{...td}}}function mA(t){try{localStorage.setItem(Ux,JSON.stringify(t))}catch{}}function gA(t,e){const n=t.mappings.findIndex(r=>r.parameterId===e.parameterId),i=[...t.mappings];return n>=0?i[n]=e:i.push(e),{...t,mappings:i}}function vA(t,e){return{...t,mappings:t.mappings.filter(n=>n.parameterId!==e)}}function xA(t){return{...t,mappings:[]}}function _A(t,e){return t.mappings.find(n=>n.ccNumber===e)||null}const Rl={geometryType:$t.SPHERE,detailLevel:Tn.MEDIUM,renderStyle:Dt.WIREFRAME,displacement:.5,noiseScale:2,noiseSpeed:.5,subWeight:.3,bassWeight:.5,midsWeight:.3,highsWeight:.2,pulseOnPeak:!0,baseColor:"#3b82f6",pointSize:.2,pointDensity:.3},nd={smoothing:.75,sensitivity:1,peakThreshold:.5,peakCooldown:200},id={autoOrbit:!1,orbitSpeed:.3,bloom:!1,bloomStrength:1.5,bloomRadius:.4,bloomThreshold:.85,parameterSmoothing:.2},yA={energy:0,sub:0,bass:0,mids:0,highs:0,peakTrigger:!1,timestamp:0};function SA(){const[t,e]=J.useState("visualizer"),n=J.useRef(null),i=J.useRef(null),r=J.useRef(null),s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(null),c=J.useRef(null),d=J.useRef(null),h=J.useRef(null),f=J.useRef(null),m=J.useRef({}),v=J.useRef(Rl),x=J.useRef(Dt.WIREFRAME),g=J.useRef(Rl),u=J.useRef(nd),_=J.useRef(id),y=J.useRef(Yl),[M,w]=J.useState(Rl),[T,C]=J.useState(nd),[R,E]=J.useState(id),[b,I]=J.useState(Yl),[V,z]=J.useState(yA),[D,H]=J.useState({isSupported:!1,hasAccess:!1,isInitializing:!1,devices:[],settings:pA(),lastActivity:0,learningParameterId:null,learningContext:null}),[X,G]=J.useState(!1),[U,$]=J.useState(0),[q,ne]=J.useState(0),[se,Ne]=J.useState(.7),[Ue,Ge]=J.useState(null),[te,ie]=J.useState(!1),[we,Oe]=J.useState(null),[Me,Xe]=J.useState(!1),[ut,je]=J.useState(0),[Qe,it]=J.useState(30),[Ve,gt]=J.useState(!0),[O,dt]=J.useState(null),[Je,ot]=J.useState("high"),[Ae,P]=J.useState("auto"),[S,N]=J.useState(!1),[k,ee]=J.useState(!1),[B,ve]=J.useState(null),[le,_e]=J.useState(!1),[Re,oe]=J.useState(null),ce=(ae,ue)=>{m.current[ae]?m.current[ae].target=ue:m.current[ae]={target:ue,smoothed:ue}},xe=(ae,ue)=>{var Se;return((Se=m.current[ae])==null?void 0:Se.smoothed)??ue},L=ae=>{Object.keys(m.current).forEach(ue=>{const Se=m.current[ue];Se.smoothed+=(Se.target-Se.smoothed)*ae})},K=ae=>{if(!a.current)return;l.current||(l.current=new Zu);const ue=l.current.initialize(ae);a.current.setActiveVisual(ue)},ge=ae=>{if(!a.current||!o.current)return;const ue=o.current.initialize(ae);ue&&a.current.setActiveVisual(ue)};J.useEffect(()=>{var ue,Se,pn;if(!n.current||t!=="visualizer")return;if((ue=a.current)==null||ue.cleanup(),(Se=o.current)==null||Se.dispose(),(pn=l.current)==null||pn.dispose(),r.current=new Gf,a.current=new sC(n.current),o.current=new Ku,l.current=new Zu,c.current=new op,c.current.setTimerCallback(rt=>je(rt)),c.current.setErrorCallback(rt=>{dt(rt),Xe(!1),je(0)}),c.current.setFormatWarningCallback(rt=>dt(rt)),r.current.onPlay(()=>G(!0)),r.current.onPause(()=>G(!1)),r.current.onEnded(()=>G(!1)),M.renderStyle===Dt.PARTICLES)K(b);else{const rt=o.current.initialize(M);rt&&a.current.setActiveVisual(rt)}const ae=()=>{var Q,Z,Y;const rt=performance.now(),rn=_.current,sn=g.current,yi=u.current,cs=y.current;L(rn.parameterSmoothing);const A={...sn,displacement:xe("displacement",sn.displacement),noiseScale:xe("noiseScale",sn.noiseScale),noiseSpeed:xe("noiseSpeed",sn.noiseSpeed),subWeight:xe("subWeight",sn.subWeight),bassWeight:xe("bassWeight",sn.bassWeight),midsWeight:xe("midsWeight",sn.midsWeight),highsWeight:xe("highsWeight",sn.highsWeight),pointSize:xe("pointSize",sn.pointSize),pointDensity:xe("pointDensity",sn.pointDensity)},j={...yi,smoothing:xe("audioSmoothing",yi.smoothing),sensitivity:xe("audioSensitivity",yi.sensitivity),peakThreshold:xe("peakThreshold",yi.peakThreshold),peakCooldown:xe("peakCooldown",yi.peakCooldown)};if(a.current&&rn.autoOrbit&&a.current.updateAutoOrbit(!0,xe("orbitSpeed",rn.orbitSpeed)),r.current){r.current.updateCurrentTime(),$(r.current.currentTime);const Ce=r.current.getAnalyserNode()&&s.current&&r.current.isPlaying?s.current.analyse(j):{energy:0,bass:0,mids:0,highs:0,sub:0,peakTrigger:!1,timestamp:rt};z(Ce),sn.renderStyle===Dt.PARTICLES?(Q=l.current)==null||Q.update(rt,Ce,cs):(Z=o.current)==null||Z.update(rt,Ce,A)}(Y=a.current)==null||Y.render(),h.current=requestAnimationFrame(ae)};return ae(),()=>{var rt,rn,sn,yi,cs;h.current&&cancelAnimationFrame(h.current),(rt=c.current)==null||rt.dispose(),(rn=r.current)==null||rn.cleanup(),(sn=a.current)==null||sn.cleanup(),(yi=o.current)==null||yi.dispose(),(cs=l.current)==null||cs.dispose()}},[t]),J.useEffect(()=>{Dx();const ae=FC("default-1");ae&&Nr(ae)},[]),J.useEffect(()=>{var ae;(ae=a.current)==null||ae.updateAutoOrbit(R.autoOrbit,R.orbitSpeed)},[R.autoOrbit]),J.useEffect(()=>{var ae;(ae=a.current)==null||ae.updateBloom(R.bloom,R.bloomStrength,R.bloomRadius,R.bloomThreshold)},[R.bloom,R.bloomStrength,R.bloomRadius,R.bloomThreshold]),J.useEffect(()=>{var Se,pn;if(!a.current)return;const ae=x.current,ue=M.renderStyle;ue!==ae&&(x.current=ue,Me&&Ln(),ue===Dt.PARTICLES?((Se=o.current)==null||Se.dispose(),o.current=new Ku,K(b)):ae===Dt.PARTICLES&&((pn=l.current)==null||pn.dispose(),l.current=new Zu,o.current||(o.current=new Ku),ge(M)))},[M.renderStyle]),J.useEffect(()=>((async()=>{const ue=new wo,Se=ue.isSupported();if(H(rt=>({...rt,isSupported:Se})),!Se||!D.settings.enabled)return;if(await ue.initialize()){const rt=ue.getDevices();ue.setSelectedDevice(D.settings.selectedDeviceId),ue.setSmoothing(D.settings.smoothing),ue.setMessageCallback(F),H(rn=>({...rn,hasAccess:!0,devices:rt})),d.current=ue}})(),()=>{var ue;(ue=d.current)==null||ue.dispose()}),[]),J.useEffect(()=>{f.current=D},[D]),J.useEffect(()=>{g.current=M},[M]),J.useEffect(()=>{u.current=T},[T]),J.useEffect(()=>{_.current=R},[R]),J.useEffect(()=>{y.current=b},[b]),J.useEffect(()=>{var ae;t==="mediaReactor"&&((ae=d.current)==null||ae.dispose(),d.current=null)},[t]),J.useEffect(()=>{ce("displacement",M.displacement),ce("noiseScale",M.noiseScale),ce("noiseSpeed",M.noiseSpeed),ce("subWeight",M.subWeight),ce("bassWeight",M.bassWeight),ce("midsWeight",M.midsWeight),ce("highsWeight",M.highsWeight),ce("pointSize",M.pointSize),ce("pointDensity",M.pointDensity)},[M.displacement,M.noiseScale,M.noiseSpeed,M.subWeight,M.bassWeight,M.midsWeight,M.highsWeight,M.pointSize,M.pointDensity]),J.useEffect(()=>{ce("orbitSpeed",R.orbitSpeed)},[R.orbitSpeed]),J.useEffect(()=>{ce("audioSmoothing",T.smoothing),ce("audioSensitivity",T.sensitivity),ce("peakThreshold",T.peakThreshold),ce("peakCooldown",T.peakCooldown)},[T.smoothing,T.sensitivity,T.peakThreshold,T.peakCooldown]),J.useEffect(()=>{mA(D.settings)},[D.settings]),J.useEffect(()=>{var ae;(ae=d.current)==null||ae.setSmoothing(D.settings.smoothing)},[D.settings.smoothing]),J.useEffect(()=>{var ae;(ae=d.current)==null||ae.setSelectedDevice(D.settings.selectedDeviceId)},[D.settings.selectedDeviceId]),J.useEffect(()=>{(async()=>{var ue;if(D.settings.enabled&&!D.hasAccess&&D.isSupported){H(rt=>({...rt,isInitializing:!0}));const Se=d.current||new wo;if(await Se.initialize()){const rt=Se.getDevices();Se.setSelectedDevice(D.settings.selectedDeviceId),Se.setSmoothing(D.settings.smoothing),Se.setMessageCallback(F),H(rn=>({...rn,hasAccess:!0,isInitializing:!1,devices:rt})),d.current=Se}else H(rt=>({...rt,hasAccess:!1,isInitializing:!1}))}else!D.settings.enabled&&D.hasAccess&&((ue=d.current)==null||ue.dispose(),H(Se=>({...Se,hasAccess:!1,isInitializing:!1,devices:[]})),d.current=null)})()},[D.settings.enabled]),J.useEffect(()=>{const ae=()=>ee(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",ae),()=>document.removeEventListener("fullscreenchange",ae)},[]),J.useEffect(()=>{const ae=ue=>{ue.target instanceof HTMLInputElement||ue.target instanceof HTMLSelectElement||(ue.key===" "||ue.key==="Spacebar"?(ue.preventDefault(),Ue&&zt()):ue.key==="r"||ue.key==="R"?(ue.preventDefault(),Me?Ln():Ue&&ls()):ue.key==="f"||ue.key==="F"?(ue.preventDefault(),xa()):ue.key==="Escape"&&Me&&(ue.preventDefault(),Ln()))};return window.addEventListener("keydown",ae),()=>window.removeEventListener("keydown",ae)},[Me,Ue,X]),J.useEffect(()=>{if(!a.current||!o.current||M.renderStyle===Dt.PARTICLES)return;const ae=v.current;if(M.geometryType!==ae.geometryType||M.detailLevel!==ae.detailLevel||M.renderStyle!==ae.renderStyle||M.pointDensity!==ae.pointDensity){Me&&Ln(),o.current.dispose();const Se=o.current.initialize(M);Se&&a.current.setActiveVisual(Se)}else o.current.updateSettings(M);v.current=M},[M]);const F=(ae,ue)=>{H(rt=>({...rt,lastActivity:Date.now()}));const Se=f.current;if(!Se)return;const pn=_A(Se.settings,ae);if(!pn){if(Se.settings.learnMode&&Se.learningContext){const rt=gA(Se.settings,{parameterId:Se.learningContext.parameterId,parameterName:Se.learningContext.parameterName,ccNumber:ae,min:Se.learningContext.min,max:Se.learningContext.max,isToggle:Se.learningContext.isToggle});H(rn=>({...rn,settings:rt,learningParameterId:null,learningContext:null}))}return}fe(pn.parameterId,Ax(ue,pn))},fe=(ae,ue)=>{switch(ae){case"displacement":w(Se=>({...Se,displacement:ue}));break;case"noiseScale":w(Se=>({...Se,noiseScale:ue}));break;case"noiseSpeed":w(Se=>({...Se,noiseSpeed:ue}));break;case"subWeight":w(Se=>({...Se,subWeight:ue}));break;case"bassWeight":w(Se=>({...Se,bassWeight:ue}));break;case"midsWeight":w(Se=>({...Se,midsWeight:ue}));break;case"highsWeight":w(Se=>({...Se,highsWeight:ue}));break;case"pointSize":w(Se=>({...Se,pointSize:ue}));break;case"pointDensity":w(Se=>({...Se,pointDensity:ue}));break;case"pulseOnPeak":w(Se=>({...Se,pulseOnPeak:ue}));break;case"audioSmoothing":C(Se=>({...Se,smoothing:ue}));break;case"audioSensitivity":C(Se=>({...Se,sensitivity:ue}));break;case"peakThreshold":C(Se=>({...Se,peakThreshold:ue}));break;case"peakCooldown":C(Se=>({...Se,peakCooldown:ue}));break;case"autoOrbit":E(Se=>({...Se,autoOrbit:ue}));break;case"orbitSpeed":E(Se=>({...Se,orbitSpeed:ue}));break}},de=(ae,ue,Se,pn,rt)=>{D.settings.learnMode&&H(rn=>({...rn,learningParameterId:ae,learningContext:{parameterId:ae,parameterName:ue,min:Se,max:pn,isToggle:rt}}))},ye=ae=>H(ue=>({...ue,settings:{...ue.settings,enabled:ae}})),he=ae=>H(ue=>({...ue,settings:{...ue.settings,selectedDeviceId:ae}})),re=ae=>H(ue=>({...ue,settings:{...ue.settings,smoothing:ae}})),me=ae=>H(ue=>({...ue,settings:{...ue.settings,learnMode:ae},learningParameterId:null,learningContext:null})),Le=ae=>H(ue=>({...ue,settings:vA(ue.settings,ae)})),nt=()=>H(ae=>({...ae,settings:xA(ae.settings)})),et=async ae=>{var ue;if(r.current){Me&&Ln(),ie(!0),Oe(null);try{await r.current.loadAudioFile(ae);const Se=r.current.getAnalyserNode();Se&&(s.current=new jf(Se,((ue=r.current.audioContext)==null?void 0:ue.sampleRate)||44100)),Ge(ae.name),ne(r.current.duration),$(0),ie(!1)}catch{Oe("Failed to load audio file"),ie(!1)}}},zt=async()=>{r.current&&(X?r.current.pause():await r.current.play())},nn=async()=>{r.current&&(r.current.seek(0),$(0),await r.current.play())},Wc=ae=>{var ue;(ue=r.current)==null||ue.seek(ae),$(ae)},Oo=ae=>{var ue;Ne(ae),(ue=r.current)==null||ue.setVolume(ae)},ga=()=>{w(Rl),C(nd),E(id),I(Yl),ve(null)},Xc=()=>{if(!B)return!1;const ae={...B.globalSettings,parameterSmoothing:B.globalSettings.parameterSmoothing??.2,bloomStrength:B.globalSettings.bloomStrength??1.5,bloomRadius:B.globalSettings.bloomRadius??.4,bloomThreshold:B.globalSettings.bloomThreshold??.85};return JSON.stringify(M)!==JSON.stringify(B.meshSettings)||JSON.stringify(T)!==JSON.stringify(B.audioSettings)||JSON.stringify(R)!==JSON.stringify(ae)},Nr=ae=>{w(ae.meshSettings),C(ae.audioSettings),E({...ae.globalSettings,parameterSmoothing:ae.globalSettings.parameterSmoothing??.2,bloomStrength:ae.globalSettings.bloomStrength??1.5,bloomRadius:ae.globalSettings.bloomRadius??.4,bloomThreshold:ae.globalSettings.bloomThreshold??.85}),ve(ae)},ko=ae=>{Me&&Ln(),(B==null?void 0:B.id)!==ae.id&&(Xc()?(oe(ae),_e(!0)):Nr(ae))},Li=()=>{B&&(UC(B.id,{name:B.name,meshSettings:M,audioSettings:T,globalSettings:R}),ve({...B,meshSettings:M,audioSettings:T,globalSettings:R})),_e(!1),Re&&(Nr(Re),oe(null))},va=()=>{_e(!1),Re&&(Nr(Re),oe(null))},zo=()=>{_e(!1),oe(null)},ls=()=>{if(!n.current||!c.current)return;dt(null),je(0);let ae;if(Ve&&r.current){const ue=r.current.createAudioStream();ue&&(ae=ue)}c.current.startRecording(n.current,{fps:Qe,includeAudio:Ve,quality:Je,format:Ae},ae),Xe(!0)},Ln=()=>{var ae;c.current&&(c.current.stopRecording(),Xe(!1),je(0),(ae=r.current)==null||ae.disposeAudioStream())},xa=()=>{i.current&&(document.fullscreenElement?document.exitFullscreen():i.current.requestFullscreen().catch(ae=>{console.error("Fullscreen error:",ae)}))};return t==="mediaReactor"?p.jsx(JC,{onBack:()=>e("visualizer")}):t==="sacredGeometry"?p.jsx(fA,{onBack:()=>e("visualizer")}):p.jsxs("div",{className:"w-full h-screen bg-black text-white overflow-hidden",children:[p.jsx("div",{ref:i,className:"absolute inset-0",children:p.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full",style:{touchAction:"none"}})}),!k&&p.jsxs(p.Fragment,{children:[p.jsx(DC,{isPlaying:X,currentTime:U,duration:q,volume:se,fileName:Ue,isLoading:te,error:we,isRecording:Me,recordingTime:ut,fps:Qe,includeAudio:Ve,recordingError:O,recordingQuality:Je,recordingFormat:Ae,audioFeatures:V,onFileUpload:et,onPlayPause:zt,onPlayFromBeginning:nn,onSeek:Wc,onVolumeChange:Oo,onStartRecording:ls,onStopRecording:Ln,onFpsChange:it,onIncludeAudioChange:gt,onQualityChange:ot,onFormatChange:P,onFullscreen:xa}),p.jsxs("div",{className:"absolute bottom-4 left-4 z-20 flex gap-3",children:[p.jsx("button",{onClick:()=>e("mediaReactor"),className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 border border-blue-400 rounded-lg transition-colors shadow-lg font-medium",children:"Media Reactor"}),p.jsx("button",{onClick:()=>e("sacredGeometry"),className:"px-4 py-2 bg-amber-600 hover:bg-amber-700 border border-amber-400 rounded-lg transition-colors shadow-lg font-medium",children:"Sacred Geometry"})]})]}),k&&p.jsx(BC,{isRecording:Me,recordingTime:ut,canRecord:!!Ue,onStartRecording:ls,onStopRecording:Ln}),!k&&p.jsx(kC,{meshSettings:M,audioSettings:T,globalSettings:R,particleSettings:b,audioFeatures:V,midiState:D,onMeshSettingsChange:w,onAudioSettingsChange:C,onGlobalSettingsChange:E,onParticleSettingsChange:I,onHelpClick:()=>N(!0),onReset:ga,onLoadPreset:ko,onMIDIEnableChange:ye,onMIDIDeviceChange:he,onMIDISmoothingChange:re,onMIDILearnModeChange:me,onMIDIRemoveMapping:Le,onMIDIClearMappings:nt,onParameterClick:de}),p.jsx(zC,{isOpen:S,onClose:()=>N(!1)}),le&&B&&p.jsx(VC,{presetName:B.name,onSave:Li,onDiscard:va,onCancel:zo})]})}jv(document.getElementById("root")).render(p.jsx(J.StrictMode,{children:p.jsx(SA,{})}));
