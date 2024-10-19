// import { http, cookieStorage, createConfig, createStorage } from "wagmi";
// import { mainnet, sepolia } from "wagmi/chains";
// import {
// 	coinbaseWallet,
// 	injected,
// 	metaMask,
// 	walletConnect,
// } from "wagmi/connectors";

// const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || "";

// export function getConfig() {
// 	return createConfig({
// 		chains: [mainnet, sepolia],
// 		connectors: [
// 			injected(),
// 			coinbaseWallet(),
// 			walletConnect({ projectId }),
// 			metaMask(),
// 		],
// 		storage: createStorage({
// 			storage: cookieStorage,
// 		}),
// 		ssr: true,
// 		transports: {
// 			[mainnet.id]: http(),
// 			[sepolia.id]: http(),
// 		},
// 	});
// }

// declare module "wagmi" {
// 	interface Register {
// 		config: ReturnType<typeof getConfig>;
// 	}
// }

"use client";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
	coinbaseWallet,
	metaMaskWallet,
	rainbowWallet,
	walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { useMemo } from "react";
import { http, createConfig } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { NEXT_PUBLIC_WC_PROJECT_ID } from "@/config";

export function useWagmiConfig() {
	const projectId = NEXT_PUBLIC_WC_PROJECT_ID ?? "";

	if (!projectId) {
		const providerErrMessage =
			"To connect to all Wallets you need to provide a NEXT_PUBLIC_WC_PROJECT_ID env variable";
		throw new Error(providerErrMessage);
	}

	return useMemo(() => {
		const connectors = connectorsForWallets(
			[
				{
					groupName: "Recommended Wallets",
					wallets: [metaMaskWallet, coinbaseWallet],
				},
				{
					groupName: "Other Wallets",
					wallets: [
						rainbowWallet,
						coinbaseWallet,
						walletConnectWallet,
					],
				},
			],
			{
				appName: "Lumina",
				projectId,
				appDescription:
					"Illuminating the path of blockchain in Africa, one mind at a time",
			}
		);

		const wagmiConfig = createConfig({
			chains: [base, baseSepolia],
			// turn off injected provider discovery
			multiInjectedProviderDiscovery: false,
			connectors,
			ssr: true,
			transports: {
				[base.id]: http(),
				[baseSepolia.id]: http(),
			},
		});

		return wagmiConfig;
	}, [projectId]);
}
