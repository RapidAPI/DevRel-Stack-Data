---
title: Introduction to Browser API
description: Browser APIs are used to build browser extensions and other web applications that utilize the functionalities of a web browser. In this piece, you are going to have a brief introduction about browser API and some of its types.
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
categories:
    - web-apis
tags:
    - browser-api
coverImage: ''
---

<Lead>

APIs are used for communication between two separate entities. These entities can be a server, a browser, DOM, or anything that provides functionalities used by other applications. If you are developing a mobile application, you will have to use the Android API to use the mobile’s camera, microphone in your application.

</Lead>

Let’s take a look at the Browser API and how you can use it.

## What is the Browser API?

Browser APIs or Web APIs are used to build browser extensions and other web applications that utilize the functionalities of a web browser. They are built right into your web browser to provide browser data and its surrounding environment to perform complex things with it. They allow developers to perform complex operations without dealing with sophisticated lower-level code.

Let’s take a look at some of the most common Browser APIs.

### Fetch API

It is a Browser API that uses promises to make network requests over the HTTP/1.1 protocol. You can make both exact or cross-origin requests using the Fetch API. This API takes at least one argument, i.e., the path of the resource you are interested in fetching. When the response is received, it is converted to JSON.

### Fullscreen API

You can use the Fullscreen API to remove everything in your browser except the website body. You can also set a particular element to go fullscreen using the `requestFullscreen` method. There are multiple use cases associated with it. For instance, while shopping on an e-commerce website, you need to look at the product closely. If you are watching a video, you may want the rest of the browser to temporarily go out of sight to have a better viewing experience.

## Clipboard API

This API allows you to access the clipboard of your operating system right from your browser. This is relatively common since often web developers are building features that copy or paste content or some data to the user’s clipboard.
