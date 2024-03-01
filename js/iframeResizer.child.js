/**
 *  iframe-resizer (child) v5.0.0-aplha.1
 *
 *  License:    GPL-3.0
 *  Copyright:  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 * 
 *  Desciption: Keep same and cross domain iFrames sized to their content with
 *              support for window/content resizing, and multiple iFrames.
 *
 *  @preserve
 *  @module @iframe-resizer/child
 *  @version 5.0.0-aplha.1
 *  @license GPL-3.0
 *  @author David J. Bradshaw <dave@bradshaw.net>
 *  @fileoverview Child window script for iframe-resizer.
 *  @copyright (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 *  @see {@link https://github.com/davidjbradshaw/iframe-resizer}
 */


!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=10,t="data-iframe-size",n={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},o={height:()=>(ie("Custom height calculation function not defined"),Te.auto()),width:()=>(ie("Custom width calculation function not defined"),Ie.auto())},i={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},a=128,r={},c="checkVisibility"in window,s="auto",d={reset:1,resetPage:1,init:1},l="[iFrameSizer]",u=l.length,m={max:1,min:1,bodyScroll:1,documentElementScroll:1},f=["body"],g="scroll";let h=!0,p="",w=0,v="",y=null,b="",$=!0,z=!1,S=null,O=!0,M=!1,E=1,T=s,I=!0,C="",P={},R=!0,x=!1,N=!1,A="",L=0,k=0,H="child",B=null,F=!1,q=window.parent,D="*",U=0,W=!1,J=1,V=g,j=window,Q=()=>{ie("onMessage function not defined")},X=()=>{},Y=null,G=null;const K=(e,t,n,o)=>e.addEventListener(t,n,o||{}),Z=(e,t,n)=>e.removeEventListener(t,n,!1),_=e=>e.charAt(0).toUpperCase()+e.slice(1),ee=e=>""!=`${e}`&&void 0!==e;function te(e){switch(!0){case!ee(e):return"";case ee(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case ee(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(ee(e.className)?`.${e.className}`:"")}}const ne=(...e)=>[`${l}[${A}]`,...e].join(" "),oe=(...e)=>x&&window.console&&console.log(ne(...e)),ie=(...e)=>window.console&&console.warn(ne(...e)),ae=(...e)=>window.console&&console.warn(window.chrome?ne(...e):ne(...e).replaceAll(/\u001B\[[\d;]*m/gi,""));function re(){!function(){try{F="iFrameListener"in window.parent}catch(e){oe("Cross domain iframe detected.")}}(),function(){const e=e=>"true"===e,t=C.slice(u).split(":");A=t[0],w=void 0===t[1]?w:Number(t[1]),z=void 0===t[2]?z:e(t[2]),x=void 0===t[3]?x:e(t[3]),h=void 0===t[6]?h:e(t[6]),v=t[7],T=void 0===t[8]?T:t[8],p=t[9],b=t[10],U=void 0===t[11]?U:Number(t[11]),P.enable=void 0!==t[12]&&e(t[12]),H=void 0===t[13]?H:t[13],V=void 0===t[14]?V:t[14],N=void 0===t[15]?N:e(t[15]),L=void 0===t[16]?L:Number(t[16]),k=void 0===t[17]?k:Number(t[17]),$=void 0===t[18]?$:e(t[18])}(),oe(`Initialising iFrame (${window.location.href})`),function(){function e(){const e=window.iFrameResizer;oe(`Reading data from page: ${JSON.stringify(e)}`),Q=e?.onMessage||Q,X=e?.onReady||X,L=e?.offsetHeight||L,k=e?.offsetWidth||k,D=e?.targetOrigin||D,T=e?.heightCalculationMethod||T,V=e?.widthCalculationMethod||V}function t(e,t){return"function"==typeof e&&(oe(`Setup custom ${t}CalcMethod`),o[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),T=t(T,"height"),V=t(V,"width"));oe(`TargetOrigin for parent set to: ${D}`)}(),function(){void 0===v&&(v=`${w}px`);ce("margin",function(e,t){t.includes("-")&&(ie(`Negative CSS value ignored for ${e}`),t="");return t}("margin",v))}(),ce("background",p),ce("padding",b),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body),oe('HTML & body height set to "auto !important"')}(),me(),fe(),function(){let e=!1;const n=n=>document.querySelectorAll(`[${n}]`).forEach((o=>{e=!0,o.removeAttribute(n),o.setAttribute(t,null)}));n("data-iframe-height"),n("data-iframe-width"),e&&ae("\n[31;1mDeprecated Attributes[m\n          \nThe [1mdata-iframe-height[m and [1mdata-iframe-width[m attributes have been deprecated and replaced with the single [1mdata-iframe-size[m attribute. Use of the old attributes will be removed in a future version of [3miframe-resizer[m.")}(),document.querySelectorAll(`[${t}]`).length>0&&("auto"===T&&(T="autoOverflow",oe('data-iframe-size attribute found on page, using "autoOverflow" calculation method for height')),"auto"===V&&(V="autoOverflow",oe('data-iframe-size attribute found on page, using "autoOverflow" calculation method for width'))),le(),j.parentIFrame={autoResize:e=>(!0===e&&!1===h?(h=!0,ge()):!1===e&&!0===h&&(h=!1,de("remove"),B?.disconnect(),y?.disconnect()),Ae(0,0,"autoResize",JSON.stringify(h)),h),close(){Ae(0,0,"close")},getId:()=>A,getPageInfo(e){if("function"==typeof e)return Y=e,Ae(0,0,"pageInfo"),void ae("\n[31;1mDeprecated Method (getPageInfo()[m\n          \nThe [1mgetPageInfo()[m method has been deprecated and replaced with  [1mgetParentInfo()[m. Use of this method will be removed in a future version of [3miframe-resizer[m.\n");Y=null,Ae(0,0,"pageInfoStop")},getParentInfo(e){if("function"==typeof e)return G=e,void Ae(0,0,"parentInfo");G=null,Ae(0,0,"parentInfoStop")},moveToAnchor(e){P.findTarget(e)},reset(){Ne("parentIFrame.reset")},scrollTo(e,t){Ae(t,e,"scrollTo")},scrollToOffset(e,t){Ae(t,e,"scrollToOffset")},sendMessage(e,t){Ae(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){T=e,me()},setWidthCalculationMethod(e){V=e,fe()},setTargetOrigin(e){oe(`Set targetOrigin: ${e}`),D=e},size(e,t){Pe("size",`parentIFrame.size(${e||""}${t?`,${t}`:""})`,e,t)}},function(){if(!0!==N)return;function e(e){Ae(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){oe(`Add event listener: ${n}`),K(window.document,t,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}(),ge(),P=function(){const t=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=t();return{x:parseInt(o.left,e)+parseInt(i.x,e),y:parseInt(o.top,e)+parseInt(i.y,e)}}function o(e){function t(e){const t=n(e);oe(`Moving to in page link (#${o}) at x: ${t.x}y: ${t.y}`),Ae(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?(oe(`In page link (#${o}) not found in iFrame, so sending to parent`),Ae(0,0,"inPageLink",`#${o}`)):t(a)}function i(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&o(t)}function r(){function e(e){function t(e){e.preventDefault(),o(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&K(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function c(){K(window,"hashchange",i)}function s(){setTimeout(i,a)}function d(){oe("Setting up location.hash handlers"),r(),c(),s()}P.enable?d():oe("In page linking not enabled");return{findTarget:o}}(),Pe("init","Init message from host page"),X(),R=!1}function ce(e,t){void 0!==t&&""!==t&&"null"!==t&&(document.body.style.setProperty(e,t),oe(`Body ${e} set to "${t}"`))}function se(e){({add(t){function n(){Pe(e.eventName,e.eventType)}r[t]=n,K(window,t,n,{passive:!0})},remove(e){const t=r[e];delete r[e],Z(window,e,t)}})[e.method](e.eventName),oe(`${_(e.method)} event listener: ${e.eventType}`)}function de(e){se({method:e,eventType:"After Print",eventName:"afterprint"}),se({method:e,eventType:"Before Print",eventName:"beforeprint"}),se({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function le(){const e=document.querySelectorAll(`[${t}]`);M=e.length>0,S=M?e:Se(document)()}function ue(e,t,n,o){return t!==e&&(e in n||(ie(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in i&&ae(`\n[31;1mDeprecated ${o}CalculationMethod (${e})[m\n\nThis version of [3miframe-resizer[m can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`),oe(`${o} calculation method set to "${e}"`)),e}function me(){T=ue(T,s,Te,"height")}function fe(){V=ue(V,g,Ie,"width")}function ge(){!0===h?(de("add"),y=function(){function e(e){e.forEach(be),le()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return oe("Create <body/> MutationObserver"),t.observe(n,o),t}const n=t();return{disconnect(){oe("Disconnect MutationObserver"),n.disconnect()}}}(),B=new ResizeObserver(he),ye(window.document)):oe("Auto Resize disabled")}function he(e){Pe("resizeObserver",`resizeObserver: ${te(e[0].target)}`)}const pe=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},we=()=>[...Se(document)()].filter(pe);function ve(e){e&&(B.observe(e),oe(`Attached resizeObserver: ${te(e)}`))}function ye(e){[...we(),...f.flatMap((t=>e.querySelector(t)))].forEach(ve)}function be(e){"childList"===e.type&&ye(e.target)}function $e(e){const t=_(e);let o,i=0,a=S.length,r=0,s=performance.now();S.forEach((s=>{if(!M&&c&&!s.checkVisibility(n))return oe(`Skipping non-visable element: ${te(s)}`),void(a-=1);i=s.getBoundingClientRect()[e]+getComputedStyle(s).getPropertyValue(`margin${t}`),i>r&&(r=i,o=s)})),s=performance.now()-s;const d=`\nParsed ${a} element${a=""} in ${s.toPrecision(3)}ms\n${t} ${M?"tagged":""} element found at: ${r}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(o)}`;return s<1.1||R||M?oe(d):ae(`\n[31;1mPerformance Warning[m\n\nCalculateing the page size took an excessive amount of time. To improve performace add the [1mdata-iframe-size[m attribute to the ${e} element on the page.\n${d}`),r}const ze=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Se=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");const Oe={height:0,width:0},Me={height:0,width:0};function Ee(e,t){function n(){return Me[i]=a,Oe[i]=s,a}const o=e===Te,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),c=Math.floor(a),s=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e),d=`HTML: ${a}  Page: ${s}`;switch(!0){case!e.enabled():return s;case!t&&0===Me[i]&&0===Oe[i]:if(oe(`Initial page size values: ${d}`),e.taggedElement(!0)<=r)return n();break;case W&&a===Me[i]&&s===Oe[i]:return oe(`Size unchanged: ${d}`),Math.max(a,s);case 0===a:return oe(`Page is hidden: ${d}`),s;case!t&&a!==Me[i]&&s<=Oe[i]:return oe(`New HTML bounding size: ${d}`,"Previous bounding size:",Me[i]),n();case!t&&a<Me[i]:return oe("HTML bounding size decreased:",d),n();case s===c||s===r:return oe("HTML bounding size equals page size:",d),n();case a>s:return oe(`Page size < HTML bounding size: ${d}`),n();case!t:oe(`Switch to autoOverflow: ${d}`),function({ceilBoundingSize:e,dimension:t,isHeight:n,scrollSize:o}){const i=n?"bottom":"right";ae(`\n[31;1mDetected content overflowing html element[m\n    \nThis causes [3miframe-resizer[m to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${i} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the [1m<HTML>[m element or alternatively you can add the attribute [1mdata-iframe-size[m to the elements on the page that you want [3miframe-resizer[m to use when calculating the dimensions of the iframe. \n  \nWhen present the [3m${i} margin of the ${n?"lowest":"right most"} element[m with a [1mdata-iframe-size[m attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${o} > document size: ${e})`),n?(oe(`Switching from ${T} to autoOverflow`),T="autoOverflow"):(oe(`Switching from ${V} to autoOverflow`),V="autoOverflow")}({ceilBoundingSize:r,dimension:i,isHeight:o,scrollSize:s});break;default:oe(`Content overflowing HTML element: ${d}`)}return Math.max(e.taggedElement(),n())}const Te={enabled:()=>$,getOffset:()=>L,type:"height",auto:()=>Ee(Te,!1),autoOverflow:()=>Ee(Te,!0),bodyOffset:()=>{const{body:t}=document,n=getComputedStyle(t);return t.offsetHeight+parseInt(n.marginTop,e)+parseInt(n.marginBottom,e)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Te.bodyOffset(),custom:()=>o.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...ze(Te)),min:()=>Math.min(...ze(Te)),grow:()=>Te.max(),lowestElement:()=>$e("bottom"),taggedElement:()=>$e("bottom")},Ie={enabled:()=>z,getOffset:()=>k,type:"width",auto:()=>Ee(Ie,!1),autoOverflow:()=>Ee(Ie,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>o.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...ze(Ie)),min:()=>Math.min(...ze(Ie)),rightMostElement:()=>$e("right"),scroll:()=>Math.max(Ie.bodyScroll(),Ie.documentElementScroll()),taggedElement:()=>$e("right")};function Ce(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=U);return i=Math.ceil(void 0===n?Te[T]():n),a=Math.ceil(void 0===o?Ie[V]():o),$&&e(E,i)||z&&e(J,a)}()&&"init"!==e?!(e in{init:1,size:1})&&($&&T in m||z&&V in m)&&Ne(t):(Re(),E=i,J=a,Ae(E,J,e))}function Pe(e,t,n,o){document.hidden?oe("Page hidden - Ignored resize request"):(e in d||oe(`Trigger event: ${t}`),Ce(e,t,n,o))}function Re(){W||(W=!0,oe("Trigger event lock on"),requestAnimationFrame((()=>{W=!1,oe("Trigger event lock off"),oe("--")})))}function xe(e){E=Te[T](),J=Ie[V](),Ae(E,J,e)}function Ne(e){const t=T;T=s,oe(`Reset trigger event: ${e}`),Re(),xe("reset"),T=t}function Ae(e,t,n,o,i){void 0!==i?oe(`Message targetOrigin: ${i}`):i=D,function(){const a=`${A}:${e+L}:${t+k}:${n}${void 0===o?"":`:${o}`}`;oe(`Sending message to host page (${a}) via ${F?"sameDomain":"postMessage"}`),F?window.parent.iFrameListener(l+a):q.postMessage(l+a,i)}()}function Le(e){const t={init:function(){C=e.data,q=e.source,re(),O=!1,setTimeout((()=>{I=!1}),a)},reset(){I?oe("Page reset ignored by init"):(oe("Page size reset by host page"),xe("resetPage"))},resize(){Pe("resizeParent","Parent window requested size check")},moveToAnchor(){P.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();oe(`PageInfo received from parent: ${e}`),Y?Y(JSON.parse(e)):Ae(0,0,"pageInfoStop"),oe(" --")},parentInfo(){const e=o();oe(`ParentInfo received from parent: ${e}`),G?G(Object.freeze(JSON.parse(e))):Ae(0,0,"parentInfoStop"),oe(" --")},message(){const e=o();oe(`onMessage called from parent: ${e}`),Q(JSON.parse(e)),oe(" --")}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>!("undefined"!=typeof module&&module.exports)&&"iFrameResize"in window||void 0!==window.jQuery&&"iFrameResize"in window.jQuery.prototype,r=()=>e.data.split(":")[2]in{true:1,false:1};l===`${e.data}`.slice(0,u)&&(!1!==O?r()?t.init():oe(`Ignored message of type "${n()}". Received before initialization.`):function(){const o=n();o in t?t[o]():i()||r()||ie(`Unexpected message (${e.data})`)}())}function ke(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function He(e){return Le(e),j}"undefined"!=typeof window&&(window.iFrameListener=e=>Le({data:e,sameDomian:!0}),K(window,"message",Le),K(window,"readystatechange",ke),ke());try{top?.document?.getElementById("banner")&&(j={},Z(window,"message",Le),define([],(()=>He)))}catch(e){}}));
//# sourceMappingURL=iframeResizer.child.js.map
