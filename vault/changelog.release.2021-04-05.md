---
id: f240676a-a003-46e2-ac79-784bd142c7f0
title: "0.36"
desc: ''
updated: 1617645692821
created: 1617644812612
---

Dendron 0.36 has sprouted  🌱

### Highlights
- add and commit all vaults in a multi-vault workspace
- use note references on un-published notes
- more options when importing markdown notes
- general performance and stability improvements

### Spring Cleaning
- Dendron's default behavior is to create a new note via wiki links when [go to definition](https://tomassetti.me/go-to-definition-in-the-language-server-protocol/) is invoked. this has some annoying [side effects](https://github.com/dendronhq/dendron/issues/564) which we're fixing by creating a [[dedicated command|changelog#goto-note-command]] for wiki link navigation. If you're currently relying on `GoToDefinition` to handle creating new notes, know this functionality will go away in future releases. Instead, use the new `Goto Note` command

### Community

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [8brandon](https://github.com/8brandon) @8brandon#3208  `+horticulturalist`
  - Dendron design system proposal: https://github.com/dendronhq/dendron-site/pull/75
- [Alexandre Zanni](https://github.com/noraj)
  - Add website link to Github repo
- [Aditya](https://github.com/xypnox) @xypnox#1354 
  - new Dendron SVG assets
- [Lars Solberg](https://github.com/xeor) @Lars Solberg#6519  `+bugcatcher`
  - issues running Dendron on theia
- [Kevin Poorman](https://github.com/codefriar) @codefriar#4876  `+bugcatcher`
  - Unable to use triple-tilde code blocks in a template
- [Aleksey Rowan](https://github.com/aleksey-rowan) @aleksey#5276 `+taxonomist`
Add a note about yarn failing with npm v7 on Windows

![[changelog#0352:#0350]]
