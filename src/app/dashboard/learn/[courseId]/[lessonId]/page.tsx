"use client";

import { useParams, useRouter } from "next/navigation";
import { courseData } from "@/lib/courses";
import { contents } from "../../../../../lib/contents";
import PrevNextButton from "@/components/dashboard/PrevNextButton";

const LessonPage = () => {
	const router = useRouter();
	const params = useParams();
	const { courseId, lessonId } = params;
	const course = courseData.find((c) => c.id === Number(courseId));
	const lesson = course?.lessons.find((l) => l.id === Number(lessonId));

	if (!lesson) return <p>Lesson not found</p>;
	if (!course) return <p>Course not found</p>;

	let Content: React.FC = contents[1];

	switch (Number(lessonId)) {
		case 1:
			Content = contents[1];
			break;
		case 2:
			Content = contents[2];
			break;
		case 3:
			Content = contents[3];
			break;
		case 4:
			Content = contents[4];
			break;
		case 5:
			Content = contents[5];
			break;
		case 6:
			Content = contents[6];
			break;
		case 7:
			Content = contents[7];
			break;
		case 8:
			Content = contents[8];
			break;
		case 9:
			Content = contents[9];
			break;
	}

	const prev = course?.lessons.find((l) => l.id === Number(lessonId) - 1);

	const nextLesson = lesson.quiz
		? `/dashboard/learn/${courseId}/quiz?from=${lessonId}`
		: `/dashboard/learn/${courseId}/${Number(lessonId) + 1}`;

	const prevLesson = `/dashboard/learn/${courseId}/${Number(lessonId) - 1}`;

	return (
		<div className='relative'>
			{Content && <Content />}
			<div className='flex items-center gap-4 pl-8 absolute bottom-0 transform translate-y-6 left-0 w-full'>
				{(!prev?.quiz || Number(lessonId) === 1) && (
					<PrevNextButton
						text='Previous'
						onclick={() => router.replace(prevLesson)}
					/>
				)}

				<PrevNextButton
					text='Next'
					onclick={() => router.replace(nextLesson)}
				/>
			</div>
		</div>
	);
};

export default LessonPage;
