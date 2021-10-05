---
id: 31f745c3-73e0-4264-9858-099a826e4fd1
title: Ops
desc: |
  Diagnose issues
updated: 1628346722823
created: 1621830830888
---


### inspect bundles
```
# see bundle
cd ~/.vscode-insiders/extensions/dendron.dendron-$version/
cd ~/.vscode-oss/extensions/dendron.dendron-0.42.1-alpha.0/
```

### push to integ

```
git push --set-upstream origin integ-publish --force
```

### Diagnostics?
- [ ] is the subprocess running? [[logs|pkg.plugin-core.ops.logs#start-engine-process]]
- [ ] did note indexing finish successfully? [[logs|pkg.plugin-core.ops.logs#finish-indexing-notes]]
