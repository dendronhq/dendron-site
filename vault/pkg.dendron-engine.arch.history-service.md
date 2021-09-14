---
id: Rp1yFBOH6BletGam
title: History Service
desc: ''
updated: 1631098286929
created: 1628096207257
---

## Summary
The history service keeps track of lifecycle events in Dendron. It is defined [here](https://github.com/dendronhq/dendron/blob/b48721db9518100868a34278a5dfd2beac16f207/packages/engine-server/src/history.ts#L49-L49)

## Details

Lifecycle events have the following structure

```ts
export type HistoryEvent = {
  action: HistoryEventAction;
  source: HistoryEventSource;
  /**
   * Used to further narrow down the source.
   * This is used in {@link LookupProviderV3} as this can be embedded in multiple commands (eg. NoteLookup vs RenameNote)
   * For example, for [RenameNote](https://github.com/dendronhq/dendron/blob/6c98d466536632530399bd45f1220ae725ff3e2f/packages/plugin-core/src/commands/RenameNoteV2a.ts#L52-L52),
   * the id is "rename" whereas for NoteLookup, the id is "lookup"
   */
  id?: string;
  /**
   * Sometimes events have uris attached to them (eg. {@link HistoryEventAction.create})
   */
  uri?: URI;
  /**
   * Arbitrary data that can be passed to the event
  */
  data?: any;
};
```

## Lifecycle Events

### LookupProvider 

The lookup provider emits events when items have been selected. 
If there is an error, it will yield an error event.

Source code [here](https://github.com/dendronhq/dendron/blob/6c98d466536632530399bd45f1220ae725ff3e2f/packages/plugin-core/src/components/lookup/LookupProviderV3.ts#L121-L121).

Consumers of the LookupProvider are usually commands that integrate lookup. You can see an example [here](https://github.com/dendronhq/dendron/blob/51633edcd0817c9b4aa18ff25f492f7a00e6e088/packages/plugin-core/src/commands/NoteLookupCommand.ts#L183-L183).

```ts
HistoryService.instance().subscribev2("lookupProvider", {
    id: "lookup",
    listener: async (event) => {
      if (event.action === "done") {
        const data =
          event.data as NoteLookupProviderSuccessResp<OldNewLocation>;
        if (data.cancel) {
          resolve(undefined);
        }
        const _opts: CommandOpts = {
          selectedItems: data.selectedItems,
          ...opts,
        };
        resolve(_opts);
      } else if (event.action === "error") {
        const error = event.data.error as DendronError;
        this.L.error({ error });
        resolve(undefined);
      } else {
        const error = new DendronError({
          message: `unexpected event: ${event}`,
        });
        this.L.error({ error });
      }

      HistoryService.instance().remove("lookup", "lookupProvider");
    },
  });
```

The reason we use this pub/sub pattern is because the QuickInput widget we use for lookup is asynchronous and we can't just `await` on the result because `QuickInput.show` doesn't return anything. 
