---
title: "Everything you need to know about HTTP Requests"
date: "Mar 10 2022"
id: "1501852863076646915"
author: "Pratham"
---

## All about HTTP requests

<Tweet>

Before jumping onto HTTP Requests, let's first discuss a bit about HTTP.

HTTP stands for HyperText Transfer Protocol.

</Tweet>

<Tweet>

HTTP is entirely based on the client-server model.

The client initiates the request then waits until it receives a response from the server.

</Tweet>

<Tweet>

The client can initiate the request using HTTP request methods.

HTTP request methods are the actions initiated from the client-side to get the desired resource.

</Tweet>

<Tweet>

There are 9 HTTP request methods:

- GET
- PUT
- POST
- HEAD
- TRACE
- PATCH
- DELETE
- OPTIONS
- CONNECT

</Tweet>

<Tweet>

But there are four widely used HTTP verbs:

📄 GET (read existing data)
📲 POST (create a new response or data)
♻️ PATCH (update the data)
🗑️ DELETE (delete the data)

</Tweet>

<Tweet>

📌 GET

The GET method is the most common of all these request methods. It is used to get the desired resources from the server.

The GET methods don't affect the state of the server.

</Tweet>

<Tweet>

📌 POST

The POST method is used to submit the information to the server. As we're submitting data, the POST method often changes the state of the server.

</Tweet>

<Tweet>

📌 PUT

The PUT method is used whenever you need to change the resource. The resource, which is already a part of resource collection.

</Tweet>

<Tweet>

📌 PATCH

The PATCH request method is used to modify only the necessary part of the data or response. The PATCH method doesn't modify the entire response.

</Tweet>

<Tweet>

📌 HEAD

The server sends the response without the body. The HEAD method asks for a response identical to that of a GET request, but it is faster as small data is transferred.

</Tweet>

<Tweet>

📌 DELETE

As the name says, the DELETE request method is used to delete the specified resource.

It requests that the origin server delete the resource identified by the Request-URL.

</Tweet>

<Tweet>

📌 CONNECT

The CONNECT method establishes two-way communication between the client and the requested resource.

CONNECT request method is used to push your proxy to start an HTTP tunnel.

</Tweet>

<Tweet>

📌 OPTIONS

The OPTIONS method is used to describe the communication options available for the target resource.

The client can either specify a URL for describing the communication options available for a specific resource or an asterisk (*) if they want to target the server.

</Tweet>

<Tweet>

📌 TRACE

The TRACE method is generally used for debugging. It performs a message loop-back test along the path to the desired data.

</Tweet>

<Tweet>

There are three main characteristics of HTTP Request Methods:

1. Safe
2. Idempotent
3. Cacheable

</Tweet>

<Tweet>

📌 Safe

We can call an HTTP request method safe if it doesn't affect the server's state.

The safe methods request the server to send data without performing any modification to the original data.

Hence safe methods accomplish read-only operations.

</Tweet>

<Tweet>

Even though they are read-only operations, they sometimes cause a change in server state; the server can update its statistics.

One thing to note here is that the safe methods never request the server to change its state.

</Tweet>

<Tweet>

📌 Idempotent

Idempotent methods have no side effects on the server.

We can call them in a row, and they guarantee that they will not affect the server state (except for keeping statistics).

GET, HEAD, OPTIONS, PUT, DELETE, and TRACE methods are idempotent.

</Tweet>

<Tweet>

All safe methods are idempotent, but not all idempotent methods are safe.

To be an idempotent method, only the state of the server matters, not the code returned by it. Hence DELETE method is idempotent but not safe.

</Tweet>

<Tweet>

Another thing to note here is that the client-side ensures the validation of idempotence. The bad codebase can shatter the idempotent constraint.

</Tweet>

<Tweet>

📌 Cacheable

As the term suggests, we can call HTTP response methods cacheable if it is possible to cache the response for later use.

However, there are some constraints: 👇🏻

</Tweet>

<Tweet>

Constraints for an HTTP response to be cached:

1. Method should be cacheable. Only GET and HEAD methods are cacheable.

2. PUT and PATCH can be cached if the `Content-Location` header is set.

</Tweet>

<Tweet>

3. Only a few status codes are cacheable: 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, and 501.

4. Headers like `Cache-Control` can be used to prevent caching.

</Tweet>

<Tweet>

With that being said, this is pretty much it for this thread. It

Visit [RapidAPI Hub](https://rapidapi.com/hub?utm_source=threads&utm_medium=DevRel&utm_campaign=DevRel) and explore more than 40,000 APIs using single API key.

</Tweet>
