# TanDat Wildcat — GitHub Pages website

This is a static HTML/CSS/JavaScript recreation of the publicly visible TanDat Wildcat Wix website.

## Files
- `index.html` — Home
- `memberships-services.html` — Memberships & Services
- `meet-the-team.html` — Meet the Team
- `contact.html` — Contact
- `style.css` — shared styling and responsive layouts
- `script.js` — mobile navigation
- `assets/image-sources.json` — source URLs for the Wix-hosted images used in this recreation

## Publish with GitHub Pages
1. Create a new GitHub repository (for example, `tandat-wildcat`).
2. Upload the contents of this folder to the repository root (not the enclosing ZIP).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. GitHub will provide your published website address.

## Important fidelity and asset notes
This recreation follows the content and visible page structure indexed from the public Wix site. The Wix page crawler exposes the page copy and image asset URLs, but does not expose the original Wix editor's exact CSS, breakpoints, font assignments, spacing tokens, animation settings, or all hidden interactions. Accordingly, the typography, palette, and layouts in `style.css` are a close visual recreation, not a byte-for-byte export of Wix's original design system.

The image URLs currently point to Wix's public image CDN so the matching images can load without a separate download step. To make the project fully independent of Wix, download the image files, put them in a local `assets/images/` folder, and update the `src` values in the HTML to local paths. Some booking destinations and social profile URLs should be checked and replaced with the salon's exact current links before launch.

The live Wix site currently lists these business details:
- 8841 Hwy 171, Suite # C&D, Godley, TX 76044
- 682-846-1800
- tandatwildcat@gmail.com
- Monday–Friday: 11:00am–6:00pm
- Saturday: 10:00am–2:00pm
- Sunday: Closed

## Local preview
Open `index.html` in a browser. For a local server, run `python -m http.server 8000` in this directory and visit `http://localhost:8000`.
