"use strict";(self.webpackChunkjungwon_electronics_homepage=self.webpackChunkjungwon_electronics_homepage||[]).push([[501],{752:function(e,t,n){n.r(t),n.d(t,{default:function(){return kt}});var o=n(7294),r=n(6797),i=n(9692),a=i.default.div.withConfig({displayName:"MapStyled__Wrapper",componentId:"sc-19l1zhn-0"})(["margin-top:10px;width:100%;height:400px;"]),s=function(e){var t=e.src;return o.createElement(a,null,o.createElement("iframe",{src:t,width:"100%",height:"100%",style:{border:"1px solid #d2d2d2"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"map"}))},l=n(581),c=n(3366),p=n(7253),u=n(885),f=n(4942),d=n(7462),m=n(5505),h=n(9236),v=n(5147),g=n(7663),y=n(6449),b=n(2058),x=n(9240),w=n(4522),E=n(8127),Z=n(6164),O=n(4694);function T(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function C(e){return e instanceof T(e).Element||e instanceof Element}function P(e){return e instanceof T(e).HTMLElement||e instanceof HTMLElement}function R(e){return"undefined"!=typeof ShadowRoot&&(e instanceof T(e).ShadowRoot||e instanceof ShadowRoot)}var k=Math.max,j=Math.min,L=Math.round;function M(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function S(){return!/^((?!chrome|android).)*safari/i.test(M())}function A(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&P(e)&&(r=e.offsetWidth>0&&L(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&L(o.height)/e.offsetHeight||1);var a=(C(e)?T(e):window).visualViewport,s=!S()&&n,l=(o.left+(s&&a?a.offsetLeft:0))/r,c=(o.top+(s&&a?a.offsetTop:0))/i,p=o.width/r,u=o.height/i;return{width:p,height:u,top:c,right:l+p,bottom:c+u,left:l,x:l,y:c}}function D(e){var t=T(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function W(e){return e?(e.nodeName||"").toLowerCase():null}function B(e){return((C(e)?e.ownerDocument:e.document)||window.document).documentElement}function N(e){return A(B(e)).left+D(e).scrollLeft}function I(e){return T(e).getComputedStyle(e)}function z(e){var t=I(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function H(e,t,n){void 0===n&&(n=!1);var o,r,i=P(t),a=P(t)&&function(e){var t=e.getBoundingClientRect(),n=L(t.width)/e.offsetWidth||1,o=L(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),s=B(t),l=A(e,a,n),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==W(t)||z(s))&&(c=(o=t)!==T(o)&&P(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:D(o)),P(t)?((p=A(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=N(s))),{x:l.left+c.scrollLeft-p.x,y:l.top+c.scrollTop-p.y,width:l.width,height:l.height}}function _(e){var t=A(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function F(e){return"html"===W(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||B(e)}function q(e){return["html","body","#document"].indexOf(W(e))>=0?e.ownerDocument.body:P(e)&&z(e)?e:q(F(e))}function U(e,t){var n;void 0===t&&(t=[]);var o=q(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=T(o),a=r?[i].concat(i.visualViewport||[],z(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(U(F(a)))}function V(e){return["table","td","th"].indexOf(W(e))>=0}function X(e){return P(e)&&"fixed"!==I(e).position?e.offsetParent:null}function Y(e){for(var t=T(e),n=X(e);n&&V(n)&&"static"===I(n).position;)n=X(n);return n&&("html"===W(n)||"body"===W(n)&&"static"===I(n).position)?t:n||function(e){var t=/firefox/i.test(M());if(/Trident/i.test(M())&&P(e)&&"fixed"===I(e).position)return null;var n=F(e);for(R(n)&&(n=n.host);P(n)&&["html","body"].indexOf(W(n))<0;){var o=I(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var J="top",K="bottom",G="right",Q="left",$="auto",ee=[J,K,G,Q],te="start",ne="end",oe="viewport",re="popper",ie=ee.reduce((function(e,t){return e.concat([t+"-"+te,t+"-"+ne])}),[]),ae=[].concat(ee,[$]).reduce((function(e,t){return e.concat([t,t+"-"+te,t+"-"+ne])}),[]),se=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function le(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var ce={placement:"bottom",modifiers:[],strategy:"absolute"};function pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ue(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?ce:r;return function(e,t,n){void 0===n&&(n=i);var r,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ce,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,p={state:s,setOptions:function(n){var r="function"==typeof n?n(s.options):n;u(),s.options=Object.assign({},i,s.options,r),s.scrollParents={reference:C(e)?U(e):e.contextElement?U(e.contextElement):[],popper:U(t)};var a=function(e){var t=le(e);return se.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:s,name:t,instance:p,options:o}),a=function(){};l.push(i||a)}})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(pe(t,n)){s.rects={reference:H(t,Y(n),"fixed"===s.options.strategy),popper:_(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<s.orderedModifiers.length;o++)if(!0!==s.reset){var r=s.orderedModifiers[o],i=r.fn,a=r.options,l=void 0===a?{}:a,u=r.name;"function"==typeof i&&(s=i({state:s,options:l,name:u,instance:p})||s)}else s.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(r())}))}))),a}),destroy:function(){u(),c=!0}};if(!pe(e,t))return p;function u(){l.forEach((function(e){return e()})),l=[]}return p.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var fe={passive:!0};function de(e){return e.split("-")[0]}function me(e){return e.split("-")[1]}function he(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ve(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?de(r):null,a=r?me(r):null,s=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(i){case J:t={x:s,y:n.y-o.height};break;case K:t={x:s,y:n.y+n.height};break;case G:t={x:n.x+n.width,y:l};break;case Q:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var c=i?he(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case te:t[c]=t[c]-(n[p]/2-o[p]/2);break;case ne:t[c]=t[c]+(n[p]/2-o[p]/2)}}return t}var ge={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ye(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"==typeof p?p({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=Q,x=J,w=window;if(c){var E=Y(n),Z="clientHeight",O="clientWidth";if(E===T(n)&&"static"!==I(E=B(n)).position&&"absolute"===s&&(Z="scrollHeight",O="scrollWidth"),r===J||(r===Q||r===G)&&i===ne)x=K,h-=(u&&E===w&&w.visualViewport?w.visualViewport.height:E[Z])-o.height,h*=l?1:-1;if(r===Q||(r===J||r===K)&&i===ne)b=G,d-=(u&&E===w&&w.visualViewport?w.visualViewport.width:E[O])-o.width,d*=l?1:-1}var C,P=Object.assign({position:s},c&&ge),R=!0===p?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:L(t*o)/o||0,y:L(n*o)/o||0}}({x:d,y:h}):{x:d,y:h};return d=R.x,h=R.y,l?Object.assign({},P,((C={})[x]=y?"0":"",C[b]=g?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",C)):Object.assign({},P,((t={})[x]=y?h+"px":"",t[b]=g?d+"px":"",t.transform="",t))}var be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=ae.reduce((function(e,n){return e[n]=function(e,t,n){var o=de(e),r=[Q,J].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[Q,G].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=a}},xe={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,(function(e){return xe[e]}))}var Ee={start:"end",end:"start"};function Ze(e){return e.replace(/start|end/g,(function(e){return Ee[e]}))}function Oe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&R(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ce(e,t,n){return t===oe?Te(function(e,t){var n=T(e),o=B(e),r=n.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(r){i=r.width,a=r.height;var c=S();(c||!c&&"fixed"===t)&&(s=r.offsetLeft,l=r.offsetTop)}return{width:i,height:a,x:s+N(e),y:l}}(e,n)):C(t)?function(e,t){var n=A(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):Te(function(e){var t,n=B(e),o=D(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=k(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=k(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+N(e),l=-o.scrollTop;return"rtl"===I(r||n).direction&&(s+=k(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(B(e)))}function Pe(e,t,n,o){var r="clippingParents"===t?function(e){var t=U(F(e)),n=["absolute","fixed"].indexOf(I(e).position)>=0&&P(e)?Y(e):e;return C(n)?t.filter((function(e){return C(e)&&Oe(e,n)&&"body"!==W(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),a=i[0],s=i.reduce((function(t,n){var r=Ce(e,n,o);return t.top=k(r.top,t.top),t.right=j(r.right,t.right),t.bottom=j(r.bottom,t.bottom),t.left=k(r.left,t.left),t}),Ce(e,a,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Re(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ke(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function je(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,l=void 0===s?"clippingParents":s,c=n.rootBoundary,p=void 0===c?oe:c,u=n.elementContext,f=void 0===u?re:u,d=n.altBoundary,m=void 0!==d&&d,h=n.padding,v=void 0===h?0:h,g=Re("number"!=typeof v?v:ke(v,ee)),y=f===re?"reference":re,b=e.rects.popper,x=e.elements[m?y:f],w=Pe(C(x)?x:x.contextElement||B(e.elements.popper),l,p,a),E=A(e.elements.reference),Z=ve({reference:E,element:b,strategy:"absolute",placement:r}),O=Te(Object.assign({},b,Z)),T=f===re?O:E,P={top:w.top-T.top+g.top,bottom:T.bottom-w.bottom+g.bottom,left:w.left-T.left+g.left,right:T.right-w.right+g.right},R=e.modifiersData.offset;if(f===re&&R){var k=R[r];Object.keys(P).forEach((function(e){var t=[G,K].indexOf(e)>=0?1:-1,n=[J,K].indexOf(e)>=0?"y":"x";P[e]+=k[n]*t}))}return P}function Le(e,t,n){return k(e,j(t,n))}var Me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,l=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=je(t,{boundary:l,rootBoundary:c,padding:u,altBoundary:p}),g=de(t.placement),y=me(t.placement),b=!y,x=he(g),w="x"===x?"y":"x",E=t.modifiersData.popperOffsets,Z=t.rects.reference,O=t.rects.popper,T="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,C="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(E){if(i){var L,M="y"===x?J:Q,S="y"===x?K:G,A="y"===x?"height":"width",D=E[x],W=D+v[M],B=D-v[S],N=d?-O[A]/2:0,I=y===te?Z[A]:O[A],z=y===te?-O[A]:-Z[A],H=t.elements.arrow,F=d&&H?_(H):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},U=q[M],V=q[S],X=Le(0,Z[A],F[A]),$=b?Z[A]/2-N-X-U-C.mainAxis:I-X-U-C.mainAxis,ee=b?-Z[A]/2+N+X+V+C.mainAxis:z+X+V+C.mainAxis,ne=t.elements.arrow&&Y(t.elements.arrow),oe=ne?"y"===x?ne.clientTop||0:ne.clientLeft||0:0,re=null!=(L=null==P?void 0:P[x])?L:0,ie=D+ee-re,ae=Le(d?j(W,D+$-re-oe):W,D,d?k(B,ie):B);E[x]=ae,R[x]=ae-D}if(s){var se,le="x"===x?J:Q,ce="x"===x?K:G,pe=E[w],ue="y"===w?"height":"width",fe=pe+v[le],ve=pe-v[ce],ge=-1!==[J,Q].indexOf(g),ye=null!=(se=null==P?void 0:P[w])?se:0,be=ge?fe:pe-Z[ue]-O[ue]-ye+C.altAxis,xe=ge?pe+Z[ue]+O[ue]-ye-C.altAxis:ve,we=d&&ge?function(e,t,n){var o=Le(e,t,n);return o>n?n:o}(be,pe,xe):Le(d?be:fe,pe,d?xe:ve);E[w]=we,R[w]=we-pe}t.modifiersData[o]=R}},requiresIfExists:["offset"]};var Se={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=de(n.placement),l=he(s),c=[Q,G].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Re("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ke(e,ee))}(r.padding,n),u=_(i),f="y"===l?J:Q,d="y"===l?K:G,m=n.rects.reference[c]+n.rects.reference[l]-a[l]-n.rects.popper[c],h=a[l]-n.rects.reference[l],v=Y(i),g=v?"y"===l?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=p[f],x=g-u[c]-p[d],w=g/2-u[c]/2+y,E=Le(b,w,x),Z=l;n.modifiersData[o]=((t={})[Z]=E,t.centerOffset=E-w,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&Oe(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ae(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function De(e){return[J,G,K,Q].some((function(t){return e[t]>=0}))}var We=ue({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,l=T(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,fe)})),s&&l.addEventListener("resize",n.update,fe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,fe)})),s&&l.removeEventListener("resize",n.update,fe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,l=void 0===s||s,c={placement:de(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ye(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ye(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];P(r)&&W(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});P(o)&&W(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},be,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,l=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=de(v),y=l||(g===v||!m?[we(v)]:function(e){if(de(e)===$)return[];var t=we(e);return[Ze(e),t,Ze(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(de(n)===$?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?ae:l,p=me(o),u=p?s?ie:ie.filter((function(e){return me(e)===p})):ee,f=u.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,n){return t[n]=je(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[de(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,E=new Map,Z=!0,O=b[0],T=0;T<b.length;T++){var C=b[T],P=de(C),R=me(C)===te,k=[J,K].indexOf(P)>=0,j=k?"width":"height",L=je(t,{placement:C,boundary:p,rootBoundary:u,altBoundary:f,padding:c}),M=k?R?G:Q:R?K:J;x[j]>w[j]&&(M=we(M));var S=we(M),A=[];if(i&&A.push(L[P]<=0),s&&A.push(L[M]<=0,L[S]<=0),A.every((function(e){return e}))){O=C,Z=!1;break}E.set(C,A)}if(Z)for(var D=function(e){var t=b.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return O=t,"break"},W=m?3:1;W>0;W--){if("break"===D(W))break}t.placement!==O&&(t.modifiersData[o]._skip=!0,t.placement=O,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Me,Se,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=je(t,{elementContext:"reference"}),s=je(t,{altBoundary:!0}),l=Ae(a,o),c=Ae(s,r,i),p=De(l),u=De(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),Be=n(5795),Ne=n(1351),Ie=n(9508);function ze(e){return(0,Ne.Z)("MuiPopperUnstyled",e)}(0,Ie.Z)("MuiPopperUnstyled",["root"]);var He=n(4056),_e=n(5893),Fe=["anchorEl","children","component","components","componentsProps","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],qe=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ue(e){return"function"==typeof e?e():e}var Ve={},Xe=o.forwardRef((function(e,t){var n,r=e.anchorEl,i=e.children,a=e.component,s=e.components,l=void 0===s?{}:s,p=e.componentsProps,f=void 0===p?{}:p,m=e.direction,v=e.disablePortal,g=e.modifiers,y=e.open,b=e.ownerState,x=e.placement,w=e.popperOptions,O=e.popperRef,T=e.TransitionProps,C=(0,c.Z)(e,Fe),P=o.useRef(null),R=(0,E.Z)(P,t),k=o.useRef(null),j=(0,E.Z)(k,O),L=o.useRef(j);(0,Z.Z)((function(){L.current=j}),[j]),o.useImperativeHandle(O,(function(){return k.current}),[]);var M=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(x,m),S=o.useState(M),A=(0,u.Z)(S,2),D=A[0],W=A[1];o.useEffect((function(){k.current&&k.current.forceUpdate()})),(0,Z.Z)((function(){if(r&&y){Ue(r);var e=[{name:"preventOverflow",options:{altBoundary:v}},{name:"flip",options:{altBoundary:v}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;W(t.placement)}}];null!=g&&(e=e.concat(g)),w&&null!=w.modifiers&&(e=e.concat(w.modifiers));var t=We(Ue(r),P.current,(0,d.Z)({placement:M},w,{modifiers:e}));return L.current(t),function(){t.destroy(),L.current(null)}}}),[r,v,g,y,w,M]);var B={placement:D};null!==T&&(B.TransitionProps=T);var N=(0,h.Z)({root:["root"]},ze,{}),I=null!=(n=null!=a?a:l.Root)?n:"div",z=(0,He.Z)({elementType:I,externalSlotProps:f.root,externalForwardedProps:C,additionalProps:{role:"tooltip",ref:R},ownerState:(0,d.Z)({},e,b),className:N.root});return(0,_e.jsx)(I,(0,d.Z)({},z,{children:"function"==typeof i?i(B):i}))})),Ye=o.forwardRef((function(e,t){var n=e.anchorEl,r=e.children,i=e.container,a=e.direction,s=void 0===a?"ltr":a,l=e.disablePortal,p=void 0!==l&&l,f=e.keepMounted,m=void 0!==f&&f,h=e.modifiers,v=e.open,g=e.placement,y=void 0===g?"bottom":g,b=e.popperOptions,x=void 0===b?Ve:b,w=e.popperRef,E=e.style,Z=e.transition,T=void 0!==Z&&Z,C=(0,c.Z)(e,qe),P=o.useState(!0),R=(0,u.Z)(P,2),k=R[0],j=R[1];if(!m&&!v&&(!T||k))return null;var L=i||(n?(0,O.Z)(Ue(n)).body:void 0);return(0,_e.jsx)(Be.Z,{disablePortal:p,container:L,children:(0,_e.jsx)(Xe,(0,d.Z)({anchorEl:n,direction:s,disablePortal:p,modifiers:h,ref:t,open:T?!k:v,placement:y,popperOptions:x,popperRef:w},C,{style:(0,d.Z)({position:"fixed",top:0,left:0,display:v||!m||T&&!k?null:"none"},E),TransitionProps:T?{in:v,onEnter:function(){j(!1)},onExited:function(){j(!0)}}:null,children:r}))})})),Je=n(2665),Ke=(0,p.ZP)(Ye,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Ge=o.forwardRef((function(e,t){var n=(0,Je.Z)(),o=(0,b.Z)({props:e,name:"MuiPopper"});return(0,_e.jsx)(Ke,(0,d.Z)({direction:null==n?void 0:n.direction},o,{ref:t}))})),Qe=n(955),$e=n(5973),et=n(1849),tt=n(93),nt=n(6127);function ot(e){return(0,Ne.Z)("MuiTooltip",e)}var rt=(0,Ie.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),it=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var at=(0,p.ZP)(Ge,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((function(e){var t,n=e.theme,o=e.ownerState,r=e.open;return(0,d.Z)({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},o.arrow&&(t={},(0,f.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(rt.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,f.Z)(t,'&[data-popper-placement*="top"] .'.concat(rt.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,f.Z)(t,'&[data-popper-placement*="right"] .'.concat(rt.arrow),(0,d.Z)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,f.Z)(t,'&[data-popper-placement*="left"] .'.concat(rt.arrow),(0,d.Z)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),st=(0,p.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var n=e.ownerState;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,x.Z)(n.placement.split("-")[0]))]]}})((function(e){var t,n,o=e.theme,r=e.ownerState;return(0,d.Z)({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:(0,g.Fq)(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},r.arrow&&{position:"relative",margin:0},r.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:o.typography.fontWeightRegular},(t={},(0,f.Z)(t,".".concat(rt.popper,'[data-popper-placement*="left"] &'),(0,d.Z)({transformOrigin:"right center"},r.isRtl?(0,d.Z)({marginLeft:"14px"},r.touch&&{marginLeft:"24px"}):(0,d.Z)({marginRight:"14px"},r.touch&&{marginRight:"24px"}))),(0,f.Z)(t,".".concat(rt.popper,'[data-popper-placement*="right"] &'),(0,d.Z)({transformOrigin:"left center"},r.isRtl?(0,d.Z)({marginRight:"14px"},r.touch&&{marginRight:"24px"}):(0,d.Z)({marginLeft:"14px"},r.touch&&{marginLeft:"24px"}))),(0,f.Z)(t,".".concat(rt.popper,'[data-popper-placement*="top"] &'),(0,d.Z)({transformOrigin:"center bottom",marginBottom:"14px"},r.touch&&{marginBottom:"24px"})),(0,f.Z)(t,".".concat(rt.popper,'[data-popper-placement*="bottom"] &'),(0,d.Z)({transformOrigin:"center top",marginTop:"14px"},r.touch&&{marginTop:"24px"})),t))})),lt=(0,p.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?"rgba(".concat(t.vars.palette.grey.darkChannel," / 0.9)"):(0,g.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),ct=!1,pt=null;function ut(e,t){return function(n){t&&t(n),e(n)}}var ft=o.forwardRef((function(e,t){var n,r,i,a,s,l,p=(0,b.Z)({props:e,name:"MuiTooltip"}),f=p.arrow,g=void 0!==f&&f,E=p.children,Z=p.components,O=void 0===Z?{}:Z,T=p.componentsProps,C=void 0===T?{}:T,P=p.describeChild,R=void 0!==P&&P,k=p.disableFocusListener,j=void 0!==k&&k,L=p.disableHoverListener,M=void 0!==L&&L,S=p.disableInteractive,A=void 0!==S&&S,D=p.disableTouchListener,W=void 0!==D&&D,B=p.enterDelay,N=void 0===B?100:B,I=p.enterNextDelay,z=void 0===I?0:I,H=p.enterTouchDelay,_=void 0===H?700:H,F=p.followCursor,q=void 0!==F&&F,U=p.id,V=p.leaveDelay,X=void 0===V?0:V,Y=p.leaveTouchDelay,J=void 0===Y?1500:Y,K=p.onClose,G=p.onOpen,Q=p.open,$=p.placement,ee=void 0===$?"bottom":$,te=p.PopperComponent,ne=p.PopperProps,oe=void 0===ne?{}:ne,re=p.title,ie=p.TransitionComponent,ae=void 0===ie?w.Z:ie,se=p.TransitionProps,le=(0,c.Z)(p,it),ce=(0,y.Z)(),pe="rtl"===ce.direction,ue=o.useState(),fe=(0,u.Z)(ue,2),de=fe[0],me=fe[1],he=o.useState(null),ve=(0,u.Z)(he,2),ge=ve[0],ye=ve[1],be=o.useRef(!1),xe=A||q,we=o.useRef(),Ee=o.useRef(),Ze=o.useRef(),Oe=o.useRef(),Te=(0,nt.Z)({controlled:Q,default:!1,name:"Tooltip",state:"open"}),Ce=(0,u.Z)(Te,2),Pe=Ce[0],Re=Ce[1],ke=Pe,je=(0,et.Z)(U),Le=o.useRef(),Me=o.useCallback((function(){void 0!==Le.current&&(document.body.style.WebkitUserSelect=Le.current,Le.current=void 0),clearTimeout(Oe.current)}),[]);o.useEffect((function(){return function(){clearTimeout(we.current),clearTimeout(Ee.current),clearTimeout(Ze.current),Me()}}),[Me]);var Se=function(e){clearTimeout(pt),ct=!0,Re(!0),G&&!ke&&G(e)},Ae=(0,Qe.Z)((function(e){clearTimeout(pt),pt=setTimeout((function(){ct=!1}),800+X),Re(!1),K&&ke&&K(e),clearTimeout(we.current),we.current=setTimeout((function(){be.current=!1}),ce.transitions.duration.shortest)})),De=function(e){be.current&&"touchstart"!==e.type||(de&&de.removeAttribute("title"),clearTimeout(Ee.current),clearTimeout(Ze.current),N||ct&&z?Ee.current=setTimeout((function(){Se(e)}),ct?z:N):Se(e))},We=function(e){clearTimeout(Ee.current),clearTimeout(Ze.current),Ze.current=setTimeout((function(){Ae(e)}),X)},Be=(0,tt.Z)(),Ne=Be.isFocusVisibleRef,Ie=Be.onBlur,ze=Be.onFocus,He=Be.ref,Fe=o.useState(!1),qe=(0,u.Z)(Fe,2)[1],Ue=function(e){Ie(e),!1===Ne.current&&(qe(!1),We(e))},Ve=function(e){de||me(e.currentTarget),ze(e),!0===Ne.current&&(qe(!0),De(e))},Xe=function(e){be.current=!0;var t=E.props;t.onTouchStart&&t.onTouchStart(e)},Ye=De,Je=We;o.useEffect((function(){if(ke)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ae(e)}}),[Ae,ke]);var Ke=(0,$e.Z)(me,t),rt=(0,$e.Z)(He,Ke),ft=(0,$e.Z)(E.ref,rt);""===re&&(ke=!1);var dt=o.useRef({x:0,y:0}),mt=o.useRef(),ht={},vt="string"==typeof re;R?(ht.title=ke||!vt||M?null:re,ht["aria-describedby"]=ke?je:null):(ht["aria-label"]=vt?re:null,ht["aria-labelledby"]=ke&&!vt?je:null);var gt=(0,d.Z)({},ht,le,E.props,{className:(0,m.Z)(le.className,E.props.className),onTouchStart:Xe,ref:ft},q?{onMouseMove:function(e){var t=E.props;t.onMouseMove&&t.onMouseMove(e),dt.current={x:e.clientX,y:e.clientY},mt.current&&mt.current.update()}}:{});var yt={};W||(gt.onTouchStart=function(e){Xe(e),clearTimeout(Ze.current),clearTimeout(we.current),Me(),Le.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Oe.current=setTimeout((function(){document.body.style.WebkitUserSelect=Le.current,De(e)}),_)},gt.onTouchEnd=function(e){E.props.onTouchEnd&&E.props.onTouchEnd(e),Me(),clearTimeout(Ze.current),Ze.current=setTimeout((function(){Ae(e)}),J)}),M||(gt.onMouseOver=ut(Ye,gt.onMouseOver),gt.onMouseLeave=ut(Je,gt.onMouseLeave),xe||(yt.onMouseOver=Ye,yt.onMouseLeave=Je)),j||(gt.onFocus=ut(Ve,gt.onFocus),gt.onBlur=ut(Ue,gt.onBlur),xe||(yt.onFocus=Ve,yt.onBlur=Ue));var bt=o.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(ge),options:{element:ge,padding:4}}];return null!=(e=oe.popperOptions)&&e.modifiers&&(t=t.concat(oe.popperOptions.modifiers)),(0,d.Z)({},oe.popperOptions,{modifiers:t})}),[ge,oe]),xt=(0,d.Z)({},p,{isRtl:pe,arrow:g,disableInteractive:xe,placement:ee,PopperComponentProp:te,touch:be.current}),wt=function(e){var t=e.classes,n=e.disableInteractive,o=e.arrow,r=e.touch,i=e.placement,a={popper:["popper",!n&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,x.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,h.Z)(a,ot,t)}(xt),Et=null!=(n=O.Popper)?n:at,Zt=null!=(r=null!=(i=O.Transition)?i:ae)?r:w.Z,Ot=null!=(a=O.Tooltip)?a:st,Tt=null!=(s=O.Arrow)?s:lt,Ct=(0,v.Z)(Et,(0,d.Z)({},oe,C.popper),xt),Pt=(0,v.Z)(Zt,(0,d.Z)({},se,C.transition),xt),Rt=(0,v.Z)(Ot,(0,d.Z)({},C.tooltip),xt),kt=(0,v.Z)(Tt,(0,d.Z)({},C.arrow),xt);return(0,_e.jsxs)(o.Fragment,{children:[o.cloneElement(E,gt),(0,_e.jsx)(Et,(0,d.Z)({as:null!=te?te:Ge,placement:ee,anchorEl:q?{getBoundingClientRect:function(){return{top:dt.current.y,left:dt.current.x,right:dt.current.x,bottom:dt.current.y,width:0,height:0}}}:de,popperRef:mt,open:!!de&&ke,id:je,transition:!0},yt,Ct,{className:(0,m.Z)(wt.popper,null==oe?void 0:oe.className,null==(l=C.popper)?void 0:l.className),popperOptions:bt,children:function(e){var t,n,o=e.TransitionProps;return(0,_e.jsx)(Zt,(0,d.Z)({timeout:ce.transitions.duration.shorter},o,Pt,{children:(0,_e.jsxs)(Ot,(0,d.Z)({},Rt,{className:(0,m.Z)(wt.tooltip,null==(t=C.tooltip)?void 0:t.className),children:[re,g?(0,_e.jsx)(Tt,(0,d.Z)({},kt,{className:(0,m.Z)(wt.arrow,null==(n=C.arrow)?void 0:n.className),ref:ye})):null]}))}))}}))]})})),dt=ft,mt=n(1423),ht=n(615),vt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],gt={entering:{transform:"none"},entered:{transform:"none"}},yt=o.forwardRef((function(e,t){var n=(0,y.Z)(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},i=e.addEndListener,a=e.appear,s=void 0===a||a,l=e.children,p=e.easing,u=e.in,f=e.onEnter,m=e.onEntered,h=e.onEntering,v=e.onExit,g=e.onExited,b=e.onExiting,x=e.style,w=e.timeout,E=void 0===w?r:w,Z=e.TransitionComponent,O=void 0===Z?mt.ZP:Z,T=(0,c.Z)(e,vt),C=o.useRef(null),P=(0,$e.Z)(l.ref,t),R=(0,$e.Z)(C,P),k=function(e){return function(t){if(e){var n=C.current;void 0===t?e(n):e(n,t)}}},j=k(h),L=k((function(e,t){(0,ht.n)(e);var o=(0,ht.C)({style:x,timeout:E,easing:p},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",o),e.style.transition=n.transitions.create("transform",o),f&&f(e,t)})),M=k(m),S=k(b),A=k((function(e){var t=(0,ht.C)({style:x,timeout:E,easing:p},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),v&&v(e)})),D=k(g);return(0,_e.jsx)(O,(0,d.Z)({appear:s,in:u,nodeRef:C,onEnter:L,onEntered:M,onEntering:j,onExit:A,onExited:D,onExiting:S,addEndListener:function(e){i&&i(C.current,e)},timeout:E},T,{children:function(e,t){return o.cloneElement(l,(0,d.Z)({style:(0,d.Z)({transform:"scale(0)",visibility:"exited"!==e||u?void 0:"hidden"},gt[e],x,l.props.style),ref:R},t))}}))})),bt=["className","useClick","handleTooltipClose","open"],xt=(0,p.ZP)((function(e){var t=e.className,n=e.useClick,r=e.handleTooltipClose,i=e.open,a=(0,c.Z)(e,bt);return n?o.createElement(dt,Object.assign({PopperProps:{disablePortal:!0},onClose:r,open:i,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,TransitionComponent:yt},a,{classes:{popper:t}})):o.createElement(dt,Object.assign({TransitionComponent:yt},a,{classes:{popper:t}}))}))((function(){var e;return(e={})["& ."+rt.arrow]={},e["& ."+rt.tooltip]={fontSize:14},e})),wt=n(1013),Et=i.default.div.withConfig({displayName:"ContactStyled__Wrapper",componentId:"sc-occk19-0"})(["margin-top:15px;width:100%;display:table;"]),Zt=i.default.div.withConfig({displayName:"ContactStyled__Row",componentId:"sc-occk19-1"})(["display:table-row;height:40px;"]),Ot=i.default.div.withConfig({displayName:"ContactStyled__Cell",componentId:"sc-occk19-2"})(["display:table-cell;font-size:16px;vertical-align:middle;@media (max-width:425px){font-size:14px;}"]),Tt=i.default.span.withConfig({displayName:"ContactStyled__LinkMail",componentId:"sc-occk19-3"})(["color:blue;text-decoration:underline;text-decoration-color:blue;cursor:pointer;"]),Ct=i.default.a.withConfig({displayName:"ContactStyled__LinkCall",componentId:"sc-occk19-4"})(["color:blue;text-decoration:underline;text-decoration-color:blue;cursor:pointer;"]),Pt=i.default.div.withConfig({displayName:"ContactStyled__CellWrapper",componentId:"sc-occk19-5"})(["display:flex;height:40px;align-items:center;",""],(function(e){return e.isTitle&&(0,i.css)(["color:#364A9C;min-width:100px;"])})),Rt=function(e){var t=o.useState({address:!1,call:!1,fax:!1,mail:!1}),n=t[0],r=t[1],i=function(){return function(){r({address:!1,call:!1,fax:!1,mail:!1})}},a=function(t){return function(){navigator.clipboard.writeText(e[t]),function(e){var t;r(Object.assign({},n,((t={})[e]=!0,t)))}(t),setTimeout(i(),700)}},s=e.address,c=e.call,p=e.fax,u=e.mail;return o.createElement(Et,null,o.createElement(Zt,null,o.createElement(Ot,null,o.createElement(Pt,{isTitle:!0},o.createElement(wt.Z,{name:"location",color:"#364A9C",size:"18",sx:{marginRight:"5px"}}),o.createElement("span",null,"주소"))),o.createElement(Ot,null,o.createElement(Pt,null,o.createElement("span",null,s),o.createElement(xt,{title:"copied to clipboard",useClick:!0,handleTooltipClose:i(),open:n.address},o.createElement(l.Z,{onClick:a("address")},o.createElement(wt.Z,{name:"copy",color:"#555",size:"18",sx:{marginLeft:"5px"}})))))),o.createElement(Zt,null,o.createElement(Ot,null,o.createElement(Pt,{isTitle:!0},o.createElement(wt.Z,{name:"call",color:"#364A9C",size:"18",sx:{marginRight:"5px"}}),o.createElement("span",null,"전화"))),o.createElement(Ot,null,o.createElement(Pt,null,o.createElement(Ct,{href:"tel:"+c},c),o.createElement(xt,{title:"copied to clipboard",useClick:!0,handleTooltipClose:i(),open:n.call},o.createElement(l.Z,{onClick:a("call")},o.createElement(wt.Z,{name:"copy",color:"#555",size:"18",sx:{marginLeft:"5px"}})))))),o.createElement(Zt,null,o.createElement(Ot,null,o.createElement(Pt,{isTitle:!0},o.createElement(wt.Z,{name:"fax",color:"#364A9C",size:"18",sx:{marginRight:"5px"}}),o.createElement("span",null,"팩스"))),o.createElement(Ot,null,o.createElement(Pt,null,o.createElement("span",null,p),o.createElement(xt,{title:"copied to clipboard",useClick:!0,handleTooltipClose:i(),open:n.fax},o.createElement(l.Z,{onClick:a("fax")},o.createElement(wt.Z,{name:"copy",color:"#555",size:"18",sx:{marginLeft:"5px"}})))))),o.createElement(Zt,null,o.createElement(Ot,null,o.createElement(Pt,{isTitle:!0},o.createElement(wt.Z,{name:"mail",color:"#364A9C",size:"18",sx:{marginRight:"5px"}}),o.createElement("span",null,"이메일"))),o.createElement(Ot,null,o.createElement(Pt,null,o.createElement(Tt,{onClick:function(){window.open("mailto:"+u)}},u),o.createElement(xt,{title:"copied to clipboard",useClick:!0,handleTooltipClose:i(),open:n.mail},o.createElement(l.Z,{onClick:a("mail")},o.createElement(wt.Z,{name:"copy",color:"#555",size:"18",sx:{marginLeft:"5px"}})))))))},kt=function(){return o.createElement(r.Z,{pageTitle:"contact"},o.createElement(s,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.0863993249936!2d127.06605173374209!3d36.912198581188335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b25e90a1eb9a3%3A0x676f7dc651fbe475!2zKOyjvCnsoJXsm5DsoITsnpA!5e0!3m2!1sko!2skr!4v1667121180162!5m2!1sko!2skr"}),o.createElement(Rt,{address:"충청남도 아산시 둔포면 아산밸리동로 295, 3동",call:"041-532-8752",fax:"041-532-8751",mail:"msshim-08@koreacarrier.co.kr"}))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-1202a083b30e69c6c932.js.map