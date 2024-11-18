"use client";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/UI/avatar";
import MobileNavigation from "./MobileNavigation";
import { WalletDropdownDisconnect } from "@coinbase/onchainkit/wallet";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";

import WalletWrapper from "../WalletWrapper";
import { Name, Identity } from "@coinbase/onchainkit/identity";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";

interface Notification {
	title: string;
	date: Date;
}

const mockNotifications: Notification[] = [
	{
		title: "New course available",
		date: new Date("2023-06-15"),
	},
	{
		title: "Reminder: Complete your profile",
		date: new Date("2023-06-12"),
	},
	{
		title: "You have a new message",
		date: new Date("2023-06-10"),
	},
];

const Header = () => {
	const { address } = useAccount();
	const pathname = usePathname();

	return (
		<header className='sticky top-0 z-30 w-full py-4 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-600'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center'>
					<div>
						{/* <p className='text-xl font-semibold text-custom-black flex items-center gap-1'>
							<span>Welcome</span>
							<span>
								{address ? (
									<Identity
										className='inline-block ml-1 text-lg'
										address={address}>
										<Name address={address} />
									</Identity>
								) : (
									"Guest"
								)}
							</span>
							👋
						</p> */}
						<h2 className='text-xl font-bold capitalize'>
							{pathname.split("/").at(-1)}
						</h2>
						<p className='text-xs text-custom-black/75'>
							{new Date().toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
								year: "numeric",
							})}
						</p>
					</div>
				</div>
				<div className='flex items-center gap-6'>
					<DropdownMenu>
						<DropdownMenuTrigger className='relative z-0 cursor-pointer'>
							<GoDotFill
								className='text-custom-red absolute z-1 -top-1.5 right-0 text-red-600'
								size={18}
							/>
							<FaRegBell
								className='text-custom-black/75'
								size={24}
							/>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='bg-slate-800 text-white right-0 border-0'>
							<DropdownMenuLabel>Notifications</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{mockNotifications.map((item, index) => (
								<DropdownMenuItem
									className='flex items-center py-2 text-md cursor-pointer'
									key={index}>
									<span className='mr-auto'>
										{item.title}
									</span>
									<span className='text-xs mr-2'>
										{item.date.toLocaleDateString("en-US", {
											month: "long",
											day: "numeric",
											year: "numeric",
										})}
									</span>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>

					{/* <Link href='/notifications'>
						<div className='relative z-0 cursor-pointer'>
							<GoDotFill
								className='text-custom-red absolute z-1 -top-1.5 right-0 text-red-600'
								size={18}
							/>
							<FaRegBell
								className='text-custom-black/75'
								size={24}
							/>
						</div>
					</Link> */}
					<WalletWrapper className='hidden sm:block mr-1 rounded-lg bg-primary cursor-pointer' />
					{/* <WalletDropdownDisconnect
						text='Disconnect'
						className='hidden sm:block mr-1 h-10 rounded-lg w-28 bg-primary cursor-pointer'
					/> */}
					{/* <p className='hidden sm:block mr-1 h-10 rounded-lg w-28 bg-primary'></p> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
