---
title: What is HTTP?
description: HTTP is a protocol that web apps use to fetch data from the internet.
publishedDate: 2021-10-06T16:28:30.765Z
lastModifiedDate: 2021-10-06T16:28:30.765Z
authors:
    - saad
category: http
tags:
    - http
coverImage: ''
---

<Lead>
	The HyperText Transfer Protocol (HTTP) is used to fetch resources from the
	Internet. It is used to load web pages using URLs. HTTP is a client-server
	protocol that means the request is initiated by the recipient, usually a web
	browser. The recipient requests HTTP and receives a response.
</Lead>

The HTTP protocol exists at the application layer in the Open Systems Interconnection (OSI) model. It is highly extensible, and because of this, it is used to fetch not only web pages but also images and videos.

## How HTTP based Systems Work

The HTTP is a client-server model. The client requests the server, and the server sends back a response. Since HTTP operates at the top-level layer of the OSI model, there are several other entities that exist between this communication. These entities are called proxies., and they act as a gateway to and back from the server.

The proxies perform several functions. For instance, they can be used for caching or filtering for potential threats. They can also be used for authentication and load balancing.

The server exists at the other side of this communication. It can be a single machine or multiple machines sharing the load. It processes the client’s request and sends back a response if needed.

## Different HTTP Methods

The client communicates with the server using different HTTP methods. These methods perform various operations. For instance, the GET method fetches records from the server. The POST method creates a new record, the PUT method updates the existing record, and the DELETE method deletes records from the server.

## HTTP Status Code

The HTTP protocol uses some standard [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) to let the client know what happened to their request. The status code 200 means that the request was successful., The status code 404 is Not Found.

To make it more generic, the status code 1xx is informational, the status code 2xx is used to show success, the status code 3xx is used for redirection, the status code 4xx is used for client error, the status code 5xx is used for server error. The ‘xx’ here are numbers from 0 to 99.
