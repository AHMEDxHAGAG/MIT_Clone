# PublicationsGrid Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/PublicationsGrid.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/publications-0078f9b7/publications-grid-section.png`
- **Interaction model:** card hover/time-driven preview videos

## DOM Structure
Section containing a responsive grid of all 33 shared PublicationCards.

## Computed Styles
- Section desktop `1425×2524.12px`, padding 32px.
- Grid `--min-column-width:284px`, auto-fill, 16px gaps; resolves to four columns at desktop.
- Shared card spec owns card/media typography and interactions.

## Content
Use all 33 entries from `shared/publications.json` in exact source order.

## Responsive Behavior
- Tablet: 753px section, two card columns, height 4762.8px, padding 30.72px.
- Mobile source intentionally has 684px content width, two 322px-ish columns, height 4354.3px, padding 16px.
