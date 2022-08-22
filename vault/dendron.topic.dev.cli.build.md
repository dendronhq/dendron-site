---
id: 9khq4jjoc5vmik7nos0q5am
title: Build
desc: ''
updated: 1661122118093
created: 1661122075768
---

Build vsix for a given upgradeType [^upgrade]
Runs the build from end to run

Options:
- --fast: when building fast mode, the following is skipped:
  - initial type checking
  - restoring `package.json` and `plugin-core` to original state
  - do not rebuild assets when running [[sync_assets|dendron://dendron.docs/etc.cli#sync_assets]]
  - do not upload source map to sentry
