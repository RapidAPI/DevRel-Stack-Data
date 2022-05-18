---
title: How to use APIs from RapidAPI Hub using JavaScript?
description: There are millions of APIs available on the internet that you can use for various purposes. This piece will help you to learn how to use any API from RapidAPI Hub in JavaScript.
authors:
    - saad
categories:
    - rapidapi
    - api
tags:
    - JavaScript
    - RapidAPI
publishedDate: 2022-05-16T16:27:05.876Z
lastModifiedDate: 2022-05-16T16:27:05.876Z
coverImage: ''
draft: false
---

<Lead>

There are millions of APIs available on the internet that you can use for various purposes. For instance, using the appropriate API, you can build automation tools, Jamstack applications, and whatnot. These APIs are often free and paid, depending on their services.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) is home to over 35000+ APIs of 45 different categories. You can visit it to find weather, text, travel, sports APIs, etc. The APIs here are divided into three categories, i.e., free, freemium, and paid. The freemium APIs are free to a specific limit. Afterward, you have to pay for them.

To use the APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), you would first have to [sign up](https://rapidapi.com/auth/sign-up?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the website. Afterward, a unique API Key will be generated for you. With this API key, you will have access to all APIs.

<Callout
	title="Sign Up To Find Thousands of APIs"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/hub"
>
	RapidAPI Hub is the world’s largest API hub, where you can find different
	APIs according to your needs.
</Callout>

In this piece, let’s look at how you can use APIs from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) in JavaScript. So without any further ado, let’s jump in!

## Using APIs in JavaScript

You can refer to the following steps to learn how you can use APIs from RapidAPI Hub in JavaScript:

### → STEP #1

Let’s find an API that we can use. For this piece, I will use [Jokes API by API-Ninjas](https://RapidAPI.com/apininjas/api/jokes-by-api-ninjas?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel), but you can use any API you like.

The API I have selected is a free one, so you do not need to subscribe to it. However, you will need your RapidAPI key. So go ahead and save the value of `x-rapidapi-key` to use later.

### → STEP #2

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Use APIs from RapidAPI Hub</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #3

RapidAPI Hub provides you with code snippets in different languages for integrating the API. Since we are learning how to use APIs in JavaScript from RapidAPI Hub, let’s go `(JavaScript) fetch` code snippet since `fetch` is a web API used for calling REST APIs.

![Fetching data using (JavaScript) fetch](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/12a1f39817287fca68fdd878403799406d09719c/guides/posts/call-apis-javascript-rapidapi-hub/images/code-snippet.png)

Now paste the code snippet inside the `script` tag.

```html
<script>
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
			'X-RapidAPI-Key': 'your-rapidapi-key'
		}
	};

	fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
</script>
```

Replace the `your-rapidapi-key’ with the API key you saved earlier. Once you are done, run this file and open your console. You will see that the `fetch` API has called the [Jokes API](https://RapidAPI.com/apininjas/api/jokes-by-api-ninjas?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) and after receiving the response, logged it in the console.

Here is a demo of how you can call APIs from RapidAPI Hub in JavaScript:

<CallRapidAPIHubAPI />

Make sure you enter your RapidAPI key before clicking the `Call API` button. You can also replace the API with any API from RapidAPI (if the API does not take any query parameter).

## Wrap Up

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) takes care of everything from having the suitable API to providing you the code snippet to call it. There are thousands of APIs here. So if you are learning web development, you can use any API to build simple Jamstack apps.
