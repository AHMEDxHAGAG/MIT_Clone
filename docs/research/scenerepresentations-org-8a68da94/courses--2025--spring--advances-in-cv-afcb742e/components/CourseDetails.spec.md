# CourseDetails Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/CourseDetails.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/course-details-section.png`
- **Interaction model:** static text/tables plus ordinary links

## DOM Structure
Past-year alert; Course Contents; Prerequisites; Schedule; Collaboration Policy; Office Hours; AI Assistants Policy; Grading Policy; Late Submissions Policy; FAQ.

## Computed Styles
- Desktop ≥1140: grid, two `633.562px` columns, 32px gaps/padding, `1363×2061px`.
- Base text 16px/22px. Content blocks max width 65ch; paragraph stack gap 8px.
- Alert: 15.2px/22.8px, padding `11.4px 15.2px`, radius 6px, `rgba(211,47,47,.15)` background, 2px `rgba(211,47,47,.6)` border.
- Text tables are top-aligned; Q/A odd rows weight 700 and answers have 8px bottom padding.

## Assets and Text Content
Render the exact cleaned `details` string from `shared/course-fragments.json`; it contains every verbatim paragraph, schedule/office-hours/grading/FAQ row and live link.

## Responsive Behavior
- Tablet: one flex column, width 692px, height 3257px, 30.72px padding, 15.36px gap.
- Mobile: one flex column, intentional width 502px, height 3628px, 16px padding, 8px gap.
