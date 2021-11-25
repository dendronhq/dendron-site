---
id: arVaaWSOTK0h6IsCl1FIi
title: Utilities
desc: ''
updated: 1635718101073
created: 1635717727990
---

## Summary

Utility functions are modules with minimal inter-package dependencies that can be used widely within other packages.

Utility functions can be located in any package. They are generally located in `src/utils/`.


## Adding a new utility

When writing a new utility, think about where it would best fit. If the utility is only applicable to the current package or depends on dependencies that only make sense for the current package, then add it only for that package. 

For example, [showInitProgress](https://github.com/dendronhq/dendron/blob/b9c3a8994a3d068dc65ba8afb9f06abbeaa8c195/packages/plugin-core/src/utils.ts#L605) in `plugin-core` is specifically tied to the `vscode.window.showProgress` api and wouldn't be applicable in other packages. 

If the utility is generally useful across multiple places, you should aim to add it to the most accessible package. Package accessibility vary according to the following, from most accessible to least:

- [[pkg.common-all]]: accessible from all packages
- [[pkg.common-server]]: accessible from all packages that run in a nodejs environment
- [[pkg.dendron-engine]]: accessible from all packages requiring the dendron engine

Some other packages that don't quite fix the above scheme:
- [[pkg.common-frontend]]: accessible from all packages that run in a browser only environment
- [[pkg.pods-core]]: accessible from all packages that require pods (currently this is [[pkg.plugin-core]] and [[pkg.dendron-cli]])
