import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { type ReactNode } from "react";
import OnchainProviders from "@/components/OnchainProviders";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Lumina",
	description: "Lumina",
	openGraph: {
		title: "Lumina",
		description: "Built with OnchainKit",
		images: [`/Images/lumina_png.png`],
	},
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<OnchainProviders>{props.children}</OnchainProviders>
			</body>
		</html>
	);
}
