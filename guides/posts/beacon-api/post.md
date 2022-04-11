---
title: What is Beacon API?
description: Beacon API does not expect a response from the server. It sends data to the server when the site is unloading from the browser. Let's take a deeper look into the Beacon API in this piece.
publishedDate: 2022-01-10T10:25:51.945Z
lastModifiedDate: 2022-01-10T10:25:51.945Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - beacon-api
    - api
coverImage: ''
---

<Lead>

An API performs all kinds of tasks, from fetching data from a server to giving you access to the browser functionalities. Often, most of our use cases can be quickly implemented quickly if there is an API available.

</Lead>

Among all web APIs, one can be used to get analytics of your site from the user’s computer. Let’s take a look at it.

## Beacon API

This API does not expect a response from the server. It sends data to the server when the site is unloading from the browser. It is asynchronous and sends a non-blocking request to the server. The primary use case for this API is sending all the analytical data like how the site performed on the client’s computer, the session data, all the errors client faced, etc.

Since it is requesting a server, it uses the POST HTTP method. The request is scheduled and guaranteed to be executed before the page unloads.

Before Beacon API, this use case was implemented using the XMLHttpRequest, but it was not certain that a request would be made before the page unloads.

## Use Beacon API

Beacon API can be accessed via the `Navigator` JavaScript object as it provides you with a single method, i.e., `sendBeacon`. This method takes two arguments. The first one is the URL of the server, and the second is the analytic data you want to send.

You can send any kind of data. It can be an object, [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString), [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData), [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob), etc.

```js
navigator.sendBeacon(`https://example.com/server`, {});
```

The data argument is optional. If the browser has successfully queued the delivery request, the method will return true; otherwise, it will return false.

Beacon API is supported across almost all major web browsers except Opera Mini.
