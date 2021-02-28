---
id: e543ad13-1108-448c-b3a6-9976fd7a65ce
title: Release Notes(version 0.21)
desc: ''
updated: 1609990585326
created: 1608580995965
---
Dendron 0.21 is here 🌱

With 0.21, multi-vault should now be at feature parity with single vault workspaces. Multi-vault specific behavior is documented [[here|dendron.topic.multi-vault]].

0.21 also brings about Dendron's 2nd Generation publishing feature. This is a faster, leaner, and more powerful way to publish your notes using Dendron. 

There's still some work left to integrate publishing into the Dendron plugin - meanwhile, you can take the new publishing workflow for a spin by following the instructions [[here|dendron.topic.publishing.quickstart]]

### Highlights

- publishing v2
  - v2 is over 30x faster (compiling the dendron site takes 6s for 200 pages vs 220s in v1) 🚀🚀🚀
  - v2 supports publishing with multi-vault
  - v2 is all javascript (no more download ruby just to publish)
- support note references for multi-vault
- bug fixes and performance improvements

### Community

- new bug catchers: @rasmuse#4440 @Contessa#0861 @TokyoMike#2771 
- new environmentalist: @Stephen#8544 

You can find a description of all roles [[here|dendron.community.roles]]

### In the Works

- bring publishing v2 to feature parity
- better note references 

### Thanks

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release 👨‍🌾 👩‍🌾

- [Rasmus Einarsson](https://github.com/rasmuse)
  - [Self referential refactoring issue](https://github.com/dendronhq/dendron/issues/406)
- [Whitney](https://github.com/whitbur)
  - [Note creation from selected text mangles non-vault files](https://github.com/dendronhq/dendron/issues/410)
- [Mike](https://github.com/ms3056)
  - [Matching requires unique files for lower nodes](https://github.com/dendronhq/dendron/issues/407)

### Changelog

((ref:[[dendron.release.changelog]]#0.20.2:#0.19.3))

