---
layout: home
title: About Me
permalink_name: /home
title: Matthews-Project-Vault
detail_image: assets\home_screen_deatil_header.svg
---

# Welcome to My Website

 Hey there, I'm Matt, Smith, not Matt, Smith just another Matt, Smith.
 
 Welcome to my site, this is my online portfolio. My field of study is cybersecurity, with a focus on encryption algorithms, IoT device security, and programming.

---

### Areas of Expertise

**Encryption Algorithms**
***- Diffie-Hellman, RSA, MD5, HTTPS, TLS***

**IoT Device Security**
***- TLS/SSL, Baselineing, Network segmentation***

**IDS (Intrusion Detection Systems)**
***- Snort++, Suricata***

**Programming**
***- Python, JavaScript, SQL, Ruby, C++***

**Security Focus:** My primary focus is on identifying and mitigating security vulnerabilities to create safer digital environments.
  
**Technical Proficiency:** Proficient in various cybersecurity tools and techniques, with a knack for staying ahead in a rapidly changing tech landscape.
  
**Continuous Learner:** I thrive on the challenge of staying informed about the latest trends, tools, and best practices in the cybersecurity field.

---

Check out my [about me](/about_me) page for more information on my experience and qualifications.

---

## Latest Projects

<ul class="post-list">
  {% assign count = 0 %}
  {% for post in site.posts %}
    {% if count < 1 %}
      <li class="article-card">
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>{{ post.title | escape }}</h2>
        <div class="post-content">
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
        </div>
      </li>
      {% assign count = count | plus: 1 %}
    {% endif %}
  {% endfor %}
</ul>

Explore my [articles](/blog) page, where I share projects from my classes and insights into interesting cybersecurity fields.