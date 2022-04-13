---
title: Introduction To Web Speech API
description:
    The API lets you perform two actions. The first is text-to-speech and the
    second is speech recognition. In this piece, let's take a look at what it is
    and how you can use it.
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - web-speech-api
    - api
publishedDate: 2022-04-13T13:15:14.774Z
lastModifiedDate: 2022-04-13T13:15:14.774Z
coverImage: ''
---

<Lead>

Sometimes, the developers have to add accessibility features to their website. These features help people with special needs to properly navigate the web application and thus, dramatically improve the site’s user experience.

</Lead>

One such accessibility feature is integrating speech recognition. It lets the user perform some actions using only their voice. Such a feature is handy for blind people who need your services and can’t properly use your website.

There are multiple ways you can add speech recognition to your websites. The simplest one is using the default web API. Let’s take a look at it.

## Web Speech API

The API lets you perform two actions. The first is text-to-speech, where the program can read out a piece of content for the user. It can help out someone who either can not read or see. The second is speech recognition which takes the user’s voice as input and performs specific actions accordingly.

The Web Speech API provides several interfaces. The text-to-speech uses the `SpeechSynthesis` interface that offers different methods for reading text. In contrast, speech recognition uses `SpeechRecognition` interface to perform actions.

## Usage

Let's quickly look at how you can use this API in your websites.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Web Speech API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Create two buttons. One will start the speech recognition, and the other will abort it.

```html
​​<button id="start-btn">Start Button</button>
<button id="abort-btn">About Button</button>
```

### → STEP #3

Now let’s add event listeners on both these buttons.

```html
<script>
	const grammar =
		'#JSGF V1.0; grammar cars; public <cars> = audi | BMW | ferrari | cadillac | chevrolet;';
	const recognition = new webkitSpeechRecognition();
	const speechRecognitionList = new webkitSpeechGrammarList();
	speechRecognitionList.addFromString(grammar, 1);
	recognition.grammars = speechRecognitionList;

	const start = document.getElementById('start-btn');
	const abort = document.getElementById('abort-btn');

	start.addEventListener('click', function () {
		recognition.start();
		console.log('Give the name of a car.');
	});

	abort.addEventListener('click', function () {
		recognition.abort();
		console.log('Speech recognition aborted.');
	});
</script>
```

The start button, when clicked, will start listening to the user for speech commands. It can be stopped using the abort button.

## Support

You can use this API on all major internet web browsers except desktop and mobile versions of Firefox and Opera. You will need to set up a fallback for these two browsers, so your application does not break.
