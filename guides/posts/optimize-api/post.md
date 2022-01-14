---
title: How to optimize your API performance?
description: APIs are used to communicate between client and server. If they are not optimized, they can become slow with the high surges of traffic. Let's take a look at how you can optimise your APIs.
publishedDate: 2021-10-25T16:19:49.280Z
lastModifiedDate: 2021-10-25T16:19:49.280Z
authors:
    - saad
categories:
    - api
tags:
    - api
    - optimize
coverImage: ''
---

<Lead>

APIs are used to communicate between client and server. If they are not optimized, they can become slow with the high surges of traffic. This can result in slowing down your website or other websites or products that are using your API. Thus, you must use different methods to optimize the performance of your API. Let’s take a look at some of the ways through which you can achieve this.

</Lead>

## Caching Requests

While designing the API architecture, you need to think about the endpoints that frequently generate the same response. You can implement caching at these endpoints. Instead of going to the server and coming back with the same response, the API can use the cached results and show them to the user. This will avoid excessive database queries.

You can periodically expire the cache data or force it to expire when specific data updates happen.

## Use PATCH Over PUT

Many developers think that the PATCH and the PUT HTTP methods perform the same action, i.e., updating a record in the database. But this is not entirely right. The PATCH method only applies the partial update to the resource that needs to be updated. In contrast, the PUT method updates the entire resource, even to the not updating parts.

## Compress Data

Your API also becomes slow if the data you are sending over to the server is massive. For this, you can use different compression techniques like [GZip](https://www.gnu.org/software/gzip/) to compress the data sent through the API. It will make the transfer faster and improve the overall performance of your API.

## Using Appropriate Hosting

If you expect your API to see high traffic surges, make sure you use a good hosting company that provides you with enough CPUs and database instances to make your API fast. It will solve your network-related issues.
