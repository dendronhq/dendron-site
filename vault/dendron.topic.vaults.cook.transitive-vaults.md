---
id: q9yo0y7czv8mxlkbnw1ugj1
title: Transitive Vaults
desc: ''
updated: 1655409183517
created: 1655407985174
---

When a vault lists other vaults inside the [[Vault settings|dendron.topic.vaults.config]]
other than itself, that's a *dependency*. If you take a vault that has dependencies,
and add it as a [[remote vault|dendron.topic.vaults#remote-vault]] in another workspace,
the dependencies are then called *transitive dependencies*.

Dendron doesn't yet support transitive dependencies. If you add a remote vault
with transitive dependencies, the transitive dependencies will be skipped and
will not be added to your workspace. Dendron will warn you if this happens.

You can work around this limitation by manually adding the transitive
dependencies into your workspace. After adding the vault, open the configuration file inside it and look at the [[vaults|dendron.topic.vaults.config]]
section of the configuration file. For any vault with a `remote: ...` set, copy the remote URL and add it yourself
with [[Vault Add|dendron.topic.vaults#vault-add]].
