---
id: 2b9fd89c-6af5-4d12-b5d3-71529105be61
title: Qa
desc: ''
updated: 1634339336871
created: 1622050918662
---


## Debug

## Test:Unit

### Writing 

For testing the compilation of unified plugins, we've created this [harness](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/markdown/utils.ts#L40:L40) to bootstrap with the right processor

You can see an example of how it is used [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/markdown/wikiLink.spec.ts#L98:L98)

All tests for plugins should be in `engine-test-utils/src/__tests__/engine-server/markdown/v5/{plugin}.ts`

You can see an example in this [pr](https://github.com/dendronhq/dendron/pull/1527)

## Test:Integration

TBD
