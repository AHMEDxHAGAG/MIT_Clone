import styles from "./publications.module.css";

function FeaturedIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="6.25" />
      <path d="m8 4.25.92 2.83h2.98L9.49 8.83l.92 2.83L8 9.91l-2.41 1.75.92-2.83L4.1 7.08h2.98L8 4.25Z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M2.5 3.5h11v9h-11zM5.5 3.5v9M2.5 6.5h11M2.5 9.5h11" />
    </svg>
  );
}

function PreviewsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <rect height="4" rx=".5" width="4" x="2" y="2" />
      <rect height="4" rx=".5" width="4" x="10" y="2" />
      <rect height="4" rx=".5" width="4" x="2" y="10" />
      <rect height="4" rx=".5" width="4" x="10" y="10" />
    </svg>
  );
}

export function PublicationsHeading() {
  return (
    <section className={styles.heading}>
      <h1>Publications</h1>
      <nav aria-label="Publication views" className={styles.viewLinks}>
        <a href="#featured"><FeaturedIcon />Featured</a>
        <a href="#list"><ListIcon />List</a>
        <a href="#previews"><PreviewsIcon />Previews</a>
      </nav>
    </section>
  );
}
