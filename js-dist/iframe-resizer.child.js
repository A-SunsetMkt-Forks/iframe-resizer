/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/child 5.0.2 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <info@iframe-resizer.com>
 * 
 *  @see        {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.2",t=10,n="data-iframe-size";const o=(e,t,n,o)=>e.addEventListener(t,n,o||!1),i=(e,t,n)=>e.removeEventListener(t,n,!1),r=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."];Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)])));const a=e=>(e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))))(r[e]),l={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},c={height:()=>(re("Custom height calculation function not defined"),Ie.auto()),width:()=>(re("Custom width calculation function not defined"),ke.auto())},s={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},u=128,d={},m="checkVisibility"in window,f="auto",p="[iFrameSizer]",h=p.length,y={max:1,min:1,bodyScroll:1,documentElementScroll:1},g=["body"],v="scroll";let b,w,z=!0,S="",$=0,j="",E=null,O="",M=!0,A=!1,C=null,P=!0,T=!1,I=1,k=f,x=!0,N="",R={},B=!0,L=!1,q=0,D=!1,H="",W="child",F=null,U=!1,V=window.parent,J="*",Z=0,Q=!1,X="",Y=1,G=v,K=window,_=()=>{re("onMessage function not defined")},ee=()=>{},te=null,ne=null;const oe=e=>""!=`${e}`&&void 0!==e;const ie=(...e)=>[`[iframe-resizer][${H}]`,...e].join(" "),re=(...e)=>console?.warn(ie(...e)),ae=(...e)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))(ie)(...e)),le=e=>ae(e);function ce(){!function(){try{U="iframeParentListener"in window.parent}catch(e){}}(),function(){const e=e=>"true"===e,t=N.slice(h).split(":");H=t[0],$=void 0===t[1]?$:Number(t[1]),A=void 0===t[2]?A:e(t[2]),L=void 0===t[3]?L:e(t[3]),z=void 0===t[6]?z:e(t[6]),j=t[7],k=void 0===t[8]?k:t[8],S=t[9],O=t[10],Z=void 0===t[11]?Z:Number(t[11]),R.enable=void 0!==t[12]&&e(t[12]),W=void 0===t[13]?W:t[13],G=void 0===t[14]?G:t[14],D=void 0===t[15]?D:e(t[15]),b=void 0===t[16]?b:Number(t[16]),w=void 0===t[17]?w:Number(t[17]),M=void 0===t[18]?M:e(t[18]),t[19],X=t[20]||X,q=void 0===t[21]?q:Number(t[21])}(),function(){function e(){const e=window.iframeResizer||window.iFrameResizer;_=e?.onMessage||_,ee=e?.onReady||ee,"number"==typeof e?.offset&&(M&&(b=e?.offset),A&&(w=e?.offset)),J=e?.targetOrigin||J,k=e?.heightCalculationMethod||k,G=e?.widthCalculationMethod||G}function t(e,t){return"function"==typeof e&&(c[t]=e,e="custom"),e}if(1===q)return;"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),k=t(k,"height"),G=t(G,"width"))}(),function(){void 0===j&&(j=`${$}px`);se("margin",function(e,t){t.includes("-")&&(re(`Negative CSS value ignored for ${e}`),t="");return t}("margin",j))}(),se("background",S),se("padding",O),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body)}(),q<0?le(`${a(q+2)}${a(2)}`):X.codePointAt(0)>4||q<2&&le(a(3)),function(){if(!X||""===X||"false"===X)return void ae("<rb>Legacy version detected on parent page</>\n\nDetected legacy version of parent page script. It is recommended to update the parent page to use <b>@iframe-resizer/parent</>.\n\nSee <u>https://iframe-resizer.com/setup/<u> for more details.\n");X!==e&&ae(`<rb>Version mismatch</>\n\nThe parent and child pages are running different versions of <i>iframe resizer</>.\n\nParent page: ${X} - Child page: ${e}.\n`)}(),pe(),he(),function(){let e=!1;const t=t=>document.querySelectorAll(`[${t}]`).forEach((o=>{e=!0,o.removeAttribute(t),o.setAttribute(n,null)}));t("data-iframe-height"),t("data-iframe-width"),e&&ae("<rb>Deprecated Attributes</>\n          \nThe <b>data-iframe-height</> and <b>data-iframe-width</> attributes have been deprecated and replaced with the single <b>data-iframe-size</> attribute. Use of the old attributes will be removed in a future version of <i>iframe-resizer</>.")}(),document.querySelectorAll(`[${n}]`).length>0&&("auto"===k&&(k="autoOverflow"),"auto"===G&&(G="autoOverflow")),me(),function(){if(1===q)return;K.parentIframe=Object.freeze({autoResize:e=>(!0===e&&!1===z?(z=!0,ye()):!1===e&&!0===z&&(z=!1,de("remove"),F?.disconnect(),E?.disconnect()),qe(0,0,"autoResize",JSON.stringify(z)),z),close(){qe(0,0,"close")},getId:()=>H,getPageInfo(e){if("function"==typeof e)return te=e,qe(0,0,"pageInfo"),void ae("<rb>Deprecated Method</>\n          \nThe <b>getPageInfo()</> method has been deprecated and replaced with  <b>getParentProperties()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n");te=null,qe(0,0,"pageInfoStop")},getParentProperties(e){if("function"!=typeof e)throw new TypeError("parentIFrame.getParentProperties(callback) callback not a function");return ne=e,qe(0,0,"parentInfo"),()=>{ne=null,qe(0,0,"parentInfoStop")}},moveToAnchor(e){R.findTarget(e)},reset(){Le()},scrollTo(e,t){qe(t,e,"scrollTo")},scrollToOffset(e,t){qe(t,e,"scrollToOffset")},sendMessage(e,t){qe(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){k=e,pe()},setWidthCalculationMethod(e){G=e,he()},setTargetOrigin(e){J=e},resize(e,t){Ne("size",`parentIFrame.size(${`${e||""}${t?`,${t}`:""}`})`,e,t)},size(e,t){ae("<rb>Deprecated Method</>\n          \nThe <b>size()</> method has been deprecated and replaced with  <b>resize()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"),this.resize(e,t)}}),K.parentIFrame=K.parentIframe}(),function(){if(!0!==D)return;function e(e){qe(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){o(window.document,t,e)}t("mouseenter"),t("mouseleave")}(),ye(),R=function(){const e=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=e();return{x:parseInt(o.left,t)+parseInt(i.x,t),y:parseInt(o.top,t)+parseInt(i.y,t)}}function i(e){function t(e){const t=n(e);qe(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),r=document.getElementById(i)||document.getElementsByName(i)[0];void 0===r?qe(0,0,"inPageLink",`#${o}`):t(r)}function r(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function a(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&o(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function l(){o(window,"hashchange",r)}function c(){setTimeout(r,u)}function s(){a(),l(),c()}R.enable&&(1===q?ae("In page linking requires a Professional or Business license. Please see https://iframe-resizer.com/pricing for more details."):s());return{findTarget:i}}(),Ne("init","Init message from host page",void 0,void 0,e),ee(),B=!1}function se(e,t){void 0!==t&&""!==t&&"null"!==t&&document.body.style.setProperty(e,t)}function ue(e){({add(t){function n(){Ne(e.eventName,e.eventType)}d[t]=n,o(window,t,n,{passive:!0})},remove(e){const t=d[e];delete d[e],i(window,e,t)}})[e.method](e.eventName)}function de(e){ue({method:e,eventType:"After Print",eventName:"afterprint"}),ue({method:e,eventType:"Before Print",eventName:"beforeprint"}),ue({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function me(){const e=document.querySelectorAll(`[${n}]`);T=e.length>0,C=T?e:Oe(document)()}function fe(e,t,n,o){return t!==e&&(e in n||(re(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in s&&ae(`<rb>Deprecated ${o}CalculationMethod (${e})</>\n\nThis version of <i>iframe-resizer</> can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`)),e}function pe(){k=fe(k,f,Ie,"height")}function he(){G=fe(G,v,ke,"width")}function ye(){!0===z&&(de("add"),E=function(){function e(e){e.forEach($e),me()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return t.observe(n,o),t}const n=t();return{disconnect(){n.disconnect()}}}(),F=new ResizeObserver(ve),Se(window.document))}let ge;function ve(e){if(!Array.isArray(e)||0===e.length)return;const t=e[0].target;ge=()=>Ne("resizeObserver",`Resize Observed: ${function(e){switch(!0){case!oe(e):return"";case oe(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case oe(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(oe(e.className)?`.${e.className}`:"")}}(t)}`),setTimeout((()=>{ge&&ge(),ge=void 0}),0)}const be=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},we=()=>[...Oe(document)()].filter(be);function ze(e){e&&F.observe(e)}function Se(e){[...we(),...g.flatMap((t=>e.querySelector(t)))].forEach(ze)}function $e(e){"childList"===e.type&&Se(e.target)}function je(e){const t=(n=e).charAt(0).toUpperCase()+n.slice(1);var n;let o,i=0,r=C.length,a=0,c=performance.now();C.forEach((t=>{T||!m||t.checkVisibility(l)?(i=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),i>a&&(a=i,o=t)):r-=1})),c=performance.now()-c;const s=`\nParsed ${r} element${r=""} in ${c.toPrecision(3)}ms\n${t} ${T?"tagged ":""}element found at: ${a}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(o)}`;return c<1.1||B||T||ae(`<rb>Performance Warning</>\n\nCalculating the page size took an excessive amount of time. To improve performance add the <b>data-iframe-size</> attribute to the ${e} most element on the page.\n${s}`),a}const Ee=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Oe=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");let Me=!1;function Ae({ceilBoundingSize:e,dimension:t,getDimension:n,isHeight:o,scrollSize:i}){if(!Me)return Me=!0,n.taggedElement();const r=o?"bottom":"right";return ae(`<rb>Detected content overflowing html element</>\n    \nThis causes <i>iframe-resizer</> to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${r} margin, and position of every visible HTML element will have a performance impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the <b><HTML></> element or alternatively you can add the attribute <b>data-iframe-size</> to the elements on the page that you want <i>iframe-resizer</> to use when calculating the dimensions of the iframe. \n  \nWhen present the <i>${r} margin of the ${o?"lowest":"right most"} element</> with a <b>data-iframe-size</> attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${i} > document size: ${e})`),o?k="autoOverflow":G="autoOverflow",n.taggedElement()}const Ce={height:0,width:0},Pe={height:0,width:0};function Te(e,t){function n(){return Pe[i]=r,Ce[i]=c,r}const o=e===Ie,i=o?"height":"width",r=e.documentElementBoundingClientRect(),a=Math.ceil(r),l=Math.floor(r),c=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e);switch(!0){case!e.enabled():return c;case!t&&0===Pe[i]&&0===Ce[i]:if(e.taggedElement(!0)<=a)return n();break;case Q&&r===Pe[i]&&c===Ce[i]:return Math.max(r,c);case 0===r:return c;case!t&&r!==Pe[i]&&c<=Ce[i]:return n();case!o:return t?e.taggedElement():Ae({ceilBoundingSize:a,dimension:i,getDimension:e,isHeight:o,scrollSize:c});case!t&&r<Pe[i]:case c===l||c===a:case r>c:return n();case!t:return Ae({ceilBoundingSize:a,dimension:i,getDimension:e,isHeight:o,scrollSize:c})}return Math.max(e.taggedElement(),n())}const Ie={enabled:()=>M,getOffset:()=>b,type:"height",auto:()=>Te(Ie,!1),autoOverflow:()=>Te(Ie,!0),bodyOffset:()=>{const{body:e}=document,n=getComputedStyle(e);return e.offsetHeight+parseInt(n.marginTop,t)+parseInt(n.marginBottom,t)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Ie.bodyOffset(),custom:()=>c.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...Ee(Ie)),min:()=>Math.min(...Ee(Ie)),grow:()=>Ie.max(),lowestElement:()=>je("bottom"),taggedElement:()=>je("bottom")},ke={enabled:()=>A,getOffset:()=>w,type:"width",auto:()=>Te(ke,!1),autoOverflow:()=>Te(ke,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>c.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...Ee(ke)),min:()=>Math.min(...Ee(ke)),rightMostElement:()=>je("right"),scroll:()=>Math.max(ke.bodyScroll(),ke.documentElementScroll()),taggedElement:()=>je("right")};function xe(e,t,n,o,i){let r,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=Z);return r=void 0===n?Ie[k]():n,a=void 0===o?ke[G]():o,M&&e(I,r)||A&&e(Y,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(M&&k in y||A&&G in y)&&Le():(Re(),I=r,Y=a,qe(I,Y,e,i))}function Ne(e,t,n,o,i){document.hidden||xe(e,0,n,o,i)}function Re(){Q||(Q=!0,requestAnimationFrame((()=>{Q=!1})))}function Be(e){I=Ie[k](),Y=ke[G](),qe(I,Y,e)}function Le(e){const t=k;k=f,Re(),Be("reset"),k=t}function qe(e,t,n,o,i){q<0||(void 0!==i||(i=J),function(){const r=`${H}:${`${e+(b||0)}:${t+(w||0)}`}:${n}${void 0===o?"":`:${o}`}`;U?window.parent.iframeParentListener(p+r):V.postMessage(p+r,i)}())}function De(e){const t={init:function(){N=e.data,V=e.source,ce(),P=!1,setTimeout((()=>{x=!1}),u)},reset(){x||Be("resetPage")},resize(){Ne("resizeParent")},moveToAnchor(){R.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();te?te(JSON.parse(e)):qe(0,0,"pageInfoStop")},parentInfo(){const e=o();ne?ne(Object.freeze(JSON.parse(e))):qe(0,0,"parentInfoStop")},message(){const e=o();_(JSON.parse(e))}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,r=()=>e.data.split(":")[2]in{true:1,false:1};p===`${e.data}`.slice(0,h)&&(!1!==P?r()&&t.init():function(){const o=n();o in t?t[o]():i()||r()||re(`Unexpected message (${e.data})`)}())}function He(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function We(e){return De(e),K}"undefined"!=typeof window&&(window.iframeChildListener=e=>De({data:e,sameDomain:!0}),o(window,"message",De),o(window,"readystatechange",He),He());try{top?.document?.getElementById("banner")&&(K={},window.mockMsgListener=We,i(window,"message",De),define([],(()=>We)))}catch(e){}}();