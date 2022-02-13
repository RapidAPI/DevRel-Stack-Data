---
title: How to build a COVID-19 Stats app using Next.js and COVID-19 API?
description: In this piece, I am going to show you how you can build an application that will show the user coronavirus stats of any country they enter.
publishedDate: 2021-10-28T15:57:17.709Z
lastModifiedDate: 2021-10-28T15:57:17.709Z
authors:
    - saad
categories:
		- apps
tags:
    - rapidapi
    - covid-stats-app
coverImage: ''
---

<Lead>

There are several public APIs out there that you can use to develop small to large-scale applications. You do not have to create a new feature from scratch, and you can just find an API of it and use it to implement the feature.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building an application that will show the user coronavirus stats of any country they enter. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the COVID-19 stats. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for "covid-19" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to COVID-19 APIs. For this piece, I am using [COVID-19 data API](https://rapidapi.com/Gramzivi/api/covid-19-data/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to COVID-19 data API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-covid-app/images/subscribe.jpg)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss covid-stats-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `covid-stats-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/covid-stats-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-danger">Stats</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Track COVID-19 Spread Across the World
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text "COVID-19 Stats App" and "Track COVID-19 Spread Across the World". You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and search button. For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-danger">Stats</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Track COVID-19 Spread Across the World
			</h3>
			<div className="flex flex-col justify-between w-full md:items-center">
				<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for any country stats..."
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the user input and the stats we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [country, setCountry] = useState(null);
	const [stats, setStats] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-danger">Stats</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Track COVID-19 Spread Across the World
			</h3>
			<div className="flex flex-col justify-between w-full md:items-center">
				<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for any country stats..."
						onChange={e => setCountry(e.target.value)}
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Search
					</button>
				</div>
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [COVID-19 data API](https://rapidapi.com/Gramzivi/api/covid-19-data/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are going to use the `getLatestCountryDataByName` endpoint of the [COVID-19 data API](https://rapidapi.com/Gramzivi/api/covid-19-data/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to get the country-specific COVID-19 stats. I am also going to use the code snippet of `(JavaScript) Axios` that [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-covid-app/images/code-snippet.jpg)

Create a file called `stats` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://covid-19-data.p.rapidapi.com/country',
			params: {name: req.query.country},
			headers: {
				'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
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
				res.status(response.status);
			});
	} else {
		res.status(400);
	}
}
```

Now let’s create a function in the `pages/index.js` file to request the `http://localhost:3000/api/stats` for the COVID-19 statistics. You can just copy and replace the following code in `pages/index.js` file:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [country, setCountry] = useState(null);
	const [stats, setStats] = useState(null);

	/**
	 *
	 *
	 * Fetches COVID-19 Stats of a country
	 */
	const fetchStats = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/api/stats`, {
				params: {country}
			});
			const {data} = res;
			setStats(data[0]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-danger">Stats</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Track COVID-19 Spread Across the World
			</h3>
			<div className="flex flex-col justify-between w-full md:items-center">
				<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for any country stats..."
						onChange={e => setCountry(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={fetchStats}
					>
						Search
					</button>
				</div>
				{stats && (
					<div className="flex justify-center mt-12 h-4/5 md:w-full overflow-scroll">
						<table className="text-primary border-danger border w-3/5 md:text-sm md:mx-2">
							<thead className="font-raleway uppercase tracking-wide">
								<tr>
									<th className="border-danger border text-left px-4 py-4">
										Country
									</th>
									<th className="border-danger border text-left px-4 py-4">
										Confirmed
									</th>
									<th className="border-danger border text-left px-4 py-4">
										Recovered
									</th>
									<th className="border-danger border text-left px-4 py-4">
										Deaths
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border-danger border px-4 py-4">
										{stats.country}
									</td>
									<td className="border-danger border px-4 py-4">
										{stats.confirmed}
									</td>
									<td className="border-danger border px-4 py-4">
										{stats.recovered}
									</td>
									<td className="border-danger border px-4 py-4">
										{stats.deaths}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}
```

You can see that I have created a function, `fetchStats`, for getting the statistics. I am also creating a table to display and conditionally rendering it on the screen to display the statistics as soon as the user receives them.

## Wrap Up

This is it. We have successfully built a [COVID Stats App](https://rapidapi-example-covid-stats.vercel.app/) using the [COVID-19 data API](https://RapidAPI.com/Gramzivi/api/covid-19-data/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/covid-stats-app?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It will look something like this:

![COVID Stats Application built with Next.js and COVID-19 data API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-covid-app/images/covid-stats-app.png)
