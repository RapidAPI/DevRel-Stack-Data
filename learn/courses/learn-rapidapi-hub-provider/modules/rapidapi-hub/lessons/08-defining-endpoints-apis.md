---
title: Defining endpoints for your APIs
slug: defining-endpoints-apis
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:32:39.415Z
draft: false
coverImage: ""
points: 5
---

You can create endpoints for your APIs by selecting the "Endpoints" tab:

![Defining endpoints for your APIs](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/learn-rapidapi-hub-provider/images/image10.png)

There are two ways of defining your endpoints:

- REST
- GraphQL

If you click on the "Create REST Endpoint", you will be able to add the Name, Description, External Doc URL and External Doc Description for the new endpoint.

![Providing details for the endpoint](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/learn-rapidapi-hub-provider/images/image11.png)

Next, you will also be able to select the HTTP method and path for your endpoint:

![Creating a REST API endpoint](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/learn-rapidapi-hub-provider/images/image12.png)

You can also provide the following details along with your endpoint:

- **Headers:** You can specify custom headers which the consumer will have to send as a part of the request to the API endpoint.
- **Query:** Passing a query string is often necessary to provide certain details like **offset** or **limit** for paginated queries.
- **Body:** The **Body** can be sent only for `POST`, `PUT` and `PATCH` requests. You can select the expected type of **Body**.

You can also click on the "Test Endpoint" button to check your new endpoint:

![Testing the new endpoint](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/learn-rapidapi-hub-provider/images/image13.png)

You can also choose to create an example from the response by clicking on the "Create example from response" button:

![Creating example from the response of the new endpoint](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/learn-rapidapi-hub-provider/images/image14.png)

<Quiz
  question={
    <div><span tw="font-semibold">Quick Review:</span> In RapidAPI, can you use both REST and GraphQL APIs?</div>
  }
  options={[{
    label: 'Yes',
    isCorrect: true,
  }, {
    label: 'No',
    isCorrect: false,
  }]}
/>
