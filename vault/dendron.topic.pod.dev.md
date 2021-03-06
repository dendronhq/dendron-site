---
id: 5de219e6-d9b9-4abf-9367-998109cd57cd
title: Developing a Pod
desc: ''
updated: 1614965542487
created: 1614201272488
---
## Summary

- status: WORK_IN_PROGRESS 🚧

In this module, we'll go over how to create a custom pod. You can clone the end result [here](https://github.com/dendronhq/hello-pod)

## Pre-requisites

- Install dendron-cli
  ![[dendron.topic.cli#installation,1:#*]]
- [[Install Dendron|dendron.guides.install#install]] and have a workspace initialized

## Tutorial

### Create your pod

- NOTE: this tutorial goes over developing using javascript. All Dendron packages are typed and can also be developed using typescript

```sh
mkdir hello-pod
npm init -y
npm install --save @dendronhq/pods-core
touch index.js
```

Open index.js and add the following

```js
const { PublishPod } = require("@dendronhq/pods-core");

class HelloPod extends PublishPod {
  static id = "hello";
  static description = "Add a hello statement";

  async plant(opts) {
    const { note } = opts;
    const body = note.body;
    return ["Hello World", body].join("\n");
  }
}

module.exports = {
  pods: [HelloPod],
};
```

## Testing your pod

1. Create a symlink of your current package. This lets you use your package locally in other projects
   ```sh
   npm link
   ```
2. Go to your [[workspace root|dendron.ref.layout#workspace-root]].
   ```sh
   cd $WORKSPACE_ROOT
   ```
3. If you don't have a `package.json` already , create one by running `npm init -y`
   ```sh
   npm init -y
   ```
4. Link to your created pod
   ```sh
   npm link hello-pod
   ```
5. Excecute your pod
   ```sh
   dendron-cli publishPod --wsRoot . --podId hello --podPkg hello-pod --podSource remote --config fname=dendron,vaultName=vault,dest=stdout
   ```
   - since I was running this in a new Dendron vault, I got the following output

```markdown
Hello World

## The Trail 🥾

Here are the basics of Dendron so you can get started growing your knowledge base.
- [ ] Create your first note.
    - [ ] Dendron uses the [lookup](https://www.dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#lookup-menu) command to create. So, hit CMD+L (or ctrl+L if you're on Windows) to bring up the lookup bar, type in a new note name and hit enter to create it. You can also run the lookup command through the command palette "Dendron: Lookup".
    - [ ] Wiki-style links are supported. If the note doesn't exist, we'll create the note for you. For example, just try [[this link]] from the editor view.
- [ ] Find your notes. Dendron really shines when you need to look up notes quickly. For this, you use *drumroll* the lookup command (again). Just hit CMD/ctrl+L and you can search your entire set of notes.
- [ ] To delete a note, navigate to it and use the "Dendron: Delete Node" command. As with everything else in VSCode, bring up the command palette with CMD/ctrl+shift+P and run the command.
- [ ] Use a [snippet](https://www.dendron.so/notes/9eca1992-7540-4d9d-97fb-328b27748b2c.html) for quick note templates
- [ ] Insert an [image](https://www.dendron.so/notes/a91fd8da-6895-49fe-8164-a17acd8d9a17.html)
- [ ] Create some [links](https://www.dendron.so/notes/3472226a-ff3c-432d-bf5d-10926f39f6c2.html)
- [ ] [Publish](https://www.dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html) your vault
- [ ] Join us on [discord](https://discord.com/invite/6j85zNX) and discuss all things knowledge management with your fellow trail blazers.
- [ ] For more information, see Dendron's basic [concepts](https://www.dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html)
```

### Pass in custom configuration values

We're going to make our publishing a little more dynamoc by using custom configuration. 

Modify your pod to accept a new configuration parameter

```js
const { PublishPod } = require("@dendronhq/pods-core");

class HelloPod extends PublishPod {
  static id = "hello";
  static description = "Add a hello statement";

  get config() {
    return super.config.concat([
      {
        key: "name",
        description: "dev.to api key",
        type: "string",
      },
    ]);
  }

  async plant(opts) {
    const { note, config } = opts;
    const body = note.body;
    return [`Hello ${config.name}`, body].join("\n");
  }
}

module.exports = {
  pods: [HelloPod],
};

```

Below is a diff to make the changes a bit more obvious.
![diff of code](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pod-change.jpg)

Run the pod again the the additional argument.

````
```sh
dendron-cli publishPod --wsRoot . --podId hello --podPkg hello-pod --podSource remote --config fname=dendron,vaultName=vault,dest=stdout,name=Albert
```
````

```markdown
Hello Albert

## The Trail 🥾
...
```

### Use Note Metadata

Pods have full access to all the metadata attached to a note. You can see the pod arguments below
![[dendron.topic.pod.sdk#plantopts-publishpodplantoptst,1]]

TODO - You can see an example of this [[here|dendron.pro.devto-pod]]

### Using Typescript

TODO - You can see an example of this [[here|dendron.pro.devto-pod]]

