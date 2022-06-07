---
id: bye5c98mqeklnp1kaobewly
title: >-
   Implementing Capture/Configure/Control in Dendron, and Dendron Local Config Overrides
desc: >-
  Mihai Constantin (Dendron community member) and Kevin Lin (Founder of Dendron) each present Dendron workflows. 
  Mihai briefly explains the CCC approach to managing actitonable information, and Kevin demonstrates how to apply Dendron's local config override functionality.
updated: 1654608682383
created: 1654607718645
---


## Summary

{{fm.desc}}

- Location: [Discord / Dendron Teatime Voice Channel](https://link.dendron.so/discord)

## Video

<iframe width="1280" height="720" src="https://www.youtube.com/embed/gygpAkb_y78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> Embedded abovve is the [Greenhouse Talk Recording](https://youtu.be/gygpAkb_y78)

## Agenda

> Below is a copy/paste of notes from the description in the YouTube video

### Mihai's talk - Implementing Capture/Configure/Control using Dendron and BuJo

In the May 2022 edition of the Greenhouse Talk series, Mihai Constantin showcases his implementation of Cal Newport's "Capture-Configure-Control" system using Dendron and his own VSCode extension, BuJo. Mihai's presentation slides and notes are available here:https://github.com/mihaiconstantin/capture-configure-control-dendron 

### Kevin's talk - Local Overrides and using private vaults when collaborating and publishing

Dendron founder Kevin Lin demonstrates Dendron's local config override capability for fine-grained control of vault configurations, and using private vaults when collaborating and publishing (Starting at 18:50). Documentation for local config overrides is available here: https://wiki.dendron.so/notes/7tlxi5ejnnb8idhc1943zmp/

Notes for Kevin's talk are included below:

### Collaborating in a shared workspace
- usecase: when using a personal private vault in a larger team workspace
- kevin's dendronrc.yml:
```yml
 workspace:
    vaults:
        # private journals
        -
            fsPath: local/kevin-private
            name: kevin-private
            selfContained: true
```
- technical details 
  - in this example , the local/ directory is added to the team git repo and all its contents are .gitignore'd
  - this makes VSCode recognize these vaults in the file explorer without then being in dendron.code-workspace file

### Publishing while keeping vault private
- usecase: you want to publish exerpts of a private vault without making the private vault public or publishing everything
- instructions:
  - add a dendronrc.yml when publishing that has your private vault
  - use the dendron-cli to initialize and pull down missing workspaces
  - publish
- example: [kevin's repo](https://github.com/kevinslin/kevin-pu...)
  - example page: (https://kevinslin.com/notes/6hen2t6hm...) with private content
  - in this case, I'm using AWS Amplify as the publishing frontend and github as the publishing backend (depending on your choice for frontend/backend, instructions will differ)
  - [amplify file](https://github.com/kevinslin/kevin-pu...)
```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn
    build:
      commands: 
        - echo "add deploy key"
        - eval "$(ssh-agent -s)"
        - ssh-add <(echo "$DEPLOY_KEY" | base64 -d)

        - echo "disable strict host key check"
        - mkdir ~/.ssh
        - touch ~/.ssh/config

        - 'echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config'
        - echo "workspace init"
        - cp dendronrc.publish.yml dendronrc.yml
        - npx dendron workspace init
        - npx dendron workspace pull

        - echo "update dendron"
        - "(test -d .next) && (echo 'updating dendron next...' && cd .next && git reset --hard && git clean -f && git pull && yarn && cd ..) || (echo 'init dendron next' && yarn dendron publish init)"
        - yarn dendron publish export
  artifacts:
    baseDirectory: .next/out
    files:
      - '**/*'
  cache:
    paths:
      - kevin-blog/**/*
      - kevin-public/**/*
      - assets/**/*
      - node_modules/**/*
      - .next/node_modules/**/*
      - .next/.git/**/*
```

## Lookup
- [[Local Config Override|dendron://dendron.dendron-site/dendron.topic.local-config-override]]