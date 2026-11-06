/**
 * Frosted icon set.
 *
 * Friendly geometric glyphs on a 24×24 grid, in the manner of the Plyr /
 * Video.js v10 house style: play, pause and the captions-on state are solid
 * filled shapes; the rest are chunky 2.1-weight strokes in `currentColor`
 * with round caps and joins. Registered over the Scaffold family so every
 * `<media-icon family="scaffold">` in the skin markup renders the Frosted
 * versions. The play triangle is optically centred — its flat edge sits
 * 1.5px right of the symmetric position, so the glyph's visual mass (which
 * concentrates at the flat side) lands on the button's true centre.
 */

const line = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

const filled = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

/** Solid rounded triangle, optically centred (+1.5px shift baked in). */
export const playIcon = filled(
  `<path d="M9.3 5.8c0-.95 1.05-1.54 1.87-1.05l8.35 5.25c.79.5.79 1.6 0 2.1l-8.35 5.25c-.82.49-1.87-.1-1.87-1.05V5.8z"/>`,
);

/** Two solid rounded bars. */
export const pauseIcon = filled(
  `<rect x="6.2" y="4.8" width="4.2" height="14.4" rx="2.1"/><rect x="13.6" y="4.8" width="4.2" height="14.4" rx="2.1"/>`,
);

/** Circular arrow, clockwise, arrowhead at the top. */
export const restartIcon = line(
  `<path d="M19.3 12a7.3 7.3 0 1 1-2.14-5.18"/><path d="M21.1 3.1v3.9h-3.9"/>`,
);

/** Circular arrow used by the ±10s seek buttons (the label carries the 10). */
export const seekIcon = line(
  `<path d="M19.3 12a7.3 7.3 0 1 1-2.14-5.18"/><path d="M21.1 3.1v3.9h-3.9"/>`,
);

const speaker = `<path d="M4 9.4v5.2c0 .6.45 1 1 1h2.6L12 19.4c.62.53 1.6.1 1.6-.71V5.31c0-.8-.98-1.24-1.6-.71L7.6 8.4H5c-.55 0-1 .45-1 1z"/>`;

export const volumeHighIcon = line(
  speaker + `<path d="M16.4 9.4a3.7 3.7 0 0 1 0 5.2"/><path d="M18.7 7a7.2 7.2 0 0 1 0 10"/>`,
);

export const volumeLowIcon = line(speaker + `<path d="M16.4 9.4a3.7 3.7 0 0 1 0 5.2"/>`);

export const volumeOffIcon = line(
  speaker + `<path d="M16.3 9.7l4.7 4.7M21 9.7l-4.7 4.7"/>`,
);

const captionsFrame = `<rect x="3" y="5" width="18" height="14" rx="3"/>`;
const captionsMarks = `<path d="M10.7 10.1a2.7 2.7 0 1 0 0 3.8M17.3 10.1a2.7 2.7 0 1 0 0 3.8"/>`;

export const captionsOffIcon = line(captionsFrame + captionsMarks);

/** Filled frame with the CC marks knocked out — state reads by shape. */
export const captionsOnIcon = filled(
  `<path fill-rule="evenodd" d="M6 5h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm4.7 5.1a2.7 2.7 0 1 0 0 3.8 2.7 2.7 0 0 0 0-3.8zm6.6 0a2.7 2.7 0 1 0 0 3.8 2.7 2.7 0 0 0 0-3.8z"/>`,
);

export const checkIcon = line(`<path d="M4.8 12.6l4.7 4.7L19.2 6.9"/>`);

export const chevronIcon = line(`<path d="M9.2 4.8L16.4 12l-7.2 7.2"/>`);

export const fullscreenEnterIcon = line(
  `<path d="M4.2 9.2V6.4A2.4 2.4 0 0 1 6.6 4h2.8M14.6 4h2.8a2.4 2.4 0 0 1 2.4 2.4v2.8M19.8 14.8v2.8a2.4 2.4 0 0 1-2.4 2.4h-2.8M9.4 20H6.6a2.4 2.4 0 0 1-2.4-2.4v-2.8"/>`,
);

export const fullscreenExitIcon = line(
  `<path d="M9.2 4.2v2.6a2 2 0 0 1-2 2H4.4M19.6 8.8h-2.8a2 2 0 0 1-2-2V4.2M14.8 19.8V17.2a2 2 0 0 1 2-2h2.8M4.4 15.2h2.8a2 2 0 0 1 2 2v2.6"/>`,
);

/** Gear: a ring with eight spokes. */
export const gearIcon = line(
  `<circle cx="12" cy="12" r="3.2"/>` +
    `<path d="M12 2.8v2.7M12 18.5v2.7M2.8 12h2.7M18.5 12h2.7M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9"/>`,
);

