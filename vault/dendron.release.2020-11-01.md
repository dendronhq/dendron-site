---
id: 98ad9b6b-53f3-4883-939e-e14055f2cac7
title: 2020-11-01 Release Notes
desc: ''
updated: 1604248991598
created: 1604241475533
---

# 2020-11-01 Release Notes (version 0.14)

Dendron 0.14 is here 🌱

At 14, Dendron might not yet be old enough to vote (if you are old enough and in the USA, please do that next week) but it is coming out of **preview** 🥳

Concretely, this means a few things:
1. Dendron is announcing our **[Environmentalist](https://accounts.dendron.so/account/subscribe)** plan, a 100% optional monthly subscription for users who like to support us financially
1. Dendron will now commit to a regular release cycle. New releases will go out at the beginning of every week. **Environmentalist** will get access to early builds and features every few days. 
1. Dendron will have a deprecation policy for all non-experimental (🚧) features. Any potentially breaking changes will first be deprecated and users will have at least a week's notice before a breaking change is made. 
1. Dendron is dropping the preview label 
    ![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/preview.png)

As part of getting out of preview, we are launching on [Product Hunt](https://www.producthunt.com/posts/dendron), a popular online catalogue for new products. If Dendron has been helpful in your life, we would appreciate it 🙏 if you could leave us some comments there. This will help new people discover our community!

<a href="https://www.producthunt.com/posts/dendron?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dendron" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=273037&theme=light" alt="Dendron - A better way to know | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

### Highlights
- complete [[server migration|dendron.roadmap.project.n.2020.server-migration]] for all users
- create [[snapshots|dendron.topic.capabilities.snapshot]] of your vault and restore them back to a specific point in time
- introduce [Environmentalist Plans](https://accounts.dendron.so/account/subscribe) for folks that want to support Dendron financially
- add [publishing](https://dendron.so/notes/66727a39-d0a7-449b-a10d-f6c438185d7f.html#publish) capability to pods (with ability to publish to json and regular markdown)
- support creating generated [table of contents](https://dendron.so/notes/ffa6a4ba-5eda-48c7-add5-8e2333ba27b4.html#toc) when publishing
- realtime schema validation when saving
- numerous enhancements 
- numerous bug fixes 
- better handling of errors and failures 

### Community
- new roles
    - introduce the **Environmentalist** role, created for folks that are keeping Dendron sustainable through a monthly contribution
        * Britt Selvitelle (@britt#3020)
        * Tom Diaz (@TomD#7339)
        * Kiran Pathakota (@kpats#8761)
        * Cristian Caratti (@ccaratti#2465)
        * Ken Sonoda (@ksoda#9504)
        * Adam Howard (@A Howard#8010)
        * Ladd Hoffmab (@Bassmann#5300)
        * Fayçal MITIDJI (@bsqrd#9701)
        * Tyler Nieman (@tsnieman#6157)
        * Ilana Lin (@ilana#7242)
        * Luke Roslanowski (@lukecarrier#2081)
        * Huw Millar 
        * Martin Stemplinger

    - introducing the **Horticulturalist** role, created for folks who have contributed to the Dendron code base
        * Britt Selvitelle (@britt#3020)
        * Luke Roslanowski (@lukecarrier#2081)
- we now have a new [[community|dendron.community]] section on our website that highlights the work and roles of our members

### House Keeping 
- `dendron.noServerMode` setting has been removed
- Dendron docs has been re-organized to be less overwhelming (if you have an links bookmarked, they will still all work because of Dendron's [permanent links](https://dendron.so/notes/5fcb8564-7209-4a80-9bb8-025bc8eb489b.html#permanent-ids))

### Upcoming

- Dendron office hours: this will be additional slots you can book outside of the initial onboarding to go over specific workflows. More details and schedule to follow in next week's release! 
- Dendron [[Multi Vault Support|dendron.roadmap.project.n.2020.multi-vault]]
- Better migration workflows from other tools into Dendron

### Thanks

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.

- [Britt](https://github.com/bs)


### Changelog

((ref: [[dendron.release.changelog]]#13.6:#0.12.11))