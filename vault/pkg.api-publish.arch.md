---
id: 56959137-a6d5-4858-be19-91dde51f0af9
title: Arch
desc: ''
updated: 1623087017517
created: 1623086873287
---


## Summary
Api Server is divided into two components: public and private

## Public
Public API is publically accessible endpoint. Entrypoint is [packages/api-publish/server/serve-lambda.ts](https://github.com/dendronhq/dendron-backend/blob/main/packages/api-publish/server/serve-lambda.ts#L10:L10). Contains apis to handle redirects, feedback, etc

## Private
Private API requires cognito token to access. Entrypoint is [packages/api-publish/server/routes.ts](packages/api-publish/server/routes.ts). Contains managed publishing apis and everything else. 
