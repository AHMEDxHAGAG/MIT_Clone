import { PublicationCard } from "../shared/PublicationCard";
import { featuredPublications } from "./publication-data";
import styles from "./publications.module.css";

export function FeaturedScroller() {
  return (
    <section className={`srg-background-dotted ${styles.featured}`} id="featured">
      {featuredPublications.map((publication) => (
        <PublicationCard key={publication.href} publication={publication} />
      ))}
    </section>
  );
}
