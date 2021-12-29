---
id: 7XlJ3dRf_3z2GMP9_MC7q
title: Quickstart
desc: ''
updated: 1640785206163
created: 1623883762370
---

## Plugin

### Adding a seed to an existing workspace
_In this example,_ `dendron.dendron-site` _is the name of the seed. Replace this string with your desired seed._

1. Open the command palette and run [[Add Seed to Workspace|dendron.ref.commands#add-seed-to-workspace]]. In the dropdown, select `dendron.dendron-site`
1. Wait for the seed to be imported. After the import, run [[Reload Index|dendron.ref.commands#reload-index]] for Dendron to index the seed. 


## CLI

### Adding a seed to an existing workspace
_In this example,_ `dendron.dendron-site` _is the name of the seed. Replace this string with your desired seed._

1. Navigate to your current workspace
```
cd {workspace}
```

2. Add the seed

```
dendron seed add dendron.dendron-site
```

3. Open the workspace. You should find your workspace initialized with the contents from [wiki.dendron.so](https://wiki.dendron.so/).

4. (Clean up)

```
dendron seed remove dendron.dendron-site
```
