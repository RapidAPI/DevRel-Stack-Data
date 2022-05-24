---
title: How to make API calls in Java?
description: Since Java is one of the most popular languages out there, it is essential to learn how to make API calls in it so that when the need arises, you can get data from an external source in your Java app. In this piece, we will learn how to make API calls in Java.
publishedDate: 2022-05-24T02:53:28.085Z
lastModifiedDate: 2022-05-24T02:53:28.085Z
authors:
    - saad
categories:
    - api
tags:
    - api-call-java
    - api-call
    - api
coverImage: ''
---

<Lead>

The REST APIs are used for fetching data from an external source. You can code the logic for calling an API in almost any programming language. In this piece, we will learn how to call an API in Java. So without any further ado, let’s jump in!

</Lead>

## Java

It is a multi-purpose object-oriented language that runs on more than 3 billion devices. You can build all types of things in Java, from web apps to mobile apps to desktop applications. You can even write games in Java. It is an open-source language that is free, fast, and powerful. The language is intended to build cross-platform applications where developers have to write code only once, and the app works on all operating systems.

## Making API calls in Java

Since Java is one of the most popular languages out there, it is essential to learn how to make API calls in it so that when the need arises, you can get data from an external source in your Java app. To make things simpler, I have divided the process into a bunch of steps to make it easy for you to go through.

### → STEP #1

Let’s find an API that we can use. For this piece, I will use [Jokes API by API-Ninjas](https://RapidAPI.com/apininjas/api/jokes-by-api-ninjas?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel), but you can use any API you like.

The API I have selected is a free one, so you do not need to subscribe to it. However, you will need your RapidAPI key. So go ahead and save the value of `x-rapidapi-key` to use later.

### → STEP #2

Java needs a compiler to compile its code. Without it, your code will not run. So before we do anything, click on this [link](https://www.oracle.com/java/technologies/downloads/) and download the Java SDK for your operating system. Once it is downloaded, go ahead and install it.

To check everything has taken place as expected, open your terminal and run the following command:

```sh
javac –version
```

You should see a version number when you run the command. If you don’t, please restart your system.

### → STEP #3

The Java files have an extension of `.java`. So, go ahead and open your preferred code editor and create a `call.java` file inside it. It will give you an empty Java file.

### → STEP #4

We will use the HttpRequest package from the Java SDK to create an API call. So let’s import it at the top of the file.

```java
import java.net.http.HttpRequest;
```

To handle the response we will receive from the HttpRequest package, we have to use the HttpResponse package.

```java
import java.net.http.HttpResponse;
```

Now to send the API call, we would need to import another package. So let’s do it.

```java
import java.net.http.HttpClient;
```

Let’s import the Java `IOException` package to handle exceptions in our code.

```java
import java.io.IOException;
```

### → STEP #5

Now create a class, and inside it, write the main function. You can copy the code snippet below to do it.

```java
class call {
	public static void main(String[] args) {
	}
}
```

Now let’s create an HttpRequest builder to add all the things we will need to call an API.

```java
class call {
	public static void main(String[] args) {
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes"))
				.header("X-RapidAPI-Host", "jokes-by-api-ninjas.p.rapidapi.com")
				.header("X-RapidAPI-Key", "your-rapidapi-key")
				.method("GET", HttpRequest.BodyPublishers.noBody())
				.build();
	}
}
```

You can see that we have created a builder, giving it the API endpoint by passing it as a parameter to the `uri` method. Afterward, we set the header values to provide details like API host and API key. You should replace the value of `X-RapidAPI-Key` with the value you saved earlier in step #1.

Now we need to create a simple HttpResponse variable to save to the response we will receive from the API.

```java
class call {
	public static void main(String[] args) {
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes"))
				.header("X-RapidAPI-Host", "jokes-by-api-ninjas.p.rapidapi.com")
				.header("X-RapidAPI-Key", "your-rapidapi-key")
				.method("GET", HttpRequest.BodyPublishers.noBody())
				.build();
		HttpResponse<String> response = null;
	}
}
```

Finally, we need to send the API call. The HttpClient package will be used here.

```java
class call {
	public static void main(String[] args) {
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes"))
				.header("X-RapidAPI-Host", "jokes-by-api-ninjas.p.rapidapi.com")
				.header("X-RapidAPI-Key", "your-rapidapi-key")
				.method("GET", HttpRequest.BodyPublishers.noBody())
				.build();
		HttpResponse<String> response = null;
		try {
			response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println(response.body());
	}
}
```

Error handling while making API requests is essential. That’s why I have enwrapped the API request within a try/catch block because the call can fail, leading to an error. Now go ahead and run this file in the terminal. It will make an API call and print the response in the terminal.

## Wrap Up

This is how simple it is to call APIs in Java. I hope you have learned something from this piece, and now you can call APIs in your Java applications.
