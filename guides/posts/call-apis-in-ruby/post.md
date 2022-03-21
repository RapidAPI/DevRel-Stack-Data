---
title: How to consume APIs in Ruby?
description: Ruby is a dynamically typed language where everything is an object. It is being used by companies like Twitter, GitHub, Shopify, etc. In this piece, we will learn how to consume APIs from RapidAPI Hub in Ruby.
publishedDate: 2022-03-21T02:53:28.085Z
lastModifiedDate: 2022-03-21T02:53:28.085Z
authors:
    - saad
categories:
    - api
tags:
    - ruby
    - api
coverImage: ''
---

<Lead>

There are hundreds of technologies available for you to use so you can develop a website, mobile application, or desktop application. Since the number is so huge, a few come up more often than others because of their incredible features, for instance, the React.js by Meta Inc., Next.js developed by Vercel, Django, Ruby, PHP, etc.

</Lead>

All these web technologies can be used to code fully working enterprise-scale web applications. Since these applications often consume APIs, you need to learn how to make API calls in them.

In this piece, we will look at how to consume APIs available on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) in Ruby. So without any further ado, let's jump in!

## Ruby

Ruby was first released in 1993, but it gained popularity after Ruby on Rails, an MVC framework, was developed in 2005. It is a scripting language famous for its simple and easy-to-understand syntax. It takes code-readability to the extreme while being an object-oriented language.

Ruby is a dynamically typed language where everything is an object. It is being used by companies like Twitter, GitHub, Shopify, etc.

## Consuming APIs in Ruby

Now let's look at how you can make API calls in Ruby. We will do this in a bunch of steps to make it easier to follow along. So let's jump in!

### → STEP #1

Instead of looking up APIs on the Internet, let's go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven't already.

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

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let's go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere as It will be used later in the application.

### → STEP #2

You need to download and install Ruby on your computer. For this, go to this [site](https://www.ruby-lang.org/en/downloads/) and download the stable version. Once it is done downloading, go ahead and install it.

Now open your terminal and run the following command to check if Ruby has been successfully installed or not:

```sh
ruby -v
```

### → STEP #3

Create a directory on your computer and open it in your preferred code editor. Once you are done, create a Ruby file called `app.rb` inside this directory. Open this file and import the following packages at the top like this:

```rb
require 'uri'
require 'net/http'
require 'openssl'
```

These packages will be used to make API calls and deal with SSL.

Now we need to add the API endpoint, which we will call:

```rb
url = URI("https://random-facts2.p.rapidapi.com/getfact")
```

Once done, we will set the SSL certificate. For this article, I am setting the verification to none.

```rb
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE
```

Now let's call the API using the `net/http` package we imported earlier.

```rb
request = Net::HTTP::Get.new(url)
request["x-rapidapi-host"] = 'random-facts2.p.rapidapi.com'
request["x-rapidapi-key"] = 'your-rapidapi-key'
response = http.request(request)
```

Here, we are making a GET request to the API using the API key provided to us by the [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). Replace the value of the `x-rapidapi-key` in the above code snippet with the API key you saved earlier.

We also need to handle the response. For the sake of this article, let's print it out on the terminal:

```rb
puts response.read_body
```

In the end, the code in `app.rb` will look like this:

```rb
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://random-facts2.p.rapidapi.com/getfact")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-host"] = 'random-facts2.p.rapidapi.com'
request["x-rapidapi-key"] = 'your-rapidapi-key'

response = http.request(request)
puts response.read_body
```

Now run the file using the following command:

```sh
ruby app.rb
```

You will see a random fact from the API printed on the terminal.

## Wrap Up

This guide was an introduction to consuming APIs in Ruby. We hope that now you can start using APIs in your awesome Ruby projects.
