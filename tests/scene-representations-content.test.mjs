import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const sharedRoot = new URL(
  "../src/components/sites/scenerepresentations-org-8a68da94/shared/",
  import.meta.url,
);

async function readJson(name) {
  return JSON.parse(await readFile(new URL(name, sharedRoot), "utf8"));
}

test("publishing data preserves all 33 live entries in source order", async () => {
  const publications = await readJson("publications.json");
  assert.equal(publications.length, 33);
  assert.equal(publications[0].title, "MilliVid");
  assert.equal(publications.at(-1).title, "DeepVoxels");
});

test("teaching and member data preserve the complete live sets", async () => {
  const [courses, members] = await Promise.all([
    readJson("courses.json"),
    readJson("members.json"),
  ]);
  assert.equal(courses.length, 6);
  assert.equal(members.length, 24);
  assert.equal(courses[1].term, "spring 2025");
  assert.equal(members[0].name, "Ishaan Chandratreya");
});

test("course fragments retain the live syllabus and use local hero media", async () => {
  const fragments = await readJson("course-fragments.json");
  assert.match(fragments.details, /Course Contents/);
  assert.match(fragments.syllabus, /Module 3: Vision for Embodied Agents/);
  assert.match(fragments.related, /Image Attribution/);
  assert.doesNotMatch(fragments.courseTitle, /https:\/\/scenerepresentations\.org/);
  assert.match(fragments.courseTitle, /\/sites\/scenerepresentations-org-8a68da94\//);
});
