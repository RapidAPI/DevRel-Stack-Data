---
title: Interactive Guide To Cache API
description: 'The Cache API offers an interface for storing and retrievng network requests and responses.'
publishedDate: 2022-01-14T19:10:30.765Z
lastModifiedDate: 2022-01-14T19:10:30.765Z
authors:
    - 'ahmad-bilal'
categories:
    - interactive
tags:
    - cache-api
coverImage: ''
draft: false
---

<Lead>

In Web Applications, you can cache resources to make them available offline, store them for later use, or provide faster response times. The Web Cache API is a part of the service workers' mechanism and is used to cache resources.

</Lead>

## Cache API

Cache API allows service workers to control content caching. Service workers are simply scripts that do not need a web page and run in the background. Even though Cache API is a part of the service worker spec, you can use it separately without service workers.

## Cache API vs. indexedDB API

Cache API is ideal for storing URL addressable resources only. Conversely, **IndexedDB** API is more suited for holding application states, user input, and large files.

## Support

The Cache API enjoys support from all modern browsers, including Chrome, Firefox, Edge, Opera, and Safari. Older browsers like Internet Explorer do not support it.

## Availability

You can quickly check for browser support using the following snippet:

```js
if ('caches' in window) {
	// Do something with caches here
}
```

## Usage

You can use the Cache API for caching resources through the following four functions:

1. Creating a cache.
2. Adding items to a cache.
3. Retrieving items from a cache.
4. Deleting a cache.

Let's go over these functions one at a time.

### Creating a Cache

Before caching resources, we need to create a new cache object in the browser's cache storage. We use the `caches.open()` for doing that.

```js
if ('caches' in window) {
	caches.open('cache-name');
}
```

This method creates a new cache if the specified cache doesn't exist.

### Adding Items to a Cache

The `open()` method returns a promise, which resolves into a cache object. You can add resources to this cache object by using any of the following ways:

1. `add()` Makes a fetch request according to the given URL/Request object and stores its response.
2. `addAll()` Makes fetch requests for more than one resource.
3. `put()` Gives more control by allowing custom key-value pairs in the response.

Use the interactive component below to cache a mock request to an API using the `add()` method.

<LearnCache create />

Once you submit, go to **Application > Cache > Cache Storage** in the Chrome DevTools. You will see the cached response stored in the cache object you created.

![Cached Request and Response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/learn-cache-api/images/cache.png)

### Retrieving Items from a Cache

Cache API offers the `match()` method to retrieve items stored in a cache. It takes a single parameter: a resource URL or a complete request object. It then matches the parameter with resources present in that cache and returns it.

Check out the following interactive component, which retrieves the cached response in JSON. If you created a cache above, don't forget to use the same name here.

<LearnCache retrieve />

### Deleting a Cache

You can delete items in a cache using the following snippet:

```js
cache.delete(request);
```

If you want to delete the cache object completely, you can do it as follows. Specify the name of the cache you created above and submit; you will see in the DevTools that the cache has been deleted.

<LearnCache remove />

## Wrap Up

This guide was a brief tour of the Cache API, and we hope that now you can use Cache API in your awesome projects.
