---
title: How to build a Custom News App using Web Search API?
description: 'The world is changing every day, and it is hard to keep up with all the news. Instead of looking up on the internet, we can build a small app to get the top news in one place. In this piece, I will show you how you can build such application from scratch.'
publishedDate: 2022-03-01T13:14:26.140Z
lastModifiedDate: 2022-03-01T13:14:26.140Z
authors:
    - saad
categories:
    - apps
tags:
    - rapidapi
    - custom-news-app
coverImage: ''
---

<Lead>

The world is changing every day, and it is hard to keep up with all the news. Instead of looking up on the internet, we can build a small app to get the top news in one place. We can use an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and use it to create a web app.

</Lead>

Today, I will build a custom news app that will provide the users with top news results related to their provided query. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the news information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “news” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available news APIs. For this piece, I will use [Web Search API](https://RapidAPI.com/contextualwebsearch/api/web-search?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Web Search API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/00f6ac5579f7104ca2e2359f5ec3a63cd3d22ef0/guides/posts/build-custom-news-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss custom-news-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `custom-news-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called - - `api`. You only need to know about the `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/custom-news-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Custom <span className="text-active">News</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get the latest news from around the world for a given query
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Custom News App” and “Get the latest news from around the world for a given query”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a search button. The user will be able to type in the query in the input box and use the search button to get the news.

For this, copy the following code and paste it in `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Custom <span className="text-active">News</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get the latest news from around the world for a given query
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none focus:ring-2 focus:ring-active w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for anything..."
					/>
					<button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](https://tailwindcss.com/).

### → STEP #3

Let’s create some states to store the user input and the news information we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	const [query, setQuery] = useState('taylor swift');
	const [response, setResponse] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Custom <span className="text-active">News</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get the latest news from around the world for a given query
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						value={query}
						onChange={e => setQuery(e.target.value)}
						className="border-none outline-none focus:ring-2 focus:ring-active w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for anything..."
					/>
					<button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4">
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Web Search API](https://RapidAPI.com/contextualwebsearch/api/web-search?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/00f6ac5579f7104ca2e2359f5ec3a63cd3d22ef0/guides/posts/build-custom-news-app/images/code-snippet.png)

Now create a file with the name `news.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/news
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
			params: {
				q: req.query.query,
				pageNumber: '1',
				pageSize: '10',
				autoCorrect: 'true',
				fromPublishedDate: 'null',
				toPublishedDate: 'null'
			},
			headers: {
				'x-rapidapi-host':
					'contextualwebsearch-websearch-v1.p.rapidapi.com',
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

This code makes an API call to the [Web Search API](https://RapidAPI.com/contextualwebsearch/api/web-search?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `news` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [query, setQuery] = useState('taylor swift');
	const [response, setResponse] = useState(null);
	const [btnText, setBtnText] = useState('Search');

	/**
	 *
	 *
	 * Fetches news information from the API
	 */
	const fetchNews = async e => {
		e.preventDefault();
		try {
			setBtnText('Searching...');
			const res = await axios.get(`/api/news`, {
				params: {
					query
				}
			});
			setResponse(res.data.value);
		} catch (err) {
			console.log(err);
		}
		setBtnText('Search');
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Custom <span className="text-active">News</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get the latest news from around the world for a given query
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						value={query}
						onChange={e => setQuery(e.target.value)}
						className="border-none outline-none focus:ring-2 focus:ring-active w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for anything..."
					/>
					<button
						className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
						onClick={fetchNews}
					>
						{btnText}
					</button>
				</form>
				{response && (
					<div className="flex flex-wrap justify-center mt-4 font-light text-primary font-raleway w-5/6 rounded-sm cursor-pointer md:w-80 md:h-40">
						{response.map(res => {
							return (
								<div
									className="w-2/6 h-72 border-2 border-active mx-6 my-16"
									key={res.id}
								>
									<a
										className="inline-block w-full h-full"
										href={res.url}
									>
										<img
											src={res.image.url}
											alt={res.title}
											className="w-full h-full"
										/>

										<div className="flex justify-center w-full mt-4">
											<h3 className="w-5/6 text-center">
												{res.title}
											</h3>
										</div>
									</a>
								</div>
							);
						})}
					</div>
				)}
			</div>
			<div className="flex flex-col mt-10 justify-center">
				<p className="block mt-10 mb-10 text-center text-secondary text-xs">
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
```

You can see that I have created a function, `fetchNews`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `response` state variable value.

## Wrap Up

That’s it. We have successfully built a [Custom News App](https://rapidapi-example-custom-news-app.vercel.app/) using [Web Search API](https://RapidAPI.com/contextualwebsearch/api/web-search?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/custom-news-app) of this web app.

In the end, it will look something like this:

![Custom News App built with Next.js and Web Search API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/00f6ac5579f7104ca2e2359f5ec3a63cd3d22ef0/guides/posts/build-custom-news-app/images/cover.png)
