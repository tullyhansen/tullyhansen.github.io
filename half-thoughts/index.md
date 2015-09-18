---
title: Half-thoughts
---
Half-thoughts posted daily. View weekly [full thoughts][], or browse all [by time][] or [by tag][].

[full thoughts]: /full-thoughts/ "Full thoughts."
[by tag]: /blog/tags/ "Browse by tag"
[by time]: /blog/archive/ "Browse by time"

{% for post in site.categories.half-thoughts %}
	{% unless post.next %}
<h3>{{ post.date | date: '%B %Y' }}</h3><p>
    {% else %}
      {% capture month %}{{ post.date | date: '%m' }}{% endcapture %}
      {% capture nmonth %}{{ post.next.date | date: '%m' }}{% endcapture %}
      {% if month != nmonth %}
<h3>{{ post.date | date: '%B %Y' }}</h3><p>
      {% endif %}
	{% unless month != nmonth %} • {% endunless %}
    {% endunless %}
<a href="{{ post.url }}">{{ post.title }}</a>{% endfor %}</p>