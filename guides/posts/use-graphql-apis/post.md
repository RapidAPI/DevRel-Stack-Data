---
title: How to use GraphQL APIs from RapidAPI Hub?
slug: use-graphql-apis
description: RapidAPI Hub allows you to find and use GraphQL APIs effortlessly.
publishedDate: 2021-11-10T12:17:11.709Z
lastModifiedDate: 2021-11-10T12:17:11.709Z
authors:
    - ahmadBilal
category: api
tags:
    - rapidapi
    - graphql
    - hub
coverImage: ''
draft: false
---

<Lead>

RapidAPI Hub provides access to a large number of useful GraphQL APIs. It also simplifies the process of setting up, testing and integrating them.

</Lead>

Here are a few pointers on how you can use a GraphQL API from RapidAPI Hub.

## Finding the Right API

Finding an API that fits your requirements well can be a demanding task. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of public APIs for use in your projects. These also include GraphQL APIs. You can find them easily on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

[Create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on it if you haven’t already. Then, you can look for [GraphQL APIs](https://rapidapi.com/search/graphql?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) in the search section.

<Callout
  title="Deep dive"
  linkText="Read more"
  linkHref="https://rapidapi.com/learn/hub"
>
  Learn more about how to use RapidAPI Hub.
</Callout>

## Subscribe

Let's say I want to use one of the GraphQL APIs, [GeoDB Cities API](https://rapidapi.com/apidojo/api/shazam/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), which can serve the global city, region, and country data. To use this API, we need to subscribe to it first. We can do this by clicking on the **Subscribe to Test** button.

![Subscribe to GeoDB API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/use-graphql-apis/images/subscribe.jpg)

When you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. You can select any plan which fits your requirements. Once subscribed, you will get an API key named `x-rapidapi-key`, which you can use to access the API.

## API Playground

RapidAPI Hub provides an API playground where you can test all endpoints and check their responses; within your browser. For faster integration, it automatically creates code snippets to request the API in multiple languages. You can copy these snippets and use them in your application right away. It saves a lot of time.

## Query Formulation and Testing

For GraphQL APIs, RapidAPI Hub has a dedicated field for testing and formulating your queries. Let's say I wanted to test the following query, which fetches a given country's details:

```sql
{
  countries(namePrefix: "America") {
    edges {
      node {
        name
        capital
        flagImageUri
        currencyCodes
      }
    }
  }
}
```

Let's test it. On the [endpoints page](https://rapidapi.com/wirefreethought/api/geodb-cities-graphql/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), scroll down to find a text section where you can enter your GraphQL query. Copy the GraphQL query above and paste it here.

![Testing GraphQL queries](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-graphql-app/images/testing-endpoint.png)

Now, we can go ahead and click the `Test Endpoint` button to see whether our query works as intended or not. I received the following response with a status code of 200, which means our request was successful.

```json
{
   "data":{
      "countries":{
         "edges":[
            "0":{
               "node":{
                  "name":"United States of America",
                  "capital":"Washington, D.C.",
                  "flagImageUri":"http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20United%20States.svg",
                  "currencyCodes":[
                     "0":"USD",
                  ],
               },
            },
         ],
      },
   },
}
```

## Integration using Code Snippets

All your changes to the query or its variables get synched in the auto-generated code snippets. So, when you are finished with testing, you can simply copy the snippet you need and integrate it into your application. Finally, using RapidAPI's key, you will be able to access the graphQL API and get your requests served.
