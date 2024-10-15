import React from "react";
import SideBar from "../_components/SideBar";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	return (
		<main className='w-full h-screen max-h-screen overflow-hidden grid md:grid-cols-[250px_1fr] grid-cols-[60px_1fr] relative'>
			<section className='col-span-1 h-full'>
				<SideBar />
			</section>

			<section className='overflow-y-auto bg-[#0f0f16]'>
				{children}
			</section>
		</main>
	);
};
export default DashBoardLayout;
