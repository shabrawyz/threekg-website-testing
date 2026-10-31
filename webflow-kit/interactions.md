# Interaction parity requirements

Preserve these behaviors from the current JavaScript:

- loader video with click-to-skip and a no-script fallback
- fixed header, full-screen navigation reveal and focus management
- hero carousel with previous/next, dots, count, keyboard control and reduced-motion behavior
- desktop custom cursor; disable it for coarse pointers
- service symbol morph and hover/focus states
- work filtering by discipline
- project reading progress, gallery, lightbox and previous/next navigation
- client category filtering and logo reveal
- team hotspot hover/focus/click behavior
- scroll reveal and active navigation state

Build simple reveals, hover states and menu motion with Webflow Interactions. Keep the existing JavaScript only for behavior Webflow cannot reproduce natively. Do not embed the whole original page in a Code Embed because that would prevent native editing.

Test at 1440, 1024, 768, 480 and 360 pixels, plus keyboard-only navigation and `prefers-reduced-motion`.

