---
id: 861cbdf8-102e-4633-9933-1f3d74df53d2
title: Templates
desc: ""
updated: 1620815222445
created: 1602033087611
stub: false
---

Templates in Dendron are a simple way to lower the effort of creating similar notes. There are two supported ways of using templates:

1. The easiest way is to have a templates.\* hierarchy in your vault and store commonly used note templates there. You can then re-use these templates in other notes by using the `Dendron: Insert Note` command in vscode. By default, this hasn't been assigned a keybinding, but you can always map this to something easy to remember if you find yourself using a lot of templates.
2. A more automatic way is by referencing templates in your schema and then having the template automatically applied when a new note of a particular type is created. This is described in more detail in the [[note on schemas|dendron.topic.schema#template]].
