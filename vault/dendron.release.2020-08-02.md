---
id: e32aa1e2-9780-4183-927e-2f46372050aa
title: '2020-08-02 Release Notes'
desc: ''
updated: 1596374984386
created: 1596374984386
---


# 2020-08-02 Release Notes (version 0.5)

With the coming of August, 2020 is officially on the wane. I think many of us are ready for a fresh start. In the meantime, you can prepare for better times by playing with new Dendron features. Happy gardening! 🌱


With this release, we are also conducting our first dendron user survey. It's a short survey that should take no more than 3 minutes to fill out and will help inform me on the future growth of Dendron. Your participation is immensely appreciated 🙏

https://forms.gle/PPqe2axvwEmpXj4v5

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)

## Legend

- 🚧 experimental feature

## Commands

Dendron has a series of built-in commands. They are all prefixed with `Dendron:` and can be accessed through the [command prompt](https://www.dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html#command-bar).

### Add Doctor Command 
([d4fa71c](https://github.com/dendronhq/dendron/commit/d4fa71cd839782587d47a3ba1b0f7e89742e7ffe)) ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#doctor))


This makes sure your workspace is up to date. It will execute the following actions:
- add ids and titles to the frontmatter of all notes that are missing it
- setup a `docs` folder if it doesn't exist. Required if you want to [[publish | dendron.topic.publishing]] your notes

<a href="https://www.loom.com/share/bd045f708f8e474193de8e3de0dc820f"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/bd045f708f8e474193de8e3de0dc820f-with-play.gif"> 
</a>


### Add ShowHelp Command 
([ecf3c68](https://github.com/dendronhq/dendron/commit/ecf3c6822848834d9a00e373d1c59b6628e7f4df))([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#show-help))

Dendron will open your current browser to the [[quickstart | dendron.quickstart]] page. 

<a href="https://www.loom.com/share/b81ce02f30b84d79b92584f339184a00">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/b81ce02f30b84d79b92584f339184a00-with-play.gif"> 
</a>


## Pods

Pods are the mechanisms Dendron uses to import and export notes. Dendron has a different pod depending on where you are getting and publishing your data to. 

### 🚧 Support Publishing Notes
([e063732](https://github.com/dendronhq/dendron/commit/e063732d1ff082dd8520a479926e7ceb1b0893ab)) ([docs](https://www.dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html))

Dendron lets you publish the contents of your vault, either in its entirety or only a subset. Notes are published under the [dendron-jekyll theme](https://github.com/dendronhq/dendron-jekyll). 

### Features

#### Nested Hierarchies

dendron-Jekyll supports the same nested hierarchies as your notes and allows you to navigate via the sidebar.

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-hierarchy.gif" />

#### Lookup

If you'd rather not click, dendron-Jekyll also supports path-based lookup.

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-lookup.gif" />

#### Permanent Ids

Every page is published using its unique ID which means that URLs will never change, even if the filenames do.

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-ids.jpg" />

#### Free hosting, custom domain names and SSL Certs

If you have a free GitHub account, then you can host your Dendron notes for free using [github pages](https://pages.github.com/) 

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-domain.jpg" />

#### Jekyll Liquid Tags and Variables 
- NOTE: this will only be "compiled" in the published site but won't be rendered in the regular markdown 

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-liquid.gif" />

#### Selective Publication

You can choose to publish your whole vault or a single domain within your vault. 

- NOTE: It is not currently possible to publish multiple domains. If you would like this feature, you can vote for it [here](https://github.com/dendronhq/dendron/issues/64).

### Setup initial workspace to be ready for publishing 
([e1242b4](https://github.com/dendronhq/dendron/commit/e1242b494cc91b3284053b54dccecc4e4686ab7d))

All workspaces created from Dendron `0.5` onwards will have all the necessary configuration pre-loaded for publishing. 

## Schemas

Think of schemas as an **optional type system** for your notes. They describe the hierarchy of your data and are themselves, represented as a hierarchy.

### Enable lookup for Schemas 
([19b4677](https://github.com/dendronhq/dendron/commit/19b46770fe6a842831692563de96ff4a823df871)) ([docs](https://www.dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#schemas))

The process for finding schemas using Dendron is the same as that for finding notes. One lookup to rule them all. 

Find Schema
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-lookup.gif)

Create Schema
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-create.gif)

Delete Schema
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-delete.gif)

### Schema Templates 
([0205d66](https://github.com/dendronhq/dendron/commit/0205d66fc4538361322ffeabb3e532f0d541b775)) ([docs](https://www.dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#schema-templates))

Schema templates let you specify a pre-defined template that will automatically be applied to all notes that match the template. You can see a video of how this works below.

This is extremely useful whenever you want to re-use the outline of a note. Examples include daily journals, weekly shopping lists, and weekly reviews.  

<a href="https://www.loom.com/share/481b7ab051394c1caa383383bd265755"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/481b7ab051394c1caa383383bd265755-with-play.gif"> 
</a>

### Simpler Schema Syntax 
([d53ddb](https://github.com/dendronhq/dendron/commit/d53ddb73bfacc3f769db88cfd4f482a706dcb6dd))

Schema syntax has been simplified. Before we had an extra `data` field to namespace the `namespace` field. We flattened all schema attributes to make the syntax more elegant. Note that the old styled `data` syntax is still supported but we recommend moving to the new syntax as `data` will be deprecated in a few releases.



## Fixes

Bugfixes for this release

- Fix issue with Journal Names on Windows ([d0bfe7f](https://github.com/dendronhq/dendron/commit/d0bfe7fb0288e8610fc4b177ee85697a8ebc3efe))
- Stub nodes should keep parents when deleted ([f32f291](https://github.com/dendronhq/dendron/commit/f32f291bc7a1ddd6c542483730e2db74b400dafa))
- Issue with Urls in published site ([0ac8e75](https://github.com/dendronhq/dendron/commit/0ac8e75c95a9c4760e12bb301fc5b66b011ef0fb))


## Enhancements
- CI/CD testing ([d6ce68c](https://github.com/dendronhq/dendron/commit/d6ce68c720d7e8c96d7f4bb6ab390c1bd52c5218))
  - Dendron now has continuous integration tests for all pushes. ![](https://travis-ci.com/dendronhq/dendron.svg?branch=master)
  - Tests run on mac, linux and windows which means moving forward, there should be fewer OS (aka Windows) related issues 
- Update [quickstart docs](http://localhost:4000/notes/e86ac3ab-dbe1-47a1-bcd7-9df0d0490b40.html)  to showcase new features ([aec0fe0](https://github.com/dendronhq/dendron/commit/aec0fe0939239d84f5b7ebd9ebae57a09bcdae43))

## Next

A teaser of some items we are working on for the next release. You can see the full roadmap [here](https://github.com/orgs/dendronhq/projects/1). To join the discussion on upcoming roadmap items, check out the  [#roadmap](https://discord.gg/HzkFcs) channel on Discord. 

### Refactor Hierarchies

- [issue](https://github.com/dendronhq/dendron/issues/39)

Be able to refactor hierarchies and have all file names and links automatically update. This was supposed to go out in this week's release but there are just a few items left that need to 

### More Templates and Examples

Many of you have asked for examples of how to best use Dendron. We will be publishing a list of such demos on [Dendron](https://dendron.so)

## Thank You

Last and most of all, a big **thanks** to all these people that contributed issues and suggestions during this release.

- [Alexis Argyris](https://github.com/alexisargyris)
- [Gustav](https://github.com/Whil-)
- [Jochen Burkhard](https://github.com/herop)