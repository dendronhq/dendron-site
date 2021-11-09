---
id: ESqOqSOEo54lqvGLlQXM6
title: Users
desc: ''
updated: 1634799968265
created: 1630388973002
---

## Summary

Dendron allows you to tag users in your notes. You can tag users inline like `@example`. They are similar to [[tags|dendron.topic.tags]], except that they are meant to reference users. In a vault shared with many people, where each person can have their own user note. Or you can also use it yourself to keep track of information about people you know.

## User tags

A user tag is anything following `@` without spaces or other punctuation.

```md
@example.username
```

The user tag will look like @example.username. Try clicking on this link!

In Dendron, user tags are just a shorthand for writing `[[@my-example|user.example.my-example]]`. You can format your tags as wikilinks if you run into any limitations with tags.


### Navigation

To look at the user note, you can click on the user tag while holding down `Ctrl`, press `Ctrl+Enter` on your keyboard, or use the "Dendron: Goto Note" command.

### Punctuation

One thing to remember: You can't include things like spaces, quotation marks,
question marks in user tags. For #example, see how "these #tags" don't include
the punctuation marks around them. This makes it natural to use tags within
sentences.

### Multi-vault

User tags can't specify which vault they are in. This is not a problem most of the
time, Dendron will find the user note wherever it is. But if you have the
same user note in multiple vaults and you want to clarify which one, you can use a
[[Cross Vault Link|dendron.topic.links#cross-vault-links]] instead since user tags
are just wikilinks.


### Details
You might have already noticed this when you opened the user tag, but user notes are
just notes under the `user.` hierarchy. This has a lot of benefits:

<!-- -   You can use commands like [[Rename Note|dendron.topic.commands#rename-note]] or [[Refactor Hierarchy|dendron.topic.commands#refactor-hierarchy]] to rename or reorganize your tags, and it will update all notes where these tags were used. -->
- You can add content to the user note and it will show up when you hover over the user tag in the editor, or when you publish it. Try clicking on the example tag above!
- You can organize users into hierarchies (like `@scientist.Margaret-Hamilton` and `@historical.Ada-Lovelace`).

#### Configuration

Don't like user tags? You can disable them by setting the [[enableUserTags|dendron.ref.config#enableusertags]] configuration to false.
