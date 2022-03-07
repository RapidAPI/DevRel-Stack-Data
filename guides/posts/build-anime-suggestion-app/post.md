---
title: How to build an Anime Suggestion App Using Anime Recommender API?
description: "We often want to watch animes similar to what we have already watched. It can become a hassle looking up these animes on the internet. Fortunately, we can build an app for it. Let's take a look at how you can build such app from scratch using an API from RapidAPI Hub."
publishedDate: 2022-03-06T19:27:34.794Z
lastModifiedDate: 2022-03-06T19:27:34.794Z
authors:
    - saad
categories:
    - apps
tags:
    - anime
    - anime-suggestion-app
    - api
coverImage: ''
---

<Lead>

We often want to watch animes similar to what we have already watched. It can become a hassle looking up these animes on the internet. Instead, we can use an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to build an anime recommendation application.

</Lead>

Today, I will build an anime suggestion app that will take an anime name from the user and suggest similar animes. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the anime information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “anime recommendation” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the recommendation APIs. For this piece, I will use [Anime Recommender API](https://RapidAPI.com/uruguay-nomas-uruguay-nomas-default/api/anime-recommender?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Anime Recommender API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/c576135234f129aebb4ac8a830ad3143fde2fccd/guides/posts/build-anime-suggestion-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss anime-suggestion-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `anime-suggestion-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/anime-suggestion-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now create a file called `next.config.js` and paste all the content from [here](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/anime-suggestion-app/next.config.js) to this file. We are doing this because the API will provide the image URLs. We will use the Next.js Image component to render the image, and this component needs a domain property in the `next.config.js` file to render an image from a URL.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Anime <span className="text-secondary">Suggestion</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get anime suggestion based on your favorite anime
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Anime Suggestion App” and “Get anime suggestion based on your favorite anime”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field where use can write anime name and recommendation button. For this, copy the following code and paste it in `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Anime <span className="text-secondary">Suggestion</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get anime suggestion based on your favorite anime
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						autoFocus={true}
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter anime name..."
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Get Recommendation
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS]((https://tailwindcss.com/).

### → STEP #3

Let’s create some states to store the anime name and the anime information we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
	const [anime, setAnime] = useState('Death Note');
	const [response, setResponse] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Anime <span className="text-secondary">Suggestion</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get anime suggestion based on your favorite anime
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						value={anime}
						autoFocus={true}
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter anime name..."
						onChange={e => setAnime(e.target.value)}
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Get Recommendation
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Anime Recommender API](https://RapidAPI.com/uruguay-nomas-uruguay-nomas-default/api/anime-recommender?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/c576135234f129aebb4ac8a830ad3143fde2fccd/guides/posts/build-anime-suggestion-app/images/code-snippet.png)

Now create a file with the name `suggestion.js` inside the `pages/api` directory. It is going to make a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/suggestion
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://anime-recommender.p.rapidapi.com/',
			params: {anime_title: req.query.anime, number_of_anime: '5'},
			headers: {
				'x-rapidapi-host': 'anime-recommender.p.rapidapi.com',
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

This code makes an API call to the [Anime Recommender API](https://RapidAPI.com/uruguay-nomas-uruguay-nomas-default/api/anime-recommender?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `suggestion` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
	const [anime, setAnime] = useState('Death Note');
	const [response, setResponse] = useState(null);
	const [btnText, setBtnText] = useState('Get Suggestions');

	/**
	 *
	 *
	 * Fetch Anime Recommendations
	 */
	const fetchAnimeSuggestions = async e => {
		e.preventDefault();
		try {
			setBtnText('Getting Suggestions...');
			const res = await axios.get(`/api/suggestion`, {
				params: {
					anime
				}
			});

			if (res.data.data !== 'Anime Not Found') {
				setResponse(res.data.data);
			}
		} catch (err) {
			console.log(err);
		}
		setBtnText('Get Suggestions');
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Anime <span className="text-secondary">Suggestion</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get anime suggestion based on your favorite anime
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						value={anime}
						autoFocus={true}
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter anime name..."
						onChange={e => setAnime(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={fetchAnimeSuggestions}
					>
						{btnText}
					</button>
				</form>
				{response &&
					response.map(suggestion => {
						const html = /<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi;
						const doubleSpace = /\s{2,}/g;

						const description = suggestion.description
							.replace(html, '')
							.replace(doubleSpace, ' ')
							.trim();

						return (
							<div
								className="flex flex-col item-center my-12 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12"
								key={suggestion.id}
							>
								<div className="w-full mt-4 p-8 border border-secondary h-full text-lightGrey font-raleway">
									<Image
										src={suggestion.bannerImage}
										width={800}
										height={200}
									/>
									<h2 className="text-xl font-bold my-4">
										{suggestion.title.english}
									</h2>
									<p className="text-sm leading-8">
										{description}
									</p>
									{suggestion.trailer && (
										<div className="mt-4">
											<h3 className="text-lg my-4 font-bold">
												Watch Trailer
											</h3>
											<iframe
												className="w-full h-96"
												src={`https://www.youtube.com/embed/${suggestion.trailer.id}`}
												title="YouTube video player"
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											/>
										</div>
									)}
								</div>
							</div>
						);
					})}
			</div>
			<div className="flex flex-col justify-end h-36 md:h-24">
				<p className="block mb-10 text-center text-secondary text-xs">
					Made by RapidAPI DevRel Team —{' '}
					<a
						className="hover:text-primary"
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

You can see that I have created a function, `fetchAnimeSuggestions`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `response` state variable value.

## Wrap Up

That’s it. We have successfully built a [Anime Suggestion App](https://rapidapi-example-anime-suggestion-app.vercel.app/) using [Anime Recommender API](https://RapidAPI.com/uruguay-nomas-uruguay-nomas-default/api/anime-recommender?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/anime-suggestion-app) of this web app.

In the end, it will look something like this:

![Anime Suggestion App built with Next.js and Anime Recommender API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/c576135234f129aebb4ac8a830ad3143fde2fccd/guides/posts/build-anime-suggestion-app/images/cover.png)
