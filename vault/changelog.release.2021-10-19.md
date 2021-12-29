---
id: FVOrdEJKn5SdJ3dxREkJL
title: '0.64'
desc: ''
updated: 1634667993707
created: 1634660763551
---

Dendron 0.64 has sprouted  🌱

More streamlined publishing as well as lots of fixes and enhancements to existing features 

### Highlights
- feat(publish): add `dendron publish dev` command ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.cli#dev]])
- feat(publish): add `dendron publish export` command ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.cli#export]])
- fix(publish): optimize Next.js publishing search

### Everything Else
- enhance(publish): support publishing to GitHub as a export template
- enhance(publish): support --yes flag when exporting to skip prompts
- enhance(publish): initialize template will also install dependencies
- enhance(publish): warn when assetsPrefix isn't set
- enhance(lookup): lookup wikilinks 
- fix(lookup): better hierarchy look up when inside parts of the hierarchy are omitted 
- enhance(lookup): allow configuration of workspace to make 'Create New' not bubble up in note lookup
- enhance(pods): asignees in GitHub issue publish pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.github-issue.publish#updating-an-issue]])@joshi 
- fix(workspace): possible error if open note is changed quickly after edit
- fix(markdown): better footnote rendering in note references 
- fix(markdown): user tags & hashtags inside links should be parsed as regular text 
- fix(publish): wikilinks inside note references don't have right link 
- fix(workspace): making changes to fontmatter title also update the preview 
- chore: add test for apostrophe in alias
- chore: skip failing WS init test on Windows

### Community

#### General Updates
- Recording and notes from last week's greenhouse talk posted [[here|dendron://dendron.dendron-site/community.greenhouse.2021-10-15-ts-dev-vscode#outputs]]
- Dendron wiki is now moved to the [[Next.js Publishing|dendron://dev/dendron.topic.publish]]

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

![[dendron://dendron.dendron-site/community.reading-series.journal.2021.10.19]]

#### Office Hours

You can find notes from our latest office hours [[here|dendron://dendron.dendron-site/community.office-hours.2021.10.17]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [Jonathan Dorety](https://github.com/jdorety)
    - #dendron.taxonomist
    - [Fix typo in GH action config example by jdorety](https://github.com/dendronhq/dendron-site/pull/230)
- [Tika](https://github.com/SR--) `@Tika#9526`
    - issue with wikilinks inside note reference on new published website
- [Buck DeFore](https://github.com/bdefore)
    #dendron.taxonomist
    - fix typo on job post
- [Jminding](https://github.com/Jminding) `@Jminding#0001`
    - update Dendron troubleshooting guide

### Changelog
![[changelog#064,1:#063]]
