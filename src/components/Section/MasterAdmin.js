import React from "react";
import Items from "./Items";

const items = [
  {
    id: 0,
    title: "Admin Registration",
    thumbnail: "adminRegistration.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec",
  },
];

function MasterAdmin() {
  return (
    <div className={"items-list"}>
      <div className={"items-list--wrapper"}>
        <Items data={items[0]}></Items>
      </div>
    </div>
  );
}

export default MasterAdmin;
