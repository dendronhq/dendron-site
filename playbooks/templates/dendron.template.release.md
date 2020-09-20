---
id: 8e59e25f-808c-42f1-a82a-e9ce4fd8edd8
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
{% for ctype_order, entries_list in entries | groupby('ctype') %}
{% set ctype = ctype_order.split("-")[1] %}
{% if ctype == "feat" %}
{% for item in entries_list %}
### {{ item['cmsg'] }} 

{{ item['desc'] }}

{% endfor %}
{% endif %}
{% if ctype == "enhance" %}
### Enhancements
{% for item in entries_list %}
- {{ item['cmsg'].capitalize() }}
{% if item['desc'] != '' %} {{ item['desc'] }} {% endif %} 
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

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.

{% for ent in contributors %}
{%if ent.profile != '' %}
- [{{ ent.name }}]({{ ent.profile }})
{% else %}
- {{ ent.name }}
{% endif %}
{{ ent.for | indent(4, True) }}
{% endfor %}