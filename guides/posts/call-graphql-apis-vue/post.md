---
title: How to Consume GraphQL APIs in Vue?
description: 'Vue.js is built on top of HTML, CSS, and JavaScript and provides a declarative
and component-based programming model. In this piece, we will look at how you
can consume GraphQL APIs in Vue.js applications.'
publishedDate: 2022-03-16T20:53:04.094Z
lastModifiedDate: 2022-03-16T20:53:04.094Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - vue
    - graphql
    - api
coverImage: ''
---

<Lead>

Calling APIs is a significant part of any web application. Today, more and more applications use GraphQL APIs, whether the applications are React, Vue, Svelte or Angular-based.

</Lead>

## Vue.js

It is a modern JavaScript framework launched in 2014 to build web interfaces and single-page applications. It was created by [Evan You](​​https://evanyou.me/) to combine the pros of Angular into a lightweight and fast framework.

Vue.js is built on top of HTML, CSS, and JavaScript and provides a declarative and component-based programming model. The framework can also build desktop applications using the Electron framework.

## Consuming GraphQL APIs in Vue.js

In this piece, we will look at how to connect GraphQL APIs to your front-end in Vue.js. You can consume GraphQL APIs in your Vue application in many ways, but this guide will cover the following:

1. Fetch API.

2. Axios.

Let's see how each of them works in detail.

If you want, you can create a new Vue project by running the following command:

```sh
npx @vue/cli create test-project
```

Then, run the project by using the following command:

```sh
npm run serve
```

We will use the [GeoDB API on RapidAPI Hub](https://rapidapi.com/wirefreethought/api/geodb-cities-graphql/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) for this guide, which is a GraphQL API that returns data about countries and cities.

<Callout
 title="Deep dive"
 linkText="Read more"
 linkHref="https://rapidapi.com/learn/hub"
>
 Learn more about how to use RapidAPI Hub.
</Callout>

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button and choosing a plan that suits you. Once you are subscribed, you will see a field named `x-rapidapi-key`. Save its value.

## 1. Fetch API

For basic data fetching with GraphQL, you can use the built-in Fetch API in your Vue app. Fetch API is included in all modern browsers, and it can work just fine for this purpose.

We will be using a basic query that will get the name and capital of a given country from the GeoDB API:

```graphql
{
  countries(namePrefix: "America") {
    edges {
      node {
          name
          flagImageUri
          }
      }
    }
}
```

Let's specify the query and the data object in our component. Use the following code inside your component file, such as `src/components/HelloWorld.Vue`.

```vue
<template></template>

<script>
export default {
 name: 'HelloWorld',
 data() {
  return {
   name: '',
   capital: '',
  };
 },

 async mounted() {
  let query = `{
    countries(namePrefix: "America") {
        edges {
            node {
                name
                capital
                }
            }
        }
    }`;
 },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
```

For this guide, we are going to use the `mounted()` hook of Vue inside the `<script></script>` tag, which means that the API request will be sent whenever the browser finishes rendering the component. If you want to trigger the request on an event like a button click, you can use the `methods` object with event handlers instead of the hook.

Now, our API Call using the Fetch API will look something like this:

```js
// API CALL
try {
 let res = await fetch('https://geodb-cities-graphql.p.rapidapi.com/', {
  method: 'POST',
  headers: {
   'content-type': 'application/json',
   'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
   'x-rapidapi-key': 'Your-RapidAPI-Key', // Replace it with your key
  },
  body: JSON.stringify({ query }),
 });
 res = await res.json();
 const response = res.data.countries.edges[0].node;
 this.name = response.name;
 this.capital = response.capital;
} catch (error) {
 console.log(error);
}
```

Replace the value of the `x-rapidapi-key` in the above code snippet with your API key. Now, let's put the API call inside the `mounted` hook and add some basic HTML inside the `template` tags to display the data returned by the API.

```vue
<template>
 <div class="hello">
  <h1>{{ name }}</h1>
  <p>Capital: {{ capital }}</p>
 </div>
</template>

<script>
export default {
 name: 'HelloWorld',
 data() {
  return {
   name: '',
   capital: '',
  };
 },
 async mounted() {
  let query = `{
    countries(namePrefix: "America") {
        edges {
            node {
                name
                capital
                }
            }
        }
    }`;

  // API CALL
  try {
   let res = await fetch('https://geodb-cities-graphql.p.rapidapi.com/', {
    method: 'POST',
    headers: {
     'content-type': 'application/json',
     'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
     'x-rapidapi-key': 'Your-RapidAPI-Key',
    },
    body: JSON.stringify({ query }),
   });
   res = await res.json();
   const response = res.data.countries.edges[0].node;
   this.name = response.name;
   this.capital = response.capital;
  } catch (error) {
   console.log(error);
  }
 },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
 margin: 40px 0 0;
}
img {
 width: 100px;
 height: 100px;
}
</style>
```

That's it. As you can see, our page shows the country's name and capital received from the API.

![Response from the API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/call-graphql-apis-vue/images/response.png)

## 2. Axios

Using Axios is pretty much similar to what we did with fetch. First, go ahead and install Axios.

```sh
npm install axios
```

Import Axios in the component and replace Fetch with it. Here is what the component will look like in code:

```vue
<template>
 <div class="hello">
  <h1>{{ name }}</h1>
  <p>Capital: {{ capital }}</p>
 </div>
</template>

<script>
import axios from 'axios';
export default {
 name: 'HelloWorld',
 data() {
  return {
   name: '',
   capital: '',
  };
 },
 async mounted() {
  let query = `{
    countries(namePrefix: "America") {
        edges {
            node {
                name
                capital
                }
            }
        }
    }`;

  // API CALL
  try {
   let res = await axios('https://geodb-cities-graphql.p.rapidapi.com/', {
    method: 'POST',
    headers: {
     'content-type': 'application/json',
     'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
     'x-rapidapi-key': '69ae23e117mshaa398c157f895bdp15c0a5jsnfcd183159b31',
    },
    body: JSON.stringify({ query }),
   });
   const response = res.data.countries.edges[0].node;
   this.name = response.name;
   this.capital = response.capital;
  } catch (error) {
   console.log(error);
  }
 },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
 margin: 40px 0 0;
}
img {
 width: 100px;
 height: 100px;
}
</style>
```

## Wrap Up

This guide was an introduction to consuming GraphQL APIs in Vue.js. However, if you want to do complex data fetching, [Apollo Client](https://apollo.vuejs.org/) will be a better choice.
