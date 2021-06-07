---
id: 4039fc46-06b2-4f83-b817-fc490bafbcb3
title: "14 - The Seed Registry"
desc: ''
updated: 1623024700568
created: 1623017672501
---

## Goals

The Seed Registry is an open database of [[workspaces|dendron.ref.workspace]] (seeds) that anyone can access and contribute to. 

## Context

Dendron's [mission](https://handbook.dendron.so/notes/8989a93d-8dde-4a51-bb8d-2aad761c93a1.html) is to help **people** organize and make sense of information. To that end, we want to make sure that both existing knowledge and newly created knowledge is not just easily accessible but comes with a degree of modularity that it becomes possible to compose existing information and build upon it. 

When working with code, the concepts of modules and packages are standard in every modern programming language - these abstractions make it possible to package frequently used code into re-usable modules. 

The Dendron Seed Registry is an effort to do the same with knowledge.

## [Lookup](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup)
Prior work that inspred this RFC
- [npm](https://docs.npmjs.com/about-npm)

## Proposal

The Seed Registry needs to define the following components:
1. specs
    - standard metadata for declaring a module and its dependencies
    - standard endpoint to retrieve said metadata
    - standard methods to perform registry operations (add/remove/query)
2. registry
    - an endpoint for hosting the registry metadata
    - an endpoint for performing API calls against the registry
    - an endpoint for hosting the module artifacts
3. client
    - a client that can talk to the registry endpoint


## Details

### Specs

See [[configuration|dendron.rfc.14-seed-registry.configuration]] for how metadata is stored in seeds

### Registry
See [[Registry|dendron.rfc.14-seed-registry.registry]] for more information

### Client
Registry client methods will be added to the [[dendron CLI|dendron.topic.cli]] under the `registry` namespace, or `reg` for short. 

We will also add additional methods to the [[workspace command|dendron.topic.cli#workspace-command]] to be able to intiialize a workspace from an existing seed.

See [[methods|dendron.rfc.14-seed-registry.methods]] for the list of supported methods

## Motivating Example

You are interestd in developing your own vscode plugin but don't know where to start. You have a workspace setup already. The following shows how to go about adding a hypothetical `vscode` seed using the CLI (a similar workflow will be availble when using the plugin )

1. Look for any existing seeds to do with vscode using the CLI
    ```sh
    dendron reg search vscode

    name: dendron.vscode
    desc: official vscode docs
    ```
1. Add the docs to your workspace
    ```sh
    dendron reg add dendron.vscode

    dendron.vscode has been added to your workspace
    ```
1. Inspect the schema
    ```sh
    dendron reg schema dendron.vscode

    # name of the schema 
    project:
        nodes:
            code: 
              quickstart: getting started
              api: namespace(true)
              ...
    ```
1. Query the notes
    ```sh
    dendron note lookup --query code.quickstart
    ```


## Topics

### Transitive Dependencies
- [[Next Phase ⏩|dendron.ref.status#next-phase-]]

Lets say seed A depends on seed B and you install seed A

Dendron will pull in all dependencies of seed B as well as seed A

### Publishing (website)
- [[Next Phase ⏩|dendron.ref.status#next-phase-]]

By default, publishing is disabled for seeds. If you want to publish a seed, you can set its [[visibility|dendron.rfc.14-seed-registry.configuration#visibility]] to `public`. At this point, the standard publishing [[configuration|dendron.topic.publishing.configuration]] rules appyl.

When you publish a seed, we will automatically add a banner at the top of any page that comes from a seed.

```
This page is originally published by {author} and licensed under {license}
```

You can disable this behavior by setting [[addAttribution|dendron.rfc.14-seed-registry.configuration#addattribution]] to `false`.


## FAQ
![[dendron://dendron-site/dendron.rfc.14-seed-registry.faq]]

## Phases

### Phase I
- [ ] add registry [[configuration|dendron.rfc.14-seed-registry.configuration]] to `dendron.yml`
- [ ] add registry [[methods|dendron.rfc.14-seed-registry.methods]] to dendron cli
- [ ] add seed resolution logic when dendron initializes workspaces with seeds

### Phase II
- [ ] be able to publish seed vaults when publishing a website
- [ ] convert seed registry from static file to API endpoint
- [ ] support a self serve method of publishing to the registery

### Future
- [ ] versioning
- [ ] support hosting a web version of seeds in the registry
- [ ] dedup shared dependencies

## Discussion

All discussions and feedback should be left in this [discussion thread](https://wiki.dendron.so/notes/4039fc46-06b2-4f83-b817-fc490bafbcb3.html)

## TradeOffs
- Dendron dependency management is modelled after npm `node_modules`. The benefit is the relatively simple implementation but you can run into latency [issues](https://next.yarnpkg.com/features/pnp) with this approach

## Next
- Automatically add correct attribution when publishing work containing third party seeds

## Related
- [[Dendron 2021 Roadmap|dendron.roadmap#context]]
