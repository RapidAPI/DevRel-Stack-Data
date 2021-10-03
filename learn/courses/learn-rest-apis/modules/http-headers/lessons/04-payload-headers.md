---
title: Payload headers
slug: payload-headers
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:50:00.858Z"
draft: false
coverImage: ""
points: 5
---

[The Payload headers](https://developer.mozilla.org/en-US/docs/Glossary/Payload_header) contain information about the payload like the length of the message, range of the resource carried in the payload, encoding, etc. This type of headers can be present in both the request and response messages.

Payload headers include the following:

## Content-Length
The [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) HTTP header is used to indicate the size of the message body in bytes.

```json
 Content-Length: 3495
```

## Content-Range
The [Content-Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) HTTP header is used to indicate the position of a partial message in a full body message.

```json
Content-Range: bytes 500-1000/*
```
