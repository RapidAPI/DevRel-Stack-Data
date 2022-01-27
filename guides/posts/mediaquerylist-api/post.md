---
title: Interactive Guide To MediaQueryList API
description: MediaQueryList API lets you define a viewport size below which it fires the function that is provided to it. In this piece, let's take a look at what it is and how you can use in your websites.
publishedDate: 2022-01-21T11:59:13.377Z
lastModifiedDate: 2022-01-21T11:59:13.377Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - mediaquerylist-api
    - mediaquerylist
    - api
coverImage: ''
draft: false
---

<Lead>

You often want your website to perform different actions depending on the viewport’s size. It can be something UI-related or something else entirely. Maybe you want a button to appear only in the desktop mode or a container with different content for different viewports. There are multiple use cases that you can think of.

</Lead>

So how do we go about it? You can use MediaQueryList web API to take care of it. Let’s look at what it is and how you can use it in your web application in this piece.

## MediaQueryList API

MediaQueryList API lets you define a viewport size below which it fires the function that is provided to it. This API saves the information on a media query that is applied to a document. It does this by taking a string parameter where the developer defines the viewport size.

You can receive events in the function that is called using this API. The event has a `matches` property that returns `true` if the website's viewport matches the media query list. Otherwise, it returns false.

## How to use MediaQueryList API?

You access the MediaQueryList API via the `window` global object. The `window` object provides you with a `matchMedia` function to define the viewport threshold.

```js
const mediaQLAPI = window.matchMedia('(max-width: 600px)');
```

Take a look at the format of the parameter. You can see that I have provided a string to the `matchMedia`. It is a key-value pair inside parentheses which is provided as a string to the `matchMedia` function.

Let’s see how you can use the API in a website. We will do it in steps.

### Step #1

You need to create a project. For this, create a folder on your computer and open it in your preferred code editor.

### Step #2

Once you are done, create a file called `index.html` in your project directory and add basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>MediaQueryList API</title>
	</head>
	<body></body>
</html>
```

### Step #3

Now create a simple paragraph tag inside the body of your HTML file and give it an id of `para`.

```html
<p id="para">The viewport is greater than the specified value.</p>
```

### Step #4

Afterward, create a `script` tag at the end of the body tag and copy-paste the following code there:

```html
<script>
	​​const mediaQueryList = window.matchMedia('(max-width: 600px)');
	const para = document.getElementById('para');

	mediaQueryList.addEventListener('change', function (e) {
		if (e.matches) {
			para.textContent = 'Hey! Now the viewport is less than or equal to the specified value.';
		} else {
			para.textContent = 'The viewport is greater than the specified value.';
		}
	});
</script>
```

Take a close look at the code. I have attached an event listener to our MediaQueryList API that is listening for the `change` event. As the size of the viewport changes, the callback function inside the event listener fires. Using the `matches` property of the event object, it checks whether the viewport size is greater than 600px. If it isn’t, it runs the if code block and changes the content inside the paragraph tag.

Here is a quick demo of how it all works. Try to resize your window below 600px, and you will see that the content changes.

<LearnMediaQueryListAPI />
