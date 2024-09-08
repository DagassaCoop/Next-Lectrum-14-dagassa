import CourseDetail from "@/src/components/CourseDetail";

export default function CoursePage({
  params: { courseId },
}: {
  params: { courseId: string };
}) {
  return <CourseDetail courseId={courseId} />;
}
