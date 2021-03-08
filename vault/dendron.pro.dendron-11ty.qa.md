---
id: feb740f8-0d7b-4bc6-83bb-85886fe779f6
title: Qa
desc: ''
updated: 1612908712863
created: 1612903299090
---

## Test with a single file


- update the `dendron.yml` file
```yml
...
site:
    siteHierarchies:
        - foobar
```

- start the dendron workspace
- create `foobar.md` with the frontmatter
- add whatever syntax you want to test
- run the CLI
![[dendron.pro.dendron-11ty.quickstart#start-the-server-in-preview,1:#*]]