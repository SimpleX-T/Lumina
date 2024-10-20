import nftABI from "@/smart_contract/ContractABI.json";
import Web3 from "web3";
var contract = require("@truffle/contract");

declare global {
	interface Window {
		ethereum?: any;
		web3: Web3;
	}
}

const contractAddress = "0x09aa30b2014b7ed813c18564159919de06670867";
const NFTContract = contract(nftABI);

export async function nftContract() {
	await loadWeb3();
	NFTContract.setProvider(window.web3.eth.currentProvider);

	return NFTContract;
}

const loadAccount = async () => {
	const addressAccount = await window.web3.eth.getCoinbase();
	console.log(addressAccount);
	return addressAccount;
};

export async function loginNFT(wallet_address: string) {
	await loadWeb3();
	NFTContract.setProvider(window.web3.eth.currentProvider);

	try {
		const instance = await NFTContract.at(contractAddress);
		const receipt = await instance.login({from: wallet_address});
		console.log("Login successful, NFT minted:", receipt);
	} catch (err) {
		console.error("Error during login:", err);
	}
}

const loadWeb3 = async () => {
	// Modern dapp browsers...
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		try {
			// Request account access if needed
			await window.ethereum.enable();
			// Acccounts now exposed
			window.web3.eth.sendTransaction({
				/* ... */
			});
		} catch (error) {
			// User denied account access...
		}
	}
	// Legacy dapp browsers...
	else if (window.web3) {
		window.web3 = new Web3(window.web3.currentProvider);
		// Acccounts always exposed
		window.web3.eth.sendTransaction({
			/* ... */
		});
	}
	// Non-dapp browsers...
	else {
		console.log(
			"Non-Ethereum browser detected. You should consider trying MetaMask!"
		);
	}
};
