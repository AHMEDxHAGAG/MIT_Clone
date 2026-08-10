# CourseTitle Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/CourseTitle.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/course-title-section.png`
- **Interaction model:** anchor/external link hover

## DOM Structure
Hero section with exact inline course-logo SVG and seven pill links.

## Computed Styles
- Desktop: `1363.12×230.469px`, padding 32px, black plus local background image, cover, x position 38.2%, center y.
- Course SVG max width 328px and bottom margin 16px.
- Pill list wraps with 16px gap; translucent black background mixed 50%, 4px backdrop blur, 1px border, 2.5px radius.

## Assets and Text Content
Render the exact cleaned `courseTitle` string from `shared/course-fragments.json`; local hero path already substituted. Labels: Details, Syllabus, Related Courses, Gradescope, Slides, Piazza, Canvas.

## Responsive Behavior
- Tablet: `692×283`, padding 30.72px.
- Mobile: intentional width `502px`, height 238px, padding 16px; pills wrap.
