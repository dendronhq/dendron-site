---
id: 725d99be-fadd-4464-88c3-0a5fcc7292c7
title: Server Migration
desc: ''
updated: 1603982170477
created: 1599501616541
stub: false
start: 2020.09.23
end: 2020.10.30
status: In Progress
---
# Server Migration

## Goals

Migrate the Dendron to (local) client <-> server architecture

## Details

Dendron's current architecture can be found [here](https://dendron.so/notes/c160ddce-edec-4f6e-841b-418d6030fa37.html). Currently, all of Dendron's indexing capabilities is provided by the `dendron engine` as a library which is included in every extension that uses it. This has many drawbacks - every extension re-indexes all notes and also blocks the client (vscode) during this process.

The Dendron server migration is to move Dendron to a client server architecture. Note that the migration will involve standing up **two servers**: one for language server functionality (the lsp server), and another for dendron's [lookup](https://dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html) capabilities (the express server). 

The rationale for having two servers is discussed [here](https://discordapp.com/channels/717965437182410783/748936364283920495/759153642644701285).

They are also elaborated upon [here](https://discordapp.com/channels/717965437182410783/735365126227493004/765435624878505985)

Instead of calling the engine directly, the Dendron extension, as well as related plugins, will communicate to Dendron's server using IPC and on local ports. 

## Tasks
- [x] add LSP server to Dendron (0.12)
- [x] add api server to Dendron (0.12)
- [x] hook server into dendron startup (0.12.4)
- [x] migrate lookup to server model 
    - [x] support query notes (0.12.6)
    - [x] support query notes with schema (0.12.6)
    - [x] support write notes (0.12.6)
    - [x] support write note with schema (0.12.6)
    - [x] support delete note (0.12.7)
    - [x] support query schema (0.12.7)
    - [x] support write schema (0.12.7)
    - [x] support delete schema  (0.12.7)
- [x] optimize server lookup performance (0.12.7)
- [x] enable file watcher (0.12.7)
- [x] dendron tree view (0.12.7)
- [x] migrate commands
    - [x] scratch note (0.12.7)
    - [x] journal note (0.12.7)
    - [x] copy note command (0.12.7)
    - [x] copy note url (0.12.7)
    - [x] lookup scratch note (0.12.7)
    - [x] lookup journal note (0.12.7)
    - [x] global journal note (0.12.7)
    - [x] build pod (0.12.8)
    - [x] rename note
    - [x] archive hierarchy
    - [x] refactor hiearchy
    - [x] doctor
- [x] integration tests for all server functionality

## Next
- migrate bundled extensions to server model
- use custom goto definition provider 
- use custom backlink definition provider
- use schema based completions

## Configuration

To enable server mode, update the following setting in your workspace settings `"dendron.useExperimentalLSPSupport": true`. Run `> Developer: Reload Window` afterwards for the changes to take effect.

## Links
- [project docs](https://dendron.so/notes/725d99be-fadd-4464-88c3-0a5fcc7292c7.html)
- [issues](https://github.com/dendronhq/dendron/labels/pro.server-migration)

## Related
- [[dendron.topic.pod]]
- [[pod proposal issue |dendron.roadmap.project.scratch.2020.09.07-164009]]	



<!-- 
### Breakdown

- create `@dendronhq/lsp-server` package
- create interface btw lsp -> engine
- implement a basic **new** feature using lsp (eg. hover preview of link) and delegate to lsp
- route basic **old** feature to lsp (eg. go to definition from markdown-notes)
- everything else

### Design
- components
    - [[p.dendron-extension]]: vscode extension
    - [[p.engine-v0]]: current dendron engine
    - [[p.engine-server]]: dendron lsp engine
    - [[p.engine-client]]: dendron lsp client
- concepts
    - all links: note refs, wiki links, md links
- architecture today:
    - [[p.dendron-extension]] -> [[p.engine-v0]]
- architecture after migration
    - user commands: [[p.dendron-extension]] -> [[p.engine-client]] -> [[p.engine-server]]
    - lsp specific actions: vscode -> [[p.engine-server]]

### Challenges

#### Non-lsp functionality
LSP provides language specific features but doesn't provide us with the equivalent of [[dendron.topic.lookup]]. If we want to consolidate the indexing inside [[p.engine-server]], we need a way to query the index via [[p.engine-client]]. Below are a few proposals to do this:

1. Write all metadata to JSON file. Use filewatcher for engine-client to watch the JSON file
2. Add a custom listener to [[p.engine-server]] that listens for special [[p.engine-client]] requests on a standalone port

### Flows

#### initialization
- user activates dendron workspace
- activates [[p.engine-server]] and [[p.engine-client]]
- [[p.engine-server]] indexes all files in workspace and sets file watcher to watch for changes
- [[p.engine-client]] gets notified when indexing is complete

#### sync
- [[p.engine-server]] will track the following changes
    - frontmatter updates
    - note updates
    - schema updates
    - dendron specifc config

#### commands

This describes what will be the main provider of the functionality that is currently done via the engine.

- Create Daily Journal Note
    - provider: [[p.engine-client]]
- Create Journal Note
    - provider: [[p.engine-client]]
- Create Scratch Note
    - provider: [[p.engine-client]]
- Copy Note Link
    - provider: [[p.engine-client]]
- Copy Note Ref
    - provider: [[p.engine-client]]
- Delete Node
    - provider: [[p.engine-client]]
- New Note From Selection
    - provider: [[p.engine-client]]
- Rename Note
    - provider: [[lsp.rename-and-prepare-rename]]
- Show Preview
    - provider: [[p.dendron-mpe]]
- Lookup
    - provider: [[p.engine-client]]
- Lookup Schema
    - provider: [[p.engine-client]]
- Open Link
    - provider: [[p.engine-client]]
- Reload Index
    - provider: [[p.engine-server]]
- Archive Hierarchy
    - provider: [[lsp.rename-and-prepare-rename]]
- Refactor Hierarchy
    - provider: [[lsp.rename-and-prepare-rename]]
- Go Up
    - provider: [[p.engine-client]]
- Go Next Sibling
    - provider: [[p.engine-client]]
- Go Previous Sibling
    - provider: [[p.engine-client]]
- Go Down
    - provider: [[p.engine-client]]
- Initialize Workspace
    - provider: [[p.dendron-extension]]
- Change Workspace
    - provider: [[p.dendron-extension]]
- Show Help
    - provider: [[p.dendron-extension]]
- Build Pod
    - provider: [[p.engine-client]]
- Configure Pod
    - provider: [[p.engine-client]]
- Import Pod
    - provider: [[p.engine-client]]
- Export Pod
    - provider: [[p.engine-client]]
- Doctor
    - provider: [[p.engine-client]]
- Dendron:Dev: Open Logs
    - provider: [[p.engine-client]]

### Additional Functionality Via LSP
- [[lsp.publish-diagnostics]]
- [[lsp.completion-and-completion-resolve]]
    - all links
    - frontmatter fields 
    - document headers
- [[lsp.hover]]
    - show preview of all links (exclude note refs)
- [[lsp.signature-help]]
- [[lsp.definition]]
    - all links
- [[lsp.type-definition]]
    - goto definition for all links
    - go to definition for schema elements
- [[lsp.implementation]]
    - inside schema, trigger this to look at all notes that implement said schema
- [[lsp.references]]
    - backlinks
- [[lsp.document-highlight]]
    - TBD
- [[lsp.document-symbol]]
- [[lsp.code-action]]
    - fix frontmatter according to schema
- [[lsp.codelens-and-codelens-resolve]]
- [[lsp.documentlink-and-documentlink-resolve]]
- [[lsp.documentcolor-and-color-presentation]]
- [[lsp.formatting]]
    - format according to markdown-lint and schema
- [[lsp.range-formatting]]
- [[lsp.ontype-formatting]]
- [[lsp.rename-and-prepare-rename]]
- [[lsp.folding-range]]
-->
