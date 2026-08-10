# Scene Representations Clone Output Plan

- **Application root:** `.`
- **Normalized origin:** `https://scenerepresentations.org`
- **Site key:** `scenerepresentations-org-8a68da94`
- **Shared component root:** `src/components/sites/scenerepresentations-org-8a68da94/shared/`
- **Shared asset root:** `public/sites/scenerepresentations-org-8a68da94/shared/`
- **Shared foundation changes:** the untouched scaffold's `src/app/layout.tsx`, `src/app/globals.css`, and `src/app/page.tsx`; shared types/icons/components under the site namespace. The existing `package-lock.json` modification is user-owned and will be preserved.

## Target mapping

| Source URL | Page key | Destination route/file | Research root | Screenshot root | Component root | Asset root | Downloader |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `https://scenerepresentations.org/` | `root-8a5edab2` | `/` → `src/app/page.tsx` | `docs/research/scenerepresentations-org-8a68da94/root-8a5edab2/` | `docs/design-references/scenerepresentations-org-8a68da94/root-8a5edab2/` | `src/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/` | `public/sites/scenerepresentations-org-8a68da94/root-8a5edab2/` | `scripts/download-assets-scenerepresentations-org-8a68da94-root-8a5edab2.mjs` |
| `https://scenerepresentations.org/courses/` | `courses-dc2aaa46` | `/courses` → `src/app/courses/page.tsx` | `docs/research/scenerepresentations-org-8a68da94/courses-dc2aaa46/` | `docs/design-references/scenerepresentations-org-8a68da94/courses-dc2aaa46/` | `src/components/sites/scenerepresentations-org-8a68da94/courses-dc2aaa46/` | `public/sites/scenerepresentations-org-8a68da94/courses-dc2aaa46/` | `scripts/download-assets-scenerepresentations-org-8a68da94-courses-dc2aaa46.mjs` |
| `https://scenerepresentations.org/courses/2025/spring/advances-in-cv/` | `courses--2025--spring--advances-in-cv-afcb742e` | `/courses/2025/spring/advances-in-cv` → `src/app/courses/2025/spring/advances-in-cv/page.tsx` | `docs/research/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/` | `docs/design-references/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/` | `src/components/sites/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/` | `public/sites/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e/` | `scripts/download-assets-scenerepresentations-org-8a68da94-courses-2025-advances-in-cv-afcb742e.mjs` |
| `https://scenerepresentations.org/publications/` | `publications-0078f9b7` | `/publications` → `src/app/publications/page.tsx` | `docs/research/scenerepresentations-org-8a68da94/publications-0078f9b7/` | `docs/design-references/scenerepresentations-org-8a68da94/publications-0078f9b7/` | `src/components/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/` | `public/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/` | `scripts/download-assets-scenerepresentations-org-8a68da94-publications-0078f9b7.mjs` |

## Collision audit

- The only existing App Router page is the untouched template placeholder at `/`; replacing it is permitted by the clone workflow.
- No planned component, research, screenshot, public asset, downloader, or nested route path existed before this run.
- All targets share one origin and one visual foundation, so no multi-origin layout decision is needed.
- There are no query strings or fragments requiring shared-path state handling.
