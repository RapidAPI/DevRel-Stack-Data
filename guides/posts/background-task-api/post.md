---
title: What is Background Task API?
description: Background Task API lets you schedule tasks that executes when your site is idle. Let's take a look at this API and how you can use it.
publishedDate: 2022-04-11T07:24:44.264Z
lastModifiedDate: 2022-04-11T07:24:44.264Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - background-task-api
    - web-api
    - api
coverImage: ''
---

<Lead>

Browsers are responsible for rendering a web application's code and showing the website to us. They run the code on a single thread, and eventually, all the application functions that are invoked are queued and executed one after another.

</Lead>

The biggest drawback to this approach is if a function is taking too much time to run, the rest of the invoked functions that are queued after it will probably affect the site’s overall performance. There is a web API available to tackle this problem. Let’s take a look at it.

## Background Task API

It is a simple API that lets you schedule tasks that executes when your site is idle. The tasks can be related to sending analytical data to the server or performing specific actions that are not required when the user is interacting with your website.

The `window` global object has a `requestIdleCallback` method that you can use to access this API. The method takes two parameters in which the second parameter is optional: the first one is a callback function executed when the site is idle, whereas the second optional parameter defines the setting related to the callback function.

## Usage

Let’s look at how you can use this API on your websites.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Background Task API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now simply call the `requestIdleCallback` function inside the `script` tag.

```html
<script>
	requestIdleCallback(
		function (idleDeadline) {
			// perform some action
		},
		{
			timeout: 3000
		}
	);
</script>
```

I have provided `requestIdleCallback` a callback function and an object setting the `timeout` property to 3000. It is the maximum delay to execute the callback function.

## Support

The Background Task API is supported across all major web browsers except Safari. So ensure that you have set up some fallback in case the API does not work.
