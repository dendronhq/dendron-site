---
id: 5c213aa6-e4ba-49e8-85c5-1bdcb33ce202
title: Special Notes
desc: ''
updated: 1595004457029
created: 1595004457029
custom: {}
fname: dendron.special-notes
parent: ba69c2d7-1af8-441b-b7b1-429047be7ec8
children: []
---

# Special Notes

Dendron has builtin support for a variety of special note formats which we will cover in this section.

## Journal Note

A journal note is a self contained note that is meant to track something over time. Examples of journals include recording **workout sessions**, making **meeting notes**, and keeping a **mood journal**.

To create a journal note, use the command bar to select the `>Dendron: New Journal Note` command. 

By default, Dendron will create the journal note with the following hierarchy `{domain}.journal.{Y-MM-DD-HHmmss}`. `{domain}` is the **domain** of the current active note when you execute `New Journal Note`.

Dendron will also create a **backlink** from your new note to the note that you were previously at. This link is added under `links` in the **frontmatter** of the note you were previously at.

Example of automatically added backlink.

```yml
data:
  links:
    - type: note
      id: '[[people.journal.2020-07-17-104511]]'
```

<a href="https://www.loom.com/share/da562a166af9427e908a76be8bc38355"> <p>Dendron Tutorial - Journal Notes - Watch Video</p> <img src="https://cdn.loom.com/sessions/thumbnails/da562a166af9427e908a76be8bc38355-with-play.gif"> </a>