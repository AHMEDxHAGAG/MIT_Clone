import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const pageRoot = join(projectRoot, "public/sites/scenerepresentations-org-8a68da94/publications-0078f9b7");
const sharedRoot = join(projectRoot, "public/sites/scenerepresentations-org-8a68da94/shared");
const sharedUrls = new Set([]);
const urls = [
  "https://scenerepresentations.org/_astro/thumbnail.DGoEYvyG_Z1P6B01.avif",
  "https://scenerepresentations.org/publications/millivid/thumbnail.jpg",
  "https://scenerepresentations.org/publications/vera/thumbnail.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.KwApKzuX_Z23xdHv.jpg",
  "https://scenerepresentations.org/publications/large-video-planner/thumbnail.jpg",
  "https://scenerepresentations.org/publications/gvs/thumbnail.jpg",
  "https://scenerepresentations.org/publications/xfactor-nvs/thumbnail.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.DGoEYvyG_TbBQH.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.Buw_GTGN_Z20h3UW.jpg",
  "https://scenerepresentations.org/publications/meschers/thumbnail.jpg",
  "https://scenerepresentations.org/publications/jacobian-fields/thumbnail.jpg",
  "https://scenerepresentations.org/publications/history-guidance/thumbnail.jpg",
  "https://scenerepresentations.org/publications/diffusion-forcing/thumbnail.jpg",
  "https://scenerepresentations.org/_astro/teaser.CK4p5Ew-_Z1jIkcM.jpg",
  "https://scenerepresentations.org/publications/reparam-ddim/thumbnail.jpg",
  "https://scenerepresentations.org/publications/flowmap/thumbnail.jpg",
  "https://scenerepresentations.org/publications/pixelsplat/thumbnail.jpg",
  "https://scenerepresentations.org/_astro/color_corrected.CIHy8xXU_Z1gsEzz.jpg",
  "https://scenerepresentations.org/publications/diffusion-with-forward/thumbnail.jpg",
  "https://scenerepresentations.org/publications/flowcam/thumbnail.jpg",
  "https://scenerepresentations.org/publications/stereo-view-synthesis/thumbnail.jpg",
  "https://scenerepresentations.org/publications/see3d/thumbnail.jpg",
  "https://scenerepresentations.org/publications/feature-fields/thumbnail.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.B9Mqke3f_Z1Yqot4.jpg",
  "https://scenerepresentations.org/publications/ndfs/thumbnail.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.DlA4hdoO_qo1TV.svg",
  "https://scenerepresentations.org/_astro/thumbnail.ViVLaBwm_Z2lUrBv.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.C-AdVK9i_CzVKY.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.D_P8zNpx_Z1FjGOt.jpg",
  "https://scenerepresentations.org/publications/lfns/thumbnail.jpg",
  "https://scenerepresentations.org/publications/metasdf/thumbnail.jpg",
  "https://scenerepresentations.org/publications/siren/thumbnail.jpg",
  "https://scenerepresentations.org/publications/srns/thumbnail.jpg",
  "https://scenerepresentations.org/publications/deepvoxels/thumbnail.jpg",
  "https://scenerepresentations.org/_astro/thumbnail.KwApKzuX_Z1jBRTi.avif",
  "https://scenerepresentations.org/_astro/thumbnail.Buw_GTGN_2u6Xbi.avif",
  "https://scenerepresentations.org/_astro/teaser.CK4p5Ew-_alnLR.avif",
  "https://scenerepresentations.org/_astro/color_corrected.CIHy8xXU_Z1DTiPI.png",
  "https://scenerepresentations.org/_astro/thumbnail.B9Mqke3f_1pgCUk.gif",
  "https://scenerepresentations.org/_astro/thumbnail.DlA4hdoO_1SzT8P.svg",
  "https://scenerepresentations.org/_astro/thumbnail.C-AdVK9i_1dtLhx.gif",
  "https://scenerepresentations.org/_astro/thumbnail.D_P8zNpx_mjXSF.png",
  "https://scenerepresentations.org/publications/millivid/preview.webm",
  "https://scenerepresentations.org/publications/millivid/preview.mp4",
  "https://scenerepresentations.org/publications/vera/preview.webm",
  "https://scenerepresentations.org/publications/vera/preview.mp4",
  "https://scenerepresentations.org/publications/large-video-planner/preview.webm",
  "https://scenerepresentations.org/publications/large-video-planner/preview.mp4",
  "https://scenerepresentations.org/publications/gvs/preview.webm",
  "https://scenerepresentations.org/publications/gvs/preview.mp4",
  "https://scenerepresentations.org/publications/xfactor-nvs/preview.webm",
  "https://scenerepresentations.org/publications/xfactor-nvs/preview.mp4",
  "https://scenerepresentations.org/publications/meschers/preview.webm",
  "https://scenerepresentations.org/publications/meschers/preview.mp4",
  "https://scenerepresentations.org/publications/jacobian-fields/preview.webm",
  "https://scenerepresentations.org/publications/jacobian-fields/preview.mp4",
  "https://scenerepresentations.org/publications/history-guidance/preview.webm",
  "https://scenerepresentations.org/publications/history-guidance/preview.mp4",
  "https://scenerepresentations.org/publications/diffusion-forcing/preview.webm",
  "https://scenerepresentations.org/publications/diffusion-forcing/preview.mp4",
  "https://scenerepresentations.org/publications/reparam-ddim/preview.webm",
  "https://scenerepresentations.org/publications/reparam-ddim/preview.mp4",
  "https://scenerepresentations.org/publications/flowmap/preview.webm",
  "https://scenerepresentations.org/publications/flowmap/preview.mp4",
  "https://scenerepresentations.org/publications/pixelsplat/preview.webm",
  "https://scenerepresentations.org/publications/pixelsplat/preview.mp4",
  "https://scenerepresentations.org/publications/diffusion-with-forward/preview.webm",
  "https://scenerepresentations.org/publications/diffusion-with-forward/preview.mp4",
  "https://scenerepresentations.org/publications/flowcam/preview.webm",
  "https://scenerepresentations.org/publications/flowcam/preview.mp4",
  "https://scenerepresentations.org/publications/stereo-view-synthesis/preview.webm",
  "https://scenerepresentations.org/publications/stereo-view-synthesis/preview.mp4",
  "https://scenerepresentations.org/publications/see3d/preview.webm",
  "https://scenerepresentations.org/publications/see3d/preview.mp4",
  "https://scenerepresentations.org/publications/feature-fields/preview.webm",
  "https://scenerepresentations.org/publications/feature-fields/preview.mp4",
  "https://scenerepresentations.org/publications/ndfs/preview.webm",
  "https://scenerepresentations.org/publications/ndfs/preview.mp4",
  "https://scenerepresentations.org/publications/gem/preview.webm",
  "https://scenerepresentations.org/publications/gem/thumbnail.jpg",
  "https://scenerepresentations.org/publications/gem/preview.mp4",
  "https://scenerepresentations.org/publications/lfns/preview.webm",
  "https://scenerepresentations.org/publications/lfns/preview.mp4",
  "https://scenerepresentations.org/publications/metasdf/preview.webm",
  "https://scenerepresentations.org/publications/metasdf/preview.mp4",
  "https://scenerepresentations.org/publications/siren/preview.webm",
  "https://scenerepresentations.org/publications/siren/preview.mp4",
  "https://scenerepresentations.org/publications/srns/preview.webm",
  "https://scenerepresentations.org/publications/srns/preview.mp4",
  "https://scenerepresentations.org/publications/deepvoxels/preview.webm",
  "https://scenerepresentations.org/publications/deepvoxels/preview.mp4"
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
