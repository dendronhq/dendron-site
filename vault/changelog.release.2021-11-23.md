---
id: Ku1qjbDYlsxk4rfMoFEza
title: "0.70"
desc: ''
updated: 1637691256859
created: 1637687416614
---

Dendron 0.70 has sprouted  🌱

Dendronites can now use `Dendron: Initialize Workspace` to create [[native workspaces|dendron.topic.workspace.native]], variable substitution is possible in the desc note frontmatter, and improvements have been made to task note decorators (the task info that magically renders whenever a note link is pointing to a task note). Jump in and take a look!

This release also includes a variety of fixes and enhancements to publishing, among other improvements.

### Highlights
- feat(workspace): Initialize Workspace command can create native workspaces ([[docs|dendron.topic.workspace.native]])
- enhance(publish): Better formatting of tables on published site
- fix(publish): syntax highlighting for code blocks
- fix(publish): make mermaid work consistently on published sites
- fix(publish): enable katex on published site 

### Everything Else
- enhance(markdown): expose `desc` frontmatter property for variable substitution ([[docs|dendron.topic.markdown#frontmatter-variable-substitution]])
  - View the [difference](https://github.com/dendronhq/dendron-site/pull/284/files)
- enhance(workspace): improved task note decorations
  * Task note decorations are colored with the same color as the link to make them easier to distinguish from regular text. ([[docs|dendron.topic.tasks#task-note-links]])
  * Task notes say `priority:` instead of `prio:` for priorities in task note frontmatter. ([[docs|dendron.topic.tasks#task-note-internals]])
- enhance(publish): better position sidebar, main content and footer
- enhance(commands): copy a tag note link results in hashtags
- enhance(lookup) Add description field to lookup buttons
- fix(cli): workspace info prints message to CLI
- fix(lookup): have schema exact match suggestion in lookup show up at the top of the list
- fix(lookup): disappearing vaults in vault selection quickpick
- fix(publish): remove duplicate CSS
- fix(workspace): remove trailing whitespace in note
- fix(workspace): decorations working for long notes
- fix(cli): [ajv](https://github.com/ajv-validator/ajv) (a JSON schema validator) now prints warning messages to console
- fix(pods): invalid configuration error

### Community

#### General Updates

New GitHub discussions to get involved in:
- [Getting Started Guide: Review, community feedback, and refresh](https://github.com/dendronhq/dendron/discussions/1756)
- [Cross-linking across workspaces](https://github.com/dendronhq/dendron/discussions/1761)

Blog posts:
- [Highlights from VSCode 1.62](https://blog.dendron.so/notes/V2Cjla9vzM69Z280j5bXB/)

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]].

![[community.reading-series.journal.2021.11.23]]

#### Office hours

You can find notes from our latest office hours [[here|community.office-hours.2021.11.14]].

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.
You can see an overview of all roles [[here|community.roles]].

TODO

### Changelog
![[changelog#0700,1:#0690]]
