(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(4),i=n(10),a=n(0),o=n(9),u=n(2),l=n(12),s=n(1),d=function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0) ")};function f(e){var t=e.id,n=e.buttonPrev,i=e.buttonNext,f=e.currentIndex,b=e.lastIndex,v=Object(a.useRef)(0),j=Object(a.useRef)(),p=Object(a.useState)(window.innerWidth),O=Object(c.a)(p,2),x=O[0],m=O[1],y=Object(a.useState)(0),h=Object(c.a)(y,2),g=h[0],w=h[1],E=Object(a.useState)(0),k=Object(c.a)(E,2),L=k[0],I=k[1],A=document.getElementById(t),S=Array.from(A.children).map((function(e){return e.src})),C=Object(u.d)(S.length,(function(e){return{x:e*x,sc:1,display:"block",config:u.b.gentle}})),M=Object(c.a)(C,2),N=M[0],q=M[1],z=Object(a.useCallback)((function(e){v.current=Object(o.a)(v.current-e,0,S.length-1),f&&(f.innerHTML=v.current+1),q((function(e){if(e<v.current-1||e>v.current+1)return{display:"none"};return{x:(e-v.current)*x,sc:1,display:"block",zIndex:1}}))}),[q,x,f]),H=Object(a.useCallback)((function(e,t,n,r,c){e&&r>x/2&&c(v.current=Object(o.a)(v.current+(n>0?-1:1),0,S.length-1)),f&&(f.innerHTML=v.current+1),q((function(n){return n<v.current-1||n>v.current+1?{display:"none"}:{x:(n-v.current)*x+(e?t:0),sc:e&&v.current===n?1.2:1,display:"block",zIndex:e&&v.current===n?100:1}}))}),[S,q,x,f]),T=Object(l.a)({onDrag:function(e){var t=e.down,n=Object(c.a)(e.direction,1)[0],r=e.distance,i=e.cancel;return H(t,Math.sign(n)*r,n,r,i)}}),R=Object(u.c)((function(){return{xy:[0,0]}})),B=Object(c.a)(R,2),J=B[0],P=B[1];return Object(a.useEffect)((function(){var e=function(){return z(1)};if(n)return n.addEventListener("click",e),function(){return n.removeEventListener("click",e)}}),[n,z]),Object(a.useEffect)((function(){var e=function(){return z(-1)};if(i)return i.addEventListener("click",e),function(){return i.removeEventListener("click",e)}}),[i,z]),Object(a.useLayoutEffect)((function(){A.style.display="none";var e=j.current.getBoundingClientRect(),t=e.x,n=e.y,r=e.width;m(r),w(t),I(n)}),[m,A,w,I]),Object(a.useLayoutEffect)((function(){b&&(b.innerHTML=S.length||"")}),[b,S]),Object(a.useLayoutEffect)((function(){f&&(f.innerHTML=S.length>0?1:0)}),[f,S]),Object(s.jsxs)("div",{ref:j,className:"slide-wrapper-relative",style:{position:"relative",overflow:"hidden",cursor:"none"},onMouseMove:function(e){return P({xy:[e.clientX-g,e.clientY-L]})},children:[Object(s.jsx)(u.a.div,{style:{pointerEvents:"none",zIndex:999,position:"absolute",willChange:"transform",transform:J.xy.interpolate(d)},children:Object(s.jsx)("div",{className:"slider-cursor"})}),N.map((function(e,t){var n=e.x,c=e.display,i=e.sc,o=e.zIndex;return Object(a.createElement)(u.a.div,Object(r.a)(Object(r.a)({className:"slide-wrapper-absolute"},T()),{},{key:t,style:{position:"absolute",willChange:"transform",zIndex:o,display:c,overflow:"hidden",transform:n.interpolate((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),Object(s.jsx)(u.a.div,{style:{width:"100%",height:"100%",willChange:"transform",overflow:"hidden",transform:i.interpolate((function(e){return"scale(".concat(e,")")}))},children:Object(s.jsx)(u.a.img,{className:"slide-image",src:S[t],style:{pointerEvents:"none",willChange:"transform",overflow:"hidden",transform:n.interpolate((function(e){return"translate3d(".concat(e/4,"px,0,0)")}))}})}))}))]})}var b=document.querySelectorAll("[data-slider-images]");Array.from(b).forEach((function(e){var t,n,r,c,a=e.getAttribute("data-slider-images"),o=null===(t=document.querySelectorAll('[data-slider-button-prev="'.concat(a,'"]')))||void 0===t?void 0:t[0],u=null===(n=document.querySelectorAll('[data-slider-button-next="'.concat(a,'"]')))||void 0===n?void 0:n[0],l=null===(r=document.querySelectorAll('[data-slider-current-index="'.concat(a,'"]')))||void 0===r?void 0:r[0],d=null===(c=document.querySelectorAll('[data-slider-last-index="'.concat(a,'"]')))||void 0===c?void 0:c[0];Object(i.render)(Object(s.jsx)(f,{id:a,buttonPrev:o,buttonNext:u,currentIndex:l,lastIndex:d}),e)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.420d84b1.chunk.js.map