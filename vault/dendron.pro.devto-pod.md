---
id: c6adf905-2f74-4235-a2dc-c85b4711ea4a
title: Dev.to Pod
desc: ''
updated: 1614313013455
created: 1614191155933
---

## Summary

This pod lets you publish your Dendron notes to dev.to

- id: `dendron.devto`
- [github](https://github.com/dendronhq/devto-pod)
- coverage
  - ❌ export 
  - ❌ import
  - ✅ publish

## Instructions

### Installation
```sh
cd {workspace}
npm init -y 
npm install -g dendron-cli
npm install --save @dendronhq/devto-pod
```

### Usage

The below command will publish $FILE_NAME to Dev.To

```sh

API_KEY={API_KEY}
FILE_NAME={FNAME}

cd {workspace}
dendron-cli publishPod --wsRoot . --podId dendron.devto --podPkg @dendronhq/devto-pod --podSource custom --config fname=$FILE_NAME,vaultName=vault,dest=stdout,apiKey=$API_KEY
```

## Configuration

- apiKey: the API Key of your dev.to account. You can follow the instructions [here](https://docs.forem.com/api/#section/Authentication) to get it

## Metadata

The following values are used when publishing your post.

* title: string
    - source: frontmatter, title field
    - note title
* tags?: string[];
    - source: frontmatter, `tags` field
* canonical_url?: string;
    - source: `dendron.yml`, obtained from `site.site_url`