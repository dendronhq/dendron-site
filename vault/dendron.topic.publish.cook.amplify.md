---
id: GltYtZ7YCzEyV10uwhUg9
title: Amplify
desc: ''
updated: 1638750372607
created: 1631319273247
published: false
---

## Summary

How to publish Dendron pages to AWS amplitude. 

1. Create a file `amplify.yml`
  ```yml
  version: 1
  frontend:
    phases:
      preBuild:
        commands:
          - yarn
      build:
        commands: 
          - "(test -d .next) && (echo 'updating Dendron next...' && cd .next && git reset --hard && git clean -f && git pull) || (echo 'init Dendron next' && npx dendron publish init)"
          - "(echo 'init Dendron next' && npx dendron publish init)"
          - "echo 'install deps...' && cd .next && yarn && cd .."
          - "echo 'build notes...' && npx dendron publish build"
          - "echo 'export...' && cd .next && yarn export"
    artifacts:
      baseDirectory: .next/out
      files:
        - '**/*'
    cache:
      paths:
        - node_modules/**/*
        - .next/node_modules/**/*
        - .next/.next/**/*
        - .next/.git/**/*
  ```
1. Go to https://us-west-2.console.aws.amazon.com/amplify/home?region=us-west-2
  - NOTE: this example uses `us-west-2. Use the region that is closest to your location
1. Connect your repo
  - https://www.loom.com/i/f537518c14d844d4aefad67118404f5f

## Cook

### Create redirects when migrating existing site

```json
    {
        "source": "/notes/<text>.html",
        "target": "/notes/<text>/",
        "status": "301",
        "condition": null
    },
    {
        "source": "/<*>",
        "target": "/index.html",
        "status": "404",
        "condition": null
    },
    {
        "source": "/sitemap.xml",
        "target": "/sitemap.xml",
        "status": "200",
        "condition": null
    }
```
