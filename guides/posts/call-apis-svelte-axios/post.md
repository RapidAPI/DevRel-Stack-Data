---
title: How to Call APIs in Svelte using Axios?
description: There are different ways you can use to call APIs in Svelte. This guide will demonstrate how to use Axios to consume APIs in a Svelte application.
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - axios
    - api
    - svelte
publishedDate: 2022-02-18T14:17:11.709Z
lastModifiedDate: 2022-02-18T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>
	Svelte is an open-source compiler that runs at build time and generates
	minimal and optimized JavaScript code. It competes with other JavaScript
	frameworks like React, Angular, Vue, and it is rapidly growing popular with
	JavaScript developers.
</Lead>

## Axios

There are different ways you can request an API endpoint. You can use the `fetch` API or third-party libraries. In the latter case, many HTTP packages are available on npm, and [axios](https://www.npmjs.com/package/axios) is the most popular one.

APIs are the backbone of any application, so let's see how we can call APIs in a Svelte application using Axios. I have divided the process into five steps which are as follows:

## → STEP 1: Setting Up

To use `axios` for requesting APIs, you need to install it first in your project. Here is the command you would need to run for this in your terminal:

```sh
npm install axios
```

Once it’s done, import `axios` inside the `<script>` tags of your Svelte file where you are interested in making API requests.

```svelte
<script>import axios from 'axios';</script>
```

For this guide, we will use the [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) from RapidAPI Hub, which gives us random quotes. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) enables you to choose from thousands of public APIs like this for use in your projects.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub in this fun interactive guide.
</Callout>

## → STEP 2: Create the Caller Function

Now, we will create the function which will make the API call. There are two ways in which you can trigger this function:

1. `onMount` hook.
2. As a result of an event like clicking a button.

### 1. `onMount` hook

If we put our API call inside the `onMount` hook of Svelte, the API request will be sent whenever the component mounts. This means that the API call will be made whenever the browser renders the component. You can use this approach to show data without requiring any input from the user, such as a page load.

To use `onMount`, you need to import it into your Svelte file.

```svelte
<script>import {onMount} from 'svelte';</script>
```

Now, you can use an async function inside the hook to make the API call, like this:

```svelte
<script>
	import { onMount } from 'svelte';
	let footprint;

	onMount(async () => {
		// Make the API Call here
	});
</script>
```

### 2. Event

The `onMount` hook will send the API request whenever the component loads, but sometimes, we want to wait for some input from the user to make the request. For example, we may need the request to be sent when the user clicks a button.

In that case, we can use the event handlers like `on:click` to trigger our caller function:

```svelte
<script>
	import { onMount } from 'svelte';
	let footprint;

	async function getData() {
		// Make the API Call here
	}
</script>

<div>
	<button on:click={getData}>Get Data</button>
</div>
```

## → STEP 3: Specify the API Request

Finally, we will use Axios to specify the API request. If you want to make a GET request, you will use the `get` method of `axios`. If you’re going to make a POST, PUT, or DELETE request, you will use the `post`, `put`, or `delete` method of `axios`. Take a look at the snippet below.

```svelte
<script>
	const requestAPI = async () => {
		try {
			const res = await axios.get(`API_URL`, {
				headers: {},
				params: {},
			});
		} catch (err) {
			console.log(err);
		}
	};
</script>
```

The first parameter of this method is the API endpoint URL, and the second is an object where you can send params and headers of your API request. The header is generally the area where you will add your API key.

Keeping this snippet in mind, let's add the API request to the Quotes API in our `onMount` hook.

```svelte
<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    let quotes = [];
    let error = null;

    onMount(async () => {
        try {
            const res = await axios.get(`https://famous-quotes4.p.rapidapi.com/random`, {
                headers: {
                    'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
                    'x-rapidapi-key': API_KEY,
                },
                params: { category: 'all', count: '10' },
            });
            quotes = res.data;
        } catch (e) {
            error = e;
        }
    });
</script>
```

This is pretty much it. Now your application is ready to make API calls using `axios`.
