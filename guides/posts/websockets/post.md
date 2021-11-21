---
title: Introduction to Websockets
description: WebSockets allow creating a full-duplex connection between the client and the server to pass bi-directional messages.
publishedDate: 2021-10-20T17:13:16.859Z
lastModifiedDate: 2021-10-20T17:13:16.859Z
authors:
    - saad
category: api
tags:
    - websockets
coverImage: ''
---

<Lead>
	Sometimes you are developing an application that requires real-time
	communication between two users. There are a few ways to achieve this.
	Either the user will have to refresh their page manually every few minutes,
	or you can set the page to request the server for new data every few
	seconds. Both of these ways are not ideal. And that’s where WebSocket comes
	into the picture.
</Lead>

## What is WebSocket?

WebSockets allow creating a full-duplex connection between the client and the server to pass bi-directional messages. The full-duplex link means that the server and client can communicate simultaneously.

You can work with WebSockets using its API. It is an advanced technology that makes it possible to open a two-way interactive communication session between a user’s browser and a server.

## WebSockets Use Cases

There are several instances where you can use WebSockets and proceed with your day, for example, when you are making a real-time web application. If you are developing a stocks application and your users are constantly relying on the updated data, you need to use WebSockets to ensure the data is continuously updated.

You can use WebSockets in gaming applications. Your game might not be popular if the user has to constantly refresh the page to see the opponent’s stats. Websockets are also used to build chat applications.

## WebSockets And HTTP

There are a lot of differences between WebSockets and HTTP. Although both are protocols, WebSockets provides bi-directional communication, whereas HTTP provides uni-directional communication.

The HTTP creates a connection when we request some data from the server and then closes it after the client receives the response. On the contrary, a WebSocket connection stays alive until terminated by either the client or the server.

The RESTful applications use the stateless HTTP protocol. In contrast, all the real-time application services use WebSockets. WebSockets are also faster than HTTP connections because it provides a full-duplex connection between client and server whereas HTTP connections are unidirectional.
