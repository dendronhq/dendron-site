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

### dendron publish export

- entry: [export](https://github.com/dendronhq/dendron/blob/cba633e4568601485e0cea1ab382e9dd3fbaa305/packages/dendron-cli/src/commands/publishCLICommand.ts#L434)
```ts
execute {
    case "export" {
        isInitialized :=
        if (!isInitialized) @init

        @build
        @export { npm run export }
    }
}

```

## Related
- [[pkg.pods-core.ref.nextjs]]