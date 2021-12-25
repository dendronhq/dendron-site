---
id: 3472226a-ff3c-432d-bf5d-10926f39f6c2
title: Links
desc: ''
updated: 1640425601205
created: 1595003088839
---

Dendron supports multiple types of links and formats.

- `[Markdown links](./dendron.md)`
- `[[wiki links]]`
- `[[labelled|wiki links]]`
- `![image links](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/logo-256.png)`
- links to `[local files](assets/think.pdf)` (eg. PDFs, PSDs, etc.)

## Concepts

### Note Files

A note file is a Dendron Markdown note.

### Regular Files

Regular files are any assets that are not Dendron Markdown notes. 

## Features

### Wiki Links

Wiki links support **autocomplete**. To initiate:

- create wikilink brackets and start typing
- link to specific sections of notes using the `[[wiki link#header]]` syntax.
  - NOTE: relative links will not go to the anchor if clicked on the preview, in that case, it becomes a normal link to the file
  - NOTE2: doesn't work when exported through a pod
- use the VS Code [intellisense shortcut](https://code.visualstudio.com/docs/editor/intellisense#_key-bindings) to trigger the autocomplete

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/links-autocomplete.gif)

#### Highlights

Wiki links also have support for highlighting in the editor. Existing notes will be highlighted in blue, and missing notes will be highlighted in yellow. The exact shade of color depends on your theme.

![](https://i.imgur.com/aBcgyZX.png)

### File Links

![[dendron://dendron.dendron-site/tags.stage.seed]]

You can link to files in your workspace that are not notes using wikilinks. The
easiest way to link to a file is using the [[Copy Note Link|dendron.ref.commands#copy-note-link]]
command, which will automatically create a link for you.

Otherwise, you need to write inside a wikilink the relative path to the file
from where your `dendron.yml` file is located. For example, if the root of your
workspace contains `dendron.yml` and a `src` folder, you can write
`[[src/index.js]]`. Alternatively, if you are linking to a file inside the
`assets` folder of a vault, you can simply type `[[assets/example.py]]` to link to it.

### Children Links

When you [[publish|dendron.topic.publish]] your notes, Dendron shows all children of the note at the bottom.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Quickstart_-_Dendron.jpg)

### Backlinks

Backlinks are links that point to the current note. 

#### Types of Backlinks
There are currently two types of backlinks available in the Backlinks view: `Linked` and `Candidates`. 

##### Linked Backlink
`Linked` backlinks are regular [[wiki links|dendron.topic.links#wiki-links]] that are pointing to the current note.

- NOTE: The link candidate feature of the backlinks panel is currently disabled by default. 'Accessing the Backlinks view' section below goes over how to enable it.

##### Candidate Backlink
`Candidate` backlinks are plain text words that match the name of the current note, which can potentially be converted into a (linked) backlink.

#### Backlink View

Dendron has a [[backlinks panel|dendron.topic.workbench#backlinks]] which shows all notes with links to the current note. This will also show up underneath [[children links|dendron.topic.links#children-links]] on published pages.

![[dendron://dendron.dendron-site/asset.preview#backlinks,1:#*]]

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


