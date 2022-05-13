---
title: Introduction To Resize Observer API
description: This web API notifies the developers when there is a change in an element’s dimension. Let's take a look at what this API is and how you can use it in your web applications.
publishedDate: 2022-05-12T18:31:12.981Z
lastModifiedDate: 2022-05-12T18:31:12.981Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - resize-observer-api
    - web-api
    - api
coverImage: ''
---

<Lead>

A website is built using multiple HTML elements, and each element has a specific width and height depending on the screen size. If the screen size changes, the element dimensions change along with it. Monitoring these element changes is vital to add different functionalities or render another UI.

</Lead>

Previously, developers had to rely on `window.resize` to achieve this, but fortunately, now there is a web API that handles this more accurately. It’s called Resize Observer API. Let’s look at it.

## Resize Observer API

This web API notifies the developers when there is a change in an element’s dimension. You can use this API to observe different kinds of CSS sizes, for instance, content-box (size of the content area), border-box (size of box-border area), and device pixel content-box (size of content area, before applying any CSS properties).

The Resize Observer API provides a constructor that initializes the object and three methods; each has a different purpose:

-   `observe`: You can use this method to observe an element's dimension changes.
-   `unobserve`: This method stops observing an element for size changes when called.
-   `disconnect`: This method stops observing all observed elements of a particular observer.

## Usage

Let’s quickly look at how you can use this API:

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Resize Observer API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Create a `div` and give it some width and height.

```html
<div style="width: 800px; height: 200px; background-color: aliceblue;"></div>
```

### → STEP #3

Now call the Resize Observer API by using its constructor and then pass the element we want to observe:

```html
<script>
	const myObserver = new ResizeObserver(elements => {
		elements.forEach(element => {
			console.log('width', element.contentRect.width);
			console.log('height', element.contentRect.height);
		});
	});

	const myElement = document.querySelector('div');
	myObserver.observe(myElement);
</script>
```

Now run this file in the browser, and open the console. You will see the element’s dimensions logged there.

## Support

The API is supported across all major internet browsers, so you can use it freely without being worried about support.
