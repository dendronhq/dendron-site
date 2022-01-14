---
id: ySqhrDxAGNSkrQgasNSGY
title: Google
desc: ''
updated: 1640103683545
created: 1638943457215
published: false
---

## Summary

This configuration contains the Oauth Tokens required to connect with Google APIs

## Properties

### accessToken
- description: google doc personal access token
- type: string
- required: true

### refreshToken

- description: google doc refresh token. This will be used to automatically refresh the access token once it passes its expiration time.
- type: string
- required: false

### expirationTime

- description: Expiration Time of the Access Token. It is not necessary to manually modify this value.
- type: "number"
- required: false


