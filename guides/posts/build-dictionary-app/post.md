---
title: How to build a Dictionary app using Next.js and dictionary API?
description: In this piece, I am going to show you how you can build a dictionary app using an API from RapidAPI Hub and Next.js.
publishedDate: 2021-11-12T20:22:52.607Z
lastModifiedDate: 2021-11-12T20:22:52.607Z
authors:
    - saad
categories:
		- apps
tags:
    - build-dictionary-app
coverImage: ''
---

<Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

</Lead>

Today, I am building a dictionary application that will take a word from the user and bring back its meaning using an API. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the meaning of a word. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “dictionary apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available spell check APIs. For this piece, I am using [Dictionary by API-Ninjas](https://rapidapi.com/apininjas/api/dictionary-by-api-ninjas/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. Although, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss dictionary-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `dictionary-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called `api`. You only need to know about the `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/dictionary-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-secondary">Dictionary</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check Meaning of any word
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Dictionary App” and “Check Meaning of any word”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a search button. The user will be able to type in the input field and use the search button to get the word’s meaning.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-secondary">Dictionary</span> App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check Meaning of any word
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form
          onSubmit=””
          className="flex w-full justify-center md:flex-col md:w-5/6 "
        >
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter any word..."
          />
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the user input and the meaning we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [word, setWord] = useState('');
	const [wordInfo, setWordInfo] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-secondary">Dictionary</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check Meaning of any word
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					onSubmit={e => fetchInfo(e)}
					className="flex w-full justify-center md:flex-col md:w-5/6 "
				>
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter any word..."
						onChange={e => setWord(e.target.value)}
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Search
					</button>
				</form>
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

You need to replace `YOUR-RAPIDAPI-KEY` with the API key I told you to save earlier in the article.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are using the `/v1/dictionary` endpoint of the [Dictionary by API-Ninjas](https://rapidapi.com/apininjas/api/dictionary-by-api-ninjas/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to get the meaning of the word.

I am also going to use the code snippet of `(JavaScript) Axios` that [RapidAPI Hub](https://rapidapi.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/5a1b6f8094c17bf4c799171dc1147f73f5652b4c/guides/posts/build-dictionary-app/images/code-snippet.png)

Create a file called `info.js` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
			params: {word: req.query.word},
			headers: {
				'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
			}
		};

		axios
			.request(options)
			.then(function (response) {
				res.status(200).json(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	} else {
		res.status(400);
	}
}
```

Now let’s create a function in the `pages/index.js` file to request the `/api/info` for the word meaning. You can just copy and replace the following code in `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [word, setWord] = useState('');
	const [wordInfo, setWordInfo] = useState(null);

	/**
	 *
	 *
	 * Fetch word information
	 */
	const fetchInfo = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(`/api/info`, {
				params: {word}
			});
			const {data} = res;
			const {definition} = data;

			// split the response string into an array using regex
			const newDefinition = definition.split(/1. |2. | 3. /);
			setWordInfo(newDefinition);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-secondary">Dictionary</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check Meaning of any word
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					onSubmit={e => fetchInfo(e)}
					className="flex w-full justify-center md:flex-col md:w-5/6 "
				>
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter any word..."
						onChange={e => setWord(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={fetchInfo}
					>
						Search
					</button>
				</form>
				{wordInfo && (
					<div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
						<table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
							<thead className="font-raleway uppercase tracking-wide">
								<tr>
									<th className="border text-left px-4 py-4">
										<span className="text-secondary">
											{word}
										</span>
									</th>
									<th className="border text-left px-4 py-4">
										<span className="text-secondary">
											Definition
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border px-4 py-4">1.</td>
									<td className="border px-4 py-4">
										{wordInfo[1]}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">2.</td>
									<td className="border px-4 py-4">
										{wordInfo[2]}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</div>
			<div className="absolute bottom-0 flex justify-center items-end h-36 md:h-44">
				<p className="text-primary pb-12 md:w-60 md:text-center">
					Made by RapidAPI DevRel Team –{' '}
					<a href="https://github.com/RapidAPI/DevRel-Examples-External">
						<span className="transition duration-300 hover:text-secondary">
							See Examples Like this
						</span>
					</a>
				</p>
			</div>
		</div>
	);
}
```

You can see that I have created a function, `fetchInfo`, to get the meaning of the word. I have also used a little bit of regex to split the long string we receive as a response from the API into smaller strings.

I have also created a piece of UI that is conditionally rendering on the screen.

## Wrap Up

That’s it. We have successfully built a [Dictionary App](https://rapidapi-example-dictionary-app.vercel.app/) using [Dictionary by API-Ninjas](https://rapidapi.com/apininjas/api/dictionary-by-api-ninjas/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/dictionary-app) of this web app.

In the end, it will look something like this:

![Dictionary app built with Next.js and Dictionary API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/5a1b6f8094c17bf4c799171dc1147f73f5652b4c/guides/posts/build-dictionary-app/images/cover.png)
