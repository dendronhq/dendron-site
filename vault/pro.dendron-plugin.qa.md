---
id: c84aa95c-83b9-4d52-90a1-eeec8f0ca84f
title: QA
desc: ''
updated: 1609716111365
created: 1609713960639
---
### Writing Tests

When writing a test for new functionality, make sure to consider both the `single` vault and `multi-vault` scenario. 

To write a test, use the `runLegacySingleWorkspaceTest` or `runLegacyMultiWorkspaceTest` methods to setup a mock Dendron workspace of the respective type.

You can see an example of both in [plugin-core/src/test/suite-integ/RenameNoteV2.test.ts](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/suite-integ/RenameNoteV2.test.ts#L131:L131)

The arguments are explained [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsV3.ts#L70:L70).

### Test Runner

Note that VSCode uses [mocha](https://mochajs.org/) as its default test runner whereas Dendron uses  [jest](https://jestjs.io/).

We shim the [jest methods](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsv2.ts#L418:L418) when testing the plugin though so that we can re-use the same logic between our non-vscode packages and the Dendron VSCode Plugin. 

