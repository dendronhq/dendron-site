---
id: a80f36d9-01d0-4c5a-a228-867b093a4913
title: Cook
desc: ''
updated: 1599151918645
created: 1599151918645
---

# Cookbook

### Add a new node package

- initialize repo

```sh
cd {workspace_dir}
cp -R /path/to/dendron-yeoman/node-ts packages/{new-package}
```

- update `package.json`

  - change project name

- publish the repo (needs to be done initially before running lerna publish)

```
npm publish --access public
```

### Using eslint

All packages in the repo use a standard base configuration found at [.eslintrc.js](.eslintrc.js). If you're using the VS Code and would like to see eslint violations on it, install the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).