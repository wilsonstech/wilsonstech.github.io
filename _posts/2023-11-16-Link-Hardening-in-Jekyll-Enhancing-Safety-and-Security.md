---
layout: post
title: "Link Hardening in Jekyll Enhancing Safety and Security"
date: "2023-11-16"
published: true
---

# Link Hardening in Jekyll: Enhancing Safety and Security

Link hardening is a technique for safety and security of hyperlinks on your website. Its main goal is to implement measures that obfuscate or safeguard links, mitigating potential online threats like phishing attacks or link manipulation. This guide will walk you through the process of implementing link hardening in your Jekyll site to strengthen your website's defenses, and how I use it on my site for saftey when useing urls or links off my site.

## 1. Understanding the Need for Link Hardening

Sharing links online exposes them to various malicious activities, including URL manipulation and impersonation. Link hardening acts as a deterrent, making it more challenging for attackers to exploit or mislead users through manipulated links.

## 2. How to Use Link Hardening in Jekyll

### a. Markdown Link

When incorporating links into your Jekyll site using Markdown, employ the following syntax:

```markdown
[Link Text](URL)
```

For instance, in my "about_me" section, I've structured my links as follows

```markdown
[Semester One](PATH_TO_FILE)&nbsp;&nbsp;&nbsp;&nbsp;[Semester Two](PATH_TO_FILE)
```

The &nbsp; is utilized to create spaces between the two URLs, aligning my first and second-semester classes on the same line.

For external links, such as my LinkedIn profile in the "about_me" page, a similar approach is followed

```markdown
[LinkedIn Profile](https://www.linkedin.com/in/matthew-smith-76315425b/)
```

By implementing link hardening in your Jekyll site, you contribute to a more robust defense against potential security threats, ensuring a safer online experience for your visitors.










