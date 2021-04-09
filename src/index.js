import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const nodeElements = document.querySelectorAll("[data-slider-images]");
Array.from(nodeElements).forEach((el) => {
  const id = el.getAttribute("data-slider-images");
  const multiple = el.hasAttribute("data-slider-multiple-images");
  const multipleVal = el.getAttribute("data-slider-multiple-images");
  const multipleSpacing = el.getAttribute(
    "data-slider-multiple-images-spacing"
  );

  const buttonPrev = document.querySelectorAll(
    `[data-slider-button-prev="${id}"]`
  )?.[0];
  const buttonNext = document.querySelectorAll(
    `[data-slider-button-next="${id}"]`
  )?.[0];
  const currentIndex = document.querySelectorAll(
    `[data-slider-current-index="${id}"]`
  )?.[0];
  const lastIndex = document.querySelectorAll(
    `[data-slider-last-index="${id}"]`
  )?.[0];
  const descEl = document.querySelectorAll(`[data-slider-desc="${id}"]`)?.[0];
  ReactDOM.render(
    <React.StrictMode>
      <App
        id={id}
        multiple={multiple && parseInt(multipleVal, 10)}
        spacing={multipleSpacing && parseInt(multipleSpacing, 10)}
        buttonPrev={buttonPrev}
        buttonNext={buttonNext}
        currentIndex={currentIndex}
        lastIndex={lastIndex}
        descEl={descEl}
      />
    </React.StrictMode>,
    el
  );
});
