---
title: How does a REST API work?
slug: how-does-a-rest-api-work
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T16:50:26.557Z
draft: false
coverImage: ""
points: 15
---

A client makes a request to the server for a resource. The server returns the resource that the client requests as a response. The response is generally in a format that the client understands.

REST APIs generally communicate via HTTP requests. However, it isn’t mandatory to use an HTTP request for a REST API.

## Anatomy of a Request

- **Endpoint:** The endpoint is the URL from which you request for a resource.
- **Method:** The method determines the type of request you make to the server. There are five popular HTTP methods that REST uses:
  - **GET** method is used to retrieve a response from the server.
  - **POST** method is used to create a new resource on the server.
  - **PUT** method can create or update a resource on the server.
  - **PATCH** method is used to update a resource on the server.
  - **DELETE** method is used to remove a resource from the server.
- **Headers:** The headers contain important information regarding the metadata of the request. Headers are case-insensitive by nature and can be grouped into request, response, representation and payload.
- **Data (or Body):** POST, PUT, PATCH and DELETE methods can contain a body which is used to send information to the server.

<Quiz
  question={
    <div><span tw="font-semibold">Quick Review:</span> How many components does a Request have?</div>
  }
  options={[{
    label: '4',
    isCorrect: true,
  }, {
    label: '5',
    isCorrect: false,
  }]}
/>
