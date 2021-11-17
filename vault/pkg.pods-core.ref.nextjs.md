---
id: AlzFH3ol9ubQhagjAUqq1
title: Nextjs
desc: ''
updated: 1637166636770
created: 1634255542869
---

## NextJsExport Pod
- src/builtin/NextjsExportPod.ts 

## Pseudocode

- loc: src/builtin/NextjsExportPod.ts
```ts

plant {
    copyAssets
}

copyAssets(opts) {
    siteConfig, dest := opts
    destPublicPath := $dest/public

    emptyIfExist(destPublicPath)

    vaults.forEach v => {
        ...
        // copy assets from each vauulut to assets folder of destination
        SiteUtils.copyAssets(vault, destPublicPath)
    }

    if customHeaderPath {
        ...
    }
    ...

}

// src/topics/site.ts
SiteUtils.copyAssets {

}

```


## Related
- [[Nextjs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.nextjs]]