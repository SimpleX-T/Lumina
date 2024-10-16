"use client";

import React, {useState, useEffect} from "react";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/UI/card";
import {Button} from "@/components/UI/button";
import {Skeleton} from "@/components/UI/skeleton";
import {
	FaBell,
	FaBook,
	FaCalendar,
	FaClock,
	FaCog,
	FaGraduationCap,
} from "react-icons/fa";
import {ProductivityChart} from "@/components/dashboard/ProductivityChart";

interface CourseProgress {
	name: string;
	progress: number;
}

interface UpcomingAssignment {
	id: number;
	title: string;
	dueDate: string;
	course: string;
}

interface Grade {
	course: string;
	grade: string;
}

const mockCourseProgress: CourseProgress[] = [
	{name: "Week 1", progress: 1},
	{name: "Week 2", progress: 5},
	{name: "Week 3", progress: 6},
	{name: "Week 4", progress: 0},
	{name: "Week 5", progress: 2},
	{name: "Week 6", progress: 3},
];

const mockUpcomingAssignments: UpcomingAssignment[] = [
	{
		id: 1,
		title: "Smart Contract Basics",
		dueDate: "2024-10-20",
		course: "Blockchain Fundamentals",
	},
	{
		id: 2,
		title: "DApp Development",
		dueDate: "2024-10-25",
		course: "Web3 Development",
	},
	{
		id: 3,
		title: "Tokenomics Essay",
		dueDate: "2024-10-30",
		course: "Crypto Economics",
	},
];

const mockGrades: Grade[] = [
	{course: "Blockchain Fundamentals", grade: "A"},
	{course: "Web3 Development", grade: "B+"},
	{course: "Crypto Economics", grade: "A-"},
];

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
	const [upcomingAssignments, setUpcomingAssignments] = useState<
		UpcomingAssignment[]
	>([]);
	const [grades, setGrades] = useState<Grade[]>([]);

	useEffect(() => {
		// Simulate API calls
		setTimeout(() => {
			setCourseProgress(mockCourseProgress);
			setUpcomingAssignments(mockUpcomingAssignments);
			setGrades(mockGrades);
			setIsLoading(false);
		}, 1500);
	}, []);

	return (
		<div className="w-full px-4 md:px-8 py-8">
			<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
				<div className="md:col-span-4 lg:col-span-3 rounded-lg overflow-hidden shadow-lg border-gray-800 overflow-x-scroll">
					<ProductivityChart />
				</div>

				{/* <div className="lg:col-span-3 md:col-span-full grid grid-cols-2 gap-4">
					<Card className="bg-[#000814] shadow-lg border-gray-800 col-span-full md:col-span-1 text-white">
						<CardHeader>
							<CardTitle className="flex items-center">
								<FaGraduationCap className="mr-2" />
								Grades
							</CardTitle>
						</CardHeader>
						<CardContent>
							{isLoading ? (
								<div className="space-y-2">
									<Skeleton className="w-full h-8" />
									<Skeleton className="w-full h-8" />
									<Skeleton className="w-full h-8" />
								</div>
							) : (
								<ul className="space-y-2">
									{grades.map((grade, index) => (
										<li
											key={index}
											className="flex justify-between items-center"
										>
											<span>{grade.course}</span>
											<span className="font-bold">
												{grade.grade}
											</span>
										</li>
									))}
								</ul>
							)}
						</CardContent>
					</Card>

					<Card className="col-span-full bg-[#000814] shadow-lg border-gray-800">
						<CardHeader>
							<CardTitle className="flex items-center text-white font-semibold">
								<FaCalendar className="mr-2" />
								Upcoming Assignments
							</CardTitle>
						</CardHeader>
						<CardContent>
							{isLoading ? (
								<div className="space-y-2">
									<Skeleton className="w-full h-12" />
									<Skeleton className="w-full h-12" />
									<Skeleton className="w-full h-12" />
								</div>
							) : (
								<ul className="space-y-2">
									{upcomingAssignments.map((assignment) => (
										<li
											key={assignment.id}
											className="flex justify-between items-center bg-[#1D201F] text-white p-3 rounded"
										>
											<div>
												<p className="font-semibold">
													{assignment.title}
												</p>
												<p className="text-sm text-white">
													{assignment.course}
												</p>
											</div>
											<div className="flex items-center">
												<FaClock className="mr-1 w-4 h-4" />
												<span className="text-sm">
													{assignment.dueDate}
												</span>
											</div>
										</li>
									))}
								</ul>
							)}
						</CardContent>
					</Card>
				</div> */}

				{/* Grades */}

				{/* Notifications */}

				{/* Quick Actions */}
				{/* <Card className="md:col-span-full lg:col-span-2 bg-[#000814] shadow-lg border-gray-800">
					<CardHeader>
						<CardTitle>Quick Actions</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-2">
						<Button>Join Live Session</Button>
						<Button variant="outline">Submit Assignment</Button>
						<Button variant="outline">Schedule Tutoring</Button>
					</CardContent>
				</Card> */}
			</div>
		</div>
	);
};

export default Dashboard;
