---
title: What is OAuth2.0?
description: OAuth 2.0 (Open Authorization) is a standard developed to allow a user access to resources from a third-party application. Let's briefly look at it and some of the roles of OAuth.
publishedDate: 2021-10-14T14:12:52.664Z
lastModifiedDate: 2021-10-14T14:12:52.664Z
authors:
    - saad
categories:
    - api
tags:
    - oauth2.0
coverImage: ''
---

<Lead>
	When building a website, you often have to implement user authentication and
	authorization systems. These systems need to be meticulously developed
	because they are responsible for granting access to resources. To do this,
	you need to follow a particular standard when implementing the authorization
	feature.
</Lead>

## OAuth 2.0

OAuth 2.0 (Open Authorization) is a standard developed to allow a user access to resources from a third-party application. It is an authorization protocol designed only to grant access to resources, and it works by using access tokens.

The access token is information that provides authorization to access resources on behalf of the user. Usually, the JSON Web Token (JWT) format is used for the access token. They also may have an expiration date because of security reasons.

The OAuth 2.0 does not provide full resource access to the user. Instead, it restricts actions of what the client app can do on behalf of the user. The OAuth 2.0 also explains how to handle this delegated access in other types of applications like mobile, server-side web applications, etc.

## OAuth Roles

The core specification of OAuth 2.0 authorization involves different roles, and each has different responsibilities. Let’s take a look at them.

### Resource Owner

This is the user or system that owns the protected resource and can grant access to it using the OAuth 2.0 authorization standards.

### Client

It is the user that is trying to access the third-party resources. The user needs the appropriate access token to request the protected resource.

### Authorization Server

The authenticated user requests the authorization server for the access token. Once the request owner provides the consent, the authorization server sends back the newly generated access token.

### Resource Server

This server has the protected resources that the user needs. Once the user has an access token from the authorization server, it uses that token to request the resources from the server.
