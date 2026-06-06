# Personal Website

A clean, modern, fully responsive personal website built with plain HTML, CSS,
and vanilla JavaScript — no build step, no dependencies, no framework required.

## Features

- **Three pages** — Home, About, and Contact, with a shared sticky navigation.
- **Modern responsive design** — fluid layouts that adapt from mobile to
  widescreen using CSS Grid, Flexbox, and `clamp()`-based fluid typography.
- **Light & dark mode** — a theme toggle that respects the visitor's OS
  preference and remembers their choice via `localStorage`.
- **Accessible** — semantic HTML, ARIA labels, keyboard-friendly controls, and
  `prefers-reduced-motion` support.
- **Contact form with validation** — client-side validation with inline error
  messages and a success confirmation (no backend required).
- **Zero dependencies** — only the Inter web font is loaded from a CDN.

## Project structure

```
.
├── index.html        # Home page (hero, services, stats, CTA)
├── about.html        # About page (bio, experience timeline, skills)
├── contact.html      # Contact page (details + validated form)
├── css/
│   └── styles.css    # All styles and design tokens (CSS custom properties)
├── js/
│   └── main.js       # Theme toggle, mobile nav, footer year, form validation
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

## Customization

This site ships with placeholder content for a fictional person, **Jordan
Ellis**. To make it yours:

| What to change        | Where                                                        |
| --------------------- | ------------------------------------------------------------ |
| Name & brand          | `nav__brand` and footer text in each `*.html` file           |
| Headline & bio        | `index.html` hero section, `about.html` bio paragraphs       |
| Experience & skills   | `about.html` `.timeline` and `.skills` blocks                |
| Contact details       | `contact.html` `.contact-info` items (email, phone, location)|
| Social links          | The `.social` blocks (currently `href="#"` placeholders)     |
| Colors & theme        | CSS custom properties at the top of `css/styles.css`         |

### Theming

All colors, spacing, radii, and shadows are defined as CSS custom properties in
the `:root` (light) and `[data-theme="dark"]` blocks of `css/styles.css`.
Adjust those variables to re-skin the entire site without touching markup.

## Contact form

The form performs client-side validation only and shows a success message on a
valid submit — it does **not** send email on its own. To make it functional,
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
