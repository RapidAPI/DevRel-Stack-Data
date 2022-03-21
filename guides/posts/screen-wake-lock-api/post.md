---
title: What is Screen Wake Lock API?
description: This API prevents the screen from turning off. The user device's screen does not dim or lock itself if the cursor hasn't moved for a certain period. Let's take a look at it and see how it works.
publishedDate: 2022-03-21T02:53:28.085Z
lastModifiedDate: 2022-03-21T02:53:28.085Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - screen-wake-lock-api
    - screen-wake-lock
    - api
coverImage: ''
---

<Lead>

There are multiple web APIs exposed to the developers that they can use to add additional features to their web applications. One of the most common and widely used APIs is DOM API which lets you interact with the HTML elements on the screen. Similarly, the fetch API lets you call REST API in your application.

</Lead>

All these web APIs are extremely useful, and each has its use case. Among them, there is a web API that is designed to keep your screen awake. It's called the Screen Wake Lock API. Let's take a look at it.

## Screen Wake Lock API

You often need to have a feature where the display of your user's computer does not dim out or turn off when they are on your website. There are various reasons for this. If you have developed a blogging platform, it would be a terrible user experience if the display dims every other minute while the user is still reading an article. Here the Screen Wake Lock API comes into the picture to save the day.

This API prevents the screen from turning off. The user device's screen does not dim or lock itself if the cursor hasn't moved for a certain period.

## Support

You can use this API on Chrome, Edge, and Opera but it is not yet supported on Firefox and Safari.

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
		<title>Screen Wake Lock API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now create an `Activate Screen Lock` button and attach a function on the button's `onclick` event handler.

```html
<button onclick="activateLock()">Activate Screen Lock</button>
```

### → STEP #3

Now write this `activateLock` function inside the script tag.

```html
<script>
	async function activateLock() {
		if ('wakeLock' in navigator) {
			try {
				wakeLock = await navigator.wakeLock.request('screen');
				console.log('ACTIVATED');
			} catch (err) {
				console.log('ERROR:', err);
			}
		} else {
			console.log('wakeLock not available');
		}
	}
</script>
```

First, we will check if the browser supports the API, and then we will request the screen not to lock or dim out if it is.

Now run this file, click on the `Activate Screen Lock` button, and open the console. If the API is supported, you will see that `ACTIVATED` is logged into the console, and it has implemented the screen lock.
