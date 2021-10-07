---
id: veJtAvr1gSMu50Mp
title: Test
desc: ''
updated: 1633593852849
created: 1627140509315
---

## Writing Tests

To write a test, please use the `describeMultiWS` and `describeSingleWS`
functions. These work in the same way as mocha's `describe`, except that they
will set up a multi-vault or a single-vault workspace before running any tests.
You can then place `test`s inside to write your test cases, or even add
`describe`s to further organize your tests. Here's a [simple example](https://github.com/dendronhq/dendron/blob/707ab9a5d8ed2e23ef96e6f813f7f6e11532db50/packages/plugin-core/src/test/suite-integ/WorkspaceInit.test.ts#L11:L33) of its usage:

```ts
// Need these imports
import { getDWorkspace } from "../../workspace";
import { describeMultiWS, setupBeforeAfter } from "../testUtilsV3";
import { expect } from "../testUtilsv2";
// Then create a test suite
suite("GIVEN testing code setupLegacyWorkspaceMulti", function () { // has to be function(), not arrow
  const ctx = setupBeforeAfter(this);

  describeMultiWS(
    "WHEN configured for NATIVE workspace",
    {
      preSetupHook: ENGINE_HOOKS.setupBasic,
      ctx,
      workspaceType: WorkspaceType.NATIVE, // optional
    },
    () => {
      test("THEN initializes correctly", (done) => {
        // You can access the workspace inside the test like this:
        const { engine, wsRoot, vaults } = getDWorkspace();
        // Then perform any actions and checks
        const testNote = engine.notes["foo"];
        expect(testNote).toBeTruthy();
        done();
      });

      test("THEN is of NATIVE type", (done) => {
        const { type } = getDWorkspace();
        expect(type).toEqual(WorkspaceType.NATIVE);
        done();
      });
    }
  );
  // ...

});
```

Note here that your tests can be regular functions with a `done` parameter like
this example, or they can be `async` functions without the `done`. Either will
work correctly, you can choose based on what you need for the function you are
testing.

The first object allows you to configure the workspace that's being created. It
has a lot of configuration options, see
[here](https://github.com/dendronhq/dendron/blob/707ab9a5d8ed2e23ef96e6f813f7f6e11532db50/packages/plugin-core/src/test/testUtilsV3.ts#L95-L122)
and
[here](https://github.com/dendronhq/dendron/blob/c87a049185eb9712b4b26f04922315ae1d102d02/packages/engine-test-utils/src/engine.ts#L44-L63).
The most common ones used are the following ones:

### preSetupHook

Use this to set up the notes in the test workspace, and anything else that you
want to happen before the workspace setup is completed and the engine is
initialized. You can use a preset like this example, or you can also create notes yourself like [this example](https://github.com/dendronhq/dendron/blob/aadf3cd22efe7e8ec95301f286f6348378fba035/packages/plugin-core/src/test/suite-integ/CopyNoteLink.test.ts#L44:L51).

### workspaceType

This is optional. It allows you to set up a Code or Native workspace. It
defaults to Code. Native workspaces don't have the `dendron.code-workspace` file
and may have small differences in behavior.

### modConfigCb

You can use this callback to modify the `dendron.yml` configuration for the test workspace. See [here for an example](https://github.com/dendronhq/dendron/blob/1c734daa45cc1e655638d754267c6bdf5bdcab90/packages/plugin-core/src/test/suite-integ/CreateDailyJournalNote.test.ts#L115-L118).


### Test etiquette

Your tests should follow a [[BDD-Light|dendron.rfc.25-bdd-light]] style. The example above shows how this can be accomplished. If you want to add some "AND" clauses, you can nest your tests inside `describe`s to achieve that.

Each test should test a single functionality. The tests should not depend on
each other: mocha allows skipping individual tests, and it should be possible to
skip one test without skipping the entire `describe*WS` block. To
achieve this, make sure that each tests does any necessary setup inside itself,
or in the `preSetupHook`.

If you need to do some action before all tests in `describe*WS` block and it needs to be done after the workspace has initialized, you can use the `before` mocha hook to do so. Simply add it inside `describe*WS` like this:

```ts
describeMultiWS(
    "WHEN ...",
    { /* ... */ },
    () => {
        before((done) => {
            // Action to do after workspace initialized, but before any tests are run
        });

        test("THEN ...", () => { /* ... test code here */});
    }
)
```

There's also a `beforeEach` mocha hook if this action needs to be repeated before each test.

## Details

Note that VSCode uses [mocha](https://mochajs.org/) as its default test runner whereas Dendron uses  [jest](https://jestjs.io/).

We shim the [jest methods](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsv2.ts#L418:L418) when testing the plugin though so that we can re-use the same logic between our non-vscode packages and the Dendron VSCode Plugin. 


