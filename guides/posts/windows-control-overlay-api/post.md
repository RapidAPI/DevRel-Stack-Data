---
title: Introduction To Windows Control Overlay API
description:
    This web API is designed to hide the default title bar in a PWA so you can
    customize the area according to your choice. This helps to provide a more of
    an app-like feel than software running inside a window. Let's take a look at
    this API in this piece.
publishedDate: 2022-04-18T19:41:10.107Z
lastModifiedDate: 2022-04-18T19:41:10.107Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - windows-control-overlay-api
    - api
coverImage: ''
---

<Lead>

Progressive Web Apps (PWAs) are increasingly gaining popularity because they are designed in a way that makes them capable, reliable, and installable. This significantly improves the site’s performance and provides a better experience. Due to this reason, more and more developers are turning their websites into PWA.

</Lead>

Seeing how everyone builds PWAs, multiple web APIs exist to provide PWA-specific features. Let’s look at one such web API in this piece.

## Windows Control Overlay API

This web API is designed to hide the default title bar in a PWA so you can customize the area according to your choice. This helps to provide a more of an app-like feel than software running inside a window.

PWAs need a web manifest file to work. This file holds all its metadata. To use Windows Control Overlay API, you need to set up the value of `display_override` to `window-controls-overlay` in this web manifest file. Otherwise, the API will not work. Also, the application must be installed on a desktop operating system.

## Interface

The API provides a single interface. Let’s look at it.

### WindowControlsOverlay

It is used to get the geometry and visibility of the title bar of your PWA. The interface provides an event listener that fires when the geometry of the title bar changes, along with a method to get the size and position of the title bar. It also contains a property that tells if the windows control overlay is visible or not.

## Support

It is an experimental API not yet supported on Firefox and Safari. You can only use it inside Chrome, Edge, and Opera. So it is a good idea if you have coded a form of a fallback in case the API fails. For this, you can simply wrap your API code inside the following code block:

```js
if ('windowControlsOverlay' in navigator) {
	// works
} else {
	// fallback
}
```
