;(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
  [0],
  {
    13: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(7),
        c = n(4),
        a = n(9),
        i = n(0),
        o = n(12),
        u = n(2),
        l = n(11),
        s = n(1),
        d = function (e, t) {
          return 'translate3d('.concat(e, 'px,').concat(t, 'px,0) ')
        }
      function f(e) {
        var t = e.id,
          n = e.buttonPrev,
          a = e.buttonNext,
          f = e.currentIndex,
          b = e.lastIndex,
          v = Object(i.useRef)(0),
          j = Object(i.useRef)(0),
          O = Object(i.useRef)(),
          x = Object(i.useState)(window.innerWidth),
          y = Object(c.a)(x, 2),
          p = y[0],
          h = y[1],
          m = Object(i.useState)(0),
          g = Object(c.a)(m, 2),
          w = g[0],
          E = g[1],
          k = Object(i.useState)(0),
          I = Object(c.a)(k, 2),
          L = I[0],
          A = I[1],
          S = document.getElementById(t),
          C = Array.from(S.querySelectorAll('[data-slider-image]'))
            .map(function (e) {
              for (var t = {}, n = 0; n < e.style.length; n++) {
                var r = e.style[n]
                t[r] = e.style[r]
              }
              return t
            })
            .filter(function (e) {
              return e
            }),
          M = Object(u.d)(C.length, function (e) {
            return { x: e * p, sc: 1, display: 'block', config: u.b.gentle }
          }),
          q = Object(c.a)(M, 2),
          z = q[0],
          N = q[1],
          H = Object(i.useCallback)(
            function (e) {
              ;(v.current = v.current - e),
                (j.current = ((v.current <= 0 ? j.current + C.length : j.current) - e) % C.length),
                f && (f.innerHTML = j.current + 1),
                N(function (e) {
                  return e < j.current - 1 || e > j.current + 1
                    ? { x: ((e - v.current) % C.length) * p, sc: 1, display: 'none', zIndex: 1 }
                    : { x: ((e - v.current) % C.length) * p, sc: 1, display: 'block', zIndex: 1 }
                })
            },
            [N, p, f]
          ),
          R = Object(i.useCallback)(
            function (e, t, n, r, c) {
              e && r > p / 2 && c((j.current = Object(o.a)(j.current + (n > 0 ? -1 : 1), 0, C.length - 1))),
                f && (f.innerHTML = j.current + 1),
                N(function (n) {
                  return n < j.current - 1 || n > j.current + 1
                    ? { display: 'none' }
                    : {
                        x: (n - j.current) * p + (e ? t : 0),
                        sc: e && j.current === n ? 1.2 : 1,
                        display: 'block',
                        zIndex: e && j.current === n ? 100 : 1
                      }
                })
            },
            [C, N, p, f]
          ),
          T = Object(l.a)({
            onDrag: function (e) {
              var t = e.down,
                n = Object(c.a)(e.direction, 1)[0],
                r = e.distance,
                a = e.cancel
              return R(t, Math.sign(n) * r, n, r, a)
            }
          }),
          B = Object(u.c)(function () {
            return { xy: [0, 0] }
          }),
          J = Object(c.a)(B, 2),
          P = J[0],
          D = J[1]
        return (
          Object(i.useEffect)(
            function () {
              var e = function () {
                return H(1)
              }
              if (n)
                return (
                  n.addEventListener('click', e),
                  function () {
                    return n.removeEventListener('click', e)
                  }
                )
            },
            [n, H]
          ),
          Object(i.useEffect)(
            function () {
              var e = function () {
                return H(-1)
              }
              if (a)
                return (
                  a.addEventListener('click', e),
                  function () {
                    return a.removeEventListener('click', e)
                  }
                )
            },
            [a, H]
          ),
          Object(i.useLayoutEffect)(
            function () {
              S.style.display = 'none'
              var e = O.current.getBoundingClientRect(),
                t = e.x,
                n = e.y,
                r = e.width
              h(r), E(t), A(n)
            },
            [h, S, E, A]
          ),
          Object(i.useLayoutEffect)(
            function () {
              b && (b.innerHTML = C.length || '')
            },
            [b, C]
          ),
          Object(i.useLayoutEffect)(
            function () {
              f && (f.innerHTML = C.length > 0 ? 1 : 0)
            },
            [f, C]
          ),
          Object(s.jsxs)('div', {
            ref: O,
            className: 'slide-wrapper-relative',
            style: { position: 'relative', overflow: 'hidden', cursor: 'none' },
            onMouseMove: function (e) {
              return D({ xy: [e.clientX - w, e.clientY - L] })
            },
            children: [
              Object(s.jsx)(u.a.div, {
                style: {
                  pointerEvents: 'none',
                  zIndex: 999,
                  position: 'absolute',
                  willChange: 'transform',
                  transform: P.xy.interpolate(d)
                },
                children: Object(s.jsx)('div', { className: 'slider-cursor' })
              }),
              z.map(function (e, t) {
                var n = e.x,
                  c = e.display,
                  a = e.sc,
                  o = e.zIndex
                return Object(i.createElement)(
                  u.a.div,
                  Object(r.a)(
                    Object(r.a)({ className: 'slide-wrapper-absolute' }, T()),
                    {},
                    {
                      key: t,
                      style: {
                        position: 'absolute',
                        willChange: 'transform',
                        zIndex: o,
                        display: c,
                        overflow: 'hidden',
                        transform: n.interpolate(function (e) {
                          return 'translate3d('.concat(e, 'px,0,0)')
                        })
                      }
                    }
                  ),
                  Object(s.jsx)(u.a.div, {
                    style: {
                      width: '100%',
                      height: '100%',
                      willChange: 'transform',
                      overflow: 'hidden',
                      transform: a.interpolate(function (e) {
                        return 'scale('.concat(e, ')')
                      })
                    },
                    children: Object(s.jsx)(u.a.div, {
                      className: 'slide-image',
                      style: Object(r.a)(
                        Object(r.a)({}, C[t]),
                        {},
                        {
                          pointerEvents: 'none',
                          willChange: 'transform',
                          overflow: 'hidden',
                          transform: n.interpolate(function (e) {
                            return 'translate3d('.concat(e / 4, 'px,0,0)')
                          })
                        }
                      )
                    })
                  })
                )
              })
            ]
          })
        )
      }
      var b = document.querySelectorAll('[data-slider-images]')
      Array.from(b).forEach(function (e) {
        var t,
          n,
          r,
          c,
          i = e.getAttribute('data-slider-images'),
          o =
            null === (t = document.querySelectorAll('[data-slider-button-prev="'.concat(i, '"]'))) || void 0 === t
              ? void 0
              : t[0],
          u =
            null === (n = document.querySelectorAll('[data-slider-button-next="'.concat(i, '"]'))) || void 0 === n
              ? void 0
              : n[0],
          l =
            null === (r = document.querySelectorAll('[data-slider-current-index="'.concat(i, '"]'))) || void 0 === r
              ? void 0
              : r[0],
          d =
            null === (c = document.querySelectorAll('[data-slider-last-index="'.concat(i, '"]'))) || void 0 === c
              ? void 0
              : c[0]
        Object(a.render)(Object(s.jsx)(f, { id: i, buttonPrev: o, buttonNext: u, currentIndex: l, lastIndex: d }), e)
      })
    }
  },
  [[13, 1, 2]]
])
//# sourceMappingURL=main.d9e312b5.chunk.js.map
