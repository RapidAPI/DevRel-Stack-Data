---
title: What are the different HTTP request methods?
slug: http-request-method
description: There are nine HTTP request method that exist. Let's take a look at them.
publishedDate: 2021-10-06T16:28:30.765Z
lastModifiedDate: 2021-10-06T16:28:30.765Z
authors:
  - saad
category: api
tags:
  - method
  - rest
coverImage: ''
draft: false
---

<Lead>
The web applications communicate to servers through APIs. These APIs use HTTP methods to perform different operations, and nine HTTP methods exist to make requests to the server. Four methods are the most common because they execute CRUD (Create, Read, Update, and Delete) operations.
</Lead>

## GET

You use this HTTP method to request some resources from the server. It is equivalent to read in the CRUD operations. Get method should only be used to fetch data from the server. The response is generally a JSON object with the data you requested.

## POST

Whenever you need to create new data in the database, you use the POST method. This method takes an object and sends it to the server. The server code then handles the data, processes it if needed, and puts it in the database.

## PUT

You often need to update the existing data of the database, and the HTTP PUT method allows you to do just this. Like the POST method, it also takes an object and sends it to the server, and the server then updates the databases with the updated data.

## DELETE

This method exists to delete data off the server. It is provided with a payload with information like the ID of the record the user wants to delete. Once the ID is found, it is deleted from the database.

## PATCH

The PATCH request method is used to modify only the necessary part of the data or response. The PATCH method doesn't modify the entire response. It only modifies partial modifications to a resource.

Here is a list of the rest of the HTTP methods:

- HEAD
- CONNECT
- OPTIONS
- TRACE
