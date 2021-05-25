import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import Slider from './MultiSlider'
import { useSpring, animated } from 'react-spring'
import { formatStringToCamelCase } from './utils'

const trans = (x, y) => `translate3d(${x}px,${y}px,0) `

export default function MultiSlider({
  margin,
  marginMobile,
  noInfinite,
  noDrag,
  centered,
  showAlts,
  cursor,
  domEl,
  buttonPrev,
  noInnerScale,
  buttonNext,
  currentIndex,
  mass = 1,
  tension = 70,
  friction = 26,
  lastIndex
}) {
  const isMobile = window.innerWidth <= 991
  const domContent = domEl
  const config = useMemo(
    () => ({
      mass,
      tension,
      friction
    }),
    [mass, tension, friction]
  )
  const [[imagesTags, realLength, domItemsLength]] = useState(() => {
    const array = Array.from(domContent.querySelectorAll('[data-slider-image]'))
    const realLength = array.length
    if (noInfinite && !centered) {
      if (window.innerWidth > 479) {
        if (array[0]) {
          array.push(array[0])
        }
        if (array[1]) {
          array.push(array[1])
        }
        if (array[2]) {
          array.push(array[2])
        }
        if (array[3]) {
          array.push(array[3])
        }
      }
      return [array, array.length, realLength]
    }
    return [[...array, ...array, ...array], 3 * array.length, realLength]
  })

  const [index, setIndex] = useState(noInfinite ? 0 : domItemsLength + 1)
  const [style, setStyle] = useState()

  const draggedScale = 0.05
  const trailingDelay = 0
  const [loaded, setLoaded] = useState({})

  useEffect(() => {
    if (!noInfinite) {
      setTimeout(() => setIndex(domItemsLength), 500)
    }
  }, [setIndex, noInfinite, domItemsLength])

  const handleClick = useCallback(
    (i) => {
      if (i !== index) {
        setIndex(i)
      }
    },
    [index, setIndex]
  )

  const _margin = useMemo(() => (isMobile ? marginMobile : margin), [margin, marginMobile, isMobile])

  const itemsStyle = useMemo(
    () =>
      imagesTags.map((x) => {
        let obj = {}
        for (let i = 0; i < x.style.length; i++) {
          const rule = x.style[i]
          obj[formatStringToCamelCase(rule)] = x.style[rule]
        }
        return obj
      }),
    [imagesTags]
  )

  const descs = useMemo(
    () =>
      showAlts
        ? imagesTags.map((item) => {
            const imgs = item.getElementsByTagName('img')
            if (imgs && imgs[0]) {
              return imgs[0].getAttribute('alt')
            }
            return null
          })
        : [],
    [showAlts, imagesTags]
  )

  useEffect(() => {
    setStyle({
      width: `10vw`
      // margin: `0 0 0 ${(window.innerWidth * (isMobile ? marginMobile : margin)) / 100}px`
    })
    domContent.style.display = 'none'
    domContent.innerHTML = ''
  }, [imagesTags, isMobile, noDrag, setStyle, domContent, marginMobile, margin])

  useEffect(() => {
    if (currentIndex) {
      const curr = (index + 1) % domItemsLength === 0 ? domItemsLength : (index + 1) % domItemsLength
      currentIndex.innerHTML = curr > 9 ? `${curr}` : `0${curr}`
    }
  }, [loaded, setLoaded, index, currentIndex, domItemsLength])

  useEffect(() => {
    const callback = (e) => {
      e.stopPropagation()
      e.preventDefault()
      if ((noInfinite && index > 0) || !noInfinite) {
        setIndex((s) => {
          const curr = s - 1
          if (curr < 0) {
            return 0
          }
          return curr
        })
      }
    }
    if (buttonPrev) {
      buttonPrev.addEventListener('click', callback)
      return () => buttonPrev.removeEventListener('click', callback)
    }
  }, [buttonPrev, setIndex, domItemsLength, noInfinite, index])

  useEffect(() => {
    const callback = (e) => {
      e.stopPropagation()
      e.preventDefault()
      if ((noInfinite && index < domItemsLength - 1) || !noInfinite) {
        setIndex((s) => {
          const next = s + 1
          if (next >= realLength) {
            return s
          }
          return next
        })
      }
    }
    if (buttonNext) {
      buttonNext.addEventListener('click', callback)
      return () => buttonNext.removeEventListener('click', callback)
    }
  }, [buttonNext, domItemsLength, index, noInfinite, realLength, setIndex])

  useEffect(() => {
    if (noInfinite) {
      if (buttonPrev) {
        if (index === 0) {
          buttonPrev.classList.add('disabled')
        } else {
          buttonPrev.classList.remove('disabled')
        }
      }
      if (buttonNext) {
        if (index === domItemsLength - 1) {
          buttonNext.classList.add('disabled')
        } else {
          buttonNext.classList.remove('disabled')
        }
      }
    }
  }, [noInfinite, index, buttonPrev, buttonNext, domItemsLength])

  useEffect(() => {
    if (lastIndex) {
      lastIndex.innerHTML = domItemsLength > 9 ? `${domItemsLength}` : `0${domItemsLength}`
    }
  }, [lastIndex, domItemsLength])

  const father = useRef()
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [cursorSpring, setCursor] = useSpring(() => ({
    xy: [0, 0]
  }))
  const onScroll = useCallback(() => {
    const { x: domX, y: domY } = father.current.getBoundingClientRect()
    if (x !== domX) {
      setX(domX)
    }
    if (y !== domY) {
      setY(domY)
    }
  }, [x, y, setX, setY])

  const [cursorOuterHtml, setCursorOuterHtml] = useState()

  useEffect(() => {
    if (cursor && !cursorOuterHtml) {
      const outerHTML = cursor.outerHTML.slice()
      setCursorOuterHtml(outerHTML)
      cursor.outerHTML = ''
    }
  }, [cursor, cursorOuterHtml, setCursorOuterHtml])

  useEffect(() => {
    setInterval(onScroll, 100)
  }, [onScroll])

  const cursorRef = useRef()
  const onPointerOver = useCallback(
    (isOver) => {
      if (cursorRef.current) {
        const child = cursorRef.current.getElementsByClassName('cursor')[0]
        if (isOver) {
          child.classList.add('cursor-show')
        } else {
          child.classList.remove('cursor-show')
          child.classList.remove('cursor-active')
        }
      }
    },
    [cursorRef]
  )

  const onPointerClick = useCallback(
    (isClicking) => {
      if (cursorRef.current) {
        const child = cursorRef.current.getElementsByClassName('cursor')[0]
        if (isClicking) {
          child.classList.add('cursor-active')
        } else {
          child.classList.remove('cursor-active')
        }
      }
    },
    [cursorRef]
  )

  return (
    <div
      style={{ position: 'relative', overflowX: 'hidden' }}
      ref={father}
      onPointerEnter={() => !noDrag && onPointerOver(true)}
      onPointerLeave={() => !noDrag && onPointerOver(false)}
      onPointerDown={() => !noDrag && onPointerClick(true)}
      onPointerUp={() => !noDrag && onPointerClick(false)}
      onMouseMove={(e) => !noDrag && setCursor({ xy: [e.clientX - x, e.clientY - y] })}>
      {cursorOuterHtml && !noDrag && (
        <animated.div
          ref={cursorRef}
          dangerouslySetInnerHTML={{ __html: cursorOuterHtml }}
          style={{
            pointerEvents: 'none',
            zIndex: 999,
            position: 'absolute',
            willChange: 'transform',
            transform: cursorSpring.xy.to(trans)
          }}></animated.div>
      )}
      {style && (
        <Slider
          index={index}
          noDrag={noDrag}
          draggedSpring={config}
          trailingSpring={config}
          releaseSpring={config}
          centered={centered}
          noInfinite={noInfinite}
          noInnerScale={noInnerScale}
          descs={descs}
          margin={_margin}
          realLength={realLength}
          domItemsLength={domItemsLength}
          className={domContent.className}
          style={style}
          slideStyle={(i) => itemsStyle[i]}
          loaded={loaded}
          // slideClassName="multiple-slider-image"
          onIndexChange={setIndex}
          trailingDelay={trailingDelay}
          draggedScale={draggedScale}>
          {imagesTags.map((el, i) => (
            <div
              style={{
                pointerEvents: noDrag ? 'auto' : 'none',
                opacity: i >= domItemsLength && window.innerWidth < 479 && noInfinite && !centered ? 0 : 1
              }}
              key={i}
              onClick={() => handleClick(i)}
              dangerouslySetInnerHTML={{ __html: el.outerHTML }}
            />
          ))}
        </Slider>
      )}
    </div>
  )
}
