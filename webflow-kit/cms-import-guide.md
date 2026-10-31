# Webflow CMS import guide

Create the `Projects` Collection from `cms-schema.json`, then import `projects.csv`.

## Mapping

Map every CSV column to the same-named field. `Gallery Images` contains semicolon-separated direct image URLs for Webflow's Multi-image field. `Body` and `Story` contain supported HTML for Rich Text fields. `Published` maps to a Switch, and `Sort Order` maps to Number.

Webflow's CSV upload limit is 4 MB; the generated file is well below that limit. Image URLs use the repository's public raw URLs and end in supported file extensions.

## Import order

1. Create all Collection fields before importing.
2. Upload `projects.csv` and confirm the first row is the header.
3. Map Name and Slug first, then map remaining fields.
4. Review SRNTY, Nuxera, Plastic Bank and T&D Designs before completing the import; together they cover rich text, galleries and motion fields.
5. Import all 23 items.
6. Open every item and confirm hero image, gallery ordering, rich text headings and motion links.
7. Use Webflow's native image compression after import.

## CMS template binding

Bind the project H1 to Name, subtitle to Title, overview to Body, metadata to Client/Year/Market/Scope, story to Story, gallery to Gallery Images, and video block to Motion URL and Motion Poster. Hide optional blocks when their bound field is empty.

Use the Category option for the Work filters and Sort Order for manual ordering. Use Published as the editorial visibility control.

