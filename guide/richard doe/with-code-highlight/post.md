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
