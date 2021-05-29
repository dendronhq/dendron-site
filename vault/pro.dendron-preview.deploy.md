---
id: fb2cfc7e-f71d-4ec6-8c17-90f323a6c075
title: Deploy
desc: ''
updated: 1620748960348
created: 1614031837862
---


### setup mume
```
setRegLocal
cd $MUME_WORKSPACE
gbD integ-publish
gco -b integ-publish

git add .
git commit -m "chore: bump deps"

./scripts/relink.sh
./scripts/bump.sh
```

### setup preview
```sh
cd $PREVIEW_WORKSPACE
# TODO: cehck for links
./scripts/relink.sh

git add .
git commit -m "chore: bump deps"

gbD integ-publish
gco -b integ-publish
scripts/bump-pkg-install.sh
./scripts/publish.sh

gco master
```
