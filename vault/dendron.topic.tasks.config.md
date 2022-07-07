---
id: 3h1jfpuz3amtju1tzfvb7vr
title: Config
desc: ''
updated: 1657227150278
created: 1657224242401
config:
  global:
    enableChildLinks: false
---

Configuration for tasks are under `workspace.task` namespace

```yaml
workspace:
  task:
    ...
```

### General 
- [[name|dendron://dendron.dendron-site/dendron.topic.tasks.config.name]]
- [[addBehavior|dendron://dendron.dendron-site/dendron.topic.tasks.config.add-behavior]]
- [[dateFormat|dendron://dendron.dendron-site/dendron.topic.tasks.config.date-format]]

### Task Display
Dendron uses this configuration to map the priority and status symbols used in the frontmatter to what gets displayed on the screen. By changing these configurations, you can change what gets displayed.

```yaml
workspace:
    ...
    task:
        statusSymbols:
            "": " "
            "done": "x"
            ...
        prioritySymbols:
            H: "high"
            M: "medium"
            L: "low"
        taskCompleteStatus: ["x", "done"]
```

- [[statusSymbols|dendron://dendron.dendron-site/dendron.topic.tasks.config.status-symbols]]
- [[prioritySymbols|dendron://dendron.dendron-site/dendron.topic.tasks.config.priority-symbols]]
- [[taskCompleteStatus|dendron://dendron.dendron-site/dendron.topic.tasks.config.task-complete-status]]

### Extensions
- [[todoIntegration|dendron://dendron.dendron-site/dendron.topic.tasks.config.todo-integration]]