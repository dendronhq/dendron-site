---
id: cb22bd36-d45a-4ffd-a31e-96c4b39cb7fb
title: Testing
desc: ''
updated: 1603468882089
created: 1598654055046
stub: false
---

# Testing

## Running Tests

### All packages except the plugin

> Run Task: Test (bootstrap)

### Run all test for Dendron Plugin (plugin-core)

1. Open the debug view
1. Run `Extension Integ Tests` in the dropdown

### Run a specific test for Dendron Plugin 
1. Open a test inside 'src/test/suite-integ/' from `plugin-core`
1. Run the build task `Extension Integ Tests - File` 

### Run a specific test from non-dendron plugin package

1. Go to file
2. Use command prompt and run `> Tasks: Run tasks`
2. Find the appropriate package and run `> npm:test:watch {package}`


## Writing Tests

All packages have tests written in `jest` except plugin-core. these tests use `mocha` assertion because vscode has a special test harness built around `mocha`  

## Debugging Tests

You can put a breakpoint directly in any code that's part of `plugin-core` and it'll break at those points

> Kevin's Aside: If you need to debug a related package, I haven't found a good way to put a break point. Instead, I manually insert a `debugger` statement and vscode will break. Don't forget to remove the `debugger` statement 