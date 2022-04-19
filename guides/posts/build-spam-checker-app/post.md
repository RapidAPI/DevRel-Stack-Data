---
title: How to Build a Spam Checker App in Next.js using an API?
description: The Spam Check API on RapidAPI Hub allows us to check any text content for spam. You can use it before sending emails to make sure they dont land in the spam folder. In this guide, we will build a Spam Checker application in Next.js using this API.
publishedDate: 2022-03-03T15:57:17.709Z
lastModifiedDate: 2022-03-03T15:57:17.709Z
authors:
    - ahmad-bilal
categories:
    - apps
tags:
    - rapidapi
    - spam-checker
    - app
coverImage: ''
---

<Lead>

APIs are a crucial part of web development, and we heavily rely on them to get the required resource from the Internet. The best way to learn development with APIs is by choosing an API and consuming it in your application.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore them on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to check any text content for spam. It will analyze the text for spammy words and phrases and provide a spam score of the given text. We will rely on an API for these spam checking features, so let's build the app.

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

For our app, I am going to use the [Spam Check API](https://rapidapi.com/security-bull-security-bull-default/api/spam-check/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) which is based on a machine learning engine and returns the spam score of a given text, which is exactly what we want.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Spam Check API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-spam-checker-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The App

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss spam-checker-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `spam-checker-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/spam-checker-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-spam-checker-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Spam</span> Checker
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Check any text for spam
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
				<title>RapidAPI - Spam Checker App</title>
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

As you can see in the UI preview, we require an input form to submit the text. The form will have a text area where the input text will go, followed by a button. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Spam</span> Checker
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Check any text for spam
			</h2>
			<form
				className="mt-20 w-1/2"
				onSubmit={e => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<div className="w-full">
					<label
						htmlFor="text"
						className="text-sm font-medium text-primary"
					>
						Enter your text
					</label>
					<div className="mt-2">
						<textarea
							rows={6}
							name="text"
							id="text"
							className="focus:outline-none focus:ring-2 w-full focus:ring-active text-base p-2 rounded-md"
						/>
					</div>
				</div>

				<div className="mt-4">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active text-base font-bold text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Check
					</button>
				</div>
			</form>
		</div>
	);
}
```

This code will create the text area and the button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input in the text area. We can do it using React `useState` hook. We will use a two states for our app; one for the input text and the other for the API response. Let's add them.

```jsx
import {useState} from 'react';

export default function Home() {
	const [text, setText] = useState(
		"All new members who join after 12:00pm EST on December 1st will pay either $29/month or $299/year.  If you join right now you can join at either $20/month or $197/year (or possibly much lower, if you live outside the US). It's your last chance to save 20% off annual plans with code GET20."
	); // Intializing the state with a dummy text
	const [response, setResponse] = useState(null); // Stores the API response

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Spam</span> Checker
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Check any text for spam
			</h2>
			<form
				className="mt-20 w-1/2"
				onSubmit={e => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<div className="w-full">
					<label
						htmlFor="text"
						className=" text-sm font-medium text-primary"
					>
						Enter your text
					</label>
					<div className="mt-2">
						<textarea
							rows={6}
							name="text"
							id="text"
							className="focus:outline-none focus:ring-2 w-full focus:ring-active text-base p-2 rounded-md"
							defaultValue={text} // Set the default value to the dummy text
							onChange={e => setText(e.target.value)} // Store the input text in the state
						/>
					</div>
				</div>
				<div className="mt-4">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active text-base font-bold text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Check
					</button>
				</div>
			</form>
		</div>
	);
}
```

For demonstration, we are intializing the `text` state with a dummy text snippet, and setting it as the default value of the text area. Also, the `onChange` handler on the textarea will store the user input in our `text` state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Spam Check API](https://rapidapi.com/security-bull-security-bull-default/api/spam-check/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

We will use the `Spam Check` endpoint for getting the spam score of a given text. You can see the endpoint on the left pane in the image below.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-spam-checker-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` ones, as you can see above.

In the `pages/api` directory, create a file named `check.js`, and use the code snippet as follows:

```jsx
// In pages/api/check.js:
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://spam-check.p.rapidapi.com/spamcheck',
		params: {text: req.query.text}, // Specifying parameter
		headers: {
			'x-rapidapi-host': 'spam-check.p.rapidapi.com',
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

We have specified the text parameter with `req.query.text`. `req.query` is an object that holds the input parameters coming from our client-side.

### → STEP #4

Now we need to create a caller function `getResponse()` in the `pages/index.js` file to send a request to our API at `http://localhost:3000/api/check`.

The check button will trigger this function. Let's make these changes to the index file.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [text, setText] = useState(
		"All new members who join after 12:00pm EST on December 1st will pay either $29/month or $299/year.  If you join right now you can join at either $20/month or $197/year (or possibly much lower, if you live outside the US). It's your last chance to save 20% off annual plans with code GET20."
	);
	const [response, setResponse] = useState(null);

	const getResponse = async () => {
		try {
			const res = await axios.get('api/check/', {
				params: {text}
			});
			const spamScore = (res.data.spamScore * 100).toFixed(2); // Convert score to percentage with 2 decimals
			setResponse(spamScore);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Spam</span> Checker
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Check any text for spam
			</h2>
			<form
				className="mt-20 w-1/2"
				onSubmit={e => {
					getResponse();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<div className="w-full">
					<label
						htmlFor="text"
						className=" text-sm font-medium text-primary"
					>
						Enter your text
					</label>
					<div className="mt-2">
						<textarea
							rows={6}
							name="text"
							id="text"
							className="focus:outline-none focus:ring-2 w-full focus:ring-active text-base p-2 rounded-md"
							defaultValue={text}
							onChange={e => setText(e.target.value)}
						/>
					</div>
				</div>

				<div className="mt-4">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active text-base font-bold text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Check
					</button>
				</div>
			</form>
		</div>
	);
}
```

If you noticed, we converted the spam score to a percentage for better readability.

### → FINAL STEP

Finally, we will display the response of the API (the percentage of spam detected in the text) as follows.

```js
{
	response && (
		<div className="mt-10">
			<span className="text-2xl text-primary">
				<span className="text-active">Result: </span>
				The text is <span className="font-bold">{response}%</span> spam.
			</span>
		</div>
	);
}
```

We also added a loading state. Our app is ready and this is what it looks like in code:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [text, setText] = useState(
		"All new members who join after 12:00pm EST on December 1st will pay either $29/month or $299/year.  If you join right now you can join at either $20/month or $197/year (or possibly much lower, if you live outside the US). It's your last chance to save 20% off annual plans with code GET20."
	);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const getResponse = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/check/', {
				params: {text}
			});
			const spamScore = (res.data.spamScore * 100).toFixed(2);
			setResponse(spamScore);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Spam</span> Checker
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Check any text for spam
			</h2>
			<form
				className="mt-20 w-1/2"
				onSubmit={e => {
					getResponse();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<div className="w-full">
					<label
						htmlFor="text"
						className=" text-sm font-medium text-primary"
					>
						Enter your text
					</label>
					<div className="mt-2">
						<textarea
							rows={6}
							name="text"
							id="text"
							className="focus:outline-none focus:ring-2 w-full focus:ring-active text-base p-2 rounded-md"
							defaultValue={text}
							onChange={e => setText(e.target.value)}
						/>
					</div>
				</div>

				<div className="mt-4">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active text-base font-bold text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						{loading ? (
							<span className="animate-pulse">Loading..</span>
						) : (
							<>Check</>
						)}
					</button>
				</div>
			</form>

			{response && (
				<div className="mt-10">
					<span className="text-2xl text-primary">
						<span className="text-active">Result: </span>
						The text is <span className="font-bold">
							{response}%
						</span> spam.
					</span>
				</div>
			)}
		</div>
	);
}
```

Here is a preview of our app:

![Spam Checker built using Spam Check API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-spam-checker-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Spam Checker App](https://rapidapi-example-spam-checker-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/spam-checker-app).
