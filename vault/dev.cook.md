---
id: a80f36d9-01d0-4c5a-a228-867b093a4913
title: Cook Book
desc: ''
updated: 1636746589678
created: 1599151918645
stub: false
---
## Build

- See [[Build|dev.build]]

## Packages

### Install a new package

Because Dendron is packaged as a mono repo managed using [lerna](https://github.com/lerna/lerna), you can't just do a regular `yarn add` to install new packages. This is because lerna symlinks mono-repo dependencies together and a `yarn add` would override that. Instead, use the following command:

```
lerna add {package-to-install} --scope @dendronhq/{package-to-install-into}
```

Because this is typescript, don't forget to also install the `@types` package if it exists

```bash
lerna add @types/{package-to-install} --scope @dendronhq/{package-to-install-into}
```

- NOTE: watch out that you are installing dependencies in the right package. Missing dependencies will appear to work in development if that dependency is present in any of the other packages. The reason things work is because of the way the nodejs module resolution works and that we're in a monorepo. Dependencies are installed at the root of the monorepo and will be found there when the package doesn't have them. When we publish them as npm packages, these dependencies will show up as missing in their respective packages if its not included in the dependencies

### Add a new node package

- initialize repo

```bash
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

### Using a local npm registry

- pre-req:
  - install verdaccio

```sh
source bootstrap/scripts/helpers.sh
setRegLocal
verdaccio
```

### Adding a new husky hook

The following is an example of adding a hook that checks whether any imports have the form `"../(common-frontend|...)"` and fail to push if so

```diff
+++ b/hooks/pre-push.js
@@ -2,6 +2,7 @@ const {checkToken} = require("./common");
 const {exec} = require("./exec");

 function main() {
   // Where we would push if we ran `git push`
   let upstream;
   try {
@@ -9,15 +10,18 @@ function main() {
   } catch {
     // Fallback to first origin if none are set
     upstream = `${exec("git remote").stdout.trim().split("\n")[0]}/master`;
   }
   // The files that would get pushed
   const filesToPush = exec(`git diff --name-only ${upstream}`).stdout.split('\n');

   return checkToken({
     filesToCheck: filesToPush,
     forbiddenTokens: {
       ".only": { rgx: /(describe|it|test)\.only/, fileRgx: /\.spec\.ts$/ },
       "debugger;": { rgx: /(^|\s)debugger;/, fileRgx: /\.ts$/ },
+      "rel import of monorepo pkg": { rgx: /(\.\.\/(common-frontend|common-all|common-server|engine-server|dendron-cli|pods-core|api-server|common-test-utils|engine-test-utils|dendron-next-server))/, fileRgx: /\.ts[x]?$/ },
     }
   });
 }
```

## Config

### Update JSON Config with comments

Dendron works with JSON with comments when working the a vscode workspace file, snippets file or the keybindings file. When making a change here, take care to both read and write to the file while preserving comments. 

You'll want to make sure to use the following functions to read, assign and write json with comments

```ts
async function readJSONWithComments(fpath: string)
function assignJSONWithComment(jsonObj: any, dataToAdd: any) {
function writeJSONWithComments(fpath: string, data: any)
```

### Add a new site config option

The following is an example of controlling formatting options to the DendronSiteConfig. You can see the [issue](https://github.com/dendronhq/dendron/issues/278) for more details.

Dendron currently will auto-format notes during `Rename` and `Refactor` operations when links inside a note need to be replaced.

The formatting options are defined [here](https://dendron.so/notes/849ee8ee-05a5-47bf-b44d-d7c257117bc4.html#renaming-a-note).

These are [rough notes](https://dendron.so/notes/849ee8ee-05a5-47bf-b44d-d7c257117bc4.html#flow) of how formatting gets called during rename

To make this customizable, the following changes need to be made:

- [ ] update the [DendronConfig type definition](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/typesv2.ts)
- [ ] update [config defaults](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/config.ts#L42:L42)
- [ ] pass in formatting options from the [plugin](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/RenameNoteV2a.ts#L137:L137)
- [ ] accept formatting args in the [server](https://github.com/dendronhq/dendron/blob/master/packages/api-server/src/routes/note.ts#L38:L38)
- [ ] accept formatting args in the [engine](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/enginev2.ts#L249:L249)
- [ ] accept it when [replacing links](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/markdown/utilsv5.ts)
- [ ] accept it in [remark pipeline](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/markdown/remark/utils.ts)

When all this is done, we can add tests that the formatting behavior works

- [ ] [engine tests](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/enginev2.spec.ts)

The above changes are for `Rename`. `Refactor` calls rename in a loop so changing rename should update refactor as well.

### Adding a general configuration

See [[Adding new configuration|pkg.plugin-core.dev#adding-new-configuration]]

## Plugin
- See [[Dev|pkg.plugin-core.dev]]

## Markdown

Markdown related changes are documented [[here|pkg.dendron-markdown.dev]]

## Other



## Styling and Version Control

### Manually Formatting the code

From the root workspace, you can run `yarn format` to run `prettier` on all packages. This should be unecessary since we auto format on every commit

### Git Ignore Blame

In case of large refactorign changes, we want to not overwrite authorship and commit history. 

In the project root, run the following after you have commited your styling changes to preserve the history.

```sh
echo $HASH_OF_COMMIT >> .git-blame-ignore-revs
```

You can see an explanation of how it works [here](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt)

### Adding a new configuration property

![[dendron://dendron.docs/pkg.plugin-core.dev#adding-a-new-config,1:#*]]

### Synchronously loop through async results

- see <https://github.com/dendronhq/dendron/blob/integ-publish/packages/plugin-core/src/commands/VaultAddCommand.ts#L171:L179>

```ts
  await _.reduce(
    vaults,
    async (resp: any, vault: DVault) => {
      await resp;
      await wsService.createVault({ vault });
      return this.addVaultToWorkspace(vault);
    },
    Promise.resolve()
  );
```
