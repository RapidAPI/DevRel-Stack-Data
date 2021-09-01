<p className="lead">

This post contains code syntax highlighter powered by [Shiki](https://shikijs.github.io/twoslash/).

</p>

```json
{ "json": true }
```

```ts twoslash
interface IdLabel {id: number, /* some fields */ }
interface NameLabel {name: string, /* other fields */ }
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
// This comment should not be included

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"
}

let a = createLabel("typescript");
```

----

```ts title="examples/index.ts"
for (let x in [0]) console.log(x)
```

```ts twoslash
// @errors: 2532
declare const quantumString: string | undefined;

// Right now this string is in two states, hover below to see
quantumString

if (quantumString) {
  // However, in here we now have a different type
  // you can verify by hovering below
  quantumString.length;
}
```
