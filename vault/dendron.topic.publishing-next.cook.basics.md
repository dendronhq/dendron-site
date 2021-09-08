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
cd .next && yarn dev && cd ..
```

### Export Notes
- NOTE: run this command inside your [[workspace|dendron.ref.workspace]]

```sh
cd .next && yarn export
mv out ../docs 
touch ../docs/.nojekyll
```

### Setup Notes
1. Update `.gitignore`
    ```sh
    echo .next >> .gitignore
    ```
1. Clone the nextjs repository
    ```sh
    dendron publish init
    ```
1. Install dependencies
    ```sh
    cd .next && yarn && cd ..
    ```
1. Update your dendron.yml metadata
    ```yml
    site:
        usePrettyLinks: true
    ```
