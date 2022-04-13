---
title: What is WebCodecs API?
description:
    WebCodecs is a powerful web API that lets developers access the individual
    frames of a video. It also helps developers to encode and decode audio and
    video files. In this piece, let's take a look at this API.
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - webcodecs-api
    - api
publishedDate: 2022-04-12T12:18:46.049Z
lastModifiedDate: 2022-04-12T12:18:46.049Z
coverImage: ''
---

<Lead>

There are several online editors for editing and processing audio and video files on the internet these days. Such websites eliminate the need for downloading and installing heavy-duty software on your computer. All you need to do is search for online editing tools, and Google will provide you with all the websites providing this service.

</Lead>

From the programmer’s perspective, building such web applications can be difficult. There are a lot of features that they need to implement to make a functional online video editor. And without a doubt, APIs will come into play.

Let’s look at one of the APIs that will help a developer build an online video editor.

## WebCodecs API

It is a powerful web API that lets developers access the individual frames of a video. It also helps developers to encode and decode audio and video files. It does all this by working on a separate thread. This way, the site responsiveness is not compromised by the processing load.

The API provides access to a lot of features, for instance,

-   Raw video frames
-   Image decoder
-   Audio/Video encoders and decoders
-   Audio data

The WebCodecs API is under the hood used by several other APIs. For instance, Web Audio API, MediaRecoder API, WebRTC API, etc., all use WebCodecs for processing audio and video.

## Support

The WebCodecs API consists of a lot of different interfaces, each has its browser support, but almost all of them ar2e not supported by Firefox and Safari.

## Interfaces

Let’s look at a few interfaces provided by the API.

### AudioDecoder

The interfaces help decode audio files right inside your web application.

### VideoDecoder

Like the `AudioDecoder` interface, this interface helps to decode video files inside your web browser.

### AudioData

This interface allows representing an audio file. The audio file is unencoded.

### EncodedAudioChunk

This interface represents a chunk of encoded audio data.
