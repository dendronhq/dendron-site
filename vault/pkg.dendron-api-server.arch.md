---
id: fqVcwvX5aNSdr7De
title: Arch
desc: ''
updated: 1636311822114
created: 1626915617598
---

## Static Files

Dendron can fetch static files at custom locations using the [AssetsController](https://github.com/dendronhq/dendron/blob/fe83a99d11feffb0c588a5ae3b23b73b6283c851/packages/api-server/src/modules/assets.ts#L17-L17).

Development: 
- loc: src/Server.ts
- static files:
    - `__dirname/"static"`
    - `dendron-next-server/out/` (if in `dev`) #deprecated - moving views to [[pkg.dendron-plugin-views]]
    - `nextStaticRoot` (if `nextStaticRoot` is set)

### Themes
- API: [assetGetTheme](https://github.com/dendronhq/dendron/blob/16b0e5c59e3ee11530199b5c9a11a58f05e14a93/packages/common-all/src/api.ts#L335-L335)
- Implementation: [Asset module](https://github.com/dendronhq/dendron/blob/1da7714f50acbba312a7e2e7a497f9e53920c96f/packages/api-server/src/routes/assets.ts#L22-L22)

## Note APIs

Note related methods are served by the [note](https://github.com/dendronhq/dendron/blob/260f6ca44425444963e99117fb47c8ed68d02d5e/packages/api-server/src/modules/notes/index.ts#L26-L26) module. 

For the plugin the API client is initialized [here](https://github.com/dendronhq/dendron/blob/1da7714f50acbba312a7e2e7a497f9e53920c96f/packages/plugin-core/src/services/EngineAPIService.ts#L33-L33).

In the [[Dendron Next Server|pkg.dendron-next-server]], it is initialized in the [[Engine redux slice|pkg.dendron-common-frontend.arch#engine-slice]]


## Related

- [[pkg.dendron-engine.arch]]