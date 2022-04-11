---
title: Introduction To Page Visibility API
description:
    Page Visibility API is designed to watch for the page visibility state of a
    web application so that the app can execute a piece of code when the state
    changes. Let's take a look at this API in this piece.
publishedDate: 2022-04-11T07:24:44.264Z
lastModifiedDate: 2022-04-11T07:24:44.264Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - page-visibility-api
    - web-api
    - api
coverImage: ''
---

<Lead>

Top-notch performance is one of the top priorities of web application development. Memory optimization is critical, and if your site consumes fewer resources when not in use, it is considered much more efficient.

</Lead>

There are multiple ways to identify whether your website is visible to the user. Almost all of them are workarounds and do not cover all the required use cases. Due to this, the web browser’s introduced the Page Visibility web API. Let’s take a quick look at it.

## Page Visibility API

It is a web API designed to watch for the page visibility state of a web application so that the app can execute a piece of code when the state changes. The API has several use cases like pausing a video or a game, stopping background music, counters, etc., when the document is hidden.

The web app is comprised of documents. The document is either hidden or visible. When the user switches to another tab or minimizes the browser window, the document state changes to hidden. Using the Page Visibility API, the developer can ensure that unnecessary operations are paused until the document is visible again.

The Page Visibility API is supported across all major web browsers, including desktop and mobile.

## Usage

Let's quickly look at how you can use this API in your websites.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Page Visibility API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now write an event listener inside the `script` tag. It will listen for the `visibilitychange` event.

```html
<script>
	document.addEventListener('visibilitychange', function () {
		console.log('Visibility Changed!');
	});
</script>
```

Run this file by opening it in the browser. Now open the console and switch to another tab and then go back. You will see that `Visibility Changed!` is logged on the console. It is due to the event listener we have set on the `document` object that is listening for the `visibilitychange` event and executes the function when the event triggers.
