import React, { useState, useCallback, useEffect, useMemo, useRef } from "react";
import Slider from "./MultiSlider";
import { config } from "react-spring";
import { useSpring, animated } from "react-spring";

const trans = (x, y) => `translate3d(${x}px,${y}px,0) `

const springOptions = {
  normal: config.default,
  ...config,
  default: undefined
};

export default function MultiSlider({ cursor,domEl, buttonPrev, buttonNext, currentIndex, lastIndex }) {
  const domContent = domEl
  const [imagesTags, realLength] = useMemo(() => {
    const array = Array.from(domContent.querySelectorAll('[data-slider-image]'))
    return [new Array(20).fill(array).flatMap(x => x), array.length]
  },[domContent])

  const [index, setIndex] = useState(10 * realLength)
  
  const draggedScale = 1.2
  const trailingDelay = 1
  const draggedSpring = {
    tension: 300,
    friction: 20
  }
  const trailingSpring = "stiff"
  const releaseSpring = "stiff"
  const [loaded, setLoaded] = useState({})

  const handleClick = useCallback((i) => {
    if (i !== index) {
      setIndex(i);
    }
  },[index, setIndex])

  const itemsStyle = useMemo(() => imagesTags.map((x) => {
    let obj = {}
    for (let i=0; i < x.style.length; i++ ) {
      const rule = x.style[i]
      obj[rule] = x.style[rule]
    }
    return obj
  }),[imagesTags])

  const domContentStyle = useMemo(() => {
      let obj = {}
      for (let i=0; i < domContent.style.length; i++ ) {
        const rule = domContent.style[i]
        obj[rule] = domContent.style[rule]
      }
      return obj
  },[domContent])

  useEffect(() => {
    if (!loaded[index] || !loaded[index+1] || !loaded[index+2]) {
      setLoaded(s => {
          return { [index]: true, [index+1]: true, [index+2]: true, ...s }
      })
    }
    if (currentIndex) {
      const curr = ((index + 1) % realLength) === 0 ? realLength : (index + 1) % realLength
      currentIndex.innerHTML = curr > 9 ? `${curr}` : `0${curr}`
    }
  }, [loaded, setLoaded, index, currentIndex, realLength])

  useEffect(() => {
    const callback = () => setIndex(s => {
      const curr = s - 1
      if(curr < 0) {
        return imagesTags.length - 1
      }
      return curr
    })
    if (buttonPrev) {
      buttonPrev.addEventListener("click", callback)
      return () => buttonPrev.removeEventListener("click", callback)
    }
  }, [buttonPrev, setIndex])

  useEffect(() => {
    const callback = () => setIndex(s => s + 1)
    if (buttonNext) {
      buttonNext.addEventListener("click", callback)
      return () => buttonNext.removeEventListener("click", callback)
    }
  }, [buttonNext, setIndex])

  useEffect(() => {
    if (lastIndex) {
      lastIndex.innerHTML = realLength > 9 ? `${realLength}` : `0${realLength}`
    }
  }, [lastIndex, realLength])

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
  }, [x,y,setX, setY, father.current])

  const [cursorOuterHtml] = useState(cursor?.outerHTML || null)

  useEffect(() => {
    domContent.style.display = 'none'
    if (cursor) {
      cursor.style.display = 'none'
    }
  }, [domContent, cursor])

  useEffect(() => {
    setInterval(onScroll, 100)
  }, [onScroll])

  const cursorRef = useRef()
  const onPointerOver = useCallback((isOver) => {
    if (cursorRef.current) {
      const child = cursorRef.current.getElementsByClassName("cursor")[0];
      if (isOver) {
        child.classList.add("cursor-show")
      } else {
        child.classList.remove("cursor-show")
        child.classList.remove("cursor-active")
      }
    }
  }, [cursorRef])

  const onPointerClick = useCallback((isClicking) => {
    if (cursorRef.current) {
      const child = cursorRef.current.getElementsByClassName("cursor")[0];
      if (isClicking) {
        child.classList.add("cursor-active")
      } else {
        child.classList.remove("cursor-active")
      }
    }
  }, [cursorRef])

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      ref={father}
      onPointerEnter={() => onPointerOver(true)}
      onPointerLeave={() => onPointerOver(false)}
      onPointerDown={() => onPointerClick(true)}
      onPointerUp={() => onPointerClick(false)}
      onMouseMove={(e) => setCursor({ xy: [e.clientX - x, e.clientY - y] })}
    >
      {cursorOuterHtml && <animated.div
        ref={cursorRef}
        dangerouslySetInnerHTML={{ __html: cursorOuterHtml }}
        style={{
          pointerEvents: 'none',
          zIndex: 999,
          position: 'absolute',
          willChange: 'transform',
          transform: cursorSpring.xy.to(trans)
        }}>
      </animated.div>}
      <Slider
        index={index}
        realLength={realLength}
        className={domContent.className}
        style={{...domContentStyle, width: "10vw", margin: "auto"}}
        slideStyle={(i) => itemsStyle[i]}
        loaded={loaded}
        // slideClassName="multiple-slider-image"
        onIndexChange={setIndex}
        trailingDelay={trailingDelay}
        draggedScale={draggedScale}
        draggedSpring={springOptions[draggedSpring]}
        trailingSpring={springOptions[trailingSpring]}
        releaseSpring={springOptions[releaseSpring]}
      >
        {imagesTags.map((el, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            dangerouslySetInnerHTML={{ __html: el.outerHTML }}
          />
        ))}
      </Slider>
    </div>
  );
}