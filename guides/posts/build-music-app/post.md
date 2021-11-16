---
title: How to build a Music App app using Shazam API and Next.js?
slug: build-music-app
description: Let's see how we can build a music app using Shazam API.
publishedDate: 2021-11-04T15:57:17.709Z
lastModifiedDate: 2021-11-04T15:57:17.709Z
authors:
    - ahmadBilal
category: api
tags:
    - rapidapi
    - music
    - shazam
    - app
coverImage: ''
draft: false
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore thousands of these on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that is about music. We will see how we can implement features provided by the likes of Shazam in our own music app. Let's build it.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find an API that provides Shazam-like features. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Shazam" in the search section.

<Callout
  title="Deep dive"
  linkText="Read more"
  linkHref="https://rapidapi.com/learn/rapidapi-hub-consumer/introduction"
>
  Learn more about how to use RapidAPI Hub.
</Callout>

You will see that we have a lot of options for Shazam-related APIs. For our app, I am going to use the most popular one, [Shazam API](https://rapidapi.com/apidojo/api/shazam/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Shazam API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-music-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. The free plan allows up to 500 requests per month. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss music-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `music-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

- `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api` where we will store the requests to our API.
- `public` directory: It holds assets. You can place your static files here to load later in the application.
- `package.json`: This file contains the metadata of your project.
- `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
- `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
- `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
- `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/music-app/tailwind.config.js) file, and copy all of its content,  then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```js
export default function Home() {
  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Music <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Discover music using the Shazam API from RapidAPI Hub.
      </h2>
    </div>
  );
}
```

### → STEP #2

We want to add the functionality of searching for any music or artists using Shazam. So we will need an input field where the query will go. The query will be submitted by clicking a button, so let's add both of these.

```js
export default function Home() {
  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Music <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Discover music using the Shazam API from RapidAPI Hub.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for a song or an artist"
        />
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
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

Let’s create two states, `term` to store the user input and `response` to hold the response from the API.

```js
import { useState } from "react";

export default function Home() {
  const [term, setTerm] = useState(null);
  const [response, setResponse] = useState(null);

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Music <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Discover music using the Shazam API from RapidAPI Hub.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for a song or an artist"
          onChange={(e) => setTerm(e.target.value)} // Updating the state with input field value.
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
```

I am using the `setTerm(e.target.value)` to save the value of the input field in the state we just created, using the `onChange` event handler.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Shazam API](https://rapidapi.com/apidojo/api/shazam/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

The [Shazam API](https://rapidapi.com/apidojo/api/shazam/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides a bunch of very useful endpoints like list recommendations, song detection and global charts. You can see these endpoints on the left pane. For this guide, we are going to use the `search` endpoint.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-music-app/images/code-snippet.png)

We will send a GET request to search for songs and artists that match the input term. For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We are going to copy the `(JavaScript) Axios` one as you can see above.

Next, I am going to create a file named `search.js` in the `pages/api` directory and use the code snippet as follows:

```js
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: { term: req.query.term, locale: "en-US", offset: "0", limit: "10" }, // Parameters
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY, // Our API Key
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

```

We have specified the parameters. Our API call is ready. Now we need to create a function in the `pages/index.js` file to send the request from the client-side to our API at `http://localhost:3000/api/search`. You can just copy and replace the following code in `pages/index.js` file:

```js
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [term, setTerm] = useState(null);
  const [response, setResponse] = useState(null);

  /**
   * Fetches search results for the input term
   */
  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/search/", {
        params: { term },
      });
      const { data } = res; // Destructuring response to extract data
      setResponse(data.tracks.hits); // Setting the response state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <Head>
        <title>RapidAPI Devrel Example - Music App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1 className="text-6xl text-primary font-bold mt-20">
        Music <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Discover music using the Shazam API from RapidAPI Hub.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for a song or an artist"
          onChange={(e) => setTerm(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
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

See the `getSearchResults` function I have created to get the response. It sends the `term` state holding our text input as the parameter. After receiving the response, it is stored in the `response` state. We are binding this function to the button we created, using the `onClick` event handler.

### → FINAL STEP

In the final step, we will display the results. The API returns an object having a number of songs that match our query. `data.tracks.hits` represents an array of objects, one object for each song. Each object has all the information you will need about the given song from its name to cover images.

We are going to use a map function to iterate through this array of objects. I will be displaying the title, subtitle, Shazam URL, and cover image of each song. For the design, I used a grid to organize cards for each song. Our final code looks like this:

```js
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [term, setTerm] = useState(null);
  const [response, setResponse] = useState(null);

  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/search/", {
        params: { term },
      });
      const { data } = res;
      setResponse(data.tracks.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Music <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Discover music using the Shazam API from RapidAPI Hub.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for a song or an artist"
          onChange={(e) => setTerm(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>

      {response && (
        <div className="mt-16">
          <h3 className="text-secondary text-2xl">Search Results</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {response.map((song) => (
              <div key={song.track.title} className="pt-6">
                <div className="flow-root bg-light rounded-lg px-4 pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className="p-3 rounded-md shadow-lg">
                        <img
                          src={song.track.images.coverart}
                          width={140}
                          height={140}
                          alt={song.track.title}
                        />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center">
                      <h3 className="mt-2 text-lg text-center font-medium text-primary tracking-tight">
                        {song.track.title}
                      </h3>
                      <span className="mt-2 mb-4 max-w-xs text-sm text-secondary block">
                        {song.track.subtitle}
                      </span>
                      <a
                        className="mt-5 text-sm text-active"
                        href={song.track.url}
                      >
                        Open in Shazam
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

```

This is what our app looks like:

![Music App built with Next.js and Shazam API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-music-app/images/music-app.png)

## Wrap Up

All done. Our [music app](https://rapidapi-example-music-app.vercel.app/) is ready. Just like this, you can utilize the remaining endpoints to create a full-fledged music application. Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/music-app).
