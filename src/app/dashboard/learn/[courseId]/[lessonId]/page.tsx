"use client"
import { useParams, useRouter } from "next/navigation";
import { courseData } from "@/lib/courses";

const LessonPage = () => {
    const router = useRouter()
  const params = useParams();
  const { courseId, lessonId } = params;
  const course = courseData.find((c) => c.id === Number(courseId));
  const lesson = course?.lessons.find((l) => l.id === Number(lessonId));
  if (!lesson) return <p>Lesson not found</p>;
  if (!course) return <p>Course not found</p>;
  const nextLesson =
    Number(lessonId) < course.lessons?.length && lesson.quiz
      ? `/dashboard/learn/${courseId}/quiz`
      : `/dashboard/learn/${courseId}/${Number(lessonId) + 1}`;
  return (
    <div>
      <h1>{lesson.title}</h1>
      <lesson.content />
      <button
        className="py-3 px-4 bg-[#fdc10d]"
        onClick={() => router.push(nextLesson)}
      >
        Next
      </button>
    </div>
  );
};
export default LessonPage;
