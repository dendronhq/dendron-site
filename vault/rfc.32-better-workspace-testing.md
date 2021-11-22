---
id: fbhfflrwXeb0NabVToJYk
title: 32 Better Workspace Testing
desc: ''
updated: 1632412214963
created: 1632412021065
category: RFCs/Ideas
discussionID: D_kwDOEF_3Vs4ANsRh
url: 'https://github.com/dendronhq/dendron/discussions/1394'
author: 'https://github.com/dendron-bot'
---

## Goals

Create better testing harness for Dendron workspalce inside `plugin-core`

## Context

We are currently making a few changes in both how our workspaces are initialized (eg. [[31 Native Workspace|dendron://dendron.docs/rfc.31-native-workspace]]) as well as testing (eg. BDD light).
This means it's a good tiem to re-visit how we setup workspaces for testing so that it is performant and functional going forward

## Proposal

- Update plugin tests to be able to test in code workspace
    - NOTE: this will be a big undertaking, recommend doing this incrementally
        - initially, create a test harness that can easily run native workspace test
        - slowly migrate existing tests to new test harness on a week by week/just in time basis
    - should be written according to BDD style
    ```ts
    suite("GIVEN Native Workspace", () => {
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


## Details

## Example

## Tradeoffs

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/1394
