---
id: cb22bd36-d45a-4ffd-a31e-96c4b39cb7fb
title: Testing
desc: ''
updated: 1603252615067
created: 1598654055046
stub: false
---

# Testing

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
