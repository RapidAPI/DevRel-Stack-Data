---
title: "What is REST and when you should use it?"
slug: "what-is-rest-and-when-you-should-use-it"
description: "Learn when REST API is useful and when you should consider using it."
publishedDate: 2021-10-04T15:41:15.688Z
lastModifiedDate: 2021-10-04T15:41:15.688Z
authors:
  - saad
category: api
tags:
  - rest
coverImage: ""
draft: false
---

<Lead>
  Before we discuss the REST APIs, let's first understand what an API is and what it does. In the simplest terms, an API is a middle man, a bridge that connects two sides, a waiter that takes your order and gets you food. It lets you communicate with the other side.
</Lead>

## What is the REST API?

This is the most common type of API, and many people often confuse the term API with the REST API. REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

### Performing CRUD Operations

Let's talk about how you can use a REST API. Generally, you can write your REST API, or if you need a particular kind of data, you can use any of the available REST APIs. For that, I would suggest you look at RapidAPI Hub.

There are four things that you need to do to use a REST API. Here is a list of what they are:

- Method
- REST Endpoint
- Parameters/Body
- Header (optional)

Let's take a look at each of them one by one.

To communicate with a REST API, you need to specify a method that you want to perform. Earlier in this piece, I mentioned that REST APIs let you perform CRUD operations. What kind of CRUD operation do you need to perform, you specify it here. It can be GET to read some data, POST to create some new data, PUT to update existing data, and DELETE to delete a particular data.

The next on the list is the REST endpoints. It is a URL that you would need to hit to perform data-related operations.

Then there are parameters or body that are sometimes optional. If you are performing a POST operation, you need to send some data along with the API to the server. But if you are performing a GET operation, you probably will not need to do this.

Last but not least, there is the header. Some REST APIs work without a header, and they are mostly those that do not require an API key. The rest that does require a key needs a header where you generally place that API key.

Take a look at the image below. You will see that there is a method, a URL, parameters, and a header object.

![Code snippet showing how to call a REST API using Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/improve/lms-yt-data/guides/posts/saad/what-is-rest-and-when-you-should-use-it/images/1.png)

## When To Use REST APIs?

The big question is still there of when should you use a REST API? Well, here are some scenarios where you can use REST APIs:

- When you are building a Jamstack based application.
- When you need your web app to be easily scalable.
- When you need flexibility and portability in your web app.
- Since the client and server are entirely separate, the REST API allows the development to occur quickly across different areas of your project, whether it is client or server.
