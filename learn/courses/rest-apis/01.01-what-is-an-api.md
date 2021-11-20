---
title: What is an API?
description: ''
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:32:39.415Z
draft: false
coverImage: ''
points: 10
---

In order to understand REST APIs, you need to understand what an API (or Application Programming Interface) is and how they work.

## What is an API?

An API or Application Programming Interface is a set of guidelines or rules that state how applications interact. An API lets one application request data from another system.

<WhatIsAPI />

## Why are APIs important?

An API lets one application use the capabilities of another system. This means that if you want to build an e-commerce application, you can concentrate on building only your product. You can use the API of different applications for payments, billings, authentication, etc.

## Example of an API

Imagine that you are building a trading platform. You will need to support various features like exchange of currency, fluctuation of market rates, authentication, payment processing, and much more. Building and maintaining such functionalities is difficult. To resolve these issues, you can use integrations with various other software via APIs.

## Request, Response and Resource

The three main components of an API are Request, Response and Resource. You would make a **request** to a server. The server will return a **response** which will contain data regarding a **resource**.

For example, if you want to place a new order for a shirt in an e-commerce store, you would click on the "place order" button. When you click on that button, your browser sends a **request** to the e-commerce server. The e-commerce server will send a **response** to your browser after creating a new order, which is the **resource** in this case.

## Anatomy of an API request

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| Endpoint | The **URL** that you request for                               |
| Method   | The **type** of your request                                   |
| Headers  | **Additional information** for either the client or the server |
| Body     | **Information** sent to the server                             |

<AnatomyOfAPIRequest />

## Anatomy of an API response

| Name    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| Headers | **Additional information** for either the client or the server |
| Body    | Data related to the **resource** requested from the server     |

<AnatomyOfAPIResponse />
