---
id: 13c4a608-0a32-4c62-9c7e-2b7f9f2d18bf
title: Markdown Pod
desc: ''
updated: 1615761944216
created: 1603306941128
---

## Summary
- id: `dendron.markdown`
- coverage
  - export 
  - ✅ import
  - ✅ publish
  - ✅ export

### Export
- status: [[Experimental 🚧|dendron.ref.status#experimental-]]

Export notes from Dendron

The export markdown pod will take Dendron markdown and convert it to regular markdown. Dendron specific markup like wikilinks and note refs will be converted to their markdown equivalent (regular md link and inlining the note ref content as markdown). 

#### Limitations
Since this is still an experimental feature, there are some features that are still missing:
  - [ ] converting dendron hierarchy into regular folder hierarchy
  - [ ] converting dendron links into regular links `(foo.bar -> foo/bar.md)` hasn't been implemented yet. 
  - [ ] migrating assets

If you have additional features that are not listed, please add them in this [github issue](https://github.com/dendronhq/dendron/issues/541#issue-831219413)

In addition, there are some features we currently can't convert to regular markdown because they have no markdown equivalent:
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


### Import

Import markdown files stored locally. 

The pod finds all files from the `root`, and copies over the files into your vault, cleaning the file names to fit dendron's naming hierarchy. You can see an example below. 

#### Example
- Original
```
.
└── projects
    ├── p1
    │   ├── one.md
    │   ├── two.md
    │   └── one.pdf
    └── p2
        ├── three.md
        ├── four.md
        └── three.gif
```

- After Import

```
.
└── vault
    ├── assets
    │   ├── one-{uuid}.pdf
    │   └── three-{uuid}.gif
    ├── projects.p1.md
    ├── projects.p1.one.md
    ├── projects.p1.two.md
    ├── projects.p2.md
    ├── projects.p2.three.md
    └── projects.p2.four.md
```

Non-markdown files within a directory will be moved into the `assets` folder of your `vault`. A [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier) will be added to non-markdown file names to ensure it does not overwrite any existing files. A link of the original filenames will be made in the note that corresponds to the imported directory

```md
...
# Imported Assets
- [one.pdf](assets/one-c91d4cb3-1db8-4703-884f-c4f5f9a00734.pdf)

```

Note that all files starting with a `.` will be ignored during the import.

#### Configuration
![[dendron.topic.pod.import#configuration,1]]

#### Links

If you are importing from tools like **Obsidian** that support wiki-links, Dendron will convert those wiki-links to Dendron's dot based format (eg. `[[project/p1]] -> [[project.p1]]`)

### Publish

Publish Dendron Markdown to regular markdown. Convert note references and dendron specific syntax to regular markdown.

