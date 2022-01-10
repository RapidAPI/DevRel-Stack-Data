---
title: How to build a Game News App using Gaming News API?
description: If you are a gamer like me then you would want to stay up-to-date with all the things happening in the game market. We can build a small application to gather all the news at one place.
authors:
    - saad
categories:
    - apps
tags:
    - game-news-app
    - app
publishedDate: 2022-01-10T10:25:51.945Z
lastModifiedDate: 2022-01-10T10:25:51.945Z
coverImage: ''
---

<Lead>

If you are a gamer like me then you would want to stay up-to-date with all the things happening in the game market. We can build a small application to gather all the news at one place.

</Lead>

Today, I am building a game news application where all the news related to the gaming industry will be displayed. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to search for games news. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “game news” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to validation APIs. For this piece, I am using [Gaming-News API](https://RapidAPI.com/alexaustin9816@gmail.com/api/gaming-news/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss game-news-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `game-news-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/game-news-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Game <span className="text-secondary">News</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take a look at what is happening in the game world
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Game News App” and “Take a look at what is happening in the game world”. You can change it to anything you prefer.

### → STEP #2

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Gaming-News API](https://RapidAPI.com/alexaustin9816@gmail.com/api/gaming-news/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` in your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #3

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-game-news-app/images/code-snippet.png)

Now create a file with `news.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/news
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://gaming-news.p.rapidapi.com/news',
			headers: {
				'x-rapidapi-host': 'gaming-news.p.rapidapi.com',
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

This code makes an API call to the [Gaming-News API](https://RapidAPI.com/alexaustin9816@gmail.com/api/gaming-news/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `news` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import axios from 'axios';
import Link from 'next/link';

export default function Home({value}) {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Game <span className="text-secondary">News</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take a look at what is happening in the game world
			</h3>
			{value.map(news => {
				return (
					<div
						className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-danger text-primary cursor-pointer transition duration-300 hover:border-primary hover:text-danger md:w-80 md:h-40"
						key={value.indexOf(news)}
					>
						<Link href={news.url}>
							<a>
								<h3>{news.title}</h3>
								<p className="text-sm pt-4">
									Source: {news.source}
								</p>
							</a>
						</Link>
					</div>
				);
			})}
			<div className="flex flex-col mt-10 justify-end h-36">
				<p className="block mb-10 text-center text-secondary text-xs">
					Made by RapidAPI DevRel Team -{' '}
					<a
						className="hover:text-lightGrey"
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
	const res = await axios.get('http://localhost:3000/api/news');
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

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use getStaticProps instead of getServerSideProps, and the application will then fetch the data at build time.

Afterward, I am mapping the news I am getting from the `getServerSideProps` on the screen.

## Wrap Up

That’s it. We have successfully built a [Game News App](https://rapidapi-example-game-news-app.vercel.app/) using [Gaming-News API](https://RapidAPI.com/alexaustin9816@gmail.com/api/gaming-news/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/game-news-app).

In the end, it will look something like this:

![Game News App built with Next.js and Game News API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-game-news-app/images/cover.png)
