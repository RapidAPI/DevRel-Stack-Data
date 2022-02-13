---
title: How to Create a Mock API in 5 Minutes?
description: A mock API lets you imitate a real API by emulating its responses and behaviors. This guide will help you set up your first mock API in no time.
publishedDate: 2021-12-01T19:10:30.765Z
lastModifiedDate: 2021-12-01T19:10:30.765Z
authors:
    - 'ahmad-bilal'
categories:
    - interactive
tags:
    - api
    - mocking
    - mock
    - rapidapi
coverImage: ''
---

<Lead>
	A mock API lets you imitate and test a real API by emulating its responses,
	response behaviors, and endpoints.
</Lead>

## Mock APIs

Mock APIs help you get an idea of the actual API in question by imitating it on a smaller scale. Hosted on a local or remote server, they can serve dynamic or static responses, imitating the data the real API would return, albeit following the same schema.

## Why are Mock APIs used?

Today, APIs are used extensively for providing functionalities to apps. It can take time to complete building the actual API. Without a mock API, development may come to pause until the API is ready.

API consumers (mostly frontend developers) need to know the responses from the backend to shape them for the frontend. Backend developers need to test, run and improve the API.

Frontend developers can consume the mock API, which provides the same interface as the actual API. Mock APIs can also be beneficial for API testing and development. The backend team can work cooperatively with the frontend team to gather feedback. They can test if the requirements are being met and make changes to the backend if needed.

Sometimes, apps use a third-party external API that has a fixed quota or premium plan. It can be expensive and time-consuming to call these APIs for testing them during integration. Instead, you can mock their responses and complete integration.

## How to Create a Mock API using RapidAPI Hub?

[RapidAPI Hub for Providers](https://RapidAPIi.com/provider?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) is one of the easiest ways to create a mock API for testing, integration, or collaboration. This guide will help you set up your first mock API in no time.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub/provider"
>
	RapidAPI Hub for Providers offers several features to API Providers.
	Publishing your API on RapidAPI will put it in front of over 3 million
	developers. Learn more about it.
</Callout>

Let's go ahead and create our mock API.

### → STEP #1

Navigate to the RapidAPI [Provider Dashboard](https://RapidAPIi.com/provider?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and create an account if you haven't already. Once logged in, you will be prompted to add your new API.

![Add details of your Mock API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/api.png)

-   Give your API a name and description.

-   For the category, you can choose **other**.

-   Select **UI** for the **Specify using** option and click on the **Add API** button.

### → STEP #2

Once your API is created, you will be redirected to the API Dashboard. We are going to create the endpoints in this step. So click on API Specs and then click on the Endpoints tab.

![Endpoints Tab](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/endpoints-tab.png)

Next, click the **Create REST Endpoint** as you can see above. Let’s assume we want to create a mock API that returns users' data for this guide. So, our first endpoint can be called `user`, which will GET a specific user’s data. Add the following details:

![Name, Description, and Path of the Endpoint](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/endpoint-details.png)

### → STEP #3

Scroll down until you see the **Response** section. To enable mock responses, we need to add an example response first. Click the **Select Response Code** field.

![Select the Response Code](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/select-code.png)

We want to create a mock response when the request is successful, so use 200 as the code and add it.

![Adding Response Code](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/code.png)

A form will appear for the example response. For the user endpoint, we will use the following object:

```json
{
	"id": "value",
	"name": "value",
	"username": "value"
}
```

Add this object to the **Body** input field and click the **Generate Schema** button:

![Setting Body and Schema of the Example Response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/example-response.png)

It will automatically generate the schema. Now, scroll up and click the **Mock Response** and enter 200 for the code. You can use any placeholder data for your mock response.

![Add Mock Response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/mock-response.png)

Toggle **Enable Mock Response** and save the endpoint.

You can add more endpoints by following the steps above. For instance, I added a `users` endpoint which returns a list of all the users. Once you have added the endpoints, you don't need to do anything else. Your mock API is ready to go.

## Testing the API

Now, you can see the mock API in action. You will see a **View in Hub** button in the top right corner. It will take you to your API page on RapidAPI Hub, where you can quickly test the endpoints.

![Testing the Mock API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/testing.png)

As you can see, it returns the mock response we created for the `user` endpoint.

## Using the API

The API is private at the moment, which means it is not listed publicly on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). However, your team members can still access the mock API provided they have its key. Hence there is no need to make the API public. RapidAPI Hub automatically generates code snippets in multiple languages, which you can use to access the API.

![Code Snippet in Node.js for accessing our Mock API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-mock-api/images/code-snippet.png)

## Preview

Try the following interactive component, which fetches data from the mock API we built above.

<LearnMockAPI />
