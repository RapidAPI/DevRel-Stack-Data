---
title: OPTIONS request
slug: options-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:36:08.658Z"
draft: true
coverImage: ""
points: 10
---

[The OPTION request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) method is used to obtain information about the communication options that are available between the requested URL and the server. The response to an OPTIONS request isn’t cacheable.

An example of an OPTIONS request looks like this:

```bash
OPTIONS /users HTTP/1.1
Host: https://www.website.com
```

The response to an OPTIONS request can be the following:

```bash
Allow: OPTIONS, GET, HEAD, POST
```

If [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is enabled on the server, [a preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) is sent with the OPTIONS method so that the server can respond if it can accept requests from the requested URL.
