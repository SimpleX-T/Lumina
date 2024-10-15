import React from "react";
import SideBar from "../_components/SideBar";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	return (
		<main className='w-full md:h-screen md:max-h-screen overflow-hidden grid grid-cols-1 grid-rows-[1fr_60px] md:grid-rows-1 md:grid-cols-[250px_1fr] relative'>
			<section className='col-span-1 h-full order-2 md:order-1'>
				<SideBar />
			</section>

			<section className='overflow-y-auto bg-[#0f0f16] order-1 md:order-2'>
				{children}
			</section>
		</main>
	);
};
export default DashBoardLayout;
