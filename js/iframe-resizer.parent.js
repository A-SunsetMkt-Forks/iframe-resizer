/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/parent 5.0.0-beta.1 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              http://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link http://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="[iframe-resizer]";const t=t=>`${e}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(t)}]`,n=(e,n,...i)=>window?.console[e](t(n),...i),i=(e,...t)=>n("warn",e,...t),o=(t,n)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))((t=>(...n)=>[`${e}[${t}]`,...n].join(" "))(t))(n)),r="5.0.0-beta.1",s="[iFrameSizer]",a=s.length,c=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1});var d=e=>{if(!e)return"";let t=-559038744,n=1103547984;for(let i,o=0;o<e.length;o++)i=e.codePointAt(o),t=Math.imul(t^i,2246822519),n=Math.imul(n^i,3266489917);return t^=Math.imul(t^n>>>15,1935289751),n^=Math.imul(n^t>>>15,3405138345),t^=n>>>16,n^=t>>>16,(2097152*(n>>>0)+(t>>>11)).toString(36)};const l=(e,t,n,i)=>e.addEventListener(t,n,i||!1),f=(e,t,n)=>e.removeEventListener(t,n,!1);var u={};var m=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof u[e.id].onInit&&(o(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),u[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),h={position:null,version:r};function g(e){function t(){$(L),z(),S("onResized",L)}function n(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function o(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function r(e){return C.slice(C.indexOf(":")+7+e)}const c=(e,t)=>(n,i)=>{const o={};var r,s;r=function(){R(`Send ${e} (${n})`,`${e}:${t()}`,i)},o[s=i]||(r(),o[s]=requestAnimationFrame((()=>{o[s]=null})))},d=(e,t)=>()=>{const n=t=>()=>{u[r]?e(t,r):o()};function i(e,t){t(window,"scroll",n("scroll")),t(window,"resize",n("resize window"))}function o(){i(0,f),s.disconnect(),a.disconnect()}const r=A,s=new ResizeObserver(n("page observed")),a=new ResizeObserver(n("iframe observed"));i(0,l),s.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),a.observe(u[r].iframe,{attributes:!0,childList:!1,subtree:!1}),u[r]&&(u[r][`stop${t}`]=o)},m=e=>()=>{e in u[A]&&(u[A][e](),delete u[A][e])},g=c("pageInfo",(function(){const e=document.body.getBoundingClientRect(),t=L.iframe.getBoundingClientRect(),{scrollY:n,scrollX:i,innerHeight:o,innerWidth:r}=window,{clientHeight:s,clientWidth:a}=document.documentElement;return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(s,o||0),clientWidth:Math.max(a,r||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:n,scrollLeft:i,documentHeight:s,documentWidth:a,windowHeight:o,windowWidth:r})})),w=c("parentInfo",(function(){const{iframe:e}=L,{scrollWidth:t,scrollHeight:n}=document.documentElement,{width:i,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:c,scale:d}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:t,scrollHeight:n},viewport:{width:i,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:c,scale:d}})})),M=d(g,"PageInfo"),E=d(w,"ParentInfo"),x=m("stopPageInfo"),F=m("stopParentInfo");function W(e){const t=e.getBoundingClientRect();return y(),{x:Number(t.left)+Number(h.position.x),y:Number(t.top)+Number(h.position.y)}}function O(e){const t=e?W(L.iframe):{x:0,y:0};let n=((e,t)=>({x:e.width+t.x,y:e.height+t.y}))(L,t);window.top===window.self?(h.position=n,N()):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](n.x,n.y):i(A,"Unable to scroll to requested position, window.parentIFrame not found")}function N(){!1!==S("onScroll",h.position)?z():v()}function H(e){let t={};if(0===L.width&&0===L.height){const e=r(9).split(":");t={x:e[1],y:e[0]}}else t={x:L.width,y:L.height};S(e,{iframe:L.iframe,screenX:Number(t.x),screenY:Number(t.y),type:L.type})}const S=(e,t)=>p(A,e,t);let C=e.data,L={},A=null;"[iFrameResizerChild]Ready"!==C?s===`${C}`.slice(0,a)&&C.slice(a).split(":")[0]in u&&(L=function(){const e=C.slice(a).split(":"),t=e[1]?Number(e[1]):0,i=u[e[0]]?.iframe,r=getComputedStyle(i);return{iframe:i,id:e[0],height:t+n(r)+o(r),width:Number(e[2]),type:e[3]}}(),A=L.id,A?(function(e){if(!u[e])throw new Error(`${L.type} No settings for ${e}. Message was: ${C}`)}(A),L.type in{true:1,false:1,undefined:1}||(u[A].loaded=!0,function(){let e=!0;return null===L.iframe&&(i(A,`The iframe (${L.id}) was not found.`),e=!1),e}()&&function(){const{origin:t,sameDomain:n}=e;if(n)return!0;let i=u[A]?.checkOrigin;if(i&&"null"!=`${t}`&&!(i.constructor===Array?function(){let e=0,n=!1;for(;e<i.length;e++)if(i[e]===t){n=!0;break}return n}():function(){const e=u[A]?.remoteHost;return t===e}()))throw new Error(`Unexpected message received from: ${t} for ${L.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(u[A]?.firstRun&&u[A]&&(u[A].firstRun=!1),L.type){case"close":b(L.iframe);break;case"message":e=r(6),S("onMessage",{iframe:L.iframe,message:JSON.parse(e)});break;case"mouseenter":H("onMouseEnter");break;case"mouseleave":H("onMouseLeave");break;case"autoResize":u[A].autoResize=JSON.parse(r(9));break;case"scrollTo":O(!1);break;case"scrollToOffset":O(!0);break;case"pageInfo":g("start",A),M();break;case"parentInfo":w("start",A),E();break;case"pageInfoStop":x();break;case"parentInfoStop":F();break;case"inPageLink":!function(e){const t=e.split("#")[1]||"",n=decodeURIComponent(t);let i=document.getElementById(n)||document.getElementsByName(n)[0];i?function(){const e=W(i);h.position={x:e.x,y:e.y},N()}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(t)}(r(9));break;case"reset":T(L);break;case"init":t(),function(e){try{u[e].sameDomain=!!u[e]?.iframe?.contentWindow?.iframeChildListener}catch(t){u[e].sameDomain=!1}}(A),k=!0,S("onReady",L.iframe);break;default:if(0===L.width&&0===L.height)return void i(`Unsupported message received (${L.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===L.width||0===L.height)return;if(document.hidden)return;t()}var e}())):i("iframeResizer received messageData without id, message was: ",C)):Object.keys(u).forEach((e=>R("iFrame requested init",I(e),e)))}function p(e,t,n){let i=null,o=null;if(u[e]){if(i=u[e][t],"function"!=typeof i)throw new TypeError(`${t} on iFrame[${e}] is not a function`);o=i(n)}return o}function w(e){const t=e.id;delete u[t]}function b(e){const t=e.id;if(!1!==p(t,"onClose",t)){try{e.parentNode&&e.remove()}catch(e){i(e)}p(t,"onClosed",t),w(e)}}function y(e){null===h.position&&(h.position={x:window.scrollX,y:window.scrollY})}function v(){h.position=null}function z(e){null!==h.position&&(window.scrollTo(h.position.x,h.position.y),v())}function T(e){y(e.id),$(e),R("reset","reset",e.id)}function $(e){const t=e.id;function n(t){const n=`${e[t]}px`;e.iframe.style[t]=n}u[t].sizeHeight&&n("height"),u[t].sizeWidth&&n("width")}function R(e,t,n,r){u[n]&&(u[n]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:i}=u[n];if(u[n].sameDomain)try{return void u[n].iframe.contentWindow.iframeChildListener(s+t)}catch(e){u[n].sameDomain=!1}e.postMessage(s+t,i)}():i(n,`[${e}] IFrame(${n}) not found`),r&&u[n]?.warningTimeout&&(u[n].msgTimeout=setTimeout((function(){void 0!==u[n]&&(u[n].loaded||u[n].loadErrorShown||(u[n].loadErrorShown=!0,o(n,`\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${n}</>) has not responded within ${u[n].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`)))}),u[n].warningTimeout)))}function I(e){const t=u[e];return[e,"8",t.sizeWidth,t.log,"32",t.enablePublicMethods,t.autoResize,t.bodyMargin,t.heightCalculationMethod,t.bodyBackground,t.bodyPadding,t.tolerance,t.inPageLinks,"child",t.widthCalculationMethod,t.mouseEvents,t.offsetHeight,t.offsetWidth,t.sizeHeight,d(t.license),h.version].join(":")}let M=0,k=!1;var E=e=>t=>{function s(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&o(a,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}const a=function(n){if(n&&"string"!=typeof n)throw new TypeError("Invaild id for iFrame. Expected String");return""!==n&&n||(t.id=n=function(){let t=e?.id||m.id+M++;return null!==document.getElementById(t)&&(t+=M++),t}(),(e||{}).log),n}(t.id);return a in u&&"iFrameResizer"in t?i(a,"Ignored iFrame, already setup."):(x||(x=!0,((e,...t)=>{n("info",e,...t)})(`v${r}`)),function(e){var n,i;u[a]={iframe:t,firstRun:!0,remoteHost:t?.src.split("/").slice(0,3).join("/"),...m,...s(e)},function(){if("horizontal"===u[a].direction)return u[a].sizeWidth=!0,void(u[a].sizeHeight=!1);if("none"===u[a].direction)return u[a].sizeWidth=!1,u[a].sizeHeight=!1,void(u[a].autoResize=!1);if("vertical"!==u[a].direction)throw new TypeError(a,`Direction value of "${u[a].direction}" is not valid`)}(),n=e?.offset,n&&("vertical"===u[a].direction?u[a].offsetHeight=n:u[a].offsetWidth=n),null===u[a].postMessageTarget&&(u[a].postMessageTarget=t.contentWindow),u[a].targetOrigin=!0===u[a].checkOrigin?""===(i=u[a].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*"}(e),W(),function(){switch(t.style.overflow=!1===u[a]?.scrolling?"hidden":"auto",u[a]?.scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=u[a]?u[a].scrolling:"no"}}(),function(){const{bodyMargin:e}=u[a];"number"!=typeof e&&"0"!==e||(u[a].bodyMargin=`${e}px`)}(),function(e){const{id:n}=t;l(t,"load",(function(){R("iFrame.onload",`${e}:${k}`,n,!0),function(){const e=u[a]?.firstRun,n=u[a]?.heightCalculationMethod in c;!e&&n&&T({iframe:t,height:0,width:0,type:"init"})}()})),R("init",`${e}:${k}`,n,!0)}(I(a)),function(){if(u[a]){const e={close:b.bind(null,u[a].iframe),disconnect:w.bind(null,u[a].iframe),removeListeners(){o(a,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:R.bind(null,"Window resize","resize",a),moveToAnchor(e){R("Move to anchor",`moveToAnchor:${e}`,a)},sendMessage(e){R("Send Message",`message:${e=JSON.stringify(e)}`,a)}};u[a].iframe.iframeResizer=e,u[a].iframe.iFrameResizer=e}}()),t?.iFrameResizer};let x=!1;function F(){!1===document.hidden&&function(e,t){const n=e=>u[e]?.autoResize&&!u[e]?.firstRun;Object.keys(u).forEach((function(i){n(i)&&R(e,t,i)}))}("Tab Visible","resize")}const W=(e=>{let t=!1;return function(){return t?void 0:(t=!0,Reflect.apply(e,this,arguments))}})((()=>{l(window,"message",g),l(document,"visibilitychange",F),window.iframeParentListener=e=>g({data:e,sameDomain:!0})})),O="[iframeResizer] ";window.iframeResize=function(){function e(e){switch(!0){case!e:throw new TypeError(`${O}iframe is not defined`);case!e.tagName:throw new TypeError(`${O}Not a valid DOM element`);case"IFRAME"!==e.tagName.toUpperCase():throw new TypeError(`${O}Expected <IFRAME> tag, found <${e.tagName}>`);default:t(e),n.push(e)}}let t,n;return function(i,o){if("undefined"==typeof window)return[];switch(t=E(i),n=[],typeof o){case"undefined":case"string":document.querySelectorAll(o||"iframe").forEach(e);break;case"object":e(o);break;default:throw new TypeError(`${O}Unexpected data type (${typeof o})`)}return Object.freeze(n)}}(),window.iFrameResize=function(...e){o("","Deprecated: iFrameResize(), please use iframeResize()"),window.iframeResize(...e)}}();
