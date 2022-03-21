---
title: How to build a Weather News App using Weather News API?
description: We often want to have a single place to find every kind of news, for instance, a site where all the information related to games is listed or a site where weather-related news is present. In this piece, let's build a small app that will list all the weather API at one place.
publishedDate: 2022-03-21T02:53:28.085Z
lastModifiedDate: 2022-03-21T02:53:28.085Z
authors:
    - saad
categories:
    - apps
tags:
    - weather-news-app
    - api
coverImage: ''
---

<Lead>

We often want to have a single place to find every kind of news, for instance, a site where all the information related to games is listed or a site where weather-related news is present. We can use an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and develop a small application for this.

</Lead>

Today, I am building a weather news application to display top news related to the weather. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to get the weather news. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “weather news apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the weather APIs. For this piece, I will use For this piece, I will use [Weather News API](https://RapidAPI.com/jaofuniv2b-9YZLb8LpWBd/api/weather-news?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Weather News API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/45537a430795bfcdd1e780030317f72242dd6cce/guides/posts/build-weather-news-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss weather-news-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `weather-news-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/weather-news-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				Weather <span className="text-active">News</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-16 md:text-base md:px-4 md:text-center">
				Get All Your weather-related News at one place
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Weather News API](https://RapidAPI.com/jaofuniv2b-9YZLb8LpWBd/api/weather-news?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/45537a430795bfcdd1e780030317f72242dd6cce/guides/posts/build-weather-news-app/images/code-snippet.png)

Now create a file with the name `news.js` inside the `pages/api` directory. It is going to make a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/news
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://weather-news.p.rapidapi.com/news/lang/en',
			headers: {
				'x-rapidapi-host': 'weather-news.p.rapidapi.com',
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

This code makes an API call to the [Weather News API](https://RapidAPI.com/jaofuniv2b-9YZLb8LpWBd/api/weather-news?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `news` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import axios from 'axios';
import Link from 'next/link';

export default function Home({data}) {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				Weather <span className="text-active">News</span> App
			</h2>
			<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-16 md:text-base md:px-4 md:text-center">
				Get All Your weather-related News at one place
			</h3>
			{data.articles.map(news => {
				return (
					<div
						className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-active text-secondary cursor-pointer transition duration-300 hover:border-secondary hover:text-active md:w-80 md:h-40"
						key={data.articles.indexOf(news)}
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
	const res = await axios.get('http://localhost:3000/api/news');
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

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use getStaticProps instead of getServerSideProps, and the application will then fetch the data at build time.

Afterward, I map the news I am getting from the `getServerSideProps` on the screen.

## Wrap Up

That’s it. We have successfully built a [Weather News App](https://rapidapi-example-weather-news-app.vercel.app/) using [Weather News API](https://RapidAPI.com/jaofuniv2b-9YZLb8LpWBd/api/weather-news?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/weather-news-app).

In the end, it will look something like this:

![Weather News App built with Next.js and Weather News API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/45537a430795bfcdd1e780030317f72242dd6cce/guides/posts/build-weather-news-app/images/cover.png)
