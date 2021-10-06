---
title: PUT request
slug: put-request
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:35:07.344Z
draft: false
coverImage: ""
points: 5
---

[The PUT request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) can either update or replace an existing resource with the request payload. `PUT` requests can be used to either create or update the resource on the server.

An example of a `PUT` request looks like this:

```bash
PUT /users/1 HTTP/1.1
Host: https://www.website.com
```

```json
{
  "name": "John",
  "email": "john@doe.com"
}
```

Use the interactive component below to understand the response from a `PUT` request. Click on the "Submit" button to request a response from the server:

<HTTPClient
  url="https://reqres.in/api/users/2"
  method="PUT"
  body={'{\n    "name": "morpheus",\n    "job": "leader"\n}'}
  isRequestMethodChangeDisabled
/>
