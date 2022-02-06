---
title: How to Call APIs in Svelte?
description: Svelte is an open-source compiler that runs at build time and generates minimal and optimized JavaScript code. It competes with other JavaScript frameworks like React, Angular, and Vue. This guide will demonstrate how you can consume APIs in a Svelte application.
authors:
    - ahmadBilal
categories:
    - api
tags:
    - graphql
    - api
    - svelte
publishedDate: 2022-02-03T14:17:11.709Z
lastModifiedDate: 2022-02-03T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>
	Svelte is an open-source compiler that runs at build time and generates
	minimal and optimized JavaScript code. It competes with other JavaScript
	frameworks like React, Angular, Vue, and it is rapidly growing popular with
	JavaScript developers.
</Lead>

## Svelte

Svelte is a new compiler that is focused on building fast web applications. It runs at build time and converts declarative components into efficient and optimized JavaScript code.

APIs are the backbone of any application, so let's see how we can call APIs in a Svelte application. I have divided the process into five steps which are as follows:

## → STEP 1: Find an API

First of all, let's find an API to use in our Svelte application. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) enables you to choose from thousands of public APIs for use in your projects.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub in this fun interactive guide.
</Callout>

For this guide, we will use the [CarbonFootprint API](https://RapidAPI.com/carbonandmore-carbonandmore-default/api/carbonfootprint1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) from RapidAPI Hub that gives us the carbon footprint data of travel.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to CarbonFootprint API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-carbon-footprint-app/images/subscribe.png)

## → STEP 2: Create the Caller Function

Now, we will create the function which will make the API call. There are two ways in which you can trigger this function:

1. `onMount` hook.
2. As a result of an event like clicking a button.

### 1. `onMount` hook

If we put our API call inside the `onMount` hook of Svelte, the API request will be sent whenever the component mounts. This means that the API call will be made whenever the browser renders the component. You can use this approach to show data without requiring any input from the user, such as a page load.

To use `onMount` you need to import it in your Svelte file.

```jsx
import {onMount} from 'svelte';
```

Now, you can use the hook inside the `<script>` tag like this:

```jsx
// index.svelte
<script>
	import {onMount} from 'svelte'; let footprint; onMount(); // Make the API
	Call inside this hook
</script>
```

### 2. Event

The `onMount` hook will send the API request whenever the component loads, but sometimes, we want to wait for some input from the user to make the request. For example, we may need the request to be sent when the user clicks a button.

In that case, we can use the event handlers like `on:click` to trigger our caller function:

```jsx
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

We will use the built-in Fetch API to send the API request. Fetch API is included in all modern browsers, and you do not need to import any third-party library.

RapidAPI Hub automatically creates code snippets to request the API in multiple languages, which can help a lot. Check out the `(JavaScript) Fetch` code snippet on the [CarbonFootprint API page](https://RapidAPI.com/carbonandmore-carbonandmore-default/api/carbonfootprint1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

![Code Snippet for Fetch API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/call-apis-svelte/images/snippet.png)

I modified this snippet to use `await` and put it in an `async` function inside the `onMount` hook.

```jsx
<script>
    import { onMount } from 'svelte';

    onMount(async () => {
        const response = await fetch(
            'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                    'x-rapidapi-key': 'YOUR_API_KEY',
                },
            }
        );
        const data = await response.json();
    });
</script>
```

## → FINAL STEP: Display the Response

Finally, we can display the data returned by the API. Inside the `<script>` tag, we will create an empty variable `footprint`, and store the API response in this variable. The fun thing about Svelte is that we can use this variable straight away in our HTML like states in React. Here is the final code.

```jsx
<script>
    import { onMount } from 'svelte';
    let footprint;

    onMount(async () => {
        const response = await fetch(
            'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                    'x-rapidapi-key': 'YOUR_API_KEY',
                },
            }
        );
        const data = await response.json();
        footprint = data.carbonFootprint;
    });
</script>

<div>
    {#if footprint}
        <p>The Carbon Footprint is {footprint}</p>
    {:else}
        <p>loading.....</p>
    {/if}
</div>
```

Now your application is ready to make API calls.

## Wrap Up

This guide was an introduction to consuming APIs in Svelte. We hope that now you can start using APIs in your awesome Svelte projects.
