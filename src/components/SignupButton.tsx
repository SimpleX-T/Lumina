'use client';
import WalletWrapper from './WalletWrapper';

export default function SignupButton() {
  return (
    <WalletWrapper
      className="ockConnectWallet_Container min-w-[90px] shrink bg-secondary-100 transition duration-300 ease-out text-[#030712] hover:bg-blue-300"
      text="Sign up"
    />
  );
}
