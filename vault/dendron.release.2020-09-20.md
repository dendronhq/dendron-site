---
id: 8e59e25f-808c-42f1-a82a-e9ce4fd8edd8
title: '2020-09-20 Release Notes'
desc: ''
updated: 1596374871110
created: 1596374871110
---

# 2020-09-20 Release Notes (version 0.12)

Dendron 0.12 is here 🌱

This week's focus was on publishing. We have a bunch of enhancements and additions to the publishing workflows. We also introduced the [[seeds library|dendron.topic.seeds]], a way of you to remix existing content with Dendron. You can see an example of this [here](http://aws.dendron.so/)

This release also brings some changes to Dendron's update cycle. 
You might have noticed that Dendron updates rather aggressively 🚀🚀🚀

Our current release cycle is a patch update every day and a minor release every week. 
Moving forward, we will be doing patch updates every few days and a minor release every two weeks. 

The move to this new release cycle is a reflection that Dendron is growing rapidly and starting to mature. 

We will be working on some major changes in October to stabilize the core feature set and make them easier to use. We will also be shifting our underlying architecture from a VSCode plugin to the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) which will result in a richer feature set and the ability for Dendron to be more easily integrated into additional editors.

As part of this update, we've put out the first version of the [Dendron principles](https://dendron.so//notes/7fcebd7d-6411-4c9d-8baf-65629dc018a1.html) which reflects our design philosophies and the direction we are taking Dendron. 

This is a work in progress so feel free to make suggestions and comments in the discord.

I've mentioned this before but we will also be releasing our formal roadmap by the end of the month. This roadmap will cover all major projects we plan on doing in 2020. 

We are looking to come out of preview by the end of October and do a formal 1.0 release before the end of the year. 

I want to take this moment to again thank everyone for being part of our journey to build a better tool for managing knowledge 👨‍🌾👩‍🌾 

I believe we're are planting something special here and am excited to see us grow 🌱 

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)

---


## Cli
### Support for seeds 

((ref: [[dendron.topic.seeds]]#seeds 🚧,1:#*))


### Enhancements
- Standardize on core cli flags across all commands
 
- More options when planting seeds
 

## Hierarchies
### Fixes
- Rename when stub is present 

## Lookup
### Lookup new notes with Selection 

((ref: [[dendron.topic.lookup]]#creating notes with a selection,1:#*))


### Enhancements
- Lookup can extract highlighted text
 

## Pods
### Implement Json import pod 

((ref: [[dendron.topic.pod]]#json pod,1:#Custom Pods))


### Enhancements
- All filepaths can be set relative to the workspace root
 
- Json pod can import filenames as links
 
- Standardize interface for import/export pod commands
 

### Fixes
- Handle stub notes correctly on import 

## Publishing
### Publish command 

((ref: [[dendron.topic.commands]]#publish,1:#*))


### Copy note url command 

((ref: [[dendron.topic.commands]]#copy note url,1:#*))


### Enhancements
- Support relative path for all file paths
 
- Set custom path for publishing repo
 
- Keyboard shortcuts for copy note url cmd
 
- Be able to pass in custom args to commands
 
- Support incremental page building
 

### Fixes
- Copy url truncates `//` 


## Thank You

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.

- [Denis Sikuler](https://github.com/gamtiq)
    - update docs

- [agichim](https://github.com/agichim)
    - update docs

- [Daria Vasyukova](https://github.com/gereleth)
    - bug with copy note url

- [Jack](https://github.com/JackQAQ-byte)
    - issue with images on published sites

- [Tom](https://github.com/peanutputter)
    - [issue with image paths](https://github.com/dendronhq/dendron/issues/200)

- [Janne Ojanaho](https://github.com/jojanaho)
    - [writeup on files vs folders](https://github.com/dendronhq/dendron/issues/210)

