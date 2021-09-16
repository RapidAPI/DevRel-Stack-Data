---
title: "Are You Getting the Most Out of Your React?"
description: "Think You're Cut Out for Doing React? Take This Quiz"
slug: "2020-08-01-post-3"
authors: ["jeromeBell"]
category: "engineering"
tags: ["react", "javascript"]
publishedDate: "2020-08-20T08:00:00+08:00"
coverImage: ""
---

<Lead>This post contains code syntax highlighter powered by Shiki.</Lead>

```ts title="examples/index.ts"
import { useRouter } from "next/router";

function SomePage(props) {
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };
}

export async function getServerSideProps(context) {
  // Database logic here
}
```
