;(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
  [0],
  {
    13: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(8),
        c = n(3),
        i = n(9),
        a = n(0),
        u = n(12),
        l = n(2),
        o = n(11),
        s = n(5)
      function d(e) {
        var t = e.id,
          n = e.buttonPrev,
          i = e.buttonNext,
          d = e.currentIndex,
          f = e.lastIndex,
          b = Object(a.useRef)(0),
          v = Object(a.useRef)(0),
          j = Object(a.useRef)(),
          O = Object(a.useState)(window.innerWidth),
          y = Object(c.a)(O, 2),
          h = y[0],
          p = y[1],
          x = Object(a.useState)(0),
          m = Object(c.a)(x, 2),
          g = (m[0], m[1]),
          w = Object(a.useState)(0),
          E = Object(c.a)(w, 2),
          k = (E[0], E[1]),
          L = document.getElementById(t),
          I = Array.from(L.querySelectorAll('[data-slider-image]'))
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
          A = Object(l.d)(I.length, function (e) {
            return { x: e * h, sc: 1, display: 'block', config: l.b.gentle }
          }),
          S = Object(c.a)(A, 2),
          q = S[0],
          C = S[1],
          z = Object(a.useCallback)(
            function (e) {
              ;(b.current = b.current - e),
                (v.current = ((b.current <= 0 ? v.current + I.length : v.current) - e) % I.length),
                d && (d.innerHTML = v.current + 1),
                C(function (e) {
                  return e < v.current - 1 || e > v.current + 1
                    ? { x: ((e - b.current) % I.length) * h, sc: 1, display: 'none', zIndex: 1 }
                    : { x: ((e - b.current) % I.length) * h, sc: 1, display: 'block', zIndex: 1 }
                })
            },
            [C, h, d]
          ),
          M = Object(a.useCallback)(
            function (e, t, n, r, c) {
              e && r > h / 2 && c((v.current = Object(u.a)(v.current + (n > 0 ? -1 : 1), 0, I.length - 1))),
                d && (d.innerHTML = v.current + 1),
                C(function (n) {
                  return n < v.current - 1 || n > v.current + 1
                    ? { display: 'none' }
                    : {
                        x: (n - v.current) * h + (e ? t : 0),
                        sc: e && v.current === n ? 1.2 : 1,
                        display: 'block',
                        zIndex: e && v.current === n ? 100 : 1
                      }
                })
            },
            [I, C, h, d]
          ),
          N =
            (Object(o.a)({
              onDrag: function (e) {
                var t = e.down,
                  n = Object(c.a)(e.direction, 1)[0],
                  r = e.distance,
                  i = e.cancel
                return M(t, Math.sign(n) * r, n, r, i)
              }
            }),
            Object(l.c)(function () {
              return { xy: [0, 0] }
            })),
          H = Object(c.a)(N, 2)
        H[0], H[1]
        return (
          Object(a.useEffect)(
            function () {
              var e = function () {
                return z(1)
              }
              if (n)
                return (
                  n.addEventListener('click', e),
                  function () {
                    return n.removeEventListener('click', e)
                  }
                )
            },
            [n, z]
          ),
          Object(a.useEffect)(
            function () {
              var e = function () {
                return z(-1)
              }
              if (i)
                return (
                  i.addEventListener('click', e),
                  function () {
                    return i.removeEventListener('click', e)
                  }
                )
            },
            [i, z]
          ),
          Object(a.useLayoutEffect)(
            function () {
              L.style.display = 'none'
              var e = j.current.getBoundingClientRect(),
                t = e.x,
                n = e.y,
                r = e.width
              p(r), g(t), k(n)
            },
            [p, L, g, k]
          ),
          Object(a.useLayoutEffect)(
            function () {
              f && (f.innerHTML = I.length || '')
            },
            [f, I]
          ),
          Object(a.useLayoutEffect)(
            function () {
              d && (d.innerHTML = I.length > 0 ? 1 : 0)
            },
            [d, I]
          ),
          Object(s.jsx)('div', {
            ref: j,
            className: 'slide-wrapper-relative',
            style: { position: 'relative', overflow: 'hidden' },
            children: q.map(function (e, t) {
              var n = e.x,
                c = e.display,
                i = e.sc,
                a = e.zIndex
              return Object(s.jsx)(
                l.a.div,
                {
                  className: 'slide-wrapper-absolute',
                  style: {
                    position: 'absolute',
                    willChange: 'transform',
                    zIndex: a,
                    display: c,
                    overflow: 'hidden',
                    transform: n.interpolate(function (e) {
                      return 'translate3d('.concat(e, 'px,0,0)')
                    })
                  },
                  children: Object(s.jsx)(l.a.div, {
                    style: {
                      width: '100%',
                      height: '100%',
                      willChange: 'transform',
                      overflow: 'hidden',
                      transform: i.interpolate(function (e) {
                        return 'scale('.concat(e, ')')
                      })
                    },
                    children: Object(s.jsx)(l.a.div, {
                      className: 'slide-image',
                      style: Object(r.a)(
                        Object(r.a)({}, I[t]),
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
                },
                t
              )
            })
          })
        )
      }
      var f = document.querySelectorAll('[data-slider-images]')
      Array.from(f).forEach(function (e) {
        var t,
          n,
          r,
          c,
          a = e.getAttribute('data-slider-images'),
          u =
            null === (t = document.querySelectorAll('[data-slider-button-prev="'.concat(a, '"]'))) || void 0 === t
              ? void 0
              : t[0],
          l =
            null === (n = document.querySelectorAll('[data-slider-button-next="'.concat(a, '"]'))) || void 0 === n
              ? void 0
              : n[0],
          o =
            null === (r = document.querySelectorAll('[data-slider-current-index="'.concat(a, '"]'))) || void 0 === r
              ? void 0
              : r[0],
          f =
            null === (c = document.querySelectorAll('[data-slider-last-index="'.concat(a, '"]'))) || void 0 === c
              ? void 0
              : c[0]
        Object(i.render)(Object(s.jsx)(d, { id: a, buttonPrev: u, buttonNext: l, currentIndex: o, lastIndex: f }), e)
      })
    }
  },
  [[13, 1, 2]]
])
//# sourceMappingURL=main.3e81611d.chunk.js.map
