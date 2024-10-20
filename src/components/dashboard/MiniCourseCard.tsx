import React from "react";
import { formatDuration } from "@/lib/utils";
import { CourseProps } from "@/app/types";
import { FaHeart } from "react-icons/fa6";

interface MiniCourseCardProps {
	course: CourseProps;
	onclick: (id: number) => void;
	isComingSoon: boolean;
}

function MiniCourseCard({
	course,
	onclick,
	isComingSoon,
}: MiniCourseCardProps) {
	return (
		<div className='h-[300px] rounded-md overflow-hidden relative'>
			<div
				className={`bg-[#081627] text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 h-full relative`}>
				{isComingSoon && (
					<div className='absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-500/70 backdrop-blur-md flex items-center justify-center z-10 '>
						<div className='relative inline-block px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md shadow-md'>
							<span className='text-white text-2xl font-bold'>
								Coming Soon
							</span>
						</div>
					</div>
				)}
				<div className='relative w-full h-40 overflow-hidden'>
					<img
						src={course.image}
						alt={course.title}
						className='w-full h-full object-cover'
					/>
				</div>

				<div className='p-4 flex flex-col gap-8'>
					<div className='mb-12'>
						<h3 className='text-xl font-semibold mb-2'>
							{course.title}
						</h3>
						<p className='text-gray-300 text-md'>
							{course.description.slice(0, 100)}...
						</p>
					</div>

					<div className='w-full'>
						<button
							onClick={() => onclick(course.id)}
							className={`bg-blue-600 p-2 rounded-full block w-full ${
								isComingSoon
									? "opacity-50 cursor-not-allowed"
									: ""
							}`}
							disabled={isComingSoon}>
							View Course
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MiniCourseCard;
