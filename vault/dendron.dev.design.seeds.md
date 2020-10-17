---
id: 6a801f8a-af4a-4665-9ee5-144877e7cad7
title: Seeds
desc: ''
updated: 1602890605707
created: 1602890605707
stub: false
---

# PlantSeed

- file: src/commands/plantSeed.ts

```ts
execute( id ){
    SeedClass := id
    new SeedClass().plan()
}
```

- src/base.ts
```ts
plant {
    config = this.config()
    metadata = @fetch(config)
    @engine.init()
    notes, assets = @prepare
    @writeAssets assets
    @writeNotes nots
}
```
