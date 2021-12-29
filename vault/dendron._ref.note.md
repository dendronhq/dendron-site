---
id: 4H5j2CImfxRMNFLHnpzbH
title: Note
desc: ''
updated: 1640425498231
created: 1632703052150
---


## Note Properties


### Typescript 
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
   * Node links (eg. backlinks, wikilinks, etc.)
   */
  links: DLink[];
  /**
   * Anchors within the node (headings, block anchors)
   */
  anchors: { [index: string]: DNoteAnchorPositioned | undefined };
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

  /**
   * Hash of note content
   */
  contentHash?: string;

  /** Override the randomly generated color for tag notes. Colors can be entered as `#12AC35`, `rgb(123, 56, 200)`, or `hsl(235, 100%, 50%)`. */
  color?: string;

  /** One or more frontmatter tags attached to this note. */
  tags?: string | string[];

  /** To be used by social media platforms as a thumbnail/preview. */
  image?: DNodeImage;
};
```

### Example

```json
  "id": "01u0co3RYjOM1bjpc2qIU",
  "title": "Tutorial",
  "vault": {
    "fsPath": "vault"
  },
  "type": "note",
  "desc": "Tutorial Home Page",
  "anchors": {
    "welcome-to-dendron": {
      "type": "header",
      "value": "welcome-to-dendron",
      "line": 8,
      "column": 0
    },
    "steps-to-get-started-with-dendron": {
      "type": "header",
      "value": "steps-to-get-started-with-dendron",
      "line": 18,
      "column": 0
    },
    "getting-help": {
      "type": "header",
      "value": "getting-help",
      "line": 29,
      "column": 0
    },
    "icon-guide": {
      "type": "header",
      "value": "icon-guide",
      "line": 35,
      "column": 0
    },
    "welcome-to-dendron-1": {
      "type": "header",
      "value": "welcome-to-dendron-1",
      "line": 41,
      "column": 0
    }
  },
  "fname": "tutorial",
  "updated": 1632702862335,
  "created": 1624333847315,
  "parent": "root",
  "children": [
    "vXh-HmSTsmgGA9j9IzcZh",
    "DO_RXSlAbwNwbz-ILKoQa",
    "hAB2tQHsi0CGuhxz5HkTI",
    "vAy0awBTwDaxKGHWUdSaP",
    "Jwq6452yNKOVw6WZhvQQd"
  ],
  "data": {},
  "contentHash": "251e06620fd8460fd1cb0a22c14d8411",
  "custom": {}
}
```
