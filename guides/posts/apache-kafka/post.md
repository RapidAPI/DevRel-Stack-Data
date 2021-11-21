---
title: Introduction to Apache Kafka
description: You can use Apache Kafka to build services like real-time data streams, and it provides five core APIs for Java and Scala to implement such services.
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
category: api
tags:
    - apache-kafka
    - kafka
coverImage: ''
---

<Lead>

When developing an application, sometimes you need to implement a data pipeline or real-time data streams, etc. You can use Apache Kafka to build such features, and it provides five core APIs for Java and Scala to implement such services.

</Lead>

## What is Apache Kafka

[Apache Kafta](https://kafka.apache.org/) is an event streaming platform that combines three capabilities so that you can implement different use cases. Event streaming is used to get data in real-time from other event sources like databases, sensors, mobile devices, cloud services, and software applications in the form of streams of events.

The three capabilities are as follow:

-   Publishing and subscribing to the streams of events
-   The user might need to store streams of events. So Apache Kafka also stores streams of events durably and reliably.
-   Process streams of events as they occur.

Let’s take a look at the core APIs of Apache Kafka.

### Admin API

It is used to manage and inspect topics, brokers, and other Kafka objects.

### Producer API

You use Producer API to publish or write a stream of events to one or more Kafka topics. It allows the client to connect to Kafka servers running in the cluster and publish the stream of topics.

### Consumer API

It is used to subscribe or read one or more topics and process the stream of events produced to them. It connects to Kafka servers running in the cluster and then costumes streams of records.

### Streams API

Apache Kafka is widely used for implementing stream processing applications and microservices. It does this using Stream API. It provides the client with higher-order functions to process the event streams, including transformations, stateful operations, windowing, processing based on event-time, etc.

### Kafka Connect API

You use it to build and run reusable data import/export connectors that consume or produce streams of events from and to external systems and applications so they can integrate with Kafka.
