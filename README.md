# Jon Grorud — Personal Website (V3 "Executive Ink, refined")

A refined, modern, fully responsive personal website for **Jon Grorud — Strategic
Enterprise Software Executive**, built with plain HTML, CSS, and vanilla
JavaScript — no build step, no dependencies, no framework required.

This is **Version 3**. It repositions Jon primarily as an **elite enterprise
software sales professional** who helps category-defining technology companies
win and expand their largest enterprise customers — across AI, data platforms,
cloud, analytics and SaaS. Management experience remains visible as a supporting
element rather than the primary story. The design is tightened for a cleaner,
more executive feel (Databricks/Snowflake/Anthropic-style): a reduced type
scale, a consistent grid, equal-height cards and tighter spacing. It lives on
the `jon-profile-v3` branch; V1 and V2 are preserved on their own branches.

The four positioning pillars are *Strategic Enterprise Selling · Strategic
Account Growth · Transformational Technology · Trusted Executive Advisor*, with
content drawn directly from Jon's CV.

## Features

- **Four pages** — Home, About, Track Record, and Contact, with a shared sticky
  navigation.
- **"Executive Ink, refined" design** — deep navy/ink + warm off-white with a
  restrained copper/gold accent. **Inter** is used throughout; the **Fraunces**
  serif is reserved for the single hero headline. Body text is ~10–15% smaller
  than V2 with a consistent grid and equal-height content cards.
- **Modern responsive design** — fluid layouts that adapt from mobile to
  widescreen using CSS Grid, Flexbox, and `clamp()`-based fluid typography.
- **Light & dark mode** — a theme toggle that respects the visitor's OS
  preference and remembers their choice via `localStorage`.
- **Scroll-reveal animations** — subtle fade/slide-in via `IntersectionObserver`,
  disabled under `prefers-reduced-motion`.
- **Accessible** — semantic HTML, ARIA labels, keyboard-friendly controls, and
  reduced-motion support.
- **Contact form with validation** — client-side validation with inline error
  messages and a success confirmation (no backend required).
- **Zero dependencies** — only the Inter + Fraunces web fonts are loaded from a
  CDN.

## Project structure

```
.
├── index.html          # Home (hero, proof bar, pillars, logo wall, wins, CTA)
├── about.html          # About (bio, expertise, methodologies, education)
├── track-record.html   # Track Record (highlights, timeline, wins, industries)
├── contact.html        # Contact (details + LinkedIn + validated form)
├── assets/
│   └── jon-grorud.jpg   # Profile photo (hero + about profile card)
├── css/
│   └── styles.css       # All styles and design tokens (CSS custom properties)
├── js/
│   └── main.js          # Theme toggle, mobile nav, scroll reveal, form validation
└── README.md
```

## Getting started

Because the site is fully static, you can open `index.html` directly in a
browser. For correct relative-path behavior, it's best to serve it over a local
HTTP server:

```bash
# Python 3 (built in on most systems)
python3 -m http.server 8000

# or Node.js
npx serve .
```

Then open <http://localhost:8000> in your browser.

## Content & customization

The site is branded for **Jon Grorud**. Contact email
(`jon.grorud@gmail.com`) and the LinkedIn profile
(<https://www.linkedin.com/in/jongrorud/>) are wired in across all pages. All
content is sourced from Jon's CV.

| What to change        | Where                                                            |
| --------------------- | ---------------------------------------------------------------- |
| Profile photo         | Replace `assets/jon-grorud.jpg` (portrait/square images work)    |
| Headline & positioning| `index.html` hero, `about.html` bio paragraphs                   |
| Proof stats           | `.proof` blocks in the `index.html` hero proof bar               |
| Pillars               | `.pillar` cards in `index.html` (and expertise cards in About)   |
| Career highlights     | `.highlight` cards in `track-record.html`                        |
| Experience timeline   | `.timeline` block in `track-record.html`                         |
| Selected wins         | `.case` cards in `index.html` and `track-record.html`            |
| Industries served     | `.badges` block in `track-record.html`                           |
| Customer logos        | `.logo-tile` entries in `index.html`                             |
| Colors & theme        | CSS custom properties at the top of `css/styles.css`             |

### Theming

All colors, spacing, radii, and shadows are defined as CSS custom properties in
the `:root` (light) and `[data-theme="dark"]` blocks of `css/styles.css`.
Adjust those variables to re-skin the entire site without touching markup.

## Contact form

The form performs client-side validation only and shows a success message on a
valid submit — it does **not** send email on its own. Direct contact is
available via the listed email and LinkedIn profile. To make it functional,
point the form at a backend or a form service (e.g. Formspree, Netlify Forms,
or your own API) by adding an `action`/`method` to the `<form>` in
`contact.html` and adjusting the submit handler in `js/main.js`.

## Deployment

The site can be hosted on any static host. Common options:

- **GitHub Pages** — push to a repo and enable Pages on the branch.
- **Netlify / Vercel / Cloudflare Pages** — connect the repo; no build command
  is needed (set the output/publish directory to the project root).

## Browser support

Works in all modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses
`color-mix()` and `backdrop-filter`; in older browsers these gracefully
degrade.

## License

MIT — feel free to use this as a starting point for your own site.
