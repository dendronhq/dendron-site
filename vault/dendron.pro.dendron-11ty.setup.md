---
id: 6f3bc07c-5232-4148-a42f-bac9c2fe12f6
title: Setup
desc: ''
updated: 1612903363450
created: 1611515613711
---

## Getting started

### 1. Requirements

![[dendron.dev.setup#1-requirements,1:#*]]


### 2. Clone and Install

```bash
git clone https://github.com/dendronhq/dendron-11ty
cd dendron-11ty
npm install
```

### 3. Run 11ty

![[dendron.pro.dendron-11ty.quickstart#start-the-server-in-preview]]

## Running with dendron monorepo

Dendron depends on a bunch of packages from the dendron monorepo. If you already have it installed and are working on monorepo components, you can link those components with 11ty to have live updates. 

### 1. Setup Monorepo
- see instructions [[here|dendron.dev.setup]]

### 2. Create links to the monorepo packages

Run `yarn link` inside the following packages
* @dendronhq/engine-server
* @dendronhq/common-server
* @dendronhq/common-all


### 3. Link monorepo to 11ty

Inside dendron-11ty, execute `./scripts/link.sh` file

- NOTE: don't forget to watch the monorepo to compile changes

![[dendron.dev.setup#watch-monorepo,1:#*]]

### 4. Run Dendron Cli

You can run this CLI on any valid workspace. There's a test workspace in `dendron-11ty` that is good to test against
```sh
cd dendron-11ty/fixtures/test-workspace
```
![[dendron.pro.dendron-11ty.quickstart#start-the-server-in-preview,1:#*]]
