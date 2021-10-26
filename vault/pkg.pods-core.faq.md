---
id: 7do6HOXdEcGEERHUxZOPj
title: Faq
desc: ''
updated: 1635210934733
created: 1635210541255
---

## FAQ
- NOTE: for terms that look unfamiliar, see [[Concepts|dendron://dendron.dendron-site/pkg.pods-core.concepts]] for an explanation

### How does a pod know when an entry is new or should be linked to a dendron note?

When exporting, we write the id of the destination entry in the note frontmatter (eg. when exporting to airtable, we write the `airtableId` to the note frontmatter)

For all exports, we check if an id record of the destination type exist. If so, we perform an UPDATE. If not, we perform a CREATE and write the id in the frontmatter.

### How does a pod link a note to a pod record?

When exporting a note with a pod, the pod will write a `dendronId` as part of the exported record. The `dendronId` is linked to the unique id of the note.

## Related
- [[Concepts|dendron://dendron.dendron-site/pkg.pods-core.concepts]]
- [enhance(pods): better airtable pod by kevinslin · Pull Request #1457 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1457)
- [writing destination entry](https://github.com/dendronhq/dendron/pull/1457/commits/9956d7dd2e0bb3f27789e1be4f2fdb49fd843ac2)
