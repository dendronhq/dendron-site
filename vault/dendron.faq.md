---
id: 683740e3-70ce-4a47-a1f4-1f140e80b558
title: FAQ
desc: ''
updated: 1639332841003
created: 1595952505025
stub: false
nav_order: 3.01
---

All the questions we thought you might ask.

## General

### What is a Dendron?

A Dendron is many things.

1. Dendron is the greek word for tree. It's a reference to the hierarchal note taking that Dendron(3) enables.
2. Dendron is another word for [dendrite](https://en.wikipedia.org/wiki/Dendrite) which is an extension of the nerve cell that sends and receives signals in the brain. Think of Dendron(3) as a digital nervous system that helps you consolidate all the information that you care about in the fastest and most efficient way possible.
   ![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Neuron_Hand-tuned.svg/2880px-Neuron_Hand-tuned.svg.png)
    - Image by Quasar Jarosz at English Wikipedia
3. Dendron is a local-first, markdown based, hierarchical note taking tool. It is meant to help you organize, manage, publish, and collaborate on knowledge bases of any size.

### How is Dendron different from X note taking tool?

Substitute X with `roam|obsidian|foam|one note|evernote|...`

All note taking tools (try to) make it easy to get notes in. It's getting it back out again that's hard, and it **becomes harder** as you get more notes.

Whether you are using notebooks tags, or backlinks, once you have more than a few hundred notes, you'll need to have some sort of structure in place (eg. naming convention, hierarchy, etc.) to keep track of them.

Dendron is a highly opinionated note taking tool that focuses on **hierarchal note taking**. It provides the freedom of Roam's _every note exists everywhere philosophy_, while layering on top **flexible hierarchies** to keep track of it all.

While Dendron works with knowledge bases of any size, it really shines once you've accumulated a few hundred notes. I created it to handle my personal knowledge base of 20k+ markdown notes — Dendron lets me track and find any specific note in it in seconds. You can read more about Dendron's hierarchal approach to note taking [here](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64.html).

### How is Dendron different from Roam?

Whereas Roam is built around the idea of **bi-directional links** (and daily journals) which help you create notes without having to explicitly organize your notes, Dendron is built to help you organize notes without friction using **flexible hierarchies**.

We provide the tooling to create, enforce, and change these hierarchies at will. If you think of Roam as a graph database for notes, you can think of Dendron as Redis. To give you a sense of scale, Dendron is used to manage knowledge bases of +30K notes.

Some additional features that set Dendron apart:

-   Dendron allows you to compose your workspace with vaults (a vault is a collection of notes that can come from anywhere) from any number of sources
-   Dendron is based on plain text (Dendron-flavored) markdown (exportable to regular markdown or any other format)
-   Dendron is integrated into VSCode
-   Dendron allows for easy publishing public/private content to any platform that can host a static site (and we're rolling out our own publishing platform to help people publish with additional access controls)

### How does Dendron help me track my notes?

1. Dendron organizes and collapse all your notes into managable chunks using [[hierarchies|dendron.topic.hierarchies]].
2. Dendron helps you manage your hiearchies using [[schemas|dendron.topic.schema]]
3. Dendron gets out of your way when you're working with your notes during [[lookup|dendron.topic.lookup]]

Dendron's secret sauce is that it provides the necessary tooling for you to work with hierarichal notes. While hierarchies have traditionally (and justifiably) gotten a bad reputation, I would argue that this is because the **tooling** around hierarchies were bad, not because hierarchies themselves are bad.

Hierarchies are one of the most effective ways that **both humans and computers** process large amount of information (there's a reason why almost every database is built from a variation of the [b-tree](https://en.wikipedia.org/wiki/B-tree)). You can find further details about hierarchies in this [blog post](https://www.kevinslin.com/notes/e1455752-b052-4212-ac6e-cc054659f2bb.html)

### Is Dendron free? Will it stay free?

Dendron, the client, is free and will always remain free. It is also open source so anyone is free to make their own fork of Dendron.

That being said, I'm all in on Dendron and this is my full time gig. I want to make sure that developing Dendron remains sustainable. To that end, I plan on introducing value add server side functionality that folks may pay for. Examples of paid for features include:

-   private hosting (for folks who want to publish but not use github pages or want to add authentication)
-   enterprisy things
    -   eg. on premise installations of Dendron with single sign on, active directory, and fine grained permissions
-   offering private subscription based vaults (eg. think [substack](https://substack.com) but having people subscribe to vaults instead of newsletters )
-   server side IFTTT like functionality (eg. everytime I add an entry to airtable, add a note to Dendron)

Paid for features will be 100% optional and will not be necessary for any client side functionality in Dendron.

### Why is Dendron built on top of VSCode?

As with all things, its a matter of tradeoffs. Dendron started its life as a standalone app (eg. think Obsidian) but I quickly realized I was spending most of my time building undifferentiated editor scaffolding instead of focusing on the hierarchies and schemas that made Dendron unique.

I wanted to spend more time building out features that supported Dendron's [hiearchy first approach](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64.html) to note taking which is what led me to re-write it for VSCode.

That being said, the core dendron engine is not vscode specific and there are folks that are experimenting with porting it over to other editors (eg. sublime, vim). We also have plans for a standalone editor in the future (most likely, this will be a fork of VSCode optimized for note taking)

## Notes

### Why markdown?

Markdown lets you write text in a simple human readable notation that is platform independent. You don't need to have microsoft word to read a markdown file and now a days, all new note taking tools support importing and displaying markdown.

For more context, you can see the original markdown declaration [here](https://daringfireball.net/projects/markdown/)

### Can I use Dendron with existing notes?

You can use Dendron with existing repositories of markdown notes.

Open the `Command Palette` in vscode and use the `Dendron: Change Workspace` command. It will ask you for a folder path as input.

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.

### How do I save?

Dendron automatically saves when you change focus (switch tabs or applications). You can also manually save using `Cmd+S` or `Ctrl+S` depending on your operating system

### How do I go back to the previous note?

There are 3 ways to go back to my previous note:

1. `ctrl-tab` (go to previous tab with default VSCode settings)
2. click on the previous tab
3. using the open editors pane

-   NOTE: to have more than a single tab show, you need to have the following settings

```json
{
    "workbench.editor.enablePreview": false,
    "workbench.editor.showTabs": true
}
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/faq.go-back.gif)

### What can I do with the `root` note?

The root note is a special note that comes with every dendron vault. You can't rename it and we don't advise that you create a hierarchy from it. You can add custom frontmatter variables and change all existing variables except the `id` field. 

You are also free to use the body however you wish. 

### Can I manually move notes?

Yes. You can move notes manually outside of Dendron or between different vaults. Some things to keep in mind:
- you should keep the `id` of the note since features like publishing depend on it to find the right link
- if your notes have [[Cross Vault Links|dendron.topic.links#cross-vault-links]] (only applicable for [[Multi Vault|dendron.topic.multi-vault]]), those links might break if they are moved to a different workspace that doesn't have reference to the original vault

## Hierarchies

### Why hierarchies?

Users of other note-taking tools often balk at Dendron's focus on hierarchies. The common counterpoint is that the real world is not constrained by hierarchy and that this approach isn’t flexible enough for what they want to do. These users argue for graphs and backlinks as a better primary model for managing knowledge.

A graph is indeed more flexible. If we were building a digital brain for computers to perfectly model the world, we would probably go with this approach. But we’re not building a tool for computers to capture every facet of the world, we’re building a tool to help humans make sense of it. The challenge we face as humans is information overload. There is too much of it and we need ways of constraining that complexity. Filtering large amounts of information into exponentially smaller subsets is what hierarchies are built for (and why there are used as the core primitive in every database ever created). 

With a hierarchy, you have one source of truth where a note can be filed and a filtering process to help you find the right place to file. Note that this doesn't limit you to creating secondary associations using backlins, tags, and keywords.  

The traditional failings of past hierarchies are that they were too rigid. Most people’s experience with hierarchies are folder hierarchies that ossify from the moment that they are created. These hierarchies are hard to change and so people don’t change them, even as their underlying understanding of the domain has changed. It is because of this friction that most new tools focus on note creation without any predefined structure. This approach makes creating notes easy but finding notes hard.

Dendron has flexible hierarchies. They provide a structure for your notes but these structures can be easily changed. In programming, developers can refactor code and change its structure — the IDE will make sure that all references pointing to the original code are updated. In Dendron, you can refactor notes and hierarchies and Dendron will make sure that your PKM is consistent throughout. This means that you have the best of both worlds: a basic structure for the organization but the flexibility to change it.

### How should I name a note?

There are no rigid requirements on note naming in Dendron, other than the dots in the file name are used to construct the [[note hierarchy|dendron.topic.hierarchies]]. However, the recommended way is to use all lowercase letters, replace spaces with `-`-mark and remove any special characters. Thus e.g. `John's amazing garage` becomes `johns-amazing-garage`.

Also, remember that you will use the note [[lookup-feature|dendron.topic.lookup]] to find notes quickly, and the lookup will use the names of the files. Thus try to name the files using the words that you are likely to use to find the note.

### What kind of note hierarchy should I create?

A good guideline is to start with a relatively flat hierarchy (even just a single note in the root!) and add topics as headings into those notes. When notes grow to the point that you have to start scrolling, it’s time to consider if it would be beneficial to split those notes. At that point, you probably already have some idea how the thoughts are placed in your mind - try to mimic that also with the hierarchy.

If you have a hard time deciding which ideas belong closer to root, think which of those ideas are more fundamental in your thinking. As an example, a note related to coding in Excel, should it be named as `code.excel` or `excel.code`? This could be resolved by thinking if you will write more about coding where Excel is just one example, or more about Excel, where coding is only one example. In case you think that both `excel.code` and `code.excel` are equal and both should be created, you could also make one of them a “master note” and [[refer|dendron.topic.note-reference]] to it from the other note.

### Do I have to use hierarchies? What if I want to use another approach?

Despite our emphasis on hierarchies, Dendron also supports non-hierarchal ways of organizing notes (eg. backlinks, zettelkasten, etc).

You can, and are encouraged to, combine these other workflows with Dendron hierarchies in order to create your own workflow that takes the best parts of each system!

### What if I have a note that belongs in multiple hierarchies?

This comes up a lot especially when your dealing with organizing collections of things, like music or books. There are a few approaches we recommend here.

1. Use [[tags|dendron.topic.tags]]. Tags work best with categorical data. If you use **Dendron Tags** (aka they're really hierarchies), then you have the added advantage of being able to refactor and track your tags using Dendron's existing hierarchal tooling.


### Will Dendron ever support folders?

It is possible though most of the approaches we've thought of would take a large amount of effort and deliver questionable benefit on top of what's already planned (for more info, see the discussion [here](https://github.com/dendronhq/dendron/issues/210)). 

If you want the ability to collapse folders, you can use the [[dendron tree view|dendron.topic.workbench#dendron-tree-view]]. For existing folder based notes and assets, you can use the [[markdown pod|dendron.topic.pod.builtin.markdown.import]] to import them into Dendron.

At the end of the day, folders are meant to be an implementation detail for dendron. The underlying primitive of a note is an object that has metadata, content, and links. You can think of dendron as a flat file based database and lookup and the tree view as the UI to said database. For use cases involving external tools that require folders, you'll soon be able to use the [[markdown export pod|dendron.topic.pod.builtin.markdown.export]] to do just that.

## Schemas

### What is the deal with schemas? Do I need to use them?

The short answer is no, you don't **need** to use schemas. That being said, schemas can help you manage your notes, especially as you collect more of them.

If you're familiar with typescript - Dendron schemas are similar to the types offered by typescript. You can compile your typescript code into javascript even if the types don't match (subject to your tsconfig). Types help make your projects maintainable, especially as they grow.

Currently, Dendron will do is show you an indicator if your schema doesn't match. In the future, we'll have a strict mode where we will actually prevent you from creating notes that don't match your schema.

Schemas at the end of the day help you construct consistent hierarchies for your notes. Consistent hierarchies alleviate the cognitive overhead of needing to understand and track N things where N can be very big. Instead, you can construct a single schema that encompasses the common areas of all N things.

But even if you don't have a lot of notes, schemas are helpful because they provide extra features [like templating](https://dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#schema-templates) and [auto complete](https://dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#why-use-schemas).

### How do schemas work with multi-vault?

The short answer currently is *not very well* 😅
- if two schemas overlap between different vaults, the last schema wins
- schema imports don't currently work x-vault

What this will be in the future:
- schemas should only work on the vault that they are declared in, and you can have an option to specify (in `dendron.yml` if you want a schema to be global)
- schema imports should work xvault (import syntax will be `{vaultName}.{schemaName}`)

## Vaults

### Git Doc and other extensions don't recognize my repos for multi-vault

Many VSCode extensions that work across multiple git repositories won't recognize repos nested another repo. The way to fix this is by having your workspace be the last entry inside `folders` in your code workspace file (Dendron does this by default for new workspaces and if you add new vaults using `Vault Add`). You can see an example below. You can see a published example of this setup [here](https://github.com/kevinslin/kevin-garden)

```json
    "folders": [
        ...
        {
            "path": "kevin-public/vault",
            "name": "kevin-public"
        },
        {
            "path": "kevin-blog/vault",
            "name": "kevin-blog"
        },
        {
            "path": "."
        }
    ],
```

## Humans

### How do I share my notes with others?
1. The *easiest* way to share public documents *for consumers* is to publish it as a site. Instructions [[here|dendron.topic.publish-legacy.quickstart]]
2. If folks are comfortable with markdown, you can use the markdown pod to export your entire workspace or just a specific page to markdown. Instructions [[here|dendron.topic.pod.builtin.markdown]]
    - NOTE: this doesn't preserve backlinks or assets
3. The full experience is committing your workspace as a git repo and having collaborators use Dendron to add it as a [[Remote Vault|dendron.topic.vaults#remote-vault]]



## Pods

### What are pods?

Pods are a means of data migration. You can import/export notes from other tools in and out of Dendron

Internally for example, we use google docs to take meeting notes collaboratively and then we use the gdoc import pod to turn it into a dendron note

You can read more about them [[here|dendron.topic.pod]].

## Publishing
![[dendron://dendron.dendron-site/dendron.topic.publish-legacy.faq]]

## Search and Filtering

### Can I filter by the metadata in Dendron?

Metadata is currently under utilized because we don't have a built in way of easily querying by it. We currently have [this issue](https://github.com/dendronhq/dendron/issues/152) tracking the progress of advanced query work.

In the future, we want to support:

-   querying by custom frontmatter attributes: <https://github.com/dendronhq/dendron/issues/152>
-   query by attributes with logical operators: <https://github.com/dendronhq/dendron/issues/159>

We also want to support some subset of the queries as note references so that the results can be included in page.

For now, we recommend you use the [[search editor|dendron.guides.tips#search-editor]] capability for liimited querying capabilities.

## Other


### Can I autocomplete an hierarchy?

See this [issue](https://github.com/dendronhq/dendron/issues/490).

TLDR: vscode doesn't expose tab completion via API. There are two alternatives we're currently considering:

-   overload the `enter` command, one press to autocomplete, two presses to select
-   replace the lookup component with a webview


### How to launch dendron with most recent vault quickly?

In menu bar of VSCode, select `File` -> `New Window` and click the Dendron workspace in Recent section of the Welcome tab.

### Why are there `root` files in my notes?

When you initialize a vault, `root.md` and `root.schema.yml` get created inside each vault.

They serve as the "roots" of your vault for your notes and schema respectively.

root.md is used as the parent of all hierarchies, root.schema as the parent of all schemas

root.md is what shows up when you do a lookup with an empty line ""

root.schema.yml is a schema that is global for all hierarchies (normally, a schema is scoped to a particular hierarchy)

Now this isn't required per-say, we could just do away with **root** notes and stick strictly to hierarchies and this might be an option in the future but this is the reasoning at the current time

ps. root.schema.yml doesn't work right now as described in the sense that we haven't implemented global schemas yet


### Is there a list of keyboard shortcuts I can see?

Dendron has a list of keyboard shortcuts that you can access using `Dendron: Show Help` command. Note that these only show the commands that come with the Dendron Plugin but not its bundled extensions. We currently have an open [issue](https://github.com/dendronhq/dendron/issues/148) to list all shortcuts on one page.

### Why are there '+' signs next to the notes in the Tree View?

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/faq.plus-sign.jpg)

The reason you see this is because Dendron will create [[stub|dendron.concepts#stubs]] notes when creating notes that have parents that don't exist. These notes are placeholders and will only be visible in the Dendron Tree View with a `+` sign next to the name. The reason we do stubs is because we don't want to litter your file system with empty files. Stubs are a compromise - they let you see the hierarchy of your newly created notes without forcing you to create intermediary files.

### Why custom markdown preview instead of the VSC one?

Our custom markdown preview gives us much more functionality then the vscode one -> eg. note references, checkboxes, etc.

In addition, the markdown preview that Dendron uses is platform agnostic (eg. it's also available on atom). This means that other editors could potentially adopt it as well.

### VSCode Snippets are not working in Frontmatter

The default snippets are scoped to markdown. You can create [global snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets) file to have snippets that work across all languages.

### I want to push all my note to my git repository periodically

This can be done with some extensions that are external to Dendron such as:

1. [autogit](https://marketplace.visualstudio.com/items?itemName=zeitnergmbh.auto-git)
2. [gitdoc](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gitdoc)
3. [text](https://marketplace.visualstudio.com/items?itemName=ivangabriele.vscode-git-add-and-commit)

It is also described in our [[tip|dendron.guides.tips#automate-git-tasks,1:#*]] note.


### Dendron 11ty Package Version is Confusing

Dendron 11ty used to be published outside of the monorepo and started with 1.x version whereas the monorepo started with 0.x .

After we synced, we synced 11ty versioning and brought it down to 0.x. every minor release, we also publish the 1.x version of the 11ty package to make it consistent but during patch releases, we just keep the 0.x numbering. 

Its a bit of a hack and something that should go away in July 2021, when we switch to NextJs based publishing. 

### VSCode is telling me I have to authorize Dendron to run some code

VSCode recently introduced a feature called [**_workspace trust_**](https://code.visualstudio.com/docs/editor/workspace-trust), which lets you choose whether or not you trust a project folder in VSCode for automatic code execution.

Since Dendron creates a workspace for your notes, VSCode is asking you if you trust the workspace Dendron just created for you.

You can choose not to trust the workspace and be in **_restricted mode_**.

You can still use all of Dendron's feature in restricted mode except [[hooks|dendron.topic.hooks]].

### My firewall is asking if I wanted to open new ports when I use Dendron. Why is this?

Dendron has a client-server architecture.

The extension talks to a (local) express server for a lot of the features and this is why it's opening new ports.

### How do I setup Dendron to work between multiple machines?

See [[Using Dendron Across Machines|dendron.guides.best-practices#using-dendron-across-machines]]
