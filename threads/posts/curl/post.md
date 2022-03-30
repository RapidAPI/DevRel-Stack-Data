---
title: "What exactly is curl"
date: "Mar 25 2022"
id: "1507356439572099075"
---

## What exactly is curl

<Tweet>

curl is nothing but a command-line tool that provides a more programmatic way to interact with APIs.

</Tweet>

<Tweet>

It is used to establish communication between the client and the server.

You can fetch data and transfer data to the server using curl.

</Tweet>

<Tweet>

It might be surprising for you but curl supports 26 protocols.

Widely used protocols like HTTP, FTP, SMTP are also supported in the curl library.

</Tweet>

<Tweet>

A wide range of supported protocols makes curl best for testing purposes.

</Tweet>

<Tweet>

Let's try to understand the syntax of sending requests using curl.

We are using HTTP protocol as it is widely used.

</Tweet>

<Tweet>

Before that, we need to understand the syntax of a typical HTTP request. It has four main components.

• Method
• Endpoint
• HTTP headers
• Body

</Tweet>

<Tweet>

To send a request at a particular URL, you need to write the `curl` command followed by the URL.

```
curl http://example.com
```

</Tweet>

<Tweet>

Not just simple GET requests, you can send all the HTTP requests using curl with HTTP headers and body.

</Tweet>

<Tweet>

Options give you the flexibility of passing an extra bit of information.

There are over 200 options but a few of them are widely used.

Options start with one (-) or two (--) dashes.

</Tweet>

<Tweet>

You can either specify an option using a single or double dash.

[List of curl options](https://gist.github.com/eneko/dc2d8edd9a4b25c5b0725dd123f98b10)

</Tweet>

<Tweet>

Run the following command in your terminal to see all the available options:

`curl -h`

</Tweet>

<Tweet>

By default, if no method is specified, the GET method is used.

But you can mention other HTTP request methods as well using the -X option.

For example, `curl -X POST URL`

</Tweet>
