import courseFragments from "../shared/course-fragments.json";
import { SiteShell } from "../shared/SiteShell";
import { CourseDetails } from "./CourseDetails";
import { CourseSyllabus } from "./CourseSyllabus";
import { CourseTitle } from "./CourseTitle";
import { RelatedCourses } from "./RelatedCourses";

function PastYearBanner() {
  return (
    <aside className="past-year-banner">
      <strong>Note:</strong> This is the <strong>Spring 2025</strong> version of
      this course. For the current offering, please visit the {" "}
      <a href="/courses/2026/spring/advances-in-cv/">
        Spring 2026 course page
      </a>
      .
    </aside>
  );
}

export function AdvancesInCvPage() {
  return (
    <div className="srg-course-page">
      <SiteShell>
        <div className="srg-course-wrapper">
          <div
            className="srg-course-fragment"
            dangerouslySetInnerHTML={{ __html: courseFragments.sidenav }}
          />
          <main id="main-content" className="srg-main srg-course-main">
            <CourseTitle />
            <CourseDetails />
            <div className="before-syllabus-slot">
              <PastYearBanner />
            </div>
            <CourseSyllabus />
            <RelatedCourses />
          </main>
        </div>
      </SiteShell>
    </div>
  );
}
