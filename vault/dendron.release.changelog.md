---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1628253569812
created: 1601508213606
date: '2022-01-01'
---
## 0.54

## 0.53.1

### Features

#### Frontmatter Tags

![[Frontmatter tags|dendron.topic.tags#frontmatter-tags:#pretty-tags]]

#### Seed Commands

Seed Commands now available within the extension. You can add seeds to your workspace with the `Dendron: Seed Add` command, which was previously only available in the CLI.

![[dendron://dendron.dendron-site/dendron.topic.commands#seed-add:#Misc]]

#### Github Publish Pod

The Github Publish Pod lets you update the status and labels of issues in your github repository that have previously been imported into Dendron. See the [[documentation|dendron.topic.pod.builtin.github.publish]] for how to configure the pod and authenticate with Github.

### Enhancements

- The new lookup (in preview, accessible via `Dendron: Lookup Note`) now has horizontal split and copy note link [[modifiers|dendron.topic.lookup.modifiers]] for feature parity with existing lookup.
- Google Docs Pod will now prompt users to confirm overwriting of a document before running with the [[confirmOverwrite configuration.|dendron.topic.pod.builtin.google-docs.import#confirmoverwrite]]
- When choosing between vaults (for example, picking which vault to put a note in), the vaults will now show by the vault name instead of the vault path.

### Bug Fixes

- Fixed an issue where wikilinks were not getting highlighted
- Fixed an issue with the doctor command's regenerate note ID feature
- Fixed broken links in the extension readme
- Add Vault command in the CLI will now properly modify your workspace file ^sZzM7QHk4i5m

## 0.53

## 0.52.2

### Enhancements
- Lots of graph improvements
  - Labels are now hidden in large graphs 
  - Better layout for large graphs
  - Loading indicators when starting graph
  - Better error messages
  - Better configuration toggling

### Bug Fixes
- Inconsistent cross-vault link behavior has been fixed
- Better behavior for hashtags with periods at the end

### House Cleaning
- windows integration tests are now active 

## 0.52.1

### Bug Fixes
- Issue with publishing from plugin 

## 0.52

## 0.51.4

### Features

#### Deprecate Markdown Preview Enhanced

Dendron Markdown Preview Enhanced is no longer required to use Dendron. 

By default, all new users will get [[Preview V2|dendron.topic.preview-v2]] as the default. Existing users that have not turned on V2 will see no change but can and are encourage to switch to preview v2 by following the instructions [[here|dendron.topic.preview-v2#uninstall-dendron-markdown-preview-enhanced]]. Dendron Markdown Preview Enhanced should now be considered deprecated and subject to removal later this year. 

### Enhancements
- control graph zoom sensiitivity

## 0.51.3

### Features

#### Google Doc Import Pod
![[dendron.topic.pod.builtin.google-docs.import#summary,1:#*]]

### Enhancements
- selection modiifier to NoteLookup Command
- delay frontmatter warning while user is typing

### Bug Fixes
- autocomplete takes a long time 

## 0.51.2
### Features

#### Non-Blocking Workspace initialization

When you open a Dendron workspace, you might have noticed that you needed to wait for the workspace to initialize before VSCode itself became usable. This is because even though Dendron uses a local server to index your files, this server ran on the same process as VSCode. 

We have offloaded the local server to a separate process so that all engine operations (eg. indexing) no longer affect the main VSCode process. 

What this means in practice is that you can use VSCode immediately when the workspace is open. It also means you'll notice better responsiveness across all engine related features (eg. refactoring, preview, etc)

### Enhancements
- find missing links in entire workspace  ([[docs|dendron.topic.commands#createmissinglinkednotes]])
- hide the filter view in the note graph 
- warn against missing frontmatter ([[docs|dendron.topic.commands#fixfrontmatter]])
- hashtag autocomplete improvements ([[docs|dendron.topic.tags#autocomplete-intellisense]])
- doctor command to automatically fix the frontmatter ([[docs|dendron.topic.commands#fixfrontmatter]])

### Bug Fixes
- hashtag links duplicate following text
- issues with parsing wikilinks with unicode and special symbols

### House Cleaning

## 0.51.1

### Enhancements
- reduce size of dendron-cli

## 0.51

## 0.50.2

### Features

#### Custom Graph Syliing
![[dendron.topic.graph-view#custom-styling,1:#*]]

#### Built-In Note Templates

This experimental feature will allow you to pull down a set of templates for commonly used scenarios. The template selection is currently limited, but we will be expanding on the template set in the future.

![[dendron://dendron.dendron-site/dendron.topic.templates#built-in-templates-,1]]


### Enhancements
- show preview will no longer ask you to load

### Bug Fixes
- dendron not updating journal behavior based on journal config in dendron.yml

### Pruning

### House Cleaning

### Docs


## 0.50.1

### Features

#### Backlink Candidates

![[dendron.topic.links#candidate-backlink:#*]]

#### Smart hierarchy selection when creating notes with multiple vaults

The behavior around selecting which vault to create a note in has been improved for multi-vault workspaces. If the new note matches an existing hierarchy in a different vault, a prompt will come up with vault suggestions for your new note.

![[Vault Location when Creating a Note|dendron.topic.vaults.multi-vault#vault-location-when-creating-a-note:#navigating-links]]

#### Hashtag support 

![[dendron://dendron.dendron-site/dendron.topic.tags#summary,1:#*]]

#### Preview V2 Enhancements

Almost at feature parity with current preview. You can now toggle it to be the default preview by setting `dev.enablePreviewV2` to true in your `dendron.yml`

![[dendron://dendron.dendron-site/dendron.topic.preview-v2#summary,1:#*]]



### Enhancements
- sort completions by vault names
- [[Insert Note|dendron.topic.commands#insert-note]] will now resolve snippet variables ([[docs|dendron.topic.snippets#variables]])
- custom syntax highlighting for wiki links ([[docs|dendron.topic.links#highlghts]])
- replace prefix with value of original match when running refactor command

### Bug Fixes
- updated timestamp in frontmatter not updating
- bad link in tutorial workspace

### House Cleaning
- add analytics on uninstall

## 0.50

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
- same file autocomplete headers and anchors ([[docs|dendron.ref.intellisense]])

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

- native dendron preview ([[docs|dendron.ref.web-ui#preview]])
- updated onboarding experience ([[docs|dendron.topic.commands#launch-tutorial]])

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
- autofolding frontmatter ([[docs|dendron.topic.config.dendron#autofoldfrontmatter]])
- position cursor to end of file when new note created
- new seo frontmatter options when publishing ([[docs|dendron.topic.publishing.configuration#seo-options]])

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
-   - VS Code Workspace Trust: Dendron now supports Workspace Trust as 'limited in restricted mode' - all Dendron functionality will work except for hooks. For more information see [VS Code Workspace Trust](https://code.visualstudio.com/docs/editor/workspace-trust)



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

![[dendron://dendron.dendron-site/dendron.topic.seed-bank#summary,1:#*]]

#### Calendar View

![[dendron://dendron.dendron-site/dendron.ref.web-ui#calendar-view,1:#*]]

#### Airtable Pod

![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#summary,1:#*]]

#### Find missing links Command

![[dendron://dendron.dendron-site/dendron.topic.commands#createmissinglinkednotes,1:#*]]

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

![[dendron://dendron.dendron-site/dendron.topic.commands#random-note,1:#*]]

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

![[dendron://dendron.dendron-site/dendron.topic.graph-view#summary,1:#RFCs]]

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

![[dendron.topic.references#block-reference,1:#*]]

#### Workspace Vaults

![[dendron.topic.vaults#workspace-vault,1:#configuration]]

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

![[dendron://dendron.dendron-site/dendron.topic.commands#insert-note-link,1:#*]]

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

![[dendron://dendron.dendron-site/dendron.ref.web-ui#summary,1:#*]]

#### Block References

![[dendron.topic.references#block-reference,1:#*]]

#### Paste File Command

![[dendron.topic.commands#paste-file,1:#*]]

#### GraphViz Pod

![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.graphviz.export#summary,1:#*]]

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
