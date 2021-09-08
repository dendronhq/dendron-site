---
id: 2340KhiZJWUy31Nrn37Fd
title: Basics
desc: ''
updated: 1631132278348
created: 1631132278348
---


### Build Notes
- NOTE: run this command inside your [[workspace|dendron.ref.workspace]]
```sh
dendron publish build
```

### Preview Notes
- NOTE: run this command inside your [[workspace|dendron.ref.workspace]]
- visit [http://localhost:3000](http://localhost:3000) to see your local preview
```sh
cd .next && yarn dev
```

### Export Notes
- NOTE: run this command inside your [[workspace|dendron.ref.workspace]]

```sh
cd .next && yarn export
mv out ../docs 
touch ../docs/.nojekyll
```