---
id: 5c213aa6-e4ba-49e8-85c5-1bdcb33ce202
title: Special-notes
desc: ''
updated: 1595004457029
created: 1595004457029
---

# Special Notes

Dendron has builtin support for a variety of special note formats which we will cover in this section.

## Journal Note

A journal note is a self contained note that is meant to track something over time. Examples of journals include recording **workout sessions**, making **meeting notes**, and keeping a **mood journal**.

To create a journal note, use the command bar to select the `>Dendron: New Journal Note` command. 

By default, Dendron will create the journal note with the following hierarchy `{domain}.journal.{Y-MM-DD-HH}`. `{domain}` is the **domain** of the current active note when you execute `New Journal Note`.

Dendron will also ~~create a **backlink** from your new note to the note that you were previously at. This link is added under `links` in the **frontmatter** of the note you were previously at~~ copy the link to the note in your clipboard so you can easily create backlinks in other notes (we've removed auto-backlinking temporarily as we figure out the right default behavior and UX). 

<a href="https://www.loom.com/share/da562a166af9427e908a76be8bc38355"> <p>Dendron Tutorial - Journal Notes - Watch Video</p> <img src="https://cdn.loom.com/sessions/thumbnails/da562a166af9427e908a76be8bc38355-with-play.gif"> </a>

## Scratch Note

A scratch note is a self contained note that is meant to be used as scratchpad. Use it for thoughts or when you want to expand on a bullet point. Scratch notes are created in the `scratch` domain and have the following format: `{domain}.journal.{Y-MM-DD-HH-HHmmss}`.

If you highlight text while creating a scratch note, the highlighted text will automatically be turned into a link to the new scratch note. 

<a href="https://www.loom.com/share/104a3e0bb10f4012a831194d02483e4a"> <p>Dendron - Scratch Notes - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/104a3e0bb10f4012a831194d02483e4a-with-play.gif"> </a>
