---
id: ccab31c4-e9ca-4ee8-b754-f786a3f3be6e
title: Export
desc: ''
updated: 1623984084294
created: 1617327868887
---

## Summary
- status: [[Experimental 🚧|dendron._ref.status#experimental-]]
Export notes from Dendron

The export Markdown pod will take Dendron Markdown and convert it to regular Markdown. Dendron specific markup like wikilinks will be converted to their Markdown equivalent.

#### Supported Features

 - Converting Dendron hierarchy into regular folder hierarchy
 - Converting Dendron wikilinks into regular links `(foo.bar -> foo/bar.md)`
 - Migrating assets

#### Limitations

Since this is still an experimental feature, there are some features that are still missing:

 - Note Ref links currently will not be modified. In later builds, they can either be converted to a regular Markdown link and/or have the referenced content in-lined.

If you have additional features that are not listed, please add them in this [GitHub issue](https://github.com/dendronhq/dendron/issues/541#issue-831219413)

In addition, there are some features we currently can't convert to regular Markdown because they have no Markdown equivalent:
- mermaid diagrams
- Latex formulas
- footnotes

<!-- #### Example
- Original

```
.
├── vault1
│   ├── root.md
│   ├── foo.md
│   ├── foo.ch1.md
│   └── bar.md
└── vault2
    ├── root.md
    └── gamma.md
```

- After Export

```
.
├── vault1
│   ├── root.md
│   ├── foo.md
│   ├── foo.ch1.md
│   └── bar.md
└── vault2
    ├── root.md
    └── gamma.md
``` -->


<!-- - After Export

```
.
├── vault1
│   ├── root
│   │   ├── index.md
│   │   └── foo
│   │       ├── index.md
│   │       └── foo.ch1.md
│   └── bar.md
└── vault2
    ├── root
    │   └── index.md
    └── gamma.md
``` -->
