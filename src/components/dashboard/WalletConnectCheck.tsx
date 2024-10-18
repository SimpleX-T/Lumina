"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";

function WalletConnectCheck() {
	const { isConnected } = useAccount();

	useEffect(() => {
		if (!isConnected) {
			window.location.href = "/";
		}
	}, [isConnected]);

	return null;
}

export default WalletConnectCheck;
