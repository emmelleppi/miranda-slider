import { render } from 'react-dom'
import SingleSlider from "./SingleSlider"
import MultiSlider from "./multiple-slider"

const nodeElements = document.querySelectorAll('[data-slider-id]')
Array.from(nodeElements).forEach((el) => {
  const id = el.getAttribute('data-slider-id')
  const sliderWrapper = document.createElement("div");
  el.after(sliderWrapper)
  const descEl = document.querySelectorAll(`[data-slider-desc="${id}"]`)?.[0]
  const buttonPrev = document.querySelectorAll(`[data-slider-button-prev="${id}"]`)?.[0]
  const buttonNext = document.querySelectorAll(`[data-slider-button-next="${id}"]`)?.[0]
  const currentIndex = document.querySelectorAll(`[data-slider-current-index="${id}"]`)?.[0]
  const lastIndex = document.querySelectorAll(`[data-slider-last-index="${id}"]`)?.[0]
  render(<SingleSlider domEl={el} descEl={descEl} buttonPrev={buttonPrev} buttonNext={buttonNext} currentIndex={currentIndex} lastIndex={lastIndex}/>, sliderWrapper)
})

const multiNodeElements = document.querySelectorAll('[data-multi-slider-id]')
Array.from(multiNodeElements).forEach((el) => {
  const id = el.getAttribute('data-multi-slider-id')
  const sliderWrapper = document.createElement("div");
  const cursor = document.getElementsByClassName("cursor")[0];
  el.after(sliderWrapper)
  const buttonPrev = document.querySelectorAll(`[data-slider-button-prev="${id}"]`)?.[0]
  const buttonNext = document.querySelectorAll(`[data-slider-button-next="${id}"]`)?.[0]
  const currentIndex = document.querySelectorAll(`[data-slider-current-index="${id}"]`)?.[0]
  const lastIndex = document.querySelectorAll(`[data-slider-last-index="${id}"]`)?.[0]
  render(<MultiSlider cursor={cursor} domEl={el} buttonPrev={buttonPrev} buttonNext={buttonNext} currentIndex={currentIndex} lastIndex={lastIndex}/>, sliderWrapper)
})