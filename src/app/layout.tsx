import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import OnchainProviders from "@/components/OnchainProviders";

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
			<body>
				<OnchainProviders>{props.children}</OnchainProviders>
			</body>
		</html>
	);
}
