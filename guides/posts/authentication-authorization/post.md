---
title: Introduction to Authentication and Authorization
description: 'Authentication and authorization are two different features that often play a crucial role in your application’s security, and you implement them using APIs.'
publishedDate: 2021-10-27T17:46:45.950Z
lastModifiedDate: 2021-10-27T17:46:45.950Z
authors:
    - saad
category: api
tags:
    - authentication
    - authorization
coverImage: ''
---

<Lead>
	There are different kinds of APIs that you can use for client-server
	communication. There are REST APIs, GraphQL APIs, gRPC, SOAP APIs. Each of
	these provides various options, and you can implement all kinds of features
	for your app using them.
</Lead>

Authentication and authorization are two different features that often play a crucial role in your application’s security, and you implement them using APIs. Let’s take a look at them.

## Authentication

Validating the user to identify if they are who they claim to be is called authentication. There are different ways you can implement authentication in your applications. For instance, you can implement sign-up functionality for new users. If a user comes back to your application, they would have to sign in again using their email and password.

You can also set a one-time password to authenticate a user for only a single session or transaction. Another way is using biometric authentication, where the user presents their fingerprint or retina scan to gain access to your application.

For additional security, you can also add a two-factor authentication layer to your system where the user has to provide the code sent to their mobile or email after giving the username or password.

## Authorization

Authorization always comes after authentication. It is the process of permitting users to access different resources from the server, and it’s not visible and changeable by the user. Authorization works through settings that are implemented and maintained by the organization.

An application may be designed for different kinds of users. For instance, an e-commerce website may have an admin dashboard for shopkeepers to add their products to the website. A customer looking at the website will not have access to this dashboard and have a separate dashboard entirely different from the shopkeeper’s one, and the shopkeeper will not have access to this dashboard.
