import Image from "next/image";
import Link from "next/link";
import coursesData from "../shared/courses.json";
import type { Course } from "../shared/types";
import styles from "./CoursesGrid.module.css";

const courses = coursesData satisfies Course[];

export function CoursesGrid() {
  return (
    <section
      className={`srg-background-dotted srg-cards ${styles.section}`}
      id="courses"
    >
      {courses.map((course, index) => (
        <Link className="srg-card-link" href={course.href} key={`${course.term}-${course.identifier}`}>
          <figure className="srg-card">
            <div className="srg-card-media">
              <Image
                alt=""
                height={course.height}
                loading={index < 4 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 25vw, (min-width: 512px) 50vw, 100vw"
                src={course.image}
                width={course.width}
              />
            </div>
            <figcaption>
              <h3 className={course.external ? "srg-arrow-link" : undefined}>
                {course.title}
              </h3>
              <p className="srg-label">
                <span className={`srg-venue ${styles.term}`}>{course.term}</span>
                <span aria-hidden="true"> · </span>
                <span>{course.identifier}</span>
              </p>
            </figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
}
