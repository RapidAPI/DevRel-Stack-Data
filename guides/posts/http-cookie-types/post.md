---
title: HTTP Cookies, Their Purpose, And Their Types
description: HTTP Cookies play a fundamental role on the Web. They are small pieces of data that are sent by a server and stored in the client's device. In this piece, let's look at their types and why they are important.
publishedDate: 2022-03-29T20:53:04.094Z
lastModifiedDate: 2022-03-29T20:53:04.094Z
authors:
    - ahmad-bilal
categories:
    - http
tags:
    - cookies
coverImage: ''
---

<Lead>
	HTTP Cookies play a fundamental role on the Web. They are small pieces of
	data sent by a server and stored in the client's device. There are many use
	cases associated with cookies. Let's take a look at what they are.
</Lead>

![What are HTTP Cookies?](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/http-cookie-types/images/cookies.png)

## HTTP Cookies

An HTTP cookie is a small piece of data created by the web server in the client’s device, typically the browser. Cookies essentially store a unique ID which is used for identification. They are sent to the server via the HTTP protocol. The server uses the cookie's ID to adjust the content according to the user.

![HTTP Cookies](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/http-cookie-types/images/detail.png)

It is worth noting that cookies are sent with every request to the server, affecting the site’s performance and bandwidth. So, it is critical to understand the purpose of cookies and their use.

### Alternatives to Cookies

Earlier, websites used cookies to store all kinds of data because there were no alternatives. However, they were not fit for all kinds of data because they were sent for every HTTP request. We now have alternatives like [Web Storage API](https://rapidapi.com/guides/web-storage-api) and [IndexedDB](https://rapidapi.com/guides/indexeddb-api). You can use these alternatives to store data you might not want in a database or a cookie.

So then, why are cookies used? Let's talk about their purposes.

### Purpose

You can use cookies for three primary purposes: session management, personalization, and tracking.

### Tracking

Cookies can also track users’ browsing activity to serve them target ads. For instance, if you are searching about cars on some websites, you may see ads about cars on some media websites later.

### Session Management

Have you ever wondered how your login information is still there when you revisit a website? Cookies make this possible via session management. Since HTTP is a stateless protocol, the browser and the server needs to main user sessions. Otherwise, they will be signed out every time they close the tab.

The server sends a message to the browser containing user information. It is stored as a cookie and later sent back to the server when the user accesses the website. The server uses the cookie information to retrieve the user session from the session database, and this is how the user sessions are maintained.

### Personalization

You can also use cookies to personalize your websites to improve user experience. For instance, they store preferences and settings that you set for a particular website.

![Purposes of HTTP Cookies](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/http-cookie-types/images/purpose.png)

## Types of Cookies

We can categorize cookies into different types based on their lifetime and purpose. Some of these types can overlap, and a cookie can belong to multiple types.

### Session Cookies

They are stored for a single session and are deleted when the current browser session ends.

### Persistent Cookies

Unlike session cookies, persistent cookies are not deleted when the session ends. Instead, each persistent cookie has a pre-determined expiration date which can be a few minutes, days, or even months after creation.

![Session and Persistent Cookies](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/http-cookie-types/images/types.png)

### Authentication Cookies

Cookies are commonly used for authentication. In cookie-based authentication, they identify the users and ensure that the correct user session sends sensitive information.

### Tracking Cookies

Tracking services record users' behavior on one or more websites and store it in tracking cookies. Then, when the user visits such a website again, these cookies are sent to the tracking service for analysis.

### Third Party and First-Party Cookies

First-party cookies belong to the same domain as the one the user visits. In comparison, third-party cookies belong to other domains and are used for tracking purposes.

That's pretty much it, and we hope this guide helped you understand HTTP Cookies and their types.
