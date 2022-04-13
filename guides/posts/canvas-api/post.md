---
title: Introduction to Canvas API
description: You can draw graphics using JavaScript and the HTML canvas element. In this piece, you will get a small introduction about Canvas API and how you can use it in a website.
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
categories:
    - web-apis
tags:
    - canvas-api
coverImage: ''
---

<Lead>

There are multiple browser APIs available for developers to use in their web applications and browser extensions. These APIs provide the developers with browser data and perform complex operations without dealing with sophisticated lower-level code. Let’s take a look at one of the most common browser APIs that are used.

</Lead>

## Canvas API

You can draw graphics using JavaScript and the HTML canvas element. It provides you the means to produce animations, game graphics, data visualization, photo manipulation, and real-time video processing. The primary component of the Canvas API is the HTML `<canvas>` tag. Once you have defined this tag in your application, you can get its context with the `getContext` method and then perform graphic operations.

## How to use Canvas API?

Let’s take a look at how you can use Canvas API in your applications.

### STEP #1

You need to have a `canvas` HTML element in your webpage.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Canvas API</title>
	</head>
	<body>
		<canvas id="canvas"></canvas>
	</body>
</html>
```

### STEP #2

The next thing you need to do is to fetch this `canvas` element from the viewport. For this, you can use the DOM API. You will also need to get the canvas context once it has been in your JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Canvas API</title>
	</head>
	<body>
		<canvas id="canvas"></canvas>
		<script type="application/javascript">
			const cnv = document.getElementById('canvas');
			const ctx = cnv.getContext();
		</script>
	</body>
</html>
```

### STEP #3

Now all you need to do is draw using the Canvas API. You can see in the code below that I have drawn a rectangle using the API.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Canvas API</title>
	</head>
	<body>
		<canvas id="canvas"></canvas>
		<script type="application/javascript">
			const cnv = document.getElementById('canvas');
			const ctx = cnv.getContext();

			ctx.fillStyle = 'red';
			ctx.fillRect(20, 20, 130, 100);
		</script>
	</body>
</html>
```
