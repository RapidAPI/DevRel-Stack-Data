---
title: What are API Injections and how to prevent them?
description: When the user sends malicious code (most of the time database query) with the API request, they execute an API injection. In this piece, let's take a look at it and how you can prevent it from happening.
authors:
    - saad
categories:
    - api
tags:
    - api
    - api-security
    - api-vulnerabilities
publishedDate: 2022-05-17T16:27:05.876Z
lastModifiedDate: 2022-05-17T16:27:05.876Z
coverImage: ''
draft: false
---

<Lead>

When building REST APIs, we need to ensure that it is well protected and every edge case is taken care of properly. It is crucial when you plan to make the API publicly available and monetize it. If you fail to do it, people can find a way to exploit any backdoor left behind, intentionally or unintentionally.

</Lead>

Several API threats exist. The API injection provides a great deal of risk for the database the API is communicating with for performing CRUD operations. All this comes under API security, and it should not be taken lightly.

## API Injection

When the user sends malicious code (most of the time database query) with the API request, they execute an API injection. The code is sent as part of the query parameter or request body depending on the underlying API code.

The API injection can be a command injection attack. It means the API will bring a system command to the server. The command, when executed, can delete user directories or even the entire site from the server. The most common example is when you want to view the file you have uploaded yourself. To retrieve the file, the API will take the file's id with it. If the user sends the malicious command with the API request, it will execute it on the server.

## Preventing API Injections

The main reason why the API is vulnerable to such security loopholes is that the web app developer and the API developer both did not sanitize the input before it reached the API call code. So ensure that you do input validation in your application.

You can also prevent API injection via escaping special characters. It means you encode special characters and change their meaning, so they are treated as data rather than special characters. This way, the interpreter will know that this data is not for execution.
