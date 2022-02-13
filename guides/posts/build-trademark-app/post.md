---
title: How to build a Trademark App using Next.js and USPTO Trademark API?
description: Let's see how to build a trademark search app using an API from RapidAPI Hub.
publishedDate: 2021-12-10T15:57:17.709Z
lastModifiedDate: 2021-12-10T15:57:17.709Z
authors:
    - 'ahmad-bilal'
categories:
    - apps
tags:
    - rapidapi
    - trademark
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore thousands of these on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to look up trademarks and check the availability of a trademark keyword. Let's code the app.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find a trademark API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Trademark" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see that we have a lot of options for Trademark-related APIs. For our app, I will use the [USPTO Trademark API](https://rapidapi.com/pentium10/api/uspto-trademark/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Trademark API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-trademark-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. The free plan allows up to 500 requests per month. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central s,ection, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss trademark-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `trademark-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/trademark-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Initial UI of Trademark App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-trademark-app/images/initial-ui.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. As you can see in the initial UI, we need an input field, a button and a couple of headings. Let's add these.

```js
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-20">
				Trademark Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Search Trademarks and check the availability of a keyword.
			</h2>

			<div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button className="block w-full rounded-sm px-5 py-3 bg-active text-base text-background font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
```

I added the following to `pages/_app.js`.

```js
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI Devrel Example - Trademark App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
```

### → STEP #2

Now, we need to store the user input using the React `useState` hook. We will use `keyword` for storing the input keyword and `response` to keep the API response.

```js
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [response, setResponse] = useState(null);

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-20">
				Trademark Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Search Trademarks and check availability of a keyword.
			</h2>

			<div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
					onChange={e => {
						setKeyword(e.target.value);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button className="block w-full rounded-sm px-5 py-3 bg-active text-base text-background font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
```

The `onChange` handler on the input field will store the user input in our `keyword` state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Trademark API](https://rapidapi.com/pentium10/api/uspto-trademark/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #4

The [Trademark API](https://rapidapi.com/pentium10/api/uspto-trademark/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides many helpful endpoints, like trademark search, availability, owner lookup, etc. You can see these endpoints on the left pane. For this guide, we will use the `/v1/trademarkSearch` endpoint.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-trademark-app/images/code-snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will use the `(JavaScript) Axios` snippet.

Let's set up the API call now. In the `pages/api` directory, create a file `search.js` and use the code snippet as follows:

```js
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: `https://uspto-trademark.p.rapidapi.com/v1/trademarkSearch/${req.query.keyword}/active`,
		headers: {
			'x-rapidapi-host': 'uspto-trademark.p.rapidapi.com',
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
}
```

We have specified the parameter `req.query.keyword`. `req.query` is an object that holds the input parameters coming from our client-side. Our API call is ready.

Now we need to create a function, say `getTrademark` in the `pages/index.js` file to send a request to our API `http://localhost:3000/api/search`. This function will be triggered using the search button’s `onClick` handler. Let's make these changes to the index file.

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [response, setResponse] = useState(null);

	/*
	 * Make the call to our API to fetch the trademark data.
	 */
	const getTrademark = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {keyword}
			});
			const {data} = res;
			setResponse(data); // Storing the response in our state.
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-20">
				Trademark Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Search Trademarks and check the availability of a keyword.
			</h2>

			<div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
					onChange={e => {
						setKeyword(e.target.value);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-sm px-5 py-3 bg-active text-base text-background font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						onClick={() => getTrademark()}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
```

We are storing the API Response in the `response` state.

### → FINAL STEP

In the final step, we will display the results. You can use the **Test Endpoint** button on the [RapidAPI Hub page](https://rapidapi.com/pentium10/api/uspto-trademark/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to see the shape of the response.

The API endpoint provides two things:

-   An object with a field `count`.
-   An array of objects with all trademarks related to our keyword.

If the `count` is 0, we will show the keyword to be available. Otherwise, we will display the trademark's details in a table. Here is the final code of our app:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [response, setResponse] = useState(null);

	const getTrademark = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {keyword}
			});
			const {data} = res;
			setResponse(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-20">
				Trademark Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Search Trademarks and check the availability of a keyword.
			</h2>

			<div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
					onChange={e => {
						setKeyword(e.target.value);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-sm px-5 py-3 bg-active text-base text-background font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						onClick={() => getTrademark()}
					>
						Search
					</button>
				</div>
			</div>
			{response && (
				<div className="mt-10 max-w-3xl w-full">
					<h3 className="text-primary text-center text-xl">
						The trademark keyword {keyword} is{' '}
						{response.count === 0 && (
							<span className="text-active">available</span>
						)}
						{response.count !== 0 && <span className="text-danger">not available</span>}
					</h3>
					{response.count !== 0 && (
						<div>
							<h3 className="text-primary mt-10 text-base">
								Trademark Details:
							</h3>
							<table className="w-full text-primary font-semibold mt-2 md:text-sm">
								<tbody className="bg-primary rounded-sm divide-y text-background overflow-x-scroll">
									<tr>
										<td className="px-4 py-4">Keyword</td>
										<td className="border-l px-4 py-4">
											{response.items[0].keyword}
										</td>
									</tr>
									<tr>
										<td className="px-4 py-4">Status</td>
										<td className="border-l px-4 py-4 capitalize">
											{response.items[0].status_label}
										</td>
									</tr>
									<tr>
										<td className="px-4 py-4">
											Registration No.
										</td>
										<td className="border-l px-4 py-4">
											{
												response.items[0]
													.registration_number
											}
										</td>
									</tr>
									<tr>
										<td className="px-4 py-4">
											Expiration Date
										</td>
										<td className="border-l px-4 py-4">
											{response.items[0].expiration_date}
										</td>
									</tr>
									<tr>
										<td className="px-4 py-4">Owner</td>
										<td className="border-l px-4 py-4">
											{response.items[0].owners[0].name}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
```

This is what our app looks like in its final form:

![Trademark App built with Next.js using USPTO Trademark API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-trademark-app/images/trademark-app.png)

## Wrap Up

All done. Our [trademark searcher](https://rapidapi-example-trademark-app.vercel.app/) is ready. Just like this, you can utilize the remaining endpoints to offer more features in your application. Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/trademark-app).
