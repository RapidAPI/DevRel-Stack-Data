---
title: Interactive Guide To Learn Browser API
description: These APIs come with your web browser, so developers can use them to build extensions. Let's take a look at some of the browser APIs in this interactive guide.
publishedDate: 2021-11-27T09:30:14.724Z
lastModifiedDate: 2021-11-27T09:30:14.724Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - browser-api
coverImage: ''
draft: false
---

<Lead>

Have you ever thought about how the browser extension you use adds functionalities to your web browser? Hundreds if not thousands of chrome extensions are available on the Chrome Web Store. Similarly, Firefox has Add-ons that let you extend its features.

</Lead>

All these extensions rely on different Browser APIs to improve your browser user experience. In this piece, let’s take a deeper look into Browser APIs. So without any further ado, let’s jump in.

## What is the Browser API?

These APIs come with your web browser, so developers can use them to build extensions. It provides you with the Browser Object Model (BOM) API that gives you objects that expose the browser functionality. You can also use them in your websites to control different browser aspects like fullscreen mode.

Browser APIs make the interaction with the browser simple for the developers. It removes the sophisticated lower-level code layer and lets developers perform complex operations.

When developing an extension, there are two types of scripts, i.e., Content and Background scripts. Most of the [Browser APIs](https://developer.chrome.com/docs/extensions/reference/tabs/) are only available in the background scripts since content scripts mostly read and modify the content of the pages using DOM API.

## Getting Started With Browser APIs

Let’s look at how you can start working with the Browser APIs. For this, create a folder and open it in your preferred code editor. I am using VSCode. Now create an HTML file called `index.html` in your project folder.

Create a basic HTML boilerplate. If you don’t know how to create one then just copy-paste the following in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Browser APIs</title>
	</head>
	<body></body>
</html>
```

Now open this file in your web browser. You will see a blank page because there is nothing inside the `body` tag.

Since we want to work with the Browser APIs, we need to create a `script` tag at the end of the `body` tag. Here we will write all the JavaScript code. I am also adding more boilerplate code below that you need to copy to learn more about these APIs. Just copy and paste them into your HTML file.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Browser APIs</title>
	</head>
	<body>
		<div>
			<input type="text" id="text" />
			<button id="cpy">Copy</button>
		</div>
		<div>
			<button id="fls">Fullscreen</button>
		</div>
		<div>
			<canvas id="cnv"></canvas>
		</div>
		<script></script>
	</body>
</html>
```

## Using The Browser APIs

There are several Browser APIs available that you can use. For instance, there are APIs for manipulating documents loaded into the browser, fetching data from the server, drawing different shapes and graphics, manipulating audio and video, etc.

Let’s look at how you can use some of the Browser APIs in your website.

### Clipboard API

It is a simple API that provides access to the operating system’s clipboard. You can paste content on it and even read from it. Pasting the content on the clipboard does not require any permission, but accessing the clipboard’s content is gated behind the Permission API.

Let’s take a look at how you can use it.

<LearnBrowser showClipboard />

### Fullscreen API

This API lets you put a specific DOM element into fullscreen mode. You can also put your entire website into fullscreen using it, removing all the browser interfaces.

Let’s take a look at how you can use this API.

<LearnBrowser showFullScreen />

### Canvas API

This Browser API can make 2D and 3D graphics on the screen. Canvas API uses JavaScript and the HTML `canvas` element to create different shapes on the viewport. You can also use this API for animations, game graphics, photo manipulation, data visualization, and real-time video processing.

The boilerplate code that I have shared above has a canvas HTML element that we can use to create different shapes. Let’s take a look at it.

<LearnBrowser showCanvas />

That’s pretty much it. I hope this piece has cleared some of your concepts related to different Browser APIs and provides you a means to learn and use some of them.
