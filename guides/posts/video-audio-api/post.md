---
title: Introduction To Video And Audio APIs
description: In this piece, let’s take a look at the different video and audio APIs that HTML provides you.
authors:
    - saad
categories:
    - api
tags:
    - video-api
    - audio-api
publishedDate: 2022-01-03T09:34:31.065Z
lastModifiedDate: 2022-01-03T09:34:31.065Z
coverImage: ''
---

<Lead>

An enterprise-scale website needs different assets to engage users and drive more audience. These assets range from images to audio to videos. All these additional files are embedded inside the site’s HTML.

</Lead>

Let’s take a look at the different video and audio APIs that HTML provides you.

## Video/Audio Tags

HTML5 provides us with the `video` and `audio` tags that let you integrate different static assets in your websites. You can use the audio or video URL to render it on the screen.

### Video API

If you are embedding a video, you need to add a `source` tag inside the video tag. Here you will provide the video path or its link. The `source` tag will take an `src` attribute to define the video clip you want to embed in your website. It also takes a `type` attribute which defines the video format.

You can give a `controls` attribute to the video tag, enabling the default set of playback controls in your video.

Take a look at the code below for the example:

```html
<video controls>
	<source src="alphabets.mp4" type="video/mp4" />
	<source src="alphabets.webm" type="video/webm" />
	<p>
		Your browser doesn't support HTML5 video. Here is a
		<a href="alphabets.mp4">link to the video</a> instead.
	</p>
</video>
```

You do not need the `source` tag if there is only a single source of the video you are interested in embedding. You can add the video path directly inside your `video` tag.

### Audio API

The audio API works almost the same way as the video API. It is used to embed sound content in a document. It takes an `src` that is either the path to the static audio file or a link from where you want to integrate the audio. If there is more than one source, you will have to use the `source` tag inside the `audio` tag.

```html
<audio controls src="source.mp3"></audio>
```
