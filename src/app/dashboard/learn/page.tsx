"use client";
import { CourseProps } from "@/app/types";
import CourseDetails from "../../../components/dashboard/CourseDetails";
import { useState } from "react";
import CourseCard from "@/components/home/CourseCard";
const courseData: CourseProps[] = [
  {
    id: 123,
    title: "BLOCKCHAIN FUNDAMENTALS",
    description:
      "This course introduces you to the core concepts behind blockchain technology. You'll learn how blockchains work, what makes them secure, and why decentralization is a key feature of this revolutionary technology. By the end, you'll understand how blockchains power cryptocurrencies and many other applications.",
    image: "/Images/misc.jpg",
    duration: "30M",
    rating: 4.5,
    watched: 140,
    lessons: [
      { name: "Introduction to Blockchain", duration: "5M" },
      { name: "How Blockchain Works", duration: "5M" },
      { name: "Decentralized and Consensus Mechanisms", duration: "10M" },
      { name: "Types of Blockchains (Public and Private)", duration: "10M" },
      { name: "Applications of Blockchain", duration: "10M" },
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
    duration: "30M",
    rating: 4.5,
    watched: 140,
    lessons: [
      { name: "What are Crypto Wallets", duration: "5M" },
      { name: "Hot Wallets vs Cold Wallets", duration: "5M" },
      { name: "How to Set Up a Crypto Wallet", duration: "10M" },
      { name: "Private Keys and Security", duration: "10M" },
      { name: "Sending and Receiving Cryptocurrency", duration: "10M" },
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
    duration: "30M",
    rating: 4.5,
    watched: 140,
    lessons: [
      { name: "What are Cryptocurrencies", duration: "5M" },
      { name: "Popular cryptocurrencies", duration: "5M" },
      { name: "How Cryptocurrency Transactions Work", duration: "10M" },
      { name: "Mining and Staking", duration: "10M" },
      { name: "Risks and Scams in Cryptocurrencies", duration: "10M" },
    ],
    resources: {
      audio: true,
      video: true,
      text: true,
      visuals: true,
    },
  },
];
const Courses = () => {
  const [id, setID] = useState<number | null>(null);
  const ids = [123, 124, 125];
  const handleClick = (id: number) => {
    setID(id);
  };
  const course = id ? courseData.find((c) => c.id === id) : null;
  return (
    <div>
        {
            
        }
      {/* {ids.map((id) => (
        <button
          className="bg-purple-700 px-3 py-2 rounded-md"
          onClick={() => handleClick(id)}
          key={id}
        >
          Open Course {id}
        </button>
      ))}
      {course && <CourseDetails {...course} />} */}
    </div>
  );
};

export default Courses;
