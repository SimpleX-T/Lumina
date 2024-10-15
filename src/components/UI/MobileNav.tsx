import React, { ReactElement, ReactEventHandler, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import LoginButton from "../LoginButton";
import { navItems } from "./NavBar";

function MobileNav({
	isMenuOpen,
	toggleMenu,
}: {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}) {
	return (
		<div
			className={`${isMenuOpen ? "translate-x-0" : "translate-x-full"} duration-300 transition-all md:hidden fixed top-0 right-0 w-full min-h-screen`}>
			<div
				className='fixed min-w-full min-h-screen -z-50 top-0 left-0 bg-black/20 backdrop-blur-sm'
				onClick={toggleMenu}></div>
			<nav
				role='navigation'
				className={`flex md:items-center md:justify-center flex-col absolute top-0 right-0 w-full max-w-[300px] h-screen pt-32 px-8 bg-white`}>
				<ul className='w-full mb-auto'>
					{navItems.map((link, index) => (
						<NavLink
							key={index}
							className='w-full md:w-fit bg-blue-500 transition-colors hover:bg-blue-400 p-3 text-center rounded-md my-4 capitalize flex items-center justify-center text-white font-medium'
							to={link.route}>
							<span onClick={toggleMenu}>{link.title}</span>
						</NavLink>
					))}
				</ul>
				<div className='flex md:hidden items-center w-full gap-4 mb-4 flex-col'>
					<Link
						href='/register'
						className='w-full p-3 text-white rounded-lg bg-blue-500 text-center'>
						Register
					</Link>
					<Link
						href='/login'
						className='w-full p-3 text-white rounded-lg bg-blue-500 text-center'>
						Login
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default MobileNav;
