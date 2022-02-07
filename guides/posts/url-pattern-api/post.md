---
title: Interactive Guide to URL Pattern API
description: It is a web API for defining the syntax used to create URL pattern matchers. Let's take a look at what this API is and how you can use it in your web applications.
publishedDate: 2022-02-07T08:44:50.338Z
lastModifiedDate: 2022-02-07T08:44:50.338Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - url-pattern-api
    - web-api
    - api
coverImage: ''
---

<Lead>

A website consists of many web pages. Each web page is connected to a unique route that loads the page when it becomes active. If you are a developer, you would know that routing comes into play when your application becomes multi-page.

</Lead>

There is a web requirement to standardize the routing syntax, so every developer is on the same page for generating routes. Fortunately, a web API called URL Pattern API exists for this purpose. Let’s look at this API and how you can use it in your web applications.

## URL Pattern API

It is a web API for defining the syntax used to create URL pattern matchers. It supports wildcards, named and unnamed token groups, regular expression groups, and group modifiers. You can use this API to match full URLs or a URL pathname with a predefined route. It can also return information about the token and group matches.

## Usage

Let’s look at how you can use this API in your web application:

### → STEP #1

You need to create a project. For this, create a folder on your computer and open it in your preferred code editor.

### → STEP #2

Once you are done, create a file called `index.html` in your project directory and add basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>URL Pattern API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #3

You can use the API to match text with the URL exactly. All you need to do is provide the pathname without any wildcards or groups. The following is how you do it.

```html
<script>
	const pattern = new URLPattern({pathname: '/post'});
	const isSamePattern = pattern.test('https://rapidapi.com/post');
	console.log(isSamePattern);
</script>
```

The value will be true in the above case, but if you replace the `/post` with anything, the test will fail, and the value of `isSamePattern` will be false. Here is a quick demo for better understanding:

<LearnURLPatternAPI showFixed />

You can also use wildcards and regular expressions for pattern matching. The URL Pattern API also lets you create named and unnamed groups. The name group starts with a colon (:).

```html
<script>
	const pattern = new URLPattern('/post/:id(\d+)', 'https://rapidapi.com');
	const namedGroup = pattern.exec('https://rapidapi.com/post/123').pathname
		.groups;
	console.log(namedGroup);
</script>
```

When executed, the above code will create an object with a key ‘id`, and its value will be 123.

<LearnURLPatternAPI showNamedGroup />

The unnamed groups are similar to named groups, but they don’t have a key in the response object. Instead, the key values are numerically indexed based on their order in the pattern.

Here is a quick demo of the unnamed group:

<LearnURLPatternAPI showUnNamedGroup />

## Support

The URL Pattern API is only supported across a handful of browsers, including Chrome, Edge, Opera, and Chrome for Android. The browsers like Safari, Firefox do not support this API.
