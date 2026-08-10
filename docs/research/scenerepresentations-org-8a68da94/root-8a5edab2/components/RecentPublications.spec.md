# RecentPublications Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/RecentPublications.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/root-8a5edab2/recent-publications-section.png`
- **Interaction model:** card hover; autoplay preview videos

## DOM Structure
Section heading with right-aligned “view all” link, then the first nine shared publication cards.

## Computed Styles
- Desktop section: `width:735px`, `height:1439.5px`, `padding:32px`, left border `#292e32`.
- Heading: `24px`, flex ruled row; view-all `16px`, margin-left auto.
- Card grid: two equal columns, 16px gap; uses shared PublicationCard styles.

## Content & Assets
Use `shared/publications.json.slice(0, 9)` in source order. Exact first title is “MilliVid: Hierarchical Latents for Long-Range Consistency in Video Generation”; ninth is “Controlling diverse robots by inferring Jacobian fields with deep networks”.

## Responsive Behavior
- Below 968px section becomes a normal flow row.
- At 768px: width 753px, height 1459.5px, two-column cards, 30.72px padding.
- At 390px: width 375px, height 2394.5px, single-column cards, 16px padding.
