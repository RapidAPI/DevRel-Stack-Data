---
title: What is API Mocking?
description: API Mocking lets you imitate and test a real API by emulating its responses, response behaviors, and endpoints.
publishedDate: 2021-11-25T19:10:30.765Z
lastModifiedDate: 2021-11-25T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - rapidapi
tags:
    - api
    - mocking
coverImage: ''
---

<Lead>
	API Mocking lets you imitate and test a real API by emulating its responses,
	response behaviors, and endpoints.
</Lead>

## Mock APIs

What is the first thing you do when you start using an API? You test its endpoints by sending requests and observing their responses. Mock APIs serve the same purpose; they help you get an idea of the actual API in question by imitating it on a smaller scale. Hosted on a local or hosted server, they can serve dynamic or static responses, imitating the data the real API would return albeit following the same schema.

## Why are Mock APIs used?

Today, APIs are used extensively for providing functionalities to apps. It can take time to complete building the real API. Without a mock API, development may come to pause until the API is ready.

API consumers (mostly frontend developers) need to know the responses from the backend in order to shape them for the frontend. Backend developers need to test, run and improve the API.

Frontend developers can consume the mock API, which provides the same interface as the actual API. Mock APIs can also be beneficial for API testing and development. The backend team can work cooperatively with the frontend team to gather feedback. They can test if the requirements are being met and make changes to the backend if needed.

Sometimes, apps use a third-party external API that has a fixed quota or premium plan. It can be expensive and time-consuming to call these APIs for testing them during integration. Instead, you can mock their responses and complete integration.

## Types

### Static vs Dynamic Responses

To get static mock responses, you specify example responses for each endpoint and they are not affected by the input whatsoever. You can generate them yourself, or use tools that create dummy data.

Dynamic mock responses can differ according to the input parameters of the API call. Generally, static responses are good enough for mocking APIs.

### Internal vs External APIs

Unlike External APIs, Internal ones can be subject to more changes as they are tested by mock APIs. Therefore when mocking internal APIs, there should be a system to pull these changes to keep the mock API updated.

### Local vs Public Mock APIs

Mock API servers can be implemented locally. Local mock servers are often part of the code repository. A few benefits of local mock APIs are flexibility, security, and availability.

However, these local servers can be difficult to maintain. Public mock APIs are accessed over the network and are separate from the development or staging environment. These public mocks are popular because a team can automatically generate a mock API from an API design specification, and they do not have to manage the server.

## Drawbacks

Here are a few drawbacks that must be kept in mind while mocking APIs:

-   Mock APIs require maintenance. It may become obsolete if the old request and response data is not updated.

-   The effectiveness of the mock API depends on the accuracy of the example responses and server interactions.
