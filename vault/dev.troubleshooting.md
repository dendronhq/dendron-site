---
id: dde0d05d-3e4c-498b-90bb-de4e902f02d6
title: Troubleshooting
desc: ''
updated: 1637181863520
created: 1620686948200
---


## Common Issues

### Missing {name} dependency

Sometimes we will add new dependencies to master. In order to pick them up, run the following from the workspace root.

```sh
bootstrap/scripts/bootstrap.sh
```

### Relative import to an inter-workspace dependency

Because Dendron is setup as a [yarn Workspace](https://classic.yarnpkg.com/en/docs/workspaces/), inter-workspace dependencies are all [hoisted](https://github.com/lerna/lerna/blob/main/doc/hoist.md) to the root.

```
.
└── dendron
    ├── packages
    │   ├── A/
    │   ├── B/
    │   └── ...
    └── node_modules
```

This is to de-duplicate packages during development. When publishing to `npm`, every package will have its own `node_modules` folder. The consequence of this setup is that it is possible for package `A` to have a relative dependency on package `B`. While valid during development, this would fail when published. 

What's worse is that VSCode intellisense will often autocomplete with the relative import

```ts
// bad
import { createLogger } from "../../A/lib";

// good
import { createLogger } from "A";
```

To fix this, convert instances of the **bad** example to the **good** one.


## Common Fixes

### Remove the `lib` folder

After a major refactor, you might need to clean out the `lib` folder. For [[Dendron Plugin|pkg.plugin-core]], this would be the `out` folder.
