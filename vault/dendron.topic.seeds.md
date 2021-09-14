---
id: 4fdf54ac-599e-42e7-90a5-38964913a9a7
title: "Seeds \U0001F6A7"
desc: ''
updated: 1628215369814
created: 1600219243498
published: false
---
> Note: Seeds are under active development. Content here is subject to change.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/seeds.png)

Seeds represent existing knowledge out in the world. A seed could be a wikipedia article, a github repo, or an arbitrary website. 

You can use a **Dendron Seed** to ingest data from existing sources and import them into your vault. Data ingestion is also referred to as **planting**.

Note that seeds differ from [[pods|dendron.topic.pod]] in that they help you ingest content from external sources from content that you might have no control over. Pods help you import/export your content between various platforms.

You can see an example of a published seeded vault [here](https://aws.dendron.so/).

# Using Seeds

## Browsing the Seed Registry

You can browse the seeds in the registry by running the `Seed Browse` command:

![[dendron://dendron.dendron-site/dendron.topic.commands#seed-browse:#seed-add]]

## Adding Seeds to your Workspace

You can add a seed to your workspace from either within the extension or with the CLI.

### Adding through the VS Code Extension

You can add seeds within the UI of the `Seed Browse` command but also directly by running the commands below.

![[dendron://dendron.dendron-site/dendron.topic.commands#seed-add:#Misc]]

### Adding through the CLI

#### Pre-requisites

Make sure you have the dendron-cli installed.

![[dendron.topic.cli#installation,1:#*]]

#### Instructions

1. Inside the workspace where you to plant your seeds, initialize a node project.
   ```bash
   cd /path/to/ws
   yarn init
   ```
2. Install seeds that you want to plant
   - currently, the only available seed is @dendronhq/og-aws-seed
     - this seed gets data from [og-aws guide](https://github.com/open-guides/og-aws)
   ```bash
   yarn add @dendronhq/og-aws-seed
   ```
3. Plant seeds using the cli
   ```
   dendron-cli plantSeed --id @dendronhq/og-aws-seed --wsRoot ./ --vault ./vault
   ```
4. Enjoy your garden

# Creating a Seed

A seed is just a npm package. You can create your own by creating an npm package..

You can see an example of a custom seed [here](https://github.com/dendronhq/seeds.aws/tree/master/packages/og-aws-seed).

## Instructions

1. Initialize a new node project
   ```bash
   mkdir my-new-seed
   cd my-new-seed
   yarn init
   ```
2. Add core dependencies
   ```bash
   yarn add @dendronhq/seeds-core
   ```
3. Create a seed

### Creating a seed

- index.ts

```ts
import {
  DendronSeed,
  PrepareOpts,
  SeedConfig,
  Asset,
} from "@dendronhq/seeds-core";

export default class MySeed extends DendronSeed {

    config() {
        return {
        src: {
            type: "git" as const,
            url: "https://github.com/{PATH_TO_REPO}.git",
        },
        mergeStrategy: "replace" as const,
        source: {
            name: "{NAME_OF_PROJECT}",
            url: "{CITATION_URL}",
            license: "{LICENSE}",
        },
        };
    }

    prepare(opts: PrepareOpts): Promise<{notes: Note[], assets: Asset[]}> {
        //const srcFile = fs.readFileSync(path.join(root, 'README.md'), { encoding: "utf8" });
        const { root: repoPath } = opts;
        let notes: Note[] = [];
        // your custom conversion logic
        // ...
        return notes
    }
}
```

### Importing your seed

```
dendron-cli plantSeed --id myseed --wsRoot /path/to/root --vault /path/to/vault
```

# Resources

- [[Seeds API|dendron.dev.api.seeds]]

