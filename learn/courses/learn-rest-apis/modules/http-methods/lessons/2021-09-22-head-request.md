---
title: HEAD request
slug: head-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:35:48.137Z"
draft: false
coverImage: ""
points: 5
---

[The HEAD request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) method is used to get the data about the resource’s header without a body. This method is similar to the GET request but with the body of the response. The HEAD request shouldn’t contain a body.

An example of a HEAD request looks like this:

```bash
HEAD /users HTTP/1.1
Host: https://www.website.com
```
