---
id: 66727a39-d0a7-449b-a10d-f6c438185d7f
title: Pods
desc: ''
updated: 1595041605856
created: 1595041605856
custom: {}
---

# Pods 🚧

> Note: Pods are highly experimental and under active development. Content here is subject to change with no moments notice. 

<img src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.png" height="300px"/>

> Pod image courtesy of [Ilana Lin]((https://www.instagram.com/ilana_lin/))

Dendron refers to pods as anything you could conceivably use to store/publish notes. Evernote, Roam, static websites, twitter - any and all of these things are potential pods. 

Pods let you do the following:
- import your notes from any existing pod, converting and formatting the content to Dendron's hierarchal format. 
- export your notes to any existing pod, converting and formatting the content to the pods native format

To access pods, Dendron exposes three commands:
- `Dendron: Import Pod`: imports notes from an external data source 
- `Dendron: Build Pod`: prepares notes for export 
- `Dendron: Export Pod`: export notes (note that there are no pods with export capabilities at this time)

Note that not all pods will expose all three commands. The status of each pod method is represented by the following status symbols:
- ✅ supported 
- 🚧 supported but experimental 
- ➖ no support applicable 
- ❌ not currently supported

Dendron supports two kinds of pods:
- Builtin Pods
- Custom Pods

Builtin pods are installed with Dendron and can be invoked without any further action. Custom pods are `npm packages` that adopt the pod interface (TBD). These packages can be installed into the `pods` directory under Dendron to support additional sources not covered by the built-in pods. 

## Builtin Pods

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


## Custom Pods

TBD. Stay tuned
