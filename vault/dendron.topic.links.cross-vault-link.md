---
id: wb1k8li6r5kfzhla7p3ty80
title: Cross Vault Link
desc: ''
updated: 1660887753875
created: 1658828701252
---

## Summary

Wikilinks that specify which vault it belongs to in a [[multi vault|dendron.topic.multi-vault]] workspace.

## Details

### Getting started

You can turn a regular link into a cross vault link by adding `dendron://$vaultName/` prefix where `$vaultName` is the name of your vault.

Here are some examples of different types of wikilinks with the vault prefix included:

This is a cross vault wikilink to the note `foo` that is in the vault named `vault`:

`[[dendron://vault/foo]]`

This is a cross vault wikilink to the note `foo` that is in the vault named `vault`, that has an alias:

`[[Foo Note|dendron://vault/foo]]`

This is a cross vault wikilink to the header `Header1`, in the note `foo`, that is in the vault named `vault`, that has an alias:

`[[Foo Note|dendron://vault/foo#header1]]`

You can also use cross vault links for [[note references|dendron.topic.note-reference]] like so:

`![[dendron://vault/foo]]`