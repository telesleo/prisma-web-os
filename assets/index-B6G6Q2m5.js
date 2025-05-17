(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))U(D);new MutationObserver(D=>{for(const W of D)if(W.type==="childList")for(const q of W.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&U(q)}).observe(document,{childList:!0,subtree:!0});function O(D){const W={};return D.integrity&&(W.integrity=D.integrity),D.referrerPolicy&&(W.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?W.credentials="include":D.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function U(D){if(D.ep)return;D.ep=!0;const W=O(D);fetch(D.href,W)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2=globalThis,e$4=t$2.ShadowRoot&&(t$2.ShadyCSS===void 0||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3=class{constructor(w,O,U){if(this._$cssResult$=!0,U!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this.t=O}get styleSheet(){let w=this.o;const O=this.t;if(e$4&&w===void 0){const U=O!==void 0&&O.length===1;U&&(w=o$4.get(O)),w===void 0&&((this.o=w=new CSSStyleSheet).replaceSync(this.cssText),U&&o$4.set(O,w))}return w}toString(){return this.cssText}};const r$4=F=>new n$3(typeof F=="string"?F:F+"",void 0,s$2),i$3=(F,...w)=>{const O=F.length===1?F[0]:w.reduce((U,D,W)=>U+(q=>{if(q._$cssResult$===!0)return q.cssText;if(typeof q=="number")return q;throw Error("Value passed to 'css' function must be a 'css' function result: "+q+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(D)+F[W+1],F[0]);return new n$3(O,F,s$2)},S$1=(F,w)=>{if(e$4)F.adoptedStyleSheets=w.map(O=>O instanceof CSSStyleSheet?O:O.styleSheet);else for(const O of w){const U=document.createElement("style"),D=t$2.litNonce;D!==void 0&&U.setAttribute("nonce",D),U.textContent=O.cssText,F.appendChild(U)}},c$2=e$4?F=>F:F=>F instanceof CSSStyleSheet?(w=>{let O="";for(const U of w.cssRules)O+=U.cssText;return r$4(O)})(F):F;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$3,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(F,w)=>F,u$1={toAttribute(F,w){switch(w){case Boolean:F=F?l$1:null;break;case Object:case Array:F=F==null?F:JSON.stringify(F)}return F},fromAttribute(F,w){let O=F;switch(w){case Boolean:O=F!==null;break;case Number:O=F===null?null:Number(F);break;case Object:case Array:try{O=JSON.parse(F)}catch{O=null}}return O}},f$1=(F,w)=>!i$2(F,w),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),a$1.litPropertyMetadata??(a$1.litPropertyMetadata=new WeakMap);let y$1=class extends HTMLElement{static addInitializer(w){this._$Ei(),(this.l??(this.l=[])).push(w)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(w,O=b){if(O.state&&(O.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(w)&&((O=Object.create(O)).wrapped=!0),this.elementProperties.set(w,O),!O.noAccessor){const U=Symbol(),D=this.getPropertyDescriptor(w,U,O);D!==void 0&&e$3(this.prototype,w,D)}}static getPropertyDescriptor(w,O,U){const{get:D,set:W}=h$1(this.prototype,w)??{get(){return this[O]},set(q){this[O]=q}};return{get:D,set(q){const J=D==null?void 0:D.call(this);W==null||W.call(this,q),this.requestUpdate(w,J,U)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const w=n$2(this);w.finalize(),w.l!==void 0&&(this.l=[...w.l]),this.elementProperties=new Map(w.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const O=this.properties,U=[...r$3(O),...o$3(O)];for(const D of U)this.createProperty(D,O[D])}const w=this[Symbol.metadata];if(w!==null){const O=litPropertyMetadata.get(w);if(O!==void 0)for(const[U,D]of O)this.elementProperties.set(U,D)}this._$Eh=new Map;for(const[O,U]of this.elementProperties){const D=this._$Eu(O,U);D!==void 0&&this._$Eh.set(D,O)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(w){const O=[];if(Array.isArray(w)){const U=new Set(w.flat(1/0).reverse());for(const D of U)O.unshift(c$2(D))}else w!==void 0&&O.push(c$2(w));return O}static _$Eu(w,O){const U=O.attribute;return U===!1?void 0:typeof U=="string"?U:typeof w=="string"?w.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var w;this._$ES=new Promise(O=>this.enableUpdating=O),this._$AL=new Map,this._$E_(),this.requestUpdate(),(w=this.constructor.l)==null||w.forEach(O=>O(this))}addController(w){var O;(this._$EO??(this._$EO=new Set)).add(w),this.renderRoot!==void 0&&this.isConnected&&((O=w.hostConnected)==null||O.call(w))}removeController(w){var O;(O=this._$EO)==null||O.delete(w)}_$E_(){const w=new Map,O=this.constructor.elementProperties;for(const U of O.keys())this.hasOwnProperty(U)&&(w.set(U,this[U]),delete this[U]);w.size>0&&(this._$Ep=w)}createRenderRoot(){const w=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(w,this.constructor.elementStyles),w}connectedCallback(){var w;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(w=this._$EO)==null||w.forEach(O=>{var U;return(U=O.hostConnected)==null?void 0:U.call(O)})}enableUpdating(w){}disconnectedCallback(){var w;(w=this._$EO)==null||w.forEach(O=>{var U;return(U=O.hostDisconnected)==null?void 0:U.call(O)})}attributeChangedCallback(w,O,U){this._$AK(w,U)}_$ET(w,O){var W;const U=this.constructor.elementProperties.get(w),D=this.constructor._$Eu(w,U);if(D!==void 0&&U.reflect===!0){const q=(((W=U.converter)==null?void 0:W.toAttribute)!==void 0?U.converter:u$1).toAttribute(O,U.type);this._$Em=w,q==null?this.removeAttribute(D):this.setAttribute(D,q),this._$Em=null}}_$AK(w,O){var W,q;const U=this.constructor,D=U._$Eh.get(w);if(D!==void 0&&this._$Em!==D){const J=U.getPropertyOptions(D),K=typeof J.converter=="function"?{fromAttribute:J.converter}:((W=J.converter)==null?void 0:W.fromAttribute)!==void 0?J.converter:u$1;this._$Em=D,this[D]=K.fromAttribute(O,J.type)??((q=this._$Ej)==null?void 0:q.get(D))??null,this._$Em=null}}requestUpdate(w,O,U){var D;if(w!==void 0){const W=this.constructor,q=this[w];if(U??(U=W.getPropertyOptions(w)),!((U.hasChanged??f$1)(q,O)||U.useDefault&&U.reflect&&q===((D=this._$Ej)==null?void 0:D.get(w))&&!this.hasAttribute(W._$Eu(w,U))))return;this.C(w,O,U)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(w,O,{useDefault:U,reflect:D,wrapped:W},q){U&&!(this._$Ej??(this._$Ej=new Map)).has(w)&&(this._$Ej.set(w,q??O??this[w]),W!==!0||q!==void 0)||(this._$AL.has(w)||(this.hasUpdated||U||(O=void 0),this._$AL.set(w,O)),D===!0&&this._$Em!==w&&(this._$Eq??(this._$Eq=new Set)).add(w))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(O){Promise.reject(O)}const w=this.scheduleUpdate();return w!=null&&await w,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var U;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[W,q]of this._$Ep)this[W]=q;this._$Ep=void 0}const D=this.constructor.elementProperties;if(D.size>0)for(const[W,q]of D){const{wrapped:J}=q,K=this[W];J!==!0||this._$AL.has(W)||K===void 0||this.C(W,void 0,q,K)}}let w=!1;const O=this._$AL;try{w=this.shouldUpdate(O),w?(this.willUpdate(O),(U=this._$EO)==null||U.forEach(D=>{var W;return(W=D.hostUpdate)==null?void 0:W.call(D)}),this.update(O)):this._$EM()}catch(D){throw w=!1,this._$EM(),D}w&&this._$AE(O)}willUpdate(w){}_$AE(w){var O;(O=this._$EO)==null||O.forEach(U=>{var D;return(D=U.hostUpdated)==null?void 0:D.call(U)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(w)),this.updated(w)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(w){return!0}update(w){this._$Eq&&(this._$Eq=this._$Eq.forEach(O=>this._$ET(O,this[O]))),this._$EM()}updated(w){}firstUpdated(w){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1==null||p$1({ReactiveElement:y$1}),(a$1.reactiveElementVersions??(a$1.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:F=>F}):void 0,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=F=>F===null||typeof F!="object"&&typeof F!="function",a=Array.isArray,u=F=>a(F)||typeof(F==null?void 0:F[Symbol.iterator])=="function",d=`[ 	
\f\r]`,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=F=>(w,...O)=>({_$litType$:F,strings:w,values:O}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(F,w){if(!a(F)||!F.hasOwnProperty("raw"))throw Error("invalid template strings array");return s$1!==void 0?s$1.createHTML(w):w}const V=(F,w)=>{const O=F.length-1,U=[];let D,W=w===2?"<svg>":w===3?"<math>":"",q=f;for(let J=0;J<O;J++){const K=F[J];let Q,G,Z=-1,X=0;for(;X<K.length&&(q.lastIndex=X,G=q.exec(K),G!==null);)X=q.lastIndex,q===f?G[1]==="!--"?q=v:G[1]!==void 0?q=_:G[2]!==void 0?($.test(G[2])&&(D=RegExp("</"+G[2],"g")),q=m):G[3]!==void 0&&(q=m):q===m?G[0]===">"?(q=D??f,Z=-1):G[1]===void 0?Z=-2:(Z=q.lastIndex-G[2].length,Q=G[1],q=G[3]===void 0?m:G[3]==='"'?g:p):q===g||q===p?q=m:q===v||q===_?q=f:(q=m,D=void 0);const Y=q===m&&F[J+1].startsWith("/>")?" ":"";W+=q===f?K+n$1:Z>=0?(U.push(Q),K.slice(0,Z)+e$2+K.slice(Z)+h+Y):K+h+(Z===-2?J:Y)}return[P(F,W+(F[O]||"<?>")+(w===2?"</svg>":w===3?"</math>":"")),U]};class N{constructor({strings:w,_$litType$:O},U){let D;this.parts=[];let W=0,q=0;const J=w.length-1,K=this.parts,[Q,G]=V(w,O);if(this.el=N.createElement(Q,U),C.currentNode=this.el.content,O===2||O===3){const Z=this.el.content.firstChild;Z.replaceWith(...Z.childNodes)}for(;(D=C.nextNode())!==null&&K.length<J;){if(D.nodeType===1){if(D.hasAttributes())for(const Z of D.getAttributeNames())if(Z.endsWith(e$2)){const X=G[q++],Y=D.getAttribute(Z).split(h),tt=/([.?@])?(.*)/.exec(X);K.push({type:1,index:W,name:tt[2],strings:Y,ctor:tt[1]==="."?H:tt[1]==="?"?I:tt[1]==="@"?L:k}),D.removeAttribute(Z)}else Z.startsWith(h)&&(K.push({type:6,index:W}),D.removeAttribute(Z));if($.test(D.tagName)){const Z=D.textContent.split(h),X=Z.length-1;if(X>0){D.textContent=i$1?i$1.emptyScript:"";for(let Y=0;Y<X;Y++)D.append(Z[Y],l()),C.nextNode(),K.push({type:2,index:++W});D.append(Z[X],l())}}}else if(D.nodeType===8)if(D.data===o$2)K.push({type:2,index:W});else{let Z=-1;for(;(Z=D.data.indexOf(h,Z+1))!==-1;)K.push({type:7,index:W}),Z+=h.length-1}W++}}static createElement(w,O){const U=r$2.createElement("template");return U.innerHTML=w,U}}function S(F,w,O=F,U){var q,J;if(w===T)return w;let D=U!==void 0?(q=O._$Co)==null?void 0:q[U]:O._$Cl;const W=c(w)?void 0:w._$litDirective$;return(D==null?void 0:D.constructor)!==W&&((J=D==null?void 0:D._$AO)==null||J.call(D,!1),W===void 0?D=void 0:(D=new W(F),D._$AT(F,O,U)),U!==void 0?(O._$Co??(O._$Co=[]))[U]=D:O._$Cl=D),D!==void 0&&(w=S(F,D._$AS(F,w.values),D,U)),w}class M{constructor(w,O){this._$AV=[],this._$AN=void 0,this._$AD=w,this._$AM=O}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(w){const{el:{content:O},parts:U}=this._$AD,D=((w==null?void 0:w.creationScope)??r$2).importNode(O,!0);C.currentNode=D;let W=C.nextNode(),q=0,J=0,K=U[0];for(;K!==void 0;){if(q===K.index){let Q;K.type===2?Q=new R(W,W.nextSibling,this,w):K.type===1?Q=new K.ctor(W,K.name,K.strings,this,w):K.type===6&&(Q=new z(W,this,w)),this._$AV.push(Q),K=U[++J]}q!==(K==null?void 0:K.index)&&(W=C.nextNode(),q++)}return C.currentNode=r$2,D}p(w){let O=0;for(const U of this._$AV)U!==void 0&&(U.strings!==void 0?(U._$AI(w,U,O),O+=U.strings.length-2):U._$AI(w[O])),O++}}class R{get _$AU(){var w;return((w=this._$AM)==null?void 0:w._$AU)??this._$Cv}constructor(w,O,U,D){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=w,this._$AB=O,this._$AM=U,this.options=D,this._$Cv=(D==null?void 0:D.isConnected)??!0}get parentNode(){let w=this._$AA.parentNode;const O=this._$AM;return O!==void 0&&(w==null?void 0:w.nodeType)===11&&(w=O.parentNode),w}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(w,O=this){w=S(this,w,O),c(w)?w===E||w==null||w===""?(this._$AH!==E&&this._$AR(),this._$AH=E):w!==this._$AH&&w!==T&&this._(w):w._$litType$!==void 0?this.$(w):w.nodeType!==void 0?this.T(w):u(w)?this.k(w):this._(w)}O(w){return this._$AA.parentNode.insertBefore(w,this._$AB)}T(w){this._$AH!==w&&(this._$AR(),this._$AH=this.O(w))}_(w){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=w:this.T(r$2.createTextNode(w)),this._$AH=w}$(w){var W;const{values:O,_$litType$:U}=w,D=typeof U=="number"?this._$AC(w):(U.el===void 0&&(U.el=N.createElement(P(U.h,U.h[0]),this.options)),U);if(((W=this._$AH)==null?void 0:W._$AD)===D)this._$AH.p(O);else{const q=new M(D,this),J=q.u(this.options);q.p(O),this.T(J),this._$AH=q}}_$AC(w){let O=A.get(w.strings);return O===void 0&&A.set(w.strings,O=new N(w)),O}k(w){a(this._$AH)||(this._$AH=[],this._$AR());const O=this._$AH;let U,D=0;for(const W of w)D===O.length?O.push(U=new R(this.O(l()),this.O(l()),this,this.options)):U=O[D],U._$AI(W),D++;D<O.length&&(this._$AR(U&&U._$AB.nextSibling,D),O.length=D)}_$AR(w=this._$AA.nextSibling,O){var U;for((U=this._$AP)==null?void 0:U.call(this,!1,!0,O);w&&w!==this._$AB;){const D=w.nextSibling;w.remove(),w=D}}setConnected(w){var O;this._$AM===void 0&&(this._$Cv=w,(O=this._$AP)==null||O.call(this,w))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(w,O,U,D,W){this.type=1,this._$AH=E,this._$AN=void 0,this.element=w,this.name=O,this._$AM=D,this.options=W,U.length>2||U[0]!==""||U[1]!==""?(this._$AH=Array(U.length-1).fill(new String),this.strings=U):this._$AH=E}_$AI(w,O=this,U,D){const W=this.strings;let q=!1;if(W===void 0)w=S(this,w,O,0),q=!c(w)||w!==this._$AH&&w!==T,q&&(this._$AH=w);else{const J=w;let K,Q;for(w=W[0],K=0;K<W.length-1;K++)Q=S(this,J[U+K],O,K),Q===T&&(Q=this._$AH[K]),q||(q=!c(Q)||Q!==this._$AH[K]),Q===E?w=E:w!==E&&(w+=(Q??"")+W[K+1]),this._$AH[K]=Q}q&&!D&&this.j(w)}j(w){w===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,w??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(w){this.element[this.name]=w===E?void 0:w}}class I extends k{constructor(){super(...arguments),this.type=4}j(w){this.element.toggleAttribute(this.name,!!w&&w!==E)}}class L extends k{constructor(w,O,U,D,W){super(w,O,U,D,W),this.type=5}_$AI(w,O=this){if((w=S(this,w,O,0)??E)===T)return;const U=this._$AH,D=w===E&&U!==E||w.capture!==U.capture||w.once!==U.once||w.passive!==U.passive,W=w!==E&&(U===E||D);D&&this.element.removeEventListener(this.name,this,U),W&&this.element.addEventListener(this.name,this,w),this._$AH=w}handleEvent(w){var O;typeof this._$AH=="function"?this._$AH.call(((O=this.options)==null?void 0:O.host)??this.element,w):this._$AH.handleEvent(w)}}class z{constructor(w,O,U){this.element=w,this.type=6,this._$AN=void 0,this._$AM=O,this.options=U}get _$AU(){return this._$AM._$AU}_$AI(w){S(this,w)}}const j=t$1.litHtmlPolyfillSupport;j==null||j(N,R),(t$1.litHtmlVersions??(t$1.litHtmlVersions=[])).push("3.3.0");const B=(F,w,O)=>{const U=(O==null?void 0:O.renderBefore)??w;let D=U._$litPart$;if(D===void 0){const W=(O==null?void 0:O.renderBefore)??null;U._$litPart$=D=new R(w.insertBefore(l(),W),W,void 0,O??{})}return D._$AI(F),D};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var O;const w=super.createRenderRoot();return(O=this.renderOptions).renderBefore??(O.renderBefore=w.firstChild),w}update(w){const O=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(w),this._$Do=B(O,this.renderRoot,this.renderOptions)}connectedCallback(){var w;super.connectedCallback(),(w=this._$Do)==null||w.setConnected(!0)}disconnectedCallback(){var w;super.disconnectedCallback(),(w=this._$Do)==null||w.setConnected(!1)}render(){return T}}var et;i._$litElement$=!0,i.finalized=!0,(et=s.litElementHydrateSupport)==null||et.call(s,{LitElement:i});const o$1=s.litElementPolyfillSupport;o$1==null||o$1({LitElement:i});(s.litElementVersions??(s.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=F=>(w,O)=>{O!==void 0?O.addInitializer(()=>{customElements.define(F,w)}):customElements.define(F,w)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$1=(F=o,w,O)=>{const{kind:U,metadata:D}=O;let W=globalThis.litPropertyMetadata.get(D);if(W===void 0&&globalThis.litPropertyMetadata.set(D,W=new Map),U==="setter"&&((F=Object.create(F)).wrapped=!0),W.set(O.name,F),U==="accessor"){const{name:q}=O;return{set(J){const K=w.get.call(this);w.set.call(this,J),this.requestUpdate(q,K,F)},init(J){return J!==void 0&&this.C(q,void 0,F,J),J}}}if(U==="setter"){const{name:q}=O;return function(J){const K=this[q];w.call(this,J),this.requestUpdate(q,K,F)}}throw Error("Unsupported decorator location: "+U)};function n(F){return(w,O)=>typeof O=="object"?r$1(F,w,O):((U,D,W)=>{const q=D.hasOwnProperty(W);return D.constructor.createProperty(W,U),q?Object.getOwnPropertyDescriptor(D,W):void 0})(F,w,O)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(F){return n({...F,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=(F,w,O)=>(O.configurable=!0,O.enumerable=!0,Reflect.decorate&&typeof w!="object"&&Object.defineProperty(F,w,O),O);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(F,w){return(O,U,D)=>{const W=q=>{var J;return((J=q.renderRoot)==null?void 0:J.querySelector(F))??null};return e$1(O,U,{get(){return W(this)}})}}function parse(F){return F.replace(/^\/|\/$/g,"")}function segment(F){const w=parse(F);return w?w.split("/"):[]}function resolve(F,w){return F.endsWith("/")||(F+="/"),new URL(w,"file://"+F).pathname}function branch(F){return segment(F).slice(0,-1).join("/")}function leaf(F){const w=segment(F);return w[w.length-1]}const pathManager={parse,segment,resolve,branch,leaf},storage={commands:{help:`(function (commandInvokation, terminal, storageManager) {
  const commandKey = commandInvokation.args[0] || "";
  const commandFile = storageManager.getEntry("/commands/" + commandKey);

  if (commandFile === null) {
    return;
  }

  if (!commandFile.includes("\\n# DOC\\n")) {
    return;
  }

  const [code, documentation] = commandFile.split("\\n# DOC\\n");

  terminal.write(documentation.trim());
});

# DOC
show the documentation of a given command

usage: help [command-key]
  [command-key] the command for the documentation

examples:
  input: help echo
  output: output the given arguments to the terminal...
`,echo:`(function (commandInvokation, terminal) {
  const output = commandInvokation.args.join(" ");
  terminal.write(output);
});

# DOC
output the given arguments to the terminal

usage: echo [arguments...]
  [arguments...] arguments to be outputed

examples:
  input: echo "Hello, World!"
  output: Hello, World!
`,clear:`(function (commandInvokation, terminal) {
  terminal.clear();
});

# DOC
remove all logs from the terminal

usage: clear
`,peek:`(async function (commandInvokation, terminal, storageManager, pathManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const path = pathManager.resolve(terminal.getPath(), relativePath);
  const file = storageManager.getEntry(path);
  let output = file;
  if (typeof(file) === "object") {
    output = Object.keys(file).join(" ");
  }
  terminal.write(output);
});

# DOC
list entries of a directory or show the contents of a file

usage: peek [path]
  [path] path of the entry being shown

examples:
  input: peek files
  output: hello-world file-one file-two

  input: peek files/hello-world
  output: Hello, World!
`,path:`(function (commandInvokation, terminal) {
  const path = terminal.getPath();
  terminal.write(path);
});
  
# DOC
show the current path of the terminal

usage: path

examples:
  input: path
  output: /files/other-dir
`,go:`(function (commandInvokation, terminal, storageManager, pathManager, errorManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const path = pathManager.resolve(terminal.getPath(), relativePath);

  const entry = storageManager.getEntry(path);

  if (entry === null) {
    terminal.write(errorManager.invalidEntry(path));
    return;
  }

  if (typeof entry !== "object") {
    terminal.write(errorManager.notADirectory(path));
    return;
  }

  terminal.setPath(path);
});

# DOC
change the current path of the terminal

usage: go [path]
  [path]: new working path of the terminal

examples:
  input: go /files
`,dir:`(function (commandInvokation, terminal, storageManager, pathManager, errorManager) {
  const path = pathManager.resolve(terminal.getPath(), commandInvokation.args[0] || "");

  const response = storageManager.createEntry(path, {});

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.entryAlreadyExists(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC
create a new directory

usage: dir [path]
  [path] path of the directory being created

examples:
  input: dir /files/new-dir
`,file:`(function (commandInvokation, terminal, storageManager, pathManager) {
  const path = pathManager.resolve(terminal.getPath(), commandInvokation.args[0] || "");
  const content = commandInvokation.args[1] || "";

  const response = storageManager.createEntry(path, content);

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.entryAlreadyExists(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC
create a new file

usage: file [path] [content]
  [path] path of the file being created
  [content] the content of the file

examples:
  input: file /files/text "Text content"
`,rm:`(function (commandInvokation, terminal, storageManager, pathManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const path = pathManager.resolve(terminal.getPath(), relativePath);

  const response = storageManager.removeEntry(path);

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.invalidEntry(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC
remove an entry

usage: rm [path]
  [path] path of the entry being removed

examples:
  input: file /files/text "Text content"
`,edit:`(function (commandInvokation, terminal, storageManager, pathManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const content = commandInvokation.args[1] || "";

  const path = pathManager.resolve(terminal.getPath(), relativePath);

  const response = storageManager.editFile(path, content);

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.invalidEntry(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC

edit a file

usage: edit [path] [content]
  [path] path of the file being edited
  [content] the new content of the file

examples:
  edit /files/text "New content"
`}};function getEntry(F){const w=pathManager.segment(F);let O=storage;for(const U of w){if(typeof O!="object"||O===null||!(U in O))return null;O=O[U]}return O}function createEntry(F,w){const O=pathManager.branch(F),U=getEntry(O);if(U===null)return 1;const D=pathManager.leaf(F);return D in U?2:(U[D]=w,0)}function removeEntry(F){const w=pathManager.branch(F),O=getEntry(w);if(O===null)return 1;const U=pathManager.leaf(F);return U in O?(delete O[U],0):2}function editFile(F,w){const O=pathManager.branch(F),U=getEntry(O);if(U===null)return 1;const D=pathManager.leaf(F);return D in U?(U[D]=w,0):2}const storageManager={getEntry,createEntry,removeEntry,editFile};function invalidEntry(F){return`entry "${F}" is not valid`}function entryAlreadyExists(F){return`entry "${F}" already exists`}function notADirectory(F){return`entry "${F}" is not a directory`}const errorManager={invalidEntry,entryAlreadyExists,notADirectory};function tokenize(F){const w=[];let O=!1,U="";for(let D=0;D<F.length;D++){const W=F[D];if(W==='"'){O=!O;continue}W===" "&&!O?U!==""&&(w.push(U),U=""):U+=W}return U&&w.push(U),w}function parseCommand(F){const w=tokenize(F);return{key:w[0],args:w.slice(1)}}function runCommand(input,terminal){const commandInvokation=parseCommand(input),commandFile=storageManager.getEntry(`/commands/${commandInvokation.key}`);if(commandFile===null){terminal.write(`"${commandInvokation.key}" is not a command`);return}const[code]=commandFile.split(`
# DOC
`);try{const run=eval(code);run(commandInvokation,terminal,storageManager,pathManager,errorManager)}catch(F){console.error(F)}}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(F,w,O,U)=>{for(var D=U>1?void 0:U?__getOwnPropDesc(w,O):w,W=F.length-1,q;W>=0;W--)(q=F[W])&&(D=(U?q(w,O,D):q(D))||D);return U&&D&&__defProp(w,O,D),D};let TerminalComponent=class extends i{constructor(){super(...arguments),this.input="",this.logs="",this.path="/"}clear(){this.logs=""}getPath(){return this.path}setPath(F){this.path=F}gray(F){return`<span class="gray">${F}</span>`}write(F,w=!1){this.logs=this.logs+(this.logs!==""?`
`:"")+(w?F:this.gray(F))}run(){this.write(this.input,!0),runCommand(this.input,{write:this.write.bind(this),clear:this.clear.bind(this),getPath:this.getPath.bind(this),setPath:this.setPath.bind(this)}),this.input=""}handleInputChange(F){this.input=F.target.value}handleInputKeyDown(F){F.key==="Enter"&&this.run()}handleFocus(){this.inputElement.focus()}firstUpdated(F){this.inputElement.focus()}render(){return x`
      <div id="terminal" @click=${this.handleFocus}>
        <p id="logs" .innerHTML=${this.logs}></p>
        <input
          id="input"
          .value="${this.input}"
          @input=${this.handleInputChange}
          @keydown=${this.handleInputKeyDown}
          autocomplete="off"
        />
      </div>
    `}};TerminalComponent.styles=i$3`
    #terminal,
    #input {
      color: var(--white);
      background-color: var(--black);
      font-family: var(--font-family);
      font-size: var(--font-size);
    }

    #terminal {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: var(--padding);
    }

    #logs {
      margin: 0;
      white-space: pre;
      color: var(--white);
    }

    #input {
      width: 100%;
      border: 0;
      outline: 0;
      padding: 0;
    }

    .gray {
      color: var(--gray);
    }
  `;__decorateClass([r()],TerminalComponent.prototype,"input",2);__decorateClass([r()],TerminalComponent.prototype,"logs",2);__decorateClass([r()],TerminalComponent.prototype,"path",2);__decorateClass([e("#input")],TerminalComponent.prototype,"inputElement",2);TerminalComponent=__decorateClass([t("os-terminal")],TerminalComponent);
