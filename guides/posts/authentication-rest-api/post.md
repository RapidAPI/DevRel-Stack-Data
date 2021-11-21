---
title: Different Authentication Methods in REST API
description: You often need to add a user authentication system as a feature in your app, and REST API also acts as a bridge for this.
publishedDate: 2021-10-20T17:13:16.859Z
lastModifiedDate: 2021-10-20T17:13:16.859Z
authors:
    - saad
category: api
tags:
    - authentication
    - rest
coverImage: ''
---

<Lead>
	Your application’s client and server need to communicate with each other.
	This communication highly relies on REST APIs. You often need to add a user
	authentication system as a feature in your app, and REST API also acts as a
	bridge for this.
</Lead>

## Authentication Methods

There are many authentication methods that you can use with your REST APIs. Let’s discuss the three most common methods among the lot.

### HTTP Authentication Schemes

There are various HTTP security schemes that you can use with your REST APIs for authentication. For instance:

-   **Basic:** With this, the sender places the username and password in the request header. Both the username and password are encrypted with Base64. The server decrypts the data and sends back a response of whether the user is authenticated or not.
-   **Bearer:** An HTTP authentication scheme where the server generates a token and provides it to the client. The client then has to send this token in the Authorization header when making requests to protected resources.
-   **Digest:** This type of authentication does not need a password to be transmitted. The client takes the username and password and uses the MD5 hashing algorithm to create a hash that is then sent to the SQL server.
-   **OAuth:** It is an authorization protocol that provides applications the ability to secure designated access.

### API Keys

Another authentication method widely used with REST APIs is API keys. It provides first-time users with a unique generated key. When the user tries to access the requested resources, they use their API key. The API key tells the server this is the same user as before.

<Callout>
	API keys must not be sent to the server as query parameters. Instead, they
	should be sent in the Authorization header using REST APIs.
</Callout>

### OAuth 2.0

OAuth 2.0 (Open Authorization) is a standard developed to allow a user access to resources from a third-party application. It is an authorization protocol designed only to grant access to resources, and it works by using access tokens.

The access token is information that provides authorization to access resources on behalf of the user. Usually, the JSON Web Token (JWT) format is used for the access token.

<Callout type="warning">
	They also may have an expiration date because of security reasons.
</Callout>
