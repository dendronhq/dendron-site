---
id: f23a6290-2dec-45dc-b616-c218ee53db6b
title: Import
desc: ''
updated: 1642671398879
created: 1617327950468
---

## Summary
Import Markdown files stored locally. 

The pod finds all files from the `root`, and copies over the files into your vault, cleaning the file names to fit Dendron's naming hierarchy. You can see an example below. 

## Example
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

Non-Markdown files within a directory will be moved into the `assets` folder of your `vault`. A [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier) will be added to non-Markdown file names to ensure it does not overwrite any existing files. A link of the original filename will be made in the note that corresponds to the imported directory

```md
...
# Imported Assets
- [one.pdf](assets/one-c91d4cb3-1db8-4703-884f-c4f5f9a00734.pdf)

```

Note that all files starting with a `.` will be ignored during the import.

## Configuration
![[dendron.topic.pod.import#configuration,1]]

### noAddUUID
- default: false
- description: if set, don't append random uuid to asset files

### indexName
- default: none

If set, match the given indexName and combine it with the imported directory. For example, some services like gitbook will use `index.md` as an index for a directory. 

```
.
└── foo/
    ├── index.md
    ├── one.md
    └── two.md
```

A naive import into Dendron will result in the following files
```
.
├── foo.index.md
├── foo.one.md
└── foo.two.md
```

If you set `indexName` to `index` (matching is case insensitive and doesn't require the extension), the import will result in the following instead

```
.
├── foo.md
├── foo.one.md
└── foo.two.md
```

In this example, the contents of `index.md` were combined with `foo.md`

### importFrontmatter
- default: true
- type: boolean

If set, imports the note metadata as well. If there is any conflict between note's metadata and dendron's frontmatter, the Markdown Import Pod appends `_imported` to the metadata. If you want to have your conflicted metadata map to a key, you can define that in the `frontmatterMapping` config.
By default, Dendron adds `id`, `created`, `updated` and `title` fields to the frontmatter.

### frontmatterMapping
- type: object
- description: mapping of metadata keys.
#### Example
- config
```yml
importFrontmatter: true
frontmatterMapping: { id: obsidianId}
```

- For a note with following contents

```
---
author: Markus Zusak
status: In progress
id: foo
tags:
  - scope.reading
  - size.medium
---

The story in the book was recounted by a male voice called Death, who proved to be caring yet morose throughout the book.
```

- The imported note will look like
```md
---
id: ERSdVKMDkkwFnJGHUBGFR
title: The Book Thief
desc: ''
updated: 1642498483045
created: 1642498483045
stub: false
isDir: false
author: Markus Zusak
status: In progress
tags:
  - scope.reading
  - size.medium
obsidianId: foo
---

The story in the book was recounted by a male voice called Death, who proved to be caring yet morose throughout the book.
```
 
## Links

If you are importing from tools like **Obsidian** that support wiki-links, Dendron will convert those wiki-links to Dendron's dot based format (eg. `[[project/p1]] -> [[project.p1]]`)
