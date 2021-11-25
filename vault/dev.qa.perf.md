---
id: seniincr7Th0cZnc
title: Performance
desc: ''
updated: 1627927534983
created: 1627927226006
---

## Generating Test Notes

We have a simple script for generating Dendron notes. The script is located in
`test-workspace/scripts/randomNote.js`. Running this script will output a
randomly generated note. The length of the note can be adjusted by editing the
file and changing the variable `GENERATED_LENGTH` at the start of the file.

You can use the script like:

```sh
# For 1 file
node scripts/randomNote.js > vault/my.generated.note.md
# For 10 files
for i in $(seq 1 10); do node scripts/randomNote.js > vault/my.generated.note.$i.md ; done
```
