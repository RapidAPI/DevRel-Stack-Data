---
title: How to build a Language Detection App using Next.js and Microsoft Translator Text API?
description: In this piece, let's take a look at how you can build a language detection app using an API from RapidAPI Hub and Next.js.
publishedDate: 2021-11-12T20:22:52.607Z
lastModifiedDate: 2021-11-12T20:22:52.607Z
authors:
    - saad
categories:
		- apps
tags:
    - language-detection-app
coverImage: ''
---

<Lead>

Sometimes when browsing through the internet, you come across different scripts written in some foreign language. Since it’s not the language you speak, you can not identify it. We can fix this by building a small language detecting application.

</Lead>

So today, I am building a language detection application that will take some text and provide the user with the language name. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to detect text language. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?tm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “language detection” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available APIs that provide this service. For this piece, I am using [Microsoft Translator Text API](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to IMDb API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0f687aead197486a85c58dbdbc66ce0c3e0ee2ca/guides/posts/build-language-detection-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss language-detection-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `language-detection-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/language-detection-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Language <span className="text-danger">Detection</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				See which language the text is from
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Time App” and “Get Time-related information according to an area”. You can change it to anything you prefer.

### → STEP #2

Now let’s create text areas and a detection button. The user will be able to paste content here to detect its language.

Now copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Language <span className="text-danger">Detection</span> App
      </h2>
      <h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        See which language the text is from
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
          placeholder="Write/paste any content..."
        />
        <div className="flex items-center">
          <button
            className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12"
          >
            Detect
          </button>
        </div>
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
          placeholder="Text Language..."
          value=””
        />
      </div>
    </div>
  );
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to save the text that the user will provide the application. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [text, setText] = useState('');
	const [detectedLang, setDetectedLang] = useState('');

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Language <span className="text-danger">Detection</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				See which language the text is from
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Write/paste any content..."
					onChange={e => setText(e.target.value)}
				/>
				<div className="flex items-center">
					<button
						className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12"
						onClick={fetchTextInfo}
					>
						Detect
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Text Language..."
					value={detectedLang}
				/>
			</div>
		</div>
	);
}
```

You can see that I have added `onChange` event handlers to set the state value as soon as the user writes something in the text area field.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR_RAPID_API_KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key that I told you to save earlier. It is the value of `x-rapidapi-key`.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are using the `Detect` endpoint of the [Microsoft Translator Text API](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to detect the language.

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0f687aead197486a85c58dbdbc66ce0c3e0ee2ca/guides/posts/build-language-detection-app/images/code-snippet.png)

Now create a file with the name `detect.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/detect
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const options = {
			method: 'POST',
			url: 'https://microsoft-translator-text.p.rapidapi.com/Detect',
			params: {'api-version': '3.0'},
			headers: {
				'content-type': 'application/json',
				'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
			},
			data: [
				{
					Text: req.body.text
				}
			]
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

	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://microsoft-translator-text.p.rapidapi.com/languages',
			params: {'api-version': '3.0'},
			headers: {
				'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
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

This code is making an API call to the [Microsoft Translator Text API](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It is going to execute when the user makes an API call to the `detect` endpoint I have mentioned above.

You can see that I have written the code for two separate HTTP requests, i.e., POST and GET. It is because we need to fetch all the language codes from the API before our application renders so we can later match the detected language code with these language codes. For this, I will do the server-side rendering.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home({value: lang}) {
	const [text, setText] = useState('');
	const [detectedLang, setDetectedLang] = useState('');

	/**
	 *
	 *
	 * Detect text language
	 */
	const fetchTextInfo = async () => {
		try {
			setDetectedLang(`Detecting language...`);
			const res = await axios.post(`/api/detect`, {text});
			const {data} = res;
			setDetectedLang(
				`The text is written in ${
					lang.dictionary[data[0].language].name
				} language. And the language's native name is ${
					lang.dictionary[data[0].language].nativeName
				}.`
			);
		} catch (err) {
			setDetectedLang(`Language couldn't be detected.`);
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Language <span className="text-danger">Detection</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				See which language the text is from
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Write/paste any content..."
					onChange={e => setText(e.target.value)}
				/>
				<div className="flex items-center">
					<button
						className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12"
						onClick={fetchTextInfo}
					>
						Detect
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Text Language..."
					value={detectedLang}
				/>
			</div>
			<div className="absolute bottom-0 flex justify-center items-end h-52 md:h-44">
				<p className="text-primary pb-12 md:w-60 md:text-center">
					Made by RapidAPI DevRel Team –{' '}
					<a href="https://github.com/RapidAPI/DevRel-Examples-External">
						See Examples Like this
					</a>
				</p>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/detect');
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

As mentioned above, I am using the Next.js `getServerSideProps` function to fetch the data from the server at the server-side. You can also use `getStaticProps` instead of `getServerSideProps` and the application will then fetch the data at build time.

You can also see that I have created a function called `fetchTextInfo` that sends the text to the API. When the API comes back with a response, I am then finding the language name using the language code I received through server-side rendering earlier. Then I update the state variable so the user can see what language the text is written in.

## Wrap Up

This is it. We have successfully built a [Language Detection Application](https://rapidapi-example-language-detection-app.vercel.app/) using the [Microsoft Translator Text API](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/language-detection-app). It will look something like this:

![Language Detection App built with Next.js and Microsoft Translator Text API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0f687aead197486a85c58dbdbc66ce0c3e0ee2ca/guides/posts/build-language-detection-app/images/cover.png)
