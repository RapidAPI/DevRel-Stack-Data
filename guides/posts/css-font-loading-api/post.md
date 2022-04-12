---
title: What is CSS Font Loading API?
description: With CSS font loading API, we can load the fonts using JavaScript. Let's briefly look at what it is and how you can use it in your applications.
publishedDate: 2022-01-24T09:06:12.366Z
lastModifiedDate: 2022-01-24T09:06:12.366Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - css-font-loading-api
    - font-loading
    - api
coverImage: ''
---

<Lead>

A website consists of many different assets like images, styles, fonts. You can add an image to a site using the HTML `img` tag. Moreover, using stylesheets, you can make your site’s more visually appealing.

</Lead>

The fonts are usually imported into a website’s code either in the CSS or HTML files. But with CSS font loading API, we can also load the fonts in JavaScript.

## CSS Font Loading API

With `font-face`, your website will not load a font unless it is being used somewhere using `font-family` CSS property. This serves both ways. The font is not downloaded unnecessarily and, in turn, improves your website’s performance. The bad thing is we do not have control between the initial request and the font being rendered.

With CSS Font Loading API, you get events and interfaces for dynamically loading fonts inside JavaScript. It is a web API that you can use to render a font when you want it to be there. This API also allows you to track the download progress of the font and handle the lazy loading.

## How to use it?

The CSS Font Loading API provides you with three interfaces: `FontFace`, `FontFaceSet`, `FontFaceSetLoadEvent`. The first one is used to represent a single usable font. `FontFaceSet` is an interface for loading font faces and checking their download statuses. The last one is fired whenever a `FontFaceSet` loads.

### Step #1

The first step is representing a font. The following snippet can shed more light on how you can do this:

```js
const myFont = new FontFace(arg1, arg2, arg3);
```

The first argument is the font family, and the second is the source of the font. The third argument is optional. It is an object where you can define font style, weight stretch, etc.

### Step #2

Now you need to add this font face to the `FontFaceSet`. You can do this using the following code snippet:

```js
document.fonts.add(myFont);
```

### Step #3

The last step is loading the font whenever you need it.

```js
myFont.load();
```
