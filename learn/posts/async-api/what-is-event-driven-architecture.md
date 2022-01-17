---
title: What is Event-Driven Architecture?
description: ''
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:32:39.415Z
draft: false
coverImage: ''
points: 10
---

## What is Event-Driven Architecture?

In an Event-Driven Architecture, a system reacts to an event and sends an acknowledgment. In this type of architecture, a system generally sends a response when an event occurs.

An Event-Driven Architecture contains the following parts:

| Name           | Description                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Publisher      | The application that sends the message                                                                                    |
| Message broker | An intermediate infrastructure responsible for facilitating the sending of a message from the Publisher to the Subscriber |
| Subscriber     | The application that receives the message sent by the Publisher                                                           |
| Message        | A piece of information that is sent to all the interested Subscribers from a Publisher via the Message broker             |
| Channels       | The Message broker sends the message to the Subscribers via multiple channels                                             |
