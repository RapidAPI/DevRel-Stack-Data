---
title: "Three ways of API authentication"
date: "Mar 16 2022"
id: "1504072057570664448"
author: "Pratham"
---

## Three ways of API authentication

<Tweet>

API establishes the pipeline between client and server to pass the data.

This makes it crucial to secure this data so that only authenticated clients can access and mutate it.

</Tweet>

<Tweet>

Before diving into the authentication methods, we first need to discuss the difference between Authentication and Authorization.

</Tweet>

<Tweet>

In simple terms, authentication is the process of verifying the identity of a user.

On the other hand, authorization always comes after authentication.

Authorization is the process of allowing the user to access a particular resource.

</Tweet>

<Tweet>

Let's say there are two endpoints in an API.

The first endpoint is free to use, whereas the second endpoint is premium which costs $10 for 1000 calls.

</Tweet>

<Tweet>

You can't access the second endpoint unless you pay for it.

Even though you're an authenticated user, you can't access the second endpoint unless you pay for it.

That's an authorization.

</Tweet>

<Tweet>

Let's see the three basic ways of API authentication. 👇🏻

</Tweet>

<Tweet>

📌 HTTP Basic Authentication

In this approach, the user agent simply sends the basic credential using the `Authorization` header.

</Tweet>

<Tweet>

The major problem with Basic authentication is that credentials are transmitted in the encoded form, not encrypted.

Which can be lead to man in the middle attack.

</Tweet>

<Tweet>

📌 API Keys

An API key is a unique code for every user which lets you call an API.

</Tweet>

<Tweet>

This unique API key for each user proves the identity of users.

Authentication via the API key is the most popular approach for API providers. It's fast.

</Tweet>

<Tweet>

However, the API key is often used for authorization as well which is not recommended at all.

</Tweet>

<Tweet>

📌 OAuth

OAuth can be used for both authentication and authorization. In fact, it is the most safest method.

</Tweet>

<Tweet>

OAuth works on tokens.

In simple terms, the user first obtains the token from the authentication server and then uses this token to get the actual resource.

</Tweet>

<Tweet>

With that being said, that's pretty much it for this thread.

Follow [RapidAPI on Twitter](https://twitter.com/Rapid_API) for more exclusive content.

</Tweet>
