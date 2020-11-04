---
id: d8a09d7b-8693-437c-8a2c-2bfe0b3c2768
title: Remark
desc: ''
updated: 1602033034187
created: 1602033034187
stub: false
---


# Remark

## Summary

This goes over how Dendron parses markdown files

## Init

### Get Processor

This starts markdown parsing. It's called in multiple points (eg. dendron-cli, dendron markdown preview enhanced, etc) when markdown needs to be converted.

- file: engine-server/src/topics/markdown/utils.ts

```ts
getProcessor() 
    .use(markdownParse, { gfm: true })
    .use(frontmatterPlugin, ["yaml"])
    .use(dendronLinksPlugin)
    .use(dendronRefsPlugin, { root, renderWithOutline, replaceRefs })
    .use({ settings: { listItemIndent: "1", fences: true } });
```

## Note References

References are parsed using the `dendronRefsPlugin`.

- file: engine-server/src/topics/markdown/plugins/dendronRefsPlugin.ts

### Parse

```ts
plugin.inlineTokenizer(eat, value) {
    if match(eat, DENDRON_REF):
        link := match

        return {
            type: refLink,
            value: normalize(link)
        }
}
```

### Stringify

```ts
plugin.Compiler {
    visitor.refLink(content) {
        link := 
        bodyOfTarget = read(link)
        markers = findRef(link, bodyOfTarget)
        return modifyContent(content, markers)
    }
}

```
