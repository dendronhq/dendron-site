---
id: jjyGWsD12e8rabPZ5R5uE
title: Export
desc: ''
updated: 1633392643859
created: 1633392474423
---

Export pods let you export data from Dendron to an external data source

## Configuration

```ts
export type ExportPodConfig = {
  /**
   * Where to export to
   */
  dest: string;
  /**
   * Should exported notes contain the note contents?
   */
  includeBody?: boolean;
  /**
   * Should note stubs be included in the export?
   */
  includeStubs?: boolean;
  /**
   * List of glob patterns of hiearchies to ignore when exporting
   */
  ignore?: string[];
  /**
   * Specify vaults to include or exclude during export (choose one)>
   * If `vaults.include` is filled, only include notes from listed vaults in export
   * If `vaults.exclude` is filled, all notes are exported except those in the exclude list
   */
  vaults?: PodVaultConfig;
};
```
