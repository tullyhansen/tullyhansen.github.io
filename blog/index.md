---
title:		Blog
exclude:	false
weight:		4
# redirect_from: "/foo/"
---

[Half-thoughts][] posted daily (for consistency); [full thoughts][] published weekly (for craft).

Browse all thoughts [by tag][] or [by time][].

## Latest Full Thoughts

{% for post in site.categories.full-thoughts limit:3 %}
<p>{% include post-title-and-date.html %}</p>
<p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>
  
{% endfor %}

## Recent Half-Thoughts

<p>{% for post in site.categories.half-thoughts limit:7 %}
<a href="{{ post.url }}">{{ post.title }}</a>{% if forloop.last != true %} • {% endif %}{% endfor %}</p>

[Half-thoughts]: /half-thoughts/ "Half"
[full thoughts]: /full-thoughts/ "Full"
[by tag]: /blog/tags/ "Browse by tag"
[by time]: /blog/archive/ "Browse by time"