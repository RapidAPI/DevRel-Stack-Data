---
title: What is File System Access API?
description: "The API provides you with an interface to read, write, and save files locally. Let's take a look at it and how it works in this piece."
publishedDate: 2022-02-27T14:45:59.314Z
lastModifiedDate: 2022-02-27T14:45:59.314Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - file-system-access-api
    - web-api
    - api
coverImage: ''
---

<Lead>

You often need to access the user’s local files or folders in your web apps. You might be building a code, text editor, or anything of the sort. There are countless use cases. Instead of writing code from scratch to handle files and directories, you can use the available file’s Web API. Let’s briefly look at it.

</Lead>

## File System Access API

The API provides you with an interface to read, write, and save files locally. It also helps you open a file picker window for selecting a file to read. This API is widely supported across browsers like Google Chrome, Microsoft Edge, Opera, Safari. Unfortunately, Firefox’s desktop and mobile versions and Opera mobile browser do not support this API.

## Usage

The following are steps to use this API in your websites:

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called index.html inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>File System Access API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now create a button in the `body` tag using the `button` tag. Give the element an id.

```html
<button id="btn">Open Picker</button>
```

### → STEP #3

Last but not least, write an event listener that will execute when the user clicks on the button created in the previous step. The listener callback function will be asynchronous and open a file picker. From here, the user can select a file or directory.

```html
<script>
	const btn = document.getElementById('btn');

	btn.addEventListener('click', async () => {
		let fileHandle;
		// open file picker
		[fileHandle] = await window.showOpenFilePicker();

		if (fileHandle.kind === 'file') {
			console.log(`File name is ${fileHandle.name}`);
		}

		if (fileHandle.kind === 'directory') {
			console.log(`Directory name is ${fileHandle.name}`);
		}
	});
</script>
```

These are three simple steps to read a local file from the system.
