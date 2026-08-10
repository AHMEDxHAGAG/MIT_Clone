# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/shared/SiteFooter.tsx`
- **Interaction model:** click-driven theme toggle plus link hover

## DOM Structure
Footer contains a metadata group (copyright and theme button) and two institutional links.

## Computed Styles (exact values from getComputedStyle)
- Desktop: `display:flex`, row, `justify-content:space-between`, `align-items:flex-start`, `padding:32px`, `gap:32px`, `height:88px`, `background:#0f0f0f`, `color:#b3b3b3`, top border `#292e32`.
- Tablet: padding `30.72px`, height `139px` because groups wrap.
- Mobile: column, centered, `padding:16px`, `gap:32px`, height `187px`.
- Institutional links have 1px highlight-blue bottom rules and blue arrow prefixes.

## States & Behaviors
- Theme button toggles `html[data-theme]`, persists `localStorage.theme`, and changes its label from `Light Theme` to `Dark Theme`.
- Dark extracted body/header: `#e6e6e6` on `#0f0f0f`; card surface `#0f0f0f`, border `#22262a`.
- Light extracted body/header: `rgb(19,25,32)` on `#f5f5f5`; border `#dde0e3`.
- Link/button hover color: `#3396ff`, transition 250ms.

## Text Content (verbatim)
© 2021 – 2026 Scene Representation Group; Light Theme/Dark Theme; About MIT; About CSAIL.

## Responsive Behavior
- Row layout begins at 448px; below 448px both groups become centered columns.
