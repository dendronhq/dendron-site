---
id: 73d395c9-5041-4d0d-9db7-080d9586136e
title: Publishing
desc: ''
updated: 1595170096361
created: 1595170096361
---

# Publishing 🚧

Dendron lets you publish the contents of your vault, either in its entirety or only a subset. What gets published is controlled by the `dendron.yml` file located inside your workspace. 

## Limitations

- publishing only works with pages but not any assets that you might have (eg. images pasted using `Paste Images`)
- currently not possible to publish multiple domains
  - current options when it comes to publishing are either everything (by setting noteRoot to `root`), one domain, or nothing
  - If you would like this feature, you can vote for it [here](https://github.com/dendronhq/dendron/issues/64).

## dendron.yml
```yml
site:
  # the note that will serve as the root of your published website
  # by default, dendron will set the root to `root`
  # 
  # this means the contents of `root.md` will be set as your home 
  # page and that all the contents # of your vault will be published
  # 
  # you can change the root to a specific `domain` 
  # this will set that `domain` as the home page
  # and publish everything under that domain
  noteRoot: root
  # there's usually a built step before publishing your site
  # eg. converting your markdown files into jekyll-compatible
  # markdown files
  # 
  # this controls where the new documents will be published
  siteRoot: docs
```

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
/pages/)
- Setup a github repo with [github pages enabled](https://guides.github.com/features/pages/)
  - when selecting the source, make sure to pick `master branch/docs folder`
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/gh-page-docs.jpg)
- Create an initial commit and push your vault to your github page

### Guide
1. Depending on what notes you want to publish, you will want to update your `dendron.yml` file. By default, everything will be published
2. When you are ready to publish, run the `> Dendron: Build Pod` command to prepare your site for publication. This builds your notes into the `siteRoot` directory which defaults to `docs`.
<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/3d97846081b64c7baea23ff9d01512cd-with-play.gif"> 
3. Commit your changes.
<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/3ce95a74c0cc40c5bd96ae1775edebbd-with-play.gif"> 
4. Push your repository using `> Git: Push`



