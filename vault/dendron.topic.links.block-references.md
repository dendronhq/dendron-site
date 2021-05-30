---
id: 21bc1caa-d815-42db-bc16-27d6c16a3115
title: Block References
desc: ''
updated: 1622401080885
created: 1622400954171
---


## Summary
- status: [[Experimental 🧪|dendron.ref.status#experimental-🧪]]

Block references let you link or embed blocks of text into different parts of your notes. This allows you to link and refer to any part of a note, including paragraphs, lists, and tables.

Currently, we support using block references that can be navigated to by using the [[Goto Note|dendron.topic.commands#goto-note]] command. We currently (2021.05.21) **do not** support rendering block references in the preview or when publishing.

## Block Links

A block link has the following format. It is created in a note that is referencing a piece of text. When navigating the link, users should be taken to the block anchor. 

```
[[somelink#^1234]]
```

## Block Anchor

A block anchor is a `^` character, followed by one or more digits, letters, dashes, and underscores. Dendron should automatically generate these anchors when requested, and users should be able to add in custom anchors. The following is an example of an anchor:

```
{Some markdown block element} ^1234
```

## Configuration
- status: [[Work In Progress 🚧|dendron.ref.status#work-in-progress-]]