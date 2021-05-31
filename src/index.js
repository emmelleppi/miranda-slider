import { render } from 'react-dom'
import SingleSlider from './SingleSlider'
import MultiSlider from './multiple-slider'

window.onload = () => {
  const nodeElements = document.querySelectorAll('[data-slider-id]')
  Array.from(nodeElements).forEach((el) => {
    const id = el.getAttribute('data-slider-id')
    const sliderWrapper = document.createElement('div')
    const initSwitchDelay = el.getAttribute('data-slider-switch-init-delay')
    const switchInterval = el.getAttribute('data-slider-switch-interval')
    const noInfinite = el.hasAttribute('data-slider-no-infinite')
    const mass = parseInt(el.getAttribute('data-slider-mass'), 10)
    const tension = parseInt(el.getAttribute('data-slider-tension'), 10)
    const friction = parseInt(el.getAttribute('data-slider-friction'), 10)
    el.after(sliderWrapper)
    const descEl = document.querySelectorAll(`[data-slider-desc="${id}"]`)?.[0]
    const buttonPrev = document.querySelectorAll(`[data-slider-button-prev="${id}"]`)?.[0]
    const buttonNext = document.querySelectorAll(`[data-slider-button-next="${id}"]`)?.[0]
    const currentIndex = document.querySelectorAll(`[data-slider-current-index="${id}"]`)?.[0]
    const lastIndex = document.querySelectorAll(`[data-slider-last-index="${id}"]`)?.[0]
    render(
      <SingleSlider
        id={id}
        initSwitchDelay={switchInterval && initSwitchDelay && !noInfinite ? parseInt(initSwitchDelay, 10) : null}
        switchInterval={switchInterval && !noInfinite ? parseInt(switchInterval, 10) : null}
        noInfinite={noInfinite}
        domEl={el}
        descEl={descEl}
        buttonPrev={buttonPrev}
        buttonNext={buttonNext}
        currentIndex={currentIndex}
        lastIndex={lastIndex}
        mass={isNaN(mass) ? null : mass}
        tension={isNaN(tension) ? null : tension}
        friction={isNaN(friction) ? null : friction}
      />,
      sliderWrapper
    )
  })

  const multiNodeElements = document.querySelectorAll('[data-multi-slider-id]')
  Array.from(multiNodeElements).forEach((el) => {
    const id = el.getAttribute('data-multi-slider-id')
    const showAlts = el.hasAttribute('data-multi-slider-show-alt')
    const noDrag = el.hasAttribute('data-multi-slider-no-drag')
    const noInfinite = el.hasAttribute('data-slider-no-infinite')
    const mass = parseInt(el.getAttribute('data-multi-slider-mass'), 10)
    const tension = parseInt(el.getAttribute('data-multi-slider-tension'), 10)
    const friction = parseInt(el.getAttribute('data-multi-slider-friction'), 10)
    const margin = el.getAttribute('data-multi-slider-margin')
    const marginMobile = el.getAttribute('data-multi-slider-margin-mobile')
    const noInnerScale = el.hasAttribute('data-slider-no-inner-scale')
    const centered = el.hasAttribute('data-multi-slider-centered')
    const sliderWrapper = document.createElement('div')
    const cursor = document.getElementsByClassName('cursor')[0]
    el.after(sliderWrapper)
    const buttonPrev = document.querySelectorAll(`[data-slider-button-prev="${id}"]`)?.[0]
    const buttonNext = document.querySelectorAll(`[data-slider-button-next="${id}"]`)?.[0]
    const currentIndex = document.querySelectorAll(`[data-slider-current-index="${id}"]`)?.[0]
    const lastIndex = document.querySelectorAll(`[data-slider-last-index="${id}"]`)?.[0]
    render(
      <MultiSlider
        centered={centered}
        noDrag={noDrag}
        noInfinite={noInfinite}
        noInnerScale={noInnerScale}
        margin={margin ? parseInt(margin, 10) : 0}
        marginMobile={marginMobile ? parseInt(marginMobile, 10) : 0}
        showAlts={showAlts}
        cursor={cursor}
        domEl={el}
        buttonPrev={buttonPrev}
        buttonNext={buttonNext}
        currentIndex={currentIndex}
        lastIndex={lastIndex}
        mass={isNaN(mass) ? null : mass}
        tension={isNaN(tension) ? null : tension}
        friction={isNaN(friction) ? null : friction}
      />,
      sliderWrapper
    )
  })
}
