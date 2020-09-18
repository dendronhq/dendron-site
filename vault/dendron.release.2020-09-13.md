---
id: 50071eda-fc46-4aca-ba6c-9d53db00d068
title: 2020-09-13 Release Notes
desc: ''
updated: 1596374871110
created: 1596374871110
stub: false
---

# 2020-09-13 Release Notes (version 0.11)

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/comic.1.png)

- My wife, Ilana Lin, drew a comic for this week's release. Follow her on [instagram](https://www.instagram.com/accidentalflower/) and she might draw more comics for Dendron 😇

## Summary

This week's release comes with improved references as well as better tooling around pods and snippets. 

**Dendron's pretty refs** help you identify when content is embedded from elsewhere and provide links back to the source. 

((ref: [[dendron.topic.refs]]#references,1:#*)) 

The **Dendron CLI** lets you access a subset of Dendron's functionality inside the terminal, including the ability to import/export your notes. 

We also released the **Dendron Snippet Maker**, a standalone extension that comes bundled with Dendron which helps you create [[snippets|dendron.topic.snippets]] from the current selected text.

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)


## CLI
### Release Dendron CLI 

Dendron now has a its own CLI that you can run standalone from the Dendron plugin.

((ref: [[dendron.topic.cli]]#install))


### Enhancements
- Run export pod using cli
 
- Run import pod using cli
 
- Run backfill using cli
 

### Fixes
- Import using cli not initialized in certain cases 

## Notes
### New note from selection cmd 

((ref: [[dendron.topic.commands]]#new note from selection,1:#*))


## Pods
### Add configure pod command 

((ref: [[dendron.topic.commands]]#configure pod,1:#*))


### Enhancements
- Use consistent interface for import/export
 
- Additional additional options on export
 ((ref: [[dendron.topic.pod]]#export config,1))
  

### Fixes
- Deal with `.` when importing directories 

## Publishing
### Published sites use pretty refs 

((ref: [[dendron.topic.publishing]]#note references,1:#*))


### Support noindex option 

((ref: [[dendron.topic.publishing]]#exclude from indexing,1:#*))


### Enhancements
- Add config to specify pretty refs
 

### Fixes
- Update bad links 
- Fix ref display on published site 

## Refs
### Support wildcard refs 

((ref: [[dendron.topic.refs]]#wildcard header ref,1))


### Enhancements
- Create ref with anchor if selected
 
- Render refs in container
 

### Fixes
- Bad ref resolution  

## Workbench
### Dendron Snippet Maker 

((ref: [[dendron.related.dendron-snippet-maker]]#dendron snippet maker,1))


### Enhancements
- Friendlier default settings
 
## Community Announcements

### Planters

A bunch of our fellow Dendronites have published notes using Dendron. You can check it at the [[showcase|dendron.showcase]].

We've also created a new role -> @Planter :man_farmer::woman_farmer: , to recognize folks who have published using Dendron.

If you have a site you would like to showcase, please ping Kevin (kevin@dendron.so) or edit the showcase page directly and adding your site :)

## Thank You

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.

- [Fayçal](https://github.com/d3vr)
    - giving us the dendron emoji

- [Ed](https://github.com/ens100)
    - updating various Dendron docs
    - raise copy issue when publishing a dendron vault
    - contribute new default completion settings for Dendron

- [Daria Vasyukova](https://github.com/gereleth)
    - updating docs

- [Handuo](https://github.com/zhanghanduo)
    - suggest [better block refs](https://github.com/dendronhq/dendron/issues/174)
    - suggest block refs autocomplete 

- [Mr. Lightbulb](https://github.com/JackQAQ-byte)
    - [latex doesn't render when publishing](https://github.com/dendronhq/dendron/issues/195)

- [Tom](https://github.com/peanutputter)
    - [Image Markdown fails with spaces and caps in name of file](https://github.com/dendronhq/dendron/issues/200)

