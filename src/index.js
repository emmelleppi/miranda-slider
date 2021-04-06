import { render } from 'react-dom'
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useSprings, animated } from 'react-spring'

function Viewpager({ id, buttonPrev, buttonNext, currentIndex, lastIndex, visible = 1 }) {
  const father = useRef()
  const [width, setWidth] = useState(window.innerWidth)

  const domContent = document.getElementById(id)
  const imagesTags = Array.from(domContent.querySelectorAll('[data-slider-image]'))
  const items = imagesTags.map((x) => {
    let obj = {}
    for (let i=0; i < x.style.length; i++ ) {
      const rule = x.style[i]
      obj[rule] = x.style[rule]
    }
    return obj
  })
  const classes = imagesTags.map((x) => x.className)
  
  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [items])
  const getPos = useCallback((i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx), [idx])
  // Important only if specifyng width, centers the element in the slider
  const offset = 0
  const [springs, set] = useSprings(items.length, (i) => ({ x: (i < items.length - 1 ? i : -1) * width + offset }))
  const prev = useRef([0, 1])
  const index = useRef(0)
  const [active, setActive] = useState(1)
  const runSprings = useCallback(
    (y, vy, down, xDir, cancel, xMove) => {
      // This decides if we move over to the next slide or back to the initial
      if (!down) {
        index.current += ((-xMove + (width + xMove)) / width) * (xDir > 0 ? -1 : 1)
        // cancel()
      }
      if (index.current + 1 > items.length) {
        setActive((index.current % items.length) + 1)
      } else if (index.current < 0) {
        setActive(items.length + ((index.current + 1) % items.length))
      } else {
        setActive(index.current + 1)
      }
      // The actual scrolling value
      const finalY = index.current * width
      // Defines currently visible slides
      const firstVis = idx(Math.floor(finalY / width) % items.length)
      const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1
      set((i) => {
        const position = getPos(i, firstVis, firstVisIdx)
        const prevPosition = getPos(i, prev.current[0], prev.current[1])
        let rank = firstVis - (finalY < 0 ? items.length : 0) + position - firstVisIdx + (finalY < 0 && firstVis === 0 ? items.length : 0)
        return {
          // x is the position of each of our slides
          x: (-finalY % (width * items.length)) + width * rank + (down ? xMove : 0) + offset,
          // this defines if the movement is immediate
          // So when an item is moved from one end to the other we don't
          // see it moving
          immediate: vy < 0 ? prevPosition > position : prevPosition < position
        }
      })
      prev.current = [firstVis, firstVisIdx]
    },
    [idx, getPos, width, visible, set, items.length]
  )

  useEffect(() => {
    if (currentIndex) {
      currentIndex.innerHTML = `0${active}`
    }
  }, [active])

  useEffect(() => {
    const callback = () => {
      index.current += -1
      runSprings(0, -1, true, -0, () => {}, -0)
    }
    if (buttonPrev) {
      buttonPrev.addEventListener("click", callback)
      return () => buttonPrev.removeEventListener("click", callback)
    }
  }, [buttonPrev, runSprings])

  useEffect(() => {
    const callback = () => {
      index.current += 1
      runSprings(0, 1, true, -0, () => {}, -0)
    }
    if (buttonNext) {
      buttonNext.addEventListener("click", callback)
      return () => buttonNext.removeEventListener("click", callback)
    }
  }, [buttonNext, runSprings])

  useLayoutEffect(() => {
    domContent.style.display = 'none'
    const { width } = father.current.getBoundingClientRect()
    setWidth(width)
  }, [setWidth, domContent])

  useLayoutEffect(() => {
    if (lastIndex) {
      lastIndex.innerHTML = `0${items.length}` || ""
    }
  }, [lastIndex, items])

  useLayoutEffect(() => {
    if (currentIndex) {
      currentIndex.innerHTML = items.length > 0 ? `01` : `00`
    }
  }, [currentIndex, items])

  return (
    <div
      ref={father}
      className="slide-wrapper-relative"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      >
      {springs.map(({ x, display, sc, zIndex }, i) => (
        <animated.div
          className="slide-wrapper-absolute"
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
            }}>
            <animated.div
              className={`slide-image ${classes[i]}`}
              style={{
                ...items[i],
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
