---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1601508213606
created: 1601508213606
stub: false
---

# Changelog

## [0.12.9](https://github.com/dendronhq/dendron/compare/v0.12.9-alpha.1...v0.12.9) (2020-10-15)

### Features

#### Human Friendly Timestamps (server mode)

Timestamps now have human friendly decorators on the side.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/daily.ts.jpg)

### Enhancements

- **copyAssets configuration**: when publishing, you can now toggle whether you want to copy assets or not
- **dump state**: dendron now has a `Dump State` command which will dump the internal state into the logs (useful for debugging)

### Bug Fixes
- **assets not being copied:** assets not copied on publishing when `assetsPrefix` was set
- **GoUp comman go to wrong note (server mode):** GoUp would sometimes try to open a stub node which would result in an error
- **Multiple workspaces result in bad timestamps (server mode):** Having multiple workspaces of the same vaults open could result in bad timestamps

### Documentation
((ref: [[dendron.troubleshooting]]#error upgrading:#*))


## [0.12.8](https://github.com/dendronhq/dendron/compare/v0.12.8-alpha.2...v0.12.8) (2020-10-14)

### Features

#### Really update time in frontmatter (server only)

Dendron notes have frontmatter with an **updated** field. This field is supposed to show you the time in milliseconds of when the document was last updated. Until today's update, this field did not actually change  😅

```
id: 65b03213-d3d1-46c0-9881-a6280ed9bdeb
title: New
desc: ''
updated: 1602096212957
created: 1602096212957
```

Today's update makes **updated** update! 

### Enhancements
- **support BuildPod command (server mode)**: build pod now works when server mode is enabled

### Bug Fixes
- **navigating to special notes**: scratch/journal notes could fail to open if note already exists

### Other 
((ref: [[dendron.topic.extensions]]#useful extensions))

((ref: [[dendron.tips]]#copy and paste web content into dendron:#*))

((ref: [[dendron.cook]]#mobile support:#*))

## [0.12.7](https://github.com/dendronhq/dendron/compare/v0.12.7-alpha.10...v0.12.7) (2020-10-13)

### Features

#### (Local) Server Side Indexing

Dendron can now index and manage your notes as a standalone **local** server independent from VSCode. 

This is part of the [[server migration milestone|dendron.roadmap.project.n.2020.server-migration]] which we took on for October. 

Dendron's server side indexing is a **complete rewrite** of the [[Dendron engine|dendron.dev.design.engine]] which powers Dendron's lookup capabilities. The new engine is **leaner, meaner, and significantly faster** (especially when initializing your workspace with a large amount of notes).

Server site indexing is a pre-cursor enables our upcoming roadmap items which include:

- [[multi-vault support|dendron.roadmap.project.n.2020.multi-vault]]
- rich graphical interfaces for schemas, pods, and publishing
- unified index for all dendron extensions (currently each extension makes a separate index of your notes and requires manual reloading)
- realtime updates for graph extensions
- custom dendron extensions written in any language 

Server side indexing is currently off by default since it's still a beta feature. You can turn it on by adding the following in your settings.

```json
"dendron.useExperimentalLSPSupport": true
```

Note that the current commands are currently un-available when you switch on on server side indexing:
- RenameNote
- Refactor Hierarchy
- Archive Hierarchy
- Realtime Schema Updates
- Pod Commands

You can switch back to regular indexing at anytime by changing the above setting to `false` and running `> Developer: Reload Window`. 

### Enhancements
- **Additional Arguments for lookup**: You can now use `noConfirm` and `value` arguments when creating custom lookup shortcuts ([docs](https://dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#passing-arguments-to-lookup))
- **Update Default Snippets**: default todo snippet now leaves a space after insertion
- **Set custom log levels**: you can now define the verbosity of dendron logs using the `dendron.logLevel` configuration
- **Upgraded Schema defaults** (server only): new schemas will be created using version one defaults
- **Cleaner note frontmatter** (server only): new notes won't have the optional attributes in frontmatter

### Bug Fixes
- **Missing logs**: issue where `Open Logs` would not show logs
- **Tree View empty**: tree view would not populate in some cases
- **Upgrade Snippets with comments**: Upgrading settings would fail if they had comments inside the JSON

### Breaking Changes
- **Remove Scratch Note Command**: replaced by Lookup Scratch Note shortcut
- **Remove Journal Note Command**: replaced by Lookup Journal Note shortcut

### Progress

#### Server Migration

These past two weeks have been spent on server migration work. We are almost at the end and I'm aiming to have full coverage of all existing functionality by early next week.

((ref: [[dendron.roadmap.project.n.2020.server-migration]]#tasks,1:#*))

### Other 
- Add overview of [[configuration|dendron.topic.config]]
- Add proposal for [[custom color tabs|dendron.roadmap.project.n.backlog.color-tabs]]

## [0.12.6](https://github.com/dendronhq/dendron/compare/v0.12.5...v0.12.6) (2020-10-07)

### Features

#### Default Snippets

Dendron now initializes your workspace with common default snippets

((ref: [[dendron.topic.snippets]]#default snippets,1:#*))

#### Latex Support on Published Site

((ref: [[dendron.related.dendron-jekyll.topic.math]]#math,1:#*))

#### Introduce siteRepoDir Customization

((ref: [[dendron.topic.publishing.configuration]]#siterepodir,1:#*))

### Bug Fixes

- trying to publish the `dendron-template` no longer results in a missing links report
- issue with schemas not showing up under lookup

### Progress

This section tracks our progress against the milestones in our [[public roadmap|dendron.roadmap]]

- [x] [[Seeds v0|dendron.roadmap.project.n.2020.seeds]]
- [ ] Server migration, progress: 70/100
    - below is a summary of our progress. we are currently about half way done
    - aiming to have a workable version using the Dendron server by next week
((ref: [[dendron.roadmap.project.n.2020.server-migration]]#tasks,1:#*))

### Other 

#### Seeds
- We launched two [[seeds|dendron.topic.seeds]]. A seed is a dendron site that tries to be be a all encompassing reference for a particular vertical. Dendron provides specific libraries and CLIs that make it easy for users to create seeds from existing open source content as well as personal notes.

Current Seeds:
    - open PKM catalogue
    - open AWS catalogue

((ref: [[dendron.showcase]]#open pkm catalogue,1:#*))
((ref: [[dendron.showcase]]#open aws catalogue,1:#*))

#### Alternatives

this announcement also comes with an ask. Dendron is now in [AlternativesTo](https://alternativeto.net/), a crowdsourced catalogue for software recommendations. If you like Dendron and want to help us spread the word 🌱, please leave us a review [here](https://alternativeto.net/software/dendron/reviews/) 🙏


## [0.12.4](https://github.com/dendronhq/dendron/compare/v0.12.4-alpha.11...v0.12.4) (2020-09-30)


### Features

#### Live schema updates 
- schema changes are now updated in realtime. no more `Reload Index`
- NOTE: this doesn't yet apply to `Show Schema Graph`. you'll still need to run `Reload Index` to see the changes in the graph

### Enhancements

- **lookup:** special notes are now created via lookup ([da825a9](https://github.com/dendronhq/dendron/commit/da825a9d2b1ec10a3f9d3eac20db06448fe5344b))
    - instead of being a separate command, journal and scratch notes are now created using the regular lookup interface
    - new keybindings have been introduced to [map old commands to new style lookups](https://dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#passing-arguments-to-lookup)
    - `Create Journal Note` and `Create Scratch Note` still exist as commands but will be deprecated in the next minor release 

- **lookup:** support lookups opening with a new split ([da825a9](https://github.com/dendronhq/dendron/commit/da825a9d2b1ec10a3f9d3eac20db06448fe5344b))

((ref: [[dendron.topic.lookup]]#split toggle))

- **refs:** easier note ref selection([114ff87](https://github.com/dendronhq/dendron/commit/114ff87be04f8d746b0be28f7627ba0d1ec9b504))

Dendron will now recognize a header selection if you have any part of the header highlighted (vs needing to highlight the entire line)

((ref: [[dendron.topic.commands]]#copy note ref:#*))

### Documentation
- we published our public roadmap

((ref: [[dendron.roadmap]]))

- changelog moved to dedicated [page](https://dendron.so/notes/9bc92432-a24c-492b-b831-4d5378c1692b.html)
- lookup menu docs
((ref: [[dendron.topic.lookup]]#lookup menu:#*))

### Community Highlights

- a new planter has appeared 🌲
((ref: [[dendron.showcase]]#luke's second brain))