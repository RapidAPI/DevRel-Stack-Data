---
title: What is gRPC?
slug: gRPC
description: gRPC is an open-source framework developed by Google in 2015 for implementing RPC APIs using the HTTP/2 protocol.
publishedDate: 2021-10-20T17:13:16.859Z
lastModifiedDate: 2021-10-20T17:13:16.859Z
authors:
    - saad
category: api
tags:
    - gRPC
coverImage: ''
draft: false
---

<Lead>
These days microservices are becoming more and more popular. The developers often use them during the development of large-scale applications. But there is a challenge that comes along with using the microservices, i.e., they are usually written in different languages, and the exchange of information can become difficult.
</Lead>

This is where gRPC comes into the picture, but before we discuss it, we need to understand what gRPC is.

## RPC

Remote Procedure Call (RPC) is the oldest client-server communication method in use today. Instead of the traditional HTTP call, RPC uses a function call. It means that on the client-side, you invoke a function that is written on the server-side code. It only looks like you are calling it like a regular function but instead, it is happening through the network.

## gRPC

gRPC is an open-source framework developed by Google in 2015 for implementing RPC APIs using the HTTP/2 protocol. The ‘g’ in gRPC does not stand for Google. In fact, Google changes its [meaning](https://github.com/grpc/grpc/blob/master/doc/g_stands_for.md) in every release.

With gRPC, the abstraction has become easy since it is a function call. It also supports a lot of programming languages. So you can use gRPC in microservices to communicate with other services that are written in some different programming language

![gRPC Working](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/4b35dafeacc6f9bb87915fea98c24aeef85094f0/guides/posts/saad/gRPC/images/gRPC.jpg)

You can see in the picture that a C++ service is using gRPC to communicate with a Ruby and Android-Java client using protocol request and response.

## Benefits of Using gRPC

Let’s take a look at some of the benefits of using gRPC:

The messages in gRPC are lightweight. Depending on the type of call, gRPC-specific messages can be up to 30% smaller in size than JSON messages.
gRPC provides high performance. It can be [8 times](https://docs.microsoft.com/en-us/dotnet/architecture/cloud-native/grpc) faster than REST and JSON communication.
gRPC automatically generates code for different programming languages for the purpose of working with them.
