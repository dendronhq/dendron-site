---
id: d410c0d6-9ede-42ef-9c96-662902e4f488
title: Lifecycle
desc: ''
updated: 1611428138285
created: 1609714449234
---

## Workspace Creation

This describes everything that happens after a user runs `Initialize Workspace`. See source code [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/SetupWorkspace.ts#L37:L37).

## Running a Command

When a command is executed, it runs the following functions in order. Source code [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/base.ts#L40:L40)

- sanityCheck: does basic checks
- enrichInputs: cleans up passed in inputs
- execute: runs the actual command
- showResponse: show response to the user


## Activate
- activating dendron involves the following steps
    - dendron api server started
    - dendron engine finish indexing notes

- extension, initialized: engine is loaded

- other
    - extension, not_initialized: error with starting engine