---
id: 53dd4b9b-d3a7-4398-9511-b7a281039f9d
title: Dendron-11ty
desc: ''
updated: 1609262652555
created: 1608181727204
---

## Repo
- https://github.com/dendronhq/dendron-11ty

## Install dendron-11ty

```bash
yarn init
yarn add @dendronhq/dendron-11ty
```

```
# start server
env LOG_LEVEL=info dendron-cli launchEngineServer --port 3010 --wsRoot .

# start eleventy
npx den-11ty --wsRoot=. --port 310 --serve
```