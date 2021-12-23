---
id: C0HMems1EODnxGsNDVD7Z
title: 0.4.X
desc: ''
updated: 1636507361492
created: 1629505311218
---

## 0.49.2

### Features

#### Local Graph
![[dendron://dendron.dendron-site/dendron.topic.graph-view#local-note-graph,1:#*]]

### Enhancements
- block anchors are de-emphasized in text editor
- doctor command will fix bad frontmatter ids

### Bug Fixes
- image preview not showing up on hover
- gracefully handle a bad wiki link
- only generate alphanumeric ids to be compatible with github pages urls

## 0.49.1

### Features
- same file autocomplete headers and anchors ([[docs|dendron._ref.intellisense]])

### Enhancements
- legacy preview will open links in the first window instead of overriding current window
- better field validation when running [[publish pod|dendron.topic.pod#publish]]
- ability to toggle labels on the graph
- block anchors are hidden in published sites
- filter stubs when using the [[directChildOnly modifier|dendron.topic.lookup.modifiers#directchildonly]] 

### Bug Fixes
- issue with opening md links on legacy preview in windows
- case sensitive windows drives cause preview to not work

### House Cleaning
- better analytics for initial tutorial workspace ([[docs|dendron.ref.telemetry#tutorial-progression]])
- run eslint on commit

## 0.49
## 0.48.3

### Enhancements
- better styling for preview v2

### Bug Fixes
- schema graph not showing schemas more than one level deep
- support images, blockquotes, katex for preview v2

## 0.48.2

### Features

- native dendron preview ([[docs|dendron._ref.web-ui#preview]])
- updated onboarding experience ([[docs|dendron.ref.commands#launch-tutorial]])

### Enhancements
- better validation for pods
- higher contrast for nodes and edges
- anchors and links are not updated in realtime (vs on file save)

### Bug Fixes
- workbench: horizontal line folded as frontmatter
- workbench: default config sometimes not applied
- calendar: pop up on save even when hidden
- calendar: navigating to new month creates new note
- graph: toggling stub filter can fail
- graph: lookup for insert and rename note doesn't return all results
- pods: graphviz pod can fail if dest is nested directory

### House Cleaning
- change blacklist/whitelist filter on graph to allow and deny list
- add analytics around command invocation  ([[docs|dendron.ref.telemetry#commands]])

## 0.48.1

### Bug Fixes
- issue with finding links and anchors on newly created files

## 0.48

## 0.47.3

### Features

### Enhancements
- autofolding frontmatter ([[docs|dendron.ref.config#autofoldfrontmatter]])
- position cursor to end of file when new note created
- new seo frontmatter options when publishing ([[docs|dendron.topic.publish-legacy.configuration#seo-options]])

## 0.47.2

### Features
-   [[Markdown Pod|dendron.topic.pod.builtin.markdown.export]] supports exporting to folders
-   Support filtering graph by regex ([[docs|dendron.topic.graph-view#string-filters]])
-   Support filtering graph by stubs ([[docs|dendron.topic.graph-view#other-filters]])

### Enhancements

-   don't update update time in note if content hasn't changed
-   bad note frontmatter won't crash workspace
-   support canonical url option when publishing ([[docs|dendron.topic.publish-legacy.configuration#canonicalurl]])
-   dendron cli doesn't need `wsRoot` option if executing inside subdirectory of a workspace
-   - VS Code Workspace Trust: Dendron now supports Workspace Trust as 'limited in restricted mode' - all Dendron functionality will work except for hooks. For more information see [VS Code Workspace Trust](https://code.visualstudio.com/docs/editor/workspace-trust)



## 0.47.1

### Bug Fixes

-   issue with upgrade causing lookup to fail

## 0.47

## 0.46.3

### Enhancements

- support default daily journal vault ([[docs|dendron.ref.config]])

### Bug Fixes

- `lookupConfirmVaultOnCreate` is respected when creating a daily journal

## 0.46.2

### Features

#### Dendron Seed Bank

![[dendron://dendron.dendron-site/dendron.topic.seed-bank#summary,1:#*]]

#### Calendar View

![[dendron://dendron.dendron-site/dendron._ref.web-ui#calendar-view,1:#*]]

#### Airtable Pod

![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#summary,1:#*]]

#### Find missing links Command

![[dendron://dendron.dendron-site/dendron.ref.commands#createmissinglinkednotes,1:#*]]

### Enhancements

-   Check and initialize empty seeds on opening workspace
-   Hover displays targeted area for links with #headers and #^anchors

### Bug Fixes

-   tree view shows error on rename

### House Cleaning

-   remove `dendorn markdonw links` and `github theme` as recommended extensions at startup
-   defaultJournal\* commands have been moved to `journal` property in `dendron.yml` ([[docs|dendron.ref.config#journal]])

## 0.46.1

### Bug Fixes

-   issue with publishing using dendron cli

## 0.46

## 0.45.3

### Enhancements

-   Rename and Refactor will now replace links without formatting the file
-   Dendron respects VS Code Telemetry settgs ([[docs|dendron.ref.telemetry#how-to-opt-out-of-data-collection]])

### Bug Fixes

-   Dendron Preview `Go to Text` will sometimes not appear for note references
-   Dendron Preview links not working in VS Code 1.57
-   Dendron Preview renders the first line of note ref as markdown
-   Dendron Preview removes `#` from links

### House Cleaning

-   Shorter UUIDs
-   Analytics
    -   Added a `reason` field to `(Enable|Disable)Telemetry` metrics ([[docs|dendron.ref.telemetry#telemetry-toggle]])

## 45.2

### Features

#### Copy Note Ref Range Selections

![[dendron.ref.commands#range-selection,1:#*]]

#### Random Note Command

![[dendron://dendron.dendron-site/dendron.ref.commands#random-note,1:#*]]

### Show Schema Graph V2

![[dendron.topic.graph-view#show-schema-graph-v2,1:#*]]

#### Better Graph Filtering Options

![[dendron.topic.graph-view#filter-view,1:#rfcs]]

### Enhancements

-   copy note ref will create a block ref and insert block anchors when you have a block element selected ([[docs|dendron.ref.commands#copy-note-ref]])
-   copy note link will create a block link and insert block anchors when you have a block element selected ([[docs|dendron.ref.commands#copy-note-link]])

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

![[dendron://dendron.dendron-site/dendron.topic.graph-view#summary,1:#RFCs]]

### Enhancements

-   fine grained control for workspace sync ([[docs|dendron.topic.workspace#workspace-sync]])
-   improved startup speed
-   block references fully supported in publishing and preview
    @hikchoi
-   toggle scope when running the doctor command ([[plugin docs|dendron.ref.commands#doctor]]) ([[cli docs|dendron.ref.cli#doctor]])

### Bug Fixes

### House Cleaning

### Docs

## 0.44.1

### Features

#### Block Reference Refs Support

![[dendron.topic.note-reference#block-reference,1:#*]]

#### Workspace Vaults

![[dendron.topic.vaults#workspace-vault,1:#configuration-1]]

### Enhancements

-   faster workspace initialization

### Bug Fixes

-   tree view not displaying

### Docs

-   [[Vaults|dendron.topic.vaults]]

## 0.44

## 0.43.3

### Features

#### Insert Note Link Command

![[dendron://dendron.dendron-site/dendron.ref.commands#insert-note-link,1:#*]]

### Enhancements

-   Block Reference Support in Dendron Preview

## 0.43.2

### Features

-   Better Fuzzy Match for Lookup

### Enhancements

-   Block Reference Support in Published Site
-   Open Link is Vault Aware ([[docs|dendron.ref.commands#open-link]])

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

![[dendron://dendron.dendron-site/dendron._ref.web-ui#summary,1:#*]]

#### Block References

![[dendron.topic.note-reference#block-reference,1:#*]]

#### Paste File Command

![[dendron.ref.commands#paste-file,1:#*]]

#### GraphViz Pod

![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.graphviz.export#summary,1:#*]]

### Enhancements

-   Workspace Sync Command is now available as a native Dendron command ([[docs|dendron.ref.commands#workspace-sync]])

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

