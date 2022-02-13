---
title: How to handle CORS in Flask?
description: Flask is a Python Framework that you can use to write backend code. In this piece, we will talk about how to handle CORS in Flask.
publishedDate: 2022-02-13T18:31:12.981Z
lastModifiedDate: 2022-02-13T18:31:12.981Z
authors:
    - saad
categories:
    - http
tags:
    - flask
    - cors
    - api
coverImage: ''
---

<Lead>

You often choose a technology based on your requirements. For instance, you can have a JavaScript frontend with a Python backend, or you can have Python running on both the frontend and the backend altogether. There is hardly any limitation.

</Lead>

While we can use any pair of technologies, we also need to ensure that we take care of certain limitations. One of them is CORS.

In this piece, let’s look at how we can handle CORS in a Flask backend.

## Cross-Origin Resource Sharing (CORS)

CORS is a mechanism implemented by browsers to block requests from domains other than the server's one. When a browser makes a request, it adds an origin header to the request message. If it goes to the server of the exact origin, it is allowed by the browser, and if it does not, the browser blocks it.

We have written a more detailed guide on CORS that you can find [here](https://RapidAPI.com/guides/cors?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

## Handling CORS in Flask Backend

There is already a package that exists to handle CORS in Flask backend. It’s called [flask-cors](https://flask-cors.readthedocs.io/en/latest/) and is used by more than 100k projects.

I will step-by-step guide you on how you can use the `flask-cors` package to handle CORS in your backend.

### → STEP #1

I hope you have a [Flask](https://www.fullstackpython.com/flask.html) backend set up. Open the terminal and type in the following command. Once you are done, press Enter.

```sh
pip install flask-cors
```

This command will download and install `flask-cors` package in your project.

### → STEP #2

Now open your server’s entry point file and import `flask-cors` at the top. Here is how you can do it:

```py
from flask_cors import CORS
```

### → STEP #3

It is simple to use this package. Just copy-paste the following code in your server’s entry point file:

```py
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
```

This will enable CORS for all domains and all routes.

## Wrap Up

This was a brief introduction to handling CORS in your Flask server. You can read the [documentation](https://flask-cors.corydolphin.com/en/latest/api.html#extension) of `flask-cors` package for a more in-depth idea.