const pipFrame = `<rect x="3" y="5" width="18" height="14" rx="3"/>`;

export const pipEnterIcon = line(pipFrame + `<rect x="12.3" y="11.8" width="6.2" height="4.7" rx="1.4"/>`);

export const pipExitIcon = line(pipFrame + `<rect x="5.5" y="7.5" width="6.2" height="4.7" rx="1.4"/>`);

/** Screen with the AirPlay triangle beneath. */
export const airplayEnterIcon = line(
  `<rect x="3.5" y="4.5" width="17" height="12" rx="2.2"/><path d="M12 13l2.7 3.7H9.3L12 13z"/>`,
);

/** Screen with the AirPlay triangle filled (connected state). */
export const airplayExitIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="12" rx="2.2"/><path d="M12 15.7l3 4H9l3-4z" fill="currentColor" stroke="none"/></svg>`;

const castWaves = `<path d="M4.6 16.4a8.3 8.3 0 0 1 6.7 6.7M4.6 13.3a12.3 12.3 0 0 1 10 10M4.6 19.5a4.5 4.5 0 0 1 3.6 3.6"/>`;

export const castEnterIcon = line(
  `<path d="M4.6 6.6A2.4 2.4 0 0 1 7 4.2h10a2.4 2.4 0 0 1 2.4 2.4v6.8a2.4 2.4 0 0 1-2.4 2.4h-3.2"/>` + castWaves,
);

export const castExitIcon = line(
  `<path d="M4.6 6.6A2.4 2.4 0 0 1 7 4.2h10a2.4 2.4 0 0 1 2.4 2.4v6.8a2.4 2.4 0 0 1-2.4 2.4h-3.2"/>` +
    castWaves +
    `<path d="M10.2 7.4h5.6v4.8h-5.6z"/>`,
);

/** Speech bubble with two lines — the audio-track menu glyph. */
export const speechIcon = line(
  `<path d="M5.2 4.2h13.6A1.7 1.7 0 0 1 20.5 5.9v7.9a1.7 1.7 0 0 1-1.7 1.7h-7.6l-4.4 3.9v-3.9H5.2a1.7 1.7 0 0 1-1.7-1.7V5.9a1.7 1.7 0 0 1 1.7-1.7z"/><path d="M7.6 8.9h8.8M7.6 12h5.2"/>`,
);

/** Gauge arc with a needle. */
export const speedIcon = line(
  `<path d="M4.8 18.3a9 9 0 1 1 14.4 0"/><path d="M12 14.3l3.7-6.2"/><circle cx="12" cy="14.3" r="1.5"/>`,
);

/** Three sliders with round knobs. */
export const switchesIcon = line(
  `<path d="M4 7.4h9.2M17.4 7.4H20M4 16.6h3.2M11.4 16.6H20"/><circle cx="15.3" cy="7.4" r="2.2"/><circle cx="9.3" cy="16.6" r="2.2"/>`,
);

/** Frosted spinner: a plain arc in `currentColor` (the indicator colours it
 * amber), spun by the component's `--media-spinner-animation` variable —
 * which the base styles switch off under reduced motion and when the
 * indicator hides. */
export const spinnerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" aria-hidden="true" viewBox="0 0 24 24"><style>@keyframes frosted-spin{to{transform:rotate(360deg)}}</style><path stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M12 3.2a8.8 8.8 0 1 1-8.8 8.8" style="transform-box:view-box;transform-origin:center;animation:var(--media-spinner-animation, frosted-spin 0.9s linear infinite)"/></svg>`;

export const frostedIcons: Record<string, string> = {
  'airplay-enter': airplayEnterIcon,
  'airplay-exit': airplayExitIcon,
  'captions-off': captionsOffIcon,
  'captions-on': captionsOnIcon,
  'cast-enter': castEnterIcon,
  'cast-exit': castExitIcon,
  check: checkIcon,
  chevron: chevronIcon,
  'fullscreen-enter': fullscreenEnterIcon,
  'fullscreen-exit': fullscreenExitIcon,
  gear: gearIcon,
  pause: pauseIcon,
  'pip-enter': pipEnterIcon,
  'pip-exit': pipExitIcon,
  play: playIcon,
  restart: restartIcon,
  seek: seekIcon,
  speech: speechIcon,
  speed: speedIcon,
  spinner: spinnerIcon,
  switches: switchesIcon,
  'volume-high': volumeHighIcon,
  'volume-low': volumeLowIcon,
  'volume-off': volumeOffIcon,
};
