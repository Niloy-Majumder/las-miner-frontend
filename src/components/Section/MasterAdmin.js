import React from "react";
import Items from "./Items";

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
  return (
    <div className={"items-list"}>
      <div className={"items-list--wrapper"}>
        <Items data={items[0]} routeToGo={"/addAdmin"}></Items>
      </div>
    </div>
  );
}

export default MasterAdmin;
