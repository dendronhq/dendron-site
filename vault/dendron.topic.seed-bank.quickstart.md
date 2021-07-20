---
id: 7XlJ3dRf_3z2GMP9_MC7q
title: Quickstart
desc: ''
updated: 1623883884333
created: 1623883762370
---

## Adding a seed to an existing workspace
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