---
id: 132698b3-cfe0-457f-b7d6-7ddba5cfe096
title: Quickstart
desc: getting started with a project
updated: 1633739170426
created: 1611515667674
---


### Install dendron-11ty

```bash
yarn init
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty-legacy@latest
```

### Start the server in preview

- cd to your [[workspace root|dendron.concepts#workspace]]
```bash
cd {workspace root}
dendron-cli buildSiteV2 --wsRoot .  --stage dev --serve
```

### Build notes for production

```bash
dendron-cli buildSiteV2 --wsRoot .  --stage prod 
```
