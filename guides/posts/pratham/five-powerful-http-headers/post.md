---
title: "Top Five HTTP headers you might not know about"
description: "HTTP headers allow clients and servers to talk to each other and pass extra bits of information or instructions."
slug: "top-five-http-headers-might-not-know"
authors: 
  - pratham
category: "API"
tags:
  - HTTP
  - API
publishedDate: "2021-09-28T08:00:00+08:00"
coverImage: ""
---

<Lead>
  HTTP headers allow clients and servers to talk to each other and pass extra bits of information or instructions. Here are the Top Five HTTP headers you might not know about.
</Lead>
    
    
## 1. Content-Disposition

Content-Disposition header tells the browser to

- Display the content as a web page or as a part of the web page
- Download the content  

Suppose you want to download the file that the server returns. This is how you can do it.

```json
Content-Disposition: attachment; filename="index.html"
```


## 2. Expires

The Expires header contains the date and time after which the response is considered outdated or not fresh.

For example,

```json
Expires: Fri, 01 Oct 2021 09:30:30 GMT
```

## 3. Expect

The Expect HTTP header indicates the client's expectation that the server can meet.

Expect header is not so common in the browsers but cURL sends the Except header by default.

For example,

```json
Expect: 100-continue
```

This indicates that the client is expecting a 100 status code if the information present in the request is enough for the server to respond. 

## 4. If-Modified-Since

The If-Modified-Since HTTP header is used to make the request conditional, and it asks the server whether the data has been changed or not.  

The server will return the modified resource if it has been changed since the date and time mentioned in the "If-Modified-From" header.

The server will return 304 Not Modified if the resource has not changed.

For example,

```json
If-Modified-Since: Fri, 24 Sep 2021 09:30:30 GMT
```
## 5. From

The From header indicates the human email address.

The server uses it to report the unwanted problems to the actual human if you're using the bot (like a Web crawler) to send requests.

For example,

```json
From: test@rapidapi.com
```

And that's pretty much it for this guide. There is a bunch of other excellent and powerful HTTP headers you can play around with. With that being said, I'll catch you in the next guide.

