---
title: What is Intersection Observer API?
description: "The Intersection Observer API provides you a DOM element’s visibility access relative to another element. Let's briefly look at the API and some of its use cases."
publishedDate: 2022-02-27T14:45:59.314Z
lastModifiedDate: 2022-02-27T14:45:59.314Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - intersection-observor-api
    - web-api
    - api
coverImage: ''
---

<Lead>

There are multiple times when you need to manipulate a DOM element based on another element. You might be working on lazy loading the website’s images or infinite scrolling. Both these features require you to access the visibility of the DOM element.

</Lead>

Fortunately, a web API exists to help you with this. It’s called Intersection Observer API. Let’s briefly look at it.

## Intersection Observer API

As the name suggests, it is an Observer API. The Observer APIs notices changes in real-time. This API observes an element intersection with another element and then fires a callback function when it occurs.

The Intersection Observer API provides you a DOM element’s visibility access relative to another element. It is asynchronous and observes the changes in a DOM element. The API has several use cases but is mostly used for the following:

-   Lazy Loading
-   Infinite Scrolling
-   Visibility of advertisement
-   Executing Animations

Let’s discuss all of them.

### Lazy Loading

It is a process where the images are rendered on the screen when visible on the viewport. The browser fetches the site’s code but does not fetch the assets. When the user sees the part of the screen with an image, the browser calls the server, fetches the image, and renders it on the screen. Since all this involves getting the element in the viewport, Intersection Observer API comes into the picture.

### Infinite Scrolling

It is good to request data from the API when it is about to be rendered on screen. This improve’s the site’s performance as the data that the user might not see won’t render on the screen beforehand. Since this involves the visibility of a DOM element, the intersection observer API can help with this by making the API calls when a particular element is in the viewport.

### Visibility of Ads

You charge to put ads on your website. To bill the company, you need to have proof to show them how many people have seen their ad. If the ad is somewhere bottom, you can not charge the company if the user has not seen it.

### Executing Animations

This API helps you animate your content as you scroll down the page.
