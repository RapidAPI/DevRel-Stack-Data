---
title: Different types of HTTP methods
description: ''
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:34:35.330Z
draft: false
coverImage: ''
points: 10
---

HTTP has a fixed number of methods that the client can use to indicate what type of operation it wants to perform via the request. These request methods are also known as HTTP verbs. A request method can be safe, idempotent, or cacheable.

If an HTTP method doesn’t alter the state of the server apart from logging, it is called a [safe method](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP). `GET`, `HEAD`, or `OPTIONS` methods are safe methods. It is important to note that all the safe HTTP methods are also idempotent, but not all idempotent HTTP methods are safe.

When multiple calls of an HTTP method yield the same result and leave the server in the same state, then the HTTP method is called [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent). When implemented in the correct manner, the `GET`, `HEAD`, `PUT`, and `DELETE` methods are all idempotent, but not the `POST` method.

If the response of an HTTP method can be cached and used later, then the method is called cacheable. `GET` and `HEAD` methods are [cacheable](https://developer.mozilla.org/en-US/docs/Glossary/cacheable). `POST` and `PATCH` methods are also cacheable if [the Content-Location header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location) is set. The 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, and 501 status codes are cacheable.

The details about [GET](https://rapidapi.com/learn/rest-apis/introduction/what-is-http#get), [POST](https://rapidapi.com/learn/rest-apis/introduction/what-is-http#post), [PATCH, PUT](https://rapidapi.com/learn/rest-apis/introduction/what-is-http#patch-and-put) and [DELETE](https://rapidapi.com/learn/rest-apis/introduction/what-is-http#delete) HTTP request methods have already been discussed.

Let's discuss about the remaining methods.

## HEAD

[The HEAD request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) method is used to get the data about the resource’s header without a body. This method is similar to the `GET` request but with the body of the response. The `HEAD` request shouldn’t contain a body.

## CONNECT

[The CONNECT request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT) method is used to open a tunnel which can be used to access websites using [SSL](https://developer.mozilla.org/en-US/docs/Glossary/SSL). When a client sends a `CONNECT` request to a Proxy server, the server tries to establish an HTTP tunnel between the client and the server. Once the connection is established, the proxy server can forward the request to the requested endpoint.

## OPTIONS

[The OPTION request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) method is used to obtain information about the communication options that are available between the requested URL and the server. The response to an `OPTIONS` request isn’t cacheable.

The response to an `OPTIONS` request can be the following:

```bash
Allow: OPTIONS, GET, HEAD, POST
```

If [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is enabled on the server, [a preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) is sent with the OPTIONS method so that the server can respond if it can accept requests from the requested URL.

## TRACE

[The TRACE request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE) method is used to perform a remote, application-layer loop-back of the request message. The final recipient can be the origin server, the first proxy, or the gateway which should indicate if the message was received from the client by responding with a status code of 200.
