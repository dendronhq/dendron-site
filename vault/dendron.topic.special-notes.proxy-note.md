---
id: ns09dicjf4pz3lcu8aowbfa
title: Proxy Note
desc: 'Proxy notes are notes that contain special property in their frontmatter to specify that they are a proxy for a specific uri.'
updated: 1661158532846
created: 1660898704360
---

## Summary

{{fm.desc}}

## Details

### Use Case

### Getting Started

A [[Proxy Note|dendron://dendron.docs/rfc.38-links-to-non-note-files#proxy-notes]] is a note that contain a special property in their
frontmatter to specify that they are a proxy for a specific uri.

By adding a uri property to the frontmatter, executing [[dendron.ref.commands.goto]] over the link will open the uri instead of navigating to the note.  
