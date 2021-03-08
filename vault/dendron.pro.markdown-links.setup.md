---
id: 85dace70-c2ef-46e9-b467-8d297c420421
title: Setup
desc: ''
updated: 1614924050222
created: 1611516225361
---
## Getting Started

1. Install dependencies
   ```bash
   git clone https://github.com/dendronhq/markdown-links.git
   cd markdown-links
   npm install
   ```
2. Use `Run Extension` from the [[debug pane|dendron.dev.ref.vscode#debug-pane]] (note: this requires that dendron be installed. VSCode might ask you to install Dendron and reload at this point)
3. Make sure you are inside a Dendron workspace. If not, either initialize one using `Dendron: Initialize Workspace` or change to one using `Dendron: Change Workspace`

## Setup without Dendron Extension Installed

Dendron markdown links depends on the dendron extension to be active. You can still make it work without the extension by the following instructions:

1. Comment out the following in `package.json`
   ```json
   "extensionDependencies": [
       "dendron.dendron"
   ],
   ```
2. Follow step 2 in the setup instructions above.
3. Instead of using the plugin to initialize a Dendron workspace, initialize the workspace using the `dendron-cli`
   ((ref:[[dendron.topic.cli]]#launchengineserver,1:#*))

