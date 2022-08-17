# Adhinata.DEV website

This section includes about all of the things that related to this website project

## Web and Domain Design Goals
This domain is designed to provide two things, **sandboxing** my program using the subdomain I created, and creating a good __personal web__ that can be accessible to anyone who wants to know about me.

### 1. Sandboxing 
My apps or private backend that serve as subdomain will host using my beloved-and-old-reliable Android Phone. With SD636 SOC and 3GB of RAM in it, that should be fine for handling decent request below 100 user per second due to internet quota limitation. But for ready production backend or apps that will handle more than 100 request per second, I will use either my beefy PC (R5 3500X, 16GB RAM, RTX 3050) or online paid VPS such as Azure, Google Cloud, or AWS (not priority, i'm prefer free VPS if available). 

### 2. Personal Web
Then, my public personal website that using main domain will be hosted online using an additional free provider like Netlify, Github Pages, or Vercel (priority). This conclution choosed by two things. First, flexibility to develop website from anywhere, thanks for CI/CD from Github/Gilab. Second, reserving my monthly internet quota.

## Prototype

This is my [link to figma file](https://www.figma.com/file/WBoUkdcb0IzCNZtGtgJxN6/adhinata.dev?node-id=952%3A2)
- Front End -> react or hugo
- 