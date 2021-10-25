---
title: How to build a News app using Next.js and News API?
slug: build-news-app
description: There are a lot of APIs out there that you can use for your projects. But finding these APIs often becomes a hassle.
publishedDate: 2021-10-21T16:18:42.178Z
lastModifiedDate: 2021-10-21T16:18:42.178Z
authors:
    - saad
category: api
tags:
    - rapidapi
    - news-app
coverImage: ''
draft: false
---

<Lead>

There are a lot of APIs out there that you can use for your projects. But finding these APIs often becomes a hassle. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) is the world’s largest API hub and it can provide you with all the APIs you need. Anyone can look up any API they need in seconds and also monetize their APIs.

</Lead>

Today, I have decided to use one of the APIs from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) and develop a small application using it. I am going to build a news application using an API from Microsoft.

## Stack

We need to choose a stack first to build this application. Since the application consumes an API and does not need a backend, let’s go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s decide which API we are going to use. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for "news" in the search section.

<Callout
  title="Deep dive"
  linkText="Read more"
  linkHref="https://learn.rapidapi.com/rapidapi-hub-consumer/introduction"
>
  Learn more about how to use RapidAPI Hub
</Callout>

I am going to use the [Bing News Search API](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) by Microsoft Azure.

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Bing News Search API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/227bfcd965602d732b7562e98d9adf2231304ec7/guides/posts/saad/build-news-app/images/subscribe.jpg)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss news-app
```

This command is going to take a minute to set everything up. After it is finished generating the boilerplate, you will see a folder with the name `news-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

- `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called `api`. You only need to know about the `index.js` file that is the main entry point in your project.
- `public` directory: This directory contains icons. You place your static files here to load later in the application.
- `node_modules`: It’s another directory that contains all the node modules you are using in your application.
- `package.json`: This file contains the metadata of your project.
- `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
- `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
- `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
- `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/news-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and also have set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the`pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:


```js
export default function Home() {
  return (
    <div className="bg-bc min-h-screen">
      <div className="flex justify-center">
        <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-10 md:text-4xl">
              News Application
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
            Get Top <span className="text-danger">News</span> Quickly
        </h3>
      </div>
    </div>
  );
}
```

It is going to create two headings for you with the text "News Application" and "Get Top News Quickly". You can change it to anything you prefer.

### → STEP #2

Let’s integrate the API now. For this, first create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_BING_NEWS_API_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Bing News Search](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/) API. It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` in your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

<Callout>
  RapidAPI Hub provides you with code snippets in different languages for integrating the API.
</Callout>

I am going to use the [(JavaScript) Axios](https://www.npmjs.com/package/axios) one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/227bfcd965602d732b7562e98d9adf2231304ec7/guides/posts/saad/build-news-app/images/javascript-axios.jpg)

Now create a file with the name `news` inside the `pages/api` directory. This is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/news
```

Now copy the following code from this file:

```js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    var options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_BING_NEWS_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const { data } = response;
        const { value } = data;

        res.status(200).json(value);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
```

This code is making an API call to the Bing News API on the server and returns the results to the user. It is going to execute when the user makes an API call to the `user` endpoint I have mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import Link from "next/link";
import axios from "axios";

export default function Home({ value }) {
  return (
    <div className="bg-bc min-h-screen">
      <div className="flex justify-center">
        <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-10 md:text-4xl">
          News Application
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
            Get Top <span className="text-danger">News</span> Quickly
        </h3>
        {value.map((news) => {
            return (
              <Link href={news.url}>
                <div className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-danger text-lightYellow cursor-pointer transition duration-300 hover:border-primary hover:text-danger md:w-80 md:h-40">
                  <h3>{news.name}</h3>
                </div>
              </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    "https://localhost:3000/api/news"
  );
  const { data: value } = res;

  if (!value) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      value,
    },
  };
}
```

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It is going to make my application server-side, and the user will never see a loading state.

<Callout>

You can also use `getStaticProps` instead of `getServerSideProps` and the application will then fetch the data at build time.

</Callout>

Once the data is fetched, I am converting the response to JSON and then using object destructuring to extract the property `value`.

This `value` property is passed to my component as props. Since it is an array, I have mapped it to show all the data with a few lines of code. You will also see that the `div` that I am returning from the `map` function has a `Link` component. This component links different news containers to their news URLs.

## Wrap Up

This is it. We have successfully built a [weather application](https://RapidAPI-example-news-app.vercel.app/) using the [Bing News Search](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) API. You can find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/news-app). It will look something like this:

![News Application With Next.js And Bing News Search API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/53e0cefe888eaff1f43dbce9d886c5ed1e7fb917/guides/posts/saad/build-news-app/images/news-app.png)
