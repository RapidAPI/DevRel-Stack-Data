---
title: TRACE request
slug: trace-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:36:14.780Z"
draft: true
coverImage: ""
points: 5
---

[The TRACE request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE) method is used to perform a remote, application-layer loop-back of the request message. The final recipient can be the origin server, the first proxy, or the gateway which should indicate if the message was received from the client by responding with a status code of 200.

An example of a TRACE request looks like this:

```bash
TRACE /users HTTP/1.1
Host: https://www.website.com
```
