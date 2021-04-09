# miranda-slider

## integration

Add this to your custom code

```html
<script src="https://rawcdn.githack.com/emmelleppi/miranda-slider/e2e12adb88f875e4e733b6118735742c932d5650/dist/runtime-main.b9a385e1.js"></script>
<script src="https://rawcdn.githack.com/emmelleppi/miranda-slider/e2e12adb88f875e4e733b6118735742c932d5650/dist/2.02e1dfb0.chunk.js"></script>
<script src="https://rawcdn.githack.com/emmelleppi/miranda-slider/e2e12adb88f875e4e733b6118735742c932d5650/dist/main.420d84b1.chunk.js"></script>
```

Then in your designer section you have to create a structure like this

```html
<div data-slider-images="sliderImages1"></div>
<div id="sliderImages1">
  <img
    src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />
  <img
    src="https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />
  <img
    src="https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />
</div>
```

Where `data-slider-images` and `id` attributes must have the same value. That's because the slider script took the image references from the children of `<div id="sliderImages1">` and then it creates the slider into the `<div data-slider-images="sliderImages1">` element.
In this way you can visualize your images into the webflow designer without strange solutions or fallback.

## CSS

```css
// This is the main wrapper
.slide-wrapper-relative {
  width: calc(75vw);
  height: calc(50vh);
}

// This is the direct child of the `slide-wrapper-relative` element
// as you can see it has pretty much the same size of the father, you can remove the margin if you want
.slide-wrapper-absolute {
  width: calc(75vw - 2rem);
  height: calc(50vh - 2rem);
  margin: 1rem;
}

// this style is applied to the image
.slide-image {
  width: 100%;
  height: 100%;
}

// this style is applied to the custom cursor
.slider-cursor {
  width: 1rem;
  height: 1rem;
  border: 1px solid white;
  background: white;
  border-radius: 100%;
}
```
