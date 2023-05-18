import React from "react";

function Userdata({ users }) {
  return (
    <div>
      {users.map((currUsers) => {
        const {
          AadharNumber,
          DaagNumber,
          District,
          Block,
          TotalSizeOfLand,
          NameOfTheOwner,
          PhoneNumber,
        } = currUsers;

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
      })}
    </div>
  );
}

export default Userdata;
