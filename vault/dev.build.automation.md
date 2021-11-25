---
id: C0nEW2XLVSdb5B4ExbNST
title: Build Automation
desc: ''
updated: 1632731492940
created: 1632726637625
---

## Summary

The weekly build processes are partially automated through Github Actions.

## Releases

1. Early Seed Release - internal preview build available for Environmentalists. Not published to any marketplaces.
1. General Release - general availability of Dendron to all users in the VS Code and Open VSX Marketplaces as [dendron](https://marketplace.visualstudio.com/items?itemName=dendron.dendron).
1. Nightly Development Release - builds nightly for development purposes. Available in the marketplaces as [nightly](https://marketplace.visualstudio.com/items?itemName=dendron.nightly).

### Release Calendar

_Times are in PST._

| Date Time      | Event                                                                              |
| -------------- | ---------------------------------------------------------------------------------- |
| Monday 12:00   | **Release Branch snaps off master. Release Candidate image is generated.**         |
| Monday 19:00   | Target time for release image completion - all testing and fixes complete          |
| Tuesday 21:00  | Target time for publishing general release + Discord Announcement.                 |
| Thursday 12:00 | **Prerelease Branch snaps off master. Prerelease Candidate image is generated.**   |
| Thursday 19:00 | Target time for prerelease image completion - all testing and fixes complete       |
| Thursday 21:00 | Target time for early-seed build announcement to Environmentalist Discord channel. |

- **Bolded Events are Automated**
- Non-Bold Events are done manually

Furthermore, an automated nightly build is kicked off every night at 00:00 (midnight) Tuesday-Saturday.

## Procedures for Each Release Type

### General Release

General Release is performed as follows:
1. `release/*` branch is snapped off of master at 12:00 PST Monday (for example, `release/0.60.0`). This is performed by the [Create Release Branch](https://github.com/dendronhq/dendron/actions/workflows/create-release-branch.yml) pipeline.
1. The [Create Release Image](https://github.com/dendronhq/dendron/actions/workflows/create-release-image.yml) pipeline will trigger off of every push to the `release/*` branch. This will create a .vsix and put the image on AWS S3 as well as create a downloadable artifact in Github Actions. 
1. After smoke testing that image, any fixes should be checked into the `release/*` branch from the previous step.
1. After testing is complete, an admin manually triggers the [Publish Extension Dendron](https://github.com/dendronhq/dendron/actions/workflows/publish-extension-dendron.yml) workflow on the `release/*` branch. This will cause packages to be published to NPM and the extension to be published to the VS Code and Open VSX marketplaces.
1. The pipeline automatically creates a request to pull the changes from `release/*` -> `master`. An admin approves the request and performs the pull.

### Early Seed (Prerelease)

Early Seed is performed similarly to the General Release, but without any external publishing.
1. A `prerelease/*` branch is snapped off of master at 12:00 PST Thursday.
1. After smoke testing that image (or the nightly build from the night before), any fixes should be checked into the `prerelease/*` branch from the previous step.
1. The [Create Prerelease Image](https://github.com/dendronhq/dendron/actions/workflows/create-prerelease-image.yml) pipeline will trigger off of every push to the `prerelease/*` branch. This will create a .vsix and put the image on AWS S3 as well as create a downloadable artifact in Github Actions. 
1. After smoke testing that image, any fixes should be checked into the `prerelease/*` branch from the previous step.
1. Manually raise a pull request to move the changes from `prerelease/*` -> `master`. An admin approves the request and performs the pull.

### Nightly Development Release

This procedure will create a .vsix off of the code in master branch at 00:00 PST (midnight) Tuesday - Saturday. This .vsix will automatically get published to the VS Code and Open VSX Marketplaces under the [nightly](https://marketplace.visualstudio.com/items?itemName=dendron.nightly) version of the extension.

This build is intended for development purposes - you can easily setup this image on your secondary development environment (for example, you can set up VS Codium to use the nightly build of Dendron) so that you can test the current build of master without having to generate a .vsix yourself.

The pipeline that performs this action is called [Publish Extension - Nightly](https://github.com/dendronhq/dendron/actions/workflows/publish-extension-nightly.yml)

## Github Actions Environments and Permissions

Certain actions within the pipelines requires permissions and logins - for example: publishing the extension to a marketplace, publishing packages to NPM, and accessing certain service secrets such as oauth and Sentry uploads.  There are two [environments](https://docs.github.com/en/actions/deployment/environments) that our Github Actions are deployed to:

### plugin-production

This environment has access to all secrets as well as publishing tokens for NPM, VS Code Marketplace, and Open VSX Marketplace. This environment is for **production** only and can possibly create production issues if used incorrectly. This environment is restricted to the `master` and `release/*` branches only.

### plugin-development

This environment has access to service secrets, such as Google OAuth and Sentry. This environment **cannot** deploy to NPM or a marketplace. This environment is generally safe for development purposes.

### Development Notes

To specify an environment for a workflow, specify the environment in the YAML config as follows and refer to an existing pipeline as an example:

```yml
jobs:
  build:
    environment: plugin-production
```
[^1]

[^1]: https://github.com/dendronhq/dendron/blob/a5078935085194ef70b45b08491e3a5dbcc7eb9a/.github/workflows/publish-extension-nightly.yml#L14
