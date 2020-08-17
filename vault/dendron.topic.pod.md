---
id: 66727a39-d0a7-449b-a10d-f6c438185d7f
title: Pod
desc: ''
updated: 1595041605856
created: 1595041605856
custom: {}
---

# Pods 🚧

Pods are the mechanisms Dendron uses to import and export notes. Dendron has a different pod depending on where you are getting and publishing your data to. 

To access pods, Dendron exposes three commands:
- `Dendron: Import Pod`: imports notes from an external data source 
- `Dendron: Build Pod`: prepares notes for export 
- `Dendron: Export Pod`: export notes (note that there are no pods with export capabilities at this time)

Note that not all pods will expose all three commands. The status of each pod method is represented by the following status symbols:
- ✅ supported 
- 🚧 supported but experimental 
- ➖ no support applicable 
- ❌ not currently supported


### LocalFile Pod
- status
    - 🚧 import
    - ➖ build
    - ❌ export

This pod imports files stored in your local file system. To get started, select `LocalFile Pod` in the pod dropdown and enter the path to `root` directory where your notes are stored.

The `LocalFile` pod finds all files from the `root`, and copies over the files into your vault, cleaning the file names to fit dendron's naming hierarchy. You can se an example below. 

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


### GithubPages Pod
- coverage
    - ❌ import
    - 🚧 build
    - ❌ export 

Builds your notes for publication to github pages using the [dendron-jekyll](https://github.com/dendronhq/dendron-jekyll) theme.  See [[publishing | dendron.topic.publishing]] for more details.