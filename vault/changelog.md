---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1651536643578
created: 1601508213606
nav_order: 2
---

## 0.93.0
### Features
- feat(views): Dendron Side Panel (#2832) @jonathan 

### Enhancements
- enhance(views): remove web view version of tree view (#2822) @hikchoi

### Fix
- fix(views): fix various issues with tree view not updating (#2805) @hikchoi

## 0.92.0
### Enhancements 
- enhance(workspace): `vault convert` now works with self contained vaults (#2745) @kaan 
- enhance(views): optimize graph view load times - 100x improvement on large workspaces (#2797) @jonathan
- enhance(workspace): general speed ups across multipel commands (#2798) @jonathan 
- enhance(workspace): doctor command can detect and fix misconfigured self contained vaults (#2768) @kaan

### Fix
- fix(pods): exporting as markdown will add `.md` extension to markdown files (#2771)  @kevin
- fix(views): multiple stability fixes for tree view (#2757) @hikchoi
- fix(workspace): hovering an asset link while holding `ctrl` no longer opens the asset (#2784) @kaan
- fix(view): some views don't update for new notes with self contained vaults (#2790) @kaan
- fix(view): broken preview for links with sub-hierarchy starting with .md (#2781) @joshi
- fix(workspace): remove stale entries from cache when initializing (#2756) @tuling

## 0.91.0
### Features
- feat(workspace): option to gen title using full hierarchy ([[docs|dendron://dendron.dendron-site/dendron.ref.config.workspace#enablefullhierarchynotetitle]]) (#2593) @jonathan 
- feat(cli): Add rename functionality to CLI (#2408) [[people.ben-ang]]
- feat(workspace): Meeting Notes (#2727) @jonathan 

### Enhancements 
- enhance(navigation): `Dendron: Go to Note` and `Go to Definition` support assets in wikilinks (#2688) @kaan
- enhance(workspace): workspace vault support for self contained vaults (#2728) @kaan 

### Fix
- fix(airtable): Exporting to airtable automatically saves current document (#2696) @tuling
- fix(publish): add luxon as dev dependency (#2713) @kevin
- fix(workspace): Dendron causes errors in non-Dendron workspaces (#2731) @kaan
- fix(vaults): self contained vaults sync (#2758) @kaan
- fix(view): support custom styles for Note Graph (#2760) @joshi
- fix(view): apply current theme when vscode reduce motion setting is on (#2749) @joshi

## 0.90.0
### Features
- feature(publish): support custom urls for vaults ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults.config#publishing-properties]]) (#2641) @kevin

### Enhancements
- enhance(publish): open published tree view links in new tab (#2662) @kaan

### Fix
- fix(workspace): error when adding a self contained vault inside a native workspace (#2660) @kaan
- fix(publish): publish issues with latest version of nextjs due to swc module (#2673) @kevin
- fix(workspace): preserve wikilink metadata on export (#2676) @kevin
- fix(workspace): typo "hierarchy", "should" (#2699) [PabloLION](https://github.com/PabloLION)
- fix(workspace): consistent tree item sort order (#2665) @hikchoi

## 0.89.0
### Features
- feat(workspace): detect and fill missing default configs on extension upgrade ([[docs|dendron://dendron.dendron-site/dendron.topic.doctor#addmissingdefaultconfigs]]) (#2602) @hikchoi

### Enhancements
- enhance: create CONTRIBUTING.md file (#2567) @kevin

### Fix
- fix(workspace): typo in dendron.yml (#2636) @kevin
- fix(markdown): issue with angle brackets syntax in mermaid  (#2637) @kaan
- fix(workspace): updated timestamp not updating properly on save (#2651) @tuling
- fix(workspace): copyNoteLink not getting updated title if note isn't saved (#2631) @tuling
- fix(views): dendron-next-server to pass port-forwarded url (#2671) @joshi


## 0.88.0
### Deprecation Notices
- deprecate(views): Tree view V2 and the feature flag [[enableWebUI|dendron://dendron.dendron-site/dendron.ref.config#enablewebui]] will be removed in the near future. We will be focusing on improving Tree view V1 moving forward. 

### Enhancements
- enhance(workspace): improve the error message for bad or missing code-workspace file (#2600) @kaan
- enhance(workspace): initialize workspace can create self contained vaults ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained##configuration]]) (#2569) @kaan
- enhance(common): don't reload workspace when running doctor airtable command (#2620) @kevin

### Fix
- fix(workspace): fix dropped keystrokes issue in lookup (#2626) @jonathan
- fix(internal): Engine `updateNote` not properly firing update events (#2622) @tuling
- fix(markdown): support parenthesis in the image URL (#2634) @kaan
- fix(views): Backlinks will no longer disappear in preview upon editing (#2608) @tuling
- fix(lookup): autocomplete causes notes to be created in wrong vault  (#2623) @kevin
- fix(views): Preview now works in remote workspaces (#2624) @kaan

## 0.87.0

### Features
- feat(vaults): early implementation of self contained vaults ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained]]) (#2517) @kaan
- feat(workspace): doctor command to find (and suggest fix for) keyboard conflicts ([[docs|dendron://dendron.dendron-site/dendron.topic.doctor]]) (#2578) @hikchoi

### Enhancements
- enhance(workspace): faster preview refresh (#2527) @tuling
- enhance(workspace): faster editing in large workspaces (#2527) @tuling
- enhance(internal): provide a standard way to create and read backup files ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#open-backup]]) (#2521) @hikchoi
- enhance(workspace): warn on keyboard conflicts on first install (#2578) @hikchoi
- enhance(pods): support exporting a note to multiple Airtable destinations ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export]]) (#2582) @Joshi

### Fix
- fix(workspace): fix crash that can happen when bad frontmatter is present during doc save (#2535) @jonathan
- fix(publish): customHeaderPath breaks publishing if value is set to anything except `header.html` (#2565) @joshi
- fix(basics): ensure note title is always a string to avoid errors (#2551) @kaan
- fix(sync): better error message on `Workspace Add and Commit` (#2552) @joshi
- fix(lookup): lookup (without spaces) should be case-insensitive (#2570) @joshi
- fix(workspace): issue with notes not being saved on export (#2574) @tuling
- fix(workspace): race condition when backing up configuration  (#2581) @kevin
- fix(views): unblock preview rendering when backlink is invalid (#2586) @jonathan
- fix(workspace): race condition when loading native workspace (#2604) @kevin
- fix(workspace): prevent errors in Open Backup Command and Run Migration Command in native workspaces (#2607) @hikchoi

## 0.86.0

### Enhancements
- enhance(pods): support null entries for dates in Airtable export pod v2 ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#date]]) (#2520) @joshi
- enhance(basics): improve performance around reference rendering including hover (#2543) @jonathan
- enhance(workspace): Dendron still loads if there's a missing local vault (#2526) @kaan

### Fix
- fix(basics): ensure note title is always a string to avoid errors (#2551) @kaan
- fix(pods): Google Docs Export pod displays Bad Request error on export (#2529) @joshi
- fix(publish): better error messages when publishing (#2538) @kevin
- fix(views): block anchors showing up in the preview (#2548) @kaan

## 0.85.0

### Enhancements
- enhance(workspace): doctor command, `fixRemoteVaults`, to fix remote vaults that don't have a remote set ([[docs|dendron://dendron.dendron-site/dendron.topic.doctor#fixremotevaults]]) (#2484) @kaan
- enhance(publish): published pages have faster first load due to optimizations to the tree menu (#2379) @eleweek
- enhance(views): faster loading of markdown due to parsing improvements (#2505) @jonathan

### Fix
- fix(publish): properly render mermaid and katex when published (#2480) @hikchoi
- fix(lookup): add selection2link button for CreateScratchNoteCommand (#2496)  @hikchoi
- fix(pods): fix issue with url links not showing up when using markdown export inside a note reference (#2486) @joshi
- fix(vaults): sometimes see same vault multiple times in vault dropdown (#2501) @tuling
- fix(internal): some edge cases when deleting a note that interferred with tree view and refactoring @hikchoi
- fix(cli): add omitted migration entries (#2519) @hikchoi
- fix(workspace): add validation for enableFrontmatterTags and enableHashesForFMTags (#2524) @hikchoi
- fix(views): fix race condition in tree view v2 initialization logic (#2528) @jonathan

## 0.84.0

### Features
- feat(pods): support pods v2 in CLI ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.cli]]) (#2402) @joshi

### Enhancements
- enhance(views): separate tag configuration for preview and publish ([[docs|dendron://dendron.dendron-site/dendron.ref.config.preview]]) (#2460) @hikchoi
- enhance(views): faster image preview by using native vscode webview urls (#2432) @kaan
- enhance(views): faster webviews by reducing engine sync operations (#2472) @jonathan

### Fix
- fix(schema): Apply schema template for goto-note-command if template is in different vault (#2429) @tuling
- fix(publish): Table of Contents is missing user tags, inline code, dashes and underlines (#2465) @kaan
- fix(workspace): dendron can hang when trying to provide hover for large non-dendron file (#2457)  @kevin
- fix(views): clicking preview links for non-note files (#2455) @kaan
- fix(views): Code blocks and spans in preview are html encoded (#2471) [flammehawk](https://github.com/flammehawk)
- fix(workspace): don't call reload index if action is findIncompatibleExtension (#2458) @hikchoi
- fix(views): don't refresh tree view if note visible (#2487) @hikchoi

## 0.83.0

### Breaking changes

The latest release of Dendron will prompt users to automatically migrate their `dendron.yml` configurations to use the latest publishing configuration. Updated workspace configurations (`version: 5`) won't work with older versions of `dendron-cli`.

If `dendron-cli` is not updated, you will encounter the following error message:

```
Cannot find minimum compatible client version. This error should never occur! Please report a bug if you have encountered this.
```

If running the latest `dendron-cli`, users can optionally migrate their configurations directly from `dendron-cli`:

```sh
dendron dev run_migration --migrationVersion 0.83.0
```

### Deprecation Notices

- deprecate(publishing): Legacy publishing has now been removed from `dendron-cli`. Dendron users that haven't yet migrated from `dendron buildSite` commands must migrate to using the `dendron publish` commands.
  - [[Common commands for Next.js publishing with dendron-cli|dendron://dendron.dendron-site/dendron.topic.publish.cook.common]]
  - [[Upgrade Instructions|dendron://dendron.dendron-site/dendron.topic.publish.migration]]

### Enhancements
- enhance(pods): add vault filter for pods-v2 hierarchy export ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.config#exportscope]]) (#2419) @joshi
- enhance(notes): change dendron id format to be alphanumeric lowercase ([[docs|dendron://dendron.dendron-site/dendron.topic.frontmatter#id]]) (#2403) @kevin
- enhance(workspace): Block Anchor support for non-note files ([[docs|dendron://dendron.dendron-site/dendron.topic.links#file-links]]) (#2377) @kaan
- enhance(workspace): calculate backlinks and anchors in engine for improved editor responsiveness (#2389) @kaan

### Fix
- fix(workspace): Fixed instances where Journal note `title` values weren't properly formatted as `yyyy-MM-dd` and the `traitID` of `journalNote` wasn't being applied (#2401) @jonathan
- fix(workspace): Dendron will try to parse non-dendron files in `onFirstOpen` (#2405) @kevin
- fix(workspace): error message to be readable in error toast (#2426) @joshi
- fix(publish): horizontal line's height in publishing (#2441) @kaan
- fix(publish): properly set siteIndex when it's not explicitly set by config (#2443) @hikchoi

## 0.82.0

### Enhancements
- enhance(schemas): Extend date subsitution to include week numbers with `CURRENT_WEEK` ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.schema-template#template-variables]]) (#2372) [`opcon`](https://github.com/opcon)

### Fix
- fix(workspace): avoid workspace watcher crashing if folder is deleted (#2359) @kaan
- fix(workspace): correct title generation of notes within sub-hierarchy starting with `md` (#2369) @joshi
- fix(pod): acknowledge cli args for publish pod (#2352) @joshi

## 0.81.0

### Features
- feature(pods): announcing a new version of dendron pods: Pods V2. Too many changes to list, see [[0.81 release notes|dendron://dendron.dendron-site/changelog.release.2022-02-08]] for more details

### Enhancements
- enhance(schemas) support cross vault links in schema templates ([[docs|dendron://dendron.dendron-site/dendron.topic.schema#cross-vault-template-syntax]]) (#2274) @tuling
- enhance(schemas) support template prompt when multiple templates match a schema ([[docs|dendron.topic.schema#shortened-template-syntax]]) (#2274) @tuling
- enhance(views) improve hover preview performance (#2312) @kaan
- enhance(sync): Workspace Sync now stash and unstash local changes to pull even when there are uncommitted changes ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan
- enhance(sync): Workspace Sync now can detect merge conflicts and ongoing rebases to avoid committing bad notes ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan
- enhance(sync): Workspace Sync now can detect bad or misconfigured remotes and warn about them ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan
- enhance(sync): Workspace Sync now can detect that a push would fail, and avoid pushing to remote ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan
- enhance(sync): Workspace Sync now can detect that a push is not needed, and skip pushing ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan
- enhance(sync): Workspace Sync now has better error messages if something went wrong ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan
- enhance(sync): Workspace Sync commit messages now include the version of Dendron, the names of vaults in that repository, and the hostname of the committing machine ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan

### Fix
- fix(views): preview opens wrong path on Windows (#2326) @kaan
- fix(views): show preview doesn't display targeted files when using file explorer (#2327) @kaan
- fix(views): windows hover preview now shows images (#2312) @kaan
- fix(schemas): Do not include stubs as part of template suggestions when applying a template (#2357) [tma66](https://github.com/tma66)
- fix(pods): update asset references on markdown import (#2350) @joshi
- fix(publish): skip adding asset prefix to images with web url (#2362) @joshi

## 0.80.0

### Enhancements
- enhance(pods): import note metadata on markdown import ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import#importfrontmatter]]) (#2195) @joshi
- enhance(workspace): conflicting extension warning (#2176) @hikchoi
- enhance(publish): show lookup without waiting for notes to fetch (#2304) @eleweek
- enhance(publish): faster search results (#2304) @eleweek

### Fix
- fix(lookup): bad title text when creating new schema (#2253) @eleweek
- fix(publish): numbered lists without content stack on top of each other (#2219) @kaan
- fix(publish): bad logo text position on mobile (#2183) [Pvorona](https://github.com/pvorona)
- fix(publish): Search Bar Results to not stay anchored to the search bar when scrolling up (#2292) @eleweek
- fix(schema): fix schema template match when there is same grandchild from two different schema parents (#2158) @nickolay
- fix(navigation): decode urlencoded spaces in asset path before opening (#2279) @hikchoi
- fix(pods): improve error feedback to user (#2266) @joshi
- fix(publish): CSS sidebar is off on smaller screens like iPad (#2305) @eleweek

## 0.79.0

### Breaking changes

[[Date variable substitution|dendron://dendron.dendron-site/dendron.topic.templates#template-variables]] has been temporarily reverted as it conflicts with existing template substitutions. Details discussed [here](https://github.com/dendronhq/dendron/discussions/2207). We're aiming to re-introduce next week - apologies for the churn!
### Enhancements
- enhance(publish): logo can reference a full URL path to external image ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.faq#how-do-i-add-a-logo-to-my-website]]) (#2189) @kaan
- enhance(lookup): add configuration for vault selection behavior with new `vaultSelectionModeOnCreate` config option @nickolay ([[docs|dendron://dendron.dendron-site/dendron.ref.config.commands#vaultselectionmodeoncreate]])
- enhance(lookup): change `confirmVaultOnCreate` default to `true` (#1960) @nickolay
- enhance(publish): attempt to update Next.js template in-place (#2162) [Luke Carrier](https://github.com/LukeCarrier) `lukecarrier#2081`
- enhance(publish): add lockfile to Next.js (#2215) @kevin

### Fix
- fix(server): highlighting breaks when there's too much text (#2163) @kaan
- fix(workspace): stop link candidate logic when disabled (#2136) @hikchoi
- fix(commands): renamed command from `Goto Note` to `Go to Note` (#2187) [skfile](https://github.com/skfile)
- fix(markdown): Exclude parenthesis from tags (#2182) [Nicklas Gummesson](https://github.com/viddo) `viddo#9229`
- fix(publish): logo doesn't respect `assetsPrefix` (#2189) @kaan
- fix(workspace): cursor moves to top when opening file through the search (#2193) @kaan
- fix(schema): Use string replace instead of lodash for date variable substitution (breaking change)
- fix(publish): some published pages will show error (#2199) @kaan

## 0.78.0

### Enhancements
- enhance(pod): Markdown import pod avoids reformatting files ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import]]) (#2084) @kaan
- enhance(workspace): `Dendron: Initialize Workspace` can use file picker to select destination, instead of typing it out ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#initialize-workspace]]) (#2130) @tuling
- enhance(markdown): allow notes to override the pretty refs setting ([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference#configuration]]) (#2124) @kaan
- enhance(workspace): detect config / client compatibility mismatch in cli (#2113) @hikchoi

### Fix
- fix(lookup): add sort by levenshtein distance prior to sorting by update date to lookup results of the same match score ([[docs|dendron://dendron.dendron-site/dendron.topic.lookup.find#sort-ordering]]) (#2111) @nickolay
- fix(commands): paste-link-title-trim (#1961) [KamQb](https://github.com/KamQb) `@qKi#0849`
- fix(workspace): insert note index enablement (#2133) @hikchoi
- fix(views): hover preview containing local images on Windows (#2047) @kaan
- fix(views): enable copy plaintext from preview (#2152) @kevin

## 0.77.0

### Fix
- fix(workspace): warn for frontmatter issues even if the frontmatter is not visible (#2034) @kaan
- fix(publish): Publishing dev server keeps running after exiting on Windows (#2035) @kaan
- fix(views): tree view refresh and circular dependency removal (#2082) @jonathan
- fix(views): `Show Preview` errors on Windows (#2094) @kaan
- fix(cli): using `--noBuild` with export from CLI will cause command to hang (#2109) @kevin

## 0.76.1

### Features
- feat(lookup): new Lookup View for modifiers when a note lookup is active ([[docs|dendron://dendron.dendron-site/dendron.topic.workbench#lookup-view]]) (#1977) @hikchoi

### Enhancements
- enhance(workspace): `Dendron: Change Workspace` can use file picker to select destination, instead of typing it out ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#change-workspace]]) (#2044) @tuling

### Fix
- fix(refactor): `Move Header` issues (#2040) @hikchoi
- fix(schema): ensure month/day/time has two digits when doing data variable substitution (#2064) @tuling

## 0.76.0

### Breaking Changes

Dendron previously published backlinks and child links as header/anchor sections at the end of each note. They are now changing from `<h2>` to `<strong>`. Backlinks and child links won't appear as header sections in the local TOC for a page, and will no longer have anchors to link to (ex. `#backlinks`).

### Deprecation Notices

- deprecate(publishing): 11ty publishing will be removed with the next release, and is no longer maintained. This does not affect you if you use the current Next.js publishing
  - If you wish to continue using 11ty, you will need to lock `@dendronhq/dendron-cli@0.76`
- deprecate(refactor): Dendron Doctor will no longer include `oldNoteRefToNew`, which was used in the past to convert between `((ref: foo))` to `![[foo]]`

### Enhancements
- enhance(schema): support date variable substitution for templates ([[docs|dendron://dendron.dendron-site/dendron.topic.templates#template-variables]]) (#1971) @tuling
- enhance(lookup): add auto completion to `Go Down` command ([[docs|dendron.topic.navigation#go-down]]) and `Create Task Note` command ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#create-task-note]]) (#1987) @nickolay
- enhance(views): `Dendron: Show Preview` works for regular markdown files ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#show-preview]]) (#1906) @kaan
- enhance(views): adds a `Dendron: Show Preview` button in the context menu when right-clicking a markdown file in the file explorer, as well as when right-clicking a tab in the editor (#1906) @kaan
- enhance(workspace): improve note highlighting and autocomplete performance (#1942) @kaan

### Fix
- fix(workspace): typo in convert vault command (#1999) [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
- fix(workspace): frontmatter tags are not highlighted (#2001) @kaan
- fix(publish): compiler issue with nextjs @kevin
- fix(lookup): full length word matches should be case insensitive (#1990) @nickolay
- fix(views): update tree order when a note changes order (#2014)
- fix(workspace): don't show calendar view unless dendron tree view is active (#2017) @kevin
- fix(workspace): rename operations modify unnecessary files @hikchoi
- fix(lookup): regression on `onTriggerButton` not scoping properly (#2037) @hikchoi

## 0.75.1

### Fix
- fix(server): specify `localhost` when starting server (#2019) @kevin

## 0.75.0

### Features
- feat(refactor): New `Dendron: Convert Link` command ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring#convert-link]]) (#1933) @hikchoi

### Enhancements
- enhance(views): adding optional _last update_ sort ordering for backlinks view ([[docs|dendron://dendron.dendron-site/dendron.topic.workbench#backlink-view-command-palette]]) (#1924) @nickolay
- enhance(pods): better support for GitHub Issue and task notes ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.github-issue.publish#aliasmapping]]) (#1918) @joshi
- enhance(commands): `Dendron: Delete Node` command warns about links that will break, prompting users before deletion ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#delete-node]]) (#1885) @hikchoi
- enhance(lookup): better error message when using schema lookup (#1914) @tuling

### Fix
- fix(markdown): lag in the editor when there's a x-vault link to a non-existent vault (#1941) @kaan
- fix(markdown): correctly offset frontmatter line count in doctor preview for `findBrokenLinks` (#1959) @hikchoi
- fix(publish): excluding the domain of a published hierarchy will cause publishing to throw an error (#1964)  @kevin
- fix(publish): hamburger display in wrong position on safari (#1965) @kevin
- fix(lookup): autocomplete will sometimes not initialize (#1891) @nickolay
- fix(views): looping behavior when performing rename when note graph is open (#1980) @hikchoi
- fix(commands): seed commands broken by internal refactoring (#1997) @kevin

## 0.74.0

### Enhancements
- enhance(workspace): go to definition & hover works for wikilinks inside regular files (#1917) @kaan

### Bug Fixes
- fix(navigation): hovering over links to files will display a "click here to open this" message, and not the incorrect "this note is missing" message @kaan
- fix(workspace): autocomplete deletes text following wikilink with no closing brackets (#1909) @kaan
- fix(workspace): extension crash in non-Dendron workspaces when there's a large number of files (#1913) @kaan
- fix(workspace): xkcd seed vault description (#1923) [Zero King](https://github.com/l2dy) `@l2dy#9201`

## 0.73.2

### Features
- feat(pod): Gdoc exportv2 pod (#1808) @joshi

### Enhancements
- enhance(docs): Getting Started guide refresh, with several other docs updates ([[docs|dendron://dendron.dendron-site/dendron.tutorial]]) ([diff](https://github.com/dendronhq/dendron-site/pull/316/files)) @derek
- enhance(navigation): copy note link now works inside files ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#copy-note-link]]) (#1895) @kaan
- enhance(navigation): links to files can now link to specific lines ([[docs|dendron://dendron.dendron-site/dendron.topic.links#file-links]]) (#1895) @kaan
- enhance(views): Support new config to automatically show preview (#1897) @tuling ([[docs|dendron://dendron.dendron-site/dendron.ref.config.preview#automaticallyshowpreview]])
- enhance(navigation): links to files are now highlighted as existing if the linked file exists (#1895) @kaan

### Fix
- fix(navigation): hovering over links to files will display a `Click here to open this` message, and not the incorrect `This note is missing` message (#1895) @kaan
- fix(refactor): refactor crashes when captured note is a stub (#1910) @hikchoi
- fix(docs): Replaced instances of `spwan` with `spawn` [icedwater](https://github.com/icedwater)

## 0.73.1

### Enhancements
- enhance(docs): update some links in tutorial docs @kevin

### Fix
- fix(views): error when opening schema graph @kevin

## 0.73.0

### Features
- feat(navigation): `Go to Note` can open links to non-note files ([[docs|dendron://dendron.dendron-site/dendron.topic.links#file-links]]) (#1844) @kaan
- feat(refactor): support `Rename Symbol` with Dendron wikilinks ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring#rename-symbol]]) (#1879) @hikchoi
- feat(navigation): implement `Go to Definition` for non-note files ([[docs|dendron://dendron.dendron-site/dendron.topic.navigation#go-to-definition]]) (#1888) @kaan
- feat(pods): early version of Orbit import pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.orbit]]) (#1637) @joshi

### Enhancements
- enhance(navigation): allow `Go to Note` to work inside code blocks (#1878) @kaan
- enhance(markdown): add `depth` metadata to header anchors (#1877) @kevin
- enahnce(workspace): simplify `InitializeWorkspace` command (#1886) @jonathan
- enhance(publish): better layout for Table of Contents / TOC (#1882) @kevin

### Fix
- fix(workspace): tutorial initializer with existing workspace in default paths (#1873) @jonathan
- fix(refactor): revert match text default value to active note name (#1892) @hikchoi
- fix(extension): note traits not working after webpack (#1889) @jonathan
- fix(schema): use patterns when ids are auto generated and there is no manually set title for a schema (#1896)  @nickolay

## 0.72.1

### Features
- feat(commands): find broken links ([[docs|dendron.topic.doctor#findbrokenlinks]]) (#1847) @hikchoi
- feat(notes): Note Trait System Prototype (Phase 1) ([[docs|dendron://dendron.dendron-site/dendron.topic.traits.quickstart]]) (#1658) @jonathan

### Enhancements
- enhance(pods): small tweaks to pod v2 UI (#1857) @jonathan
- enhance(publish): Fallback to default SEO image if no image is set for published pages. (#1854) @tuling

### Fix
- fix(views): double open link from preview (#1868) @nickolay

## 0.72.0

### Enhancements
- enhance: "find all references" for Markdown headers (#1833) @hikchoi
- enhance: add fuzzy threshold configuration (#1811) @nickolay ([[docs|dendron://dendron.dendron-site/dendron.ref.config.commands#fuzzthreshold]])

### Fix
- fix(workspace): decorator lag problems (#1822) @kaan ([[docs|dendron.ref.config.workspace]]) ([diff](https://github.com/dendronhq/dendron-site/pull/311/files))
- fix(pods): minor error in Airtable v2 export pod (#1846) @jonathan
- fix(views): re-introduce preview command enablement (#1806) @hikchoi
- fix(views): update tree view when new note is created
- fix(lookup): corner cases for auto complete @nickolay

## 0.71.4

### Enhancements
- enhance(lookup): enable scoping and full regex support for refactor hierarchy command ([[docs|dendron.topic.refactoring#refactor-hierarchy]]) (#1796) @hikchoi
- enhance(lookup): have auto complete respect value that has been scrolled down to by arrows (#1818) @nickolay
- enhance(views): allow navigation to preview links that do not have vault specified (#1805) @nickolay

### Fix
- fix(publish): UI shifting issues with Next.js layout @kevin
- fix(cli): cli migration now handles JSONC for wsConfig (#1825) @hikchoi
- fix(schema): When applying a schema template, do not override the body but append to the end to it (#1812) [tma66](https://github.com/tma66)

## 0.71.0

### Enhancements
- enhance(publish): support adding sitemaps ([[docs|dendron.topic.publish.cli#options]]) @kevin
- enahnce(publish): upgrade to [Next.js 12](https://nextjs.org/blog/next-12) @kevin
- enhance(lookup): add auto complete to note lookup (#1781) @nickolay

### Fix
- fix(note): correctly handle note titles containing international characters (#1801) @kaan

## 0.70.1

### Features
- feat(workspace): hide default Markdown preview button (#1636) @kaan
  - We merged an upstream change with VS Code to enable toggling of the default preview. This was one of the most confusing UX parts of Dendron.
  - If wanted, the VS Code Markdown preview can still be opened via the command palette (`Ctrl+Shift P`) with: `Markdown: Open Preview` or `Markdown: Open Preview to The Side`
  - NOTE: requires VS Code 1.63

### Enhancements
- enhance(workspace): add Dendron preview button (#1744) @kann
- enhance(workspace): show stubs at the end of a dot-ended lookup (#1780) @nickolay
  - ![preview](https://user-images.githubusercontent.com/4050134/143182938-182ff0cf-0080-49da-8121-21ab9fb7b675.png)
- enhance(cli): cli uses separate port file (#1766) @kevin

### Fix
- fix(views): allow assets to open from preview view (#1771) @nickolay
- fix(publish): issue with cypress dependency @kevin

## 0.70.0

### Enhancements
- enhance(publish): Better formatting of tables on published site (#1737) @kevin

### Fix
- fix(publish): syntax highlighting for code blocks (#1732) @kevin
- fix(publish): make mermaid work consistently on published sites (#1759) @kevin
- fix(publish): enable katex on published site
- fix(cli): workspace info prints message to CLI

## 0.69.2

### Features
- feat(workspace): Initialize Workspace command can create native workspaces ([[docs|dendron.topic.workspace.native]]) (#1701) @kaan

### Enhancements
<!-- Reverted, commenting out
- enhance(workspace): improved task note decorations @kaan
  * Task note decorations are colored with the same color as the link to make them easier to distinguish from regular text. ([[docs|dendron.topic.tasks#task-note-links]])
  * Task notes say `priority:` instead of `prio:` for priorities in task note frontmatter. ([[docs|dendron.topic.tasks#task-note-internals]])
-->
- enhance(markdown): expose `desc` frontmatter property for variable substitution ([[docs|dendron.topic.markdown#frontmatter-variable-substitution]]) ([diff](https://github.com/dendronhq/dendron-site/pull/284/files)) (#1721) @hikchoi
- enhance(publish): better position sidebar, main content and footer (#1696) @felipe
- enhance(commands): copy a tag note link results in hashtags (#1687) @joshi
- enhance(lookup) Add description field to lookup buttons (#1735) @tuling

### Fix
- fix(lookup): have schema exact match suggestion in lookup show up at the top of the list (#1720) @nickolay
- fix(lookup): disappearing vaults in vault selection quickpick (#1717) @hikchoi
- fix(publish): remove duplicate CSS (#1707) [`@l2dy`](https://github.com/l2dy)
- fix(workspace): remove trailing whitespace in note (#1736) [`@l2dy`](https://github.com/l2dy)
- fix(cli): [ajv](https://github.com/ajv-validator/ajv) (a JSON schema validator) no longer prints warning messages to console (#1722) @nickolay

## 0.69.1

### Fix
- fix(pods): invalid configuration error @kevin

## 0.69.0

### Enhancements
- enhance(pods): add `configPath` and `query` parameters to pods ([[docs|dendron.topic.pod.cli]]) @kevin
- enhance(pods): include name of note with error when Airtable pod encounters error @kevin

### Fix
- fix(markdown): footnote definitions including links are rendered incorrectly (#1704) @kaan
- fix(workspace): apply enableUser/HashTags to broken wikilinks code action (#1712) @kaan

## 0.68.2

### Features
- feat(workspace): native workspace enhancements ([[docs|dendron.topic.workspace.native]]) (#1670) @kaan
  - Dendron will now search for `dendron.yml` in native workspaces even if `dendron.yml` is not in the root of the workspace.

### Enhancements
- enhance(lookup): lookups with a dot at the end now look up hierarchies without having exact postfix ([[docs|dendron.topic.lookup.find#dot-at-the-end--descendent-query]]) (#1692) @nickolay
  - Having a dot at the end of a lookup will now look up child and descendant notes (bubbling up the child notes to the top) that match the query, but without requiring the full match of the prefix note.
- enhance(views): support setting `sort_order` in tree view ([[docs|dendron.topic.publish-legacy.configuration#sort_order]]) (#1685) @kevin
- enhance(schema): Add `Go to File` navigation prompt when schema malformation errors appear (#1679) @nickolay

### Fix
- fix(views): `nav_order` property not respected in tree view (#1684) @kevin
- fix(workspace): `Dendron: Vault add` avoids adding duplicate line (#1689) @kaan

## 0.68.1

### Breaking changes

Note graph commands lose their `V2` suffix and are now simply `Dendron: Show Note Graph` and `Dendron: Show Schema Graph`. This only impacts functionality with the command palette.

## 0.68.0

### Features
- feat(schemas): adding new command - create schema from hierarchy ([[docs|dendron.topic.schema.create-from-hierarchy]]) (#1673) @nickolay
- feat(views): better webviews - faster loading and more stable performance @kevin
  - `Dendron: Show Preview` used to add some extra latency when rendering the preview and also made features like copy/paste unstable. This change migrates the old iframe-based preview to be a native webview. It brings the following changes:
    * Faster webview performance
    * Clipboard support (copy and paste works)!
    * Live color theme updates (vs reloading your window for changes to take effect)
    * Bundle native preview with webpack
    * Build native preview on `yarn setup`
    * Cleanup of assets

### Enhancements
* enhance(schemas): adding error messaging and additional validation for when schemas are malformed (#1631) @nickolay
* enhance(schemas): cmd create-schema-from-hierarchy allow schema to end with '*' (#1680) @nickolay

### Fix
- fix(pods): GitHub import pod handle deleted authors (#1621) @kevin
- fix(workspace): warning to remove stub property if the note has content (#1662) @joshi

## 0.67.2

### Breaking changes

An enhancement in this release delivers breaking changes announced last week: [[Changelog|changelog^kSChN1jT6OMc]]

### Features
* feat(publish): add local table of contents, of current note, in right-hand nav ([[docs|dendron.topic.publish.features#table-of-contents]]) (#1428)  @viztor
* feat(publish): merge lookup and search fields ([[docs|dendron.topic.publish.features#lookup-and-search]]) (#1603) @felipe

### Enhancements
* enhance(schema): update schemas on save instead of having to reload workspace. (#1597) @nickolay
* enhance(publish): migrate publish related commands to Next.js @hikchoi
  * _**Note:** This is the breaking change mentioned above._
* enhance(commands): move header supports multi vault (#1646) @hikchoi
* enhance(commands): allow creation of new notes when move header destination doesn't exist yet (#1646) @hikchoi

### Fix
* fix(publish): table of contents layout (#1649) @felipe
* fix(server): improving error response on api server (#1645) @jonathan
* fix(workspace): Change Workspace command recognizes native workspaces (#1621) @kaan

## 0.67.1

> This was a quickfix release fixing the broken `0.66.1` build of the Visual Studio Code extension.

## 0.66.1

> This was an accidental, breaking release. This only impacted the the Visual Studio Code extension. Users need to upgrade to at least `0.67.1`.

## 0.66.0

### Breaking changes

1. Deprecation notice for `Site Preview` and `Site Build`. These currently build using our legacy 11ty publishing method. Starting next week, these will be upgraded to publish using Next.js. In addition, the notes will be renamed: ^kSChN1jT6OMc
    * `Site Preview` will be renamed to `Publish Dev`
    * `Site Build` will be renamed to `Publish Export`
2. We have updated the enablement of our preview features to reduce clutter in the command palette and prevent confusion.
    * `Dendron: Show Preview` is now called `Dendron: Show Preview (legacy)`
    * `Dendron: Show Preview V2` is now called `Dendron: Show Preview`
    * Both preview commands and their keybindings are now disabled if you are in a non-Dendron workspace or if your active open document is not a Markdown file. This means they will not be accessible in the command palette or triggered with a keybinding.

### Enhancements
- enhance(workspace): add seeds directory to gitignore on workspace creation (#1629) @hikchoi
- enhance(workspace): preview command enablement (#1619) @hikchoi
- enhance(workspace): add custom icons to Dendron tree view (#1635)  @kevin
- enhance(workspace): Copy Header Reference code action (#1598) @joshi

### Fix
- fix(publishing): Markdown publish to hide block reference anchors (#1577)  @joshi
- fix(workspace): file watcher updates backlinks (#1618) @kaan
- fix(workspace): hover & `Go to Note` should respect enableUser/HashTags (#1620) @kaan
- fix(pods): resolve same level dir wikilinks in Markdown import (#1615) @joshi
- fix(schemas): replace auto generated ids with readable descriptions (#1632) @nickolay

## 0.65.1

### Features
- feat(workspace): users can convert a local vault to a remote vault, or a remote vault to a local
vault with new convert vault command ([[docs|dendron.topic.vaults#vault-convert]]) (#1542) @kaan
- feat(notes): task notes (create modifier & editor highlighting) ([[docs|dendron.topic.tasks]]) (#1583) @kaan

### Enhancements
- enhance(schema): allow untyped templates in schemas ([[docs|dendron.topic.schema#shortened-template-syntax]]) (#1575) @nickolay

## 0.65.0

## 0.64.2

### Features
- feat(command): move header command ([[docs|dendron.topic.refactoring#move-header]]) (#1349)  @hikchoi 

### Enhancements
- enhance(schemas): expand schema format to allow for inlined children ([[docs|dendron://dendron.dendron-site/dendron.topic.schema#inline-schema-anatomy]]) (#1552) @nickolay
- enhance(pods): enhance gdoc import formatting (#1538) ([[docs|dendron.topic.pod.builtin.google-docs.import#summary,1:#*]]
) @joshi

### Bug Fixes
- fix(workspace): notes getting whitespace changes after workspace sync (#1559) @joshi
- fix(workspace): frontmatter variable substitution not rendering in preview V2 (#1567) @hikchoi
- fix(markdown): email parsed as user tag & option to disable user tags and hashtags (#1562) @kaan
- fix(markdown): footnote links move view in publishing & preview (#1568) @kaan
- fix(publish): remove .next dir if it exists in publish init (#1548) @jonathan
- fix(publish): title parts duplicated in Next.js publishing search (#1573)
- fix(commands): move header command modifying unrelated note content (#1574) @hikchoi

## 0.64.1

### Breaking changes

As part of the [[config consolidation|rfc.23-config-consolidation]], workspace options like `vault` are now under the `workspace` namespace in `dendron.yml`.

Before:
```yaml
vaults:
    - fsPath: vault1
```

After:
```yaml
workspace:
    vaults:
        - fsPath: vault1
```

Initializing your workspace to `0.64.1` will do this upgrade automatically.  If you are using the latest version of the CLI (`0.64.1`) , make sure to initialize your workspace beforehand which will upgrade your config to the latest version.

Migration can also be done via the latest CLI release:

```bash
dendron dev run_migration --migrationVersion 0.64.1
```

### Enhancements
- enhance(cli): support output option when using `dendron note lookup` ([[docs|dendron://dendron.dendron-site/dendron.ref.cli.notes#lookup]]) (#1526) @kevin
- enhance(commands): update default aliases when note is updated (#1557) @kaan
- enhance(cli): add run migration command in cli ([[docs|etc.cli#run_migration]]) (#1560) @hikchoi

### Fix
- fix(workspace): update yml validation to latest config version (#1554) @hikchoi
- fix(publish):make assetPrefix apply to all link elements (#1555) @kevin
- fix(publish): make 11ty publishing compatible with config version 3 (#1556) @kevin

## 0.64.0

## 0.63.2

### Enhancements
- enhance(lookup): lookup wikilinks @nickolay
- fix(lookup): better hierarchy look up when inside parts of the hierarchy are omitted (#1522) @nickolay
- enhance(lookup): allow configuration of workspace to make 'Create New' not bubble up in note lookup. (#1528) @nickolay
- enhance(pods): asignees in GitHub issue publish pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.github-issue.publish#updating-an-issue]])@joshi 

### Bug Fixes
- fix(markdown): better footnote rendering in note references (#1520) @kaan
- fix(markdown): user tags & hashtags inside links should be parsed as regular text #1524 @kaan #pending
- fix(publish): wikilinks inside note references don't have right link @kevin
- fix(workspace): making changes to fontmatter title also update the preview (#1513) @nickolay

## 0.63.1

### Features
- feat(publish): add `dendron publish dev` command  ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.cli#dev]]) @kevin
- feat(publish): add `dendron publish export` command ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.cli#export]]) @kevin

### Enhancements
- enhance(publish): support publishing to GitHub as a export template @kevin
- enhance(publish): support `--yes` flag when exporting to skip prompts @kevin
- enhance(publish): initialize template will also install dependencies @kevin
- enhance(publish): warn when `assetsPrefix` isn't set @kevin

### Fix
- fix(workspace): possible error if open note is changed quickly after edit (#1486) @kaan
- fix(publish): optimize Next.js publishing search (#1519) @kaan

[[pkg.nextjs-template]] 

### Internal
- chore: add test for apostrophe in alias (#1501)  @kaan
- chore: skip failing WS init test on Windows (#1517) @kaan

## 0.63

## 0.62.4

### Features
- feat(workspace): native workspace support @kaan
- feat(workspace): contextual UI @joshi

### Bug Fixes
- fix(preview): some links not resolving on preview @nickolay

### Other
- chore(workspace): config migration(#1497) @hikchoi

## 0.62.3

### Bug Fixes
- fix(schemas): schema templates copy over frontmatter tags  @kaan

## 0.62.2

### Bug Fixes
- fix(views): tree view order (#1459) @kaan

## 0.62.1

### Bug Fixes
- fix(lookup): bad journal note name  #1465  @nickolay

## 0.62

## 0.61.2

### Feature
- feat(pods): Airtable publish pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.publish#summary]]) @kevin

### Enhancements
 - fix(lookup): vault selection use wrong label #1463  @kevin
 - fix(markdown): highlighting for wildcard note refs with header offsets #1460  @kaan
 - enhance(pods): Airtable export pod is now [idempotent](https://en.wikipedia.org/wiki/Idempotence) ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#idempotency]] @kevin 
 - enahnce(pods): Airtable export pod has better support for mapping [[Tags|dendron://dendron.dendron-site/dendron.topic.tags]] and dates ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#object-value]]) @kevin
 - enhance(pods): export pods support `ignore` and `vault` filters ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.export#configuration]]) @kevin

## 0.61.1

### Enhancements
- enhance(commands): OpenLink can open more links and works on partial selection (#1317) `@Stephen#8544`
- enhance(commands): Improve user messaging on node delete by specifying the vault of the deleted node (#1439) @nickolay
- enhance(lookup): Allow creation of duplicate file name if there is a vault without such file name (#1441) @nickolay

### Bug Fixes
- fix(publish): Next.js search not working (#1433) @kaan
- fix(views): preview caching invalidation when notes with `![[ref]]` links change (#1385) @nickolay
- fix(view): enable anchor links to work in preview (#1375) @nickolay

## 0.61.0

## 0.60.3

### Features
- feat(workspace): Add Contextual UI options for Add/Remove Vaults, Rename/Delete/Move Note, and Rename Header @joshi ([[docs|dendron.ref.commands]])
- feat(workspace): add survey for new users(#1409)

### Enhancements
- enhance(markdown): option to add `#` symbols for FM tags (#1421) @kaan ([[docs|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#usehashesforfmtags]])
- enhance(publish): add published, modified, and tags to Next.js SEO (#1412) @nwehner
- enhance(workspace): mini optimization in looking up notes by filename (#1427) @nickolay
- enhance(workspace): Leave trace on source note while using selectionExtract @joshi

### Bug Fixes
- fix(lookup): picked schema matching name was not creating the expected note (#1425) @nickolay
- fix(workspace): support activation for older VS Code version (#1426) @jonathan

## 0.60.2

### Features
- feat(cli): initialize workspace from CLI @kevin ([[docs|dendron://dendron.dendron-site/dendron.ref.cli#init]])
- feat(pods): Notion Export Pod (#1332) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.notion]])
- feat(publish): add popover for long title in menu (#1408) @viztor
- feat(publish): better mobile navigation (#1407) @viztor
- feat(workspace): button for toggle local/global graph (#1386) @viztor

### Enhancements
- enhance(publish): support [g4a tags](https://support.google.com/analytics/answer/10089681?hl=en) @kevin
- enhance(publish): support Twitter card @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#twitter]])
- enhance(publish): add border color to table (#1387) @viztor
- enhance(publish): filter body out of generated notes.json for Next.js (#1380) @viztor
- enhance(pods): resolve relative links on Markdown import @joshi
- enhance(markdown): Don't throw a fatal exception when missing note is parsed as noteRef @kevin
- enhance(workspace): option to disable randomly colored tags in editor (#1372) @kaan ([[docs|dendron.topic.tags#disabling-automatic-colors]])

### Fix
- fix(commands): selection2link doesn't update note with link #1383  @kaan
- fix(commands): fix single letter not showing results @nickolay
- fix(commands): cleanup error popup when schema lookup is closed @nickolay
- fix(publish): mistakes in Next.js start instructions from CLI @viztor
- fix(publish): hashtags not at the start of line don't autocomplete (#1370) @kaan
- fix(publish): links in note reference point to wrong url  @kevin
- fix(publish): footer did not show on first load (#1413) @viztor
- fix(workspace): notes added outside Dendron are missed (#1406) @kaan
- fix(workspace): next gen views in remote workspaces (#1401) @kaan
- fix(workspace): no-op on hover provider if Dendron non active (#1398)
- fix(workspace): fixes in providers when not in Dendron workspace (#1405) @jonathan
- fix(workspace): no completion when Dendron isn't active @jonathan

## 0.60.1

### Bug Fixes
- fix(workspace): prevent malformed keybinding.json (#1403) @hikchoi

## 0.60

## 0.59.4

### Features
- @viztor feat(publish): much faster dev mode (#1359)

### Enhancements
- @sai enhance(publish): Added optional image and imageAlt to SEO open graph options (#1347)
- @viztor enhance(publish): notice for running in dev mode (#1354) 

### Bug Fixes
- @kevin fix(publish): 11ty publishing adds wrong assetPrefix
- @kevin fix(publish): fix `siteUrl` resolution with `assetPrefix`
- @kevin fix(publish): fix `seoProps` not being set on static page
- @kevin fix(publish): do not publish extra page for siteIndex under /notes
- @kevin fix(publish): don't add .html suffix to canonical url 
- @kevin fix(publish): fix various compiler issue for nextjs-template
- @kevin fix(publish): set correct canonical url with asset prefix

### Internal
- @kevin chore(publish): add bundle analyzer

## 0.59.3

### Features
- @kaan feat(publish): Next.js publishing supports fulltext search (#1334)

### Enhancements
- @joshi enhance(publish): Add Google Analytics to Published Site (#1300)
- @joshi enhance(pods): various GitHub pod improvements ([[docs|dendron.topic.pod.builtin.github-issue]]) (#1345)
  - imported issues now have `author` field for user who submitted issue
  - you can now update the `milestone` using pods
  - you can now create a new GitHub discussion using pods
  - renamed to GitHub issue pod #breaking

### Bug Fixes
- @kevin fix(commands): rename note leaves incorrect metadata if parent is a stub (#1348)
- @kaan fix(workspace): disable certain decorations for long notes to avoid performance hit (#1337)

### Internal
- @kevin chore(workspace): consolidate http status code in common-all (#1344)

## 0.59.2

### Bug Fixes
- fix(workspace): issue with building new vsix with updated 11ty version

## 0.59.1

### Bug Fixes
- fix(workspace): Dendron now sets minimum VS Code version to 1.58
- fix(publish): update 11ty version
