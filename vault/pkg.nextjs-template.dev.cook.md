---
id: T6y6QwCzbJQqgyQjSndEu
title: Cook
desc: ''
updated: 1632266859693
created: 1631231560375
---

### Work with local version of NextJS

#### Initialize
- in a different shell
![[dendron.dev.cook.common#switch-to-local-npm,1:#*]]

```sh
git clone $NEXTJS_REPO .next
cd .next
yarn
```

#### Export

```sh
yarn export
[[ -d ../docs ]] && rm -r ../docs
mv out ../docs 
touch ../docs/.nojekyll
```

- when checking with github
```sh
git add . && git commit -m "update" && git push
```