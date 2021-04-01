import { render } from 'react-dom'
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated, config, useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture'
// import { Lethargy } from 'lethargy'

// const lethargy = new Lethargy()
const trans = (x, y) => `translate3d(${x}px,${y}px,0) `

function Viewpager({ id, buttonPrev, buttonNext, currentIndex, lastIndex }) {
  const realIndex = useRef(0)
  const index = useRef(0)
  const father = useRef()
  const [width, setWidth] = useState(window.innerWidth)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const domContent = document.getElementById(id)
  const imagesTags = Array.from(domContent.querySelectorAll('[data-slider-image]'))
  const pages = imagesTags.map((x) => {
    let obj = {}
    for (let i=0; i < x.style.length; i++ ) {
      const rule = x.style[i]
      obj[rule] = x.style[rule]
    }
    return obj
  }).filter (x => x)

  const [props, set] = useSprings(pages.length, (i) => ({
    x: i * width,
    sc: 1,
    display: 'block',
    config: config.gentle
  }))

  const setIndex = useCallback((s) => {
    realIndex.current = realIndex.current - s
    index.current = ((realIndex.current <= 0 ? index.current + pages.length : index.current) - s) % pages.length
    if (currentIndex) {
      currentIndex.innerHTML = index.current + 1
    }
    set((i) => {
      if (i < index.current - 1 || i > index.current + 1) {
        const x = ((i - realIndex.current) % pages.length) * width
        return { x, sc: 1, display: 'none', zIndex: 1 }
      }
      const x = ((i - realIndex.current) % pages.length) * width
      return { x, sc: 1, display: 'block', zIndex: 1 }
    })
  }, [set, width, currentIndex])

  const handleDrag = useCallback(
    (down, xDelta, xDir, distance, cancel) => {
      if (down && distance > width / 2) {
        cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
      }
      if (currentIndex) {
        currentIndex.innerHTML = index.current + 1
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
    [pages, set, width, currentIndex]
  )

  // const handleWheel = useCallback(
  //   (event, last, wait = false) => {
  //     event.preventDefault();
  //     event.stopPropagation()
  //     if (!last) {
  //       const s = lethargy.check(event)
  //       if (s) {
  //         if (!wait) {
  //           setIndex(s)
  //           return true
  //         }
  //       } else return false
  //     } else {
  //       return false
  //     }
  //   },
  //   [pages, set, width, setIndex]
  // )

  const bind = useGesture({
    onDrag: ({ down, direction: [xDir], distance, cancel }) =>
      handleDrag(down, Math.sign(xDir) * distance, xDir, distance, cancel),
    //onWheel: ({ event, last, memo }) => handleWheel(event, last, memo)
  })

  const [cursor, setCursor] = useSpring(() => ({
    xy: [0, 0]
  }))

  useEffect(() => {
    const callback = () => setIndex(1)
    if (buttonPrev) {
      buttonPrev.addEventListener("click", callback)
      return () => buttonPrev.removeEventListener("click", callback)
    }
  }, [buttonPrev, setIndex])

  useEffect(() => {
    const callback = () => setIndex(-1)
    if (buttonNext) {
      buttonNext.addEventListener("click", callback)
      return () => buttonNext.removeEventListener("click", callback)
    }
  }, [buttonNext, setIndex])

  useLayoutEffect(() => {
    domContent.style.display = 'none'
    const { x: domX, y: domY, width } = father.current.getBoundingClientRect()
    setWidth(width)
    setX(domX)
    setY(domY)
  }, [setWidth, domContent, setX, setY])

  useLayoutEffect(() => {
    if (lastIndex) {
      lastIndex.innerHTML = pages.length || ""
    }
  }, [lastIndex, pages])

  useLayoutEffect(() => {
    if (currentIndex) {
      currentIndex.innerHTML = pages.length > 0 ? 1 : 0
    }
  }, [currentIndex, pages])

  return (
    <div
      ref={father}
      className="slide-wrapper-relative"
      style={{
        position: 'relative',
        overflow: 'hidden',
        // cursor: 'pointer'
      }}
      // onMouseMove={(e) => setCursor({ xy: [e.clientX - x, e.clientY - y] })}
      >
      {/* <animated.div
        style={{
          pointerEvents: 'none',
          zIndex: 999,
          position: 'absolute',
          willChange: 'transform',
          transform: cursor.xy.interpolate(trans)
        }}>
        <div className="slider-cursor" />
      </animated.div> */}
      {props.map(({ x, display, sc, zIndex }, i) => (
        <animated.div
          className="slide-wrapper-absolute"
          //{...bind()}
          key={i}
          style={{
            position: 'absolute',
            willChange: 'transform',
            zIndex,
            display,
            overflow: "hidden",
            transform: x.interpolate((x) => `translate3d(${x}px,0,0)`)
          }}>
          <animated.div
            style={{
              width: '100%',
              height: '100%',
              willChange: 'transform',
              overflow: "hidden",
              transform: sc.interpolate((s) => `scale(${s})`)
            }}>
            <animated.div
              className="slide-image"
              style={{
                ...pages[i],
                pointerEvents: 'none',
                willChange: 'transform',
                overflow: "hidden",
                transform: x.interpolate((x) => `translate3d(${x / 4}px,0,0)`)
              }}
            />
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

const nodeElements = document.querySelectorAll('[data-slider-images]')
Array.from(nodeElements).forEach((el) => {
  const id = el.getAttribute('data-slider-images')
  const buttonPrev = document.querySelectorAll(`[data-slider-button-prev="${id}"]`)?.[0]
  const buttonNext = document.querySelectorAll(`[data-slider-button-next="${id}"]`)?.[0]
  const currentIndex = document.querySelectorAll(`[data-slider-current-index="${id}"]`)?.[0]
  const lastIndex = document.querySelectorAll(`[data-slider-last-index="${id}"]`)?.[0]
  render(<Viewpager id={id} buttonPrev={buttonPrev} buttonNext={buttonNext} currentIndex={currentIndex} lastIndex={lastIndex}/>, el)
})
