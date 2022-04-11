---
title: Interactive Guide to Encoding API
description: "This web API allows you to encode and decode string values. In this piece, let's take a look at what Encoding API is and how you can use it in your web apps."
publishedDate: 2022-01-31T06:56:48.520Z
lastModifiedDate: 2022-01-31T06:56:48.520Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - encoding-api
    - api
coverImage: ''
---

<Lead>

When managing a huge platform, you need to protect your user data. Otherwise, you can find yourself fighting legal battles. Encrypting your data is generally the way to go. You can also encode your data when you have to give data access to a third party while hiding some sensitive files.

</Lead>

JavaScript provides a built-in API that lets you encode and decode your data. It’s called Encoding API. Let’s look at what it is and how you can use it in your web applications.

## Encoding API

This web API allows you to encode and decode string values. It is simple and provides four interfaces, each with different functions.

### TextEncoder

It is one of the four interfaces of the Encoding API. It takes a string value and converts it into UTF-8 bytes. Here is how you use it:

```js
const encoder = new TextEncoder();
const encodedUnitArr = encoder.encode('RapidAPI');
console.log(encodedUnitArr);
```

The result will be a Uint8Array saved in the `encodedUnitArr` variable.

### TextDecoder

This interface takes either a Uint8Array, Int8Array, Uint16Array, Int16Array, or Int32Array, and decodes it to its original string value. Here is how you use it:

```js
const encoded = new Uint8Array([82, 97, 112, 105, 100, 65, 80, 73]);

const decoder = new TextDecoder();
const decodedString = decoder.decode(decoder);
console.log(decodedString);
```

### TextEncoderStream

TextEncoderStream is the streaming equivalent of TextEncoder. It converts a stream of strings into bytes in the UTF-8 encoding.

### TextDecoderStream

The TextDecoderStream interface of the Encoding API converts a stream of strings into bytes in the UTF-8 encoding. It is the streaming equivalent of TextDecoder.
TextDecoderStream is the streaming equivalent of TextDecoder. It converts a stream of strings into bytes in the UTF-8 encoding.

## Support

The Encoding API supports all modern browsers, including Chrome, Firefox, Edge, Opera, and Safari. Older browsers like Internet Explorer do not support it.

## Usage

Let’s look at how you can use this API in your web applications.

### Step #1

You need to create a project. For this, create a folder on your computer and open it in your preferred code editor.

### Step #2

Once you are done, create a file called `index.html` in your project directory and add basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Encoding API</title>
	</head>
	<body></body>
</html>
```

### Step #3

Create a `script` tag at the end of the body tag and copy-paste the following code there:

```html
<script>
	// encoding text
	const encoder = new TextEncoder();
	const encodedArray = encoder.encode('Hello world');
	console.log(encodedArray);

	// decoding text
	const decoder = new TextDecoder();
	const decodedString = decoder.decode(encodedArray);
	console.log(decodedString);
</script>
```

You can see how I am using Encoding API via its two interfaces. Here is also a quick interactive demo of the encoding API.

<LearnEncodingAPI showEncode />

You can also decode an encoded string:

<LearnEncodingAPI showDecode />

## Wrap Up

That’s all, folks! I hope this brief guide has provided you with enough knowledge that now you can use the Encoding API in your projects.
