---
id: 8bc9b3f1-8508-4d3a-a2de-be9f12ef1821
title: Tags
desc: ''
updated: 1623416307214
created: 1601910058115
stub: false
---
Dendron supports tags through a combination of hierarchies and backlinks. We recommend that you use the following syntax for tags:

```md
[[tag.foo]]
```

You get a few advantages for structuring tags in this format.

1. Tags become regular hierarchical notes -  use the backlink panel to find all notes with a particular tag
2. All the operations on notes and hierarchies apply to tags (eg. Rename, Refactor, etc) and will update both the note and all links 
3. You can deeply nest tags by adding additional levels to your hierarchies
4. You can use autocomplete to create tags

## Pretty Tags

You can further customize the look of tags in the preview by using the following CSS modification.

![[dendron.guides.tips#stylized-tags-using-custom-css:#*]]

