---
title: How to Build a Hashtag Generator App in Next.js using an API?
description: The Hashtagy API on RapidAPI Hub provides the best performing hashtags for a given keyword. Let's build a Hashtag Generator application in Next.js using this API.
publishedDate: 2022-03-10T15:57:17.709Z
lastModifiedDate: 2022-03-10T15:57:17.709Z
authors:
    - ahmad-bilal
categories:
    - apps
tags:
    - rapidapi
    - hashtag-generator
    - app
coverImage: ''
---

<Lead>

APIs are a crucial part of web development, and we heavily rely on them to get the required resource from the Internet. The best way to learn development with APIs is by choosing an API and consuming it in your application.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore them on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to generate the best-performing hashtags for a given keyword. It will analyze the keyword and find the relevant hashtags. We will rely on an API that gets these hashtags using custom algorithms, so let's build the app.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about using RapidAPI Hub in this fun, interactive guide.
</Callout>

For our app, I am going to use the [Hashtagy - Generate Hashtags API](https://RapidAPI.com/miguel.aka.kelter/api/hashtagy-generate-hashtags/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that offers multiple features for generating social media hashtags.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Hashtagy - Generate Hashtags API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hashtag-generator-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The App

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss hashtag-generator-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `hashtag-generator-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/hashtag-generator-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hashtag-generator-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-center text-active mt-10">
				Hashtag Generator
			</h1>
			<h2 className="text-primary text-center text-2xl font-light mt-6">
				Get the best hashtags for your content.
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
				<title>RapidAPI - Hashtag Generator App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
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

As you can see in the UI preview, we require an input form to submit the keyword. The form will have an input where the keyword will go, followed by a button. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-center text-active mt-10">
				Hashtag Generator
			</h1>
			<h2 className="text-primary text-center text-2xl font-light mt-6">
				Get the best hashtags for your content.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center w-full sm:flex"
				onSubmit={e => {
					e.preventDefault(); // Allow enter key to submit
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="sm:w-1/3 w-full rounded-lg px-5 py-3 text-background font-bold text-lg focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword eg: travel"
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active font-bold text-lg text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Generate
					</button>
				</div>
			</form>
		</div>
	);
}
```

This code will create the input and the button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input. We can do it using React `useState` hook. We will use two states for our app; one for the input keyword and the other for the API response. Let's add them.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState('travel'); // initialize with a default value
	const [response, setResponse] = useState(null); // Stores the API response

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-center text-active mt-10">
				Hashtag Generator
			</h1>
			<h2 className="text-primary text-center text-2xl font-light mt-6">
				Get the best hashtags for your content.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center w-full sm:flex"
				onSubmit={e => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="sm:w-1/3 w-full rounded-lg px-5 py-3 text-background font-bold text-lg focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword eg: travel"
					onChange={e => {
						setKeyword(e.target.value); // Save user input in the keyword state
						setResponse(null); // Remove previous response
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active font-bold text-lg text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Generate
					</button>
				</div>
			</form>
		</div>
	);
}
```

For demonstration, we are intializing the `keyword` state with an example keyword 'travel'. Also, the `onChange` handler on the text input will store the user input in our `keyword` state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Hashtagy - Generate Hashtags API](https://RapidAPI.com/miguel.aka.kelter/api/hashtagy-generate-hashtags/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides a bunch of useful endpoints for generating hashtags. We will use the `Get Related Hashtags (Custom)` endpoint for getting the relevant hashtags using custom algorithms. You can see these endpoints on the left pane in the image below.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hashtag-generator-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. As you can see above, we will copy the `(JavaScript) Axios` ones.

In the `pages/api` directory, create a file named `generate.js`, and use the code snippet as follows:

```jsx
// In pages/api/generate.js:
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://hashtagy-generate-hashtags.p.rapidapi.com/v1/custom_1/tags',
		params: {keyword: req.query.keyword},
		headers: {
			'x-rapidapi-host': 'hashtagy-generate-hashtags.p.rapidapi.com',
			'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
		}
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
	}
}
```

We have specified the text parameter with `req.query.keyword`. `req.query` is an object that holds the input parameters coming from our client-side.

### → STEP #4

Now we need to create a caller function `getHashtags()` in the `pages/index.js` file to send a request to our API at `http://localhost:3000/api/generate`.

The generate button will trigger this function. Let's make these changes to the index file.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState('travel');
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	/*
	 * Sends the API Request and receives the API response
	 */
	const getHashtags = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/generate/', {
				// Send the input keyword as the parameter
				params: {keyword}
			});
			// Store the response returned by the API
			setResponse(res.data.data.hashtags);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-center text-active mt-10">
				Hashtag Generator
			</h1>
			<h2 className="text-primary text-center text-2xl font-light mt-6">
				Get the best hashtags for your content.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center w-full sm:flex"
				onSubmit={e => {
					// Trigger the API Call on submit
					getHashtags();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="sm:w-1/3 w-full rounded-lg px-5 py-3 text-background font-bold text-lg focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword eg: travel"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active font-bold text-lg text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Generate
					</button>
				</div>
			</form>
		</div>
	);
}
```

### → FINAL STEP

Finally, we will display the response of the API. The API returns an array of hashtags, which we can easily map through like this.

```js
{
	response && (
		<div className="mt-10">
			<p className="grid sm:grid-cols-4 grid-cols-1 sm:gap-4 gap-1 p-6 bg-primary rounded-lg">
				{response.map(item => (
					<span key={item.relevance}>
						<span className="font-bold">#</span>
						{item.hashtag}
					</span>
				))}
			</p>
		</div>
	);
}
```

Finally, we also added a loading state. Our app is ready, and this is what it looks like in code:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState('travel');
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const getHashtags = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/generate/', {
				params: {keyword}
			});
			setResponse(res.data.data.hashtags);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-center text-active mt-10">
				Hashtag Generator
			</h1>
			<h2 className="text-primary text-center text-2xl font-light mt-6">
				Get the best hashtags for your content.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center w-full sm:flex"
				onSubmit={e => {
					getHashtags();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="sm:w-1/3 w-full rounded-lg px-5 py-3 text-background font-bold text-lg focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword eg: travel"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active font-bold text-lg text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						{loading ? (
							<span className="animate-pulse">Loading..</span>
						) : (
							<>Generate</>
						)}
					</button>
				</div>
			</form>
			{response && (
				<div className="mt-10">
					<p className="grid sm:grid-cols-4 grid-cols-1 sm:gap-4 gap-1 p-6 bg-primary rounded-lg">
						{response.map(item => (
							<span key={item.relevance}>
								<span className="font-bold">#</span>
								{item.hashtag}
							</span>
						))}
					</p>
				</div>
			)}
		</div>
	);
}
```

Here is a preview of our app:

![Hashtag Generator built using Hashtagy API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hashtag-generator-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Hashtag Generator App](https://rapidapi-example-hashtag-generator-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/hashtag-generator-app).
