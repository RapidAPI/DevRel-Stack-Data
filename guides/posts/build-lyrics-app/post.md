---
title: How to Build a Lyrics App in Next.js using an API?
description: There are a lot of APIs on RapidAPI Hub that provide lyrics to the tracks you are looking for. You can use them for a fun personal project or a music application. This guide will demonstrate how to build a Next.js application using one of these APIs.
publishedDate: 2022-02-11T15:57:17.709Z
lastModifiedDate: 2022-02-11T15:57:17.709Z
authors:
    - ahmad-bilal
categories:
    - apps
tags:
    - rapidapi
    - lyrics
    - app
coverImage: ''
---

<Lead>

APIs are a crucial part of web development, and we heavily rely on them to get the required resource from the Internet. The best way to learn development with APIs is by choosing an API and consuming it in your application.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore them on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to get the lyrics of any track they are looking for. We have APIs that provide all sorts of music-related information, so let's build the app using one of these APIs.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Lyrics" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about using RapidAPI Hub in this fun, interactive guide.
</Callout>

You will see that we have a lot of APIs to choose from. For our app, I am going to use the [Genius - Song Lyrics API](https://rapidapi.com/Glavier/api/genius-song-lyrics1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can choose any API of your preference.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Genius - Song Lyrics API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-lyrics-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss lyrics-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `lyrics-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/lyrics-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-lyrics-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Lyrics</span> App
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Get the complete lyrics of any given track.
			</h2>
		</div>
	);
}
```

I added the following to `pages/_app.js`.

```jsx
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI - Lyrics App</title>
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

As you can see in the UI preview, we require an input form to submit the track's title. The form will have an input field where the input title will go, followed by a search button. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Lyrics</span> App
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Get the complete lyrics of any given track.
			</h2>
			<form className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a track or artist name eg: Alan Walker"
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary sm:px-10"
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

This code will create the input field and search button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input in the input field. We can do it using React `useState` hook. We will use a bunch of states for our app; let's add them. Check the comments to see the purpose of each state.

```jsx
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState('Alan Walker'); // Stores the input title by the user, with the default value being "Alan Walker"
	const [searchResults, setSearchResults] = useState(null); // Stores the search results returned by the API
	const [lyrics, setLyrics] = useState(null); // Stores the lyrics returned by the API

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Lyrics</span> App
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Get the complete lyrics of any given track.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a track or artist name eg: Alan Walker"
					onChange={e => {
						setTitle(e.target.value); // Store the input keyword
						setSearchResults(null); // Remove previous response
						setLyrics(null); // Remove previous response
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary sm:px-10"
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

The `onChange` handler on the input field will store the user input in our `title` state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Genius - Song Lyrics API](https://rapidapi.com/Glavier/api/genius-song-lyrics1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides many valuable endpoints that you can use in your app, like search, albums, artists, songs, etc. You can see these endpoints on the left pane in the image below. We will use the `Search` endpoint for getting matching songs and the `Song Lyrics` endpoint for getting the lyrics of the selected song.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-lyrics-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` ones, as you can see above.

To summarize, we will make two API calls. One will get the songs that match the user's query, and the other will fetch the lyrics of the selected song. Let's set up these API calls now. In the `pages/api` directory, create two files, `search.js` and `lyrics.js`, and use the code snippets as follows:

```jsx

// In pages/api/search.js:
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://genius-song-lyrics1.p.rapidapi.com/search",
    params: { q: req.query.title, per_page: "10", page: "1" },
    headers: {
      "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
      console.error(error);
  }
}

// In pages/api/lyrics.js:
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${req.query.id}/lyrics`,
    headers: {
      "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
      console.error(error);
  }
}
```

We have specified the parameters `req.query.title` and `req.query.id`. `req.query` is an object that holds the input parameters coming from our client-side.

### → STEP #4

Now we need to create the following functions in the `pages/index.js` file to send a request to our APIs at `http://localhost:3000/api/search` and `http://localhost:3000/api/lyrics`.

1. `getResults()` for fetching songs matching the user input.
2. `getLyrics()` for fetching the lyrics of the song selected by the user.

