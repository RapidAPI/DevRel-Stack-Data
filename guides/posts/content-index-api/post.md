---
title: What is Content Index API?
description: Content Index API maintains an index of all the available offline content. The developer adds its web application’s URL or metadata of the offline-capable pages to a local index that is maintained by the browser. In this piece, let's take a brief look at this API.
publishedDate: 2022-04-04T02:56:29.227Z
lastModifiedDate: 2022-04-04T02:56:29.227Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - content-index-api
    - web-api
    - api
coverImage: ''
---

<Lead>

Developers often cache their websites using Service Workers, Cache storage APIs, IndexedDB APIs, etc. These sites are available even if the user does not have a working internet connection. Progressive Web Apps are an excellent example of such kinds of web applications.

</Lead>

These offline applications are of no use for the users if they don’t know they exist. This is a difficult predicament for the developers since they have put extra work into making the web applications offline.

Fortunately, the browser provides an API that indexes the available offline content for users to see when they are not connected to the internet. Let’s take a quick look at this API.

## Content Index API

The problem I described above can be solved via the Content Index API. This web API maintains an index of all the available offline content. The developer adds its web application’s URL or metadata of the offline-capable pages to a local index that is maintained by the browser.

Once the information has been added, the user can see it inside the browser. For this, they would have to go to the browser's download page. On this page, all the available offline articles will be listed under the “ARTICLES FOR YOU” heading.

The API provides two interfaces. Let’s take a quick look at them.

### ContentIndex

You can use this interface to register your available offline content with the browser. It further provides three methods for adding, deleting, and getting all the entries in the content index of the browser.

### ContentIndexEvent

This interface defines an object that represents the `contentdelete` event. This event only fires when the content is deleted via the browser's user interface and not through the delete method of the `ContentIndex` interface.

## Support

The Content Index API is experimental and does not have support across the desktop versions of major web browsers like Chrome, Safari, Firefox, etc. Although, it currently supports mobile versions of Chrome, Opera, and Samsung Internet browser.
