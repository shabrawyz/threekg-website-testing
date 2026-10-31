# Webflow template implementation specification

## Delivery target

Build this as a private or shared Webflow Workspace template with Webflow CMS. Preserve the current design, content, media, responsive behavior and interactions.

A public Marketplace submission is not authorized because the current design contains real 3KG/client logos and branded portfolio work. Webflow Marketplace requires resale-safe assets and prohibits trademarked branded content. Do not replace these assets without written design approval and documented rights.

## Required native pages

| Page name | Slug | Purpose | Indexing |
| --- | --- | --- | --- |
| Home | `/` | Current one-page studio experience | index |
| Projects Template | `/projects/{slug}` | CMS project detail | index |
| Style Guide | `/style-guide` | Every tag, variable, component and state | noindex |
| Instructions | `/instructions` | Editing, CMS and interaction guidance | noindex |
| Licenses | `/licenses` | Font and asset rights | noindex |
| Changelog | `/changelog` | Template version history | noindex |
| 404 | Webflow 404 | Branded error page with navigation and CTA | noindex |

Use Title Case page names and matching slugs. Add `<meta name="robots" content="noindex">` only to the required utility pages.

## Native build rules

- Use semantic Sections, Containers, Nav, Main, Footer, headings and links.
- Use BEM class names consistently because the source already follows BEM.
- Limit combo classes to three levels.
- Set Body typography globally and style H1–H6, paragraphs, lists, blockquotes, figures, captions and links.
- Use Components for Header, Menu, Hero Slide, Service Card, Project Card, Filter Button, Client Tile, Team Hotspot, CTA and Footer.
- Expose text, image, link, visibility and variant properties.
- Use Webflow Variables from `design-tokens.json`, including breakpoint modes.
- Use REM, %, VW/VH, FR and `clamp()`; reserve pixels for 1px rules and intrinsic media dimensions.
- Use min-height for content sections and aspect-ratio wrappers for media.
- Give every interactive element hover, pressed and visible keyboard-focus states.
- Use native Webflow Interactions powered by GSAP. Do not add general custom JavaScript.
- Provide pause/skip controls for loader and hero video; respect reduced motion.

## Site settings

- Upload `assets/icon.svg` as favicon and generate a matching webclip.
- Enable responsive images and CSS minification.
- Leave form notifications and all integrations at defaults.
- Do not add API tokens, payment providers, maps keys or a business address.
- Use the included OFL font files and list their licenses on the Licenses page.
- Keep each uploaded asset below 4 MB and run Webflow AVIF/WebP compression.

## SEO and accessibility

- Homepage title: `3KG — Strategy first. Impact always.`
- Homepage description: `Six connected disciplines, from strategy through execution. Brand, Design, Campaigns, Production, Tech and Xperience. Cairo, Egypt.`
- Use CMS fields for unique project title, description and Open Graph data.
- Supply a 1200×630 JPEG/PNG Open Graph image for every indexable page.
- Keep one primary H1 and sequential heading levels.
- Preserve source alt text and mark decorative media accordingly.
- Maintain keyboard operation for menu, carousel, filters, project navigation, lightbox, clients and team hotspots.
- Run Webflow Audit and PageSpeed tests after the native build.

## Acceptance condition

The build is complete only when Webflow Designer can edit every section and variable, Webflow Editor can update every CMS record, no console/audit errors remain, and visual comparison at 1440, 1024, 768, 480 and 360 pixels matches the current preview.

