import courseFragments from "../shared/course-fragments.json";

export function CourseTitle() {
  return (
    <div
      className="srg-course-fragment"
      dangerouslySetInnerHTML={{ __html: courseFragments.courseTitle }}
    />
  );
}
