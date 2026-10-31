# 3KG Webflow template source package

This ZIP is a complete device-side handoff package for rebuilding the approved 3KG website as a native, editable Webflow CMS template.

## Included

- `index.html` and `assets/` — exact current website reference and media
- `webflow-kit/` — CMS import files, schema, design tokens, page content, component map, interactions, SEO, licensing, compliance and asset audit

## Start here

1. Read `webflow-kit/README.md`.
2. Create the native Webflow pages in `webflow-kit/webflow-template-spec.md`.
3. Create Variables from `webflow-kit/design-tokens.json`.
4. Create the Projects Collection from `webflow-kit/cms-schema.json`.
5. Import `webflow-kit/projects.csv` using `webflow-kit/cms-import-guide.md`.
6. Build Components and interactions from the supplied maps.

The Plastic Bank and Thirteen videos are temporary placeholders below Webflow's 4 MB upload limit. Their existing posters and CMS records remain mapped, so final compressed videos can replace them without changing the layout.

This package is a migration source, because Webflow does not import a ZIP as a native editable site. The final template must be assembled in Webflow Designer.
