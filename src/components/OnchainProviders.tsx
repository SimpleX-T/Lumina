// "use client";
// import { OnchainKitProvider } from "@coinbase/onchainkit";
// import {
// 	RainbowKitProvider,
// 	midnightTheme,
// 	getDefaultConfig,
// } from "@rainbow-me/rainbowkit";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import type { ReactNode } from "react";
// import { base, mainnet, polygon, optimism, arbitrum } from "viem/chains";
// import { WagmiProvider } from "wagmi";

// import { getConfig } from "../wagmi";
// import "@rainbow-me/rainbowkit/styles.css";
// type Props = { children: ReactNode };

// const queryClient = new QueryClient();

// const config = getDefaultConfig({
// 	appName: "NFT minter",
// 	projectId: "0d497b7616dd585ff2048252c7d1e3c0",
// 	chains: [mainnet, polygon, optimism, arbitrum, base],
// 	ssr: true,
// });

// function OnchainProviders({ children }: Props) {
// 	const NEXT_PUBLIC_CDP_API_KEY = process.env.NEXT_PUBLIC_CDP_API_KEY;
// 	const wagmiConfig = getConfig();

// 	return (
// 		<WagmiProvider config={wagmiConfig}>
// 			<QueryClientProvider client={queryClient}>
// 				<RainbowKitProvider
// 					modalSize='compact'
// 					theme={midnightTheme({
// 						...midnightTheme.accentColors.blue,
// 						overlayBlur: "small",
// 					})}>
// 					<OnchainKitProvider
// 						apiKey={NEXT_PUBLIC_CDP_API_KEY}
// 						chain={base}>
// 						{children}
// 					</OnchainKitProvider>
// 				</RainbowKitProvider>
// 			</QueryClientProvider>
// 		</WagmiProvider>
// 	);
// }

// export default OnchainProviders;

"use client";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { RainbowKitProvider, midnightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { base } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { NEXT_PUBLIC_CDP_API_KEY } from "../config";
import { useWagmiConfig } from "../wagmi";
import "@rainbow-me/rainbowkit/styles.css";

type Props = { children: ReactNode };

const queryClient = new QueryClient();

function OnchainProviders({ children }: Props) {
	const wagmiConfig = useWagmiConfig();

	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<OnchainKitProvider
					apiKey={NEXT_PUBLIC_CDP_API_KEY}
					chain={base}>
					<RainbowKitProvider
						modalSize='compact'
						theme={midnightTheme({
							...midnightTheme.accentColors.blue,
							overlayBlur: "small",
						})}>
						{children}
					</RainbowKitProvider>
				</OnchainKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default OnchainProviders;
