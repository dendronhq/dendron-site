---
id: 4fdf54ac-599e-42e7-90a5-38964913a9a7
title: Seeds
desc: ''
updated: 1600219243498
created: 1600219243498
stub: false
---

# Seeds 🚧

> Note: Seeds are highly experimental and under active development. Content here is subject to change.

Seeds represent existing knowledge out in the world. A seed could be a wikipedia article, a github repo, or an arbitrary website. 


You can use a **Dendron Seed** to ingest data from existing sources and import them into your vault. Data ingestion is also refereed to as **planting**.

Note that seeds differ from [[pods|dendron.topic.pod]] in that they help you ingest content from external sources from content that you might have no control over. Pods help you import/export your content between various platforms.

You can see an example of a published seeded vault [here](https://aws.dendron.so/).

# Using a seed

- NOTE: currently, seeds are only available using the [[dendron-cli|dendron.related.dendron-cli]]

## Pre-requisites

Make sure you have the dendron-cli installed.

((ref: [[dendron.related.dendron-cli]]#installation,1:#*))

## Instructions
1. Inside the workspace where you to plant your seeds, initialize a node project.
    ```sh
    cd /path/to/ws
    yarn init
    ```
1. Install seeds that you want to plant
    - currently, the only available seed is @dendronhq/og-aws-seed
        - this seed gets data from [og-aws guide](https://github.com/open-guides/og-aws)
    ```sh
    yarn add @dendronhq/og-aws-seed
    ```
1. Plant seeds using the cli
    ```
    dendron-cli plantSeed --id @dendronhq/og-aws-seed --wsRoot ./ --vault ./vault
    ```
1. Enjoy your garden

# Creating a Seed

A seed is just a npm package. You can create your own by creating an npm package..

You can see an example of a custom seed [here](https://github.com/dendronhq/seeds.aws/tree/master/packages/og-aws-seed).

## Instructions
1. Initialize a new node project
    ```sh
    mkdir my-new-seed
    cd my-new-seed
    yarn init
    ```
1. Add core dependencies
    ```sh
    yarn add @dendronhq/seeds-core
    ```
1. Create a seed

### Creating a seed


- index.ts
```ts

export default class MySeed extends DendronSeed {

    config() {
        return {
            "src": {
                type: "github", 
                url: "some/git/url"
            }
        }
    }

    prepare(root: string): Note[] {
        const srcFile = fs.readFileSync(path.join(root, 'README.md'), { encoding: "utf8" });
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
