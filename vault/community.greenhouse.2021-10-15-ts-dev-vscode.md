---
id: gxnwBlVKDivSDH1daqejk
title: Typescript Development with Dendron and VSCode
desc: ''
updated: 1639201287844
created: 1634063154566
---


## Summary

In this talk, Kevin, Dendron founder, will go over his workflow for Dendron development using typescript and VSCode. 

- Date: 2021.10.15
- Time: 7:30AM PST
- Location: `#teatime` channel in [Discord](https://link.dendron.so/discord)
- Calendar link: https://lu.ma/373tr1ap

## Agenda
- vscode setup: extensions and settings
- process for breaking down a task
- using Dendron to augment the development process
- test and debug process
- questions

## Outputs
- Recording: https://youtu.be/8KxXZ6DPtXA
- Pull request: https://github.com/dendronhq/dendron/pull/1526
- During the talk, we had an issue where the debugger was exiting early. this was because of the default jest timeout. Adding `jest.timeout(100000);`  below the `test` fixes the issue
    ```ts
    test(foo, ()=> {
        jest.timeout(100000);
    });
    ```

## Speaker Notes

The following were my personal notes for the talk

### Pre-req
- quicktime test
- note: [[Support Format Option for Dendron Note CLI|dendron://private/scratch.2021.10.14.195007.support-format-for-dendron-note-cli]]

### VSCode
- installed
    - gitlens
    - prettier
    - vim
- settings
- layout
    - four pane split
        - top is main
    - bottom is secondary

### Starting on a task
- write out goal
- write subtasks
- write commit message
- write tests
- write impl

### Code
- go to tests, run 
- open up package.json for package
- check snapshot
- test-workspace.sh

### Navigation
- focus breadcrumbs: cmd shift . 
- find all references
- search
    - limit search to right extension (eg. ".ts")
    - for React components, sometimes search by folder 
        - sidebar/index.html

