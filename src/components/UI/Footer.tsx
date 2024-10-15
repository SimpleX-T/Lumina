import React from "react";
import Logo from "./Logo";
import { FaGlobe, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className='w-full bg-[#00229E] text-white py-8 px-4'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:px-8'>
					<div className='flex flex-col md:col-span-2'>
						<Logo />
						<p className='mt-4 text-sm'>
							© {new Date().getFullYear()} lumina. All Rights
							Reserved.
						</p>
						<div className='mt-4 flex items-center'>
							<input
								type='email'
								placeholder='Enter your email'
								className='py-2 px-3 rounded-l-md text-black focus:ring-2 outline-none ring-[#99acee]'
							/>
							<button className='text-white bg-[#143ed6] hover:bg-[#091c61] transitions-colors duration-200 py-2 px-4 rounded-r-md'>
								Subscribe
							</button>
						</div>
					</div>

					<div className='grid grid-cols-2 md:grid-flow-col md:items-center md:gap-8 mt-8 px-2 w-full md:col-span-2'>
						<div>
							<h3 className='font-bold mb-4'>Discover</h3>
							<ul className='space-y-2'>
								<li>Topics</li>
								<li>Courses</li>
								<li>Glossaries</li>
							</ul>
						</div>

						<div className='mb-4'>
							<h3 className='font-bold mb-4'>Products</h3>
							<ul className='space-y-2'>
								<li>Note Summarization</li>
								<li>Flashcard Creation</li>
								<li>Text Extraction</li>
								<li>Research</li>
							</ul>
						</div>

						<div>
							<h3 className='font-bold mb-4'>Company</h3>
							<ul className='space-y-2'>
								<li>Terms & Conditions</li>
								<li>Privacy Policy</li>
								<li>Disclaimer</li>
								<li>Contact Request</li>
								<li>Feedback</li>
								<li>Support</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='mt-8 flex justify-between items-center flex-wrap'>
					<div className='flex items-center space-x-4'>
						<FaGlobe size={24} />
						<span>English</span>
					</div>
					<div className='flex space-x-4 mt-4 md:mt-0 gap-2'>
						<FaTwitter size={24} />
						<FaFacebook size={24} />
						<FaLinkedin size={24} />
					</div>
				</div>
			</div>
		</footer>
	);
}
