# Home Page Behaviors

- Native smooth scrolling is enabled (`html { scroll-behavior:smooth }`); no Lenis/Locomotive wrapper or scroll-snap page container.
- Header remains relative and visually unchanged through the scroll sweep.
- Theme toggle is click-driven and shared across routes; exact dark/light state values are recorded in the shared footer spec.
- All publication preview videos autoplay muted, loop, and play inline; no user controls.
- Member portraits are one link to People; portrait borders change from the page background to `#3396ff` and gain `0 0 4px #3396ff` on group hover.
- Publication cards share the 333ms base / 100ms hover transitions in `PublicationCard.spec.md`.
- “view all”, nav items, body research link, and talk card are ordinary links; there are no tabs, modals, accordions, carousels, or time-cycling text.
- Responsive switch is layout-driven: home changes from the two-column grid to one column below 968px.
