---
title: How to build a Spell Checker App Using Next.js and JSpell Checker API?
slug: build-spell-checker-app
description: 'You often have to write detailed documents at work. They can be proposals, guides, some documentation, etc. You need to ensure that you are not making any spelling errors in such important documents.'
publishedDate: 2021-11-08T18:18:51.569Z
lastModifiedDate: 2021-11-08T18:18:51.569Z
authors:
    - saad
category: Apps
tags:
    - rapidapi
    - spell-checker-app
coverImage: ''
draft: false
---

<Lead>

You often have to write detailed documents at work. They can be proposals, guides, some documentation, etc. You need to ensure that you are not making any spelling errors in such important documents. If you are a developer like me, you can create your own web application for this task using any API from the Internet.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building a spell checker application that will take some content and show you if you have made any spelling mistakes or not. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to get the spelling information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “spell checker” in the search section.

<Callout
  title="Deep dive"
  linkText="Read more"
  linkHref="https://rapidapi.com/learn/rest"
>
  Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available spell check APIs. For this piece, I am using [JSpell Checker API](https://rapidapi.com/page-scholar-inc-page-scholar-inc-default/api/jspell-checker/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to JSpell Checker API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-spell-checker-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss spell-checker-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `spell-checker-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/spell-checker-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Spell <span className="text-active">Checker</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly See All Your Spelling Errors
      </h3>
    </div>
  );
}
```

It will create two headings for you with the text “Spell Checker App” and “Quickly See All Your Spelling Errors”. You can change it to anything you prefer.

### → STEP #2

Now let’s create a text area field and check the button. The text area will be the place where the user will paste or write content. The check button will allow the user to see if they have made any spelling mistakes or not.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Spell <span className="text-active">Checker</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly See All Your Spelling Errors
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
        />
        <div className="flex items-center">
          <button className="h-1/6 outline-none border border-active font-bold font-raleway mx-12 px-12 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-black hover:border-primary md:h-16 md:my-12">
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS]((https://tailwindcss.com/)).

### → STEP #3

Let’s create some states to store the user input and the spelling error information that we will receive from the API. We also need to create a flag as a state variable that will be set to true if there is a spelling mistake and false if there is not.

For this, copy-paste the following code in `pages/index.js`.

```js
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [spellCheckData, setSpellCheckData] = useState([]);
  const [spellErr, setSpellErr] = useState(true);

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Spell <span className="text-active">Checker</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly See All Your Spelling Errors
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
        />
        <div className="flex items-center">
          <button className="h-1/6 outline-none border border-active font-bold font-raleway mx-12 px-12 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-black hover:border-primary md:h-16 md:my-12">
            Check
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [JSpell Checker API](https://rapidapi.com/page-scholar-inc-page-scholar-inc-default/api/jspell-checker/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are going to use the `check` endpoint of the [JSpell Checker API](https://rapidapi.com/page-scholar-inc-page-scholar-inc-default/api/jspell-checker/?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) to get the spell check information.

Create a file called `check` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    var options = {
      method: "POST",
      url: "https://jspell-checker.p.rapidapi.com/check",
      headers: {
        "x-rapidapi-host": "jspell-checker.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: {
        language: "enUS",
        fieldvalues: req.body.content,
        config: {
          forceUpperCase: false,
          ignoreIrregularCaps: false,
          ignoreFirstCaps: true,
          ignoreNumbers: true,
          ignoreUpper: false,
          ignoreDouble: false,
          ignoreWordsWithNumbers: true,
        },
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
  const [content, setContent] = useState("");
  const [spellCheckData, setSpellCheckData] = useState([]);
  const [spellErr, setSpellErr] = useState(true);

  /**
   *
   *
   * Fetch Spell Errors and Suggestions
   */
  const fetchSpellErrSugg = async () => {
    try {
      const res = await axios.post(`/api/check`, {
        content,
      });
      const { data } = res;

      if (data.spellingErrorCount === 0) {
        setSpellErr(false);
      }
      {
        const { elements } = data;
        setSpellCheckData(elements[0].errors);
        setSpellErr(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Spell <span className="text-active">Checker</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly See All Your Spelling Errors
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
            className="h-1/6 outline-none border border-active font-bold font-raleway mx-12 px-12 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-black hover:border-primary md:h-16 md:my-12"
            onClick={fetchSpellErrSugg}
          >
            Check
          </button>
        </div>
        {spellErr ? (
          <div className="h-96 w-2/5 overflow-scroll md:w-full">
            <table className="bg-white w-full text-primary border-danger border md:text-sm md:mx-2">
              <thead className="font-raleway uppercase tracking-wide">
                <tr>
                  <th className="border-danger border text-left px-4 py-4">
                    Word
                  </th>
                  <th className="border-danger border text-left px-4 py-4">
                    Suggestions
                  </th>
                </tr>
              </thead>
              <tbody>
                {spellCheckData.map((obj) => {
                  return (
                    <tr key={spellCheckData.indexOf(obj)}>
                      <td className="border-danger border px-4 py-4">
                        {obj.word}
                      </td>
                      <td className="border-danger border px-4 py-4">
                        {`${obj.suggestions[0]}, ${obj.suggestions[1]}, ${obj.suggestions[2]}, ${obj.suggestions[3]}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="font-raleway font-bold text-3xl text-secondary pt-20 pb-6 md:text-3xl">
            No Spelling Error.{" "}
          </h2>
        )}
      </div>
    </div>
  );
}
```

You can see that I have created a function, `fetchSpellErrSugg`, for getting spell check details. I have also created a piece of UI that is conditionally rendering on the screen. A table will be shown on the screen by default. If there is no spelling mistake, the user will see a message that there is no spelling error.

## Wrap Up

That’s it. We have successfully built a [Spell Checker App](https://rapidapi-example-spell-checker.vercel.app/) using [JSpell Checker API](https://rapidapi.com/page-scholar-inc-page-scholar-inc-default/api/jspell-checker/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](​​https://github.com/RapidAPI/DevRel-Examples-External/blob/main/spell-checker-app) of this web app.

In the end, it will look something like this:

![Spell Checker App with Next.js and JSpell Checker API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-spell-checker-app/images/cover.png)
