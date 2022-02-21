---
title: What is Picture-in-Picture API?
description: 'This API lets you toggle a video on top of the web pages. This helps with multitasking as the user can consume media and, at the same time, work on other sites. In this piece, we will briefly look at it and see how to use it.'
publishedDate: 2022-02-20T15:55:14.958Z
lastModifiedDate: 2022-02-20T15:55:14.958Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - picture-in-picture-api
    - web-api
    - api
coverImage: ''
---

<Lead>

A website is composed of several features. Each feature is developed to cater to a requirement. Several of these requirements are fulfilled via Web APIs. For instance, you can access the browser local storage to save and retrieve data via Web Storage API.

</Lead>

You often have seen on YouTube that you could make a video appear on top of a page. How do you implement this? The most straightforward answer is using one of the available Web APIs, i.e., Picture-in-Picture API. Let’s briefly look at it.

## Picture-in-Picture API

This API was first introduced Safari in 2016 when macOS Sierra was released. It lets you toggle a video on top of the web pages. This helps with multitasking as the user can consume media and, at the same time, work on other sites.

The Picture-in-Picture API has limited support. It is not supported on major browsers, including desktop and mobile versions of Firefox, Internet Explorer, and all other mobile browsers except Safari.

Let’s look at how you can use this API.

## Usage

The first thing you need to do is see whether the browser supports the API or not. You can do it by running the following code:

```js
if (document.pictureInPictureEnabled && !videoElement.disablePictureInPicture) {
	console.log('API is supported');
} else {
	console.log('API is not supported');
}
```

You can call the Picture-in-Picture API on a video element by running the following code:

```js
videoElement.requestPictureInPicture();
```

Once you are in the Picture-in-Picture state, you can also quit it any time using the following code:

```js
document.exitPictureInPicture();
```

## Benefits

Let’s take a look at the few benefits of this API:

-   The docked video appears on top of all the tabs and not just the one from where it was docked from.
-   It’s more performant since you do not need to implement such a feature from scratch, and the browser provides it by default.
