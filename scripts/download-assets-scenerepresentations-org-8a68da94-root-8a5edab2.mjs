import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const pageRoot = join(projectRoot, "public/sites/scenerepresentations-org-8a68da94/root-8a5edab2");
const sharedRoot = join(projectRoot, "public/sites/scenerepresentations-org-8a68da94/shared");
const sharedUrls = new Set([
  "https://scenerepresentations.org/fonts/MessinaSansWeb-Regular.woff2",
  "https://scenerepresentations.org/fonts/MessinaSansWeb-SemiBold.woff2",
  "https://scenerepresentations.org/favicon-dark-128.png",
  "https://scenerepresentations.org/favicon-dark-64.png",
  "https://scenerepresentations.org/favicon-dark-32.png",
  "https://scenerepresentations.org/favicon-dark-16.png",
  "https://scenerepresentations.org/favicon-light-128.png",
  "https://scenerepresentations.org/favicon-light-64.png",
  "https://scenerepresentations.org/favicon-light-32.png",
  "https://scenerepresentations.org/favicon-light-16.png",
  "https://scenerepresentations.org/favicon.svg",
  "https://scenerepresentations.org/apple-touch-icon.png",
  "https://scenerepresentations.org/apple-touch-icon-180.png"
]);
const urls = [
  "https://scenerepresentations.org/_astro/ishaan.B_XJhPiB_nF7cl.avif",
  "https://scenerepresentations.org/_astro/andrew.ZVrE2DpY_2t8of6.avif",
  "https://scenerepresentations.org/_astro/ali.CtV5IbcT_1gqixA.avif",
  "https://scenerepresentations.org/_astro/ana.DLKQaMk-_1h7OBV.avif",
  "https://scenerepresentations.org/_astro/george.BtNYXZla_Z1ABYPU.avif",
  "https://scenerepresentations.org/_astro/david.DXKuyqAJ_P4ILM.avif",
  "https://scenerepresentations.org/_astro/cameron.B5MTpwhU_Z1OTk6.avif",
  "https://scenerepresentations.org/_astro/boyuan.BNDLUWdL_Z1SBbxd.avif",
  "https://scenerepresentations.org/_astro/ayush.fgslr7Qe_2q6FBa.avif",
  "https://scenerepresentations.org/_astro/artem.B7gAgvTh_1H0WBS.avif",
  "https://scenerepresentations.org/_astro/vincent.Dvoy81k6_2nBs5w.avif",
  "https://scenerepresentations.org/_astro/xingjian.ftt7uZnW_GGT84.avif",
  "https://scenerepresentations.org/_astro/susie.D2FlH6Fk_1eVVmh.avif",
  "https://scenerepresentations.org/_astro/max.CuVfq7_4_m9q3T.avif",
  "https://scenerepresentations.org/_astro/jayden.s7qtsw9j_LXHTn.avif",
  "https://scenerepresentations.org/_astro/kiwhan.ncgRkDu2_fGKAW.avif",
  "https://scenerepresentations.org/_astro/isabella.DO_4mzqH_1pP9kd.avif",
  "https://scenerepresentations.org/_astro/hyunwoo.BYJqjsEo_1DFAcD.avif",
  "https://scenerepresentations.org/_astro/evan.ChehbxG6_16UAaB.avif",
  "https://scenerepresentations.org/_astro/eric.C2zqIUWR_1RpFU6.avif",
  "https://scenerepresentations.org/_astro/amani.h65YqlI4_Z1Wgpyd.avif",
  "https://scenerepresentations.org/_astro/adarsh.CI9A0qsk_ZkVlqa.avif",
  "https://scenerepresentations.org/_astro/lester.CW1pDYPI_2lswkj.avif",
  "https://scenerepresentations.org/_astro/kairo.CmXO70Q2_2t49h3.avif",
  "https://scenerepresentations.org/_astro/thumbnail.DGoEYvyG_Z1P6B01.avif",
  "https://scenerepresentations.org/_astro/thumbnail.Buw_GTGN_2u6Xbi.avif",
  "https://scenerepresentations.org/assets/preloaded/B3digzhanUY-hqdefault.jpg",
  "https://scenerepresentations.org/publications/millivid/preview.webm",
  "https://scenerepresentations.org/publications/millivid/thumbnail.jpg",
  "https://scenerepresentations.org/publications/millivid/preview.mp4",
  "https://scenerepresentations.org/publications/vera/preview.webm",
  "https://scenerepresentations.org/publications/vera/thumbnail.jpg",
  "https://scenerepresentations.org/publications/vera/preview.mp4",
  "https://scenerepresentations.org/publications/large-video-planner/preview.webm",
  "https://scenerepresentations.org/publications/large-video-planner/thumbnail.jpg",
  "https://scenerepresentations.org/publications/large-video-planner/preview.mp4",
  "https://scenerepresentations.org/publications/gvs/preview.webm",
  "https://scenerepresentations.org/publications/gvs/thumbnail.jpg",
  "https://scenerepresentations.org/publications/gvs/preview.mp4",
  "https://scenerepresentations.org/publications/xfactor-nvs/preview.webm",
  "https://scenerepresentations.org/publications/xfactor-nvs/thumbnail.jpg",
  "https://scenerepresentations.org/publications/xfactor-nvs/preview.mp4",
  "https://scenerepresentations.org/publications/meschers/preview.webm",
  "https://scenerepresentations.org/publications/meschers/thumbnail.jpg",
  "https://scenerepresentations.org/publications/meschers/preview.mp4",
  "https://scenerepresentations.org/publications/jacobian-fields/preview.webm",
  "https://scenerepresentations.org/publications/jacobian-fields/thumbnail.jpg",
  "https://scenerepresentations.org/publications/jacobian-fields/preview.mp4",
  "https://scenerepresentations.org/fonts/MessinaSansWeb-Regular.woff2",
  "https://scenerepresentations.org/fonts/MessinaSansWeb-SemiBold.woff2",
  "https://scenerepresentations.org/favicon-dark-128.png",
  "https://scenerepresentations.org/favicon-dark-64.png",
  "https://scenerepresentations.org/favicon-dark-32.png",
  "https://scenerepresentations.org/favicon-dark-16.png",
  "https://scenerepresentations.org/favicon-light-128.png",
  "https://scenerepresentations.org/favicon-light-64.png",
  "https://scenerepresentations.org/favicon-light-32.png",
  "https://scenerepresentations.org/favicon-light-16.png",
  "https://scenerepresentations.org/favicon.svg",
  "https://scenerepresentations.org/apple-touch-icon.png",
  "https://scenerepresentations.org/apple-touch-icon-180.png"
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
  console.log(JSON.stringify({ downloaded: results.length, shared: 13, results }, null, 2));
}

await main();
