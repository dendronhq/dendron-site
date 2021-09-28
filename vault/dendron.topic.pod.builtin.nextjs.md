---
id: 5fGMHyXmErIV9odz01BBH
title: Nextjs
desc: ''
updated: 1632857981875
created: 1628955339442
---

## Summary
- id: `dendron.json`
- coverage
  - ✅ export 

#### Export

Running this pod will create the following files in `dest`.

```
- dendron.json
- fuse.json
- meta/
  - {id}.json
- notes/
  - {id}.html
- notes.json
```

## References

### dendron.json

This is a json version of [[dendron.yml|dendron.topic.config.dendron]]. It's used to enable/disable various language features

### fuse.json

This is a compiled version of Dendron's search index. It is used for search

### meta/{id}.json

These files contain metadata for a [[note|pkg.common-all#noteprops]]. It contains everything excet the note body

### notes/{id}.html

These files contain the HTML rentered note bodies.

### notes/{id}.md

These files contain the markdown note bodies.

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
