---
title: What are the differences between gRPC and GraphQL?
slug: difference-gRPC-graphql
description: 'There are two new API architectures used today that provide many different features than REST APIs.'
publishedDate: 2021-10-20T17:13:16.859Z
lastModifiedDate: 2021-10-20T17:13:16.859Z
authors:
    - saad
category: Comparison
tags:
    - gRPC
    - graphql
coverImage: ''
draft: false
---

There are two new API architectures used today that provide many different features than REST APIs. There is GraphQL that Facebook developed, and gRPC that is developed by Google. Both of these architectures are open-source, and you can contribute to their source code. Over a dozen languages support both. Still, there are a lot of differences between them.

Before we go into the differences, let’s look at these two architectures first.

## GraphQL

It is a query language that allows you to read and mutate the data in APIs. With GraphQL, you can quickly solve the problems of under-fetching and over-fetching. You get precisely the data that you request. No more, no else. You have a single entry point, i.e., /graphql, that you use to get the data.

On your backend, you define a schema that describes all the possible data that you may need to query in your application. The data is then later fetched using a syntax that replicates the data’s return shape in JSON.

## gRPC

[gRPC](https://grpc.io/) is an open-source framework developed by Google in 2015 for implementing RPC APIs using the HTTP/2 protocol. gRPC supports a lot of programming languages so that you can use them for microservice communication.

## Differences Between gRPC And GraphQL

Let’s take a look at some of the differences between gRPC and GraphQL:

| gRPC | GraphQL     |
| ----------- | ----------- |
| gRPC supports bidirectional streaming capabilities using HTTP/2 protocol. | GraphQL relies on HTTP/1.1 for client-server communication. |
| gRPC has limited browser support since it requires gRPC-web and a proxy layer to perform conversions between HTTP/1.1 and HTTP/2.0 | GraphQL is supported across all major browsers. |
| gRPC is lightweight and requires minimal resources. That’s why it is extremely fast. | GraphQL is comparatively slower than gRPC for communication. |
| gRPC uses Protocol Buffer to serialize payload data. This solution is lighter since it enables a highly compressed format and reduces the message’s size. | GraphQL requests data from the server using queries. The server sends back the response in JSON.  |
