---
title: "HTTP Status Codes"
description: "HTTP status codes are divided into five categories. Informational, successful, redirects, client errors, and server errors."
slug: "http-status-code"
authors:
  - pratham
category: api
tags:
  - http
  - api
publishedDate: 2021-10-08T08:00:00+08:00
lastModifiedDate: 2021-10-08T08:00:00+08:00
coverImage: ""
---

<Lead>
  HTTP status codes are pretty confusing sometimes. Let's talk about them in a bit more detail.
</Lead>

## informational response (1xx)

Informational responses indicate the acceptance and continuation of the requests.

### 100 Continue

The server tells the client that everything is OK so far keeps sending requests.

### 101 Switching Protocol

The client requests the server to switch the protocol. This response is sent for the `Upgrade` HTTP header.

### 103 Early Hints

The server hints the client to preload the resources while the server preparing the data to be returned.

## Successful Responses (2xx)

As the term suggests, these status codes indicate that the request is successfully received, accepted, and resolved.

### 200 OK

This status code indicates the successful HTTP request. It's a standard successful response for GET, POST, PUT, HEAD, and TRACE.

### 201 Created

This status code is sent by the server to indicates that a new resource has been created. Generally used for the POST and PUT requests.

### 202 Accepted

Typically used for the async response. The server confirms to the client that the request has been accepted.

### 203 Non-Authoritative Information

The server usually returns this to indicate that server is a proxy that received this data from its origin. The proxy returns the modified version of the origin's data.

### 204 No Content

The server indicates that all is good but nothing to return.

### 205 Reset Content

The server indicates the client to reset the document. Nothing to return as response data.

### 206 Partial Content

The server returns this code with the partial data that the client asked for with the `Range` HTTP header.

## Redirection messages (3xx)

The server usually returns a 3xx redirection status code to indicate that some additional action has to be done by the client to fulfill the request.

### 300 Multiple Choice

The server returns this code when it has multiple options for response.

### 301 Moved Permanently

Server sends the new URL with a 301 status code if the requested URL has been shifted to new URL.

### 302 Found

302 indicates that the requested URL has been changed temporarily. Therefore, can't fulfill the request for this moment.

### 303 See Other

Server tells the client to get the desired resource at another URL with a GET request.

### 304 Not Modified

304 Indicates that the resources are the same since the last visit. In this case, the client can use the cached resources.

### 307 Temporary Redirect

The server tells the client that you will get the desired resource at another URL with the same request that the client has just made. URL shifting is temporary.

### 308 Permanent Redirect

The server tells the client that you will get the desired resource at another URL with the same request that the client has just made. URL shifting is permanent.

## Client Error Responses (4xx)

The server usually returns 4xx status codes if a client request causes some problem.

### 400 Bad Request

Incorrect syntax or invalid URLs are generally the reason for 400 Bad Request.

### 401 Unauthorized

The server returns 401 to indicate that the client should authenticate itself before making requests.

### 403 Forbidden

The client is authenticated but doesn't have permission to access the resource.

### 404 Not Found

We see a 404 response most often. It means that the requested URL is not valid.

### 405 Method Not Allowed

The server returns the 405 status code when the request method is valid but not appropriate to get the desired resource.

### 406 Not Acceptable

In simple terms, the server returns a 406 Not Acceptable response when it does not find any suitable response according to the request.

### 407 Proxy Authentication Required

The server returns this code when the client must authenticate itself with the proxy.

### 408 Request Timeout

The server sends this response without the request, indicating that the server would like to suspend the connection.

### 409 Conflict

The server usually returns this when there is a conflict in the current state of resources.

### 410 Gone

The resource has been deleted permanently from the server with any redirect URL.

### 411 Lenght Required

The server indicates that the client must send `Content-Length` to get the resource.

### 412 Precondition Failed

The server doesn't meet the precondition that the client mentioned in the request headers.

### 413 Payload Too Large

Request is too large that the server can't handle. In this case, the server might close the connection.

### 414 URI Too Large

The server returned a 414 code when the URI provided was too long for the server to process.

### 415 Unsupported Media Type

The server does not support the media type mentioned in the request. For example, the client wants to upload an image as .png, but the server supports the .jpeg media type.

### 416 Range Not Satisfiable

The server returns a 416 code when the range mentioned in the `Range` HTTP request header is unsatisfactory. For example, asking for a portion of data that doesn't exist.

### 417 Expectation Failed

The server is not able to provide the relevant data mentioned in the `Expect` HTTP header.

### 422 Unprocessable Entity

The server returns a 422 status when there are semantic errors in the request.

### 426 Upgrade Required

The server indicates that the client should use another protocol to fulfill the request. In response, server sends the required protocol in the `Upgrade` header.

### 428 Precondition Required

The server indicates that the request should be conditional to reduce the chances of conflicts.

### 429 Too Many Requests

The client has sent too many requests in the given time frame. For example, the server only handles 100 requests per second.

### 431 Request Header Fields Too Large

Server indicates that the request header is too larger which can't be handled by the server. In this case, the client can reinitiate the request after reducing the sizer of the request header.

### 451 Unavailable For Legal Reasons

The server can't provide the requested resource due to legal reasons.

## Server error responses (5xx)

The 5xx status codes indicate that everything is excellent with the request, but an error occurred on the server-side.

### 500 Internal Server Error

An unexpected situation occurs which server can't handle at this moment.

### 501 Not Implemented

The server returns 501 when the request is not handled by the server. For example, the client initiates the DELETE request but the server supports only GET and HEAD.

### 502 Bad Gateway

502 status code indicates when the server got the invalid response while acting as the gateway.

### 503 Service Unavailable

Usually, when the server is down for maintenance, the server returns 503 indicating server is not ready to handle the request.

### 504 Gateway Timeout

Server cannot get the response from the origin while acting as a gateway.

### 505 HTTP Version Not Supported

The server does not support the HTTP protocol version used in the request.

### 506 Variant Also Negotiates

The server returns the 506 Variant Also Negotiates code when there is an internal configuration error.

### 507 Insufficient Storage

The server is unable to store the representation needed to complete the request.

### 508 Loop Detected

The server detected an infinite loop while processing the resource.

### 510 Not Extended

The server requires some additional extensions in the request to fulfill it.

### 511 Network Authentication Required

The client needs to authenticate to gain network access.
