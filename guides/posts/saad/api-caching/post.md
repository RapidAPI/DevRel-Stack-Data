---
title: How does API caching work?
slug: api-caching
description: REST APIs cache its response. This cache can be used to fetch the same response later. Let's take a look at it.
publishedDate: 2021-10-07T17:01:53.644Z
lastModifiedDate: 2021-10-07T17:01:53.644Z
authors:
  - saad
category: api
tags:
  - cache
coverImage: ''
draft: false
---

<Lead>
A REST API works by sending a request to the server and getting a response in return. Every time you request data, it uses the GET method to fetch that information. Do you think that if you visit a different page of the same website and then get back to the original page, another GET request will be sent to the server to get the same data? The answer to it is no. Let’s take a look at it.
<Lead>

## API Caching

Caching is the ability to store copies of frequently accessed data in several places along the request-response path. The REST APIs are cacheable. It is one of its architectural constraints.

When a client requests some resources, the request first goes through a cache and then to the server. If the cache contains the updated data, the request uses that data to satisfy the user request. If it does not, the data comes from the server.

There are three types of caches:

- Client Cache
- Server Cache
- Proxy Cache

The client cache caches the response on the browser level. The server cache does the same thing but on the server. And proxy cache implements caching on the proxy server between the client and the server.

## Cache Supported HTTP Methods

Since REST API is cacheable, two methods support the caching: GET and POST. The GET request is cached by default. But the POST request, on the other hand, can be cached if required. You can set your POST request to cache by either providing it with an Expire or a Cache-Control header.

The PUT and DELETE methods’ responses are not cacheable.

## Benefits of API Caching

There are several benefits of caching your API’s response. Here are some of them:

- Your quality of service improves.
- The website consumes less bandwidth.
- The website latency decreases.
- Server load also decreases.
