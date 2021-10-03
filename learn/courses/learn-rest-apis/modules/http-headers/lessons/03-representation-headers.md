---
title: Representation headers
slug: representation-headers
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:49:52.457Z"
draft: false
coverImage: ""
points: 5
---

[The Representation headers](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header) contain information about the resource body which is sent in a response.

Representation headers include the following:

## Content-Type
The [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header is used to indicate the media type of the resource before any form of content encoding.

```json
Content-Type: text/html; charset=UTF-8
```

## Content-Encoding
The [Content-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) HTTP header is used to decode the message payload in order to obtain the original format of the payload. It is mainly used to do lossless compression of the payload.

```json
Content-Encoding: compress
Content-Encoding: gzip
```

## Content-Language
The [Content-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) HTTP header is used to indicate the language intended for a particular type of audience. If no `Content-Language` is specified, then the content is intended for all language audiences.

```json
Content-Language: en-US
Content-Language: en-CA
```

## Content-Location
The [Content-Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location) HTTP header is used to indicate an alternate location for the response. Base on the `Accept` request header, the server can respond with different response headers.

```json
Content-Location: /documents/bar.json
Content-Location: /documents/bar.php
```
