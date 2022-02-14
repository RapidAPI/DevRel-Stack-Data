---
title: How to make API calls in Python?
description: "Python is one of today's most widely used programming languages with thousands of applications. In this piece, we will look at how you can make API calls using Python."
publishedDate: 2022-02-13T18:31:12.981Z
lastModifiedDate: 2022-02-13T18:31:12.981Z
authors:
    - saad
categories:
    - api
tags:
    - python
    - api
coverImage: ''
---

<Lead>

Python is one of today's most widely used programming languages with thousands of applications. It is not just limited to Machine Learning but also has several frameworks for web development. You can use Django to develop a full-stack web app or use Flask to develop your application’s backend with Python.

</Lead>

You cannot talk about web development without discussing the role of APIs. Before jumping into how you can use APIs in Python, let’s briefly look at it first.

## Application Programming Interface (API)

The Application Programming Interface (API) is like a middle man, connecting two sides; a waiter takes your order and brings you food. It is a channel that applications utilize to talk with each other. You put some information at one end, the API takes that information and gets back with a result.

We have extensively discussed APIs before, so if you are interested in looking at a few pieces, [click here](https://RapidAPI.com/guides/categories/api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

## Consuming APIs in Python

Early we have discussed Python and APIs. Now let’s look at how you can make API calls in Python. We will do this in a bunch of steps to make it easier to follow along. So let’s jump in!

### → STEP #1: Finding an API

Instead of looking up APIs on the Internet, let’s go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

Once you have logged in, you will see thousands of APIs at your call. I have already found a freemium [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that you can use.

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Random Facts API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-random-facts-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

### → STEP #2: Virtual Environment

Make sure you have [Python](https://www.python.org/downloads/) installed on your computer. Create a directory and open it in your preferred code editors. I am using VSCode.

You should create a virtual environment when working with Python so your packages are not installed globally. The virtual environment can be created using Python’s `virtualenv` package.

You can install this by opening your terminal and entering the following command there:

```sh
pip install virtualenv
```

This command will globally install `virtualenv` package on your computer. Now open your terminal again and type the following there:

```sh
virtualenv env
```

It will create an `env` directory with your virtual environment files. There is no need to change and open any files in the virtual environment.

There are different commands to activate the virtual environment on Linux and Windows. Choose the command from below that fits the bill for you:

```sh
# for linux
source env/Scripts/activate

# for windows
source env/bin/activate
```

Ensure you activate the virtual environment by running the command according to your operating system.

### → STEP #3: Installing Packages

Once your virtual environment is activated, install Python’s `requests` package by running the following command in the terminal:

```sh
pip install requests
```

It will install the `requests` package locally in your project.

### → STEP #4: Calling The API

Now create a file called `app.py` in the root directory of your project. Open this file and import the `requests` package at the top:

```py
import requests
```

On the [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) page, you will find code snippets of how you can use this API with different languages. Since we are using Python, let’s choose the `(Python) Requests` from the dropdown.

![Fetching data using (Python) Requests](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/12358f8428ac15dc4d086d097996102c07521587/guides/posts/make-api-call-python/images/code-snippet.png)

Copy the code snippet and paste it into your `app.py` file.

```py
import requests

url = "https://random-facts2.p.rapidapi.com/getfact"

headers = {
    'x-rapidapi-host': "random-facts2.p.rapidapi.com",
    'x-rapidapi-key': "YOUR-RAPIDAPI-HUB-Key"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)
```

Once you are done, run the code by opening the terminal and running the following:

```sh
python app.py
```

You will see a random fact from the API printed on the terminal. Once you are done, you can deactivate the virtual environment by running the following command:

```sh
deactivate
```

## Wrap Up

This guide was an introduction to consuming APIs in Python. We hope that now you can start using APIs in your awesome Python projects.
