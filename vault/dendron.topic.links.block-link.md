---
id: v0hffykaq2g5xxlgrrbiz70
title: Block Link
desc: ''
updated: 1659079102233
created: 1657294885741
---

## Summary

A block link is a [[dendron.topic.links.wiki-link]] that links to [[dendron.topic.note-reference.concepts.block-anchors]].

### Getting started

#### Linking to anchors within the same note

When linking to a block anchor within the same note, you can create a wikilink to the anchor like so:

```
Ab voluptatem commodi maiores.
Nemo qui voluptatem dolores. ^my-paragraph

Let's look back at that paragraph: [[#^my-paragraph]]
```

#### Linking to anchors in a different note

When linkg to a block anchor in a different note, you can create a regular wikilink to said note and append the block anchor reference at the end.

In note `foo`:
```
Ab voluptatem commodi maiores.
Nemo qui voluptatem dolores. ^my-paragraph
```

In note `bar`:
```
Let's look back at that paragraph: [[foo#^my-paragraph]]
```

You can create block links by using [[dendron.topic.links.commands.copy-note-link]] while placing your cursor on top of the anchor you want to create a link for.
