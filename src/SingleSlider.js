import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSprings, animated, config } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { formatStringToCamelCase } from './utils'

export default function SingleSlider({ switchInterval, id, descEl, domEl, buttonPrev, buttonNext, currentIndex, lastIndex, visible = 1 }) {
  const father = useRef()
  const [width, setWidth] = useState(window.innerWidth)
  const [active, setActive] = useState(1)
  const [loaded, setLoaded] = useState({})

  const domContent = domEl

  const [{ items, classes, desc, content, links }] = useState(() => {
    const imagesTags = Array.from(domContent.querySelectorAll('[data-slider-image]'))
    const links = Array.from(domContent.getElementsByTagName('a')).map(x => x.attributes)
    const items = imagesTags.map((x) => {
      let obj = {}
      for (let i = 0; i < x.style.length; i++) {
        const rule = x.style[i]
        obj[formatStringToCamelCase(rule)] = x.style[rule]
      }
      const src = x.getAttribute('src')
      if (src) {
        obj['backgroundImage'] = `url(${src})`
      }
      return obj
    })
    const classes = imagesTags.map((x) => x.className)
    const desc = imagesTags.map((el) => el.getAttribute('alt'))
    const content = Array.from(domContent.querySelectorAll('[data-slider-image-content]'))
    domContent.style.display = 'none'
    domContent.innerHTML = ""
    return { items, classes, desc, content, links }
  })

  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [items])
  const getPos = useCallback((i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx), [idx])
  // Important only if specifyng width, centers the element in the slider
  const offset = 0
  const [springs, set] = useSprings(items.length, (i) => ({
    x: (i < items.length - 1 ? i : -1) * width + offset, 
    config: config.molasses
  }))
  const prev = useRef([0, 1])
  const index = useRef(0)
  const isDragging = useRef(false)
  const runSprings = useCallback(
    (y, vy, down, xDir, cancel, xMove, distance, fromButton) => {
      // This decides if we move over to the next slide or back to the initial
      if (!fromButton) {
        isDragging.current = true
        if (down && (distance > width / 2 || Math.abs(vy) > 1)) {
          cancel((index.current = index.current + (xDir > 0 ? -1 : 1)))
        }
      } else {
        isDragging.current = false
      }
      console.log(isDragging.current)

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
        let rank =
          firstVis -
          (finalY < 0 ? items.length : 0) +
          position -
          firstVisIdx +
          (finalY < 0 && firstVis === 0 ? items.length : 0)
        return {
          // x is the position of each of our slides
          x: (-finalY % (width * items.length)) + width * rank + (down ? xMove : 0) + offset,
          // this defines if the movement is immediate
          // So when an item is moved from one end to the other we don't
          // see it moving
          immediate: vy < 0 ? prevPosition > position : prevPosition < position,
          config: config.molasses
        }
      })
      prev.current = [firstVis, firstVisIdx]
    },
    [idx, getPos, width, visible, set, items.length]
  )

  const bind = useGesture({
    onDrag: ({ event, offset: [x], vxvy: [vx], down, direction: [xDir], cancel, distance, movement: [xMove] }) => {
      vx && runSprings(-x, -vx, down, xDir, cancel, xMove, distance)
    }
  }, 
  { delay: 90 })

  useEffect(() => {
    const linkEl = document.getElementById(`slider-link-${id}`)
    let element = father.current 
    if (!linkEl && links && links.length > 0 && element) {
      let parent = element.parentNode;
      while (descEl && !parent.contains(descEl)) {
        element = parent 
        parent = parent.parentNode;
      }
      element = parent 
      parent = parent.parentNode;
      const wrapper = document.createElement('a');
      wrapper.addEventListener("click", e => {
          e.preventDefault()
          setTimeout(() => {
            if (!isDragging.current) {
              dispatchEvent(e)
            }
          }, 100)
      })
      wrapper.id = `slider-link-${id}`
      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element);
    }
  }, [id, links, descEl])

  useEffect(() => {
    const linkEl = document.getElementById(`slider-link-${id}`)
    const attributes = links[active - 1]
    if (linkEl && attributes) {
      Array.from(attributes).forEach(({name, value}) => linkEl.setAttribute(name, value))
    }
  }, [active, id, links])

  useEffect(() => {
    if (!loaded[active - 1]) {
      setLoaded((s) => {
        return { [active - 1]: true, ...s }
      })
    }
    if (currentIndex) {
      currentIndex.innerHTML = active > 9 ? active : `0${active}`
    }
  }, [active, currentIndex, loaded])

  useEffect(() => {
    if (descEl) {
      if (desc[active - 1]) {
        descEl.innerHTML = desc[active - 1] || ''
      }
      if (content[active - 1]) {
        descEl.innerHTML = ''
        descEl.append(content[active - 1])
      }
    }
  }, [loaded, content, setLoaded, active, descEl, desc])

  useEffect(() => {
    const callback = (e) => {
      e.stopPropagation()
      e.preventDefault()
      index.current += -1
      runSprings(0, -1, true, -0, () => {}, -0, 0, true)
    }
    if (buttonPrev) {
      buttonPrev.addEventListener('click', callback)
      return () => buttonPrev.removeEventListener('click', callback)
    }
  }, [buttonPrev, runSprings])

  useEffect(() => {
    const callback = (e) => {
      e.stopPropagation()
      e.preventDefault()
      index.current += 1
      runSprings(0, 1, true, -0, () => {}, -0, 0, true)
    }
    if (buttonNext) {
      buttonNext.addEventListener('click', callback)
      return () => buttonNext.removeEventListener('click', callback)
    }
  }, [buttonNext, runSprings])

  useEffect(() => {
    const { width } = father.current.getBoundingClientRect()
    setWidth(width)
  }, [setWidth])

  useEffect(() => {
    if (lastIndex) {
      lastIndex.innerHTML = items.length > 9 ? items.length : `0${items.length}`
    }
  }, [lastIndex, items])

  useEffect(() => {
    if (switchInterval && switchInterval > 0) {
      const callback = () => {
        index.current += 1
        runSprings(0, 1, true, -0, () => {}, -0)
      }
      const idInterval = setInterval(callback, switchInterval)
      return () => clearInterval(idInterval)
    }
  }, [switchInterval, runSprings])

  return (
    <div
      ref={father}
      className={domContent.className}
      {...bind()}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
      {springs.map(({ x, display, zIndex }, i) => (
        <animated.div
          key={i}
          className={domContent.className}
          style={{
            position: 'absolute',
            willChange: 'transform',
            zIndex,
            display,
            overflow: 'hidden',
            transform: x.to((x) => `translate3d(${x}px,0,0)`)
          }}>
          <animated.div
            style={{
              width: '100%',
              height: '100%',
              willChange: 'transform',
              overflow: 'hidden'
            }}>
            {loaded[i] && (
              <animated.div
                className={`${classes[i]}`}
                style={{
                  ...items[i],
                  pointerEvents: 'none',
                  willChange: 'transform',
                  overflow: 'hidden',
                  transform: x.to((x) => `translate3d(${x / 4}px,0,0)`)
                }}
              />
            )}
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}
