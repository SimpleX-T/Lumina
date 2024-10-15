"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import LandingPage from "./(pages)/LandingPage/page";

function App() {
	const account = useAccount();
	const { connectors, connect, status, error } = useConnect();
	const { disconnect } = useDisconnect();

	return (
		<>
			<LandingPage />
		</>
	);
}

export default App;
