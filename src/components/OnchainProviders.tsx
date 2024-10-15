"use client";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { base } from "viem/chains";
import { WagmiProvider } from "wagmi";
// import { NEXT_PUBLIC_CDP_API_KEY } from "../config";
import { getConfig } from "../wagmi";

type Props = { children: ReactNode };

const queryClient = new QueryClient();

function OnchainProviders({ children }: Props) {
	const NEXT_PUBLIC_CDP_API_KEY = process.env.NEXT_PUBLIC_CDP_API_KEY;
	const wagmiConfig = getConfig();

	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider
					modalSize='compact'
					theme={darkTheme()}>
					<OnchainKitProvider
						apiKey={NEXT_PUBLIC_CDP_API_KEY}
						chain={base}>
						{children}
					</OnchainKitProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default OnchainProviders;
