---
id: 8b08d91b-3da8-4b8a-90c5-799d3026ad9b
title: Advanced
desc: ''
updated: 1615431809550
created: 1615417851956
---

## Adding a Custom Domain via CNAME

- this feature is limited to [[environmentalist|dendron.community.roles#environmentalist]] 

### Pre-prequisites 

- have a domain that you own and control the CNAME records for
- have your github repo hooked up to dendron (see [[Creating a site|dendron.topic.managed-publishing.quickstart#creating-a-site]])

### Steps
1. Decide on a CNAME that you want to use. Lets call this YOUR_CNAME
1. Email support@dendron.so with the subject: `CNAME Request: YOUR_CNAME` 
    - optionally, also send us the name with your registrar and we can respond with precise instructions on how to update your DNS settings
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

## Add a Custom Domain via Delegating Name Servers
- this feature is limited to [[environmentalist|dendron.community.roles#environmentalist]] 

### Pre-prequisites 

- have a domain that you own and control the name server records for
- have your github repo hooked up to dendron (see [[Creating a site|dendron.topic.managed-publishing.quickstart#creating-a-site]])

### Steps
1. Email support@dendron.so with the subject: `NS Request: YOUR_DOMAIN` 
    - example: `NS Request: kevin.xyz`
    - optionally, also send us the name with your registrar and we can respond with precise instructions on how to update your DNS settings
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


## Add password protection to your site

### Pre-requisites
- have a [[sprout or higher level plan|dendron.community.roles#environmentalist]] (note: we manage membership on a separate platform. be sure to register with the same email as you do for dendron)

### Steps
1. [[Create a site|dendron.topic.managed-publishing.quickstart#creating-a-site]] to Dendron
1. Before publishing, set the password you would like to use

You site will be available at your given domain with the following credentials:
- username: YOUR_DENDRON_USERNAME
- password: the password you set during creation