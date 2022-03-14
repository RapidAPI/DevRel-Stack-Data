---
title: How to make API calls in PHP on the server?
description: 'PHP is a server-side language adopted by the likes of Meta for their product “Facebook”. In this piece, we will look at how you can make API calls using PHP on server.'
authors:
    - saad
categories:
    - api
tags:
    - php
    - api
publishedDate: 2022-03-14T06:43:50.124Z
lastModifiedDate: 2022-03-14T06:43:50.124Z
coverImage: ''
---

<Lead>

Before diving into developing a full-stack application, you first choose a stack. Which technology do you want to use for your client-side, what database will your project need, and what language will your server consume? These are a few basic questions that you need to decide on before starting development.

</Lead>

Several server technologies are available these days. One of the most popular is PHP, supporting approximately [78%](https://kinsta.com/blog/is-php-dead/#:~:text=According%20to%20W3Techs'%20data%2C%20PHP,using%20PHP%20in%20some%20way.) of the sites running on the Internet. And since almost all applications consume APIs one way or another, you would also need to call them in your PHP server.

In this piece, let’s look at making API calls in a PHP server and then rendering the response on an HTML frontend. We will also briefly look at PHP as a server language. So without any further ado, let’s jump in!

## PHP

PHP was released back in 1994. It is a recursive acronym for “PHP: Hypertext Preprocessor”. It is a server-side language adopted by the likes of Meta for their product “Facebook”. WordPress that powers [43%](https://kinsta.com/wordpress-market-share/) of the Internet is written in PHP.

In PHP, you can integrate several databases, including MySQL, PostgreSQL, Oracle, Sybase, etc. It is simple, efficient, and provides great flexibility when developing servers.

## Consuming APIs in PHP

Since PHP is a server-side language, we will create a basic PHP server and use simple HTML and JavaScript on the client-side to request the server. We will do this in a bunch of steps to make it easier to follow along.

### → STEP #1

Instead of looking up APIs on the Internet, let’s go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

Once you have logged in, you will see thousands of APIs. I have already found a freemium [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that we can use.

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Random Facts API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-random-facts-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere. It will be used later in the application.

### → STEP #2

You can skip this step if you already have PHP installed in your computer. If not, you can download it from [here](https://www.php.net/downloads.php). Once downloaded, install it in your computer.

### → STEP #3

Since PHP is a server-side language, you need to set up a server. You can use any server you want. For this piece, I am using XAMPP that you can download from [here](https://www.apachefriends.org/download.html). Install it once it is done downloading.

Afterward, run XAMPP and start the Apache Web Server.

![XAMPP Server running](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/073701df2994e695675c66483e028eb733b2b35b/guides/posts/make-api-call-php/images/xampp-running.png)

### → STEP #4

Now navigate to where you have installed XAMPP. Inside it, you will find a directory called `htdocs`. Create a folder inside this directory called `php-api-call`. Now open this directory in your preferred code editor.

### → STEP #5

Now create another directory called `server` inside `php-api-call`. Inside this directory, create file called `random-fact.php`. In this file, you will write the logic of making an API call to [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

On the [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) page, you will find code snippets of how you can use this API with different languages. Since we are using PHP, let’s choose the (PHP) cURL from the dropdown.

![Fetching data using (PHP) cURL](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/073701df2994e695675c66483e028eb733b2b35b/guides/posts/make-api-call-php/images/code-snippet.png)

Copy the code snippet and paste it inside the `random-fact.php` file. I have provided the snippet below for quick access:

```php
<?php
header("Access-Control-Allow-Origin: *");
$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://random-facts2.p.rapidapi.com/getfact",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: random-facts2.p.rapidapi.com",
		"x-rapidapi-key: YOUR-RAPID-API-KEY"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}
?>
```

Replace the value of the `x-rapidapi-key` in the above code snippet with the API key you saved earlier.

### → STEP #6

Now you need to create a simple frontend using HTML. For this, create an `index.html` file in the root directory and paste the following code inside it:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Calling API in PHP</title>
	</head>
	<body>
		<h2 id="fact"></h2>
		<button onclick="callAPI()">Make API call</button>
		<script>
			async function callAPI() {
				const fact = document.getElementById('fact');
				try {
					const res = await fetch(
						`http://localhost/php-api-call/server/random-fact.php`
					);
					const response = await res.json();
					fact.innerText = response.Fact;
				} catch (err) {
					console.log(err);
				}
			}
		</script>
	</body>
</html>
```

The code is making an API call to our PHP server when the `Make API call` button is clicked. I will hit the `random-fact.php` endpoint and receive a response that is then rendered on the screen.

Now run this file and click on the `Make API call` button. You will see something like this on the screen:

![Web page displaying a random fact](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/073701df2994e695675c66483e028eb733b2b35b/guides/posts/make-api-call-php/images/webpage.png)

## Wrap Up

This guide was an introduction to consuming APIs in PHP. We hope that now you can start using APIs in your awesome PHP projects.
