# Amr Al-Feraidi — Portfolio

A responsive, static Dark Tech portfolio for GitHub Pages, built using plain HTML, CSS and JavaScript. No build tools, frameworks, analytics, or external JavaScript libraries required.

## Preview

Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish on GitHub Pages

1. Create a public GitHub repository named `Amr-Alferaidi.github.io` under the `Amr-Alferaidi` account. For a project-site repository with a different name, GitHub Pages will serve the portfolio at `https://amr-alferaidi.github.io/<repository-name>/`.
2. Upload all items **inside** this folder to the root of that repository: `index.html`, `styles.css`, `script.js`, and `assets/`.
3. In repository **Settings → Pages → Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then Save.
4. Open `https://amr-alferaidi.github.io/` after Pages reports a successful deployment. (The URL assumes the special user-site repository name.)

## Actual project imagery

The Active Directory and Enterprise Network cards reference **real screenshots from the owner's GitHub repository README files** using public GitHub user-attachment URLs. Their content requires internet access. Should these images become unavailable or be blocked, local explanatory SVG fallbacks display instead. The Network Labs card uses a clearly labeled illustrative SVG rather than inventing an unverified screenshot.

For full offline support, download the two original project images from your GitHub repositories, place them in `assets/`, and replace the two remote `img src` attributes in `index.html` with the local filenames.

## Personalize

- Update your current-employment end date after your final contractual end date is recorded.
- If you want a Resume download button, export your **latest final PDF** to `assets/Amr_Alferaidi_CV.pdf` and add a link to it. An older draft has intentionally NOT been included as a public CV.
- Check contact email, education, and certification details before publishing.
- All links open in separate tabs where appropriate. Email opens a mail application.
- Project descriptions distinguish independent labs from company responsibilities.

## Files

- `index.html`: content and semantic structure.
- `styles.css`: responsive layout and dark theme.
- `script.js`: mobile nav, fallback image behavior, copyright year.
- `assets/`: local fallback diagrams and favicon.

## Privacy

No analytics, visitor tracking, forms, or cookies are included.
