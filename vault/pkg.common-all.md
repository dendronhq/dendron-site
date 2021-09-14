---
id: 5c71637f-d08f-4ce5-8160-c5ab90254dee
title: Common All
desc: ''
updated: 1629995654784
created: 1620335767697
---


## Summary

Types and utilities used in both web and node environments. 

## Utilities
- constants (eg. name of dendron.yml file, etc)
- time utilities
- helpers to work with vaults and notes
- [note utilities](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/dnode.ts#L775:L775)

## Types 

- Note Related Types
    - loc: [src/types/foundation.ts](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/foundation.ts#L63:L63)


### NoteProps

This goes over all properties common to notes

```ts
export type DNodeProps<T = any, TCustom = any> = {
  /**
   * Unique id of a note
   */
  id: string;
  /**
   * Node title
   */
  title: string;
  /**
   * Node description
   */
  desc: string;
  /**
   * Node links (eg. backlinks, wikilinks, etc)
   */
  links: DLink[];
  /**
   * Name of the node. This corresponds to the name of the file minus the extension
   */
  fname: string;
  /**
   * Whether this node is a note or a schema
   */
  type: DNodeType;
  /**
   * Last updated
   */
  updated: number;
  /**
   * Created
   */
  created: number;
  /**
   * Determines whether this node is a {@link stub https://wiki.dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html#stubs}
   */
  stub?: boolean;
  /**
   @deprecated
   */
  schemaStub?: boolean;
  /**
   * Immediate parent
   */
  parent: DNodePointer | null;
  /**
   * Immediate children
   */
  children: DNodePointer[];
  data: T;
  /**
   * Body of the note
   */
  body: string;
  /**
   * Custom frontmatter. Add additional fields here and they will show up in the note frontmatter
   */
  custom?: TCustom;
  /**
   * Schemas that apply to the note
   */
  schema?: { moduleId: string; schemaId: string };
  /**
   * The vault that a note belongs to
   */
  vault: DVault;
};
```
