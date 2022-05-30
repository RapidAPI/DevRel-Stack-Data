---
title: 'API Security: Excessive Data Exposure Vulnerability'
description: This vulnerability is highlighted by the Open Web Application Security Project (OWASP). The API developer sends more data than required to the client. In this piece, let's take a look at it and some prevention measures.
publishedDate: 2022-05-30T10:48:53.505Z
lastModifiedDate: 2022-05-30T10:48:53.505Z
authors:
    - saad
categories:
    - api-security
    - api
tags:
    - excessive-data-exposure
    - excessive-data
    - api
    - api-security
coverImage: ''
---

<Lead>

The database is integrated on the server-side, and its data is rendered on the client-side. An API is developed that acts as a messenger to carry data from the server to the client. The client then filters the data and presents it on the screen. It is one cycle.

</Lead>

APIs need to be secure as they play a significant role in moving the data between two sides. And when the data is concerned, the API developer can often integrate excessive data exposure, a security vulnerability. Let’s take a quick look at it.

## Excessive Data Exposure

This vulnerability is highlighted by the Open Web Application Security Project (OWASP). The API developer sends more data than required to the client. The client-side has to filter the information to show it to the user, thus leaving a lot of unused data. This remaining data can fall prey to potential data leaks.

The man-in-the-middle is the most common attack that can exploit this information as the data can be intercepted by the unwanted personnel when it is in transit. The data can later be used to perform different actions on the website. It can be sold to the highest bidder.

## Prevention techniques

There are a few ways you can avoid all excessive data exposure. Let’s look at them.

### Data filtering

Instead of relying on the client-side to filter the data, this operation should be performed on the server before sending the data. The client-side should only take the data and render it on the screen.

### Send only the Necessary Information

Another thing that you can do is to ensure only the data the client has requested is sent to them. You are not sending any unnecessary information.

### Categorizing Data

To ensure that you are not sending sensitive data, you can also categorize your data as admin, personal, or sensitive information.
