# Frosted — the Video.js v10 Default/Frosted direction, in amber

**Frosted** re-skins the Video.js v10 player in the design language of the
v10 Default/Frosted skin itself: one floating frosted bar — a translucent
dark surface with a 16px backdrop blur at 180% saturation — sitting 12px in
from the player's edges, and a single amber accent (`#F59E0B`) spent on the
played fill, the live mark and the focus halo. Hover fills and dividers are
always black or white at ~10% alpha, never opaque grays, so the footage
underneath tints the controls. Nothing shouts; the craft is in the details:
an optically centred play triangle, a seek track that swells under the
pointer, and a settings menu that *morphs* between levels instead of
snapping.

It is painted onto the standard v10 components, so every control, menu,
hotkey and announcement keeps working exactly as the framework intends.

Built for the **Video.js Skins Design Challenge** (Contra × Mux).
Design file: [Pixel Play — Video.js v10 Skin (Figma)](https://www.figma.com/design/sNC6EfwTYauoRLs92zVwbi) — see the "Variation 5 — Frosted" page.

## Run it locally

```sh
npm install
npm run dev        # workbench: test sizes, aspect ratios, colour schemes, RTL, languages
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

The workbench plays real video (a *Big Buck Bunny* clip, hosted on Mux) —
no placeholder media. Change the preview media in
`apps/preview/src/frame/player`.

## The design system

- **One frosted surface** — the bar is `rgba(20, 20, 22, 0.75)` with
  `backdrop-filter: blur(16px) saturate(180%)`, a 1px hairline stroke
  (`rgba(255, 255, 255, 0.1)`) and a soft 32px shadow. Menus, popovers,
  tooltips and the error dialog use the same frost one step stronger
  (90% tint).
- **Floating bar, exact geometry** — 12px inset from the left, right and
  bottom edges; **52px tall**; 6px vertical / 16px horizontal padding;
  **12px radius** on the bar, **8px** on buttons and menu rows. Keys are
  40×40px with 18px icons and 6px gaps.
- **One amber accent** — Video.js amber `#F59E0B` is the played fill, the
  captions-on mark, the menu indicator and the seek thumb's focus halo.
  Buffered is white at 28%, the unfilled track white at 14%.
- **The seek rides the rim** — the 5px track (radius 999) sits on the
  bar's top edge and swells to **8px** on hover, focus or drag (180ms,
  `cubic-bezier(0.22, 1, 0.36, 1)`). The **14px white thumb is persistent**,
  carrying the house shadow (`0 1px 4px rgba(0,0,0,0.45)`); on focus or
  drag it gains a **3px amber halo** at 35% alpha.
- **Type:** *Inter* — 13px / 500 for controls and time, tabular figures,
  line-height 1, text `#F4F4F6`.
- **Icons:** 24 glyphs on a 24×24 grid in `src/video/icons.ts` — solid
  play/pause and captions-on states, chunky round-cap strokes elsewhere.
  The play triangle is optically centred (its flat edge sits 1.5px right
  of the symmetric position, so the glyph's visual mass lands on the
  button's true centre).
- **Light scheme** — pale frost (`rgba(255, 255, 255, 0.78)`) with ink
  text (`#17171A`); the amber deepens to `#D97706` so the fill and the
  halo keep contrast on pale glass.

## Signature moments

- **The morphing menu** — the settings menu is sized by the framework
  from its content; with `interpolate-size: allow-keywords` and a 220ms
  `cubic-bezier(0.4, 0, 0.2, 1)` transition the popup *grows and shrinks*
  between menu levels (root → Quality, root → Playback speed) instead of
  snapping. Engines without `interpolate-size` keep the standard
  open/close fade.
- **Rim seek** — the progress line reads as the bar's own glowing top
  edge; the white thumb never disappears, so position is legible at a
  glance, paused or playing.
- **Frosted centre disc** — the big play button is the same frost as the
  bar, so the whole chrome reads as one material.
- **Captions** ride above the floating bar while controls are up, so
  subtitles are never hidden behind it.

## Accessibility

- Touch targets are **44×44px** on small players (the bar relaxes to 8px
  gutters and near-full width below 40rem), and the amber **focus ring is
  never removed** — the bar stays visible while anything inside it has
  keyboard focus.
- Works in **light and dark colour schemes** — the skin syncs to the
  host page's `color-scheme` (and to the OS preference), deepening the
  accent in the light scheme to keep contrast.
- `prefers-reduced-transparency` and `prefers-contrast: more` retire the
  blur and raise the surfaces to near-opaque.
- `prefers-reduced-motion` removes transitions and press scaling.
- **Forced-colors** fallbacks: the frost retires, fills become the system
  Highlight colour and the buffer goes hatched, so every control stays
  legible.
- The scaffold's hotkeys (`Space`, `M`, `F`, arrow keys), status
  announcer and error dialog are all kept; tab order matches visual
  order because layout follows source order.

## Six directions

Frosted is one of six fully built skins explored for this challenge —
alongside a retro pixel-arcade skin, a frosted-glass aurora skin, an
editorial cinema skin, an Apple-style glass capsule and a Linear-style
indigo pill. Frosted is the home-turf entry: the v10 default direction,
executed to the standard its own designer set.

## Project structure

```
src/video/skin.html   – component markup (unchanged from the Scaffold skin)
src/video/skin.ts     – registers the Frosted icon set + colour-scheme sync
src/video/skin.css    – the Frosted layer: tokens, floating bar, rim seek, states, responsive & a11y blocks
src/video/icons.ts    – the 24-glyph set (24×24 grid)
src/skin.css          – font import (Inter)
apps/preview/         – the Video.js workbench used for testing and the live demo
```

The skin is a paint layer over fully working controls — no behaviour is
forked, which is what keeps every menu, gesture and keyboard path intact.

## How it was built

Designed first in Figma (tokens, desktop and mobile players), then
implemented with an AI coding agent against the version-matched
Video.js v10.3.0 docs: scaffold project, custom icon set, CSS layer,
then a fidelity pass comparing the running preview against the design
tokens — followed by checks at desktop and mobile widths, both colour
schemes, keyboard-only navigation, the settings-menu level morph,
reduced motion and forced colours.

## License

Submitted under the challenge terms: Apache License 2.0.

## Credits

Designed & built by **Haseeb P.** — CEO, The Hitek Agency (Houston, USA).
