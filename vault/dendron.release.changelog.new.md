---
id: 65b03213-d3d1-46c0-9881-a6280ed9bdeb
title: New
desc: ''
updated: 1602096212957
created: 1602096212957
published: false
nav_exclude: true
---

## [0.12.9](https://github.com/dendronhq/dendron/compare/v0.12.9-alpha.1...v0.12.9) (2020-10-15)

### Features

#### Human Friendly Timestamps (server mode)

Timestamps now have human friendly decorators on the side.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/daily.ts.jpg)

### Enhancements

- **copyAssets configuration**: when publishing, you can now toggle whether you want to copy assets or not
- **dump state**: dendron now has a `Dump State` command which will dump the internal state into the logs (useful for debugging)

### Bug Fixes
- **assets not being copied:** assets not copied on publishing when `assetsPrefix` was set
- **GoUp comman go to wrong note (server mode):** GoUp would sometimes try to open a stub node which would result in an error
- **Multiple workspaces result in bad timestamps (server mode):** Having multiple workspaces of the same vaults open could result in bad timestamps

### Progress

### Other 

### Documentation
((ref: [[dendron.troubleshooting]]#error upgrading:#*))

# --- Template
### Features

### Enhancements

### Bug Fixes

### Progress

### Other 