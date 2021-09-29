---
id: 2340KhiZJWUy31Nrn37Fd
title: Common
desc: ''
updated: 1632521464960
created: 1631132278348
---

### Setup Dendron CLI

```
npm init -y 
npm install --save @dendronhq/dendron-cli
```

### Setup Notes
1. Update `.gitignore`
    ```sh
    echo .next >> .gitignore
    ```
1. Clone the nextjs repository
    ```sh
    npx dendron publish init
    ```
1. Install dependencies
    ```sh
    cd .next && yarn && cd ..
    ```

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
```

##
