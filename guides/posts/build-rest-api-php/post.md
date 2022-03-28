---
title: How to build a REST API in PHP?
description:
    PHP is a server-side language that is used to write backend code. In this
    piece, let's take a look at how you can build a fully working REST API in PHP.
publishedDate: 2022-03-28T10:39:40.509Z
lastModifiedDate: 2022-03-28T10:39:40.509Z
authors:
    - saad
categories:
    - api
tags:
    - rest-api-php
    - build-rest-api-php
    - rest-api
    - php
    - api
coverImage: ''
---

<Lead>

When building a website, you code the client and server separately. The client loads the website on the user’s device, whereas the server runs on some computer at a server company — both of these need to communicate for various reasons.

</Lead>

This communication takes place via a REST API. It is a type of API that acts as a bridge, a channel to let two entities communicate, which in this case is client and server. REST API provides endpoints (URLs) that you call to perform CRUD operations with your database on the server.

Previously, we have talked about [How to build a REST API in Node.js](https://RapidAPI.com/guides/build-rest-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [Flask](https://RapidAPI.com/guides/build-rest-api-in-flask?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). Today, we will learn how to set up a PHP server and write a small REST API using it. So without any further ado, let’s jump in!

## PHP

PHP was released back in 1994. It is a recursive acronym for “PHP: Hypertext Preprocessor”. It is a server-side language adopted by the likes of Meta for their product “Facebook”. WordPress, which powers [43%](https://kinsta.com/wordpress-market-share/) of the Internet, is written in PHP.

In PHP, you can integrate several databases, including MySQL, PostgreSQL, Oracle, Sybase, etc. It is simple, efficient, and provides great flexibility when developing servers.

## Building A REST API

Let’s go ahead and start building a REST API using PHP. We will do it in steps to make it easier to follow.

### → STEP #1

You can skip this step if you already have PHP installed on your computer. If not, you can download it from [here](https://www.php.net/downloads.php). Once downloaded, install it on your computer.

### → STEP #2

Since PHP is a server-side language, you need to set up a server. You can use any server you want. For this piece, I am using XAMPP, which you can download from [here](https://www.apachefriends.org/download.html). Install it once it is done downloading.

Afterward, run XAMPP and start the Apache Web Server.

![XAMPP server running](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/073701df2994e695675c66483e028eb733b2b35b/guides/posts/make-api-call-php/images/xampp-running.png)

### → STEP #3

Now navigate to where you have installed XAMPP. Inside it, you will find a directory called `htdocs`. Create a folder inside this directory called `rest-api`. Now open this directory in your preferred code editor.

### → STEP #4

Now create another directory called `server` inside `rest-api`. Inside this directory, create another directory called `api`, and then create a `hello.php` file inside `api` directory. In this file, you will write the routes. For this, copy and paste the following code there:

```php
<?php
header("Access-Control-Allow-Origin: *");

// get request method
$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
	echo "THIS IS A GET REQUEST";
}

if ($method == 'POST') {
	echo "THIS IS A POST REQUEST";
}

if ($method == 'PUT') {
	echo "THIS IS A PUT REQUEST";
}

if ($method == 'DELETE') {
	echo "THIS IS A DELETE REQUEST";
}
```

You can see that I have set the access control origin header to all. It means anyone can call this API. Afterward, I check for the request method to see which HTTP method the client makes the request.

When you have done everything, go to this [URL](http://localhost/rest-api/server/api/test.php). You will see a message like this one:

![GET Request API Response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/180df391d4e3e1845912234faaaa75c7e00fbdd8/guides/posts/build-rest-api-php/images/get-request.png)

The GET request is executing because when you call an API via the browser’s address bar, it makes a GET request to the API.

## Wrap Up

That is pretty much it. Now you know how to create a simple REST API in PHP. Now go ahead and start creating your own PHP-based REST APIs.
