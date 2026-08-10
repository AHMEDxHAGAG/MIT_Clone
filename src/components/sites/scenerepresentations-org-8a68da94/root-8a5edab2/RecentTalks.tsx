import Image from "next/image";
import home from "../shared/home.json";
import styles from "./home.module.css";

export function RecentTalks() {
  const talk = home.talks[0];
  const [title, venue, details] = talk.text.split("\n");

  return (
    <section className={styles.recentTalks} id="talks">
      <div className={styles.sectionHeading}>
        <h2>Recent Talks</h2>
        <a
          className={`srg-arrow-link ${styles.viewAll}`}
          href="https://scenerepresentations.org/talks/"
        >
          view all
        </a>
      </div>
      <a className="srg-card-link" href={talk.href}>
        <figure className={`srg-card ${styles.talkCard}`}>
          <div className={`srg-card-media ${styles.talkMedia}`}>
            <Image
              alt={talk.alt}
              className={styles.talkImage}
              height={360}
              src={talk.img}
              unoptimized
              width={480}
            />
          </div>
          <figcaption className={styles.talkCaption}>
            <h3>{title}</h3>
            <div className="srg-label">
              <span>{venue}</span>
              <span>{details}</span>
            </div>
          </figcaption>
        </figure>
      </a>
    </section>
  );
}
