# Advances in Computer Vision Page Behaviors

- Header is shared and Teaching is active.
- Desktop/tablet side rail is static-width while its breadcrumb list is `position:sticky; top:var(--space-pad)` and written `vertical-rl`; rail hides below 768px.
- Hero pills are links. Details/Syllabus/Related Courses use native smooth in-page anchor scrolling; Gradescope/Slides/Piazza/Canvas are external links. They are not tab panels.
- Two past-year banners are static alerts with red link hover.
- Syllabus table is static. Recording/slides buttons and assignment chips are ordinary links; no accordion or modal state.
- No scroll reveal, header mutation, carousel, or time-driven animation exists.
- Intentional narrow-viewport overflow is preserved: main table min-content width is 502px at a 390px browser viewport.
