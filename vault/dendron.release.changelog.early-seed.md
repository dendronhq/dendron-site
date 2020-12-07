---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1607367916939
created: 1604539200840
---

## 0.18.2

### Features
- support image hover ([8fee313](https://github.com/dendronhq/dendron/commit/8fee313785dfc4ac2564f74911a4b51879be0673))
    - you can now hover over markdown image links and get the image preview

### Enhancements
- faster completion ([d9d4598](https://github.com/dendronhq/dendron/commit/d9d4598c1996fdb5eb24e4bda0e51e777b476f6e))

### Bug Fixes
- doctor errors when backfilling frontmatter ([862e917](https://github.com/dendronhq/dendron/commit/862e9173e92a2e5d964273bb87c19e79177a6200))
- properly parsing links that start at beginning of line ([b2dbdfc](https://github.com/dendronhq/dendron/commit/b2dbdfc9e49aa1fa74d5097500eeaddf05bf7ccc))
- limit completion prompts to inside wiki links ([f49972e](https://github.com/dendronhq/dendron/commit/f49972ee436f9f637bd68729e702ba2169e68faf))
- adding local vault with fail if using relative path ([fb202e9](https://github.com/dendronhq/dendron/commit/fb202e91e501cfd5506fd73c9a005807954e48d3))
- make completion match the whole link ([d9d4598](https://github.com/dendronhq/dendron/commit/d9d4598c1996fdb5eb24e4bda0e51e777b476f6e))


## 0.18.1

### Features

#### Support adding remote vaults 
- commit: ([d7501b9](https://github.com/dendronhq/dendron/commit/d7501b9a5cb116faae64d26798cfd7ccfc73a4b0))

You can now natively add published Dendron git repos as a *remote vault* inside Dendron. These vaults are stored in a custom `repos` folder underneath your `workspaceRoot`. Since a remote vault is just a git repo, you are able to perform all the usual git operations on it like `push`, `pull`, `merge`, and `blame`. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/ef3fa948460c4f2cb4f7a7b8242579d1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Enhancements

- support pods for multi-vault ([661fe21](https://github.com/dendronhq/dendron/commit/661fe218d448e6f32f86bf60dabe635b71d67251))
- much faster lookup performance for large vaults 🚀🚀🚀  ([3ddeba8](https://github.com/dendronhq/dendron/commit/3ddeba8a596be4bc9316e0cc5e63025d7bf4460f))
- support [[sibling nav|dendron.topic.commands#go-next-sibling]] for multi-vault ([235bfc7](https://github.com/dendronhq/dendron/commit/235bfc77505b403bf32c78ce3df6b7005c37dfba))

### Bug Fixes

- publishing fails in some cases when multi-vault is enabled ([0ebac81](https://github.com/dendronhq/dendron/commit/0ebac8191291f48ab42fbc30279e9615c96a5245))
- journal and scratch notes fail in some cases for multi-vault ([5c04ccd](https://github.com/dendronhq/dendron/commit/5c04ccd666511abb79554b7a24c02efd46d93c3a))
- multiple commands not working properly for multi-vault([fd5a381](https://github.com/dendronhq/dendron/commit/fd5a381674384588850b07b193fc0bf609abc0fd))

### House Cleaning
- breaking: the [[go to sibling|dendron.topic.commands#go-next-sibling]] commands have a new keyboard shortcut since the old one was conflicting with the vscode default. the new shortcuts are `ctrl+shift+]` and `ctrl+shift+[`