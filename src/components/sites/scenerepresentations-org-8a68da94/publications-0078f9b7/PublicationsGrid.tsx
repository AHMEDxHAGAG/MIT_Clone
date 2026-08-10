import { PublicationCard } from "../shared/PublicationCard";
import { publications } from "./publication-data";
import styles from "./publications.module.css";

export function PublicationsGrid() {
  return (
    <section className={`srg-background-dotted srg-cards ${styles.publicationsGrid}`} id="previews">
      {publications.map((publication) => (
        <PublicationCard key={publication.href} publication={publication} />
      ))}
    </section>
  );
}
