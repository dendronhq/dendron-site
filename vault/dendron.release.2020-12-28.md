---
id: e05c751f-7d5c-4fcf-8868-01092813d1dd
title: Release Notes(version 0.22)
desc: ''
updated: 1609990585313
created: 1609180024902
---
Dendron 0.22 is here 🌱

This release focuses on Dendron's [[Publishing v2|dendron.topic.publishing]]. With this release, v2 is functionally at feature parity with our legacy jekyll based publishing (and over 30x faster). You can see the remaining gaps [[here|dendron.topic.publishing.migration#gaps]]. These should be closed by the end of this week. 

- NOTE: to get the latest publishing changes, make sure to run the following commands in your workspace. See [[here|dendron.topic.publishing.quickstart]] for setup instructions

```
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty@latest
```

### Highlights

- dendron v2 publishing functionally at feature parity with legacy publishing
  - we're using it to host [dendron.so](https://dendron.so/) now :)
- [[github actions based publishing workflow|dendron.topic.publishing.github]] 
  - keep a clean git history by having github manage building your website 
- bug fixes and performance improvements

### In the Works

- Integrate publishing with plugin
- Auto generate title based on frontmatter
- More publishing and preview features

### Thanks

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release 👨‍🌾 👩‍🌾

- first timer (see [[roles here|dendron.community.roles]])
  - bug catchers: @Metalsmf#7744 @Stephen#8544 @muon#1974 @Francobar#1299 
  - taxonomist: @eeBaiQuai#1157 
- all contributions
  - Britt Richardson (@Metalsmf#7744)
    - issue building site on diff versions of node
    - [fix typo](https://github.com/dendronhq/dendron-site/pull/50)
  - [flammehawk](https://github.com/flammehawk)
    - [remove colors from dev env](https://github.com/dendronhq/dendron/pull/423)
  - Stephen (@Stephen#8544)
    - issue building 11ty on multiple operating systems
  - Muon (@muon#1974) and [Franco Barbeite](https://github.com/FrancoB411):
    - [issue with math in preview](https://app.zenhub.com/workspaces/dendron-5f06937cfa4f3b001d5673c9/issues/dendronhq/dendron/424)
  - [Newman5](https://github.com/Newman5)
    - [typo in faq](https://github.com/dendronhq/dendron/pull/426)

### Changelog

((ref:[[dendron.release.changelog]]#0.21.2:#0.20.2))

