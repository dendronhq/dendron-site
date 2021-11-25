---
id: yhpcSlIpwsBX2iHjfyutP
title: Debug
desc: ''
updated: 1631385135929
created: 1630441590786
---

## Components

### Plugin Code

You can put a breakpoint directly in any code that's part of `plugin-core` and it'll break at those points

> Kevin's Aside: If you need to debug a related package, I haven't found a good way to put a break point. Instead, I manually insert a `debugger` statement and vscode will break. Don't forget to remove the `debugger` statement 

### Non Plugin Code

To test non-plugin code, run the `debug one test (engine-test-utils)` task while having the test file open. Note that breakpoints won't break a lot of the times so if the test isn't breaking, manually add a `debugger` statement in the code. 


### Git Related Tests

Any tests that involve setting up git should use [GitTestUtils](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/utils/git.ts). This will help you create a git workspace with necessary commit history. 

You can see it being used [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/workspace.spec.ts).

If a tests involve a remote git repository, use `tmpDir` to setup a *local remote*. Use `GitTestUtils` to create a repo and then push an dpull to the local remote.

### Engine Test

- pre-req:
  - read over the overall [[design|dev.design#overview]] for Dendron 

Testing the engine in Dendron involves a little bit of setup because:

- it requires initializing the engine and seeding it with the right fixture for the test
- it might require the same functionality be tested in multiple environments (plugin, CLI, server, engine, etc)
- it might require using multiple test runners (dendron uses `jest` for all tests except for the [[dendron plugin|dev.design#dendron-plugin]] which uses [[mocha|pkg.plugin-core.qa#test-runner]])

Because of the aforementioned issues, we've created the following two classes to make testing easier and re-usable across environments.

#### runEngineTest

- setup a mock dendron environment

- initialize the dendron engine

- optionally seed engine with a preset

- NOTE: there are currently multiple versions of this which track multiple generations of engine design
  - the most current version is `runEngineTestV5`
  - see example of usage [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/site.spec.ts#L84:L84)

#### TestPresetEntry

- [code](https://github.com/dendronhq/dendron/blob/master/packages/common-test-utils/src/utilsv2.ts#L48:L48)

- this helps us create a `TestPreset` which is to be used with `runEngineTest`

- lets you add different lifecycle hooks as the engine is beign initialized

- NOTE: there are currently multiple versions of this
  - the most current version is `TestPresetEntryV4`


## Profiling

To profile code, we use the following pattern

```ts
let ctx = "Some Context"
let duration;
const start = process.hrtime();
// ... some event to duration
duration = getDurationMilliseconds(start);
Logger.info({ctx, duration})
AnalyticsUtils.track(VSCodeEvents.Lookup_Show, {
  duration,
  flavor: opts.flavor,
});
```
