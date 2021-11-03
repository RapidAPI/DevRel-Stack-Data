---
title: What is SSL?
slug: ssl
description: There are various ways for implementing website security, and one of them is SSL.
publishedDate: 2021-10-14T14:12:52.664Z
lastModifiedDate: 2021-10-14T14:12:52.664Z
authors:
    - saad
category: http
tags:
    - ssl
coverImage: ''
draft: false
---

<Lead>
The websites you develop must be secure; otherwise, users' data may fall prey to different hacking attacks. There are various ways for implementing website security, and one of them is SSL. Let's take a look at it.
</Lead>

## SSL

Secure Sockets Layer (SSL) is an encryption-based security protocol developed for ensuring privacy, authentication, and data integrity in internet communication. When implemented between two systems, it safeguards the sensitive data that is being sent between them. It uses different encryption algorithms to scramble the information that is in transit. Thus, it prevents hackers from reading it as it sends over the connection.

## How does SSL work?

SSL encrypts the data that is being transmitted through it on the internet. Even if someone intercepts this data, they would only see scrambled characters nearly impossible to decrypt. SSL also initiates an authentication process called a handshake between two communicating devices to ensure that both devices are who they claim to be.

SSL also provides data integrity by digitally signing the data and later verifying that it is not tampered with before it reaches the other system.

## What is an SSL certificate?

You can only implement SSL on your website using the SSL certificate. It is an ID that proves the identity of the user. SSL certificates are stored and displayed on the web using the website's server.

SSL certificates have a key pair that includes public and a private key. Both these keys work together to establish an encrypted connection. These certificates also contain a **"subject"** that is the identity of the certificate owner.

A website that is using an SSL certificate has HTTPS instead of HTTP in its URL. This certificate is one of the critical factors for your website ranking on Google.

A website that is not using the SSL certificate has **"Not Secure"** written before its domain.

![Example of how a website without SSL appears on the Chrome browser's address bar](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/ssl/images/not-secure.png)
