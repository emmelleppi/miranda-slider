(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r=n(19),c=n(6),a=n(2),i=n(3),o=n(1),u=n(8),l=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},s=n(7);function d(e){var t=e.id,n=e.descEl,r=e.domEl,d=e.buttonPrev,f=e.buttonNext,b=e.currentIndex,m=e.lastIndex,v=e.visible,j=void 0===v?1:v,g=Object(o.useRef)(),O=Object(o.useState)(window.innerWidth),h=Object(i.a)(O,2),p=h[0],y=h[1],x=Object(o.useState)(1),E=Object(i.a)(x,2),S=E[0],w=E[1],A=Object(o.useState)({}),I=Object(i.a)(A,2),C=I[0],L=I[1],k=r,M=Object(o.useState)((function(){var e=Array.from(k.querySelectorAll("[data-slider-image]")),t=Array.from(k.getElementsByTagName("a")).map((function(e){return e.attributes})),n=e.map((function(e){for(var t={},n=0;n<e.style.length;n++){var r=e.style[n];t[l(r)]=e.style[r]}var c=e.getAttribute("src");return c&&(t.backgroundImage="url(".concat(c,")")),t})),r=e.map((function(e){return e.className})),c=e.map((function(e){return e.getAttribute("alt")})),a=Array.from(k.querySelectorAll("[data-slider-image-content]"));return k.style.display="none",k.innerHTML="",{items:n,classes:r,desc:c,content:a,links:t}})),N=Object(i.a)(M,1)[0],R=N.items,T=N.classes,D=N.desc,q=N.content,P=N.links,H=Object(o.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.length;return(e<0?e+t:e)%t}),[R]),B=Object(o.useCallback)((function(e,t,n){return H(e-t+n)}),[H]),z=Object(u.useSprings)(R.length,(function(e){return{x:(e<R.length-1?e:-1)*p+0}})),W=Object(i.a)(z,2),U=W[0],_=W[1],F=Object(o.useRef)([0,1]),J=Object(o.useRef)(0),X=Object(o.useCallback)((function(e,t,n,r,c,a){n||(J.current+=(-a+(p+a))/p*(r>0?-1:1)),J.current+1>R.length?w(J.current%R.length+1):J.current<0?w(R.length+(J.current+1)%R.length):w(J.current+1);var i=J.current*p,o=H(Math.floor(i/p)%R.length),u=t<0?R.length-j-1:1;_((function(e){var r=B(e,o,u),c=B(e,F.current[0],F.current[1]),l=o-(i<0?R.length:0)+r-u+(i<0&&0===o?R.length:0);return{x:-i%(p*R.length)+p*l+(n?a:0)+0,immediate:t<0?c>r:c<r}})),F.current=[o,u]}),[H,B,p,j,_,R.length]);return Object(o.useEffect)((function(){var e=document.getElementById("slider-link-".concat(t)),r=g.current;if(!e&&P&&P.length>0&&r){for(var c=r.parentNode;n&&!c.contains(n);)r=c,c=c.parentNode;r=c,c=c.parentNode;var a=document.createElement("a");a.id="slider-link-".concat(t),c.replaceChild(a,r),a.appendChild(r)}}),[t,P,n]),Object(o.useEffect)((function(){var e=document.getElementById("slider-link-".concat(t)),n=P[S-1];e&&n&&Array.from(n).forEach((function(t){var n=t.name,r=t.value;return"class"!==n&&e.setAttribute(n,r)}))}),[S,t,P]),Object(o.useEffect)((function(){C[S-1]||L((function(e){return Object(a.a)(Object(c.a)({},S-1,!0),e)})),b&&(b.innerHTML=S>9?S:"0".concat(S))}),[S,b,C]),Object(o.useEffect)((function(){n&&(D[S-1]&&(n.innerHTML=D[S-1]||""),q[S-1]&&(n.innerHTML="",n.append(q[S-1])))}),[C,q,L,S,n,D]),Object(o.useEffect)((function(){var e=function(e){e.stopPropagation(),e.preventDefault(),J.current+=-1,X(0,-1,!0,-0,(function(){}),-0)};if(d)return d.addEventListener("click",e),function(){return d.removeEventListener("click",e)}}),[d,X]),Object(o.useEffect)((function(){var e=function(e){e.stopPropagation(),e.preventDefault(),J.current+=1,X(0,1,!0,-0,(function(){}),-0)};if(f)return f.addEventListener("click",e),function(){return f.removeEventListener("click",e)}}),[f,X]),Object(o.useEffect)((function(){var e=g.current.getBoundingClientRect().width;y(e)}),[y]),Object(o.useEffect)((function(){m&&(m.innerHTML=R.length>9?R.length:"0".concat(R.length))}),[m,R]),Object(s.jsx)("div",{ref:g,className:k.className,style:{position:"relative",overflow:"hidden"},children:U.map((function(e,t){var n=e.x,r=e.display,c=e.zIndex;return Object(s.jsx)(u.animated.div,{className:k.className,style:{position:"absolute",willChange:"transform",zIndex:c,display:r,overflow:"hidden",transform:n.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))},children:Object(s.jsx)(u.animated.div,{style:{width:"100%",height:"100%",willChange:"transform",overflow:"hidden"},children:C[t]&&Object(s.jsx)(u.animated.div,{className:"".concat(T[t]),style:Object(a.a)(Object(a.a)({},R[t]),{},{pointerEvents:"none",willChange:"transform",overflow:"hidden",transform:n.to((function(e){return"translate3d(".concat(e/4,"px,0,0)")}))})})})},t)}))})}var f=n(32),b=n(31);function m(e){return 1===e?1:1-Math.pow(2,-10*e)}function v(e){return 0===e?0:Math.pow(2,10*e-10)}function j(e){var t=e.children,n=e.index,r=e.noDrag,l=e.descs,d=e.margin,j=e.onIndexChange,g=e.domItemsLength,O=e.className,h=e.style,p=e.slideStyle,y=e.slideClassName,x=e.draggedScale,E=e.draggedSpring,S=e.releaseSpring,w=e.trailingSpring,A=e.trailingDelay,I=e.onDragStart,C=e.onDragEnd,L=e.onTap,k="function"===typeof p?p:function(){return p},M=Object(o.useRef)(null),N=Object(b.a)({ref:M}),R=N.width,T=N.height,D="x",q=R,P=[0,g-1][1];P=P>0?P:t.length-1+P;var H=Object(o.useRef)(n),B=Object(o.useRef)(0),z=Object(o.useRef)(0),W=Object(o.useRef)(new Set),U=Object(o.useRef)(0),_=Object(o.useRef)(0),F=Object(o.useRef)(),J=function(e){e.forEach((function(e){var t=e.isIntersecting,n=e.target;return W.current[t?"add":"delete"](Number(n.getAttribute("data-index")))}));var t=Array.from(W.current).sort();if(U.current=t[0],_.current=t[t.length-1],F.current&&F.current.children){var n=Array.from(F.current.children);n.forEach((function(e){return e.style.display="flex"})),t.forEach((function(e){n[e]&&(n[e].style.display="none")}))}},X=Object(o.useRef)(null);Object(o.useEffect)((function(){return X.current||(X.current=new IntersectionObserver(J)),Array.from(M.current.children).forEach((function(e){return X.current.observe(e)})),function(){return X.current.disconnect()}}),[t.length,M]);var Y=Object(u.useSprings)(t.length,(function(e){return{x:B.current,y:0,zIndex:0,immediate:function(e){return"zIndex"===e}}})),G=Object(i.a)(Y,2),K=G[0],Q=G[1];Object(o.useEffect)((function(){if(R&&T){var e=M.current.children[n%(P+1)].offsetLeft;if(B.current=Math.round(-e),H.current===n)Q((function(e){var t;return t={},Object(c.a)(t,D,B.current),Object(c.a)(t,"config",Object(a.a)(Object(a.a)({},S),{},{velocity:z.current})),t}));else{var t=n<H.current?-1:1,r=t>0?U.current:_.current;Q((function(e){var n;return n={},Object(c.a)(n,D,B.current),Object(c.a)(n,"config",S),Object(c.a)(n,"delay",e*t<r*t?0:Math.abs(r-e)*A),n}))}H.current=n}}),[P,n,Q,M,D,T,R,S,E,A]);var V=Object(f.a)((function(e){var t=e.first,r=e.last,a=e.tap,o=Object(i.a)(e.vxvy,1)[0],u=Object(i.a)(e.delta,1)[0],l=Object(i.a)(e.swipe,1)[0],s=Object(i.a)(e.movement,1)[0],d=Object(i.a)(e.args,1)[0],f=e.memo,b=void 0===f?K[d].x.get():f;if(!a){var m=o,v=-Math.sign(u),g=s,O=l;if(t)Q((function(e){var t;return t={},Object(c.a)(t,D,b+g),Object(c.a)(t,"config",(function(t){return t===D&&e===d?E:w})),Object(c.a)(t,"zIndex",e===d?10:0),t})),I&&I(d);else if(r){if(Math.abs(g)>q/2||0!==O){var h=H.current+(g>0?-1:1);H.current=h<0?P:Math.max(0,h%(P+1))}n!==H.current?(z.current=m,requestAnimationFrame((function(){return j(H.current)}))):Q((function(){var e;return e={},Object(c.a)(e,D,B.current),Object(c.a)(e,"config",S),e})),C&&C(d)}else{var p=v>0?U.current:_.current;Q((function(e){var t;return t={},Object(c.a)(t,D,g+b),Object(c.a)(t,"delay",e*v<p*v||e===d?0:Math.abs(p-e)*A),Object(c.a)(t,"config",(function(t){return t===D&&e===d?E:w})),t}))}return b}L&&L(d)}),{axis:D,filterTaps:!0}),Z={display:"flex",flexWrap:"nowrap",alignItems:"stretch",position:"relative",WebkitUserSelect:"none",userSelect:"none",WebkitTouchCallout:"none",flexDirection:"row",touchAction:"pan-y"},$=Object(u.useSpring)((function(){return{from:{scale:0},config:{duration:1e3}}})),ee=Object(i.a)($,2),te=ee[0].scale,ne=ee[1],re=Object(o.useRef)(m),ce=Object(o.useCallback)((function(){r||(re.current=m,ne({from:{scale:0},to:{scale:1}}))}),[re,ne,r]),ae=Object(o.useCallback)((function(){r||(re.current=v,ne({from:{scale:1},to:{scale:0}}))}),[re,ne,r]);return Object(s.jsx)("div",{ref:M,className:O,style:Object(a.a)(Object(a.a)({},Z),h),children:K.map((function(e,n){var i,f=e.x,b=e.zIndex;return Object(o.createElement)(u.animated.div,Object(a.a)(Object(a.a)({},!r&&V(n)),{},{key:n,"data-index":n,className:y,style:Object(a.a)(Object(a.a)({display:"flex",flexFlow:"column nowrap",alignItems:"flex-start"},k(n)),{},(i={zIndex:b},Object(c.a)(i,D,f),Object(c.a)(i,"willChange","transform"),Object(c.a)(i,"margin","0 ".concat(d,"vw")),i))}),Object(s.jsx)(u.animated.div,{onPointerDown:ce,onPointerUp:ae,style:{transform:te.to((function(e){return"scaleY(".concat(1-x*re.current(e),")")})),overflow:"hidden",transformStyle:"preserve-3d",willChange:"transform"},children:Object(s.jsx)(u.animated.div,{ref:F,style:{transform:te.to((function(e){return"scale(".concat(1+x*re.current(e),", ").concat(1+2*x*re.current(e),")")})),willChange:"transform",display:"flex",justifyContent:"center",alignItems:"center",transformStyle:"preserve-3d"},children:t[n]})}),l[n]&&Object(s.jsx)("div",{className:"multi-slider-alt",children:l[n]}))}))})}j.defaultProps={draggedScale:1,draggedSpring:{tension:1200,friction:40},trailingSpring:{tension:120,friction:30},releaseSpring:{tension:120,friction:30},trailingDelay:50};var g=function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0) ")},O=Object(a.a)(Object(a.a)({normal:u.config.default},u.config),{},{default:void 0});function h(e){var t=e.margin,n=e.marginMobile,r=e.noDrag,c=e.showAlts,a=e.cursor,d=e.domEl,f=e.buttonPrev,b=e.buttonNext,m=e.currentIndex,v=e.lastIndex,h=d,p=Object(o.useState)((function(){var e=Array.from(h.querySelectorAll("[data-slider-image]")),t=e.length;return e[0]&&e.push(e[0]),e[1]&&e.push(e[1]),e[2]&&e.push(e[2]),e[3]&&e.push(e[3]),[e,e.length,t]})),y=Object(i.a)(p,1),x=Object(i.a)(y[0],3),E=x[0],S=x[1],w=x[2],A=Object(o.useState)(0),I=Object(i.a)(A,2),C=I[0],L=I[1],k=Object(o.useState)(),M=Object(i.a)(k,2),N=M[0],R=M[1],T=Object(o.useState)({}),D=Object(i.a)(T,2),q=D[0],P=D[1],H=Object(o.useCallback)((function(e){e!==C&&L(e)}),[C,L]),B=window.innerWidth<=991,z=Object(o.useMemo)((function(){return B?n:t}),[t,n,B]),W=Object(o.useMemo)((function(){return E.map((function(e){for(var t={},n=0;n<e.style.length;n++){var r=e.style[n];t[l(r)]=e.style[r]}return t}))}),[E]),U=Object(o.useMemo)((function(){return c?E.map((function(e){var t=e.getElementsByTagName("img");return t&&t[0]?t[0].getAttribute("alt"):null})):[]}),[c,E]);Object(o.useEffect)((function(){R({width:"10vw",margin:"0 0 0 ".concat(window.innerWidth*(B?n:t)/100,"px")}),h.style.display="none",h.innerHTML=""}),[E,B,r,R,h,n,t]),Object(o.useEffect)((function(){if(m){var e=(C+1)%w===0?w:(C+1)%w;m.innerHTML=e>9?"".concat(e):"0".concat(e)}}),[q,P,C,m,w]),Object(o.useEffect)((function(){var e=function(e){e.stopPropagation(),e.preventDefault(),L((function(e){var t=e-1;return t<0?w-1:t}))};if(f)return f.addEventListener("click",e),function(){return f.removeEventListener("click",e)}}),[f,L,w]),Object(o.useEffect)((function(){var e=function(e){e.stopPropagation(),e.preventDefault(),L((function(e){return e+1}))};if(b)return b.addEventListener("click",e),function(){return b.removeEventListener("click",e)}}),[b,L]),Object(o.useEffect)((function(){v&&(v.innerHTML=w>9?"".concat(w):"0".concat(w))}),[v,w]);var _=Object(o.useRef)(),F=Object(o.useState)(0),J=Object(i.a)(F,2),X=J[0],Y=J[1],G=Object(o.useState)(0),K=Object(i.a)(G,2),Q=K[0],V=K[1],Z=Object(u.useSpring)((function(){return{xy:[0,0]}})),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(o.useCallback)((function(){var e=_.current.getBoundingClientRect(),t=e.x,n=e.y;X!==t&&Y(t),Q!==n&&V(n)}),[X,Q,Y,V]),re=Object(o.useState)((null===a||void 0===a?void 0:a.outerHTML)||null),ce=Object(i.a)(re,1)[0];Object(o.useEffect)((function(){a&&(a.style.display="none")}),[a]),Object(o.useEffect)((function(){setInterval(ne,100)}),[ne]);var ae=Object(o.useRef)(),ie=Object(o.useCallback)((function(e){if(ae.current){var t=ae.current.getElementsByClassName("cursor")[0];e?t.classList.add("cursor-show"):(t.classList.remove("cursor-show"),t.classList.remove("cursor-active"))}}),[ae]),oe=Object(o.useCallback)((function(e){if(ae.current){var t=ae.current.getElementsByClassName("cursor")[0];e?t.classList.add("cursor-active"):t.classList.remove("cursor-active")}}),[ae]);return Object(s.jsxs)("div",{style:{position:"relative",overflowX:"hidden"},ref:_,onPointerEnter:function(){return!r&&ie(!0)},onPointerLeave:function(){return!r&&ie(!1)},onPointerDown:function(){return!r&&oe(!0)},onPointerUp:function(){return!r&&oe(!1)},onMouseMove:function(e){return!r&&te({xy:[e.clientX-X,e.clientY-Q]})},children:[ce&&!r&&Object(s.jsx)(u.animated.div,{ref:ae,dangerouslySetInnerHTML:{__html:ce},style:{pointerEvents:"none",zIndex:999,position:"absolute",willChange:"transform",transform:ee.xy.to(g)}}),N&&Object(s.jsx)(j,{index:C,noDrag:r,descs:U,margin:z,realLength:S,domItemsLength:w,className:h.className,style:N,slideStyle:function(e){return W[e]},loaded:q,onIndexChange:L,trailingDelay:0,draggedScale:.1,draggedSpring:O.stiff,trailingSpring:O.stiff,releaseSpring:O.default,children:E.map((function(e,t){return Object(s.jsx)("div",{style:{pointerEvents:r?"auto":"none"},onClick:function(){return H(t)},dangerouslySetInnerHTML:{__html:e.outerHTML}},t)}))})]})}window.onload=function(){var e=document.querySelectorAll("[data-slider-id]");Array.from(e).forEach((function(e){var t,n,c,a,i,o=e.getAttribute("data-slider-id"),u=document.createElement("div");e.after(u);var l=null===(t=document.querySelectorAll('[data-slider-desc="'.concat(o,'"]')))||void 0===t?void 0:t[0],f=null===(n=document.querySelectorAll('[data-slider-button-prev="'.concat(o,'"]')))||void 0===n?void 0:n[0],b=null===(c=document.querySelectorAll('[data-slider-button-next="'.concat(o,'"]')))||void 0===c?void 0:c[0],m=null===(a=document.querySelectorAll('[data-slider-current-index="'.concat(o,'"]')))||void 0===a?void 0:a[0],v=null===(i=document.querySelectorAll('[data-slider-last-index="'.concat(o,'"]')))||void 0===i?void 0:i[0];Object(r.render)(Object(s.jsx)(d,{id:o,domEl:e,descEl:l,buttonPrev:f,buttonNext:b,currentIndex:m,lastIndex:v}),u)}));var t=document.querySelectorAll("[data-multi-slider-id]");Array.from(t).forEach((function(e){var t,n,c,a,i=e.getAttribute("data-multi-slider-id"),o=e.hasAttribute("data-multi-slider-show-alt"),u=e.hasAttribute("data-multi-slider-no-drag"),l=e.getAttribute("data-multi-slider-margin"),d=e.getAttribute("data-multi-slider-margin-mobile"),f=document.createElement("div"),b=document.getElementsByClassName("cursor")[0];e.after(f);var m=null===(t=document.querySelectorAll('[data-slider-button-prev="'.concat(i,'"]')))||void 0===t?void 0:t[0],v=null===(n=document.querySelectorAll('[data-slider-button-next="'.concat(i,'"]')))||void 0===n?void 0:n[0],j=null===(c=document.querySelectorAll('[data-slider-current-index="'.concat(i,'"]')))||void 0===c?void 0:c[0],g=null===(a=document.querySelectorAll('[data-slider-last-index="'.concat(i,'"]')))||void 0===a?void 0:a[0];Object(r.render)(Object(s.jsx)(h,{noDrag:u,margin:l?parseInt(l,10):0,marginMobile:d?parseInt(d,10):0,showAlts:o,cursor:b,domEl:e,buttonPrev:m,buttonNext:v,currentIndex:j,lastIndex:g}),f)}))}}},[[39,1,2]]]);
//# sourceMappingURL=main.6d8b47ac.chunk.js.map