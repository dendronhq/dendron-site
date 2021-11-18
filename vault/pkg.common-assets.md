---
id: eMcjzkqYCRdxggs7o7nqm
title: Common Assets
desc: ''
updated: 1637256893410
created: 1637163989716
---

## Summary

This packages hold assets for Dendron Views. During the [[build step|dendron://dendron.dendron-site/pkg.plugin-core.quickstart#^OI7k28ZBdX9W]], assets from this package are concatenated and copied into [[pkg.nextjs-template]] and [[pkg.dendron-plugin-views]] (TODO: need to refactor logic from `dendron-plugin-views`, currently assets are being built separately there).

- NOTE: we are currently moving away from `dendron-next-server` and transferring all css and assets from it to `common-assets`
    - last updated: 2021-11-18


## Layout

- common-assets
    - assets/
        - css/
            - prism/
                - dark.css
                - light.css
            - antd/
                - dark.css
                - light.css
            - ...

## LifeCycle

1. User runs `yarn setup` in Dendron monorepo
1. The last step after all packages are build, is running
    ```sh
    dendron dev sync_assets --fast
    ```
    - this runs the following
    ```ts
    // loc: dendron-cli/src/commands/devCLICommand.ts
    // Takes assets from different monorepo packages and copies them over to the plugin
    syncAssets {
        // sync assets to plugin
        syncStaticAssets 
        syncStaticAssetsToNextjsTemplate
    }
    ```

## Related
- [[Plugin Views - Build Styles|dendron://dendron.dendron-site/pkg.dendron-plugin-views.ref.build-styles]]
