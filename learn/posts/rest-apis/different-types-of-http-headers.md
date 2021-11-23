---
title: Different types of HTTP headers
description: ''
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:49:12.045Z
draft: false
coverImage: ''
points: 5
---

When a client requests to the server, the client can pass additional information as a part of the request via HTTP headers. As mentioned earlier, headers are case insensitive.

Headers can contain information about the type of data that the client is sending to the server. It can also contain information about authenticating a user agent with the server.

Headers can be grouped into four types based on their contexts:

## Request headers

In an HTTP request, [the Request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) pass information about the request. It contains information about the requested resource and the client making the request.

A request header can contain information about the type of the request, the URL to which the request is being made, authentication details, cache policy as well as the user agent.

Some of the popular request headers are:

### Accept

The [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header informs the server about the type of data that the client can understand.

```json
Accept: text/html
Accept: application/xhtml+xml
Accept: image/png
```

### Accept-Encoding

The [Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) HTTP header informs the server about the type of encoding the client is able to understand.

```json
Accept-Encoding: gzip
Accept-Encoding: gzip, compress
```

### Authorization

The [Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) HTTP header is used to pass credentials which lets the server authenticate a client and provide access to protected resources.

```json
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
Authorization: Bearer eyYWxhZGRpbjpvcGVuc2VzYW1l
```

## Accept-Language

The [Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) HTTP header lets the server know which local is preferred and understood by the client.

```json
Accept-Language: fr-CH
Accept-Language: en-US
```

### Cache-Control

The [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) HTTP header holds caching instructions for the client and the server.

```json
Cache-Control: stale-while-revalidate=60
Cache-Control: no-cache
```

Use the interactive component below to understand the `Cache-Control` HTTP header from a `GET` request. Click on the **Submit** button to request a response from the server:

<HTTPClient
	method="GET"
	isRequestMethodChangeDisabled
	isResponseBodyVisible={false}
	isResponseHeadersVisible
/>

## Response headers

Like the request headers contain information about the client, [the response headers](https://developer.mozilla.org/en-US/docs/Glossary/Response_header) contain information about the server from which the resource is requested. All headers in a response message can be called response headers.

Some response headers like [Age](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age), [Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location), or [Server](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server) can give a more detailed response context.

## Representation headers

[The Representation headers](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header) contain information about the resource body, which is sent in a response.

Representation headers include the following:

### Content-Type

The [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP header indicates the media type of the resource before any form of content-encoding.

```json
Content-Type: text/html; charset=UTF-8
```

Use the interactive component below to understand the `Content-Type` HTTP header from a `GET` request. Click on the **Submit** button to request a response from the server:

<HTTPClient
	method="GET"
	isRequestMethodChangeDisabled
	isResponseBodyVisible={false}
	isResponseHeadersVisible
/>

### Content-Encoding

The [Content-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) HTTP header is used to decode the message payload to obtain the original format of the payload. It is used primarily to do lossless compression of the payload.

```json
Content-Encoding: compress
Content-Encoding: gzip
```

### Content-Language

The [Content-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) HTTP header indicates the language intended for a particular type of audience. If no `Content-Language` is specified, the content is intended for all language audiences.

```json
Content-Language: en-US
Content-Language: en-CA
```

### Content-Location

The [Content-Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location) HTTP header indicates an alternate location for the response. Based on the `Accept` request header, the server can respond with different response headers.

```json
Content-Location: /documents/bar.json
Content-Location: /documents/bar.php
```

## Payload headers

[The Payload headers](https://developer.mozilla.org/en-US/docs/Glossary/Payload_header) contain information about the payload like the length of the message, range of the resource carried in the payload, encoding, etc. These headers can be present in both the request and response messages.

Payload headers include the following:

### Content-Length

The [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) HTTP header indicates the size of the message body in bytes.

```json
 Content-Length: 3495
```

### Content-Range

The [Content-Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) HTTP header indicates the position of a partial message in a full body message.

```json
Content-Range: bytes 500-1000/*
```
