---
id: 132698b3-cfe0-457f-b7d6-7ddba5cfe096
title: Quickstart
desc: getting started with a project
updated: 1611515835789
created: 1611515667674
---


### Install dendron-11ty

```bash
yarn init
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty@latest
```

### Start the server in preview

- cd to your [[workspace root|dendron.concepts#workspace]]
```bash
cd {workspace root}
npx dendron-cli buildSiteV2 --wsRoot .  --stage dev --serve
```

### Build notes for production

```bash
npx dendron-cli buildSiteV2 --wsRoot .  --stage prod 
```