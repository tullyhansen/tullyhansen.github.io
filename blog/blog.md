---
layout: page
title: Blog
permalink: /blog/

---

## Blog Posts

{% for post in site.categories.blog %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}