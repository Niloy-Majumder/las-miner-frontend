import React from "react";
import Items from "./Items";

const items = [
  {
    id: 0,
    title: "Add Land Details",
    thumbnail: "landAdd.jpeg",
    details:
      "Add land details to blockchain to transform land management and create a more transparent, secure, and efficient framework for recording and managing land ownership. By leveraging blockchain technology, the project aims to overcome traditional challenges, promote trust and inclusivity, streamline processes, and enhance land governance",
  },
  {
    id: 1,
    title: "Transfer Land",
    thumbnail: "landTransfer.cms",
    details:
      "Transfer land and update it's details to blockchain to transform land management and create a more transparent, secure, and efficient framework for recording and managing land ownership. By leveraging blockchain technology, the project aims to overcome traditional challenges, promote trust and inclusivity, streamline processes, and enhance land governance",
  },
];

function Services(props) {
  return (
    <div className={"items-list"}>
      <div className={"items-list--wrapper"}>
        <Items data={items[0]} routeToGo={"/add"}></Items>

        <Items data={items[1]} routeToGo={"/transferLand"}></Items>
      </div>
    </div>
  );
}

export default Services;
