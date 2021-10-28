---
title: Learn REST APIs
slug: introduction
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T16:42:00.638Z
draft: false
coverImage: ""
points: 5
lessons:
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/improve/lms-yt-data/learn/courses/rest-apis/modules/introduction/lessons/01-what-is-an-api.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/improve/lms-yt-data/learn/courses/rest-apis/modules/introduction/lessons/02-what-is-a-rest-api.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/improve/lms-yt-data/learn/courses/rest-apis/modules/introduction/lessons/03-how-does-a-rest-api-work.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/improve/lms-yt-data/learn/courses/rest-apis/modules/introduction/lessons/04-versioning-rest-apis.md
---

<Lead>In this guide, you will learn about how REST APIs work and what their best practices are.</Lead>

Imagine that you are building a trading platform. You will need to support various features like exchange of currency, fluctuation of market rates, authentication, payment processing, and much more. Building and maintaining such functionalities is difficult. To resolve these issues, you can use integrations with various other software.

These integrations are done in the form of Application Programming Interfaces or APIs. APIs are a set of guidelines or rules which state how applications can interact with each other. **REST** (REpresentational State Transfer) APIs are those APIs that follow the guidelines of REST architecture. They are also known as RESTful APIs.

## About this course

This is an interactive course that will guide you through understanding what a REST API is and how it works.

Use the interactive component below to understand the response from a `GET` request. Click on the **Submit** button to request a response from the server:

<HTTPClient
  url="https://reqres.in/api/users"
  method="GET"
  isRequestMethodChangeDisabled
/>

Use the interactive component below to understand the response from a `POST` request. Click on the **Submit** button to request a response from the server:

<HTTPClient
  url="https://reqres.in/api/users"
  method="POST"
  body={'{\n    "name": "morpheus",\n    "job": "leader"\n}'}
  isRequestMethodChangeDisabled
/>
