---
id: 73d395c9-5041-4d0d-9db7-080d9586136e
title: Publishing
desc: ''
updated: 1595170096361
created: 1595170096361
---

# Publishing

Dendron lets you publish the contents of your vault, either in its entirety or only a subset. What gets published is controlled by the `dendron.yml` file located inside your workspace. 

## dendron.yml
```yml
publish:
  # the root of the published website. by default, dendron will set the root to `root.md`
  # this means the contents of `root.md` will be set as your home page and that all the contents
  # of your vault will be published
  # you can change the root to a specific `domain`. this will set that `domain` as the home page
  # and publish everything under that domain
  root: root 

```

Note that it is not yet possible to publish multiple domains. Current options are either everything, one domain, or nothing. If you would like this feature, you can vote for it [here](https://github.com/dendronhq/dendron/issues/64).

### Example publishing entire vault
- vault
```
.
├── root.md
├── dendron.md
├── dendron.quickstart.md
├── dendron.zen.md
├── flowers.md
└── flowers.bud.md
```
- dendron.yml
```yml
publish:
  root: root
```
- what gets published

```
.
└── root.md
    ├── dendron
    │   ├── dendron.quickstart
    │   └── dendron.zen
    └── flowers
        └── flowers.bud
```

### Example publishing just one domain
- vault
```
.
├── root.md
├── dendron.md
├── dendron.quickstart.md
└── dendron.zen.md
```
- dendron.yml
```yml
publish:
  root: dendron
```
- published:

```
.
└── dendron
    ├── dendron.quickstart
    └── dendron.zen
```

## Steps

### Pre-requisites
- Make sure you have a `docs` folder inside `dendron.rootDir`.
    - If you've created your workspace using `Dendron: Initialize Workspace` on 0.4.2 or later, this is already done 
    - If you've created your workspace before `0.4.2` or have manually created your workspace, you can run `Dendron: Doctor` to create this folder

### Guide
1. Depending on what notes you want to publish, you will want to update your `dendron.yml` file


