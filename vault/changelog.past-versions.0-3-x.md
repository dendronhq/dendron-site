---
id: icBBwbAFLyjsRLheSJkAp
title: 0.3.X
desc: ''
updated: 1638899263785
created: 1623536565649
---

## 0.39.3

### Enhancements

-   Sort numeric siblings in GoToSiblingCommand
-   Disable Dendron shortcuts when plugin is not active

### Bug Fixes

-   Nested note refs in preview can display incorrectly

### House Cleaning

-   Update initialization telemetry to only collect rounded numbers of notes ([[docs|dendron.ref.telemetry#startup]])

## 0.39.2

### Features

#### More Caching Improvements

Even if your workspace is +10k notes, initialization of said workspace should happen in the matter of seconds. You can read about the details [[here|dendron._ref.caching]]

### Enhancements

-   progress indicator when adding a remote vault
-   init engine from cli ([[docs|dendron.ref.cli#launchengineserver]])
-   add html pod ([[docs|dendron.topic.pod.builtin.html#publish]])
-   [[move note|dendron.ref.commands#move-note]] now shows completions via lookup
-   [[rename note|dendron.topic.refactoring#rename-note]] now shows completions via lookup

### Bug Fixes

-   Tree widget doesn't update when new files are added
-   Goto note prefer existing note for multi-vault workspace
-   MarkdownPod still using legacy note refs
-   Move note will sometimes fail
-   Insert note will sometimes fail
-   Vault picker toggle for move note will execute if user clicks escape

### House Cleaning

-   Rename note is now just a re-mapped version of the `Move Note` command. In the future, we might deprecate `Rename` altogether and replace with `Move Note`

## 0.39.1

### Bug Fixes

-   proper initialization of backlinks when initializing from cache


# 0.39

### Features

#### Faster startup performance

Dendron startup is now up to 5x faster for large workspaces 🚀🚀🚀
Prior to this release, Dendron re-indexes all files at startup. We're now smarter about this and will read data from our cache instead if the note contents have not changed. You can read about the details [[here|dendron._ref.caching]].

### Enhancements

-   [[Managed Publishing (NEW)|dendron.topic.managed-publishing]] is now compatible with version 0.37 of Dendron
-   Add progress bar to Dendron: Show Note Graph
-   MoveNoteCommand will not prompt for vaults if not multi-vault

### Bug Fixes

-   Create daily journal note fails if there's no note open

### House Cleaning

#### Telemetry

With this release of Dendron, we've added limited telemetry that is opt-out by default.

This is to help us understand how many people are using Dendron as well as measure the impact on performance when we introduce new features. We **do not and will never** read the data inside **your notes**.

You can see the full list of information we collect and why we do it in our [[telemetry documentation|dendron.ref.telemetry]] as well as instructions on how to opt out of telemetry.

---

# 0.38.0

## 0.37.2

### Bug Fixes

-   correctly index notes added outside of Dendron

### Docs

-   [[RFC 8 - Multi Publish|dendron://dendron.docs/rfc.8-multi-publish]]

## 0.37.1

### Features

#### CLI for Workspace Commands

![[dendron.ref.cli#workspace-command,1:#*]]

#### Insert Note Command

![[dendron.ref.commands#insert-note,1:#*]]

### Enhancements

-   support custom port for preview ([[docs|dendron.topic.publish-legacy.configuration#previewport]])

## 0.37.0

---

## 0.36.4

### Features

#### CLI for Working with Vaults

![[dendron.ref.cli#vault-commands,1:#*]]

### Enhancements

-   less verbose logs for CLI

## 0.36.3

### Features

#### CLI for Working with Notes

![[dendron.ref.cli#note-commands,1:#*]]

### Enhancements

-   toggle xvault wiki links ([[docs|dendron.ref.config#noxvaultwikilink]])
-   auto detect workspace root if `--wsRoot` not passed to CLI
-   add `--quiet` flag to cli

### House Cleaning

-   remove legacy note references, use [[doctor|dendron.ref.commands#actions]] with `oldNoteRefToNew` to convert your old note references

## 0.36.2

### Bug Fixes

-   multiple notes created when clicking on a link with an alias

## 0.36.1

### Bug Fixes

-   Multiple notes created when opening a note via the treeview

## 0.36.0

---

## 0.35.2

### Features

#### Goto Note command

-   NOTE: this fixes [issue 564](https://github.com/dendronhq/dendron/issues/564) which causes a new note to be created on hover when combined with `noAutoCreateOnDefinition` set to `true`. We introduced [[noAutoCreateOnDefinition|dendron.ref.config#noautocreateondefinition]] configuration to help folks transition to the new behavior. Auto creating on definition will be deprecated in a future release

### Enhancements

-   better details in diagnostics report
-   support xvault [[backlinks|dendron.topic.links#backlinks]]
-   faster backlink generation
-   include content from unpublished notes ([[docs|dendron.topic.note-reference#publishing]])
    -   this allows you to use note references to hierarchies that aren't explicitly published
-   better [Theia](https://theia-ide.org/) compatibility

### Bug Fixes

-   disable auto-creation notes on definition ([[docs|dendron.ref.config#noautocreateondefinition]])

## 0.35.1

### Features

#### Add and Commit

![[dendron.ref.commands#workspace-add-and-commit,1:#*]]

### Enhancements

-   [[useNoteTitleForLink|dendron.ref.config#usenotetitleforlink]] now true by default
-   control hierarchy display using note frontmatter ([[docs|dendron.ref.config#hierarchydisplay]])
-   ability to disable appending uuid's to assets when importing Markdown ([[docs|dendron.topic.pod.builtin.markdown.import#noadduuid]])
-   ability to set an index file when importing Markdown ([[docs|dendron.topic.pod.builtin.markdown.import#indexname]])

### Bug Fixes

-   bulk importing notes would fail if payload was greater than 10mb
-   punchcard pod referring to wrong commit

### Docs

-   update [[example schemas|dendron.topic.schema#example-schemas]] as an importable remote vault
-   create Dendron for [[teams|dendron.topic.teams]] docs

## 0.35.0

---

## 0.34.1

### Features

#### A Better Doctor

Dendron doctor has been updated with a bunch of new options including the ability to migrate old style refs to new style refs

![[dendron.ref.commands#doctor,1:#dump-state]]

### Enhancements

-   support hiding hierarchy view on published page ([[docs|dendron.ref.config#hierarchydisplay]])
-   GitPunchcard support multi-vault ([[docs|dendron.topic.pod.builtin#gitpod]])
-   support toggling vault initialization behavior at startup ([[docs|dendron.ref.config#initializeremotevaults]])
-   support migrating old note refs to new note refs ([[docs|dendron.ref.commands#actions]])

### Bug Fixes

-   correct `hiearchyDisplayTitle` to `hierarchyDisplay` option (BREAKING)
-   fix spurious `getVault` errors

### House Cleaning

-   removed all old style refs from `dendron-site`
-   formal deprecation notice for old style refs (`((ref: ))` syntax) - they will be removed in the next release. use `doctor` to upgrade

## 0.34.0

---

### 0.33.1

### Features

#### Browse Current File

![[dendron.ref.commands#browse-note,1:#*]]

### Enhancements

-   wikilinks to missing vaults will display an error instead of throwing one
-   ability to disable legacy refs ([[docs|dendron.ref.config#nolegacynoteref]])
-   add xkcd to vault presets ([[docs|dendron.topic.multi-vault#preset-remote-vaults]])
-   5x faster Markdown pod import using plugin 🚀 🚀 🚀
-   toggle katex settings from config ([[docs|dendron.ref.config#usekatex]])

### Bug Fixes

-   displaying children hierarchies fails on stub notes
-   empty query doesn't display all root nodes when multi-vault

## 0.33.0

---

## 0.32.2

### Features

#### Markdown Export

![[dendron.topic.pod.builtin.markdown#export,1:#*]]

#### GitPod

![[dendron.topic.pod.builtin#dendrongitpunchard,1]]

### Enhancements

-   disable git linking on a per note basis ([[docs|dendron.topic.publish-legacy.configuration#gitnolink]])
-   set a custom path for git url ([[docs|dendron.topic.publish-legacy.configuration#gitnotepath]])
-   `dendron-cli` is now named `dendron` (`dendron-cli` will continue to work)
-   `buildSiteV2` has been renamed to `buildSite` (`buildSiteV2` will continue to work but is now considered `deprecated`)
-   add [tldr](https://github.com/tldr-pages/tldr) to remote vault presets ([[docs|dendron.topic.multi-vault#preset-remote-vaults]])
-   support `useFMTitle` when publishing to Markdown
-   fix link textwrap issue when publishing for mobile

### House Cleaning

-   consolidate `engine-server` and `common-server` tests into `engine-test-utils`

## 0.32.1

### Features

#### Password protected sites

-   [docs](https://dendron.so/notes/8b08d91b-3da8-4b8a-90c5-799d3026ad9b.html#add-password-protection-to-your-site)

You can now use managed publishing with a password. Note that you'll need [sprout membership](http://accounts.dendron.so/) to use the feature.

### Enhancements

-   control display for children links ([[docs|dendron.ref.config#hiearchydisplaytitle]])
-   [[skipLevels|dendron.topic.publish-legacy.configuration#skiplevels]] also applies to children lins
-   [[useNoteTitleForLink|dendron.ref.config#usenotetitleforlink]] also applies to note references
-   importing from Markdown is now 5x faster 🚀🚀🚀
    -   NOTE: this is only for the CLI
-   a bunch of new options when importing a pod ([[docs|dendron.topic.pod.import]])
    -   NOTE: these options currently only apply for the [[Markdown Import Pod|dendron.topic.pod.builtin.markdown#import]]
-   show progress bar when importing pod from plugin

### Bug Fixes

-   Dendron will check if dependencies are actually installed before trying to preview your site
-   remove un-used extensions
-   failure when importing large amounts of Markdown files using import pod

### House Cleaning

-   importing a pod now requires a `vaultName` parameter (previous, we just defaulted to the first vault)

## 0.32.0

---

## 0.31.3

### Features

#### Changelogs

![[dendron.topic.publish-legacy.changelogs#summary,1:#*]]

### House Cleaning

-   all tests are now `jest style` tests

## 0.31.2

### Features

#### Custom Domain Names

Dendron now supports custom domain names for [[managed publishing|dendron.topic.managed-publishing]]. You can find docs [[here|dendron.topic.managed-publishing.quickstart#adding-a-custom-domain-via-cname]]. Note that this feature is currently limited to [[environmentalist|community.roles#environmentalist]] .

### Enhancements

-   Add paste link command ([[docs|dendron.ref.commands#paste-link]])
-   don't throw fatal error on bad wikilink
-   don't throw fatal error if `siteUrl` not set while in `dev`
-   add remark-containers plugin [[docs|dendron.ref.config#usecontainers]]

### Bug Fixes

-   refs don't include children or backlinks
-   clean `dendron.yml` after removing a vault

## 0.31.1

### Bug Fixes

-   issue with mixed case file names

## 0.31.0

---

## 0.30.2

### Features

#### Cross Vault Links

![[dendron://dendron.dendron-site/dendron.topic.links#cross-vault-links,1]]

### Enhancements

-   you can now add a workspace when adding a remote vault ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#vault-add]])
-   better block quotes ([[docs|dendron.topic.publish-legacy.misc#blockquote]])
-   better formatted backlinks on published pages
-   backlinks display using note title instead of file names
-   copy note commands will create a cross vault link when in multi-vault environment

### Bug Fixes

-   selecting non-primary root note in Dendron tree
-   bad backlinks created for home page
-   issue with hierarchies for mixed case parents

### Documentation

-   new docs on using Dendron for [[blogging|dendron.topic.publish-legacy.blogging]]

### House Cleaning

-   table of contents on published sites is now a remark extension, header changed to `children`
-   Jekyll publishing has been renamed to `legacy publishing`
-   lots of internal refactoring of code

## 0.30.1

### Features

#### Custom Pods

We now have custom pod support
![[dendron.topic.pod.custom#summary,1:#*]]

If you are interested in developing your own publishing pod, you can docs to do so [[here|dendron.topic.pod.dev]]

#### Dev.to Pod

As an example of what you can do with a custom pod, we created the [[Dev.to Pod|pro.devto-pod]] which lets you publish your notes to dev.to

### Enhancements

-   backlinks in published sites

![[dendron.topic.publish-legacy.features#backlinks,1]]

### Bug Fixes

-   delete node sometimes fails in multi-vault
-   publishing multi-vault will sometimes not work if multiple domain notes
-   unable to select `root` of multi-vault notes in tree view

### House Cleaning

-   if you're working on the codebase, `dendron.code-workspace` has been renamed to `dendron-main.code-workspace`
    -   this helps if you're working on Dendron while having Dendron installed since Dendron, prior to this change, would also activate when you were editing the code

