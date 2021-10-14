---
title: Most common HTTP status codes
slug: common-http-status-code
description: HTTP status codes are there to help the client understand whether the request was successful or not.
publishedDate: 2021-10-14T14:12:52.664Z
lastModifiedDate: 2021-10-14T14:12:52.664Z
authors:
    - saad
category: http
tags:
    - http
coverImage: ''
draft: false
---

When you are building a REST API, make sure you follow all the best practices. One of them is using HTTP status codes. Let’s take a look at them.

## What are HTTP status codes?

HTTP status codes are there to help the client understand whether the request was successful or not. They are numbers from 100s to 500s, and each has a separate meaning. These codes are sent to the client along with the response. The client also relies on these codes for implementing different error handling techniques.

## HTTP Status Code

Let’s look at some of the most common HTTP status codes and their use in an application.

### 200 OK

This status code tells you that everything went smoothly, and the request was a success.

### 201 Created

It tells you that the request was successful, and also it created a new record. It is generally used with PUT/POST methods.

### 400 Bad Request

It tells you that the server can not process the request due to a client-side error. You would get this if you didn’t pass the payload where required or have invalid formatting.

### 401 Unauthorized

If you try to access a page that requires user authentication, you will receive a 401 status code. You would need to authenticate yourself to open the webpage you want.

### 403 Forbidden

You get this status code when you are authenticated but do not have access rights to a particular webpage.

### 404 Not Found

It tells you that the page you are trying to access is not available.

### 408 Request Timeout

When the server needs to shut down an idle connection, it sends the 408 status code.

### 500 Internal Server Error

It tells that the server does not know how to process the HTTP request.
