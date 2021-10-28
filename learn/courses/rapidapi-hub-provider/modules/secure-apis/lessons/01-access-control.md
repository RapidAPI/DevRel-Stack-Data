---
title: Access control
slug: access-control
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:32:39.415Z
draft: false
coverImage: ""
points: 5
---

RapidAPI implements a **single secret key per application** across all APIs to minimize friction in testing and implementing APIs. There are other ways to implement authentication for your APIs.

![Different ways of authenticating your APIs](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/improve/lms-yt-data/learn/courses/rapidapi-hub-provider/images/image7.png)

## Basic

**Basic Authentication** is a method in which the client has to pass the authentication credentials (a username and password) along with the request to the server via the **Authorization** header. The syntax looks like the following:

```json
Authorization: Basic <credentials>
```

The Base64 encoding of the username and password joined by a single colon `:` is passed in place of `credentials`. This is the simplest form of enforcing access control for API requests.

<Callout>

  When the **Basic** authentication option is selected, the credentials (username and password) should be sent by the API consumer in the request header (in addition to the `X-RapidAPI-Key` header) while making requests to the API.

</Callout>

## Header

By using **Header authentication**, API providers can enforce API consumers to add one or more valid authentication-related headers to API requests.

If invalid credentials are passed, the API provider will respond with an unsuccessful response code. The API provider is responsible for verifying these values and returning the proper response to the API consumer.

## Query

**Query authentication** allows API providers to enforce API consumers to add one or more query string parameters to API requests.

If invalid values are passed, the API provider will respond with an unsuccessful response code. The API provider is responsible for verifying these values and returning the proper response to the API consumer.

## OAuth2

**[OAuth2](https://oauth.net/2/)** is the industry-standard protocol for token-based authorization. API providers can authorize only certain capabilities (or scopes) for their APIs. RapidAPI supports two OAuth Grant Types:

- Client Credentials
- Authorization Code

<Quiz
  question={
    <div><span tw="font-semibold">Quick Review:</span> In RapidAPI, can you have fine-grained access control for your APIs?</div>
  }
  options={[{
    label: 'Yes',
    isCorrect: true,
  }, {
    label: 'No',
    isCorrect: false,
  }]}
/>
