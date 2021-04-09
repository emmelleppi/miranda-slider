;(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
  [0],
  {
    10: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(8),
        c = n(6),
        i = n(9),
        l = n(0),
        a = n(5),
        o = n(3)
      function u(e) {
        var t = e.id,
          n = e.buttonPrev,
          i = e.buttonNext,
          u = e.currentIndex,
          s = e.lastIndex,
          d = e.visible,
          f = void 0 === d ? 1 : d,
          v = Object(l.useRef)(),
          b = Object(l.useState)(window.innerWidth),
          h = Object(c.a)(b, 2),
          j = h[0],
          g = h[1],
          m = document.getElementById(t),
          O = Array.from(m.querySelectorAll('[data-slider-image]')),
          p = O.map(function (e) {
            for (var t = {}, n = 0; n < e.style.length; n++) {
              var r = e.style[n]
              t[r] = e.style[r]
            }
            return t
          }),
          y = O.map(function (e) {
            return e.className
          }),
          x = Object(l.useCallback)(
            function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.length
              return (e < 0 ? e + t : e) % t
            },
            [p]
          ),
          w = Object(l.useCallback)(
            function (e, t, n) {
              return x(e - t + n)
            },
            [x]
          ),
          E = Object(a.b)(p.length, function (e) {
            return { x: (e < p.length - 1 ? e : -1) * j + 0 }
          }),
          L = Object(c.a)(E, 2),
          k = L[0],
          A = L[1],
          S = Object(l.useRef)([0, 1]),
          C = Object(l.useRef)(0),
          I = Object(l.useState)(1),
          q = Object(c.a)(I, 2),
          N = q[0],
          M = q[1],
          R = Object(l.useCallback)(
            function (e, t, n, r, c, i) {
              n || (C.current += ((-i + (j + i)) / j) * (r > 0 ? -1 : 1)),
                C.current + 1 > p.length
                  ? M((C.current % p.length) + 1)
                  : C.current < 0
                  ? M(p.length + ((C.current + 1) % p.length))
                  : M(C.current + 1)
              var l = C.current * j,
                a = x(Math.floor(l / j) % p.length),
                o = t < 0 ? p.length - f - 1 : 1
              A(function (e) {
                var r = w(e, a, o),
                  c = w(e, S.current[0], S.current[1]),
                  u = a - (l < 0 ? p.length : 0) + r - o + (l < 0 && 0 === a ? p.length : 0)
                return { x: (-l % (j * p.length)) + j * u + (n ? i : 0) + 0, immediate: t < 0 ? c > r : c < r }
              }),
                (S.current = [a, o])
            },
            [x, w, j, f, A, p.length]
          )
        return (
          Object(l.useEffect)(
            function () {
              u && (u.innerHTML = '0'.concat(N))
            },
            [N]
          ),
          Object(l.useEffect)(
            function () {
              var e = function () {
                ;(C.current += -1), R(0, -1, !0, -0, function () {}, -0)
              }
              if (n)
                return (
                  n.addEventListener('click', e),
                  function () {
                    return n.removeEventListener('click', e)
                  }
                )
            },
            [n, R]
          ),
          Object(l.useEffect)(
            function () {
              var e = function () {
                ;(C.current += 1), R(0, 1, !0, -0, function () {}, -0)
              }
              if (i)
                return (
                  i.addEventListener('click', e),
                  function () {
                    return i.removeEventListener('click', e)
                  }
                )
            },
            [i, R]
          ),
          Object(l.useLayoutEffect)(
            function () {
              m.style.display = 'none'
              var e = v.current.getBoundingClientRect().width
              g(e)
            },
            [g, m]
          ),
          Object(l.useLayoutEffect)(
            function () {
              s && (s.innerHTML = '0'.concat(p.length) || !1)
            },
            [s, p]
          ),
          Object(l.useLayoutEffect)(
            function () {
              u && (u.innerHTML = p.length > 0 ? '01' : '00')
            },
            [u, p]
          ),
          Object(o.jsx)('div', {
            ref: v,
            className: 'slide-wrapper-relative',
            style: { position: 'relative', overflow: 'hidden' },
            children: k.map(function (e, t) {
              var n = e.x,
                c = e.display,
                i = (e.sc, e.zIndex)
              return Object(o.jsx)(
                a.a.div,
                {
                  className: 'slide-wrapper-absolute',
                  style: {
                    position: 'absolute',
                    willChange: 'transform',
                    zIndex: i,
                    display: c,
                    overflow: 'hidden',
                    transform: n.interpolate(function (e) {
                      return 'translate3d('.concat(e, 'px,0,0)')
                    })
                  },
                  children: Object(o.jsx)(a.a.div, {
                    style: { width: '100%', height: '100%', willChange: 'transform', overflow: 'hidden' },
                    children: Object(o.jsx)(a.a.div, {
                      className: 'slide-image '.concat(y[t]),
                      style: Object(r.a)(
                        Object(r.a)({}, p[t]),
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
      var s = document.querySelectorAll('[data-slider-images]')
      Array.from(s).forEach(function (e) {
        var t,
          n,
          r,
          c,
          l = e.getAttribute('data-slider-images'),
          a =
            null === (t = document.querySelectorAll('[data-slider-button-prev="'.concat(l, '"]'))) || void 0 === t
              ? void 0
              : t[0],
          s =
            null === (n = document.querySelectorAll('[data-slider-button-next="'.concat(l, '"]'))) || void 0 === n
              ? void 0
              : n[0],
          d =
            null === (r = document.querySelectorAll('[data-slider-current-index="'.concat(l, '"]'))) || void 0 === r
              ? void 0
              : r[0],
          f =
            null === (c = document.querySelectorAll('[data-slider-last-index="'.concat(l, '"]'))) || void 0 === c
              ? void 0
              : c[0]
        Object(i.render)(Object(o.jsx)(u, { id: l, buttonPrev: a, buttonNext: s, currentIndex: d, lastIndex: f }), e)
      })
    }
  },
  [[10, 1, 2]]
])
//# sourceMappingURL=main.00315e0b.chunk.js.map
