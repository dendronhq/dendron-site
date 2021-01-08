---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1610121281952
created: 1604539200840
published: true
nav_exclude: true
---
## 0.23.1

### Features

#### Updated Note Ref Syntax

You can now do references to notes using `![[note]]` instead of `((ref: [[note]]))` syntax. To reference a header, use `![[note#foo]]`. This changes makes our note ref syntax more consistent with our wiki link syntax. 

Note that the new ref syntax expects a [[sluggified|dendron.ref.terms#slug]] header. This is done automatically when you use the updated [[copy note ref|dendron.topic.commands#copy-note-ref]] command. 

This change makes it possible to create a ref to a header with special characters.

The old syntax ref syntax will still work but should now be considered deprecated. We will release a `doctor` command to help you auto-upgrade from the old syntax to the new syntax in the coming week.

#### Frontmatter Variable Substitution

It is now possible to use variables defined in your note frontmatter inside your note. The syntax is `{{fm.VAR_NAME}}` where `VAR_NAME` is the name of your variable. The `fm` designates that you want to use a frontmatter variable. 

#### Publishing V2 Integration with Plugin

You can now both build your notes for publication and preview it from inside vscode. 

![[dendron.topic.commands#site-build:#dev]]

### Enhancements
- `nav_exclude` property excludes from nav sider and table of contents ([[docs|dendron.topic.publishingv2.navigation#nav-exclude]])
- [[copy note ref|dendron.topic.commands#copy-note-ref]] command will use the new note ref syntax
- footnote support in preview and when publishing ([[docs|dendron.topic.markdown#footnotes]])

### Bug Fixes
- spaces in wiki link not rendering in prevew

## Version Numbers
- Dendron Markdown Preview: 0.10.18
- Dendron 11ty: 1.23.6