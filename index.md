---
layout: home
title: About Me
permalink_name: /home
title: Matthews-Project-Vault
detail_image: assets\home_screen_deatil_header.svg
---

<div>
<h1> Welcome to My Website </h1>
<p> Hey there I'm Matt Smith, not Matt Smith, just another Matt Smith. </p>
<p> Welcome to my site this is my online portfolio. My field of study is cybersecurity, with a focus on encryption algorithms, IoT device security, and programming. </p>
</div>

---

<div class="section">
<h1> Areas of Expertise </h1>
  <div class="content">
  <h2> Encryption Algorithms  <em>- Diffie-Hellman, RSA, MD5, HTTPS, TLS</em> </h2>
  <h2> IoT Device Security <em>- TLS/SSL, Baselineing, Network segmentation</em> </h2>
  <h2> IDS (Intrusion Detection Systems) <em>- Snort++, Suricata</em> </h2>
  <h2> Programming <em>- Python, JavaScript, SQL, Ruby, C++</em> </h2>
  <br><hr>
  <h2> Security Focus:</h2> My primary focus is on identifying and mitigating security vulnerabilities.
  <h2> Technical Proficiency:</h2> Proficient in various cybersecurity tools and techniques.
  <h2> Continuous Learner:</h2> I thrive on the challenge of staying informed about the latest trends, tools, and best practices in the cybersecurity      field. 
  </div>
Check out my <a href="/about_me" >about me</a> page for more information on my experience and qualifications.
</div>

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
Explore my <a href="/blog" >projects</a> page, where I share projects from my classes and insights into interesting cybersecurity fields.
</section>

---

<section>
<h1> A Little About My Site </h1>
A copy of this site is available on my GitHub repository, wilsons-private-vault. I built this site with Jekyll's default template, Minima. I give permission for anyone to use my template on their Jekyll site. If you want to build a site and use my template, just follow Jekyll's documentation and grab a copy of my site to use as a template.
<a href="https://jekyllrb.com/docs/" target="_blank">Jekyll Docs</a>
</section>








































