---
title: Full thoughts
---
Full thoughts posted weekly. View daily [half-thoughts][], or browse all [by time][] or [by tag][].

[half-thoughts]: /half-thoughts/ "Half thoughts."
[by tag]: /blog/tags/ "Browse by tag"
[by time]: /blog/archive/ "Browse by time"

<!-- 
<p>{% for post in site.categories.full-thoughts %}
	{% unless post.next %}
<a href="#{{ post.date | date: '%Y' }}">{{ post.date | date: '%Y' }}</a>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
<a>{{ post.date | date: '%Y' }}</a>
      {% endif %}
    {% endunless %}
{% endfor %}</p>
 -->

{% for post in site.categories.full-thoughts %}
	{% unless post.next %}
<a name="#{{ post.date | date: '%Y' }}"></a>
<h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
<a name="#{{ post.date | date: '%Y' }}"></a>
<h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
<p>{% include post-title-and-date.html %}</p>
<p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>{% endfor %}