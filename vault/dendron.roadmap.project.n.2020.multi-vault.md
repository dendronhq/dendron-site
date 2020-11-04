---
id: 45cfb9f2-46cf-4f67-a41e-834818fbd06e
title: Multi Vault Support
desc: ''
updated: 1604434066890
created: 1599501659137
stub: false
start: 2020.10.07
end: 2020.10.29
status: Next
---
# Multi Vault Support

## Goals

Users should be able to create multiple vaults for a given workspace. Each vault is a folder that can contain any number of hierarchies. 

## Use Cases
- for **sensitive notes**, multi-vault enables local only vaults vs vaults that can are synced on file sharing services like dropbox 
- for **modularizing knowledge**, multi-vault enables users to mix and match existing vaults depending on context
- for **federating and curating knowledge**, multi-vault enables users to publish/subscribe to public vaults using protocols like `git`
- for **access control**, multi-vault lets users configure specific vaults to be **private** which turns off publication and sharing of any notes inside said vault

## Concepts

((ref: [[dendron.concepts]]#workspace:#*))
((ref: [[dendron.concepts]]#vaults 🚧:#*))
((ref: [[dendron.concepts]]#hierarchies:#*))
((ref: [[dendron.concepts]]#domain:#*))



This enables many use cases like keeping a private local only vault and a synced dropbox vault. 

## Specs
- a workspace can have any number of vaults
- vaults have a name and a path relative to the workspace 
- the initial vault is called `main`
- vaults can be referred to by name using the `$` prefix 

## Flow

### Add a new Vault
- run `Dendron: Add Vault`
    - specify file path 
        - placeholder text of current workspace path
    - eg: {workspace}/local-only-vault
- when the user hits enter, the vault is created as an "empty vault"
    - empty vaults will contain a `root.md` and `root.schema.yml` file

### Lookup

((ref: [[dendron.roadmap.project.n.2020.multi-vault]]#file layout,1:#*))

- lookup: {empty query}
    - show all top level results of all vaults. note how the vault name shows up in parenthesis next to the result
    - results
        ```
        root ($vault1)
        root ($vault2)
        foo ($vault1)
        foo ($vault2)
        ```
- lookup: `$vault1/`
    - by prefixing lookup with the vault name, you can narrow results to a particular vault
    - results
        ```
        root ($vault1)
        foo ($vault1)
        ```
- lookup: `foo.`
    - dendron will merge all results from all vaults when you do a lookup
    - results
        ```
        foo.one ($vault2)
        foo.two ($vault1)
        ```
- lookup: `foo.new`
    - when you lookup a note that doesn't exist, you'll have the option of creating the note in either vault
    - results
        ```
        Create New ($vault2)
        Create New ($vault1)
        ```
    

### Navigating Links
((ref: [[dendron.roadmap.project.n.2020.multi-vault]]#file layout,1:#*))

- navigating  to `[[foo]]` will result in a display prompting the user to select the vault to navigate to 
    - the UI should be similar to the **Peek Action**
    ![](/assets/images/2020-10-19-20-48-52.png)

- navigating to `[[foo.two]]` will directly navigate to the note since it is unique across all vaults
- navigating to `[[$vault1/foo]]` will open foo in vault1 

### Moving Notes Between Vaults

- TBD

### Publishing Notes
((ref: [[dendron.roadmap.project.n.2020.multi-vault]]#file layout,1:#*))

- configuration to publish everything under foo
    - config
        ```yml
        vaults:
        - name: main
            path: vault1
        - name: private
            path: vault2
        publish:
            siteHierarchies: [foo] 
        ```
    - published notes:
        ```
        $vault1/foo.md
        $vault1/two.md
        $vault2/foo.md
        $vault2/one.md
        ```


- configuration that denies publication from vault2
    - config
        ```yml
        vaults:
        - name: main
            path: vault1
        - name: private
            path: vault2
            allowPublish: false
        publish:
            siteHierarchies: [foo] 
        ```
    - published notes:
        ```
        $vault1/foo.md
        $vault1/two.md
        ```

## Special Cases

### Adding a vault under another vault

- you want to put all notes from `vault2` under `vault1` under the `vault2` node
- eg: lookup should see the following hierarchy
```
├── foo.md
├── foo.two.md
├── vault2.foo.md
└── vault2.foo.one.md
```

This can be achieved with the following config
```yml
vaults:
- name: main
    path: vault1
- name: private
    path: vault2
    mountUnder: vault2
```


## Ref

### File Layout

This layout is used as the basis for all examples
```
.
└── Dendron
    ├── vault1
    │   ├── foo.md
    │   └── foo.two.md
    └── vault2
        ├── foo.md
        └── foo.one.md
```

### Configuration

#### vaults
- top level directive in `dendron.yml`
- collection of one or more vaults

#### {vault}.name
- name of vault

#### {vault}.path
- path to vault

#### {vault}.mountUnder
- optional
- by default, all hierarchies are mounted at the root
- you change this by adding a mountpoint which is equivalent of adding a **prefix** to all files within the vault

## Additional Resources
- [project docs](https://dendron.so/notes/45cfb9f2-46cf-4f67-a41e-834818fbd06e.html)
- [issues](https://github.com/dendronhq/dendron/labels/pro.multi-vault)

## Discussions

- [[name collision thread |dendron.roadmap.project.scratch.2020.09.07-121834]]
- [[sharing materials between vaults|dendron.roadmap.project.scratch.2020.09.07-121952]]
