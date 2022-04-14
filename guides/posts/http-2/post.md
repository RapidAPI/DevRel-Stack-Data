---
title: Introduction to HTTP/2
description: HTTP/2 protocols provide a way to improve the online experience by speeding up page loads and reducing round-trip time, especially for resource-heavy web pages. Let's briefly look at it in this piece.
publishedDate: 2021-10-13T11:27:45.681Z
lastModifiedDate: 2021-10-13T11:27:45.681Z
authors:
    - saad
categories:
		- http
tags:
    - http
    - "http/2"
coverImage: ''
---

<Lead>
	The client and server communicate via protocols on the Internet. The
	protocol – HTTP – was introduced in 1991, and its last major release,
	HTTP/1.1, was published more than two decades ago. In 2015, HTTP/2 was
	introduced that resolved a lot of significant challenges of HTTP.
</Lead>

## What is HTTP/2?

HTTP/2 protocols provide a way to improve the online experience by speeding up page loads and reducing round-trip time, especially for resource-heavy web pages. It makes our applications faster, simpler, and more robust by allowing us not to implement HTTP/1.1 workarounds in our applications. These concerns are now addressed within the transport layer.

HTTP/2 is an extension of the previous version, not a replacement. The application semantics of the HTTP is the same, and no changes were made to the core concepts such as HTTP methods, status codes, URIs, and header fields.

## Features of HTTP/2

Here are the features of HTTP/2:

-   Binary framing layer that defines how the HTTP messages are encapsulated and transferred between the client and the server.
-   Header compression.
-   It provides request and response multiplexing using the new binary framing layer. This allows the client and server to break down an HTTP message into independent frames, interleave them, and then reassemble them on the other end.
-   It offers one connection per origin.
-   The ability of the server to send multiple streams responses for a single client request.

## Benefits of HTTP/2

HTTP/2 is more efficient in terms of network resource usage than HTTP/1.1. It has reduced the perception of latency by introducing header field compression and allowing multiple concurrent exchanges on the same connection.

HTTP/2 uses efficient coding for HTTP header fields and allows the interleaving of request and response messages on the same connection.
