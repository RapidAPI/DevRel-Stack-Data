---
title: DELETE request
slug: delete-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:35:23.692Z"
draft: false
coverImage: ""
points: 5
---

[The DELETE request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE) is used to delete the specified resource.

An example of a `DELETE` request looks like this:

```bash
DELETE /users/1 HTTP/1.1
Host: https://www.website.com
```

Use the interactive component below to understand the response from a `DELETE` request. Click on the "Submit" button to request a response from the server:

<HTTPClient
  url="https://reqres.in/api/users/2"
  method="DELETE"
  isRequestMethodChangeDisabled
/>
