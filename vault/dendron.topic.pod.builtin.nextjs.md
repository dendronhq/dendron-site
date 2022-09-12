---
id: 5fGMHyXmErIV9odz01BBH
title: Next.js Pod
desc: ''
updated: 1662941084648
created: 1628955339442
---

## Summary
- id: `dendron.json`
- coverage
  - ✅ export 

#### Export

Running this pod will create the following files in `dest`.

```
- .env.production
- data
    * dendron.json
    * fuse.json
    * meta/
        - *.json
        - 403.json
        - root.json
    * notes/
        - *.html
        - *.md
    * notes.json
    * tree.json
- public
    - assets/
    - data/   # this is a copy of whats in `data`
```

## References

### .env.production
This is used to pass variables to next template. If [[dendron.topic.publish.config.assetsPrefix]] is set, it is set in here

### dendron.json

This is a JSON version of [[dendron.yml|dendron.ref.config]]. It's used to enable/disable various language features

### fuse.json

This is a compiled version of Dendron's search index. It is used for search

### meta/{id}.json

These files contain metadata for a [[note|pkg.common-all#noteprops]]. It contains everything excet the note body

### notes/{id}.html

These files contain the HTML rentered note bodies.

### notes/{id}.md

These files contain the Markdown note bodies.

### notes.json

Used to generate the navbar and other components of the final site

```ts
export type NoteData = {
  /**
   * All notes that are published
   */
  notes: NotePropsDict;
  /**
   * All top level domains that are published
   */
  domains: NoteProps[];
  /**
   * The note for the home page
   */
  noteIndex: NoteProps;
  /**
   * All vaults in the workspace
   */
  vaults: DVault[];
};
```
