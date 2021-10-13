---
title: Introduction to HTTP headers
slug: intro-http-headers
description: A lot goes in when you make an HTTP request. You define a method, provide some payload, and wait for a response.
publishedDate: 2021-10-13T11:27:45.681Z
lastModifiedDate: 2021-10-13T11:27:45.681Z
authors:
    - saad
category: api
tags:
    - http
coverImage: ''
draft: false
---

<Lead>
A lot goes in when you make an HTTP request. You define a method, provide some payload, and wait for a response. Sometimes, you use HTTP headers for passing some additional information.
</Lead>

## What are HTTP headers?

They use HTTP headers when the client or server needs to pass more information like the client has requested or operating system information. HTTP headers are generally name-value pairs present in the request or response.

The header names are case-sensitive. It is followed by a colon and then by the name's value. There are four types of headers according to the context:

- Request headers
- Response headers
- Representation headers
- Payload headers

## Request Headers

This header contains the information related to the website you are trying to access. Whenever you try to open a webpage, the browser sends an HTTP request to the server. The header that passes along with the request contains information about your web browser, the page you want to load, different types of outputs accepted by the browser, etc.

## Response Header

The server sends this header when it receives the request header. The header provides information in a text-record form that a web server transmits back to the client's browser. This information includes the server's file type, data, and size sent back to the client.

## Representation Header

There are different representations in which you can receive data from the server. There is XML, JSON, etc., and are widely used across the development process. The HTTP Representation header describes the particular representation of the resource sent in an HTTP message body. This header is not specific, and it can be present in both the request and response messages.

## Payload Header

This header provides the payload information for the safe transport of the original resource. It is also used for the reconstruction of the resource if it has been broken down into pieces. The information involves the length of the message payload, the part of the resource carried in the payload, etc.
