---
title: Best Practices for Working with Kafka API
description: 'Apache Kafka is an event streaming platform that provides five core APIs for Java and Scala: Admin API, Producer API, Consumer API, Stream API, and Kafka Connect API.'
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
category: bestPractices
tags:
    - apache-kafka
    - kafka
    - best-practices
coverImage: ''
---

<Lead>

[Apache Kafka](https://kafka.apache.org/) is used for building data pipelines, real-time data streams, etc. It is an event streaming platform that provides five core APIs for Java and Scala: Admin API, Producer API, Consumer API, Stream API, and Kafka Connect API.

</Lead>

Let’s take a look at some of the best practices for using Kafka APIs.

## Best Practices

### Use The Latest Version

Ensure that your consumers are running versions of Kafka not older than 0.10. The Consumer API is using [Apache Zookeeper](https://zookeeper.apache.org/) in version 0.8.x for consumer group coordination. There are some known bugs that can produce a rebalance storm. With a rebalance storm, consumers do not make real progress on consumption because the partition ownership is continually shuffled among them.

### High-Speed Consumer Socket Buffer Ingest

Kafka version 0.10.x has a parameter `receive.buffer.bytes` whose default value is 64 KB. This value is too small for a high-throughput environment, especially if the network’s bandwidth-delay-product between the broker and the consumer is larger than a local area network (LAN). That’s why for a high-bandwidth network, you should configure socket buffers to 8 or 16 MB.

### Configure To Wait For Acknowledgement

Your producer API should wait for the acknowledgment because this is how it will know that the message has made it to the partition on the broker. For this, if you are using Kafka version 0.10.x, you can use the setting `acks` to implement this.

### Configure Retries on Producers

You need to ensure that the producer has successfully written the stream of events. If it fails, it should retry to publish it again. The default value for the retries is three that in my case, is far too low. If your application can not expense the data loss, you should set the retries value to the maximum.

### Track Metrics

Ensure that you are tracking metrics like the number of produced messages, average produced message size, and the number of consumed messages from your Kafka API.
