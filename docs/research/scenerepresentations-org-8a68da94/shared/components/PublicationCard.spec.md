# PublicationCard Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/shared/PublicationCard.tsx`
- **Interaction model:** hover/focus; video is time-driven autoplay, muted, looped, and inline

## DOM Structure
Anchor → figure → 2:1 video/image → figcaption → clamped title/subtitle and one-line venue/date/authors metadata.

## Computed Styles (exact values from getComputedStyle)
- Figure: background `#0f0f0f`, border `1px solid #22262a`, radius `5px`, padding `8px` desktop / `4px` at narrow widths via clamp, gap same, column flex, overflow hidden.
- Media: width 100%, aspect ratio `2/1`, object-fit cover, opacity `.8`, radius `2.5px`, shadow `0 0 4px rgba(255,255,255,.2)`.
- Title: `16px`, weight 600, two-line WebKit clamp; subtitle weight 400.
- Metadata: `13px`, opacity `.8`, no wrap with ellipsis; venue pill `12px`, `1px` border, `2.5px` radius.

## States & Behaviors
- Card hover: background `hsl(211 50% 8%)`, border `#3396ff`, transition becomes `100ms ease-out`.
- Media hover shadow: `0 0 8px rgba(255,255,255,.2)` over 100ms.
- Video: both WebM and MP4 local sources; poster is local; autoplay/loop/muted/playsInline.

## Assets and Content
- Exact 33-entry dataset: `shared/publications.json`; no generated titles, authors, dates, venues, awards, media, or links.
- Local asset root: `/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/`.

## Responsive Behavior
Card itself is fluid. Parent grids and scrollers own column count; media stays 2:1 at every width.
