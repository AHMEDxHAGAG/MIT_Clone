# RelatedCourses Specification

## Overview
- **Target file:** `src/components/sites/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/RelatedCourses.tsx`
- **Screenshot:** `docs/design-references/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/related-courses-section.png`
- **Interaction model:** ordinary links

## DOM Structure
Related Courses and Credits list, then Image Attribution text/link.

## Computed Styles
- Desktop: two `633.562px` columns, 32px gap/padding, `1363×475px`.
- List items have 8px bottom padding; content max width 65ch.

## Assets and Text Content
Render exact cleaned `related` from `shared/course-fragments.json`, including Oxford, Johns Hopkins, MIT and University of Tübingen credits plus Aryabhata Dutta attribution.

## Responsive Behavior
One column below 1140px: tablet `692×588px`; mobile intentional `502×585px`.
