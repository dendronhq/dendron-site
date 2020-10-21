---
id: a80f36d9-01d0-4c5a-a228-867b093a4913
title: Cook
desc: ''
updated: 1603300956012
created: 1599151918645
stub: false
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


### Add a new site config option

The following is an example of controlling formatting options to the DendronSiteConfig. You can see the [issue](https://github.com/dendronhq/dendron/issues/278) for more details.

Dendron currently will auto-format notes during `Rename` and `Refactor` operations when links inside a note need to be replaced.

The formatting options are defined [here](https://dendron.so/notes/849ee8ee-05a5-47bf-b44d-d7c257117bc4.html#renaming-a-note).

These are [rough notes](https://dendron.so/notes/849ee8ee-05a5-47bf-b44d-d7c257117bc4.html#flow) of how formatting gets called during rename

To make this customizable, the following changes need to be made:

- [ ] update the [DendronConfig type definition](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types.ts#L405:L405)
- [ ] update [config defaults](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/config.ts#L42:L42)
- [ ] pass in formatting options from the [plugin](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/RenameNoteV2a.ts#L137:L137)
- [ ] accept formatting args in the [server](https://github.com/dendronhq/dendron/blob/master/packages/api-server/src/routes/note.ts#L38:L38)
- [ ] accept formatting args in the [engine](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/enginev2.ts#L249:L249)
- [ ] accept it when [replacing links](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/topics/markdown/utilsv2.ts#L85:L85)
- [ ] accept it in [remark pipeline](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/topics/markdown/utilsv2.ts#L41:L41)


When all this is done, we can add tests that the formatting behavior works
- [ ] [engine tests](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/__tests__/enginev2.spec.ts#L652:L652)
- [ ] [plugin test](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/suite-integ/RenameNoteV2.test.ts#L157:L157)

The above changes are for `Rename`. `Refactor` calls rename in a loop so changing rename should update refactor as well.