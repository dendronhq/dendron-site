---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1606074166341
created: 1604539200840
---
## 0.16.3

### Enhancements
- **language**: better completion ([e7489b3](https://github.com/dendronhq/dendron/commit/e7489b324fb8b5b1a0cb3daf4bd33978073bd90a))
- **workbench**: remove color theme and minimap presets ([6b6bd8d](https://github.com/dendronhq/dendron/commit/6b6bd8d1b866bfe881b8ed7c341e5f2191bfa741))
- **publishing**: support relative links in publishing ([d7d612d](https://github.com/dendronhq/dendron/commit/d7d612d00bf0fedfc5e7dc9beda1e00927be83a9))
- **notes:** rename the frontmatter title when note is renamed ([32c77a1](https://github.com/dendronhq/dendron/commit/32c77a1a97162150b88c97c9266bd2a42a816aa0))

### Bug Fixes
- **language**: re-enable preview functionality when peeking at a definition ([afe71c4](https://github.com/dendronhq/dendron/commit/afe71c41daff3acc935cb5bed7b51d20ef8e6267))
- **workbench**: initialize dendron in the absence of a workspace file ([c1aabb4](https://github.com/dendronhq/dendron/commit/c1aabb4a6b2084990269ea169c1a90d800b430c3))
- **workbench**: cancel adding a vault if input is blank ([86baed6](https://github.com/dendronhq/dendron/commit/86baed6e0938132709e4cfbd2008f1f8fadc77cb))
- **pods:** publish issue when multi-vault is enabled ([cc50327](https://github.com/dendronhq/dendron/commit/cc503276a0ca0545e2793449f7382bc810216377))
- **ui:** note will show up in wrong place in treeview when multi-vault is enabled ([6daeebc](https://github.com/dendronhq/dendron/commit/6daeebc7bd2bbc68fc105766d30bc10444bcaf61))

## 0.16.2

- NOTE: with this change, Dendron now has all the functionality of **Dendron Markdown Notes** built-in (and then some). To make sure you get the new link functionality, uninstall Dendron Markdown Notes

![uninstall ](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/etc.install.jpg)

### Features

#### Support Relative Wiki Links

You can now navigate to a specific section within a note using relative wiki links: `[[foo#header]]` 

Note that the header is expected in [github slug](https://github.com/gosimple/slug) format. This means that spaces and special characters should be replaced with `-`. 

NOTE: Relative wiki links currently won't work when publishing (this will be added later this week)

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/b21501b47e64449882a369590a630d7f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Copy Relative Wiki Links

Similarly to copying a note ref, if you select any part of a header while running `Copy Note Link`, a relative wiki-link will be automatically generated.

((ref: [[dendron.topic.commands]]#copy note link:#*))

#### All link features are now multi-vault aware

Link related features like navigation and auto complete can now detect notes in all vaults. 

When the same note exists in multiple vaults, Dendron will show you a prompt to pick the note you want to navigate to.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/1108e35e262c4d428629d0a4034090d0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Link Completion with Aliases

You can now auto complete notes that have aliases. This was a common issue for folks that were using [[pretty tags|dendron.topic.tags]]

### Bug Fixes
- Issue with creating notes with same name in a new vault

### House Cleaning
- remove dependency on markdown-notes