---
layout: home
title: About Me
permalink_name: /home
title: Matthews-Project-Vault
detail_image: assets\home_screen_deatil_header.svg
---

# Welcome to My Website

Hey there I'm Matt Smith, not Matt Smith, just another Matt Smith.

Welcome to my site this is my online portfolio. My field of study is cybersecurity, with a focus on encryption algorithms, IoT device security, and programming.

---

## Areas of Expertise

**Encryption Algorithms**
***- Diffie-Hellman, RSA, MD5, HTTPS, TLS***

**IoT Device Security**
***- TLS/SSL, Baselineing, Network segmentation***

**IDS (Intrusion Detection Systems)**
***- Snort++, Suricata***

**Programming**
***- Python, JavaScript, SQL, Ruby, C++***

**Security Focus:** My primary focus is on identifying and mitigating security vulnerabilities.

**Technical Proficiency:** Proficient in various cybersecurity tools and techniques.

**Continuous Learner:** I thrive on the challenge of staying informed about the latest trends, tools, and best practices in the cybersecurity field.

---

<section>

<h1> Latest Projects </h1>

<div class="article-list">
  {% assign count = 0 %}
  {% for post in site.posts %}
    {% if count < 1 %}
      <div class="article-card">
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>{{ post.title | escape }}</h2>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
      </div>
      {% assign count = count | plus: 1 %}
    {% endif %}
  {% endfor %}
</div>

Explore my <a href="/blog" >articles</a> page, where I share projects from my classes and insights into interesting cybersecurity fields.

</section>

---

<section>

<h1> A Little About My Site </h1>

Building this site was a side project for me while I go to school. I built this site entirely myself, using Jekyll. It introduced me to the Ruby programming language and how to use GitHub through my command line.
<br>
A copy of this site is available on my GitHub repository, wilsons-private-vault. I built this site with Jekyll's default template, Minima. I give permission for anyone to use my template on their Jekyll site. If you want to build a site and use my template, just follow Jekyll's documentation and grab a copy of my site to use as a template.

<a href="https://jekyllrb.com/docs/" target="_blank">Jekyll Docs</a>

</section>








































