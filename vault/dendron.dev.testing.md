---
id: cb22bd36-d45a-4ffd-a31e-96c4b39cb7fb
title: Testing
desc: ''
updated: 1610816383624
created: 1598654055046
stub: false
---

## Overview

See remote pairing session for an overview of setting up tests.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ueMhGDwMP9M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [[Session notes|dendron.dev.testing.notes]]

## Running All Tests

### All packages except the plugin

- Inside VSCode
  > Run Task: Test (bootstrap)

- Using CLI

```bash
./bootstrap/scripts/testAll.sh
```

### Run all test for Dendron Plugin (plugin-core)

1. Open the debug view
2. Run `Extension Integ Tests` in the dropdown

## Run Specific Test

### Run a specific test for Dendron Plugin

1. Open a test inside 'src/test/suite-integ/' from `plugin-core`
2. Run the build task `Extension Integ Tests - File` 

### Run a specific test from non-dendron plugin package

1. Go to file
2. Use command prompt and run `> Tasks: Run tasks`
3. Find the appropriate package and run `> npm:test:watch {package}`

## Writing Tests

All packages have tests written in `jest` except plugin-core. these tests use `mocha` assertion because vscode has a special test harness built around `mocha`  

## Debugging Tests

You can put a breakpoint directly in any code that's part of `plugin-core` and it'll break at those points

> Kevin's Aside: If you need to debug a related package, I haven't found a good way to put a break point. Instead, I manually insert a `debugger` statement and vscode will break. Don't forget to remove the `debugger` statement 


## Anatomy of an Engine Test

- pre-req:
  - read over the overall [[design|dendron.dev.design#overview]] for Dendron 

Testing the engine in Dendron involves a little bit of setup because:
- it requires initializing the engine and seeding it with the right fixture for the test
- it might require the same functionality be tested in multiple environments (plugin, CLI, server, engine, etc)
- it might require using multiple test runners (dendron uses `jest` for all tests except for the [[dendron plugin|dendron.dev.design#dendron-plugin]] which uses [[mocha|dendron.pro.dendron-plugin.qa#test-runner]])

Because of the aforementioned issues, we've created the following two classes to make testing easier and re-usable across environments.

### runEngineTest

- setup a mock dendron environment
- initialize the dendron engine
- optionally seed engine with a preset

- NOTE: there are currently multiple versions of this which track multiple generations of engine design
  - the most current version is `runEngineTestV5`
  - see example of usage [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/site.spec.ts#L84:L84)


### TestPresetEntry
- [code](https://github.com/dendronhq/dendron/blob/master/packages/common-test-utils/src/utilsv2.ts#L48:L48)

- this helps us create a `TestPreset` which is to be used with `runEngineTest`
- lets you add different lifecycle hooks as the engine is beign initialized

- NOTE: there are currently multiple versions of this
  - the most current version is `TestPresetEntryV4`