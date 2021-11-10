---
title: How to build a QR Code Generator app using Next.js and a QR Code API?
description: Let's build an app that will generate a QR code for a given input.
publishedDate: 2021-11-04T15:57:17.709Z
lastModifiedDate: 2021-11-04T15:57:17.709Z
authors:
    - ahmadBilal
category: Apps
tags:
    - rapidapi
    - qrcode
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore thousands of these on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

In this guide, we will be building an application that generates QR Codes for any text input. QR codes allow you to share information quickly and seamlessly. They are used everywhere, from payment portals to social apps like Snapchat and WhatsApp. Let's build our own today.

## Stack

Let's decide the stack for our app. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find an API that we can send input to and get a QR Code as a response. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "QR Code" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rapidapi-hub-consumer/introduction"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see that we have a lot of options for QR Code related APIs. For our app, I am going to use [qrcode utils API](https://rapidapi.com/digicatech/api/qrcodeutils/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to qrcode utils API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-qrcode-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page to see the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss qrcode-generator-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `qrcode-generator-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api` where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/qrcode-generator-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```js
export default function Home() {
	return (
		<div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
			<h1 className="text-6xl font-bold text-primary mt-20">
				QR Code <span className="text-active">Generator</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Generate a QR Code for sharing your content.
			</h2>
		</div>
	);
}
```

### → STEP #2

The next thing we need is an input field where the text will go. There should also be a button to generate the QR Code. Let's add these.

```js
export default function Home() {
	return (
		<div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
			<h1 className="text-6xl font-bold text-primary mt-20">
				QR Code <span className="text-active">Generator</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Generate a QR Code for sharing your content.
			</h2>
			<input
				type="text"
				placeholder="Enter a link, number or any text to generate the QR Code"
				className="mt-10 text-sm w-1/2 p-4 rounded"
			></input>
			<button className="mt-6 p-4 bg-active hover:opacity-90 rounded text-primary font-bold inline-flex">
				Generate QR Code
			</button>
		</div>
	);
}
```

This code is going to create an input field and a button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the user input and the response from the API.

```js
import {useState} from 'react';

export default function Home() {
	// States
	const [input, setInput] = useState(null);
	const [response, setResponse] = useState(null);
	return (
		<div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
			<h1 className="text-6xl font-bold text-primary mt-20">
				QR Code <span className="text-active">Generator</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Generate a QR Code for sharing your content.
			</h2>
			<input
				type="text"
				placeholder="Enter a link, number or any text to generate the QR Code"
				className="mt-10 text-sm w-1/2 p-4 rounded"
				onChange={e => setInput(e.target.value)}
			></input>
			<button className="mt-6 p-4 bg-active hover:opacity-90 rounded text-primary font-bold inline-flex">
				Generate QR Code
			</button>
		</div>
	);
}
```

Also, I am using the `setInput(e.target.value)` to save the value of the input field in the state we just created, using the `onChange` event handler.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [qrcode utils API](https://rapidapi.com/digicatech/api/qrcodeutils/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are going to send a GET request to get the QR Code for our input. For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We are going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-qrcode-app/images/code-snippet.png)

Next, I am going to create a file named `qrcode.js` in the `pages/api` directory and use the code snippet there as follows:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://qrcodeutils.p.rapidapi.com/qrcodefree',
			params: {
				text: req.query.input,
				validate: 'true',
				size: '150',
				type: 'svg', // type: svg, png etc
				level: 'M' // level of validation
			},
			headers: {
				'x-rapidapi-host': 'qrcodeutils.p.rapidapi.com',
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

We have also specified the parameters. Our API call is ready. Let’s create a function in the `pages/index.js` file to send the request from the client-side to our API at `http://localhost:3000/api/qrcode` for the QR code. You can just copy and replace the following code in `pages/index.js` file:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [input, setInput] = useState(null);
	const [response, setResponse] = useState(null);

	/**
	 * Fetches QR Code of the text input
	 */
	const getQrcode = async () => {
		try {
			const res = await axios.get('api/qrcode/', {
				params: {input}
			});
			setResponse(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
			<Head>
				<title>QR Code Generator</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-6xl font-bold text-primary mt-20">
				QR Code <span className="text-active">Generator</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Generate a QR Code for sharing your content.
			</h2>
			<input
				type="text"
				placeholder="Enter a link, number or any text to generate the QR Code"
				className="mt-10 text-sm w-1/2 p-4 rounded"
				onChange={e => setInput(e.target.value)}
			></input>
			<button
				className="mt-6 p-4 bg-active hover:opacity-90 rounded text-primary font-bold inline-flex"
				onClick={() => getQrcode()}
			>
				Generate QR Code
			</button>
		</div>
	);
}
```

See the `getQrcode` function I have created to get the response. It sends the `input` state holding our text input as the parameter. After receiving the response, it is stored in the `response` state. It is time for the final step, where we will display the QR Code.

### → FINAL STEP

The API returns the QR Code in SVG format. To display it directly, install a library `react-inlinesvg` by running the command:

```sh
npm install react-inlinesvg
```

and import it:

```js
import SVG from 'react-inlinesvg';
```

Finally, we can render the QR Code SVG by checking the `response` state.

```js
import axios from 'axios';
import {useState} from 'react';
import SVG from 'react-inlinesvg';

export default function Home() {
	const [input, setInput] = useState(null);
	const [response, setResponse] = useState(null);

	const getQrcode = async () => {
		try {
			const res = await axios.get('api/qrcode/', {
				params: {input}
			});

			setResponse(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	// Standard snippet to download the QR Code svg
	const downloadQrcode = () => {
		const url = window.URL.createObjectURL(new Blob([response]));
		const urlObject = document.createElement('a');
		urlObject.href = url;
		urlObject.setAttribute('download', 'file.svg');
		document.body.appendChild(urlObject);
		urlObject.click();
	};

	return (
		<div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
			<h1 className="text-6xl font-bold text-primary mt-20">
				QR Code <span className="text-active">Generator</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Generate a QR Code for sharing your content.
			</h2>
			<input
				type="text"
				placeholder="Enter a link, number or any text to generate the QR Code"
				className="mt-10 text-sm w-1/2 p-4 rounded"
				onChange={e => setInput(e.target.value)}
			></input>
			<button
				className="mt-6 p-4 bg-active hover:opacity-90 rounded text-primary font-bold inline-flex"
				onClick={() => getQrcode()}
			>
				Generate QR Code
			</button>

			{response && (
				<div className="mt-10 bg-active">
					<SVG src={response} />
					<button
						className="w-full text-primary text-base p-1"
						onClick={() => downloadQrcode()}
					>
						Download
					</button>
				</div>
			)}
		</div>
	);
}
```

The library takes the response and renders the SVG for us. I also used a snippet in the `downloadQrcode` function, which does what it says, allows users to download the QR Code.

## Wrap Up

All done. We have successfully built a QR Code Generator app. You can find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/qrcode-generator-app). This is what it looks like:

![QR Code Generator built with Next.js and QRcode API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-qrcode-app/images/qrcode-generator-app.png)
