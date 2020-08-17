---
id: 075e9806-0367-40a2-8154-2e84d5a020e2
title: '{{ date }} Release Notes'
desc: ''
updated: 1596374871110
created: 1596374871110
---

# {{date}} Release Notes (version {{version}})

{{note}}

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)


{% for topic, entries in notes | groupby('topic')%}
## {{ topic.capitalize() }}
{% for ctype, entries_list in entries | groupby('ctype') %}
{% if ctype == "feat" %}
{% for item in entries_list %}
### {{ item['cmsg'] }} ([docs]({{ item['docs'] }}))

{{ item['desc'] }}

{% endfor %}
{% endif %}
{% if ctype == "enhance" %}
### Enhancements
{% for item in entries_list %}
- {{ item['cmsg'].capitalize() }}{% if item['desc'] != '' %}: {{ item['desc'] }} {% endif %} 
{% endfor %}

{% endif %}
{% if ctype == "fix" %}
### Fixes
{% for item in entries_list %}
- {{ item['cmsg'].capitalize() }}{% if item['desc'] != '' %}: {{ item['desc'] }} {% endif %} 
{% endfor %}

{% endif %}
{% endfor %}
{% endfor %}

## Thank You

Last and most of all, a big **thanks** to all these people that contributed issues and suggestions during this release.

{% for ent in contributors %}
- [{{ ent.name }}]({{ ent.profile }})
{% endfor %}