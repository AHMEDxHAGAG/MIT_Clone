# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/shared/SiteHeader.tsx`
- **Screenshot:** each page's `source-desktop-full.png` and `source-mobile-full.png`
- **Interaction model:** link hover/focus and pathname-driven active underline; no scroll-driven state

## DOM Structure
`header` contains the SRG home mark/wordmark, the four-link main navigation, then MIT and CSAIL SVG links.

## Computed Styles (exact values from getComputedStyle)
- Desktop header at 1440px: `display:flex`, `flex-direction:row`, `justify-content:space-between`, `align-items:center`, `gap:32px`, `padding:16px 32px`, `height:88px`, `background:#0f0f0f`, `position:relative`, `z-index:1`.
- Mobile header at 390px (375px layout viewport): `padding:8px 16px 16px`, `gap:16px`, `height:119px`; nav is order 3 and width 100%; brand and institutional logos share the first row.
- Tablet at 768px: `padding:15.36px 30.72px`, `height:87px`; nav returns to the middle row position and width `max-content`.
- Wordmark: uppercase, `12px`, weight 600, `14px` line-height, `0.5pt` letter-spacing, min-content width.
- SRG logo: width `clamp(42px,8vw,64px)`; MIT/CSAIL marks max width `clamp(36px,8vw,48px)`.

## States & Behaviors
- Current route nav item and hovered nav item: bottom border `#3396ff`; base border matches `#0f0f0f`.
- All anchors transition `color,border-color 250ms ease-out`; hover color changes `#e6e6e6 → #3396ff`.
- Scroll sweep: header remains `position:relative`; no shrink, sticky mode, shadow, or class mutation.

## Assets
- `SceneRepresentationLogo`, `MitLogo`, and `CsailLogo` from the same-site shared icon module; SVG paths extracted verbatim.

## Text Content (verbatim)
Scene Representation Group; Publications; Talks; Teaching; People.

## Responsive Behavior
- Desktop ≥768px: one row, brand / nav / institutions.
- Mobile <768px: two rows, nav full width.
- Navigation spacing switches to `gap:var(--space)` at 512px.
