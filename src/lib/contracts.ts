// import nftABI from "@/smart_contract/ContractABI.json";
// import Web3 from "web3";
// var contract = require("@truffle/contract");

// // declare global {
// // 	interface Window {
// // 		ethereum?: any;
// // 		web3: Web3;
// // 	}
// // }

// export async function load() {
// 	await loadWeb3();
// 	const addressAccount = await loadAccount();
// 	loadContract(addressAccount);
// }

// const loadContract = async (addressAccount: string) => {
// 	const theContract = contract(nftABI);
// 	theContract.setProvider(window.web3.eth.currentProvider);
// 	const reward = await theContract.deployed();

// // 	console.log(reward);
// // };

// // const loadAccount = async () => {
// // 	const addressAccount = await window.web3.eth.getCoinbase();
// // 	console.log(addressAccount);
// // 	return addressAccount;
// // };

// // const loadWeb3 = async () => {
// // 	// Modern dapp browsers...
// // 	if (window.ethereum) {
// // 		window.web3 = new Web3(window.ethereum);
// // 		try {
// // 			// Request account access if needed
// // 			await window.ethereum.enable();
// // 			// Acccounts now exposed
// // 			window.web3.eth.sendTransaction({
// // 				/* ... */
// // 			});
// // 		} catch (error) {
// // 			// User denied account access...
// // 		}
// // 	}
// // 	// Legacy dapp browsers...
// // 	else if (window.web3) {
// // 		window.web3 = new Web3(window.web3.currentProvider);
// // 		// Acccounts always exposed
// // 		window.web3.eth.sendTransaction({
// // 			/* ... */
// // 		});
// // 	}
// // 	// Non-dapp browsers...
// // 	else {
// // 		console.log(
// // 			"Non-Ethereum browser detected. You should consider trying MetaMask!"
// // 		);
// // 	}
// // };

import nftABI from "@/smart_contract/ContractABI.json";
import Web3 from "web3";
var contract = require("@truffle/contract");

declare global {
	interface Window {
		ethereum?: any;
		web3: Web3;
	}
}

export async function load() {
	await loadWeb3();
	const addressAccount = await loadAccount();
	await loadContract(addressAccount);
}

async function loadContract(addressAccount: string) {
	const theContract = contract(nftABI);
	theContract.setProvider(window.web3.eth.currentProvider);
	const reward = await theContract.deployed();
	console.log(reward);
}

async function loadAccount() {
	const addressAccount = await window.web3.eth.getCoinbase();
	console.log(addressAccount);
	return addressAccount;
}

async function loadWeb3() {
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
}
