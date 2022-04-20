---
title: How to build a Streaming Availability App using Next.js?
description: The content offered by streaming services varies from region to region. Sometimes it gets frustrating when the content you are looking for is not available at your streaming platform. Let's build an app that will show the availability of movies or TV shows across streaming services.
publishedDate: 2021-12-24T15:57:17.709Z
lastModifiedDate: 2021-12-24T15:57:17.709Z
authors:
    - 'ahmad-bilal'
categories:
    - apps
tags:
    - rapidapi
    - streaming-availability
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore thousands of these on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to check the availability of movies or TV shows across streaming services. We have APIs that provide information about all the major streaming platforms, So let's build the app using one of these APIs.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Streaming Availability" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see that we have a lot of APIs to choose from. For our app, I am going to use the [OTT Details API](https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can choose any API of your preference.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to OTT Details API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-streaming-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss streaming-availability-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `streaming-availability-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/streaming-availability-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-streaming-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-20">
				<span className="text-active">Streaming</span> Availability
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Get Streaming details of Movie and TV Shows from 150+ Streaming
				platforms
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
				<title>RapidAPI - Streaming Availability App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600&display=swap"
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

As you can see in the UI preview, we require an input form to submit the title of the requested show/movie. The form will have an input field where the input title will go, followed by a search button. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-20">
				<span className="text-active">Streaming</span> Availability
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Get Streaming details of Movie and TV Shows from 150+ Streaming
				platforms
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
					placeholder="Enter a movie/show title"
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
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

Now, we need to store the user input in the input field. We can do it using React `useState` hook. We will use a bunc of states for our app, let's add them. Check the comments to see the purpose of each state.

```jsx
import {useState} from 'react';
export default function Home() {
	const [title, setTitle] = useState(null); // Input title of the show/movie
	const [searchResults, setSearchResults] = useState(null); // Response 1: Results matching the input title
	const [titleDetails, setTitleDetails] = useState(null); // Response 2: ID of Title selected by the user from the results
	const [streamingInfo, setStreamingInfo] = useState(null); // Response 2: Streaming availability of the selected title

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-20">
				<span className="text-active">Streaming</span> Availability
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Get Streaming details of Movie and TV Shows from 150+ Streaming
				platforms
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
					placeholder="Enter a movie/show title"
					onChange={e => {
						setTitle(e.target.value);
						setSearchResults(null); // Remove previous results
						setTitleDetails(null);
					}}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
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

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [OTT Details API](https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides a lot of valuable endpoints which you can use in your app, like title search, title details, new arrivals, etc. You can see these endpoints on the left pane in the image below. We will use two endpoints; `Search` for looking up titles and `Title Details` for getting streaming details of a particular title.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-streaming-app/images/code-snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We are going to copy the `(JavaScript) Axios` ones, as you can see above.

Let's set up the API call now. In the `pages/api` directory, create two files, `search.js` and `details.js` and use the code snippets as follows:

```jsx

// In pages/api/search.js:
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/search",
    params: { title: req.query.title, page: "1" },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": NEXT_PUBLIC_RAPIDAPI_KEY,
    },
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

// In pages/api/details.js:
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/gettitleDetails",
    params: { imdbid: req.query.id },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": NEXT_PUBLIC_RAPIDAPI_KEY,
    },
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

We have specified the parameters `req.query.title` and `req.query.id`. `req.query` is an object that holds the input parameters coming from our client-side.

### → STEP #4

Now we need to create the following functions in the `pages/index.js` file to send a request to our APIs at `http://localhost:3000/api/search` and `http://localhost:3000/api/details`.

1. `getTitle()` for fetching titles matching the user input.
2. `getTitleDetails()` for fetching the streaming details of the title selected by the user.

