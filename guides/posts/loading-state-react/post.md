---
title: How to display loading state during API Calls in React?
description: Loading states ensure a better user experience during data fetching from APIs.
publishedDate: 2021-12-17T19:10:30.765Z
lastModifiedDate: 2021-12-17T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - api
tags:
    - api
    - loading
    - react
coverImage: ''
---

<Lead>
	Data fetching from APIs may take a while; therefore, it is vital to show a
	loader until a response is received.
</Lead>

## Why is it necessary?

API calls may be triggered by a button, an input, or simply by a page-load; however, some applications can take a few seconds to complete data fetching. If there is no visual feedback given to the users, they might think that your application is not responding or stuck.

When it comes to User Experience (UX), it is recommended to keep the user aware of the system's current state. It is always a good practice to display the loading state to the user while fetching data.

## Displaying Loading State in React

Displaying the loading state in React is very simple. We can do it using the React `useState` hook, which allows us to track the state of a functional component. If you are interested to learn more about them, check out our [previous guide](https://rapidapi.com/guides/use-react-hooks) about consuming an API in React using React Hooks.

Let's go ahead and implement the loading state in three simple steps. Take a look at the following [web app](https://rapidapi-example-domain-app.vercel.app/), which looks up web domains using an API when a user clicks the **search** button.

![Example App to implement loader](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-domain-app/images/preview.png)

### → STEP #1

Import the `useState` hook in your file and create a state `loading`, and initialize it to `false`.

```js

import { useState } from react;

// Inside your React Component

const [loading, setLoading] = useState(false);
```

### → STEP #2

To display the loader, we need to be aware of the current state of data fetching. We are going to do the following:

```js
// Before calling the API
setLoading(true);

// After response is received
setLoading(false);
```

Let's add it to the domain app now. To get the loading state, we will use the function `getDomainInfo`, which fetches the data from the API.

```js
import { useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(false);

    const getDomainInfo = async () => {
        try {
            setLoading(true); // Set loading before sending API request
            const res = await axios.get('api/search/', {
                params: { keyword },
            });
            const response = res; // Response received
            setLoading(false); // Stop loading
        } catch (error) {
            setLoading(false); // Stop loading in case of error
            console.error(error);
        }
    };
```

### → STEP #3

Finally, we can display the loading state on our front end. Let's keep it simple and add it to the **search** button.

```js
<button type="submit">{loading ? <>Loading..</> : <>Search</>}</button>
```

Now, the button will look like this while data is being fetched.

![Displaying the Loading State](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/loading-state-react/images/loading.png)

Similarly, you can use animations, spinners, icons, or simple text to display the loading state in your React application.
