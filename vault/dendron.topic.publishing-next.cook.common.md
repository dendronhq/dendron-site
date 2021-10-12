---
id: 2340KhiZJWUy31Nrn37Fd
title: Common
desc: ''
updated: 1633902652278
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
1. Clone the nextjs repository and install dependencies
    ```sh
    dendron publish init
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
dendron publish dev
```

### Export Notes
- NOTE: run this command inside your [[workspace|dendron.ref.workspace]]

```sh
dendron publish export
```

##
