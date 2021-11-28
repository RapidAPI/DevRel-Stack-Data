---
title: What is GraphQL?
description: ''
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:32:39.415Z
draft: false
coverImage: ''
points: 10
---

[GraphQL](https://graphql.org/) is a query language that lets your client request the server to send only the required data - nothing more and nothing less.

Let's say you are building a blogging platform. You will need to fetch the blog post, the author, and the published date. In traditional REST APIs, you can design this API very easily. Now, let's say you need to show the blog post's comments only for the web app. For your mobile app, you will have to configure your server to send the API response without the comments - which is unmaintainable.

This is where GraphQL can help you. Your client can ask for the data they need, and the server will return with only that data.

In the case of the mentioned scenario, your web app can ask the server to send the blog post, the author, the published date, and the comments. But your mobile app can ask for everything apart from the comments. In both these cases, the server will respond with exactly the data requested by the client.

Click on the "Fetch user details" button in the component below to fetch data from a GraphQL server.

<GraphQLAPI />
