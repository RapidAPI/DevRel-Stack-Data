---
title: How to Build a Text Summarizer App in Next.js using an API?
description: Sometimes, too long text can cause information overload, and we may want to summarize it into a concise, easy-to-digest piece. Using a Text Summarization API, let's build an application around this use case in Next.js.
publishedDate: 2022-03-10T15:57:17.709Z
lastModifiedDate: 2022-03-10T15:57:17.709Z
authors:
    - ahmad-bilal
categories:
    - apps
tags:
    - rapidapi
    - text-summarizer
    - app
coverImage: ''
---

<Lead>

APIs are a crucial part of web development, and we heavily rely on them to get the required resource from the Internet. The best way to learn development with APIs is by choosing an API and consuming it in your application.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore them on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to get a concise, easy-to-digest version of any given text without missing any important information. We will rely on an API for text summarization features, so let's build the app.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Text Summarization" in the search field.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about using RapidAPI Hub in this fun, interactive guide.
</Callout>

You will see that a bunch of such APIs are available. For our app, I am going to use the [TLDRThis API](https://RapidAPI.com/tldrthishq-tldrthishq-default/api/tldrthis/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to TLDRThis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-text-summarizer-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The App

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss text-summarizer-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `text-summarizer-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/text-summarizer-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-text-summarizer-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Text <span className="text-active">Summarizer</span>
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Summarise your text into a shorter length.
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
				<title>RapidAPI - Text Summarizer App</title>
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

As you can see in the UI preview, we require a couple of `textareas`, one for the input text and the other for the summarized text. So, the form should have two `textareas` and a submit button. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Text <span className="text-active">Summarizer</span>
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Summarise your text into a shorter length.
			</h2>
			<form
				className="flex md:flex-row flex-col justify-between mt-20 w-full"
				onSubmit={e => {
					e.preventDefault(); // Allow enter key to submit
					e.stopPropagation();
				}}
			>
				<div className="md:w-2/5 w-full">
					<label
						htmlFor="text"
						className=" text-sm font-medium text-primary"
					>
						Enter your text
					</label>
					<div className="mt-2">
						<textarea
							rows={14}
							name="text"
							id="text"
							className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
						/>
					</div>
				</div>

				<div className="flex justify-center items-center md:mt-0 mt-4">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active font-bold text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Summarize
					</button>
				</div>
				<div className="md:w-2/5 md:mt-0 mt-4 w-full">
					<label
						htmlFor="summary"
						className=" text-sm font-medium text-primary"
					>
						Summarized text
					</label>
					<div className="mt-2">
						<textarea
							readOnly
							type="text"
							rows={14}
							name="summary"
							id="summary"
							className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
```

This code will create the input areas and the button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input. We can do it using React `useState` hook. We will use a two states for our app; one for the input text and the other for the API response. Let's add them.

```jsx
import { useState } from 'react';

export default function Home() {
    const [text, setText] = useState('');
    const [response, setResponse] = useState(null);

    return (
        <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
            <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
                Text <span className="text-active">Summarizer</span>
            </h1>
            <h2 className="text-primary text-2xl font-light mt-6">Summarise your text into a shorter length.</h2>
            <form
                className="flex md:flex-row flex-col justify-between mt-20 w-full"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <div className="md:w-2/5 w-full">
                    <label htmlFor="text" className=" text-sm font-medium text-primary">
                        Enter your text
                    </label>
                    <div className="mt-2">
                        <textarea
                            rows={14}
                            name="text"
                            id="text"
                            className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
                            onChange={(e) => setText(e.target.value)} // Store input in text state
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center md:mt-0 mt-4">
                    <button
                        className="w-full rounded-lg px-5 py-3 bg-active font-bold text-background hover:bg-primary sm:px-10"
                        type="submit"
                    >
                        Summarize
                    </button>
                </div>
                <div className="md:w-2/5 md:mt-0 mt-4 w-full">
                    <label htmlFor="summary" className=" text-sm font-medium text-primary">
                        Summarized text
                    </label>
                    <div className="mt-2">
                        <textarea
                            readOnly
                            type="text"
                            rows={14}
                            name="summary"
                            id="summary"
                            className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
                            value={response} // Set value to the summarized text received in the API response
                        />
                    </div>
                </div>
            </form>
        </div>
    );
```

We are setting the values of the `textareas` to their respective states. Also, the `onChange` handler on the first one will store the user input in our `text` state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Hashtagy - Generate Hashtags API](https://RapidAPI.com/miguel.aka.kelter/api/hashtagy-generate-hashtags/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides a bunch of useful endpoints for summarizing text. We will use the `Human-like Text Summarization` endpoint to extract the important points in the text. You can see these endpoints on the left pane in the image below.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hashtag-generator-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` ones, as you can see above.

In the `pages/api` directory, create a file named `summarize.js`, and use the code snippet as follows:

```jsx
// In pages/api/summarize.js:
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'POST',
		url: 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/',
		headers: {
			'content-type': 'application/json',
			'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
			'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
		},
		data: {
			// Parameters
			text: req.body.text,
			min_length: 100,
			max_length: 300
		}
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
	}
}
```

We will send a `POST` request to the API with our input text as the parameter. We have specified the text parameter with `req.body.text`. `req.query` is an object that holds the input parameters coming from our client-side.

### → FINAL STEP

Now we need to create a caller function `getResponse()` in the `pages/index.js` file to send a `POST` request to our API at `http://localhost:3000/api/summarize`.

The generate button will trigger this function. Let's make these changes to the index file.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [text, setText] = useState('');
	const [response, setResponse] = useState(null);

	/**
	 * This function gets the response from the API.
	 **/
	const getResponse = async () => {
		try {
			setLoading(true);
			const res = await axios.post('api/summarize/', {
				text
			});
			setResponse(res.data.summary);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Text <span className="text-active">Summarizer</span>
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Summarise your text into a shorter length.
			</h2>
			<form
				className="flex md:flex-row flex-col justify-between mt-20 w-full"
				onSubmit={e => {
					getResponse(); // Trigger the API call on submit
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<div className="md:w-2/5 w-full">
					<label
						htmlFor="text"
						className=" text-sm font-medium text-primary"
					>
						Enter your text
					</label>
					<div className="mt-2">
						<textarea
							rows={14}
							name="text"
							id="text"
							className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
							defaultValue={text}
							onChange={e => setText(e.target.value)}
						/>
					</div>
				</div>

				<div className="flex justify-center items-center md:mt-0 mt-4">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active font-bold text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						Summarize
					</button>
				</div>
				<div className="md:w-2/5 md:mt-0 mt-4 w-full">
					<label
						htmlFor="summary"
						className="text-sm font-medium text-primary"
					>
						Summarized text
					</label>
					<div className="mt-2">
						<textarea
							readOnly
							type="text"
							rows={14}
							name="summary"
							id="summary"
							className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
							value={response}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
```

As soon as we receive the response, it will be displayed in the second textarea. For demonstration, we are intializing the `text` state with an example text so that users can quickly see how the application works. The `default` attribute on the first textarea allows us to display a default value. Lastly, we also added a loading state. Our app is ready, and this is what it looks like in code:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const exampleText = `According to RapidAPI’s recent State of APIs Developer survey, API usage continues to skyrocket, with more than 90.6% of developers
  indicating that they will use APIs more or the same in 2022 as they did in 2021. Additionally, a majority (75.5%) of developers indicated that participating in the API economy is a top priority for their organization now or in the near future.
   As companies begin to accelerate the transition to digital channels and invest in software development to enable that transition, APIs have become increasingly important in enabling developers to build innovative software more rapidly.
  The increasing demand for APIs has led to the widespread usage of RapidAPI Hub, the world’s largest API Hub, where over 3 million developers discover and connect to APIs.
  RapidAPI’s largest enterprise customers leverage the RapidAPI Enterprise Hub – a private, customizable version of the public hub – to create a centralized
    repository of APIs and provide a governance layer for API activity in the organization. RapidAPI Enterprise Hub provides organizations with a single place for all APIs, including any API type, any API category, and across any API infrastructure.`;

	const [text, setText] = useState(exampleText); // Set default value to the example text
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const getResponse = async () => {
		try {
			setLoading(true);
			const res = await axios.post('api/summarize/', {
				text
			});
			setResponse(res.data.summary);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Text <span className="text-active">Summarizer</span>
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Summarise your text into a shorter length.
			</h2>
			<form
				className="flex md:flex-row flex-col justify-between mt-20 w-full"
				onSubmit={e => {
					getResponse();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<div className="md:w-2/5 w-full">
					<label
						htmlFor="text"
						className=" text-sm font-medium text-primary"
					>
						Enter your text
					</label>
					<div className="mt-2">
						<textarea
							rows={14}
							name="text"
							id="text"
							className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
							defaultValue={text} // Display default value
							onChange={e => setText(e.target.value)}
						/>
					</div>
				</div>

				<div className="flex justify-center items-center md:mt-0 mt-4">
					<button
						className="w-full rounded-lg px-5 py-3 bg-active font-bold text-background hover:bg-primary sm:px-10"
						type="submit"
					>
						{loading ? (
							<span className="animate-pulse">Loading..</span>
						) : (
							<>Summarize</>
						)}
					</button>
				</div>
				<div className="md:w-2/5 md:mt-0 mt-4 w-full">
					<label
						htmlFor="summary"
						className=" text-sm font-medium text-primary"
					>
						Summarized text
					</label>
					<div className="mt-2">
						<textarea
							readOnly
							type="text"
							rows={14}
							name="summary"
							id="summary"
							className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
							value={response}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
```

Here is a preview of our app:

![Text Summarizer built using TLDR API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-text-summarizer-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Text Summarizer App](https://rapidapi-example-text-summarizer-app.vercel.app/). Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/text-summarizer-app).
