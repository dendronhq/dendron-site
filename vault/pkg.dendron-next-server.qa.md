---
id: 2a015bf5-7465-43f0-86fa-42a83a456cdb
title: Qa
desc: ''
updated: 1626454625438
created: 1622130692877
---


## Debug

Toggle the developer tools in the launched debugger window to see the console messages

## Test:Unit

### Writing

### Executing

## Test:Integration

### Writing

### Executing

## Cook

### Using Compiled Assets to debug

```sh
echo "build latest static assets..."
cd packages/dendron-next-server
yarn build

echo "add statiic assets to express..."
cp -R ../dendron-next-server/out/* lib/static
```