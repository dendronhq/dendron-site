---
id: 9kv4WWDWCooECX9yb36f3
title: Migration
desc: ''
updated: 1630773350020
created: 1630773233816
---

## Summary

How setting migrations happen

## Overview

```ts
if isActive {
  runMigrationsIfNecessary {
  }
}
```

```ts
runMigrationsIfNecessary {
  if shouldRunMigration
    MigrationServce.applyMigrationRules
}
```
