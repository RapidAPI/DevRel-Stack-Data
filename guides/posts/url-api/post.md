---
title: Interactive Guide To URL API
description: The URL API is a component of the URL standard and the API that accesses and manipulates URLs. In this piece, we are going to look at how you can use URL API in your web applications.
publishedDate: 2022-01-03T09:34:31.065Z
lastModifiedDate: 2022-01-03T09:34:31.065Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - url-api
coverImage: ''
draft: false
---

<Lead>

A web application contains several features. The developers have to implement different use cases to shape their application into a product. It sometimes requires them to handle different URLs or work with query parameters.

</Lead>

A web API exists that provides you with a bunch of features when it comes to URLs. Let’s take a deeper look into it.

## URL API

The URL API is a component of the [URL standard](https://url.spec.whatwg.org/) and the API that accesses and manipulates URLs. The URL standard defines what constitutes a valid [Uniform Resource Locator](​​https://developer.mozilla.org/en-US/docs/Glossary/URL), concepts of domains, hosts, and IP addresses, etc. After parsing the URL, this API then provides you with several properties related to the URL.

You sometimes send data via query parameters. Instead of reading this data by iterating over the string on the client-side, you can extract the value of a particular query parameter using the URL API. It provides you with the `searchParams` method to get the value of any query from the URL.

To use this API, you need to create an instance of a URL object. This object takes at least one URL parameter as a string value. It then returns another object as a result with different properties.

Let’s look at how you can start working with this API.

## Getting Started With API

Let’s do some code together. I am using VSCode for writing HTML. Create a folder and open it in your preferred code editor. Now create an HTML file called index.html in your project folder.

Create a basic HTML boilerplate. Now copy and replace the following code in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>URL API</title>
	</head>
	<body>
		<input type="text" id="txt" />
		<button id="btn">Submit</button>
		<script>
			const txt = document.getElementById('text').value;
			const btn = document.getElementById('btn');

			btn.addEventListener('click', () => {});
		</script>
	</body>
</html>
```

Moving forward, you can write code inside the event listener.

### Extracting URL Components

As I described earlier, we need to create an instance of URL API using the `new` keyword. It will take at least one parameter that is a link you want to parse. It will then provide you access to the link’s constituent parts through its properties.

Here is an example of how it is done:

<LearnURLAPI showUrlComponents />

## Searching Through Queries

There is a `search` property you acquire when a URL is parsed. Its value contains the query string portion of the URL. You can also look up the values of individual parameters with the `searchParams` property. Let’s take a look at it.

<LearnURLAPI showSearchQueries />

That’s all, folks! I hope this brief guide has provided you with enough knowledge that now you can use the URL API in your projects.
