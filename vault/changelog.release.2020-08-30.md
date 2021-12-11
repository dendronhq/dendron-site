---
id: 1a79e2a1-c906-4ed4-a528-15bd34c4e649
title: "0.09"
desc: ''
updated: 1638899295502
created: 1596374871110
date: '2020-08-30'
---
This week's focus was on improving the initial Dendron startup experience as well as the overall usability. To that end, we introduced our own tree view, overhauled the getting started experience and created a cheatsheet of all commands (with GIFs of course). 

We also took time to fix bugs and improve performance across Dendron's core features (eg. Lookup, Markdown Preview, etc). 

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)

## Engine

### Enhancements

- Add check to make sure that lookup will throw an error if overwriting an existing file 

### Fixes

- Sometimes lookup will not return all results on startup 
- Edge case where 'create new' was shown even when note exists 
- Having a naked date in frontmatter could cause lookup to fail 

## Hierarchies

### Add Go Up Hierarchy command

Go up to the closest non-stub parent of the currently open note. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-up.gif)

## Markdown

### Fixes

- Preview command would fail to load preview 

## Pods

### Enhancements

- Throw error on badly formed links 

## Workbench

### Add Dendron tree view ([docs](https://www.dendron.so/notes/f7ebd4aa-8ba7-4bc5-bd00-a1efc5315f07.html#dendron-tree-view))

The Dendron Tree View lets you view your hierarchal notes as a traditional folder hierarchy. It has the following capabilities

```
- click to open note
- show indicators for `stub` and `schema` notes
- show title using tooltip
- realtime update when you create/delete notes
- toggle all functionality
- reveal currently open text document
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.treeview.gif)

### Show cheatsheet of all commands ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#showhelp))

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.help.gif)

### Near Instantaneous Lookup 🚀🚀🚀

Lookup will complete &lt;100ms even as you scale to thousands of notes. 

### Enhancements

- Don't ignore focus out on lookup 
- Tree view focus on active editor 
- Show collapse all in tree view 
- Treeview tooltip reflect note title 
- Refresh tree view on note deletion 
- Add sort to tree view 
- Keyboard shortcuts don't require editor focus 
- Update default theme to [github light](https://marketplace.visualstudio.com/items?itemname=github.github-vscode-theme) 
- Loading indicator when workspace is first starting 
- Always initialize first workspace with walkthrough 
- Show create new option in schema lookup 
- Better first workspace experience 
- Bundle dendron markdown preview with dendron on installation 
- New welcome screen on first initialization 
- Better lookup results when at root of vault 

### Fixes

- Remove stub indicator from lookup after note creation 
- Copy note commands will sometimes fail on windows 
- Copy note link could sometimes fail 
- Add no active item picks back to lookup 
- Misleading loading message 

## Community

### Dendrologist

We introduced our first Dendrologist this week. [Kiran Pathakoda](https://github.com/kpathakota) has been one of the first to adopt Dendron as his primary note taking platform and will be helping out with the development of Dendron.

In practice, this means Kiran will be hanging around the discord, help triage issues, and help me put together a more comprehensive public roadmap for the project!

If you're interested in being more involved with the development of Dendron (and this doesn't have to involve coding), feel free to ping me on Discord or by email at [kevin@dendron.so](mailto:kevin@dendron.so).

There are a bunch of really exciting things that will be coming out over the next couple of weeks and we will need all the dendrologist we can get :) 

### New Channels

- \#dev: discuss all things related to Dendron development
- \#schemas: share and discuss schemas
- \#workflows: how do you take notes?

## Thank You

Last and most of all, a big **thanks** to the following gardeners that brought up issues and contributed fixes to this release.

- [Jochen Burkhard](https://github.com/herop)
- [Janne Ojanaho](https://github.com/jojanaho)
- [Chris Na](https://github.com/buxel)
- [Daria Vasyukova](https://github.com/gereleth)
- [Denis Di Fazio](https://github.com/denisdifazio)
- [nixsee](https://github.com/nixsee)

