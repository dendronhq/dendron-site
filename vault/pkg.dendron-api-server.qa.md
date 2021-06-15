---
id: b6b77f83-df56-4f76-aeec-bd90b8160d39
title: Qa
desc: ''
updated: 1623085084484
created: 1620948525710
---


## Local

### Debug

### Test:Unit

### Test:Integration:Local
- desc: test lambda before deploying it to cloudwatch
    - deployment takes a while, much easier to debug locally
- located in `__integ__/*.integ.test.ts`
    - eg: `src/parse-auth/__integ__/parse-auth.integ.test.ts`
- execute
    1. deploy infra (run diff) and get asset hash
        - asset hash will look like the following -> `asset.5e8636e24839cdbe2f7d0835c082c6be96e43edc2fd5d383d2b3599fcf1bff1c`
        - located in `dendron-infra/cdk.out/asset.*`
    2. replace asset hash
    ```sh
    cd packages/lambda-auth
    ASSET_HASH={ASSET_HASH}
    env stage=dev ASSET_HASH=$ASSET_HASH yarn test:watch src/parse-auth/__integ__/parse-auth.integ.test.ts -u
    ```
    3. run test

### Test:Integration:Beta
```sh
yarn start:integ
```
#### Initialize the server
```sh
API_SERVER="localhost:3005"
WORKSPACE=""
curl --location --request GET "$WORKSPACE_URL/api/workspace/initialize" \
--header 'Content-Type: application/json' \
--data-raw '{
    "uri": "$WORKSPACE"
}'
```

## Remote

### Debug

### Test:Unit

### Test:Integration
