---
title: Basic Concepts of REST API
slug: rest-api-concepts
description: 'Other than the internal working, you need to know a few basic concepts to have a grip on REST APIs. Let’s take a look at them.'
publishedDate: 2021-11-19T18:41:43.732Z
lastModifiedDate: 2021-11-19T18:41:43.732Z
authors:
    - saad
category: api
tags:
    - rest-api
    - api
coverImage: ''
draft: false
---

<Lead>

REST API is most often used to handle communication between two machines. There is a client and a server. When a client needs some data, it requires the server to send it. The client requests the server via a REST API, and the REST API provides the application with the communication feature.

</Lead>

Other than the internal working, you need to know a few basic concepts to have a grip on REST APIs. Let’s take a look at them.

## Base URL

A REST API itself is a URL that you request for information. This URL is further divided into two parts. The first one is the base URL, and it is the URL found in the address bar of the front page of a website. The piece of string common across all URLs of a website is its base URL.

Because of the uniqueness of a website URL, all REST APIs need this part in their address, so no other API has the same URL.

```sh
https://baseurl
```

## Endpoint

An API can provide you with multiple resources. You may need it to fetch some data, or you may want to update some records in the database. The endpoints come after the base URL, allowing you to perform different operations using the REST API. For instance, one endpoint’s job is to get you some data, and the other endpoint is used to delete some data from the database.

```sh
https://baseurl/endpoint
```

## Resource

The resource is the application data that you manipulate using the REST API. You can perform CRUD (Create, Read, Update, and Delete) operations on this data.

## HTTP Methods

The HTTP methods are the functions you use to request your server perform a particular operation. There are several HTTP methods out there. But the most common that are also used for CRUD operations are GET, PUT, POST, and DELETE.
