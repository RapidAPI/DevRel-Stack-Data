---
title: How to build a Horoscope App using Aztro API?
description: If you are interested in learning about their horoscope, you can either search on the internet or build your own application. The latter sounds more fun. In this piece, I am going to show you how you can do just this.
authors:
    - saad
categories:
    - apps
tags:
    - horoscope-app
    - app
publishedDate: 2022-01-03T09:34:31.065Z
lastModifiedDate: 2022-01-03T09:34:31.065Z
coverImage: ''
---

<Lead>

If you are interested in learning about their horoscope, you can either search on the internet or build your own application. The latter sounds more fun.

</Lead>

Today, I am building a horoscope app to provide you with your daily horoscope dose. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to find the horoscope. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “horoscope apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to quotes APIs. For this piece, I am using [Aztro API](https://RapidAPI.com/sameer.kumar/api/aztro/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Aztro API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/5e204c20a282c42de8cc6939ee7aa62e24049955/guides/posts/build-horoscope-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss horoscope-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `horoscope-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called - `api`. You only need to know about the `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/horoscope-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Horoscope</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Lookup Your Daily Horoscope Quickly
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Horoscope App” and “ Lookup Your Daily Horoscope Quickly”. You can change it to anything you prefer.

### → STEP #2

Now let’s create a dropdown and a search button. The user will be able to select the horoscope from the dropdown and use the search button to get the details.

For this, copy the following code and paste it in `pages/index.js`:

```jsx
const signs = [
	'Aries',
	'Taurus',
	'Gemini',
	'Cancer',
	'Leo',
	'Virgo',
	'Libra',
	'Scorpio',
	'Sagittarius',
	'Capricorn',
	'Aquarius',
	'Pisces'
];

export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Horoscope</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Lookup Your Daily Horoscope Quickly
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6">
				<select
					name="countries"
					autoFocus={true}
					className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
				>
					{signs.map(sign => (
						<option value={sign} key={signs.indexOf(sign)}>
							{sign}
						</option>
					))}
				</select>
				<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4">
					Search
				</button>
			</div>
		</div>
	);
}
```

This code is going to create a dropdown field and button. I have also styled them a little bit using [TailwindCSS](https://tailwindcss.com/).

### → STEP #3

Let’s create some states to store the user-selected horoscope and the horoscope details we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

const signs = [
	'Aries',
	'Taurus',
	'Gemini',
	'Cancer',
	'Leo',
	'Virgo',
	'Libra',
	'Scorpio',
	'Sagittarius',
	'Capricorn',
	'Aquarius',
	'Pisces'
];

export default function Home() {
	const [res, setRes] = useState(data);
	const [selectedSign, setSelectedSign] = useState('');

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Horoscope</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Lookup Your Daily Horoscope Quickly
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6">
				<select
					name="countries"
					autoFocus={true}
					className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
					onChange={e => setSelectedSign(e.target.value)}
				>
					{signs.map(sign => (
						<option value={sign} key={signs.indexOf(sign)}>
							{sign}
						</option>
					))}
				</select>
				<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4">
					Search
				</button>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user selects the horoscope.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Aztro API](https://RapidAPI.com/sameer.kumar/api/aztro/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/5e204c20a282c42de8cc6939ee7aa62e24049955/guides/posts/build-horoscope-app/images/code-snippet.png)

Now create a file with the name `horoscope.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/horoscope
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const sign = req.body.sign || 'Aries';
		const options = {
			method: 'POST',
			url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
			params: {sign: sign, day: 'today'},
			headers: {
				'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
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

This code makes an API call to the [Aztro API](https://RapidAPI.com/sameer.kumar/api/aztro/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `horoscope` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

const signs = [
	'Aries',
	'Taurus',
	'Gemini',
	'Cancer',
	'Leo',
	'Virgo',
	'Libra',
	'Scorpio',
	'Sagittarius',
	'Capricorn',
	'Aquarius',
	'Pisces'
];

export default function Home({data}) {
	const [res, setRes] = useState(data);
	const [selectedSign, setSelectedSign] = useState('');

	/**
	 *
	 *
	 * Fetch horoscope
	 */
	const fetchHoroscope = async () => {
		try {
			const res = await axios.post('/api/horoscope', {
				sign: selectedSign
			});
			setRes(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Horoscope</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Lookup Your Daily Horoscope Quickly
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6">
				<select
					name="countries"
					autoFocus={true}
					className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
					onChange={e => setSelectedSign(e.target.value)}
				>
					{signs.map(sign => (
						<option value={sign} key={signs.indexOf(sign)}>
							{sign}
						</option>
					))}
				</select>
				<button
					className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
					onClick={fetchHoroscope}
				>
					Search
				</button>
			</div>
			<div className="flex flex-col mt-16 w-3/6 h-4/5 md:flex-col md:w-5/6 md:h-full md:mb-12 md:items-center">
				<p className="border border-secondary border-b-0 text-secondary font-raleway px-4 py-8 tracking-wide leading-8">
					{res.description}
				</p>
				<table className="w-full text-secondary mb-8 md:text-sm md:mx-2">
					<tbody>
						<tr>
							<td className="border border-secondary px-4 py-4 text-active">
								Color
							</td>
							<td className="border px-4 py-4">{res.color}</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4 text-active">
								Compatibility
							</td>
							<td className="border px-4 py-4">
								{res.compatibility}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4 text-active">
								Date Range
							</td>
							<td className="border px-4 py-4">
								{res.date_range}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4 text-active">
								Lucky Number
							</td>
							<td className="border px-4 py-4">
								{res.lucky_number}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4 text-active">
								Mood
							</td>
							<td className="border px-4 py-4">{res.mood}</td>
						</tr>
					</tbody>
				</table>
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
	const res = await axios.post('http://localhost:3000/api/horoscope');
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

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use `getStaticProps` instead of `getServerSideProps`, and the application will then fetch the data at build time.

I have created a `fetchHoroscope` function that makes an API call when the user clicks on the `search` button.

## Wrap Up

That’s it. We have successfully built a Horoscope App](https://rapidapi-example-horoscope-app.vercel.app/) using [Aztro API](https://RapidAPI.com/sameer.kumar/api/aztro/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/horoscope-app).

In the end, it will look something like this:

![Horoscope App built with Next.js using Aztro API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/5e204c20a282c42de8cc6939ee7aa62e24049955/guides/posts/build-horoscope-app/images/cover.png)
