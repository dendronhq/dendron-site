---
id: 014c5e7a-39f7-40a2-bc24-4c3e56e98d26
title: Quickstart
desc: getting started with a project
updated: 1620434422108
created: 1620434055302
---

## Summary

### Start Server
```sh
yarn start:integ
```

### Initialize the server
```sh
API_SERVER="localhost:3005"
WORKSPACE=""
curl --location --request GET "$WORKSPACE_URL/api/workspace/initialize" \
--header 'Content-Type: application/json' \
--data-raw '{
    "uri": "$WORKSPACE"
}'
```