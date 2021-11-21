---
title: How to build a Crypto News Next.js app using a Cryptocurrency API from RapidAPI Hub?
description: Let's see how we can build a Crypto News app using a Cryptocurrency API.
publishedDate: 2021-11-18T15:57:17.709Z
lastModifiedDate: 2021-11-18T15:57:17.709Z
authors:
    - ahmadBilal
category: apps
tags:
    - rapidapi
    - cryptocurrency
    - news
    - app
coverImage: ''
draft: false
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore thousands of these on RapidAPI Hub and select one for your next project.

Today, we will be building a web application that will display the latest news related to Cryptocurrency. It will be a single point of access to news from various sources. Let's build it.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

We need an API that will serve us Cryptocurrency related news from multiple sources. Let’s find an API that meets our requirements. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Cryptocurrency" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see that we have a bunch of options for Cryptocurrency APIs. For our app, I will use [Investing - Cryptocurrency Markets API](https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to the API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-crypto-news-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. The free plan allows up to 500 requests per month. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss crypto-news-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `crypto-news-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api` where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/crypto-news-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```js
export default function Home() {
	return (
		<div className="flex flex-col bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Crypto News <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Next.js app which provides information latest news about Crypto
				using Cryptocurrency API.
			</h2>
		</div>
	);
}
```

### → STEP #2

We need a button that will trigger the API call and fetch the latest news from the API. On a side note, if you want to render the news whenever the page is loaded, you can use the `useRef` React hook. But since we are using the free plan, we will go for the button. Let's code it.

```js
export default function Home() {
  return (
      <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
        <h1 className="text-6xl text-primary font-bold mt-20">
          Crypto News <span className="text-active">App</span>
        </h1>
        <h2 className="text-active text-2xl mt-6">
          Next.js app which provides information latest news about Crypto using
          Cryptocurrency API
        </h2>

        <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            >
              Get Latest News
            </button>
          </div>
      </div>
  );
}
```

This code is going to create the button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>). At this point, this is what our app looks like:

![Inital design of the app](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-crypto-news-app/images/initial.png)

### → STEP #3

Let’s create two states, `response` to hold the response from the API, and `page` to implement pagination in our news app.

```js
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Crypto News <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app which provides information latest news about Crypto using Cryptocurrency API
      </h2>
      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
          >
            Get Latest News
          </button>
        </div>
      </div>
  );
}
```

We want the page state to be `1` when initialized.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Cryptocurrency API](https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

The [Cryptocurrency API](https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides a bunch of very useful endpoints like markets, overviews, conversions, etc. You can see these endpoints on the left pane. For our news app, we are going to use the `get-news` endpoint.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-crypto-news-app/images/code-snippet.png)

We will send a GET request to get the latest news related to Cryptocurrency. The optional parameter `page` will help us implement pagination in our app. For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` one, as you can see above.

Next, I am going to create a file named `news.js` in the `pages/api` directory and use the code snippet as follows:

```js
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
		params: {
			pair_ID: '1057391', // Setting Bitcoin as the general focus of the news.
			page: req.query.page, // Query parameter sent from the client side.
			time_utc_offset: '28800',
			lang_ID: '1'
		},
		headers: {
			'x-rapidapi-host':
				'investing-cryptocurrency-markets.p.rapidapi.com',
			'x-rapidapi-key': NEXT_PUBLIC_RAPIDAPI_KEY
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
```

We have specified the parameters. Our API call is ready. Now we need to create a function in the `pages/index.js` file to send the request from the client-side to our API at `http://localhost:3000/api/news`. You can just copy and replace the following code in `pages/index.js` file:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [page, setPage] = useState(1);
	const [response, setResponse] = useState(null);

	// Getter function for getting news from the API.
	const getNews = async () => {
		try {
			const res = await axios.get('api/news/', {
				params: {page}
			});
			const {data} = res;
			setResponse(data.data[0].screen_data.news);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Crypto News <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Next.js app which provides information latest news about Crypto
				using Cryptocurrency API
			</h2>

			<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						onClick={() => getNews()}
					>
						Get Latest News
					</button>
				</div>
			</div>
		</div>
	);
}
```

See the `getNews` function I have created to get the response from the API. We are binding this function to the button we created, using the `onClick` event handler. It sends the `page` state holding our page number as the parameter. Once the response is received, it is destructured. `data.data[0].screen_data.news` representing the news array, is stored in the `response` state.

### → FINAL STEP

In the final step, we will display the results and implement pagination. We have the news array in response `state`, which holds all the information we need, such as title, source, related image, and URL. We are going to do the following things:

1. Use a map function to iterate through response, which holds an array of objects. I will be rendering the headline, provider name, related image, and URL for each news article. For their design, I used a grid.

2. Hide the **Get latest news** button once we have the response.

3. Show a **Load next page** button once we have the response. When clicked, it will increment the page state and make the API Call for that page.

Our final code looks like this:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [page, setPage] = useState(1);
	const [response, setResponse] = useState(null);

	const getNews = async () => {
		try {
			const res = await axios.get('api/news/', {
				params: {page}
			});
			const {data} = res;
			setResponse(data.data[0].screen_data.news);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Crypto News <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Next.js app which provides information latest news about Crypto
				using Cryptocurrency API
			</h2>

			<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
				<div className="mt-4 sm:mt-0 sm:ml-3">
					{!response && (
						<button
							className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
							onClick={() => getNews()}
						>
							Get Latest News
						</button>
					)}
				</div>
			</div>
			<div className="mt-10 grid grid-cols-2 gap-16 max-w-5xl">
				{response &&
					response.map(news => {
						return (
							<div className="mt-10 grid justify-items-center">
								<img
									src={news.related_image_big}
									width="300"
									length="300"
									className="rounded-lg"
								></img>
								<a
									className="text-primary text-center hover:text-active transition-colors duation-200"
									key={news.news_ID}
									href={
										news.news_link
											? news.news_link
											: news.third_party_url
									}
								>
									<h3 className="mt-10 text-2xl">
										{news.HEADLINE}
									</h3>
									<p className="mt-4 text-center text-lg opacity-60">
										{news.news_provider_name}
									</p>
								</a>
							</div>
						);
					})}
			</div>

			{response && (
				<div className="flex flex-col mt-10 justify-center">
					<button
						className="block text-active text-base font-bold"
						onClick={() => {
							setPage(page + 1);
							getNews();
						}}
					>
						Load next page
					</button>
				</div>
			)}
		</div>
	);
}
```

This is what our app looks like:

![Crypto News App built with Next.js and Cryptocurrency API from RapidAPI Hub](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-crypto-news-app/images/crypto-news-1.png)

![Crypto News App built with Next.js and Cryptocurrency API from RapidAPI Hub](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-crypto-news-app/images/crypto-news-2.png)

## Wrap Up

All done. Our [crypto news app](https://rapidapi-example-crypto-news-app.vercel.app/) is ready. Like this, you can utilize the remaining endpoints to create a full-fledged Cryptocurrency focused application. Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/crypto-news-app).
