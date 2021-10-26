---
id: dmymhrncBTSn2q4ZgKy5B
title: Release Notes (version 0.65)
desc: ''
updated: 1635270099452
created: 1635269443644
---

Dendron 0.65 has sprouted  🌱

This week features tons of bug fixes, an easier to use schema format, and a new command to move headers within notes to different notes! 

Note that there are some automatic configuration changes that we are making as part of our config consolidation. This should happen transparently but if for some reason your `dendron.yml` is not migrated, you can follow instructions in [[#breaking]] to manually upgrade your config. 

### Highlights
- enhance(schemas): expand schema format to allow for inlined children ([[docs|dendron://dendron.dendron-site/dendron.topic.schema#inline-schema-anatomy]]) 
- feat(command): move header command ([[docs|dendron.topic.commands#move-header]])
- enhance(cli): support output option when using `dendron note lookup` ([[docs|dendron://dendron.dendron-site/dendron.topic.cli.notes#lookup]])

### Breaking

This release includes various fixes, and a breaking changes section about new dendron.yml changes. This should automatically be taken care of when starting up your Dendron workspace. For more information, see the changelog. Another way to migrate to the latest configuration format is via the latest CLI release:

```
dendron dev run_migration --migrationVersion 0.64.1
```

### Everything Else
- enhance(cli): add run migration command in cli ([[docs|dendron.dev.cli#run_migration]])
- enhance(commands): update default aliases when note is updated
- enhance(pods): enhance gdoc import formatting 
- fix(publish): make assetPrefix apply to all link elements
- fix(workspace): update yml validation to latest config version
- fix(publish): make 11ty publishing compatible with config version 3
- fix(workspace): notes getting whitespace changes after workspace sync 
- fix(workspace): frontmatter variable substitution not rendering in preview V2 
- fix(markdown): email parsed as user tag & option to disable user tags and hashtags 
- fix(markdown): footnote links move view in publishing & preview 
- fix(publish): remove .next dir if it exists in publish init 
- fix(publish): title parts duplicated in Next publishing search 
- fix(commands): move header command modifying unrelated note content 

### Community

#### General Updates

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

#### Office Hours

<!-- TODO: update the link -->
You can find notes from our latest office hours [[here|community.office-hours.2021.09.]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

### Changelog
![[dendron.release.changelog#064,1:#063]]
