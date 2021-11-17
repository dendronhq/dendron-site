---
id: WicXmkqoMPiRJCqN0zbO6
title: Internal
desc: ''
updated: 1637166742000
created: 1637166004371
---

## nextjs-template build

```
sync:theme
```


## dendron publish build

- src/commands/publishCLICommand.ts

```ts
build {
    _buildNextData
}

_buildNextData {
    cli = ExportPodCLICommand
    cli.enrichArgs(NextjsExportPod)
    cli.execute
}
```

## dendron publish dev

```ts
dev {
    build
    startNextDev {
        npm run dev
    }
}
```

## Related
- [[pkg.pods-core.ref.nextjs]]