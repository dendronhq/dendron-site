---
id: d721a2f2-51e0-4039-a33b-b884bb570049
title: Engine
desc: ''
updated: 1637209868078
created: 1620671402392
---

## Summary 

This describes the API for interacting with the [[pkg.dendron-engine.t.engine]]

## Interface

- updated: 2021-11-14 13:09
```ts
export type DEngine = DCommonProps &
  DCommonMethods & {
    store: DStore;
    vaults: DVault[];
    hooks: DHookDict;

    init: () => Promise<DEngineInitResp>;
    deleteNote: (
      id: string,
      opts?: EngineDeleteOptsV2
    ) => Promise<EngineDeleteNoteResp>;
    deleteSchema: (
      id: string,
      opts?: EngineDeleteOptsV2
    ) => Promise<DEngineDeleteSchemaResp>;
    info: () => Promise<RespRequired<EngineInfoResp>>;
    sync: (opts?: DEngineSyncOpts) => Promise<DEngineInitResp>;

    getNoteByPath: (opts: GetNoteOptsV2) => Promise<RespV2<GetNotePayload>>;
    getSchema: (qs: string) => Promise<RespV2<SchemaModuleProps>>;
    querySchema: (qs: string) => Promise<SchemaQueryResp>;
    queryNotes: (opts: QueryNotesOpts) => Promise<NoteQueryResp>;
    queryNotesSync({ qs }: { qs: string; vault?: DVault }): NoteQueryResp;
    renameNote: (opts: RenameNoteOpts) => Promise<RespV2<RenameNotePayload>>;
    renderNote: (opts: RenderNoteOpts) => Promise<RespV2<RenderNotePayload>>;
    /**
     * Update note metadata.
     * Use cases:
     * - update notes if they've been changed outside of Dendron
     */
    refreshNotes: (opts: RefreshNotesOpts) => Promise<void | IDendronError>;
    getNoteBlocks: (opts: GetNoteBlocksOpts) => Promise<GetNoteBlocksPayload>;

    // config
    writeConfig: (opts: ConfigWriteOpts) => Promise<RespV2<void>>;
    getConfig: () => Promise<RespV2<ConfigGetPayload>>;
  };
```
