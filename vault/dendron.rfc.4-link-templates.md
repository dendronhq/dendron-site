---
id: 7117a023-f090-47f5-a104-5968fc256c23
title: 4 Richer Templating
desc: ''
updated: 1615160638029
created: 1613929636812
---

## Goals

More powerful templating features for Dendron

## Details

## Proposal

Use [nunjucks](https://mozilla.github.io/nunjucks/) to customize Dendron

### Example

- overriding properties in a link
```
{{ ![[foo]] | config(prettyRef = false) }}
```

- rendering a note ref with a custom template
    ```
    {{ ![[people.john]] | template("person") }}
    ```
    - raw note
    ```
    ---
    title: John Snow
    homepage: https://john.dendron.wiki
    discord: @john123
    email: john@hey.me
    ---
    ```

    - template
    ```
    {% block content %}

    # [{{fm.title}}]({{fm.homepage}})

    - discord: {{fm.discord}}
    - email: {{fm.email}}

    {% endblock %}
    ```

    - output
    ```md
    # [John Snow](https://john.dendron.wiki)

    - discord: @john123
    - email: john@hey.me

    ```



## Tradeoffs
- pros
- cons
    - slow down compilation time

## Related

## People
