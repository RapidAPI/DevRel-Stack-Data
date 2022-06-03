---
title: What is Selection API?
description: This web API provides you with the user-selected node so you can perform actions on it. These actions can be anything from hiding the node, expanding it, manipulating it, or deleting it. In this piece, let's look at the API and its interfaces.
publishedDate: 2022-06-03T15:20:42.091Z
lastModifiedDate: 2022-06-03T15:20:42.091Z
authors:
    - saad
categories:
    - api
    - web-apis
tags:
    - selection-api
    - web-api
    - api
coverImage: ''
---

<Lead>

A website is full of interactive features that are made possible using JavaScript. If you are not using any framework, you will have to rely on vanilla JavaScript to add interactivity and transitions to your website. Fortunately, several browser-provided web APIs exist that can help you with it. If you want to use a public REST API to add data to your website, you can visit [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It has over 35000+ APIs that can get you the data you need.

</Lead>

<Callout
	title="Sign Up To Find Thousands of APIs"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/hub"
>
	RapidAPI Hub is the world’s largest API hub, where you can find different
	APIs according to your needs.
</Callout>

Sometimes, you want to manipulate the user-selected text or element when building web applications. You can go about it in two ways: write code from scratch or use Selection web API.

## Selection API

This web API provides you with the user-selected node so you can perform actions on it. These actions can be anything from hiding the node, expanding it, manipulating it, or deleting it. The node can also be deselected using the API. It is handy when you have to add one-on-one user interaction with the DOM element as they go by selecting it.

Here is a quick demo to get things into perspective:

<LearnUIEventAPI showSelect />

Here, I have just logged a string on the console, but you can do a lot more with the selected DOM node/s.

The Selection API provides five interfaces; each has a specific purpose:

### Selection

This interface is used to interact with the selection associated with the document. It tells the developer which part of the document the user has selected.

### Document.getSelection()

This method provides you the information about the current selection on the web document level.

### Window.getSelection()

This method provides you with information about the Windows level's current selection.

### Document.selectionchange

This method is triggered when the selection is changed. It means the user either adds more to the current selection, deselects the current selection, or selects again.

### Document.selectstart

This method executes when the user starts selecting a new DOM element.

## Support

The Selection API is supported across all modern web browsers, including Safari, Firefox, Chrome, and Opera.
