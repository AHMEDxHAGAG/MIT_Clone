import Image from "next/image";
import type { Publication } from "../shared/types";
import { publications } from "./publication-data";
import styles from "./publications.module.css";

function displayVenue(venue: string) {
  return venue === "ArXiv" ? "arXiv" : venue;
}

function PublicationRow({ publication }: { publication: Publication }) {
  return (
    <a className={styles.listRow} href={publication.href}>
      <time className={styles.rowDate} dateTime={publication.dateTime}>{publication.date}</time>
      <Image
        alt=""
        className={styles.rowThumbnail}
        height={16}
        src={publication.listThumbnail}
        unoptimized
        width={32}
      />
      <span className={styles.rowTitle}>
        <strong>{publication.title}</strong>
        <span aria-hidden="true" className={styles.leader} />
        {publication.subtitle ? <span className={styles.rowSubtitle}>{publication.subtitle}</span> : null}
      </span>
      <span className={styles.rowAuthors} title={publication.authorsTitle}>
        {publication.authors}<span className={styles.etAl}> et al.</span>
      </span>
      <span aria-label={publication.award ? "Award" : undefined} className={styles.rowAward}>
        {publication.award}
      </span>
      <span className={styles.rowVenue}>{displayVenue(publication.venue)}</span>
    </a>
  );
}

export function PublicationsList() {
  return (
    <section className={styles.publicationsList} id="list">
      <div className={styles.listHeader}>
        <span>Date</span>
        <span aria-hidden="true" />
        <span className={styles.titleHeaders}><span>Title</span><span>Subtitle</span></span>
        <span>First Authors</span>
        <span aria-hidden="true" />
        <span>Venue</span>
      </div>
      {publications.map((publication) => (
        <PublicationRow key={publication.href} publication={publication} />
      ))}
    </section>
  );
}
