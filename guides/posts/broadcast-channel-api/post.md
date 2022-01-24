---
title: What is Broadcast Channel API and why you should care about it?
description: You use this API when you need to communicate across tabs/windows of the same origin. Let's take a look at what it is, how you can use it and why you should care about it.
publishedDate: 2022-01-21T11:59:13.377Z
lastModifiedDate: 2022-01-21T11:59:13.377Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - broadcast-channel-api
    - broadcast-channel
    - api
coverImage: ''
draft: false
---

<Lead>

The developers often need to consume different web APIs to integrate different functionalities in their applications. For instance, web storage API gives them access to the browser’s local storage; the fetch API can call REST APIs. Similarly, if your application needs to communicate across tabs of the same origin, you can use the Broadcast Channel API for it.

</Lead>

## Broadcast Channel API

I mentioned earlier that you could communicate using Broadcast Channel API between tabs, windows, and frames of the same origin. The same-origin means that the same website is opened across different tabs. In more technical terms, the site has the same schema, host, and port.

To use this API, you create a [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel) object, and then you post a message. The receiver will create another BroadcastChannel with the same name. This way, a connection between the sender and receiver will be established to communicate with the other.

Let’s take a look a how you can create a broadcast channel.

```js
// broadcast channel created
const channel = new BroadcastChannel('rapidapi_channel');

// message posted on the channel
channel.postMessage("RapidAPI Hub is world's largest API Hub");

/**
 *
 *
 * @param {e} - braodcast channel event
 */
const handleMsg = e => {
	console.log(e);
};

// receiving the posted message
channel.onmessage = handleMsg;

// closing a channel
channel.close();
```

## What does this API exist?

There are multiple use cases for this API. One of the most common is authentication. Consider that you own a trading web platform and a user, let’s call him Jack, has opened multiple of its links in separate tabs after signing in. Now Jack needs to leave, and he logs out from your platform in one of the tabs. He then leaves his computer without locking it.

If you have not implemented some communication between each tab of the same origin, anyone can use Jack’s computer and make a trade. This is a security vulnerability and can lead to severe consequences. And this is where the Broadcast Channel API comes to save the day.
