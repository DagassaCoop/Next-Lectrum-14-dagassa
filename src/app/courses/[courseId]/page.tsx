import CourseDetail from "@/src/components/CourseDetail";
import { getBaseURL } from "@/src/lib";
import { CourseType } from "@/src/types";
import { mainCourses } from "@/src/mock";

export async function generateStaticParams() {
  return mainCourses.map((c) => ({
    courseId: c.hash,
  }));
}

const Course = async ({ params }: { params: { courseId: string } }) => {
  const course = (await fetch(
    `${getBaseURL()}/api/courses/${params.courseId}`,
    { cache: "no-store" }
  ).then((res) => res.json())) as CourseType;

  if (!course) {
    return <p>Course not found</p>;
  }

  return <CourseDetail course={course} />;
};

export default Course;
