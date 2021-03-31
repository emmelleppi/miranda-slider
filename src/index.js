import { render } from 'react-dom'
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated, config, useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { Lethargy } from 'lethargy'
import './styles.css'

const lethargy = new Lethargy()
const trans = (x, y) => `translate3d(${x}px,${y}px,0) `

function Viewpager({ id }) {
  const index = useRef(0)
  const father = useRef()
  const [width, setWidth] = useState(window.innerWidth)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const domContent = document.getElementById(id)
  const imagesTags = Array.from(domContent.children)
  const pages = imagesTags.map((x) => x.src)

  useLayoutEffect(() => {
    domContent.style.display = 'none'
    const { x: domX, y: domY, width } = father.current.getBoundingClientRect()
    setWidth(width)
    setX(domX)
    setY(domY)
  }, [setWidth, domContent, setX, setY])

  const [props, set] = useSprings(pages.length, (i) => ({
    x: i * width,
    sc: 1,
    display: 'block',
    config: config.gentle
  }))

  const handleDrag = useCallback(
    (down, xDelta, xDir, distance, cancel) => {
      console.log(down, xDelta)
      if (down && distance > width / 2) {
        cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
      }
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1) {
          return { display: 'none' }
        }
        const x = (i - index.current) * width + (down ? xDelta : 0)
        const sc = down && index.current === i ? 1.2 : 1
        return { x, sc, display: 'block', zIndex: down && index.current === i ? 100 : 1 }
      })
    },
    [pages, set, width]
  )
  const handleWheel = useCallback(
    (event, last, wait = false) => {
      if (!last) {
        const s = lethargy.check(event)
        if (s) {
          if (!wait) {
            index.current = clamp(index.current - s, 0, pages.length - 1)
            set((i) => {
              if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
              const x = (i - index.current) * width
              const sc = 1
              return { x, sc, display: 'block', zIndex: 1 }
            })
            return true
          }
        } else return false
      } else {
        return false
      }
    },
    [pages, set, width]
  )

  const bind = useGesture({
    onDrag: ({ down, direction: [xDir], distance, cancel }) =>
      handleDrag(down, Math.sign(xDir) * distance, xDir, distance, cancel),
    onWheel: ({ event, last, memo }) => handleWheel(event, last, memo)
  })

  const [cursor, setCursor] = useSpring(() => ({
    xy: [0, 0]
  }))

  return (
    <div
      ref={father}
      className="slide-wrapper-relative"
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'none'
      }}
      onMouseMove={(e) => setCursor({ xy: [e.clientX - x, e.clientY - y] })}>
      <animated.div
        style={{
          pointerEvents: 'none',
          zIndex: 999,
          position: 'absolute',
          willChange: 'transform',
          transform: cursor.xy.interpolate(trans)
        }}>
        <div className="slider-cursor" />
      </animated.div>
      {props.map(({ x, display, sc, zIndex }, i) => (
        <animated.div
          className="slide-wrapper-absolute"
          {...bind()}
          key={i}
          style={{
            position: 'absolute',
            willChange: 'transform',
            zIndex,
            display,
            transform: x.interpolate((x) => `translate3d(${x}px,0,0)`)
          }}>
          <animated.div
            style={{
              width: '100%',
              height: '100%',
              willChange: 'transform',
              transform: sc.interpolate((s) => `scale(${s})`)
            }}>
            <animated.img
              className="slide-image"
              src={pages[i]}
              style={{
                pointerEvents: 'none',
                willChange: 'transform',
                transform: x.interpolate((x) => `translate3d(${x / 8}px,0,0)`)
              }}
            />
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

const nodeElements = document.querySelectorAll('[data-slider-images]')
Array.from(nodeElements).forEach((el) => render(<Viewpager id={el.getAttribute('data-slider-images')} />, el))
