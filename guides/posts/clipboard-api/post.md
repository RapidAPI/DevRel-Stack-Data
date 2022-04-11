---
title: Interactive Guide to Clipboard API
description: "Clipboard API is a simple API that provides access to the operating system’s clipboard. You can paste content on it and even read from it. In this piece, let's take a look at what it is and how you can use it in your websites."
publishedDate: 2022-03-06T19:27:34.794Z
lastModifiedDate: 2022-03-06T19:27:34.794Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - clipboard-api
    - api
coverImage: ''
---

<Lead>

You often have to develop features in your web applications that may not be required but help if they are there. For instance, there could be a feature to adjust the content font size of your website or a button to read the text out loud. There are unlimited use cases.

</Lead>

All these functionalities may not be of any use to the general public, but they could be valuable for a person who has any disability. There are multiple ways you can add such functionalities to your web application. You can either code them or use some API.

While talking about APIs, a web API is available that lets you copy content on your clipboard. It can come in handy for developing a feature that quickly copies content, and the user does not need to select and copy it themselves.

Let’s look at this API and how you can use it in your applications.

## Clipboard API

It is a simple API that provides access to the operating system’s clipboard. You can paste content on it and even read from it. Pasting the content on the clipboard does not require any permission, but accessing the clipboard’s content is gated behind the Permission API.

The Clipboard API exposes three interfaces to the developers, all available in a secure context, i.e., HTTPS protocol. Let’s quickly look at all these interfaces.

### Clipboard

It is asynchronous and provides methods to read and write data to the clipboard. You can use this interface to build a small copy/paste functionality in your application.

### ClipboardEvent

This interface handles the events during the modification of the clipboard data.

### ClipboardItem

This interface represents a single item format used when reading or writing data via the Clipboard API.

## Usage

Let’s take a look at how you can use this API in your web applications:

### → STEP #1

You need to create a project. For this, create a folder on your computer and open it in your preferred code editor.

### → STEP #2

Once you are done, create `index.html` in your project directory and write down the basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Clipboard API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #3

Now create an input field and button inside the `body` tag. The button, when clicked, copy the content written inside the input field to the system’s clipboard.

```html
<input type="text" name="text" id="field" />
<button onclick="writeToClipboard">Copy</button>
```

### → STEP #4

Now write down the following code inside the `script` tag.

```html
<script>
	const text = document.getElementById('field').value;
	const writeToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (error) {
			console.log(error);
		}
	};
</script>
```

The JavaScript code gets the value from the input field and copies it inside the user clipboard. The function `writeToClipboard` executes when the user clicks on the copy button.

<LearnClipboardAPI showWrite />

You can also use the API to read data off the clipboard. You would only need to call the `readText` method of the API. Here is a quick demo.

<LearnClipboardAPI showRead />

## Support

The Clipboard API is supported across all major web browsers, including Chrome, Firefox, Safari, Opera, Edge.
