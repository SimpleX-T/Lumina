import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/UI/avatar";
import MobileNavigation from "./MobileNavigation";
import { WalletDropdownDisconnect } from "@coinbase/onchainkit/wallet";
import Link from "next/link";
import WalletWrapper from "../WalletWrapper";

const Header = () => {
	return (
		<header className='sticky top-0 z-30 w-full py-4 px-4 sm:px-6 lg:px-8 bg-slate-800 border-b border-slate-600'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center'>
					<MobileNavigation />
					<div>
						<p className='text-xl font-semibold text-custom-black'>
							Welcome Bassi👋
						</p>
						<p className='text-xs text-custom-black/75'>
							23rd Nov, 2023
						</p>
					</div>
				</div>
				<div className='flex items-center gap-6'>
					<Link href='/notifications'>
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
					</Link>
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
