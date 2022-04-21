---
title: "A brief introduction to ten widely used HTTP Headers"
date: "Mar 3 2022"
id: "1499399212647149568"
author: "Pratham"
---

## Ten widely used HTTP Headers

<Tweet>

In this thread, we are going to discuss:

• Accept
• Accept-Encoding
• Authorization
• Accept-Language
• Content-Type
• Content-Location
• Content-Encoding
• Content-Length
• Content-Language
• Cache-Control

</Tweet>

<Tweet>

Client and server can pass the extra bit of information with the request and response using HTTP headers.

HTTP headers are not case-sensitive.

</Tweet>

<Tweet>

The HTTP headers are divided into four categories:

1️⃣ Request headers: Client to Server

2️⃣ Response headers: Server to Client

3️⃣ Representation headers: Information about the body of the resource

4️⃣ Payload headers: Information about the payload data

</Tweet>

<Tweet>

📌 Accept

`Accept` header is used when the client wants to inform the server about the type of data that the client can understand.

For example,

`Accept: image/png`

</Tweet>

<Tweet>

📌 Accept-Encoding

The `Accept-Encoding` header is usually attached with a request to the server, indicating which encoding method is understandable by the client.

For example,

`Accept-Encoding: gzip`

</Tweet>

<Tweet>

📌 Authorization

As the header name suggests, the `Authorization` request header is used to pass the credentials so that the server can authenticate the client.

For example,

`Authorization: Basic dgfhWUytzgdfhgSYG`

</Tweet>

<Tweet>

📌 Accept-Language

The `Accept-Language` request header is used to describe which language is understood by the client.

For example,

`Accept-Language: en-US`

</Tweet>

<Tweet>

📌 Content-Type

`Content-Type` representational header specifies the media type of the resource. This header indicates the content type of the returned data when the client didn't mention any content encoding.

For example,

`Content-Type: text/html; charset=UTF-8`

</Tweet>

<Tweet>

📌 Content-Location

`Content-Location` header indicates the alternate location for the response. It is used when an API can return data in different formats depending on the `Accept` header.

For example,

`Content-Location: /examples/foo.json`
`Content-Location: /examples/foo.xml`

</Tweet>

<Tweet>

📌 Content-Encoding

The `Content-Encoding` header is used to compress the message data or payload.

For example,

`Content-Encoding: gzip`

</Tweet>

<Tweet>

📌 Content-Length

As the header name suggests, it indicates the size of the resource or message body in bytes. It can be used with both request and response.

For example,

`Content-Length: 148`

</Tweet>

<Tweet>

📌 Cache-Control

`Cache-Control` header is used as a caching mechanism for both the request and response.
There are several directives(values) that we can pass with this header.

For example,

`Cache-Control: max-age`

</Tweet>

<Tweet>

With that being said, this is pretty much it for this thread. It

Visit [RapidAPI Hub](https://rapidapi.com/hub?utm_source=threads&utm_medium=DevRel&utm_campaign=DevRel) and explore more than 40,000 APIs using single API key.

</Tweet>
