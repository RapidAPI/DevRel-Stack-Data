---
title: Interactive Explanation of API Idempotency
description: Idempotency in API requests is often a confusing concept. Idempotent requests allow you to make multiple requests to the same endpoint and get the same response. This guide will help you understand the basics of idempotency.
publishedDate: 2022-03-25T15:57:17.709Z
lastModifiedDate: 2022-03-25T15:57:17.709Z
authors:
    - 'ahmad-bilal'
categories:
    - interactive
tags:
    - idempotency
    - idempotent-requests
coverImage: ''
draft: false
---

<Lead>

Idempotency in API requests is often a confusing concept. Idempotent requests allow you to make multiple requests to the same endpoint and get the same response. It is critical to know which requests are idempotent and which are not.

</Lead>

## Idempotency

Idempotency is a concept that is important to understand when making API requests. Idempotent requests are requests that can be made multiple times but they get the same response. This means that they do not affect the server in a way that will change the subsequent response.

It is critical to distinguish between idempotent and non-idempotent requests when making requests. Let's look at some examples.

## Idempotent Requests

In the case of idempotent requests, making multiple identical requests to the same endpoint will always get the same response. Here are some idempotent request methods:

### GET

GET requests do not change the server in any way, so we can easily describe GET requests as idempotent. Try the following interactive playground to send GET requests and see how they are idempotent:

<Idempotency showGet />

As you can see, sending the request again gets the same response, so GET is idempotent.

### PUT

PUT requests update/replace a resource on the server. If you send a PUT request to an endpoint, the server will replace the old resource with the new one. However, when you send the same request again, the server will not change because the old entity will be the same as the new one. So, PUT requests are idempotent.

### DELETE

DELETE requests are also idempotent because once a resource is deleted on the server, we can not remove it again. The response may differ in the subsequent requests (e.g., 404 Not Found), but the server will not change. So, DELETE requests are idempotent.

### HEAD, GET, TRACE, and OPTIONS

They are all are idempotent because these methods are primarily used to retrieve the resource representation or information at a given time. Even if you make multiple requests using HEAD, GET, TRACE, and OPTIONS methods, they’ll never change the resource state on the server.

## Non-Idempotent Requests

### POST

POST requests are defined to create new resources on the server. If we send multiple POST requests to the server, each POST request will create a new resource. Even if the requests are the same, a new resource will be created each time. So, POST requests are not idempotent. Try the following component to see this in action:

<Idempotency showPost />

### PATCH

While PUT is idempotent, PATCH is not. PATCH partially updates a resource, while PUT replaces the resource. PATCH requests are not idempotent because they keep changing the resource regardless of the shape of the old resource.

For example, if there is a counter on a resource, and you send a PATCH request to increment the counter, the counter will be incremented by 1. But if you send the same PATCH request again, the counter will be incremented again.

## Why is Idempotency Important?

The idempotency function is vitally essential since it helps improve safety and security by making APIs fault-tolerant and robust. Clients or application users may make several similar requests intentionally or by mistake. Optimizing your API with the idempotency function guarantees that clients won’t get different results when making identical calls multiple times.

Idempotency also helps to improve the performance since identical requests don't cause additional server load.

Lastly, idempotency ensures that there is consistency between systems. When identical requests are made, they deliver a similar result. Enforcing idempotency guarantees alignment between systems, making it easy to trace and audit, reducing reconciliation problems.
