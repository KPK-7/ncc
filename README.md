NCC Static Site (demo)

This is a small, responsive static website demo for an "NCC" (National Cadet Corps) style organization.

Files created
- index.html — Home page with carousel and dashboards
- about.html — About page
- core-values.html — Core values page
- gallery.html — Gallery with lightbox
- contact.html — Contact form (static)
- css/styles.css — All styles
- js/main.js — JavaScript for carousel, counters, and lightbox

How to run
Open `index.html` in your browser. On Windows you can double-click the file or run:

```powershell
# from repo root
start .\ncc-site\index.html
```

Notes & Next steps
- Images are linked from Unsplash as placeholders. Replace images in `gallery.html` and `index.html` with local files in `assets/images` if you prefer.
- The contact form is static; integrate a backend or a service like Formspree to accept submissions.
- Accessibility: basic ARIA attributes and keyboard navigation implemented for lightbox and carousel controls. Further testing recommended.

If you want, I can:
- Add lazy-loading improvements, optimize image sizes, and include local image files.
- Add animations or a small chart in dashboards using Chart.js.
- Package and deploy to GitHub Pages.
