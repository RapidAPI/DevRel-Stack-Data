---
title: Interactive Guide to Credentials Management API
description: The API lets you save user credentials in your internet browsers. It also helps you retrieve credentials, public keys, and federated credentials for a specific website. Let's take a look at what it is and how you can use it in your website.
publishedDate: 2022-04-11T07:24:44.264Z
lastModifiedDate: 2022-04-11T07:24:44.264Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - credentials-management-api
    - credentials
    - api
coverImage: ''
---

<Lead>

We often have to sign up on a website to create an account. The process of signing up involves using a unique password for security reasons. Since a person has many accounts on different websites, it becomes difficult to remember all the passwords.

</Lead>

If the user has forgotten their account password, they will not be able to log in. In this case, they would have to recover their password, which is often tedious.

There should be a way around it. Fortunately, there is a web API that can handle user credentials. Let’s take a look at it.

## Credential Management API

The API lets you save user credentials in your internet browsers. It also helps you retrieve credentials, public keys, and federated credentials for a specific website. Due to this, the user can sign in without remembering their password. It is a security improvement since users do not have to write down their passwords in a notebook.

All the passwords saved via the Credential Management API are put into the browser’s storage. You can look at them if you have the appropriate user credentials since they are protected.

The credentials you used to sign up on `example.abc.com` can also be retrieved in the `abc.com`. Thus, the credentials can also be shared across subdomains.

The API provides five interfaces. Let’s take a quick look at each of them.

### Credentials

It provides information on the credentials of an entity that is generally a user.

### FederatedCredentials

This interface provides information about credentials from a federated identity provider. The federated identity providers are usually sources responsible for authenticating the user.

### PasswordCredentials

You can use this interface to provide information about the user’s username and password.

### CredentialsContainer

This interface provides different methods for requesting user credentials and notifying when a successful login occurs.

### PublicKeyCredentials

This interface uses asymmetric cryptography instead of a password for logging in to the user account.

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

​​Create two input tags to write username and password. Give them appropriate id as well.

```html
<input type="text" id="username" /> <input type="password" id="password" />
```

Now create two buttons for saving and retrieving credentials and attach a function on its `onclick` event handler.

```html
<button onclick="saveCredentials()">Save credentials</button>
<button onclick="retrieveCredentials()">Retrieve credentials</button>
```

### → STEP #3

Now write the `saveCredentials` function inside the script tag.

```html
<script>
	function saveCredentials() {
		const credentials = new PasswordCredential({
			id: document.getElementById('username').value,
			password: document.getElementById('password').value
		});

		navigator.credentials
			.store(credentials)
			.then(() => {
				console.log('Credentials will store when you select "Save".');
			})
			.catch(err => {
				console.log(err);
			});
	}
</script>
```

Now write the `retrieveCredentials` function inside the script tag.

```html
<script>
	function retrieveCredentials() {
		navigator.credentials
			.get({password: true})
			.then(credentials => {
				if (credentials) {
					console.log(credentials);
				} else {
					console.log(
						'No credentials found. Make sure you have saved credentials before trying to get them.'
					);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
</script>
```

Now run this file in the browser, type in a fake username and password, and click the Save credentials button. It will call the Credential Management API and save the credentials in the browser.

<LearnCredentialsManagementAPI showStoreCredentials />

Now click on the Retrieve credentials button, and you will see a popup with your username and password.

<LearnCredentialsManagementAPI showGetCredentials />

## Support

The Credential Management API is supported across all major internet browsers. However, most of its methods require your site to have an SSL certificate.
