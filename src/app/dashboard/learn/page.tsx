"use client";
import { CourseProps } from "@/app/types";
import CourseDetails from "../../../components/dashboard/CourseDetails";
import { useState } from "react";
import { courseData } from "@/lib/courses";

import MiniCourseCard from "@/components/dashboard/MiniCourseCard";

function Courses() {
	const [id, setID] = useState<number | null>(null);
	//   const ids = [123, 124, 125];
	function handleClick(id: number) {
		setID(id);
	}
	const course = id ? courseData.find((c) => c.id === id) : null;
	return (
		<div className='w-full relative'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-6'>
				{courseData.map((course) => (
					<MiniCourseCard
						key={course.id}
						course={course}
						isComingSoon={!course.isAvailable}
						onclick={() => {
							handleClick(course.id);
						}}
					/>
				))}{" "}
			</div>
			{course && (
				<CourseDetails
					onclose={() => setID(null)}
					{...course}
				/>
			)}
		</div>
	);
}

export default Courses;
