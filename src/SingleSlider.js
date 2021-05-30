import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { formatStringToCamelCase } from './utils'

export default function SingleSlider({
  noInfinite,
  switchInterval,
  initSwitchDelay,
  id,
  descEl,
  domEl,
  buttonPrev,
  buttonNext,
  currentIndex,
  lastIndex,
  mass = 1,
  tension = 70,
  friction = 26,
  visible = 1
}) {
  const father = useRef()
  const [width, setWidth] = useState(window.innerWidth)
  const [active, setActive] = useState(1)
  const [loaded, setLoaded] = useState({})
  const config = useMemo(
    () => ({
      mass,
      tension,
      friction
    }),
    [mass, tension, friction]
  )
  const domContent = domEl

  const [{ items, classes, desc, content, links }] = useState(() => {
    const imagesTags = Array.from(domContent.querySelectorAll('[data-slider-image]'))
    const links = Array.from(domContent.getElementsByTagName('a')).map((x) => x.attributes)
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
    domContent.innerHTML = ''
    return { items, classes, desc, content, links }
  })

  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [items])
  const getPos = useCallback((i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx), [idx])
  // Important only if specifyng width, centers the element in the slider
  const offset = 0
  const [springs, set] = useSprings(items.length, (i) => ({
    x: (i < items.length - 1 ? i : -1) * width + offset,
    config
  }))
  const prev = useRef([0, 1])
  const index = useRef(0)

  const runSprings = useCallback(
    (y, vy, down, xDir, cancel, xMove, distance, fromButton) => {
      // This decides if we move over to the next slide or back to the initial
      if (!fromButton) {
        if (down && (distance > width / 2 || Math.abs(vy) > 1)) {
          if (!noInfinite || (noInfinite && ((active > 1 && xDir > 0) || (active < items.length && xDir < 0)))) {
            cancel((index.current = index.current + (xDir > 0 ? -1 : 1)))
          } else {
            cancel()
          }
        }
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
          config
        }
      })
      prev.current = [firstVis, firstVisIdx]
    },
    [noInfinite, active, items.length, width, idx, visible, set, getPos, config]
  )

  const bind = useGesture(
    {
      onDrag: ({ offset: [x], vxvy: [vx], down, direction: [xDir], cancel, distance, movement: [xMove], tap }) => {
        if (tap) {
          const linkEl = document.getElementById(`slider-link-${id}`)
          if (linkEl.href && linkEl.href.length > 0) {
            window.location.href = linkEl.href
          }
        }
        if (vx) {
          runSprings(-x, -vx, down, xDir, cancel, xMove, distance)
        }
      }
    },
    { filterTaps: true }
  )

  useEffect(() => {
    const linkEl = document.getElementById(`slider-link-${id}`)
    let element = father.current
    if (!linkEl && links && links.length > 0 && element) {
      let parent = element.parentNode
      while (descEl && !parent.contains(descEl)) {
        element = parent
        parent = parent.parentNode
      }
      element = parent
      parent = parent.parentNode
      const wrapper = document.createElement('a')
      wrapper.id = `slider-link-${id}`
      parent.replaceChild(wrapper, element)
      wrapper.appendChild(element)
    }
  }, [id, links, descEl])

  useEffect(() => {
    const linkEl = document.getElementById(`slider-link-${id}`)
    if (linkEl) {
      const callback = (e) => e.preventDefault()
      linkEl.addEventListener('click', callback)
      return () => linkEl.removeEventListener('click', callback)
    }
  }, [id])

  useEffect(() => {
    const linkEl = document.getElementById(`slider-link-${id}`)
    const attributes = links[active - 1]
    if (linkEl && attributes) {
      Array.from(attributes).forEach(({ name, value }) => linkEl.setAttribute(name, value))
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
    if (noInfinite) {
      if (buttonPrev) {
        if (active === 1) {
          buttonPrev.classList.add('disabled')
        } else {
          buttonPrev.classList.remove('disabled')
        }
      }
      if (buttonNext) {
        if (active === items.length) {
          buttonNext.classList.add('disabled')
        } else {
          buttonNext.classList.remove('disabled')
        }
      }
    }
  }, [noInfinite, active, buttonPrev, buttonNext, items.length])

  useEffect(() => {
    if (buttonPrev) {
      const callback = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if ((noInfinite && active > 1) || !noInfinite) {
          index.current += -1
          runSprings(0, -1, true, -0, () => {}, -0, 0, true)
        }
      }
      buttonPrev.addEventListener('click', callback)
      return () => buttonPrev.removeEventListener('click', callback)
    }
  }, [noInfinite, active, buttonPrev, runSprings])

  useEffect(() => {
    if (buttonNext) {
      const callback = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (!noInfinite || (active < items.length && noInfinite)) {
          index.current += 1
          runSprings(0, 1, true, -0, () => {}, -0, 0, true)
        }
      }
      buttonNext.addEventListener('click', callback)
      return () => buttonNext.removeEventListener('click', callback)
    }
  }, [noInfinite, active, buttonNext, runSprings, items.length])

  useEffect(() => {
    const { width } = father.current.getBoundingClientRect()
    setWidth(width)
  }, [setWidth])

  useEffect(() => {
    if (lastIndex) {
      lastIndex.innerHTML = items.length > 9 ? items.length : `0${items.length}`
    }
  }, [lastIndex, items])

  const [started, setStarted] = useState(false)
  useEffect(() => {
    if (started && switchInterval && switchInterval > 0) {
      const callback = () => {
        index.current += 1
        runSprings(0, 1, true, -0, () => {}, -0)
      }
      const idInterval = setInterval(callback, switchInterval)
      return () => clearInterval(idInterval)
    }
  }, [switchInterval, runSprings, started])
  useEffect(() => {
    if (initSwitchDelay) {
      setTimeout(() => setStarted(true), initSwitchDelay)
    } else {
      setStarted(true)
    }
  }, [setStarted, initSwitchDelay])

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
                  pointerEvents: 'none'
                }}
              />
            )}
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}
