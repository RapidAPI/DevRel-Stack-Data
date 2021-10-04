---
title: GET request
slug: get-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:34:50.657Z"
draft: false
coverImage: ""
points: 15
---

[The GET request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) is used to request data from a server. For example, when you visit an e-commerce website, the browser will do a `GET` request to fetch all the details. Once the server sends a response to the `GET` request, the browser will show a list of items.

A `GET` request shouldn’t contain any data or body. While this isn’t prohibited by the request specification, it is a good idea to not send data along with a `GET` request.

An example of a `GET` request looks like this:

```bash
GET /users HTTP/1.1
Host: https://www.website.com
```

```json
{
  "name": "John",
  "email": "john@doe.com"
}
```

Use the interactive component below to understand the response from a `GET` request. Click on the "Submit" button to request a response from the server:

<HTTPClient
  url="https://reqres.in/api/users"
  method="GET"
  isRequestMethodChangeDisabled
/>

<Quiz
  question={
    <div><span tw="font-semibold">Quick Review:</span> Can a GET request create a new resource?</div>
  }
  options={[{
    label: 'Yes',
    isCorrect: false,
  }, {
    label: 'No',
    isCorrect: true,
  }]}
/>
