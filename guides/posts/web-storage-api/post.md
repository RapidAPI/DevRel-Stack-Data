---
title: Interactive Guide To Web Storage API
description: It is a Web API that provides you with different functions to store key/value pairs in your browser. Let's take a deeper look at it. In this piece, let's take a look at how you can use web storage API in your websites.
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - web-storage-api
    - text
publishedDate: 2021-12-13T14:43:14.809Z
lastModifiedDate: 2021-12-13T14:43:14.809Z
coverImage: ''
---

<Lead>

While developing a web application, you often need to store data that you might not want in the database. It might be some token or key/value pairs that you would need later in the application.

</Lead>

Before HTML5, you had to use cookies for all this. But now, there is a Web API available that you can use to store all sorts of data. It’s called Web Storage API. Let’s take a deeper look into it.

## What is the Web Storage API?

It is a Web API that provides you with different functions to store key/value pairs in your browser. It is often referred to as DOM storage to store client-side data that you do not want to send with an HTTP request header.

Web Storage API is different from cookies because it provides more storage capacity. There are two types of Web Storage APIs:

-   Local Storage
-   Session Storage

Let’s take a look at them.

### Local Storage

It is a form of Web Storage API that lets you store data for longer durations. If an application’s local storage is not cleared out, it can stay in your browser forever. Although there is no expiration date with the local storage, it only stores strings. So if you are saving objects, arrays, etc, in the local storage, you will need to convert them to string using `JSON.stringify()` function.

Later, you would need to use `JSON.parse()` to convert this string to its original form.

### Session Storage

It is another type of storage that temporarily saves data in the web browser. The application data you save here gets cleared out after closing the browser or the tab. Like local storage, the data is not transferred to the server and is readily available on the client-side.

## Using Web Storage API

This piece will show you how you can use browser local storage to save and retrieve data. I am using VSCode. For this, create a folder and open it in your preferred code editor. Now create an HTML file called index.html in your project folder.

Create a basic HTML boilerplate. Now copy and paste the following code inside your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Web Storage API</title>
	</head>
	<body>
		<div>
			<p id="para"></p>
		</div>

		<script></script>
	</body>
</html>
```

### Writing Data To Local Storage

You can access the browser local storage using the global `window` object or directly use it using the `localStorage` object. The `localStorage` object provides you with a `setItem` method that takes two parameters. The first parameter is the name of the key. And the second one is the data you want to assign to this key.

<LearnLocalStorage showWriteOperation />

Once you click on the submit button, right-click on this page and open the chrome developer tools. Go to the Application tab and select Local Storage from the sidebar. You will see that, among other data, it has a key-value pair with the `key` for the name of the key and the value that you have stored.

![Write To Local Storage](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1474911ae42073cc6622b4d86d0d1a7290b15b55/guides/posts/web-storage-api/images/write.png)

### Reading Data From Local Storage

Retrieving data from the local storage is as simple as writing to it. You can achieve this by using the `getItem` method that `localStorage` object provides you.

<LearnLocalStorage showReadOperation />

### Removing Data From Local Storage

The `localStorage` object provides you with a `removeItem` method that takes a parameter. The parameter’s value is the key you want to remove from your local storage.

<LearnLocalStorage showRemoveOperation />

Once you have clicked the submit button, open the chrome developer tools again and look at the local storage. You will see that the key-value pair you created above has been removed from the storage.

![Remove From Local Storage](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1474911ae42073cc6622b4d86d0d1a7290b15b55/guides/posts/web-storage-api/images/remove.png)

You can use the session storage as well. It provides you with all the same functions that local storage gives you. But to use session storage, you would need to append these functions with `sessionStorage` instead of `localStorage`.

That’s all, folks! I hope this brief guide has provided you with enough knowledge that now you can use the Web Storage API in your projects.
