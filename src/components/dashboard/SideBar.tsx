"use client";

import React, { useState } from "react";

import Logo from "@/components/UI/Logo";
import { FaBook, FaCog, FaCogs, FaHome, FaLock, FaUser } from "react-icons/fa";
import NavLink from "@/components/UI/NavLink";
import { CollapsibleSidebarMenu } from "./CollapsibleSidebarMenu";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/UI/collapsible";

interface SideBarLink {
	label: string;
	icon: React.ReactNode;
	href: string;
}

const sidebarLinks: SideBarLink[] = [
	{
		label: "Dashboard",
		icon: <FaHome />,
		href: "/dashboard",
	},
	{
		label: "Courses",
		icon: <FaBook />,
		href: "/dashboard/courses",
	},
];

function SideBar() {
	const [isSettingsCollapsed, setIsSettingsCollapsed] =
		useState<boolean>(false);

	return (
		<aside className='flex md:flex-col items-center justify-start w-full h-full py-2 md:p-4 rounded-r-lg shadow-md border-r border-gray-600 bg-[#1e1e1e] pt-4 sticky top-0 left-0'>
			<div className='w-full mb-8 hidden md:flex items-center justify-center'>
				<Logo />
			</div>
			<ul className='h-full pb-4 flex items-center md:items-start w-full md:flex-col gap-4 md:mb-auto pl-4 md:pl-0 justify-start'>
				{sidebarLinks.map((link) => (
					<SideBarLink
						className='md:w-full block py-4 px-6 md:pl-4'
						key={link.href}
						{...link}
					/>
				))}

				<Collapsible
					className='md:w-full relative'
					open={isSettingsCollapsed}>
					<CollapsibleTrigger
						className={`flex items-center justify-center md:justify-start hover:bg-[#4f4f4f] transition-all duration-300 hover:-translate-y-[2px] shadow-xl transform rounded-xl border border-gray-600 w-full py-4 px-6 md:mb-3 md:pl-4 ${isSettingsCollapsed ? "bg-[#4f4f4f] -translate-y-[2px]" : "bg-[#2e2e2e] -translate-y-none"}`}
						onClick={() => setIsSettingsCollapsed((prev) => !prev)}>
						<span className='text-2xl md:text-xl'>
							<FaCog />
						</span>
						<span className='ml-4 text-md font-semibold hidden md:block'>
							Settings
						</span>
					</CollapsibleTrigger>
					<CollapsibleContent className='md:pl-6 flex items-start w-full absolute top-1/2 left-[120%] transform -translate-y-1/2 md:translate-y-0 md:relative md:top-0 md:flex-col gap-2'>
						{[
							{
								label: "Profile",
								href: "/dashboard/settings/profile",
								icon: <FaUser />,
							},
							{
								label: "Account",
								href: "/dashboard/settings/account",
								icon: <FaCog />,
							},
							{
								label: "Password",
								href: "/dashboard/settings/password",
								icon: <FaLock />,
							},
						].map((link) => (
							<SideBarLink
								className='block w-4/5 mx-auto md:w-[calc(100%_-_6px)] p-2 md:pl-4'
								key={link.href}
								{...link}
							/>
						))}
					</CollapsibleContent>
				</Collapsible>
			</ul>
			<footer className='w-full p-2 mb-3 text-center hidden md:'>
				<p className='text-md text-gray-400'>
					Lumina &copy; {new Date().getFullYear()}
				</p>
			</footer>
		</aside>
	);
}

export default SideBar;

interface SideBarLinkProps {
	label: string;
	icon: React.ReactNode;
	href: string;
	className?: string;
}

function SideBarLink({ label, icon, href, className }: SideBarLinkProps) {
	return (
		<NavLink
			to={href}
			className={`flex items-center justify-center md:justify-start bg-[#2e2e2e] hover:bg-[#4f4f4f] transition-all sidebar-link duration-300 hover:-translate-y-[2px] shadow-xl transform rounded-xl border border-gray-600 md:w-full ${className}`}>
			<span className='text-2xl md:text-xl'>{icon}</span>
			<span className='ml-4 text-md font-semibold hidden md:block'>
				{label}
			</span>
		</NavLink>
	);
}
