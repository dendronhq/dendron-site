---
id: 7lVybQm4oETkTUyHRZB0a
title: Azure Static Web Apps
desc: ''
updated: 1645042906562
created: 1628752268623
---

This guide describes publishing Dendron notes to [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) using [Azure Devops](https://docs.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?view=azure-devops) and [Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops).

## Why

From the Microsoft docs:

> Azure Static Web Apps is a service that automatically builds and deploys full stack web apps to Azure from a code repository. The workflow of Azure Static Web Apps is tailored to a developer's daily workflow. Apps are built and deployed based off code changes.

In this example, the goal is to share your notes with internal colleagues easily via an published Dendron website. If your team already uses Azure, this may be an attractive option.

Due to the fact that the vaults will contain work related information, there are certain requirements:

- No public hosting
- Manually select persons with access
- If someone leaves the company, they should not have access anymore
- Low maintenance and management overhead

## Prerequisites

- You already have your [[workspace under version control|dendron://dendron.dendron-site/dendron.topic.git]] and a repository on Azure DevOps.
- You have [[configured|dendron://dendron.dendron-site/dendron.topic.publish.config]] your `dendron.yml` for publication.

## Setup

> Remove any comments in the sample configurations, if you want to copy them. They help humans, but machines might not like them as JSON usually doesn't expect comments.

### Create an Azure Static Web App

1. Create a [new static](https://portal.azure.com/#create/Microsoft.StaticApp) web app.
1. In the overview, select "Manage Deployment Token" and copy it for later.
1. Optional: Set a custom domain.

### Build pipeline

1. Prepare `package.json`, in the root of you Dendron workspace repo, to contain a proper build script that generates the site.

    ```json
    // package.json
    "scripts": {
        "build": "npx dendron publish init && npx dendron publish export && mv .next/out docs"
    },
    ```

1. Set up the Azure build pipeline for that repo. The example will rebuild the website every time a new commit is pushed to the `master` branch.

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

    This configuration uses a builder called `Oryx` to automatically detect the project type (via `package.json`) and calls `npm run build` automatically. This is a basic layout that can be modified for your use case.

1. Set up the web-app-token. Edit the pipeline on the DevOps site. Select "Variables" and create a new secret variable called `web-app-token`. Paste the token you copied earlier.
1. Run the pipeline. Your site should now be **publically (!)** available. Let's fix that...

### Securing Access

In this example, every potential reader of the vault has an Active Directory account already. This can be leveraged to create role based access control (RBAC) to the vault. By default, Azure AD, GitHub and Twitter authentication [are supported](https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization).

We'll be limiting access only to Azure AD, in this example, but the Microsoft Azure documentation can be referrenced if wanting to learn more about other forms of authentication.

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

1. Update `package.json` to copy `staticwebapp.config.json` to the built site.

    ```json
    // package.json
    "scripts": {
        "build": "npx dendron publish init && npx dendron publish export && mv .next/out docs && cp staticwebapp.config.json docs/"
    },
    ```

1. Push all the changes to the repository.

After logging in using the generated URL, the user will be allowed to access your vault and will appear in role management. You can remove users and reassign roles here.

## Optional: Further restricting access

If wanting to further restrict access to your Azure Static Web Apps:

1. Back in the Azure Portal, go to your Static Web App and select "Role management"
1. Click "Invite"
1. Enter the email address of a colleague/yourself and set the role to `reader` 

[Read the docs](https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#roles) for more information on RBAC in Azure Static Web Apps.

## Upgrading

![[dendron://dendron.dendron-site/dendron.topic.publish.cook.common#upgrading,1:#*]]

### Congratulations, you just published your notes 🌱
