---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1629505281711
created: 1601508213606
date: '2022-01-01'
---
## 0.56

## 0.55.2

### Features

#### Better Lookup by Default
Last week we announced a [[better lookup|dendron.release.changelog#0531]] command, rebuild from the ground up to be faster, more stable, and easier to embed into new commands. We have now finished migrating all existing lookup features to the new commands and have switched to using it for all lookup related operations. 

You shouldn't notice any difference in your daily workflow. There is **one breaking change** - any keyboard shortcuts that reference `dendron.lookup` should be changed to `dendron.noteLookup` instead.

### Enhancements
- notes: wildcard anchors will now work at the end of a note, addresses following [issue]((https://github.com/dendronhq/dendron/pull/1158))
- notes: avoid parsing notes that are too large
- workspace: better error message when trying to refactor notes without frontmatter
- publishing: breadcrumbs are now clicakble

### Bug Fixes
- notes: note reference inserting title of note in preview
- preview: horizontal line not rendering in preview
- publishing: internal links pointing to bad url

### House Cleaning
- migrate all Lookup tests to NoteLookup and Schema lookup

## 0.55.1

### Bug Fixes
- copy note url command not working

## 0.55

## 0.54.2

### Features
#### Insert Note Index Command
![[dendron.topic.commands#insert-note-index,1:#*]]

### Enhancements
- resolve wikilinks with `siteUrl` when using the Markdown Publish Pod ([[docs|dendron.topic.pod.builtin.markdown.publish#config]])

### Bug Fixes
- escaping from lookup can cause next lookup to be run twice

## 0.54.1

### Features

#### General Release of the Calendar Widget
The [[Calendar View|dendron.ref.web-ui#calendar-view]] is no longer hidden behind a feature flag and is now ready for general usage.

#### Validation and autocomplete for dendron.yml
![[dendron.topic.config.dendron#validation-and-autocomplete,1:#*]]

### Enhancements
- bring [[Lookup Note|dendron.topic.commands#lookup-note]] to feature parity with existing lookup
    - add schema suggestions
    - show current Dendron version
    - apply journal title override
- Colored tags in the tree view ([[docs|dendron.topic.tags#custom-colors]])
- Tags inherit color of ancestors ([[docs|dendron.topic.tags#custom-colors]])
- Add leading slash to markdown links during export 

### Bug Fixes
- calendar: errors when switching between month/year
- copy note link copies footnotes as anchors
- NoteLookup gets old selection in some cases
- missing tutorial warning when initializing a blank workspace
- direct child filter can miss results 

## 0.54

## 0.53.3

### Features

#### Github Publish Pod
- ![[dendron.topic.pod.builtin.github.publish#summary,1:#*]]

#### Custom Colors for Tags
- [[Customizable tag colors|dendron.topic.tags#custom-tag-colors]] to color code your tags

#### Rename Header Command
- [[Rename Header Command|dendron.topic.commands#rename-header]] which updates links to that header

### Enhancements
- automatically resolve conflicting keybinding caused by vim extension

### Bug Fixes
- lookup was not setting [[splitType|dendron.topic.lookup.modifiers#splittype]] when executed with a custom keybinding

### Pruning
- we removed `journal.firstDayOfWeek` as a property from the web ui calendar. see details [here](https://github.com/dendronhq/dendron/pull/1065/files)

### House Cleaning

### Docs

## 0.53.2

### Bug Fixes

- fix missing dependency in dendron-cli

## 0.53.1

### Features

#### Frontmatter Tags

![[Frontmatter tags|dendron.topic.tags#frontmatter-tags:#pretty-tags]]

#### Seed Commands

Seed Commands now available within the extension. You can add seeds to your workspace with the `Dendron: Seed Add` command, which was previously only available in the CLI.

![[dendron://dendron.dendron-site/dendron.topic.commands#seed-add:#Misc]]

#### Better Lookup

We are splitting up the `Lookup` command into two separate commands: [[Lookup Note|dendron.topic.commands#lookup-note]] and [[Lookup Schema|dendron.topic.commands#lookup-schema]]. There's been a lot of confusion that has come from overloading the `Lookup` command which is now deprecated and will removed in a future release. 

Besides for the split, [[Lookup Note|dendron.topic.commands#lookup-note]] should be significantly faster for large workspaces. Previously you might have noticed a lag when creating a new note in these cases. It also comes with a the new [[vaultSelection|dendron.topic.lookup.modifiers#vaultselection]] modifier that lets you prompt for a vault when creating a new note.

### Enhancements
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


