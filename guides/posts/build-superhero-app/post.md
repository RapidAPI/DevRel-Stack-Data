---
title: How to build a Superhero App using Next.js and SuperHero Search API?
description: Are you a Marvel enthusiast or a DC lover? Are you also a developer who likes superheroes? Let’s build an app together using an API where people can search for their favorite heroes.
publishedDate: 2021-11-15T13:36:22.391Z
lastModifiedDate: 2021-11-15T13:36:22.391Z
authors:
    - saad
category: Apps
tags:
    - rapidapi
    - superhero-app
coverImage: ''
---

<Lead>

Are you a Marvel enthusiast or a DC lover? Are you also a developer who likes superheroes? Let’s build an app together using an API where people can search for their favorite heroes. Also, instead of combing through the Internet, we can use [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to search for the API.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building a superhero application where users can search for their favorite superhero’s real name and other abilities, etc.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the superhero information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “superhero” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available superhero APIs. For this piece, I am using [SuperHero Search API](https://rapidapi.com/jakash1997/api/superhero-search/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Superhero Search API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1449e060cd1efbe498eb5db1f31b78efe9afdf14/guides/posts/build-superhero-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss superhero-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `superhero-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/superhero-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now create a file called `next.config.js` and paste all the content from [here](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/superhero-app/next.config.js) to this file. We are doing this because the API will provide us with the image URLs. We will use the Next.js Image component to render the image, and this component needs a domain property in the `next.config.js` file to render an image from a URL.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Superhero</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search for your favorite superhero
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Superhero App” and “Search for your favorite superhero”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a search button. The user will be able to type in the input field and use the search button to get the superhero details.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Superhero</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search for your favorite superhero
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the name of superhero..."
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

Let’s create some states to store the user input and the superhero information we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [name, setName] = useState('');
	const [superheroInfo, setSuperheroInfo] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Superhero</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search for your favorite superhero
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the name of superhero..."
						onChange={e => setName(e.target.value)}
					/>
					<button
						className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
						onClick={fetchSuperheroInfo}
					>
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [SuperHero Search API](https://rapidapi.com/jakash1997/api/superhero-search/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are using the `Search` endpoint of the [SuperHero Search API](https://rapidapi.com/jakash1997/api/superhero-search/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to search for superheroes and fetch their details.

I am also going to use the code snippet of `(JavaScript) Axios` that [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1449e060cd1efbe498eb5db1f31b78efe9afdf14/guides/posts/build-superhero-app/images/code-snippet.png)

Create a file called `superhero.js` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://superhero-search.p.rapidapi.com/api/',
			params: {hero: req.query.name},
			headers: {
				'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
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

Now let’s create a function in the `pages/index.js` file to request the `/api/superhero` for the word meaning. You can just copy and replace the following code in `pages/index.js` file:

```js
import {useState} from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
	const [name, setName] = useState('');
	const [superheroInfo, setSuperheroInfo] = useState(null);

	/**
	 *
	 *
	 * Fetch superhero info
	 */
	const fetchSuperheroInfo = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(`/api/superhero`, {
				params: {name}
			});
			const {data} = res;
			setSuperheroInfo(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Superhero</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Search for your favorite superhero
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the name of superhero..."
						onChange={e => setName(e.target.value)}
					/>
					<button
						className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
						onClick={fetchSuperheroInfo}
					>
						Search
					</button>
				</form>
				{superheroInfo && (
					<div className="flex mt-12 w-3/6 h-4/5 border border-primary md:flex-col md:w-4/6 md:h-full md:mb-12">
						<Image
							src={superheroInfo.images.lg}
							width={220}
							height={300}
							alt="{movieInfo.title}"
						/>
						<div className="flex flex-col justify-center ml-8 md:mt-6 w-3/6">
							<div className="flex justify-between w-full md:flex-col">
								<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
									Real Name
								</p>
								<p className="text-secondary">
									{superheroInfo.biography.fullName}{' '}
								</p>
							</div>
							<div className="flex justify-between mt-4 w-full md:flex-col">
								<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
									Superhero Name
								</p>
								<p className="text-secondary">
									{superheroInfo.name}{' '}
								</p>
							</div>
							<div className="flex justify-between mt-4 w-full md:flex-col">
								<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
									Intelligence
								</p>
								<p className="text-secondary">
									{`${superheroInfo.powerstats.intelligence}/100`}
								</p>
							</div>
							<div className="flex justify-between mt-4 w-full md:flex-col">
								<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
									Strength
								</p>
								<p className="text-secondary">{`${superheroInfo.powerstats.strength}/100`}</p>
							</div>
							<div className="flex justify-between mt-4 w-full md:flex-col">
								<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
									Speed
								</p>
								<p className="text-secondary">{`${superheroInfo.powerstats.speed}/100`}</p>
							</div>
							<div className="flex justify-between mt-4 w-full md:flex-col">
								<p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
									Durability
								</p>
								<p className="text-secondary">{`${superheroInfo.powerstats.durability}/100`}</p>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="absolute bottom-0 flex justify-center items-end h-36 md:h-44">
				<p className="text-primary pb-12 md:w-60 md:text-center">
					Made by RapidAPI DevRel Team –{' '}
					<a href="https://github.com/RapidAPI/DevRel-Examples-External">
						<span className="transition duration-300 hover:text-secondary">
							See Examples Like this
						</span>
					</a>
				</p>
			</div>
		</div>
	);
}
```

You can see that I have created a function, `fetchSuperheroInfo`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `superheroInfo` state variable’ value.

## Wrap Up

That’s it. We have successfully built a [Superhero App](https://rapidapi-example-superhero-app.vercel.app/) using [SuperHero Search API](https://rapidapi.com/jakash1997/api/superhero-search/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app[here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/superhero-app).

In the end, it will look something like this:

![Superhero App built with Next.js and Superhero Search API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1449e060cd1efbe498eb5db1f31b78efe9afdf14/guides/posts/build-superhero-app/images/cover.png)
