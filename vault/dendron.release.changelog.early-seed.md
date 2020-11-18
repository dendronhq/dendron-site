---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1605740317605
created: 1604539200840
---

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