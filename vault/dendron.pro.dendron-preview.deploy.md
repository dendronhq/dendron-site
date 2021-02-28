---
id: fb2cfc7e-f71d-4ec6-8c17-90f323a6c075
title: Deploy
desc: ''
updated: 1614534579472
created: 1614031837862
---


### setup mume
```
cd $MUME_WORKSPACE
gbD integ-publish
gco -b integ-publish
setRegLocal
./scripts/relink.sh
./scripts/bump.sh
```

### setup preview
```
cd $PREVIEW_WORKSPACE
./scripts/relink.sh

git add .
git commit -m "chore: bump deps"

gbD integ-publish
gco -b integ-publish
scripts/bump-pkg-install.sh
```