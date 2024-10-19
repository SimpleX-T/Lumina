"use client";
import { CourseProps } from "@/app/types";
import CourseDetails from "../../../components/dashboard/CourseDetails";
import { useState } from "react";
import { courseData } from "@/lib/courses";
const Courses = () => {
	const [id, setID] = useState<number | null>(null);
	const ids = [123, 124, 125];
};

import MiniCourseCard from "@/components/dashboard/MiniCourseCard";

const courseData: CourseProps[] = [
	{
		id: 123,
		title: "BLOCKCHAIN FUNDAMENTALS",
		description:
			"This course introduces you to the core concepts behind blockchain technology. You'll learn how blockchains work, what makes them secure, and why decentralization is a key feature of this revolutionary technology. By the end, you'll understand how blockchains power cryptocurrencies and many other applications.",
		image: "/Images/misc.jpg",
		duration: 1800000,
		rating: 4.5,
		watched: 140,
		lessons: [
			{ name: "Introduction to Blockchain", duration: 300000 },
			{ name: "How Blockchain Works", duration: 300000 },
			{
				name: "Decentralized and Consensus Mechanisms",
				duration: 600000,
			},
			{
				name: "Types of Blockchains (Public and Private)",
				duration: 600000,
			},
			{ name: "Applications of Blockchain", duration: 600000 },
		],
		resources: {
			audio: true,
			video: true,
			text: true,
			visuals: true,
		},
	},
	{
		id: 124,
		title: "WALLETS",
		description:
			"In this course, you'll explore the essential role of crypto wallets in managing and securing digital assets. You'll learn how to set up and use both hot (online) and cold (offline) wallets, understand the importance of private keys, and practice sending and receiving cryptocurrency. This course equips you with the skills to protect your assets and engage with blockchain networks safely.",
		image: "/Images/misc.jpg",
		duration: 1800000,
		rating: 4.5,
		watched: 140,
		lessons: [
			{ name: "What are Crypto Wallets", duration: 300000 },
			{ name: "Hot Wallets vs Cold Wallets", duration: 300000 },
			{ name: "How to Set Up a Crypto Wallet", duration: 600000 },
			{ name: "Private Keys and Security", duration: 600000 },
			{ name: "Sending and Receiving Cryptocurrency", duration: 600000 },
		],
		resources: {
			audio: true,
			video: true,
			text: true,
			visuals: true,
		},
	},
	{
		id: 125,
		title: "CRYPTOCURRENCIES",
		description:
			"This course dives into the world of digital currencies, starting with an introduction to Bitcoin and Ethereum. You’ll learn how cryptocurrency transactions work, how new coins are created through mining or staking, and the risks involved in the space. The course helps you navigate the growing world of crypto, providing insights into the opportunities and challenges it presents",
		image: "/Images/misc.jpg",
		duration: 1800000,
		rating: 4.5,
		watched: 140,
		lessons: [
			{ name: "What are Cryptocurrencies", duration: 300000 },
			{ name: "Popular cryptocurrencies", duration: 300000 },
			{ name: "How Cryptocurrency Transactions Work", duration: 600000 },
			{ name: "Mining and Staking", duration: 600000 },
			{ name: "Risks and Scams in Cryptocurrencies", duration: 600000 },
		],
		resources: {
			audio: true,
			video: true,
			text: true,
			visuals: true,
		},
	},
];

function Courses() {
	const [id, setID] = useState<number | null>(null);
	const ids = [123, 124, 125];
	function handleClick(id: number) {
		console.log(id);
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
						onclick={() => handleClick(course.id)}
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
