---
title: How to build a Next.js app using a GraphQL API?
slug: build-graphql-app
description: Let's see how we can fetch and use data from GraphQL in a Next.js app.
publishedDate: 2021-11-10T12:17:11.709Z
lastModifiedDate: 2021-11-10T12:17:11.709Z
authors:
    - ahmadBilal
category: api
tags:
    - rapidapi
    - graphql
    - app
    - nextjs
coverImage: ''
draft: false
---

<Lead>

GraphQL APIs allow developers to build highly performant production-ready apps. However, GraphQL APIs are a tad bit different from other types like REST in terms of implementation.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of public APIs for use in your projects. These also include GraphQL APIs, and you can explore thousands of them on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Today, we will be building a web application using the Next.js framework and fetching data from a GraphQL API. The app will allow us to get details like currency, flag, and capital of any given country. Let's build it.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

There are many GraphQL APIs available on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). [Create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on it if you haven’t already. Then, you can look for [GraphQL APIs](https://rapidapi.com/search/graphql?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) in the search section.

<Callout
  title="Deep dive"
  linkText="Read more"
  linkHref="https://rapidapi.com/learn/hub"
>
  Learn more about how to use RapidAPI Hub.
</Callout>

For our app, I will use [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities-graphql/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), which can serve the global city, region, and country data.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to GeoDB API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-graphql-app/images/subscribe.jpg)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. The free plan allows up to 1000 requests per day with restricted features, and we will use it for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your countryNameinal.

```sh
npx create-next-app -e with-tailwindcss graphql-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `graphql-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

- `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
- `public` directory: It holds assets. You can place your static files here to load later in the application.
- `package.json`: This file contains the metadata of your project.
- `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
- `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
- `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
- `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/graphql-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```js
export default function Home() {
  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-10">
        Example GraphQl <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app which provides information about a given country using a
        GraphQl API.
      </h2>
    </div>
  );
}
```

### → STEP #2

We want to add the functionality of searching for any country. So we will need an input field where the query will go, and it will be submitted by clicking a button. Let's add both of these.

```js
export default function Home() {
  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-10">
        Example GraphQl <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app which provides information about a given country using a
        GraphQl API.
      </h2>
      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for any country using full name or first few letters"
        />
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
```

This code is going to create the search field and the submit button. I have also styled and made them responsive using [TailwindCSS]((https://tailwindcss.com/)).

### → STEP #3

Let’s create two states, `countryName` to store the search input and `response` to hold the response from the API.

```js
import { useState } from "react";

export default function Home() {
  const [countryName, setCountryName] = useState(null);
  const [response, setResponse] = useState(null);

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-10">
        Example GraphQl <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app, which provides information about a given country using a
        GraphQl API.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for any country using full name or first few letters"
          onChange={(e) => setCountryName(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
```

I am using the `setCountryName(e.target.value)` to save the value of the input field in the state we just created, using the `onChange` event handler.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value in this file. You get the key after subscribing to the [GeoDB API](https://rapidapi.com/wirefreethought/api/geodb-cities-graphql/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the usual command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

Before we use the API, we need to find out what kind of a query is required for our use case, fetching a given country’s details. Since it is based on GraphQL, you can go and check its [GraphQL schema here](https://wirefreethought.github.io/geodb-cities-graphql-schema-docs/). I will summarize it for you. We can find a country by passing the required country's name as `namePrefix` to the `Countries` endpoint. It provides an array of objects named `edges`, which holds information of all countries that match our input. Then, we can traverse through the object to get our required data.

Our GraphQL query should look something like this:

```graphql
{
  countries(namePrefix: "Ame") {
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

Let's test it. On the [endpoints page](https://rapidapi.com/wirefreethought/api/geodb-cities-graphql/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), scroll down to find a text section where you can enter your GraphQL query. Copy the GraphQL query we created above and paste it here.

![Testing our Query for GeoDB API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-graphql-app/images/testing-endpoint.png)

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. Copy the `(JavaScript) Axios` one. Now, go ahead and click the `Test Endpoint` button. You will get the following response:

![Response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-graphql-app/images/response.png)

Our query was successful, and we received the details for our input **"Ame"**. Now, it is time to integrate it into our app. I am going to create a file named `countries.js` in the `pages/api` directory and use the JavaScript (Axios) code snippet we copied above. as follows:

```js
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "POST",
    url: "https://geodb-cities-graphql.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
    data: {
      query: `{
        countries(namePrefix: "Ame") {
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
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(response.status);
    });
}
```

Done. But do you see the problem here? It is the hard-coded input value. We need to pass it dynamically from the client side. However, in GraphQL queries, we can not simply replace "Ame" with our input value from the client. Instead, we will have to make the following changes to the `data` object:

```js
    data: {
      query: `query getCountry($prefix: String!){
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
        prefix: req.query.countryName,
      },
    },
```

We create a query function `getCountry`, which takes a parameter `prefix` of type string. Then, inside the data object, we create another child named `variables` we can pass our client's input variable.

Finally, our API call is ready. Now we need to write a function in the `pages/index.js` file to send the request from the client-side to our API at `http://localhost:3000/api/countries`. You can just copy and replace the following code in `pages/index.js` file:

```js
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [countryName, setCountryName] = useState(null);
  const [response, setResponse] = useState(null);

  /**
   * Fetches search results for the input country name
   */
  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/countries/", {
        params: { countryName },
      });
      const { data } = res;
      setResponse(data.data.countries.edges);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-10">
        Example GraphQl <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app which provides information about a given country using a
        GraphQl API.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for any country using full name or first few letters"
          onChange={(e) => setCountryName(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
```

See the `getSearchResults` function I have created to get the response. It sends the `countryName` state holding our text input as the parameter. Once the response is received, it is stored in the `response` state. We bind this function to the search button we created, using the `onClick` event handler.

### → FINAL STEP

In the final step, we will display the results. The API returns an object having all the details for our query. We are going to use a map function to iterate through this array of objects. I will be displaying the country's full name, capital, currency code, and image of its flag. For the design, I used a grid to organize cards for each country. This is our client-side code in its final form:

```js
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [countryName, setCountryName] = useState(null);
  const [response, setResponse] = useState(null);

  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/countries/", {
        params: { countryName },
      });
      const { data } = res;
      setResponse(data.data.countries.edges);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-10">
        Example GraphQl <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app which provides information about a given country using a
        GraphQl API.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for any country using full name or first few letters"
          onChange={(e) => setCountryName(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>

      {response && (
        <div className="mt-16">
          <h3 className="text-secondary text-ceter text-2xl">Search Results</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {response.map((item) => (
              <div key={item.node.name} className="mt-6 pt-6 grid">
                <div className="bg-secondary rounded-lg px-4 pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className=" rounded-md shadow-lg">
                        <img
                          src={item.node.flagImageUri}
                          width={140}
                          height={140}
                          alt="flag"
                        />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center text-background">
                      <h3 className="mt-2 text-2xl text-center font-bold tracking-tight">
                        {item.node.name}
                      </h3>
                      <span className="ml-2 mt-2 mb-4 text-base font-bold block">
                        {item.node.capital}
                      </span>
                      Currency:
                      <span className="ml-2 font-bold text-base">
                        {item.node.currencyCodes[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      )}
    </div>
  );
}
```

And this is what our app looks like:

![Next.js App built using GeoDB, a GraphQL API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-graphql-app/images/graphql-app.png)

## Wrap Up

All done. Our [GraphQL app](https://rapidapi-example-graphql-app.vercel.app/) is ready. Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/graphql-app).
