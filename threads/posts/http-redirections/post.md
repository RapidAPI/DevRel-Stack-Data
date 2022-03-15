---
title: 'Everything you need to know about HTTP redirections.'
date: 'Feb 24 2022'
id: '1496605584459763715'
---

## Everything you need to know about HTTP redirections.

<Tweet>

A particular webpage or website may have more than one URL. HTTP redirect responses belong to such kinds of applications.
   
</Tweet>
  
<Tweet>

Redirections are quite helpful in the following ways: 👇🏻

• You can temporarily redirect while maintaining.  
• You can add a permanent redirect to the new URL so that the exciting link won't break.
  
</Tweet>

<Tweet>

HTTP has a dedicated responses series, which is 3xx, for redirection messages.

HTTP redirections are always handled on the server-side.

The server sends the 3xx status code along with the `Location` header.
  
</Tweet>

<Tweet>

`Location` header contains the redirect URL.

Browser simultaneously redirects to the URL specified in the `Location` header without any client input.
  
</Tweet>

<Tweet>

HTTP redirects can be

• Temporary  
• Permanent  
• Special 
  
</Tweet>

<Tweet>

Permanent redirections

The old URL will never be used and it has been changed with the new URL.
  
</Tweet>

<Tweet>

There are two typical HTTP responses in permanent redirections:

1. 301 Moved Permanently
   Method and body might also be changed.

2. 308 Permanent Redirect
   Same method and body.
  
</Tweet>

<Tweet>

Temporary redirections

Temporary redirections are widely used while maintaining the URL.
  
</Tweet>

<Tweet>

There are three typical HTTP responses in temporary redirections:

1. 302 Found
   Method may or may not be changed.

2. 303 See Other
   Method changed to GET.

3. 307 Temporary Redirect
   Method and body are the same.
  
</Tweet>

<Tweet>

Special redirections

There are certain scenarios when redirects happen which doesn't fall into permanent or temporary redirects.

For example, Caching and multiple choice.
  
</Tweet>

<Tweet>

There are two typical HTTP responses in special redirections:

1. 300 Multiple Choice
   Multiple options to respond.

2. 304 Not Modified
   Cache response can be used.
  
</Tweet>
  
<Tweet>

With that being said, this is pretty much it for this brief introduction to HTTP redirects. Follow [@Rapid_API](https://RapidAPI.com/hub) for more exclusive content.
  
</Tweet>
