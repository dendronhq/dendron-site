---
id: 3472226a-ff3c-432d-bf5d-10926f39f6c2
title: Links
desc: ''
updated: 1614639285945
created: 1595003088839
stub: false
---
Dendron supports multiple types of links and formats. 

- `[markdown links](./dendron.md)`
- `[[wiki links]]`
- `[[labelled|wiki links]]`
- `![image links](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/logo-256.png)`
- links to `[local files](assets/think.pdf)` (eg. pdfs, psds, etc)

## Wiki Links

Wiki links support **autocomplete**. To initiate:

- create wikilink brackets and start typing
- link to specific sections of notes using the `[[wiki link#header]]` syntax. 
  - NOTE: relative links will not go to the anchor if clicked on the preview, in that case, it becomes a normal link to the file
  - NOTE2: don't work when exported through a pod 
- use the vscode [intellisense shortcut](https://code.visualstudio.com/docs/editor/intellisense#_key-bindings) to trigger the autocomplete

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/links-autocomplete.gif)

## Backlinks

Dendron has a backlink panel which shows all notes with links to the current note. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/links.backlink.jpg)

## Other Links

For links to a file format Dendron does not support, you can use the highlight the link and use `> Dendron: Open Link` to open the file using your operating system default for that file. This also applies to opening paths to folders.

<a href="https://www.loom.com/share/01250485e20a4cdca2a053dd6047ac68"><img src="https://cdn.loom.com/sessions/thumbnails/01250485e20a4cdca2a053dd6047ac68-with-play.gif"> </a>

## Cross Vault Links

Cross vault links are a way of exactly specifying a note in a [[multi vault|dendron.topic.multi-vault]] workspace. You can turn a regular link into a cross vault link by adding `dendron://$vaultName/` prefix where `$vaultName` is the [[name|dendron.topic.config#name]] of your vault.

Some examples:
- regular wiki link: `[[dendron://vault/foo]]`
- wiki link with alias: `[[Foo Note|dendron://vault/foo]]`
- relative link: `[[Foo Note|dendron://vault/foo#header1]]`

You can also use cross vault links for [[note references|dendron.topic.refs]]. 
- note ref: `![[dendron://vault/foo]]`

