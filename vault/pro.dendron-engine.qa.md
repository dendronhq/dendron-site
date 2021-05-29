---
id: 60fbcc05-df2a-44a2-aa0e-cdd62c2557b6
title: Qa
desc: ''
updated: 1621000734691
created: 1614812225185
---

## Local

### Debug

Use `Launch Task` and run `Debug One Test (engine-test-utils)` on a `spec` file that you want to test. This will run the test in `debug` mode which will enable breakpoints. 

### Test:Unit

#### Engine
Engine tests use the presets in `common-test-utils/src/presets/engine-server/index.ts` to run through a wide range of scenarios.

In order to narrow the test case to a single preset, use `getPreset`.

### Test:Integration

## Remote

### Debug

### Test:Unit

### Test:Integration

## Topics

### Unified Tests
These tests cover everything related to `unified` plugins. This refers to anything in packages/engine-server/src/markdown/utils.ts

- plugin tests are located in `packages/engine-test-utils/src/__tests__/engine-server/markdown/`
- [terminology](https://www.kevinslin.com/notes/09b6c659-3fe3-4a7d-98f9-47e7167cca5b.html) to understand
- when testing `transformers`, `process` will run over the node that is passed in to the processor
- when testing `parsers` and `compilers`, `process` will run over the text that you pass into it 

