---
title: What is CSS Painting API?
description: CSS Painting API, also known as the CSS Custom Paint or Houdini’s paint worklet, allows you to paint an image whenever a CSS property expects an image. Let's briefly look at it in this piece.
publishedDate: 2022-01-17T04:02:09.132Z
lastModifiedDate: 2022-01-17T04:02:09.132Z
authors:
    - saad
categories:
    - api
tags:
    - css-painting-api
    - css-painting
    - api
coverImage: ''
---

<Lead>

The HTML provides the structure, whereas CSS provides the design layer to your web application. There are multiple ways to write CSS; there is the inline-CSS, internal styles, and external stylesheet. You can also manipulate CSS via JavaScript.

</Lead>

JavaScript provides interactivity to your web application. It takes care of all the logical stuff that a site needs. JavaScript also contains a web API called CSS painting API that lets you draw in an element’s border, background or content. Let’s take a look at this API in this piece.

## CSS Painting API

CSS Painting API, also known as the CSS Custom Paint or Houdini’s paint worklet, allows you to paint an image whenever a CSS property expects an image. It lets you paint backgrounds, content and highlight the box based on its size and computed styles.

The properties like `background-image` use `url()` to load an image. With CSS paint API, you can define a paint worklet and then reference it like `paint(myPainter)` instead of the `url()`. Here is an example:

```css
footer {
	background-image: paint(myPaintedImage);
}
```

## Defining a Paint Worklet

You need to create a JavaScript file to define all the worklets. Inside this file, you can specify a paint worklet like this:

```js
class MyPainter {
	paint(ctx, geometry, properties) {
		// ...
	}
}

registerPaint('myPainter', MyPainter);
```

Inside the paint function in the above snippet, you write down all the instructions for rendering a painted image. Once you are done, you need to load this JavaScript file on your main website. For the sake of this piece, let’s call the file `firstPaintWorklet.js`. Now inside the `script` tag in your HTML file, you need to paste the following snippet:

```html
<script>
	CSS.paintWorklet.addModule('firstPaintWorklet.js');
</script>
```

CSS Painting API is only supported on chrome at the moment and does not work on Firefox and Safari.
