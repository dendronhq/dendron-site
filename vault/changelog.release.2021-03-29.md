---
id: e71bcee0-2e97-49bd-ab5b-634df8903132
title: "0.35"
desc: ''
updated: 1630794855895
created: 1617039442351
---

Dendron 0.35 has sprouted  🌱

### Highlights
- better doctor command to fix common and uncomment ailments 👨‍⚕️
- better control of startup and publishing behavior 
- lots of bug fixes and stability improvements

### Spring Cleaning

Old style note references  are formally deprecated and will be removed in future releases. You can run dendron doctor with the `oldNoteRefToNew` option to migrate (remember to backup before migrating - in theory this is unnecessary)

### Community

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- Vivek Raja (`vivkr`) `+bugcatcher`
  - Lookup hangs on non-dendron workspace
  - plugin tries to index files outside of dendron workspace
- [Nbartzokas](https://github.com/nbartzokas)
  - Wildcard note ref causes formatting issues in lists of second and subsequent notes
- [Gijs-Jan Roelofs](https://github.com/gjroelofs) @GJ#4740  `+bugcatcher`
  - Syntax highlighting does not recognize Wiki-styled links.
- [Aditya](https://github.com/xypnox) @xypnox#1354 `+bugcatcher`
  - Heading References with footnotes doesn't work
- [John Meyer](https://github.com/af4jm) @John AF4JM#5463 
  - Ctrl-hover should NOT create a new note
  - schema graph issue
  - dendron startup file formatting 
- [John Young](https://github.com/iterating) @JohnYoung626#5967 
  - issue with refactoring

![[changelog#0341:#0340]]
