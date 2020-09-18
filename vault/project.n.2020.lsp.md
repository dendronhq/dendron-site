---
id: 725d99be-fadd-4464-88c3-0a5fcc7292c7
title: 2020 lsp
desc: ''
updated: 1599501616541
created: 1599501616541
stub: false
---
# Language Server Protocol

## Goals

Migrate the Dendron engine implementation to the language server protocol

## Details

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
