---
title: POST request
slug: post-request
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:34:57.783Z"
draft: false
coverImage: ""
points: 10
---

[The POST request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) is used to send some data to the server. For example, when you want to place an order on an e-commerce website, the browser will do a `POST` request to save that information on the server.

A `POST` request can contain a body or data. The type of the body or data will be determined by [the Content-Type header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type).

An example of a `POST` request looks like this:

```bash
POST /users HTTP/1.1
Host: https://www.website.com
```

```json
{
  "name": "John",
  "email": "john@doe.com"
}
```

Use the interactive component below to understand the response from a `POST` request. Click on the "Submit" button to request a response from the server:


<HTTPClient
  url="https://reqres.in/api/users"
  method="POST"
  body={'{\n    "name": "morpheus",\n    "job": "leader"\n}'}
  isRequestMethodChangeDisabled
/>

<Quiz
  question={
    <div><span tw="font-semibold">Quick Review:</span> Can a POST request update an existing resource?</div>
  }
  options={[{
    label: 'Yes',
    isCorrect: false,
  }, {
    label: 'No',
    isCorrect: true,
  }]}
/>
