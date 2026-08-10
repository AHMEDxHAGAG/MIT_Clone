import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const componentRoot =
  "src/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2";

function source(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

test("the home route composes the shared shell and the three captured sections", () => {
  const page = source("src/app/page.tsx");

  assert.match(page, /SiteShell/);
  assert.match(page, /MissionSection/);
  assert.match(page, /RecentPublications/);
  assert.match(page, /RecentTalks/);
  assert.match(page, /id="main-content"/);
});

test("home sections expose named components and exact content sources", () => {
  const mission = source(`${componentRoot}/MissionSection.tsx`);
  const publications = source(`${componentRoot}/RecentPublications.tsx`);
  const talks = source(`${componentRoot}/RecentTalks.tsx`);

  assert.match(mission, /export function MissionSection/);
  assert.match(mission, /members\.json/);
  assert.match(mission, /home\.json/);
  assert.match(publications, /export function RecentPublications/);
  assert.match(publications, /publications\.json/);
  assert.match(talks, /export function RecentTalks/);
  assert.match(talks, /home\.json/);
});
