---
title: 4 Ways to Fetch Data from a GraphQL API in React
slug: graphql-fetch-ways
description: Here are 4 different ways you can use a GraphQL API in React.
publishedDate: 2021-11-12T12:17:11.709Z
lastModifiedDate: 2021-11-12T12:17:11.709Z
authors:
    - ahmadBilal
category: api
tags:
    - react
    - graphql
coverImage: ''
draft: false
---

<Lead>

GraphQL APIs are a tad bit different from other types like REST in terms of implementation. Let's go through some of the ways we can use GraphQL APIs in React.

</Lead>

Whenever calling a GraphQL API, you will generally need to specify four things, regardless of the method used. Keep the following in mind.

- **HTTP METHOD:** We need to specify the HTTP Method (GET, POST, PUT etc). We use the POST method for GraphQL APIs.

- **URL:** The URL for the endpoint of the GraphQL API.

- **Header:** We have to set the header to `content-type` of `application/json` for all GraphQL APIs.

- **Query:** The query itself, which includes the request and variables in its JSON structure.

## 1. Axios

Any valid HTTP client can call a GraphQL API for fetching data. Axios is one of the simplest and usable example.

To use Axios, install and import it in your React project.

```js
// Install
npm install axios

// Import in your React.js file
import axios from 'axios';
```

Now, we can request the API as follows:

```js
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "POST",
    url: "https://geodb-cities-graphql.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
    },
    data: {
      query: `{
                countries {
                    name
                    capital
                    currency
                }
            }`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data); // Response
    })
    .catch(function (error) {
      console.error(error);
    });
}
```

Notice how we are specifying the four parts we discussed above. The query must be wrapped with backticks. If you want to pass query parameters, you can specify another object in `data` called variables and include it as follows:

```js
    data: {
      query: `query getCountry($prefix: String!){
                countries(namePrefix: $prefix) {
                    name
                    capital
                    currencyCodes
                }
            }`,
      variables: {
        prefix: inputCountryName,
      },
    },
```

## 2. Fetch API

You can also consume a GraphQL without using any third-party library. Fetch API is inlcuded in all modern browsers, and it can work just fine for this purpose. Here is an example:

```js
fetch('https://geodb-cities-graphql.p.rapidapi.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query:
        `{
            countries {
                name
                capital
                currency
            }
        }`
  }),
})
.then(res => res.json())
.then(res => console.log(res.data));

```

## 3. Apollo Client

Apollo Client is developed by GraphQL and provides more elaborate features compared to the other libraries. It handles data fetching and state management, allowing you to do stuff like display the loading or error states as the query is being processed.

```js
import React from 'react'
import { gql, useQuery } from '@apollo/client'

const query = gql`{
            countries {
                name
                capital
                currency
            }
        }`;

export const getCountries = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return 'Loading';
  if (error) return `Error ${error.message}`;
```

## 4. Urql

[Urql](https://www.npmjs.com/package/urql) is another library you can use to fetch data from GraphQL APIs. It offers nearly the same features as Apollo Client albeit being smaller in size. It is also relatively easy to setup.

```js
npm install urql
```
