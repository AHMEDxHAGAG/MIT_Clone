import { SiteShell } from "../shared/SiteShell";
import { FeaturedScroller } from "./FeaturedScroller";
import { PublicationsGrid } from "./PublicationsGrid";
import { PublicationsHeading } from "./PublicationsHeading";
import { PublicationsList } from "./PublicationsList";
import styles from "./publications.module.css";

export function PublicationsPage() {
  return (
    <div className={styles.backdrop}>
      <SiteShell>
        <main className={`srg-main ${styles.main}`} id="main-content">
          <PublicationsHeading />
          <FeaturedScroller />
          <PublicationsList />
          <PublicationsGrid />
        </main>
      </SiteShell>
    </div>
  );
}
