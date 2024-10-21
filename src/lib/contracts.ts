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
// var contract = require("@truffle/contract");

// declare global {
// 	interface Window {
// 		ethereum?: any;
// 		web3: Web3;
// 	}
// }

const contractAddress = "0x09AA30B2014b7ED813c18564159919de06670867";
// const NFTContract = contract(nftABI);

// export async function nftContract() {
// 	await loadWeb3();
// 	const addressAccount = await loadAccount();
// 	await loadContract(addressAccount);
// }

// async function loadContract(addressAccount: string) {
// 	const theContract = contract(nftABI);
// 	theContract.setProvider(window.web3.eth.currentProvider);
// 	const reward = await theContract.deployed();
// 	console.log(reward);
// }

// async function loadAccount() {
// 	const addressAccount = await window.web3.eth.getCoinbase();
// 	console.log(addressAccount);
// 	return addressAccount;
// }

// export async function loginNFT(wallet_address: string) {
// 	await loadWeb3();
// 	NFTContract.setProvider(
// 		"https://mainnet.infura.io/v3/d62957f6dfa148479911baa98f51d59d"
// 	);

// 	try {
//         const instance = await NFTContract.at(contractAddress);
//         console.log(instance)
// 		const receipt = await instance.login({from: wallet_address});
// 		console.log("Login successful, NFT minted:", receipt);
// 	} catch (err) {
// 		console.error("Error during login:", err);
// 	}
// }

// async function loadWeb3() {
// 	// Modern dapp browsers...
// 	if (window.ethereum) {
// 		window.web3 = new Web3(window.ethereum);
// 		try {
// 			// Request account access if needed
// 			await window.ethereum.enable();
// 			// Acccounts now exposed
// 			window.web3.eth.sendTransaction({
// 				/* ... */
// 			});
// 		} catch (error) {
// 			// User denied account access...
// 		}
// 	}
// 	// Legacy dapp browsers...
// 	else if (window.web3) {
// 		window.web3 = new Web3(window.web3.currentProvider);
// 		// Acccounts always exposed
// 		window.web3.eth.sendTransaction({
// 			/* ... */
// 		});
// 	}
// 	// Non-dapp browsers...
// 	else {
// 		console.log(
// 			"Non-Ethereum browser detected. You should consider trying MetaMask!"
// 		);
// 	}
// }

const web3 = new Web3(window.ethereum);

async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

const contract = new web3.eth.Contract(nftABI, contractAddress);

async function mintNFT() {
  const accounts = await web3.eth.getAccounts();
  const userAddress = accounts[0];

  try {
    const receipt = await contract.methods.login().send({ from: userAddress });
    console.log("NFT Minted:", receipt);
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
}

async function claimTokens() {
  const accounts = await web3.eth.getAccounts();
  const userAddress = accounts[0];

  try {
    const receipt = await contract.methods
      .claimTokens()
      .send({ from: userAddress });
    console.log("Tokens Claimed:", receipt);
  } catch (error) {
    console.error("Error claiming tokens:", error);
  }
}

async function gainXP() {
  const accounts = await web3.eth.getAccounts();
  const userAddress = accounts[0];

  try {
    const receipt = await contract.methods.gainXP().send({ from: userAddress });
    console.log("XP Gained:", receipt);
  } catch (error) {
    console.error("Error gaining XP:", error);
  }
}

// // Example usage
// connectWallet().then(() => {
//   mintNFT();
// });
export default mintNFT;
