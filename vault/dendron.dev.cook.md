---
id: a80f36d9-01d0-4c5a-a228-867b093a4913
title: Cookbook
desc: ''
updated: 1629500604348
created: 1599151918645
stub: false
---

## Build

### Building from clean repo

Sometimes you'll need to rebuild the workspace from scratch. Run the following command to do so

```
./bootstrap/scripts/cleanup.sh
yarn setup
```

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


## Other

### Tuning Lookup
- create `proto.ts` inside `engine-server`

```ts
import { DNodeUtils, NoteProps, NoteUtils } from "@dendronhq/common-all";
import { getDurationMilliseconds } from "@dendronhq/common-server";
import fs from "fs-extra";
import Fuse from "fuse.js";
import _ from "lodash";
import { DendronEngineClient } from "engineClient";

export async function main2() {
    const engine = DendronEngineClient.create({
        port: "3005",
        ws: "/Users/kevinlin/code/dendron/test-workspace",
        vaults: []
      });
       await engine.init();
    //   const notes = data?.notes!
      const notes: NoteProps[] = [NoteUtils.create({fname: "notes.dendron-improvements", vault: engine.vaults[0]})]

    const initList: any[] = [];
    const options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 50,
        maxPatternLength: 32,
        minMatchCharLength: 2,
        keys: ["fname"],
        useExtendedSearch: true,
        includeScore: true,
      };
      const fuse = new Fuse(initList, options);
      fuse.setCollection(
        _.map(notes, ({ fname, title, id, vault }, _key) => ({
          fname,
          id,
          title,
          vault,
        }))
      );
      const qs = "dendron.notes"
      const resp = fuse.search(qs)
      const numResults = _.size(notes);
      const numHits = _.size(resp);
      const stats = {numResults, numHits};
      console.log(stats);
}

export async function main() {
  let start = process.hrtime();
  const engine = DendronEngineClient.create({
    port: "3005",
    ws: "/Users/kevinlin/Dropbox/Apps/Noah",
    vaults: [],
  });
  let engineCreate = getDurationMilliseconds(start);
  const wsRoot = engine.wsRoot;

  start = process.hrtime();
  await engine.init();
  let engineInit = getDurationMilliseconds(start);

  start = process.hrtime();
  await engine.queryNotes({ qs: "*" });
  let engineStarQuery = getDurationMilliseconds(start);

  start = process.hrtime();
  let resp = await engine.queryNotes({ qs: "pr" });
  let engineDomainQuery = getDurationMilliseconds(start);
  let nodes = resp.data;

  start = process.hrtime();
  resp = await engine.queryNotes({ qs: "cli.git" });
  let engineDomainWithChildQuery = getDurationMilliseconds(start);
  nodes = resp.data;
  const numProps = nodes.length;

  start = process.hrtime();
  await Promise.all(
    nodes.map(async (ent) =>
      DNodeUtils.enhancePropForQuickInput({
        wsRoot,
        props: ent,
        schemas: engine.schemas,
        vaults: engine.vaults,
      })
    )
  );
  let enhancePropsWithPromise = getDurationMilliseconds(start);

  start = process.hrtime();
  await Promise.all(
    nodes.slice(0, 100).map(async (ent) =>
      DNodeUtils.enhancePropForQuickInput({
        wsRoot,
        props: ent,
        schemas: engine.schemas,
        vaults: engine.vaults,
      })
    )
  );
  let enhancePropsWithPromise100 = getDurationMilliseconds(start);

  start = process.hrtime();
  await Promise.all(
    nodes.slice(0, 50).map(async (ent) =>
      DNodeUtils.enhancePropForQuickInput({
        wsRoot,
        props: ent,
        schemas: engine.schemas,
        vaults: engine.vaults,
      })
    )
  );
  let enhancePropsWithPromise50 = getDurationMilliseconds(start);

  start = process.hrtime();
  nodes.slice(0, 50).map((ent) =>
    DNodeUtils.enhancePropForQuickInput({
      wsRoot,
      props: ent,
      schemas: engine.schemas,
      vaults: engine.vaults,
    })
  );
  let enhancePropsNoPromise50 = getDurationMilliseconds(start);

  const out = {
    engineCreate,
    engineInit,
    engineStarQuery,
    engineDomainQuery,
    engineDomainWithChildQuery,
    numProps,
    enhancePropsWithPromise,
    enhancePropsWithPromise100,
    enhancePropsWithPromise50,
    enhancePropsNoPromise50,
  };
  console.log(out);
  fs.writeJSONSync("/tmp/data.json", out, { spaces: 4 });
  return;
}
main2();
```


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

![[dendron://dendron.dendron-site/pkg.dendron-plugin.dev#adding-a-new-config,1:#*]]

### Synchronously loop through async results

- see https://github.com/dendronhq/dendron/blob/integ-publish/packages/plugin-core/src/commands/VaultAddCommand.ts#L171:L179
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