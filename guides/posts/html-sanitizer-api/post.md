---
title: What is HTML Sanitizer API?
description: "HTML Sanitizer API provide developers with different methods to handle user-controlled HTML, preventing direct script execution upon injection. In this piece, let's briefly look at it."
publishedDate: 2022-03-06T19:27:34.794Z
lastModifiedDate: 2022-03-06T19:27:34.794Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - html-sanitizer-api
    - api
coverImage: ''
---

<Lead>

When developing web applications that take input, we need to ensure that the user is not providing any illegal string. Each input field needs proper validation implemented on it. Otherwise, it can fall prey to attacks like SQL injection, cross-site scripting (XSS), etc.

</Lead>

The developers often use regular expressions to clean all the HTML code from the user input. Although it is an excellent way to get the job done, there is still a possibility that you might end up with some HTML code or other executable illegal lines of code.

The browser provides many web APIs to developers for different purposes. Among them, the HTML Sanitizer API is used for sanitizing the input string. Let’s briefly look at it.

## HTML Sanitizer API

The API allows the user to reduce the risk of DOM-based cross-site scripting attacks. It achieves this by providing developers with different methods to handle user-controlled HTML, preventing direct script execution upon injection. It is an experimental API that still lacks the support of major web browsers.

The HTML Sanitizer API also allows developers to override the default elements and attributes. It also makes the HTML output safe for use within the current user agent.

## Available Methods

This API exposes three methods to the developers. Let’s quickly look at each of them.

### setHTML

You can use this method to sanitize the HTML string and then insert it into the DOM as a child of the current element. When adding HTML, the `setHTML` method should be used instead of the `innerHTML` to add untrusted data.

### sanitizeFor

This method will sanitize the string for you by removing all the HTML or executable scripts for later insertion in the DOM.

### sanitize

This method is used to sanitize the data in a [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment).
