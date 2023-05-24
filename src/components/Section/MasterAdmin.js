import React, { useEffect, useState } from "react";
import Items from "./Items";
import Web3 from "web3";
import ABI from "../../web3/ABIArray";
import contractAddress from "../../web3/contractAddress";
import { getaccount } from "../../web3/connectwallet";
const items = [
  {
    id: 0,
    title: "Admin Registration",
    thumbnail: "adminRegistration.jpg",
    details:
      "In a land registration system using blockchain, a master admin refers to the highest level of administrative authority within the system. The master admin typically has privileged access rights and is responsible for overseeing and managing the overall operation and configuration of the system.",
  },
];

function MasterAdmin() {
  // const [web3, setWeb3] = useState("");
  const [isMasterAdmin, setIsMasterAdmin] = useState(false);

  const getAccount = async () => {
    return await getaccount();
  };
  const showMasterAdmin = async () => {
    let account = await getAccount();
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ABI, contractAddress);
    let owner = await contract.methods.owner().call();
    if (owner.toLowerCase() === account.toLowerCase()) {
      setIsMasterAdmin(true);
    }
  };
  useEffect(() => {
    showMasterAdmin();
    // console.log(isMasterAdmin());
  }, []);

  // const isMasterAdmin = async () => {
  //   const contract = await new web3.eth.Contract(ABI, contractAddress);
  //   let owner = await contract.methods.owner().call();
  //   if (account === owner) return true;
  //   return false;
  // };

  return (
    <div className={"items-list"}>
      <div className={"items-list--wrapper"}>
        {isMasterAdmin ? (
          <Items
            data={items[0]}
            routeToGo={"/addAdmin"}
            masterAdmin={true}></Items>
        ) : (
          <h1>Not Master Admin</h1>
        )}
      </div>
    </div>
  );
}

export default MasterAdmin;
