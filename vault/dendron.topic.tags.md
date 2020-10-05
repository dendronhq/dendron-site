---
id: 8bc9b3f1-8508-4d3a-a2de-be9f12ef1821
title: Tags
desc: ''
updated: 1601910058115
created: 1601910058115
stub: false
---

# Tags

Besides hierarchies, Dendron also supports tags. We recommend that you use the following syntax for tags:

```md
[[tag.foo]]
```

You get a few advantages for structuring tags in this format.

1. Your tags are just regular hierarchical notes - to find all notes with a particular tag, use the backlink panel
2. All the operations on notes and hierarchies apply to tags (eg. Rename, Refactor, etc) and will update both the note and all links 
3. You can deeply nest tags by adding additional levels to your hierarchies
4. You can use autocomplete to create tags


## Pretty Tags

You can format your tags to look like regular tags wiki-link aliases

```md
[[#foo|tag.foo]] --> will render as #foo
```

You can further customize the look of tags in the preview by using the following CSS modification.

((ref: [[dendron.tips]]#stylized tags using custom css:#*))