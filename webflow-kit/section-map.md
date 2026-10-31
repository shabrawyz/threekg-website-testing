# Exact section and component map

The existing HTML, CSS, assets and behavior are the visual source of truth. Rebuild these as native Webflow elements and Components; do not redesign or approximate them.

| Order | Webflow component | Existing source | Editable controls |
| --- | --- | --- | --- |
| 1 | Global Header | `.site-header`, `.website-nav`, `.menu` | logo, nav labels/links, menu copy, colors, spacing, blend mode |
| 2 | Brand Loader | `.loader` | video, skip label, timing, background |
| 3 | Hero Carousel | `.website-hero`, `.hero-feature` | heading, CTAs, slides, images/video, interval, aspect ratio, type scale |
| 4 | Studio Intro | `#studio` | eyebrow, heading, paragraphs, CTA, columns, gaps |
| 5 | Services | `#services` | six service names/scopes, symbols, colors, motion, card dimensions |
| 6 | Work Index | `#work` | heading, filters, project order, project cards, image ratios |
| 7 | Project Template | `.project-dialog` | all Projects CMS fields, gallery, story, video, previous/next |
| 8 | Clients | `#clients` | title, tabs, logo, color, category, ordering |
| 9 | Team | `#team` | image, hotspot positions, labels, names, specialties |
| 10 | Footer | `#contact` | CTA, labels, links, copyright, colors, spacing |

Create Components for Header, Menu, Hero Slide, Service Card, Project Card, Filter Button, Client Tile, Team Hotspot and Footer. Expose text, link, image and visibility properties. Use Webflow Variables for all colors, typography, spacing, radii, ratios and animation durations.

The project detail experience should use the Projects Collection template at `/projects/{slug}`. This is the CMS-native replacement for the current dialog and gives editors a complete dashboard for every case study.

