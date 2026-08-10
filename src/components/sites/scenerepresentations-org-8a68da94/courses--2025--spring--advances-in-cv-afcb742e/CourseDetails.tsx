import courseFragments from "../shared/course-fragments.json";

export function CourseDetails() {
  return (
    <div
      className="srg-course-fragment"
      dangerouslySetInnerHTML={{ __html: courseFragments.details }}
    />
  );
}
