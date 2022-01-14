---
id: dmymhrncBTSn2q4ZgKy5B
title: '0.65'
desc: ''
updated: 1635282552202
created: 1635269443644
---

Dendron 0.65 has sprouted  🌱

This week features tons of bug fixes, an easier to use schema format, and a new command to move headers within notes to different notes! 

Note that there are some automatic configuration changes that we are making as part of our config consolidation. This should happen transparently but if for some reason your `dendron.yml` is not migrated, you can follow instructions [[here|#breaking]] to manually upgrade your config. 

### Highlights
- enhance(schemas): expand schema format to allow for inlined children ([[docs|dendron://dendron.dendron-site/dendron.topic.schema#inline-schema-anatomy]]) 
- feat(command): move header command ([[docs|dendron.topic.refactoring#move-header]])
- enhance(cli): support output option when using `dendron note lookup` ([[docs|dendron://dendron.dendron-site/dendron.ref.cli.notes#lookup]])

### Breaking

This release includes various fixes, and a breaking changes section about new dendron.yml changes. This should automatically be taken care of when starting up your Dendron workspace. For more information, see the changelog. Another way to migrate to the latest configuration format is via the latest CLI release:

```
dendron dev run_migration --migrationVersion 0.64.1
```

### Everything Else
- enhance(cli): add run migration command in cli ([[docs|etc.cli#run_migration]])
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
- fix(publish): title parts duplicated in Next.js publishing search 
- fix(commands): move header command modifying unrelated note content 

### Community

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.events.reading-series]]. 

![[dendron://dendron.dendron-site/community.events.reading-series.2021.10.26]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]]

- [Ikko Ashimine](https://github.com/eltociear)
    - #role.taxonomist
    - fix typo in test-workspace
- [Kim Sia Sim](https://github.com/simkimsia) `@kimsia#3035` 
    - #role.bugcatcher
    - #role.env
    - [Helpful "Edit in GitHub" link missing in tutorial when VS Code](https://github.com/dendronhq/dendron/issues/1582)
    - [Dendron COmmand palette > sign in / Sign up > leads to broken auth link](https://github.com/dendronhq/dendron/issues/1580)
- [demorganslaw](https://github.com/demorganslaw) `@demorganslaw#3718` 
    - #role.bugcatcher
    - [CLI getting "DendronError: no root found for <file_stem>](https://github.com/dendronhq/dendron/issues/1579)
- [Guilherme Costa](https://github.com/guilhermesfc) `@Guilherme Costa#9124`
    - #role.bugcatcher
    - [lookupConfirmVaultOnCreate: true does not prompt which vault to create notes](https://github.com/dendronhq/dendron/issues/1570)
- [Idan Gazit](https://github.com/idan) `@idan#8549`
    - #role.bugcatcher
    - [.gitignore should include seeds by default ](https://github.com/dendronhq/dendron/issues/1576)
- [Tycholiz](https://github.com/Tycholiz) `Tychronos#6624`
    - [Refactor Hierarchy does not obey stubs with content](https://github.com/dendronhq/dendron/issues/1563)
    - [Lookup tool shows + sign on already existing notes](https://github.com/dendronhq/dendron/issues/1558)
- [Laurentiu Nicola](https://github.com/lnicola) `@lnicola#6853`
    - #role.taxonomist
    - fix typo in issue templates
### Changelog
![[changelog#065,1:#0640]]
