---
title: PUT request
slug: put-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:35:07.344Z"
draft: true
coverImage: ""
points: 5
---

[The PUT request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) can either update or replace an existing resource with the request payload. PUT requests can be used to either create or update the resource on the server.

An example of a PUT request looks like this:

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
