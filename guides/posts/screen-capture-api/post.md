---
title: Introduction To Screen Capture API
description: "You can use Screen Capture API to add a recording feature to your website. The client can record their screen or the portion of their screen as a media stream. Let's briefly look at this API in this piece."
publishedDate: 2022-03-06T19:27:34.794Z
lastModifiedDate: 2022-03-06T19:27:34.794Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - screen-capture-api
    - api
coverImage: ''
---

<Lead>

An API lets you communicate between two entities. If it is a REST API, the communication is between client and server, and it takes place via API endpoints. If it is a Web API, you will have methods available to you that you can use to add a particular feature.

</Lead>

These web APIs are consumed by almost every web application; for instance, the DOM API is used to interact with the DOM elements on the screen. A web API is also available for the user to capture their screen. Let’s briefly look at it.

## Screen Capture API

You can use this API to add a recording feature to your website. The client can record their screen or the portion of their screen as a media stream. The stream can then be shared with anyone. The Screen Capture API extends the two other web APIs, i.e., Media Capture API and Streams API.

The API is limited to desktop web browsers at the time and does not support mobile browsers.

## Usage

The API provides a single method that asks the user to select the screen they want to capture as a media stream. The method is asynchronous, so you can either call it by wrapping it in an asynchronous function or use `then()` to handle the promise and response.

The API is simple to use. You can create a simple HTML boilerplate, and inside it, you can write down a simple function to call the Screen Capture API.

```js
async function recordScreen() {
	try {
		let mediaStream = await navigator.mediaDevices.getDisplayMedia({
			video: true
		});
		videoElement.srcObject = mediaStream;
		return mediaStream;
	} catch (e) {
		console.log('Unable to acquire screen capture: ' + e);
	}
}
```

It will open a popup window where all your tabs will be listed. You will have options to share your whole screen, a window, or a tab.
