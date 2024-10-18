"use client";
import WalletWrapper from "./WalletWrapper";

export default function LoginButton() {
	return (
		<WalletWrapper
			className='min-w-[90px] border border-gray-700 rounded-lg'
			text='Log in'
		/>
	);
}
