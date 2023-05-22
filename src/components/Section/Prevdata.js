import React from "react";

const Prevdata = ({ prevUser }) => {
  console.log(prevUser);
  return (
    <tbody>
      {prevUser.slice().map((row, index) => (
        <tr key={index}>
          {row.map((cell, index) => (
            <td key={index}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Prevdata;
