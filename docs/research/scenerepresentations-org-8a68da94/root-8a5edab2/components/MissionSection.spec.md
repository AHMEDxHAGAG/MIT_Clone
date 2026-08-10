# MissionSection Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/MissionSection.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/root-8a5edab2/mission-section.png`
- **Interaction model:** static except one People link and one research link

## DOM Structure
Section with H1, two staggered portrait rows, then three paragraphs (first strong).

## Computed Styles
- Desktop: `width:690px`, `height:567.5px`, `padding:32px`, `font:16px/22px MessinaSans`.
- H1: `36px`, weight 600, bottom padding `.5em`.
- Portrait group margins: top `calc(4px + 1.625rem)`, bottom `calc(16px + 4px)`; rows are reverse/wrap flex, second row top margin 4px.
- Portraits: 48px square in layout, circle, 1pt background-colored border, right/top margin `-10px`.
- Paragraphs after the first: top margin 8px.

## States & Behaviors
Member group hover uses blue border and blue 4px glow over 100ms. Links use shared 250ms blue hover.

## Assets
All 24 exact portrait entries from `shared/members.json`; local root-page `_astro` assets.

## Text Content (verbatim)
Use `shared/home.json`: title and all three extracted mission paragraphs, including the bold first paragraph and linked words “our research”.

## Responsive Behavior
- 1440px: 690px grid column.
- 768px: width 753px, height 543px, padding 30.72px.
- 390px: width 375px, height 960px, padding 16px; H1 wraps to three lines and portraits wrap naturally.
