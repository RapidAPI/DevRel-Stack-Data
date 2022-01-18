---
title: Interactive Guide To Cookie API
description: A cookie is data from a specific website stored on the client’s computer while they are browsing the Internet. In this piece, let's take a look at what cookie API is and how you can use it in your web applications.
publishedDate: 2022-01-17T04:02:09.132Z
lastModifiedDate: 2022-01-17T04:02:09.132Z
authors:
    - saad
categories:
    - interactive
tags:
    - cookie
    - api
coverImage: ''
---

<Lead>

A web application requires storage inside the browser to save its data. It can be website-specific data like login details or search history so other sites can use it to provide a better user experience. There are different ways a developer can implement all these. When it comes to browsers, there are multiple types of storage available like the [local storage](https://RapidAPI.com/guides/web-storage-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) or the [Indexeddb](https://RapidAPI.com/guides/indexeddb-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

</Lead>

In a cookie, you can save data that can be used for that particular domain. Let’s take a deeper look at it.

## Cookies

A cookie is data from a specific website stored on the client’s computer while they are browsing the Internet. The HTTP cookie or the web or browser cookies saves the data that is sent by the server to the web browser.

Before the local storage and other client-side browser storage were available, cookies were widely used to save data on the user’s side. Although this works, there is a severe repercussion to it. Cookies are sent with every request to the server, which decreases the site’s performance and consumes more bandwidth.

There are multiple use places where you can utilize cookies, but they are primarily used for three things, i.e., session management, personalization, and tracking. The session management includes whether the user is logged in and other data related to a session. You can also let your user personalize your site according to their preferences. You can store the user preference in the cookies. Cookies are also used for tracking users to know whether the person visiting the site is unique or the same one.

## Getting Started With Cookie API

You can set cookies by sending [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) HTTP response header to the user agent from the server, or you can use the `document.cookie` API.

Let’s look at how you can use cookies in a document context. Create a folder and open it in your preferred code editor. Now create an HTML file inside this project folder, and write down the basic boilerplate code.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Cookie API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### Setting A Cookie

You can set a cookie by assigning `document.cookie` a string value that the assignment operator separates.

<LearnCookieAPI showSetCookie />

Once you click on the submit button, right-click on this page and open the chrome developer tools. Go to the Application tab and select Cookies from the sidebar. You will see that, among other data, there are names and values that you have just entered and saved.

![Added cookies](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/543850dc152729797a102841c58e4bce9278f26c/guides/posts/cookie-api/images/cookie-added.png)

### Getting A Cookie Value

You can get all the cookies in a single string when you access the `document.cookie` API. As it is a string, you need to write a simple program to retrieve the value you are looking for in the cookie string. Here is an example:

<LearnCookieAPI showGetCookie />

If you have stored some data above, you will see it here when you click the submit button.

### Deleting A Cookie

You can remove a cookie using various techniques. You can set its expiration date on which it will automatically be removed from the browser. If you don’t want to do this, you can explicitly update its expiration date to zero or other already passed dates.

<LearnCookieAPI showDeleteCookie />

![Cookies Deleted](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/543850dc152729797a102841c58e4bce9278f26c/guides/posts/cookie-api/images/cookie-deleted.png)

You can set a cookie to be transmitted over a secure HTTPs connection by adding `Secure` at the end of the string value. There are also different ways to set a path to a particular cookie. For instance, cookie A will only be accessed when the user browses to https://example.com/abc path.

That’s all, folks! I hope this brief guide has provided you with enough knowledge that now you can use the Cookie API in your projects.
