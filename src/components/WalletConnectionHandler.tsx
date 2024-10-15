import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

export function WalletConnectionHandler() {
	const { isConnected } = useAccount();
	const router = useRouter();

	useEffect(() => {
		if (!isConnected) {
			router.push("/");
		}
	}, [isConnected, router]);

	return null;
}
