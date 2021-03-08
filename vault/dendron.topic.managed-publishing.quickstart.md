---
id: 53de5c1e-b20c-4adc-ae48-e1659ecc6d13
title: Quickstart
desc: ''
updated: 1615180361006
created: 1613009015603
---

## Pre-requisites
- a workspace pushed to Github
    - if you don't have one ready, you can use the [starter template](https://github.com/dendronhq/workspace-sample) 
- create an account on https://app.dendron.so

## Creating a site
1. Go to https://app.dendron.so Create an account if you don't already have one. 
1. After you login, use "publish a site from Github"
1. Enter the url of the repo that you want to publish
1. Enter a [[personal access token|dendron.rfc.2-managed-publishing.ref.github-token]]

When your site is ready, you should see the following screen 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Fullscreen_2_23_21__3_39_PM.jpg)

### Fine Print
- Dendron publishes your site at `{username}.dendron.wiki` 

### Limitations 
- NOTE: because managed publishing is in early access, the following restrictions currently apply
<!-- -->
- one site per account
- ~~no custom domains~~
- no multi-vault support

## Deleting a Site
1. Click `Site Settings` on the site widget
2. Click `Delete`


## Adding a custom domain via CNAME

- this feature is limited to [[environmentalist|dendron.community.roles#environmentalist]] 

### Pre-prequisites 

- have a domain that you own and control the CNAME records for

### Steps
1. Decide on a CNAME that you want to use. Lets call this YOUR_CNAME
1. Email support@dendron.so with the subject: `CNAME Request: YOUR_CNAME` 
1. You'll get a response with a custom CNAME entry. Add that to your DNS (instructions to do this will depend on your registrar)
    ```
    _5e6e3c15a64565a3fbd9609d390e06d4.www.awschangelog.com. to _1fcefb9e363e5ebc64d8bc7ad6f31535.nfyddsqlcy.acm-validations.aws.
    ```
1. Update YOUR_CNAME to point to `hosting.dendron.wiki`
1. Email support@dendron.so with the subject: `CNAME Request: YOUR_CNAME - UPDATED` 
1. You'll get a response from support@dendron.so that your account is now ready for custom domains
1. Push to the repository that you have configured with managed publishing. Dendron will now connect your repository with your CNAME
    - NOTE: the link to view the site will still be pointed to `$username.dendron.wiki`. You'll need to manually add your CNAME to see the changes
<!-- 1. Go to `app.dendron.so` and update your published site with the CNAME -->

### Limitations
- custom domains with CNAMES doesn't work with apex domains (these are domains without a prefix - eg. foo.com is an apex domain, www.foo.com is not)
    - if you are interested in using an apex domain, see the guide below

## Add a custom domain via delegating name servers
- this feature is limited to [[environmentalist|dendron.community.roles#environmentalist]] 

### Pre-prequisites 

- have a domain that you own and control the name server records for

### Steps
1. Email support@dendron.so with the subject: `NS Request: YOUR_DOMAIN` 
    - example: `NS Request: kevin.xyz`
1. You'll get a response with a custom NS entry. Add that to your DNS (instructions to do this will depend on your registrar)
    - example response
    ```
    ns-1986.awsdns-48.co.uk.
    ns-738.awsdns-28.net.
    ns-1484.awsdns-52.org.
    ns-298.awsdns-37.com.
    ```
1. Update your domain nameserver with the results 
    - WARNING: if you are currently serving traffic via the domain, this will cause your website to be temporarily un-availble
    - NOTE: save your current name servers as backup for when you want to revert this process
1. Email support@dendron.so with the subject: `NS Request: YOUR_DOMAIN - UPDATED` 
1. You'll get a response from support@dendron.so that your account is now ready for custom domains
1. Push to the repository that you have configured with managed publishing. Dendron will now connect your repository with your CNAME
    - NOTE: the link to view the site will still be pointed to `$username.dendron.wiki`. You'll need to manually add your CNAME to see the changes

