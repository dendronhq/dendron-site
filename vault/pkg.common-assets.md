---
id: eMcjzkqYCRdxggs7o7nqm
title: Common Assets
desc: ''
updated: 1637177820804
created: 1637163989716
---

## Summary

This packages hold assets for Dendron Views. During the [[build step|dendron://dendron.dendron-site/pkg.plugin-core.quickstart#^OI7k28ZBdX9W]], assets from this package are concatenated and copied into [[pkg.nextjs-template]] and [[pkg.dendron-plugin-views]] (TODO: need to refactor logic from `dendron-plugin-views`)

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

## Pseudocode

- src/commands/devCLICommand.ts
```ts
// Takes assets from different monorepo packages and copies them over to the plugin
syncAssets {
    buildNextServer
    buildPluginViews
    syncStaticAssets
}
```

## Related
- [[Plugin Views - Build Styles|dendron://dendron.dendron-site/pkg.dendron-plugin-views.ref.build-styles]]
