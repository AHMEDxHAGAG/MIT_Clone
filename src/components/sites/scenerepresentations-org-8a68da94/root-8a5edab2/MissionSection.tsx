import Image from "next/image";
import home from "../shared/home.json";
import membersData from "../shared/members.json";
import type { Member } from "../shared/types";
import styles from "./home.module.css";

const members = membersData as Member[];
const memberRows = [members.slice(0, 11), members.slice(11)];

function ResearchParagraph() {
  const [beforeResearch, afterResearch] = home.paragraphs[2].split("our research");

  return (
    <p>
      {beforeResearch}
      <a className={styles.researchLink} href="/publications/">our research</a>
      {afterResearch}
    </p>
  );
}

export function MissionSection() {
  return (
    <section className={styles.mission} id="mission">
      <h1>{home.title}</h1>
      <a
        aria-label="Meet the Scene Representation Group"
        className={styles.members}
        href="https://scenerepresentations.org/people/"
      >
        {memberRows.map((row, rowIndex) => (
          <span className={styles.memberRow} key={rowIndex}>
            {row.map((member) => (
              <Image
                alt={member.name}
                className={styles.memberPortrait}
                height={48}
                key={member.name}
                src={member.src}
                unoptimized
                width={48}
              />
            ))}
          </span>
        ))}
      </a>
      <strong className={styles.lead}>{home.paragraphs[0]}</strong>
      <p>{home.paragraphs[1]}</p>
      <ResearchParagraph />
    </section>
  );
}
