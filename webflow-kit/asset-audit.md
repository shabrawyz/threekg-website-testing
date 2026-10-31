# Asset compliance audit

Repository asset inventory: 236 files, approximately 34.55 MB.

## Files above Webflow's 4 MB upload limit

None. The Plastic Bank and Thirteen motion files now use a temporary 3KG placeholder video of approximately 0.51 MB. Replace each placeholder with its final project video after compressing that video below 4 MB.

## Optimization target

Thirty-nine media files exceed Webflow's recommended 150 KB image target. Import the originals, use Webflow's native AVIF/WebP compression where supported, preserve explicit width/height or aspect-ratio wrappers, eagerly load only above-the-fold essentials and lazy-load all remaining media.

Before publishing, confirm the deployed page weight is below Webflow's template limit and that image quality remains visually equivalent to the source preview.
