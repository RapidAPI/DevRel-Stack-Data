---
title: CONNECT request
slug: connect-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:35:59.643Z"
draft: true
coverImage: ""
points: 5
---

[The CONNECT request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT) method is used to open a tunnel which can be used to access websites using [SSL](https://developer.mozilla.org/en-US/docs/Glossary/SSL). When a client sends a CONNECT request to a Proxy server, the server tries to establish an HTTP tunnel between the client and the server. Once the connection is established, the proxy server can forward the request to the requested endpoint.

An example of a CONNECT request looks like this:

```bash
CONNECT https://www.website.com:443 HTTP/1.1
```
