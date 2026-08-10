# Publications Page Behaviors

- The heading’s Featured/List/Previews controls are in-page anchor links, not content-switching tabs.
- Featured is a horizontal, user-scrollable flex strip with `scroll-snap-type:x mandatory`, 284px fixed cards, start snap alignment, and left scroll padding equal to section padding.
- The 33-row list is static; hover adds highlight-blue border and dark blue background over the shared 250ms link transition.
- Preview cards use the shared card/video behavior; all videos autoplay muted and loop.
- No scroll-triggered reveals, carousels, pagination, filters, modal states, or time-based content swaps.
- Source mobile quirk: at 390px the list/card content establishes a 684px minimum page width, so the viewport scrolls horizontally; preserve it.
