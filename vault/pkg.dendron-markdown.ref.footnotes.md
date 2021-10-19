---
id: xKPjG7igVOCtfNDwA5KVh
title: Footnotes
desc: ''
updated: 1634338653664
created: 1634338185758
---


- packages/engine-server/src/markdown/remark/hierarchies.ts
```tsx
transformer {

    if (insideNoteRef) {
        addFootNotes
    }

}

addFootNotes {
    footnotes := rootNode
    usedFootnotes = []

    visit(root, FOOTNOTE_REFERENCE) {
        (ref, parent, idx) => {
            def = footnotes[ref.id]
            if (def && parent) {
                parent.children[idx] = footnote2html(ref)
                usedFootnotes.add ref
            }
        }
    }

    if usedFootnotes {
        root.children.push breakLine
        root.children.push header("Footnotes")
        root.children.push usedFootnotes
    }
}
```


## Prs
- [fix: footnote rendering in note references by SeriousBug · Pull Request #1520 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1520/files)
