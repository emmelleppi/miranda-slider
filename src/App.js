import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useSpring, animated } from "@react-spring/web";

const trans = (x, y) => `translate3d(${x}px,${y}px,0) `;

export default (props) => {
  const {
    id,
    multiple,
    spacing,
    buttonPrev,
    buttonNext,
    currentIndex,
    lastIndex,
    descEl
  } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const domContent = document.getElementById(id);
  const { items, classes, desc, content } = React.useMemo(() => {
    const imagesTags = Array.from(
      domContent.querySelectorAll("[data-slider-image]")
    );
    const items = imagesTags.map((x) => {
      let obj = {};
      for (let i = 0; i < x.style.length; i++) {
        const rule = x.style[i];
        obj[rule] = x.style[rule];
      }
      return obj;
    });
    const classes = imagesTags.map((x) => x.className);
    const desc = imagesTags.map((x) =>
      x.getAttribute("data-slider-image-desc")
    );
    const content = imagesTags.map((x) => {
      const val = x.getAttribute("data-slider-image");
      const els = domContent.querySelectorAll(`[data-slider-content="${val}"]`);
      if (els[0]) {
        return els[0].cloneNode(true).outerHTML;
      }
      return null;
    });
    return { items, classes, desc, content };
  }, [domContent]);
  const [loaded, setLoaded] = React.useState(() =>
    new Array(items.length).fill(false)
  );

  const [sliderRef, slider] = useKeenSlider({
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    slideChanged(s) {
      const next = s.details().relativeSlide;
      if (currentIndex) {
        currentIndex.innerHTML = next + 1 > 9 ? next + 1 : `0${next + 1}`;
      }
      if (descEl && !multiple) {
        descEl.innerHTML = desc[next] || "";
      }
    },
    move: (s) => {
      //const details = s.details();
    },
    loop: true,
    initial: 0,
    slidesPerView: multiple || 1,
    mode: multiple ? "snap" : "",
    spacing: multiple ? spacing : 0,
    centered: true,
    controls: multiple
  });

  React.useEffect(() => {
    const callback = () => slider.prev();
    if (buttonPrev) {
      buttonPrev.addEventListener("click", callback);
      return () => buttonPrev.removeEventListener("click", callback);
    }
  }, [buttonPrev, slider]);

  React.useEffect(() => {
    const callback = () => slider.next();
    if (buttonNext) {
      buttonNext.addEventListener("click", callback);
      return () => buttonNext.removeEventListener("click", callback);
    }
  }, [buttonNext, slider]);

  React.useEffect(() => {
    domContent.style.display = "none";
  }, [domContent]);

  React.useEffect(() => {
    if (lastIndex) {
      lastIndex.innerHTML =
        items.length > 9 ? items.length : `0${items.length}`;
    }
  }, [lastIndex, items]);

  React.useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    if (multiple) {
      new_loaded[
        currentSlide - 1 > 0
          ? currentSlide - 1
          : ((currentSlide - 1) % items.length) + items.length
      ] = true;
      new_loaded[(currentSlide + 1) % items.length] = true;
    }
    setLoaded(new_loaded);
  }, [currentSlide, multiple, items.length]);

  const [isPointerDown, setIsPointerDown] = React.useState(false);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [cursor, setCursor] = useSpring(() => ({
    xy: [0, 0]
  }));

  React.useEffect(() => {
    const { x: domX, y: domY } = sliderRef.current.getBoundingClientRect();
    setX(domX);
    setY(domY);
  }, [setX, setY, sliderRef]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider"
      onMouseMove={(e) => setCursor({ xy: [e.clientX - x, e.clientY - y] })}
      onMouseDown={() => setIsPointerDown(true)}
      onMouseUp={() => setIsPointerDown(false)}
      onMouseLeave={() => setIsPointerDown(false)}
    >
      {multiple && (
        <animated.div
          style={{
            pointerEvents: "none",
            zIndex: 999,
            position: "absolute",
            willChange: "transform",
            transform: cursor.xy.interpolate(trans)
          }}
        >
          <div
            className={`slider-cursor ${
              isPointerDown ? "slider-cursor-active" : ""
            }`}
          />
        </animated.div>
      )}
      {items.map((src, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexFlow: "cols nowrap"
          }}
          className={`keen-slider__slide ${domContent.className}`}
        >
          <div
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              willChange: "transform",
              display: "flex",
              flexFlow: "column"
            }}
          >
            <div
              className={classes[idx]}
              style={{
                ...(loaded[idx] ? src : {}),
                width: "100%",
                height: "100%"
              }}
            />
            {multiple && content[idx] && (
              <div dangerouslySetInnerHTML={{ __html: content[idx] }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
