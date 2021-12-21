---
title: How to build a Joke App using JokeAPI?
description: Let's build a joke application that will show different jokes to the user.
publishedDate: 2021-12-20T08:44:15.446Z
lastModifiedDate: 2021-12-20T08:44:15.446Z
authors:
    - saad
categories:
    - apps
tags:
    - joke-app
    - rapidapi
coverImage: ''
---

<Lead>

These days APIs can perform most of the features you want to implement in a web application. REST APIs provide you with data; Web APIs let you perform a different function like interacting with the browser, etc. If you build an application that requires data, you can use any public API from the Internet. Here [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) comes into the picture.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on RapidAPI Hub have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building a Joke application using an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that will show different jokes to the user. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to some good jokes. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “jokes apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to jokes APIs. For this piece, I am using [Jokes API by API-Ninjas](https://RapidAPI.com/apininjas/api/jokes-by-api-ninjas?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss joke-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `joke-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/joke-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Jokes</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-8 md:text-base md:px-4 md:text-center">
				An App For A Good Laugh
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Joke App” and “An App For A Good Laugh”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an area where our joke will be displayed on the screen. Also, we need to create two buttons to go back and forth between different jokes.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Jokes</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-8 md:text-base md:px-4 md:text-center">
				An App For A Good Laugh
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<p className="mb-12 border border-secondary text-secondary font-raleway px-4 py-8 tracking-wide leading-8">
					"Joke"
				</p>
				<div className="flex justify-center md:flex-col md:items-center">
					<button className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4">
						Previous
					</button>
					<button className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
```

I am using [TailwindCSS](https://tailwindcss.com/) to add CSS to all these HTML elements.

### → STEP #3

Let’s create some states to store the jokes and the current joke index to go back and forth between all jokes. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home({allJokes}) {
	const [joke, setJoke] = useState(allJokes[0]);
	const [index, setIndex] = useState(0);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Jokes</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-8 md:text-base md:px-4 md:text-center">
				An App For A Good Laugh
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<p className="mb-12 border border-secondary text-secondary font-raleway px-4 py-8 tracking-wide leading-8">
					{joke.joke}
				</p>
				<div className="flex justify-center md:flex-col md:items-center">
					<button className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4">
						Previous
					</button>
					<button
						className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4"
						onClick={nextJoke}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
```

You can see in the above code snippet that now I am rendering the joke from the `joke` state in the paragraph tag.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Jokes API by API-Ninjas](https://RapidAPI.com/apininjas/api/jokes-by-api-ninjas?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` in your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/ba55ebf9b88a1a0f5b417b615bcd6946b0a7eb0d/guides/posts/build-joke-app/images/code-snippet.png)

Now create a file with `joke.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/joke
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		var options = {
			method: 'GET',
			url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
			params: {limit: '30'},
			headers: {
				'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
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

This code makes an API call to the [Jokes API by API-Ninjas](https://RapidAPI.com/apininjas/api/jokes-by-api-ninjas?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `joke` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home({allJokes}) {
	const [joke, setJoke] = useState(allJokes[0]);
	const [index, setIndex] = useState(0);

	/**
	 *
	 *
	 * Show next joke
	 */
	const nextJoke = () => {
		if (index === 28) {
			return;
		}

		let tempIndex = index;
		tempIndex++;
		setJoke(allJokes[tempIndex]);
		setIndex(tempIndex);
	};

	/**
	 *
	 *
	 * Show previous joke
	 */
	const prevJoke = () => {
		if (index === 0) {
			return;
		}

		let tempIndex = index;
		tempIndex--;
		setJoke(allJokes[tempIndex]);
		setIndex(tempIndex);
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Jokes</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-8 md:text-base md:px-4 md:text-center">
				An App For A Good Laugh
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<p className="mb-12 border border-secondary text-secondary font-raleway px-4 py-8 tracking-wide leading-8">
					{joke.joke}
				</p>
				<div className="flex justify-center md:flex-col md:items-center">
					<button
						className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4"
						onClick={prevJoke}
					>
						Previous
					</button>
					<button
						className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4"
						onClick={nextJoke}
					>
						Next
					</button>
				</div>
			</div>
			<div className="flex flex-col mt-10 justify-end h-36">
				<p className="block mb-10 text-center text-secondary text-xs">
					Made by RapidAPI DevRel Team -{' '}
					<a
						className="hover:text-active"
						href="https://github.com/RapidAPI/DevRel-Examples-External"
					>
						See more examples like this
					</a>
				</p>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/joke');
	const {data} = res;

	const allJokes = data.slice(1);

	if (!allJokes) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			allJokes
		}
	};
}
```

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use `getStaticProps` instead of `getServerSideProps`, and the application will then fetch the data at build time.

I have also created two functions, i.e., `nextJoke` and `prevJoke`, to go back and forth between jokes. These functions are called when the user clicks on the next or previous buttons.

## Wrap Up

That’s it. We have successfully built a [Joke App](https://rapidapi-example-joke-app.vercel.app/) using [Jokes API by API-Ninjas](https://RapidAPI.com/apininjas/api/jokes-by-api-ninjas?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/joke-app).

In the end, it will look something like this:

![Joke App built with Next.js and Joke API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/ba55ebf9b88a1a0f5b417b615bcd6946b0a7eb0d/guides/posts/build-joke-app/images/cover.png)
