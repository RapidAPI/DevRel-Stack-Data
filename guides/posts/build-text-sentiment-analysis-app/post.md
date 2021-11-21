---
title: How to build a Text Sentiment Analysis App using Next.js and Text Sentiment Analysis API?
description: 'Sometimes you want to analyze how the content you are writing sounds like. If you are a developer like me, you can build an application for this.'
publishedDate: 2021-11-21T16:52:44.523Z
lastModifiedDate: 2021-11-21T16:52:44.523Z
authors:
    - saad
category: apps
tags:
    - rapidapi
    - text-sentiment-analysis-api
coverImage: ''
---

<Lead>

Sometimes you want to analyze how the content you are writing sounds like. If you are a developer like me, you can build an application for this. There are multiple APIs available on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that you can use for this purpose.

</Lead>

Today, I am building a Text Sentiment Analysis application that will let the user know how their text sounds. Is it positive, negative, or neutral? So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to get the sentiment analysis. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “text” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to text APIs. For this piece, I am using [Text Analysis API](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss text-sentiment-analysis-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `text-sentiment-analysis-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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
    `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/text-sentiment-analysis-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Sentiment</span> Analysis
				App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check how your text sounds
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Text Sentiment Analysis App” and “Check how your text sounds”. You can change it to anything you prefer.

### → STEP #2

Now let’s create some text areas where users will be able to write the content and a button that will request the API to analyze our content.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Sentiment</span> Analysis
				App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check how your text sounds
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
					placeholder="Write/paste any content..."
				/>
				<div className="flex items-center">
					<button className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12">
						Analyse
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
					placeholder="Analysis..."
					value=""
				/>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the content and analysis that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [content, setContent] = useState('');
	const [analysis, setAnalysis] = useState('');

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Sentiment</span> Analysis
				App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check how your text sounds
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
					placeholder="Write/paste any content..."
					onChange={e => setContent(e.target.value)}
				/>
				<div className="flex items-center">
					<button className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12">
						Analyse
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
					placeholder="Analysis..."
				/>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user writes something in the text area field.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR_RAPID_API_KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key that I told you to save earlier. It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are using the `summarize-text` endpoint of the [Text Analysis API](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to analyze the text.

Create a file called `superhero.js` in the `pages/api` directory and copy-paste the following code there:

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/69c8f1df4e21e2772c6a1f18bf344016296ef10d/guides/posts/build-text-sentiment-analysis-app/images/code-snippet.png)

Now create a file with the name `analyse.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/analyse
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const options = {
			method: 'POST',
			url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
			headers: {
				'content-type': 'application/json',
				'x-rapidapi-host': 'text-analysis12.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
			},
			data: {language: 'english', text: req.body.content}
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

This code is making an API call to the [Text Analysis API](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It is going to execute when the user makes an API call to the `analyse` endpoint I have mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [content, setContent] = useState('');
	const [analysis, setAnalysis] = useState('');

	/**
	 *
	 *
	 * Fetch Analysis of the content
	 */
	const fetchAnalysis = async () => {
		try {
			setAnalysis(`Analysing content...`);
			const res = await axios.post(`/api/analyse`, {
				content
			});
			const {data} = res;

			const msg = `Your text sounds ${
				data.sentiment
			}. It has ${Math.floor(
				data.aggregate_sentiment.pos * 100
			)}% positivity, and ${Math.floor(
				data.aggregate_sentiment.neg * 100
			)}% negativity. It has a neutral level of ${Math.floor(
				data.aggregate_sentiment.neu * 100
			)}%.`;
			setAnalysis(msg);
		} catch (err) {
			setAnalysis(`Couldn't analyse the content.`);
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Sentiment</span> Analysis
				App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check how your text sounds
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
					placeholder="Write/paste any content..."
					onChange={e => setContent(e.target.value)}
				/>
				<div className="flex items-center">
					<button
						className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12"
						onClick={fetchAnalysis}
					>
						Analyse
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
					placeholder="Analysis..."
					value={analysis}
					readOnly
				/>
			</div>
			<div className="absolute bottom-0 flex justify-center items-end h-52 md:h-44">
				<p className="text-primary pb-12 md:w-60 md:text-center">
					Made by RapidAPI DevRel Team –{' '}
					<a href="https://github.com/RapidAPI/DevRel-Examples-External">
						See Examples Like this
					</a>
				</p>
			</div>
		</div>
	);
}
```

You can see that I have created a function, `fetchAnalysis`, to request the API. The API response I receive is between 0 and 1. So I am multiplying the response by 100 to get the percentage, and then I am showing the results to the user.

## Wrap Up

That’s it. We have successfully built a [Text Sentiment Analysis App](https://rapidapi-text-sentiment-analysis-app.vercel.app/) using [Text Analysis API](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/text-sentiment-analysis-app).

In the end, it will look something like this:

![Text Sentimental Analysis App built with Next.js and Text Sentiment Analysis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/69c8f1df4e21e2772c6a1f18bf344016296ef10d/guides/posts/build-text-sentiment-analysis-app/images/cover.png)
