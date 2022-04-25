---
title: Interactive Guide To Image Capture API
description: This web API provides you access to the device’s camera so you can take a picture. You can then download the image on the computer. In this piece, let's take a look at how you can use this API in your project.
publishedDate: 2022-04-25T18:18:51.569Z
lastModifiedDate: 2022-04-25T18:18:51.569Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - image-capture-app
    - web-apis
coverImage: ''
---

<Lead>

Nowadays, every computer is equipped with a camera that we can use for various purposes. For instance, taking a picture, recording a video, having a video call, etc. There are countless use cases.

</Lead>

If you are developing a chat application that also provides a call feature, you need to find a way to utilize the webcam or any camera connected to your computer. If your application is for desktop, you will use the operating system’s camera API, but you can use the Image Capture web API if it is a website.

## Image Capture API

This web API provides you access to the device’s camera so you can take a picture. You can then download the image on the computer. Moreover, the Image Capture API gives you the device’s information like whether it has a flash attached to it, the size of the image, and red-eye detection. You also have control of the device’s zoom level, ISO, brightness, contrast, etc. All these settings can be changed within the device’s limit using the API.

Because of privacy concerns, you need to explicitly permit the API to access the camera to prevent unwanted use.

The API provides two interfaces. Let’s quickly look at them:

### ImageCapture

This interface provides methods and properties related to taking a photo, tweaking the picture settings, etc. Its `takePhoto()` method takes a picture using the device’s camera.

### PhotoCapabilities

You can use this interface to get the camera details of your computer.

## Usage

Let’s take a look at Let's quickly look at how you can use this API in your websites.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Image Capture API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now let’s create three buttons. The first will start the video stream, the second will stop it, and the third will capture a frame and render it on the screen.

```html
<button id="playBtn">Play stream</button>
<button id="stopBtn">Stop stream</button>
<button id="captureBtn">Capture</button>
```

We also need to add a video player with no source property and a canvas. Our video stream will play using the video player, and we will use canvas to show the captured image.

```html
<canvas id="canvas"></canvas> <video id="player" autoplay></video>
```

### → STEP #3

Using the DOM API, pick up all the elements we have created and then attach event listeners to all three buttons. You will call the Image Capture API for different purposes in each listener.

Take a look at the demo below for the complete code snippet and to test the API:

<LearnImageCaptureAPI />

Now run this file in the browser, and click the `Play stream` button. If your browser supports the API, a video stream will start. You can also stop the stream and take a picture using the other two buttons.

## Support

The Image Capture API is still experimental, so I recommend implementing a fallback if the API fails. It is supported across all major internet browsers, including Chrome, Safari, Edge, etc.
