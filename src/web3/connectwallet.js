const getaccount = async () => {
  // Request access to the user's MetaMask accounts
  //await window.ethereum.enable();

  if (typeof window.ethereum !== "undefined") {
    try {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
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

export { getaccount };
