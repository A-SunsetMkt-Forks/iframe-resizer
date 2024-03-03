/**
 *  iframe-resizer (jQuery) v5.0.0-alpha.1
 *
 *  License:    GPL-3.0
 *  Copyright:  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 * 
 *  Desciption: Keep same and cross domain iFrames sized to their content with
 *              support for window/content resizing, and multiple iFrames.
 *
 *  @preserve
 *  @module @iframe-resizer/jquery
 *  @version 5.0.0-alpha.1
 *  @license GPL-3.0
 *  @author David J. Bradshaw <dave@bradshaw.net>
 *  @fileoverview JQuery parent window script for iframe-resizer.
 *  @copyright (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 *  @see {@link https://github.com/davidjbradshaw/iframe-resizer}
 */


!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="[iframeResizer]";let n={},i=!1;const t=n=>`${e}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(n)}]`,o=(e,n,...i)=>window?.console[e](t(n),...i),r=(e,...t)=>!0===(e=>n[e]?n[e].log:i)(e)?o("log",e,...t):null,a=(e,...n)=>o("info",e,...n),s=(e,...n)=>o("warn",e,...n),d=(n,i)=>window?.console.warn(((n,...i)=>[`${e}[${n}]`,...i].join(" "))(n,window.chrome?i:i.replaceAll(/\u001B\[[\d;]*m/gi,""))),c="5.0.0-alpha.1",l=7,m="[iFrameSizer]",f=m.length,u=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),g=(e,n,i,t)=>e.addEventListener(n,i,t||!1),h=(e,n,i)=>e.removeEventListener(n,i,!1);var p={};var w=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,offsetHeight:0,offsetWidth:0,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof p[e.id].onInit&&(d(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),p[e.id].onInit(e))},onResized(){},onScroll:()=>!0});let b=0,y=null;function $(e){function n(){o("Height"),o("Width"),M(B),k(P),D("onResized",B)}function i(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function t(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function o(e){const n=Number(p[P][`max${e}`]),i=Number(p[P][`min${e}`]),t=e.toLowerCase();let o=Number(B[t]);r(P,`Checking ${t} is in range ${i}-${n}`),o<i&&(o=i,r(P,`Set ${t} to min value`)),o>n&&(o=n,r(P,`Set ${t} to max value`)),B[t]=`${o}`}function d(e){return j.slice(j.indexOf(":")+l+e)}const c=(e,n)=>(i,t)=>{const o={};var r,a;r=function(){F(`Send ${e} (${i})`,`${e}:${n()}`,t)},o[a=t]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},u=(e,n)=>()=>{const i=n=>()=>{p[a]?e(n,a):o()};function t(e,t){r(a,`${e} listeners for send${n}`),t(window,"scroll",i("scroll")),t(window,"resize",i("resize window"))}function o(){t("Remove ",h),s.disconnect()}const a=P,s=new ResizeObserver(i("iframe observed"));t("Add ",g),s.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),p[a]&&(p[a][`stop${n}`]=o)},w=e=>()=>{e in p[P]&&(p[P][e](),delete p[P][e])},b=c("pageInfo",(function(){const e=document.body.getBoundingClientRect(),n=B.iframe.getBoundingClientRect(),{scrollY:i,scrollX:t,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:i,scrollLeft:t,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),$=c("parentInfo",(function(){const{iframe:e}=B,{scrollWidth:n,scrollHeight:i}=document.documentElement,{width:t,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:d,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:n,scrollHeight:i},viewport:{width:t,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:d,scale:c}})})),z=u(b,"PageInfo"),N=u($,"ParentInfo"),S=w("stopPageInfo"),H=w("stopParentInfo");function E(e){const n=e.getBoundingClientRect();return x(P),{x:Math.floor(Number(n.left)+Number(y.x)),y:Math.floor(Number(n.top)+Number(y.y))}}function C(e){const n=e?E(B.iframe):{x:0,y:0};let i=((e,n)=>({x:Number(e.width)+n.x,y:Number(e.height)+n.y}))(B,n);r(P,`Reposition requested from iFrame (offset x:${n.x} y:${n.y})`),window.top===window.self?(y=i,O(),r(P,"--")):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):s(P,"Unable to scroll to requested position, window.parentIFrame not found")}function O(){!1!==D("onScroll",y)?k(P):T()}function L(e){let n={};if(0===Number(B.width)&&0===Number(B.height)){const e=d(9).split(":");n={x:e[1],y:e[0]}}else n={x:B.width,y:B.height};D(e,{iframe:B.iframe,screenX:Number(n.x),screenY:Number(n.y),type:B.type})}const D=(e,n)=>v(P,e,n);let j=e.data,B={},P=null;"[iFrameResizerChild]Ready"!==j?m===`${j}`.slice(0,f)&&j.slice(f).split(":")[0]in p?(B=function(){const e=j.slice(f).split(":"),n=e[1]?Number(e[1]):0,o=p[e[0]]?.iframe,r=getComputedStyle(o);return{iframe:o,id:e[0],height:n+i(r)+t(r),width:Number(e[2]),type:e[3]}}(),P=B.id,P?(function(e){if(!p[e])throw new Error(`${B.type} No settings for ${e}. Message was: ${j}`)}(P),function(){const e=B.type in{true:1,false:1,undefined:1};return e&&r(P,"Ignoring init message from meta parent page"),e}()||(r(P,`Received: ${j}`),p[P].loaded=!0,function(){let e=!0;return null===B.iframe&&(s(P,`The iframe (${B.id}) was not found.`),e=!1),e}()&&function(){const{origin:n,sameDomain:i}=e;if(i)return!0;let t=p[P]?.checkOrigin;if(t&&"null"!=`${n}`&&!(t.constructor===Array?function(){let e=0,i=!1;for(r(P,`Checking connection is from allowed list of origins: ${t}`);e<t.length;e++)if(t[e]===n){i=!0;break}return i}():function(){const e=p[P]?.remoteHost;return r(P,`Checking connection is from: ${e}`),n===e}()))throw new Error(`Unexpected message received from: ${n} for ${B.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(p[P]?.firstRun&&p[P]&&(p[P].firstRun=!1),B.type){case"close":I(B.iframe);break;case"message":e=d(6),r(P,`onMessage passed: {iframe: ${B.iframe.id}, message: ${e}}`),D("onMessage",{iframe:B.iframe,message:JSON.parse(e)}),r(P,"--");break;case"mouseenter":L("onMouseEnter");break;case"mouseleave":L("onMouseLeave");break;case"autoResize":p[P].autoResize=JSON.parse(d(9));break;case"scrollTo":C(!1);break;case"scrollToOffset":C(!0);break;case"pageInfo":b("start",P),z();break;case"parentInfo":$("start",P),N();break;case"pageInfoStop":S();break;case"parentInfoStop":H();break;case"inPageLink":!function(e){const n=e.split("#")[1]||"",i=decodeURIComponent(n);let t=document.getElementById(i)||document.getElementsByName(i)[0];t?function(){const e=E(t);r(P,`Moving to in page link (#${n}) at x: ${e.x} y: ${e.y}`),y={x:e.x,y:e.y},O(),r(P,"--")}():window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(n):r(P,`In page link #${n} not found and window.parentIFrame not found`):r(P,`In page link #${n} not found`)}(d(9));break;case"reset":R(B);break;case"init":n(),function(e){try{p[e].sameDomain=!!p[e]?.iframe?.contentWindow?.iFrameListener}catch(n){p[e].sameDomain=!1}r(e,`sameDomain: ${p[e].sameDomain}`)}(P),D("onReady",B.iframe);break;default:if(0===B.width&&0===B.height)return void s(`Unsupported message received (${B.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===B.width||0===B.height)return void r(P,"Ignoring message with 0 height or width");if(document.hidden)return void r(P,"Page hidden - ignored resize request");n()}var e}())):s("iframeResizer received messageData without id, message was: ",j)):a(P,`Ignored: ${j}`):Object.keys(p).forEach((e=>F("iFrame requested init",W(e),e)))}function v(e,n,i){let t=null,o=null;if(p[e]){if(t=p[e][n],"function"!=typeof t)throw new TypeError(`${n} on iFrame[${e}] is not a function`);o=t(i)}return o}function z(e){const n=e.id;delete p[n]}function I(e){const n=e.id;if(!1!==v(n,"onClose",n)){r(n,`Removing iFrame: ${n}`);try{e.parentNode&&e.remove()}catch(e){s(e)}v(n,"onClosed",n),r(n,"--"),z(e)}else r(n,"Close iframe cancelled by onClose event")}function x(e){null===y&&(y={x:window.scrollX,y:window.scrollY},r(e,`Get page position: ${y.x}, ${y.y}`))}function T(){y=null}function k(e){null!==y&&(window.scrollTo(y.x,y.y),r(e,`Set page position: ${y.x}, ${y.y}`),T())}function R(e){r(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),x(e.id),M(e),F("reset","reset",e.id)}function M(e){const n=e.id;function i(i){const t=`${e[i]}px`;e.iframe.style[i]=t,r(n,`IFrame (${n}) ${i} set to ${t}`)}p[n].sizeHeight&&i("height"),p[n].sizeWidth&&i("width")}function F(e,n,i,t){p[i]&&(p[i]?.postMessageTarget?function(){const{postMessageTarget:t,targetOrigin:o}=p[i];if(p[i].sameDomain)try{return p[i].iframe.contentWindow.iFrameListener(m+n),void r(i,`[${e}] Sending message to iframe[${i}] (${n}) via sameDomain`)}catch(e){s(i,"Same domain connection failed. Trying cross domain"),p[i].sameDomain=!1}r(i,`[${e}] Sending message to iframe[${i}] (${n}) targetOrigin: ${o}`),t.postMessage(m+n,o)}():s(i,`[${e}] IFrame(${i}) not found`),t&&p[i]?.warningTimeout&&(p[i].msgTimeout=setTimeout((function(){void 0!==p[i]&&(p[i].loaded||p[i].loadErrorShown||(p[i].loadErrorShown=!0,d(i,`\n[31;1mNo response from iFrame[m\n            \nThe iframe ([3m${i}[m) has not responded within ${p[i].warningTimeout/1e3} seconds. Check [1miFrameResizer.contentWindow.js[m has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the [1mwarningTimeout[m option to a higher value or zero to suppress this warning.\n`)))}),p[i].warningTimeout)))}function W(e){const n=p[e];return[e,"8",n.sizeWidth,n.log,"32",n.enablePublicMethods,n.autoResize,n.bodyMargin,n.heightCalculationMethod,n.bodyBackground,n.bodyPadding,n.tolerance,n.inPageLinks,"child",n.widthCalculationMethod,n.mouseEvents,n.offsetHeight,n.offsetWidth,n.sizeHeight,c].join(":")}n=p;const N=e=>!Number.isNaN(e);function S(e,n){function t(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&d(o,'\n[31;1mDeprecated Optionm\n\nThe [1msizeWidth[m, [1msizeHeight[m and [1mautoResize[m options have been replaced with new [1mdirection[m option which expects values of [3m"vertical"[m, [3m"horizontal"[m or [3m"horizontal"[m.\n'),e}const o=function(t){if("string"!=typeof t)throw new TypeError("Invaild id for iFrame. Expected String");var o;return""===t&&(e.id=t=function(){let e=n?.id||w.id+b++;return null!==document.getElementById(e)&&(e+=b++),e}(),o=(n||{}).log,i=o,r(t,`Added missing iframe ID: ${t} (${e.src})`)),t}(e.id);o in p&&"iFrameResizer"in e?s(o,"Ignored iFrame, already setup."):(r("Version",c),function(n){var i;p[o]={iframe:e,firstRun:!0,remoteHost:e?.src.split("/").slice(0,3).join("/"),...w,...t(n)},function(){if("horizontal"===p[o].direction)return p[o].sizeWidth=!0,p[o].sizeHeight=!1,void r(o,'Direction set to "horizontal"');if("none"===p[o].direction)return p[o].sizeWidth=!1,p[o].sizeHeight=!1,p[o].autoResize=!1,void r(o,'Direction set to "none"');if("vertical"!==p[o].direction)throw new TypeError(o,`Direction value of "${p[o].direction}" is not valid`);r(o,'Direction set to "vertical"')}(),null===p[o].postMessageTarget&&(p[o].postMessageTarget=e.contentWindow),p[o].targetOrigin=!0===p[o].checkOrigin?""===(i=p[o].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*"}(n),function(){switch(r(o,`IFrame scrolling ${p[o]?.scrolling?"enabled":"disabled"} for ${o}`),e.style.overflow=!1===p[o]?.scrolling?"hidden":"auto",p[o]?.scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=p[o]?p[o].scrolling:"no"}}(),function(){function n(n){const i=p[o][n];1/0!==i&&0!==i&&(e.style[n]=N(i)?`${i}px`:i,r(o,`Set ${n} = ${e.style[n]}`))}function i(e){if(N(`min${e}`)&&N(`max${e}`)&&p[o][`min${e}`]>p[o][`max${e}`])throw new Error(`Value for min${e} can not be greater than max${e}`)}i("Height"),i("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),function(){const{bodyMargin:e}=p[o];"number"!=typeof e&&"0"!==e||(p[o].bodyMargin=`${e}px`)}(),function(n){const{id:i}=e;g(e,"load",(function(){F("iFrame.onload",n,i,!0),function(){const n=p[o]?.firstRun,i=p[o]?.heightCalculationMethod in u;!n&&i&&R({iframe:e,height:0,width:0,type:"init"})}()})),F("init",n,i,!0)}(W(o)),p[o]&&(p[o].iframe.iFrameResizer={close:I.bind(null,p[o].iframe),removeListeners:z.bind(null,p[o].iframe),resize:F.bind(null,"Window resize","resize",o),moveToAnchor(e){F("Move to anchor",`moveToAnchor:${e}`,o)},sendMessage(e){F("Send Message",`message:${e=JSON.stringify(e)}`,o)}}))}function H(){!1===document.hidden&&(r("document","Trigger event: Visibility change"),function(e,n){const i=e=>p[e]?.autoResize&&!p[e]?.firstRun;Object.keys(p).forEach((function(t){i(t)&&F(e,n,t)}))}("Tab Visible","resize"))}let E=!1;var C;void 0===window.jQuery?s("","Unable to bind to jQuery, it is not available."):(C=window.jQuery).fn?C.fn.iFrameResize||(C.fn.iFrameResize=function(e){return E||(g(window,"message",$),g(document,"visibilitychange",H),window.iFrameListener=e=>$({data:e,sameDomain:!0}),E=!0),this.filter("iframe").each((function(n,i){S(i,e)})).end()}):s("","Unable to bind to jQuery, it is not fully loaded.")}));
//# sourceMappingURL=jquery.iframeResizer.parent.js.map