# Agent Academy Bootstrap

Starter project for a docs-focused site similar to Microsoft Agent Academy.

## Purpose

This project was inspired by the Microsoft Agent Academy Recruit course:
`https://microsoft.github.io/agent-academy/recruit/`.

The goal is to learn how to create a similar static resource/course website and document the full workflow using:

- VitePress
- Markdown
- Node.js
- GitHub Pages
- GitHub Actions

In short, this repo is a hands-on learning project for building and publishing a static docs site end to end.

## Tech Stack

- **Site framework:** VitePress
- **Content format:** Markdown
- **Runtime/tooling:** Node.js + npm
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## Quick start

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deploy

GitHub Pages deployment is configured in `.github/workflows/deploy-vitepress.yml`.

## Contributing

For content update, preview, and publishing instructions, see `docs/CONTRIBUTING.md`.
