---
title: "Ten Widely Used HTTP Headers"
description: "Client and server can pass the extra bit of information with the request and response using HTTP headers."
slug: "ten-widely-used-http-headers"
authors:
  - pratham
category: api
tags:
  - http
  - api
publishedDate: 2021-10-09T08:00:00+08:00
lastModifiedDate: 2021-10-09T08:00:00+08:00
coverImage: ""
---

<Lead>
  Client and server can pass the extra bit of information with the request and response using HTTP headers. HTTP headers are not case-sensitive.
</Lead>

The HTTP headers are divided into four categories:

1. Request headers: Client to Server
2. Response headers: Server to Client
3. Representation headers: Information about the body of the resource
4. Payload headers: Information about the payload data

Let's talk about ten widely used HTTP Headers:

## Accept

`Accept` header is used when the client wants to inform the server about the type of data that the client can understand.

For example,

```json
Accept: image/png
```

## Accept-Encoding

The `Accept-Encoding` header is usually attached with a request to the server, indicating which encoding method is understandable by the client.

For example,

```json
Accept-Encoding: gzip
```

## Authorization

As the header name suggests, the `Authorization` request header is used to pass the credentials so that the server can authenticate the client.

For example,

```json
Authorization: Basic dgfhWUytzgdfhgSYG
```

## Accept-Language

The `Accept-Language` request header is used to describe which language is understood by the client.

For example,

```json
Accept-Language: en-US
```

## Content-Type

`Content-Type` representational header specifies the media type of the resource. This header indicates the content type of the returned data when the client didn't mention any content encoding.

For example,

```json
Content-Type: text/html; charset=UTF-8
```

## Content-Location

`Content-Location` header indicates the alternate location for the response. It is used when an API can return data in different formats depending on the `Accept` header.

For example,

```json
Content-Location: /examples/foo.json
Content-Location: /examples/foo.xml
```

## Content-Encoding

The `Content-Encoding` header is used to compress the message data or payload.

For example,

```json
Content-Encoding: gzip
```

## Content-Length

As the header name suggests, it indicates the size of the resource or message body in bytes. It can be used with both request and response.

For example,

```json
Content-Length: 148
```

## Content-Language

`Content-Language` indicates the human logical language of the response. This header is used to deliver resources in multiple languages so that users can choose their preferred language.

For example,

```json
Content-Language: en-US
```

## Cache-Control

`Cache-Control` header is used as a caching mechanism for both the request and response.
There are several directives(values) that we can pass with this header.

For example,

```json
Cache-Control: max-age
```
