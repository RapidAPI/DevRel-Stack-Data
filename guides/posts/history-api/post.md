---
title: Interactive Guide to History API
description: "This API lets you go back and forth between web pages that are in your session history. In this piece, let's take a look at what it is and how you can use it in your websites."
publishedDate: 2022-02-20T15:55:14.958Z
lastModifiedDate: 2022-02-20T15:55:14.958Z
authors:
    - saad
categories:
    - webApis
    - interactive
tags:
    - history-api
    - web-api
    - api
coverImage: ''
---

<Lead>

There are several types of APIs. The REST API is a communication channel that acts as a bridge between client and server. The web APIs let you integrate features that are otherwise difficult to implement. For instance, the DOM web API enables you to interact with the DOM elements, or the HTML Drag and Drop API lets you drag an HTML element all the way to a defined drop zone.

</Lead>

Some websites often have a forward and back button that lets you navigate between pages. There are several ways to implement this, but the simplest one is using History web API. Let’s look at what it is and how you can use it on your websites.

## History API

This API lets you go back and forth between web pages that are in your session history. It’s a relatively simple API, and you can use it through the `window` object. It has a single interface that contains several methods. Among these methods, two of them let you go back and forth between the user’s history.

### History Interface

Let’s quickly look at some of the properties and methods `History` interface provides us/

### length

This property returns the array's length that contains the elements of the session history.

## state

This property returns a value representing the state at the top of the history stack.

## back Method

You can go back to the previous page in the session history using this method. All you need to do is call the `back()` method of the `History` interface, and the API will handle the rest.

<LearnHistoryAPI showBack />

## forward Method

This method lets you visit the next page in the session history. The method will not do anything if called on the most recent page. It will also show no error, warning, or exception.

<LearnHistoryAPI showForward />

## go Method

You can go to a particular page in the session history using this method. It takes an argument that is an integer value. If the value is positive, it will take you to the next page. If it is negative, it will take you to the previous page. The 0 value will not take you anywhere; instead, it will refresh the page for you.

<LearnHistoryAPI showSpecificPoint />

## Using History API

Let’s take a look at how you can use this API in your web applications:

### → STEP #1

You need to create a project. For this, create a folder on your computer and open it in your preferred code editor.

### → STEP #2

Once you are done, create two files called `index.html` and `about.html` in your project directory and add basic HTML boilerplate code inside them. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>History API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #3

Inside both these HTML files, add the following code inside the `script` tag:

```html
<script>
	function goBack() {
		window.history.back();
	}

	function goForward() {
		window.history.forward();
	}
</script>
```

Then create two buttons in both these HTML files. One will take you to the previous page, and the other will take you to the next page. Set the `onclick` event handler of the previous page button to the `goBack` function and `onclick` event handler of the next page button to the `goForward` function.

Lastly, create an `anchor` tag in the `index.html` file that will take you to the `about.html` page. In the end, the `index.html` file will look like this:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>History API</title>
	</head>
	<body>
		<div>
			<a href="/about.html">About</a>
			<br />
			<br />
			<button onclick="goBack()">Previous Page</button>
			<button onclick="goForward()">Next Page</button>
		</div>
		<script>
			function goBack() {
				window.history.back();
			}

			function goForward() {
				window.history.forward();
			}
		</script>
	</body>
</html>
```

The `about.html` file will look like this:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>About Page</title>
	</head>
	<body>
		<button onclick="goBack()">Previous Page</button>
		<button onclick="goForward()">Next Page</button>
		<script>
			function goBack() {
				window.history.back();
			}

			function goForward() {
				window.history.forward();
			}
		</script>
	</body>
</html>
```

Now run the `index.html` and go to the about page. Then click on the previous button. It will take you to the `index.html` page. Now click on the next page button, and it will take you to the `about.html` page. And that’s pretty much it.

## Support

The History API is supported across all modern web browsers, including Chrome, Firefox, Edge, Opera, and Safari.
