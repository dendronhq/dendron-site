---
id: 64f0e2d5-2c83-43df-9144-40f2c68935aa
title: Dendron Plugin Quickstart
desc: ''
updated: 1637177759808
created: 1598651458825
---

## Prerequisites

Before you begin, you need to make sure to have the following SDKs and tools:

- [Node.js >= 12.0.0](https://nodejs.org/download/release/latest-v10.x/)
  - We recommend using a version in [Active LTS](https://nodejs.org/en/about/releases/)
- yarn
  - `npm install -g yarn`
- lerna
  - `npm install -g lerna`
- a different instance of VSCode
  - because debugging VSCode by default loads up all extensions that are installed, you'll have issues trying to develop Dendron if you also have VSCode installed . the workaround is to install an alternative flavor of vscode (eg. [insider edition](https://code.visualstudio.com/insiders/)) to use for development 

## Steps

1. Clone repo
   ```bash
   git clone https://github.com/dendronhq/dendron.git
   cd dendron
   ```
2. Install dependencies ^OI7k28ZBdX9W
   ```bash
   # install package root dependencies
   yarn 

   # this should install all dependencies
   yarn setup
   # if the above script errors out, you can diagnose the issue and run the following scripts sequentially dependeing on where the error occured
   yarn bootstrap:bootstrap # install package dependencise
   yarn bootstrap:build  # build package dependencies
   ```
3. Watch all dependencies ^QWJj9cTIcwuX
  - NOTE: typescript is a compiled language which means that the executablew on't be updated unless you compile. The watch script will auto-compile all code on change
  ```sh
   # watch all dependencies
   ./bootstrap/scripts/watch.sh

  ```
3. Open the workspace by opening `dendron-main.code-workspace` with VSode. While its not required to use VSCode, most of the helper scripts in this repository are created with VSCode in mind so using it will make development significantly easier.

4. Run the plugin.  To start an instance of the Dendron with debugging capabilities, Run `Extension: Local (plugin-core)` from the debug panel in vscode

![debugger](/assets/images/start_debugger.gif)

_Note: Running via Run -> Start Debugging will not work unless you've previously targeted `Extension: Local (plugin-core)`_

_Note: To have the changes reflected as you edit the code you need to run the `./bootstrap/scripts/watch.sh` and restart the `Extension: Local (plugin-core)`)_

## Troubleshooting

### Changes aren't showing up
1. Typescript is a compiled language. Make sure that your code is being compiled. Make sure the following is on:
```sh
  # watch all dependencies
  ./bootstrap/scripts/watch.sh

```

## Related
- [[List of other Dendron Packages|dendron://dendron.dendron-site/pkg]]
- [[Detailed Developer Docs|dendron://dendron.dendron-site/pkg.plugin-core.dev]]
