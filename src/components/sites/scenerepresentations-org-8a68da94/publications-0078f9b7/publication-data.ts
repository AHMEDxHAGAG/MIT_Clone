import sourcePublications from "../shared/publications.json";
import type { Publication } from "../shared/types";

const titlesBySlug: Readonly<Record<string, string>> = {
  colf: "Unsupervised Discovery and Composition of Object Light Fields",
  "deep-medial-fields": "Deep Medial Fields",
  "diffusion-locality": "Locality in Image Diffusion Models Emerges from Data Statistics",
  "diffusion-underfitting": "Selective Underfitting in Diffusion Models",
  "feature-fields": "Decomposing NeRF for Editing via Feature Field Distillation",
  gem: "Learning Signal-Agnostic Manifolds of Neural Fields",
  gvs: "Generative View Stitching",
  "history-guidance": "History-Guided Video Diffusion",
  "jacobian-fields": "Controlling diverse robots by inferring Jacobian fields with deep networks",
  "large-video-planner": "Large Video Planner",
  "neural-field-review": "Neural Fields in Visual Computing and Beyond",
  "reparam-ddim": "Score Distillation via Reparametrized DDIM",
  siren: "Implicit Neural Representations with Periodic Activation Functions",
  "stereo-view-synthesis": "Learning to render novel views from wide-baseline stereo pairs",
  svsm: "Scaling View Synthesis Transformers",
  vbc: "Variational Barycentric Coordinates",
  "visuomotor-control": "3D Neural Scene Representations for Visuomotor Control",
  "xfactor-nvs": "True Self-Supervised Novel View Synthesis is Transferable",
};

const imageSourcesBySlug: Readonly<Record<string, string>> = {
  colf: "/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/_astro/thumbnail.B9Mqke3f_1pgCUk.gif",
  "deep-medial-fields": "/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/_astro/thumbnail.D_P8zNpx_mjXSF.png",
  "neural-field-review": "/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/_astro/thumbnail.DlA4hdoO_1SzT8P.svg",
  vbc: "/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/_astro/color_corrected.CIHy8xXU_Z1DTiPI.png",
  "visuomotor-control": "/sites/scenerepresentations-org-8a68da94/publications-0078f9b7/_astro/thumbnail.C-AdVK9i_1dtLhx.gif",
};

const featuredSlugs = new Set([
  "millivid",
  "vera",
  "large-video-planner",
  "gvs",
  "xfactor-nvs",
  "diffusion-underfitting",
]);

function slugFromHref(href: string) {
  const pathParts = new URL(href).pathname.split("/").filter(Boolean);
  return pathParts.at(-1) ?? "";
}

export const publications: Publication[] = (sourcePublications as Publication[]).map((publication) => {
  const slug = slugFromHref(publication.href);
  const mediaTitle = publication.media?.kind === "image"
    ? publication.media.alt.match(/"(.+)"/)?.[1]
    : undefined;
  const title = publication.title || titlesBySlug[slug] || mediaTitle || "";

  if (publication.media?.kind !== "image" || publication.media.src) {
    return { ...publication, title };
  }

  return {
    ...publication,
    media: {
      ...publication.media,
      src: imageSourcesBySlug[slug] ?? publication.listThumbnail,
    },
    title,
  };
});

export const featuredPublications = publications.filter((publication) =>
  featuredSlugs.has(slugFromHref(publication.href)),
);
