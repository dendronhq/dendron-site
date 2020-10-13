---
id: 65b03213-d3d1-46c0-9881-a6280ed9bdeb
title: New
desc: ''
updated: 1602096212957
created: 1602096212957
stub: false
published: false
nav_exclude: true
---

## Features

### (Local) Server Side Indexing

Dendron can now index and manage your notes as a standalone **local** server independent from VSCode. 

This is part of the [[server migration milestone|dendron.roadmap.project.n.2020.server-migration]] which we took on for October. 

Dendron's server side indexing is a **complete rewrite** of the [[Dendron engine|dendron.dev.design.engine]] which powers Dendron's lookup capabilities. The new engine is **leaner, meaner, and significantly faster** (especially when initializing your workspace with a large amount of notes).

Server site indexing is a pre-cursor enables our upcoming roadmap items which include:

- [[multi-vault support|dendron.roadmap.project.n.2020.multi-vault]]
- rich graphical interfaces for schemas, pods, and publishing
- unified index for all dendron extensions (currently each extension makes a separate index of your notes and requires manual reloading)
- realtime updates for graph extensions
- custom dendron extensions written in any language 

Server side indexing is currently off by default since it's still a beta feature. You can turn it on by adding the following in your settings.

```json
"dendron.useExperimentalLSPSupport": true
```

Note that the current commands are currently un-available when you switch on on server side indexing:
- RenameNote
- Refactor Hierarchy
- Archive Hierarchy
- Realtime Schema Updates

You can switch back to regular indexing at anytime by changing the above setting to `false` and running `> Developer: Reload Window`. 

## Enhancements
- **Additional Arguments for lookup**: You can now use `noConfirm` and `value` arguments when creating custom lookup shortcuts ([docs](https://dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#passing-arguments-to-lookup))
- **Update Default Snippets**: default todo snippet now leaves a space after insertion
- **Set custom log levels**: you can now define the verbosity of dendron logs using the `dendron.logLevel` configuration
- **Upgraded Schema defaults** (server only): new schemas will be created using version one defaults
- **Cleaner note frontmatter** (server only): new notes won't have the optional attributes in frontmatter

## Bug Fixes
- **Missing logs**: issue where `Open Logs` would not show logs
- **Tree View empty**: tree view would not populate in some cases
- **Upgrade Snippets with comments**: Upgrading settings would fail if they had comments inside the JSON

## Breaking Changes
- **Remove Scratch Note Command**: replaced by Lookup Scratch Note shortcut
- **Remove Journal Note Command**: replaced by Lookup Journal Note shortcut

## Progress

### Server Migration

These past two weeks have been spent on server migration work. We are almost at the end and I'm aiming to have full coverage of all existing functionality by early next week.

((ref: [[dendron.roadmap.project.n.2020.server-migration]]#tasks,1:#*))

## Other 
- Add overview of [[configuration|dendron.topic.config]]
- Add proposal for [[custom color tabs|dendron.roadmap.project.n.backlog.color-tabs]]

# --- Release Notes

## Discord

# Checklist
- [ ] publish to local
- [ ] write docs
- [ ] make screencast
- [ ] update changelog
- [ ] generate config
- [ ] generate cheatsheet and commands
- [ ] publish docs
 .   - [ ] check links
- [ ] publish changelog
- [ ] publish plugin
- [ ] twitter announce
- [ ] discord announce
- [ ] follow up with peopel about changes

# --- updates

@everyone
highlights of 2020.10.12 updates (0.12.7) 🌱  

(local) server side indexing is (finally) here! you can now enable dendron to index and process your notes independently from vscode. the dendron engine has been completely re-written to be leaner, meaner and faster in server mode. server mode is currently not enabled by default since we're not yet at 100% feature parity but you can enable it by updating the following setting

```json
"dendron.useExperimentalLSPSupport": true
```

we also made a bunch of enhancements and bug fixes across various parts of dendron. 
you can find the full list of changes in our changelog.

https://dendron.so/notes/9bc92432-a24c-492b-b831-4d5378c1692b.html

twitter



## --- documentation

## --- community highlights


# --- Template
## Features

## Bug Fixes

## Progress

## Other 