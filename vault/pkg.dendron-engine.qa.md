---
id: 60fbcc05-df2a-44a2-aa0e-cdd62c2557b6
title: Qa
desc: ''
updated: 1631817564476
created: 1614812225185
---

# Local

## Debug

Use `Launch Task` and run `Debug One Test (engine-test-utils)` on a `spec` file that you want to test. This will run the test in `debug` mode which will enable breakpoints. 

## Test:Unit

### Writing

All engine test need to be able to run both over the [[Engine|dendron.dev.design#engine]] as well as the [[Engine Client|dendron.dev.design#engine-client]]. 
This is why tests are added to `common-test-utils/src/presets/engine-server`.


## Cook

### Running a single test
Engine tests use the presets in `common-test-utils/src/presets/engine-server/index.ts` to run through a wide range of scenarios.

In order to narrow the test case to a single preset, use `getPreset`.

```ts
import {
  getPreset,
} from "../../presets";

test.only("bond", async () => {
  const preset = getPreset({key: "BASIC", nodeType: "NOTES", presetName: "render", presets: ENGINE_PRESETS})
  const { testFunc, ...opts } = preset;
  await runEngineTestV5(testFunc, { ...opts, createEngine, expect });
  
});
```

### Running a group of test

```ts
const presetName = "rename"
const group = getPresetGroup({nodeType, presetName, presets: ENGINE_PRESETS});
describe.only(presetName, () => {
  test.each(
    _.map(group, (v, k) => {
      return [k, v];
    })
  )("%p", async (_key, TestCase) => {
    const { testFunc, ...opts } = TestCase;
    await runEngineTestV5(testFunc, { ...opts, expect });
  });
});
```

## Test:Integration

# Remote

## Debug

## Test:Unit

## Test:Integration

# Topics

## Unified Tests
These tests cover everything related to `unified` plugins. This refers to anything in `packages/engine-server/src/markdown/utils.ts`

- plugin tests are located in `packages/engine-test-utils/src/__tests__/engine-server/markdown/`
- when testing `transformers`, `process` will run over the node that is passed in to the processor
- when testing `parsers` and `compilers`, `process` will run over the text that you pass into it 

