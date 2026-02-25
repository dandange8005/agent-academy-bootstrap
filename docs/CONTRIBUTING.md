# Contributing Guide

This guide explains how to update, preview, and publish content for this site.

## Prerequisites

- Node.js 18+ (Node.js 22 recommended)
- npm
- Access to this GitHub repository

## Project Structure

- `docs/` - All documentation pages (Markdown)
- `docs/.vitepress/config.mts` - Site navigation, sidebar, and theme config
- `.github/workflows/deploy-vitepress.yml` - GitHub Pages deployment workflow

## 1) Update Content

1. Create or edit Markdown files in `docs/`.
2. Update navigation/sidebar in `docs/.vitepress/config.mts` if you add new pages.
3. Keep links relative and verify they point to existing pages.

Example:

```bash
# create a new lesson file
mkdir -p docs/recruit
touch docs/recruit/lesson-01.md
```

## 2) Preview Locally

From the project root:

```bash
npm install
npm run docs:dev
```

- Open the local URL shown in terminal (usually `http://localhost:5173`).
- VitePress auto-reloads when you save changes.

## 3) Build Before Publishing

Run a production build check:

```bash
npm run docs:build
```

Optional preview of the production build:

```bash
npm run docs:preview
```

## 4) Publish to GitHub Pages

Publishing is automatic on push to `main`.

```bash
git add .
git commit -m "docs: update content"
git push
```

Then:

1. Go to the repository `Actions` tab.
2. Confirm `Deploy VitePress site to Pages` finishes successfully.
3. Open the published site URL from Pages settings/workflow output.

## One-Time Repository Setup (if needed)

In GitHub repository settings:

1. Open `Settings` -> `Pages`.
2. Set source to `GitHub Actions`.

## Suggested Authoring Workflow

1. Edit content in `docs/`.
2. Preview with `npm run docs:dev`.
3. Validate with `npm run docs:build`.
4. Commit and push changes.
5. Verify deployment in `Actions`.
