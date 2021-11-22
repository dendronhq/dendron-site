---
id: ae4a0c98-e2ea-47e0-8a20-016eba3424be
title: 2 Managed Publishing
desc: ''
updated: 1615745443004
created: 1611853430165
---

## Goal

Make it easy for everyone to publish a [digital garden](https://www.kevinslin.com/)

## Tenants
- publishing should be accessible to everyone

## Product

Provide a [netlify](https://www.netlify.com/) like service focused solely on Dendron based content.

This service will let you selectively publish your notes using Dendron itself without having to configure a third party host like netlify or github pages.
Pages will be hosted and published using [AWS](aws.amazon.com/) and will be [deployed globally](https://aws.amazon.com/cloudfront/features/) across the AWS edge network. 

Your published page will have its own subdomain under `{username}.dendron.wiki`. We'll add support for custom domains early February as well. 

## Features
- [x] publish to dendron subdomain
- [x] SSL certs
- [x] global deployments using [worldwide CDN](https://en.wikipedia.org/wiki/Content_delivery_network)
- [x] github based publishing

## Upcoming Features
- [x] custom domain names [2021-03-14 11:03]
- [x] protect published notes with a username/password [2021-03-14 11:03]
- [ ] whitelist individuals by email when sharing published notes
- [ ] create a secure link to a page (could be published or not-published)
- [ ] get detailed analytics for a page
- [ ] support comments underneath the page
- **{your suggestion here}**

## Pricing
- Publishing one public workspace will be free. 
- Publishing with additional features will have a nominal monthly fee with tiered pricing depending on feature set

## FAQ

### What if I want to publish using my own provider?

Dendron generates static assets and you'll always be able to publish using any host that can serve static content (aka all of them). Dendron managed publishing is about giving users a simplified one click solution to selectively publish notes that is maintained to be always up to date with the latest Dendron release. 

