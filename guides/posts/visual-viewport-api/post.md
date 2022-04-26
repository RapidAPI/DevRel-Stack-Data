---
title: Introduction to Visual Viewport API
description: The Visual Viewport API allows to have some element present at all times on the visual viewport, regardless of where the element is present. In this piece, let's take a look at it.
publishedDate: 2022-04-26T19:04:26.194Z
lastModifiedDate: 2022-04-26T19:04:26.194Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - visual-viewport-api
    - api
coverImage: ''
---

<Lead>

Anything you built, you will find yourself relying on some sort of an API. They can be REST APIs for connecting your app to the server, public APIs to fetch data from external sources, web APIs to integrate different features, etc. While talking about APIs, I suggest heading to the [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), where you will find thousands of APIs in one place.

</Lead>

<Callout
	title="Sign Up To Find Thousands of APIs"
	linkText="Sign Up"
	linkHref="https://RapidAPI.com/auth/sign-up?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel"
>
	RapidAPI Hub is the world’s largest API hub where you can find different
	APIs according to your need.
</Callout>

As mentioned earlier, web APIs help you integrate different features inside your web application. For instance, the [Image Capture API](https://RapidAPI.com/guides/image-capture-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you capture images from the computer’s webcam. Similarly, there is a web API around the browser’s visual viewport. Let’s take a look.

## Visual Viewport API

There are two viewports of the mobile version of a web application, i.e., Layout Viewport and Visual Viewport. The first one contains the entire web document, even the part that is not yet visible on the screen, while the latter contains only the part of the web app that you can see. The Visual Viewport API comes into the picture when you need to have some element present at all times on the visual viewport, regardless of where the element is present.

The API contains a single interface called `VisualViewport`, which includes several properties, including the width and height of the visual viewport. You can access the API via `window.visualViewport` object.

The Visual Viewport API is supported across all major internet web browsers.

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
		<title>Visual Viewport API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now attach an event listener to the `window.visualViewport` to listen for resizing and scrolling events.

```html
<script>
	window.visualViewport.addEventListener('resize', function () {
		console.log('Visual viewport resized');
		console.log(window.visualViewport);
	});
	window.visualViewport.addEventListener('scroll', function () {
		console.log(window.visualViewport);
		console.log('Visual viewport scrolled');
	});
</script>
```

Now run this file in the browser, open the console, and try zooming into the page. You will see that a message and the API properties have been logged on the console.
