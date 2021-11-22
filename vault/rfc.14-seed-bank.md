---
id: 4039fc46-06b2-4f83-b817-fc490bafbcb3
title: 14 - The Seed Bank
desc: ''
updated: 1629677234653
created: 1623017672501
---
## Goals

The Seed Bank is an open database of [[workspaces|dendron.topic.workspace]] (seeds) that anyone can access and contribute to. 

## Context

Dendron's [mission](https://handbook.dendron.so/notes/8989a93d-8dde-4a51-bb8d-2aad761c93a1.html) is to help **people** organize and make sense of information. To that end, we want to make sure that both existing knowledge and newly created knowledge is not just easily accessible but comes with a degree of modularity that it becomes possible to compose existing information and build upon it. 

When working with code, the concepts of modules and packages are standard in every modern programming language - these abstractions make it possible to package frequently used code into re-usable modules. 

The Dendron Seed Bank is an effort to do the same with knowledge.

## [Lookup](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup)

Prior work that inspred this RFC

- [npm](https://docs.npmjs.com/about-npm)

## Proposal

The Seed Bank needs to define the following components:

1. specs
   - standard metadata for declaring a module and its dependencies
   - standard endpoint to retrieve said metadata
   - standard methods to perform registry operations (add/remove/query)
2. ~~registry~~
   - an endpoint for hosting the registry metadata
   - an endpoint for performing API calls against the registry
   - an endpoint for hosting the module artifacts
3. client
   - a client that can talk to the registry endpoint

## Details

### Specs

See [[configuration|rfc.14-seed-bank.configuration]] for how metadata is stored in seeds

### Registry

See [[Registry|rfc.14-seed-bank.registry]] for more information

### Client

Registry client methods will be added to the [[dendron CLI|dendron.ref.cli]] under the `registry` namespace, or `reg` for short. 

We will also add additional methods to the [[workspace command|dendron.ref.cli#workspace-command]] to be able to intiialize a workspace from an existing seed.

See [[methods|rfc.14-seed-bank.methods]] for the list of supported methods

## Motivating Example

You are interestd in developing your own vscode plugin but don't know where to start. You have a workspace setup already. The following shows how to go about adding a hypothetical `vscode` seed using the CLI (a similar workflow will be availble when using the plugin )

1. Look for any existing seeds to do with vscode using the CLI

   ```sh
   dendron seeds search vscode

   name: dendron.vscode
   desc: official vscode docs
   ```
2. Add the docs to your workspace

   ```sh
   dendron seeds add dendron.vscode

   dendron.vscode has been added to your workspace
   ```
3. Inspect the schema

   ```sh
   dendron seeds schema dendron.vscode

   # name of the schema 
   project:
       nodes:
           code: 
             quickstart: getting started
             api: namespace(true)
             ...
   ```
4. Query the notes
   ```sh
   dendron note lookup --query code.quickstart
   ```
5. Resulting configuration
   - dendron.yml
   ```yml
   vaults:
      # local vaults in your workspace
      - ...
      - fsPath: vault
        seed: dendron.vscode
   seeds:
     # newly added seed
     dendron.vscode:
   ```
   - dendorn.code-workspace
   ```json
   folders: [
      {
         "path": "seeds/dendron.vscode/vault",
         "name": "dendron.vscode/vault"
      },
   ]
   ```
   - files
   ```
   .
   └── workspace
      ├── vault1
      ├── ...
      └── seeds
         └── dendron.vscode
               ├── dendron.yml
               └── vault
                  ├── dendron.md
                  └── ...
   
   ```

## Topics

### Transitive Dependencies

- [[Next Phase ⏩|dendron._ref.status#next-phase-]]

Lets say seed A depends on seed B and you install seed A

Dendron will pull in all dependencies of seed B as well as seed A

### Publishing (website)

- [[Next Phase ⏩|dendron._ref.status#next-phase-]]

By default, publishing is disabled for seeds. If you want to publish a seed, you can set its [[visibility|rfc.14-seed-bank.configuration#visibility]] to `public`. At this point, the standard publishing [[configuration|dendron.topic.publish-legacy.configuration]] rules appyl.

When you publish a seed, we will automatically add a banner at the top of any page that comes from a seed.

```
This page is originally published by {author} and licensed under {license}
```

You can disable this behavior by setting [[addAttribution|rfc.14-seed-bank.configuration#addattribution]] to `false`.

## Phases

### Phase I

- [x] add registry [[configuration|rfc.14-seed-bank.configuration]] to `dendron.yml` [2021-06-15 15:55]
- [x] add registry [[methods|rfc.14-seed-bank.methods]] to dendron cli [2021-06-15 15:55]
- [x] add seed resolution logic when dendron initializes workspaces with seeds [2021-06-15 15:55]

### Phase II

- [ ] be able to publish seed vaults when publishing a website
- [ ] convert seed bank from static file to API endpoint
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

