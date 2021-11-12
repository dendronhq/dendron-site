---
id: RDHf7KfANPuAAYbNhyiQI
title: Cook
desc: ''
updated: 1636754962987
created: 1636746418602
---


### Add a new lookup button

1. add type
   - src/commands/LookupCommand.ts
   ```ts
   export type LookupEffectType = "copyNoteLink" | "copyNoteRef" | "multiSelect" | "insertNote";
   ```
2. add button

```ts
export class InsertNoteLinkButton extends DendronBtn {
  static create(pressed?: boolean) {
    return new CopyNoteLinkButton({
      title: "Insert Note",
      iconOff: "diff-added",
      iconOn: "menu-selection",
      type: "insertNote" as LookupEffectType,
      pressed,
    });
  }

  async handle({ quickPick }: ButtonHandleOpts) {
    if (this.pressed) {
      let items: readonly DNodePropsQuickInputV2[];
      if (quickPick.canSelectMany) {
        items = quickPick.selectedItems;
      } else {
        items = quickPick.activeItems;
      }
      let links = items
        .filter((ent) => !PickerUtilsV2.isCreateNewNotePick(ent))
        .map((note) => NoteUtils.createWikiLink({ note }));
      if (_.isEmpty(links)) {
        vscode.window.showInformationMessage(`no items selected`);
      } else {
        await clipboard.writeText(links.join("\n"));
        vscode.window.showInformationMessage(`${links.length} links copied`);
      }
    }
  }
}
```

### Add a new command that uses lookup

When creating a new command that utilizes the core lookup components, you will have to implement a subscriber that will listen to the events that the lookup provider publishes. The lookup provider will publish events in various stages of its lifecycle, which the consuming command will have to listen to and act upon.

Under the hood, this is all managed by the [[HistoryService|pkg.dendron-engine.arch.history-service#lookupprovider]]. Take a look at how `HistoryService` is used between the lookup derivative commands and the lookup provider.

A utility method called `NoteLookupProvierUtils.subscribe` is used to easily subscribe to the events `lookupProvider` publishes, and add custom callbacks to the events.

optional callbacks `onDone`, `onError`, `onChangeState`, and `onHide` can be provided to the utility method to further customize the behavior. If any of the callbacks are not provided, the events will simply be logged and resolved (if applicable) as default.

Below is part of a fictional command that uses this utiliy method:

```ts
export class SomeCommand extends BasicCommand<...> {
  ...
  async gatherInputs(...) {
    // set up controller
    ...
    const lc = new LookupControllerV3 (...)
    // set up provider
    ...
    
    return Promise(resolve => {
      NoteLookupProviderUtils.subscribe({
        lc,
        ...
        onDone: (event: HistoryEvent) => {
          return resolve(event);
        },
        onError: (event: HistoryEvent) => {
          window.showErrorMessage(event.error.message);
          return;
        },
        ...
      });

      // NOTE: show after subscribing, afterwards, you might have race condition where user accepts an option 
      // before subscription has occured
      lc.show();

    });
  }
  ...

  async execute(...) {
    ...
  }
}
```

### Tuning Lookup
- status: been a while since this was run, need to confirm whether this still works

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