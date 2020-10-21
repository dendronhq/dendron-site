---
id: cb22bd36-d45a-4ffd-a31e-96c4b39cb7fb
title: Testing
desc: ''
updated: 1603252615067
created: 1598654055046
parent: 3489b652-cd0e-4ac8-a734-08094dc043eb
children: []
stub: false
fname: dendron.dev.testing
hpath: dendron.dev.testing
---
# Testing

### All packages except the plugin

> Run Task: Test (bootstrap)

### Run all test for Dendron Plugin (plugin-core)

1. Open the debug view
2. Run `Extension Integ Tests` in the dropdown

### Run a specific test for Dendron Plugin

1. Open a test inside 'src/test/suite-integ/' from `plugin-core`
2. Run the build task `Extension Integ Tests - File` 

### Run a specific test from non-dendron plugin package

1. Go to file
2. Use command prompt and run `> Tasks: Run tasks`
3. Find the appropriate package and run `> npm:test:watch {package}`

