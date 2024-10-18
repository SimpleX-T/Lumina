import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import {
	coinbaseWallet,
	injected,
	metaMask,
	walletConnect,
} from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || "";

export function getConfig() {
	return createConfig({
		chains: [mainnet, sepolia],
		connectors: [
			injected(),
			coinbaseWallet(),
			walletConnect({ projectId }),
			metaMask(),
		],
		storage: createStorage({
			storage: cookieStorage,
		}),
		ssr: true,
		transports: {
			[mainnet.id]: http(),
			[sepolia.id]: http(),
		},
	});
}

declare module "wagmi" {
	interface Register {
		config: ReturnType<typeof getConfig>;
	}
}
