"use client";

import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/UI/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/UI/table";
import { Badge } from "@/components/UI/badge";
import { Button } from "@/components/UI/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/UI/tabs";
import {
	Trophy,
	Flame,
	Star,
	Rocket,
	Award,
	Zap,
	ArrowUp,
	BookOpen,
	GraduationCap,
} from "lucide-react";
import Image from "next/image";

type TimeFrame = "daily" | "weekly" | "monthly";

type BadgeType =
	| "top-contributor"
	| "fast-learner"
	| "blockchain-master"
	| "pioneer"
	| "consistent-learner"
	| "quiz-master"
	| "early-adopter";

interface Badge {
	type: BadgeType;
	label: string;
	description: string;
}

interface Learner {
	rank: number;
	address: string;
	bnsName: string;
	points: number;
	streak: number;
	completedCourses: number;
	badges: BadgeType[];
	weeklyGrowth: number;
	avatar: string;
}

interface LeaderboardStats {
	totalLearners: number;
	totalPoints: number;
	completedCourses: number;
	activeStreaks: number;
}

interface LeaderboardStatsProps {
	stats: LeaderboardStats;
}

interface LeaderboardTableProps {
	data: Learner[];
}

const defaultStats: LeaderboardStats = {
	totalLearners: 1234,
	totalPoints: 89500,
	completedCourses: 456,
	activeStreaks: 789,
};

// Sample data
const leaderboardData: Learner[] = [
	{
		rank: 1,
		address: "0x1234567890123456789012345678901234567890",
		bnsName: "thesolenoid.base.eth",
		points: 15000,
		streak: 42,
		completedCourses: 12,
		badges: ["top-contributor", "fast-learner", "blockchain-master"],
		weeklyGrowth: 23.5,
		avatar: "/Images/teammates/_zappas99.jpg",
	},
	{
		rank: 2,
		address: "0x8765432109876543210987654321098765432109",
		bnsName: "devtochukwu.base.eth",
		points: 14200,
		streak: 38,
		completedCourses: 10,
		badges: ["pioneer", "consistent-learner"],
		weeklyGrowth: 18.2,
		avatar: "/Images/teammates/devtochukwu.jpg",
	},
	{
		rank: 3,
		address: "0x9876543210987654321098765432109876543210",
		bnsName: "samieazubike.base.eth",
		points: 13800,
		streak: 35,
		completedCourses: 9,
		badges: ["early-adopter", "quiz-master"],
		weeklyGrowth: 15.7,
		avatar: "/Images/teammates/samieazubike.jpg",
	},
];

const getBadgeIcon = (badge: BadgeType): JSX.Element => {
	switch (badge) {
		case "top-contributor":
			return <Star className='h-4 w-4' />;
		case "fast-learner":
			return <Rocket className='h-4 w-4' />;
		case "blockchain-master":
			return <Award className='h-4 w-4' />;
		case "pioneer":
			return <Trophy className='h-4 w-4' />;
		case "consistent-learner":
			return <Zap className='h-4 w-4' />;
		default:
			return <BookOpen className='h-4 w-4' />;
	}
};

