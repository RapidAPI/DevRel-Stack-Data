---
title: How to Build an NFT Explorer App in Next.js using an API?
description: There are many APIs on RapidAPI Hub that make Web 3.0 more accessible. NFTs are also one of the Web 3.0 items. Let's use an API to build an NFT explorer application in Next.js.
publishedDate: 2022-03-25T15:57:17.709Z
lastModifiedDate: 2022-03-25T15:57:17.709Z
authors:
    - ahmad-bilal
categories:
    - apps
tags:
    - rapidapi
    - nft-explorer
    - app
coverImage: ''
---

<Lead>

APIs are a crucial part of web development, and we heavily rely on them to get the required resource from the Internet. The best way to learn development with APIs is by choosing an API and consuming it in your application.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore them on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to look up NFT collections based on a given keyword. It will use an API to display the collections that match the keyword. Let's jump right in and start building the app.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "NFT" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about using RapidAPI Hub in this fun, interactive guide.
</Callout>

You will see that we have a lot of options for Hotel-related APIs. For our app, I am going to use the [NFT Explorer API](https://rapidapi.com/saumarpe/api/nft-explorer/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that allows us to search for NFT collections from 20+ networks.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to NFT Explorer API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-nft-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The App

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss nft-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `nft-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/nft-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-nft-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-spacemono items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">NFT</span> Explorer
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for NFT collections in 20+ networks
			</h2>
		</div>
	);
}
```

I added the following to `pages/_app.js`.

```jsx
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI - NFT Explorer App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
```

### → STEP #2

As you can see in the UI preview, we require an input to submit the keyword. We will use a form that will have an input where the keyword will go, followed by a button. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-spacemono items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">NFT</span> Explorer
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for NFT collections in 20+ networks
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					e.preventDefault(); // Allow enter key to submit form
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the NFT collection name"
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

This code will create the input and the button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input. We can do it using React `useState` hook. We will use two states for our app; `title` for the input keyword and `searchResults` for the API response. Let's add them.

```jsx
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState('bored ape');
	const [searchResults, setSearchResults] = useState(null);

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-spacemono items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">NFT</span> Explorer
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for NFT collections in 20+ networks
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the NFT collection name"
					defaultValue={title} // Default to 'bored ape'
					onChange={e => {
						setTitle(e.target.value); // Store keyword in the state
						setSearchResults(null); // Remove previous results
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

For demonstration, we are intializing the `title` state with an example keyword 'bored ape' and adding it as the default value of the input. Also, the `onChange` handler on the text input will store the user input in our `title` state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [NFT Explorer API](https://rapidapi.com/saumarpe/api/nft-explorer/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides a `NFTSearch` endpoint for getting the relevant NFT collections. You can see this endpoint on the left pane in the image below.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-nft-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. As you can see above, we will copy the `(JavaScript) Axios` ones.

In the `pages/api` directory, create a file named `search.js`, and use the code snippet as follows:

```jsx
// In pages/api/search.js:
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://nft-explorer.p.rapidapi.com/search',
		params: {
			chain: 'eth', // Search in ETH chain
			filter: 'name,attributes',
			offset: '0', // Start from the first result
			q: req.query.title // Title from the input
		},
		headers: {
			'X-RapidAPI-Host': 'nft-explorer.p.rapidapi.com',
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
		}
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error.response);
	}
}
```

We have specified the query keyword parameter with `req.query.title`. `req.query` is an object that holds the input parameters coming from our client-side.

### → STEP #4

Now we need to create a caller function `getResults()` in the `pages/index.js` file to send a request to our API at `http://localhost:3000/api/search`. Let's code the function:

```jsx
// In pages/index.js:
const getResults = async () => {
	try {
		const res = await axios.get('api/search/', {
			params: {title}
		});
		// Do something with the API response here
	} catch (error) {
		console.error(error);
	}
};
```

This function will send the API request and get the response, which looks like this:

![Response from the API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-nft-app/images/response.png)

As you can see, we get more than a hundred NFT Collections in the response. Each collection has a field named `metadata`, which has all the details we need. But, we can not use it directly since it is a string.

<Callout>
	Servers convert JSON into string while exchanging data. We need to parse the
	string into an object before using it.
</Callout>

So, we will parse the response and extract the `metadata` field from each collection. For this, we will create another function, `filterData()` in the `pages/index.js` file, that will filter the results and parse them. The functions look like this in code:

