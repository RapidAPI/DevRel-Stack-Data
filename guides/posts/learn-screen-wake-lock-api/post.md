---
title: Interactive Guide to Screen Wake Lock API
description: The Screen Wake Lock API ensures that your computer display does not turn off after some time of inactivity. Let's take a look at what this API is and how you can use it in your web applications.
publishedDate: 2022-04-04T02:56:29.227Z
lastModifiedDate: 2022-04-04T02:56:29.227Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - screen-wake-lock-api
    - web-api
    - api
coverImage: ''
---

<Lead>

A web API is an API that is exposed by the browser to the developer so they can use it for building web applications. The DOM web API interacts with the HTML elements on the screen; the clipboard API provides access to the user's clipboard, the encoding API encodes some piece of text for the developer, etc.

</Lead>

Previously, we have written several articles on [web APIs](https://rapidapi.com/guides/categories/webApis), especially about how you can use them. Today, we will look at another web API that ensures your computer screen does not turn off. So without any further ado, let's jump in!

## Screen Wake Lock API

Your website may contain some content that requires your users some time to read. It can be news articles, novels, books, or anything of the sort. The Screen Wake Lock API ensures that your computer display does not turn off after some time of inactivity. This inactivity most commonly occurs during the reading of the text.

The API provides three interfaces, each with different functionalities. Let's quickly look at each of them.

### WakeLock

This interface ensures the screen is not dimming or locking when the lock is active. This way, the web application keeps on running in the background.

### WakeLockSentinel

This interface is available in the secure context, i.e., HTTPS. It handles the underlying wake lock of the platform. It can also release the wake lock using the `release` method.

### Navigator.wakelock

It provides an instance of the `WakeLock` object. You can use this object to access all the functionalities.

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

Now create the `Activate Screen Lock` and `Deactivate Screen Lock` buttons and attach functions on their `onclick` event handler.

```html
<button onclick="acquireWakeLock()">Activate Screen Lock</button>
<button onclick="releaseWakeLock()">Deactive Screen Lock</button>
```

### → STEP #3

Now write the `acquireWakeLock` and `releaseWakeLock` functions inside the script tag.

```html
<script>
	let wakeLock;

	const acquireWakeLock = async () => {
		if ('wakeLock' in navigator) {
			try {
				wakeLock = await navigator.wakeLock.request('screen');
				console.log('Wake lock is activated.');
			} catch (err) {
				console.log(err);
			}
		}
	};

	const releaseWakeLock = async () => {
		if ('wakeLock' in navigator) {
			try {
				wakeLock.release();
				console.log('Wake lock has been released.');
			} catch (err) {
				console.log(err);
			}
		}
	};
</script>
```

First, we will check if the browser supports the API, and then we will request the screen not to lock or dim out if it is.

Now run this file, click on the `Activate Screen Lock` button, and open the console. If the API is supported, you will see that `Wake lock is activated.` is logged into the console. If you click on the `Deactivate Screen Lock` button, it will release the wake lock.

## Support

The Screen Wake Lock is an experimental API currently supported across all major internet browsers except Firefox and Safari.
