import courseFragments from "../shared/course-fragments.json";

export function RelatedCourses() {
  return (
    <div
      className="srg-course-fragment"
      dangerouslySetInnerHTML={{ __html: courseFragments.related }}
    />
  );
}
