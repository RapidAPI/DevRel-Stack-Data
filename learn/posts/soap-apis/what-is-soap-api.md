---
title: What is a SOAP API?
description: ''
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:32:39.415Z
draft: false
coverImage: ''
points: 10
---

## What is a SOAP API?

SOAP is a messaging protocol for transferring information via the internet. SOAP uses [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) for exchanging messages.

A SOAP message is an XML document containing the following parts:

| Name     | Description                                                               | Mandatory |
| -------- | ------------------------------------------------------------------------- | --------- |
| Envelope | The start and the end of the message                                      | Yes       |
| Header   | The optional attributes of the message used in processing the message     | No        |
| Body     | The data comprising the message being sent                                | Yes       |
| Fault    | Provides information about errors that occur while processing the message | No        |

<AnatomyOfSOAPMessage />

## Example of a SOAP API

The following component shows an example of how a SOAP API request and response looks like. Click on the **Send request** button in the component below to understand the syntax of a SOAP API request and response.

<AnatomyOfSOAPRequest />
