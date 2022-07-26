---
id: wb1k8li6r5kfzhla7p3ty80
title: Cross Vault Link
desc: ''
updated: 1658828701252
created: 1658828701252
---

Cross vault links are a way of exactly specifying a note in a [[multi vault|dendron.topic.multi-vault]] workspace. You can turn a regular link into a cross vault link by adding `dendron://$vaultName/` prefix where `$vaultName` is the [[name|dendron.ref.config#name]] of your vault.

Some examples:

-   regular wiki link: `[[dendron://vault/foo]]`
-   wiki link with alias: `[[Foo Note|dendron://vault/foo]]`
-   relative link: `[[Foo Note|dendron://vault/foo#header1]]`

You can also use cross vault links for [[note references|dendron.topic.note-reference]].

-   note ref: `![[dendron://vault/foo]]`