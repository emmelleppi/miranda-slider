(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r=n(19),c=n(6),a=n(2),i=n(3),u=n(1),o=n(8),l=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},s=n(7);function d(e){var t=e.descEl,n=e.domEl,r=e.buttonPrev,d=e.buttonNext,f=e.currentIndex,b=e.lastIndex,v=e.visible,j=void 0===v?1:v,m=Object(u.useRef)(),g=Object(u.useState)(window.innerWidth),O=Object(i.a)(g,2),h=O[0],y=O[1],p=Object(u.useState)(1),x=Object(i.a)(p,2),S=x[0],E=x[1],w=Object(u.useState)({}),A=Object(i.a)(w,2),I=A[0],C=A[1],L=n,M=Object(u.useMemo)((function(){var e=Array.from(L.querySelectorAll("[data-slider-image]"));return{items:e.map((function(e){for(var t={},n=0;n<e.style.length;n++){var r=e.style[n];t[l(r)]=e.style[r]}var c=e.getAttribute("src");return c&&(t.backgroundImage="url(".concat(c,")")),t})),classes:e.map((function(e){return e.className})),desc:e.map((function(e){return e.getAttribute("alt")}))}}),[L]),k=M.items,N=M.classes,R=M.desc,q=Object(u.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.length;return(e<0?e+t:e)%t}),[k]),T=Object(u.useCallback)((function(e,t,n){return q(e-t+n)}),[q]),P=Object(o.useSprings)(k.length,(function(e){return{x:(e<k.length-1?e:-1)*h+0}})),H=Object(i.a)(P,2),z=H[0],D=H[1],B=Object(u.useRef)([0,1]),W=Object(u.useRef)(0),U=Object(u.useCallback)((function(e,t,n,r,c,a){n||(W.current+=(-a+(h+a))/h*(r>0?-1:1)),W.current+1>k.length?E(W.current%k.length+1):W.current<0?E(k.length+(W.current+1)%k.length):E(W.current+1);var i=W.current*h,u=q(Math.floor(i/h)%k.length),o=t<0?k.length-j-1:1;D((function(e){var r=T(e,u,o),c=T(e,B.current[0],B.current[1]),l=u-(i<0?k.length:0)+r-o+(i<0&&0===u?k.length:0);return{x:-i%(h*k.length)+h*l+(n?a:0)+0,immediate:t<0?c>r:c<r}})),B.current=[u,o]}),[q,T,h,j,D,k.length]);return Object(u.useEffect)((function(){I[S-1]||C((function(e){return Object(a.a)(Object(c.a)({},S-1,!0),e)})),f&&(f.innerHTML=S>9?S:"0".concat(S))}),[S]),Object(u.useEffect)((function(){t&&(t.innerHTML=R[S-1]||"")}),[I,C,S,t,R]),Object(u.useEffect)((function(){var e=function(){W.current+=-1,U(0,-1,!0,-0,(function(){}),-0)};if(r)return r.addEventListener("click",e),function(){return r.removeEventListener("click",e)}}),[r,U]),Object(u.useEffect)((function(){var e=function(){W.current+=1,U(0,1,!0,-0,(function(){}),-0)};if(d)return d.addEventListener("click",e),function(){return d.removeEventListener("click",e)}}),[d,U]),Object(u.useEffect)((function(){var e=m.current.getBoundingClientRect().width;y(e)}),[y]),Object(u.useEffect)((function(){b&&(b.innerHTML=k.length>9?k.length:"0".concat(k.length))}),[b,k]),Object(s.jsx)("div",{ref:m,className:L.className,style:{position:"relative",overflow:"hidden"},children:z.map((function(e,t){var n=e.x,r=e.display,c=e.zIndex;return Object(s.jsx)(o.animated.div,{className:L.className,style:{position:"absolute",willChange:"transform",zIndex:c,display:r,overflow:"hidden",transform:n.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))},children:Object(s.jsx)(o.animated.div,{style:{width:"100%",height:"100%",willChange:"transform",overflow:"hidden"},children:I[t]&&Object(s.jsx)(o.animated.div,{className:"".concat(N[t]),style:Object(a.a)(Object(a.a)({},k[t]),{},{pointerEvents:"none",willChange:"transform",overflow:"hidden",transform:n.to((function(e){return"translate3d(".concat(e/4,"px,0,0)")}))})})})},t)}))})}var f=n(32),b=n(31);function v(e){return 1===e?1:1-Math.pow(2,-10*e)}function j(e){var t=e.children,n=e.index,r=(e.realLength,e.descs),l=e.margin,d=e.onIndexChange,j=e.className,m=e.style,g=e.slideStyle,O=e.slideClassName,h=e.draggedScale,y=e.draggedSpring,p=e.releaseSpring,x=e.trailingSpring,S=e.trailingDelay,E=e.onDragStart,w=e.onDragEnd,A=e.onTap,I="function"===typeof g?g:function(){return g},C=Object(u.useRef)(null),L=Object(b.a)({ref:C}),M=L.width,k=L.height,N="x",R=M,q=t.length-1;q=q>0?q:t.length-1+q;var T=Object(u.useRef)(n),P=Object(u.useRef)(0),H=Object(u.useRef)(0),z=Object(u.useRef)(new Set),D=Object(u.useRef)(0),B=Object(u.useRef)(0),W=Object(u.useRef)(),U=function(e){e.forEach((function(e){var t=e.isIntersecting,n=e.target;return z.current[t?"add":"delete"](Number(n.getAttribute("data-index")))}));var t=Array.from(z.current).sort();if(D.current=t[0],B.current=t[t.length-1],W.current&&W.current.children){var n=Array.from(W.current.children);n.forEach((function(e){return e.style.display="flex"})),t.forEach((function(e){n[e]&&(n[e].style.display="none")}))}},_=Object(u.useRef)(null);Object(u.useEffect)((function(){return _.current||(_.current=new IntersectionObserver(U)),Array.from(C.current.children).forEach((function(e){return _.current.observe(e)})),function(){return _.current.disconnect()}}),[t.length,C]);var F=Object(o.useSprings)(t.length,(function(e){return{x:P.current,y:0,zIndex:0,immediate:function(e){return"zIndex"===e}}})),J=Object(i.a)(F,2),Y=J[0],X=J[1],G=Object(o.useSpring)((function(){return{scale:0,config:{duration:800}}})),K=Object(i.a)(G,2),Q=K[0].scale,V=K[1];Object(u.useEffect)((function(){if(M&&k){var e=C.current.children[n%(q+1)],t=e.offsetLeft,r=e.offsetWidth;if(P.current=Math.round((M-r)/2-t),T.current===n)X((function(e){var t;return t={},Object(c.a)(t,N,P.current),Object(c.a)(t,"config",Object(a.a)(Object(a.a)({},p),{},{velocity:H.current})),t}));else{var i=n<T.current?-1:1,u=i>0?D.current:B.current;X((function(e){var t;return t={},Object(c.a)(t,N,P.current),Object(c.a)(t,"config",p),Object(c.a)(t,"delay",e*i<u*i?0:Math.abs(u-e)*S),t}))}T.current=n}}),[n,X,C,N,k,M,p,y,S]);var Z=Object(f.a)((function(e){var t=e.first,r=e.last,a=e.tap,u=Object(i.a)(e.vxvy,1)[0],o=Object(i.a)(e.delta,1)[0],l=Object(i.a)(e.swipe,1)[0],s=Object(i.a)(e.movement,1)[0],f=Object(i.a)(e.args,1)[0],b=e.memo,v=void 0===b?Y[f].x.get():b;if(!a){var j=u,m=-Math.sign(o),g=s,O=l;if(t)X((function(e){var t;return t={},Object(c.a)(t,N,v+g),Object(c.a)(t,"config",(function(t){return t===N&&e===f?y:x})),Object(c.a)(t,"zIndex",e===f?10:0),t})),E&&E(f);else if(r){if(Math.abs(g)>R/2||0!==O){var h=T.current+(g>0?-1:1);T.current=h<0?q:Math.max(0,h%(q+1))}n!==T.current?(H.current=j,requestAnimationFrame((function(){return d(T.current)}))):X((function(){var e;return e={},Object(c.a)(e,N,P.current),Object(c.a)(e,"config",p),e})),w&&w(f)}else{var I=m>0?D.current:B.current;X((function(e){var t;return t={},Object(c.a)(t,N,g+v),Object(c.a)(t,"delay",e*m<I*m||e===f?0:Math.abs(I-e)*S),Object(c.a)(t,"config",(function(t){return t===N&&e===f?y:x})),t}))}return v}A&&A(f)}),{axis:N,filterTaps:!0}),$={display:"flex",flexWrap:"nowrap",alignItems:"stretch",position:"relative",WebkitUserSelect:"none",userSelect:"none",WebkitTouchCallout:"none",flexDirection:"row",touchAction:"pan-y"};return j||($.width="100%"),Object(s.jsx)("div",{ref:C,className:j,style:Object(a.a)(Object(a.a)({},$),m),children:Y.map((function(e,n){var i,d=e.x,f=e.zIndex;return Object(u.createElement)(o.animated.div,Object(a.a)(Object(a.a)({},Z(n)),{},{key:n,"data-index":n,className:O,style:Object(a.a)(Object(a.a)({alignItems:"center",display:"flex",flexFlow:"column nowrap"},I(n)),{},(i={zIndex:f},Object(c.a)(i,N,d),Object(c.a)(i,"willChange","transform"),Object(c.a)(i,"margin","0 ".concat(l,"vw")),i))}),Object(s.jsx)(o.animated.div,{onPointerDown:function(){return V({scale:1})},onPointerUp:function(){return V({scale:0})},style:{transform:Q.to((function(e){return"scaleY(".concat(1-h*v(e),")")})),overflow:"hidden",transformStyle:"preserve-3d",willChange:"transform"},children:Object(s.jsx)(o.animated.div,{ref:W,style:{transform:Q.to((function(e){return"scale(".concat(1+h*v(e),", ").concat(1+2*h*v(e),")")})),willChange:"transform",display:"flex",justifyContent:"center",alignItems:"center",transformStyle:"preserve-3d"},children:t[n]})}),r[n]&&Object(s.jsx)("div",{className:"multi-slider-alt",children:r[n]}))}))})}j.defaultProps={draggedScale:1,draggedSpring:{tension:1200,friction:40},trailingSpring:{tension:120,friction:30},releaseSpring:{tension:120,friction:30},trailingDelay:50};var m=function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0) ")},g=Object(a.a)(Object(a.a)({normal:o.config.default},o.config),{},{default:void 0});function O(e){var t=e.margin,n=e.showAlts,r=e.cursor,c=e.domEl,a=e.buttonPrev,d=e.buttonNext,f=e.currentIndex,b=e.lastIndex,v=c,O=Object(u.useMemo)((function(){var e=Array.from(v.querySelectorAll("[data-slider-image]"));return[new Array(1).fill(e).flatMap((function(e){return e})),e.length]}),[v]),h=Object(i.a)(O,2),y=h[0],p=h[1],x=Object(u.useState)(0),S=Object(i.a)(x,2),E=S[0],w=S[1],A=Object(u.useState)({}),I=Object(i.a)(A,2),C=I[0],L=I[1],M=Object(u.useCallback)((function(e){e!==E&&w(e)}),[E,w]),k=Object(u.useMemo)((function(){return y.map((function(e){for(var t={},n=0;n<e.style.length;n++){var r=e.style[n];t[l(r)]=e.style[r]}return t}))}),[y]),N=Object(u.useMemo)((function(){return n?y.map((function(e){var t=e.getElementsByTagName("img");return t&&t[0]?t[0].getAttribute("alt"):null})):[]}),[n,y]);Object(u.useEffect)((function(){if(f){var e=(E+1)%p===0?p:(E+1)%p;f.innerHTML=e>9?"".concat(e):"0".concat(e)}}),[C,L,E,f,p]),Object(u.useEffect)((function(){var e=function(){return w((function(e){var t=e-1;return t<0?y.length-1:t}))};if(a)return a.addEventListener("click",e),function(){return a.removeEventListener("click",e)}}),[a,w]),Object(u.useEffect)((function(){var e=function(){return w((function(e){return e+1}))};if(d)return d.addEventListener("click",e),function(){return d.removeEventListener("click",e)}}),[d,w]),Object(u.useEffect)((function(){b&&(b.innerHTML=p>9?"".concat(p):"0".concat(p))}),[b,p]);var R=Object(u.useRef)(),q=Object(u.useState)(0),T=Object(i.a)(q,2),P=T[0],H=T[1],z=Object(u.useState)(0),D=Object(i.a)(z,2),B=D[0],W=D[1],U=Object(o.useSpring)((function(){return{xy:[0,0]}})),_=Object(i.a)(U,2),F=_[0],J=_[1],Y=Object(u.useCallback)((function(){var e=R.current.getBoundingClientRect(),t=e.x,n=e.y;P!==t&&H(t),B!==n&&W(n)}),[P,B,H,W,R.current]),X=Object(u.useState)((null===r||void 0===r?void 0:r.outerHTML)||null),G=Object(i.a)(X,1)[0];Object(u.useEffect)((function(){r&&(r.style.display="none")}),[r]),Object(u.useEffect)((function(){setInterval(Y,100)}),[Y]);var K=Object(u.useRef)(),Q=Object(u.useCallback)((function(e){if(K.current){var t=K.current.getElementsByClassName("cursor")[0];e?t.classList.add("cursor-show"):(t.classList.remove("cursor-show"),t.classList.remove("cursor-active"))}}),[K]),V=Object(u.useCallback)((function(e){if(K.current){var t=K.current.getElementsByClassName("cursor")[0];e?t.classList.add("cursor-active"):t.classList.remove("cursor-active")}}),[K]);return Object(s.jsxs)("div",{style:{position:"relative",overflow:"hidden"},ref:R,onPointerEnter:function(){return Q(!0)},onPointerLeave:function(){return Q(!1)},onPointerDown:function(){return V(!0)},onPointerUp:function(){return V(!1)},onMouseMove:function(e){return J({xy:[e.clientX-P,e.clientY-B]})},children:[G&&Object(s.jsx)(o.animated.div,{ref:K,dangerouslySetInnerHTML:{__html:G},style:{pointerEvents:"none",zIndex:999,position:"absolute",willChange:"transform",transform:F.xy.to(m)}}),Object(s.jsx)(j,{index:E,descs:N,margin:t,realLength:p,className:v.className,style:{width:"10vw",margin:"auto"},slideStyle:function(e){return k[e]},loaded:C,onIndexChange:w,trailingDelay:30,draggedScale:.1,draggedSpring:g.stiff,trailingSpring:g.stiff,releaseSpring:g.default,children:y.map((function(e,t){return Object(s.jsx)("div",{style:{pointerEvents:"none"},onClick:function(){return M(t)},dangerouslySetInnerHTML:{__html:e.outerHTML}},t)}))})]})}var h=document.querySelectorAll("[data-slider-id]");Array.from(h).forEach((function(e){var t,n,c,a,i;e.style.display="none";var u=e.getAttribute("data-slider-id"),o=document.createElement("div");e.after(o);var l=null===(t=document.querySelectorAll('[data-slider-desc="'.concat(u,'"]')))||void 0===t?void 0:t[0],f=null===(n=document.querySelectorAll('[data-slider-button-prev="'.concat(u,'"]')))||void 0===n?void 0:n[0],b=null===(c=document.querySelectorAll('[data-slider-button-next="'.concat(u,'"]')))||void 0===c?void 0:c[0],v=null===(a=document.querySelectorAll('[data-slider-current-index="'.concat(u,'"]')))||void 0===a?void 0:a[0],j=null===(i=document.querySelectorAll('[data-slider-last-index="'.concat(u,'"]')))||void 0===i?void 0:i[0];Object(r.render)(Object(s.jsx)(d,{domEl:e,descEl:l,buttonPrev:f,buttonNext:b,currentIndex:v,lastIndex:j}),o)}));var y=document.querySelectorAll("[data-multi-slider-id]");Array.from(y).forEach((function(e){var t,n,c,a;e.style.display="none";var i=e.getAttribute("data-multi-slider-id"),u=e.hasAttribute("data-multi-slider-show-alt"),o=e.getAttribute("data-multi-slider-margin"),l=document.createElement("div"),d=document.getElementsByClassName("cursor")[0];e.after(l);var f=null===(t=document.querySelectorAll('[data-slider-button-prev="'.concat(i,'"]')))||void 0===t?void 0:t[0],b=null===(n=document.querySelectorAll('[data-slider-button-next="'.concat(i,'"]')))||void 0===n?void 0:n[0],v=null===(c=document.querySelectorAll('[data-slider-current-index="'.concat(i,'"]')))||void 0===c?void 0:c[0],j=null===(a=document.querySelectorAll('[data-slider-last-index="'.concat(i,'"]')))||void 0===a?void 0:a[0];Object(r.render)(Object(s.jsx)(O,{margin:o?parseInt(o,10):0,showAlts:u,cursor:d,domEl:e,buttonPrev:f,buttonNext:b,currentIndex:v,lastIndex:j}),l)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.c5980aa4.chunk.js.map