---
id: 3472226a-ff3c-432d-bf5d-10926f39f6c2
title: Links
desc: ""
updated: 1621644775427
created: 1595003088839
stub: false
---

Dendron supports multiple types of links and formats.

- `[markdown links](./dendron.md)`
- `[[wiki links]]`
- `[[labelled|wiki links]]`
- `![image links](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/logo-256.png)`
- links to `[local files](assets/think.pdf)` (eg. pdfs, psds, etc)

## Markdown links

Markdown links can be used for local files and stuff on the internet (websites, images, blogs etc.). The `Markdown Shortcuts: Toggle hyperlink` command makes this operation really easy. You can even bind this to a shortcut key combination. We'd recommend using 'cmd/ctrl + K' to get the usual application behavior or 'cmd/ctrl + U' if you want to continue using ctrl+k as part of the usual VSCode combo operation.

## Wiki Links

Wiki links support **autocomplete**. To initiate:

- create wikilink brackets and start typing
- link to specific sections of notes using the `[[wiki link#header]]` syntax.
  - NOTE: relative links will not go to the anchor if clicked on the preview, in that case, it becomes a normal link to the file
  - NOTE2: doesn't work when exported through a pod
- use the vscode [intellisense shortcut](https://code.visualstudio.com/docs/editor/intellisense#_key-bindings) to trigger the autocomplete

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/links-autocomplete.gif)

## Children Links

When you [[publish|dendron.topic.publishing]] your notes, Dendron shows all children of the note at the bottom.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Quickstart_-_Dendron.jpg)

## Backlinks

Dendron has a backlink panel which shows all notes with links to the current note. This will also show up underneath [[children Links|dendron.topic.links#children-links]] on published pages.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/links.backlink.jpg)

## Block References
- status: 
    - [[Experimental 🧪|dendron.ref.status#experimental-🧪]]
    - [[Early Seed 🌱|dendron.ref.status#early-seed-]]

Block references let you link or embed blocks of text into different parts of your notes. This allows you to link and refer to any part of a note, including paragraphs, lists, and tables.

Currently, we support using block references that can be navigated to by using the [[Goto Note|dendron.topic.commands#goto-note]] command. We currently (2021.05.21) **do not** support rendering block references in the preview or when publishing.

### Block Links

A block link has the following format. It is created in a note that is referencing a piece of text. When navigating the link, users should be taken to the block anchor. 

```
[[somelink#^1234]]
```

### Block Anchor

A block anchor is a `^` character, followed by one or more digits, letters, dashes, and underscores. Dendron should automatically generate these anchors when requested, and users should be able to add in custom anchors. The following is an example of an anchor:

```
{Some markdown block element} ^1234
```

## Other Links

For links to a file format Dendron does not support, you can use the highlight the link and use `> Dendron: Open Link` to open the file using your operating system default for that file. This also applies to opening paths to folders.

<a href="https://www.loom.com/share/01250485e20a4cdca2a053dd6047ac68"><img src="https://cdn.loom.com/sessions/thumbnails/01250485e20a4cdca2a053dd6047ac68-with-play.gif"> </a>

## Cross Vault Links

Cross vault links are a way of exactly specifying a note in a [[multi vault|dendron.topic.multi-vault]] workspace. You can turn a regular link into a cross vault link by adding `dendron://$vaultName/` prefix where `$vaultName` is the [[name|dendron.topic.config.dendron#name]] of your vault.

Some examples:

- regular wiki link: `[[dendron://vault/foo]]`
- wiki link with alias: `[[Foo Note|dendron://vault/foo]]`
- relative link: `[[Foo Note|dendron://vault/foo#header1]]`

You can also use cross vault links for [[note references|dendron.topic.refs]].

- note ref: `![[dendron://vault/foo]]`
