---
title: PATCH request
slug: patch-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:35:15.263Z"
draft: true
coverImage: ""
points: 5
---

[The PATCH request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH) is used to modify a resource partially. In a profile form, if you want to update only your email address and leave the rest of the form unchanged, the browser will do a PATCH request when you click on the save or update button. This will ensure that when the request reaches the server, it only modifies the email address. The server will partially modify the resource.

An example of a PATCH request looks like this:

```bash
PATCH /users/1 HTTP/1.1
Host: https://www.website.com

{
  "name": "John",
  "email": "john@doe.com"
}
```
