---
id: 4xE1QfsVQAvD6MqtkqoV8
title: '05'
desc: ''
updated: 1630942729067
created: 1630942729067
---
<!-- Output copied to clipboard! -->

#  Office hours

## 09-September 

## Company Updates

* More fuzzy lookup

* NextJS Publishing in Beta

* Autocomplete and refactor for user tags

* Lots of other improvements

## Discussions

## Questions

* Getting started with nextjs publication

* [https://wiki.dendron.so/notes/PgwAXFfotfgpFVqHQRlBl.html](https://wiki.dendron.so/notes/PgwAXFfotfgpFVqHQRlBl.html)

  + where in the code is the nav pane's contents put together?

  + where is the call to that code?

  + can you share your tsconfig.json file, (think I'd need sourcemap, probably others)

  + from "...node resources need updating" for site preview I figure a lot of the code is run by node, can I run it under the debugger to help figure it out

  + if so, what is the set up I need?

## ## Using NextJS Tempalte

```sh

echo "clone git repo for nextjs..."

git clone github.com:dendronhq/nextjs-template.git

echo "create metadata for nextjs..."

dendron exportPod --podId dendron.nextjs --config="dest=/Users/kevinlin/code/dendron/packages/nextjs-template"

echo "preview locally"

cd nextjs-template

yarn dev

echo "generate export"

yarn export

```
