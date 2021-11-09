---
id: Tf4vuVLV3rSdpzD8la9FP
title: 0 5 X
desc: ''
updated: 1632543447541
created: 1632543447542
---

## 0.59

## 0.58.5

### Enhancements
- enhance(workspace) Use sentry to track errors  ([[docs|dendron.dev.errors.reporting]])
- enhance(lookup) "Create New" will be first result if no exact match
- enhance(lookup) Disallow toggle of vault selector when using "Move Note" command
- enhance(publish) unpublished notes replaced with link to [[unpublished pages|dendron._ref.unpublished-pages]]
- enhance(publish) support attach option for CLI ([[docs|dendron.topic.publish.cli#^bfvLB8BY4nLb]])

## 0.58.4

### Features

#### Custom CSS for Images

![[dendron.topic.images#extended-images,1:#*]]

#### Publish to Github Pages using Next

![[dendron.topic.publish.cook.github#summary,1:#*]]

### Enhancements
- enhance(publish) support `assetPrefix` option with nextjs publishing
- enhance(publish) initialize nextjs template with `https` protocol 
- enhance(publish) autoset sane defaults for nextjs publishing
- enhance(pods) markdown import to update asset links

### Bug Fixes
- fix(workspace) stop calendar from auto expanding when the last note is closed 
- fix(workspace) direct children query not filterting all results
- fix(workspace) correctly render cross-vault note references in preview v2 
- fix(workspace) ignore lookupConfirm if dailyVault is set
- fix(publish) exclude private vault backlinks when publishing
- fix(markdown) highlight same file wikilinks, wildcard references, links with anchors 
- fix(publish) backlinks respect assetPrefix

### House Cleaning
- prune(publish): remove generating jekyll folder on new workspace

## 0.58.3

### Fixes
- issue with 11ty publishing 

## 0.58.2

### Fixes
- issue with initilaize tutorial workspace from non-dendron workspace

## 0.58.1

### Fixes
- issue with initilaize template workspace from non-dendron workspace

## 0.58

## 0.57.2

### Features

#### Improved Lookup

Lookup can match words that are out of order, with better fuzziness, and will sort by last updated in case of ties.

![[dendron.topic.lookup#lookups,1:#*]]

#### CLI for Next Publishing

Dendron now has limited CLI support for NextJS Publishing. You can read about how to get started [[here|dendron.topic.publish]]

#### Leaner Extension
Bundle extension size is reduced by 50%

### Enhancements
- autocomplete and refactoring for users notes ([[docs|dendron.topic.users]])
- frontmatter tags displayed similarly to regular tags when published 
- support [[customHeaderPath|dendron.topic.publish-legacy.configuration#customheaderpath]] for Next publishing
- support [[collection options|dendron.topic.publish-legacy.configuration#collection-options]] for Next publishing
- progress bar for [[refactoring|dendron.topic.commands#refactor-hierarchy]]

### Bug Fixes
- links at the top and bottom of note references not clickable
- bad missing note hover message
- tag decorators persist after text is removed
- don't show multi-select modifier on rename

## 0.57.1

### Features

#### Cache rendered previews

When using preview, navigating back to a page that has already been recently visited should render more quickly with the new addition of a preview caching mechanism.

### Enhancements

- (workspace) add multi-select for `Dendron: Move Note` command
- (workspace) add `expandAll` functionality to backlink view
- (publishing) nextjs-template sidebar style improvements in published docs
- (workspace) frontmatter tag highlighting
- (workspace) missing tag notes are now highlighted as missing in the same way wikilinks show

### Bug Fixes

- (publishing) block anchor in list with single top level element
- (publishing) allow a note reference of a list item without its children
- (publishing) block anchors attached to code blocks in publishing
- (workspace) reload index is now silent by default, unless run explicitly

## 0.57

## 0.56.2

### Features

#### User Tags
![[dendron.topic.users#summary,1:#*]]

### Enhancements
- tag colors now show up in graph view
- significant (+60%) improvements to workspace startup speed
- tag color display improvements
- progress indicators for all long running tasks
- additional styling improvements for nextjs publishing

### Bug Fixes
- issue with "Browse Note" command for windows

### House Cleaning
- remove Dendron Markdown Preview Enhanced as recommended extension

## 0.56.1

### Features

#### Seed browser

Seed Browser is a new view that let's you view Seeds that are available in the Seed Registry. You can view detailed information about the seeds and download them to your workspace. 

![[dendron.topic.commands#seed-browse,1:#*]]

### Enhancements

- improve hover message for missing notes 
- ability to set selection type to `none` ([[docs|dendron.ref.config#lookup]])
- use github publish to create new issues ([[docs|dendron.topic.pod.builtin.github-issue.publish]])
- nicer refactor preview 
- treeview improvements when publishing using nextjs
- added dendron cache to .gitignore on vault add
- added various alias modes for insert note link command ([[docs|dendron.topic.commands#insert-note-link]])

### Bug Fixes
- backlinks properly update on frontmatter tag changes
- slugify github issue title when importing

## 0.56

## 0.55.3

### Enhancements
- support smart vault selection for new lookup
- copy note link support for new lookup

### Bug Fixes
- unhandled error when escaping from insert link command

### Breaking Changes 

#### Vault Selection

- The new `Select Vault` button introduced with Better Lookup has a changed behavior now.
  - If the button is toggled on, you will always be prompted for vault selection.
  - If the button is toggled off, Dendron will try to determine the vault from the current active editor and other contexts, and prompt when there are still ambiguities.
  - Note that this button is only visible if you have `lookupConfirmVaultOnCreate` set to `true` in `dendron.yml`.
  - More on this topic can be found [[here|dendron.topic.lookup.modifiers#vaultselectionmode]]

#### Copy Note Link

- `copyNoteLink` modifier button will not be trigger immediately after toggle.
  - Before this change, this button will immediately copy the link of the selected note(s) on trigger.
  - This behavior is not congruent to how the other modifiers behave, and fails to work as expected in some cases (e.g. creating new notes, or selecting multiple notes, toggling `copyNoteLink`, then selecting more notes).
  - For this reason, the `copyNoteLink` behavior will now trigger once the lookup has been confirmed.
  - More on this topic can be found [[here|dendron.topic.lookup.modifiers#copynotelink]]


## 0.55.2

### Features

#### Better Lookup by Default
Last week we announced a [[better lookup|dendron.release.changelog#0531]] command, rebuild from the ground up to be faster, more stable, and easier to embed into new commands. We have now finished migrating all existing lookup features to the new commands and have switched to using it for all lookup related operations. 

There shouldn't be any noticable difference in your daily workflow, but there are some breaking changes that needs to be addressed described below.

### Enhancements
- notes: wildcard anchors will now work at the end of a note, addresses following [issue]((https://github.com/dendronhq/dendron/pull/1158))
- notes: avoid parsing notes that are too large
- workspace: better error message when trying to refactor notes without frontmatter
- publishing: breadcrumbs are now clicakble

### Bug Fixes
- notes: note reference inserting title of note in preview
- preview: horizontal line not rendering in preview
- publishing: internal links pointing to bad url

### Breaking Changes

#### Changes to custon keyboard shortcuts.
If you are using custom keyboard shortcuts to provide different arguments to the lookup command, these are the breaking changes that need to be addressed:

1. All keyboard shortcuts referencing `"command": "dendron.lookup"` should be updated to reference `"command": "dendron.lookupNote"` instead.
1. There are some changes to the arguments you can provide to the lookup command:
    - `flavor` argument is deprecated. Note Lookup and Schema Lookup are two separate commands now.
    - `noteExistBehavior` argument is deprecated.
    - `filterType` has been renamed to `filterMiddleware`, and requires an array of strings instead of a string.
    - `value` has been renamed to `initialValue`.
    - `effectType` has been broken down to individual arguments:
      - `multiSelect` and `copyNoteLink`.
      - `copyNoteRef` keyword has been deprecated.

Please note that providing an incorrect argument to the keyboard shortcut will not prevent you from using that keybinding, but the argument will not be properly passed. This will result in a different behavior than you would expect. Please make sure to update them if you are using them.

You can find a reference to all the available lookup modifiers [[here|dendron.topic.lookup.modifiers]]

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
The [[Calendar View|dendron._ref.web-ui#calendar-view]] is no longer hidden behind a feature flag and is now ready for general usage.

#### Validation and autocomplete for dendron.yml
![[dendron.ref.config#validation-and-autocomplete,1:#*]]

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
- ![[dendron.topic.pod.builtin.github-issue.publish#summary,1:#*]]

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

By default, all new users will get [[Preview|dendron.topic.preview]] as the default. Existing users that have not turned on V2 will see no change but can and are encourage to switch to preview v2 by following the instructions [[here|dendron.topic.preview#uninstall-dendron-markdown-preview-enhanced]]. Dendron Markdown Preview Enhanced should now be considered deprecated and subject to removal later this year. 

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

![[dendron.topic.multi-vault#vault-location-when-creating-a-note:#navigating-links]]

#### Hashtag support 

![[dendron://dendron.dendron-site/dendron.topic.tags#summary,1:#*]]

#### Preview V2 Enhancements

Almost at feature parity with current preview. You can now toggle it to be the default preview by setting `dev.enablePreviewV2` to true in your `dendron.yml`

![[dendron://dendron.dendron-site/dendron.topic.preview#summary,1:#*]]



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

