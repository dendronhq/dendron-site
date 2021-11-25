---
id: d0f34b08-0725-4ec5-a600-a4d6309bb2ae
title: Windows
desc: Windows gotchas
updated: 1615168192996
created: 1615165852271
---

The Dendron VSCode extension is built in TypeScript and uses a lot of JavaScript tooling to build and compile, and does not always play nice with Windows.

Here are some of the things to look out for:

## yarn

The current version of yarn fails[^yarn-8555] with npm v7. Downgrading to npm v6 is the only known workaround:

```sh
npm i -g npm@^6.14.11
```

## git

Most of the Dendron developers use Mac or Linux, so the file endings and permissions are not the same.
After you build Dendron, git will pick up a lot of file changes that don't actually exist [^diff].

In order to fix this (preferably do this before building Dendron):

- Create a .gitattributes file in the root of the Dendron repo and add `* text=auto` [^lineendings]
- run `git config --add core.filemode false` on the repo [^chmod]

If you are still seeing blank changes in git run:

- `git add --renormalize .` [^diff] (yes there is a single dot at the end of the command.)

## watch script

Dendron has a watch.sh script which will continuously compile all dependencies while you are developing. This is useful, but windows does not run shell scripts natively... 

The easiest way to run shell scripts on Windows is to use git BASH[^git][^gitbash], which gets automatically installed, when you install git for windows. (It should also already be on your PATH.)

Open git BASH inside the Dendron repo and run the script:

```sh
./bootstrap/scripts/watch.sh
```

[^yarn-8555]: ["Cannot create property 'module' on string '{\"module\":\"C:\\\\Users\\\\[USER]\\\\.npm-init.js\"}'".](https://github.com/yarnpkg/yarn/issues/8555#issuecomment-788099208)
[^diff]: [git status shows changed files but git diff doesn't](https://stackoverflow.com/questions/14564946/git-status-shows-changed-files-but-git-diff-doesnt)
[^lineendings]: [How to change line-ending settings](https://stackoverflow.com/questions/10418975/how-to-change-line-ending-settings)
[^chmod]: [How do I make git ignore file mode (chmod) changed?](https://stackoverflow.com/questions/1580596/how-do-i-make-git-ignore-file-mode-chmod-changes)
[^git]: [git for Windows](https://gitforwindows.org/)
[^gitbash]: [How to run shell scripts on Window](https://www.thewindowsclub.com/how-to-run-sh-or-shell-script-file-in-windows-10) See last comment
