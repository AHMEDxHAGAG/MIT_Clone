# CoursesGrid Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/courses-dc2aaa46/CoursesGrid.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/courses-dc2aaa46/courses-grid-section.png`
- **Interaction model:** link hover

## DOM Structure
One dotted-background section containing six course-card anchors/figures.

## Computed Styles
- Section desktop: `padding:32px`, `gap:16px`, `grid-template-columns:332px 332px 332px 332px`, height 924px.
- `--min-column-width:284px`; auto-fill grid.
- Images: rendered `314×157px` in desktop card, forced 2:1, object-fit cover, radius 2.5px.
- Card title 16px/22px weight 600; term pill 12px; identifier 13px at 80% opacity.

## States & Behaviors
Shared card hover values. External course headings add a blue `→` prefix.

## Assets and Text Content
Use all six exact entries in `shared/courses.json` in order (Spring 2026, Spring 2025, Spring 2024, Fall 2023, Spring 2023, Fall 2022). All thumbnails are local page assets.

## Responsive Behavior
- 1440: four columns.
- 768: two columns, padding 30.72px, gap 15.36px.
- 390: one 343px column, padding 16px, gap 8px.
