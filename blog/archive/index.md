---
title: All thoughts by time
---
<!-- From https://bitbucket.org/christianspecht/blog/src/0b3d2dbfd9488d63c6ed0c3b899f6625c12ba6a4/src/tags/index.html?at=default -->
<!-- Read more: http://christianspecht.de/2014/10/25/separate-pages-per-tag-category-with-jekyll-without-plugins/ -->

<p><a href="/full-thoughts/">Full thoughts</a> in <strong>bold</strong>. Browse <a href="/blog/tags/">by tag</a> instead.</p>

{% for post in site.posts %}
  {% unless post.next %}
<h3>{{ post.date | date: '%B %Y' }}</h3><p>
    {% else %}
      {% capture month %}{{ post.date | date: '%B %Y' }}{% endcapture %}
      {% capture nmonth %}{{ post.next.date | date: '%B %Y' }}{% endcapture %}
      {% if month != nmonth %}
<h3>{{ post.date | date: '%B %Y' }}</h3><p>
      {% endif %}
	{% unless month != nmonth %} • {% endunless %}
    {% endunless %}
{% if post.categories contains 'full-thoughts' %}<strong>{% endif %}<a href="{{ post.url }}">{{ post.title }}</a>{% if post.categories contains 'full-thoughts' %}</strong>{% endif %}
{% endfor %}</p>