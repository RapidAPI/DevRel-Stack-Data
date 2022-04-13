---
title: What is Background Fetch API?
description: The background fetch API lets you communicate with the browser to perform some fetches in the background even if the user closes the tab. In this piece, lets briefly look at it.
publishedDate: 2022-01-17T04:02:09.132Z
lastModifiedDate: 2022-01-17T04:02:09.132Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - background-fetch-api
    - background-fetch
    - api
coverImage: ''
---

<Lead>

Fetching data from the internet via an API is simple. You need a REST endpoint, a web API like `fetch`, and that’s it. But sometimes, you need to fetch something in the background when the user is not on your website. This use case happens when the user downloads a large file from your website. It can be a movie, software, anything.

</Lead>

A web API called background fetch API exists that takes care of it. Let’s take a look at it.

## Background Fetch API

The background fetch API lets you communicate with the browser to perform some fetches in the background even if the user closes the tab. The download will not fail if the user loses connectivity. Instead, the browser will pause it, and as soon as the user is live again, the download will resume.

Sometimes the browser terminates tasks happening in the background to save battery. This results in the download becoming unsuccessful. The background fetch API handles this efficiently by ensuring the connection stays active until the download completes if there is a problem with the connection, the download pause.

## Using The API

The first thing you need to ensure is to check if the browser supports this API. You can do this using the following piece of code:

```js
if ('BackgroundFetchManager' in self) {
	// This browser supports Background Fetch API
}
```

This API relies on the service worker, so make sure you have registered one in your web application. Since it is fetching some resources, It needs to be asynchronous.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch('fetch-this, ['/podcast.mp3', 'podcast-poster.jpg'], {
    title: ‘What is DevRel and why it is awesome?.',
    icons: [{
      sizes: '300x300',
      src: '/podcast-icon.png',
      type: 'image/png',
    }],
    downloadTotal: 40 * 1024 * 1024,
  });
});
```

The `downloadTotal` is optional. Here you tell the total size of the response bodies after being un-gzipped.
