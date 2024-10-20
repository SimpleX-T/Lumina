"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/UI/Header";
import CourseCard from "@/components/home/CourseCard";
import Image from "next/image";
import WalletWrapper from "@/components/WalletWrapper";
import { useAccount } from "wagmi";
import { FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
		imageUrl: "/Images/fundamentals.jpg",
		courseUrl: "/courses/fundamentals",
	},
	{
		title: "Wallets",
		description:
			"Understand what cryptocurrency wallets are and how they work",
		imageUrl: "/Images/wallet.jpg",
		courseUrl: "/courses/wallets",
	},
	{
		title: "Cryptocurrencies",
		description:
			"Explore the world of cryptocurrencies and their various applications in finance.",
		imageUrl: "/Images/crypto.jpg",
		courseUrl: "/courses/crypto",
	},
];

const teamMembers: TeamMember[] = [
	{
		name: "Adzape Solomon",
		role: "Frontend Developer/Video Animator",
		imageUrl: "/Images/teammates/_zappas99.jpg",
		twitter: "_chiater99",
	},
	{
		name: "Ndubuisi Tochukwu",
		role: "Frontend Developer",
		imageUrl: "/Images/teammates/devtochukwu.jpg",
		twitter: "devtochukwu",
	},
	{
		name: "Ani TheRock",
		role: "Smart Contract Developer",
		imageUrl: "/Images/teammates/therock.jpg",
		twitter: "ani_therock",
	},
	{
		name: "Azubike Samie",
		role: "Backend Developer",
		imageUrl: "/Images/teammates/samieazubike.jpg",
		twitter: "samieazubike",
	},
];

const LuminaLandingPage: React.FC = () => {
	const { isConnected } = useAccount();
	const router = useRouter();

	// useEffect(
	// 	function () {

	// 		async function creat
	// 	},
	// 	[isConnected]
	// );

	return (
		<div className='font-poppins bg-[#0f172a] text-[#e2e8f0] w-full relative'>
			<Header />

			<main className='max-w-[1200px] mx-auto p-4 w-full'>
				<section className='flex flex-col md:flex-row items-center p-12 text-center min-h-[70vh] w-full'>
					<div className='mb-8 w-full md:w-1/2 pr-4'>
						<h1 className='text-4xl md:text-5xl mb-4 text-[#60a5fa] leading-snug font-bold text-center md:text-left'>
							Illuminate the Path to Blockchain Mastery: Learn,
							Explore, Innovate.
						</h1>
						<p className='text-md md:text-base text-center md:text-left'>
							Join Lumina and embark on a journey to master Web3
							technologies, earn crypto, and shape the future of
							the internet.
						</p>
						<div className='w-full flex items-center justify-center md:justify-start mt-5'>
							{isConnected ? (
								<Link href='/dashboard'>
									<button className='bg-primary text-[#0f172a] rounded-full font-bold py-3 px-6  flex gap-3 items-center'>
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
						Lumina&apos;s Vision
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
							<button
								disabled
								// href={feature.link}
								className='bg-[#fdc10d50] cursor-not-allowed text-[#0f172a] border-none py-2 px-4 rounded-full mt-4 inline-block'>
								Coming Soon
							</button>
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
					<h2 className='font-bold text-3xl mb-4 text-[#60a5fa]'>
						About Lumina
					</h2>
					<p>
						Lumina is on a mission to illuminate the path to Web3
						mastery in Africa, one lesson at a time. We are a team
						of student developer&apos;s whose enthusiasm for the
						web3 space has birthed this idea.
					</p>

					<section className='w-full bg-gray-900 md:px-6 py-16'>
						<h2 className='font-semibold text-3xl mb-8 text-center text-[#60a5fa]'>
							Meet the minds behind Lumina
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 w-full p-4 lg:grid-cols-4 gap-8'>
							{teamMembers.map((member, index) => (
								<TeamCard
									key={index}
									teamMember={member}
								/>
							))}
						</div>
					</section>
				</section>

				<section className='py-12 bg-[#1e293b] rounded-lg text-center mt-12 w-full max-w-xl mx-auto px-4'>
					<h2 className='font-semibold text-lg mb-4'>
						Stay Illuminated
					</h2>
					<p>
						Subscribe to our newsletter for the latest updates,
						course releases, and Web3 insights.
					</p>
					<div className='flex w-full mx-auto mt-4 px-2'>
						<input
							type='email'
							placeholder='Enter your email'
							className='w-3/4 py-2 px-4 rounded-l-full bg-[#334155] text-white border-none'
						/>
						<button className='w-1/4 bg-[#fdc10d] text-[#0f172a] rounded-r-full p-2 font-semibold text-sm'>
							Subscribe
						</button>
					</div>
				</section>
			</main>

			<footer className='text-center p-8 bg-[#1e293b] mt-12'>
				<p>Illuminating the path to Web3 mastery</p>

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

interface TeamMember {
	name: string;
	role: string;
	twitter?: string;
	imageUrl: string;
}

interface TeamCardProps {
	teamMember: TeamMember;
}

function TeamCard({ teamMember }: TeamCardProps) {
	return (
		<div className='bg-gray-800 rounded-xl overflow-hidden shadow-lg h-[350px] relative'>
			<div className='w-full h-full'>
				<Image
					fill
					src={teamMember.imageUrl}
					alt={teamMember.name}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='p-4 pb-2 absolute bottom-0 left-0 w-full backdrop-blur-lg bg-gray-800/40 border-t border-gray-500'>
				<h3 className='text-xl font-semibold text-[#60a5fa] mb-1'>
					{teamMember.name}
				</h3>
				<p className='text-[#eee] mb-3'>{teamMember.role}</p>
				{teamMember.twitter && (
					<Link
						href={`https://x.com/${teamMember.twitter}`}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center text-white w-60 hover:text-blue-200 rounded-full bg-gray-900 gap-2 shadow-md p-1'>
						<span className='rounded-full bg-white p-3 text-black flex items-center justify-center'>
							<FaXTwitter size={18} />
						</span>
						<span className='text-lg'>@{teamMember.twitter}</span>
					</Link>
				)}
			</div>
		</div>
	);
}
