---
title: Different methods of HTTP
slug: different-methods-of-http
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:34:35.330Z"
draft: false
coverImage: ""
points: 10
---

HTTP has a fixed number of methods that the client can use to indicate what type of operation it wants to perform via the request. These request methods are also known as HTTP verbs. A request method can be safe, idempotent, or cacheable.

If an HTTP method doesn’t alter the state of the server apart from logging, it is called a [safe method](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP). GET, HEAD, or OPTIONS methods are safe methods. It is important to note that all the safe HTTP methods are also idempotent, but not all idempotent HTTP methods are safe.

When multiple calls of an HTTP method yield the same result and leave the server in the same state, then the HTTP method is called [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent). When implemented in the correct manner, the GET, HEAD, PUT, and DELETE methods are all idempotent, but not the POST method.

If the response of an HTTP method can be cached and used later, then the method is called cacheable. GET and HEAD methods are [cacheable](https://developer.mozilla.org/en-US/docs/Glossary/cacheable). POST and PATCH methods are also cacheable if [the Content-Location header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location) is set. The 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, and 501 status codes are cacheable.

We will discuss the different types of HTTP requests in the next section.
