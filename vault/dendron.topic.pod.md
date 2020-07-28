---
id: 66727a39-d0a7-449b-a10d-f6c438185d7f
title: Pod
desc: ''
updated: 1595041605856
created: 1595041605856
custom: {}
---

# Pod

A pod is an external container for notes. As a human living in the 20th century, there's a good chance that you already have notes in a whole bunch of places. Dendron can import pods from external sources (eg. your file system, evernote, roam) into your workspace. 

To use a pod, launch the `Command Bar` and select `> Dendron: Import Pod`. From here, you can select from one of our builtin pods or use a third party pod (COMING SOON).

## Builtin Pods

### LocalFile Pod

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

- `projects.p1.md` contents
```

...
# Imported Assets
- [one.pdf](assets/one-c91d4cb3-1db8-4703-884f-c4f5f9a00734.pdf)

```

Note that all files starting with a `.` will be ignored during the import.
