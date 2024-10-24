"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
	DialogPortal,
	DialogOverlay,
} from "@/components/UI/dialog";
import { useRouter } from "next/navigation";
import NavLink from "../UI/NavLink";

interface NavProp {
	title: string;
	icon: React.ElementType;
	route: string;
}

const NavigationItem = ({ nav }: { nav: NavProp }) => {
	const pathname = usePathname();
	const IconComponent = nav?.icon;

	return (
		<NavLink
			className='dashboard_link flex gap-2.5 mb-1.5 items-center py-4 px-6 cursor-pointer duration-300 hover:bg-[#293249] rounded-r-lg'
			to={nav?.route}>
			{IconComponent && <IconComponent className='block h-5 w-auto' />}
			<p className='text-base '>{nav?.title}</p>
		</NavLink>
	);
};

export default NavigationItem;
