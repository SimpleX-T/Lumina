import Navigation from "@/components/layout/Navigation";
import Header from "@/components/layout/Header";
import NavigatingLoading from "@/components/layout/loading";
import MobileNavigation from "@/components/layout/MobileNavigation";
import { WalletConnectionHandler } from "@/components/WalletConnectionHandler";

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<WalletConnectionHandler />
			<NavigatingLoading />
			<div className='w-full bg-slate-800 min-h-screen flex flex-row'>
				<Navigation />

				<main className='w-full pb-28 md:pb-10 relative z-0 pl-0 lg:pl-[260px] sm:pl-[250px]'>
					<Header />
					{children}
				</main>
			</div>
			<MobileNavigation />
		</>
	);
};

export default DashboardLayout;
