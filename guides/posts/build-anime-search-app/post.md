---
title: How to build an Anime Search Application using Jikan API?
description: Everyone these days loves animes and watches them a lot. If you are one of them, you would want to have a platform to search for them quickly. Let's take a look at how you can build such platform from scratch.
publishedDate: 2021-12-06T06:43:23.822Z
lastModifiedDate: 2021-12-06T06:43:23.822Z
authors:
    - saad
categories:
    - apps
tags:
    - rapidapi
    - anime-app
coverImage: ''
---

<Lead>

Everyone these days loves animes and watches them a lot. If you are one of them, you would want to have a platform to search for them quickly. For this, instead of looking for one, we can build our own.

</Lead>

So today, I am developing an anime application where you will search for your favorite animes. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to search for anime. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “anime” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to anime APIs. For this piece, I am using [Jikan API](https://RapidAPI.com/theapiguy/api/jikan1?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) by [API Guy](https://RapidAPI.com/user/theapiguy?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss anime-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `anime-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/anime-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now create a file called `next.config.js` in the root directory and paste all the content from [here](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/anime-app/next.config.js) to this file. We are doing this because the API will provide us with the image URLs. We will use the Next.js Image component to render the image, and this component needs a domain property in the `next.config.js` file to render an image from a URL.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Anime</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search and look for your favorite anime
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Anime App” and “Search and look for your favorite anime”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a search button. The user will be able to type in the input field and use the search button to get the anime details.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Anime</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search and look for your favorite anime
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for your favorite anime..."
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

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the user input and the anime information we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [anime, setAnime] = useState('');
	const [searchRes, setSearchRes] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Anime</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search and look for your favorite anime
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for your favorite anime..."
						onChange={e => setAnime(e.target.value)}
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Jikan API](https://RapidAPI.com/theapiguy/api/jikan1?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are using the `Search` endpoint of the [Jikan API](https://RapidAPI.com/theapiguy/api/jikan1?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to get all anime details.

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/921e2aafdccb1fecf813bb7e92c5c2f2616c0b5f/guides/posts/build-anime-search-app/images/code-snippet.png)

Now create a file with the name `anime.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/anime
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://jikan1.p.rapidapi.com/search/anime',
			params: {q: req.query.anime},
			headers: {
				'x-rapidapi-host': 'jikan1.p.rapidapi.com',
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

This code makes an API call to the [Jikan API](https://RapidAPI.com/theapiguy/api/jikan1?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `anime` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

export default function Home() {
	const [anime, setAnime] = useState('');
	const [searchRes, setSearchRes] = useState(null);

	/**
	 *
	 *
	 * Fetch anime details
	 */
	const fetchAnimeDetails = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(`/api/anime`, {
				params: {anime}
			});
			const {data} = res;
			const {results} = data;

			results = results.slice(0, 10);
			setSearchRes(results);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Anime</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search and look for your favorite anime
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for your favorite anime..."
						onChange={e => setAnime(e.target.value)}
					/>
					<button
						className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
						onClick={e => fetchAnimeDetails(e)}
					>
						Search
					</button>
				</form>
				{searchRes &&
					searchRes.map(animeDetail => (
						<div className="flex flex-col items-center mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
							<div className="flex justify-center w-full">
								<Link href={animeDetail.url}>
									<a>
										<Image
											src={animeDetail.image_url}
											width={400}
											height={600}
											alt={animeDetail.title}
										/>
									</a>
								</Link>
							</div>
							<div className="flex flex-col justify-center mt-8 md:mt-6 w-3/6 md:w-full">
								<div className="flex justify-between w-full md:flex-col">
									<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
										Title
									</p>
									<p className="text-secondary w-4/6 text-right md:text-left">
										{animeDetail.title}{' '}
									</p>
								</div>
								<div className="flex justify-between mt-4 w-full md:flex-col">
									<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
										Popularity
									</p>
									<p className="text-secondary">
										{animeDetail.score}{' '}
									</p>
								</div>
								<div className="flex justify-between mt-4 w-full md:flex-col">
									<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
										Rated
									</p>
									<p className="text-secondary">
										{animeDetail.rated}
									</p>
								</div>
								<div className="flex flex-col mt-4 w-full md:flex-col">
									<p className="text-active uppercase text-raleway font-bold tracking-wider mb-2 md:text-base">
										Synopsis
									</p>
									<p className="text-secondary">
										{animeDetail.synopsis}
									</p>
								</div>
							</div>
						</div>
					))}
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

You can see that I have created a function, `fetchAnimeDetails`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `searchRes` state variable’ value.

## Wrap Up

That’s it. We have successfully built an [Anime App](https://rapidapi-example-anime-app.vercel.app/) using [Jikan API](https://RapidAPI.com/theapiguy/api/jikan1?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/anime-app).

In the end, it will look something like this:

![Anime Search Application built with Next.js and Jikan API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/921e2aafdccb1fecf813bb7e92c5c2f2616c0b5f/guides/posts/build-anime-search-app/images/cover.png)
