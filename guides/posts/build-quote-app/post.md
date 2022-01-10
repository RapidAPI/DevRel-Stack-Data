---
title: How to build a Quote App using Famous Quotes API?
description: Let's build a quotation application that will provide you with different quotes to make you stay motivated.
publishedDate: 2021-12-20T08:44:15.446Z
lastModifiedDate: 2021-12-20T08:44:15.446Z
authors:
    - saad
categories:
    - apps
tags:
    - quote-app
    - rapidapi
coverImage: ''
---

<Lead>

Today, I am building a quotation application that will provide you with different quotes to make you stay motivated. So without any further ado, let’s jump in!

</Lead>

For this, I am going to use an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It provides you with thousands of these public APIs that you can use in your apps. Many APIs on RapidAPI Hub have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to some good quote. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “quotes apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to quotes APIs. For this piece, I am using [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe To The Famous Quote API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/ba55ebf9b88a1a0f5b417b615bcd6946b0a7eb0d/guides/posts/build-quote-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss quote-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `quote-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/quote-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Quote</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				A Simple App to Get You Motivated
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Quote App” and “A Simple App to Get You Motivated”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an area where the quote will be displayed on the screen. Also, we need to create three buttons, two to go back and forth between different quote and one to request more quotes.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Quote</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				A Simple App to Get You Motivated
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<div className="border border-secondary text-secondary font-raleway mb-12 ">
					<p className="px-4 pt-4 py-2 tracking-wide leading-8">
						Quote
					</p>
					<p className="px-4 pb-4 tracking-wide leading-8 flex justify-end">
						'— Author'
					</p>
				</div>
				<div className="flex justify-center md:flex-col md:items-center">
					<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
						Previous
					</button>
					<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
						Next
					</button>
					<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
						Get More
					</button>
				</div>
			</div>
		</div>
	);
}
```

I am using [TailwindCSS](https://tailwindcss.com/) to add CSS to all these HTML elements.

### → STEP #3

Let’s create some states to store the quotes and the current quote index to go back and forth between all quotes. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [allQuotes, setAllQuotes] = useState([]);
	const [quote, setQuote] = useState(allQuotes[0]);
	const [index, setIndex] = useState(0);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Quote</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				A Simple App to Get You Motivated
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<div className="border border-secondary text-secondary font-raleway mb-12 ">
					<p className="px-4 pt-4 py-2 tracking-wide leading-8">
						{quote.text}
					</p>
					<p className="px-4 pb-4 tracking-wide leading-8 flex justify-end">
						{`— ${quote.author}`}
					</p>
				</div>
				<div className="flex justify-center md:flex-col md:items-center">
					<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
						Previous
					</button>
					<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
						Next
					</button>
					<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
						Get More
					</button>
				</div>
			</div>
		</div>
	);
}
```

You can see in the above code snippet that now I am rendering the quote from the `quote` state in the paragraph tag.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/ba55ebf9b88a1a0f5b417b615bcd6946b0a7eb0d/guides/posts/build-quote-app/images/code-snippet.png)

Now create a file with `quote.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/quote
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://famous-quotes4.p.rapidapi.com/random',
			params: {category: 'all', count: '10'},
			headers: {
				'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
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

This code makes an API call to the [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `quote` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home({data}) {
	const [allQuotes, setAllQuotes] = useState(data);
	const [quote, setQuote] = useState(allQuotes[0]);
	const [index, setIndex] = useState(0);

	/**
	 *
	 *
	 * Show next quotes
	 */
	const nextQoute = () => {
		if (index === 9) {
			return;
		}

		let tempIndex = index;
		tempIndex++;
		setQuote(allQuotes[tempIndex]);
		setIndex(tempIndex);
	};

	/**
	 *
	 *
	 * Show previous quotes
	 */
	const prevQuote = () => {
		if (index === 0) {
			return;
		}

		let tempIndex = index;
		tempIndex--;
		setQuote(allQuotes[tempIndex]);
		setIndex(tempIndex);
	};

	/**
	 *
	 *
	 * fetch quotes
	 */
	const fetchQuotes = async () => {
		try {
			const res = await axios.get('http://localhost:3000/api/quote');
			const {data} = res;
			setAllQuotes(data);
			setQuote(data[0]);
			setIndex(0);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Quote</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				A Simple App to Get You Motivated
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<div className="border border-secondary text-secondary font-raleway mb-12 ">
					<p className="px-4 pt-4 py-2 tracking-wide leading-8">
						{quote.text}
					</p>
					<p className="px-4 pb-4 tracking-wide leading-8 flex justify-end">
						{`— ${quote.author}`}
					</p>
				</div>
				<div className="flex justify-center md:flex-col md:items-center">
					<button
						className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4"
						onClick={prevQuote}
					>
						Previous
					</button>
					<button
						className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4"
						onClick={nextQoute}
					>
						Next
					</button>
					<button
						className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4"
						onClick={fetchQuotes}
					>
						Get More
					</button>
				</div>
			</div>
			<div className="flex flex-col mt-10 justify-end h-36 md:h-24">
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
	const res = await axios.get('http://localhost:3000/api/quote');
	const {data} = res;

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			data
		}
	};
}
```

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use getStaticProps instead of getServerSideProps, and the application will then fetch the data at build time.

I have also created three functions, i.e., `nextQuote`, `prevQuote`, to go back and forth between quotes, and `fetchQuotes` to request more quotes. These functions are called when the user clicks on the next, previous, or get more buttons.

## Wrap Up

That’s it. We have successfully built a [Quote App](https://rapidapi-example-quote-app.vercel.app/) using [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/quote-app).

In the end, it will look something like this:

![Quote App built with Next.js and Famous Quotes API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/ba55ebf9b88a1a0f5b417b615bcd6946b0a7eb0d/guides/posts/build-quote-app/images/cover.png)
