import Web3 from "web3";

// Create a new Web3 instance
let web3 = new Web3(window.ethereum);

let accounts;

const connectwallet = async () => {
  // Request access to the user's MetaMask accounts
  //await window.ethereum.enable();

  if (typeof window.ethereum !== "undefined") {
    try {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      web3 = new Web3(window.ethereum);
    } catch (error) {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log("Permissions needed to continue.");
      } else {
        console.error(error.message);
      }
    }
  } else {
    console.log("Error: Need to install MetaMask");
  }
};

// async function enableDapp() {

// }
