---
id: 9Id5LUZFfM1m9djl6KgpP
title: Incompatible Extensions
desc: ""
updated: 1643865712223
created: 1642340936718
---

## Summary

Over the course of Dendron's existence, we have been making note of VSCode extensions that can cause issues when used with Dendron. These are extensions that were either reported by our community members, or have been identified by the Dendron team.

To audit whether you may be running incompatible extensions, run `Dendron: Doctor` and select [[findIncompatibleExtensions|dendron://dendron.dendron-site/dendron.topic.doctor#findincompatibleextensions]].

> If you find an extension that is not described here but may conflict with Dendron, please let us know.

## Details

Dendron strives to make your notes compatible with a lot of other note taking tools available. We also put great effort in building a tool that can complement other tools in the Extensions Marketplace so that users can have a richer note taking experience.

To facilitate maximum compatibility, Dendron builds on top of standard Markdown. Unfortunately, this means users will eventually run into incompatible behaviors if they use another tool that also builds on top of Markdown concurrently.

It is often not immediately obvious why the incompatible behavior is happening, and require the users to use VSCode's [extension bisect](https://code.visualstudio.com/blogs/2021/02/16/extension-bisect) feature to detect which extensions are incompatible with Dendron.

If you think the incompatibility listed here are resolved, or want them resolved so they could be used along with Dendron, please leave us an [issue](https://github.com/dendronhq/dendron/issues/new/choose) for a request of the feature that you want to see natively supported in Dendron, or a request to resolve the issue with a particular extension.

Please note that these are wonderful extensions that have different takes on how to empower users with convenient tools to manipulate Markdown / notes and is only listed here for the ease of troubleshooting of issues that happens while used with Dendron concurrently.

## [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

extension id: `yzhang.markdown-all-in-one`

This extension provides various keyboard shortcuts, auto completion, and other utilities for writing Markdown.

This extension has a few keybinding conflict with Dendron, which can be resolved by re-mapping either Dendron's keybinding or Markdown All in One's keybinding.

See [Detecting keybinding conflicts](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts) for more details.

This extension has also been known to have conflicting behavior with VSCode's snippet feature that Dendron utilize.

## [Markdown All in One (for web)](https://marketplace.visualstudio.com/items?itemName=fantasy.markdown-all-in-one-for-web)

extension id: `fantasy.markdown-all-in-one-for-web`

This extensions is a forked version of [[Markdown All in One|dendron://dendron.dendron-site/dendron.guides.troubleshooting.incompatible-extensions#markdown-all-in-one]].

This extension has identical issues with the upstream version.

## [Foam](https://marketplace.visualstudio.com/items?itemName=foam.foam-vscode)

extension id: `foam.foam-vscode`

Foam is a Markdown based note-taking tool similar to Dendron.

Foam and Dendron differs in how the notes are parsed and how metadata is attached to the note. This will cause problems for both extensions and there will be numerous features around manipulating Markdown that are incompatible and overlapping. You may see multiple panels with the same name in the explorer, since each extension contributes them separately.

## [add-double-bracket-notation-to-selection](https://marketplace.visualstudio.com/items?itemName=BrianIbbotson.add-double-bracket-notation-to-selection)

extension id: `brianibbotson.add-double-bracket-notation-to-selection`

This extension is intended to be used with [[Foam|dendron://dendron.dendron-site/dendron.guides.troubleshooting.incompatible-extensions#foam]] and is incompatible with Dendron.

Similar feature is natively provided by Dendron's `Insert Note Link` command and Intellisense.

## [Markdown Links](https://marketplace.visualstudio.com/items?itemName=tchayen.markdown-links)

extension id: `tchayen.markdown-links`

Markdown links adds the capability to view links between Markdown files as a graph.

This capability is natively provided by Dendron's `Show Note Graph` command.

## [md-graph](https://marketplace.visualstudio.com/items?itemName=ianjsikes.md-graph)

extension id: `ianjsikes.md-graph`

This is a fork of [[Markdown Links|dendron://dendron.dendron-site/dendron.guides.troubleshooting.incompatible-extensions#markdown-links]] and has identical issues.

## [Markdown Wiki-links preview](https://marketplace.visualstudio.com/items?itemName=thomaskoppelaar.markdown-wiki-links-preview)

extension id: `thomaskoppelaar.markdown-wiki-links-preview`

This extension adds wikilink rendering support to the default VSCode preview.

This feature is natively supported by Dendron's `Show Preview` command.

## [Markdown Memo](https://marketplace.visualstudio.com/items?itemName=svsool.markdown-memo)

extension id: `svsool.markdown-memo`

Markdown memo is a note taking tool similar to Dendron.

Most features provided by this extension is natively supported by Dendron.

## [Markdown Notes](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes)

extension id: `kortina.vscode-markdown-notes`

Markdown Notes provides wikilinks, backlinks, and other capabilities to Markdown.

Most features provided by this extension is natively supported by Dendron.

## [Markdown Notes (Zettelkasten Remix)](https://marketplace.visualstudio.com/items?itemName=maxedmands.vscode-zettel-markdown-notes)

extension id: `maxedmands.vscode-zettel-markdown-notes`

This is a forked version of [[Markdown Notes|dendron://dendron.dendron-site/dendron.guides.troubleshooting.incompatible-extensions#markdown-notes]] and has identical issues.
