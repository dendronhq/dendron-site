---
id: rXSP43bX1Iyg8mVoEgM4L
title: Arch
desc: ''
updated: 1636915094883
created: 1636915094883
---


## Summary

How pods work

## Lifecycle


```ts
PublishPod {

    execute(opts) {

        config, engine := opts

        validate(config)

        vault = getVaultByNameOrThrow(engine, config.vaultName)
        note = getNoteByName( config.fname, engine.notes, vault, engine.wsRoot)

    }

}
```