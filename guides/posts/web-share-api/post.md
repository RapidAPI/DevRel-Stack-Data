---
title: What is Web Share API?
description:
    The Web Share API provides a simple and easy way to access the operating
    system’s sharing capabilities to share content across installed applications.
    In this piece, let's look at this API and how you can use it in your websites.
publishedDate: 2022-04-20T19:04:26.194Z
lastModifiedDate: 2022-04-20T19:04:26.194Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - web-share-api
    - web-share
    - api
coverImage: ''
---

<Lead>

Your site’s user experience will significantly improve if it contains different accessibility features. These features make your site more intuitive and provide ease of access so anyone can browse through it without a sweat.

</Lead>

It would be convenient to add a quick sharability feature to our website. It will simplify things for our users. There are multiple ways to implement this. One way is using the default sharing web API that the browser provides. Let’s take a look.

## Web Share API

This API provides a simple and easy way to access the operating system’s sharing capabilities to share content across installed applications. The Web Share API can only be accessed in response to a user’s action, like clicking on a button. Once the user does that, they will see the macOS native share dialog box where different installed applications will be listed if they are on Safari.

The Web Share API can share some text, title, or URL using an object that is passed to it. It is a promise-based API, so you can write appropriate code to handle its response and errors.

The API provides two interfaces. The `canShare()` interface tells whether the passing data is sharable or not. On the other hand, the `share()` interface is used to share the data.

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
		<title>Web Share API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Create a button and attach a function to its `onclick` event.

```html
<button onclick="shareData()">Share</button>
```

### → STEP #3

Now write down the `shareData()` function.

```html
<script>
	function shareData() {
		if (navigator.share) {
			navigator
				.share({
					title: 'RapidAPI Hub – Web Share API',
					url: 'https://rapidapi.com/guides/web-share-api'
				})
				.then(() => {
					console.log('Shared');
				})
				.catch(console.error);
		} else {
			console.log('API NOT SUPPORTED!');
		}
	}
</script>
```

Now run this file in the browser, and click the `Share` button. If your browser supports the API, you will see the native sharing feature of your operating system. Otherwise, you will see a message logged on the console that the API is not supported.

## Support

The Web Share API can only be accessed in a secure context, which means your site will need an SSL certificate for it to work. Also, as of writing this piece, the API is not yet supported on Firefox.
