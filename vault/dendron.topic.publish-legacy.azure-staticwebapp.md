---
id: 7lVybQm4oETkTUyHRZB0a
title: Publishing as Azure StaticWebApp
desc: ''
updated: 1628757732526
created: 1628752268623
---

This guide describes publishing to Azure StaticWebApp using Azure Devops & Pipelines

## Pre-requisite

- you already have your [[workspace under version control|dendron.topic.git]] and a repository on Azure DevOps
- you have [[configured|dendron.topic.publish-legacy.quickstart.publishing-your-site#configure-your-notes-for-publication]] your `dendron.yml` for publication

## Requirements

The goal is to share my notes with internal colleagues easily. Due to the fact that the vault will contain work related information, there are certain requirements

- No public hosting
- Manually select persons with access
- If someone leaves the company, he should not have access anymore
- Low maintenance & management overhead

## Setup

> Remove any comments in the sample configurations, if you want to copy them. They help humans, but machines might not like them.

### Static Web App

Since we are fully commited to MS Azure at this point, [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) seem to be a good fit for this. It allows you to simply host static websites an integrate them with your build pipelines az Azure DevOps or GitHub.

1. Create a [new static](https://portal.azure.com/#create/Microsoft.StaticApp) web app
2. In the overview, select "Manage Deployment Token" and copy it for later
3. Optional: set a custom domain

### Build pipeline

1. Prepare `package.json` in your repo to contain a proper build script to generate the site.

    ```json
    // package.json
    "scripts": {
        "build": "npx dendron publish init && npx dendron publish export && mv .next/out docs"
    },
    ```

2. Set up the azure build pipeline for that repo. Mine builds every time something is pushed to the `master` branch.

    ```yaml
    // azure-pipelines.yml
    trigger:
    - master

    pool:
    vmImage: ubuntu-latest

    steps:
    - task: AzureStaticWebApp@0
    inputs:
        app_location: '/'
        output_location: 'docs'
        azure_static_web_apps_api_token: '$(web-app-token)'
    ```

    It uses a builder called `Oryx` to automatically detect the project type (via package.json) and calls `npm run build` automatically. I only provided the basic options, if you want, you can override this.
3. Set up the web-app-token. Edit the pipeline on the DevOps site. Select "Variables" and create a new secret variable called `web-app-token`. Paste the token you copied earlier.
4. Run the pipeline. Your site should now be **publically (!)** available. Let's fix that...

### Securing Access

In my environment, every potential reader of my vault has an Active Directory account already. This can be leveraged to create route based access control to the vault. By default, Azure AD, GitHub and Twitter authentication [are supported](https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization).

1. At the root of your repository, create a file called `staticwebapp.config.json`. This is a very basic example, more options can be found [here](https://docs.microsoft.com/en-us/azure/static-web-apps/configuration#example-configuration-file).

    ```json
        // staticwebapp.config.json
    {
        "routes": [
            {
            // redirect /login to the Active Directory endpoint for authentication. 
                "route": "/login",
                "rewrite": "/.auth/login/aad"
            },
            {
            // disable twitter authentication
                "route": "/.auth/login/twitter",
                "statusCode": 404
            },
            {
            // disable github authentication
                "route": "/.auth/login/github",
                "statusCode": 404
            },
            {
            // all AAD authenticated users can access this website.
            // the "authenticated" role can be replaced with others by first creating them on the static web app role management page,
            // then adding the role name to the "allowedRoles" array.
                "route": "/*",
                "allowedRoles": [
                    "authenticated"
                ]
            }
        ],
        "responseOverrides": {
            "401": {
                // If access is denied because of a missing role (=anonymous users), redirect them to login.
                "redirect": "/login",
                "statusCode": 302
            }
        },
        "globalHeaders": {
            "content-security-policy": "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'"
        },
        "mimeTypes": {
            ".json": "text/json"
        }
    }
    ```

2. Update `package.json` to copy `staticwebapp.config.json` to the built site

    ```json
    // package.json
    "scripts": {
        "build": "npx dendron publish init && npx dendron publish export && mv .next/out docs && cp staticwebapp.config.json docs/"
    },
    ```

3. Push all the changes to the repository

> **Optional** for further restricting access:  
> 4. Back in the Azure Portal, go to your Static Web App and select "Role management"  
> 5. Click "Invite", enter the Email address of a colleague/yourself and set the role to `reader`  
> **[Read the docs](https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#roles) for more information.**

After logging in using the generated URL, the user will be allowed to access your vault and will appear in role management. You can remove users and reassign roles here.