```jsx
const getResults = async () => {
	try {
		setLoading(true);
		const res = await axios.get('api/search/', {
			params: {title}
		});
		const data = filterData(res.data.result); // Filter the data
		setSearchResults(data); // Add the filtered data to the results state
	} catch (error) {
		console.error(error);
	}
};

const filterData = results => {
	results = results.slice(0, 30); // Take only the first 30 results
	results.filter(result => {
		result.metadata = JSON.parse(result.metadata); // Parse metadata into a JS object
	});
	return results;
};
```

Our caller function is ready. We want the search button to trigger this function. To achieve this, add the `getResults()` function to the `onSubmit` handler of the form.

```jsx
// pages/index.js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState('bored ape');
	const [searchResults, setSearchResults] = useState(null);

	const getResults = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {title}
			});
			const data = filterData(res.data.result);
			setSearchResults(data);
		} catch (error) {}
	};

	const filterData = results => {
		results = results.slice(0, 30);
		results.filter(result => {
			result.metadata = JSON.parse(result.metadata);
		});
		return results;
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-spacemono items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">NFT</span> Explorer
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for NFT collections in 20+ networks
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getResults(); // Trigger the search
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the NFT collection name"
					defaultValue={title}
					onChange={e => {
						setTitle(e.target.value);
						setSearchResults(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

### → FINAL STEP

Finally, we will display the response of the API. The API returns an array of NFT collections, which we can easily map using a grid.

```js
{
	searchResults && (
		<div className="mt-10">
			<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
				{searchResults.map(item => {
					return (
						<div key={item.token_id} className="pt-6">
							<div className="flow-root bg-light rounded-lg px-4 pb-8">
								<div className="-mt-6">
									<div className="flex items-center justify-center">
										<img
											src={
												item.metadata.image
													? item.metadata.image
													: item.metadata.image_url // Get alternative image from the metadata
											}
											className="p-2 w-64 h-64 rounded-lg"
											alt={item.metadata.name}
										/>
									</div>
									<div className="text-center justify-center items-center">
										<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
											{item.metadata.name}
										</h3>
										<p className="mt-4 text-base leading-relaxed text-secondary">
											{item.metadata.description}
										</p>
										{item.metadata.external_link && (
											<a
												href={
													item.metadata.external_link
												}
												className="mt-4 block text-active underline"
											>
												View
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
```

Finally, I also added a loading state. Our app is ready, and this is what it looks like in code:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState('bored ape');
	const [searchResults, setSearchResults] = useState(null);
	const [loading, setLoading] = useState(false); // loading indicator

	const getResults = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/search/', {
				params: {title}
			});
			const data = filterData(res.data.result);
			setSearchResults(data); // Add the data to the results state
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	const filterData = results => {
		results = results.slice(0, 30); // Take only the first 30 results
		results.filter(result => {
			result.metadata = JSON.parse(result.metadata); // Parse string into JS object
		});
		return results;
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-spacemono items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">NFT</span> Explorer
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for NFT collections in 20+ networks
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getResults();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the NFT collection name"
					defaultValue={title}
					onChange={e => {
						setTitle(e.target.value);
						setSearchResults(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						{loading ? (
							<span className="animate-pulse">Loading..</span>
						) : (
							<>Search</>
						)}
					</button>
				</div>
			</form>

			{searchResults && (
				<div className="mt-10">
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
						{searchResults.map(item => {
							return (
								<div key={item.token_id} className="pt-6">
									<div className="flow-root bg-light rounded-lg px-4 pb-8">
										<div className="-mt-6">
											<div className="flex items-center justify-center">
												<img
													src={
														item.metadata.image
															? item.metadata
																	.image
															: item.metadata
																	.image_url // Get alternative image from the metadata
													}
													className="p-2 w-64 h-64 rounded-lg"
													alt={item.metadata.name}
												/>
											</div>
											<div className="text-center justify-center items-center">
												<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
													{item.metadata.name}
												</h3>
												<p className="mt-4 text-base leading-relaxed text-secondary">
													{item.metadata.description}
												</p>
												{item.metadata
													.external_link && (
													<a
														href={
															item.metadata
																.external_link
														}
														className="mt-4 block text-active underline"
													>
														View
													</a>
												)}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
```

Here is a preview of our app:

![NFT Explorer app built using NFT Explorer API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-nft-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [NFT App](https://rapidapi-example-nft-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/nft-app).
