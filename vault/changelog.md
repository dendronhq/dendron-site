---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1670254035385
created: 1601508213606
nav_order: 2
---
## 0.119.0

### Fix

- fix(lookup): autocomplete properly fills out value if user manually selected an item (#3787) @jonathan


## 0.118.0

### Fix

- fix(workspace): decoration does not display correct custom color for hashtags (#3761) @joshi
- fix(workspace): correctly handle deleted notes in editor when checking for duplicate entries (#3719) [Matthew Falkowski](https://github.com/wookiefriseur)
- fix(sync): needless modified notes after workspace sync (#3768) @joshi
- fix(workspace): correctly populate backlink when creating new note using go to note (#3769) @hikchoi
- fix(structure): correctly handle reference updates after move selection to (#3767) @hikchoi
- fix(views): calendar view broken when toggling theme (#3765) @sam
- fix(publish): broken breadcrumbs for sidebar excluded notes (#3742) @sam
- fix(workspace): correctly read and apply local override config in engine v3 (#3781) @hikchoi
- fix(workspace): rename note breaks noteref for user hierarchy (#3782) @joshi


## 0.117.0

### Enhancements

- enhance(workspace): support adding existing vault to the workspace (#3655) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands]])
- enhance(views): remove stub icon from tree view (#3697) @joshi

### Fix

- fix(workspace): convert local vault to remote vault functions correctly (#3685) @joshi
- fix(publish): runtime error on undefined dendron config (#3688) @sam
- fix(publish): breadcrumbs will not show full hierarchy in some circumstances (#3689) @sam
- fix(publish): client failure when accessing page with iframe (#3707) @sam
- fix(workspace): duplicate vault entries when using go to note command (#3711) @joshi
- fix(publish): correct hashtag parsing (#3708) @sam
- fix(workspace): duplicate note entries in lookup bar (#3725) @joshi


## 0.116.0

### Features

- feat(workspace): copy as command (#3544) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands]])

### Enhancements

- enhance(sync): selection export scope for pods v2 (#3619) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands]])

### Fix

- fix(workspace): go to definition for wikilink with header (#3632) @joshi
- fix(lookup): cancel note creation during "Create Note with Template" if template was not selected (#3645) @hikchoi
- fix(views): task notes inside of note references should render correctly (#3640) @kevin
- fix(workspace): custom color decoration for hashtags (#3637) @joshi
- fix(commands): lookup sometimes omits last keystrokes in new note when under load (#3671) @kevin
- fix(publish): use fuzzThreshold config option for search (#3684) @sam
- fix(publish): bad breadcumbs display (#3689) @sam
- fix(publish): runtime error on undefined dendron config (#3688) @sam


## 0.115.0

### Features

- feat(lookup): Add Create New with Template label to note lookup (#3563) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.lookup.create]])

### Enhancements

- enhance(publish): make search mode as default for search bar in published site (#3575) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.searchMode]])
- enhance(lookup): tab autocomplete in all lookup controls (#3559) @jonathan
- enhance(structure): Add day of week string template variables (#3595) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-variables]])

### Fix

- fix(publish): render favicon when assetsPrefix is set (#3571) @joshi
- fix (workspace): correctly update dendron.yml when adding / deleting vaults with dendronrc.yml (#3588) @hikchoi
- fix(workspace): autocomplete past first level of hierarchy for mentions and tags (#3610) @joshi
- fix(views): remove schema icon from tree view and published sidebar (#3620) @joshi
- fix(publish): prevent "Table of content" overflowing container (#3624)  @sam
- fix(structure): regression in apply template command (#3623) @kevin

## 0.114.0

### Features

- feat(publish): add configuration option for sidebar (#3448) @sam ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.sidebar]])

### Enhancements

- enhance(publish): upgrade nextjs to [12.3.0](https://nextjs.org/blog/next-12-3) with 7x faster minification when building (#3533) @kevin

### Fix

- fix(publish): click into "empty area" on sidebar submenu item (#3523) @sam
- fix(views): make preview theme background color render correctly (#3552) @sam
- fix(workspace): Disallow note creation through go to note if filename is invalid (#3551) @hikchoi
- fix(publish): display headings pleasantly when containing non-text content nodes (#3525) @sam
- fix(workspace): Update backlinks after engine updates (#3535) @tuling
- fix(workspace): engine init with note candidates enabled (#3585) @jonathan

## 0.113.0

### Features

- feat(views): create note button in tree view (#3524) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.tree-view#create-a-new-note]])

### Enhancements

- enhance(workspace): Change default keybinding for Create Scratch Note (#3502) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.special-notes.commands.create-scratch-note]])

### Fix

- fix(workspace): initial value incorrect in lookup for webext(windows) (#3512) @joshi
- fix(workspace): visibility of Toggle Preview in codespace (#3526) @joshi
- fix(workspace): wikilinks appear broken + pod fixes (#3532) @jonathan
- fix(sync): nextjs export issue (#3539) @jonathan
- fix(markdown): same page header links (#3543) @jonathan


## 0.112.0


### Features

- feat(workspace): support "Toggle Preview" for Dendron Codespaces (#3462) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.vscode.web#preview]])
- feat(structure): Add `Move Selection To` command (#3440) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.move-selection-to]])
- feat(workspace): Add `Copy Codespace URL` command (#3480) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#copy-codespace-url]])

### Enhancements

- enhance(workspace): speed up md export (#3493) @kevin

### Fix

- fix(publish): giscuss integration (#3474) @kevin
- fix(publish): inconsistent layout on mobile (#3346) @sam
- fix(workspace): migrate self contained vaults command does not migrate the vault correctly (#3483) @joshi
- fix(publish): correctly handle asset prefix in markdown link (#3497) @hikchoi
- fix(workspace): bad error message when importing notes without a configuration (#3494) @kevin
- fix(workspace): tree view empty when note title is number (#3495) @kevin
- fix(views): mermaid diagrams not appearing (#3503) @jonathan
- fix(schema): schemas being overwritten on save (#3504) @kevin


## 0.111.0


### Features

- feat(publishing): enable giscus widgets in published notes (#3469) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.giscus]])

### Enhancements

- enhance(view): context menu for tree view (#3442) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.tree-view#context-menu]])
- enhance(plugin): reduce bundle size 5x, should result in faster plugin upgrades @kevin

### Fix

- fix(workspace): diagnostics command doesn't show full output (#3424) @hayata
- fix(sync): nextjs export pod always fetches latest dendron config (#3455) @joshi
- fix(workspace): noisy warnings in engine startup (#3452) @kevin

## 0.110.0


### Features

- feat(workspace): copy note url command for codespaces (#3411) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.vscode.web#copy-note-url]])

### Enhancements

- enhance(cli): dendron note create command for CLI (#3392) @tuling ([[docs|dendron://dendron.dendron-site/dendron.topic.notes.cli.write]])
- enhance(lookup): fill in current hierarchy for Move Header (#3430) [Sean Li](https://github.com/saifahn)

### Fix

- fix(lookup): allow lookup to open notes with invalid file names (#3421) @hikchoi
- fix(workspace): case insensitive tree view sorting (#3420) @jonathan
- fix(workspace): updated visibility of copy note url command in codespaces (#3447) @joshi
- fix(views): tree view init problem on web (#3459) @jonathan

## 0.109.0


### Features

- feat(workspace): tree view in web ext (#3386) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.vscode.web]])
- feat(views): UI to configure `dendron.yml` (#3211) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#configure-ui]])
- feat(structure): merge note command (#3349) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.merge-note]])
- feat(workspace): Create Note Command (#3408) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#lookup-note--create-note]])

### Enhancements

- enhance(views): integrated calendar with vscode theme (#3340) @sam
- enhance(edit): option to not create an alias when copying a wiki link (#3393) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.links.commands.copy-note-link.config.alias-mode]])

### Fix

- fix(structure): correctly match namespace schema nodes, and correctly apply schema to new note when note existed as stub (#3388) @hikchoi
- fix(workspace): duplicate Dendron Delete command in contextual menu (#3406) @joshi
- fix(views): show whitespace for links in headers (#3403) @sam
- fix(workspace): proper visibility on views and commands for web ext (#3423) @jonathan

## 0.108.0


### Deprecation Notices

- [[enableSmartRefs|dendron://dendron.dendron-site/dendron.topic.note-reference.config.enable-smart-refs]] will be removed in future releases of dendron (it will always be enabled by default). To preserve the current behavior when upgrading, see the [[upgrade guide|dendron://dendron.dendron-site/dendron.topic.note-reference.upgrade]]

### Fix
- fix(workspace): always treat `begin|end` block anchors as valid (#3339) @hikchoi
- fix(workspace): remove bad dependency which was causing error on parsing notes @kevin
- fix(navigate): do not run goto sibling if not in a dendron note (#3363) @hayata
- fix(publish): deprecate Dendron: Publish Dev command (#3368) @joshi
- fix(workspace): correctly focus tree view on tutorial activation (#3380) @hikchoi
- fix(views): removes semicolon in preview (#3383) @sam


## 0.107.0

### Deprecation Notices

- deprecate(structure): `enableHandlerbarTemplates` has been removed as a configuration option (because it is now always on). No extra action is needed but you will be prompted to remove the deprecated configuration on upgrade.
### Features

- feat(view): add "Toggle PreviewLock" command (#3293) @sam ([[docs|dendron.topic.preview.commands.toggle-preview-lock]])

### Enhancements

- enhance(structure): support xvault template in note traits (#3329) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.traits.api#return]])
- enhance(publish): speed up published site (#3336) @hunter
- enhance(views): toggle preview lock from inside preview (#3327) @sam ([[docs|dendron.topic.preview.commands.toggle-preview-lock]])
- enhance(workspace): only show the feature showcase once @kevin
- enhance(lookup): add space between note title and vault name (#3347)[Sean Li](https://github.com/saifahn)

### Fix

- fix(views): nested bullets formatted correctly in preview (#3326) [cquick01](https://github.com/cquick01)
- fix(lookup): validate file name on note lookup (#3312) @hikchoi ([[docs|dendron.topic.lookup.ref.restrictions]])
- fix(workspace): remote vault not recognized by dendron for windows (#3316) @joshi
- fix(views): resolve issues with preview lock button (#3353) @sam


## 0.106.0

### Breaking

- the `Delete Node` command is now replaced with the `Delete` command (if you haven't set any custom keyboard shortcuts for `Delete Node`, no change is necessary)
- the `Show Preview` command is now replaced with the `Toggle Preview` command (if you haven't set any custom keyboard shortcuts for `Show Preview`, no change is necessary)

### Enhancements

- enhance(edit): remove `Delete Node` command (#3285) @kevin
- enhance(retrieve): remove `Show Preview` command (#3276) @kevin
- enhance(workspace): `Fix It` button in warning toaster for duplicate note id (#3237) @joshi

### Fix

- fix(publish): sidebar pop on initial load (#3265) @hunter
- fix(publish): renders consistent layout on mobile and non-mobile (#3272) @sam
- fix(workspace): List `dendron.dendron-markdown-preview-enhanced` as unwanted (#3281) @derek
- fix(views): toggle preview doesnt toggle preview off when focus is on the preview itself (#3317) @joshi
- fix(retrieve): remove references of show preview (#3315) @joshi
- fix(views): remove forced tree view focus on workspace activation (#3313) @hikchoi
- fix(retrieve): windows keybindings for toggle preview (#3323) @kevin
## 0.105.0

### Enhancements

- enhance(views): option to filter hierarchical edges from graph panel (#3243) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.graph-panel#toggle-edges]])
- enhance(publish): use note's `desc`field for SEO description (#3261) @sam ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.seo.description#^ygk9kha1hgzy]])
- enhance(retrieve): support end block anchor (#3248) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference#end-positional-reference]])
- enhance(preview): open note in different editor group then preview (#3278) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.preview#details]])

### Fix

- fix(workspace): information modal to uninstall 'dendron markdown links' extension (#3238) @joshi
- fix(publish): hide sidebar when clicking a non-submenu note on mobile (#3253) @hunter
- fix(publish): current menu item on the sidebar wont collapse for a published site (#3244) @joshi
- fix(views): properly focus tree view to active note when it is first shown (#3251) @hikchoi
- fix(workspace): fix typos in getting started tutorial (#3279) @kevin

## 0.104.0

### Features
- feat(edit): support note references on beginning of a doc (#3186) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference#positional-reference]])
- feat(retrieve): add toggle preview command (#3164) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.preview.commands.toggle-preview]])
- feat(navigation): navigate through journal notes in chronological order (#3184) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.navigation.commands.go-next-sibling#^x8aubxke0i61]])

### Enhancements
- enhance(workspace): show names of duplicate vaults in error message (#3199) @hayata
- enhance(sync): add uri field to gdoc pod (#3210) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.google-docs.export#side-effects]])
- enhance(views): filter linked edges(backlinks and outward links) from graph panel (#3207) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.graph-panel]])

### Fix
- fix(edit): template gets applied twice if user undoes initial template (#3186) @kevin
- fix(views): graph panel depth increase / decrease button not working (#3252) @hikchoi

## 0.103.0

### Features
- feat(workspace): smart note refs (#3174) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference.config.enable-smart-refs]])

### Enhancements
- enhance(workspace): Show notice for manual migration if upgrading from from legacy versions (#3161) @hikchoi
- enhance(navigate): `Go To` command also open external links (#3175) @hayata ([[docs|dendron://dendron.dendron-site/dendron.ref.commands.goto]])
- enhance(workspace): remove getting started from initial tutorial (#3205) @kevin
- enhance(edit): delete command also closes current window (#3215) @hayata

### Fix
- fix(retrieve): bad parsing of xvault wikilink with space (#3180) @kevin

## 0.102.0

### Features
- feat(cli): add a cli command that generates a packed-circles visualization of workspace (#3057) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.packed-circles]])

### Enhancements
- enhance(markdown): add new template variables (#3159) @hayata [[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-variables]]
- enhance(publish): add "link to anchor" icon by headings and block anchors (#3132) @kaan
- enhance(publish): faster rendering of sidebar in published site (#3121) @joshi

### Fix
- fix(workspace): sync fails in shared workspaces if users update workspace config first before syncing migrated vaults (#3141) @kaan
- fix(structure): quickpick stuck issue for refactor hierarchy cmd (#3152) @jonathan
- fix(workspace): removing vault with a name different than their `fsPath` doesn't remove them from `duplicateNoteBehavior` (#3151) @kaan
- fix(workspace): duplicate note id detected even after a file is removed (#3155) @hikchoi
- fix(views): backlink tree item labels are trimmed excessively (#3169) @hikchoi
- fix(publish): regression where publishing fails if note doesn't exist (#3178)  @kevin
- fix(workspace): fix init in workspace without workspace folders (#3181) @kevin

## 0.101.0

### Features
- feat(views): view more note links in local graph panel with depth customization (#3072) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#other-filters]])

### Enhancements
- enhance(workspace): `Vault Add` command warns for unsupported transitive dependencies (#3087) @kaan [docs](https://wiki.dendron.so/notes/q9yo0y7czv8mxlkbnw1ugj1/)
- enhance(workspace): vaults always use UNIX style separators in config files (#3096) @kaan
- enhance(workspace): validate dendronrc.yml and emit error if invalid (#3106) @kevin
- enhance(edit): add match helper for hb templates (#3094) @kevin  ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers#match]])
- enhance(workspace): improve phrasing of sync message (#3115) @avhb
- enhance(workspace): support single-vault workspace vaults for self contained vault migration (#3118) @kaan
- enhance(edit): reduce lag on autocomplete by adding a debounce (#3116) @hikchoi
- enhance(structure): improved note traits (#3098) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.traits]])
- enhance(sync): adding import hint to tutorial (#3135) @jonathan

### Fixes
- fix(workspace): try to patch `EPERM` issues for windows (#3082) @kaan
- fix(workspace): Adding an existing remote vault avoids creating workspace files (#3096) @kaan
- fix(publish): issue publishing note with ref without a code-worksapce file #3114  @kevin
- fix(cli): dendron publish --help to display full list of arguments (#3127) @joshi
- fix(workspace): error when native workspaces are initializing (#3123) @kaan
- fix(publish): compile error with no banner present(#3133) @kevin
- fix(structure): hot reload in note traits + no template by default #3154 @jonathan

## 0.100.0

### Features
- feat(views): recent workspaces panel (#3052) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.recent-workspaces]])

### Enhancements
- enhance(cli): updated dendron lookup command #3043 @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.notes.cli.lookup-legacy]])
- enhance(views): add tooltip on hover for graph nodes #3060 @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#features]])
- enhance(edit): this sets handlebars as the default template format #3070 @kevin
- enhance(edit): configute templateHierarchy when applying template #3069 @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.config.templateHierarchy]])
- enhance(retrieve): faster link completions #3044  @kevin #star
- enhance(edit): remove deprecated `Insert Note` command #3083 @kevin
- enhance(workspace): prompt to update seed vault configuration during sync if the seed configuration changed (#3080) @kaan
- enhance(workspace): v100 landing page (#3103) @jonathan

### Fixes
- fix(workspace): migrate to self contained vault causes `EBUSY` errors on Windows #3067 @kaan
- fix(refactor): updated refactor hierarchy message to include no. of files changed #3078 @joshi
- fix(views): issue with help and feedback panel launching a link once even if was clicked multiple times (#3089) @jonathan
- fix(edit): autocomplete issues with tags and mentions (#3107) @kevin

## 0.99.0

### Features
- feat(structure): add set task status command (#3033) @kaan ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#set-task-status]])
- feat(structure): add complete task command (#3033) @kaan ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#complete-task]])
- feat(sync): obsidian import flow (#3014) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#import-obsidian-vault]])

### Enhancements
- enhance(publish): make the private link colors customizable (#3035) @kaan ([[docs|dendron://dendron.dendron-site/dendron.topic.theme.publish.cook#change-the-color-of-a-private-link]])
- enhance(views): configure creation of notes on click of graph node with `createStubs` #3032 @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#create-stub]])
- enhance(workspace): detect duplicate note id on lifecycle events (#2991) @hikchoi

### Fixes
- fix(workspace): fix duplicated panel titles (#3016) @jonathan
- fix(edit): email addresses and hash symbols inside words are parsed as tags (#3064) @kaan
- fix(views): gracefully handle tree view sort error to avoid crashing the tree view (#3053) @hikchoi

## 0.98.0

### Features
- feat(views): Preview uses your VSCode theme colors, and supports custom themes ([[docs|dendron://dendron.dendron-site/dendron.topic.theme]]) (#2984) @kaan 
- feat(navigate): Backlink Panel with Hover ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.backlinks]]) (#2904) @jonathan
- feat(edit): template helpers ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers]]) (#3029) @kevin #stars

### Enhancements
- enhance(view): decrease min zoomed font-size for node labels in graph panel (#2996) @joshi
- enhance(workspace): "migrate to self contained vault" updates `logoPath` and moves gitignore file (#2998) @kaan
- enhance(extend): add axios to hook function ([[docs|dendron://dendron.dendron-site/dendron.topic.hooks.quickstart#setup]]) (#3001) @Maarrk#9537

### Fix
- fix(publish): export gets stuck if `logoPath` is set but the logo doesn't exist (#2959) @kaan
- fix(views): added default initial theme for webviews (#3013) @joshi
- fix(views): bullet points missing in new theme-matching style (#3023) @kaan
- fix(views): backlinks panel tweaks (#3031) @jonathan
- fix(views): images with encoded uri are not rendered in the preview (#3006) [tenheadedlion](https://github.com/tenheadedlion)

## 0.97.0

### Features
- feat(markdown): handlebar based templates ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.handlebars]]) (#2954)  @kevin 
- feat(edit): add command to apply a template ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.commands.apply-template]]) (#2982) @kevin 
- feat(views): display task note status when linking to task notes in publishing and in preview (#2931) @kaan
- feat(workspace): Add a command to migrate regular vaults into self contained vaults ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#migrate-to-self-contained-vault]]) (#2915) @kaan
- feat(publish): dark theme support ([[docs|dendron://dendron.dendron-site/dendron.topic.theme.publish.quickstart#using-the-built-in-dark-theme]]) (#2941) @kaan 
- feat(publish): ability to exclude children in dendron side nav ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.nav_exclude_children]]) (#2962) @kevin

### Enhancements
- enhance(edit): additional built-in variables for templates ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-variables#handlebar-only]]) (#2954) @kevin
- enhance(views): upgrade mermaid to v9.1.1 (#2951) @kaan
- enhance(navigate): make wikilinks clickable in hover (#2949) @jonathan
- enhance(workspace): better feedback to users for invalid dendron.yml (#2940) @hikchoi

### Fixes
- fix(publish): publishing to respect enableHierarchyDisplay (#2946) @joshi
- fix(publish): assetsPrefix breaks images (#2963) @kaan
- fix(publish): "edit this page on ..." link uses the wrong path for self contained vaults (#2966) @kaan
- fix(workspace): Help and Feedback Panel not empty outside of dendron ws (#2974) @jonathan


## 0.96.0

### Features
- feat(workspace): local graph view in the Dendron Side Panel (#2901) @joshi

### Enhancements
- enhance(workspace): make self contained vaults default for all new workspaces (#2935) @kaan

### Fixes
- fix(workspace): block anchor after table crashes preview (#2936) @kaan
- fix(workspace): doctor removeStubs resulting in 'no data' prompt (#2944) @joshi

## 0.95.0
### Features
- feat(chore): preview support for local configuration overrides ([[docs|dendron://dendron.dendron-site/dendron.topic.local-config-override]]) (#2794) @kevin
- feat(views): allow customization of tree view display and sorting behavior (#2858) @hikchoi
- feat(publish): custom theme support for publishing  ([[docs|dendron://dendron.dendron-site/dendron.topic.theme.publish]]) (#2887) @kaan 

### Enhancements
- enhance(workspace): speed up workspace initialization (up to 10x speed up of workspace initialization) (#2903) @tuling
- enhance(views): set `full graph` as default(#2890) @joshi
- enhance(views): display workspace information in full graph view (#2886) @joshi
- enhance(workspace): new user tutorials (#2889) @hikchoi

### Fixes
- fix(publish): published images missing leading forward slashes (#2899) @kaan


## 0.94.0
### Features
- feat(navigation): add goto command: ([[docs|dendron.ref.commands.goto]])
- feat: Add doctor command to remove deprecated config and prompt on upgrade (#2841) @hikchoi

### Enhancements
- enhance(view): graph themes (#2806) ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#graph-theme]] )@joshi
<!-- this is a common issue when people c/p notes. will now be auto-detected -->
- enhance(workspace): detect and warn for duplicate note IDs (#2879) @kaan
- enhance(view): help and feedback panel (#2877) @jonathan 
- enhance(workspace): use better defaults for `Create Task Note` ([[docs|dendron://dendron.dendron-site/dendron.topic.tasks#configuration]]) (#2855) @kaan
- enhance(commands): prefix paste-image command with "Dendron" for uniformity (dendronhq/dendron-paste-image#4)  @kaan
- enhance(cli): cli will report invalid commands (#2876) `@Jack of some quantity of trades#3247`
- enhance(view): make dendron side bar visible when dendron not active (#2881) @jonathan

### Fix
- fix: bad wikilink is created with selection2link if selection is multi-line (#2856) @kaan
- fix: insert note index `#undefined` in case missing tags (#2789) `huland#6948`
- fix: highlighting misidentified capitalized header anchors on links as missing (#2872) @kaan
- fix: CLI writes "cli" as the version into the meta file which breaks initialization (#2871) @kaan
- fix: self contained vaults get cloned into the wrong directory (#2873) @kaan


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
- enhance(views): adding optional _last update_ sort ordering for backlinks view ([[docs|dendron://dendron.dendron-site/dendron.topic.workbench#commands]]) (#1924) @nickolay
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
vault with new convert vault command ([[docs|dendron.topic.vaults#convert-vault]]) (#1542) @kaan
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