const LeaderboardStats: React.FC<LeaderboardStatsProps> = ({ stats }) => (
	<div className='grid grid-cols-4 gap-4 mb-6 w-full border'>
		<Card className='bg-gradient-to-br border-none from-purple-500 to-indigo-600 text-white'>
			<CardContent className='pt-4 px-2 lg:px-4'>
				<div className='text-sm opacity-80'>Total Learners</div>
				<div className='text-sm lg:text-2xl font-bold'>
					{stats.totalLearners.toLocaleString()}
				</div>
			</CardContent>
		</Card>

		<Card className='bg-gradient-to-br border-none from-blue-500 to-cyan-600 text-white'>
			<CardContent className='pt-4 px-2 lg:px-4'>
				<div className='text-sm opacity-80'>Points Earned</div>
				<div className='text-sm lg:text-2xl font-bold'>
					{(stats.totalPoints / 1000).toFixed(1)}K
				</div>
			</CardContent>
		</Card>

		<Card className='bg-gradient-to-br border-none from-emerald-500 to-teal-600 text-white'>
			<CardContent className='pt-4 px-2 lg:px-4'>
				<div className='text-sm opacity-80'>Courses Completed</div>
				<div className='text-2xl font-bold'>
					{stats.completedCourses}
				</div>
			</CardContent>
		</Card>

		<Card className='bg-gradient-to-br border-none from-orange-500 to-red-600 text-white'>
			<CardContent className='pt-4 px-2 lg:px-4'>
				<div className='text-sm opacity-80'>Active Streaks</div>
				<div className='text-2xl font-bold'>{stats.activeStreaks}</div>
			</CardContent>
		</Card>
	</div>
);

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ data }) => (
	<Table>
		<TableHeader>
			<TableRow className='bg-muted/50'>
				<TableHead className='w-16'>Rank</TableHead>
				<TableHead>Learner</TableHead>
				<TableHead>Achievements</TableHead>
				<TableHead className='text-right'>Weekly Growth</TableHead>
				<TableHead className='text-right'>Points</TableHead>
			</TableRow>
		</TableHeader>

		<TableBody>
			{data.map((learner) => (
				<TableRow
					key={learner.rank}
					className='hover:bg-muted/50 transition-colors border-gray-800'>
					<TableCell>
						<div className='flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white'>
							{learner.rank}
						</div>
					</TableCell>

					<TableCell>
						<div className='flex items-center gap-3'>
							<div className='relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary'>
								<Image
									width={30}
									height={30}
									src={learner.avatar}
									alt={learner.bnsName}
									className='w-full h-full object-cover'
								/>
								{learner.streak > 30 && (
									<div className='absolute -top-1 -right-1'>
										<Flame className='h-4 w-4 text-orange-500' />
									</div>
								)}
							</div>

							<div>
								<div className='font-semibold'>
									{`${learner.bnsName.split(".")[0]}.${learner.bnsName.split(".")[1]}`}
								</div>
								<div className='text-sm text-muted-foreground'>
									{`${learner.address.slice(0, 6)}...${learner.address.slice(-4)}`}
								</div>
							</div>
						</div>
					</TableCell>

					<TableCell>
						<div className='flex gap-1 flex-wrap'>
							{learner.badges.map((badge, index) => (
								<Badge
									key={index}
									variant='outline'
									className='flex items-center gap-1 bg-muted/30 text-white border-gray-700'>
									{getBadgeIcon(badge)}
									<span className='text-xs capitalize hidden lg:inline'>
										{badge.split("-").join(" ")}
									</span>
								</Badge>
							))}
						</div>
					</TableCell>

					<TableCell className='text-right'>
						<div className='flex items-center justify-end gap-1 text-emerald-600'>
							<ArrowUp className='h-4 w-4' />
							{learner.weeklyGrowth}%
						</div>
					</TableCell>

					<TableCell className=''>
						<Badge
							variant='secondary'
							className='bg-primary/10 text-primary px-1'>
							{learner.points.toLocaleString()} XP
						</Badge>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	</Table>
);

const Web3Leaderboard: React.FC = () => {
	const [timeframe, setTimeframe] = useState<TimeFrame>("weekly");

	return (
		<Card className='p-6 max-w-5xl mx-auto bg-[#001123] rounded-none lg:rounded-lg border-gray-700 mt-12 text-white'>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<div>
						<CardTitle className='text-2xl font-bold'>
							Global Leaderboard
						</CardTitle>
						<CardDescription>
							Top performing learners this{" "}
							{timeframe.toLowerCase()} period
						</CardDescription>
					</div>
					<Tabs
						value={timeframe}
						onValueChange={(value) =>
							setTimeframe(value as TimeFrame)
						}>
						<TabsList>
							<TabsTrigger value='daily'>Daily</TabsTrigger>
							<TabsTrigger value='weekly'>Weekly</TabsTrigger>
							<TabsTrigger value='monthly'>Monthly</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>
			</CardHeader>
			<CardContent>
				<LeaderboardStats stats={defaultStats} />
				<LeaderboardTable data={leaderboardData} />
			</CardContent>
		</Card>
	);
};

export default Web3Leaderboard;
