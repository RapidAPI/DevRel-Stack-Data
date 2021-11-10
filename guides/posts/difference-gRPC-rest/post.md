---
title: What are the differences between gRPC and REST?
description: 'There are three most common API architectures in use today: REST, RPC, and GraphQL. RPC (Remote Procedure Call) uses the gRPC framework developed by Google for implementing RPC APIs.'
publishedDate: 2021-10-20T17:13:16.859Z
lastModifiedDate: 2021-10-20T17:13:16.859Z
authors:
    - saad
category: Comparison
tags:
    - gRPC
    - rest
coverImage: ''
---

You build APIs to allow your applications to communicate with other applications. API acts as a bridge and provides you with different means for this communication. There are three most common API architectures in use today: REST, RPC, and GraphQL. RPC (Remote Procedure Call) uses the gRPC framework developed by Google for implementing RPC APIs.

Before we dive into looking at the differences between REST and gRPC, let’s take a look at them first.

## Representational State Transfer (REST) API

This is the most common type of API. REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

## gRPC

[gRPC](https://grpc.io/) is an open-source framework developed by Google in 2015 for implementing RPC APIs using the HTTP/2 protocol. gRPC supports a lot of programming languages, so you can use it for microservice communication.

## Differences Between gRPC And REST API

Let’s take a look at some of the differences between gRPC and REST APIs:

| gRPC                                                                                                                                                      | REST API                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| gRPC uses the latest internet communication protocol, i.e., HTTP/2, that allows bidirectional communication.                                              | REST API uses HTTP/1.1 protocol for the request/response model.                                                                                                                                                                      |
| gRPC can concurrently handle multiple requests at a time.                                                                                                 | REST APIs, due to their unidirectional model, can not handle multiple requests at the same time. If the service is getting many requests from multiple, the REST API will handle each request at a time, making it slower than gRPC. |
| gRPC has limited browser support since it requires gRPC-web and a proxy layer to perform conversions between HTTP/1.1 and HTTP/2.0                        | REST APIs are fully supported across all web browsers.                                                                                                                                                                               |
| gRPC uses Protocol Buffer to serialize payload data. This solution is lighter since it enables a highly compressed format and reduces the message’s size. | REST API uses either JSON or XML to communicate between client and server.                                                                                                                                                           |
