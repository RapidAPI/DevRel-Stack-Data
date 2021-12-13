---
title: How to build a Public Holiday App using Public Holiday API?
description: Let's build an application that will display all the public holidays of the USA.
authors:
    - saad
categories:
    - apps
tags:
    - public-holidays
    - api
publishedDate: 2021-12-13T14:43:14.809Z
lastModifiedDate: 2021-12-13T14:43:14.809Z
coverImage: ''
---

<Lead>

Today, I am building a public holiday application that will provide you with all the available public holidays in the United States. So without any further ado, let’s jump in!

</Lead>

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to search for public holidays. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “holidays” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to holiday APIs. For this piece, I am using [Public Holiday API](https://RapidAPI.com/theapiguy/api/public-holiday/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss public-holiday-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `public-holiday-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/public-holiday-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Public <span className="text-active">Holiday</span> App
			</h2>
			<h3 className="text-primary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take a look at different public holidays of USA
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Public Holiday App” and “Take a look at different public holidays in the USA”. You can change it to anything you prefer.

### → STEP #2

Now let’s create a dropdown and a search button. The user will be able to select the year from the dropdown list and use the search button to get the public holidays of that year.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Public <span className="text-active">Holiday</span> App
			</h2>
			<h3 className="text-primary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take a look at different public holidays of USA
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6">
				<select
					name="countries"
					autoFocus={true}
					className="outline-none w-2/5 bg-secondary px-4 py-2 rounded-sm font-raleway md:w-full"
				>
					{[
						2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
						2030
					].map(year => {
						return <option value={year}>{year}</option>;
					})}
				</select>
				<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-light hover:text-black md:ml-0 md:mt-4">
					Search
				</button>
			</div>
		</div>
	);
}
```

This code is going to create a dropdown and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the year and the holiday information we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
export default function Home() {
	const [year, setYear] = useState(2021);
	const [holidays, setHolidays] = useState(data);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Public <span className="text-active">Holiday</span> App
			</h2>
			<h3 className="text-primary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take a look at different public holidays of USA
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6">
				<select
					name="countries"
					autoFocus={true}
					className="outline-none w-2/5 bg-secondary px-4 py-2 rounded-sm font-raleway md:w-full"
					onChange={e => setYear(e.target.value)}
				>
					{[
						2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
						2030
					].map(year => {
						return <option value={year}>{year}</option>;
					})}
				</select>
				<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-light hover:text-black md:ml-0 md:mt-4">
					Search
				</button>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user selects the year.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Public Holiday API](https://RapidAPI.com/theapiguy/api/public-holiday/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1474911ae42073cc6622b4d86d0d1a7290b15b55/guides/posts/build-public-holiday-app/images/code-snippet.png)

Now create a file with the name `holiday.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/holiday
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const year = req.query.year || 2021;
		const options = {
			method: 'GET',
			url: `https://public-holiday.p.rapidapi.com/${year}/US`,
			headers: {
				'x-rapidapi-host': 'public-holiday.p.rapidapi.com',
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

This code makes an API call to the [Public Holiday API](https://RapidAPI.com/theapiguy/api/public-holiday/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `holiday` endpoint I mentioned above.

I have added a condition in the code that will differentiate whether the API call is made before the website is loaded or afterward.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home({data}) {
	const [year, setYear] = useState(2021);
	const [holidays, setHolidays] = useState(data);

	/**
	 *
	 *
	 * Fetch US public holidays for a particular year
	 */
	const fetchHolidays = async () => {
		try {
			const res = await axios.get(`/api/holiday`, {
				params: {year}
			});

			setHolidays(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Public <span className="text-active">Holiday</span> App
			</h2>
			<h3 className="text-primary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take a look at different public holidays of USA
			</h3>
			<div className="flex w-full justify-center md:flex-col md:w-5/6">
				<select
					name="countries"
					autoFocus={true}
					className="outline-none w-2/5 bg-secondary px-4 py-2 rounded-sm font-raleway md:w-full"
					onChange={e => setYear(e.target.value)}
				>
					{[
						2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
						2030
					].map(year => {
						return <option value={year}>{year}</option>;
					})}
				</select>
				<button
					className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-light hover:text-black md:ml-0 md:mt-4"
					onClick={fetchHolidays}
				>
					Search
				</button>
			</div>
			<div className="flex justify-around flex-wrap text-primary font-raleway mt-12 w-4/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
				{holidays.map(holiday => (
					<div
						className="flex items-center flex-col bg-light w-56 h-40 rounded-md mb-12"
						key={holidays.indexOf(holiday)}
					>
						<div className="bg-primary text-background w-full h-24 flex justify-center items-center rounded-md">
							<p>{holiday.localName}</p>
						</div>
						<div className="flex justify-center items-center h-16">
							<p>{holiday.date}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col mt-10 justify-center">
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
	const res = await axios.get('http://localhost:3000/api/holiday');
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

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use `getStaticProps` instead of `getServerSideProps` and the application will then fetch the data at build time.

You can see that I have created a function, `fetchHolidays`, to request the API. I have also created a piece of UI that is rendering on the screen based on the `holidays` state variable’ value.

## Wrap Up

That’s it. We have successfully built an [Public Holiday App](https://rapidapi-example-public-holiday-app.vercel.app/) using [Public Holiday API](https://RapidAPI.com/theapiguy/api/public-holiday/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/public-holiday-app).

In the end, it will look something like this:

![Public Holiday Application built with Next.js and Public Holiday API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1474911ae42073cc6622b4d86d0d1a7290b15b55/guides/posts/build-public-holiday-app/images/cover.png)