Let's implement `getResults` first. The search button will trigger this function and return an array of matching songs in response. Let's make these changes to the index file.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState('Alan Walker');
	const [searchResults, setSearchResults] = useState(null);
	const [lyrics, setLyrics] = useState(null);

	const getResults = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {title}
			});
			const {data} = res;
			setSearchResults(data.response.hits);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Lyrics</span> App
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Get the complete lyrics of any given track.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getResults(); // Trigger the getResults function
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a track or artist name eg: Alan Walker"
					onChange={e => {
						setTitle(e.target.value);
						setSearchResults(null);
						setLyrics(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
			{searchResults && (
				<div className="mt-10">
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{searchResults.map(song => (
							<div key={song.result.id} className="pt-6">
								<div className="flow-root bg-light rounded-lg px-4 pb-8">
									<div className="-mt-6">
										<div className="flex items-center justify-center">
											<span className="p-2">
												<img
													src={
														song.result
															.song_art_image_thumbnail_url
													}
													className="w-full h-full rounded-lg"
													alt={
														song.result
															.song_art_image_thumbnail_url
													}
												/>
											</span>
										</div>
										<div className="text-center justify-center items-center">
											<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
												{song.result.title}
											</h3>
											<span className="mt-2 text-sm text-secondary block">
												{song.result.artist_names}
											</span>
											<button
												className="mt-5 text-md text-active"
												onClick={() => {
													getLyrics(song.result.id);
												}}
											>
												Get Lyrics &rarr;
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
```

I am using a grid to map the songs and their information received in the response, including the title, image, and artist name. Every track will also have a **Get Lyrics** button which will trigger our second API request to get lyrics of that title. At this stage, our app looks like this:

![Search Results](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-lyrics-app/images/search.png)

### → FINAL STEP

In the final step, we will display the lyrics of the selected title. First, we will add the following function to the `pages/index.js` file.

```js
const getLyrics = async id => {
	try {
		setSearchResults(null); // Remove the results
		const res = await axios.get('api/lyrics/', {
			params: {id}
		});
		const {data} = res;
		setLyrics(data.response.lyrics);
	} catch (error) {
		console.error(error);
	}
};
```

It needs the song ID as a parameter, which we received in our first API request. We will bind this function to the **Get Lyrics** button. The button will send the ID of the particular song to the function. Once we have the lyrics, we will replace the `div` showing the search results with a `div` showing lyrics of the selected song. Have a look at the final code of our app.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState('Alan Walker');
	const [searchResults, setSearchResults] = useState(null);
	const [lyrics, setLyrics] = useState(null);
	const [loading, setLoading] = useState(false);

	const getResults = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {title}
			});
			const {data} = res;
			setSearchResults(data.response.hits);
		} catch (error) {
			console.error(error);
		}
	};
	const getLyrics = async id => {
		try {
			setSearchResults(null);
			const res = await axios.get('api/lyrics/', {
				params: {id}
			});
			const {data} = res;
			setLyrics(data.response.lyrics);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Lyrics</span> App
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Get the complete lyrics of any given track.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getResults();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a track or artist name eg: Alan Walker"
					onChange={e => {
						setTitle(e.target.value);
						setSearchResults(null);
						setLyrics(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
			{searchResults && (
				<div className="mt-10">
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{searchResults.map(song => (
							<div key={song.result.id} className="pt-6">
								<div className="flow-root bg-light rounded-lg px-4 pb-8">
									<div className="-mt-6">
										<div className="flex items-center justify-center">
											<span className="p-2">
												<img
													src={
														song.result
															.song_art_image_thumbnail_url
													}
													className="w-full h-full rounded-lg"
													alt={
														song.result
															.song_art_image_thumbnail_url
													}
												/>
											</span>
										</div>
										<div className="text-center justify-center items-center">
											<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
												{song.result.title}
											</h3>
											<span className="mt-2 text-sm text-secondary block">
												{song.result.artist_names}
											</span>
											<button
												className="mt-5 text-md text-active"
												onClick={() => {
													getLyrics(song.result.id);
												}}
											>
												Get Lyrics &rarr;
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{lyrics && (
				<div className="mt-10 max-w-2xl">
					<h2 className="text-2xl font-bold text-center text-active">
						Lyrics for {lyrics.trackingData.Title}
					</h2>

					<p className="mt-6 leading-loose text-primary text-xl">
						{lyrics.lyrics.body.plain}
					</p>
				</div>
			)}
		</div>
	);
}
```

Now when the user clicks the **Get Lyrics** button, our app will show the lyrics of the song like this:

![Lyrics app built using Genius - Song Lyrics API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-lyrics-app/images/final-app.png)

## Wrap Up

All done. You can also check the deployed [Lyrics App](https://rapidapi-example-lyrics-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/lyrics-app).
