---
title: How to make API calls in Vue?
description:
    'Vue.js is built on top of HTML, CSS, and JavaScript and provides a declarative
    and component-based programming model. In this piece, we will look at how you
    can make API calls using Vue.js.'
publishedDate: 2022-03-06T19:27:34.794Z
lastModifiedDate: 2022-03-06T19:27:34.794Z
authors:
    - saad
categories:
    - api
tags:
    - vue
    - api
coverImage: ''
---

<Lead>

These days there are so many incredible web technologies in the market that you can use to build your applications. If you are a JavaScript developer, you can go with React.js, Vue.js, Next.js, Angular.js, Swelte, etc. With Python, you can go with Django, Flask, CherryPy, Bottle, etc.

</Lead>

You would have to make API calls to your server or some public REST API in each of these technologies. Learning to make these calls is essential.

In this piece, we will look at how to consume APIs in Vue.js. We will also briefly look at Vue.js as a web framework. So without any further ado, let’s jump in!

## Vue.js

It is a modern JavaScript framework launched in 2014 to build web interfaces and single-page applications. It was created by [Evan You](​​https://evanyou.me/) to combine the pros of Angular into a lightweight and fast framework.

Vue.js is built on top of HTML, CSS, and JavaScript and provides a declarative and component-based programming model. The framework can also be used to build desktop applications using the Electron framework.

## Consuming APIs in Vue.js

Let’s look at how you can make API calls in Vue.js. We will do this in a bunch of steps to make it easier to follow along.

### → STEP #1

Instead of looking up APIs on the Internet, let’s go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

Once you have logged in, you will see thousands of APIs. I have already found a freemium [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that we can use.

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Random Facts API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-random-facts-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere. It will be used later in the application.

### → STEP #2

We need to create a Vue.js boilerplate. For this, you can use the official Vue.js CLI to scaffold a project. For this, run the following command inside the terminal:

```sh
npx @vue/cli create test-project
```

It will create a Vue.js project in your current working directory with project name `test-project`. You can change it to whatever you like.

Once you are done, open this project in your preferred code editor.

### → STEP #3

In this step, we need to run the project. You can do this by first opening a terminal instance inside your project directory and then running the following command:

```sh
npm run serve
```

It will start a local server at port 8080.

### → STEP #4

Go to `src/components` directory and open the `HelloWorld.vue` file. Remove all the HTML under the `H1` tag and create a button using the `button` tag. Once done, set an `onclick` event on the button.

The `onclick` event handler will call a function when the user clicks this button. We will make our API call inside this function.

```vue
<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<button @click="fetchData">Click Me!</button>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
	padding: 20px 60px;
	font-size: 18px;
}
</style>
```

I have also added some styles to the button to make it slightly bigger.

### → STEP #5

Now create a `methods` object inside the `export default` object. This object will contain the methods that your application will use. Since we need to create a `fetchData` method to make an API call, we will create it inside this object.

On the [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) page, you will find code snippets of how you can use this API with different languages. Since we are using JavaScript, let’s choose the `(JavaScript) fetch` from the dropdown.

![Fetching data using (JavaScript) fetch](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/12358f8428ac15dc4d086d097996102c07521587/guides/posts/make-api-call-python/images/code-snippet.png)

Copy the code snippet and paste it inside the `fetchData` function.

We would also need to convert the response to JSON and log it in the console. We can do it inside the `then()`.

```vue
<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<button @click="fetchData">Click Me!</button>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	methods: {
		fetchData() {
			fetch('https://random-facts2.p.rapidapi.com/getfact', {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
					'x-rapidapi-key': 'Your -RapidAPI-Hub-Key'
				}
			})
				.then(response => {
					response.json().then(res => console.log(res));
				})
				.catch(err => {
					console.error(err);
				});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
	padding: 20px 60px;
	font-size: 18px;
}
</style>
```

Replace the value of the `x-rapidapi-key` in the above code snippet with the API key you saved earlier. Once you are done, go to [this URL](http://localhost:8080/). Make sure your server is running. Now click on the `Click Me!` button. It will call the `fetchData` function and make the API call. Open the console by inspecting the page, and you will see the API response has logged inside the console.

## Wrap Up

This guide was an introduction to consuming APIs in Vue.js. We hope that now you can start using APIs in your awesome Vue.js projects.
