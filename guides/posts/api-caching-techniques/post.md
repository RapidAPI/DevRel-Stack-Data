---
title: General Techniques of API Caching
description: APIs can cache their response, and this cache can be used to fetch the same response later. When implemented correctly, API caching offers a great level of efficiency.
publishedDate: 2022-01-19T18:41:43.732Z
lastModifiedDate: 2022-01-19T18:41:43.732Z
authors:
    - ahmadBilal
categories:
    - api
tags:
    - cache
coverImage: ''
---

<Lead>

If some recurring requests produce the same response, we can use a cached version of the response to avoid the excessive load.

</Lead>

## API Caching

Caching enables us to store copies of frequently accessed data in several places along the request-response path. Today, APIs use caching extensively, and it is also one of the architectural constraints of REST APIs.

When a client requests some resources, the request first goes through a cache and then to the server. If the cache contains the updated data, the request uses that data to satisfy the user request. If it does not, the data comes from the server.

There are two techniques of caching based on where you keep the cache.

1. Client Caching
2. Server Caching

### Client Caching

If you take a good look at your API calls, you may notice several redundant requests that are called with every page load or when components are re-rendered. Besides slowing down your app, these redundant calls also put a load on the server.

Therefore, caching API responses on the client level improves both client and server efficiency. Any routinely fetched request can be kept locally on the client-side, reducing the need for additional API calls.

We can store client-side caches in Cache Storage, Local Storage, Session Storage, IndexedDB, or Cookies depending on the type of data.

### Server Caching

Server Caching reduces the load on the server by storing repeated calls in a cache. As a result, the server does not have to process these requests.

Server Caching does not significantly affect the client-side because it still has to request and wait for the server's response. The client cache caches the response on the browser level. The server cache does the same thing but on the server.

### Hybrid Approach

We can adopt a hybrid technique by balancing client and server-side caching, but it has cost limitations. The client has limited local storage available for the cache, so we must decide on a balance during the hybrid approach of caching.

### Security

Care must be taken while caching APIs because not everything that can be cached should be cached. API keys, tokens, and other credentials can be a security hazard if cached improperly. These implementations may leave the credentials exposed, compromising the application's security.

## Conclusion

API caching offers many benefits to quality of service and performance. However, there are things you should consider to implement it properly.
