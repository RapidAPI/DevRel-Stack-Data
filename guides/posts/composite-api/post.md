---
title: What are Composite APIs?
description: 'Composite API is a design approach in which the developer sequentially batch API requests into a single API call.'
publishedDate: 2021-10-27T17:46:45.950Z
lastModifiedDate: 2021-10-27T17:46:45.950Z
authors:
    - saad
category: api
tags:
    - composite-api
coverImage: ''
---

<Lead>
	There are many different types of APIs available that you can use in your
	applications. There are Open APIs, also known as public APIs, partner APIs
	that are visible to the strategic partners of your product, internal or
	private APIs designed to handle the inner working of your product, and last
	but not least, composite APIs.
</Lead>

Let’s take a look at composite APIs in detail.

## Composite APIs

It is a design approach in which the developer sequentially batch API requests into a single API call. You can use the response body of one request as the input for the other request. All the response bodies and the HTTP statuses are returned in a single response body. All these API calls are considered as a single call for your API limits.

## Parameters Affecting The Design of a Composite API

Various parameters affect the design of composite APIs. Let’s take a look at them:

### Request Representation

To design a Composite API, you need to provide an array of objects that includes the HTTP method, endpoint, and a way to pass data/parameters with each request. It is crucial for the implementation since this array is used to make several API calls using a single call.

### Authentication

You also need to decide whether you want each request to be authenticated or let the credentials pass from the composite call to the individual calls.

### Response Rendering

You also need to respond to each closing request to the user.

### Field References

You can make the most out of sequential calls by including the data from the previous request.

### Error Handling

Since you are making multiple API calls using a single request, any of them can fail due to some unknown error. So to resolve it, you need to put forward details to aid consumers in debugging the response.

### Partial Successes

You need to decide whether to continue with the API call if any requests have resulted in an error.

### All or none

Some use cases perhaps expect transactional features, where an error “rolls back” any alteration in earlier steps.
