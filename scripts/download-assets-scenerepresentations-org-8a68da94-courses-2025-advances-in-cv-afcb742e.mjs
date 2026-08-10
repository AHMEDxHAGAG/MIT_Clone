import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const pageRoot = join(projectRoot, "public/sites/scenerepresentations-org-8a68da94/courses--2025--spring--advances-in-cv-afcb742e");
const sharedRoot = join(projectRoot, "public/sites/scenerepresentations-org-8a68da94/shared");
const sharedUrls = new Set([]);
const urls = [
  "https://scenerepresentations.org/_astro/background.CtGMFFqq.jpg"
];

function destinationFor(source) {
  const url = new URL(source);
  const relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  return join(sharedUrls.has(source) ? sharedRoot : pageRoot, relativePath);
}

async function download(source) {
  const destination = destinationFor(source);
  await mkdir(dirname(destination), { recursive: true });
  const response = await fetch(source);
  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${source}`);
  }
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  return { source, destination: destination.replace(projectRoot, ".") };
}

async function main() {
  const results = [];
  for (let index = 0; index < urls.length; index += 4) {
    results.push(...await Promise.all(urls.slice(index, index + 4).map(download)));
  }
  console.log(JSON.stringify({ downloaded: results.length, shared: 0, results }, null, 2));
}

await main();
