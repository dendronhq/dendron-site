---
id: GltYtZ7YCzEyV10uwhUg9
title: Amplify
desc: ''
updated: 1632441322002
created: 1631319273247
---

## Summary

How to publish Dendron pages to AWS amplitude. 

Create a file `amplify.yml`


```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn
    build:
      commands: 
        - "(test -d .next) && (echo 'updating dendron next...' && cd .next && git reset --hard && git clean -f && git pull) || (echo 'init dendron next' && npx dendron publish init)"
        - "(echo 'init dendron next' && npx dendron publish init)"
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

## Cook

### Create redirects when migrating existing site

```json
[
    {
        "source": "https://{YOUR_DOMAIN}.com",
        "target": "https://www.{{YOUR_DOMAIN}}.com",
        "status": "301",
        "condition": null
    },
    {
        "source": "/notes/<text>.html",
        "target": "/notes/<text>/",
        "status": "301",
        "condition": null
    },
    {
        "source": "/<*>",
        "target": "/index.html",
        "status": "404-200",
        "condition": null
    }
]
```