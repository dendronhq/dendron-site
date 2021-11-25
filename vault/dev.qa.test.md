---
id: 99q7A73uGmCwu2KvSHZro
title: Test
desc: ''
updated: 1637194708778
created: 1632347495097
---


## Testing

### Writing

All packages have tests written in `jest` except plugin-core. these tests use `mocha` assertion because vscode has a special test harness built around `mocha`   ^AJqcVczVafLB

Going forward for new tests the recommendation is to follow GIVEN-WHEN-THEN style described in [[dev.qa.style]]

#### Plugin
- see [[Test|dendron://dendron.docs/pkg.plugin-core.qa.test]]

You can see an example of a test [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/CopyNoteURL.ts)

Also, consider enabling "Uncaught Exceptions" under "Breakpoints" when running tests. Otherwise, if you forget to `await` a function that returns a promise and that function throws an exception, the test will appear to pass even though an exception was thrown.


### Executing

#### Plugin Tests
- Inside VSCode
    1. Open the debug view inside vscode
    2. Run `Extension Integ Tests` in the dropdown

#### All Other Tests
- Inside VSCode
  > Run Task: Test (bootstrap)

- Using CLI
```bash
./bootstrap/scripts/testAll.sh
```

## Manual Testing

To manually test new changes, launch an instance of the test workspace.

![[dev.ref.test-workspace]]


## Troubleshooting

### One of the tests failed 

See if its timeout related. We have a few tests that are unfortunately flaky. Examples include:
- timeout due to pulling down antd
- timeout with `DefinitionProvider`

If a single test failed, its usually fine to ignore it. If you want to be certain, you can follow the instructions [here](https://www.loom.com/share/50f5c7c2ac2143b18ea45fea8f3c4cb9?from_recorder=1&focus_title=1).

## Cook

### Running a single test

#### Plugin
1. Open a test inside 'src/test/suite-integ/' from `plugin-core`
2. Run the build task `Extension Integ Tests - File` 

#### Everything Else
1. Go to file
2. Use command prompt and run `> Tasks: Run tasks`
3. Find the appropriate package and run `> npm:test:watch engine-test-utils`
  - NOTE: most tests are consolidated in `engine-test-utils`. you can find them in `engine-test-utils/src/__tests__`


### Stubs
We use [sinonjs](https://sinonjs.org/) to stub test methods. 

If you use sinon, don't forget to call `sinon.restore` so that stubs don't leak into subsequent tests. This is done automatically when you use `setupBeforeAfter` helpfer function

When stubbing tests in the plugin, we following the following pattern
```ts
suite("some test", function() {
  let ctx: vscode.ExtensionContext;
  ctx = setupBeforeAfter(this);

  it("test", (done) => {
    sinon.stub(...);
    done();
  });

})
```

When stubbing test in any other code, add an `afterEach` block.
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

### Stubbing dendron.yml in a test
![[pkg.engine-test-utils.cook#stubbing-dendronyml-in-a-test]]

### Creating a mock note

Use [NoteTestUtils](https://github.com/dendronhq/dendron/blob/16b0e5c59e3ee11530199b5c9a11a58f05e14a93/packages/common-test-utils/src/noteUtils.ts#L63-L63)

### Updating test snapshots

We make frequent use of jest [snapshots](https://jestjs.io/docs/snapshot-testing) in our testing. These snapshots will fail the test if the output of a command changes. If you intend to change the output, run the following command:

1. Use command prompt and run `> Tasks: Run tasks`
2. Select `test:updateSnapshots`

## Reference

### setupBasic
- vault1
  - foo
  - foo.ch1
  - bar

### setupBasicMulti

- vault1
  - root
  - foo
  - foo.ch1
- vault2
  - root
  - bar
- vault3
  - root
