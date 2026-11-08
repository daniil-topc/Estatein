# Property Details hero gallery

- Design reference: https://www.figma.com/design/PK0nwfFZfgbHvhIOBMUj4b/Estatein--Copy-?node-id=102-9571
- Mobile frame: https://www.figma.com/design/PK0nwfFZfgbHvhIOBMUj4b/Estatein--Copy-?node-id=170-1967

## Thumbnails (`*-288.webp`, `*-720.webp`)

Exported from the Figma thumbnails row (node 102-9562) at 5× (720 × 470 PNG).
Thumbnails 2–9 have a `#0A0A0A` 50 % fill baked over the photo in the design (inactive state).
That fill was removed from the exported pixels (`original = 2 × pixel − 10`) so the dimming
can be done in CSS (`.property-gallery-thumb::after`) and switched by JS later.
Saved as WebP (quality 82): `-720` for future slides, `-288` (2× of 144 × 94) for the thumbnails row.

Order (left to right in the design): villa-pool, villa-evening, pool-terrace, villa-garden,
living-room-dark, living-room-bright, dining-room, lounge, bedroom.

## Large slides (`hero-villa-*`, `hero-living-room-*`)

Observed on https://estatein-agency.webflow.io/properties/seaside-serenity-villa (Webflow responsive `-p-1080` variants):

- `hero-villa`: https://cdn.prod.website-files.com/66fc1fd9132d7070227be90b/67090468e1f263cbf8144e6e_1Image-p-1080.png
- `hero-living-room`: https://cdn.prod.website-files.com/66fc1fd9132d7070227be90b/670904683950511b9acc37c8_2Image-p-1080.png

Saved as WebP (quality 82) at 1080 × 859. No `srcset` on the slides on purpose: the gallery JS swaps `src`, and a `srcset` would override it.
