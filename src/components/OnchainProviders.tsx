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

// "use client";
// import { OnchainKitProvider } from "@coinbase/onchainkit";
// import { RainbowKitProvider, midnightTheme } from "@rainbow-me/rainbowkit";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import type { ReactNode } from "react";
// import { base } from "viem/chains";
// import { WagmiProvider } from "wagmi";
// import { NEXT_PUBLIC_CDP_API_KEY } from "../config";
// import { useWagmiConfig } from "../wagmi";
// import "@rainbow-me/rainbowkit/styles.css";

// type Props = { children: ReactNode };

// const queryClient = new QueryClient();

// function OnchainProviders({ children }: Props) {
// 	const wagmiConfig = useWagmiConfig();

// 	return (
// 		<WagmiProvider config={wagmiConfig}>
// 			<QueryClientProvider client={queryClient}>
// 				<OnchainKitProvider
// 					apiKey={NEXT_PUBLIC_CDP_API_KEY}
// 					chain={base}>
// 					<RainbowKitProvider
// 						modalSize='compact'
// 						theme={midnightTheme({
// 							...midnightTheme.accentColors.blue,
// 							overlayBlur: "small",
// 						})}>
// 						{children}
// 					</RainbowKitProvider>
// 				</OnchainKitProvider>
// 			</QueryClientProvider>
// 		</WagmiProvider>
// 	);
// }

// export default OnchainProviders;

// "use client";
// import type { ReactNode } from "react";
// import { OnchainKitProvider } from "@coinbase/onchainkit";
// import {
// 	RainbowKitProvider,
// 	connectorsForWallets,
// 	getDefaultConfig,
// } from "@rainbow-me/rainbowkit";
// import {
// 	metaMaskWallet,
// 	rainbowWallet,
// 	coinbaseWallet,
// } from "@rainbow-me/rainbowkit/wallets";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WagmiProvider } from "wagmi";
// import { base } from "wagmi/chains";

// import "@coinbase/onchainkit/styles.css";
// import { NEXT_PUBLIC_WC_PROJECT_ID } from "@/config";
// import "@rainbow-me/rainbowkit/styles.css";

// const queryClient = new QueryClient();
// const projectId = NEXT_PUBLIC_WC_PROJECT_ID ?? "";

// const wagmiConfig = getDefaultConfig({
// 	connectors: connectorsForWallets(
// 		[
// 			{
// 				groupName: "Recommended Wallet",
// 				wallets: [coinbaseWallet],
// 			},
// 			{
// 				groupName: "Other Wallets",
// 				wallets: [rainbowWallet, metaMaskWallet],
// 			},
// 		],
// 		{
// 			appName: "onchainkit",
// 			projectId: projectId,
// 		}
// 	),
// 	appName: "onchainkit",
// 	projectId: projectId,
// 	chains: [base],
// 	ssr: true, // If your dApp uses server side rendering (SSR)
// });

// function OnchainProviders({ children }: Props) {
// 	return (
// 		<WagmiProvider config={wagmiConfig}>
// 			<QueryClientProvider client={queryClient}>
// 				<OnchainKitProvider
// 					apiKey={process.env.PUBLIC_ONCHAINKIT_API_KEY}
// 					chain={base}>
// 					<RainbowKitProvider modalSize='compact'>
// 						{children}
// 					</RainbowKitProvider>
// 				</OnchainKitProvider>
// 			</QueryClientProvider>
// 		</WagmiProvider>
// 	);
// }

// export default OnchainProviders;

"use client";
import type { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import {
	RainbowKitProvider,
	connectorsForWallets,
	getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import {
	metaMaskWallet,
	rainbowWallet,
	coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { NEXT_PUBLIC_CDP_API_KEY, NEXT_PUBLIC_WC_PROJECT_ID } from "../config";
import { base } from "wagmi/chains";
type Props = { children: ReactNode };

import "@coinbase/onchainkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

const connectors = connectorsForWallets(
	[
		{
			groupName: "Recommended Wallet",
			wallets: [coinbaseWallet],
		},
		{
			groupName: "Other Wallets",
			wallets: [rainbowWallet, metaMaskWallet],
		},
	],
	{
		appName: "Lumina",
		projectId: NEXT_PUBLIC_WC_PROJECT_ID || "",
	}
);

const wagmiConfig = getDefaultConfig({
	appName: "Lumina",
	connectors,
	projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "",
	chains: [base],
	ssr: true,
});

function OnchainProviders({ children }: Props) {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<OnchainKitProvider
					apiKey={NEXT_PUBLIC_CDP_API_KEY}
					chain={base}>
					<RainbowKitProvider modalSize='compact'>
						{children}
					</RainbowKitProvider>
				</OnchainKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default OnchainProviders;
