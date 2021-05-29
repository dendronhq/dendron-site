---
id: c5e5adde-5459-409b-b34d-a0d75cbb1052
title: Schemas
desc: ''
updated: 1621462190884
created: 1595952505039
stub: false
---
As you end up creating more notes, it can be hard to keep track of it all. This is why Dendron has **schemas** to help you manage your notes at scale. Think of schemas as an **optional type system** for your notes. They describe the hierarchy of your data and are themselves, represented as a hierarchy.

Schemas show up as icons next to lookup results.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema.intro.gif)

## Why Use Schemas

Schemas help you categorize your notes by making sure your hierarchies are consistent with one another. 

For example, lets say you have a bunch of projects and you know you like to keep your projects in the following hierarchy

```
.
└── project
    ├── retrospective
    ├── people
    ├── todo
    └── meet
```

Schemas will autosuggest valid children when you create a new project.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema.suggest.gif)

If you accidentally do a typo, your schema will let you know that you have an inconsistency. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema.unknown.gif)

## Schema Anatomy

A schema is a YAML file with the following naming scheme `{name}.schema.yml`

Below is an example of a four-level hierarchy describing cli commands. The `id` field of the schema is used to build a [glob pattern](https://facelessuser.github.io/wcmatch/glob/) which will be used to match notes matching the schema.

```yml
version: 1
schemas:
# this will match "cli.*" notes
- id: cli 
  # human readable description of hierarchy
  desc: command line interface reference
  # add this to the domain of your schema hierarchy
  parent: root
  # when a schema is a namespace, it can have arbitrary children. equivalent to cli.* glob pattern
  namespace: true 
  children:
    - cmd
    - env
# will match cli.*.env
- id: env
  desc: cli specific env variables
# will match cli.*.cmd.*
- id: cmd
  desc: subcommands 
  namespace: true
```

Below is another way of representing the above schema

```
.
└── cli # matches cli
    └── {cli child} # matches cli.*
        ├── env # matches cli.*.env
        └── cmd # matches cli.*.cmd
            └── {cmd child} # matches cli.*.cmd.*
```



## Schema Properties

### version (optional): number

- values: `0|1`
- default: 0
- description: schema version number

### imports (optional): str\[]

- values: list of schemas to import
- default: \[]
- description: import schemas from another schema into the current schema
  - when using schemas from an external schema file, you will need to prefix the schema with the file name without the `schema.yml` suffix
- NOTE: `import` is only available in schema version `1`

Example:

- foo.schema. yml

```yml
version: 1
imports:
- bar
schemas:
- id: foo
  parent: root
  children:
    - bar.bar # notice that we prefix the id bar with the filename
```

- bar.schema.yml

```yml
version: 1
schemas:
- id: bar
  parent: root
  children: 
    - one
- id: one
```

The above would match the following files

```
foo.bar # match
foo.bar.one #match
```

### schemas

- list of schema entities

#### id

the identifier of the schema. also designates the glob pattern match. this is the **only** required part of a schema. all other fields are optional

#### desc

human readable description of the schema node. these will automatically when creating notes that match the schema.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-desc.gif)

#### parent

- only required for schema [domain](https://www.dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html#domain)
- NOTE: at least one schema MUST have `parent: root` set 

#### namespace

making a schema node a namespace automatically brings its immediate children as part of the schema, even if they are not explicitly defined in the schema definition. it will also automatically set the pattern to `{namespace}.*`

- example:

```yml
schemas:
- id: project
  parent: root
  namespace: true
```

- this will match: 
  - `project`
  - `project.foo`
  - `project.bar`
- it will not match
  - `project.foo.bar`

#### pattern

glob pattern that schema matches. by default, this is the `id` of the schema. you can override this. 

For example, take a look at the journal schema below

```yml
schemas:
- id: journal
  title: journal
  desc: ""
  parent: root
  children:
    - year
- id: year
  title: year
  pattern: "[0-2][0-9][0-9][0-9]"
  children: 
    - month
- id: month
  title: month
  pattern: "[0-9][0-9]"
  children: 
    - day
- id: day
  title: day
  pattern: "[0-9][0-9]"
  namespace: true
```

This will match the following queries

```
# journal
# journal.2020
# journal.2020.09
# journal.2020.09.12
# journal.2020.09.12.foo.md
```

#### children

list of ids of schemas that are the child of the current schema

#### template

a template you can apply to all notes that match this schema. See **Schema Templates** for more details.

```yml
template:
  # identifier for the template (for a note based template, it would be the name of the note)
  id: journal.template.daily
  # what sort of template we are creating. currently, only 'note' is supported
  type: note

```

## Schema Templates

Schema templates let you designate a note as a **template**. Newly created notes that match a schema with a template will have both the contents and custom frontmatter of the template note applied at creation.

This is extremely useful whenever you want to re-use the outline of a note. Examples include daily journals, weekly shopping lists, and weekly reviews.  

<a href="https://www.loom.com/share/481b7ab051394c1caa383383bd265755"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/481b7ab051394c1caa383383bd265755-with-play.gif"> 
</a>

## Unknown Schema

Dendron doesn't force you to use schemas if you don't want to. This is why you can create notes that don't match any schema. Dendron will show you a `?` next to these results.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-question.jpg)

> Sometimes ~~rules~~ schemas are meant to be broken

## Working with Schemas

Schemas can be modified, created and deleted using the same lookup interface that you use for regular notes. See [[lookup|dendron.topic.lookup]] for further details about working with schemas.

## Example Schemas
<!-- - [Project and Journal](https://gist.github.com/kevinslin/5ca7a6f25a239add5ea374f329e6a19e) -->
- Example schemas can be found [here](https://github.com/kevinslin/schemas.git)
- You can copy and paste the individual schema files or add it as a [[remote Vault|dendron.concepts#remote-vault]] and keep up to date on changes
- Its pretty bare right now but plan on adding a lot more here over time. contributions most welcome :)

## Troubleshooting

### Error with parsing some schemas during initialization

If you get this error, it means that Dendron encountered some malformed schemas during initialization. You can open the error message to see what schemas are affected.

Common errors:

- the YAML isn't valid (use <http://www.yamllint.com/> to validate)
- there is no schema with `parent: root` property 

![[dendron.topic.schema#parent:#*]]

## Cookbook

### Testing schemas

If you want to test what your schemas will match, you can use a glob tester like [Glob tester](https://globster.xyz/) to do so

