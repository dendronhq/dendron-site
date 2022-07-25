---
id: 3472226a-ff3c-432d-bf5d-10926f39f6c2
title: Links
desc: 'Dendron supports many ways of linking notes and files'
updated: 1658768400279
created: 1595003088839
---

## Summary

{{fm.desc}}.

## Types
- Markdown links (can link to any file):
    - `[link text](dendron.note.name.md)` -> [link text](dendron.note.name.md)
    - `[link text](./path/to/filename.md)` -> [link text](./path/to/filename.md)
    - `[link text](assets/filename.pdf)` -> [link text](assets/filename.pdf)
- Wiki links: `[[dendron.note.name]]` -> [[dendron.note.name]]
- Image links: `![image alt text](http://example.com/or/path/to/image)`

## Concepts

### Note Files

A note file is a Dendron Markdown note.

### Regular Files

Regular files are any assets that are not Dendron Markdown notes. 

## Features

### Wiki Links

![[dendron://dendron.dendron-site/dendron.topic.links.wiki-link]]

### File Links

![[dendron://dendron.dendron-site/tags.stage.sprout]]

You can link to files in your workspace that are not notes (or not in a vault) using wikilinks. The
easiest way to link to a file is using the [[Copy Note Link|dendron.ref.commands#copy-note-link]]
command, which will automatically create a link for you. As with note files, copy note link
will create a [[Block Anchor|dendron://dendron.dendron-site/dendron.topic.note-reference#block-anchor]] for you if you have a region of text selected.

Otherwise, you need to write inside a wikilink the relative path to the file
from where your `dendron.yml` file is located. For example, if the root of your
workspace contains `dendron.yml` and a `src` folder, you can write
`[[src/index.js]]`. Alternatively, if you are linking to a file inside the
`assets` folder of a vault, you can simply type `[[assets/example.py]]` to link to it.

### Children Links

When you view notes using the [[preview|dendron://dendron.dendron-site/dendron.topic.preview]] or the [[published|dendron.topic.publish]] site, Dendron will auto-generate a `Children` section at the end of the note.

![Children](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Quickstart_-_Dendron.jpg)

- TIP: this can be turned off using the [[nav_exclude_children|dendron://dendron.dendron-site/dendron.topic.publish.config.nav_exclude_children]] option (publishing only)

### Backlinks
![[dendron://dendron.dendron-site/dendron.topic.links.backlink]]


You can find further documentation about it [[here|dendron.topic.workbench#backlinks-view]].

### Naked Links

For regular links, you can highlight the link and use `> Dendron: Open Link` to open the file using your operating system default for that file. This also applies to opening paths to folders.

<a href="https://www.loom.com/share/01250485e20a4cdca2a053dd6047ac68"><img src="https://cdn.loom.com/sessions/thumbnails/01250485e20a4cdca2a053dd6047ac68-with-play.gif"> </a>

### Cross Vault Links

Cross vault links are a way of exactly specifying a note in a [[multi vault|dendron.topic.multi-vault]] workspace. You can turn a regular link into a cross vault link by adding `dendron://$vaultName/` prefix where `$vaultName` is the [[name|dendron.ref.config#name]] of your vault.

Some examples:

- regular wiki link: `[[dendron://vault/foo]]`
- wiki link with alias: `[[Foo Note|dendron://vault/foo]]`
- relative link: `[[Foo Note|dendron://vault/foo#header1]]`

You can also use cross vault links for [[note references|dendron.topic.note-reference]].

- note ref: `![[dendron://vault/foo]]`

### Markdown links

Markdown links can be used for local files and stuff on the internet (websites, images, blogs etc.). The `Markdown Shortcuts: Toggle hyperlink` command makes this operation really easy. You can even bind this to a shortcut key combination. We'd recommend using 'cmd/ctrl + K' to get the usual application behavior or 'cmd/ctrl + U' if you want to continue using ctrl+k as part of the usual VS Code combo operation.


## Commands

### Convert Link

![[dendron://dendron.dendron-site/dendron.topic.refactoring.commands.convert-link#summary,1:#*]]


