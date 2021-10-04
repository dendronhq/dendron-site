---
id: veJtAvr1gSMu50Mp
title: Test
desc: ''
updated: 1630796617345
created: 1627140509315
---

## Writing Tests

When writing a test for new functionality, make sure to consider both the `single` vault and `multi-vault` scenario. 

To write a test, use the `runLegacySingleWorkspaceTest` or `runLegacyMultiWorkspaceTest` methods to setup a mock Dendron workspace of the respective type.

The arguments are explained [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsV3.ts).

## Tips

### Using hooks

Setting up a Dendron test takes a `preSetupHook` and `postSetupHook` argument. If your test requires just using the defaults, you can just use an `ENGINE_HOOK` directly
```ts
...
preSetupHook: ENGINE_HOOKS.setupBasic,
...
```

- Example [here](https://github.com/dendronhq/dendron/pull/1208/files#)

## Details

Note that VSCode uses [mocha](https://mochajs.org/) as its default test runner whereas Dendron uses  [jest](https://jestjs.io/).

We shim the [jest methods](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsv2.ts#L418:L418) when testing the plugin though so that we can re-use the same logic between our non-vscode packages and the Dendron VSCode Plugin. 


