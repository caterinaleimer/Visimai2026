# VISIMAI 2026

Static React/Vite website prepared for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Publish on GitHub Pages

1. Create a GitHub repository, for example `visimai-2026`.
2. Upload this project and push it to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The included workflow will deploy the site automatically.

The Vite configuration uses `base: "./"`, so the site works both as a project page and as a root `username.github.io` page.

## Michele's image

The Lovable export contained only a remote `.asset.json` reference, not the actual PNG. The current page therefore uses an `MV` placeholder. To add the real image:

1. Copy it to `src/assets/michele-visinoni.png`.
2. Import it in `src/App.jsx`.
3. Replace the `MV` placeholder block with an `<img>` element.
