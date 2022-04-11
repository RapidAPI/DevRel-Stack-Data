---
title: What is Credential Management API?
description: Credential Management API lets a website stores the client’s username and password in the browser. Once the credentials are saved, you can retrieve them later. Let's briefly look at this API in this piece.
publishedDate: 2022-03-28T10:39:40.509Z
lastModifiedDate: 2022-03-28T10:39:40.509Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - credential-management-api
    - web-api
    - api
coverImage: ''
---

<Lead>

When developing a platform, you have to create a secure authentication feature for creating user accounts. The credentials the user uses to create the account are classified as highly sensitive for obvious reasons. So a proper security system needs to be implemented.

</Lead>

A user signs up on several websites. Remembering each site’s login credential can be difficult. Fortunately, a web API exists for managing these credentials on the browser level. It’s called Credential Management API. Let’s take a look.

## Credential Management API

This API lets a website stores the client’s username and password in the browser. Once the credentials are saved, you can retrieve them later. This way, the user will not have to type in the password every time they log into your website.

You can also store public encryption keys and federated credentials through this API. It is helpful as it allows the users to sign in quickly. You can log users back in when the session expires.

## Support

The Credential Management API is supported across all major internet browsers. However, most of its methods require your site to have an SSL certificate.

## Usage

Let’s look at how you can use this API to store credentials.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Credentials Management API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Create two input tags to write username and password. Give them appropriate id as well.

```html
<input type="text" id="username" /> <input type="password" id="password" />
```

Now create a `Save credentials` and attach a function on its `onclick` event to save the credentials when the user has clicked it.

```html
<button onclick="saveCredentials()">Save credentials</button>
```

### → STEP #3

Now write this `saveCredentials` function inside the script tag.

```html
<script>
	function saveCredentials() {
		// get the credentials and save them in cred variable
		var cred = {
			username: document.getElementById('username').value,
			password: document.getElementById('password').value
		};

		navigator.credentials
			.store(cred)
			.then(() => {
				// perform some action after credentials are stored
			})
			.catch(error => {
				console.log(error);
			});
	}
</script>
```

Now run this file in the browser, type in a fake username and password, and click the `Save credentials` button. It will call the Credential Management API and save the credentials in the browser.
