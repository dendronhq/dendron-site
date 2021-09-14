---
id: aa6009e6-db3d-44d8-bc60-723f03c048f7
title: Internal
desc: ''
updated: 1624851964536
created: 1612974783445
---


## Videos
- [11ty and markdown parsing: I](https://youtu.be/3qWjBh3A55s)
- [11ty and markdown parsing: II](https://youtu.be/5VJw102iosE)
- [11ty and markdown parsing: III](https://youtu.be/E5erv3GawAc)

## CLI

- src/commands/build-site-v2.ts
```ts
buildNav, copyAssets
compile
```

### comiple
- index.js

```ts
process.chdir env.cwd
elev :=
elev.init
```

- .eleventy.js

```js
setTemplateFormats

```

## Generate notes

- _includes/includes/note.liquid
    - notesOnly

- _data/notesOnly.js
```ts
return SiteUtils.filterByConfig({ engine, config })
```

## Rendering Notes

- libs/shortcodes.js

```ts
toMarkdown2 {
    procFull {
        const engine = await getEngine();
        ...
    }
}

```
