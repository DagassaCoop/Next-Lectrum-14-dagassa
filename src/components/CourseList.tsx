import { getBaseURL } from "@/src/lib";
import { CourseType, NewsType } from "@/src/types";
import CourseCard from "./CourseCard";

export const revalidate = 10;

const CourseList = async () => {
  const courses = await fetch(`${getBaseURL()}/api/courses`, { cache: 'no-store'}).then(res => res.json()) as CourseType[]

  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {courses?.map((course) => (
        <CourseCard
          key={course.hash}
          course={course}
        />
      ))}
    </div>
  );
};

export default CourseList;
