---
title: Writer. Computer. Lover.
---
Wait, I punctuated that poorly.

### About

Tully Hansen is a writer based in Melbourne, Australia and [on Twitter][] in roughly equal measure. He is currently in the process of building a new personal site.

<img src="img/MoMotorCity8021construct.gif">

### The Last Post

{% for post in site.posts limit:1 %}
<p>{% include post-title-and-date.html %}</p>
<p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>
{% endfor %}

[on Twitter]: https://twitter.com/tullyhansen "Tully Hansen (@tullyhansen) on Twitter"