---
id: nB_CscjeWXqMfdcHfP7iX
title: '0.48'
desc: ''
updated: 1640427528696
created: 1624886454307
excerpt: 'Export to folders, better handling of merges, and lots of QoL improvements'
---


Dendron 0.48 has sprouted  🌱

### Highlights
- Markdown pod supports exporting to folders. You can now export your Dendron vault to GitHub/GitLab native wikis! 
- No more merge conflicts in a shared vault! The `updated` timestamp will no longer update if you have no material updates to the notes (simply opening and saving a file doesn't count). 
- Bad frontmatter no longer crashes Dendron. 
- Cursor moves to the end of opened notes and frontmatter folds by default. 
- Support filtering graph by regex and stubs
- Dendron functionality (except Hooks) works when `limited in restricted mode` through VS Code Workspace Trust. 

### Docs

Our documentation changes a lot week by week. Below is a highlight of some updates from the past week.
- Updated our values to include [[sensible defaults|dendron.principles#sensible-defaults]]
- Updated options for [[Graph View|dendron.topic.graph-view]]

### Ongoing 
-   We're still working on [adding unlinked references to backlinks tab](https://github.com/dendronhq/dendron/issues/219) from a couple weeks ago. Will take a few weeks to sprout but on track to be ready early July!

### Community

#### Office Hours

You can find notes from our latest office hours [[here|community.events.office-hours.2021.06.27]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 

- [Harshita Joshi](https://github.com/Harshita-mindfire) @Joshi#5537
  - `+taxonomist`
  - [typo in dev setup](https://github.com/dendronhq/dendron-site/pull/127)
  - `+horticulturalist`
  - [AJV to validate export config](https://github.com/dendronhq/dendron/pull/872)
- [Henry Fellerhoff](https://github.com/hfellerhoff) @henryfellerhoff#5739
  - `+horticulturalist`
  - [Graph View enhancements and more](https://github.com/dendronhq/dendron/pull/868)
- [Kaan Genc](https://github.com/SeriousBug) @SeriousBug#6848
  - `+horticulturalist`
  - [Notes failing to parse no longer crashes Dendron and more](https://github.com/dendronhq/dendron/pull/855)
  - [Using an invalid note name during Move Note breaks future moves as well](https://github.com/dendronhq/dendron/issues/869)
- [Jonathan Yeung](https://github.com/jonathanyeung) @mobius#6646
  - `+horticulturalist`
  - [Improved Import pod error recovery](https://github.com/dendronhq/dendron/pull/865)
- [8Brandon](https://github.com/8brandon) @8brandon#3208
  - [0.47 issue on initial install, fixed by downgrading and upgrading ](https://github.com/dendronhq/dendron/issues/857)
- [LoPawlie](https://github.com/LoPawlie)
  - [Having '.md' anywhere inside new note name will break title generation](https://github.com/dendronhq/dendron/issues/856)


You can see an overview of all roles [[here|community.discord.roles]]

### Changelog
![[changelog#048,1:#047]]
