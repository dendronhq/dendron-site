---
id: 08b2e6ea-bd3e-4f4b-b2b9-676a7b743a65
title: 2020-09-06 Release Notes
desc: ''
updated: 1596374871110
created: 1596374871110
stub: false
---

# 2020-09-06 Release Notes (version 0.10)

Dendron turns 0.10 today 🌲. To mark this milestone, the pre-amble for this release will be a tad longer (and more sentimental) than usual. 

This week's release focuses on publication and exports. Dendron sites now come with [one click collaboration support](https://www.dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html#edit-on-github), [note references](https://www.dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html#note-references), and [hierarchy hints](https://www.dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html#nav-based-hierarchy-hints). If publishing online isn't your jam, you'll be happy to know that you can now [export your notes](https://www.dendron.so/notes/66727a39-d0a7-449b-a10d-f6c438185d7f.html#json-pod) to any format you desire (as long as that format is JSON 😅 - more formats coming soon).

It's now been almost two months since Dendron first went into preview. Since launch, we've passed over a thousand downloads and closed over [100 issues](https://github.com/dendronhq/dendron/issues?q=is%3Aissue+is%3Aclosed) worth of features, enhancements, and bug fixes. 

In that time, we've built an awesome community of Dendrites on Discord now numbering in the triple digits. I feel beyond grateful to everyone that has given Dendron a try in these early days 🌱 and become a part of our budding community. 

Speaking of community, I would like to recognize two new **Dendrologist** - [Fayçal](https://github.com/d3vr) (@bsqrd#9701 ) and [Janne Ojanaho](https://github.com/jojanaho) (@jojanaho#3766 ) 👨‍🌾👩‍🌾

Dendrologists are active members of the Dendron community that will be helping me shape our roadmap, answer questions, and collect feedback from all of you. If you've spent any time in our discord, you've probably already had chats with one or both of the folks I just mentioned.

That's all for last week's release. Stay tuned for some big announcements later this week :) 

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)


## Development
### Fixes
- Bad import causes dendron to not compile in case-sensitive file systems 

## Engine
### Fixes
- Fix bad sibling traversal cases 
- Issue with mixed case file names 

## Markdown
### Support offset with note refs ([[docs|dendron.topic.refs]])

A note reference offset is a way to skip a number of lines when using a note reference. The syntax is `,{number}`. Below is an example of using a note reference offset to offset an initial heading, skipping the actual header when doing the embedding.
- NOTE: currently, note reference offsets are limited to the first anchor inside a block reference. They must also be a positive value


<a href="https://www.loom.com/share/31cb62916586453f8475f94ba68b74a1">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/31cb62916586453f8475f94ba68b74a1-with-play.gif"> </a>


### Enhancements
- Note refs will not be resolved when inside an inline code span or a fenced code block 

### Fixes
- Fix issue with preview checkbox not updating markdown 
- Fix issue with backslash causing in certain markdown blocks 

## Pods
### Support note references when Publishing Notes ([[docs|dendron.topic.publishing]])

Dendron has [[note references|dendron.topic.refs]] that let you inline either the whole note or parts of a note into another note. Publishing via Dendron will also publish note references as part of the process.

<a href="https://www.loom.com/share/8eb01f6c3196415c8aadc4992805a176"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/8eb01f6c3196415c8aadc4992805a176-with-play.gif"> </a>


### Add Export Pod Command ([[docs|dendron.topic.commands]])

Export notes to an external data source. Currently, only JSON is supported.

<a href="https://www.loom.com/share/d49e5f4155af485cadc9cd810b6cab28"> <img src="https://cdn.loom.com/sessions/thumbnails/d49e5f4155af485cadc9cd810b6cab28-with-play.gif"> </a>


### JSON export pod ([[docs|dendron.topic.pod]])

Export your Dendron notes to a JSON file 


### Enhancements
- Don't convert note refs inside code blocks 

## Publishing
### Nav Based Hierarchy Hints ([[docs|dendron.topic.publishing]])

You can see at a glance which notes have children and explore them from the nav without refreshing the page.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/dendron.jekyll.gif)


### Edit on Github ([[docs|dendron.topic.publishing]])

Every page can accept one-click contributions as long as the contributor has a GitHub account.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/jekyll.edit.jpg)

Example of making a contribution to Dendron.

<a href="https://www.loom.com/share/4a1b67f3fd1a40dab16949e9ea5e53dc"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/4a1b67f3fd1a40dab16949e9ea5e53dc-with-play.gif"> </a>


## Workbench
### Add Goto Next/Prev Sibling command ([[docs|dendron.topic.commands]])

- shortcuts: 
- mac: `cmd+shift+right`
- key: `ctrl+shift+right`
- when: `editorFocus`

Go to the next/previous sibling

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)


### Add Go Down command ([[docs|dendron.topic.commands]])

- shortcuts: 
- mac: `cmd+shift+down`
- key: `ctrl+shift+down`
- when: `editorFocus`


Go down the hierarchy



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-down.gif)


### Enhancements
- Don't focus on the tree view if it's not visible 
- Create stub notes from the tree view 

### Fixes
- Don't update color theme on upgrade 
- Upgrade settings sometimes override existing settings 
- Issues with note refs not displaying in some cases 
- Rename note will not update dendron tree view 


## Thank You

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.

- [Fayçal](https://github.com/d3vr)
    - [Stylyzed Tag CSS](https://www.dendron.so/notes/692fa114-f798-467f-a0b9-3cccc327aa6f.html#stylized-tags-using-custom-css)
    - [Dendron Tag Search Extension](https://marketplace.visualstudio.com/items?itemName=d3vr.tag-search)

- [Ed](https://github.com/ens100)
    - [Update Dendron docs](https://github.com/dendronhq/dendron-template/commit/28c86d5afba0f7ca21e15e749e67464cce2397e2)
    - [Making an absolutely awesome getting started with Dendron video](https://www.youtube.com/watch?v=BRLLZ9IEh10)
    - Writing up a step by step publishing guide for Dendron

- [Daria Vasyukova](https://github.com/gereleth)
    - Being a professional Dendron bug catcher 
        - https://github.com/dendronhq/dendron/issues/162
        - https://github.com/dendronhq/dendron/issues/161
        - https://github.com/dendronhq/dendron/issues/143

- [mebu83](https://github.com/mebu83)
    - [Issue with blof refs not resolving](https://github.com/dendronhq/dendron/issues/146)

- [eflinfoki](https://github.com/eflinfoki)
    - [Update dendron troubleshooting guide](https://github.com/dendronhq/dendron-template/pull/6)

- [Janne Ojanaho](https://github.com/jojanaho)
    - [Updating Dendron FAQ](https://github.com/dendronhq/dendron-template/commit/9252d12f21dc21fca0a2e2bf36da9edc84202227)

- Tom
    - [Providing a transcript of Dendron's onboarding video](https://www.dendron.so/#onboarding)

- [Rhaynes](https://github.com/rhaynes74)
    - [Issue with markdown preview not rendering math elements correctly](https://github.com/dendronhq/dendron/issues/156)

- [Howard](https://github.com/runlevelrobot)
    - [Issue with tree view making sidebar visible when not wanted](https://github.com/dendronhq/dendron/issues/150)

