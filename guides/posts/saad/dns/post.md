---
title: What is DNS?
slug: dns
description: A lot goes in when you type a website address in your browser address bar and hit enter.
lastModifiedDate: 2021-10-21T16:18:42.178Z
authors:
    - saad
category: http
tags:
    - dns
coverImage: ''
draft: false
---

<Lead>
A lot goes in when you type a website address in your browser address bar and hit enter. This address is translated to an IP address, and the server serves the website on that IP. This is done using DNS. Let’s take a look at it.
</Lead>

## Domain Name Server (DNS)

The most appropriate analogy of DNS is it is a phonebook of the Internet. It translates the website URLs to IP addresses so the server can identify what website you are looking to visit. With DNS servers, you do not have to memorize the IP addresses that are much more complex than simple URLs.

## How does DNS work?

The Internet is a giant network of computers connected and communicating with each other. On the Internet, each computer is assigned a unique IP address that helps the computer to identify on the Internet. Remembering each IP address to visit a website is a huge hassle and practically impossible. Domain names were invented to deal with this.

A domain name and its matching IP address are collectively called a DNS record.

You open a website on your computer. If its DNS record is found in your computer’s DNS cache, then the rest of the DNS lookup is skipped. If it is not there, the query is sent to your local DNS server. It is usually your Internet Service Provider (ISP). When the DNS record is located, a connection to where the website is stored will be opened, and the website is displayed on your screen.

## DNS Servers Involved in Loading

Four website DNS servers work together to load a webpage.

- **DNS Recursor:** The first one is the DNS Recursor designed to receive queries from the user’s machine through applications like web browsers.
- **Root Name Server:** Then there is a Root Name Server that can be thought of as an index in a library that provides information where a book is located.
- **TLD Nameserver:** This server hosts the last portion of a hostname, i.e., com, org, etc.
- **Authoritative Nameserver:** This is the last step of loading a webpage. If the authorization nameserver has access to the requested record, it will send back the IP address for the requested hostname back to the DNS Recursor.
