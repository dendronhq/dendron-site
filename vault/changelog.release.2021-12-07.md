---
id: 3j8izKo111vt1y8MNhjge
title: '0.72'
desc: ''
updated: 1638899998071
created: 1638893557883
---

Dendron 0.72 has sprouted  🌱

### Highlights
- enhance: "find all references" for markdown headers  ([[docs|dendron://dendron.dendron-site/dendron.topic.navigation#find-all-references]])
- enhance(lookup): enable scoping and full regex support for refactor hierarchy command ([[docs|dendron.topic.refactoring#refactor-hierarchy]]) 

### Everything Else
- enhance(lookup): have auto complete respect value that has been scrolled down to by arrows 
- enhance(lookup): add fuzzy threshold configuration ([[docs|dendron://dendron.dendron-site/dendron.ref.config.commands#fuzzthreshold]])
- enhance(views): allow navigation to preview links that do not have vault specified 
- fix(workspace): decorator lag problems 
- fix(views): do not enable dendron preview in non-dendron workspace
- fix(views): update tree view when new note is created
- fix(lookup): corner cases for auto complete 
- fix(publish): UI shifting issues with nextjs layout 
- fix(cli): cli migration now handles JSON with comments 
- fix(schema): When applying a schema template, do not override the body but append to the end to it 

### Community

#### General Updates
<!-- TODO: update the link. Office hours are bi-weekly, delete this section if not appliacble -->
- doc updates
    - add section on [[navigating notes|dendron://dendron.dendron-site/dendron.topic.navigation]]

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

#### Office Hours
<!-- TODO: update the link. Office hours are bi-weekly, delete this section if not appliacble -->
You can find notes from our latest office hours [[here|community.office-hours.2021.09.]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

### Changelog
![[changelog#064,1:#063]]
