# Vesta website

This repository contains the static Vesta website. The deployable site is already assembled in `dist/`; there is no build step or package installation required.

## Deploy to GitHub Pages

1. Push this `website` directory to a GitHub repository with the `main` branch.
2. In **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run **Deploy Vesta website to GitHub Pages** from the Actions tab.

The workflow publishes `dist/` and keeps the site compatible with a repository URL such as `https://your-user.github.io/your-repository/`. Internal links and assets intentionally use relative paths, so the site also works from a custom domain.

Before making the site public, replace the placeholder publisher details and email addresses in `dist/site-config.js`.
