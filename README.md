# Muhammad Abbas — Portfolio

A fast, dependency-free portfolio site (plain HTML/CSS/JS — no build step, no framework) with light/dark mode, built to be hosted on GitHub Pages and updated by editing one file.

## File structure

```
portfolio/
├── index.html          ← page structure (rarely needs editing)
├── css/
│   └── style.css       ← all styling, colors, and responsive rules
├── js/
│   ├── data.js          ← ALL YOUR CONTENT — edit this to update the site
│   └── main.js          ← rendering + theme toggle + nav logic (rarely needs editing)
├── assets/
│   └── favicon.svg
├── .nojekyll             ← tells GitHub Pages to skip Jekyll processing
└── README.md
```

**To update your site, you almost always only need to edit `js/data.js`.** It holds your name, education, publications, experience, skills, certifications, and references as a plain JavaScript object. `main.js` reads that file and builds the page from it automatically.

---

## 1. Preview the site locally

You can't just double-click `index.html`, because browsers block JavaScript module-style file loading over `file://`. Instead, run a tiny local server from the `portfolio` folder:

```bash
cd portfolio
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser. Stop the server with `Ctrl+C` when you're done.

(If you don't have Python, any static server works — e.g. `npx serve` if you have Node.js installed.)

---

## 2. Add your real links and CV (optional but recommended)

Open `js/data.js` and fill in whatever you have:

```js
links: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  googleScholar: "https://scholar.google.com/citations?user=...",
  cvFile: "assets/Abbas_CV.pdf"   // if you add your CV PDF to the assets folder
}
```

Any field left as `""` is automatically hidden — you don't need to delete the buttons, just leave the value blank until you have it. If you add a CV PDF, drop the file into the `assets/` folder and point `cvFile` at it.

**Social & professional links:** the footer's "Let's connect" section renders a glass card for each link in `personal.links` (GitHub, Google Scholar, ORCID, Instagram, Facebook) plus your email — automatically, in the same hide-if-empty way. Fill in whichever real profile URLs you have; leave the rest as `""`.

**Your photo:** the hero portrait comes from `personal.photo` (currently `assets/portrait.jpg`). Swap in a different image any time by replacing that file (or pointing `photo` at a new filename in `assets/`), or set `photo: ""` to fall back to a text-only hero.

**Certificates:** the Certifications section renders real certificate images grouped by program, defined in the `certifications` array in `js/data.js`. Each entry has a `title`, `date`, an `image` path (files live in `assets/certificates/`), and a `verifyUrl` (set to `""` to hide the verify link). To add a new certificate, drop the image into `assets/certificates/` and add an entry to the relevant group's `items` array — or start a new group with its own `program` name.

When you have a real preprint/arXiv link for a publication, add it to that publication's `link` field in `js/data.js` and the "coming soon" label will turn into a live "View preprint" button automatically.

---

## 3. Put it on GitHub

### a) Create the repository
1. Go to [github.com/new](https://github.com/new).
2. Name it whatever you like — e.g. `portfolio`. (See the note below about repo naming if you want the site at the root of `your-username.github.io`.)
3. Keep it **Public** (GitHub Pages is free for public repos on any plan).
4. Don't initialize with a README (you already have one) — leave it empty.
5. Click **Create repository**.

### b) Push your files
From inside the `portfolio` folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and the repo name you chose.

### c) Turn on GitHub Pages
1. On GitHub, open your repository → **Settings** → **Pages** (left sidebar, under "Code and automation").
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose **main** and folder **/ (root)**, then click **Save**.
4. Wait 1–2 minutes. Refresh the Pages settings page — a banner will show your live URL:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

That's it — your site is live.

> **Tip — root URL instead of a subfolder:** if you name the repository exactly `YOUR-USERNAME.github.io`, GitHub Pages serves it directly at `https://YOUR-USERNAME.github.io` with no extra path segment. Everything else about these steps stays the same.

---

## 4. Updating the site later

Every time you want to change something:

```bash
# edit js/data.js (or any file), then:
git add .
git commit -m "Update publications"
git push
```

GitHub Pages automatically rebuilds within a minute or two of the push — no manual redeploy step.

---

## 5. Optional: custom domain

If you own a domain and want e.g. `www.yourname.com` instead of the `github.io` address:
1. Add a file named `CNAME` (no extension) to the repo root containing just your domain, e.g. `portfolio.yourname.com`.
2. At your domain registrar, add a `CNAME` DNS record pointing that subdomain to `YOUR-USERNAME.github.io`.
3. Back in **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** once it's verified (can take a few hours).

---

## Design notes

- **Theme:** the light/dark toggle (top right) remembers the visitor's choice in `localStorage` and otherwise follows their OS preference.
- **Colors, fonts, and spacing** are defined as CSS custom properties at the top of `css/style.css` under `:root` (light) and `[data-theme="dark"]` (dark) — change values there to retheme the whole site consistently.
- **Fonts:** Newsreader (headings), Inter (body text), IBM Plex Mono (labels/badges/nav) — loaded from Google Fonts in `index.html`.
- Respects `prefers-reduced-motion` (disables the hero scan-line animation and scroll reveals for visitors who've asked for reduced motion).

## Troubleshooting

- **404 on the live URL** — double check Settings → Pages shows a green "Your site is live" banner, and that you're visiting the exact URL shown there (including the repo name in the path, unless you used the `username.github.io` naming trick).
- **Site looks unstyled / broken** — usually a caching issue after a fresh deploy; hard-refresh (`Cmd/Ctrl + Shift + R`) or wait a minute and retry.
- **Changes not showing up** — confirm `git push` succeeded (`git status` should say "working tree clean" and "up to date with origin/main"), then check the **Actions** tab on GitHub for the Pages build status.
