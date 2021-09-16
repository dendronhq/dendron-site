---
id: GltYtZ7YCzEyV10uwhUg9
title: Amplify
desc: ''
updated: 1631748264284
created: 1631319273247
---

## Summary

How to publish Dendron pages to AWS amplitude


```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn
    build:
      commands: 
        - "[[ -d .next ]] && (echo 'updating dendron next...' && cd .next && git reset --hard && git clean -f && git pull) || (echo 'init dendron next' && npx dendron publish init)"
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
```