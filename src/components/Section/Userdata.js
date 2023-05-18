import React from "react";

function Userdata({ users }) {
  const {
    0: AadharNumber,
    1: DaagNumber,
    2: District,
    3: Block,
    4: TotalSizeOfLand,
    5: NameOfTheOwner,
    6: PhoneNumber,
  } = users;
  // console.log(users);
  return (
    <tr>
      <td>{AadharNumber}</td>
      <td>{DaagNumber}</td>
      <td>{District}</td>
      <td>{Block}</td>
      <td>{TotalSizeOfLand}</td>
      <td>{NameOfTheOwner}</td>
      <td>{PhoneNumber}</td>
    </tr>
  );
}

export default Userdata;
