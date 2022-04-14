---
title: How to Build a Random Color Palette Generator App in Next.js using an API?
description: Random color palettes are a great source of inspiration if you are looking for colors for your projects. This guide will demonstrate how to build a random color palettes application using Next.js and an API.
publishedDate: 2022-04-13T15:57:17.709Z
lastModifiedDate: 2022-04-13T15:57:17.709Z
authors:
    - ahmad-bilal
categories:
    - apps
tags:
    - rapidapi
    - random
    - color-palette
    - generator
    - app
coverImage: ''
---

<Lead>

APIs are a crucial part of web development, and we heavily rely on them to get the required resource from the Internet. The best way to learn development with APIs is by choosing an API and consuming it in your application.

</Lead>

You can explore thousands of these public APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Random color palettes are a great source of inspiration if you are looking for colors for your projects. Today, we will be building a web application around this use case. The application will generate and display random color palettes to its visitors. We will rely on an API for getting the colors. Let's get started.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/hub"
>
	Learn more about using RapidAPI Hub in this fun, interactive guide.
</Callout>

For our app, I am going to use the [Random Palette Generator](https://RapidAPI.com/kareem1999/api/random-palette-generator/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, we require a key. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The App

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss random-color-palette-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `random-color-palette-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular font and colors for this app. For replicating this app's styles, you will need to use my Tailwind config. So open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/random-color-palette-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for this app. If you want, you can change it to use styles of your preference.

It's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's get started with the layout and headings.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span className="text-active">Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>
		</div>
	);
}
```

Add the following to `pages/_app.js`. We are importing our font here, which we specified in our Tailwind [config file](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/random-color-palette-app/tailwind.config.js).

```jsx
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI - Random Color Palette App</title>
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

We require a button that will fetch the next random color palette from the API. Let's add it.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span className="text-active">Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>

			<button className="mt-10 font-bold text-primary text-xl hover:text-active">
				Change &rarr;
			</button>
		</div>
	);
}
```

I have styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>). Our app looks like this now:

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-color-palette-app/images/preview.png)

### → STEP #2

Before we add the API call, we need something that will store the data returned by the API. We can do it using React `useState` hook. We will use two states for our app; `colors` for the API's response and `loading` for showing the loading state to the user. Let's add them.

```jsx
import {useState} from 'react';

export default function Home() {
	const [colors, setColors] = useState(null);
	const [loading, setLoading] = useState(false);

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span className="text-active">Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>

			<button className="mt-10 font-bold text-primary text-xl hover:text-active">
				{
					// Show a "loading.." text during the API call
					loading ? (
						<span className="animate-pulse">Loading..</span>
					) : (
						<>Change &rarr;</>
					)
				}
			</button>
		</div>
	);
}
```

Notice how we are using the `loading` state to show a `Loading..` text in the button. Without a loading state, the user will not know if the API call is processing or not. So it is always good to show the loading state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Random Palette Generator API](https://RapidAPI.com/kareem1999/api/random-palette-generator/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides two endpoints for getting color palettes. We will use the `Get Full` endpoint that allows us to define the number of palettes, the number of colors per palette, and the scheme of colors. You can see these endpoints on the left pane in the image below.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-color-palette-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` ones, as you can see above.

In the `pages/api` directory, create a file named `generate.js`, and use the code snippet as follows:

```jsx
// pages/api/generate.js
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/1/4',
		headers: {
			'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com',
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
		}
	};
	try {
		let response = await axios(options);
		// Send response to the client side
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error.response);
	}
}
```

We will send a `GET` request to the API with the following parameters:

-   Monochromatic scheme for the color generation. Available schemes are Monochromatic, Square, Triad, Complementary, or Shades.
-   Single color palette per request.
-   Four colors in each palette.

We have specified these parameters in the `url`, and you can play around with them if you want.

Now we need to create a caller function `getColors()` in the `pages/index.js` file to request our API at `/api/generate`.

```jsx
// pages/index.js
import {useState} from 'react';

export default function Home() {
	const [colors, setColors] = useState(null);
	const [loading, setLoading] = useState(false);

	const getColors = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/generate/');
			setColors(res.data.data[0].palette);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span className="text-active">Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>

			<button
				className="mt-10 font-bold text-primary text-xl hover:text-active"
				onClick={getColors}
			>
				{loading ? (
					<span className="animate-pulse">Loading..</span>
				) : (
					<>Change &rarr;</>
				)}
			</button>
		</div>
	);
}
```

We have added the function and set the `Change` button to trigger it using the `onClick` handler.

There is one caveat here. Our app will not show a color palette until the button is clicked. We want to show the first color palette without having to press any button, and we can achieve this easily using the `useEffect` hook.

```jsx
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Home() {
	const [colors, setColors] = useState(null);
	const [loading, setLoading] = useState(false);

	const getColors = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/generate/');
			// Store the palette in our state
			setColors(res.data.data[0].palette);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};
	// Get a color palette whenever page loads.
	useEffect(() => {
		getColors();
	}, []);

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span className="text-active">Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>

			<button
				className="mt-10 font-bold text-primary text-xl hover:text-active"
				onClick={getColors}
			>
				{loading ? (
					<span className="animate-pulse">Loading..</span>
				) : (
					<>Change &rarr;</>
				)}
			</button>
		</div>
	);
}
```

### → FINAL STEP

With our API call ready to go, we need to display the API's response. The API returns a color palette with an array of colors in it. We will use the `map` method to display the colors.

```jsx
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Home() {
	const [colors, setColors] = useState(null);
	const [loading, setLoading] = useState(false);
	const getColors = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/generate/');
			setColors(res.data.data[0].palette);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};
	useEffect(() => {
		getColors();
	}, []);

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span className="text-active">Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>
			{/* Display the color palette */}
			{colors && (
				<div className="mt-20 grid grid-cols-4 rounded-lg">
					{colors.map((color, index) => {
						return (
							<div
								key={index}
								className="text-primary font-bold sm:text-xl text-sm sm:px-12 px-2 py-36"
								style={{backgroundColor: color}}
							>
								{color}
							</div>
						);
					})}
				</div>
			)}

			<button
				className="mt-10 font-bold text-primary text-xl hover:text-active"
				onClick={getColors}
			>
				{loading ? (
					<span className="animate-pulse">Loading..</span>
				) : (
					<>Change &rarr;</>
				)}
			</button>
		</div>
	);
}
```

For an excellent design, we use the `style` property to set the `divs`' background colors according to our palette. Finally, here is what our app looks like:

![Random Color Palette Generator App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-color-palette-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Random Color Palette App](https://RapidAPI-example-random-color-palette-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/random-color-palette-app).
