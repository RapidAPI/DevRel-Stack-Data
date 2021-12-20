---
title: Introduction To JavaScript APIs For WebExtensions
description: A browser extension is often a combination of background scripts and content scripts. You use different JavaScript APIs in both these files.
publishedDate: 2021-12-20T08:44:15.446Z
lastModifiedDate: 2021-12-20T08:44:15.446Z
authors:
    - saad
categories:
    - api
tags:
    - javascript
    - api
    - web-extensions
coverImage: ''
---

<Lead>

When building websites, browser extensions, Progressive Web Apps (PWAs), you rely extensively on APIs. These APIs are written in different languages depending on their types. Browser APIs are written in JavaScript and can be accessed via the namespace the browser supports. They are often used to develop web extensions.

</Lead>

## JavaScript APIs For WebExtensions

A browser extension is often a combination of background scripts and content scripts. You use different JavaScript APIs in both these files when developing an extension. These APIs are not limited to just these script files. When creating any browser actions or page action popups, sidebars, or new tab pages, you can also use them.

There are many JavaScript APIs available to you. And to use the more powerful APIs, you need to request permission from your browser. If it is an extension, you can do this in the `manifest.json` file.

### Different Namespaces

To use these JavaScript-based WebExtension APIs, you must access them via a namespace. The chrome supports `chrome` namespace with callbacks instead of promises for asynchronous functions. On the contrary, Firefox provides both `chrome` and `browser` namespace, including the support for callbacks and promises. The chrome supports `chrome` namespace with callbacks instead of promises for asynchronous functions.

At this time, Microsoft Edge uses only the `browser` namespace with no support for promise-based asynchronous APIs.

## Example

Let’s take a look at some of the JavaScript-based WebExtension APIs:

### Bookmarks

This [API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) lets you manipulate and interact with the browser’s bookmarking system. Using this API, you can bookmark different pages, edit, remove, or organize the browser bookmark.

### Browser Action

This [API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) lets you add a button to your browser toolbar.

### Alarms

You can use this [one](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms) to execute a particular piece of your browser extension code at a specific time of the day.

### Cookies

This [API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies) lets you set cookies, get them when needed.

### History

You can interact with the browser history using this [API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

### Page Action

[It](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) lets you add a clickable icon inside the browser’s address bar.
