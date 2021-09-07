---
id: e5st4LFLtIwwbQmC6JBaF
title: Quickstart
desc: ''
updated: 1631035209856
created: 1631033401707
---

## Limitations
- cannot be exported as a static site (currently only functions in preview)

## Prerequisites
1. Install latest version of [[dendron.topic.cli#installation]]

## Process

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
    cd .next && npm install && cd ..
    ```
1. Update your dendron.yml metadata
    ```yml
    site:
        usePrettyLinks: true
    ```
1. Build note metadata
    ```sh
    dendron publish build
    ```
1. Preview changes
    ```sh
    cd .next && npm run dev
    ```
