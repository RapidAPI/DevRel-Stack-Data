---
title: How to build a Movie Details App using Next.js and IMDb API?
description: 'There are a lot of different movie APIs available on the Internet. Instead of looking for them, you can visit RapidAPI Hub and search for "movies" to see all the available APIs.'
publishedDate: 2021-11-08T18:18:51.569Z
lastModifiedDate: 2021-11-08T18:18:51.569Z
authors:
    - saad
category: Apps
tags:
    - rapidapi
    - movie-details-app
coverImage: ''
---

<Lead>

There are a lot of different movie APIs available on the Internet. Instead of looking for them, you can visit [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and search for them. You will find a lot of different API options there.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building a web application that will show the details of a movie like its runtime, the year it was released, poster, etc., to the user. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the movie information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “movies” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available movie APIs. For this piece, I am using [IMDb API](https://rapidapi.com/apidojo/api/imdb8/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) by [Api Dojo](https://rapidapi.com/user/apidojo?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to IMDb API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-movie-details-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss movie-details-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `movie-details-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called `api`. You only need to know about the - - - `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/movie-details-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now create a file called `next.config.js` and paste all the content from [here](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/movie-details-app/next.config.js) to this file. We are doing this because the API will provide us with the image URLs. We will use the Next.js Image component to render the image, and this component needs a domain property in the `next.config.js` file to render an image from a URL.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Movie <span className="text-secondary">Details</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get info about any movie
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Movie Details App” and “Get Info About Any Movie”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and search button. For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Movie <span className="text-secondary">Details</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get info about any movie
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for any movie..."
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

Let’s create some states to store the user input and the movie information we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [movieName, setMovieName] = useState(null);
	const [movieInfo, setMovieInfo] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Movie <span className="text-secondary">Details</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get info about any movie
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for any movie..."
						onChange={e => setMovieName(e.target.value)}
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [IMDb API](https://rapidapi.com/apidojo/api/imdb8/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are going to use the `title/find` endpoint of the [IMDb API](https://rapidapi.com/apidojo/api/imdb8/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to get the details of the movie user want to see.

I am also going to use the code snippet of `(JavaScript) Axios` that [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-movie-details-app/images/code-snippet.png)

Create a file called `movie` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://imdb8.p.rapidapi.com/title/find',
			params: {q: req.query.movieName},
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
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

Now let’s create a function in the `pages/index.js` file to request the `http://localhost:3000/api/movie` for the movie details. You can just copy and replace the following code in `pages/index.js` file:

```js
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

export default function Home() {
	const [movieName, setMovieName] = useState(null);
	const [movieInfo, setMovieInfo] = useState(null);

	/**
	 *
	 *
	 * Fetch Movie Info from the IMDB
	 */
	const fetchMovieInfo = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/api/movie`, {
				params: {movieName}
			});
			const {data} = res;
			const {results} = data;
			setMovieInfo(results[0]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Movie <span className="text-secondary">Details</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get info about any movie
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for any movie..."
						onChange={e => setMovieName(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={fetchMovieInfo}
					>
						Search
					</button>
				</div>
				{movieInfo && (
					<div className="flex mt-12 w-3/6 h-4/5 border border-primary md:flex-col md:w-4/6 md:h-full md:mb-12">
						<Image
							src={movieInfo.image.url}
							width={220}
							height={300}
							alt={movieInfo.title}
						/>
						<div className="flex flex-col justify-center ml-8 md:mt-6">
							<h2 className="text-primary text-xl text-raleway font-bold tracking-wider md:text-base">
								<span className="text-secondary uppercase">
									Title:{' '}
								</span>{' '}
								{movieInfo.title}
							</h2>
							<h2 className="text-primary text-xl text-raleway font-bold mt-8 tracking-wider md:text-base md:mt-6">
								<span className="text-secondary uppercase">
									Year:{' '}
								</span>{' '}
								{movieInfo.year}
							</h2>
							<h2 className="text-primary text-xl text-raleway font-bold mt-8 tracking-wider md:text-base md:mt-6">
								<span className="text-secondary uppercase">
									Run Time:{' '}
								</span>{' '}
								{movieInfo.runningTimeInMinutes}
							</h2>
							<Link href={`https://www.imdb.com${movieInfo.id}`}>
								<a>
									<button className="outline-none border border-danger font-bold font-raleway mt-8 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:my-4">
										Visit on IMDB
									</button>
								</a>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
```

You can see that I have created a function, `fetchMovieInfo`, for getting movie details. I have also created a piece of UI that is conditionally rendering on the screen. If the state variable, `movieInfo`, changes from null to the movie details object, it renders on the screen with data from the `movieInfo` object.

## Wrap Up

That’s it. We have successfully built a [Movie Details App](https://rapidapi-example-movie-details-app.vercel.app/) using [IMDb API](https://rapidapi.com/apidojo/api/imdb8/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](​​https://github.com/RapidAPI/DevRel-Examples-External/blob/main/movie-details-app) of this web app.

In the end, it will look something like this:

![Movie Details App with Next.js and IMDb API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a04292c776f657636cc5ec14a42081b899d0a41/guides/posts/build-movie-details-app/images/cover.png)
