"use client";

import ApplicationLogo from "@/components/ApplicationLogo";
import Link from "next/link";
import NavigationItem from "@/components/layout/NavItem";
import { navs } from "@/lib/navs";

const Navigation = () => {
	return (
		<nav className='hidden sm:block h-screen fixed z-50 bg-slate-900 border-r border-slate-600 w-full max-w-[250px] lg:max-w-[260px] overflow-y-auto pr-4'>
			{/* Brand Logo */}
			<div className='py-4 pl-4 mb-10 sticky top-0'>
				<Link href='/'>
					<ApplicationLogo />
				</Link>
			</div>

			<div className=''>
				{navs.map((nav, index) => (
					<NavigationItem
						key={index}
						nav={nav}
					/>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
