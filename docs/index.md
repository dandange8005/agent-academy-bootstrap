---
layout: home

hero:
  name: Agent Academy Bootstrap
  text: Ship polished learning docs fast
  tagline: A docs-first starter designed for course content, labs, and internal playbooks.
  image:
    src: /logo.svg
    alt: Agent Academy Bootstrap
  actions:
    - theme: brand
      text: Start Authoring
      link: /CONTRIBUTING
    - theme: alt
      text: View on GitHub
      link: https://github.com/dandange8005/agent-academy-bootstrap

features:
  - icon: 🧭
    title: Structured Navigation
    details: Maintain clear course pathways with sidebar and nav config in one place.
  - icon: ⚡
    title: Fast Authoring Loop
    details: Edit Markdown and preview instantly with VitePress live reload.
  - icon: 🚀
    title: Automated Publishing
    details: Push to main and let GitHub Actions deploy directly to GitHub Pages.
---

## Build Pipeline

```mermaid
flowchart LR
  A[Write markdown] --> B[Local preview]
  B --> C[Build check]
  C --> D[Push to main]
  D --> E[GitHub Pages publish]
```

## What to edit first

- Add your first lesson pages under `docs/`.
- Update nav and sidebar in `docs/.vitepress/config.mts`.
- Follow `docs/CONTRIBUTING.md` for update, preview, and publish steps.
