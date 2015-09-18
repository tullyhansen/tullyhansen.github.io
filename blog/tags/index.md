---
title: All thoughts by tag
---
<!-- From https://bitbucket.org/christianspecht/blog/src/0b3d2dbfd9488d63c6ed0c3b899f6625c12ba6a4/src/tags/index.html?at=default -->
<!-- Read more: http://christianspecht.de/2014/10/25/separate-pages-per-tag-category-with-jekyll-without-plugins/ -->

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

<p><a href="/full-thoughts/">Full thoughts</a> in <strong>bold</strong>. Browse <a href="/blog/archive/">by time</a> instead.</p>
<p>There {% if sortedtags.size != 1 %}are{% else %}is{% endif %} currently {{ sortedtags | size }} tag{% if sortedtags.size != 1 %}s{% endif %} in use: {% for tag in sortedtags %}{% if forloop.first != true %}{% if forloop.last == true %} and {% else %}, {% endif %}{% endif %}<a href="#{{ tag }}">{{ tag }}</a>{% endfor %}.</p>

{% for tag in sortedtags %}
<h3 id="{{ tag }}">{{ tag }} ({{ site.tags[tag] | size }})</h3>

  {% for post in site.tags[tag] %}
{% if post.categories contains 'full-thoughts' %}<strong>{% endif %}<a href="{{ post.url }}">{{ post.title }}</a>{% if post.categories contains 'full-thoughts' %}</strong>{% endif %}{% if forloop.last != true %} • {% endif %}{% endfor %}
{% endfor %}