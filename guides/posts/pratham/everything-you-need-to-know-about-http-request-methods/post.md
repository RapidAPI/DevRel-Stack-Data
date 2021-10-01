---
title: "Everything You Need to Know About HTTP Request Methods"
description: "HTTP request methods are the actions initiated from the client-side to perform certain actions."
slug: "everything-need-know-http-request-methods"
authors:
 - pratham
category: api
tags: 
 - api
 - http
publishedDate: "2021-09-30T08:00:00+08:00"
coverImage: ""
---

<Lead>
 HTTP request methods are the actions initiated from the client-side to perform certain actions. These HTTP request methods are sometimes called nouns or referred to as HTTP verbs. 
</Lead>
    
   
There are 9 HTTP request methods. Let's talk about them in a bit more detail.

### 1. GET  

The GET method is the most common of all these request methods. It is used to get the desired resources from the server.
The GET method doesn't affect the state of the server.  

### 2. POST

The POST method is used to submit the information to the server. As we're submitting data, the POST method often changes the state of the server.

### 3. PUT

The PUT method is used whenever you need to change the resource. The resource, which is already a part of resource collection.

### 4. PATCH

The PATCH request method is used to modify only the necessary part of the data or response. The PATCH method doesn't modify the entire response.

### 5. HEAD

The server sends the response without the body. The HEAD method asks for a response identical to that of a GET request, but it is faster as small data is transferred.

### 6. DELETE

As the name says, the DELETE request method is used to delete the specified resource. It requests that the origin server delete the resource identified by the Request-URL.

### 7. CONNECT

The CONNECT method establishes two-way communication between the client and the requested resource.

CONNECT request method is used to push your proxy to start an HTTP tunnel.

### 8. OPTIONS

The OPTIONS method is used to describe the communication options available for the target resource. The client can either specify a URL for describing the communication options available for a specific resource or an asterisk (&ast;) if they want to target the server.

### 9. TRACE

The TRACE method is generally used for debugging. It performs a message loop-back test along the path to the desired data.  

### There are three main characteristics of HTTP Request Methods

**1. Safe**

We can call an HTTP request method safe if it doesn't affect the server's state.  
The safe methods request the server to send data without performing any modification to the original data. Hence safe methods accomplish read-only operations. 

Even though they are read-only operations, they sometimes cause a change in server state; the server can update its statistics.

One thing to note here is that the safe methods never request the server to change its state.

**2. Idempotent**

Idempotent methods have no side effects on the server. We can call them in a row, and they guarantee that they will not affect the server state (except for keeping statistics).

GET, HEAD, OPTIONS, PUT, DELETE, and TRACE methods are idempotent.

*All safe methods are idempotent, but not all idempotent methods are safe.*

To be an idempotent method, only the state of the server matters, not the code returned by it. Hence DELETE method is idempotent but not safe.

Another thing to note here is that the client-side ensures the validation of idempotence. The bad codebase can shatter the idempotent constraint.

**3. Cacheable**

As the term suggests, we can call HTTP response methods cacheable if it is possible to cache the response for later use.

However, there are some constraints:

1. Method should be cacheable. Only GET and HEAD methods are cacheable.
2. PUT and PATCH can be cached if the `Content-Location` header is set.
3. Only a few status codes are cacheable: 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, and 501.
4. Headers like `Cache-Control` can be used to prevent caching.
