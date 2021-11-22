---
id: og3Mj0T3BH9SevPHurAau
title: 31 Native Workspace
desc: ''
updated: 1636961526337
created: 1630021134896
category: RFCs/Ideas
discussionID: D_kwDOEF_3Vs4ANr44
url: 'https://github.com/dendronhq/dendron/discussions/1390'
author: 'https://github.com/dendron-bot'
---

## Goals

Be able to use Dendron without initializing a code workspace. These will be henceforth referred to as [[Native Workspaces|dendron.rfc.31-native-workspace#native-workspace]].

## Context

Currently, Dendron only works if you open Dendron to a `dendron.code-workspace` folder. 

This causes the following issues and limitations:
- new users are often confused when they open up a Dendron folder but are unable to make use of Dendron functionality because they haven't opened into the *workspace*
- users have to have a dedicated VSCode workspace open for Dendron and are unable to make use of Dendron inside their existing projects
- this is a tight coupling between VSCode and Dendron and makes it harder to build alternative clients and frontends for Dendron

## Proposal

Instead of relying on `dendron.code.workspace`, have the presence of a `dendron.yml` file be enough for Dendron to instantiate a workspace. 

## Details

The startup process is described [[here|dendron://dendron.docs/pkg.plugin-core.arch.lifecycle.startup#summary]].

On startup, Dendron will look at all workspace folders and look for the presence of `dendron.yml`

## Implementation

Part of this work has already been done and is described [[here|dendron.dev.changelog]].

Remaining work:
- [x] currently an error on initialization with where `workspaceFile` is undefined 
- [x] we have watcher functions (eg. [fileWatcher](https://github.com/dendronhq/dendron/blob/b103d9744bd0cbf5e45b31b5a8307f7bb5fa5513/packages/plugin-core/src/fileWatcher.ts#L1-L1)) that rely on the VSCode implementation of a filewatcher in order to update files
    - these watchers generally don't work outside of a Code Workspace which means we'll need to add our own watcher (eg. [GitHub - paulmillr/chokidar: Minimal and efficient cross-platform file watching library](https://github.com/paulmillr/chokidar))
- [x] remove flag that currently gates [[Native Workspace|dendron://site/dendron.rfc.31-native-workspace#native-workspace]] to only activate in `dev` mode
- [x] achieve feature parity between code workspace and native workspace
- [x] update plugin tests to be able to test in code workspace
    - NOTE: this will be a big undertaking, recommend doing this incrementally
        - initially, create a test harness that can easily run native workspace test
        - slowly migrate existing tests to new test harness on a week by week/just in time basis
    - should be written according to BDD style
    ```ts
    suite("GIVEN Native Wowkrspace", () => {
        describe("WHEN initialized with a single vault", () => {
            describe("AND WHEN a link is copied", () => {
                test("THEN return the copied link", () => {
                    runWithWorkspace({type: NATIVE,  ..., onInit: () => {

                    }});
                });
            });
        });
    });
    ```

## Concepts 

### Native Workspace

A vault that is initialized from `dendron.yml` instead of `dendron.code-workspace`

### Code Workspace

A vault that is initialized from `dendron.code-workspace`


## Discussion

https://github.com/dendronhq/dendron/discussions/1390
