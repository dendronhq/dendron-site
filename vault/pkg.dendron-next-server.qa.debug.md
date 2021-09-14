---
id: GsJbBOVew8j1gkK6
title: Debug
desc: ''
updated: 1627312515381
created: 1627312420429
---


## Launch
<!-- How to launch the program from the current source code -->

## Debug
<!-- How to step through tests using debugger -->

Toggle the developer tools in the launched debugger window to see the console messages

### Using Compiled Assets to debug

```sh
echo "build latest static assets..."
cd packages/dendron-next-server
yarn build

echo "add statiic assets to express..."
cp -R ../dendron-next-server/out/* lib/static
```

Restart test-workspace from instructions [[here|pkg.dendron-next-server.dev#development]]

### Breakpoints
<!-- Setting Breakpoints -->


[[26|user.sam.comments.2021.07.26]]