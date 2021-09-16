---
id: YdrjLvj2kSmWYsuL
title: Dev
desc: |
  Development related
updated: 1631752416811
created: 1626364788131
---

## Summary

How 

## 


## Cook

### Adding a new plugin
- [feat: show unreferenced links in backlink panel by hikchoi · Pull Request #909 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/909)

### Modify 
Markdown related features are documented [here](https://wiki.dendron.so/notes/69746008-2fa0-4036-b443-b15076a3d6bf.html)

In order to override this behavior, we have a transformer plugin that can make adjustments to the AST before converting to output format [here](https://github.com/dendronhq/dendron/blob/59a949d2b5b541efb283e851060636b108eb5a98/packages/engine-server/src/markdown/utilsv5.ts#L228-L228). This is probably where a fix to the table issue would be implemented