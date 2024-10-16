"use client";
import React, {useState} from "react";
import {IoIosStarOutline} from "react-icons/io";
import {CiClock2} from "react-icons/ci";
import {MdOutlineAudiotrack} from "react-icons/md";
import {FaVideo} from "react-icons/fa";
import {IoDocumentTextOutline} from "react-icons/io5";
import {ImFilePicture} from "react-icons/im";
interface Lesson {
	name: string;
	duration: string;
}

interface Instructor {
	name: string;
	bio: string;
	image: string;
}
interface Resource {
	audio?: boolean;
	video?: boolean;
	text?: boolean;
	visuals?: boolean;
}

interface CourseProps {
	title: string;
	description: string;
	image: string;
	duration: string;
	rating: number;
	watched: number;
	lessons: Lesson[];
	instructor: Instructor;
	resources: Resource;
}

const CourseDetails: React.FC<CourseProps> = ({
	title,
	description,
	image,
	duration,
	rating,
	watched,
	lessons,
	instructor,
	resources,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

	return (
		<div className={`font-sans ${isDarkMode ? "dark" : ""}`}>
			<div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
				<main className="container mx-auto p-4">
					<h1 className="text-2xl font-bold mb-4 dark:text-white">
						COURSE DETAILS
					</h1>

					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
						<div className="flex flex-col md:flex-row">
							<img
								src={image}
								alt={title}
								className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6"
							/>
							<div className="flex-1">
								<h2 className="text-2xl font-bold mb-2 dark:text-white">
									{title}
								</h2>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{description}
								</p>
								<div className="flex items-center space-x-4 mb-4">
									<div className="flex items-center">
										<CiClock2
											size={20}
											className="text-gray-500 mr-1"
										/>
										<span className="dark:text-white">
											{duration}
										</span>
									</div>
									<div className="flex items-center">
										<IoIosStarOutline
											size={20}
											className="text-yellow-500 mr-1"
										/>
										<span className="dark:text-white">
											{rating}
										</span>
									</div>
								</div>
								<div className="text-purple-600 mb-4">
									TAKEN BY {watched} USERS
								</div>
								<button className="bg-purple-600 text-white px-6 py-2 rounded w-full">
									START COURSE
								</button>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
							<h3 className="text-xl font-bold mb-4 dark:text-white">
								COURSE OUTLINE
							</h3>
							{lessons.map((lesson, index) => (
								<div
									key={index}
									className="flex justify-between items-center py-2 border-b dark:border-gray-700"
								>
									<span className="dark:text-white">
										{lesson.name}
									</span>
									<div className="flex items-center">
										<CiClock2
											size={16}
											className="text-gray-500 mr-1"
										/>
										<span className="text-gray-500">
											{lesson.duration}
										</span>
									</div>
								</div>
							))}
						</div>{" "}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
							<h3 className="text-xl font-bold mb-4 dark:text-white">
								COURSE RESOURCES
							</h3>

							{resources.audio && (
								<div className="flex justify-between items-center py-2 border-b dark:border-gray-700">
									<span className="dark:text-white">
										1 Audio File
									</span>
									<div className="flex items-center">
										<MdOutlineAudiotrack
											size={16}
											className="text-gray-500 mr-1"
										/>
									</div>
								</div>
							)}
							{resources.text && (
								<div className="flex justify-between items-center py-2 border-b dark:border-gray-700">
									<span className="dark:text-white">
										1 Text File
									</span>
									<div className="flex items-center">
										<IoDocumentTextOutline
											size={16}
											className="text-gray-500 mr-1"
										/>
									</div>
								</div>
							)}
							{resources.video && (
								<div className="flex justify-between items-center py-2 border-b dark:border-gray-700">
									<span className="dark:text-white">
										1 Video File
									</span>
									<div className="flex items-center">
										<FaVideo
											size={16}
											className="text-gray-500 mr-1"
										/>
									</div>
								</div>
							)}
							{resources.visuals && (
								<div className="flex justify-between items-center py-2 border-b dark:border-gray-700">
									<span className="dark:text-white">
										Pictures
									</span>
									<div className="flex items-center">
										<ImFilePicture
											size={16}
											className="text-gray-500 mr-1"
										/>
									</div>
								</div>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default CourseDetails;
