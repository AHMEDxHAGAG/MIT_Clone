# CourseSyllabus Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/CourseSyllabus.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/course-syllabus-section.png`
- **Interaction model:** static table and ordinary resource links

## DOM Structure
Syllabus H2 followed by the full Module 0/1/2/3 table. Each module heading spans three columns; lecture rows hold date/title, bullet topics, and resource/assignment pills.

## Computed Styles
- Desktop section `1363×3959.8px`, 32px padding; table width 100%, separate borders with zero spacing.
- Cells top aligned, 8px padding, 2px bottom border `#292e32`; first cell has no left padding.
- Module headings: 32px top padding, 8px bottom padding, 3px solid `#3396ff` bottom border.
- Lecture kind 11px uppercase weight 600; homework pills use green/red semantic variables; canceled/holiday rows opacity .75 and background `#0f0f0f`.

## Assets and Text Content
Render exact cleaned `syllabus` from `shared/course-fragments.json`; this is the audited source of every lecture, topic, date, cancellation, recording, slide, problem-set and project label.

## Responsive Behavior
- Tablet: width 692px, height 4662px, padding 30.72px.
- Mobile: intentional width 502px, height 5670px, padding 16px; title cell becomes 30% at ≥480px only.
