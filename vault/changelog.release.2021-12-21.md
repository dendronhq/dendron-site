---
id: NWLX4IYsgJ6tjM93ZjVnt
title: "0.74"
desc: ''
updated: 1640189368036
created: 1640103385628
---

Dendron 0.74 has sprouted  🌱

The `Copy Note Link` command has been enhanced to easily create links to other files in your workspace, even if they aren't Dendron notes! This means being able to copy links to scripts, config files, etc. and add those links into your notes.

- [More info on `Copy Note Link`](https://wiki.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47/#copy-note-link)

The Getting Started tutorials have been refreshed, which included a variety of updates across different docs that are mentioned and referenced throughout! The updates address feedback provided by the community, and GitHub discussions.

- [Visit the Getting Started Docs](https://wiki.dendron.so/notes/678c77d9-ef2c-4537-97b5-64556d6337f1/)

### Highlights
- enhance(workspace): go to definition & hover works for wikilinks inside regular files
- enhance(navigation): copy note link now works inside files ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#copy-note-link]])

### Everything Else
- enhance(navigation): links to files can now link to specific lines ([[docs|dendron://dendron.dendron-site/dendron.topic.links#file-links]])
- enhance(views): Support new config to automatically show preview  ([[docs|dendron://dendron.dendron-site/dendron.ref.config.preview#automaticallyshowpreview]])
- enhance(navigation): links to files are now highlighted as existing if the linked file exists
- enhance(docs): update some links in tutorial docs
- fix(workspace): autocomplete deletes text following wikilink with no closing brackets
- fix(workspace): extension crash in non-Dendron workspaces when there's a large number of files
- fix(workspace): xkcd seed vault description
- fix(views): error when opening schema graph

### Doc Updates
- non note files have been renamed to files. this doesn't change code or behavior but references to "non-note" have been replaced with "file"
    - eg.  [[File Links|dendron://dendron.dendron-site/dendron.topic.links#file-links]]
- getting started guide refresh has been overhauled, with many more examples and a new jumping off point at the very end ([[docs|dendron://dendron.dendron-site/dendron.tutorial]]) ([diff](https://github.com/dendronhq/dendron-site/pull/316/files))

### Community

#### General Updates

Dendron was featured in the latest VS Code livestream!
- [Video](https://youtu.be/dW6m4_O0qvQ)
- [Our answers to in stream questions](https://twitter.com/dendronhq/status/1471580139771334664)

#### Updates to our Contribution Tiers

A lot of you have asked us for more flexibility when it comes to supporting Dendron financially. 
For individuals, we now offer one time contributions. 
For teams, we now offer dedicated business support as well as the ability to pay annually. 

The diff of changes:
- The **Seed** tier is now a one time contribution tier (pay what you want with a minimum):
- The **Sprout** tier is unchanged
- The **Tree** tier has new benefits (hand made Dendron illustrations and ability to give away Seed memberships)
- The **Forest** tier has been overhauled to focus on teams and businesses

Full details can be found [[here|dendron://dendron.dendron-site/dendron.contribute.financial]]!

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

![[dendron://dendron.dendron-site/community.reading-series.journal.2021.12.21]]

#### Office Hours
We will be hosting the last Office Hours of 2021 on **[Wed, Dec 22, 9:00 AM - 10:00 AM PST](https://link.dendron.so/6cqo)**

Notes, and the recording, of the previous Office Hours can be found [[here|dendron://dendron.dendron-site/community.office-hours.2021.12.08]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [icedwater](https://github.com/icedwater) `@icedwater#8514`
  - [feat: replaced instances of 'spwan' with 'spawn'](https://github.com/dendronhq/dendron/pull/1792)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - new config options not being filled in on upgrade
- [Zero King](https://github.com/l2dy) `@l2dy#9201`
  - horizontal lines on published site have 0px height
- [Ding Fan](https://github.com/Ding-Fan) `@rainmaker#7370`
  - [cannot search case insensitive with full length word](https://github.com/dendronhq/dendron/issues/1899)
- [Nicklas Gummesson](https://github.com/viddo) `@viddo#9229`
  - [GoToSiblingCommand: You found a bug! We didn't think this could happen but you proved us wrong](https://github.com/dendronhq/dendron/issues/1907)
- [Michael Harrison](https://github.com/micharris42) `@micharris42#6073`
  - [Note Traits - Missing JS file for Journal Notes](https://github.com/dendronhq/dendron/issues/1911)
- [jquesada2016](https://github.com/jquesada2016)
  - [Broken developer doc links](https://github.com/dendronhq/dendron/issues/1912)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - [`Doctor: fixFrontmatter` command adds empty line under frontmatter block](https://github.com/dendronhq/dendron/issues/1919)
- [Phani Rithvij](https://github.com/phanirithvij)
  - [show links in graph view when stubs are hidden](https://github.com/dendronhq/dendron/issues/1921)
- [Kumudan](https://github.com/kzilla-git) `@kzilla#8818`
  - [Broken Links Preview: Line number starts after frontmatter](https://github.com/dendronhq/dendron/issues/1936)
- [Florian Beijers](https://github.com/zersiax) `@zersiax#2665`
  - [Accessibility: Screen readers no longer accurately report current ctrl+l result](https://github.com/dendronhq/dendron/issues/1940)
- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
  - [Add npx command to Preview Your Site page](https://github.com/dendronhq/dendron-site/pull/320)


### Changelog
![[dendron://dendron.dendron-site/changelog#074:#0730]]
