---
title: Interactive Guide To Canvas API
description: Browsers give us several ways to display graphics, like styling the elements. But when it comes to drawing graphics such as two lines, the Canvas API is used, which allows you to draw graphics using JavaScript programmatically.
publishedDate: 2022-01-06T19:10:30.765Z
lastModifiedDate: 2022-01-06T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - interactive
tags:
    - canvas-api
coverImage: ''
draft: false
---

<Lead>

Browsers give us several ways to display graphics, like styling the elements. But when it comes to drawing graphics such as two lines, the Canvas API is used, which allows you to draw graphics using JavaScript programmatically.

</Lead>

### Canvas API

Web APIs help you develop your websites, and Canvas API is one of them. It uses the HTML element `<canvas>` combined with JavaScript to draw graphics on the viewport. It requires us to code everything in detail, giving us more control over the graphics.

Behind the scenes, a canvas is a single DOM element that encapsulates any graphics. So, the Canvas API gives an interface to draw shapes taken up by this DOM element programmatically. The Canvas uses a "Render and Forget" mechanism. Anything we draw is rendered immediately, and once it is rendered, the Canvas only knows the shapes as pixels, not objects.

Canvas API enjoys healthy support from the browsers and is widely used for simple and complex animations, data visualization, games, photo manipulation, and video processing.

### Canvas Element

The `<canvas>` element takes two attributes, `width` and `height`, to determine its size. A new canvas shows up as an empty container on the viewport, on which we can draw our graphics. To access this container in JavaScript, we can use the id attribute. If you're using React, you can also use the `useRef` hook to access it.

### Drawing Context

Drawing context is an object which provides methods to draw on the canvas using JavaScript. The most popular context is **2d** while there is also one for drawing three-dimensional graphics called **webgl**.

## Getting Started with the API

The first thing we need is the canvas element. This is how we create it in HTML:

```html
<canvas id=”cnv” width=”60" height=”60"></canvas>
```

Now, we can access it in JavaScript using its id. The following code selects the canvas element and initializes the context.

```js
const canvas = document.getElementById('cnv');
const ctx = canvas.getContext('2d');
```

Now that `ctx` has been initialized as a context object, we can call the methods provided by the canvas API.

### fillStyle

The `fillStyle` method specifies the color of the shapes you draw on the canvas. For example, this code will color the shapes blue.

```js
ctx.fillStyle = 'blue';
```

### fillRect

The `fillRect` method draws a rectangle on the specified coordinates.

```js
ctx.fillRect(10, 10, 150, 100);
```

Here the first two parameters, `10, 10` are x and y coordinates of the starting point, `150` is the width and `100` is the height.

Click on the submit button below to see what it looks like:

<LearnCanvas showFill />

### Paths

Paths allow you to draw any shape using a list of points. These points are connected by lines that can have different shapes, curves, and styles. There are three steps required to draw paths on a canvas:

1. Create a new path.
2. Use drawing commands to draw into the path.
3. Use a fill or stroke method to render the path.

Check out the code below. Can you guess what shape it will draw? Try submitting it to see the canvas output.

<LearnCanvas showPath />

This guide was an introduction to the basic concepts of the Canvas API. I hope it has made it easier for you to get started with the Canvas API and dive deeper into it.
