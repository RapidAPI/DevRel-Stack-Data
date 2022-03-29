---
title: "Correct flow of an HTTP session."
date: "Mar 25 2022"
id: "1507308343890694147"
---

## Correct flow of an HTTP session

<Tweet>

In HTTP protocol, a typical session has three phases:

• Establishes a TCP connection
• Client sends an HTTP request
• Server sends an HTTP response

</Tweet>

<Tweet>

📌 Establishing a connection

The client establishes the connection with the server using the TCP layer.

Default HTTP port with TCP layer is 80 but other ports might be used as well.

</Tweet>

<Tweet>

As the 80 port number is the default for the HTTP protocol, so adding it with the domain is not mandatory.

For example, 

http://RapidAPI.com/hub and http://RapidAPI.com/hub are the same things.

But http://RapidAPI.com:8080/hub is different.

</Tweet>

<Tweet>

📌 HTTP Request

After a successful connection, the client can ask for data from the server.

User-agent (mostly web browsers) can send HTTP requests and ask for the necessary data.

</Tweet>

<Tweet>

A typical HTTP request contains three things:

- Request methods
- HTTP headers
- Method body (optional)

</Tweet>

<Tweet>

There are request methods that clients can use to perform various operations.

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

📌 HTTP Response

The third and final step in the HTTP session is handled by the server, and that is HTTP response.

</Tweet>

<Tweet>

After the client sent the request, the server process it and sends the response accordingly.

Server always returns a response doesn't matter request is successful or not.

</Tweet>

<Tweet>

How does a client know that the request is successful or not?

This is where HTTP status codes come into play.

They are predefined codes according to the response.

https://twitter.com/Rapid_API/status/1444026755363348488

</Tweet>

<Tweet>

The structure of the HTTP response looks like this:

• Status line 
• Response header
• Message body (optional)

</Tweet>

<Tweet>

With that being said, that's pretty much it for this thread.

Follow [RapidAPI on Twitter](https://twitter.com/Rapid_API) for more exclusive content.

</Tweet>
