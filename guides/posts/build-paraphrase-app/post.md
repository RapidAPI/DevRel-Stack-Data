---
title: How to build a Paraphrase App using Next.js and Paraphrase API?
slug: build-paraphrase-app
description: 'Every now and then we need to paraphrase some piece of content. There are a bunch of applications on the internet for this that you can use. You can also build your own application using any paraphrasing APIs.'
publishedDate: 2021-11-08T18:18:51.569Z
lastModifiedDate: 2021-11-08T18:18:51.569Z
authors:
    - saad
category: api
tags:
    - rapidapi
    - paraphrase-app
coverImage: ''
draft: false
---

<Lead>

Every now and then we need to paraphrase some piece of content. There are a bunch of applications on the internet for this that you can use. You can also build your own application using any paraphrasing APIs. Instead of googling the appropriate API to use, you can look it up on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building a web application that will paraphrase a piece of content provided to it. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to paraphrase some content. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “paraphrase” in the search section.

<Callout
  title="Deep dive"
  linkText="Read more"
  linkHref="https://rapidapi.com/learn/rest-apis/introduction"
>
  Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available movie APIs. For this piece, I am using [Rewriter/Paraphraser/Text Changer (Multi-Language) API](https://rapidapi.com/smodin/api/rewriter-paraphraser-text-changer-multi-language?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Rewriter/Paraphraser/Text Changer (Multi-Language) API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-paraphrase-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss paraphrase-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `paraphrase-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

- `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called `api`. You only need to know about the - - - `index.js` file that is the main entry point in your project.
- `public` directory: This directory contains icons. You place your static files here to load later in the application.
- `node_modules`: It’s another directory that contains all the node modules you are using in your application.
- `package.json`: This file contains the metadata of your project.
- `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
- `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
- `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
- `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/paraphrase-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-secondary">Paraphrase</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Paraphrase any piece of content easily
      </h3>
    </div>
  );
}
```

It will create two headings for you with the text “Paraphrase App” and “Paraphrase any piece of content easily”. You can change it to anything you prefer.

### → STEP #2

Now let’s create two text areas, one for user content and the other for paraphrased content, and the paraphrase button. For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-secondary">Paraphrase</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Paraphrase any piece of content easily
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
        />
        <div className="flex items-center">
          <button className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12">
            Paraphrase
          </button>
        </div>
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Paraphrased content"
        />
      </div>
    </div>
  );
}
```

This code is going to create two text areas and a button. I have also styled them a little bit using [TailwindCSS]((https://tailwindcss.com/)).

### → STEP #3

Let’s create some states to store the user content and the paraphrased content that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState(null);
  const [paraphrased, setParaphrased] = useState("");

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-secondary">Paraphrase</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Paraphrase any piece of content easily
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex items-center">
          <button
            className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12"
          >
            Paraphrase
          </button>
        </div>
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Paraphrase content"
          value={paraphrased}
        />
      </div>
    </div>
  );
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user writes something in the input field. I am also setting the value of the text area that will show paraphrase content to the state variable `paraphrased`. It is going to show the paraphrased content when this state variable will update.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Rewriter/Paraphraser/Text Changer (Multi-Language) API](https://rapidapi.com/smodin/api/rewriter-paraphraser-text-changer-multi-language?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are going to use the `Rewriter Endpoint` endpoint of the [Rewriter/Paraphraser/Text Changer (Multi-Language) API](https://rapidapi.com/smodin/api/rewriter-paraphraser-text-changer-multi-language?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to get the paraphrased content.

I am also going to use the code snippet of `(JavaScript) Axios` that [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-paraphrase-app/images/code-snippet.png)

Create a file called `paraphrase.js` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "POST",
      url: "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host":
          "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: { language: "en", strength: 3, text: req.query.content },
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

Now let’s create a function in the `pages/index.js` file to request the `/api/paraphrase` to get the paraphrased content. You can just copy and replace the following code in `pages/index.js` file:

```js
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [content, setContent] = useState(null);
  const [paraphrased, setParaphrased] = useState("");

  /**
   *
   *
   * Fetch the paraphrased content
   */
  const fetchParaPhrasedText = async () => {
    try {
      setParaphrased(`Generating paraphrased article...`);
      const res = await axios.get(`/api/paraphrase`, {
        params: { content },
      });
      const { data } = res;
      setParaphrased(data.rewrite);
    } catch (err) {
      setParaphrased(`Couldn't generate paraphrased content.`);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-secondary">Paraphrase</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Paraphrase any piece of content easily
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex items-center">
          <button
            className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12"
            onClick={fetchParaPhrasedText}
          >
            Paraphrase
          </button>
        </div>
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Paraphrased content"
          value={paraphrased}
        />
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-52 md:h-44">
        <p className="text-primary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            See Examples Like this
          </a>
        </p>
      </div>
    </div>
  );
}
```

You can see that I have created a function, `fetchParaPhrasedText`, for getting paraphrased content. It will fetch the content from the API and then show it to the user in the paraphrased text area.

## Wrap Up

That’s it. We have successfully built a [Paraphrase App](https://rapidapi-example-paraphrase-app.vercel.app/) using [Rewriter/Paraphraser/Text Changer (Multi-Language) API](https://rapidapi.com/smodin/api/rewriter-paraphraser-text-changer-multi-language?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/paraphrase-app) of this web app.

In the end, it will look something like this:

![Paraphrase App with Next.js and Rewriter/Paraphraser/Text Changer (Multi-Language) API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-paraphrase-app/images/cover.png)
