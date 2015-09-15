---
layout: page
title: Blog
---

[Half-thoughts][] posted daily (for consistency); [full thoughts][] published weekly (for craft).

### Full Thoughts

{% for post in site.categories.full-thoughts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

### Full Thoughts

{% for post in site.categories.full-thoughts %}
#### [ {{ post.title }} ]({{ post.url }})
*{{ post.date | date_to_string }}*
  {{ post.excerpt }}
  
{% endfor %}

[More full thoughts…][]

### Recent Half-Thoughts

{% for post in site.categories.half-thoughts limit 7 %}
  * [ {{ post.title }} ]({{ post.url }})
{% endfor %}

[More half-thoughts…][]

[Half-thoughts]: http://www.html.com "test"
[full thoughts]: www.html.com "test2"
[More full thoughts]: www.html.com "test2"
[More half-thoughts…]:  "test2"