"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../../../components/UI/Header";
import CourseCard from "./_components/CourseCard";
import Image from "next/image";
import WalletWrapper from "../../../components/WalletWrapper";
import { useAccount } from "wagmi";
import { FaArrowRight } from "react-icons/fa";

interface Course {
	title: string;
	description: string;
	imageUrl: string;
	courseUrl: string;
}

const courses: Course[] = [
	{
		title: "Blockchain Fundamentals",
		description:
			"Master the core concepts of blockchain technology and cryptocurrencies.",
		imageUrl: "/Images/courses_image.png",
		courseUrl: "/courses/blockchain-fundamentals",
	},
	{
		title: "Smart Contract Development",
		description:
			"Learn to create and deploy smart contracts on popular blockchain platforms.",
		imageUrl: "/Images/courses_image.png",
		courseUrl: "/courses/smart-contract-development",
	},
	{
		title: "DeFi Mastery",
		description:
			"Explore the world of decentralized finance and its applications.",
		imageUrl: "/Images/courses_image.png",
		courseUrl: "/courses/defi-mastery",
	},
];

const LuminaLandingPage: React.FC = () => {
	const { isConnected } = useAccount();
	const router = useRouter();

	// useEffect(
	// 	function () {
	// 		if (router && isConnected) router.push("/dashboard");
	// 	},
	// 	[isConnected]
	// );

	return (
		<div className='font-poppins bg-[#0f172a] w-full relative'>
			<Header />

			<main className='max-w-[1200px] mx-auto p-4 w-full'>
				<section className='flex flex-col md:flex-row items-center p-12 text-center min-h-[70vh] w-full'>
					<div className='mb-8 w-full md:w-1/2 pr-4'>
						<h1 className='text-5xl mb-4 text-[#60a5fa] leading-snug font-bold text-center md:text-left'>
							Illuminate Your Future with Blockchain: Empowering
							Knowledge, Igniting Innovation
						</h1>
						<p className='text-sm md:text-base text-center md:text-left'>
							Join Lumina and embark on a journey to master Web3
							technologies, earn crypto, and shape the future of
							the internet.
						</p>
						<div className='w-full flex items-center justify-center md:justify-start mt-5'>
							{isConnected ? (
								<Link href='/dashboard'>
									<button className='bg-[#fdc10d] text-[#0f172a] rounded-full font-bold py-3 px-6  flex gap-3 items-center'>
										<span>Continue Learning</span>
										<span>
											<FaArrowRight />
										</span>
									</button>
								</Link>
							) : (
								<WalletWrapper
									text='Get Started'
									className='bg-[#fdc10d] text-[#0f172a] rounded-full font-bold py-3 px-6 '
									withWalletAggregator={true}
								/>
							)}
						</div>
					</div>

					<div className='w-full md:w-1/2 h-full rounded-lg overflow-hidden'>
						<Image
							src='/Images/heroImage.png'
							alt='hero'
							width={600}
							height={700}
							className='w-full h-full object-cover'
						/>
					</div>
				</section>

				<section className='py-12 w-full text-center mb-6'>
					<h2 className='text-3xl mb-4 font-bold text-[#60a5fa]'>
						Discover Lumina
					</h2>
					<div className='relative w-full aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg'>
						<iframe
							src='https://www.youtube.com/embed/qPgYnSY1rLU'
							title='Lumina Introduction'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							className='w-full h-full'></iframe>
					</div>
				</section>

				<section
					id='courses'
					className='py-12'>
					<h2 className='text-3xl mb-4 font-bold text-[#60a5fa] text-center mt-12'>
						Our Courses
					</h2>
					<div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
						{courses.map((course, index) => (
							<CourseCard
								// className='md:last:col-span'
								key={index}
								{...course}
							/>
						))}
					</div>
				</section>

				<section className='grid grid-cols-1 md:grid-cols-3 gap-8 py-12'>
					{[
						{
							title: "Build Your On-Chain Resume",
							description:
								"Showcase your skills and earn verifiable credentials as you complete courses and projects.",
							link: "#",
						},
						{
							title: "Earn While You Learn",
							description:
								"Complete tasks, contribute to projects, and earn crypto rewards for your progress.",
							link: "#",
						},
						{
							title: "Lumina Learn Hub",
							description:
								"Access a comprehensive library of resources, tutorials, and real-world project simulations.",
							link: "#",
							fullWidth: true,
						},
					].map((feature, index) => (
						<div
							key={index}
							className={`p-6 rounded-lg text-white bg-[#334155]`}>
							<h2 className='text-2xl mb-2'>{feature.title}</h2>
							<p>{feature.description}</p>
							<Link
								href={feature.link}
								className='bg-[#fdc10d] text-[#0f172a] border-none py-2 px-4 rounded-full mt-4 inline-block'>
								Explore Skills
							</Link>
						</div>
					))}
				</section>

				<section
					id='community'
					className='py-12 text-center'>
					<h2 className='text-3xl mb-4'>Join the Lumina Community</h2>
					<p>
						Connect with like-minded individuals, participate in
						hackathons, and collaborate on groundbreaking projects.
					</p>
					<div className='flex justify-center gap-4 mt-4'>
						{["Forum", "Discord", "Events"].map((link) => (
							<a
								key={link}
								href='#'
								className='bg-[#334155] text-white py-2 px-4 rounded-full'>
								{link}
							</a>
						))}
					</div>
				</section>

				<section
					id='about'
					className='py-12'>
					<h2 className='font-bold text-3xl mb-4'>About Lumina</h2>
					<p>
						Lumina is on a mission to illuminate the path to Web3
						mastery in Africa, one lesson at a time.
					</p>
				</section>

				<section className='py-12 bg-[#1e293b] rounded-lg text-center mt-12'>
					<h2>Stay Illuminated</h2>
					<p>
						Subscribe to our newsletter for the latest updates,
						course releases, and Web3 insights.
					</p>
					<div className='flex max-w-sm mx-auto mt-4'>
						<input
							type='email'
							placeholder='Enter your email'
							className='flex-grow py-2 px-4 rounded-l-full bg-[#334155] text-white border-none'
						/>
						<button className='bg-[#fdc10d] text-[#0f172a] rounded-r-full py-2 px-4 font-bold'>
							Subscribe
						</button>
					</div>
				</section>
			</main>

			<footer className='text-center p-8 bg-[#1e293b] mt-12'>
				<p>Illuminating the path to Web3 mastery</p>
				<div className='flex justify-center flex-wrap gap-4 my-4'>
					{[
						"Ethereum Foundation",
						"Polygon",
						"Chainlink",
						"Avalanche",
					].map((partner, index) => (
						<div
							key={index}
							className='bg-[#334155] text-white py-2 px-4 rounded'>
							{partner}
						</div>
					))}
				</div>
				<div className='mt-4'>
					{["Privacy Policy", "Terms of Service", "Contact Us"].map(
						(link, index) => (
							<a
								key={index}
								href='#'
								className='text-[#fdc10d] mx-2'>
								{link}
							</a>
						)
					)}
				</div>
			</footer>
		</div>
	);
};

export default LuminaLandingPage;
