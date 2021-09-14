---
id: 8683c711-b566-4877-b928-2163ca7897e2
title: Examples
desc: ''
updated: 1623280588455
created: 1623279530864
---

### Using a seed


#### Before Adding a Seed
```
.
# workspace
## dendron.yml
## vault
```

#### Running the add command
```sh
cd workspace
dendron seeds add dendron.hello

> dendron.hellohas been added to your workspace
```

#### Resulting workspace

```
.
└── workspace
    ├── dendron.yml
    ├── vault
    └── seeds
        └── dendron.hello
            └── seed.yml
                └── vault
```

- dendron.yml
```yml
seeds: 
  dendron.hello:
vaults:
  - fsPath: vault
  - fsPath: vault
    seed: dendron.hello
```


### Publishing a Seed

1. Initialize a seed
```
mkdir hello && cd hello
dendron seed init 
```

- file layout
```
.
# hello
## seed.yml
## README.md
## vault
### ...
```

- seed.yml
```yml
name: hello
publisher: dendron
description: 
root: vault
author:
  name: 
  email:
  url:
license: Creative Commons
```

2. Add some content
```sh
dendron note lookup --query "hello" 
echo "hello world" >> hello.md
```

3. Fill out the metadata. 

- seed.yml
```yml
name: hello
publisher: dendron
description: Hello world seed
root: vault
author:
  name: Team Dendron
  email: team@dendron.so
  url: https://dendron.so
license: Creative Commons
```

4. Publish

```
dendron seeds publish
```
