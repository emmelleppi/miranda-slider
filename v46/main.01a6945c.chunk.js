;(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
  [0],
  {
    41: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(19),
        c = n(4),
        a = n(2),
        i = n(3),
        u = n(1),
        o = n(8),
        l = n(25),
        s = function (e) {
          var t = e.split('-')
          return 1 === t.length
            ? t[0]
            : t[0] +
                t
                  .slice(1)
                  .map(function (e) {
                    return e[0].toUpperCase() + e.slice(1)
                  })
                  .join('')
        },
        d = n(7)
      function f(e) {
        var t = e.noInfinite,
          n = e.switchInterval,
          r = e.initSwitchDelay,
          f = e.id,
          b = e.descEl,
          v = e.domEl,
          m = e.buttonPrev,
          j = e.buttonNext,
          g = e.currentIndex,
          O = e.lastIndex,
          h = e.mass,
          p = void 0 === h ? 1 : h,
          y = e.tension,
          x = void 0 === y ? 70 : y,
          E = e.friction,
          S = void 0 === E ? 26 : E,
          I = e.visible,
          w = void 0 === I ? 1 : I,
          A = Object(u.useRef)(),
          L = Object(u.useState)(1),
          N = Object(i.a)(L, 2),
          k = N[0],
          M = N[1],
          C = Object(u.useState)({}),
          D = Object(i.a)(C, 2),
          R = D[0],
          T = D[1],
          q = Object(u.useMemo)(
            function () {
              return { mass: p, tension: x, friction: S }
            },
            [p, x, S]
          ),
          P = v,
          H = Object(u.useState)(function () {
            return P.getBoundingClientRect().width
          }),
          B = Object(i.a)(H, 2),
          W = B[0],
          z =
            (B[1],
            Object(u.useState)(function () {
              var e = Array.from(P.querySelectorAll('[data-slider-image]')),
                t = Array.from(P.getElementsByTagName('a')).map(function (e) {
                  return e.attributes
                }),
                n = e.map(function (e) {
                  for (var t = {}, n = 0; n < e.style.length; n++) {
                    var r = e.style[n]
                    t[s(r)] = e.style[r]
                  }
                  var c = e.getAttribute('src')
                  return c && (t.backgroundImage = 'url('.concat(c, ')')), t
                }),
                r = e.map(function (e) {
                  return e.className
                }),
                c = e.map(function (e) {
                  return e.getAttribute('alt')
                }),
                a = Array.from(P.querySelectorAll('[data-slider-image-content]'))
              return (
                (P.style.display = 'none'), (P.innerHTML = ''), { items: n, classes: r, desc: c, content: a, links: t }
              )
            })),
          U = Object(i.a)(z, 1)[0],
          _ = U.items,
          F = U.classes,
          J = U.desc,
          X = U.content,
          Y = U.links,
          G = Object(u.useCallback)(
            function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.length
              return (e < 0 ? e + t : e) % t
            },
            [_]
          ),
          K = Object(u.useCallback)(
            function (e, t, n) {
              return G(e - t + n)
            },
            [G]
          ),
          Q = Object(o.useSprings)(_.length, function (e) {
            return { x: (e < _.length - 1 ? e : -1) * W + 0, config: q }
          }),
          V = Object(i.a)(Q, 2),
          Z = V[0],
          $ = V[1],
          ee = Object(u.useRef)([0, 1]),
          te = Object(u.useRef)(0),
          ne = Object(u.useCallback)(
            function (e, n, r, c, a, i, u, o) {
              o ||
                (r &&
                  (u > W / 2 || Math.abs(n) > 1) &&
                  (!t || (t && ((k > 1 && c > 0) || (k < _.length && c < 0)))
                    ? a((te.current = te.current + (c > 0 ? -1 : 1)))
                    : a())),
                te.current + 1 > _.length
                  ? M((te.current % _.length) + 1)
                  : te.current < 0
                  ? M(_.length + ((te.current + 1) % _.length))
                  : M(te.current + 1)
              var l = te.current * W,
                s = G(Math.floor(l / W) % _.length),
                d = n < 0 ? _.length - w - 1 : 1
              $(function (e) {
                var t = K(e, s, d),
                  c = K(e, ee.current[0], ee.current[1]),
                  a = s - (l < 0 ? _.length : 0) + t - d + (l < 0 && 0 === s ? _.length : 0)
                return {
                  x: (-l % (W * _.length)) + W * a + (r ? i : 0) + 0,
                  immediate: n < 0 ? c > t : c < t,
                  config: q
                }
              }),
                (ee.current = [s, d])
            },
            [t, k, _.length, W, G, w, $, K, q]
          ),
          re = Object(l.b)(
            {
              onDrag: function (e) {
                var t = Object(i.a)(e.offset, 1)[0],
                  n = Object(i.a)(e.vxvy, 1)[0],
                  r = e.down,
                  c = Object(i.a)(e.direction, 1)[0],
                  a = e.cancel,
                  u = e.distance,
                  o = Object(i.a)(e.movement, 1)[0]
                if (e.tap) {
                  var l = document.getElementById('slider-link-'.concat(f))
                  l.href && l.href.length > 0 && (window.location.href = l.href)
                }
                n && ne(-t, -n, r, c, a, o, u)
              }
            },
            { filterTaps: !0 }
          )
        Object(u.useEffect)(
          function () {
            var e = document.getElementById('slider-link-'.concat(f)),
              t = A.current
            if (!e && Y && Y.length > 0 && t) {
              for (var n = t.parentNode; b && !n.contains(b); ) (t = n), (n = n.parentNode)
              ;(t = n), (n = n.parentNode)
              var r = document.createElement('a')
              ;(r.id = 'slider-link-'.concat(f)), n.replaceChild(r, t), r.appendChild(t)
            }
          },
          [f, Y, b]
        ),
          Object(u.useEffect)(
            function () {
              var e = document.getElementById('slider-link-'.concat(f))
              if (e) {
                var t = function (e) {
                  return e.preventDefault()
                }
                return (
                  e.addEventListener('click', t),
                  function () {
                    return e.removeEventListener('click', t)
                  }
                )
              }
            },
            [f]
          ),
          Object(u.useEffect)(
            function () {
              var e = document.getElementById('slider-link-'.concat(f)),
                t = Y[k - 1]
              e &&
                t &&
                Array.from(t).forEach(function (t) {
                  var n = t.name,
                    r = t.value
                  return e.setAttribute(n, r)
                })
            },
            [k, f, Y]
          ),
          Object(u.useEffect)(
            function () {
              R[k - 1] ||
                T(function (e) {
                  return Object(a.a)(Object(c.a)({}, k - 1, !0), e)
                }),
                g && (g.innerHTML = k > 9 ? k : '0'.concat(k))
            },
            [k, g, R]
          ),
          Object(u.useEffect)(
            function () {
              b && (J[k - 1] && (b.innerHTML = J[k - 1] || ''), X[k - 1] && ((b.innerHTML = ''), b.append(X[k - 1])))
            },
            [R, X, T, k, b, J]
          ),
          Object(u.useEffect)(
            function () {
              t &&
                (m && (1 === k ? m.classList.add('disabled') : m.classList.remove('disabled')),
                j && (k === _.length ? j.classList.add('disabled') : j.classList.remove('disabled')))
            },
            [t, k, m, j, _.length]
          ),
          Object(u.useEffect)(
            function () {
              if (m) {
                var e = function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    ((t && k > 1) || !t) && ((te.current += -1), ne(0, -1, !0, -0, function () {}, -0, 0, !0))
                }
                return (
                  m.addEventListener('click', e),
                  function () {
                    return m.removeEventListener('click', e)
                  }
                )
              }
            },
            [t, k, m, ne]
          ),
          Object(u.useEffect)(
            function () {
              if (j) {
                var e = function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    (!t || (k < _.length && t)) && ((te.current += 1), ne(0, 1, !0, -0, function () {}, -0, 0, !0))
                }
                return (
                  j.addEventListener('click', e),
                  function () {
                    return j.removeEventListener('click', e)
                  }
                )
              }
            },
            [t, k, j, ne, _.length]
          ),
          Object(u.useEffect)(
            function () {
              O && (O.innerHTML = _.length > 9 ? _.length : '0'.concat(_.length))
            },
            [O, _]
          )
        var ce = Object(u.useState)(!1),
          ae = Object(i.a)(ce, 2),
          ie = ae[0],
          ue = ae[1]
        return (
          Object(u.useEffect)(
            function () {
              if (ie && n && n > 0) {
                var e = setInterval(function () {
                  ;(te.current += 1), ne(0, 1, !0, -0, function () {}, -0)
                }, n)
                return function () {
                  return clearInterval(e)
                }
              }
            },
            [n, ne, ie]
          ),
          Object(u.useEffect)(
            function () {
              r
                ? setTimeout(function () {
                    return ue(!0)
                  }, r)
                : ue(!0)
            },
            [ue, r]
          ),
          Object(d.jsx)(
            'div',
            Object(a.a)(
              Object(a.a)({ ref: A, className: P.className }, re()),
              {},
              {
                style: { position: 'relative', overflow: 'hidden' },
                children: Z.map(function (e, t) {
                  var n = e.x,
                    r = e.display,
                    c = e.zIndex
                  return Object(d.jsx)(
                    o.animated.div,
                    {
                      className: P.className,
                      style: {
                        position: 'absolute',
                        willChange: 'transform',
                        zIndex: c,
                        display: r,
                        overflow: 'hidden',
                        transform: n.to(function (e) {
                          return 'translate3d('.concat(e, 'px,0,0)')
                        })
                      },
                      children: Object(d.jsx)(o.animated.div, {
                        style: { width: '100%', height: '100%', willChange: 'transform', overflow: 'hidden' },
                        children: Object(d.jsx)(o.animated.div, {
                          className: ''.concat(F[t]),
                          style: Object(a.a)(Object(a.a)({}, _[t]), {}, { pointerEvents: 'none' })
                        })
                      })
                    },
                    t
                  )
                })
              }
            )
          )
        )
      }
      var b = n(13),
        v = n(43),
        m = n(32)
      function j(e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
      }
      function g(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * e - 10)
      }
      var O = {
        draggedScale: 1,
        draggedSpring: o.config.default,
        trailingSpring: o.config.default,
        releaseSpring: o.config.default,
        trailingDelay: 50
      }
      function h(e) {
        var t = e.children,
          n = e.index,
          r = e.config,
          s = e.noInfinite,
          f = e.realLength,
          b = e.noInnerScale,
          O = e.descs,
          h = e.margin,
          p = e.centered,
          y = e.onIndexChange,
          x = e.domItemsLength,
          E = e.className,
          S = e.style,
          I = e.slideStyle,
          w = e.slideClassName,
          A = e.draggedScale,
          L = e.draggedSpring,
          N = e.releaseSpring,
          k = e.trailingSpring,
          M = e.trailingDelay,
          C = e.onDragStart,
          D = e.onDragEnd,
          R = e.onTap,
          T =
            'function' === typeof I
              ? I
              : function () {
                  return I
                },
          q = Object(u.useRef)(null),
          P = Object(m.a)({ ref: q }),
          H = P.width,
          B = P.height,
          W = 'x',
          z = H,
          U = [0, x - 1][1]
        U = U > 0 ? U : t.length - 1 + U
        var _ = Object(u.useRef)(n),
          F = Object(u.useRef)(0),
          J = Object(u.useRef)(0),
          X = Object(u.useRef)(new Set()),
          Y = Object(u.useRef)(0),
          G = Object(u.useRef)(0),
          K = Object(u.useRef)(),
          Q = function (e) {
            e.forEach(function (e) {
              var t = e.isIntersecting,
                n = e.target
              return X.current[t ? 'add' : 'delete'](Number(n.getAttribute('data-index')))
            })
            var t = Array.from(X.current).sort()
            if (((Y.current = t[0]), (G.current = t[t.length - 1]), K.current && K.current.children)) {
              var n = Array.from(K.current.children)
              n.forEach(function (e) {
                return (e.style.display = 'flex')
              }),
                t.forEach(function (e) {
                  n[e] && (n[e].style.display = 'none')
                })
            }
          },
          V = Object(u.useRef)(null)
        Object(u.useEffect)(
          function () {
            return (
              V.current || (V.current = new IntersectionObserver(Q)),
              Array.from(q.current.children).forEach(function (e) {
                return V.current.observe(e)
              }),
              function () {
                return V.current.disconnect()
              }
            )
          },
          [t.length, q]
        )
        var Z = Object(o.useSprings)(t.length, function (e) {
            return {
              x: F.current,
              y: 0,
              zIndex: 0,
              config: r,
              immediate: function (e) {
                return 'zIndex' === e
              }
            }
          }),
          $ = Object(i.a)(Z, 2),
          ee = $[0],
          te = $[1]
        Object(u.useEffect)(
          function () {
            if (H && B && q.current.children[n]) {
              var e = q.current.children[n],
                t = e.offsetLeft,
                r = e.offsetWidth
              if (((F.current = Math.round(-t) + (p ? (H - r) / 2 : 0)), _.current === n))
                te(
                  x <= n && n < 2 * x
                    ? function (e) {
                        var t
                        return (
                          (t = {}),
                          Object(c.a)(t, W, F.current),
                          Object(c.a)(t, 'config', Object(a.a)(Object(a.a)({}, N), {}, { velocity: J.current })),
                          t
                        )
                      }
                    : function (e) {
                        var t
                        return (
                          (t = {}),
                          Object(c.a)(t, W, F.current),
                          Object(c.a)(t, 'config', Object(a.a)(Object(a.a)({}, N), {}, { velocity: J.current })),
                          Object(c.a)(t, 'onRest', function () {
                            if (p || !s) {
                              var e = x + (n % x)
                              if (q.current.children[e]) {
                                var t = q.current.children[e],
                                  r = t.offsetLeft,
                                  a = t.offsetWidth
                                ;(F.current = Math.round(-r) + (p ? (H - a) / 2 : 0)),
                                  te(function (e) {
                                    var t
                                    return (t = {}), Object(c.a)(t, W, F.current), Object(c.a)(t, 'immediate', !0), t
                                  }),
                                  y(e)
                              }
                            }
                          }),
                          t
                        )
                      }
                )
              else {
                var i = n < x,
                  u = n >= 2 * x
                if (i || u) {
                  var o = 0
                  if ((i && (o = _.current + x), u && (o = _.current - x), !q.current.children[o])) return
                  var l = q.current.children[o],
                    d = l.offsetLeft,
                    f = l.offsetWidth
                  ;(F.current = Math.round(-d) + (p ? (H - f) / 2 : 0)),
                    te(function (e) {
                      var t
                      return (t = {}), Object(c.a)(t, W, F.current), Object(c.a)(t, 'immediate', !0), t
                    }),
                    i && y(n + x),
                    u && y(n - x),
                    (_.current = o)
                } else {
                  var b = n < _.current ? -1 : 1,
                    v = b > 0 ? Y.current : G.current
                  te(function (e) {
                    var t
                    return (
                      (t = {}),
                      Object(c.a)(t, W, F.current),
                      Object(c.a)(t, 'config', N),
                      Object(c.a)(t, 'delay', e * b < v * b ? 0 : Math.abs(v - e) * M),
                      t
                    )
                  })
                }
              }
              _.current = n
            }
          },
          [U, n, te, q, W, B, H, N, L, M, p, x, y, s]
        ),
          Object(u.useEffect)(
            function () {
              if (q.current && q.current.children[_.current]) {
                var e = q.current.children[_.current],
                  t = e.offsetLeft,
                  n = e.offsetWidth
                ;(F.current = Math.round(-t) + (p ? (H - n) / 2 : 0)),
                  te(function (e) {
                    var t
                    return (t = {}), Object(c.a)(t, W, F.current), Object(c.a)(t, 'immediate', !0), t
                  })
              }
            },
            [p, te, H]
          )
        var ne = Object(l.a)(
            function (e) {
              var t = e.first,
                r = e.last,
                a = e.tap,
                u = Object(i.a)(e.vxvy, 1)[0],
                o = Object(i.a)(e.delta, 1)[0],
                l = Object(i.a)(e.swipe, 1)[0],
                d = Object(i.a)(e.movement, 1)[0],
                m = Object(i.a)(e.args, 1)[0],
                j = e.memo,
                O = void 0 === j ? ee[m].x.get() : j
              if (a) R && R(m)
              else {
                var h = u,
                  p = -Math.sign(o),
                  E = d,
                  S = l
                if (!s || !((0 === n && E > 0) || (n === x - 1 && E < 0))) {
                  if (t)
                    te(function (e) {
                      var t
                      return (
                        (t = {}),
                        Object(c.a)(t, W, O + E),
                        Object(c.a)(t, 'config', function (t) {
                          return t === W && e === m ? L : k
                        }),
                        Object(c.a)(t, 'zIndex', e === m ? 10 : 0),
                        t
                      )
                    }),
                      C && C(m)
                  else if (r)
                    (Math.abs(E) > z / 2 || 0 !== S) && (_.current = Object(v.a)(_.current + (E > 0 ? -1 : 1), 0, f)),
                      n !== _.current
                        ? ((J.current = h),
                          requestAnimationFrame(function () {
                            return y(_.current)
                          }))
                        : te(function () {
                            var e
                            return (e = {}), Object(c.a)(e, W, F.current), Object(c.a)(e, 'config', N), e
                          }),
                      D && D(m),
                      b || ((oe.current = g), ue({ from: { scale: 1 }, to: { scale: 0 } }))
                  else {
                    var I = p > 0 ? Y.current : G.current
                    te(function (e) {
                      var t
                      return (
                        (t = {}),
                        Object(c.a)(t, W, E + O),
                        Object(c.a)(t, 'delay', e * p < I * p || e === m ? 0 : Math.abs(I - e) * M),
                        Object(c.a)(t, 'config', function (t) {
                          return t === W && e === m ? L : k
                        }),
                        t
                      )
                    })
                  }
                  return O
                }
              }
            },
            { axis: W, filterTaps: !0 }
          ),
          re = {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            position: 'relative',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            WebkitTouchCallout: 'none',
            flexDirection: 'row',
            touchAction: 'pan-y'
          },
          ce = Object(o.useSpring)(function () {
            return { from: { scale: 0 }, config: { duration: 1500 } }
          }),
          ae = Object(i.a)(ce, 2),
          ie = ae[0].scale,
          ue = ae[1],
          oe = Object(u.useRef)(j),
          le = Object(u.useCallback)(
            function () {
              b || ((oe.current = j), ue({ from: { scale: 0 }, to: { scale: 1 } }))
            },
            [oe, ue, b]
          ),
          se = Object(u.useCallback)(
            function () {
              b || ((oe.current = g), ue({ from: { scale: 1 }, to: { scale: 0 } }))
            },
            [oe, ue, b]
          )
        return Object(d.jsx)('div', {
          ref: q,
          className: E,
          style: Object(a.a)(Object(a.a)(Object(a.a)({}, re), S), p && { margin: '0 auto' }),
          children: ee.map(function (e, n) {
            var r,
              i = e.x,
              l = e.zIndex
            return Object(u.createElement)(
              o.animated.div,
              Object(a.a)(
                Object(a.a)({}, ne(n)),
                {},
                {
                  key: n,
                  'data-index': n,
                  className: w,
                  style: Object(a.a)(
                    Object(a.a)(
                      { display: 'flex', flexFlow: 'column nowrap', alignItems: p ? 'center' : 'flex-start' },
                      T(n)
                    ),
                    {},
                    ((r = { zIndex: l }),
                    Object(c.a)(r, W, i),
                    Object(c.a)(r, 'willChange', 'transform'),
                    Object(c.a)(r, 'margin', '0 '.concat(h, 'vw 0 0')),
                    r)
                  )
                }
              ),
              Object(d.jsx)(o.animated.div, {
                onPointerDown: le,
                onPointerUp: se,
                style: {
                  transform: ie.to(function (e) {
                    return 'scaleY('.concat(1 - A * oe.current(e), ')')
                  }),
                  overflow: 'hidden',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                },
                children: Object(d.jsx)(o.animated.div, {
                  ref: K,
                  style: {
                    transform: ie.to(function (e) {
                      return 'scale('.concat(1 + A * oe.current(e), ', ').concat(1 + 2 * A * oe.current(e), ')')
                    }),
                    willChange: 'transform',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transformStyle: 'preserve-3d'
                  },
                  children: t[n]
                })
              }),
              O[n] && Object(d.jsx)('div', { className: 'multi-slider-alt', children: O[n] })
            )
          })
        })
      }
      h.defaultProps = O
      var p = function (e, t) {
        return 'translate3d('.concat(e, 'px,').concat(t, 'px,0) ')
      }
      function y(e) {
        var t = e.margin,
          n = e.marginMobile,
          r = e.noInfinite,
          c = e.noDrag,
          a = e.centered,
          l = e.showAlts,
          f = e.cursor,
          v = e.domEl,
          m = e.buttonPrev,
          j = e.noInnerScale,
          g = e.buttonNext,
          O = e.currentIndex,
          y = e.mass,
          x = void 0 === y ? 1 : y,
          E = e.tension,
          S = void 0 === E ? 70 : E,
          I = e.friction,
          w = void 0 === I ? 26 : I,
          A = e.lastIndex,
          L = window.innerWidth <= 991,
          N = v,
          k = Object(u.useMemo)(
            function () {
              return { mass: x, tension: S, friction: w }
            },
            [x, S, w]
          ),
          M = Object(u.useState)(function () {
            var e = Array.from(N.querySelectorAll('[data-slider-image]')),
              t = e.length
            return r && !a
              ? (window.innerWidth > 479 &&
                  (e[0] && e.push(e[0]), e[1] && e.push(e[1]), e[2] && e.push(e[2]), e[3] && e.push(e[3])),
                [e, e.length, t])
              : [[].concat(Object(b.a)(e), Object(b.a)(e), Object(b.a)(e)), 3 * e.length, t]
          }),
          C = Object(i.a)(M, 1),
          D = Object(i.a)(C[0], 3),
          R = D[0],
          T = D[1],
          q = D[2],
          P = Object(u.useState)(r ? 0 : q + 1),
          H = Object(i.a)(P, 2),
          B = H[0],
          W = H[1],
          z = Object(u.useState)(),
          U = Object(i.a)(z, 2),
          _ = U[0],
          F = U[1],
          J = Object(u.useState)({}),
          X = Object(i.a)(J, 2),
          Y = X[0],
          G = X[1],
          K = Object(u.useCallback)(
            function (e) {
              e !== B && W(e)
            },
            [B, W]
          ),
          Q = Object(u.useMemo)(
            function () {
              return L ? n : t
            },
            [t, n, L]
          ),
          V = Object(u.useMemo)(
            function () {
              return R.map(function (e) {
                for (var t = {}, n = 0; n < e.style.length; n++) {
                  var r = e.style[n]
                  t[s(r)] = e.style[r]
                }
                return t
              })
            },
            [R]
          ),
          Z = Object(u.useMemo)(
            function () {
              return l
                ? R.map(function (e) {
                    var t = e.getElementsByTagName('img')
                    return t && t[0] ? t[0].getAttribute('alt') : null
                  })
                : []
            },
            [l, R]
          )
        Object(u.useEffect)(
          function () {
            F({ width: '10vw' }), (N.style.display = 'none'), (N.innerHTML = '')
          },
          [R, L, c, F, N, n, t]
        ),
          Object(u.useEffect)(
            function () {
              if (O) {
                var e = (B + 1) % q === 0 ? q : (B + 1) % q
                O.innerHTML = e > 9 ? ''.concat(e) : '0'.concat(e)
              }
            },
            [Y, G, B, O, q]
          ),
          Object(u.useEffect)(
            function () {
              var e = function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  ((r && B > 0) || !r) &&
                    W(function (e) {
                      var t = e - 1
                      return t < 0 ? 0 : t
                    })
              }
              if (m)
                return (
                  m.addEventListener('click', e),
                  function () {
                    return m.removeEventListener('click', e)
                  }
                )
            },
            [m, W, q, r, B]
          ),
          Object(u.useEffect)(
            function () {
              var e = function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  ((r && B < q - 1) || !r) &&
                    W(function (e) {
                      var t = e + 1
                      return t >= T ? e : t
                    })
              }
              if (g)
                return (
                  g.addEventListener('click', e),
                  function () {
                    return g.removeEventListener('click', e)
                  }
                )
            },
            [g, q, B, r, T, W]
          ),
          Object(u.useEffect)(
            function () {
              r &&
                (m && (0 === B ? m.classList.add('disabled') : m.classList.remove('disabled')),
                g && (B === q - 1 ? g.classList.add('disabled') : g.classList.remove('disabled')))
            },
            [r, B, m, g, q]
          ),
          Object(u.useEffect)(
            function () {
              A && (A.innerHTML = q > 9 ? ''.concat(q) : '0'.concat(q))
            },
            [A, q]
          )
        var $ = Object(u.useRef)(),
          ee = Object(u.useState)(0),
          te = Object(i.a)(ee, 2),
          ne = te[0],
          re = te[1],
          ce = Object(u.useState)(0),
          ae = Object(i.a)(ce, 2),
          ie = ae[0],
          ue = ae[1],
          oe = Object(o.useSpring)(function () {
            return { xy: [0, 0] }
          }),
          le = Object(i.a)(oe, 2),
          se = le[0],
          de = le[1],
          fe = Object(u.useRef)(!1),
          be = Object(u.useCallback)(
            function () {
              if ($.current) {
                var e = $.current.getBoundingClientRect(),
                  t = e.x,
                  n = e.y
                ne !== t && re(t),
                  ie !== n && ue(n),
                  !fe.current && e.top < 2 * window.innerHeight && ((fe.current = !0), r || W(q))
              }
            },
            [ne, ie, r, q]
          ),
          ve = Object(u.useState)(),
          me = Object(i.a)(ve, 2),
          je = me[0],
          ge = me[1]
        Object(u.useEffect)(
          function () {
            if (f) {
              var e = f.outerHTML.slice()
              ge(e)
            }
          },
          [f, ge]
        ),
          Object(u.useEffect)(
            function () {
              setInterval(be, 500)
            },
            [be]
          )
        var Oe = Object(u.useRef)(),
          he = Object(u.useCallback)(
            function (e) {
              if (Oe.current) {
                var t = Oe.current.getElementsByClassName('cursor')[0]
                e
                  ? t.classList.add('cursor-show')
                  : (t.classList.remove('cursor-show'), t.classList.remove('cursor-active'))
              }
            },
            [Oe]
          ),
          pe = Object(u.useCallback)(
            function (e) {
              if (Oe.current) {
                var t = Oe.current.getElementsByClassName('cursor')[0]
                e ? t.classList.add('cursor-active') : t.classList.remove('cursor-active')
              }
            },
            [Oe]
          )
        return Object(d.jsxs)('div', {
          style: { position: 'relative', overflowX: 'hidden' },
          ref: $,
          onPointerEnter: function () {
            return !c && he(!0)
          },
          onPointerLeave: function () {
            return !c && he(!1)
          },
          onPointerDown: function () {
            return !c && pe(!0)
          },
          onPointerUp: function () {
            return !c && pe(!1)
          },
          onMouseMove: function (e) {
            return !c && de({ xy: [e.clientX - ne, e.clientY - ie] })
          },
          children: [
            je &&
              !c &&
              Object(d.jsx)(o.animated.div, {
                ref: Oe,
                dangerouslySetInnerHTML: { __html: je },
                style: {
                  pointerEvents: 'none',
                  zIndex: 999,
                  position: 'absolute',
                  willChange: 'transform',
                  transform: se.xy.to(p)
                }
              }),
            _ &&
              Object(d.jsx)(h, {
                index: B,
                noDrag: c,
                draggedSpring: k,
                trailingSpring: k,
                releaseSpring: k,
                centered: a,
                noInfinite: r,
                noInnerScale: j,
                descs: Z,
                margin: Q,
                realLength: T,
                domItemsLength: q,
                className: N.className,
                style: _,
                slideStyle: function (e) {
                  return V[e]
                },
                loaded: Y,
                onIndexChange: W,
                trailingDelay: 0,
                draggedScale: 0.05,
                children: R.map(function (e, t) {
                  return Object(d.jsx)(
                    'div',
                    {
                      style: {
                        pointerEvents: c ? 'auto' : 'none',
                        opacity: t >= q && window.innerWidth < 479 && r && !a ? 0 : 1
                      },
                      onClick: function () {
                        return K(t)
                      },
                      dangerouslySetInnerHTML: { __html: e.outerHTML }
                    },
                    t
                  )
                })
              })
          ]
        })
      }
      window.SlidersInit = function () {
        var e = document.querySelectorAll('[data-slider-id]')
        Array.from(e).forEach(function (e) {
          var t,
            n,
            c,
            a,
            i,
            u = e.getAttribute('data-slider-id'),
            o = document.createElement('div'),
            l = e.getAttribute('data-slider-switch-init-delay'),
            s = e.getAttribute('data-slider-switch-interval'),
            b = e.hasAttribute('data-slider-no-infinite'),
            v = parseInt(e.getAttribute('data-slider-mass'), 10),
            m = parseInt(e.getAttribute('data-slider-tension'), 10),
            j = parseInt(e.getAttribute('data-slider-friction'), 10)
          e.after(o)
          var g =
              null === (t = document.querySelectorAll('[data-slider-desc="'.concat(u, '"]'))) || void 0 === t
                ? void 0
                : t[0],
            O =
              null === (n = document.querySelectorAll('[data-slider-button-prev="'.concat(u, '"]'))) || void 0 === n
                ? void 0
                : n[0],
            h =
              null === (c = document.querySelectorAll('[data-slider-button-next="'.concat(u, '"]'))) || void 0 === c
                ? void 0
                : c[0],
            p =
              null === (a = document.querySelectorAll('[data-slider-current-index="'.concat(u, '"]'))) || void 0 === a
                ? void 0
                : a[0],
            y =
              null === (i = document.querySelectorAll('[data-slider-last-index="'.concat(u, '"]'))) || void 0 === i
                ? void 0
                : i[0]
          Object(r.render)(
            Object(d.jsx)(f, {
              id: u,
              initSwitchDelay: s && l && !b ? parseInt(l, 10) : null,
              switchInterval: s && !b ? parseInt(s, 10) : null,
              noInfinite: b,
              domEl: e,
              descEl: g,
              buttonPrev: O,
              buttonNext: h,
              currentIndex: p,
              lastIndex: y,
              mass: isNaN(v) ? null : v,
              tension: isNaN(m) ? null : m,
              friction: isNaN(j) ? null : j
            }),
            o
          )
        })
        var t = document.querySelectorAll('[data-multi-slider-id]')
        Array.from(t).forEach(function (e) {
          var t,
            n,
            c,
            a,
            i = e.getAttribute('data-multi-slider-id'),
            u = e.hasAttribute('data-multi-slider-show-alt'),
            o = e.hasAttribute('data-multi-slider-no-drag'),
            l = e.hasAttribute('data-slider-no-infinite'),
            s = parseInt(e.getAttribute('data-multi-slider-mass'), 10),
            f = parseInt(e.getAttribute('data-multi-slider-tension'), 10),
            b = parseInt(e.getAttribute('data-multi-slider-friction'), 10),
            v = e.getAttribute('data-multi-slider-margin'),
            m = e.getAttribute('data-multi-slider-margin-mobile'),
            j = e.hasAttribute('data-slider-no-inner-scale'),
            g = e.hasAttribute('data-multi-slider-centered'),
            O = document.createElement('div'),
            h = document.getElementsByClassName('cursor')[0]
          e.after(O)
          var p =
              null === (t = document.querySelectorAll('[data-slider-button-prev="'.concat(i, '"]'))) || void 0 === t
                ? void 0
                : t[0],
            x =
              null === (n = document.querySelectorAll('[data-slider-button-next="'.concat(i, '"]'))) || void 0 === n
                ? void 0
                : n[0],
            E =
              null === (c = document.querySelectorAll('[data-slider-current-index="'.concat(i, '"]'))) || void 0 === c
                ? void 0
                : c[0],
            S =
              null === (a = document.querySelectorAll('[data-slider-last-index="'.concat(i, '"]'))) || void 0 === a
                ? void 0
                : a[0]
          Object(r.render)(
            Object(d.jsx)(y, {
              centered: g,
              noDrag: o,
              noInfinite: l,
              noInnerScale: j,
              margin: v ? parseInt(v, 10) : 0,
              marginMobile: m ? parseInt(m, 10) : 0,
              showAlts: u,
              cursor: h,
              domEl: e,
              buttonPrev: p,
              buttonNext: x,
              currentIndex: E,
              lastIndex: S,
              mass: isNaN(s) ? null : s,
              tension: isNaN(f) ? null : f,
              friction: isNaN(b) ? null : b
            }),
            O
          )
        })
      }
    }
  },
  [[41, 1, 2]]
])
//# sourceMappingURL=main.01a6945c.chunk.js.map
