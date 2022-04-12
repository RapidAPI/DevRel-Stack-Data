---
title: Introduction to Channel Messaging API
description: "This API forms a two-way channel and lets you pass messages between different browser contexts. In this piece, let's briefly look at this API and how it works."
publishedDate: 2022-01-31T06:56:48.520Z
lastModifiedDate: 2022-01-31T06:56:48.520Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - channel-messaging-api
    - api
coverImage: ''
---

<Lead>

There are multiple instances where you have to communicate with different scripts running in a completely different browsing context but attached to the same document. Although you can find third-party packages to handle this, your web browser also provides you with a Web API that provides similar functionality.

</Lead>

Let’s take a quick look at this API and see how it works.

## Channel Messaging API

This API forms a two-way channel and lets you pass messages between different browser contexts. It is often used with service workers when communicating with the main thread. The API creates a shared channel with two ports. The sender uses the first port and the second port by the receiver. The sender and receiver scripts then use these two ports to communicate.

Here is how you can use this API:

### → Step #1

You need to create a channel first. For this, you call the `MessageChannel()` interface. This interface allows us to create a new message channel and then send data through it using its message port properties.

```js
const channel = new MessageChannel();
```

### → Step #2

If the script runs on the browser, you will have access to the `window` object. The `window` object gives you access to the `postMessage()` method that lets you communicate via the above-created channel.

Here is how you do it:

```js
const channel = new MessageChannel();
const dataObj = { name: ‘john’ };
window.postMessage(dataObj, [channel.port2]);
```

### → Step #3

The last part is at the listening end, where the script runs. Here you attach an event listener to the `self` object. The event listener listens for a message, and when it receives it, it executes the function provided to it.

```js
self.addEventListener('message', event => {
	console.log('Incoming message');
	console.log(event.data);
});
```

The `event` parameter passed to the callback function contains the data that is sent to this event/
