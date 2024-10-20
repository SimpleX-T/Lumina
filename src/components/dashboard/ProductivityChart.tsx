"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/UI/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/UI/chart";

export const description = "A bar chart";

const chartData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 305 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 73 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 214 },
];

interface CourseProgress {
	name: string;
	progress: number;
}

const mockCourseProgress: CourseProgress[] = [
	{ name: "Week 1", progress: 1 },
	{ name: "Week 2", progress: 5 },
	{ name: "Week 3", progress: 6 },
	{ name: "Week 4", progress: 0 },
	{ name: "Week 5", progress: 2 },
	{ name: "Week 6", progress: 3 },
];

const chartConfig = {
	progress: {
		label: "Progress",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function ProductivityChart() {
	return (
		<Card className='bg-[#001123] shadow-lg border-gray-800 overflow-x-scroll md:overflow-hidden'>
			<CardHeader>
				<CardTitle className='text-[#e2e8f0]'>Progress Chart</CardTitle>
				<CardDescription className='text-[#e2e8f0]'>
					January - June 2024
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={mockCourseProgress}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='name'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							stroke='#e2e8f0'
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							dataKey='progress'
							fill='#3b82f6'
							radius={8}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
			{/* 			
			<CardFooter className='flex-col items-start gap-2 text-sm bg-[#001123] text-white'>
				<div className='flex gap-2 font-medium leading-none'>
					Trending up by 5.2% this month{" "}
					<TrendingUp className='h-4 w-4' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total visitors for the last 6 months
				</div>
			</CardFooter> */}
		</Card>
	);
}
