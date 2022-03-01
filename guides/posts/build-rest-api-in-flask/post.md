---
title: How to build a REST API in Flask?
description: "Flask is a python micro-framework that is often used to write backend architecture. Let's take a look at how you can build a REST API using Flask."
publishedDate: 2022-02-27T14:45:59.314Z
lastModifiedDate: 2022-02-27T14:45:59.314Z
authors:
    - saad
categories:
    - api
tags:
    - build-rest-api-in-flask
    - rest-api
    - flask
    - api
coverImage: ''
---

<Lead>

REST APIs are crucial in a client-server architecture as they provide a communication channel between the two. The client puts a message on the API; the API takes the message to the server; the server performs some action and responds to the client via the same API. If the API is eliminated, the whole full-stack architecture will fail.

</Lead>

You often write REST API using the language or tech you have used on the server. If your server is written in Node.js, you write the REST API in JavaScript. If it’s Flask, you use Python.

This piece will discuss how you can write a simple REST API using Flask. We have also [written](https://RapidAPI.com/guides/build-rest-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) a guide about how you can build a REST API using Node.js and Express.js.

## Flask

Before we jump to building a REST API, let’s quickly look at [Flask](https://flask.palletsprojects.com/en/2.0.x/). It is a python micro-framework that is often used to write backend architecture. It is lightweight and lets you create an application using a single file. It does not require the developer to follow a particular directory structure and provides features like URL routing, template engine, etc.

## Building a REST API

Let’s go ahead and start building a REST API using Flask. We will do it in steps to make it easier to follow.

### → STEP #1

You can skip this step if you have already installed Python on your computer. If you haven’t, you can download the latest version from [here](https://www.python.org/downloads/). Afterward, install it on your computer.

### → STEP #2

Now create a directory on your computer and open it in your preferred code editor. Now open the terminal in the same directory.

### → STEP #3

You should create a virtual environment when working with Python, so your packages are not installed globally. The virtual environment can be created using Python’s `virtualenv` package.

You can install this by opening your terminal and entering the following command there:

```sh
pip install virtualenv
```

This command will globally install virtualenv package on your computer. After its done installing, run the following there:

```sh
virtualenv env
```

It will create an env directory with your virtual environment files. There is no need to change and open any files in the virtual environment.

There are different commands to activate the virtual environment on Linux and Windows. Choose the command from below that fits the bill for you:

```py
# for linux
source env/Scripts/activate

# for windows
source env/bin/activate
```

Ensure you activate the virtual environment by running the command according to your operating system. The virtual environment needs to be activated for the entire span of your development process.

### → STEP #4

Once the virtual environment is activated, install the `Flask` and `flask_cors` package. For this, run the following command in the terminal:

```sh
pip install Flask flask_cors
```

### → STEP #5

Now create an `app.py` file in your project directory and import the `Flask` and `flask_cors` packages at the top. Here is how you do it:

```py
# importing packages
from flask import Flask
from flask_cors import CORS
```

Now set up a Flask app and enable CORS by adding the following piece of code in your `app.py` file:

```py
# APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and server
CORS(app)
```

Last but not least, you need to create routes. Here is how you do it:

```py
# ROUTES
@app.route('/hello', methods=['GET'])
def getHello():
	return 'This is a GET request!'

@app.route('/hello', methods=['POST'])
def postHello():
	return 'This is a POST request!'

@app.route('/hello', methods=['PUT'])
def putHello():
	return 'This is a PUT request!'

@app.route('/hello', methods=['DELETE'])
def deleteHello():
	return 'This is a DELETE request!'
```

In the end, your `app.py` file will look something like this:

```py
# IMPORT
from flask import Flask
from flask_cors import CORS

# APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and server
CORS(app)

# ROUTES
@app.route('/hello', methods=['GET'])
def getHello():
	return 'This is a GET request!'

@app.route('/hello', methods=['POST'])
def postHello():
	return 'This is a POST request!'

@app.route('/hello', methods=['PUT'])
def putHello():
	return 'This is a PUT request!'

@app.route('/hello', methods=['DELETE'])
def deleteHello():
	return 'This is a DELETE request!'

if __name__ == "__main__":
    app.run(debug=True)
```

Now run the server by running the following command in the terminal:

```sh
python app.py
```

Go to this [URL](http://127.0.0.1:5000/hello). You will see a response like the following:

![GET request API response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0d3766e58cb90c02b1767767146c504a47fd58c5/guides/posts/build-rest-api-in-flask/images/response.png)

The GET request is executing because when you call an API via the browser’s address bar, it makes a GET request to the API.

## Wrap Up

That’s it. If you have followed along till now, you have successfully created a REST API using Flask and Python, and I hope this article improved your understanding of the REST APIs and Flask.
