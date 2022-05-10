---
title: Different Storage Web APIs
description: There are different web APIs that let you save data inside the browser and then later retrieve it. Each has its own purpose. In this piece, let's shed some light on it.
publishedDate: 2022-05-10T15:20:42.091Z
lastModifiedDate: 2022-05-10T15:20:42.091Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - web-storage-api
    - indexeddb-api
    - cookie-api
    - web-api
coverImage: ''
---

<Lead>

When building websites, developers often consume multiple web APIs for adding different functionalities. The browsers provide these APIs, which can be accessed through various methods. The DOM and fetch API are among the popular web APIs that most developers have used more than once.

</Lead>

Among these browser-provided APIs, a few let you save data inside the browser and retrieve it later. For instance, the Web Storage API, the IndexedDB API, Cookie API, etc. Let’s look at these different storage APIs.

## Web Storage API

​​It is a Web API that provides you with different functions to store key/value pairs in your browser. It is often referred to as DOM storage to store client-side data that you do not want to send with an HTTP request header.

Web Storage API is different from cookies because it provides more storage capacity. There are two types of Web Storage APIs:

-   Local storage
-   Session storage

### Local Storage

It is a form of Web Storage API that lets you store data for longer durations. If an application’s local storage is not cleared out, it can stay in your browser forever. Although there is no expiration date with the local storage, it only stores strings. So if you are saving objects, arrays, etc, in the local storage, you will need to convert them to strings using the `JSON.stringify()` function.

### Session Storage

It is another type of storage that temporarily saves data in the web browser. The application data you save here gets cleared out after closing the browser or the tab. Like local storage, the data is not transferred to the server and is readily available on the client-side.

## IndexedDB API

It is a Web API that provides you with a non-relational database right inside your browser. It has object stores that can be used to store almost anything from JavaScript objects to files to blobs, etc. You can also perform transactions on IndexedDB.

IndexedDB is a low-level API for client-side storage of a significant amount of structured data. It uses indexes to do high performant searches of this data.

## Cookie API

A cookie is data from a specific website stored on the client’s computer while they are browsing the Internet. The HTTP cookie or the web or browser cookies saves the data that is sent by the server to the web browser.

There are multiple use places where you can utilize cookies, but they are primarily used for three things, i.e., session management, personalization, and tracking. The session management includes whether the user is logged in and other data related to a session. You can also let your user personalize your site according to their preferences. You can store the user preference in the cookies. Cookies are also used for tracking users to know whether the person visiting the site is unique or the same one.

## Wrap Up

These are some of the storage APIs provided by the browsers. They are used widely in web development for storing data that does not need to be saved inside the database. So go ahead and try them out yourself.
