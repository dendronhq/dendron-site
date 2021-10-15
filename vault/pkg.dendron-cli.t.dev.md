---
id: Y6158dgCAUIuWKSsFYZg4
title: Dev
desc: ''
updated: 1634320634778
created: 1634320610394
---

## Build
Details of the build command

- prepPublish[Local|remote]
- runTypeCheck
- bumpVersion
- publishVersion
- syncAssets
    - buildNextServer
    - syncStaticAssets
        ```sh
        cp dendron-next-server/out plugin-core/assets/static
        cp dendron-next-server/assets/js plugin-core/assets/static
        cp api-server/assets/js plugin-core/assets/static
        ```
- prepPluginPkg
- installPluginDependencies
    ```sh
    rm package.json
    cd packages/plugin-core && yarn --no-lockfile
    ```
- packagePluginDependencies
- setRegRemote
- restorePluginPkgJson
