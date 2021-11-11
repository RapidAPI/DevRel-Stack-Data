---
title: How to build a Text Extraction App using Next.js and TextAPI?
slug: build-text-extraction-app
description: Sometimes you only want to see the content of a particular website. Maybe you are reading, and you don’t want to get distracted by ads or other parts of the website.
publishedDate: 2021-11-11T15:59:08.034Z
lastModifiedDate: 2021-11-11T15:59:08.034Z
authors:
    - saad
category: api
tags:
    - rapidapi
    - text-extraction-api
coverImage: ''
draft: false
---

<Lead>

Sometimes you only want to see the content of a particular website. Maybe you are reading, and you don’t want to get distracted by ads or other parts of the website. There are multiple APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that you can use to build something similar.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building a text extraction application that will take a URL to some article, extracts it, and then show the user the extracted article. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the movie information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “text extraction” in the search section.

<Callout
  title="Deep dive"
  linkText="Read more"
  linkHref="https://rapidapi.com/learn/rest-apis/introduction"
>
  Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available text extraction APIs. For this piece, I am using [TextAPI](https://rapidapi.com/textapi/api/textapi/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to TextAPI](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0d11cda06c5d2888a6cf5d6e31949d649c055d52/guides/posts/build-text-extraction-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss text-extraction-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `text-extraction-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/text-extraction-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        Text <span className="text-active">Extraction</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly Extract Text of Any Webpage
      </h3>
    </div>
  );
}
```

It will create two headings for you with the text “Text Extraction App” and “Quickly Extract Text of Any Webpage”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and extract button. The user will use the input field to provide the URL of an article. The extract button will send the URL to the API and get the extracted article.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        Text <span className="text-active">Extraction</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly Extract Text of Any Webpage
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <div className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            type="text"
            className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm bg-lightGrey text-secondary font-bold font-raleway md:w-full"
            placeholder="Paste the article link..."
          />
          <button
            className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-secondary hover:border-secondary md:h-16 md:my-12 md:ml-0"
          >
            Extract Text
          </button>
        </div>
      </div>
    </div>
  );
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS]((https://tailwindcss.com/)).

### → STEP #3

Let’s create some states to store the user input and the extracted article that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [extractedText, setExtractedText] = useState(null);

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        Text <span className="text-active">Extraction</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly Extract Text of Any Webpage
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <div className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            type="text"
            className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm bg-lightGrey text-secondary font-bold font-raleway md:w-full"
            placeholder="Paste the article link..."
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-secondary hover:border-secondary md:h-16 md:my-12 md:ml-0">
            Extract Text
          </button>
        </div>
      </div>
    </div>
  );
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user writes something in the input field.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [TextAPI](https://rapidapi.com/textapi/api/textapi/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are going to use the `Extract Text [From Webpage]` endpoint of the [TextAPI](https://rapidapi.com/textapi/api/textapi/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to get the extracted article.

I am also going to use the code snippet of `(JavaScript) Axios` that [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0d11cda06c5d2888a6cf5d6e31949d649c055d52/guides/posts/build-text-extraction-app/images/code-snippet.png)

Create a file called `extract` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://textapis.p.rapidapi.com/text",
      params: {
        url: req.query.url,
      },
      headers: {
        "x-rapidapi-host": "textapis.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
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
  } else {
    res.status(400);
  }
}
```
Now let’s create a function in the `pages/index.js` file to request the `/api/check` to get spell check details. You can just copy and replace the following code in `pages/index.js` file:

```js
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [extractedText, setExtractedText] = useState(null);

  /**
   *
   *
   * Fetch extracted content from the url
   */
  const fetchExtractedContent = async () => {
    try {
      const res = await axios.get(`/api/extract`, {
        params: { url },
      });
      const { data } = res;
      const { text } = data;

      setExtractedText(text);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        Text <span className="text-active">Extraction</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly Extract Text of Any Webpage
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <div className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            type="text"
            className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm bg-lightGrey text-secondary font-bold font-raleway md:w-full"
            placeholder="Paste the article link..."
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-secondary hover:border-secondary md:h-16 md:my-12 md:ml-0"
            onClick={fetchExtractedContent}
          >
            Extract Text
          </button>
        </div>

        {extractedText && (
          <textarea
            type="text"
            className="bg-lightGrey text-secondary border border-primary outline-none w-3/5 h-96 mt-12 px-4 py-2 rounded-sm font-raleway md:w-5/6 md:mt-2 md: h-48"
            value={extractedText}
          />
        )}
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-52 md:h-44">
        <p className="text-secondary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            <span className="transition duration-300 hover:text-active">
              See Examples Like this
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
```

You can see that I have created a function, `fetchExtractedContent`, for fetching the article from the webpage. I have also created a piece of UI that is conditionally rendering on the screen based on the value of `extractedText` state variable.

## Wrap Up

That’s it. We have successfully built a [Text Extraction App](https://rapidapi-example-text-extraction-app.vercel.app/) using TextAPI](https://rapidapi.com/textapi/api/textapi/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](​​https://github.com/RapidAPI/DevRel-Examples-External/tree/main/text-extraction-app) of this web app.

In the end, it will look something like this:

![Text Extraction App with Next.js and TextAPI](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0d11cda06c5d2888a6cf5d6e31949d649c055d52/guides/posts/build-text-extraction-app/images/cover.png)
