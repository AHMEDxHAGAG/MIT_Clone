# FeaturedScroller Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/FeaturedScroller.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/publications-0078f9b7/heading-featured-section.png`
- **Interaction model:** horizontal scroll-snap plus card hover/time-driven videos

## DOM Structure
Dotted-background section containing the first six PublicationCards.

## Computed Styles
- Desktop: flex row, width 1425px, height 317px, padding 32px, gap 16px, `overflow:visible scroll`, `scroll-snap-type:x mandatory`.
- Child width/flex-basis 284px, no shrink, `scroll-snap-align:start`.

## Content
Use `shared/publications.json.slice(0,6)` in exact order, from MilliVid through Selective Underfitting in Diffusion Models.

## Responsive Behavior
Tablet padding/gap 30.72/15.36 and height 313.8px. Mobile content width 684px, padding 16px, gap 8px, height 277px.
