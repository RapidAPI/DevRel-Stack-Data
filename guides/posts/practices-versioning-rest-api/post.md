---
title: Best Practices for Versioning REST APIs
description: To version REST APIs, there are some practices that should be followed. Let's take a look at some of them.
publishedDate: 2021-10-07T17:01:53.644Z
lastModifiedDate: 2021-10-07T17:01:53.644Z
authors:
  - saad
categories:
		- best-practices
tags:
    - best-practices
coverImage: ''
---

<Lead>
	The REST API is used to get data from the server. The client requests a
	record, the API takes that request to the server, the server fetches the
	record from the database, and lastly, the REST API brings it back to the
	client.
</Lead>

You develop a REST API when you are building a full-stack application. You can also build public REST APIs and monetize them using [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

You need to version your REST API every time you introduce a breaking change. This gives your API consumers time to update to the latest version while their products are still active.

Let’s take a look at some of the best practices for API versioning.

## Backward Compatibility

It is an excellent practice to have your API backward compatible. If your API user is not interested in moving to the latest version, they should have something to use and get by with it. Otherwise, they would have to migrate to the newest version even if they don’t need it.

## Adding Version To URI

While creating new versions of your API, you should add the version number in your API URI. This will provide readability to your API consumers, and they will know which version of API they are using at the moment.

## Use Semantic Versioning

You use semantic versioning to version your API, i.e., major.minor.patch. If you have introduced some major changes that would break the previous version, you should update the major version like 2.0.0. You update the minor one when you make some new changes, but they are not breaking the previous release. And lastly, if you are patching some bug, update the patch number.

## Up-to-date Documentation

Since you are creating different versions, you must keep your API documentation up-to-date. Also, make sure you write documentation based on the API version and separate documentation for each version. This way, the users who are still using the old version can look up anything they need from your API.
