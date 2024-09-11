import { mainCourses } from "@/src/mock";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  const course = mainCourses.find((c) => c.hash === params.courseId);

  if (!course)
    return NextResponse.json({ message: "News not found" }, { status: 404 });

  return NextResponse.json(course);
}
