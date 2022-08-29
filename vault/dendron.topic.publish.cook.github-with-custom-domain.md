---
id: 7d21lt325bkbcyun2a01949
title: Custom Domain Name
desc: ''
updated: 1661799239761
created: 1661798337358
---

If you are wanting to use your own domain name, follow the GitHub documentation [about custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages). ^github-custom-domain-names

## Github Actions
If you are using [[dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action]], you can add the `cname` to the workflow file.

The workflow YAML includes a commented out value, `cname`, at the very bottom of the configuration. You can uncomment this line, and use your own domain name as so.

```yaml
    - name: Deploy site
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_branch: pages
        publish_dir: docs/
        force_orphan: true
        cname: example.com
```

## siteUrl

Ensure that your `siteUrl` is adjusted properly in `dendron.yml`:

```yaml
publishing:
    siteUrl: https://example.com
```

- NOTE: When using custom domain names, `assetsPrefix` isn't required like it otherwise would be with GitHub Pages. Remove `assetsPrefix` if it is present in your `dendron.yml`, otherwise the website may not load as expected.