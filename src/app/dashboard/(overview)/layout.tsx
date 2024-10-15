import React from "react";
import SideBar from "@/components/dashboard/SideBar";

export default function DashBoardLayout({
	children,
}: Readonly<{children: React.ReactNode}>) {
	return (
		<main className="w-full md:h-screen md:max-h-screen overflow-hidden grid grid-cols-1 grid-rows-[70px_1fr] md:grid-rows-1 md:grid-cols-[250px_1fr] relative">
			<section className="col-span-1 h-full relative">
				<SideBar />
			</section>

			<section className="overflow-y-auto bg-[#0f172a]">
				{children}
			</section>
		</main>
	);
}