Let's implement `getTitle` first. The search button will trigger this function, and return an array of titles in response. Let's make these changes to the index file.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState(null);
	const [searchResults, setSearchResults] = useState(null);
	const [titleDetails, setTitleDetails] = useState(null);
	const [streamingInfo, setStreamingInfo] = useState(null);

	const getTitle = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {title}
			});
			const {data} = res;
			setSearchResults(data.results); // Storing the response
		} catch (error) {}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-20">
				<span className="text-active">Streaming</span> Availability
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Get Streaming details of Movie and TV Shows from 150+ Streaming
				platforms
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getTitle();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a movie/show title"
					onChange={e => {
						setTitle(e.target.value);
						setSearchResults(null);
						setTitleDetails(null);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
			{searchResults && (
				<div className="mt-10">
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{searchResults
							.filter(item => item.imageurl && item.imageurl[0]) // Remove results with no images
							.map(item => (
								<div key={item.title} className="pt-6">
									<div className="flow-root bg-light rounded-lg px-4 pb-8">
										<div className="-mt-6">
											<div className="flex items-center justify-center">
												<span className="p-2">
													{item.imageurl &&
														item.imageurl[0] && (
															<img
																src={
																	item
																		.imageurl[0]
																}
																className="w-full h-full rounded-lg"
																alt={item.title}
															/>
														)}
												</span>
											</div>
											<div className="text-center justify-center items-center">
												<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
													{item.title}
												</h3>
												<span className="mt-2 text-sm text-secondary block">
													{item.released} -{' '}
													{item.genre[0]}
												</span>
												<p className="mt-4 text-sm leading-relaxed text-secondary block">
													{item.synopsis}
												</p>
												<button className="mt-5 text-md  text-active">
													Streaming Details &darr;
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

I am using a grid to map the titles and their information received in the response, including the title, image, year, synopsis, and genre of the show/movie title. Every title will also have a **Streaming Details** button which will trigger our second API request to get streaming information of that title. At this stage, our app looks like this:

![Search Results](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-streaming-app/images/search.png)

### → FINAL STEP

In the final step, we will display the streaming availability of the selected title. First, add the following function to the `pages/index.js` file.

```js
const getTitleDetails = async id => {
	try {
		setLoading(true);
		const res = await axios.get('api/details/', {
			params: {id}
		});
		const {data} = res;
		setLoading(false);
		setTitleDetails(data);
		setStreamingInfo(data.streamingAvailability.country.US);
	} catch (error) {
		setLoading(false);
	}
};
```

It needs IMDB ID as a parameter, which we received in our first API request. We will bind this function to the **Streaming Details** button, which will send the IMDB ID of the particular title to the function. Finally, using the condition `titleDetails.imdbid === item.imdbid` we will display the streaming details of the selected title. Take a look at the final code of our app.

```jsx
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [titleDetails, setTitleDetails] = useState(null);
  const [streamingInfo, setStreamingInfo] = useState(null);

  const getTitle = async () => {
    try {
      const res = await axios.get("api/search/", {
        params: { title },
      });
      const { data } = res;
      setSearchResults(data.results);
    } catch (error) {
    }
  };
  const getTitleDetails = async (id) => {
    try {
      const res = await axios.get("api/details/", {
        params: { id },
      });
      const { data } = res;
      setTitleDetails(data);
      setStreamingInfo(data.streamingAvailability.country.US);
    } catch (error) {
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
      <h1 className="text-6xl font-bold text-primary mt-20">
        <span className="text-active">Streaming</span> Availability
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
        Get Streaming details of Movie and TV Shows from 150+ Streaming
        platforms
      </h2>
      <form
        className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          getTitle();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter a movie/show title"
          onChange={(e) => {
            setTitle(e.target.value);
            setSearchResults(null);
            setTitleDetails(null);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {searchResults && (
        <div className="mt-10">
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {searchResults
              .filter((item) => item.imageurl && item.imageurl[0]) // Remove results with no images
              .map((item) => (
                <div key={item.title} className="pt-6">
                  <div className="flow-root bg-light rounded-lg px-4 pb-8">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center">
                        <span className="p-2">
                          {item.imageurl && item.imageurl[0] && (
                            <img
                              src={item.imageurl[0]}
                              className="w-full h-full rounded-lg"
                              alt={item.title}
                            />
                          )}
                        </span>
                      </div>
                      <div className="text-center justify-center items-center">
                        <h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
                          {item.title}
                        </h3>
                        <span className="mt-2 text-sm text-secondary block">
                          {item.released} - {item.genre[0]}
                        </span>
                        <p className="mt-4 text-sm leading-relaxed text-secondary block">
                          {item.synopsis}
                        </p>
                        {titleDetails?.imdbid === item.imdbid ? ( // Show streaming information if this is the selected title
                          <span className="mt-4 block max-w-2xl text-primary">
                            {streamingInfo ? (
                              <>
                                Available on:
                                <span className="flex mt-2 text-base gap-2 justify-center">
                                  {streamingInfo.map((item) => {
                                    return (
                                      <a
                                        href={item.url}
                                        className="text-active underline"
                                      >
                                        {item.platform}
                                      </a>
                                    );
                                  })}
                                </span>
                              </>
                            ) : (
                              <>Not available on any service.</>
                            )}
                          </span>
                        ) : ( // Otherwise, show the button
                          <button
                            className="mt-5 text-md  text-active"
                            onClick={() => {
                              getTitleDetails(item.imdbid);
                            }}
                          >
                            Streaming Details &darr;
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
  );
}
```

This is what our app looks like in its final form:

![Streaming Availability built using OTT Details API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-streaming-app/images/final-app.png)

## Wrap Up

All done. You can also check the deployed [Streaming Availability App](https://rapidapi-example-streaming-availability-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/streaming-availability-app).
