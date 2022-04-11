---
title: How to Build a Book Search App in Next.js using an API?
description: In this guide, we will create a book search application with React and Next.js. The application will fetch the author, description, cover image, links, and more of a given book using a books API from RapidAPI Hub.
publishedDate: 2022-04-08T15:57:17.709Z
lastModifiedDate: 2022-04-08T15:57:17.709Z
authors:
    - ahmad-bilal
categories:
    - apps
tags:
    - rapidapi
    - books-search
    - app
coverImage: ''
---

<Lead>

APIs are a crucial part of web development, and we heavily rely on them to get the required resource from the Internet. The best way to learn development with APIs is by choosing an API and consuming it in your application. This guide will demonstrate how to build a book search application using an API.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore them on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that revolves around books. It will allow users to search for books and get targeted results. We will rely on an API for getting the books-related data. Let's get started.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "books" in the search field.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/hub"
>
	Learn more about using RapidAPI Hub in this fun, interactive guide.
</Callout>

You will see that a bunch of such APIs are available. For our app, I am going to use the `[HAPI Books API](https://RapidAPI.com/roftcomp-laGmBwlWLm/api/hapi-books/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel)`.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to TLDRThis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-books-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The App

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss books-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `books-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a special font and colors for this app. For replicating this app's styles, you will need to use my Tailwind config. So open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/books-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for this app. If you want, you can change it to use styles of your preference.

Initially, our UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-books-app/images/preview.png)

It's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's get started with the layout and headings.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">Books</span> Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for any book using the Books API
			</h2>
		</div>
	);
}
```

Add the following to `pages/_app.js`. We are importing our font here, which we specified in our Tailwind [config file](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/books-app/tailwind.config.js).

```jsx
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI - Books Search App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
```

### → STEP #2

As you can see in the UI preview, we require an input field with a search button. Let's add a form that will include them. The reason you want a form is because it will submit the search request with the button as well as the `enter` key.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">Books</span> Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for any book using the Books API
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					// allow enter key to submit
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the book's title"
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

I have styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input. We can do it using React `useState` hook. We will use two states for our app; one for the input keyword of the wanted book and the other for the API response. Let's add them.

```jsx
import {useState} from 'react';

export default function Home() {
	// Initializing with a default value
	const [keyword, setKeyword] = useState('The alchemist');
	const [searchResults, setSearchResults] = useState(null);
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">Books</span> Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for any book using the Books API
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					// allow enter key to submit
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the book's title"
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
						// Setting a default value
						defaultValue={keyword}
						onChange={e => {
							// Store input in state
							setKeyword(e.target.value);
							// Remove previous results
							setSearchResults(null);
						}}
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

The `onChange` handler will store the user input in our `keyword` state. We are also initializing it with a default value of `The Alchemist`.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [HAPI Books API](https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides a bunch of usable endpoints for book-related data, and we will use the `Search Books by Name` endpoint for our application. You can see these endpoints on the left pane in the image below.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-books-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` ones, as you can see above.

In the `pages/api` directory, create a file named `search.js`, and use the code snippet as follows:

```jsx
// pages/api/search.js
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: `https://hapi-books.p.rapidapi.com/search/${req.query.title}`,
		headers: {
			'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
			'X-RapidAPI-Key': NEXT_PUBLIC_RAPIDAPI_KEY
		}
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error.response);
	}
}
```

We will send a `GET` request to the API with our input keyword as the parameter. We have specified the text parameter with `req.query.title`. `req.query` is an object that holds the input parameters coming from our client-side.

Now we need to create a caller function `getResults()` in the `pages/index.js` file to send a `GET` request to our API at `/api/search`. The function looks like this:

```jsx
const getResults = async () => {
	try {
		// Replace space with '+'
		let title = keyword.replace(/ /g, '+');
		const {data} = await axios.get('api/search/', {
			params: {title}
		});
		// Add the data to the results state
		setSearchResults(data);
	} catch (error) {
		console.error(error);
	}
};
```

The API expects the input keyword to have `+` instead of spaces, so we are replacing them using `.replace` method.

Let's add this function in our index file and set the search button to trigger it.

```jsx
// pages/index.js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState('The alchemist');
	const [searchResults, setSearchResults] = useState(null);
	const [loading, setLoading] = useState(false);

	const getResults = async () => {
		try {
			// Replace space with '+'
			let title = keyword.replace(/ /g, '+');
			setLoading(true);
			const {data} = await axios.get('api/search/', {
				params: {title}
			});
			// Add the data to the results state
			setSearchResults(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">Books</span> Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for any book using the Books API
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getResults();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the book's title"
					defaultValue={keyword}
					onChange={e => {
						setKeyword(e.target.value);
						setSearchResults(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

### → FINAL STEP

Now, we need to display the response. The API returns an array of books. We will use the `map` method to render each book. We will be showing the title, author, cover image, link, and release date like this:

```jsx
{
	searchResults && (
		<div className="mt-10">
			<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
				{searchResults.map(book => {
					return (
						<div key={book.book_id} className="pt-6">
							<div className="flow-root bg-light rounded-lg px-4 pb-8">
								<div className="-mt-6">
									<div className="flex items-center justify-center">
										<img
											src={book.cover}
											className="p-2 w-64 rounded-lg"
											alt={book.name}
										/>
									</div>
									<div className="text-center justify-center items-center">
										<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
											{book.name}
										</h3>
										<p className="mt-2 text-base leading-relaxed text-secondary">
											{book.authors[0]} ({book.year})
										</p>
										<span className="font-bold text-secondary">
											Rating: {book.rating}
										</span>
										<a
											href={book.url}
											className="mt-4 block text-active underline"
										>
											Read More
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
```

Finally, we added a loading state to show a loading text to the user. Our application is good to go. Here is what it looks like in code:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState('The alchemist');
	const [searchResults, setSearchResults] = useState(null);
	const [loading, setLoading] = useState(false);

	const getResults = async () => {
		try {
			let title = keyword.replace(/ /g, '+');
			setLoading(true);
			const {data} = await axios.get('api/search/', {
				params: {title}
			});
			setSearchResults(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				<span className="text-active">Books</span> Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Search for any book using the Books API
			</h2>
			<form
				className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getResults();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the book's title"
					defaultValue={keyword}
					onChange={e => {
						setKeyword(e.target.value);
						setSearchResults(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						{
							// If loading is true, show a loading text
							loading ? (
								<span className="animate-pulse">Loading..</span>
							) : (
								<>Search</>
							)
						}
					</button>
				</div>
			</form>

			{searchResults && (
				<div className="mt-10">
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
						{searchResults.map(book => {
							return (
								<div key={book.book_id} className="pt-6">
									<div className="flow-root bg-light rounded-lg px-4 pb-8">
										<div className="-mt-6">
											<div className="flex items-center justify-center">
												<img
													src={
														// Removes compression to get higher quality
														book.cover.replace(
															/._SX50_|._SY75_/gi,
															''
														)
													}
													className="p-2 w-64 rounded-lg"
													alt={book.name}
												/>
											</div>
											<div className="text-center justify-center items-center">
												<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
													{book.name}
												</h3>
												<p className="mt-2 text-base leading-relaxed text-secondary">
													{book.authors[0]} (
													{book.year})
												</p>
												<span className="font-bold text-secondary">
													Rating: {book.rating}
												</span>
												<a
													href={book.url}
													className="mt-4 block text-active underline"
												>
													Read More
												</a>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
```

Here is a preview of our app:

![Books Search built using HAPI Books API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-books-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Books App](https://rapidapi-example-books-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/books-app).
