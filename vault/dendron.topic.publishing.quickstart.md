---
id: c800d576-789c-4a68-ac03-a66efd40d39b
title: Quickstart
desc: ''
updated: 1600564090683
created: 1600564090683
stub: false
nav_order: 2
---

# Quickstart

NOTE: it's possible to publish Dendron on any platform that can host static sites. This guide covers publishing to [Github Pages](https://pages.github.com/)

### Pre-requisites
- Create an account on [github](https://github.com/)
- Follow the instructions [here](https://pages.github.com/) to create a repository named `{username}.github.io` where `{username}` is your username on Github
- Setup a github repo with [github pages enabled](https://guides.github.com/features/pages/)
  - when selecting the source, make sure to pick `master branch/docs folder`
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/gh-page-docs.jpg)
- Create an initial commit and push your vault to your github page

### Guide
1. Depending on what notes you want to publish, you will want to update your `dendron.yml` file. By default, everything will be published
1. Update the contents of `_config.yml` inside your `docs` folder to specify site wide configuration like logo and title.
    - NOTE: this is located relative to `dendron.rootDir`
    - if you do not have a `docs` folder, you can run `Dev:Dendron: Doctor` to create one
2. When you are ready to publish, run the `> Dendron: Build Pod` command to prepare your site for publication. This builds your notes into the `siteRootDir` directory which defaults to `docs`. `Build Pod` does the following when it builds your site:
    - copies over the notes specified in `dendron.yml`
    - creates a copy of your notes with the ids in place of the file names 
    - updates all `wiki-links` to `markdown-links` so Jekyll can process it, preserving titles if there are any
3. Commit your changes.
4. Push your repository using `> Git: Push`

<a href="https://www.youtube.com/watch?v=VOZJxKg0-js">![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/dendron-publishing.jpg)</a>
