# Slides Pitch - Agent Guide

## Architecture

- **App.tsx** — Entry point. Exports `default function App()` which initializes a Reveal.js deck (theme: `black`, transition: `slide`, backgroundTransition: `fade`) and composes all slide components with `isNested` prop.
- **Slide.tsx** — Wrapper component. When `isNested=true`, renders children directly (used inside App). When standalone, creates its own Reveal.js deck for single-slide preview. Exports both `Slide` (named) and `SlidePreview` (default).
- **styles.css** — Global styles scoped under `.reveal`. System sans-serif font. Dark theme with cyan accent color `#4fc3f7` throughout.
- **slides/** — Seven numbered slide files (01-Title through 07-Ask). Each exports a named component and a default preview function. Slides accept optional props with defaults and wrap content in `<Slide isNested={isNested}>`.

Slide flow follows a startup pitch structure: Title -> Problem -> Solution -> Market -> Traction -> Team -> Ask. The Title slide uses `data-background-gradient` for a custom dark gradient background.

## Styling

- Single `styles.css` file with plain CSS (not CSS modules).
- Dark theme (Reveal `black` theme base) with cyan accent `#4fc3f7` and white text with `rgba(255,255,255,*)` opacity variations.
- Specialized pitch components: `.section-label` (uppercase letter-spaced headers), `.pain-points` (flex layout), `.market-circle` (TAM/SAM/SOM concentric circles), `.traction-grid` (4-column metrics), `.team-grid` with `.member-photo` circles, `.fund-bar` for use-of-funds visualization.
- Green color `#4caf50` used for growth/positive metrics.

## Extension Points

- Add a new slide by creating `slides/0N-Name.tsx`, exporting a named component and default preview, then importing/rendering it in `App.tsx`.
- Use `data-background-gradient` on `<section>` elements for per-slide custom backgrounds (see 01-Title.tsx pattern).
- Extend the `.traction-grid` pattern for additional data-heavy slides (metrics, comparisons, timelines).

## Constraints

- Reveal.js is initialized in embedded mode (`embedded: true`, `hash: false`). Do not enable hash-based routing.
