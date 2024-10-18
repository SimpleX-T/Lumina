"use client";

import { RiMenuUnfoldFill } from "react-icons/ri";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from "@/components/UI/drawer";
import ApplicationLogo from "@/components/ApplicationLogo";
import Link from "next/link";
import NavigationItem from "@/components/layout/NavItem";
import { GoHomeFill } from "react-icons/go";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";

export const navs = [
	{
		title: "Home",
		route: "/dashboard",
		icon: <GoHomeFill className='text-3xl' />,
	},
	{
		title: "Learn",
		route: "/dashboard/learn",
		icon: <FaBookOpenReader className='text-3xl' />,
	},
	{
		title: "Leaderboard",
		route: "/leaderboard",
		icon: <MdLeaderboard className='text-3xl' />,
	},
];

export default function MobileNavigation() {
	return (
		<div className='block sm:hidden mr-3 w-full fixed bottom-0 z-50 bg-slate-900'>
			<div className='grid grid-cols-3 items-center'>
				{navs.map((nav, index) => (
					<Link
						href={nav.route}
						className='text-center text-xs p-3 flex gap-2 flex-col items-center'>
						{nav.icon}
						{nav.title}
					</Link>
				))}
			</div>
		</div>
	);
}
