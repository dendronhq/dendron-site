---
id: 92a4f470-1803-4dce-8872-1a7009d8500b
title: Pods
desc: ''
updated: 1602714464908
created: 1602714464908
stub: false
---

# Pods

## Export Pod

- execute
```sh
dendron-cli export-pod
```

- src/commands/pod.ts
```ts
enrichArgs {
    podClass :=
    config = getPodConfig :=
    if !config {
        throw "no-config"
    }
}

execute {
    podClass, config :=
    new podClass().plant(config)
}
```

- src/builtin/JSONPod.ts
```ts
plant {
    cleanConfig :=
    payload = prepareForExport()
    destPath :=
    write(destPath, payload)
}
```

- src/base.ts
```ts
prepareForExport {
    @initEngine
    nodes :=
    ...
    return nodes
}
```