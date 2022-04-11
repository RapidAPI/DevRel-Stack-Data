---
title: What is CSS Object Model?
description: "Like the Document Object Model that manipulates the viewport, the CSS Object Model lets you control the CSS from JavaScript. In this piece, let's briefly look at CSS Object Model API."
publishedDate: 2022-01-31T06:56:48.520Z
lastModifiedDate: 2022-01-31T06:56:48.520Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - css-object-model-api
    - api
coverImage: ''
---

<Lead>

You often change website styles based on certain conditions when building a web application. JavaScript helps you achieve this by providing you with different features and APIs. Among several Web APIs, there is one that is dedicated to CSS. Let’s take a look at it.

</Lead>

## CSS Object Model (CSSOM)

Like the Document Object Model that manipulates the viewport, the CSS Object Model lets you control the CSS from JavaScript. It provides you with a set of APIs that you can use.

Let’s take a look at some of these APIs.

### MediaQueryList API

MediaQueryList API lets you define a viewport size below which it fires the function provided to it. This API saves the information on a media query that is applied to a document. It does this by taking a string parameter where the developer defines the viewport size.

You can receive events in the function that is called using this API. The event has a matches property that returns true if the viewport matches the media query list. Otherwise, it returns false.

<LearnMediaQueryListAPI />

### FontFace

It is another API that lets you control the font face source. The source can be a URL to an external resource or a buffer. Using this API, you can also control when the font is loaded on the screen and its current status.

```js
const fontFace = new FontFace('Lato', 'url(https://example.com/lato.woff2)');
```

The FontFace API provides you with different properties too. For instance, `.family` property returns the font family name.

### Screen

This API provides information about the screen on which the site is rendered. You can access it via the `window.screen` property.

```js
const screenInfo = window.screen;
console.log(screenInfo);
```

It will return an object that will contain information about the screen like its orientation, pixel depth width, height, color depth, etc.
