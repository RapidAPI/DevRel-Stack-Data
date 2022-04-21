---
title: "How to handle CORS in your Node.js application"
date: "Feb 17 2022"
id: "1494290580133888003"
author: "pratham"
---

## Handle CORS in your Node.js application

<Tweet>

CORS is quite annoying for developers. But not that as it sounds.

Let's see how we can handle it effectively in our Node.js application.

</Tweet>

<Tweet>

Starting off, let's quickly install the npm package called "cors" in your application.

Run the following command in your terminal.

```
npm install cors
```

</Tweet>

<Tweet>

CORS errors can only be handled from the server-side.

Open your server code file and import the cors that we just installed.

```
const cors = require('cors');
```

</Tweet>

<Tweet>

Now you just need to add a single line of middleware code.

It will allow all the cross-origin requests to your server.

```
const express = require('express');
const app = express();
const cors = require('cors);

app.use(cors());
```

</Tweet>

<Tweet>

If you want to allow only same-origin requests, use the below code snippet.

```
const express = require('express');
const app = express();
const cors = require('cors);

app.use(cors({origin: "https://example.com"}));
```

</Tweet>

<Tweet>

And that's pretty much it for this thread.

Learn more about CORS middleware [here](https://github.com/expressjs/cors/)

[Read this thread on RapidAPI Guides](https://RapidAPI.com/guides/handle-s/handle-cors-express/?utm_source=threads&utm_medium=DevRel&utm_campaign=DevRel)

</Tweet>
