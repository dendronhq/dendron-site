---
id: PDW94NYMx2eV0VJuTES1s
title: Trouble
desc: ''
updated: 1634591083045
created: 1634591074560
---

## Checklist
- [ ] is the subprocess running? [[logs|pkg.plugin-core.ops.logs#start-engine-process]]
- [ ] did note indexing finish successfully? [[logs|pkg.plugin-core.ops.logs#finish-indexing-notes]]

## Troubleshooting

### Something went wrong during the build

In case something something goes wrong with a build step or you want to save time by not running everything, `init.sh` is just a thin wrapper around the following scripts, each of which can be run individually

- ./bootstrap/scripts/bootstrap.sh: `lerna bootstrap all packages`
- ./bootstrap/scripts/build.sh: `lerna build all packages`

### Changes not showing up in Dendron

1. Are you using the `Run extension` command on the debugger panel to test dendron? 

2. If you have one vscode instance which you have dendron installed and are also doing dendron development on, you might get a version conflict. in that case, use `Run extension with plugin disabled` in the debugger panel (or use a different version of vscode to run dendron vs develop)

### Husky Hooks not running

Make sure you run `yarn` at the root of your workspace 
