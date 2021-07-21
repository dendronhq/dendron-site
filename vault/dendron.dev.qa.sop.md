---
id: BZHowLgEOrWthrWI
title: QA Sop
desc: ''
updated: 1626886457946
created: 1626369413296
---


## Checklist
- [ ] Make sure you have unit tests 

### Case Specific
- [ ] if your tests changes an existing snaphot, make sure that snapshots are [[updated|dendron.dev.qa#updating-test-snapshots]]
- [ ] if you are adding a new language feature (graphically visible in vscode/preview/publishing), make sure that it is included in [test-workspace](https://github.com/dendronhq/dendron/blob/feat/hashtag-tags/test-workspace/dendron.yml#L1:L1). We use this to manually inspect new changes and for auto regression testiing 
