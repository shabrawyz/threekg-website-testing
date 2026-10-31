# Asset compliance audit

Repository asset inventory: 236 files, approximately 34.55 MB.

## Files above Webflow's 4 MB upload limit

- `assets/portfolio-refresh/motion/plastic-bank.mp4` — approximately 4.45 MB
- `assets/portfolio-refresh/motion/thirteen.mp4` — approximately 5.39 MB

Re-encode these videos below 4 MB while preserving resolution, aspect ratio, poster and visual timing. Do not crop or redesign them.

## Optimization target

Thirty-nine media files exceed Webflow's recommended 150 KB image target. Import the originals, use Webflow's native AVIF/WebP compression where supported, preserve explicit width/height or aspect-ratio wrappers, eagerly load only above-the-fold essentials and lazy-load all remaining media.

Before publishing, confirm the deployed page weight is below Webflow's template limit and that image quality remains visually equivalent to the source preview.

