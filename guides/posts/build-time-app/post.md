---
title: How to build a Time app using Next.js and World Time API?
description: When working remotely, we often need to know from which timezone someone is working. And if you have a global team, you often find yourself looking up different timezones to schedule a meeting.
publishedDate: 2021-11-21T16:52:44.523Z
lastModifiedDate: 2021-11-21T16:52:44.523Z
authors:
    - saad
category: apps
tags:
    - rapidapi
    - utc-time-api
coverImage: ''
---

<Lead>

When working remotely, we often need to know from which timezone someone is working. And if you have a global team, you often find yourself looking up different timezones to schedule a meeting. This is one of the many examples where we need to know the date and time of a particular time zone.

</Lead>

Today, I am building a UTC app that will provide your timezone according to an area. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to get the UTC timezone information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “utc time” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available APIs that provide information related to timezones. For this piece, I am using [World Time API](https://rapidapi.com/brianiswu/api/world-time2/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss time-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `time-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/time-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-danger">Time</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-4 md:text-base md:px-4 md:text-center">
				Get Time-related information according to an area
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Time App” and “Get Time-related information according to an area”. You can change it to anything you prefer.

### → STEP #2

Now let’s create a dropdown list and a search button. The user will be able to select the timezone of their choice from the list and use the search button to get all the details

For this, create a new folder called `components`. Inside this folder, create a file called `Timezone.js`. Copy and paste what you will find in [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/time-app/components/Timezone.js) file in your `Timezone.js`.

Now copy the following code and paste it in `pages/index.js`:

```js
import Timezone from '../components/Timezone';

export default function Home({value}) {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-danger">Time</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get Time-related information according to your area
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
				<Timezone />
				<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
					Search
				</button>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the UTC time and date that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';
import Timezone from '../components/Timezone';

export default function Home({value}) {
	const [res, setRes] = useState(value);
	const [utcTime, setUtcTime] = useState(null);
	const [utcDate, setUtcDate] = useState(null);
	const [timezone, setTimezone] = useState('Africa/Abidjan');

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-danger">Time</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get Time-related information according to your area
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
				<Timezone onChange={setTimezone} />
				<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
					Search
				</button>
			</div>
		</div>
	);
}
```

You can see that I am sending `setTimezone` function to the Timezone component as a prop.

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

We are using the `Timezone for Location` endpoint of the [World Time API](https://rapidapi.com/brianiswu/api/world-time2/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to get the UTC information.

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/69c8f1df4e21e2772c6a1f18bf344016296ef10d/guides/posts/build-time-app/images/code-snippet.png)

Now create a file with the name `time.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/time
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		if (req.query.timezone) {
			const newTimezone = req.query.timezone.split('/');
			const options = {
				method: 'GET',
				url: `https://world-time2.p.rapidapi.com/timezone/${newTimezone[0]}/${newTimezone[1]}`,
				headers: {
					'x-rapidapi-host': 'world-time2.p.rapidapi.com',
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
			var options = {
				method: 'GET',
				url: 'https://world-time2.p.rapidapi.com/timezone/Africa/Abidjan',
				headers: {
					'x-rapidapi-host': 'world-time2.p.rapidapi.com',
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
	} else {
		res.status(400);
	}
}
```

This code is making an API call to the [World Time API](https://rapidapi.com/brianiswu/api/world-time2/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It is going to execute when the user makes an API call to the `time` endpoint I have mentioned above.

I have added a condition in the code that will differentiate whether the API call is made before the website is loaded or afterward.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import {useState, useEffect} from 'react';
import Timezone from '../components/Timezone';
import axios from 'axios';

export default function Home({value}) {
	const [res, setRes] = useState(value);
	const [utcTime, setUtcTime] = useState(null);
	const [utcDate, setUtcDate] = useState(null);
	const [timezone, setTimezone] = useState('Africa/Abidjan');

	useEffect(() => {
		splitDataTime();
	}, []);

	/**
	 *
	 *
	 * split data and time.
	 */
	const splitDataTime = () => {
		const date = value.utc_datetime.slice(0, 10);
		const time = value.utc_datetime.slice(11, 16);

		setUtcDate(date);
		setUtcTime(time);
	};

	/**
	 *
	 *
	 * fetch time information
	 */
	const fetchTimeInfo = async () => {
		try {
			const res = await axios.get(`/api/time`, {
				params: {timezone}
			});

			splitDataTime();
			setRes(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-danger">Time</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get Time-related information according to an area
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
				<Timezone onChange={setTimezone} />
				<button
					className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
					onClick={fetchTimeInfo}
				>
					Search
				</button>
			</div>
			<div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
				<table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
					<thead className="font-raleway uppercase tracking-wide">
						<tr>
							<th className="border text-left px-4 py-4">
								<span className="text-danger">Information</span>
							</th>
							<th className="border text-left px-4 py-4">
								<span className="text-danger">Value</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border px-4 py-4">Timezone</td>
							<td className="border px-4 py-4">{res.timezone}</td>
						</tr>
						<tr>
							<td className="border px-4 py-4">UTC Time</td>
							<td className="border px-4 py-4">{utcTime}</td>
						</tr>
						<tr>
							<td className="border px-4 py-4">UTC Date</td>
							<td className="border px-4 py-4">{utcDate}</td>
						</tr>
						<tr>
							<td className="border px-4 py-4">UTC Offset</td>
							<td className="border px-4 py-4">
								{res.utc_offset}
							</td>
						</tr>
						<tr>
							<td className="border px-4 py-4">Client IP</td>
							<td className="border px-4 py-4">
								{res.client_ip}
							</td>
						</tr>
					</tbody>
				</table>
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

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/time');
	const {data: value} = res;

	if (!value) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			value
		}
	};
}
```

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use `getStaticProps` instead of `getServerSideProps` and the application will then fetch the data at build time.

If you look at the code, you will notice two things. First, I am using React’s `useEffect` hook to manipulate the data that I am receiving from the API. For this, I am calling `splitDataTime` function in `useEffect`. It is because the UTC date and time in the API response is a single string. But since these are two separate fields in our app, I am slicing the string to get the desired results. Afterward, I am updating the state variable.

The second thing you will see is that I have added a table to display the values that our application will fetch from the API.

## Wrap Up

This is it. We have successfully built a [UTC Time application](https://rapidapi-example-time-app.vercel.app/) using the [World Time API](https://rapidapi.com/brianiswu/api/world-time2/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) API. You can find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/time-app). It will look something like this:

![Time App built with Next.js and World Time API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/69c8f1df4e21e2772c6a1f18bf344016296ef10d/guides/posts/build-time-app/images/cover.png)
