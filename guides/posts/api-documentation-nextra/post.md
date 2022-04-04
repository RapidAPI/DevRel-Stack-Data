---
title: Create an API Documentation Site using Nextra in no time.
description: Documentation allows users to understand and connect with your API smoothly, but it is only effective when users can easily access your documentation. Let's see how we can create a separate site for API documentation using Nextra in no time.
publishedDate: 2022-03-30T14:17:11.709Z
lastModifiedDate: 2022-03-30T14:17:11.709Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - api
    - documentation
    - site
    - nextra
coverImage: ''
draft: false
---

<Lead>

Documentation allows users to understand and connect with your API smoothly, ensuring a good developer experience, which is critical for increasing the adoption of your API.

</Lead>

## API Documentation

API Documentation provides complete information needed to consume the API through descriptions, tutorials, examples, and code samples. It is the first thing a developer notices while deciding the API for their project. Moreover, proper documentation increases your API's adoption by making it easy to integrate and use.

## Benefits of a Documentation Site

Your API documentation is a valuable resource for users, and it gets more attention than the API. You can make your documentation more accessible by creating a documentation site that has features like search, table of contents, i8n, sharing, interactive components, and more. However, manually implementing these features is a challenge, and this is where site generator tools like Nextra come in.

## Nextra

[Nextra](https://nextra.vercel.app/) is an open-source static site generator that supports Markdown and React. It is powered by Next.js, which allows the site to be fast and performant. In a few clicks, you can deploy a Nextra documentation site on Vercel that has the following features out of the box:

### MDX

The documentation is written in markdown and rendered using MDX, which supports React components. So, you can add any custom React component to your documentation, such as an interactive playground where the user can make calls to your API within the documentation.

### Sidebar and Anchor Links

Nextra automatically generates a sidebar that lists all the pages in your documentation. It is coupled with anchor links, automatically created for each heading to allow smooth navigation.

### Syntax Highlighting

Syntax highlighting for the code blocks is also available out of the box with Prism.

### Other Features

Nextra supports Next's static site generation (SSG), which means that your pages will be generated at build time and statically served to visitors. Finally, some other features include:

-   Search box.
-   Dark mode.
-   Custom theme support.
-   Next.js i8n.
-   Next.js Image optimization.

## Usage

### Deploy on Vercel

Let's jump in and see how we use Nextra. Navigate to the [Nextra Docs](https://nextra.vercel.app/get-started) and try the quick start with Vercel. It will create a new Git repository with a starter kit and deploy it on Vercel. Once deployed, you will see an example documentation site like this.

![Deployed Site](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-documentation-nextra/images/deploy.png)

### Add your Documentation

Clone the git repository and navigate to it in your terminal. Install the packages:

```sh
npm install
```

and start the server using this command:

```sh
npm run dev
```

Now, you can add your own documentation in markdown inside the `pages` directory. You can add a single `.mdx` file for one page or a folder having multiple files, and Nextra will automatically generate pages for them and add them in the sidebar navigation.

That's pretty much it. Add your API documentation in markdown, and your site will be ready to go.
