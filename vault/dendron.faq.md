---
id: 683740e3-70ce-4a47-a1f4-1f140e80b558
title: FAQ
desc: ""
updated: 1622059582011
created: 1595952505025
stub: false
nav_order: 6
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

Dendron's secret sauce is that it provides the necessary tooling for you to work with hierarichal notes. While hierarchies have traditionally (and justifiably) gotten a bad, I would argue that this is because the **tooling** around hierarchies were bad, not because hierarchies themselves are bad.

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

## Working with Notes

### Why markdown?

Markdown lets you write text in a simple human readable notation that is platform independent. You don't need to have microsoft word to read a markdown file and now a days, all new note taking tools support importing and displaying markdown.

For more context, you can see the original markdown declaration [here](https://daringfireball.net/projects/markdown/)

### Can I use Dendron with existing notes?

You can use Dendron with existing repositories of markdown notes.

Open the `Command Bar` in vscode and use the `Dendron: Change Workspace` command. It will ask you for a folder path as input.

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.

### How do I save?

Dendron automatically saves when you change focus (switch tabs or applications). You can also manually save using `Cmd+S` or `Ctrl+S` depending on your operating system

### How do I go back to the previous note?

There are 3 ways to go back to my previous note:

1. `ctrl-tab` (go to previous tab)
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

## Working with Hierarchies

### How should I name a note?

There are no rigid requirements on note naming in Dendron, other than the dots in the file name are used to construct the note [[note hierarchy|dendron.topic.hierarchies]]. However, the recommended way is to use all lowercase letters, replace spaces with `-`-mark and remove any special characters. Thus e.g. `John's amazing garage` becomes `johns-amazing-garage`.

Also, remember that you will use the note [[lookup-feature|dendron.topic.lookup]] to find notes quickly, and the lookup will use the names of the files. Thus try to name the files using the words that you are likely to use to find the note.

### What kind of note hierarchy should I create?

A good guideline is to start with a relatively flat hierarchy (even just a single note in the root!) and add topics as headings into those notes. When notes grow to the point that you have to start scrolling, it’s time to consider if it would be beneficial to split those notes. At that point, you probably already have some idea how the thoughts are placed in your mind - try to mimic that also with the hierarchy.

If you have a hard time deciding which ideas belong closer to root, think which of those ideas are more fundamental in your thinking. As an example, a note related to coding in Excel, should it be named as `code.excel` or `excel.code`? This could be resolved by thinking if you will write more about coding where Excel is just one example, or more about Excel, where coding is only one example. In case you think that both `excel.code` and `code.excel` are equal and both should be created, you could also make one of them a “master note” and [[refer|dendron.topic.refs]] to it from the other note.

### Do I have to use hierarchies? What if I want to use another approach?

Despite our emphasis on hierarchies, Dendron also supports non-hierarchal ways of organizing notes (eg. backlinks, zettelkasten, etc).

You can, and are encouraged to, combine these other workflows with Dendron hierarchies in order to create your own workflow that takes the best parts of each system!

### What if I have a note that belongs in multiple hierarchies?

This comes up a lot especially when your dealing with organizing collections of things, like music or books. There are a few approaches we recommend here.

1. Use [[tags|dendron.topic.tags]]. Tags work best with categorical data. If you use **Dendron Tags** (aka they're really hierarchies), then you have the added advantage of being able to refactor and track your tags using Dendron's existing hierarchal tooling.
2. Use alias nodes. This is an [upcoming feature](https://github.com/dendronhq/dendron/issues/128) that will allow you to put a node under multiple hierarchies.

### Hierarchies add too much friction

The hierarchy adds friction but the idea is that the friction (eg. hierarchy) is not a bug but the reason why dendron works with thousands of notes.

The analogy to think about is excel: while putting your numbers inside the structure of a spreadsheet might not be the most straightforward way of getting to a numerical solution, its use becomes indispensable once you deal with a significant amount ofnumbers.

The way to think about dendron is that its not like google where you type a question and try to find an answer - until we get true AI, this simply doesn't work for personal knowledge. Rather, Dendron helps you organize your notes so you can reference the information you need to answer your own questions.

### Will Dendron ever support folders?

It is possible though most of the approaches we've thought of would take a large amount of effort and deliver questionable benefit on top of what's already planned (for more info, see the discussion [here](https://github.com/dendronhq/dendron/issues/210)). A read only version of Dendron with a folder structure is planned to be supported for the next iteration of the [[Markdown pod|dendron.topic.pod.builtin.markdown.export]].

## Working with Schemas

### What is the deal with schemas? Do I need to use them?

The short answer is no, you don't **need** to use schemas. That being said, schemas can help you manage your notes, especially as you collect more of them.

If you're familiar with typescript - Dendron schemas are similar to the types offered by typescript. You can compile your typescript code into javascript even if the types don't match (subject to your tsconfig). Types help make your projects maintainable, especially as they grow.

Currently, Dendron will do is show you an indicator if your schema doesn't match. In the future, we'll have a strict mode where we will actually prevent you from creating notes that don't match your schema.

Schemas at the end of the day help you construct consistent hierarchies for your notes. Consistent hierarchies alleviate the cognitive overhead of needing to understand and track N things where N can be very big. Instead, you can construct a single schema that encompasses the common areas of all N things.

But even if you don't have a lot of notes, schemas are helpful because they provide extra features [like templating](https://dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#schema-templates) and [auto complete](https://dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#why-use-schemas).

<!--
This allows you to quickly reference anything within your hierarchy because they all have the same shape. It also helps with understanding a topic - I (Kevin, Dendron author) find my schema for a domain tends to reflect my mental model for said domain as well.

For example, I'm using nodejs and need to access a file. I have no idea what the builtin/recommended library for file access is. Instead of having to dig up [fs-extra](https://www.npmjs.com/package/fs-extra), I can navigate to `l.node.file` and see my notes on the best way to work with files. You can replace node with any other programming language. Now I have a general way of referencing file access for all languages without needing to remember the specific implementation detail of any of them.
-->

## Finding Notes

### Can I do filter by the metadata in Dendron?

Metadata is currently under utilized because we don't have a built in way of easily querying by it. We currently have [this issue](https://github.com/dendronhq/dendron/issues/152) tracking the progress of advanced query work.
gg
In the future, we want to support:

-   querying by custom frontmatter attributes: <https://github.com/dendronhq/dendron/issues/152>
-   query by attributes with logical operators: <https://github.com/dendronhq/dendron/issues/159>

We also want to support some subset of the queries as note references so that the results can be included in page.

### Can I autocomplete an hierarchy?

See this [issue](https://github.com/dendronhq/dendron/issues/490).

TLDR: vscode doesn't expose tab completion via API. There are two alternatives we're currently considering:

-   overload the `enter` command, one press to autocomplete, two presses to select
-   replace the lookup component with a webview

## Other

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

### Can I use a dark theme for the markdown preview?

Yes. There's a setting called `markdown-preview-enhanced.previewTheme` that you can set which has a list of default themes, including dark themes.

### Can I customize the markdown preview CSS?

Yes. Read [this](https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css) for more information.

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

### The extension 'Dendron Markdown Preview Enhanced' took a very long time to complete its last operation

This is a known issue whenever we release a new version of the preview (mostly because its uncompressed javascript). Moving forward, we'll be removing the dependency on an external plugin and integrating Dendron's markdown features into vscode's native markdown preview in the near future.
