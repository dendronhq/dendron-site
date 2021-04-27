---
id: 3472226a-ff3c-432d-bf5d-10926f39f6c2
title: Links
desc: ""
updated: 1619550834270
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

Markdown links can be used for local files and stuff on the internet (websites, images, blogs etc.). The `Markdown Shortucts: Toggle hyperlink` command makes this operation really easy. You can even bind this to a shortcut key combination. We'd recommend using 'cmd/ctrl + K' to get the usual application behavior or 'cmd/ctrl + U' if you want to continue using ctrl+k as part of the usual VSCode combo operation.

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
