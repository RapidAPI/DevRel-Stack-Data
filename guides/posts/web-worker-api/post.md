---
title: Introduction To Web Workers API
description: This API makes sure that your page is not unresponsive when a script is running in the background. In this piece, let's briefly look at web workers and some of its types.
authors:
    - saad
categories:
    - api
tags:
    - web-worker
    - api
publishedDate: 2022-01-03T09:34:31.065Z
lastModifiedDate: 2022-01-03T09:34:31.065Z
coverImage: ''
---

<Lead>

There are many Web APIs available that you can use for different operations. Canvas API lets you draw shapes, IndexedDB API provides you access to the browser database. Like this, another Web API called Web Worker API contributes to improving your site’s performance. Let’s take a look at it.

</Lead>

## Web Worker API

This API makes sure that your page is not unresponsive when a script is running in the background. It allows you to execute different JavaScript functions that are computationally intensive without blocking the UI or other scripts to handle user interactions.

Web Worker API makes all this possible by separating the threads into the background and main execution thread. The background thread runs the script operation, whereas the main thread handles the web application.

Using a web worker is simple: You create a web worker, tell it what to do, start the worker, and when the worker is done, it lets you know. Using the `Worker()` class, you can create a web worker. It will create an object that you can save in any variable.

A Web Worker can also communicate to the main thread using a `postMessage()` method and can send a response back to the main thread via the `onmessage` event handler.

## Types of Web Worker

Let’s take at three different types of web workers:

### Dedicated Web Workers

Only a single script utilizes these Web Workers.

### Shared Workers

As the name suggests, these workers can be shared by multiple JavaScript scripts simultaneously in different windows, iFrames, etc. But there is still a condition that all the windows must be in the same domain as the workers.

### Service Workers

They allow you to access a website even when there is no network. It acts like a proxy server between a web application, the browser, and the network if it is available.
