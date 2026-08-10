# PublicationsList Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/PublicationsList.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/publications-0078f9b7/publications-list-section.png`
- **Interaction model:** row link hover

## DOM Structure
Header row then 33 anchors. Each row: date, 32×16 thumbnail, title with dotted leader and subtitle, authors, optional award, venue pill.

## Computed Styles
- ≥1152px section grid columns exactly `70.0156px 32px 857.797px 210.531px 19.9219px 130.734px` at 1440; rows 24px after a 17.875px header.
- Links use subgrid-like full-row layout, zero padding/margin desktop; title/subtitle are single-line ellipsis; leader is 1px dotted `#b3b3b3` and flex-grow 1.
- Row hover: border `#3396ff`, background `hsl(211 50% 8%)`, radius 2.5px.

## Content
Use every field of all 33 entries in `shared/publications.json`. First: June 2026 / MilliVid. Last: Dec. 2018 / DeepVoxels.

## Responsive Behavior
- Below 1152px rows become wrapped flex, title order -1 and 100% basis; thumbnails/header row hide.
- Tablet: width 753px, height 2112.6px, padding 30.72px, 7.68px row gap.
- Mobile: intentional width 684px, height 1965.7px, padding 16px, 4px gap.
