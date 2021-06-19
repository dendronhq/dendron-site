---
id: 024b33fa-9b8d-472a-b793-4dabcaabf3d8
title: Deploy
desc: ''
updated: 1622130581555
created: 1622130571179
---


## Static Build

When your ready to ship a UI related feature, export the static assets. 

```
yarn build
```

Afterwards, update `dendron.yml` in your test workspace

```yml
dev:
  # use CLI based engine instead of creating a new one
  engineServerPort: 3005
  # replace ROOT with absolute location of your workspace 
  nextStaticRoot: /{ROOT}/packages/dendron-next-server
```

You should see the following line in the logs
