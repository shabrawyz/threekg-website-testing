# 3KG Webflow migration kit

This package converts the repository content into a Webflow-ready migration source while preserving the current design. It does not claim to be a native Webflow template file: Webflow does not import arbitrary HTML/CSS/JS as a fully editable site. A native template must be assembled in Webflow Designer, then shared as a Workspace template, cloneable site, or approved Marketplace template.

## Why Webflow

Webflow is the recommended target for this site because the project needs structured case studies, editor access, reusable components, variables and a client-facing CMS dashboard. Framer can import CMS content, but its templates are also Framer projects distributed with remix links; a repository ZIP cannot become a native Framer project by upload.

## Package contents

- `projects.csv` — 23 project records ready for the Projects Collection
- `asset-manifest.csv` — all project image, poster and video references with dimensions
- `cms-schema.json` — exact Projects Collection fields
- `design-tokens.json` — colors, fonts, spacing and breakpoint definitions
- `section-map.md` — native Component structure and editable controls
- `interactions.md` — behavior parity checklist
- `generate-cms.mjs` — regenerates both CSV files from `assets/profile-data.js`
- `webflow-template-spec.md` — Webflow submission-aligned build specification
- `cms-import-guide.md` — exact Collection import and binding workflow
- `style-guide-requirements.md` — required native Style Guide page
- `instructions-page.md` — editor-facing instructions content
- `licenses-page.md` — required licensing copy and rights audit
- `compliance-checklist.csv` — prepared, pending and blocked requirements
- `asset-audit.md` — Webflow asset size and optimization findings
- `changelog-page.md` — utility-page release history content
- `seo-metadata.csv` — page titles, descriptions and indexing rules

## Assembly order

1. Create a blank Webflow CMS site.
2. Upload the four font files in `assets/fonts/` and all media under `assets/`.
3. Create Webflow Variables from `design-tokens.json`.
4. Create the Projects Collection using `cms-schema.json`.
5. Import `projects.csv`; map same-named columns and verify images.
6. Build the native Components and sections in `section-map.md`, matching the current live preview and CSS.
7. Bind the Work grid and project template to the Projects Collection.
8. Reproduce the interactions in `interactions.md`.
9. QA every breakpoint and interaction against the current preview.
10. Enable client Editor access. When approved, make the Webflow project a shared Workspace template or submit it through the Webflow template program.

## Regenerate CMS files

```sh
node webflow-kit/generate-cms.mjs
```

The repository remains the design and content source of truth. No design change is authorized during migration.

