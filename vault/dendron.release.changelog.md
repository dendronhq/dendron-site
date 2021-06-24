---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1624574293624
created: 1601508213606
date: "2022-01-01"
---

## 0.47.2

### Features
-   [[Markdown Pod|dendron.topic.pod.builtin.markdown.export]] supports exporting to folders
-   Support filtering graph by regex ([[docs|dendron.topic.graph-view#string-filters]])
-   Support filtering graph by stubs ([[docs|dendron.topic.graph-view#other-filters]])

### Enhancements

-   don't update update time in note if content hasn't changed
-   bad note frontmatter won't crash workspace
-   support canonical url option when publishing ([[docs|dendron.topic.publishing.configuration#canonicalurl]])
-   dendron cli doesn't need `wsRoot` option if executing inside subdirectory of a workspace

## 0.47.1

### Bug Fixes

-   issue with upgrade causing lookup to fail

## 0.47

## 0.46.3

### Enhancements

-   support default daily journal vault ([[docs|dendron.topic.config.dendron#dailyvault]])

### Bug Fixes

-   `lookupConfirmVaultOnCreate` is respected when creating a daily journal

## 0.46.2

### Features

#### Dendron Seed Bank

![[dendron://dendron-site/dendron.topic.seed-bank#summary,1:#*]]

#### Calendar View

![[dendron://dendron-site/dendron.ref.web-ui#dendron-calendar-view,1:#*]]

#### Airtable Pod

![[dendron://dendron-site/dendron.topic.pod.builtin.airtable.export#summary,1:#*]]

#### Find missing links Command

![[dendron://dendron-site/dendron.topic.commands#createmissinglinkednotes,1:#*]]

### Enhancements

-   Check and initialize empty seeds on opening workspace
-   Hover displays targeted area for links with #headers and #^anchors

### Bug Fixes

-   tree view shows error on rename

### House Cleaning

-   remove `dendorn markdonw links` and `github theme` as recommended extensions at startup
-   defaultJournal\* commands have been moved to `journal` property in `dendron.yml` ([[docs|dendron.topic.config.dendron#journal]])

## 0.46.1

### Bug Fixes

-   issue with publishing using dendron cli

## 0.46

## 0.45.3

### Enhancements

-   Rename and Refactor will now replace links without formatting the file
-   Dendron respects VSCode Telemetry settgs ([[docs|dendron.ref.telemetry#how-to-opt-out-of-data-collection]])

### Bug Fixes

-   Dendron Preview `Go to Text` will sometimes not appear for note references
-   Dendron Preview links not working in VsCode 1.57
-   Dendron Preview renders the first line of note ref as markdown
-   Dendron Preview removes `#` from links

### House Cleaning

-   Shorter UUIDs
-   Analytics
    -   Added a `reason` field to `(Enable|Disable)Telemetry` metrics ([[docs|dendron.ref.telemetry#telemetry-toggle]])

## 45.2

### Features

#### Copy Note Ref Range Selections

![[dendron.topic.commands#range-selection,1:#*]]

#### Random Note Command

![[dendron://dendron-site/dendron.topic.commands#random-note,1:#*]]

### Show Schema Graph V2

![[dendron.topic.graph-view#show-schema-graph-v2,1:#*]]

#### Better Graph Filtering Options

![[dendron.topic.graph-view#filter-view,1:#rfcs]]

### Enhancements

-   copy note ref will create a block ref and insert block anchors when you have a block element selected ([[docs|dendron.topic.commands#copy-note-ref]])
-   copy note link will create a block link and insert block anchors when you have a block element selected ([[docs|dendron.topic.commands#copy-note-link]])

#### Bug Fixes

-   published assets now respect vault configuration
-   template error when publishing in windows

### House Cleaning

-   Analytics
    -   we now measure `duration` when installing and upgrading Dendron (see [[docs|dendron.ref.telemetry#installationupgrade]])
-   Deprecation Notices
    -   Dendron Markdown Links is now deprecated and replaced with Dendron's Native Graph Commands. It will be removed July 12, 2021

<!-- ### Bug Fixes
- `#` in alias can be used again ([#790](https://github.com/dendronhq/dendron/issues/790)) -->

## 0.45.1

### Bug Fixes

-   published assets now respect vault configuration
-   template error when publishing in windows

## 0.45

## 0.44.2

### Features

#### Native Note Graph

![[dendron://dendron-site/dendron.topic.graph-view#summary,1:#RFCs]]

### Enhancements

-   fine grained control for workspace sync ([[docs|dendron.ref.workspace#workspace-sync]])
-   improved startup speed
-   block references fully supported in publishing and preview
    @hikchoi
-   toggle scope when running the doctor command ([[plugin docs|dendron.topic.commands#doctor]]) ([[cli docs|dendron.topic.cli#doctor]])

### Bug Fixes

### House Cleaning

### Docs

## 0.44.1

### Features

#### Block Reference Refs Support

![[dendron.topic.links.block-references#block-reference,1:#*]]

#### Workspace Vaults

![[dendron.ref.vaults#workspace-vault,1:#configuration]]

### Enhancements

-   faster workspace initialization

### Bug Fixes

-   tree view not displaying

### Docs

-   [[Vaults|dendron.ref.vaults]]

## 0.44

## 0.43.3

### Features

#### Insert Note Link Command

![[dendron://dendron-site/dendron.topic.commands#insert-note-link,1:#*]]

### Enhancements

-   Block Reference Support in Dendron Preview

## 0.43.2

### Features

-   Better Fuzzy Match for Lookup

### Enhancements

-   Block Reference Support in Published Site
-   Open Link is Vault Aware ([[docs|dendron.topic.commands#open-link]])

### Docs

-   [[Lookup Internals|dendron.topic.lookup#details]]

## 0.43.1

### Bug Fixes

-   welcome page not showing up unless workspace is initialized
-   paste file command should handle names with spaces and special characters
-   markdown import pod not working

## 0.43

### Features

#### Dendron Web UI with a new Tree View

![[dendron://dendron-site/dendron.ref.web-ui#summary,1:#*]]

#### Block References

![[dendron://dendron-site/dendron.topic.links.block-references#summary,1:#*]]

#### Paste File Command

![[dendron.topic.commands#paste-file,1:#*]]

#### GraphViz Pod

![[dendron://dendron-site/dendron.topic.pod.builtin.graphviz.export#summary,1:#*]]

### Enhancements

-   Workspace Sync Command is now available as a native Dendron command ([[docs|dendron.topic.commands#workspace-sync]])

### Bug Fixes

-   dendron caching old links at startup

### House Cleaning

-   collect analytics on Web UI load time ([[docs|dendron.ref.telemetry#other]])
-   internal interface refactoring

## 0.42

### Features

#### Schema Library

![[dendron.topic.schema.lib]]

### Enhancements

-   Specify initial value with custom keyboard shortcuts for lookup ([[docs|dendron.topic.lookup.modifiers#value]])

### Bug Fixes

-   issue with latex not displaying in latest preview

## 0.41

### Enhancements

-   new welcome page for new users
-   running site preview will fetch latest changes from current workspace session
-   running site build will fetch latest changes from current workspace session
-   support configurable site preview port in workspace
-   better error messages when building site

### Bug Fixes

-   double confirmation message when using publish pod

### House Cleaning

-   collect telemetry around lookup performance ([[docs|dendron.ref.telemetry#lookup]])
-   remove `initialize with tutorial notes` when initializing a new workspace (functionality replaced with the new getting started guide ([[docs|dendron.tutorial]]))

### Docs

-   new getting started guide ([[docs|dendron.tutorial]])

## 0.40.3

### Features

#### Dendron Hooks 🪝

![[dendron.topic.hooks]]

### Enhancements

-   Dendron will successfully initialize on recoverable errors (eg. bad schema file)
-   nicer error messages

### Bug Fixes

-   footer text occludes published content on mobile
-   tree view order for newly created notes

### Dev

-   we documented the organization of utility modules [here]([[Utilities|pro.utilities]])

## 0.40.2

### Bug Fixes

-   Navigating siblings not working

## 0.40.1

### Bug Fixes

-   Go to prev hierarchy command accidentally removed

# 0.40

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

Even if your workspace is +10k notes, initialization of said workspace should happen in the matter of seconds. You can read about the details [[here|dendron.ref.caching]]

### Enhancements

-   progress indicator when adding a remote vault
-   init engine from cli ([[docs|dendron.topic.cli#launchengineserver]])
-   add html pod ([[docs|dendron.topic.pod.builtin.html#publish]])
-   [[move note|dendron.topic.commands#move-note]] now shows completions via lookup
-   [[rename note|dendron.topic.commands#rename-note]] now shows completions via lookup

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
