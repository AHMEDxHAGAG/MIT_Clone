import courseFragments from "../shared/course-fragments.json";

export function CourseSyllabus() {
  return (
    <div
      className="srg-course-fragment"
      dangerouslySetInnerHTML={{ __html: courseFragments.syllabus }}
    />
  );
}
