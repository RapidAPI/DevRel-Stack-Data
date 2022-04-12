---
title: What is Web Authentication API?
description: "This web API, also known as WebAuthn, uses asymmetric cryptography, widely known as public-key cryptography. Let's briefly look at some of its benefits and use cases."
authors:
    - saad
categories:
    - web-apis
tags:
    - web-authentication-api
    - web-api
publishedDate: 2022-03-14T06:43:50.124Z
lastModifiedDate: 2022-03-14T06:43:50.124Z
coverImage: ''
---

<Lead>

Every application needs to have authentication implemented to deal with individual user accounts. Strong authentication is essential to keep the user data secure. Otherwise, it can fall prey to hacking attempts.

</Lead>

You can use multiple ways to ensure you have developed a secure way to log in and log out your users. Firebase provides a quick and easy way to set up an email/password authentication. You can also use JSON Web Token to encrypt the user credentials or use a Web API designed for web authentication.

## Web Authentication API (WebAuthn)

This web API, also known as WebAuthn, uses asymmetric cryptography, widely known as public-key cryptography. Here you have a public and a private key for encrypting and decrypting messages to protect them from unauthorized access. The public key is present on the server. Even if the hacker gets access to the public key, they can not decrypt the data without the private key present on the user’s device.

This API does not require users to enter credentials like their passwords; instead, a public-private key is created for a website.

## Benefits of WebAuthn API

Here are some of the benefits of using this API for authenticating users:

-   The user does not fall prey to phishing attacks. A phishing attack is when someone sends you a fake login page of some website you visit often. And you log into the website using your credentials.
-   It is not encouraged to reuse the same password on every website because if someone gets to know your website, they can log in to all of your accounts. But with this API, the attackers can not breach your accounts since they will not have the private key.

## Use Cases

Let’s take a quick look at some use cases of WebAuthn API:

-   The application often asks if you want to register this device on mobile devices. If you say yes, you will not be required to enter the password again. It is done using the Web Authentication API.
-   The user registers his phone to a particular site and then visits that site on a laptop and tries signing in. He will receive a message to complete a specific action on his phone.
