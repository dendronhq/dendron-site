---
id: zDqYUhNE10HXlmStfqwVD
title: An Example of a Blue Tag
desc: ""
updated: 1630361025850
created: 1628316561344
color: "#1D32E6"
---

Any tags leading to this tag note will look blue. Here is what the [[frontmatter|dendron.topic.frontmatter]] of this note looks like:

```yaml
---
id: zDqYUhNE10HXlmStfqwVD
title: Blue
desc: ""
updated: 1628316778791
created: 1628316561344
color: "#1E32E6"
---
```

This is just one way to set up the color. You can also use the `rgb` function notation:

```yaml
color: "rgb(30, 50, 230)"
```

Or `hsl`:

```yaml
color: "hsl(234, 80%, 51%)"
```

You can actually use any [[CSS color|https://developer.mozilla.org/en-US/docs/Web/CSS/color_value]] you'd like, but Dendron only recognizes the ones listed above. Dendron adds translucency to any color it recognizes, which makes the colors fit better both in the editor and in publishing. If you are using some other color type Dendron doesn't recognize, make sure to check that it looks okay.
