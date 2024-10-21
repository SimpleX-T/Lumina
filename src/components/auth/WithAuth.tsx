"use client";

import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";
import { useAccount } from "wagmi";

export function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
	return function WalletProtectedRoute(
		props: P & { children?: React.ReactNode }
	) {
		const router = useRouter();
		const { isConnected } = useAccount();

		useEffect(() => {
			if (!isConnected) {
				router.push("/");
			}
		}, [isConnected, router]);

		if (!isConnected) {
			return null;
		}

		return <WrappedComponent {...props} />;
	};
}
