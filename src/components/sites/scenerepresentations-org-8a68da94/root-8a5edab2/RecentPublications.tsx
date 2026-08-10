import { PublicationCard } from "../shared/PublicationCard";
import publicationsData from "../shared/publications.json";
import type { Publication } from "../shared/types";
import styles from "./home.module.css";

const titleOverrides: Record<string, string> = {
  "diffusion-locality": "Locality in Image Diffusion Models Emerges from Data Statistics",
  "diffusion-underfitting": "Selective Underfitting in Diffusion Models",
  gvs: "Generative View Stitching",
  "jacobian-fields": "Controlling diverse robots by inferring Jacobian fields with deep networks",
  "large-video-planner": "Large Video Planner",
  "xfactor-nvs": "True Self-Supervised Novel View Synthesis is Transferable",
};

function publicationSlug(publication: Publication) {
  return publication.href.split("/").filter(Boolean).at(-1) ?? "";
}

const recentPublications = (publicationsData as Publication[])
  .filter((publication) => publicationSlug(publication) !== "svsm")
  .slice(0, 9)
  .map((publication) => ({
    ...publication,
    title: publication.title || titleOverrides[publicationSlug(publication)] || "",
    venue: publication.venue === "arXiv" ? "ArXiv" : publication.venue,
  }));

export function RecentPublications() {
  return (
    <section className={styles.recentPublications} id="publications">
      <div className={styles.sectionHeading}>
        <h2>Recent Publications</h2>
        <a className={`srg-arrow-link ${styles.viewAll}`} href="/publications/">view all</a>
      </div>
      <div className={`srg-cards ${styles.publicationGrid}`}>
        {recentPublications.map((publication) => (
          <PublicationCard key={publication.href} publication={publication} />
        ))}
      </div>
    </section>
  );
}
