---
id: 53de5c1e-b20c-4adc-ae48-e1659ecc6d13
title: Quickstart
desc: ''
updated: 1613066230925
created: 1613009015603
---

## Pre-requisites
- push a Dendron workspace to Github
- have an account on https://app.dendron.so

## Instructions
1. Go to https://app.dendron.so 
1. After you login, use "publish a site from Github"
1. Enter the url of the repo that you want to publish
1. Enter a [[personal access token|dendron.rfc.2-managed-publishing.ref.github-token]]

## Details
- Dendron publishes your site at `{username}.dendron.wiki` 

## Limitations 
- NOTE: because managed publishing is in early access, the following restrictions currently apply
<!-- -->
- one site per account
- no custom domains
- no multi-vault support
- the home page doesn't update the deploy status - usually deployments are ready ~20s (you will need to manually refresh the page to have the status update)