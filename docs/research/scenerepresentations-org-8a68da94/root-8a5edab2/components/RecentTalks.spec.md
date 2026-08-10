# RecentTalks Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/RecentTalks.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/root-8a5edab2/recent-talks-section.png`
- **Interaction model:** link hover

## DOM Structure
Heading/view-all row followed by one horizontal card: thumbnail, title, venue, date, speaker.

## Computed Styles
- Desktop: section `690×872`, padding 32px, top border `#292e32`; card image max-width/flex-basis 25%.
- Card uses shared background, border, radius and hover values, but flex-flow is row and caption fills remaining width.

## Assets and Text Content
Use `shared/home.json.talks[0]`: “Modeling the world (and yourself) from vision”; “Toronto's Vision Group Lecture Series”; “Thu, Oct. 9 2025 · Vincent Sitzmann”; local preloaded YouTube thumbnail.

## Responsive Behavior
- Tablet section `753×246`, padding 30.72px.
- Mobile section `375×167`, padding 16px; remains horizontal.
