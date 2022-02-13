---
title: How to use a GraphQL API in React using Axios?
description: Let's see how we can fetch and use data from GraphQL in React using Axios.
publishedDate: 2021-11-12T14:17:11.709Z
lastModifiedDate: 2021-11-12T14:17:11.709Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - rapidapi
    - graphql
    - axios
coverImage: ''
---

<Lead>

The process of consuming GraphQL APIs is different from other types of APIs such as REST. Let's see how we can use them in React using Axios.

</Lead>

If you have an API set up already, you can skip to Step 3.

### → STEP #1: Choosing an API

There are many GraphQL APIs available on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). [Create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on it if you haven’t already. Then, you can look for [GraphQL APIs](https://rapidapi.com/search/graphql?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

For this guide, I will use [GeoDB Cities API](https://rapidapi.com/apidojo/api/shazam/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), which can serve the global city, region, and country data. Subscribe to the API.

![Subscribe to GeoDB API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-graphql-app/images/subscribe.png)

Once subscribed, you should see a field named `x-rapidapi-key`. This is the API key which we will use in our React code.

### → STEP #2

Next, we need to integrate the API. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
REACT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value in this file. You get the key after subscribing to the [GeoDB API](https://rapidapi.com/wirefreethought/api/geodb-cities-graphql/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

### → STEP #3

Now install and add `axios` to your project. For this, run the usual command in the terminal:

```sh
npm install axios
```

And import `axios` in your React file as follows:

```js
import axios from ‘axios’;
```

Following is the GraphQL query we will use for fetching a given country’s details. You can just copy and paste it into your code. If you are using an API of your choice, move on to the next step.

```graphql
{
	countries(namePrefix: "Ame") {
		edges {
			node {
				name
				capital
				currencyCodes
			}
		}
	}
}
```

Then, create a function that fetches the data using Axios. I am calling mine `getCountries`.

```js
import axios from 'axios';

const getCountries = async () => {
	const options = {
		method: 'POST',
		url: 'https://geodb-cities-graphql.p.rapidapi.com/',
		headers: {
			'content-type': 'application/json',
			'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
			'x-rapidapi-key': process.env.REACT_PUBLIC_RAPIDAPI_KEY
		},
		data: {
			query: `{
        countries(namePrefix: "Ame") {
          edges {
            node {
              name
              capital
              currencyCodes
            }
          }
        }
      }`
		}
	};

	axios
		.request(options)
		.then(function (response) {
			const res = response.data; // Response received from the API
		})
		.catch(function (error) {
			console.error(error);
		});
};
```

Do you notice the hard-coded query parameter `"Ame"`? What if we want to pass a parameter dynamically from the client-side? We can do that by making these changes to the `data` object.

```js
    data: {
      query: `query country($prefix: String!){
        countries(namePrefix: $prefix) {
          edges {
            node {
              name
              capital
              flagImageUri
              currencyCodes
            }
          }
        }
      }`,
      variables: {
        prefix: inputCountryName,
      },
    },
```

First, create a query operation `country`, which takes a parameter `prefix` of type string. Then, in the data object, we create another child named `variables` and assign the client's `inputCountryName` to the `prefix` variable.

That's all. Our API call is ready. To summarize, we are specifying these four things in our getter function using Axios:

-   **HTTP METHOD:** We need to specify the HTTP Method (GET, POST, PUT, etc.). We use the POST method for GraphQL APIs.

-   **URL:** The URL for the endpoint of the GraphQL API.

-   **Header:** We have to set the header to `content-type` of `application/json` for all GraphQL APIs.

-   **Query:** The query itself. It includes the request and variables.
