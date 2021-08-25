---
id: cb22bd36-d45a-4ffd-a31e-96c4b39cb7fb
title: Testing
desc: ''
updated: 1629905535827
created: 1598654055046
stub: false
---

## Overview

See remote pairing session for an overview of setting up tests.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ueMhGDwMP9M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [[Session notes|dendron.dev.qa.notes]]

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
3. Find the appropriate package and run `> npm:test:watch engine-test-utils`
  - NOTE: most tests are consolidated in `engine-test-utils`. you can find them in `engine-test-utils/src/__tests__`

## Writing Tests

All packages have tests written in `jest` except plugin-core. these tests use `mocha` assertion because vscode has a special test harness built around `mocha`  

### Plugin Tests

- NOTE: mocha will mark a test as a success if you return a promise. This is why we use callback style version of the tests

```ts
// good
describe("foo", function() {
  test("does foo", function(done) {
    ...
    done();
  });
});

// bad
describe("foo", function() {
  test("does foo", async function( ) {
    ...
  });
});
```

You can see an example of a test [here](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/plugin-core/src/commands/CopyNoteURL.ts#L1:L1)

Also, consider enabling "Uncaught Exceptions" under "Breakpoints" when running tests. Otherwise, if you forget to `await` a function that returns a promise and that function throws an exception, the test will appear to pass even though an exception was thrown.

### Test Workspace

If you want to use a workspace to test changes on the workspace at `{ROOT}/test-workspace`

Note that this workspace is currently configured to be used with launching a engine server from the command line. 

Remove the following lines in `dendron.yml` to launch it without the CLI engine server

```yml
dev:
    nextServerUrl: 'http://localhost:3000'
    engineServerPort: 3005
```

### Stubs
We use [sinonjs](https://sinonjs.org/) to stub test methods. 

If you use sinon, don't forget to call `sinon.restore` so that stubs don't leak into subsequent tests.

When stubbing tests in the plugin, we following the following pattern
```ts
suite("some test", function() {
  let ctx: vscode.ExtensionContext;
  ctx = setupBeforeAfter(this, {
    afterHook: () => {
      sinon.restore();
    },
  });

  it("test", (done) => {
    sinon.stub(...);
    done();
  });

})
```

When stubbing test any other code, add an `afterEach` block.
```ts
afterEach(()=> {
  sinon.restore()
});
```

### Stubbing Mutating Disk Changes

Dendron has certain features that writes to locations that are global to all Dendron installations (`eg. ~/.dendron`). Because we run integration tests on these features, we also don't want these tests to overwrite our actual dendron setup. The tests for these sort of features should be stubbed.

For example, below is an example of stubbing the home directory for tests:

```ts
static mockHomeDir(dir?: string): SinonStub {
  if (_.isUndefined(dir)) dir = tmpDir().name;
  return sinon.stub(os, "homedir").returns(dir);
}
```


## Debugging Tests

You can put a breakpoint directly in any code that's part of `plugin-core` and it'll break at those points

> Kevin's Aside: If you need to debug a related package, I haven't found a good way to put a break point. Instead, I manually insert a `debugger` statement and vscode will break. Don't forget to remove the `debugger` statement 

### Git Related Tests

Any tests that involve setting up git should use [GitTestUtils](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/engine-test-utils/src/utils.ts#L22:L22). This will help you create a git workspace with necessary commit history. 

You can see it being used [here](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/engine-test-utils/src/__tests__/engine-server/workspace.spec.ts#L21:L21).

If a tests involve a remote git repository, use `tmpDir` to setup a *local remote*. Use `GitTestUtils` to create a repo and then push an dpull to the local remote.

### Engine Test

- pre-req:
  - read over the overall [[design|dendron.dev.design#overview]] for Dendron 

Testing the engine in Dendron involves a little bit of setup because:

- it requires initializing the engine and seeding it with the right fixture for the test
- it might require the same functionality be tested in multiple environments (plugin, CLI, server, engine, etc)
- it might require using multiple test runners (dendron uses `jest` for all tests except for the [[dendron plugin|dendron.dev.design#dendron-plugin]] which uses [[mocha|pkg.dendron-plugin.qa#test-runner]])

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

## Cook

### Stubbing dendron.yml in a test
![[pkg.engine-test-utils.cook#stubbing-dendronyml-in-a-test]]

### Creating a mock note

see [this](https://github.com/dendronhq/dendron/blob/16b0e5c59e3ee11530199b5c9a11a58f05e14a93/packages/common-test-utils/src/noteUtils.ts#L63-L63)

### Updating test snapshots

We make frequent use of jest [snapshots](https://jestjs.io/docs/snapshot-testing) in our testing. These snapshots will fail the test if the output of a command changes. If you intend to change the output, run the following command:

1. Use command prompt and run `> Tasks: Run tasks`
2. Select `test:updateSnapshots`
