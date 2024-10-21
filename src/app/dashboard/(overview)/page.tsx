"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import { Skeleton } from "@/components/UI/skeleton";
import {
  FaBell,
  FaBook,
  FaCalendar,
  FaClock,
  FaCog,
  FaGraduationCap,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { ProductivityChart } from "@/components/dashboard/ProductivityChart";
import Carousel from "@/components/dashboard/Carousel";
import Link from "next/link";
import { useAccount, useWriteContract } from "wagmi";
import { Progress } from "@/components/UI/progress";
import Loader from "@/components/loader";
import nftABI from "@/smart_contract/ContractABI.json";

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
  { name: "Blockchain Fundamentals", progress: 80 },
  { name: "Web3 Development", progress: 60 },
  { name: "Crypto Economics", progress: 75 },
  { name: "Smart Contract Security", progress: 90 },
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
  { course: "Blockchain Fundamentals", grade: "A" },
  { course: "Web3 Development", grade: "B+" },
  { course: "Crypto Economics", grade: "A-" },
];

const blockchainBasics = [
  {
    id: 3,
    content: "New Blockchain Course Available",
    image: "/Images/fundamentals.jpg",
    url: "/dashboard/learn",
  },
];

const onchainBasics = [
  {
    id: 1,
    content: "The Onchain Vision",
    image: "/Images/base.png",
    url: "/dashboard/onchain",
  },
  {
    id: 2,
    content: "Onchain Buildathon",
    image: "/Images/based_africa.jpg",
    url: "https://based-africa.devfolio.co/",
  },
  {
    id: 3,
    content: "Jesse Polak's visit to Africa",
    image: "/Images/jesse.jpg",
    url: "https://lu.ma/a45ev6ql?tk=CCk0tb",
  },
];

const mockUpcomingEvents = [
  { date: "2024-10-15", title: "Guest Lecture: Vitalik Buterin" },
  { date: "2024-10-22", title: "Hackathon: DeFi Dapps" },
  { date: "2024-10-29", title: "Workshop: Solidity Best Practices" },
];

const mockAchievements = [
  { title: "Completed Blockchain Basics Quiz", date: "2024-09-10" },
  { title: "Submitted DApp Project", date: "2024-09-25" },
  { title: "Participated in Crypto Trading Competition", date: "2024-10-05" },
];

function Dashboard() {
  const router = useRouter();
  const { writeContract: claim } = useWriteContract();

  const { isConnected, address, isDisconnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [upcomingAssignments, setUpcomingAssignments] = useState<
    UpcomingAssignment[]
  >([]);
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    if (!isConnected || isDisconnected) {
      console.log(isConnected, isDisconnected);
      router.push("/");
    }
  }, [isConnected, isDisconnected, router]);

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setCourseProgress(mockCourseProgress);
      setUpcomingAssignments(mockUpcomingAssignments);
      setGrades(mockGrades);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (isConnected) {
      claim({
        abi: nftABI,
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "login",
      });
    }
  }, [isConnected]);

  if (!isConnected) {
    return (
      <div>
        Checking wallet connection... Please, kindly reconnect your wallet
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 py-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden mb-6 shadow-md gap-8">
        <Carousel items={blockchainBasics} />
        <Carousel items={onchainBasics} interval={5000} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="md:col-span-4 lg:col-span-3 grid grid-cols-1 rounded-lg overflow-hidden shadow-lg border-gray-800 overflow-x-scroll gap-4">
          <ProductivityChart />

          <Card className="col-span-full bg-[#001123] shadow-lg border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white font-semibold">
                <FaGraduationCap className="mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockAchievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-white hover:bg-[#0d1f31] transition-colors duration-300 p-1 cursor-pointer"
                  >
                    <span className="text-sm">{achievement.title}</span>
                    <span className="text-gray-400 text-xs">
                      {achievement.date}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 md:col-span-full grid grid-cols-2 gap-4">
          <Card className="bg-[#001123] shadow-lg border-gray-800 col-span-full md:col-span-1 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaBook className="mr-2" />
                Course Progress
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
                <ul className="space-y-4">
                  {courseProgress.map((course, index) => (
                    <li key={index}>
                      <div className="flex justify-between mb-2">
                        <span>{course.name}</span>
                        <span className="font-bold">{course.progress}%</span>
                      </div>
                      <Progress
                        value={course.progress}
                        className="w-full h-2 bg-gray-700 rounded"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card className="col-span-full bg-[#001123] shadow-lg md:col-span-1 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white font-semibold">
                <FaCalendar className="mr-2" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {mockUpcomingEvents.map((event, index) => (
                  <li key={index} className="flex justify-between text-white">
                    <span className="text-sm">{event.title}</span>
                    <span className="text-gray-400 text-xs">{event.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
