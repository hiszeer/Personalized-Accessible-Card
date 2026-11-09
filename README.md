# Apex Links

Caustic-themed link page (React + Vite). 1 column on mobile, 2 on desktop.

## Customize
- Edit `src/links.js` (name, tagline, links, tip buttons).
- Add your avatar as `public/avatar.png`.
- Add QR images as `public/qr/gcash.png` and `public/qr/binance.png`.
- Colors live at the top of `src/styles.css` (`--green`, etc.).

## Run locally
```
npm install
npm run dev
```

## Host on GitHub Pages
1. Create a GitHub repo and push this project to the `main` branch.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Push again (or run the workflow manually). Your site goes live at
   `https://<username>.github.io/<repo>/`.
