---
title: How to use HTTP Compression to make your website faster?
description: You need to be extra careful with your site’s performance and ensure that you have taken enough measures to decrease its load time and not compromise on the performance.
publishedDate: 2021-10-26T10:25:53.100Z
lastModifiedDate: 2021-10-26T10:25:53.100Z
authors:
    - saad
categories:
		- http
        - api
tags:
    - http
    - compression
coverImage: ''
---

<Lead>

Your sites need to be fast if you want to capture the audience’s attention. According to [Time’s magazine](https://time.com/12933/what-you-think-you-know-about-the-web-is-wrong/), users spend less than fifteen seconds if the site is not captivating enough or slow. [According to Google](https://think.storage.googleapis.com/docs/mobile-page-speed-new-industry-benchmarks.pdf), an increase in page load time from one to three seconds increases bounce rate by 32%. So you need to be extra careful with your site’s performance and ensure that you have taken enough measures to decrease its load time and not compromise on the performance.

</Lead>

One of the ways to make the website fast is by implementing HTTP compression. Let’s take a look at it.

## What is HTTP compression?

Removing all the unnecessary and unwanted redundancy from a file to create a smaller file than the original is called compression. You can apply compression to both ends of request and response if the browser and server understand the compression algorithm.

If the web browser supports compression, it will indicate it in the header sent to the server in the HTTP request. The server will see this header and will try to send back a compressed response.

## How to use HTTP compression?

It is simple to implement compression. The browser sends an HTTP request with a header that contains an `Accept-Encoding` key to show the server that the header supports compression.

The `Accept-Encoding` field’s value specifies the type of compression the browser supports. It can have multiple values like Gzip, deflate, SDCH, etc. The server will compress the content according to the type of compression your browser supports, and it will then send it back to the browser. You will notice that the response server will have a `Content-Encoding` field. This field will contain the compression type that the server has used for content compression.
