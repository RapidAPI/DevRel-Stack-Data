---
title: Difference between Kafka and REST API
description: The REST API is one of the most popular API architectures out there. But when you need to build an event streaming platform, you use the Kafka API. Let's take a look at the differences between Kafka and REST API in this piece.
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
categories:
    - comparison
tags:
    - apache-kafka
    - kafka
    - rest
coverImage: ''
---

<Lead>

The purpose of APIs is to essentially provide a way to communicate between different services, development sides, microservices, etc. The REST API is one of the most popular API architectures out there. But when you need to build an event streaming platform, you use the Kafka API.

</Lead>

## What is the REST API?

REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

## Kafka API

[Apache Kafka](https://kafka.apache.org/) is an event streaming platform that combines three capabilities so that you can implement different use cases. Event streaming is used to get data in real-time from other event sources like databases, sensors, mobile devices, cloud services, and software applications in the form of streams of events.

To perform different operations, Apache Kafka provides five core APIs:

-   Admin API
-   Producer API
-   Consumer API
-   Streams API
-   Kafka Connect API

## Difference Between Kafka APIs and REST API

Let’s take a look at the differences between these two:

| Kafka APIs                                                                    | REST API                                                                                                                                                                      |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kafka APIs are used to implement data pipelines, real-time data streams, etc. | It is used to act as a bridge between client and server. The client requests data from the server, and the server sends back a response. All this is done using the REST API. |
| With Kafka APIs, you publish and subscribe to topics.                         | With the REST API, you request and await a response. It is also done on demand.                                                                                               |
| Kafka APIs store data in topics.                                              | With REST APIs, you can store data in the database on the server.                                                                                                             |
| With Kafka API, you often are not interested in a response.                   | You are typically expecting a response back when using REST APIs.                                                                                                             |
| It provides bidirectional communication.                                      | The REST API is unidirectional, i.e., you can only send or receive a response at a time.                                                                                      |
